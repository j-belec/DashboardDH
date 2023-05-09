import "./App.css";
import TotalProducts from "./components/totales/TotalProducts";
import TotalUsers from "./components/totales/TotalUsers";
import TotalCategories from "./components/totales/TotalCategories";
import ListadoProducts from "./components/listado/ListadoProducts";

function App() {
  return (
    <main>
      <div className="container">
        <TotalProducts />
        <TotalUsers />
        <TotalCategories />
        <div className="listado-productos">
          <ListadoProducts />
        </div>
      </div>
    </main>
  );
}

export default App;
