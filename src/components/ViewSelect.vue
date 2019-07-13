<template lang="pug">
  ul.view-select
    li.view-select__item(
      v-for="workspace in workspaces" 
      :class="{'active': workspace.id === activeWorkspaceId }"
      :id="workspace.id"
      @click="SET_ACTIVE_WORKSPACE(workspace.id)"
    )
      span.view-select__link {{ workspace.name | truncate-mobile(5, 500)}}
</template>
<script>
import { SET_ACTIVE_WORKSPACE } from "@/mutation-types";
import { mapActions } from "vuex";

export default {
  computed: {
    workspaces() {
      return this.$store.state.workspaces;
    },
    activeWorkspaceId() {
      return this.$store.state.activeWorkspaceId;
    }
  },
  methods: {
    ...mapActions({ SET_ACTIVE_WORKSPACE: SET_ACTIVE_WORKSPACE })
  }
};
</script>

<style lang="scss" scoped>
.view-select {
  display: flex;

  &__item {
    position: relative;
    @include phones {
      max-width: 70px;
      max-height: 35px;
    }

    &:last-child {
      &:after,
      & > span:after {
        content: "";
      }

      & > span:after {
        background-color: $bg-color;
      }
    }

    &:before,
    &:after {
      position: absolute;
      bottom: 0;
      width: 10px;
      height: 10px;
      background-color: $border-color;
      z-index: 1;
      @include phones {
        width: 5px;
        height: 5px;
      }
    }

    &:before {
      right: 100%;
    }

    &:after {
      left: 100%;
    }
  }

  &__link {
    cursor: pointer;
    padding: 8px 24px;
    display: block;
    width: 100%;
    height: 100%;
    background-color: $border-color;
    border-radius: 10px 10px 0 0;
    color: $font-extra-color;

    @include phones {
      padding: 8px;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    &:before,
    &:after {
      position: absolute;
      bottom: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: $border-color;
      z-index: 3;
      @include phones {
        width: 10px;
        height: 10px;
      }
    }

    &:before {
      right: 100%;
    }

    &:after {
      left: 100%;
    }
  }
}

.active {
  & > span {
    background-color: $panel-color;
    color: $font-main-color;
  }

  &:after,
  & > span:after {
    content: "";
  }

  &:not(:first-child) {
    &:before,
    & > span:before {
      content: "";
    }
  }

  &:before,
  &:after {
    background-color: $panel-color;
  }
}
</style>

