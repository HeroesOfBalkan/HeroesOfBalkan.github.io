<script setup lang="ts">
defineProps<{
    title: string,
    user: string,
    date: string,
    tags: string,
    message: string
}>()

function getTags(theList: string) {
    if (theList === null)
        return "";
    return theList.split(",");
}

function getDateFromRaw(theDate: string) {
    let dateObject = new Date(theDate);

    const year = dateObject.getFullYear();
    const monthNumber = dateObject.getMonth();
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    let monthName = "";

    switch (monthNumber) {
        case 0:
            monthName = "Januar";
            break;
        case 1:
            monthName = "Februar";
            break;
        case 2:
            monthName = "Mart";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "Maj";
            break;
        case 5:
            monthName = "Jun";
            break;
        case 6:
            monthName = "Jul";
            break;
        case 7:
            monthName = "Avgust";
            break;
        case 8:
            monthName = "Septembar";
            break;
        case 9:
            monthName = "Oktobar";
            break;
        case 10:
            monthName = "Novembar";
            break;
        case 11:
            monthName = "Decembar";
            break;
        default:
            monthName = "";
            break;
    }

    return `${day}. ${monthName} ${year}. god. u ${hours}:${minutes}`;
}

</script>



<template>

<h2>{{ title }}</h2>
<p>Postavio: {{ user }}; Datum: {{ getDateFromRaw(date) }}</p>
<span class="tagCard" v-for="tag in getTags(tags)">
    {{ tag }}
</span>
<br>
<p id="MESSAGE">{{ message }}</p>

</template>



<style scoped>
hr {
    opacity: 30%;
    color: var(--dark-color);
    width: 95%;
}

#MESSAGE {
    margin-top: 25px;
    box-shadow: 0 0 5px var(--accent-color-1);
}

.tagCard {
    margin: 0 5px;
    padding: 3px;
    background-color: var(--accent-color-1);
    color: var(--light-color);
    border-radius: 5px;
}
</style>