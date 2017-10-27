<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Account Summary</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="item in items.slice(0, 6)">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Today' },
          { title: 'Danny contributed $35 to "Camping Trip"', subtitle: "<span class='grey--text text--darken-2'>Danny Reed to 'Camping Trip'</span> — Ready to make some smores!" },
          { divider: true, inset: true },
          { title: 'Jasmine contributed $10 to "Camping Trip"', subtitle: "<span class='grey--text text--darken-2'>Jasmine Reed to 'Camping Trip'</span> — I need my tee-pee!" },
          { divider: true, inset: true },
          { title: 'Joyce Reed sent a message to "Camping Trip"', subtitle: "<span class='grey--text text--darken-2'>Joyce Reed to 'Camping Trip'</span> — What is everyone craving for?" },
          { divider: true, inset: true },
          { title: 'Donald Reed send a message to "Camping Trip"', subtitle: "<span class='grey--text text--darken-2'>Donald Reed</span> — Just got the camping gear!" },
          { divider: true, inset: true }
        ]
      }
    }
  }
</script>

<style>

</style>