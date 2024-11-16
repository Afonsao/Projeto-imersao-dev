# Camisa-7-Gremio - Imersão dev google gemini alura

# Site: Camisas 7 Libertadores do Grêmio

Este projeto cria uma página web simples que lista informações sobre jogadores do Grêmio, focando nos camisas 7 que conquistaram a Libertadores. A página permite que o usuário pesquise jogadores por nome ou descrição.

## Funcionalidades

* **Pesquisa de Jogadores:**  O usuário pode digitar o nome de um jogador (ou parte do nome) no campo de pesquisa e clicar em "Pesquisar". A página então filtra e exibe apenas os jogadores que correspondem à pesquisa,  considerando maiúsculas e minúsculas.
* **Exibição de Resultados:** Os resultados da pesquisa são exibidos em uma lista organizada. Cada item da lista contém:
    * Nome do jogador
    * Descrição do jogador
    * Lista dos títulos conquistados pelo jogador (formatada com quebras de linha)
    * Link para mais informações (externo).

## Arquivos

* **index.html:**  O arquivo HTML principal da página web.
* **style.css:**  O arquivo CSS que estiliza a página.
* **dados.js:**  Este arquivo contém um array de objetos JavaScript com os dados dos jogadores (nome, descrição, títulos e link para mais informações).  **É necessário criar este arquivo e preenchê-lo com os dados.**  Veja a estrutura de dados abaixo.
* **app.js:**  O arquivo JavaScript que contém a lógica de pesquisa e exibição dos resultados.

## Estrutura de Dados (dados.js)

O arquivo `dados.js` deve conter um array de objetos JavaScript com a seguinte estrutura:

```javascript
const dados = [
  {
    nome: "Jogador 1",
    descricao: "Descrição do jogador 1",
    titulos: ["Título 1", "Título 2", "Título 3"],
    link: "https://www.exemplo.com/jogador1"
  },
  {
    nome: "Jogador 2",
    descricao: "Descrição do jogador 2",
    titulos: ["Título 4", "Título 5"],
    link: "https://www.exemplo.com/jogador2"
  },
  // ... mais jogadores
];
```

Cada objeto representa um jogador e contém:

* `nome`: O nome do jogador (string).
* `descricao`: Uma breve descrição do jogador (string).
* `titulos`: Um array de strings com os títulos conquistados pelo jogador.
* `link`: Um link para mais informações sobre o jogador (string).

## Como executar

1.  **Criar os arquivos:** Crie os arquivos `index.html`, `style.css`, `dados.js` e `app.js` na mesma pasta.
2.  **Preencher dados.js:** Adicione os dados dos jogadores no arquivo `dados.js` seguindo a estrutura acima.
3.  **Abrir o index.html:** Abra o arquivo `index.html` em seu navegador web.


## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript


## Autor

Afonso de Almeida
