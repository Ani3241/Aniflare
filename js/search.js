// Example anime data
const animeList = [
    {
        name: "Kaiju no 8 ",
        image: "images/Kaiju no 8.jpeg",
        link: "https://example.com/naruto"
    },
    {
        name: "One Piece ",
        image: "images/Solo leveling.jpeg",
        link: "https://example.com/onepiece"
    },
    {
        name: "Attack on Titan ",
        image: "https://example.com/aot.jpg",
        link: "https://example.com/aot"
    }
    // Add more anime data as needed
];

function searchAnime() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    animeList.forEach(anime => {
        if (anime.name.toLowerCase().includes(input)) {
            const animeItem = document.createElement('div');
            animeItem.className = 'anime-item';
            
            const animeImage = document.createElement('img');
            animeImage.src = anime.image;
            animeItem.appendChild(animeImage);
            
            const animeLink = document.createElement('a');
            animeLink.href = anime.link;
            animeLink.target = '_blank';
            animeLink.textContent = anime.name;
            animeItem.appendChild(animeLink);
            
            results.appendChild(animeItem);
        }
    });
}
