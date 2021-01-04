<template >
    <div class="displayed-feed-box">
        <h1>News Feed</h1>
        <div class="displayed-feed-box-unit" v-for="(neww) in news" :key="neww._id">
            <div>
                <b-card-group deck>
                    <router-link :to= "{ name: 'NewsShow', params:{idnews: neww._id}}"  class="normaliseed-title">
                        <b-card
                        :img-src= neww.imageUrl
                        img-alt="Card image"
                        img-top
                        >
                        <h4>{{neww.title}}</h4>
                        <b-button v-if="userstatus === 'admin'" class="delete-it-button" type="cancel" variant="danger" @click="deleteNews(neww._id)">Delete News</b-button>
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
    name: "NewsFeed",
    props: {
        news: Array,
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
        async deleteNews(id){
            await axios.delete(`/api/news/${id}`);
            window.location.replace("/mainfeed");
        }
    }
}
</script>
<style >
  .normaliseed-title{
      color: #000;
      text-decoration: none;
  }
  .normaliseed-title:hover{
      color: #000;
      text-decoration: none;
  }
  .normaliseed-title:active{
      color: #000;
      text-decoration: none;
  }
  .normaliseed-title:link{
      color: #000;
      text-decoration: none;
  }
</style>