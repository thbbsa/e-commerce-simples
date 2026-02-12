export function renderizarProdutos(produtos) {
    const containerProdutos = $('#produtos-container').empty();

    if (produtos.length === 0) {
        containerProdutos.append('<p style="text-align:center;">Nenhum produto encontrado.</p>');
        return;
    }

    produtos.forEach(produto => {
        const cardsProdutos = `
                <div class="produtos d-flex flex-column align-items-center justify-content-center mt-3 p-2">
                <img src="${produto.image}" alt="${produto.name}">
                <h2>${produto.name}</h2>
                <p>R$ ${produto.price.toFixed(2)}</p>
                <button class="btn btn-primary adicionar-carrinho" 
                    data-nome="${produto.name}" 
                    data-preco="${produto.price}">
                    Adicionar ao Carrinho
                </button>
                </div>`;
        containerProdutos.append(cardsProdutos);
    });

    $('#container-compras').append(containerProdutos);
}