import { BrowserRouter } from 'react-router-dom';
import  Footer  from '../components/footer/Footer';
import  Header  from '../components/header/Header';
import  Routes  from './main-routes';
import './style.css';

function App() {
  return (
    <BrowserRouter>
    <div id="site-content">
      <Header />
      <Routes />
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
