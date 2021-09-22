# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Install Dependencies

> Install with `npm` : `npm install react-router-dom`

#### PART Pages

> 1. Create a new directory `template` in `pages` directory
> 2. Create file `Navigation.js` in `template` directory
> 3. Create file `Footer.js` in `template` directory
> 4. Create file `Home` in `pages` directory

#### Hands On

Open `Navigation.js` and then adding script like this:
```js
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Book-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Book</Nav.Link>
            <Nav.Link href="#pricing">Member</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation;
```

Open `Home.js` and then adding script like this
```js
const Home = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Selamat Datang</h1>
          <p className="lead text-muted">Di Book-Shop. Happy Shopping :)</p>
        </div>
      </div>
    </section>
  )
}

export default Home;
```


Open `App.js` and then modify like this
```js
import Navigation from "./pages/template/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from "./components/book/Books";
import Members from "./components/member/Members";
import Home from "./pages/Home";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/member" component={Members} />
    </Router>
  );
}

export default App;

```

> Silahkan coba akses path url misalnya : `localhost:3000/books` atau `localhost:3000/members`
>
> Bisa di lihat path `/` yang harusnya hanya untuk `Home` tetap terpanggil karena di react semua yang ada/mengandung `/` akan tetep di load
>
> Solusinya adalah dengan menambahkan `Switch` dan pada path `/` menjadi `exact path="/"`

Open `App.js` and then modify
```js
<Router>
  <Navigation />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/books" component={Books} />
    <Route path="/member" component={Members} />
  </Switch>
</Router>
```

> Maksud dari `exact` ini adalah agar lebih spesifik, contoh di atas `exact` kita taruh di path `/`
>
> Maka ketika kita mengakses path `/books` component `Home` tidak akan ikut
>
> Lalu apa itu `Switch`, ini digunakan ketika path kita memiliki sebuah `parameter` misalnya `/books/:id` atau `/books?id=1` dia akan lebih spesifik memilih path yang tepat
>
> Contoh akan kita terapkan di part selanjutnya

Open `Navigation.js` and the modify
```js
const Navigation = () => {

  const navStyle = {
    color: '#8c8f91',
    textDecoration: 'none'
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Book-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={navStyle}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/books" style={navStyle}>Books</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/members" style={navStyle}>Members</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation;
```

##### Part Path Params

Open `BookList.js` and then adding script this in `return`
```js
key={book.id}
bookId={book.id}
```

Open `BookComponent.js` and then modify script `Button` to
```js
<Link to={`/books/${bookId}`} className="btn btn-primary">Detail</Link>
```

Now, create file `BookDetail.js` in `book` component and then add script like this
```js
const BookDetail = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h3>Book Detail Page</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetail;
```

Open again `App.js` and modify
```js
<Router>
  <Navigation />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/books" exact component={Books} />
    <Route path="/books/:id" component={BookDetail} />
    <Route path="/members" component={Members} />
  </Switch>
</Router>
```

> Apapun itu jika path patternnya ada yang sama maka gunakan `exact`

Now, how to get param from path ? in react we can use `match` put it like `props`

Open `BookDetail.js` and then modify
```js
const BookDetail = ({ match }) => {

  console.log(match);
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h3>Book Detail Page By Id {match.params.id}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetail;
```

#### PART Book Component

Open `Books.js` and modify 
```js
const Books = ({ match }) => {
  const { path } = match
  return (
    <Switch>
      <Route exact path={path} component={BookList} />
      <Route path={`${path}/add`} component={BookForm} />
    </Switch>
  )
}

export default Books;
```

Open `App.js` and then modify 
```js
<Router>
  <Navigation />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/books" exact component={Books} />
    <Route path="/books/add" exact component={BookForm} />
    <Route path="/books/:id" component={BookDetail} />
    <Route path="/members" component={Members} />
  </Switch>
</Router>
```

Open `BookList.js` and then modify
```js
const BookList = ({ match }) => {

  const { path } = match

  const [getBooks, setBooks] = useState([
    {
      id: 1,
      title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
      description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
      image: 'https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg'
    }
  ]);

  return (
    <Container>
      <h3 className="mt-5">Book Page</h3>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
      <Row>
        {
          getBooks.map((book) => (
            <BookComponent
              key={book.id}
              bookId={book.id}
              title={book.title}
              description={book.description}
              image={book.image}
              variant="primary" />
          ))
        }
        {
          getBooks && !getBooks.length && <h4>No Book Display</h4>
        }
      </Row>
    </Container>
  );
}

export default BookList;
```

Open `BookForm.js` and then modify 
```js
const BookForm = (props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      image: image
    }
    props.onCreateBook(newBook);
    setTitle('')
    setDescription('')
    setImage('')
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={8}>
          <h3>BookForm components</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description book"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              // eslint-disable-next-line no-sequences
              disabled={!title, !description, !image}
            >
              Save
            </Button>
            <Link to="/books" className="btn btn-warning mx-2">Cancel</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default BookForm;
```

#### PART Hands On

> Silahkan buat page untuk yang `member` sama seperti `book` yang sudah di buat 