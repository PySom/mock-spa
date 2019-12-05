const Video = () => {
    const video = document.createElement('video');
    video.controls = 'controls';
    video.src = './videos/vids.mp4'
    video.style.width = "100%";
    return video;
}

window.video = Video;