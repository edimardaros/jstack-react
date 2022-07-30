import React from "react";

// export default function Header({ title }) {
// {props.children} -> Renderiza tudo que coloca dentro do componente quando chamado
//    Exemplo: <Header title="Atividades">
        // <h2>Atividades para fazer</h2>
        // </Header>
        
export default function Header(props) {
  return (
    <>
      <h1>{title}</h1>
      {props.children} 
    </>
  );      
}

