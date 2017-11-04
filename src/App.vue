<template>
  <div class="text-xs-center">
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      clipped
      app
    >
      <v-list dense>
        <v-list-tile :to="{path: '/'}">
          <v-list-tile-content>
            <v-list-tile-title  class="nav-bar">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{path: '/transaction'}">
          <v-list-tile-content>
            <v-list-tile-title class="nav-bar">Transaction</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile :to="{path: '/contact'}">
          <v-list-tile-content>
            <v-list-tile-title class="nav-bar">Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar
      color="green lighten-2"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer =  !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Greetings!</v-toolbar-title>
      <v-spacer></v-spacer>
        <div class="text-xs-center">
          <v-badge overlay left color="green accent-1" overlap>
            <v-icon
                large
                color="white"
              >
                account_circle
              </v-icon>
          </v-badge>
        </div>
    </v-menu>
    </v-toolbar>
    
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
          <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Together</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      drawer: true,
      drawerRight: true,
      right: null,
      left: null,
      active: ''
    }),
    props: {
    }
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
  height:100%;
  margin:0;
}

.nav-bar   {
  text-decoration:  none;
  font-weight:      bold;
  color:            black;
  font-size:        20px;
  }

a:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  font-weight:      bold;
  color:            black;
  } 
  
a:hover   {
  /* Applies to links under the pointer */
  text-decoration:  none;
  font-weight:      bold;
  color:            white;
  background-color: #9ACD32;
  } 
  
a:active  {
  /* Applies to activated links */
  text-decoration:  none;
  font-weight:      bold;
  color:            white;
  } 

</style>