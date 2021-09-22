<template>
  <div>
    <div  v-show="showPopup" class="fixed-popup" >
      <div class="mask absolute" v-show="showPopup"></div>
      <div
        v-show="showPopup"  
        class="border content-bgcolor pop-backgroud absolute-center text-gray-800">
        <div class="flex  justify-between items-center p-7 border-b">
          <div>{{ title ? title : "" }}</div>
          
          <div @click="close" class="text-4xl cursor-pointer  ">
             <font-awesome-icon icon="window-close" class="close_font" />
          </div>          
        </div>
        <div class="p-3">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbsPopup", // you can enter any name (optional)
  props: {
    value: {},
    title: {}
  },
  data() {
    return {
      showPopup: 0
    };
  },
  mounted() {
    if (this.value !== undefined) {
      this.showPopup = this.value;
    }
  },
  watch: {
    value(value) {
      this.showPopup = value;
    }
  },
  methods: {
    close() {
      this.showPopup = false;
      this.$emit("input", this.showPopup); //將showPopup回傳至父元件之v-model
    }
  }
};
</script>
<style lang="css" scoped>
.pop-backgroud {
  z-index: 6;
  border-radius: 1em;
}
.pop-bg {
  width: 1200px;
}
.mask {
  z-index: 5;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #00000055;
}
.fixed-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  /* background-color: red; */
  z-index: 5;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content-bgcolor {
  background: #ffffff;
}

.close_font {
  color : rgb(61, 40, 177);
}
</style>
