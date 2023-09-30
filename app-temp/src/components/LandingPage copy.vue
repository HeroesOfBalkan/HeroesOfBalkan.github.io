<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import PostCard from "./PostCard.vue";

const posts = ref(
    [
        {
            id: 1,
            title: "Probni naslov",
            user_posted: "Anonimni korisnik",
            created_at: "1. april 2021. g.",
            tags: "amo gus",
            context: "asfasdfasfasdfasdfasdasd"
        },
        {
            id: 2,
            title: "Probni naslov 2",
            user_posted: "Anonimni korisnik 2",
            created_at: "11. mart 2004. g.",
            tags: "amo, gus?",
            context: "asfasdfasfasdfasdfasdasdasdasdsdf d"
        }
    ]
)

fetch("https://aaamogus-murof.onrender.com/get-featured-posts")
    .then(response => response.json())
    .then(response => posts.value = response.data)

</script>



<template>

<div v-for="post in posts">
    <RouterLink :to="'/post=' + post.id" style="color: var(--dark-color)" >
        <PostCard
            :title="post.title"
            :user="post.user_posted"
            :date="post.created_at"
            :tags="post.tags"
            :message="post.context"
        />
    </RouterLink>
</div>
    
</template>

<style scoped>
</style>