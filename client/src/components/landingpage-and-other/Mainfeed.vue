<template>
<div>
    <div id="nav-main-div">
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><router-link class="links" to='/'>Logo Sport News</router-link></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
      
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item @click="switchNews"> News </b-nav-item>
                    <b-nav-item @click="switchArticle"> Articles </b-nav-item>
                </b-navbar-nav>
        
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{username}}</em>
                    </template>
                    <b-dropdown-item > {{userstatus}} </b-dropdown-item>
                    <b-dropdown-item  @click="requestAuther" v-if="userstatus === 'user'"> {{autherRequest}} </b-dropdown-item>
                    <b-dropdown-item  v-if="userstatus === 'admin'"><router-link class="links-drop" to='/creatnews'> Post News </router-link></b-dropdown-item>
                    <b-dropdown-item  v-if="userstatus === 'admin'"><router-link class="links-drop" to='/autherrequest'> Auther requests </router-link></b-dropdown-item>
                    <b-dropdown-item  v-if="userstatus === 'auther'"><router-link class="links-drop" to='/createarticle'> Post Article </router-link></b-dropdown-item>
                    <b-dropdown-item  v-if="userstatus === 'auther'"><router-link class="links-drop" to='/myarticles'> My articles </router-link></b-dropdown-item>
                    <b-dropdown-item  @click="logout"> Log Out </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div v-if="showNews">
        <NewsFeed :news="this.allNews" />
    </div>
    <div v-else>
        <ArticleFeed :articles="this.allArticles" />
    </div>
    <Footer />
</div>    
</template>
<script>
import axios from 'axios'
import Footer from './Footer'
import ArticleFeed from '../articles/ArticlesFeed'
import NewsFeed from '../news/NewsFeed'
export default {
    name: 'Mainfeed',
    components: {
        Footer,
        ArticleFeed,
        NewsFeed
    },
    data() {
        return{
            userid: '',
            username: '',
            useremail: '',
            userstatus: '',
            autherRequest: 'Be an Auther',
            showNews: true,
            allArticles: [],
            allNews: []
        }
    },
    async mounted() {
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
        const articles = await axios.get('/api/articles');
        const news = await axios.get('/api/news');
        // console.log(articles.data);
        // console.log(news.data);
        this.allArticles = articles.data;
        this.allNews = news.data;
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
        },
         switchArticle(){
            this.showNews = false;
            console.log(this.showNews);
            scroll(0,0)
        },
        switchNews(){
            this.showNews = true;
            console.log(this.showNews);
            scroll(0,0)
        }
    }
   
}
</script>
<style>
   .links-drop{
       color: #000;
       text-emphasis: none;
       text-decoration: none;
   }
   .links-drop:hover{
       color: #000;
       text-decoration: none;
   }
   .links-drop:active{
       color: #000;
       text-decoration: none;
   }
   #nav-main-div{
       z-index: 100;
   }
</style>