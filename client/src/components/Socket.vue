<template>
    <div>
        <div class="messages" v-for="(msg, index) in messages" :key="index">
            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
        </div>
        <form @submit.prevent="sendMessage">
            <div class="gorm-group">
                <label for="user">User:</label>
                <input type="text" v-model="user" class="form-control">
            </div>
            <div class="gorm-group pb-3">
                <label for="message">Message:</label>
                <input type="text" v-model="message" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Send</button>
        </form>
    </div>
</template>
<script>
    import io from 'socket.io-client';

    export default {
        data() {
            return {
                user: '',
                message: '',
                messages: [],
                socket: io(),
            }
        },
        async mounted() {
            const re = await fetch('/api/get-messages');
            const data = await re.json();
            this.messages = data.messages;

            this.socket.on('MESSAGE', (data) => {
                console.log(data);
                this.messages.push(data);
            });
        },
        methods: {
            async sendMessage(e) {
                e.preventDefault();

                await fetch('/api/add-message', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({message: this.message, user: this.user})
                });

                this.message = '';
            }
        }
    }
</script>