<template>
    <header class="container p-4 d-flex align-items-center justify-content-between mb-4">
        <h1 class="text-white font-weight-normal m-0">
            <router-link to="/">SomeName</router-link>
        </h1>
        <nav class="d-flex">
            <router-link class="mr-3" to="/par-mums">Par mums</router-link>
            <router-link class="mr-3" to="/kontakti">Kontakti</router-link>
            <router-link to="/autorizacija">Autorizācija</router-link>
        </nav>
    </header>
</template>
<style lang="scss">
    nav {
        li {
            list-style: none;
        }
    }

    h1 {
        .router-link-exact-active {
            color: white !important;
        }

        a:hover {
            color: white !important;
        }
    }
</style>