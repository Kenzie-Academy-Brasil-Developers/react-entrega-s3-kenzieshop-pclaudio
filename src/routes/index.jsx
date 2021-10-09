import { Route, Switch } from "react-router";
import Display from "../pages/Display";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Display} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
