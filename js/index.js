document.addEventListener('DOMContentLoaded', function() {
    const animeImages = document.querySelectorAll('.anime-image');

    animeImages.forEach(image => {
        image.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});
