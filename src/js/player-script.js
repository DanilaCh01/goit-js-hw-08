const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
    const savedTime = JSON.stringify(evt.seconds);
    localStorage.setItem("videoplayer-current-time", savedTime);
};

const parsedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(parsedTime);