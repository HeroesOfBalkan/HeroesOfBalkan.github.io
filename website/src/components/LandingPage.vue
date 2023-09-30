<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>



<template>

<main>
    <!-- Intro -->
    <section class="flex">
        <h1>std::introduce(myself);</h1>
        <article class="intro">
            <img src="../assets/me.jpg" alt="Old picture though" width="300">
            <div class="intro-text">
                <p>Hello, I am Marko Macura, Computer Science student at Faculty of Technical Science, looking to become software engineer or game developer.</p>
                <p>More <RouterLink to="/about-me">about me</RouterLink> here</p>
                <h6>Note: this website is created in 1 to 2 days</h6>
            </div>
        </article>
    </section>


    <!-- Skills -->

    <section class="flex">
        <h1>reveal(skills, skills_len);</h1>
        <article>

            <h3>Programming::Languages::list();</h3>
            <table>
                <tr>
                    <th>Language</th>
                    <th>Level</th>
                    <th>Progress Bar</th>
                </tr>
                <tr>
                    <td>C</td>
                    <td>Intermediate-Advanced</td>
                    <td>##############################</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Intermediate-Advanced</td>
                    <td>#########################</td>
                </tr>
                <tr>
                    <td>JS/TS</td>
                    <td>Intermediate</td>
                    <td>##############</td>
                </tr>
                <tr>
                    <td>HTML & CSS</td>
                    <td>Intermediate</td>
                    <td>#############</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>Beginner</td>
                    <td>###########</td>
                </tr>
                <tr>
                    <td>Julia</td>
                    <td>Beginner</td>
                    <td>##########</td>
                </tr>
                <tr>
                    <td>Rust</td>
                    <td>Beginner</td>
                    <td>#########</td>
                </tr>
                <tr>
                    <td>x86 Assembly</td>
                    <td>Beginner</td>
                    <td>########</td>
                </tr>
                <tr>
                    <td>Java</td>
                    <td>Beginner</td>
                    <td>########</td>
                </tr>
                <tr>
                    <td>C#</td>
                    <td>Beginner</td>
                    <td>####</td>
                </tr>
            </table>


            <h3>Graphics Design</h3>
            <table>
                <tr>
                    <th>Software</th>
                    <th>Level</th>
                    <th>Progress Bar</th>
                </tr>
                <tr>
                    <td>Adobe Photoshop</td>
                    <td>Intermediate-Advanced</td>
                    <td>##############################</td>
                </tr>
                <tr>
                    <td>Adobe Premiere Pro</td>
                    <td>Intermediate</td>
                    <td>#######################</td>
                </tr>
                <tr>
                    <td>Audacity</td>
                    <td>Beginner</td>
                    <td>###########</td>
                </tr>
                <tr>
                    <td>Affinity Photo</td>
                    <td>Beginner</td>
                    <td>##########</td>
                </tr>
                <tr>
                    <td>Adobe After Effects</td>
                    <td>Beginner</td>
                    <td>##########</td>
                </tr>
                <tr>
                    <td>Davinci Resolve</td>
                    <td>Beginner</td>
                    <td>########</td>
                </tr>
                <tr>
                    <td>Inkscape</td>
                    <td>Beginner</td>
                    <td>########</td>
                </tr>
            </table>


            <h3>3D Technologies</h3>
            <table>
                <tr>
                    <th>Software</th>
                    <th>Level</th>
                    <th>Progress Bar</th>
                </tr>
                <tr>
                    <td>Blender</td>
                    <td>Beginner</td>
                    <td>############</td>
                </tr>
                <tr>
                    <td>Cinema 4D</td>
                    <td>Beginner</td>
                    <td>#########</td>
                </tr>
            </table>
        </article>
    </section>


    <!-- Previous work & Achievements -->

    <section class="flex">
        <img src="" alt="">
        <article>
            <h1>Accomplishments::show();</h1>
            <p>Through years (or months) of experience in graphics design, software development, 3D tools and Youtube, I've</p>
        </article>
        <div>
            <p>More on my <RouterLink to="/about-me">previous work and achievements</RouterLink> here</p>
        </div>
    </section>

</main>
    
</template>



<style scoped>
p {
    font-size: 1.2rem;
}

h1 {
    font-family: monospace;
    font-size: 3rem;
}

table {
    margin: 0 auto;
    width: 90%;
    border: 1px solid;
    border-collapse: collapse;
}

th {
    background: var(--accent-color-2);
    color: var(--light-color);
    font-size: 1.2rem;
}

td {
    justify-content: start;
    text-align: left;
    padding-left: 15px;
}

tr:nth-child(even) {
    background: #ffffff22;
}

tr:hover {
    background: var(--accent-color-1);
    color: var(--light-color);
}

.intro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
}

.intro-text {
    width: 30%;
}
</style>