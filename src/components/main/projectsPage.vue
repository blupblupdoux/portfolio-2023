<template>
	<div>
		<projects-items v-for="(project, index) in projects" 
      :key="'experience-item-' + index"
      :project="project">
		</projects-items>
	</div>
</template>

<script>
import ProjectsItems from './projectsItems.vue';

export default {
	computed: {
		projects() {
			return [
				{ title: 'RenoTracker',
					date: this.$t('projects.date_2'),
					company: { name: null, website: 'https://blog.sarah-bobtchev-melin.com/category/renotracker' }, 
					description: this.$t('projects.description_2'),
					stack: ['VueJs', 'Quasar', 'Node.js', 'Figma']
				},
				{ title: 'CardCraft',
					date: this.$t('projects.date_1'),
					company: { name: null, website: 'https://cardcraft.sarah-bobtchev-melin.com' }, 
					description: this.$t('projects.description_1'),
					stack: ['VueJs', 'Quasar', 'Laravel', 'CircleCi', 'o2switch']
				}
			];
		},
	},
    components: { ProjectsItems }
}
</script>