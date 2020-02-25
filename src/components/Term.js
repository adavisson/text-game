import React from 'react';
import Terminal from 'terminal-in-react';

const Term = (props) => {
  return (
    <div id="terminal">
      <Terminal
        color='red'
        backgroundColor='black'
        allowTabs={false}
        hideTopBar={true}
        promptSymbol={`\u2620`}
        watchConsoleLogging={true}
        style={{fontFamily: 'Krona One', fontweight: "bold", fontSize: "1em"}}
        commands={{
          'start': props.startGame
        }}
        descriptions={{
          'start': "Start the game."
        }}
      />
    </div>
  );
}
 
export default Term;