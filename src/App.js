import React from "react";

import Post from './Post';
import Header from "./Header";

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 10},
  { title: 'Title#02', subtitle: 'Sub#02', likes: 20},
  { title: 'Title#03', subtitle: 'Sub#03', likes: 30},
]

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

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
     
      
    </React.Fragment>
    
  );
}

export default App;