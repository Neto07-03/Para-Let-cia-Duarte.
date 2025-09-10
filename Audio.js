// Selecionando elementos do HTML
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioTime = document.getElementById('audioTime');

// Função para alternar entre play e pause
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause'; // Muda o texto para 'Pause'
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play'; // Muda o texto para 'Play'
    }
});

// Atualiza o tempo atual e total enquanto a música toca
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audioPlayer.currentTime);
    const duration = formatTime(audioPlayer.duration);
    audioTime.textContent = `${currentTime} / ${duration}`;
});

// Função para formatar o tempo em minutos:segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

