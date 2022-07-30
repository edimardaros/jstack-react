import React from "react";

import Post from './Post';
import Header from "./Header";

const tituloZeroUm = 'Atividades 01'

// Functional Component (Componente Funcional)
function App() {
  return (
    // Usar React.Fragment no lugar de dev/span/etc, assim nao aparece no source.
    // pode usar <> também
    <React.Fragment> 
      
      <Header>
        <h2>Atividades para fazer</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: 'Titulo da Atividade 01',
          subtitle: 'Subtitulo'
        }}
        />
      
      <Post
        likes={10}
        post={{
          title: 'Titulo da Atividade 02',
          subtitle: 'Subtitulo'
        }}
        />

      <Post
        likes={50}
        post={{
          title: 'Titulo da Atividade 03',
          subtitle: 'Subtitulo'
        }}
        />
     
      
    </React.Fragment>
    
  );
}

export default App;