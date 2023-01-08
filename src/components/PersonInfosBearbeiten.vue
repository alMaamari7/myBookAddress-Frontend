<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas-person-berabeiten" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Person</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="persons-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label" placeholder={{firstName}}>First name</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          <div class="invalid-feedback">
            Please provide the first name.
          </div>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          <div class="invalid-feedback">
            Please provide the last name.
          </div>
        </div>
        <div class="mb-3">
          <label for="E-Mail Addresse" class="form-label">E-Mail Addresse</label>
          <input type="text" class="form-control" id="E-Mail Addresse" v-model="eMailAddrsse" required>
          <div class="invalid-feedback">
            Please provide the E-Mail Addrsse.
          </div>
        </div>
        <div class="mb-3">
          <label for="PhoneNumber" class="form-label">PhoneNumber</label>
          <input type="text" class="form-control" id="PhoneNumber" v-model="phoneNumber" required>
          <div class="invalid-feedback">
            Please provide the PhoneNumber.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="updatePerson">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonInfosBearbeiten',
  data () {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      eMailAddrsse: ''
    }
  },
  methods: {
    updatePerson () {
      const id = this.$route.params.id
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        firstName: this.firstName,
        surname: this.lastName,
        eMailAddresse: this.eMailAddrsse,
        phoneNumber: this.phoneNumber
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v3/kontaktperson/' + id, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
