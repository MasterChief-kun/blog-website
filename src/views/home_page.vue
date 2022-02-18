<template>
    <div class="content">
        <div class="latest-post">
            Latest Post:-
            <PostPrev :_id="latestPosts[0]._id" :time="latestPosts[0].date_sent" :sender="latestPosts[0].user.data.name" :title="latestPosts[0].title" :content="latestPosts[0].body"/>
        </div>
        Recent Posts:-
        <div class="recent-posts" v-for="post in latestPosts" v-bind:key="post._id">
            <PostPrev :_id="post._id" :time="post.date_sent" :sender="post.user.data.name" :title="post.title" :content="post.body"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PostPrev from '../components/PostPrev.vue'
export default {
    data(){
        return{
            latestPosts: [],
            lastestPostSenders: [],
        }
    },
   methods: {
       async getUserById(id) {
           let x = await axios.get("/user/by-id/" + id)
           return x;
       }
   },
    created(){
       let latestPostsUrl = "/post/recent-posts";
       axios.get(latestPostsUrl).then(res => {
           this.latestPosts = res.data;
           console.log(this.latestPosts)
           this.latestPosts.forEach(async post => {
               post.user = await this.getUserById(post.sender)
           })
       })
   },
   components: { PostPrev }
}
</script>