
import './App.css';
import { Home } from './home/inputt';

import { About } from './components/About';
import logoEMI from './images/logo EMI.png';

function App() {
  return (
    
    <div className="container">
      
    <form className="bg-opacity-30 bg-white p-30 h-1280 rounded-20 border-l-1 border-t-1 backdrop-blur-10 shadow-20-20-40--6 text-center w-500">
      <nav><img src={logoEMI} alt="" /></nav>
      <Home/>
     
      
    </form>

    
  </div>
  );
}

export default App;
