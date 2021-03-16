import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../components/api/Unsplash";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [] };

  // A função onSearchSubmit é responsável por pegar o submit dentro do component 'SearchBar' e através das props, ser chamado dentro do 'App.js'
  onSearchSubmit = async (term) => {
    // Utilizamos a função .get do axios para buscar os dados da API externa
    // Dentro da função, utilizamos 'params' para fazer uma busca dinâmica direto da API de acordo com o que é digitado na barra de pesquisa, através do 'query'
    // E o 'headers' tem como função utilizar a API key para fazer as requisições na API
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Foram encontradas: {this.state.images.length} imagens
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
