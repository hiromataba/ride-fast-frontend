import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/HomePage/Login';
import SignUp from './components/HomePage/SignUp';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
