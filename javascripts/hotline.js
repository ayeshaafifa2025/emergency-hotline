
const navHeartCount = document.getElementById('nav-heart-count');
const cardHearts = document.querySelectorAll('.card-heart');

for (let i = 0; i < cardHearts.length; i++) {
    const heart = cardHearts[i];
    heart.addEventListener('click', function (event) {
        event.preventDefault();
        const currentCount = parseInt(navHeartCount.innerText);
        const newCount = currentCount + 1;
        navHeartCount.innerText = newCount;
    });
}

