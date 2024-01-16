// Entry point for the build script in your package.json
// import '@hotwired/turbo-rails';
// import './controllers';

import React from 'react';
import { createRoot } from 'react-dom';

function App() {
  return <h1>Hello World!</h1>;
}

createRoot(document.getElementById('root')).render(<App />);
