<template>
	<img class="flag-img flag-france" @click="$i18n.locale = 'fr'" src="@/assets/images/flag-france.png" alt="">
	<img class="flag-img flage-uk" @click="$i18n.locale = 'en'" src="@/assets/images/flag-uk.png" alt="">
</template>

<script>
export default {
	//
}
</script>

<style>
.flag-img {
	display: block;
	width: 40px;
}
.flag-france {
	margin-right: 1.2rem;
}
</style>