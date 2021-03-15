import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Usamos a Arrow Function em onSubmitForm para evitar o erro no qual o State não está definido dentro da função
  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <h1>Digite um nome de uma imagem que queira procurar...</h1>
        <form className="ui fluid icon input" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Nome da Imagem aqui..."
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <i className="circular search link icon"></i>
        </form>
      </div>
    );
  }
}

export default SearchBar;
