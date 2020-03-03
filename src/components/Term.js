import React from 'react';
import ReactTerminal from 'react-terminal-component';

const Term = (props) => {
  return (
    <div id="terminal">
      <ReactTerminal
      theme={{
        background: "lightgrey",
        commandColor: 'red',
        outputColor: 'black',
        errorOutputColor: 'yellow',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        spacing: '1%',
        fontFamily: 'monospace',
        width: "100%",
        height: "60vh"
      }} 
      promptSymbol={`\u2620`}
      />
    </div>
  );
}
 
export default Term;