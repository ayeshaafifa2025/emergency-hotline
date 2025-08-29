
const navCoinCount = document.getElementById('nav-coin-count');
const callButtons = document.querySelectorAll('.call-button');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

for (let i = 0; i < callButtons.length; i++) {
    const button = callButtons[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        
        const currentCount = parseInt(navCoinCount.innerText);

        if (currentCount >= 20) {
            
            navCoinCount.innerText = currentCount - 20;

            
            const card = button.closest('.bg-white'); 
            const serviceName = card.querySelector('h3').innerText; 
            const serviceNumber = card.querySelector('h2').innerText; 

            
            alert(`Calling ${serviceName} (${serviceNumber})...`);

        
            const callTime = new Date().toLocaleTimeString();

            
            const historyItem = document.createElement('div');
            historyItem.classList.add('flex', 'justify-between', 'items-center', 'p-3', 'border', 'rounded', 'bg-gray-50', 'mb-2');

            historyItem.innerHTML = `
                <div>
                    <p class="font-semibold">${serviceName}</p>
                    <p class="text-blue-600">${serviceNumber}</p>
                </div>
                <div class="text-gray-500 font-mono">${callTime}</div>
            `;

            historyList.appendChild(historyItem);

        } else {
            alert("Sorry, you don't have enough coins to make a call.");
        }
    });
}

// Clear History Button functionality
clearHistoryBtn.addEventListener('click', function () {
    historyList.innerHTML = "";
});


