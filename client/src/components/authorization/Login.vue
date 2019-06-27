<template>
    <div>
        <h4>Login form</h4>
        <a href="javascript:" @click="setIsLogin(false)">Switch forms</a>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions('auth', ['setIsLogin']),
        }
    }
</script>