<template>
    <section class="w-50 h-75">
        <h2>Ваши билеты</h2>
        <div id="all" v-for="(el) in userTicket" v-bind:key="el.id">
            <div class="card d-flex flex-row align-items-center mb-3">
                <img src="../assets/DP.png" class="w-25" alt="pobeda">
                <div class="card-body">
                    <h4 class="card-title">{{ el.ticket.name }}</h4>
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <div class="d-flex flex-column">
                            <h5 class="card-text">{{el.ticket.start.time}}</h5>
                            <p class="card-text">{{el.ticket.start.city}},<br/>{{el.ticket.start.date}}, {{el.ticket.start.week}}</p>
                        </div>
                        <div class="d-flex ">
                            <p class="mr-2">{{el.ticket.start.airport}}</p>
                            <p>В пути {{el.ticket.time}}</p>
                            <p class="ml-2">{{el.ticket.end.airport}}</p>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="card-text">{{el.ticket.end.time}}</h5>
                            <p class="card-text">{{el.ticket.end.city}},<br/>{{el.ticket.end.date}}, {{el.ticket.end.week}}</p>
                        </div>
                    </div>
                    <div class="price d-flex justify-content-between align-items-center">
                        <span>Цена за билет: {{el.ticket.price}}</span>
                        <button @click="onDel(el.id)" class="btn text-white bg-orange" >Сдать билет</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ProfileTickets",
        computed: {
            ...mapGetters([
                'userTicket',
                'profile',
            ])
        },
        mounted() {
            this.$store.dispatch('getUserTicket', this.profile.id)
        },
        methods: {
            onDel(id) {
                this.$store.dispatch('onDel', {id: id, user: this.profile.id})
            }
        }
    }
</script>

<style scoped>
    .bg-orange {
        background: var(--btn-color);
        padding-left: 20px;
        padding-right: 20px;
    }
    .card {
        background: var(--body-color);
        color: black;
        border-radius: 25px;
        padding: 0 10px;
        margin-top: 20px;

    }
    .card img {
        height: 50px;
    }
    .card .price {
        margin-top: 10px;
    }
</style>
