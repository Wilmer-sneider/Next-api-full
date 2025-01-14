import Login from "@/app/components/Login";
import PruebaEnsayo from "../prueba/page";

export default function TodoPage() {
  const nombre = "wilmer";

  return (
    <div>
      <h1>{nombre}</h1>
      <PruebaEnsayo />
      <Login />
    </div>
  );
}
