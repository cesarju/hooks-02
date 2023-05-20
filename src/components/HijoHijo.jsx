import { useContext } from "react";
import { Contador } from "../contexto";

export default function HijiHijo() {
  const contador = useContext(Contador);
  return <h2>componente hijo del hijo {contador}</h2>;
}
