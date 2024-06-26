import React from 'react';

function App() {
  const throwError = () => {
    throw new Error("This is a test error to check the Sentry integration!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sentry Integration Test with a simple react application</h1>
        <button onClick={throwError}>Throw Error</button>
      </header>
    </div>
  );
}

export default App;
