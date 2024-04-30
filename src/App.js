

import { BrowserRouter,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import '../src/style.css'
import Routes from './Routes/Routes';

function App() {
  return (
  <>
   <BrowserRouter>
   <Switch>
    <Routes/>
   </Switch>
   </BrowserRouter>
  </>
  );
}

export default App;
