export function adicionarProdutoAoCarrinho(elemento) {
    const nomeProduto = $(elemento).data('nome');
    const precoProduto = $(elemento).data('preco');

    const linhaExistente = $('#carrinho-compras tbody tr').filter(function () {
        return $(this).find('.nome-produto').text().trim().toLowerCase() === nomeProduto.trim().toLowerCase();
    });

    if (linhaExistente.length > 0) {
        // Atualiza a quantidade
        const quantidadeSpan = linhaExistente.find('.quantidade');
        let quantidadeAtual = parseInt(quantidadeSpan.text());
        quantidadeSpan.text(++quantidadeAtual);
    } else {
        // Cria nova linha com estrutura correta
        const linhaProduto = `
            <tr class="linha-produto">
                <td colspan="6">
                    <div class="linha-conteudo d-flex align-items-center justify-content-between">
                        <span class="nome-produto">${nomeProduto}</span>
                        <span class="preco-produto">R$ ${precoProduto.toFixed(2)}</span>
                        <div class="controle-quantidade">
                            <button class="btn-add btn btn-sm btn-outline-secondary">+</button>
                            <span class="quantidade">1</span>
                            <button class="btn-sub btn btn-sm btn-outline-secondary">-</button>
                        </div>
                        <button class="remover-produto btn btn-sm btn-danger">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </td>
            </tr>`;
        $('#carrinho-compras tbody').append(linhaProduto);
    }
}


export function removerProdutoDoCarrinho(elemento) {
    $(elemento).closest('tr').remove();
    
    if ($('#carrinho-compras tbody tr').not('.total').length === 0) {
        $('#carrinho-compras').hide();
    }
}
