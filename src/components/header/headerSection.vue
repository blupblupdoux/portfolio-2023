<template>
  <div id="header">
    <img class="header-img" src="src/assets/images/undraw_Programmer_re_owql.svg" alt="">    
    <h1>{{ $t('header.title') }}</h1>
    <h2>{{ $t('header.subtitle') }}</h2>
  </div> 
</template>
  
<script>

export default {
  data() {
    return {
      //
    }
  }
}
</script>

<style scoped>

#header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#header h1 {
  font-size: 3rem;
  margin-top: 5%;
}

#header h2 {
  font-size: 1.8rem;
  font-style: italic;
}

.header-img {
  width: 50%;
}

</style>