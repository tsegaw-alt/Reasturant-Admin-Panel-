<template>
    <div>
 <div class="form-row">
                      <b-row>
                          <b-col cols="" >   <h5><strong>Restaurant Infos</strong></h5></b-col> 
                              <b-col cols="1" ><b-icon-plus @click="addMenu" font-scale="2.5"></b-icon-plus></b-col>  
                     </b-row>
                     
                      </div>
                      <div  v-for="(menuOf, index) in menuItems" :key="index" class="form-row">
                        <div class="col-md-3 mb-3">
                           <label for="validationDefault01"><strong>NUMBER FROM menuItems</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="494"  v-model="menuOf.number"  :name="`menuOf[${index}][number]`"/>
                    </div>
                        <div class="col-md-3 mb-3">
                         <label for="validationDefault01"><strong>PICTURE OF THE RESTAURANT</strong></label>
                             <!-- <input type="text" class="input-image"  placeholder="Upload Picture"   :name="`menuOf[${index}][pictureFileId]`"/> -->
                        <input type="text" class="form-control" id="input" placeholder="pictureFileId"  v-model="menuOf.pictureFileId"  :name="`menuOf[${index}][pictureFileId]`"/>
                           </div>

                        <div class="col-md-3 mb-3">
                           <label for="validationDefault01"><strong>NAME OF THE MEAL</strong></label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="input" placeholder="CHICKEN EXTRA BURGER"  v-model="menuOf.name"  :name="`menuOf[${index}][name]`"/>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>EXPLANATION OF THE MEAL</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Description of the meal"  v-model="menuOf.description"  :name="`menuOf[${index}][description]`"/>
                         </div>    

                         <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>PRICE OF THE MEAL</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="24$"  v-model="menuOf.unitPrice"  :name="`menuOf[${index}][unitPrice]`"/>
                    </div>
                        <div class="col-md-3 mb-3">
                         <label for="validationDefault01"><strong>DISCOUNT PRICE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="20$"  v-model="menuOf.discountedPrice"  :name="`menuOf[${index}][discountedPrice]`"/>
                      </div>
                     <b-col cols=""><b-icon-trash @click="removeMenu(menuOf)"  font-scale="2"></b-icon-trash></b-col>
                      </div>    
         
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'MenuItems',
    props: {
        menuItems: Object
    },
 
    methods: {
        
    
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
    }
//      computed:
//   mapGetters(['categoryList', 'foodCategoryList', 'toppingsList']),

}
</script>
<style src="../sass/AddRestaurantInfo.scss" lang="scss" scoped />

