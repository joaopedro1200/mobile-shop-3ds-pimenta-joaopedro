
import { useState } from "react";

function ProductCard({ nome, descricao, preco, imagem, categoria }) {
  const [favorito, setFavorito] = useState(false);
  const [quantidade, setQuantidade] = useState(1);

  return (
    <div className="produto-card">

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

      {/* CONTADOR DE QUANTIDADE */}
      <div className="contador-produto">
        <span>Quantidade</span>

        <div className="contador-controles">
          <button
            type="button"
            onClick={() =>
              setQuantidade((valor) => Math.max(1, valor - 1))
            }
            aria-label="Diminuir quantidade"
          >
            −
          </button>

          <span>{quantidade}</span>

          <button
            type="button"
            onClick={() =>
              setQuantidade((valor) => valor + 1)
            }
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
      </div>

      {/* BOTÕES */}
      <div className="produto-acoes">

        <button type="button" className="botao-comprar">
          🛒 Comprar
        </button>

        <button
          type="button"
          className={`favorito ${favorito ? "ativo" : ""}`}
          onClick={() => setFavorito(!favorito)}
          aria-label={
            favorito
              ? "Remover dos favoritos"
              : "Adicionar aos favoritos"
          }
          aria-pressed={favorito}
        >
          {favorito ? "♥" : "♡"}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
