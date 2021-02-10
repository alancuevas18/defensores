<template>
    <div>
        <h1>Registrar</h1>

        <input type="text" name="name" v-model="name" placeholder="Nombre" />
            <br>

        <input type="email" name="email" v-model="email" placeholder="correo@hots.com" />
            <br>

        <input type="password" name="password" v-model="password" placeholder="Clave" />
            <br>
          <div v-if="error" class="error" v-html="error"></div>
          <div v-if="resp" class="success" v-html="resp"></div>
          <br>
            <button @click="register">Registrar </button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
      resp: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.error = null
        this.resp = 'Usuario creado correctamente!'
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color:red;
  }
  .success{
    color:green;
  }
</style>
