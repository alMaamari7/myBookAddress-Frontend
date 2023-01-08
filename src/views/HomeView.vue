<template>
  <div class="home">
    <div class="hello">
    <HelloWorld msg="Welcome to your Address Book"/>
    </div>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Finde Kontackt" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>
  </div>
  </div>
  <CreatePerson></CreatePerson>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CreatePerson from '@/components/CreatePerson'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CreatePerson
  },
  data () {
    return {
      persons: []
    }
  }
}

</script>
<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    position: relative;
  }
.hello{
   height: 250px;
   padding: 40px 50px;
}
  .input-group{
    flex: 1;
    align-content: center;
    padding-left: 130px;
    padding-right: 130px;
}
  button{
    background-color: black;
    color: white;
  }
</style>
