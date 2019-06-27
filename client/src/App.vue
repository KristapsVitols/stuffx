<template>
    <div id="app">
        <Header/>
        <main class="container">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>
<script>
    import Header from './components/layout/Header';
    import Footer from './components/layout/Footer';

    export default {
        components: {
            Header,
            Footer,
        }
    }
</script>
<style lang="scss">
    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;

        main {
            flex: 1;
        }
    }
</style>