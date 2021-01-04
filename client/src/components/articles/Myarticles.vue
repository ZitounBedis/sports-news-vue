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
                      <b-dropdown-item  @click="logout"> Log Out </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    
    <div class="displayed-feed-box">
        <h1>{{username}}s' Articles Feed</h1>
        <div class="displayed-feed-box-unit" v-for="(article, i) in myarticles" :key="article._id">
            <div>
                <b-card-group deck>
                    <router-link :to= "{ name: 'ArticleShow', params:{idarticle: article._id}}" class="normaliseed-title">
                        <b-card
                        :img-src= article.imageUrl
                        img-alt="Card image"
                        img-top
                        >
                        <h4>{{article.title}}</h4>
                        <b-button class="delete-it-button" type="cancel" variant="danger" @click="deleteArticle(article._id, i)">Cancel</b-button>
                        </b-card>
                        <p v-if="i<0">{{i}}</p>
                    </router-link>
                </b-card-group>
            </div>
        </div>
    </div>
    <Footer />
    </div>
</template>
<script>
import axios from "axios";
import Footer from '../landingpage-and-other/Footer'
export default {
    name: "Myarticles",
    components: {
    Footer
  },
    data() {
      return {
          userid:'',
          username: '',
          userstatus: '',
          myarticles: null,
      }
    },
    async mounted() {
        if(document.cookie){
            let cleancookies = document.cookie.replace('username=', '');
            let arrayuser = cleancookies.split(',');
            this.userid = arrayuser[0];
            this.username = arrayuser[2];
            this.userstatus = arrayuser[3];
        } else {
            alert("you are not loged in you'll redirected to Landing page!")
            window.location.replace('/')
        }
        const articles = await axios.get(`api/articles/myarticles/${this.userid}`);
        this.myarticles = articles.data;
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
        async deleteArticle(id, index){
            await axios.delete(`/api/articles/${id}`);
            this.myarticles.splice(index, 1);
            window.location.replace("/myarticles");
        }
    }
}
</script>
<style >

</style>