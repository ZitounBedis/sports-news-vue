<template>
    <div class="displayed-feed-box">
        <h1>Article Feed</h1>
        <div class="displayed-feed-box-unit" v-for="article in articles" :key="article._id">
            <div>
                <b-card-group deck>
                   <router-link :to= "{ name: 'ArticleShow', params:{idarticle: article._id}}" class="normaliseed-title">
                        <b-card
                        :img-src= article.imageUrl
                        img-alt="Card image"
                        img-top
                        >
                        <h4>{{article.title}}</h4>
                        <b-button v-if="userstatus === 'admin'" class="delete-it-button" type="cancel" variant="danger" @click="deleteArticleone(article._id)">Delete Article</b-button>
                        </b-card>
                    </router-link>
                </b-card-group>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "ArticleFeed",
    props: {
        articles: Array,
    },
    data() {
        return{
            userid: '',
            userstatus: ''
        }
    },
    mounted() {
         if(document.cookie){
            let cleancookies = document.cookie.replace('username=', '');
            let arrayuser = cleancookies.split(',');
            this.userid = arrayuser[0];
            this.userstatus = arrayuser[3];
        } else {
            alert("you are not loged in you'll redirected to Landing page!")
            window.location.replace('/')
        }
    },
    methods: {
        async deleteArticleone(id){
            await axios.delete(`/api/articles/${id}`);
            window.location.replace("/mainfeed");
        }
    }
}
</script>
<style>
    .displayed-feed-box{
        width: 50%;
        margin: 0 auto;
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .displayed-feed-box-unit{
        width: 40rem;
        margin-top: 2.8rem;
    }
</style>