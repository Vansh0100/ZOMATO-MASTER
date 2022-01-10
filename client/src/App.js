import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Redirect} from "react-router-dom"
// Importing HOC
import DefaultHoc from './HOC/default.hoc';


// Importing Pages
import Homepage from './Pages/Homepage';


// Importing HOC
import DefaultHoc from './HOC/default.hoc';


// Importing Pages
import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
    <Redirect from="/" to="/delivery"/>
    <DefaultHoc path="/:type" exact  component={Homepage} />
    </>
  );
}

export default App;
