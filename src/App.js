import React from "react";

import Post from './Post';

const tituloZeroUm = 'Atividades 01'

// Functional Component (Componente Funcional)
function App() {
  return (
    // Usar React.Fragment no lugar de dev/span/etc, assim nao aparece no source.
    // pode usar <> também
    <React.Fragment> 
      <h1>Atividades</h1>
      <h2>Atividades para fazer</h2>


      <hr />

      <Post
        post={{
          title: 'Titulo da Atividade 01',
          subtitle: 'Subtitulo'
        }}
        />
      
      <Post
        post={{
          title: 'Titulo da Atividade 02',
          subtitle: 'Subtitulo'
        }}
        />

<Post
        post={{
          title: 'Titulo da Atividade 03',
          subtitle: 'Subtitulo'
        }}
        />
     
      
      {/* <Post
        title="Titulo da Atividade 1"
        subtitle="Subtitulo da Atividade"
        /> */}
      
    </React.Fragment>
    
  );
}

export default App;