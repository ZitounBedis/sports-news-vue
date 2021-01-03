<template>
<div>
    <div id="nav-main-div">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><router-link class="links" to='/'>Logo Sport News</router-link></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
      
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item href="#"> Articles </b-nav-item>
                    <b-nav-item href="#"> News </b-nav-item>
                </b-navbar-nav>
        
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{username}}</em>
                    </template>
                    <b-dropdown-item href="#"> {{userstatus}} </b-dropdown-item>
                    <b-dropdown-item href="#" @click="requestAuther"> {{autherRequest}} </b-dropdown-item>
                    <b-dropdown-item href="#" @click="logout"> Log Out </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <Footer />
</div>    
</template>
<script>
import axios from 'axios'
import Footer from './Footer'
export default {
    name: 'Mainfeed',
    components: {
        Footer
    },
    data() {
        return{
            userid: '',
            username: '',
            useremail: '',
            userstatus: '',
            autherRequest: 'Be an Auther',
        }
    },
    mounted() {
        if(document.cookie){
            let cleancookies = document.cookie.replace('username=', '');
            // console.log(cleancookies)
            let arrayuser = cleancookies.split(',');
            // console.log(arrayuser)
            this.userid = arrayuser[0];
            this.useremail = arrayuser[1];
            this.username = arrayuser[2];
            this.userstatus = arrayuser[3];
            if(arrayuser[4] === 'pending'){
                this.autherRequest = arrayuser[4];
            }
        } else {
            alert("you are not loged in you'll redirected to Landing page!")
            window.location.replace('/')
        }
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

        async requestAuther(){
            if(this.autherRequest !== 'pending'){
                const id = this.userid;
                let request = await axios.put('/api/users/autherqst/' + id);
                request = await axios.put('/api/users/autherqst/' + id);
                console.log(request.data.autherRequest);
                this.autherRequest = request.data.autherRequest;
            } else {
                alert('Please wait until your author request is examined by an Administrator')
            } 
        }
    }
}
</script>
<style>
    
</style>