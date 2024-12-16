import { useEffect, useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { CartReducer, initialState } from "./reducers/cart-reducers";

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("guitars", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {state.data.map((guitar: Guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
