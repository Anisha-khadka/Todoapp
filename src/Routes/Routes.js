import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Mainpage from "../Pages/Mainpage";
import AddToDo from "../Pages/AddToDo";

const Routes = () => {
  return (
    <>
      <Route path="/" component={Mainpage} exact />
      <Route path="/add" component={AddToDo} />
    </>
  );
};
export default Routes;
