import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. this should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take component's generated HTML and put on page(In the DOM)
// <App /> is shorthand for instantiating an instance of App
ReactDOM.render(<App />, document.querySelector('.container'));
