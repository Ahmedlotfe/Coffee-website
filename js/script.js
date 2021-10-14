// Search Btn
let searchBtn = document.getElementById("search-btn");
let searchForm = document.getElementById("search-form");

searchForm.style.transform = 'scaleY(0)'
searchBtn.onclick = function () {
    if (searchForm.style.transform == 'scaleY(0)') {
        searchForm.style.transform = 'scaleY(1)'
    } else {
        searchForm.style.transform = 'scaleY(0)'
    }
}

// Cart Btn
let cartBtn = document.getElementById('cart-btn')
let cartItems = document.getElementById('cart-items')

cartItems.style.right = '-100%'
cartBtn.onclick = function () {
    if (cartItems.style.right == '-100%') {
        cartItems.style.right = '0'
    } else {
        cartItems.style.right = '-100%'
    }
}

// Menu Btn
let menuBtn = document.getElementById('menu-btn')
let menuItems = document.getElementById('menu-items')

menuBtn.onclick = function () {
    if (menuItems.style.display == 'none') {
        menuItems.style.display = 'block'
    } else {
        menuItems.style.display = 'none'
    }
}