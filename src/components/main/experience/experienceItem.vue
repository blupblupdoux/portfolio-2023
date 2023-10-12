<template>
  <div class="experience-item">
    <h3 class="experience-item-title">{{ item.title }}</h3>

    <div>
      <span>{{ item.company.name }} </span>
      -
      <span class="experience-item-date"> {{ item.date }}</span>
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
  padding: 2% 4%
}

.experience-item-title {
  font-weight: bold;
}

.experience-item-date {
  font-style: italic;
  font-size: 0.8rem;
}

</style>