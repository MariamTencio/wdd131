const products = [
  {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
  },
  {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
  },
  {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
  },
  {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
  },
  {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
  }
];

// Populate the product select options
const productSelect = document.getElementById('product-name');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


const reviewCountElement = document.createElement('p');
const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
reviewCountElement.id = 'reviewCount';
reviewCountElement.textContent = `Number of Reviews Submitted: ${reviews.length}`;
document.querySelector('header').appendChild(reviewCountElement);

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const review = {
      productName: formData.get('product-name'),
      rating: formData.get('rating'),
      dateInstalled: formData.get('date-installed'),
      features: formData.getAll('features'),
      reviewText: formData.get('review'),
      username: formData.get('username')
  };

  // Save review to localStorage
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Redirect to review page
  window.location.href = 'review.html';
});
