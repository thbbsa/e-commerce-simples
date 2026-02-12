export function incrementarQuantidade(elemento) {
    const quantidade = $(elemento).siblings('.quantidade');
    let quantidadeTotal = parseInt(quantidade.text());
    quantidade.text(++quantidadeTotal);
}


export function decrementarQuantidade(elemento) {
    const quantidade = $(elemento).siblings('.quantidade');
    let quantidadeTotal = parseInt(quantidade.text());
    quantidade.text(--quantidadeTotal);

    if (quantidadeTotal <= 0) {
        $(elemento).closest('tr').remove();
        atualizarTotal();

        if ($('#carrinho-compras tbody tr').not('.total').length === 0) {
            $('#carrinho-compras').hide();
        }
    }
}