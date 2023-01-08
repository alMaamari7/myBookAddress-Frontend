<template>
  <div class="personen" style="display: flex; flex-direction: column;">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Finde Kontackt" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>
    </div>
    <div class="col" v-for="person in persons" :key="person.id">
    <router-link class="nav-link active" :to="'/PersonInfos/' + person.id">
    <div class="card text-bg-dark mb-3" style="max-width: 70rem;">
      <div class="card-body">
        <h5 class="card-title">{{person.firstName }} {{person.surname}}</h5>
        <p class="card-text">Handy Nummer: {{person.phoneNumber}}</p>
          E-Mail Addresse: {{person.eMailAddresse}}
      </div>
    </div>
    </router-link>
  </div>
  <CreatePerson></CreatePerson>
  </div>
</template>
<script>
import CreatePerson from '@/components/CreatePerson'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Persons',
  components: { CreatePerson },
  data () {
    return {
      persons: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v3/kontaktperson', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.persons.push(person)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
.input-group{
  flex: 1;
  align-content: center;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 180px;
  margin-bottom: 30px;
}
.btn-outline-secondary{
  background-color: black;
  color: white;
}
input{
  front-size: 1rem;
}
.hide{
  display: none;
}
 .col{
   display: grid;
   grid-template-rows: 1fr;
   padding-left: 110px;
   padding-right: 100px;
   border-radius: 2px;
   cursor: pointer;
 }
 .nav-link active{
   cursor: pointer;
 }
 .col:hover{
   object-fit: fill;
 }
</style>
