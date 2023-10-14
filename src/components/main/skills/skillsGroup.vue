<template>
	 <div class="skills-group">
      <h3 class="skills-group-title">{{ title }}</h3>

      <div class="skills-list">
        <skill-item v-for="(skill, index) in skillsList" 
          :key="'skill-item-' + index" 
          :skill="skill">
        </skill-item>
      </div>
    </div>
</template>

<script>

import SkillItem from './skillItem.vue'

export default {
  components: { SkillItem },
  props: {
    title: {
      type: String
    },
    skillsList: {
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

.skills-group {
  margin-bottom: 0.75rem;
}
.skills-group-title {
  font-weight: bold;
  margin-bottom: 0.75rem;
}
.skills-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>