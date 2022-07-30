import React, {useState} from "react";

import Post from './Post';
import Header from "./Header";

// Functional Component (Componente Funcional)
function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 10},
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 20},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 30},
  ]);
  
  function handleRefresh() {
    // setPosts([]); // Limpar lista

    setPosts((prevState) => [
      ... prevState, 
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 25,
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    // Usar React.Fragment no lugar de dev/span/etc, assim nao aparece no source.
    // pode usar <> também
    <React.Fragment> 
      
      <Header>
        <h2>Atividades para fazer
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
     
      
    </React.Fragment>
    
  );
}

export default App;