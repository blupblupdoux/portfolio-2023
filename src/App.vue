<template>

  <header id="headerSection">
    <header-section></header-section>
  </header>

  <nav id="navSection">
      <nav-section></nav-section>
  </nav>

  <main id="mainSection">
    <RouterView />
  </main>

</template>

<script>

import {RouterView } from "vue-router";
import HeaderSection from './components/header/headerSection.vue'
import NavSection from './components/navbar/navSection.vue'

export default {
  components: { HeaderSection, NavSection },
  data() {
    return {
      title: 'Je suis un titre'
    }
  }
}
</script>

<style scoped>

#headerSection, #mainSection {
  width: 46vw;
  height: 100vh;
}

#headerSection {
  display: flex;
  align-items: center;
  justify-content: center;
}

#navSection {
  width: 8vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#mainSection {
  padding: 0 5%;
  overflow-y: auto;
  display: flex;
  align-items: center;
}

</style>