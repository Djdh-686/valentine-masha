let player;

// 1. This function MUST be named exactly this for the YouTube API to find it
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'GHnPrGZ9vC0', // Cupid - Fifty Fifty
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'mute': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // This confirms the music is loaded and ready to go
    console.log("Music is ready!");
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    // We use window.innerWidth/Height to make sure it stays on the screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function celebrate() {
    // FAIL-SAFE: We move these to the top so the screen changes 
    // even if the music has a problem.
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');

    // Start the hearts immediately
    setInterval(createHeart, 300);

    // 2. Try to play the music
    try {
        if (player && typeof player.playVideo === 'function') {
            player.unMute(); 
            player.setVolume(100);
            player.playVideo();
        }
    } catch (e) {
        console.log("Audio play failed, but the party continues!");
    }
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