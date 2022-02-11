<template>
    <footer>
        <p>
            &copy; {{ currentYear }} <br>
            <a href='https://github.com/MasterChief-kun'>MasterChief-kun</a>
        </p>
    </footer>
</template>

<script>
const date = new Date();
const currentYear = date.getFullYear();
export default {
  setup () {
    return {
      currentYear
    }
  }
}
</script>