
// const navCopyCount = document.getElementById('nav-copy-count');
// const copyButton = document.querySelectorAll('.copy-button');

// for (let i = 0; i < copyButton.length; i++) {
//     const heart = copyButton[i];
//     heart.addEventListener('click', function (event) {
//         event.preventDefault();
//         const currentCount = parseInt(navCopyCount.innerText);
//         const newCount = currentCount + 1;
//         navCopyCount.innerText = newCount;
//     });
// }



const navCopyCount = document.getElementById('nav-copy-count');
const copyButtons = document.querySelectorAll('.copy-button');

for (let i = 0; i < copyButtons.length; i++) {
    const button = copyButtons[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // 1. Copy Count বাড়ানো
        const currentCount = parseInt(navCopyCount.innerText);
        const newCount = currentCount + 1;
        navCopyCount.innerText = newCount;

        // 2. Hotline Number কপি করা
        const hotlineNumber = button.closest('.bg-white').querySelector('h2').innerText;
        navigator.clipboard.writeText(hotlineNumber)
            .then(() => {
                alert("Hotline Number Copied: " + hotlineNumber);
            })
            .catch(err => {
                console.error("Copy failed", err);
            });
    });
}