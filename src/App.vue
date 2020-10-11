<template lang="pug">
  <div id="app">
        section.section
          nav.nav.has-shadow
            .container
              input.input.is-large(type="text", placeholder="Buscar")
              a.button.is-info.is-large Buscar
              a.button.is-danger.is-large &times;
              
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{      

    }
  },
  methods:{

  }
}
</script>

<style>
  @import './scss/main.scss'
</style>
