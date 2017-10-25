<template>
  <div id="app">
    <img src="./assets/Happy-Sun.png" class="img-valign">
      <span class="together">Together</span>
        <div class="hello">
        <nav v-bind:class="active" v-on:click.prevent>
        <ul>
          <li><router-link to = "/" class="home" v-on:click="makeActive('home')">Home</router-link></li>
          <li><router-link to = "/about" class="about" v-on:click="makeActive('about')">About</router-link></li>
          <li><router-link to = "/travel" class="travel" v-on:click="makeActive('travel')">Travel</router-link></li>
          <li><router-link to = "/transaction" class="transaction" v-on:click="makeActive('transaction')">Transaction</router-link></li>
          <li><router-link to = "/contact" class="contact" v-on:click="makeActive('contact')">Contact</router-link></li>
        </ul>
      </nav>
      <br>
    </div>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  h1, h2 {
    font-weight: bold;
    font-size: 50px;
  }

  p1 {
    font-weight: normal;
    font-size: 25px;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    font-weight: bold;
  }

  .img-valign {
    vertical-align: middle;
    margin-bottom: 6.0em;
  }

  .together {
    font-size: 125px;
    font-weight: bold;
    }

  nav {
    line-height: 70px;
    font-size: 25px;
    font-weight: normal;
    margin-top: -85px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: #7FFACD;
  }

  .home {
    transition: 0.3s ease;
    background-color: #7FFACD;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-top: 4px solid #7FFACD;
    border-bottom: 4px solid #7FFACD;
    padding: 20px 0;
    margin: 0 20px;
    color: white;
  }

  .home:hover {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    padding: 6px 0;
  }

  .about {
    transition: 0.3s ease;
    background-color: #7FFACD;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-top: 4px solid #7FFACD;
    border-bottom: 4px solid #7FFACD;
    padding: 20px 0;
    margin: 0 20px;
    color: white;
  }

  .about:hover {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    padding: 6px 0;
  }  

  .travel {
    transition: 0.3s ease;
    background-color: #7FFACD;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-top: 4px solid #7FFACD;
    border-bottom: 4px solid #7FFACD;
    padding: 20px 0;
    margin: 0 20px;
    color: white;
  }

  .travel:hover {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    padding: 6px 0;
  }  

  .transaction {
    transition: 0.3s ease;
    background-color: #7FFACD;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-top: 4px solid #7FFACD;
    border-bottom: 4px solid #7FFACD;
    padding: 20px 0;
    margin: 0 20px;
    color: white;
  }

  .transaction:hover {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    padding: 6px 0;
  }  
  
  .contact {
    transition: 0.3s ease;
    background-color: #7FFACD;
    font-size: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border-top: 4px solid #7FFACD;
    border-bottom: 4px solid #7FFACD;
    padding: 20px 0;
    margin: 0 20px;
    color: white;
  }

  .contact:hover {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    padding: 6px 0;
  }  

  {box-sizing:border-box}
</style>  