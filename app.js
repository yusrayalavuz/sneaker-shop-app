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
                    <img src="images/product-card/shopping-cart-icon.svg" alt="Cart Icon" class="cart-icon"> Buy Now
                </a>
                </div>
            </div>
        `;
        productCardsContainer.appendChild(card);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const reviewCards = [
        {
            logoSrc: "images/review-carousel/logo1.svg",
            logoText: "Zoomerr",
            reviewText: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            reviewerImgSrc: "images/review-carousel/UserThumb1.png",
            reviewerName: "Hellen Jummy",
            reviewerTitle: "Team Lead"
        },
        {
            logoSrc: "images/review-carousel/logo2.svg",
            logoText: "SHELLS",
            reviewText: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            reviewerImgSrc: "images/review-carousel/UserThumb2.png",
            reviewerName: "Hellena John",
            reviewerTitle: "Co-founder"
        },
        {
            logoSrc: "images/review-carousel/logo3.svg",
            logoText: "ArtVenue",
            reviewText: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            reviewerImgSrc: "images/review-carousel/UserThumb3.png",
            reviewerName: "David Oshodi",
            reviewerTitle: "Manager"
        },
        {
            logoSrc: "images/review-carousel/logo4.svg",
            logoText: "WAVES",
            reviewText: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            reviewerImgSrc: "images/review-carousel/UserThumb4.png",
            reviewerName: "Sarah Collins",
            reviewerTitle: "Senior Developer"
        }, {
            logoSrc: "images/review-carousel/logo1.svg",
            logoText: "Zoomerr",
            reviewText: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            reviewerImgSrc: "images/review-carousel/UserThumb1.png",
            reviewerName: "Hellen Jummy",
            reviewerTitle: "Team Lead"
        },
        {
            logoSrc: "images/review-carousel/logo2.svg",
            logoText: "SHELLS",
            reviewText: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            reviewerImgSrc: "images/review-carousel/UserThumb2.png",
            reviewerName: "Hellena John",
            reviewerTitle: "Co-founder"
        },
        {
            logoSrc: "images/review-carousel/logo3.svg",
            logoText: "ArtVenue",
            reviewText: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            reviewerImgSrc: "images/review-carousel/UserThumb3.png",
            reviewerName: "David Oshodi",
            reviewerTitle: "Manager"
        },
        {
            logoSrc: "images/review-carousel/logo4.svg",
            logoText: "WAVES",
            reviewText: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            reviewerImgSrc: "images/review-carousel/UserThumb4.png",
            reviewerName: "Sarah Collins",
            reviewerTitle: "Senior Developer"
        }
    ];


    const reviewCardsContainer = document.getElementById('review-cards-container');

    reviewCards.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
        <div class="card text-center">
            <div class="review-header d-flex align-items-center justify-content-start mb-3">
                <img src="${review.logoSrc}" alt="Logo" class="review-logo">
                <span class="logo-text text-start ms-2">${review.logoText}</span> <!-- Logoya ait yazı eklendi -->
            </div>
            <p class="review-text text-align-start mb-4">${review.reviewText}</p>
            <div class="reviewer-info d-flex align-items-end justify-content-start mt-auto">
                <img src="${review.reviewerImgSrc}" alt="Reviewer" class="reviewer-image rounded-circle">
                <div class="reviewer-details text-start ms-3">
                    <h5 class="reviewer-name mb-0">${review.reviewerName}</h5>
                    <p class="reviewer-title">${review.reviewerTitle}</p>
                </div>
            </div>
        </div>
    `;
        document.getElementById('review-cards-container').appendChild(card);
    });



    function scrollCards(direction) {
        const container = document.getElementById('review-cards-container');
        const scrollAmount = direction === 'left' ? -200 : 200;

        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }


    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => scrollCards('left'));
        rightArrow.addEventListener('click', () => scrollCards('right'));
    }
});

const points = document.querySelectorAll('.map-point');
const tooltipContent = document.getElementById('tooltip-content');
const tooltipImage = document.getElementById('tooltip-image');
const tooltipDescription = document.getElementById('tooltip-description');


const newPositions = [
    { top: '40%', left: '30%' },
    { top: '50%', left: '65%' },
    { top: '30%', left: '75%' },
];


points.forEach((point, index) => {
    if (newPositions[index]) {
        point.style.top = newPositions[index].top;
        point.style.left = newPositions[index].left;
    }

    point.addEventListener('mouseover', (event) => {
        const image = point.querySelector('.tooltip').innerText;
        const description = point.getAttribute('data-content');

        tooltipImage.src = `images/grow-collection/${image}.jpg`;

        tooltipImage.onload = function () {
            tooltipContent.style.display = 'block';
            const rect = point.getBoundingClientRect();
            tooltipContent.style.left = `${rect.left + window.scrollX}px`;
            tooltipContent.style.top = `${rect.bottom + window.scrollY}px`;
        };

        tooltipImage.onerror = function () {
            console.error('Resim yüklenirken bir hata oluştu:', tooltipImage.src);
        };

        tooltipDescription.innerText = description;
    });

    point.addEventListener('mouseout', () => {
        tooltipContent.style.display = 'none';
    });
});
