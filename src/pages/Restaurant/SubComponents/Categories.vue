<template>
<div>
<div>
  <b-modal id="modal-1" title="Add Category"  @ok="handleOk">
    <form ref="form" @submit.prevent="handleSubmit">
        
        <b-form-group
          label="Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="categoryData.name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="description"
          label-for="description-input"
        >
          <b-form-input
            id="name-input"
            v-model="categoryData.description"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Picture"
          label-for="picture-input"
        >
         <b-form-file class="mt-3" plain @change="categoryImageUpload($event)"></b-form-file>
        </b-form-group>
    </form>
  </b-modal>
  </div> 
      <h5><strong>Select Categories <b>  
      <b-icon-plus font-scale="2" v-b-modal.modal-1/></b> </strong></h5>
      <p>Fill up all forms for confirmation</p>      
      <b-form-input  id="search-input"  placeholder="Search for Categories"></b-form-input>
      <br> 
      <div class="form-row" >
        <div class="col-md-4 mb-4" v-for="category in categoryList" :key="category.id" >
          <img :src="catPictureURL" class="cat-img"  /> 
            <label class="tur"><strong>{{ category.name }}</strong>  {{ category.fileId }} <p >{{category.description}}</p> </label>
          
            <input type="checkbox"  v-bind:value="{'categoryId': category.id, 'categoryName': category.name }" v-model="restaurantInformationData.restaurantCategories"> 
        </div>
      </div>
      Checked Category {{restaurantInformationData.restaurantCategories}}
<div>


Food Categories

  <b-modal id="modal-1" title="Add Food Category"  @ok="handleOk">
    <form ref="form" @submit.prevent="handleSubmit">
        
        <b-form-group
          label="Name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="foodCategoryData.name"
          ></b-form-input>
        </b-form-group>
              
        <b-form-group
          label="Picture"
          label-for="picture-input"
        >
         <b-form-file class="mt-3" plain @change="categoryImageUpload($event)"></b-form-file>
        </b-form-group>
    </form>
  </b-modal>
  </div> 
      <h5><strong>Select Food Categories <b>  
      <b-icon-plus font-scale="2" v-b-modal.modal-1/></b> </strong></h5>
      <p>Fill up all forms for confirmation</p>      
      <b-form-input  id="search-input"  placeholder="Search for Food Categories"></b-form-input>
      <br> 
      <div class="form-row" >
        <div class="col-md-4 mb-4" v-for="category in categoryList" :key="category.id" >
          <img :src="catPictureURL" class="cat-img"  /> 
            <label class="tur"><strong>{{ category.name }}</strong>  {{ category.fileId }} <p >{{category.description}}</p> </label>
          
            <input type="checkbox"  v-bind:value="{'categoryId': category.id, 'categoryName': category.name }" v-model="restaurantInformationData.restaurantCategories"> 
        </div>
      </div>
      Checked Category {{restaurantInformationData.restaurantCategories}}

    

      
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Categories',
    props: {
        restaurantInformationData: Object,
        categoryData:Object,
        foodCategoryData: Object
    },
    data(){
      return {
        catPictureURL: this.$store.getters.getImage,
        selectedCategoryFile: null
      }
    },
    methods :{
    ...mapActions(['fetchCategory', 'fetchToppings', 'fetchFoodCategory','fetchImage']),
    handleOk() {
      this.handleSubmit()
    },
    async categoryImageUpload(param){
        const fd = new FormData();
        this.selectedCategoryFile = param.target.files[0]
        fd.append('image', this.selectedCategoryFile, this.selectedCategoryFile.name);
        await this.$store.dispatch('addCategoryFile',fd)
        this.categoryData.fileId = this.$store.getters.getFileId
        console.log('picture'+this.categoryData.fileId)
    },
    async handleSubmit(){
      console.log(this.categoryData)
      await this.$store.dispatch('addCategory',this.categoryData)
      this.$alert('Category Created Successfully!')
    }
    },
    computed:
    mapGetters(['categoryList', 'foodCategoryList', 'toppingsList','getImage']),
    created () {
     this.fetchCategory()
    // this.fetchImage('859407448969')
    //  this.fetchFoodCategory()
    //  this.fetchToppings()
    this.fetchImage(this.category.fileId)
  }

}
</script>
<style src="../sass/AddRestaurantInfo.scss" lang="scss" scoped />

