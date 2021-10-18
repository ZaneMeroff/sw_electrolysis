<template>

  <section>

    <h1>SW Electrolysis & Spa</h1>

  </section>

</template>

<script lang="ts">
// decorators
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Main extends Vue {

}
</script>

<style>

  section {
    display: flex !important;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    padding: 50px 20px 10px 20px;
    width: 100%;
  }

</style>
