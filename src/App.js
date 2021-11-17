
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllApartments from './Pages/AllApartments/AllApartments/AllApartments';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import TakeSchedule from './Pages/Shared/TakeSchedule/TakeSchedule/TakeSchedule';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allApartments">
              <AllApartments></AllApartments>
            </Route>
            <PrivateRoute path="/takeSchedule/:id">
              <TakeSchedule></TakeSchedule>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
