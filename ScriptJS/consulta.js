document
  .getElementById("formPesquisa")
  .addEventListener("submit", pesquisar);

async function pesquisar(event) {

    event.preventDefault();

    let texto = document.getElementById("busca").value;

    let url =
      "https://script.google.com/macros/s/AKfycbytxMrzTl5QdungjAlfKt6FQ5lAmcaGlmAzzRiiAU5j25srhW-0QwZXIOgdKvcmJVi7/exec?busca="
      + encodeURIComponent(texto);

    let resposta = await fetch(url);
    let dados = await resposta.json();

    let html = "";

    dados.forEach(planta => {

        html += `
        <div class="card">

          <h2>${planta.nomePopular}</h2>

          <img src="${planta.imagem}">

          <div class="resultadoPesquisa">

            <p><b>Nome científico:</b> ${planta.nomeCientifico}</p>
            <p><b>Família:</b> ${planta.familia}</p>
            <p><b>Gênero:</b> ${planta.genero}</p>
            <p><b>Espécie:</b> ${planta.especie}</p>
            <p><b>Local:</b> ${planta.local}</p>
            <p><b>Coletor:</b> ${planta.coletor}</p>

          </div>

        </div>
        `;

    });

    document.getElementById("resultado").innerHTML = html;
}