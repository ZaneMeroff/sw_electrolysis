<template>

  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <menu-drawer />
    <router-view />
  </q-layout>

</template>

<script lang="ts">
// decorators
import { Component, Vue } from 'vue-property-decorator'

// components
import MenuDrawer from '@/components/MenuDrawer.vue'

@Component({
  components: {
    'menu-drawer' : MenuDrawer,
  }
})
export default class App extends Vue {


}
</script>

<style>

  * {
    font-family: 'Poppins';
  }

</style>
