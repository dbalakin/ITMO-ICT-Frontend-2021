<template>
    <section class="d-flex flex-column align-items-start w-25">
        <h3>{{profile.username}}</h3>
        <img class="w-100 avatar mb-2" src="../assets/аватар.jpg" alt="аватар">
        <p class="mb-1">
            <svg>
                <use xlink:href='#ruble'></use>
            </svg>
            Баланс: {{profile.balance}}к рублей
        </p>
        <p class="mb-1">
            <svg>
                <use xlink:href='#coins'></use>
            </svg>
            Бонусы: {{profile.bonus}}</p>
        <p class="mb-1">
            <svg>
                <use xlink:href='#plane'></use>
            </svg>
            Количество полетов: {{profile.count}}
        </p>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ProfileInfo",
        computed: {
            ...mapGetters([
                'profile',
            ])
        },
        mounted() {
            this.$store.dispatch('getProfile',this.profile.id)
        }
    }
</script>

<style scoped>
    .avatar {
        border-radius: 25px;
    }
    svg {
        width: 30px;
        max-height: 50px;
        margin-right: 20px;
        fill:  var(--body-color);
    }
</style>
