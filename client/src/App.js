import './App.css';

// Importing HOC
import DefaultHoc from './HOC/default.hoc';


// Importing Pages
import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
    <DefaultHoc path="/" exact  component={Homepage} />
    </>
  );
}

export default App;
