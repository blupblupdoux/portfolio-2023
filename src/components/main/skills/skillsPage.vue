<template>
  <div>

    <skills-group :title="$t('skills.languageTitle')" :skills-list="languageSkills"></skills-group>

    <skills-group :title="$t('skills.frameworkTitle')" :skills-list="frameworkSkills"></skills-group>

  </div>
</template>

<script>

import SkillsGroup from './skillsGroup.vue'

export default {
  components: { SkillsGroup },
	data() {
		return {
			//
		}
	},
  computed: {
    rating() {
      return [
        { id: 1, definition: 'coucou' },
        { id: 2, definition: 'coucou' },
        { id: 3, definition: 'coucou' }
      ]
    },
    languageSkills() {
      return [
        { type: 'language', title: 'JavaScript', image: '', rate: '' },
        { type: 'language', title: 'PHP', image: '', rate: '' },
        { type: 'language', title: 'HTML/CSS', image: '', rate: '' },
      ]
    },
    frameworkSkills() {
      return [
        { type: 'framework', title: 'VueJS', image: '', rate: '' },
        { type: 'framework', title: 'Laravel', image: '', rate: '' },
        { type: 'framework', title: 'Quasar', image: '', rate: '' },
      ]
    },
    devopsSkills() {
      return [
        { type: 'devops', title: 'Git', image: '', rate: '' },
        { type: 'devops', title: 'Docker', image: '', rate: '' },
        { type: 'devops', title: 'AWS', image: '', rate: '' },
      ]
    },
    othersSkills() {
      return [
        { type: 'other', title: 'Microsoft Teams', image: '', rate: '' },
        { type: 'other', title: 'Agile - scrum', image: '', rate: '' },
      ]
    }
  },
}
</script>

<style scoped>


</style>