<template>
  <div id="wrapper">
  	<!-- <div id="header"></div> -->
  	<router-view 
  		class="view"
  		keep-alive
  		transition
  		transition-mode="out-in">
		</router-view>
  </div>
</template>

<style lang="sass" scoped>
	@import '../reset/reset';
	body {
	 background: #fff;	
	}
</style>