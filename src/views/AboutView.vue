<template>
  <div class="about">
    <h1>About</h1>
    <p>Logado: {{ isLogged }}</p>
  </div>
</template>
<script>
export default {
  name: 'aboutView',

  data () {
    return {

    }
  },
  computed: {
    isLogged () {
      return this.$store.state.isLogged;
    }
  },
  mounted () {
    if (!this.isLogged) {
      this.$router.push('/login');
    }
  }
}
</script>
