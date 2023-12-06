<template>
  <div class="experience-item">
    <h3 class="experience-item-title">{{ item.title }}</h3>

    <div>
      <a :href="item.company.website" target="_blank" class="experience-item-company">{{ item.company.name }}</a>
      -
      <span class="experience-item-date"> {{ item.date }}</span>
    </div>

    <div class="experience-item-description">
      <p v-for="text in item.description">{{ text }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
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

.experience-item {
  border: 1px solid #2f2e41;
  border-radius: 10px;
  padding: 2% 4%;
  margin-bottom: 4%;
}

br {
  margin-bottom: 30px!important;
}

.experience-item-title {
  font-weight: bold;
}

.experience-item-company {
  text-decoration: underline;
}

.experience-item-date {
  font-style: italic;
  font-size: 0.8rem;
}

.experience-item-description {
  margin-top: 1rem;
}

.experience-item-description p {
  margin-bottom: 1rem;
}

</style>