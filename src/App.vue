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

  <footer id="footerSection">
    <lang-switch></lang-switch>
  </footer>
</template>

<script>

import {RouterView } from "vue-router";
import HeaderSection from './components/header/headerSection.vue'
import NavSection from './components/navbar/navSection.vue'
import LangSwitch from './components/LangSwitch.vue'

export default {
  components: { HeaderSection, NavSection, LangSwitch },
  data() {
    return {
      //
    }
  },
  computed: {
    smallScreen() {
      return window.innerWidth < 1024
    }
  }
}
</script>

<style scoped>

#mainSection {
  padding: 3% 5%;
  overflow-y: auto;
  display: flex;
  align-items: center;
}

#footerSection {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

@media (min-width: 1024px) {
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

  #footerSection {
    position: absolute;
    bottom: 0;
    right: 1rem;
  }
}

</style>