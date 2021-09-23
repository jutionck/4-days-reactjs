import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookDetail from '../components/book/BookDetail'
import BookForm from '../components/book/BookForm'
import Books from '../components/book/Books'
import Members from '../components/member/Members'
import Home from './Home'
import Footer from './template/Footer'
import Navigation from './template/Navigation'

const Routing = () => {
  return (
    <Router>
      <Navigation />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/books/edit/:id" exact component={BookForm} />
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/members" component={Members} />
        </Switch>
      </section>
      <Footer />
    </Router>
  )
}

export default Routing
