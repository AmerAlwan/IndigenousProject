import logo from './logo.svg';
import Routes from './Routes';
import NavBar from './components/NavBar';
import './App.css';

function App() {
document.body.style.backgroundColor = "#212529";
    document.body.style.color = "grey";
  return (
    <div>
        <NavBar/>
        <Routes/>
    </div>
  );
}

export default App;
