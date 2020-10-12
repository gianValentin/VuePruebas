<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          .field
            label.label Buscar
              .control
                 input.input.is-large(type="text", placeholder="Buscar" v-model="searchQuery")
          .field.is-grouped
            .control
              a.button.is-info.is-large(@click="search()") Buscar                
            .control              
              a.button.is-danger.is-large &times; cerrar
          .field
            p
              small {{searchMessage}}

        .container
          .columns
            .column(v-for="track in tracks") {{track.name}} {{track.artist}}
            .p {{info}}

</template>

<script>
import axios from 'axios'

const tracks = [
  {name:'Snow',artist:'Red Hot Chili Peppers'},
  {name:'save me',artist:'Nickelback'},
  {name:'crazy',artist:'Aerosmith'},
  {name:'By The Way',artist:'Red Hot Chili Peppers'},
]
export default {
  name: "App",
  components:{},
  data() {
    return {
      searchQuery: '',
      tracks: [],
      info: null
    };
  },
  methods: {
    search(){
      this.tracks = tracks
    }
  },
  computed:{
    searchMessage(){
      return "Encontrandos: "+ this.tracks.length
    }
  },
  mounted(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then( response => {
       this.info = response.data.bpi
       console.log(this.info)
    })
  }
};
</script>

<style>
@import "./scss/main.scss";
</style>
