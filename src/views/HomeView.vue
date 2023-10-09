<template>
  <header style="border: 1px solid red">
    <header-section></header-section>
  </header>

  <main style="border: 1px solid green">
    <main-section></main-section>
  </main>
</template>

<script>

import HeaderSection from '../components/layoutSections/headerSection.vue'
import MainSection from '../components/layoutSections/mainSection.vue'

export default {
  components: { HeaderSection, MainSection },
  data() {
    return {
      title: 'Je suis un titre'
    }
  }
}
</script>