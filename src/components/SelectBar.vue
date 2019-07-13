<template lang="pug">
.select-bar
  ViewSelect.select-bar__views
  ul.select-bar__selectors
    li.select-bar__selector
      .select-bar__platforms
        .select-bar__title Фильтр
        PlatformSelect
    li.select-bar__selector
      .select-bar__rating
        .select-bar__title Рейтинг
        RatingSelect
</template>
<script>
import PlatformSelect from "@/components/PlatformSelect.vue";
import RatingSelect from "@/components/RatingSelect.vue";
import ViewSelect from "@/components/ViewSelect.vue";
export default {
  components: {
    PlatformSelect,
    RatingSelect,
    ViewSelect
  }
};
</script>
<style lang="scss" scoped>
.select-bar {
  background-color: $panel-color;
  border-radius: 0 $border-radius $border-radius $border-radius;
  padding: 16px 18px;
  position: relative;

  &__selectors {
    display: flex;

    @include phones {
      flex-direction: column;
    }
  }

  &__selector {
    &:not(:last-child) {
      margin-right: 16px;
      @include phones {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
  }

  &__title {
    margin-bottom: 18px;
  }

  &__views {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>

