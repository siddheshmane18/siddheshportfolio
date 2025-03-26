const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const achievement = button.closest('.achievement');
        const fullDescription = achievement.querySelector('.full-description');
        const shortDescription = achievement.querySelector('.short-description');

        if (fullDescription.style.display === 'none' || !fullDescription.style.display) {
            fullDescription.style.display = 'block';
            shortDescription.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            fullDescription.style.display = 'none';
            shortDescription.style.display = 'block';
            button.textContent = 'Read More';
        }
    });
});