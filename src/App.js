import './App.css';
import productosInfo from './productosInfo'

import Tarjeta from './components/Tarjeta';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="container">
        {productosInfo.map(producto => (
          <Tarjeta
            key={Math.random() * 1000}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion} 
            img={producto.img}
          />
        ))}
      </main>
    </div>
  ); 
}

export default App;
