<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade">
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '../assets/IMG_0175.jpeg'
          },
          {
            src: '../assets/IMG_0189.jpeg'
          },
          {
            src: '../assets/IMG_0634.jpeg'
          }
        ]
      }
    }
  }
</script>

<style>
#carousel-view .fade-enter-active,
#carousel-view .fade-leave-active,
#carousel-view .fade-leave-to {
	transition: 0.3s ease-out;
	position: absolute;
	top: 0;
	left: 0;
}

#carousel-view .fade-enter,
#carousel-view .fade-leave,
#carousel-view .fade-leave-to {
	opacity: 0;
}
</style>
