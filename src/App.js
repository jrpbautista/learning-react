import "./App.css";

function App() {
  return (
    <div className="App">
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name"></input>
    </div>

    /* 
      why htmlFor? 
      In JSX, htmlFor reflects the 'for' content property.
      
      Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor
    */
  );
}

export default App;
