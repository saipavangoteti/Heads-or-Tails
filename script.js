document.getElementById('flip-button').addEventListener('click', function() {
    // Add the flip animation
    const coin = document.getElementById('coin');
    coin.classList.add('flip');
    
    // Wait for the animation to complete before changing the result
    setTimeout(() => {
        // Randomly pick 'Heads' or 'Tails'
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        
        // Change the coin image and result text
        coin.src = result === 'Heads' ? 'heads.png' : 'tails.png';
        document.getElementById('result').textContent = result;

        // Remove the flip animation class to allow for re-triggering the animation
        coin.classList.remove('flip');
    }, 1000); // Matches the duration of the animation
});
