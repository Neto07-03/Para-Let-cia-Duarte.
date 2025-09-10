// Selecionando elementos do HTML
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioTime = document.getElementById('audioTime');
const progressBar = document.getElementById('progressBar');

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

// Atualiza tempo e progresso enquanto toca
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audioPlayer.currentTime);
    const duration = formatTime(audioPlayer.duration);
    audioTime.textContent = `${currentTime} / ${duration}`;

    // Atualiza barra de progresso
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
});

// Permite o usuário arrastar a barra de progresso
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Atualiza a duração total quando os metadados carregarem
audioPlayer.addEventListener('loadedmetadata', () => {
    const duration = formatTime(audioPlayer.duration);
    audioTime.textContent = `00:00 / ${duration}`;
});

// Função para formatar o tempo em minutos:segundos
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}