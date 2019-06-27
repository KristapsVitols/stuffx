<template>
    <div>
        <Login v-if="isLogin"/>
        <Register v-else/>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'authorization',
        computed: {
            ...mapGetters('auth', ['isLogin']),
        },
        components: {
            Register: () => import('@/components/authorization/Register.vue'),
            Login: () => import('@/components/authorization/Login.vue'),
        }
    }
</script>