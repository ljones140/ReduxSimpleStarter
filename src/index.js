import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


// Create a new component. this should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take component's generated HTML and put on page(In the DOM)
// <App /> is shorthand for instantiating an instance of App
ReactDOM.render(<App />, document.querySelector('.container'));
