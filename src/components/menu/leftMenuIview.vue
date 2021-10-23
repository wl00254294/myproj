<template>
    <div>
    <Menu :theme="themetype">
        <div>
        <Submenu v-for="item in items" :key="item.title" :name="item.title">
            <template slot="title">
                {{item.title}}
            </template>
            <div>
            <Submenu
              v-for="subitem in item.navs" :key="subitem.title" :name="subitem.title">
                <template slot="title">
                    {{subitem.title}}
                </template>
                <div>
                <MenuItem
                 v-for="menuitm in subitem.items" :key="menuitm.content" 
                :name="menuitm.title" :to="menuitm.content">
                    {{menuitm.title}}
                </MenuItem>
                </div>
            </Submenu>
            </div>
        </Submenu>
        </div>
    </Menu> 
   
    <div class="footer">
        <input type="radio" id="light" name="light" value="light" v-model="themetype">
        <label for="light">Light</label>
        <input type="radio" id="dark" name="dark" value="dark" v-model="themetype">
        <label for="dark">Dark</label>        
    </div>
    </div> 
</template>

<script>
import CustomMenu from './custom';

const menu = CustomMenu;


export default {
  name: "leftMenuIview", // you can enter any name (optional)
  data() {
    return {
        items : [{
            title : '功能區s',
            navs: [...menu]
        }],
        themetype: "light"
    };
  },
  //computed: {},
 // mounted() {},
 // watch: {},
  //methods: {}
};
</script>


<style scoped lang="scss">
.active-item {
  color: #4c00ff;
  border-left: 2px #0400ff solid;
}

.menu-outer {
  border-right: 1px #ebe6e2 solid;
  height: 100%;
}

.cursor-pointer {
  cursor: pointer;
}

.menu-group {
  //background-color: #ee1717;
  font-size: 1.5rem;
  font-weight: 100;
  padding: 0.5rem;
}
ul i {
  font-size: 0.55em;
  color: #888888;
}

.footer {
    position: absolute;
    bottom: 0px;
}


</style>
