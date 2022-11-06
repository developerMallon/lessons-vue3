<template>
  <h1>Login</h1>
  <p>Logado: {{ isLogged }}</p>
</template>
<script>
export default {
  name: 'loginView',
  data () {
    return {

    }
  },
  computed: {
    isLogged () {
      return this.$store.state.isLogged
    }
  },
  mounted () {

  },

}
</script>