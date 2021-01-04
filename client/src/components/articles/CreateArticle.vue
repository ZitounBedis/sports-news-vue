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
     
    <div id="create-article-div">
      <h2> Post an Article </h2>
          <b-form>
          <b-form-group
              id="input-group-1"
              label="Title :"
              label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="title"
              type="text"
              placeholder="Enter Title"
              required>
            </b-form-input>
          </b-form-group>

        <b-form-group 
        id="input-group-2"
        label="Your text:" 
        label-for="input-2">

        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter text"
          required
          rows="8"
          max-rows="50"
          ></b-form-textarea>
        </b-form-group>
        
      <b-form-group
          id="input-group-3"
          label="Image :"
          label-for="input-3">
            <b-form-input
            id="input-3"
            v-model="image"
            type="text"
            placeholder="Enter image"
            required>
            </b-form-input>
        </b-form-group >
        <div class="confim-infirm">
          <b-button class="submit-butn-not" type="submit" variant="primary" @click="postArticle">Submit</b-button>
          <b-button class="submit-butn-not" type="cancel" variant="danger">Cancel</b-button>
        </div>
        </b-form>
    </div>
    <Footer></Footer>
    </div>    
</template>

<script>
import axios from "axios";
import Footer from '../landingpage-and-other/Footer'

export default   {
  name: 'CreateArticle',
  components: {
    Footer
  },
    data() {
      return {
          title: '',
          text: '',
          image:'',
          userid:'',
          username: '',
          userstatus: ''
      }
    },
    mounted() {
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
        async postArticle(){
          const newarticle = await axios.post('/api/articles', {
            title: this.title,
            imageUrl: this.image,
            text: this.text,
            creator: this.userid
          });
            alert(`article submited, thank you for your contribution ${this.username}`);
            this.title = '';
            this.text = '';
            this.image = '';
            console.log(newarticle.data);
        }
    }
  }
</script>


<style>

</style>


