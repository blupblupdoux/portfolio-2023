<template>
  <div id="navbar">
    <nav-item v-for="(item, index) in items" :item="item" :is-last-item="isLastItem(index)"></nav-item>
  </div>  
</template>

<script>

import NavItem from './navItem.vue'

export default {
  components: { NavItem },
  computed: {
    items() {
      return [
        { icon: 'fas fa-suitcase', text: '' },
        { icon: 'fas fa-lightbulb-o', text: '' },
        { icon: 'fas fa-graduation-cap', text: '' },
        { icon: 'fas fa-info', text: '' },
        { icon: 'fas fa-code ', text: '' }
      ]
    }
  },
  methods: {
    isLastItem(index) {
      return this.items.length == (index + 1)
    }
  }
}
</script>

<style scoped>

#navbar {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>