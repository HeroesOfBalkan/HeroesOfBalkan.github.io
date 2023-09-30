<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>



<template>

<nav id="MAIN-NAVBAR">
    <h2>Marko Macura</h2>
    <ul id="NAVBAR">
        <li>
            <RouterLink to="/" class="navbar-link">
                Home
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/portfolio" class="navbar-link">
                Portfolio
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/about-me" class="navbar-link">
                About me
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/contact" class="navbar-link">
                Contact
            </RouterLink>
        </li>
    </ul>
</nav>

</template>



<style scoped>

#MAIN-NAVBAR {
    width: 100%;
    margin: 0;
    background-color: var(--accent-color-1);

    display: flex;
    align-items: center;
    justify-content: space-between;
}

#NAVBAR {
    margin: 0 15px 0 50px;
    list-style-type: none;
    display: flex;
    gap: 5px 20px;
}

#NAVBAR li {
    margin: 0;
    width: fit;
    font-size: 1.2em;
}

.navbar-link {
    color: var(--dark-color);
    display: block;
}

/* Arimo */
h2 {
    font-family: Bahnschrift, Arial;
    font-size: 2em;
    margin: 0 50px 0 15px;
    color: var(--dark-color);
}

/* @media screen and (max-width: 750px) {
    h2 {
        display: none;
    }
} */
</style>