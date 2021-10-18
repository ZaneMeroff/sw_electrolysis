import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localforage as any,
  asyncStorage: true,
  modules: [],
  // modules: [ 'Example' ],
});

export const store: any = new Vuex.Store({
  // strict: process.env.DEV === 'true',
  state: {},
  modules: {},
  plugins: [ vuexLocal.plugin ],
})

// export const stateExample = new Example({ store, name: 'Example' })
