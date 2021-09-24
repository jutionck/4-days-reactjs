import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './template/Navigation'
import Home from './Home'
import BookList from '../components/book/BookList'
import BookDetail from '../components/book/BookDetail'
import BookForm from '../components/book/BookForm'
import Members from '../components/member/Members'
import Footer from './template/Footer'

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookList} />
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/books/edit/:id" exact component={BookForm} />
          <Route path="/books/:id" exact component={BookDetail} />
          <Route path="/members" exact component={Members} />
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
