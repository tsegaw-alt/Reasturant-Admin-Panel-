<template>
<div>

    <div v-if="tableView">    
          <vue-good-table
            @on-selected-rows-change="selectionChanged"
            @on-row-click="onRowClick"
            :columns="columns"
            :rows="restaurantList" 
            :select-options="{ enabled: true }"
            :search-options="{ enabled: true }"
            :pagination-options="{ enabled: true}"
            
            >
            <div slot="selected-row-actions">
              <b-button size="sm"  variant="outline-primary" @click="editValue">Edit</b-button>
              <!-- <b-button size="sm"  variant="outline-primary" @click="deleteRecord(editRow.id)">Delete</b-button> -->
               <b-button size="sm"  variant="outline-primary" @click="deleteRestaurant(editRow)">Delete</b-button>
            </div>
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'after'">
                <b-dropdown right text="Action" size="sm"  variant="outline-primary">
                  <b-dropdown-item>Edit</b-dropdown-item>
                  <b-dropdown-item @click="deleteRestaurant" >Delete</b-dropdown-item>
                   
                </b-dropdown>
                  <!-- <button @click="deleteRestaurant">Delete</button> -->
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
            </template>
          </vue-good-table>
    </div>
    <div v-if="editView">
      <ViewDetailRestaurant :editRow="editRow" />
    </div>
</div>
</template>
<script>
//import Vue from 'vue'
import { VueGoodTable } from 'vue-good-table'
import ViewDetailRestaurant from './ViewDetailRestaurant.vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'ViewRestaurant',
  components: { VueGoodTable, ViewDetailRestaurant},
  data () {
    return {
      tableView:true,
      editView:false,
      editRow: {},
      columns: [
        {
          label: 'Restaurant Name',
          field: 'name'
        },
        {
          label: 'Phone No',
          field: 'phoneNumber'

        },
        {
          label: 'City',
          field: 'logoFileId'
        },
        {
          label: 'Country',
          field: 'pictureFileId',
        },
        {
          label: 'Contact Person',
          field: 'contact.name' 
        },
      ]
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'removeRestaurant']),
    onRowClick(params) {
    this.editRow = params.row 
    this.tableView = false
    this.editView = true
  },
  deleteRestaurant(params){
    //  this.delRow = params.row  
      this.removeRestaurant(params);
  },
  editValue(){
    this.tableView = false
    this.editView = true
  },
  deleteRecord(id){
      this.$alert('Restaurant with id '+id+' has been deleted')
  }
  },
  mounted() {
    // console.log(process.env.VUE_APP_ROOT_API)
  },
  computed: mapGetters(['restaurantList']),

  created () {
    this.fetchRestaurants()
  }
}
</script>
<style src="./sass/ViewRestaurant.scss" lang="scss" scoped />