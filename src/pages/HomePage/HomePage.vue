<template>
<div>
    <b-navbar>
        <b-nav>
            <b-nav-item >
                <span class="primary-word">DELIVER</span>
            </b-nav-item>    
            </b-nav>
            <b-nav class="ml-auto">
                <b-nav-item id="v-step-2" no-caret right>  
                    <b-nav-item  >
                        <button  @click="login" class="login-btn" >Log In</button>
                    </b-nav-item>
                </b-nav-item>
            </b-nav>            
    </b-navbar>
    <hr>
    <div class="content">
    <b-container>
    <b-row class="text-left" >
        <b-col cols="8">
            <h2>It's the food food you love, <br>deliverd</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque molestiae maxime nobis quia perferendis.</p>
            <b-col cols="8">
            <div class="input-group sm-3" style="padding-top: 50px; ">
                <b-form-input type="text" class="form-control" placeholder="Search whatever you want...." />
                <b-button class="btn btn-secondary" style=" background-color: #F85F73; color: rgb(225, 219, 219); font-weight: bold;">Search</b-button>
            </div>
            
            </b-col>
        </b-col>
        <b-col cols="4">
            <img class="img-1" src="../../assets/download2.png"  />
        </b-col>
    </b-row>
    
    
    <b-row class="vid"> 
        <b-col  class="vid-col" style="padding-top: 50px">
              <b-embed
                type="iframe"
                aspect="21by9"
                src="https://www.youtube.com/embed/sv3TXMSv6Lw?rel=0"
                allowfullscreen
            ></b-embed>
         </b-col>
    </b-row>
     

    <b-row class="text-left" style="padding-top: 50px">
            <b-col cols="6">
                <h3>It's the food food you love, Deliverd</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque molestiae maxime nobis quia perferendis.</p>
                 <div class="page-content" id="page-content">
                  <div class="padding">
                    <div class="row container d-flex justify-content-center">
                    <div class="template-demo mt-2"> 
                        <button class="btn btn-outline-dark btn-icon-text"> 
                            <i class="fa fa-apple btn-icon-prepend mdi-36px">
                                </i> <span class="d-inline-block text-left"> 
                                    <small class="font-weight-light d-block">Available on the</small> App Store </span> 
                                    </button>&nbsp;&nbsp;&nbsp;&nbsp; 
                                    <button class="btn btn-outline-dark btn-icon-text"> 
                                        <i class="fa fa-android btn-icon-prepend mdi-36px"></i> 
                                        <span class="d-inline-block text-left"> 
                                            <small class="font-weight-light d-block">Get it on the</small> 
                                            Google Play </span> </button> 
                                    </div>
                            </div>
                    </div>
                </div>
            </b-col>
            <b-col cols="6">
                <img class="img-b" src="../../assets/download.jpg" />
            </b-col>
        </b-row>
 <b-row > 
   
 
      </b-row>



    </b-container>
    </div>
    <hr>
    <b-container class="foter">
    <div  >
          <b-row>
            <b-col > 
                <span class="primary">DELIVER</span>
                         <div class="dsd">
                            <button class="btn btn-outline-dark btn-icon-text"> 
                                <i class="fa fa-apple btn-icon-prepend mdi-36px"></i> 
                                  <span class="d-inline-block text-left"> 
                                  <small class="font-weight-light d-block">Available on the</small> App Store </span> 
                            </button>
                          </div>  
                        <div class="dsd">
                         <button class="btn btn-outline-dark btn-icon-text"> 
                           <i class="fa fa-android btn-icon-prepend mdi-36px"></i>
                             <span class="d-inline-block text-left"> 
                            <small class="font-weight-light d-block">Available on the</small> Google Play </span> 
                        </button>
                     </div>
            </b-col>
             <b-col>
                <ul>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Policy</li>
                    <li>Cookies</li>
                    <li>Term and Conditions</li>
                </ul>
            </b-col>
            <b-col><ul>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Policy</li>
                    <li>Cookies</li>
                    <li>Term and Conditions</li>
                </ul>
            </b-col>
            <b-col><ul>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Policy</li>
                    <li>Cookies</li>
                    <li>Term and Conditions</li>
                </ul>
            </b-col>
        </b-row>  
    </div>    
    </b-container>
</div>    
    
</template>

<script>
import { authService } from '../../services/auth'
export default {
  name: 'HomePage',
  methods:{
      login(){
        authService.login()
      }
  }
 
}
</script>
<style src="./HomePage.scss" lang="scss"></style>