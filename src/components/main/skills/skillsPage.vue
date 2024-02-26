<template>
  <div>
    <skills-group :title="$t('skills.frameworkTitle')" :skills-list="frameworkSkills"></skills-group>
    <skills-group :title="$t('skills.languageTitle')" :skills-list="languageSkills"></skills-group>
    <skills-group :title="$t('skills.devopsTitle')" :skills-list="devopsSkills"></skills-group>
    <skills-group :title="$t('skills.otherTitle')" :skills-list="{}"></skills-group>

    <p>{{ $t('skills.otherKnowledge') }}</p>
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
    frameworkSkills() {
      return [
        { type: 'framework', title: 'VueJS', rating: 2.5 },
        { type: 'framework', title: 'Laravel', rating: 2 },
        { type: 'framework', title: 'Quasar', rating: 2 },
        { type: 'framework', title: 'Symfony', rating: 1.5 },
      ]
    },
    languageSkills() {
      return [
        { type: 'language', title: 'JavaScript', rating: 2.5 },
        { type: 'language', title: 'PHP', rating: 2.5 },
        { type: 'language', title: 'HTML/CSS', rating: 3 },
        { type: 'language', title: 'SQL', rating: 3 },
      ]
    },
    devopsSkills() {
      return [
        { type: 'devops', title: 'Git', rating: 2 },
        { type: 'devops', title: 'Docker', rating: 1.5 },
        { type: 'devops', title: 'Circle Ci', rating: 1.5 },
        { type: 'devops', title: 'AWS', rating: 1 },
      ]
    }
  },
}
</script>

<style scoped>

</style>