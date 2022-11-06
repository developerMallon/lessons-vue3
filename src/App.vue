<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/login">Login</router-link> | -->
    <button
      v-if="!$store.state.isLogged"
      @click='login'
      value="Login"
    >Login</button>
    <button
      v-if="$store.state.isLogged"
      @click='logout'
      value="Logout"
    >Logout</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      this.$store.dispatch('login_action').then(() => {
        this.$router.push('/'); //Direciona pra página home
        // this.$router.back(); //Direciona pra última página antes do login
      })
    },

    logout () {
      this.$store.dispatch('logout_action').then(() => {
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  cursor: pointer;
}
</style>
