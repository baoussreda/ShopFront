import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams } from 'react-router-dom';
import { Login}  from './pages';
import { Home } from './pages';
import { Header} from './components'

function App() {
  return <Router>           
            <div>
              <Header />
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        </Router>
   
}

export default App;