document.addEventListener("DOMContentLoaded", () => {
    const productCards = [
        {
            imgSrc: "images/product-card/product-1.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buyNowLink: "#"
        },
        {
            imgSrc: "images/product-card/product-2.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buyNowLink: "#"
        },
        {
            imgSrc: "images/product-card/product-3.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buyNowLink: "#"
        }
    ];

    const productCardsContainer = document.getElementById('product-cards-container');

    productCards.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="product-card">
                <img src="${product.imgSrc}" alt="${product.title}" class="img-fluid">
                <div class="product-card-info">
                <h5 class="product-title">${product.title}</h5>
                <p class="product-description">${product.description}</p>
                <a href="${product.buyNowLink}" class="btn  buy-now-btn">
                    <img src="images/product-card/shopping-cart-icon.svg" alt="Cart Icon"> Buy Now
                </a>
                </div>
            </div>
        `;
        productCardsContainer.appendChild(card);
    });
});
