let player;

// This function runs automatically when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'GHnPrGZ9vC0', // This is the ID for "Cupid" by Fifty Fifty
        playerVars: {
            'autoplay': 0,
            'controls': 0
        }
    });
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function celebrate() {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');

    if (player && player.playVideo) {
        player.setVolume(100); // Ensures volume is up
        player.playVideo();
    }

    setInterval(createHeart, 300);
}


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}