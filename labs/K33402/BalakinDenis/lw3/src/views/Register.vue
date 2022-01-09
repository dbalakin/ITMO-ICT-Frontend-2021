<template>
    <main class="vw-100 d-flex align-items-center justify-content-center">
        <section class="d-flex flex-column mt-5">
            <h2 class="mt-5">Register</h2>
            <form @submit.prevent="onSubmit(form)">
                <div class="mb-3">
                    <label for="exampleInputNickname" class="form-label">Nickname</label>
                    <input v-model="form.username" type="text" placeholder="Input nickname" class="form-control" id="exampleInputNickname" aria-describedby="emailHelp">
                    <div  class="form-text ">Сome up with a nickname.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="form.password" type="password" placeholder="Input password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm password</label>
                    <input v-model="form.re_password" type="password" placeholder="Confirm password" class="form-control" id="exampleInputPassword2">
                </div>
                <button type="submit" class="btn text-white bg-orange">Submit</button>
            </form>
        </section>
    </main>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                    re_password: ""
                }
            };
        },
        methods: {
            onSubmit(form) {
                this.$store.dispatch('onRegister', form.username)
            }
        }
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
