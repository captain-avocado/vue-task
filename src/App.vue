<template lang="pug">
#app.app
  script(type="application/javascript" src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver")
  .app__container
    SelectBar.app__select-bar
    CardList
</template>
<script>
import "@/assets/sass/main.scss";
import SelectBar from "@/components/SelectBar.vue";
import CardList from "@/components/CardList.vue";
import { FETCH_WORKSPACES } from "@/mutation-types";

export default {
  components: {
    SelectBar,
    CardList
  },
  created() {
    this.$store.dispatch(FETCH_WORKSPACES);
  }
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background-color: $bg-color;

  @include wrapper;

  &__container {
    @include container;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }

  &__select-bar {
    margin-bottom: 23px;
  }
}
</style>
