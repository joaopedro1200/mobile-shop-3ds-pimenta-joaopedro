
import { useState } from "react";

function ProductCard({ nome, descricao, preco, imagem, categoria }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <div className="produto-card">

      <button
        className="favorito"
        onClick={() => setFavorito(!favorito)}
        aria-label="Favoritar produto"
      >
        {favorito ? "♥" : "♡"}
      </button>

      <img
        src={imagem}
        alt={nome}
        className="produto-imagem"
      />

      <h3>{nome}</h3>

      <p>{descricao}</p>

      <span className="categoria">
        {categoria}
      </span>

      <strong>
        R$ {Number(preco).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </strong>

      <button className="botao-comprar">
        🛒 Comprar
      </button>

    </div>
  );
}

export default ProductCard;
