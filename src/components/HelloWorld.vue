<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="date" v-model="dateNac">
    {{calcularEdad}}
    <a href="www.google.com">Google</a>
  </div>
</template>

<script>
import * as calculo from "../tools/calculo";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data (){
    return{
      dateNac: ''
    }
  },
  computed: {
    calcularEdad (){      
      return calculo.edadCalulada(this.dateNac)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
