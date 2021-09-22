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
> Bisa di lihat path `/` yang harusnya hanya untuk `Home` tetap terpanggil
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