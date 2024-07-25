document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const reviewsContainer = document.getElementById('reviews-container');
const reviews = JSON.parse(localStorage.getItem('reviews')) || [];


if (reviews.length === 0) {
    reviewsContainer.textContent = "No reviews submitted yet.";
} else {
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        reviewElement.innerHTML = `
            <h2>${review.productName}</h2>
            <p><strong>Rating:</strong> ${review.rating} stars</p>
            <p><strong>Date Installed:</strong> ${review.dateInstalled}</p>
            <p><strong>Features:</strong> ${review.features.join(', ')}</p>
            <p><strong>Review:</strong> ${review.reviewText || 'No review text provided'}</p>
            <p><strong>Username:</strong> ${review.username || 'Anonymous'}</p>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
}
const reviewCountElement = document.createElement('p');

reviewCountElement.id = 'reviewCount';
reviewCountElement.textContent = `Number of Reviews Submitted: ${reviews.length}`;
document.querySelector('header').appendChild(reviewCountElement);
