import { Route, Switch } from 'react-router';
import BookForm from './BookForm';
import BookList from './BookList'

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