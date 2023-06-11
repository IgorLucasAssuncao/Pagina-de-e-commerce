function CarregarCards() {
  //Carrega todos os cards
  fetch("https://diwserver.vps.webdock.cloud/products?page=100")
    .then((res) => res.json())
    .then((data) => {
      let article = document.getElementById("DivProdutos");
      data.products.forEach((element) => {
        article.innerHTML += `
            <div class="produtos" id="${element.id}">
              <img src="${element.image}" alt="">
              <h5><a href="./detalhes.html?id=${element.id}">${element.title}</a></h5>
              <p>Preço: R$${element.price}</p>
              <p class="categoria">Categoria: ${element.category}</p>
              <p>Nota dos usuários: ${element.rating.rate}</p>
              <a href="detalhes.html?id=${element.id}"><button id="detailsButton" class="card-button" >More Details</button></a>
            </div>`;
      });
    });
}

window.onload = () => {
  CarregarCards();
};

fetch("https://diwserver.vps.webdock.cloud/products?page=100")
  .then((res) => res.json())
  .then((json) => {
    //fetch para fazer o filtro de seleção
    let categoryFilter = document.getElementById("categoryFilter");
    let nameFilter = document.getElementById("Name");
    let min = document.getElementById("Min");
    let max = document.getElementById("Max");
    let article = document.getElementById("DivProdutos");

    const filterProducts = (min, max, category, searchTerm) => {
      article.innerHTML = ""; // Limpar os produtos exibidos

      // Filtrar os produtos com base na faixa de preço, categoria e termo de pesquisa
      const filteredProducts = json.products.filter((product) => {
        const title = product.title.toLowerCase();
        const price = product.price;
        const productCategory = product.category;
        const search = searchTerm.toLowerCase();

        // Verificar se o produto está dentro da faixa de preço selecionada
        if (min !== "" && max !== "") {
          if (price < parseInt(min) || price > parseInt(max)) {
            return false;
          }
        }

        // Verificar se o produto pertence à categoria selecionada
        if (category !== "" && productCategory !== category) {
          return false;
        }

        return title.includes(search);
      });

      // Exibir os produtos filtrados
      filteredProducts.forEach((product) => {
        article.innerHTML += `
          <div class="produtos" id="${product.id}">
            <img src="${product.image}" alt="">
            <h5><a href="detalhes.html?id=${product.id}">${product.title}</a></h5>
            <p>Preço: R$${product.price}</p>
            <p class="categoria">Categoria: ${product.category}</p>
            <p>Nota dos usuários: ${product.rating.rate}</p>
            <a href="detalhes.html?id=${product.id}"><button id="detailsButton" class="card-button" >More Details</button></a>
          </div>`;
      });
    };

    // Event listener para o filtro de preço
    min.addEventListener("change", () => {
      const minimo = min.value;
      const maximo = max.value;
      const category = categoryFilter.value;
      const searchTerm = nameFilter.value;
      console.log(minimo, maximo, category, searchTerm);
      filterProducts(minimo, maximo, category, searchTerm);
    });
    max.addEventListener("change", () => {
      const minimo = min.value;
      const maximo = max.value;
      const category = categoryFilter.value;
      const searchTerm = nameFilter.value;
      console.log(minimo, maximo, category, searchTerm);
      filterProducts(minimo, maximo, category, searchTerm);
    });

    // Event listener para o filtro de categoria
    categoryFilter.addEventListener("change", () => {
      const minimo = min.value;
      const maximo = max.value;
      const category = categoryFilter.value;
      const searchTerm = nameFilter.value;
      console.log(minimo, maximo, category, searchTerm);
      filterProducts(minimo, maximo, category, searchTerm);
    });
    nameFilter.addEventListener("change", () => {
      const minimo = min.value;
      const maximo = max.value;
      const category = categoryFilter.value;
      const searchTerm = nameFilter.value;
      console.log(minimo, maximo, category, searchTerm);
      filterProducts(minimo, maximo, category, searchTerm);
    });

    // Event listener para o formulário de pesquisa
    const searchForm = document.getElementById("btn-section");
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const minimo = min.value;
      const maximo = max.value;
      const category = categoryFilter.value;
      const searchTerm = nameFilter.value;
      console.log(minimo, maximo, category, searchTerm);
      filterProducts(minimo, maximo, category, searchTerm);
    });
  });

//Estilizar o Carrosel
fetch("https://diwserver.vps.webdock.cloud/products?page=220")
  .then((res) => res.json())
  .then((json) => {
    let primeiroSlide = document.getElementById("first-item");
    let segundoSlide = document.getElementById("second-item");
    let terceiroSlide = document.getElementById("third-item");
    let first = document.getElementById("f");
    let second = document.getElementById("s");
    let third = document.getElementById("t");
    //fetch para estilizar o carrosel
    for (let index = 0; index < json.products.length; index++) {
      if (index == 1) {
        primeiroSlide.src = json.products[index].image;
        first.innerHTML += `
          <h5 class="text-info">${json.products[index].title}</h5>
          <p class="text-info">R$ ${json.products[index].price},00</p>
          <a href="detalhes.html?id=${json.products[index].id}"><button id="detailsButton" class="card-button" >More Details</button></a>
          `;
      }

      if (index == 2) {
        segundoSlide.src = json.products[index].image;
        second.innerHTML += `
        <h5 class="text-info">${json.products[index].title}</h5>
        <p class="text-info">R$ ${json.products[index].price},00</p>
        <a href="detalhes.html?id=${json.products[index].id}"><button id="detailsButton" class="card-button" >More Details</button></a>
        `;
      }
      if (index == 3) {
        terceiroSlide.src = json.products[index].image;
        third.innerHTML += `
        <h5 class="text-info">${json.products[index].title}</h5>
        <p class="text-info">R$ ${json.products[index].price},00</p>
        <a href="detalhes.html?id=${json.products[index].id}"><button id="detailsButton" class="card-button" >More Details</button></a>
        `;
      }
    }
  });
