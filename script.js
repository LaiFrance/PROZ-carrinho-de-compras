// Obtém os elementos do DOM
const btnSubtrairProduto = document.getElementById('btn-subtrair-produto-01');
const btnAdicionarProduto = document.getElementById('btn-adicionar-produto-01');
const quantidadeProduto = document.getElementById('quantidade-produto-01');
const quantidadeSubtotal = document.getElementById('quantidade-subtotal');
const valorSubtotal = document.getElementById('valor-subtotal');

// Define o valor do produto e o contador inicial
const valorProduto = 11.66;
let contador = parseInt(quantidadeProduto.value);

// Atualiza o subtotal
function atualizarSubtotal() {
  const subtotal = contador * valorProduto;
  quantidadeSubtotal.textContent = contador;
  valorSubtotal.textContent = subtotal.toFixed(2);
}

// Adiciona um produto ao contador e atualiza o subtotal
btnAdicionarProduto.addEventListener('click', function() {
  contador++;
  quantidadeProduto.value = contador;
  atualizarSubtotal();
});

// Remove um produto do contador e atualiza o subtotal
btnSubtrairProduto.addEventListener('click', function() {
  if (contador > 0) {
    contador--;
    quantidadeProduto.value = contador;
    atualizarSubtotal();
  }
});


// Chama a função inicialmente para exibir o subtotal inicial
atualizarSubtotal();