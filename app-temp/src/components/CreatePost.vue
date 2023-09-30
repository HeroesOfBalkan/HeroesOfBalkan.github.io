<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPaperPlane, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";


library.add(faPaperPlane, faArrowsSpin);
</script>



<template>
    
<form action="https://aaamogus-murof.onrender.com/add-post" method="POST">
    <label for="title">Naslov <span>*</span></label>
    <input name="title" type="text" placeholder="Unesi naslov (puno ime po mogućnosti)" required>

    <label for="user">Korisničko ime</label>
    <input name="user" type="text" placeholder="Unesi korisničko ime">

    <label for="tags">Tagovi</label>
    <input name="tags" type="text" placeholder="Unesi tagove (trenutno ne radi)" disabled>

    <label for="message">Poruka <span>*</span></label>
    <textarea name="message" id="" cols="30" rows="10" placeholder="Unesi poruku" required></textarea>

    <br>
    <div>
        <button name="submit" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            Postavi
        </button>
        <button name="reset" type="reset">
            <FontAwesomeIcon icon="fa-solid fa-arrows-spin" />
            Reset
        </button>
    </div>
</form>
<br>

</template>



<style scoped>
form {
    margin: 0 auto;
    padding: 0 5px;
    max-width: 720px;
    display: flex;
    
    flex-direction: column;
    gap: 0.5em;
}

input[type="text"], textarea {
    margin-bottom: 1.5em;
    padding: 0 10px;

    background-color: white;
    color: initial;

    border: 2px solid var(--dark-color);
    border-radius: 25px;
}

textarea {
    padding-top: 10px;
}

input[type="text"] {
    height: 32px;
}

label {
    text-align: left;
    margin-left: 15px;
}

button {
    width: 7em;
    margin: 5px calc(15px + 3vw); 
}

span {
    color: red;
}
</style>