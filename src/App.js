import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Links />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
