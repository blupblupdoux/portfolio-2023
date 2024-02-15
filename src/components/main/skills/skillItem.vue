<template>
	<div class="skill-item">
		<p>{{ skill.title }}</p>

    <!-- <v-rating
      v-if="skill.rating"
      :model-value="skill.rating"
      length="3"
      size="small"
      density="comfortable"
      class="skill-item-rating"
      readonly
      half-increments
    /> -->
	</div>
</template>

<script>
export default {
  props: {
    skill: {
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

.skill-item {
  border: 1px solid #2f2e41;
  border-radius: 10px;
  padding: 2% 4%;
  width: 48%;
  margin-bottom: 0.5rem;
  margin-right: 1%;
  text-align: center;
}

.skill-item-rating {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

@media (min-width: 1024px) {
  .skill-item {
  border-radius: 10px;
  width: 24%;
  margin-bottom: 1.5rem;
  margin-right: 1%;
  text-align: center;
}
}

</style>