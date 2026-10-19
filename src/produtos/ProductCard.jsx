function ProdutoCard() {
  return (
    <div className="produto-card">
      <img
        src="/imagens/galaxy-s24.png"
        alt="Smartphone Galaxy S24"
        className="produto-imagem"
      />

      <h3>Smartphone Galaxy S24</h3>

      <p>
        Desempenho de outro nível com câmera incrível.
      </p>

      <strong>R$ 2.499,00</strong>

      <button>Comprar</button>
    </div>
  );
}

export default ProdutoCard;