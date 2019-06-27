<template>
    <div>
        <h4>Register form</h4>
        <a href="javascript:" @click="setIsLogin(true)">Switch forms</a>
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