
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(1);

  function diminuir() {
    setContador((valor) => Math.max(1, valor - 1));
  }

  function aumentar() {
    setContador((valor) => valor + 1);
  }

  return (
    <div className="contador-produto">

      <span>Quantidade</span>

      <div className="contador-controles">

        <button
          type="button"
          onClick={diminuir}
          disabled={contador === 1}
          aria-label="Diminuir quantidade"
        >
          −
        </button>

        <strong aria-live="polite">
          {contador}
        </strong>

        <button
          type="button"
          onClick={aumentar}
          aria-label="Aumentar quantidade"
        >
          +
        </button>

      </div>

    </div>
  );
}

export default Contador;
