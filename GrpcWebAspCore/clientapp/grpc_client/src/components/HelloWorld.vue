<template>
  <div>
    <input v-model="inputId" />
    <button @click="getById">GET BY ID</button><br /> <br />
    <button @click="getAll">GET ALL</button>
    <div style="margin:0 auto;">
      <h1>RESULT</h1>
      <table style="width:300px;" v-if="cities.length > 0">
        <tbody>
          <tr v-for="city in cities" :key="city.id"><td>{{city.id}}</td><td style="text-align:left;">{{city.name}}</td></tr>
        </tbody>
      </table>
      <p v-if="singleCity.hasOwnProperty('id')">Id: {{singleCity.id}} || Name: {{singleCity.name}}</p>
    </div>
  </div>
</template>

<script>
import cityService from '../protos/city_grpc_web_pb';
export default {
  data: function(){
    return{
      client:'',
      cities:[],
      inputId:'',
      singleCity:{}
    };
  },
  methods:{
    getById: function(){
      this.cities = [];
      let theRequest = new cityService.CityRequest();
      theRequest.setId(this.inputId);
      this.client.getCityById(theRequest, {}, (err, response) => {
        if(response){
          let _resp = response.toObject();
          this.singleCity = _resp;
        }
      })
    },
    getAll: function(){
      this.singleCity = {};
      let theRequest = new cityService.CityRequest();
      let metadata = {};
      let theStream = this.client.getAllCities(theRequest, metadata);
      let vm = this;
      vm.cities = [];
      theStream.on('data', function(response){
        let _resp = response.toObject();
        vm.cities.push(_resp);
      });
    }
  },
  mounted(){
    this.client = new cityService.CityClient('https://localhost:5001');
  }
}
</script>
