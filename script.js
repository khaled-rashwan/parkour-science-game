// Parkour Science Game Script
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');
    const yellowBlock = document.querySelector('.yellow-block');
    
    // Add click event to all blocks
    blocks.forEach((block, index) => {
        block.addEventListener('click', function() {
            if (block.classList.contains('yellow-block')) {
                alert('Congratulations! You reached the goal! 🎉');
                celebrateWin();
            } else {
                console.log(`Clicked red block ${index + 1}`);
            }
        });
    });
    
    // Celebration effect
    function celebrateWin() {
        yellowBlock.style.animation = 'none';
        setTimeout(() => {
            yellowBlock.style.animation = 'pulse 0.5s infinite';
        }, 10);
    }
});
