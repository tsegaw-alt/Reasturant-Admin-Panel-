<template>

    <div>
      
                    <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>SUN</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourSun, index) in workingHourData.workingHours[0].workingHourDetails" :key="index" >
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input class="bform-time"  id="input-small" size="sm" type="time" v-model="workingHourSun.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input class="bform-time" id="input-small" size="sm" type="time"  v-model="workingHourSun.closingHour" /></b-col>                    
                                <b-col cols="1"><b-icon-trash @click="removeSun(workingHourSun)"  font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          &#9;&#9;&#9;&#9;
                          <b-col cols="2" class="work-add" ><b-icon-plus  @click="addSun" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                   <div class="work-div" >
                      <b-row>
                          <b-col cols="2" ><strong>MON</strong></b-col> 
                          <b-col cols="8" >
                            <div v-for="(workingHourMon, index) in workingHourData.workingHours[1].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time"  v-model="workingHourMon.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time"  v-model="workingHourMon.closingHour" /></b-col>                    
                                <b-col cols="1" v-if="workingHourMon.length != 1"> <b-icon-trash @click="removeMon(workingHourMon)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addMon" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                     <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>TUE</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourTue, index) in workingHourData.workingHours[2].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" class="a" size="sm" type="time" v-model="workingHourTue.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourTue.closingHour" /></b-col>                    
                                <b-col cols="1"> <b-icon-trash @click="removeTue(workingHourTue)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addTue" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                    <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>WED</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourWed, index) in workingHourData.workingHours[3].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourWed.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourWed.closingHour" /></b-col>                    
                                <b-col cols="1"> <b-icon-trash @click="removeWed(workingHourWed)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addWed" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                    <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>THU</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourThu, index) in workingHourData.workingHours[4].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourThu.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourThu.closingHour" /></b-col>                    
                                <b-col cols="1"> <b-icon-trash @click="removeThu(workingHourThu)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addThu" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                    <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>FRI</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourFri, index) in workingHourData.workingHours[5].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourFri.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourFri.closingHour" /></b-col>                    
                                <b-col cols="1"> <b-icon-trash @click="removeFri(workingHourFri)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addFri" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
                    <div class="work-div">
                      <b-row>
                          <b-col cols="2" ><strong>SAT</strong></b-col>
                          <b-col cols="8" >
                            <div v-for="(workingHourSat, index) in workingHourData.workingHours[6].workingHourDetails" :key="index">
                              <b-row class="work-brow">
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourSat.openingHour" /></b-col>                  
                                <b-col cols=""><b-form-input id="input-small" size="sm" type="time" v-model="workingHourSat.closingHour" /></b-col>                    
                                <b-col cols="1"> <b-icon-trash @click="removeSat(workingHourSat)" font-scale="1.5"></b-icon-trash></b-col>
                              </b-row>
                            </div>
                          </b-col>
                          <b-col cols="2" ><b-icon-plus @click="addSat" font-scale="2"></b-icon-plus></b-col>
                      </b-row>
                    </div>
    </div>
</template>
<script>
export default {
    name: 'WorkingHours',
    props: {
        workingHourData: Object
    },
    computed:{
      value: function(){
        return JSON.parse(this.workingHourData)
      }
    },
    methods:{
    filter(day) {
       return this.workingHourData.workingHours.filter((el) => {
        return (el.dayOfWeek === day)
      })
    },
    addSun(){
    this.workingHourData.workingHours[0].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeSun(event) {
        this.workingHourData.workingHours[0].workingHourDetails.splice( this.workingHourData.workingHours[0].workingHourDetails.indexOf(event), 1);
    },
    addMon(){
       this.workingHourData.workingHours[1].workingHourDetails.push({
        openingHour: '',
        closingHour: '',
        id:''
      })
    },
    removeMon(event) {
       this.workingHourData.workingHours[1].workingHourDetails.splice(this.workingHourData.workingHours[1].workingHourDetails.indexOf(event), 1);
    },
    addTue(){
       this.workingHourData.workingHours[2].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeTue(event) {
       this.workingHourData.workingHours[2].workingHourDetails.splice(this.workingHourData.workingHours[2].workingHourDetails.indexOf(event), 1);
    },
    addWed(){
       this.workingHourData.workingHours[3].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeWed(event) {
       this.workingHourData.workingHours[3].workingHourDetails.splice(this.workingHourData.workingHours[3].workingHourDetails.indexOf(event), 1);
    },
    addThu(){
       this.workingHourData.workingHours[4].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeThu(event) {
       this.workingHourData.workingHours[4].workingHourDetails.splice(this.workingHourData.workingHours[4].workingHourDetails.indexOf(event), 1);
    },
    addFri(){
       this.workingHourData.workingHours[5].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeFri(event) {
       this.workingHourData.workingHours[5].workingHourDetails.splice(this.workingHourData.workingHours[5].workingHourDetails.indexOf(event), 1);
    },
    addSat(){
       this.workingHourData.workingHours[6].workingHourDetails.push({
         openingHour: '',
         closingHour: '',
         id:''
      })
    },
    removeSat(event) {
       this.workingHourData.workingHours[6].workingHourDetails.splice(this.workingHourData.workingHours[6].workingHourDetails.indexOf(event), 1);
    }
    }

}
</script>
<style src="../sass/AddRestaurantInfo.scss" lang="scss" scoped />

