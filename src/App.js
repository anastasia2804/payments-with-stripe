import './App.css';
import StripeContainer from './components/StripeContainer';
import product from "./assets/pillow-covers.jpg";
import { useState } from 'react';

function App() {

  const [showItem, setShowItem] = useState(false)

  return (
    <div className="App">
     <h1>Boho Design Store</h1>
     {showItem ? <StripeContainer /> : <> <h3>$10.00</h3> <img src={product} alt="pillow-covers" height={500}/>
     <button onClick={()=> setShowItem(true)}>Purchase item</button>
     </>}
    </div>
  );
}

export default App;
