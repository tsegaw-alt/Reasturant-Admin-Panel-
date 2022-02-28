<template>
  <b-navbar class="header d-print-none app-header">
    <b-nav>
      <b-nav-item>
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='fa fa-chevron-left' />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class='fa fa-chevron-right' />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav class="ml-auto">
        <b-nav-item-dropdown id="v-step-2"  no-caret right>
        <template slot="button-content">
          <i class='fi flaticon-bell' />

        </template>
    
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right>
         <template slot="button-content" class="temp1">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
          </span>
          <span class="px-3">{{ user_profile.given_name }}
            <p>Admin of BT</p> 
          </span>
        </template>

      </b-nav-item-dropdown>
          <b-nav-item-dropdown id="v-step-2" class="temp1" no-caret right>
        <template slot="button-content">
          <i class='fi flaticon-arrow-down px-2' />
        </template>
        <b-dropdown-item><i class='fi flaticon-person px-3 mr-3' /> My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item><i class='fi flaticon-calendar-9 px-3 mr-3' />Calendar</b-dropdown-item>
        <b-dropdown-item><i class='fi flaticon-email px-3 mr-3' />
          Inbox &nbsp;&nbsp;<b-badge variant="inverse" pill class="animate__animated animate__bounceIn" style="padding: 6px 9px;">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>

    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { authService } from '../../services/auth'
export default {
  name: 'Header',
  data(){
    return {
      user_profile : {}
    }
  },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic'])
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod () {
      if (!this.sidebarClose) {
        this.switchSidebar(true)
        this.changeSidebarActive(null)
      } else {
        this.switchSidebar(false)
        const paths = this.$route.fullPath.split('/')
        paths.pop()
        this.changeSidebarActive(paths.join('/'))
      }
    },
    toggleSidebarMethod () {
      if (this.sidebarStatic) {
        this.toggleSidebar()
        this.changeSidebarActive(null)
      } else {
        this.toggleSidebar()
        const paths = this.$route.fullPath.split('/')
        paths.pop()
        this.changeSidebarActive(paths.join('/'))
      }
    },
    logout () {
      authService.logout()
    }
  },
  created(){
    authService.getUser().then(user=>{
        this.user_profile = user.profile;
    })
  }
}
</script>

<style src="./Header.scss" lang="scss"></style>
