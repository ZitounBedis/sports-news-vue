<template>
    <div>
        <nav class="nav-landing">
            <div>
                <h1>Landing logo</h1>
            </div>
            <div class="nav-menu-landing">
                <h2>Signin</h2>
                <h2>About</h2>
            </div>
        </nav>
        <div class="main-landing-img">
            <button class="button-landing">Sign for the News</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "Landingpage"
}
</script>
<style>
    .nav-landing{
        position: fixed;
        top: 0;
        width: 100%;
        padding: .1rem 4rem;
        display: flex;
        justify-content: space-between;
        background-color: #F2A663;
        height: 6hv;
    }
    .nav-menu-landing{
        display: flex;
        justify-content: space-between;
    }
    .nav-menu-landing h2{
        margin-right: 3rem;
        cursor: pointer;
    }
    .main-landing-img{
        width:100%;
        height: 100vh;
        background: url("https://i.imgur.com/tPa2mWx.jpg") no-repeat 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button-landing{
        width: 18%;
        height: 2.8rem;
        background: transparent;
        border: #F28D52 solid 3px;
        border-radius: 3px;
        color: #F28D52;
        font-weight: 600;
        margin: 0 0 8rem 12rem;
    }
    .button-landing:hover{
        background: #F28D52;
        border: #F2F2F2 solid 4px;
        color: #F2F2F2;
        font-weight: 800;
    }
</style>