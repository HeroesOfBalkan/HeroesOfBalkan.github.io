<script setup lang="ts">
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faArrowUp, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// library.add(faArrowUp, faPaperPlane);

function scrollToTop() {
    window.scrollTo(0, 0);
}

</script>

<template >

<footer>
    <section>
        <p>Marko Macura</p>
        <p>Faculty of Technical Science Student</p>
        <p>Future() software engineer || gamedev</p>
        <p>"As wise monk once sa... <code>Segmentation fault (core dumped)</code></p>
        <p>This website has been created in 1-2 days</p>
    </section>

    <section>
        <!-- <p>Početna strana</p>
        <p>Pretražite</p>
        <p>Postavite poruku</p>
        <p>Prijavite bag</p> -->
    </section>
    
    <section>
        <a @click="scrollToTop()">
            <p>Top of page</p>
        </a>
        <RouterLink to="/"><p>Home</p></RouterLink>
        <RouterLink to="/portfolio"><p>Portfolio</p></RouterLink>
        <RouterLink to="/about-me"><p>About me</p></RouterLink>
        <RouterLink to="/contact"><p>Contact</p></RouterLink>
    </section>
</footer>

</template>

<style scoped>
footer {
    background-color: var(--accent-color-2);
    color: var(--dark-color);
    display: flex;
    justify-content: space-around;
}

a {
    color: inherit;
}

p {
    margin: 10px auto;
}

code {
    background: none;
}
</style>