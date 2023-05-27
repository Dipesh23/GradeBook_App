import logo from './logo.svg';
import './App.css';
import FetchJson from './components/FetchJson'
import Table from './components/Table';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    {/* <FetchJson/> */}
    <Header/>
    <Table/>
    <Footer/>
    </div>
  );
}

export default App;
