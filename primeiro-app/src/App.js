import { useState } from 'react';
function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({})

  function registrar(event) {
    event.preventDefault();
    alert('Úsuario registrado com sucesso!')

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })

  }

  return ( // Codigo HTML
    <div>
      <h1>Cadastro de Úsuario</h1>
      <form onSubmit={registrar}> 
        <label>Nome:</label><br />
        <input
          type="text"
          placeholder="Digite o seu nome"
          values={nome}
          onChange={(element) => setNome(element.target.value)}
        /><br /><br />
        <label>Idade: </label><br />
        <input
          type="text"
          placeholder="Digite a sua idade"
          values={idade}
          onChange={(element) => setIdade(element.target.value)}
        /><br /><br />
        <label>Email: </label><br />
        <input
          type="text"
          placeholder="Digite o seu email"
          values={email}
          onChange={(element) => setEmail(element.target.value)}
        /><br /><br />
        <button type="Submit">Registrar</button>
      </form>
      <br /><br />
      <div>
        <span>Nome: {user.nome}</span><br />
        <span>Idade: {user.idade}</span><br />
        <span>Email: {user.email}</span>
      </div>
    </div>
  );
}

export default App;