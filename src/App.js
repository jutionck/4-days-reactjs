import Navigation from "./pages/template/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from "./components/book/Books";
import Members from "./components/member/Members";
import Home from "./pages/Home";
import BookDetail from "./components/book/BookDetail";
import BookForm from "./components/book/BookForm";


const App = () => {
  return (
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
  );
}

export default App;