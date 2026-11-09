
import { useState } from "react";
import ProductCard from "../produtos/ProductCard";

const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S24",
    preco: 2499,
    imagem: "/imagens/galaxy-s24.png",
    descricao: "Desempenho de outro nível com câmera incrível.",
    categoria: "Smartphones",
  },
  {
    id: 2,
    nome: "Notebook Ultra Book",
    preco: 3199,
    imagem: "/imagens/ultrabook.png",
    descricao: "Leve, rápido e poderoso para o dia a dia.",
    categoria: "Notebooks",
  },
  {
    id: 3,
    nome: "Fone Bluetooth Sound+",
    preco: 299,
    imagem: "/imagens/fone-bluetooth.png",
    descricao: "Som de alta qualidade e bateria duradoura.",
    categoria: "Áudio",
  },
];

function Home() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="home-container" id="inicio">

      <div className="welcome" id="produtos">
        <div>
          <h2>PRODUTOS</h2>
          <p>Encontre os melhores produtos de tecnologia</p>
        </div>

        <input
          type="text"
          placeholder="⌕  Buscar produtos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="campo-busca"
        />
      </div>

      <section className="products">
        {produtosFiltrados.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
            categoria={produto.categoria}
          />
        ))}
      </section>

      {produtosFiltrados.length === 0 && (
        <p className="sem-produtos">Nenhum produto encontrado.</p>
      )}

    </main>
  );
}

export default Home;

<ProductCard
  key={produto.id}
  nome={produto.nome}
  preco={produto.preco}
  imagem={produto.imagem}
  descricao={produto.descricao}
  categoria={produto.categoria}
/>