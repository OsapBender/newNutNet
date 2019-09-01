$('.video__player').on('click', function () {
    $('.video-modal').toggleClass('video-modal--active');
});
$('.video-modal').on('click', function () {
    $('.video-modal').removeClass('video-modal--active');
});