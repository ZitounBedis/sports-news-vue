<template>
        <div>
            <div id="nav-main-div">
                <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#"><router-link class="links" to='/'>Logo Sport News</router-link></b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <b-nav-item href="#"><router-link class="links" to='/'> Home </router-link></b-nav-item>
                            <b-nav-item href="#"><router-link class="links" to='/signin'> Sign in </router-link></b-nav-item>
                        </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        </div>
        <div id="create-signup-div">
            <h1 class="text-center space-h1">Signup form</h1>
            <b-container fluid>
                <b-row class="my-1">
                    <b-col sm="2">
                    <label>Username :</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input
                        size="lg"
                        type="text"
                        placeholder="Enter your name"
                        v-model="username"
                    ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="2">
                    <label>Email :</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input
                        size="lg"
                        type="email"
                        placeholder="Enter your Email"
                        v-model="useremail"
                    ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="2">
                    <label>Password :</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input
                        size="lg"
                        type="password"
                        placeholder="Enter your Password"
                        v-model="password"
                    ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="2">
                    <label>Confirm password :</label>
                    </b-col>
                    <b-col sm="10">
                    <b-form-input
                        size="lg"
                        type="password"
                        placeholder="Confirm your password"
                        v-model="passwordConfirm"
                    ></b-form-input>
                    </b-col>
                </b-row>
            </b-container>

            <div class="center-btn-sing">
                    <b-button-group size="lg">
                        <b-button variant="success" @click="createNewUser">Submit</b-button>
                        <b-button variant="info"><router-link class="links" to='/signin'> Signin </router-link></b-button>
                    </b-button-group>
            </div>
        </div> 
        <Footer />   
    </div>    
</template>
<script>
import axios from "axios";
import Footer from '../landingpage-and-other/Footer'
export default {
    name: "Signup",
    components: {
        Footer,
    },
    data() {
        return{
            username: '',
            useremail: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        async createNewUser(){
            if(this.password === this.passwordConfirm){
                const newuser = await axios.post('/api/users/signup', {
                    username: this.username,
                    useremail: this.useremail,
                    password: this.password
                })
                const {data} = newuser
                alert(`welcome new user : \n-username : ${data.username} \n-useremail : ${data.useremail}`)
                window.location.replace('/signin');
            } else {
                alert("there is problem with your password confirmation!")
            }
        }
    }
}
</script>

<style scope>
label {
    font-size: 1.4rem;
}
#nav-main-div{
    width : 100%;
    position: fixed;
    top: 0;
}
#create-signup-div{
    width : 56%;
    margin: auto;
    border: solid 1.2px;
    border-radius: 4px;
    padding: 4.2rem;
    margin-top: 6rem;
    margin-bottom: 4rem;
}
.space-h1 {
    margin-bottom: 3.6rem;
}
.center-btn-sing{
    margin: 0 40%;
    margin-top: 3.2rem;
}
.links{
    color: #fff;
    text-decoration: none;
    margin: 0 1.6rem;
}
.links:hover{
    color: #000;
    font-weight: 600;
    text-decoration: none;
}
.links:visited{
    color: #fff;
    text-decoration: none;
}
</style>