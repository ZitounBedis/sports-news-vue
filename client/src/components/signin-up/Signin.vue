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
                            <b-nav-item href="#"><router-link class="links" to='/signup'>Sign up</router-link></b-nav-item>
                        </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        </div>
        <div id="create-signin-div">
            <h1 class="text-center space-h1">Signin form</h1>
            <b-container fluid>

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
            </b-container>

            <div class="center-btn-sing">
                    <b-button-group size="lg">
                        <b-button variant="success" @click="enteruser" >Submit</b-button>
                        <b-button variant="info"><router-link class="links" to='/signup'> Signup </router-link></b-button>
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
    name: "Signin",
    components: {
        Footer
    },
    data() {
        return{
            useremail:'',
            password:''
        }
    },
    methods: {
        async enteruser(){
            const userdata = await axios.post('/api/users/signin', {
                useremail : this.useremail,
                password: this.password
            });
            if(userdata.data){
                document.cookie = `username=${userdata.data._id},${userdata.data.useremail},${userdata.data.username},${userdata.data.status},${userdata.data.autherRequest}`
                this.useremail = '';
                this.password = '';
                window.location.replace('/mainfeed')
            } else {
                this.useremail = '';
                this.password = '';
                alert("your information are wrong please check your inputs")
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
#create-signin-div{
    width : 56%;
    margin: auto;
    margin-top: 13.4rem;
    margin-bottom: 3rem;
    border: solid 1.2px;
    border-radius: 4px;
    padding: 4.2rem;
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