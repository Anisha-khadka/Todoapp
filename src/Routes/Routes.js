import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Mainpage from "../Pages/Mainpage";
import AddToDo from "../Pages/AddToDo";
import Viewpage from "../Pages/Viewpage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={Mainpage} exact />
      <Route path="/add" component={AddToDo} exact/>
      <Route path="/view/:id" component={Viewpage}exact/>
    </>
  );
};
export default Routes;
