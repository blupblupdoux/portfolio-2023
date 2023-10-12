<template>
  <div id="navbar">
    <nav-item v-for="(item, index) in items" 
      :key="'nav-item-' + index" 
      :item="item" 
      :is-last-item="isLastItem(index)">
    </nav-item>
  </div>  
</template>

<script>

import NavItem from './navItem.vue'

export default {
  components: { NavItem },
  computed: {
    items() {
      return [
        { icon: 'fas fa-info', route: '/', text: '' },
        { icon: 'fas fa-suitcase', route: '/experience', text: '' },
        { icon: 'fas fa-lightbulb-o', route: '/skills', text: '' },
        { icon: 'fas fa-graduation-cap', route: '/education', text: '' },
        { icon: 'fas fa-code ', route: '/projects', text: '' }
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