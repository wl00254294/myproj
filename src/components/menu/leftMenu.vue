<template>
  <div class="menu-outer w-full text-green-600 p-4">
    <div v-for="(group, g) in navGroup" :key="g">
      <div
        v-if="group.title"
        class="menu-group cursor-pointer"
        @click="onOpenGroupClicked(group)"
      >
        {{ group.title }}
      </div>
      <div v-if="gropuClicked === group.title" class="pl-2 py-2">
        <ul class=" w-full " v-for="(ul, i) in group.navs" :key="i">
          <div v-if="ul">
            <div
              class="cursor-pointer px-1 border-gray-800 flex justify-between items-center "
              @click="onOpenMenuClicked(ul)"
            >
              <span>{{ ul.title }}</span>
              <i v-if="navClicked === ul.id" class="fi fi-caret-down mr-4 "></i>
              <i v-if="navClicked !== ul.id" class="fi fi-caret-right mr-4"></i>
            </div>
            <div class="cursor-pointer ml-2 border-gray-400 pt-2 ">
              <li
                v-show="ul.id === navClicked"
                class=""
                v-for="(item, idxi) in ul.items"
                :key="idxi"
              >
                <div
                  class="px-2 text-gray-500  bg-white"
                  v-bind:class="{
                    'active-item': `/${item.content}` === path
                  }"
                  @click="onMenuItemClicked(item)"
                >
                  {{ item.title }}
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CustomMenu from './custom';

const menu = CustomMenu;

export default {
  name: "leftMenu", // you can enter any name (optional)
  data() {
    return {
      path: "",
      menuItem: "",
      navClicked: null,
      gropuClicked: null,
    };
  },
  computed: {
    navGroup() {
      return [
        {
          title: "功能區",
          navs: [...menu]
        }
      ];
    },
    // navs() {
    //   return [...menuStore, menuEms, this.isAdmin ? menuExample : null];
    // },
    //domClicked() {
    //  return domEventGetters.domClicked();
   // },
   // isAdmin() {
   ////   return appGetter.isAdmin();
   // }
  },
  mounted() {
    this.path = this.$route.path;
  },
  watch: {
    $route(to, from) {
      console.log(from.path)
      this.path = to.path;
    }
  },
  methods: {
    onOpenMenuClicked(ulItem) {
      if (this.navClicked === ulItem.id) {
        this.navClicked = -1;
        return;
      }
      this.navClicked = ulItem.id;
    },
    onOpenGroupClicked(group) {
      if (this.gropuClicked === group.title) {
        this.gropuClicked = -1;
        return;
      }
      this.gropuClicked = group.title;
    },
    onMenuItemClicked(item) {
      this.menuItem = item;
      //if (item.type === "route") {
        this.$router.push(`/${item.content}`);
      //}
    }
  }
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
</style>
