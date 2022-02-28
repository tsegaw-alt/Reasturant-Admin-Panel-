<template>
<div role="group">
  <div class="radio-toolbar">
    <input type="radio" id="radioRestaurantInfo" name="radioInfo" value="Restaurant Info" @click="restaurant" checked>
    <label for="radioRestaurantInfo">Restaurant Info</label>

    <input type="radio" id="radioWorkingHours" name="radioInfo" value="Working Hours"  @click="working">
    <label for="radioWorkingHours">Working Hours</label>

    <input type="radio" id="radioServiceArea" name="radioInfo" value="Service Area" @click="service">
    <label for="radioServiceArea">Service Area</label> 

    <input type="radio" id="radioCategory" name="radioInfo" value="Category" @click="category">
    <label for="radioCategory">Categories</label> 

    <!-- <input type="radio" id="radioMenu" name="radioInfo" value="Menu" @click="menu">
    <label for="radioMenu">Menu</label>  -->
  </div>
  <form  Content-Type="multipart/form-data" @submit.prevent="onUsersubmit">
  <div id="container">
        <div  v-show="restaurantInfo" title="Add Restaurant">
            <RestaurantInfo 
            :restaurantInformationData = restaurantInformationData
            :address = address 
            />
            
        </div>

        <div v-show="workingHours" title="Working Hours">
            <WorkingHour :workingHourData = workingHourData />
        </div>
   
        <div v-show="serviceAreas" title="Service Area">
            <ServiceAreas 
            :restaurantInformationData = restaurantInformationData 
            :serviceAreaData = serviceAreaData
            />          
        </div>

        <div v-show="categories" title="Categories"> 
             <Categories 
             :restaurantInformationData = restaurantInformationData 
             :categoryData = categoryData
             :foodCategoryData = foodCategoryData
             />
        </div>

         <!-- <div  v-show="menus" title="Add Menu">
           <MenuItems :menuItems = menuItems />
          </div> -->
          
     
        <b-button type="submit" class="btn addButton btn-secondary" >Add Restaurant Info</b-button>

       


  </div>                   
  </form>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RestaurantInfo from './SubComponents/RestaurantInfo.vue'
import ServiceAreas from './SubComponents/ServiceAreas.vue'
import Categories from './SubComponents/Categories.vue'
import WorkingHour from './SubComponents/WorkingHour.vue'
import MenuItems from './SubComponents/MenuItems.vue'
export default {
  name: 'AddRestaurantInfo',
  components: {
    RestaurantInfo,
    ServiceAreas,
    Categories,
    WorkingHour,
    MenuItems
   
  },

  data () {
    return {
      workingHourDataDetail:'',
      address: {
          street: 'Asko',
          city: 'Addis Ababa',
          houseNumber: '724',
          suffix: '251',
          postCode: '1000',
          addressType: 'WORK',
          country: 'Ethiopia'
        },
      categoryData:{
        name: "",
        description: "",
        fileId: ""
      },  
       foodCategoryData:{
        name: "",
        fileId: "",
        id: ""
        
      },  
      serviceAreaData:{
        postCode: '1000',
        street: 'Asko',
        price: '25.00',
        feature: {}
      },
      workingHourData:{
        workingHours:[  
         {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'SUNDAY ',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'MONDAY',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'TUESDAY',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'WEDNESDAY',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'THURSDAY',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'FRIDAY',
            id: ''
          },
          {
            workingHourDetails: [
              {
                openingHour: '',
                closingHour: '',
                id: ''
              }
            ],
            restaurantId: '',
            dayOfWeek: 'SATURDAY',
            id: ''
          }
        ]
      },
      restaurantInformationData:{
        name: 'Sky Light',
        phoneNumber: '091090121',
        owner:{
            name:'Mike',
            surname:'Jhon',
            email:'mike@gmail.com',
            phoneNumber:'0910121232',
            address: {
                street:'Bole',
                houseNumber:'223',
                city:'Addis Ababa',
                country:'Ethiopia',
                suffix:'251',
                postCode:'10000',
                addressType: 'WORK'
            },
            bankAccount: {
                bankName:'CBE',
                iban:'0900909',
                vatCode:'11111'
            },
            id: ''
          },
        addresses: [],
        deliveryAreas:  [],
        workingHours: '',
        restaurantCategories: [],
        pictureFileId: '',
        logoFileId: '',
        contact: {
          name: 'Abel',
          surname: 'Aster',
          phoneNumber: '0910909099'
        },
        id: ''

      },

       menuItems: [
            {
                number: '001',
                pictureFileId: '2121',
                name: 'Doro Wot',
                description: 'Special',
                unitPrice: '2222',
                discountedPrice: '200',
                restaurantId: '',
                id: ''
            }
         ],

      restaurantInfo: true,
      workingHours: false,
      serviceAreas: false,
      categories: false,
      menus: false,
    }
  },
  methods: {
    ...mapActions(['fetchCategory', 'fetchFoodCategory', 'fetchToppings']),
    filter() {
       this.workingHourDataDetail = this.workingHourData.workingHours.filter((el) => {
        return (el.workingHourDetails[0].openingHour != "")
      })
    },
    async onUsersubmit () {
      //await this.$store.dispatch('addMenuItems',this.menuItems)
      //console.log( this.menuItems)
      // this.workingHourDataDetail = this.workingHourData.workingHours
      // console.log( this.workingHourData.workingHours)
      this.filter()
      this.restaurantInformationData.workingHours = this.workingHourDataDetail
      this.restaurantInformationData.addresses.push(this.address)
      this.restaurantInformationData.deliveryAreas.push(this.serviceAreaData)
      await this.$store.dispatch('addRestaurants',this.restaurantInformationData)
      this.$alert('Restaurant Added Successfully!')
      this.$router.go('/app/restaurant')
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
       this.menuItems.push({
          number:'',
          pictureFileId:'',
          name:'',
          description:'',
          unitPrice:'',
          discountedPrice:'',
          restaurantId: '',
          id: '',
      })
    },
    removeMenu(event) {
       this.menuItems.splice(this.menuItems.indexOf(event), 1);
    }
  },
  computed:
  mapGetters(['categoryList', 'foodCategoryList', 'toppingsList']),

  created () {
    this.fetchCategory()
    this.fetchFoodCategory()
    this.fetchToppings()
  }
}
</script>

<style src="./sass/AddRestaurantInfo.scss" lang="scss" scoped />
