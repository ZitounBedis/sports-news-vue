<template>
    <div>
        <div id="nav-main-div">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">Logo Sport News</b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <b-nav-item href="#"><router-link class="links" to="/mainfeed">Main feed</router-link></b-nav-item>
                        </b-navbar-nav>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>{{username}}</em>
                            </template>
                            <b-dropdown-item> {{userstatus}} </b-dropdown-item>
                            <b-dropdown-item  @click="requestAuther" v-if="userstatus === 'user'"> {{autherRequest}} </b-dropdown-item>
                            <b-dropdown-item  v-if="userstatus === 'admin'"><router-link class="links-drop" to='/creatnews'> Post News </router-link></b-dropdown-item>
                            <b-dropdown-item  v-if="userstatus === 'auther'"><router-link class="links-drop" to='/createarticle'> Post Article </router-link></b-dropdown-item>
                            <b-dropdown-item  @click="logout"> Log Out </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div class="main-post-showing">
            <div v-if="news">
                <h1>this is an News unit</h1>
                <b-card-group deck>
                <b-card :img-src= news.imageUrl img-alt="Card image" img-top>
                    <h4>{{news.title}}</h4>
                    <b-card-text>{{news.text}}</b-card-text>
                </b-card>
                </b-card-group>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import axios from "axios";
import Footer from '../landingpage-and-other/Footer'

export default {
    
    name: "NewsShow",
    components: {
        Footer
    },
     data() {
      return {
          username: '',
          userstatus: '',
          autherRequest: 'Be an Auther',
          news: null
      }
    },
    async mounted() {
        if(document.cookie){
            let cleancookies = document.cookie.replace('username=', '');
            console.log(cleancookies)
            let arrayuser = cleancookies.split(',');
            console.log(arrayuser)
            this.username = arrayuser[2];
            this.userstatus = arrayuser[3];
            if(arrayuser[4] === 'pending'){
                this.autherRequest = arrayuser[4];
            }
        } else {
            alert("you are not loged in you'll redirected to Landing page!")
            window.location.replace('/')
        }
        //mouting data from cloud server
        const id = this.$route.params.idnews;
        const news = await axios.get(`/api/news/${id}`);
        this.news = news.data;
    },
    methods:{
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
    .main-post-showing{
        width:66%;
        margin: 0 auto;
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
</style>