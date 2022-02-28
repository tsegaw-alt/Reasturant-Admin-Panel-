<template>
    <div>
        <div class="formTitle">
                          <h5><strong>Restaurant Infos</strong></h5>
                          <p>Fill the forms for confirmation</p>
                      </div>
                          <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>NAME OF THE RESTAURANT</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Name Of the Restaurant" v-model="restaurantInformationData.name" >
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="number" class="form-control" id="input" placeholder="Phone Number" value="123456" v-model="restaurantInformationData.phoneNumber" >
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PICTURE OF THE RESTAURANT</strong></label>
                          <input type="file" class="input-image" id="input-f" ref="pictureFile" placeholder="Picture of the Restaurant"  @change="pictureUpload($event)" >
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefaultUsername"><strong>LOGO OF THE RESTAURANT</strong></label>
                          <input type="file" class="input-image" id="input-f" ref="logoFile" placeholder="Logo of the Restaurant" @change="logoUpload($event)" >  
                        </div>
                        
                      </div>


                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>STREET ADDRESS</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Street Adress"  v-model="address.street"/>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>HOUSE NUMBER</strong></label>
                          
                          <input type="text" class="form-control" id="input" placeholder="House Number"  v-model="address.houseNumber" />
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>CITY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="City" v-model="address.city"  />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>POSTCODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Postcode" v-model="address.postCode" />
                        </div>
                    
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>COUNTRTY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Country" v-model="address.country" />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>SUFFIX</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Suffix" v-model="address.suffix"  />
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>ADDRESS TYPE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Address Type"  v-model="address.addressType" />
                        </div>
                     </div>
                     


                    <div class="formTitle">
                      <h5><strong>Restaurant Owner Infos</strong></h5>
                      <p>Fill the forms for confirmation</p>
                      </div>

                     <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefaultUsername"><strong>NAME</strong></label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="input" placeholder="Name"  v-model="restaurantInformationData.owner.name">
                            </div>
                        </div>
                      
                      <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>SURNAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Surname"  v-model="restaurantInformationData.owner.surname">
                          </div>
                      
                      <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>EMAIL</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Email"  v-model="restaurantInformationData.owner.email">
                          </div>
                      
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Phone Number"  v-model="restaurantInformationData.owner.phoneNumber">
                          </div>
                      
                      
                      
                      </div>

                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>STREET ADDRESS</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Street Address"   v-model="restaurantInformationData.owner.address.street">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>HOUSE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="House Number"   v-model="restaurantInformationData.owner.address.houseNumber">
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>CITY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="City"  v-model="restaurantInformationData.owner.address.city">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>COUNTRY</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Country"   v-model="restaurantInformationData.owner.address.country">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>SUFFIX</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Suffix"  v-model="restaurantInformationData.owner.address.suffix">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault04"><strong>POSTCODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Postcode"  v-model="restaurantInformationData.owner.address.postCode">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault05"><strong>ADDRESS TYPE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Address Type"  v-model="restaurantInformationData.owner.address.addressType">
                        </div>
                        </div>
                
                     <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault03"><strong>NAME OF THE BANK</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Name of the Bank"  v-model="restaurantInformationData.owner.bankAccount.bankName">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault04"><strong>IBAN</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="IBAN"  v-model="restaurantInformationData.owner.bankAccount.iban">
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault05"><strong>VAT CODE</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="VAT CODE"  v-model="restaurantInformationData.owner.bankAccount.vatCode">
                        </div>
                        </div>
                      
                      
                
                   <div class="formTitle">
                    <h5><strong>Contact Person</strong></h5>
                    <p>Fill the forms for confirmation</p>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault01"><strong>NAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Name" v-model="restaurantInformationData.contact.name" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>SURNAME</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Surname" v-model="restaurantInformationData.contact.surname" >
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="validationDefault02"><strong>PHONE NUMBER</strong></label>
                          <input type="text" class="form-control" id="input" placeholder="Phone Number" v-model="restaurantInformationData.contact.phoneNumber" >
                        </div>
                      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'RestaurantInfo',
    props: {
        restaurantInformationData: Object,
        address: Object
    },
    computed:{
      restaurantInfo: function(){
        return JSON.parse(this.restaurantInformationData)
      },
      addressInfo: function(){
        return JSON.parse(this.address)
      }

    },
    data(){
      return {
        selectedPictureFile: null,
        selectedLogoFile: null
      }
    },
    computed: {
      
    },
    methods: {
      async pictureUpload(param){
        const fd = new FormData();
        this.selectedPictureFile = param.target.files[0]
        fd.append('image', this.selectedPictureFile, this.selectedPictureFile.name);
        await this.$store.dispatch('addFile',fd)
        this.restaurantInformationData.pictureFileId = this.$store.getters.getFileId
        console.log('picture'+this.restaurantInformationData.pictureFileId)
      },
      async logoUpload(param){
        const fd = new FormData();
        this.selectedLogoFile = param.target.files[0]
        fd.append('image', this.selectedLogoFile, this.selectedLogoFile.name);
        await this.$store.dispatch('addFile',fd)
        this.restaurantInformationData.logoFileId = this.$store.getters.getFileId
        console.log('logo'+this.restaurantInformationData.logoFileId)
        
      }
    }
    


}
</script>
<style src="../sass/AddRestaurantInfo.scss" lang="scss" scoped />

