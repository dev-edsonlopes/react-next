import { useEffect, useState } from "react"; //Import Hooks
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]); //Criando o use Effect
  useEffect(() => {
    function loadApi() {
      //Obter o resultado do API
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadApi(); // Carregar o API
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutric</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
