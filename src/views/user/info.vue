<template>
  <div>
    <h1>User: {{ username }}</h1>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      username: sessionStorage.getItem('username')
    }
  }
}
</script>

<style scoped>

</style>
