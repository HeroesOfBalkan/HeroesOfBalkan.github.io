<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenToSquare, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// if needed for responsiveness, import faBars and add to FAI library

// FA Icons to use
library.add(faPenToSquare, faGear, faMagnifyingGlass);
</script>



<template>

<nav id="MAIN-NAVBAR">
    <RouterLink to="/">
        <img src="../assets/vue.svg" alt="Logo">
    </RouterLink>
    <h2>Privatni forum</h2>
    <input type="text" placeholder="Pretraži">
    <font-awesome-icon icon="fa-solid fa-gear" class="navbar-icon" />
    <RouterLink to="/new-post">25
        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="navbar-icon" />
    </RouterLink>
</nav>

</template>


<style scoped>

#MAIN-NAVBAR {
    width: 100%;
    margin: 0;
    background-color: var(--accent-color-1);

    display: flex;
    align-items: center;
    justify-content: flex-start;
}

img {
    height: 48px;
    margin: 5px;
}

input[type="text"] {
    height: 32px;
    min-width: 150px;
    margin: 0 5px;
    padding: 0 10px;
    
    border: 2px solid var(--dark-color);
    border-radius: 25px;
    background-color: white;
    color: black;
    
}

.navbar-icon {
    font-size: 2rem;
    margin: 0 5px;
    color: var(--dark-color);
    transition: all 0.5s ease-out;
    justify-self: flex-end;
    float: right;
    /* align-self: right; */
}

.navbar-icon:hover, .navbar-icon:focus {
    /* color: var(--color4); */
    color: white;
}
/* Arimo */
h2 {
    font-family: Bahnschrift, Arial;
    font-size: 2em;
    margin: 0 calc(5px + 0.5vw);
    color: var(--dark-color);
    text-shadow: 0 0 5px rgb(250, 247, 228);
}

@media screen and (max-width: 540px) {
    h2 {
        display: none;
    }
}
</style>