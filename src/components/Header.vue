<template>
    <header>
        <button class="home-button">
            <router-link to="/"/>
            <img src="../assets/bar-img.jpg" alt="Bar Image"/>
        </button>
    </header>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .home-button {
        display: flex;
        border: 5px solid red;
        width: stretch;
        flex-wrap: nowrap;
        margin:0;
        padding: 0;
    }
    .home-button img{
        height: 50px;
        width: 50px;
        padding: 5px;
    }
</style>