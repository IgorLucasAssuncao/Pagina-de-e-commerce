const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Requisição de detalhes usando o ID do produto
fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
    .then((res) => res.json())
    .then((element) => {
        let article = document.getElementById("DivProdutos");
        article.innerHTML += `
        <div class="produtos" id="${element.id}">
          <img src="${element.image}" alt="">
          <h5><a href="./detalhes.html?id=${element.id}">${element.title}</a></h5>
          <p>Preço: R$${element.price}</p>
          <p class="categoria">Categoria: ${element.category}</p>
          <p>Nota dos usuários: ${element.rating.rate}</p>
          <p>Descrição: ${element.description}</p>
          <a href="../detalhes/detalhes.html?id=${element.id}"><button id="detailsButton" class="card-button" >Comprar</button></a>
        </div>`;

    });
 