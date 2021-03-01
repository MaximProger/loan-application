$(document).ready(function () {
  $(".form__header__btn").click(function (evt) {
    evt.preventDefault();
    const currFormBody = $(this).parents(".form__box").find(".form__body");
    currFormBody.slideToggle();
    $(this).toggleClass("form__header__btn--active");
  });

  $(".form__add").click(function (evt) {
    evt.preventDefault();

    const currFormBoxBody = $(this)
      .parents(".form__box")
      .find(".form__box__body");
    console.log(currFormBoxBody);

    currFormBoxBody.html(
      currFormBoxBody.html() +
        `
    <div class="form__line">
      <div class="row">

        <div class="form__item col-12 col-md-6">
          <label for="address2" class="form__label">
            Address:
          </label>
          <input type="text" class="form__input" id="address2" name="address2"
            placeholder="Street address, City, ST ZIP">
        </div>

        <div class="form__item col-12 col-md-6">
          <label for="name2" class="form__label">
            Name:
          </label>
          <input type="text" class="form__input" id="name2" name="name2" placeholder="Name on Title">
        </div>

      </div>
    </div>

    <div class="form__line">
      <div class="row">

        <div class="form__item col-12 col-md-4" style="padding-left: 35px;">
          <label for="ownership" class="form__label">
            % of Ownership:
          </label>
          <input type="text" class="form__input" id="ownership" name="ownership" style="width: 126px;">
        </div>

        <div class="form__item col-12 col-md-4" style="padding-left: 32px;">
          <label for="acquisitionDate" class="form__label">
            Acquisition Date:
          </label>
          <input type="text" class="form__input" id="acquisitionDate" name="acquisitionDate"
            style="width: 126px;">
        </div>

        <div class="form__item col-12 col-md-4" style="justify-content: flex-end;">
          <label for="presentMarketValue" class="form__label">
            Present Market Value:
          </label>
          <input type="text" class="form__input" id="presentMarketValue" name="presentMarketValue"
            style="width: 126px;">
        </div>


      </div>
    </div>

    <div class="form__line">
      <div class="row">

        <div class="form__item col-12 col-md-4">
          <label for="mortgagesLiens" class="form__label">
            Mortgages & Liens:
          </label>
          <input type="text" class="form__input" id="mortgagesLiens" name="mortgagesLiens"
            style="width: 126px;">
        </div>

        <div class="form__item col-12 col-md-4">
          <label for="netRentalIncome" class="form__label">
            Net Rental Income:
          </label>
          <input type="text" class="form__input" id="netRentalIncome" name="netRentalIncome"
            style="width: 126px;">
        </div>

      </div>
    </div>
    `
    );
  });
});
