import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('loaded', function () {
    console.log('Player is loaded');

    player.on('play', function () {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function (title) {
        console.log('title:', title);
    });
});
