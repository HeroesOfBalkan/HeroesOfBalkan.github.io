<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import Post from "./Post.vue";
import Comment from "./Comment.vue";
import CreateComment from "./CreateComment.vue";

const postId = useRoute().params.id;

const post = ref([
    {
        id: 1,
        title: "Hello World from Post",
        user_posted: "Kale",
        tags: "OET Grupa4",
        created_at: "2022-2-22",
        context: "Hi mom! I am on internet!"
    }
]);

const comments = ref([
    {
        post_id: 1,
        user_commented: "Baja",
        created_at: "11. 9. 1002.",
        context: "Hello World!"
    },
    {
        post_id: 1,
        user_commented: "Sinko",
        created_at: "11. 9. 1002.",
        context: "Segmentation fault (core dumped)"
    }
]);


fetch(`https://aaamogus-murof.onrender.com/get-post=${ postId }`)
    .then(response => response.json())
    .then(response => post.value = response.data);

fetch(`https://aaamogus-murof.onrender.com/get-comments-for-post=${ postId }`)
    .then(response => response.json())
    .then(response => comments.value = response.data);

</script>



<template>

<Post 
    :title="post[0].title"
    :user="post[0].user_posted"
    :tags="post[0].tags"
    :date="post[0].created_at"
    :message="post[0].context" 
/>

<details>
    <summary>Napravi komentar</summary>
    <CreateComment />
</details>

<h3>Komentari</h3>
<div v-for="comment in comments">
    <Comment 
        :user="comment.user_commented"
        :date="comment.created_at" 
        :message="comment.context"
    />
</div>

</template>



<style scoped>
</style>