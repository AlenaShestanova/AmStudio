
import Header from "./Components/Header";
import Main from './Components/Main'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from "./Components/Footer";

function App() {
  return (
      <>
        <BrowserRouter>
          <Header/>
          <Switch>
              <Route component={Main} path='/' exact></Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
        </>

  );
}

export default App;
