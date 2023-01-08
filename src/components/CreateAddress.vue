<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas-create-address" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Address</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="persons-create-form" novalidate>
        <select class="dropdown" v-model="addresArt" required>
          <option class="dropdown-item">Privat</option>
          <option class="dropdown-item">Schule</option>
          <option class="dropdown-item">Arbeit</option>
          <option class="dropdown-item">Anders</option>
        </select>
        <div class="mb-3">
          <label for="straße" class="form-label">Straße</label>
          <input type="text" class="form-control" id="straße" v-model="street" required>
          <div class="invalid-feedback">
            Please provide the Straße.
          </div>
        </div>
        <div class="mb-3">
          <label for="haus-nummer" class="form-label">Hausnummer</label>
          <input type="text" class="form-control" id="haus-nummer" v-model="houseNumber" required >
          <div class="invalid-feedback">
            Please provide the Hausnummer.
          </div>
        </div>
        <div class="mb-3">
          <label for="postleihzahl" class="form-label">Postleihzahl</label>
          <input type="text" class="form-control" id="postleihzahl" v-model="postalCode" required >
          <div class="invalid-feedback">
            Please provide the Postleihzahl.
          </div>
        </div>
        <div class="mb-3">
          <label for="Ort" class="form-label">Ort</label>
          <input type="text" class="form-control" id="Ort" v-model="city" required >
          <div class="invalid-feedback">
            Please provide the Ort.
          </div>
        </div>
        <div class="mb-3">
          <label for="land" class="form-label">Land</label>
          <input type="text" class="form-control" id="land" v-model="country" required >
          <div class="invalid-feedback">
            Please provide the Land.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="craeteAddress">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAddress',
  data () {
    return {
      addresArt: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      country: ''
    }
  },
  methods: {
    craeteAddress () {
      const id = this.$route.params.id
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      const raw = JSON.stringify({
        addresArt: this.addresArt,
        street: this.street,
        houseNumber: this.houseNumber,
        postalCode: this.postalCode,
        city: this.city,
        country: this.country
      })
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v2/address/' + id, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}

</script>

<style scoped>
.dropdown{
  margin: 6px;
}
.dropdown-item{
  font-family: Arial;
  font-size: 12px;
}
</style>
