<template>
	<div id="experienceList">
    <projects-items v-for="(item, index) in items" 
      :key="'experience-item-' + index"
      :project="item"
    >
    </projects-items>
  </div>
</template>

<script>

import ProjectsItems from './projectsItems.vue';

export default {
  methods: {
  },
	components: { ProjectsItems },
  computed: {
    items() {
      return [
        { title: this.$t('experience.title_1'), 
          date: this.$t('experience.date_1'),
          company: { name: 'Cardemy', website: 'https://cardemy.com/home' }, 
          description: this.$tm('experience.description_1'),
          stack: ['VueJs', 'Laravel', 'Quasar', 'Elastic Search', 'Redis', 'IA', 'Agile', 'AWS', 'CI/CD', 'Testing']
        },
        { title: this.$t('experience.title_2'), 
          date: this.$t('experience.date_2'),
          company: { name: 'Oclock', website: 'https://oclock.io/' }, 
          description: this.$tm('experience.description_2'),
          stack: ['Symphony', 'Php', 'Javascript', 'HTML/CSS', 'Devops', 'Agile']
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>