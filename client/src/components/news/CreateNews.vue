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
                    
                    <b-dropdown-item href="#"> Log Out </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
     
    <div id="create-article-div">
     <h2> Create News </h2>
        <b-form @submit="onSubmit" >
        <b-form-group
            id="input-group-1"
            label="Title :"
            label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter Title"
          required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your text:" label-for="input-2"
       valid-feedback="Thank you!"
      :invalid-feedback="invalidFeedback"
      :state="state">

    <b-form-textarea
      id="textarea"
      v-model="form.text"
      placeholder="Enter text"
      required
      rows="8"
      max-rows="50"
      :state="state" trim></b-form-textarea>
    </b-form-group>
      
    <b-form-group
        id="input-group-3"
        label="Image :"
        label-for="input-3">
    <b-form-input
          id="input-3"
          v-model="form.image"
          type="text"
          placeholder="Enter image"
          required></b-form-input>
    </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="cancel" variant="danger">Cancel</b-button>
    </b-form>
    </div>
    <Footer></Footer>
    </div>    
</template>

<script>
 import Footer from './Footer.vue'

export default   {

      name: 'CreateNews',
  components: {
    
    Footer
  },
    
    
    data() {
      return {
        form: {
          title: '',
          text: '',
          image:''
        },
       show: true
      }
    },
         computed: {
      state() {
        return this.form.text.length >= 100
      },
      invalidFeedback() {
        if (this.form.text.length < 100) {
          
          return 'Enter at least 100 characters.'
        }
        return 'Please enter something.'
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
     
    }
  }
</script>


<style>

 #input-group-1, 
 #input-group-3, 
 #input-group-2 {
  width: 80%;
  margin: 0 auto;
}

#nav-main-div{
    width : 100%;
    position: fixed;
    top: 0;
}
#create-article-div{
    margin-top: 8rem;
}
</style>
