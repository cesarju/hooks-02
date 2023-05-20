import HijiHijo from "./HijoHijo";
import { Contador } from "../contexto";
import { useState } from "react";

export default function Hijo() {
  const [cont, setCont] = useState(0);
  return (
    <div>
      <h1>Soy un hijo </h1>
      <Contador.Provider value={cont}>
        <h1>useContext {cont}</h1>
        <button onClick={() => setCont(cont + 1)}>contar +1</button>
        <HijiHijo />
      </Contador.Provider>
    </div>
  );
}
