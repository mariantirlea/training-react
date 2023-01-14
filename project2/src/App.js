import { Component } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import PageNotFound from "./pages/PageNotFound";
import { initUserData } from "./redux/actions/user.actions";
import { connect } from "react-redux";

class App extends Component {

  componentDidMount() {
    this.props.initData();
  }

  render(){
    return (
      <>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/category/:categoryName" component={Category}></Route>
        <Route path="/products/:categoryName/:productId" component={Product}></Route>

        <Route component={PageNotFound}></Route>
      </Switch>
      </>
    );
  }

}

function mapDispatchToProps(dispatch){
  return {
    initData: () => dispatch(initUserData())
  }
}

export default connect(null, mapDispatchToProps)(App);
