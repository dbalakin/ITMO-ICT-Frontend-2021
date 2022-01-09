<template>
    <main class="vw-100 d-flex align-items-center justify-content-center">
        <section class="d-flex flex-column mt-5">
            <h2 class="mt-5">Login</h2>
            <form @submit.prevent="onSubmit(form)">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address or nickname</label>
                    <input v-model="form.username"  type="text" placeholder="Input nickname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="form.password"  type="password" placeholder="Input password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn text-white bg-orange">Submit</button>
            </form>
        </section>
    </main>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            onSubmit(form) {
                this.$store.dispatch('onSubmit', form.username)
            }
        },
    }

</script>

<style scoped>
    .form-text {
        color: var(--body-color);
    }
    .bg-orange {
         background: var(--btn-color);
         padding-left: 20px;
         padding-right: 20px;
     }
</style>
