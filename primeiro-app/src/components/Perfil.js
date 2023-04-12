function Perfil(props) {
    return (
      <div>
          <h3>Nome: {props.nome_Completo} </h3>
          <h3>Profissão: {props.profissao}</h3> 
          <h3>Especialidade: {props.especialidade}</h3>
      </div>
    ); 
}

export default Perfil;