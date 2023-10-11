<template>

  <header id="headerSection" style="border: 1px solid red">
    <header-section></header-section>
  </header>

  <nav id="navSection">
      <nav-section></nav-section>
  </nav>

  <main id="mainSection" style="border: 1px solid green">
    <main-section></main-section>
  </main>

</template>

<script>

import HeaderSection from '../components/header/headerSection.vue'
import MainSection from '../components/main/mainSection.vue'
import NavSection from '../components/navbar/navSection.vue'

export default {
  components: { HeaderSection, MainSection, NavSection },
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

#navSection {
  width: 8vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>