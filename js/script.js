// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add click event to the retro button
    const button = document.querySelector('.retro-button');
    button.addEventListener('click', () => {
        console.log('Retro button clicked!');
        alert('Welcome to my pixelated world!');
    });

    // Example: Update taskbar time (optional)
    const timeElement = document.querySelector('.taskbar-time');
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeElement.textContent = timeString;
    };
    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});