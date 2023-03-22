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
  const element = React.createElement('h1', {}, 'Hello, React!');
  ReactDOM.render(element, document.getElementById('root'));
}
