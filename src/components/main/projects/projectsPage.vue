<template>
	<projects-items v-for="(project, index) in projects" 
      :key="'experience-item-' + index"
      :project="project">
	</projects-items>
</template>

<script>
import ProjectsItems from './projectsItems.vue';

export default {
	computed: {
		projects() {
			return [
				{ title: 'CardCraft',
					date: this.$t('projects.date_1'),
					website: 'https://cardcraft.sarah-bobtchev-melin.com',
					description: this.$t('projects.description_1'),
					stack: ['VueJs', 'Quasar', 'Laravel', 'CircleCi', 'o2switch']
				}
			];
		},
	},
    components: { ProjectsItems }
}
</script>