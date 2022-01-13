import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import UserComponent from "./components/ProductComponent";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Jewellery from "./pages/Jewellery";
import ProfilePage from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Shopping_cart from "./pages/Shopping_cart";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/about" exact component={About} />
      </Switch>
      <Switch>
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <Switch>
        <Route path="/jewellery" exact component={Jewellery} />
      </Switch>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
      <Switch>
        <Route path="/shopping_cart" exact component={Shopping_cart} />
      </Switch>
    </Router>
  );
}

export default App;
