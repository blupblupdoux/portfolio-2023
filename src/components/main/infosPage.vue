<template>
	<div>
		<h2>{{ $t('informations.title_1') }}</h2>
		<p>{{ $t('informations.text_1') }}</p>
		
		<h2>{{ $t('informations.title_2') }}</h2>
		<p>{{ $t('informations.text_2') }}</p>

		<h2>{{ $t('informations.title_3') }}</h2>
		<p>{{ $t('informations.text_3') }}</p>

		<h2>{{ $t('informations.title_4') }}</h2>
		<p>{{ $t('informations.text_4') }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//
		}
	}
}
</script>

<style scoped>

h2 {
  font-weight: bold;
  margin-bottom: 0.75rem;
}

p {
	margin-bottom: 5%;
}

</style>