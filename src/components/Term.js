import React from 'react';
import Terminal from 'terminal-in-react';

const Term = () => {
  return (
    <div id="terminal">
      <Terminal
        color='red'
        backgroundColor='lightblue'
        barColor='black'
        allowTabs={false}
        hideTopBar={true}
        style={{fontFamily: 'Krona One', fontweight: "bold", fontSize: "1em"}}
      />
    </div>
  );
}
 
export default Term;