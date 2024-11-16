function pesquisar () {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == ""){
        return;
    }

let resultados = "";
let nome = "";
let descricao = "";

for (let dado of dados) {
    nome = dado.nome.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
   if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){;
    resultados += `
    <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}${dado.titulos.join('\n')}
                </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
    `;
}
section.innerHTML = resultados;
}
}


