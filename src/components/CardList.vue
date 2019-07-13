<template lang="pug">
  ul.card-list
    li.card-list__item(
      v-for="app in activeWorkspaceApps"
    )
      Card(
        :name="app.name"
        :installations="app.installations"
        :icon="app.icon"
        :platform="app.platform"
        :price="app.price"
        :rating="app.rating"
        :location="app.location"
        :asoindex="app.asoindex"
        :categoryPosition="app.categoryPosition"
      )
    
</template>
<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters(["activeWorkspaceApps"])
  }
};
</script>
<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  &__item {
    width: 50%;
    padding: 0 8px;
    margin-bottom: 16px;

    @include tablets {
      width: 100%;
    }
  }
}
</style>
