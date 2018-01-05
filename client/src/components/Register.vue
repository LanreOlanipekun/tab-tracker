<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" required v-model="email"/><br/>
    <input type="password" name="password" placeholder="password" required v-model="password"/><br/>
    <button v-on:click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {

  data () {
    return {
      email:'',
      password:''
    }
  },

  methods:{
    async register (){
      await AuthenticationService.register({
        email:this.email,
        password:this.password
      })

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
