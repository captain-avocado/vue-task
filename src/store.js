import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'

import {
  FETCH_WORKSPACES,
  SET_ACTIVE_WORKSPACE,
  SET_PLATFORM,
  SET_RATING
} from '@/mutation-types';

const vuexPersist = new VuexPersist({
  key: 'app',
  storage: localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ratings: [4, 3, 2],
    platforms: ['apple', 'android'],
    activeWorkspaceId: 0,
    workspaces: []
  },
  getters: {
    activeWorkspace: state => {
      return state.workspaces.find(el => el.id === state.activeWorkspaceId);
    },
    activeWorkspaceApps: (state, getters) => {
      return (getters.activeWorkspace) ? getters.activeWorkspace.activeApps : [];
    },
    activePlatform: (state, getters) => {
      return (getters.activeWorkspace) ? getters.activeWorkspace.activePlatform : 'all';
    },
    activeRating: (state, getters) => {
      return (getters.activeWorkspace) ? getters.activeWorkspace.activeRating : '';
    }
  },
  mutations: {
    [SET_ACTIVE_WORKSPACE](state, id) {
      state.activeWorkspaceId = id;
    },
    [FETCH_WORKSPACES](state, workspaces) {
      state.workspaces = workspaces;
    },
    [SET_PLATFORM](state, platform) {
      const activeWorkspace = state.workspaces[state.activeWorkspaceId];

      //filter all apps by rating
      activeWorkspace.activeApps = activeWorkspace.applications
        .filter(app => app.rating >= activeWorkspace.activeRating);

      //filter by platform if it's needed
      if (platform !== 'all') {
        activeWorkspace.activeApps = activeWorkspace.activeApps
          .filter(app => app.platform === platform);
      }

      //set active platform
      activeWorkspace.activePlatform = platform;
    },
    [SET_RATING](state, rating) {
      const activeWorkspace = state.workspaces[state.activeWorkspaceId];

      //filter all apps by rating
      activeWorkspace.activeApps = activeWorkspace.applications
        .filter(app => app.rating >= rating);

      //filter by platform if it's needed
      if (activeWorkspace.activePlatform !== 'all') {
        activeWorkspace.activeApps = activeWorkspace.activeApps
          .filter(app => app.platform === activeWorkspace.activePlatform);
      }
      //set active rating
      activeWorkspace.activeRating = rating;
    }
  },
  actions: {
    [SET_ACTIVE_WORKSPACE]({ commit }, id) {
      commit(SET_ACTIVE_WORKSPACE, id);
    },
    [FETCH_WORKSPACES]({ commit }) {
      if (localStorage.app) {
        const app = JSON.parse(localStorage.app);
        commit(FETCH_WORKSPACES, app.workspaces);
        commit(SET_ACTIVE_WORKSPACE, app.activeWorkspaceId);
      } else {
        fetch('./apps.json')
          .then(response => {
            return response.json();
          })
          .then(json => {
            const workspacesArray = Object.values(json);

            workspacesArray.forEach((ws, i) => {
              ws.applications.forEach(app => {
                app.rating = Number(app.rating.replace(',', '.'));
              });
              ws.id = i;
              ws.activeApps = [...ws.applications];
              ws.activePlatform = 'all';
              ws.activeRating = '';
            })

            commit(FETCH_WORKSPACES, workspacesArray);
          })
          .catch(error => {
            console.log(FETCH_WORKSPACES, error);
          });
      }
    },
    [SET_PLATFORM]({ commit }, platform) {
      commit(SET_PLATFORM, platform);
    },
    [SET_RATING]({ commit }, rating) {
      commit(SET_RATING, rating);
    }
  },
  plugins: [vuexPersist.plugin]
});

