import Perfil from "./components/Perfil";
import { useState } from 'react';
function App() {
  const [dev, setDev] = useState('[Desenvolvedor]')
  function disparaEventos(nome) {
    setDev(nome)
  }

  return ( // Codigo HTML
    <div>
      <button onClick={() => {
        disparaEventos(
          <Perfil nome_Completo="Edson Lopes da Silva Junior"
            profissao="Estágiario Full-Stack"
            especialidade="Desenvolvimento WEB" />
        )
      }
      }>Aperta aqui!</button>

      <p>Hello! {dev}</p>

    </div>
  );
}

export default App;