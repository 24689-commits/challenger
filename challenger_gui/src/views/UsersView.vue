<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Users</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="users">
            <div v-for="user in users"  class="card" style="width: 18rem;" :key="user.userID">
                <img :src="user.profileUrl" class="card-img-top" :alt="user.firstName">
                <div class="card-body">
                  <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
                  <p class="card-text">
                    <span>email address:{{user.emailAdd}}</span>
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
        <div v-else class="row">
            <SpinnerCompVue/>
        </div>
    </div>
</template>
<script>
import SpinnerCompVue from '../components/SpinnerComp.vue'
    export default {
        components:{
            SpinnerCompVue
        },
        computed:{
            users(){
                return this.$store.state.users
            }
        },
        // rendering component to the browser
        mounted(){
            this.$store.dispatch('fetchUsers')
        }
    }
</script>
<style scoped>
</style>









