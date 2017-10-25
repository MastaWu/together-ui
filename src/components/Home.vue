<template>
<body>
    <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
    </p>
    <div 
        v-for="number in [currentNumber]" transition="fade">
    <img :src="images[Math.abs(currentNumber) % images.length]"/>
    </div>
</body>

</template>


<script>
    export default {
      el: 'body',
      data: {
        images: ['./assets/IMG_0175.jpeg', './assets/IMG_0189.jpeg', './assets/IMG_0634.jpeg'],
        currentNumber: 0,
        timer: null
      },
      ready: function () {
        this.timer = setInterval(this.next, 3000)
      },
      methods: {
        startRotation: function () {
          this.timer = setInterval(this.next, 3000)
        },
        next: function () {
          this.currentNumber += 1
        },
        prev: function () {
          this.currentNumber -= 1
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fade-transition {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }

    .fade-enter, .fade-leave {
        opacity: 0;
        visibility: hidden;
    }


</style>
