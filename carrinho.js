document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.querySelector('#carrinho tbody');
    const totalSpan = document.getElementById('total');

    let total = 0;

    cart.forEach((produto, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><img src="${produto.imagem}" alt="${produto.nome}" style="width: 50px;"></td>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco}</td>
            <td>1</td>
            <td>R$ ${produto.preco}</td>
            <td><button onclick="removeFromCart(${index})">Remover</button></td>
        `;

        tableBody.appendChild(tr);

        total += parseFloat(produto.preco);
    });

    totalSpan.textContent = total.toFixed(2);
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}