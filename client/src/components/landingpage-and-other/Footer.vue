<template>
    <div>
        <div id="container">
                <div id="contacts">
                    <div id="contacts--contact">
                        <p>E-mail: spotsnews@gnet.tn</p>
                        <p>Phone: 00216 71000000</p>
                    </div>
                    <div id="contacts--social">
                        <div> AboutUs </div>
                    </div>
                </div>
            <div id="mentions">
                <p>2020 | mentions légales</p>
            </div>
            </div> 
    </div>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style>

#container{
  padding-top: 20px;
  margin-top: 8rem;
  width: 100%;
  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  font-size: 15px;
  text-align: left;
  float: left;
  width: 400px;
  padding: 10px;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
}
#mentions p {
  font-size:0.9rem;
}
</style>