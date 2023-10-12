<template>
<div class="nav-item">

  <router-link class="nav-item-icon" :to="item.route">
    <v-icon :icon="item.icon" />
  </router-link>
  
  <div v-if="!isLastItem" class="nav-separator"></div>
</div>
</template>

<script>

export default {

props: {
  item: {
    type: Object
  },
  isLastItem: {
    type: Boolean,
    default: false
  }
},
data() {
  return {
    //
  }
}
}
</script>

<style scoped>

.nav-item-icon {
  width: 80px;
  height: 80px;
  border: 1px solid #2f2e41;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 0px 1px #2c3e50;
}

.nav-item-icon i {
  font-size: 2.5rem;
}

.nav-separator {
  width: 1px;
  height: 50px;
  background-color: #2c3e50;
  margin: auto;
}

</style>