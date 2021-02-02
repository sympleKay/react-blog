import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddBlog from './AddBlog';
import BlogDetails from './BlogDetails';
import Error404 from './Error404';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path="/add">
              <AddBlog />
            </Route>
            <Route path="/blogpost/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
