<template lang="pug">
  .card
    .card__top-row
      .card__img-wrap
        img.card__img(v-lazyload src="@/assets/images/loading.gif" :data-src="icon" data-err="@/assets/images/error.png")
        //- (v-lazy="icon")
      .card__info
        .card__name {{ name | truncate(50) }}
        .card__params
          .card__params-col
            svgicon(:name="platform" color="#979898" width="9" height="12").card__platform
            .card__price {{ price }}
          .card__params-col
            svgicon(name="star" color="#F8BF25").card__star
            .card__rating {{ rating | point-rating }}
          .card__params-col
            svgicon(name="mark" color="#979898").card__mark
            .card__lang {{ location }}
    .card__bottom-row
      ul.card__info-list
        li.card__info-item
          .card__info-container
            .card__info-text ASO index
            .card__info-num {{ asoindex }}
        li.card__info-item
          .card__info-container
            .card__info-text Установок за месяц
            .card__info-num {{ installations | installs-round }}
        li.card__info-item
          .card__info-container
            .card__info-text В категории
            .card__info-num {{ categoryPosition }}
</template>
<script>
import "@/icons";

export default {
  props: [
    "name",
    "installations",
    "icon",
    "platform",
    "price",
    "rating",
    "location",
    "asoindex",
    "categoryPosition"
  ]
};
</script>
<style lang="scss" scoped>
.card {
  padding: 12px;
  border-radius: $border-radius;
  background-color: $panel-color;

  &__top-row {
    display: flex;
    margin-bottom: 25px;
  }

  &__img-wrap {
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
    margin-right: 15px;
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
  }

  &__name {
    font-size: 18px;
    margin-bottom: auto;
    max-height: 50px;
    overflow: hidden;
  }

  &__params {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    padding-right: 35px;
    display: flex;
    flex-direction: column;
    height: 80px;
    flex: 1;
  }

  &__info-list {
    text-align: center;
    display: flex;
  }

  &__info-item {
    flex: 1;

    &:nth-child(2) {
      flex: 1.5;
    }

    &:not(:last-child) {
      border-right: 1px solid $border-color;
    }
  }

  &__info-text {
    font-size: 12px;
    color: $font-extra-color;
    margin-bottom: 6px;
  }

  &__info-num {
    font-weight: 900;
    font-size: 26px;
  }

  &__params-col {
    display: flex;
    align-items: center;
  }

  &__price {
    font-size: 13px;
    color: $font-extra-color;
    padding: 2px 5px;
    border: 1px solid $border-color;
    border-radius: 6px;
    margin-left: 10px;
  }

  &__lang,
  &__rating {
    font-size: 18px;
    margin-left: 6px;
  }
}
</style>

