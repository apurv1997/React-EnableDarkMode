import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms'
import About from './components/About'

function App() {
  return (
<>
<Navbar title = "TextUtils" aboutText = "AboutText"/>
{/* <Navbar /> */}
{/* <div className="container my-3">
<TextForms heading = "Enter the text to analyze"/>
</div> */}
<About/>
</>
  );
}

export default App;

