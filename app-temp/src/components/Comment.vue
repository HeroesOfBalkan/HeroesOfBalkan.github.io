<script setup lang="ts">
defineProps<{
    user: string,
    date: string,
    message: string
}>()

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
<article>
    <p>Postavio: {{ user }}; Datum: {{ getDateFromRaw(date) }}</p>
    <hr>
    <p>{{ message }}</p>
</article>
</template>



<style scoped>
article {
    width: 70vw;
    padding: 5px 15px;
    margin: 25px;
    overflow-wrap: break-word;

    line-height: 16px;
    text-align: left;
    
    box-shadow: 0 0 5px black;
    border-radius: 5px;
    border: 2px solid var(--dark-color);
}

hr {
    opacity: 30%;
    color: var(--dark-color);
    width: 95%;
}

</style>