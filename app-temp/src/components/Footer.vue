<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUp, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faPaperPlane);

function scrollToTop() {
    window.scrollTo(0, 0);
}

</script>

<template >

<footer>
    <section>
        <p>Početna strana</p>
        <p>Pretražite</p>
        <p>Postavite poruku</p>
        <p>Prijavite bag</p>
    </section>

    <section>
        <p>Rad: Marko Macura</p>
        <p>Fakultet Tehničkih nauka</p>
        <p>YT: Heroes Of Balkan</p>
        <p>IG: @heroesofbalkan</p>
    </section>
    
    <section>
        <a @click="scrollToTop()">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up" style="margin-top: 15px" />
            <p>Nazad na vrh</p>
        </a>
    </section>
</footer>

</template>

<style scoped>
footer {
    background-color: var(--dark-color);
    color: var(--light-color);
    display: flex;
    justify-content: space-around;
}

a {
    color: inherit;
}
</style>