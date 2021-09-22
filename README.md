# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Install Dependencies

> Install with `npm` : `npm install axios`

#### PART Proxy

Open `package.json` and adding script below
```json
"proxy": "http://localhost:8080"
```

#### PART HTTP

> 1. Create file `httpCommon.js` in `api` directory
> 2. Create file `bookService.js` in `api` directory

Open `httpCommon.js` and then modify
```js
import axios from "axios";

export default axios.create({
  headers: {
    "Content-type": "application/json",
  }
});
```

Open `bookService.js` and then modify
```js
import http from "./httpCommon";

const baseUrl = '/books';

const getListBook = () => {
  return http.get(`${baseUrl}`)
}

const createBook = params => {
  console.log(params)
  return http.post(`${baseUrl}`, params)
}

const getBookById = id => {
  return http.get(`${baseUrl}/${id}`)
}

const updateBook = (params) => {
  return http.put(`${baseUrl}`, params)
}

const deleteBook = id => {
  console.log("service", id)
  return http.delete(`${baseUrl}/${id}`)
}

export { getListBook, createBook, getBookById, updateBook, deleteBook };
```

Open `validationSchema.js` and then modify like this
```js
import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .min(6, 'title must be at least 6 characters'),
  description: yup.string()
    .required('Description is required')
    .min(10, 'description must be at least 10 characters'),
  year: yup.number()
    .required('Year is required')
    .min(4, 'year must be at max 4 characters'),
  page: yup.number()
    .required('Pages is required')
    .min(1, 'pages must be at min 0 pages'),
  language: yup.string()
    .required('language is required'),
  publisher: yup.string()
    .required('publisher is required'),
  price: yup.number()
    .required('price is require')
    .min(0, 'price can not be 0'),
  stock: yup.number()
    .required('stock is require')
    .min(0, 'stock can not be 0')
});
```

Open `App.js` and modify
```js
<Router>
  <Navigation />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/books" exact component={Books} />
    <Route path="/books/add" exact component={BookForm} />
    <Route path="/books/edit/:id" exact component={BookForm} />
    <Route path="/books/:id" component={BookDetail} />
    <Route path="/members" component={Members} />
  </Switch>
</Router>
```

Open `BookList.js` and modify
```js
const BookList = ({ match }) => {

  const { path } = match;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getListBook()
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container>
      <h3 className="mt-5">Book Page</h3>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
      <Row>
        {
          books && books.map((book) => (
            <BookComponent
              key={book.id}
              bookId={book.id}
              title={book.title}
              description={book.description}
              price={book.price}
              variant="primary" />
          ))
        }
        {
          books && !books.length && <h4>No Book Display</h4>
        }
      </Row>
    </Container>
  );
}
```

Open `BookComponent.js` and modify
```js
const BookComponent = ({ bookId, title, description, price }) => {
  return (
    <Col lg={4} md={6}>
      <Card className="book-card mb-3">
        <Card.Img variant="top" className="book-img" src="https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg" />
        <Card.Body className="book-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/books/${bookId}`} className="btn btn-sm btn-outline-secondary">Detail</Link>
              <Link to={`/books/edit/${bookId}`} className="btn btn-sm btn-outline-secondary">Update</Link>
            </div>
            <small className="text-muted">Rp. {price}</small>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
```

Open `BookDetail.js` and modify
```js
const BookDetail = ({ match }) => {
  const { id } = match.params;

  const [book, setBooks] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getBookById(id)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h3>Book Detail </h3>
          <div className="card shadow h-100 py-2">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <Image src="https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg" fluid />
                </div>
                <div className="col-md-9">
                  <h4>{book.title}</h4>
                  <hr />
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="mb-0 font-weight-bold text-gray-800">
                        Rp.{book.price}
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="btn-group float-right">
                        <button type="submit" className="card-link btn btn-sm btn-primary"><i className="fas fa-shopping-basket"></i> Beli</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-8">
                      <p className="card-text text-justify">
                        <strong>
                          Deskripsi
                        </strong> <br /><br />
                        {book.description}</p>
                    </div>
                    <div className="col-md-4">
                      <strong>
                        Detail
                      </strong> <br /><br />
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="mb-0 font-weight-bold text-gray-800">
                            Jumlah Halaman
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="btn-group float-right">
                            {book.pages}                      </div>
                        </div>
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="mb-0 font-weight-bold text-gray-800">
                            Tahun Terbit
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="btn-group float-right">
                            {book.year}                      </div>
                        </div>
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="mb-0 font-weight-bold text-gray-800">
                            Bahasa
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="btn-group float-right">
                            {book.languages}                      </div>
                        </div>
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="mb-0 font-weight-bold text-gray-800">
                            Penerbit
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="btn-group float-right">

                            {book.publisher}                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BookDetail;
```

Open `BookForm.js` and modify
```js
const BookForm = ({ history, match }) => {

  const { id } = match.params;
  const isAddMode = !id;
  const [book, setBook] = useState({})

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => {
    console.log('data', data)
    return isAddMode ? insert(data) : update(data)
  }

  const insert = (data) => {
    console.log(data)
    return createBook(data)
      .then((res) => {
        console.log('Book added', res)
        history.push('.');
      })
  }

  const update = (data) => {
    return updateBook(data)
      .then((res) => {
        console.log('Book updated')
        history.push('..');
      })
  }

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      getBookById(id).then(res => {
        let book = res.data
        const fields = ['id', 'title', 'description', 'year', 'page', 'language',
          'publisher', 'price', 'stock'];
        fields.forEach(field => setValue(field, book[field]));
        setBook(book);
      });
    }
  }, []);


  return (
    <Container>
      <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
        <h3 className="mt-5">{isAddMode ? 'Add Book' : 'Edit Book'}</h3>
        <div style={{ textAlign: "left" }} className="mb-5">
          <Form.Group as={Row} className="mb-3" controlId="formBasicTitle">
            <Form.Control
              type="hidden"
              placeholder="Enter title"
              name="id"
              {...register("id")}
            />
            <Form.Label column sm="2">Title</Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              // onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.title?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicDescription">
            <Form.Label column sm="2">Description</Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                {...register("description")} className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.description?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicYear">
            <Form.Label column sm="2">Year</Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                placeholder="Enter Year"
                name="year"
                {...register("year")} className={`form-control ${errors.year ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.year?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicPages">
            <Form.Label column sm="2">Pages</Form.Label>
            <Col sm="3">
              <Form.Control
                type="number"
                placeholder="Enter Pages"
                name="page"
                {...register("page")} className={`form-control ${errors.page ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.page?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicLanguage">
            <Form.Label column sm="2">Language</Form.Label>
            <Col sm="3">
              <Form.Control
                type="text"
                placeholder="Enter Language"
                name="language"
                {...register("language")} className={`form-control ${errors.language ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.language?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicPublisher">
            <Form.Label column sm="2">Publisher</Form.Label>
            <Col sm="3">
              <Form.Control
                type="text"
                placeholder="Enter Publisher"
                name="publisher"
                {...register("publisher")} className={`form-control ${errors.publisher ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.publisher?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicPrice">
            <Form.Label column sm="2">Price</Form.Label>
            <Col sm="3">
              <Form.Control
                type="number"
                placeholder="Rp-,"
                name="price"
                {...register("price")} className={`form-control ${errors.price ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.price?.message}</div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicStock">
            <Form.Label column sm="2">Stock</Form.Label>
            <Col sm="3">
              <Form.Control
                type="number"
                placeholder="0"
                name="stock"
                {...register("stock")} className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.stock?.message}</div>
            </Col>
          </Form.Group>
        </div>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-success"
          >
            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
            Save
          </Button>
          <Link to={isAddMode ? '.' : '..'} className="btn btn-warning mx-2">Cancel</Link>
        </Form.Group>
      </Form>
    </Container>
  )
}
```

#### PART Hands On

> Buat hal yang sama seperti `book` untuk yang `member`