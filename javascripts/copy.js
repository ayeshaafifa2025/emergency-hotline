// হার্ট আইকনের জন্য কোড
const navCopyCount = document.getElementById('nav-copy-count');
const copyButton = document.querySelectorAll('.copy-button');

for (let i = 0; i < copyButton.length; i++) {
    const heart = copyButton[i];
    heart.addEventListener('click', function (event) {
        event.preventDefault();
        const currentCount = parseInt(navCopyCount.innerText);
        const newCount = currentCount + 1;
        navCopyCount.innerText = newCount;
    });
}