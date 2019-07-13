<template lang="pug">
  .select
    Multiselect(
      :value="activeRating"      
      :options="ratings" 
      placeholder="Выбрать"
      :searchable="false"
      :show-labels="false"
      @input="SET_RATING"
    )
      template(slot="singleLabel", slot-scope="props")
        .option__text {{ props.option | rating }}
        svgicon(name="star" color="#F8BF25").card__star

      template(slot="option", slot-scope="props")
        .option__text {{ props.option | rating }}
        svgicon(name="star" color="#F8BF25").card__star
</template>
<script>
import "@/icons/star";
import Multiselect from "vue-multiselect";
import { mapState, mapActions, mapGetters } from "vuex";
import { SET_RATING } from "@/mutation-types";

export default {
  components: {
    Multiselect
  },
  computed: {
    ...mapState(["ratings"]),
    ...mapGetters(["activeRating"])
  },
  methods: {
    ...mapActions({ SET_RATING: SET_RATING })
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
//multiselect styles
.select::v-deep .multiselect {
  width: 200px;
  min-height: 34px;
  height: 34px;
  font-family: "Museo Sans";

  .multiselect__tags {
    padding-top: 0 !important;
  }

  .multiselect__placeholder {
    padding: 0;
    margin: 0;
    display: inline-block !important;
    color: $font-extra-color;
  }

  .multiselect__tags:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5 * 30px;
    z-index: -1;
    border-radius: 10px;
    background-color: $bg-color;
  }

  &--active {
    & .multiselect__tags {
      border-radius: 10px 10px 0 0 !important;
    }

    & .multiselect__tags:before {
      box-shadow: 0 3px 15px rgba(#000, 0.16);
    }
  }

  .multiselect__single {
    padding-left: 0;
    display: flex;
    margin: 0;
  }

  .multiselect__option {
    // min-height: 34px;
    min-height: 30px;
    padding: 0;
    padding-left: 18px;
    display: flex;
    align-items: center;
    color: $font-extra-color;

    &--highlight {
      background-color: inherit;
    }

    &--selected {
      background-color: $choosed-color;
      color: #fff;
      font-weight: normal;
    }
  }

  .multiselect__select {
    &::before {
      content: "";
      display: block;
      position: relative;
      right: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%) rotate(45deg);
      margin-top: 0;
      border: 0;
      width: 6px;
      height: 6px;
      border-bottom: 1px solid $font-extra-color;
      border-right: 1px solid $font-extra-color;
    }
  }

  .multiselect__tags {
    min-height: 100%;
    font-size: 15px;
    color: $font-extra-color;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 6px 40px 0 18px;
    background-color: $bg-color;
    border: 0;
    border-radius: 10px;
  }

  z .multiselect__input {
    background-color: $bg-color;
    font-size: 15px;
    padding-left: 0;
    font-size: 15px;
    color: $font-extra-color;
  }

  .multiselect__single {
    background-color: $bg-color;
    display: flex;
    align-items: center;
  }

  .multiselect__content-wrapper {
    background-color: $bg-color;
    border: 0;
    position: relative;
    padding: 10px 0 13px;
  }

  //option styles
  .option__text {
    margin-right: 5px;
  }
}
</style>