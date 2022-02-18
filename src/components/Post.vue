<template>
    <div class="post-header">
        <div class="title">
            {{currPost.title}}
        </div>
        <div class="sender">
            {{currPostSender.userName}}
        </div>
    </div>
    <div class="content">
        {{currPost.body}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            currPost: {},
            currPostSender: {},
        }
    },
    created(){
        let posturl = "/post/by-id/"+ this.$route.params.id
        axios.get(posturl).then(res => {
            this.currPost = res.data;
            console.log(this.currPost)
            let userurl = "/user/by-id/" + this.currPost.sender;
            axios.get(userurl).then(Userres => {
                this.currPostSender = Userres.data;
            }).catch(error => {
                console.log(error)
            })
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>