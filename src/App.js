import React from "react";

// Functional Component (Componente Funcional)
function App() {
  return (
    // Usar React.Fragment no lugar de dev/span/etc, assim nao aparece no source.
    // pode usar <> também
    <React.Fragment> 
      <h1>Componente App</h1>
      <h2>Sub</h2>
    </React.Fragment>
    
  );
}

export default App;