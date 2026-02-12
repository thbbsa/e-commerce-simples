export function atualizarTotal() {
    let total = 0;
    $('#carrinho-compras tbody tr').not('.total').each(function () {
        const precoTexto = $(this).find('.preco-produto').text(); // Ex: "R$ 10.00"
        const preco = parseFloat(precoTexto.replace('R$ ', '').replace(',', '.'));
        const quantidade = parseInt($(this).find('.quantidade').text());
        total += preco * quantidade;
    });

    $('#carrinho-compras .total').remove();
    $('#carrinho-compras tbody').append(`
        <tr class="total">
            <td colspan="3"><strong>Total</strong></td>
            <td><strong>R$ ${total.toFixed(2)}</strong></td>
        </tr>`);
}

