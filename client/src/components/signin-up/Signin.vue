<template>
        <div>
            <div id="nav-main-div">
                <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">Logo Sport News</b-navbar-brand>
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
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#"> Status </b-dropdown-item>
                            <b-dropdown-item href="#"> Be Author </b-dropdown-item>
                            <b-dropdown-item href="#"> Log Out </b-dropdown-item>
                        </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        </div>
        <div id="create-article-div">
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
                    ></b-form-input>
                    </b-col>
                </b-row>
            </b-container>

            <div class="center-btn-sing">
                    <b-button-group size="lg">
                        <b-button variant="success">Submit</b-button>
                        <b-button variant="info">Signin</b-button>
                    </b-button-group>
            </div>
        </div>
        <Footer />     
    </div>    
</template>
<script>
export default {
    name: "Singin"
}
</script>

<style>
label {
    font-size: 1.4rem;
}
#nav-main-div{
    width : 100%;
    position: fixed;
    top: 0;
}
#create-article-div{
    width : 56%;
    margin: auto;
    margin-top: 16rem;
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
</style>