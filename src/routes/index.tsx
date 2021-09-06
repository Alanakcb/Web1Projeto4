import { Switch, Route } from "react-router-dom";
import { Home, Adidas, Botas, Cadastro, Lazer, Nike, Sport } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/adidas" exact component={Adidas} />
      <Route path="/botas" exact component={Botas} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/lazer" exact component={Lazer} />
      <Route path="/nike" exact component={Nike} />
      <Route path="/sport" exact component={Sport} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;