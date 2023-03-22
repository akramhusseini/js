addLibraries();

function addLibraries() {
  const reactScript = document.createElement('script');
  reactScript.src = 'https://unpkg.com/react@17.0.2/umd/react.development.js';
  document.head.appendChild(reactScript);

  const reactDomScript = document.createElement('script');
  reactDomScript.src = 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js';

  // Wait for both scripts to load before using them
  reactScript.onload = reactDomScript.onload = function() {
    testReact();
  };

  document.head.appendChild(reactDomScript);
}

function testReact() {
  function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return React.createElement('div', null,
      React.createElement('h1', null, 'Counter'),
      React.createElement('p', null, 'Count: ' + count),
      React.createElement('button', {onClick: increment}, 'Increment'),
      React.createElement('button', {onClick: decrement}, 'Decrement')
    );
  }
  
  ReactDOM.render(React.createElement(Counter), document.getElementById('root'));
}
