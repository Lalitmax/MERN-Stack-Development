import React from 'react';
import KgButton from './LalitButton.jsx';  // Updated the component name to start with an uppercase letter
import Hello from './hello';
import Random from './Random'
function App() {
 
  return (
    <div>
      <h1 style={{'color':'blue','background':'red' }}>hello world</h1>
      <KgButton></KgButton>
      <Hello></Hello>
      <Random></Random>
      
    </div>
  ); 
}

export default App;
