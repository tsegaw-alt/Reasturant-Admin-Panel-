<template>
<div role="group">
  
  <div class="one-l" :src=pictureURL>
    <img :src=pictureURL class="one-l" style="width: 100%; height: 450px;" />
    <div class="that-one" >
    <b-card >
      <b-container>
        <b-row>   
            <b-col cols="12" md="auto"><img class="rounded-circle" :src="pictureURL"></b-col>
            <b-col class="rate-1" col lg="3">
              <h5><strong>{{ editRow.name }}  {{ editRow.lastname }}</strong></h5>
              <h5>{{ editRow.name }}  {{ editRow.lastname }} </h5>           
            </b-col>
            <b-col class="rate">
              <span class="fa fa-star checked"></span><strong> 5.0</strong>
            </b-col>       
            <b-col class="rate-2">
              <b-progress  show-value>
              <b-progress-bar :value="0" variant="danger"></b-progress-bar>
              <b-progress-bar :value="50" variant="warning"></b-progress-bar>
              <b-progress-bar :value=100 variant="success"></b-progress-bar>
              </b-progress>
            </b-col>
            <b-col class="rate4">
              <p class="h5 mb-2"> <b-icon icon="info-circle"></b-icon></p>
              <p class="h5 mb-2"> <b-icon icon="clock"></b-icon> 30 min</p>
            </b-col>  
         </b-row>
       </b-container>
   </b-card>
  </div>
</div>

  <div class="radio-toolbar">


    <input type="radio" id="radioRestaurantInfo" name="radioInfo" value="Restaurant Info" @click="restaurant" checked>
    <label for="radioRestaurantInfo">Restaurant Info</label>

    <input type="radio" id="radioWorkingHours" name="radioInfo" value="Working Hours"  @click="working">
    <label for="radioWorkingHours">Working Hours</label>

    <input type="radio" id="radioServiceArea" name="radioInfo" value="Service Area" @click="service">
    <label for="radioServiceArea">Service Area</label> 

    <input type="radio" id="radioCategory" name="radioInfo" value="Category" @click="category">
    <label for="radioCategory">Categories</label> 
<!-- 
    <input type="radio" id="radioMenu" name="radioInfo" value="Menu" @click="menu">
    <label for="radioMenu">Menu</label>  -->
  </div>

  <form @submit.prevent="onUsersubmit">  
  <div id="container">
        <div  v-show="restaurantInfo" title="Add Restaurant">
                      <div class="formTitle">
                          <h3><strong>View Restaurant Details</strong></h3>
                       
                      </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>NAME OF THE RESTAURANT</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Enter Name" disabled v-model="editRow.name" >
                    </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Enter Phone Number" disabled v-model="editRow.phoneNumber">
                      </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefaultUsername"><strong>COUNTRY</strong></label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="input" placeholder="Enter country" disabled v-model="editRow.owner.name">
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>CITY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Enter city" disabled v-model="editRow.addresses[0].city">
                          </div>
                      </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>STREET ADRESS</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Street Address" disabled  v-model="editRow.addresses[0].street">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>HOUSE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="House Number" disabled  v-model="editRow.addresses[0].houseNumber">
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>CITY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="City" disabled v-model="editRow.addresses[0].city">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>POSTCODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="PostCode" disabled  v-model="editRow.addresses[0].postCode">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>NAME OF THE BANK</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Name of the Bank" disabled v-model="editRow.owner.bankAccount.bankName">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault04"><strong>IBAN</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="IBAN" disabled  v-model="editRow.owner.bankAccount.iban">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault05"><strong>VAT CODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="VAT CODE" disabled v-model="editRow.owner.bankAccount.vatCode">
                        </div>
                         <!-- <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PICTURE OF THE RESTAURANT</strong></label>
                          <input type="file" class="input-image" id="input-f" placeholder="Picture of the Restaurant"  >
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefaultUsername"><strong>LOGO OF THE RESTAURANT</strong></label>
                          <input type="file" class="input-image"  placeholder="Logo of the Restaurant" >
                        </div> -->

                        </div>
                      <div class="formTitle">
                      <h3><strong>Restaurant Owner Infos</strong></h3>
                      <p>Fill the forms</p>
                      </div>
                      <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>NAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Name Of the Restaurant" disabled v-model="editRow.owner.name" >
                        </div>
                       
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>SURNAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Telephone Number" disabled v-model="editRow.owner.surname" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>EMAIL</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Telephone Number" disabled v-model="editRow.owner.email" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Telephone Number" disabled v-model="editRow.owner.phoneNumber" >
                        </div>
                      </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>STREET ADDRESS</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Street Address" disabled v-model="editRow.owner.address.street" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>HOUSE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="House Number" disabled v-model="editRow.owner.address.houseNumber" >
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>CITY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="City" disabled v-model="editRow.owner.address.city" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>POSTCODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="PostCode" disabled v-model="editRow.owner.address.postCode" >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>COUNTRTY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Country" disabled v-model="editRow.owner.address.country" >
                        </div>
                      </div>
                    <div class="formTitle">
                    <h3><strong>Contact Person</strong></h3>
                    <p>Fill the forms for confirmation</p>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>NAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Full Name" disabled v-model="editRow.contact.name" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>SURNAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Address" disabled v-model="editRow.contact.surname" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="House Number" disabled v-model="editRow.contact.phoneNumber" >
                        </div>
                      </div>
      
        </div>

        <div v-show="workingHours" title="Working Hours">
                      <div class="work-div" v-for="(item, index) in filter('SUNDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>SUN</strong></b-col> 
                          <b-col cols="8" >
                              <div >
                              <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" disabled class="a" size="sm" type="time" v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" disabled size="sm" type="time" v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                         
                          <!-- <b-col cols="2" class="work-add" ><b-icon-plus  @click="addSun" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('MONDAY')" :key="index">

                      <b-row>
                          <b-col cols="2" ><strong>MON</strong></b-col> 
                          <b-col cols="8" >
                            
                            <div >
                              <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
      
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addMon" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('TUESDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>TUE</strong></b-col>
                          <b-col cols="8" >
                            <div >
                              <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addTue" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('WEDNESDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>WED</strong></b-col>
                          <b-col cols="8" >
                            <div >
                              <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addWed" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('THURSDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>THU</strong></b-col>
                          <b-col cols="8" >
                              <div >
                               <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addThu" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('FRIDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>FRI</strong></b-col>
                          <b-col cols="8" >
                             <div >
                               <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addFri" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
                      <div class="work-div" v-for="(item, index) in filter('SATURDAY')" :key="index">
                      <b-row>
                          <b-col cols="2" ><strong>SAT</strong></b-col>
                          <b-col cols="8" >
                              <div >
                              <b-row class="work-brow" v-for="(time, index2) in item.workingHourDetails" :key="index2">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" disabled v-model="time.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" disabled v-model="time.closingHour" /></b-col>                                
                                <!-- <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col> -->
                              </b-row>
                            </div>
                          </b-col>
                          <!-- <b-col cols="2" ><b-icon-plus @click="addSat" font-scale="2"></b-icon-plus></b-col> -->
                      </b-row>
                      </div>
          
        </div>
   
        <div v-show="serviceAreas" title="Service Area">
                      <l-map
                        v-show="serviceAreas" 
                        style="height: 400px; width:100%" 
                        ref="map"
                        :zoom="zoom"
                        :center="center"
                        @update:zoom="zoomUpdated"
                        @update:center="centerUpdated"
                        @update:bounds="boundsUpdated"
                      >
                       
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-geo-json v-if="editRow.deliveryAreas[0].feature" :geojson="editRow.deliveryAreas[0].feature"></l-geo-json>
                      </l-map>

                  <div class="form-row">

                  <div class="col-md-3 mb-3">
                        <h5>Add City</h5>
                        <p>Fill up all forms for confirmtion</p>
                      <div>
                        <h7>POSTCODE</h7>
                        <input type="text" class="form-control" id="input" disabled v-model="editRow.deliveryAreas[0].postCode" placeholder="22865258"   >
                       </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <div class="city-div2">   
                      <h2>+</h2>
                    </div>
                    <div class="city-div"><h7>CITY</h7>
                      <input type="text" class="form-control" id="input" disabled v-model="editRow.deliveryAreas[0].street" placeholder="Hamburg">
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <h5>Selected Area</h5>
                    <p>Fill up all forms for confirmtion</p>
                    <p><strong>Selected Areas:</strong> Minimun Price <input type="text" disabled v-model="editRow.deliveryAreas[0].price" placeholder="25$" /> </p> 
                    <p ><u id="city">City or Postcode:</u> Minmum service price</p>
                  
                  </div>
                </div>
        </div>

        <div v-show="categories" title="Categories">
          
                  <h5><strong>Saved Categories </strong></h5>
                  <p>Selected Category Info</p>
                  <!-- <b-form-input  id="search-input"  placeholder="Search for Categories"></b-form-input> -->
                 
                <div class="form-row" >
                  <div class="col-md-4 mb-4" v-for="(category,index) in editRow.restaurantCategories" :key="index.id" >
                    <img :src="pictureURL" class="cat-img"  /> 
                      <label class="tur"><strong>{{ category.categoryName}}</strong> </label>
                  </div>
                </div>
                <h5><strong>Saved Food Categories <b>+</b></strong></h5>
                  <p>Selected food categories info</p>
                <!-- <b-form-input id="search-input" v-model="foodCategoryList.country" placeholder="Search for food categories"></b-form-input> -->
                  <br> 
                  <div class="form-row" >
                    <div class="col-md-4 mb-4" v-for="foodCategory in foodCategoryList" :key="foodCategory.id" >
                      <img :src="foodCategory.picture" class="cat-img"  />
                        <label class="tur"><strong>{{foodCategory.country}}</strong>
                        <p>{{foodCategory.type}}</p></label>
                      <input type="checkbox" v-bind:value="foodCategory.country" v-model="editRow.checkedFoodCategory"> &nbsp;
                    
                      
                    
                    </div>
                  </div>

                <h5><strong>Saved Toppings <b>+</b></strong></h5>
                  <p>Selected toppings info</p>
                <!-- <b-form-input id="search-input"  v-model="toppingsList.country" placeholder="Search for toppings"></b-form-input> -->
                  <br> 
                  <div class="form-row" >
                    <div class="col-md-4 mb-4" v-for="topping in toppingsList" :key="topping.id" >
                      <img :src="topping.picture" class="cat-img"  />
                      <label class="tur"><strong>{{topping.name}}</strong>  <span style="color:red; margin-left:30%">{{topping.price}}</span> 
                      <p>{{topping.discription}}</p></label> 
                      <input type="checkbox" v-bind:value="topping.name" v-model="editRow.checkedToppings"> 
                      <br>
                      
                      <div style="margin-top:5%;">
                          <span style="margin-left:4%;color:red">$4</span>
                          <toggle-button v-model="editRow.separation" v-bind:value="topping.name"
                          :labels="{checked: '', unchecked: ''}" style="margin-left:5%"/> Separation
                        
                      </div>
                    </div>
                  </div>
             
        </div>

        TST{{editRow.restaurantCategories[0]}}
        <!-- <b-button type="submit" class="btn addButton btn-secondary" >Update Restaurant Info</b-button> -->
  </div>                   
  </form>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import LDrawToolbar from "vue2-leaflet-draw-toolbar";
import LDraw from 'leaflet-draw';
export default {
  name: 'ViewDetailRestaurant',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LDrawToolbar,
    LDraw
  },
  props: {
        editRow: Object
    },

  data () {
    return {
      pictureURL: this.$store.getters.getImage,
      //pictureURL1: this.$store.getters.getImage,
      filterdData: null,
      restaurantInfo: true,
      workingHours: false,
      serviceAreas: false,
      categories: false,
      menus: false,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [47.313220, -1.319482],
      
    }
  },
  mounted() {

      this.$nextTick(() => {
      const map = this.$refs.map.mapObject;
      // Leaflet Draw
      // Add new FeatureGroup from leaflet for Draw objects on map
    
      const editableLayers = new window.L.FeatureGroup().addTo(map);
      const drawControl = new window.L.Control.Draw({
        position: 'bottomright',
        draw: {
          polygon:  {
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
              color: 'red',
              timeout: 2000,
              message: '<strong>Error Happen<strong>',
            },
            showArea: true,
            metric: true, //m2
            repeatMode: false,
            shapeOptions: {
              polylineID: false,
              color: '#000000',
              fillColor: '#F85F73',
              weight: 2,
              fillOpacity: 0.7,
              lineCap: 'round',
              lineJoin: 'bevel',
              dashArray: '',
              opacity: 1,
            },
          },
          polyline: false,
          rectangle: false,
          circle: false,
          marker: false
        },
        edit: {
          featureGroup: editableLayers,
          remove: true
        }
      });

      map.addControl(drawControl);

      map.on(window.L.Draw.Event.CREATED, (e) => {
        // const type = e.layerType;
        const layer = e.layer;
           this.restaurantInformationData.geometry.push(layer.getLatLngs());
        console.log(layer)
       
        editableLayers.addLayer(layer);
      });
    });
  },
  methods: {
    ...mapActions(['fetchCategory', 'fetchFoodCategory', 'fetchToppings', 'addRestaurants', 'updateRestaurant','fetchImage']),
    filter(day) {
       return this.editRow.workingHours.filter((el) => {
        return (el.dayOfWeek === day)
      })
    },
    restaurant(){
      this.restaurantInfo = true
      this.workingHours = false
      this.serviceAreas = false
      this.categories = false
      this.menus = false
    },
    working(){
      this.restaurantInfo = false
      this.workingHours = true
      this.serviceAreas = false
      this.categories = false
      this.menus = false
    },
    service(){
      setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
      this.restaurantInfo = false
      this.workingHours = false
      this.serviceAreas = true
      this.categories = false
      this.menus = false
    },
    category(){
      this.restaurantInfo = false
      this.workingHours = false
      this.serviceAreas = false
      this.categories = true
      this.menus = false
    },
    menu(){
      this.restaurantInfo = false
      this.workingHours = false
      this.serviceAreas = false
      this.categories = false
      this.menus = true
    },

    addMenu(){
       this.restaurantInformationData.MENU.push({
        numberFromMenu:'',
        pictureOfTheRestaurant:'',
        nameOfTheMeal: '',
        explanationOfTheMeal: '',
        priceOfTheMeal: '',
        discountPrice: '',
      })
    },
    removeMenu(event) {
       this.restaurantInformationData.MENU.splice(this.restaurantInformationData.MENU.indexOf(event), 1);
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  computed:{
    ... mapGetters(['categoryList', 'foodCategoryList', 'toppingsList','getImage']),
  },
 async created () {
  await this.fetchCategory()
    this.fetchFoodCategory()
    this.fetchToppings()
  // await  this.fetchImage('')
  await  this.fetchImage(this.editRow.pictureFileId)
  

 
    
  }
}
</script>

<style src="./sass/ViewDetailRestaurant.scss" lang="scss" scoped />
