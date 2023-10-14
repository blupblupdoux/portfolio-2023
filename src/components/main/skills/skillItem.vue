<template>
	<div class="skill-item">
		<p>{{ skill.title }}</p>
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
  width: 32%;
  margin-bottom: 1.5rem;
}

</style>