<template>
  <div class="home">
    <h1>Home</h1>
    <p>Logado: {{ isLogged }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  },
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
    if (!this.isLogged) {
      this.$router.push('/login');
    }
  }
}
</script>
