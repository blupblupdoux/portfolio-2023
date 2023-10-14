<template>
	<div id="experienceList">
    <experience-item v-for="(item, index) in items" 
      :key="'experience-item-' + index"
      :item="item"
    >
    </experience-item>
  </div>
</template>

<script>

import ExperienceItem from './experienceItem.vue';

export default {
	components: { ExperienceItem },
	data() {
		return {
			//
		}
	},
  computed: {
    items() {
      return [
        { title: this.$t('experience.title_1'), 
          date: this.$t('experience.date_1'),
          company: { name: 'Cardemy', website: 'https://cardemy.com/home' }, 
          description: this.$t('experience.description_1')
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>