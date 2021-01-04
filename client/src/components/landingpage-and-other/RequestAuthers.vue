<template>
    <div>
        <div id="nav-main-div">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Logo Sport News</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
      
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item href="#"><router-link class="links" to='/mainfeed'>Main feed</router-link></b-nav-item>
                </b-navbar-nav>
        
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{username}}</em>
                    </template>
                      <b-dropdown-item > {{userstatus}} </b-dropdown-item>
                      <b-dropdown-item ><router-link class="links-drop" to='/creatnews'> Post News </router-link></b-dropdown-item>
                      <b-dropdown-item  @click="logout"> Log Out </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div v-if="pendingUsers.length" class="list-of-request">
            <div class="pending-unit" v-for="pend in pendingUsers" :key="pend._id">
                <h5>{{pend.username}}</h5>
                <b-button-group size="md">
                        <b-button variant="success" @click="acceptRequest(pend._id)">Accept</b-button>
                        <b-button variant="danger" @click="refuseRequest(pend._id)"> Refuse </b-button>
                </b-button-group>
            </div>
        </div>
        <div v-if="!pendingUsers.length" class="list-of-request not">
            <h1>No requests</h1>
        </div>
        <Footer />
    </div>
</template>
<script>
import axios from "axios";
import Footer from './Footer'

export default {
    name: "RequestAuthers",
    components: {
        Footer,
    },
    data() {
      return {
          userid:'',
          username: '',
          userstatus: '',
          pendingUsers: []
      }
    },
    async mounted() {
        if(document.cookie){
            let cleancookies = document.cookie.replace('username=', '');
            console.log(cleancookies)
            let arrayuser = cleancookies.split(',');
            console.log(arrayuser)
            this.userid = arrayuser[0];
            this.username = arrayuser[2];
            this.userstatus = arrayuser[3];
        } else {
            alert("you are not loged in you'll redirected to Landing page!")
            window.location.replace('/')
        }
        const pendingIn = await axios.get('/api/users')
        this.pendingUsers = pendingIn.data;
        console.log(this.pendingUsers)
    },
    methods: {
      logout() {
            document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            alert(`have a nice day username : ${this.username}`);
            this.userid = '';
            this.useremail = '';
            this.username = '';
            this.userstatus = '';
            window.location.replace("/");
        },
        async acceptRequest(id){
            let accepted = await axios.put(`/api/users/autheraccpt/${id}`);
            accepted = await axios.put(`/api/users/autheraccpt/${id}`);
            this.pendingUsers = accepted;
            window.location.replace('/autherrequest')
        },
        async refuseRequest(id){
            let refused = await axios.put(`/api/users/autheraccpt/${id}`);
            refused = await axios.put(`/api/users/autheraccpt/${id}`);
            this.pendingUsers = refused;
            window.location.replace('/autherrequest')
        }
    }
}
</script>
<style>
    .list-of-request{
        width: 48%;
        height: 48vh;
        border: 1px solid rgb(168, 164, 164);
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 10rem;
        margin-bottom: 10.9rem;
    }
    .pending-unit{
        width: 90%;
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgb(168, 164, 164);
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 2rem;
        padding-left: 1rem;
    }
    .not{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>