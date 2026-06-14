document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bgVideo');
    const soundToggle = document.getElementById('soundToggle');
    const muteIcon = document.getElementById('muteIcon');
    const soundIcon = document.getElementById('soundIcon');
    const videoWrapper = document.querySelector('.video-wrapper');

    function toggleMute() {
        video.muted = !video.muted;
        if (video.muted) {
            muteIcon.classList.remove('hidden');
            soundIcon.classList.add('hidden');
        } else {
            muteIcon.classList.add('hidden');
            soundIcon.classList.remove('hidden');
        }
    }

    // Toggle mute on button click
    soundToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMute();
    });

    // Toggle mute when clicking the video itself
    videoWrapper.addEventListener('click', toggleMute);
});
