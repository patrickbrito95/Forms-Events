import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 250px;
`;

class ImageCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    //Aqui podemos atribuir algumas variáveis de instância que podemos referir a ela dentro da classe
    // Chamamos a 'ref=' dentro da imagem para haver essa conexão, para podermos manupular dados entre eles.
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Aqui estamos baixando uma imagem no navegador para extrair os valores dentro dela. Sem isso, não seria possível acessar os valores internos.
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // Após baixar os dados da imagem no 'componentDidMount', aqui podemos acessar os dados dentro do Array. Assim, encontrando a altura das imagens.
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Image ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCards;
