const openBtn = document.getElementById('openBtn');
const messageBox = document.getElementById('messageBox');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
  messageBox.classList.remove('hidden');

  messageBox.scrollIntoView({
    behavior: 'smooth'
  });
});

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.innerText = 'Pause Musik ⏸';
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.innerText = 'Putar Musik 🎵';
    isPlaying = false;
  }
});
