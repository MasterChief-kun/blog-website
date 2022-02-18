<template>
    <header>
        <button type="button" class="home-button">
            <router-link to="/">
            <img src="../assets/parrot.svg" alt="Bar Image"/>
            </router-link>
        </button>
    </header>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    header {
        display: flex;
        /* border: 5px solid red; */
        width: stretch;
        flex-direction: row;
        margin:0;
    }
    button {
        outline: none;
        border: none;
    }
    .home-button img {
        width: 50px;
        height: 50px;
        /* border: 5px solid yellow; */
    }
</style>