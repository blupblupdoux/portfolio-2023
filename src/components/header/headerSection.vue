<template>
  <div id="header">

    <img class="header-img" src="src/assets/images/undraw_Programmer_re_owql.svg" alt="">

    <div id="header-titles">
      <h1>{{ $t('header.title') }}</h1>
      <h2>{{ $t('header.subtitle') }}</h2>
    </div>    
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5% 0;
    background-color: #3d6240;
    color: white;
}

.header-img {
  width: 25%;
  margin-right: 4%;
}

#header h1 {
  font-size: 1.2rem;
  font-weight: bold;
}

#header h2 {
  font-size: 1rem;
  font-style: italic;
}

@media (min-width: 1024px) {

  #header {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: initial;
    color: inherit;
  }

  .header-img {
    width: 50%;
  }

  #header-titles {
    text-align: center;
  }

  #header h1 {
    font-size: 3rem;
    margin-top: 5%;
  }

  #header h2 {
    font-size: 1.8rem;
    font-style: italic;
  }
}

</style>