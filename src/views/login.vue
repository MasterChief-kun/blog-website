<template>
    <div class="input-form">
        <form @submit.prevent="">

        </form>
    </div>
    <div>
        <router-link to="/create-account">Create Account</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user: {
                username: '',
                password: '',
            }
        }
    }
    ,methods:{
        loginSubmission() {
            
        }
    }
}
</script>