document.addEventListener('DOMContentLoaded', () => {
    let playButton = document.querySelector('.video-preview__button_play');

    if (playButton) {
        let videoLayout = document.querySelector('.video-layout');
        let layoutBg = document.querySelector('.video-layout__bg');

        playButton.addEventListener('click', () => {
            if (!videoLayout.classList.contains('video-layout__video_active')) {
                videoLayout.classList.add('video-layout__video_active');
            }
        });

        layoutBg.addEventListener('click', () => {
            if (videoLayout.classList.contains('video-layout__video_active')) {
                videoLayout.classList.remove('video-layout__video_active');
            }
        });
    }
});