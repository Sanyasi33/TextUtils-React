import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //This is for bootstrap css 
import Navbar from './components/Navbar';       //This is for customized Navbar
import TextForm from './components/TextForm';   //This is for customized TextForm

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "Developed by Mr. Sahu"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
