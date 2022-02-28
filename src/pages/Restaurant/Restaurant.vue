<template>
<div>
  <!-- <router-link to="/app/addrestaurant" type="button" class="btn addButton btn-secondary">Add Restaurant</router-link> -->
  <b-button  type="button" class="btn addButton btn-secondary" @click="showForm">Add Restaurant</b-button>
 
    <div class="tables-basic" v-show="viewTable">
          <ViewRestaurant />
    </div>

    <div v-show="viewForm">
        <AddRestaurantInfo />
    </div>


</div>
</template>

<script>
import AddRestaurantInfo from './AddRestaurantInfo.vue'
import ViewRestaurant from './ViewRestaurant.vue'
import { authService } from '../../services/auth'
import { get } from '../../services/apiService'
export default {
  name: 'Restaurant',
  components: { AddRestaurantInfo, ViewRestaurant },
  data () {
    return {
      viewForm: false,
      viewTable: true
    }
  },
  methods: {
   
    showForm(){
      this.viewForm = true
      this.viewTable = false
    }
  },
  created(){
    get('/restaurant/api/restaurants').then(data=>{
      console.log('restaurants')
      console.log(data)
      console.log('restaurants')
    });
  }
}
</script>

<style src="./sass/Restaurant.scss" lang="scss" scoped />
