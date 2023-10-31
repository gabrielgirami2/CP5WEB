import styled from "styled-components";

export const lightTheme = {
  corFundo: "CAE2BC",
  corTexto: "#5B7B7A",
  corTitulo: "#3C887E",
};

export const darkTheme = {
  corFundo: "#171A21",
  corTexto: "#CAE2BC",
  corTitulo: "#3C887E",
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
  align-items: center;
  line-height: 1.5;
  height: 100vh;
`;

export const TitlePage = styled.h1`
  color: ${(props) => props.theme.corTitulo};
  font-size: 20px;
`;

export const ImageMinha = styled.img`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  border-radius: 25%;
  align-items: center;
`;

export const InformacoesCep = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corTheme};
    margin: 10px;
  `;