import { atualizarTotal } from './atualizarTotal.js';
import { renderizarProdutos } from './renderizarProdutos.js';
import { adicionarProdutoAoCarrinho, removerProdutoDoCarrinho } from './ControleCarrinho.js';
import { incrementarQuantidade, decrementarQuantidade } from './controleQuantidade.js';

$.ajax({
    url: '/api/products',
    method: 'GET',
    dataType: 'json',
    success(data) {
        const produtos = data;

        renderizarProdutos(produtos);
    },
    error(erro) {
        console.error('Erro ao carregar os produtos:', erro);
    }
});

$.ajax({
    url: 'cart.html',
    method: 'GET',
    dataType: 'html',
    success(data) {
        $('#carrinho-compras').html(data);

        const linhasProdutos = $('#carrinho-compras tbody tr').not('.total');
        if (linhasProdutos.length === 0) {
            $('#carrinho-compras').hide();
            return;
        }
    },
});

$(document).on('click', '.adicionar-carrinho', function () {
    adicionarProdutoAoCarrinho(this);
    atualizarTotal();
    $('#carrinho-compras').show();
});

$(document).on('click', '.btn-add', function() {
    incrementarQuantidade(this);
    atualizarTotal();
})

$(document).on('click', '.btn-sub', function() {
    decrementarQuantidade(this);
    atualizarTotal();
})

$(document).on('click', '.remover-produto', function () {
    removerProdutoDoCarrinho(this);
    atualizarTotal();
});
