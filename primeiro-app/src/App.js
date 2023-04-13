import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersStore = localStorage.getItem("@usuarios");
    if(usersStore) {
      setUsers(JSON.parse(usersStore))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@usuarios", JSON.stringify(users));
  }, [users]);

  function registrar(event) {
    event.preventDefault();
    const newUser = { nome, idade, email };
    setUsers([...users, newUser]);
    setNome("");
    setIdade("");
    setEmail("");
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={registrar}>
        <label>Nome:</label>
        <br />
        <input
          type="text"
          placeholder="Digite o seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <br />
        <br />
        <label>Idade: </label>
        <br />
        <input
          type="text"
          placeholder="Digite a sua idade"
          value={idade}
          onChange={(event) => setIdade(event.target.value)}
        />
        <br />
        <br />
        <label>Email: </label>
        <br />
        <input
          type="text"
          placeholder="Digite o seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <span>Usuário: {index + 1}</span>
            <div>
              Nome: {user.nome}
              <br />
              Idade: {user.idade} <br />
              Email: {user.email}
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
