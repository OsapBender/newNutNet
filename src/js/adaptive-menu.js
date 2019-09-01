$('.main-header__menu-btn').on('click', function () {
    $('.list-links--m-s-hidden').toggleClass('list-links--active');
    $('.overlay--hidden').toggleClass('overlay--active');
});

$('.main-header__overlay').click(function (e) {
    if (e.target !== $('.main-header__list-links, .active')) {
       $('.main-header__overlay').removeClass('overlay--active');
       $('.list-links--m-s-hidden').removeClass('list-links--active');
    }
});



