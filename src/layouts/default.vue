<template>
  <div class="flex flex-col default-main text-left">
    <div class="flex flex-grow">
      <div class="layout-content menu-content relative">
        <div class="layout-content h-full absolute-scoll-content">
          <div class="layout-menu-bg shadow-sm  h-full overflow-auto">       
            <component :is="menuComponent"></component>
            <!--<nmenu></nmenu>-->
             <!-- <inmenu></inmenu>--> 
          </div>
        </div>
      </div>
      <div class="layout-content flex-grow relative">
        <div class="layout-content h-full absolute-scoll-content">
          <div
            class="layout-page-bg p-1 router-content shadow-sm overflow-auto"
          >
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import nmenu from '../components/menu/leftMenu.vue';
import inmenu from '../components/menu/leftMenuIview.vue';

  export default {
    name: 'defaultLayout',     // you can enter any name (optional)
    components: { nmenu,inmenu},
    computed: {
      menuComponent(){
        return "inmenu"; 
      }
    }
   // methods: {}
  }
</script>


<style scoped>
.default-main {
  position: relative;
  width: 100%;
  height: 100vh;
}
.layout-content {
  /* padding: 0.4rem; */
  padding: 0rem;
}
.layout-nag-bg {
  background: rgba(245, 148, 148, 0.664);
}
.layout-page-bg {
  background:ghostwhite;
}
.layout-menu-bg {
  background: #fff;
}
.nav-content {
  height: 75px;
}
.menu-content {
  width: 270px;
}
.router-content {
  height: 100%;
}
.absolute-scoll-content {
  top:0.4rem; 
}
/* your style */
#navExtensionField {
  width: 120px !important;
}
.h-nav-icon {
  height: 30px;
}

.w-name {
  width: 120px !important;
}
.sys-font {
  font-weight: bold;
  color: #fff;
  font-size: 24px;
  text-align: center;
}
/* no-repeat */
/* .navLogo{
    padding:14px;
    padding-left:30px
} */
/* .sysName{
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    padding-top:14px;
} */
/* .phoneInfo{
    width:120px;
}
.no-margin{
    margin-left:15px;
} */
</style>
