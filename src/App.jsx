import "./App.css";
import "./listado.css";
import TotalProducts from "./components/totales/TotalProducts";
import TotalUsers from "./components/totales/TotalUsers";
import TotalCategories from "./components/totales/TotalCategories";
import ListadoProducts from "./components/listado/ListadoProducts";
import AmountsByCategory from "./components/totales/AmountByCategories";


function App() {
  return (
    <main>
      <div className="container">
        <TotalProducts />
        <TotalUsers />
        <TotalCategories />

        <div className="listado-productos">
          <div className="productos">
            <ListadoProducts />
          </div>

        </div>

        <div className="">
          <AmountsByCategory />
        </div>

      </div>
    </main>
  );
}

export default App;
