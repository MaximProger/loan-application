$(document).ready(function () {
  $(".form__header__btn").click(function (evt) {
    evt.preventDefault();
    const currFormBody = $(this).parents(".form__box").find(".form__body");
    currFormBody.slideToggle();
    $(this).toggleClass("form__header__btn--active");
  });
});
