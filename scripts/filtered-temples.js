// scripts/filtered-temples.js
const temples = [
    {
        name: "Bountiful Temple",
        location: "Bountiful, Utah, USA",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/Bountiful.jpeg"
    },
    {
        name: "Idaho Falls Temple",
        location: "Idaho Falls, Idaho, USA",
        dedicated: "September 23, 1945",
        area: 92000,
        imageUrl: "images/IdahoFalls.jpeg"
    },
    {
        name: "Logan Temple",
        location: "Logan, Utah, USA",
        dedicated: "May 17, 1884",
        area: 119619,
        imageUrl: "images/Logan.jpeg"

    },
    {
        name: "Rexburg Temple",
        location: "Rexburg, Idaho, USA",
        dedicated: "Feb 10, 2008",
        area: 57504,
        imageUrl: "images/Rexburg.jpeg"

    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake, Utah, USA",
        dedicated: "Feb 14, 1853",
        area: 253000,
        imageUrl: "images/SaltLake.jpeg"

    },
    {
        name: "St. George Temple",
        location: "St. George, Utah, USA",
        dedicated: "Apr 6, 1877",
        area: 110000,
        imageUrl: "images/StGeorge.jpeg"

    },
    {
        name: "Costa Rica Temple",
        location: "Belen, Heredia, CR",
        dedicated: "Jun 4, 2000",
        area: 10700,
        imageUrl: "images/Costa Rica.jpeg"

    },
    {
        name: "Payson Temple",
        location: "Payson, Utah, USA",
        dedicated: "June 7, 2015",
        area: 96630,
        imageUrl: "images/Payson.jpeg"

    },
    {
        name: "Manti Temple",
        location: "Manti, Utah, USA",
        dedicated: "May 21, 1888",
        area: 100373,
        imageUrl: "images/Manti.jpeg"

    },
    {
        name: "Red Cliffs Temple",
        location: "Washington, Utah, USA",
        dedicated: "Mar 24, 2024",
        area: 90000,
        imageUrl: "images/RedCliffs.jpeg"

    },
    {
        name: "San Diego Temple",
        location: "San Diego, California, USA",
        dedicated: "April 25, 1993",
        area: 72000,
        imageUrl: "images/SanDiego.webp"

    },
    {
        name: "Twin Falls Temple",
        location: "Twin Falls, Idaho, USA",
        dedicated: "Aug 24, 2008",
        area: 31245,
        imageUrl: "images/TwinFalls.jpeg"

    },

    
];


const createTempleCards = (filteredTemples) => {
    const container = document.getElementById('temple-cards-container');
    container.innerHTML = '';

    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.name;
        img.loading = 'lazy';
        figure.appendChild(img);
        
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.name}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;
        figure.appendChild(figcaption);

        container.appendChild(figure);
    });
};

// Initial load
createTempleCards(temples);

// Event listeners for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const filter = link.getAttribute('data-filter');
        let filteredTemples = temples;

        if (filter === 'old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        createTempleCards(filteredTemples);
        
        document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update footer date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
