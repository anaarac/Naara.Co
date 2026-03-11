/* =========================
MENU TRANSPARENTE NO SCROLL
========================= */

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
MENU MOBILE (HAMBURGER)
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


/* =========================
TROCAR IMAGEM DO PRODUTO
========================= */

function trocarProduto(img, cor) {

    const mainImage = document.getElementById("mainImage");
    const colorName = document.getElementById("colorName");

    if (mainImage) {
        mainImage.src = img;
    }

    if (colorName) {
        colorName.innerText = cor;
    }

}


/* =========================
CONTADOR DE ESTOQUE
========================= */

let stock = 12;

setInterval(() => {

    const stockNumber = document.getElementById("stockNumber");

    if (!stockNumber) return;

    if (stock > 5) {

        stock--;
        stockNumber.innerText = stock;

    }

}, 10000);

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Simulação de Frete
const btnFrete = document.querySelector('.summary-extra .btn-small');
const inputCep = document.querySelector('.summary-extra input');
const freteDisplay = document.querySelector('.gold-text');

btnFrete.addEventListener('click', () => {
    if (inputCep.value.length >= 8) {
        freteDisplay.innerText = "R$ 15,00"; // Valor simulado
        alert("Frete calculado com sucesso para o CEP " + inputCep.value);
    } else {
        alert("Por favor, digite um CEP válido.");
    }
});