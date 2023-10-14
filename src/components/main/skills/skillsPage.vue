<template>
  <div>

   

    <skills-group :title="$t('skills.frameworkTitle')" :skills-list="frameworkSkills"></skills-group>
    <skills-group :title="$t('skills.languageTitle')" :skills-list="languageSkills"></skills-group>
    <skills-group :title="$t('skills.devopsTitle')" :skills-list="devopsSkills"></skills-group>
    <skills-group :title="$t('skills.otherTitle')" :skills-list="{}"></skills-group>

    <p>{{ $t('skills.otherKnowledge') }}</p>


    <div class="skill-how-I-rate">
      <v-icon icon="fas fa-question-circle" size="x-small"></v-icon>
      <p>{{ $t('skills.howIRate') }}</p>
    </div>
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
    frameworkSkills() {
      return [
        { type: 'framework', title: 'VueJS', image: '', rating: 3 },
        { type: 'framework', title: 'Laravel', image: '', rating: 3 },
        { type: 'framework', title: 'Quasar', image: '', rating: 2 },
        { type: 'framework', title: 'Symfony', image: '', rating: 1.5 },
      ]
    },
    languageSkills() {
      return [
        { type: 'language', title: 'JavaScript', image: '', rating: 2.5 },
        { type: 'language', title: 'PHP', image: '', rating: 2.5 },
        { type: 'language', title: 'HTML/CSS', image: '', rating: 2.5 },
      ]
    },
    devopsSkills() {
      return [
        { type: 'devops', title: 'Git', image: '', rating: 2 },
        { type: 'devops', title: 'Docker', image: '', rating: 1.5 },
        { type: 'devops', title: 'Circle Ci', image: '', rating: 1.5 },
        { type: 'devops', title: 'AWS', image: '', rating: 1 },
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