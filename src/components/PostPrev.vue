<template>
    <router-link class="parent-link" :to="/posts/+_id">
        <div class="post-preview" :id="_id">
            <div class="sender">
                {{sender}} :- {{timeSince(time)}}
            </div>

            <div class="title">
                    {{title}}
            </div>
            <p class="content">
                {{shortenContent(content)}}
            </p>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ['_id','title','sender','content','time'],
    methods: {
        shortenContent(content){
            if(content.length > 100){
                return content.splice(0,100)
            }
            else return content
        },
        timeSince(times){
            let postTime = new Date(times)
            let currentTime = new Date()
            let diff = (currentTime.getTime() - postTime.getTime()) /1000
            let param = "second(s) ago"
            if(diff > 60){
                diff = diff / 60;
                param = "minute(s) ago"
                if(diff > 60){
                    diff = diff / 60;
                    param = "hour(s) ago"
                    if(diff > 24){
                        diff = diff / 24;
                        param = "day(s) ago"
                    }
                }
            }
            return `${Math.round(diff).toString()} ${param}`
        }
    }
}
</script>
<style>
    *{
        background-color: #31312f;
        color: rgb(190, 186, 186);
    }
    .parent-link {
        text-decoration: none;
    }
    .post-preview {
        text-decoration: none;
        border: gray 3px solid;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 5px;
    }
    .sender {
        padding-left: 10px;
        font-size: 13px;
    }
</style>