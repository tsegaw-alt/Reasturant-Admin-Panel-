<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/"><span class="primary-word">Deliver</span> </router-link>
      </header>
      <hr>
      <h3 class="navTitle first">
         <!-- Menu &nbsp; <i class='fa fa-chevron-down' /> -->
      </h3>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="fa-home"          
            index="dashboard"
            isHeader
        />
          <NavLink
            :activeItem="activeItem"
            header="Restaurants"
            link="/app/restaurant"
            iconName="fa-cutlery"
            index="restaurant"
            isHeader
        />
         
        <NavLink
            :activeItem="activeItem"
            header="Customers"
            link="/app/customers"
            iconName="fa-user"
            index="notifications"
            isHeader
        />

        <NavLink
            :activeItem="activeItem"
            header="Statistics"
            link="/app/statistics"
            iconName="fa-line-chart"
            index="tables"
            isHeader
        />

        <NavLink
            :activeItem="activeItem"
            header="Messages"
            link="/app/components"
            iconName="fa-commenting-o"
            index="components"
            :childrenLinks="[
              { header: 'Inbox', link: '/app/#' },
              { header: 'Draft', link: '/app/#/' },
              { header: 'Marked', link: '/app/###/' },
              { header: 'Archive', link: '/app/####/' },
              { header: 'Spam', link: '/app/#####/' },
              { header: 'Deleted', link: '/app/######/' },
            ]"

        />
      </ul>

    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import isScreen from '@/core/screenHelper'
import NavLink from './NavLink/NavLink'

export default {
  name: 'Sidebar',
  components: { NavLink },
  data () {
    return {
     
    }
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute () {
      const paths = this.$route.fullPath.split('/')
      paths.pop()
      this.changeSidebarActive(paths.join('/'))
    },
    sidebarMouseEnter () {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false)
        this.setActiveByRoute()
      }
    },
    sidebarMouseLeave () {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true)
        this.changeSidebarActive(null)
      }
    }
  },
  created () {
    this.setActiveByRoute()
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement
    })
  }
}
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
