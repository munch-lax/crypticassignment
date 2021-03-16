import{BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <BrowserRouter >
    <Route exact path='/' component={Home}/>
    <Route exact path='/converter'component={CurrencyConverter}/>
      
    </BrowserRouter>
  );
}

export default App;
