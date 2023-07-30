import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
    const currentTime = evt.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
};

const savedTime = localStorage.getItem("videoplayer-current-time");
const parsedTime = parseFloat(savedTime);

if (!isNaN(parsedTime)) {
    player.setCurrentTime(parsedTime);
} else {
    player.setCurrentTime(0);
};



// import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay(evt) {
//     const currentTime = evt.seconds;
//     localStorage.setItem("videoplayer-current-time", currentTime);
// };

// const savedTime = localStorage.getItem("videoplayer-current-time");
// if (savedTime !== null) {
//     const parsedTime = parseFloat(savedTime);
//     player.setCurrentTime(parsedTime);
// }
