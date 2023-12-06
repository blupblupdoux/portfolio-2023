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
        { type: 'framework', title: 'Laravel', rating: 2.5 },
        { type: 'framework', title: 'Quasar', rating: 2 },
        { type: 'framework', title: 'Symfony', rating: 1 },
      ]
    },
    languageSkills() {
      return [
        { type: 'language', title: 'JavaScript', rating: 2.5 },
        { type: 'language', title: 'PHP', rating: 2.5 },
        { type: 'language', title: 'HTML/CSS', rating: 3 },
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

.skill-how-I-rate {
  display: flex;
  align-items: center;
  margin-top: 6%;
  cursor: pointer;
  color: #3C6240;
}

.skill-how-I-rate p {
  margin-left: 5px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  font-size: small;
}

</style>