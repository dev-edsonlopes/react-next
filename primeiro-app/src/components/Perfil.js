function Perfil(props) {
    return (
      <div>
        <h3>
          Nome: {props.nome_Completo} 
          Profissão: {props.profissao} 
          Especialidade: {props.especialidade}
        </h3>
        
      </div>
    ); 
}

export default Perfil;