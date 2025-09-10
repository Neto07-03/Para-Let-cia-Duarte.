const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioTime = document.getElementById('audioTime');
const progressBar = document.getElementById('progressBar');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶︎';
  }
});

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = formatTime(audioPlayer.currentTime);
  const duration = formatTime(audioPlayer.duration);
  audioTime.textContent = `${currentTime} / ${duration}`;
  progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
});

progressBar.addEventListener('input', () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

audioPlayer.addEventListener('loadedmetadata', () => {
  audioTime.textContent = `00:00 / ${formatTime(audioPlayer.duration)}`;
});

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2,'0')}`;
}
