<template lang="pug">
  ul.platforms
    li.platforms__item(
      @click="SET_PLATFORM('all')"
      id="all"
      :class="{'platforms__item--is-active': 'all' === activePlatform }")      
        .platforms__content Все
    li.platforms__item(
      v-for="platform in platforms"
      :id="platform"
      :class="{'platforms__item--is-active': platform === activePlatform }"
      @click="SET_PLATFORM(platform)"
    )
      .platforms__content
         svgicon(:name="platform" :color="platform === activePlatform ? '#fff': '#979898'")
</template>
<script>
import "@/icons/android";
import "@/icons/apple";
import { SET_PLATFORM } from "@/mutation-types";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({ SET_PLATFORM: SET_PLATFORM })
  },
  computed: {
    ...mapState(["platforms"]),
    ...mapGetters(["activePlatform"])
  }
};
</script>
<style lang="scss" scoped>
.platforms {
  display: flex;
  margin: 0 -10px;

  &__item {
    padding: 0 10px;
    color: $font-extra-color;
    position: relative;

    &:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        background-color: $border-color;
        height: 18px;
        width: 1px;
      }
    }

    &--is-active > div {
      background-color: $choosed-color;
      color: #fff;
    }
  }

  &__content {
    width: 54px;
    height: 34px;
    background-color: $bg-color;
    border-radius: $border-radius;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>

