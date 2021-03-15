import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // A função onSearchSubmit é responsável por pegar o submit dentro do component 'SearchBar' e através das props, ser chamado dentro do 'App.js'
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
