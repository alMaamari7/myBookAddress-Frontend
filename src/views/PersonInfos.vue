<template>
 <div class ="personsdetails"  style="
     margin-top: 57px;
     display: flex;
     flex-direction: column">
  <div class="header" >
    <div class="name font-white">
      <h5 class="username">{{personen.firstName}} {{personen.lastName}}</h5>
    </div>
    <div class="user-details">
      <div class="user-details-info font-white">
       <p class="details-mail">{{personen.eMailAddrsse}}</p>
        <p class="details-phone">{{personen.phoneNumber}}</p>
      </div>
      <div class="button-header">
        <div class="button-bearbeiten">
        <button class="button-header-berabeiten" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas-person-berabeiten" aria-controls="#persons-create-offcanvas-person-berabeiten">
          <i class="bi bi-person-plus-fill"></i>
          Berabeiten</button>
        <PersonInfosBearbeiten id="persons-create-offcanvas-person-berabeiten" person.id></PersonInfosBearbeiten>
        </div>
        <div class="löschen">
        <button class="button-header-löschen" type="button" formtarget="#person-loeschen" data-bs-target="#person-loeschen" @click.prevent="deletePerson
">
          <i class="bi bi-person-plus-fill"></i>
          Löschen</button>
        <person-loeschen id="person-loeschen"></person-loeschen>
        </div>
      </div>
    </div>
  </div>
   <div class="body">
     <div class="body-button" style="position: relative; height: 50px">
       <button class="body-button-hinzufügen" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas-create-address" aria-controls="#persons-create-offcanvas-create-address">
         <i class="bi bi-person-plus-fill"></i>
        hinzufügen</button>
       <CreateAddress id ="persons-create-offcanvas-create-address" person.id></CreateAddress>
     </div>
       <div class="body-card" v-for="person in personInfo" :key="person.id">
         <div class="address-art">
           <p class="art-addresse">Addressart: {{person.addresArt}}</p>
           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
           <button class="material-symbols-outlined" type="button" data-bs-toggle="dropdown" aria-expanded="false">more_vert
           </button>
         </div>
         <div class="address-datails">
           <p class="straße" style="top:10px">Straße: {{person.street}}</p>
           <p class="haus" style="top:55px">Hausnummer: {{person.houseNumber}}</p>
           <p class="post" style="top:100px">Postleihzahl: {{person.postalCode}}</p>
           <p class="ort" style="top:145px">Ort: {{person.city}}</p>
           <p class="land" style="bottom: 5px">Land: {{person.country}}</p>
         </div>
       </div>
     </div>
   </div>
</template>
<script>
import CreateAddress from '@/components/CreateAddress'
import PersonInfosBearbeiten from '@/components/PersonInfosBearbeiten'
import PersonLoeschen from '@/components/PersonLoeschen'
export default {
  name: 'PersonInfos',
  components: {
    CreateAddress,
    PersonInfosBearbeiten,
    PersonLoeschen
  },
  data () {
    return {
      personInfo: [],
      personen: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        eMailAddrsse: ''
      }
    }
  },
  mounted () {
    const id = this.$route.params.id
    console.log(this.$route.params.id)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v3/kontaktperson/' + id, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.personen.firstName = result.firstName
        this.personen.lastName = result.surname
        this.personen.eMailAddrsse = result.eMailAddresse
        this.personen.phoneNumber = result.phoneNumber
      }
      )
      .catch(error => console.log('error', error))

    const requestOptionss = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v2/address/' + id, requestOptionss)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.personInfo.push(person)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    deletePerson () {
      const id = this.$route.params.id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v3/kontaktperson/' + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
 .header{
   background-color: gray;
   height: 250px;
   display: flex;
   flex-direction: column;
   border-radius: 2px;
 }
 .font-white {
   color: white;
 }
 .name{
   align-content: center;
   padding-top: 50px;
   height: 125px;
 }
 .username {
   font-size: 30px;
   font-family: "Roboto Light";
 }
 .user-details{
   height: 125px;
   position: relative;
 }
 .details-mail,
 .details-phone {
   align-content: center;
   font-family: "Apple Braille";
   font-size: 18px;
   margin-top: 0px;

 }
 .details-phone{
   display: inline-block;
 }

 .button-header-berabeiten,
 .button-header-löschen{
   background-color: aliceblue;
   border-radius: 4px;
   font-family: Arial;
   font-size: 10px;
   padding: 4px;
   position: absolute;
   bottom: 8px;
   border: none;
 }
 .button-header-berabeiten {
   right: 20px;
 }
 .button-header-löschen{
   right: 85px;
 }
 .button-header-löschen:hover,.button-header-berabeiten:hover,.body-button-hinzufügen:hover,.dropdown:hover{
   color: aliceblue;
   background-color: gray;
 }
 .body{
   background-color: white;
   flex: 1;
   display: flex;
   flex-direction: column;
 }
 .body-button-hinzufügen{
   background-color: aliceblue;
   border-radius: 4px;
   font-family: Arial;
   font-size: 10px;
   padding: 4px;
   position: absolute;
   border: none;
   top: 10px;
   right: 45px ;
 }
 .body-card{
   display: flex;
   flex-direction: column;
   border-style: double;
   border-radius: 3px;
   height: 300px;
   margin-bottom: 10px;
 }
 .address-art{
   background-color: gray;
   position: relative;
   height: 60px;
 }
 .material-symbols-outlined{
   position: absolute;
   top: 1px;
   right: 0px;
   background-color: gray;
   border: none;
   user-select: none;
 }
 .material-symbols-outlined:active{
   border: none;
 }
 .art-addresse{
   display: inline-block;
   position: absolute;
   align-content: center;
   top: 18px;
   font-family: Arial;
 }
 .address-datails{
   flex: 1;
   position: relative
 }
 .straße,.haus,.post,.ort,.land{
   display: inline-block;
   position: absolute;
   align-content: center;
 }
</style>
