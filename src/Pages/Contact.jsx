import React from 'react';
import axios from "axios"
import { useState } from "react";
import Header from '../componets/Header/Header';
import { InformacoesCep } from "../styles/style";

function Contact() {
  // Criando os useStates (variáveis dinâmicas)
  const [cep, setCep] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  // Setar o CEP quando clicar em pesquisar
  function handleCepChange(e) {
    setCep(e.target.value);
  }

  function pesquisarCep() {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json`)

      //Define uma função CALLBACK que será chamada se a requisição for bem-sucedida (similar ao try except)
      .then(function (response) {
        if (response.data && !response.data.error) {
          setData(response.data);
          setError(null);
        } else {
          setData({});
          setError("CEP NÃO ENCONTRADO");
        }
      })
      // Caso dê erro
      .catch(function (error) {
        setData({ error });
        setError("CEP NÃO ENCONTRADO");
      });
  }

  return (
    <>
      
      <h2>Contato</h2>

      {/* Formulário */}
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={handleCepChange}
      />

      {/* Botão que pesquisa o CEP */}
      <button onClick={pesquisarCep}>PESQUISAR</button>

      {/* Se der erro: */}
      {error && <p>{error}</p>}

      {/* Se o CEP for pegado: */}
      {data.cep && (
        <InformacoesCep>
          <p>CEP: {data.cep} </p>
          <p>Logradouro: {data.logradouro}</p>
          <p>Complemento: {data.complemento}</p>
          <p>Bairro: {data.bairro}</p>
          <p>UF: {data.uf}</p>
          <p>DDD: {data.ddd}</p>
        </InformacoesCep>
      )}

    </>
  );
}

export default Contact;