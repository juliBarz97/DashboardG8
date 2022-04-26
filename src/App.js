import logo from './logo.svg';
import './App.css';
import Prodcuts from './components/Products';
import Users from  './components/Users';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App">
      <div className="contenedorEstadistica">
        <Prodcuts msg="hola que talaaaasss"></Prodcuts>
      </div>
      <div className="contenedorEstadistica">
        <Users></Users>
      </div>
      <div className="contenedorEstadistica">
        <Categories/>
      </div>
    </div>
  );
}

export default App;
