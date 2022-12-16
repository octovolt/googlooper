/**
 * looper
 * 
 * Created in 2022 by Octopus Arts
 */

const state = {
  "loop": false,
  "startTime": 0,
  "endTime": 10
};

(() => {
  const video = document.getElementById('html5-video');

  document.getElementById('rewind').addEventListener('click', (_e) => {
    video.currentTime = video.currentTime - 5 < 0 
      ? 0 
      : video.currentTime - 5;
  });

  const playButton = document.getElementById('play');
  playButton.addEventListener('click', (_e) => {
    playButton.classList.add('active');
    video.play();
  });

  const loopButton = document.getElementById('loop');
  loopButton.addEventListener('click', (_e) => {
    state.loop = !state.loop;
    if (state.loop) {
      loopButton.classList.add('active');
      loop();
    } else {
      loopButton.classList.remove('active');
    }
  });
  
  const pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('pointerdown', (_e) => { // pointerdown for speed
    playButton.classList.remove('active');
    video.pause();
  });

  document.getElementById('fast-forward').addEventListener('click', (_e) => {
    video.currentTime = video.currentTime + 5 > video.duration 
      ? video.duration 
      : video.currentTime + 5;
  });

  // Load a source like 
  // https://drive.google.com/uc?id=1nxZlnR3GJeaQaVtacnRidZJyVW9btRw7&export=download
  // based on the ID in a link like
  // https://drive.google.com/file/d/1nxZlnR3GJeaQaVtacnRidZJyVW9btRw7/view?usp=share_link
  document.getElementById('load-file').addEventListener('click', (_e) => {
    playButton.classList.add('active'); // autoplay on load
    const src = 
      'https://drive.google.com/uc?id=' + 
      document.getElementById('file-id').value + 
      '&export=download';
    video.src = src;
    video.style.display = 'block';
    video.load();
  });

  const startTimeField = document.getElementById('start-time');

  const setStartButton = document.getElementById('set-start');
  setStartButton.addEventListener('click', (_e) => {
    state.startTime = Number(startTimeField.value);
  });

  const setStartToCurrentTimeButton = document.getElementById('set-start-to-current-time');
  setStartToCurrentTimeButton.addEventListener('click', (_e) => {
    state.startTime = video.currentTime;
    startTimeField.value = state.startTime;
  });

  const endTimeField = document.getElementById('end-time');

  const setEndButton = document.getElementById('set-end');
  setEndButton.addEventListener('click', (_e) => {
    state.endTime = Number(endTimeField.value);
  });

  const setEndToCurrentTimeButton = document.getElementById('set-end-to-current-time');
  setEndToCurrentTimeButton.addEventListener('click', (_e) => {
    state.endTime = video.currentTime;
    endTimeField.value = state.endTime;
  });

  const changeRateButton = document.getElementById('change-rate');
  changeRateButton.addEventListener('click', (_e) => {
    video.playbackRate = document.getElementById('rate').value;
  });

  const loop = () => {
    if (state.loop) {
      if (video.currentTime > state.endTime) {
          video.currentTime = state.startTime;
      }
    }

    if (Number(startTimeField.value) >= Number(endTimeField.value)) {
      setStartButton.disabled = true;
      setEndButton.disabled = true;
    } else {
      setStartButton.disabled = false;
      setEndButton.disabled = false;
    }

    if (video.currentTime >= state.endTime) {
      setStartToCurrentTimeButton.disabled = true;
    } else if (video.currentTime < state.startTime) {
      setEndToCurrentTimeButton.disabled = true;
    } else {
      setStartToCurrentTimeButton.disabled = false;
      setEndToCurrentTimeButton.disabled = false;
    }

    window.requestAnimationFrame(loop);
  };

  loop();
})();


