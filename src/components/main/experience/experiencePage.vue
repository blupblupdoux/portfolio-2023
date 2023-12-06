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
  methods: {
  },
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
          description: this.$tm('experience.description_1')
        },
        { title: this.$t('experience.title_2'), 
          date: this.$t('experience.date_2'),
          company: { name: 'Oclock', website: 'https://oclock.io/' }, 
          description: this.$tm('experience.description_2')
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>