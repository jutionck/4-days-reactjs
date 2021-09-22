import Navigation from "./pages/template/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from "./components/book/Books";
import Members from "./components/member/Members";
import Home from "./pages/Home";


const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/member" component={Members} />
      </Switch>
    </Router>
  );
}

export default App;