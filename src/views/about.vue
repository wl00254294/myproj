<template>
  <div >
    <h2 data-vel="subheader">This is an about page</h2>
    <div>
        <button @click="showview">使用AbsPopup</button>
        <!--等於<AbsPopup :value="showDialog" @input="showDialog = $event"> -->
        <AbsPopup v-model="showDialog" >         
              <div class="recive-content">
               <div class="form-content flex">
                 <div>lightbox</div>
               </div>                
              </div>
        </AbsPopup>
    </div>
  </div>
</template>


<script>


export default {
  name: "Abouut1", // you can enter any name (optional)
  components: {},
  props: {},
  data() {
    return {
      showDialog: false
    };
  },
  //mounted() {},
 // watch: {},
  methods: {
    showview() {
      console.log('showview');
      this.showDialog = true;
    }
  }
};
</script>

<style lang="css" scoped>
.pop-content {
  width: 48em;
  min-height: 400px;
}
.pop-content-confirm {
  width: 400px;
  background-color: white;
  z-index: 6;
}
.pop-content-recive-case {
  width: 80vw;
  height: 85vh;
}
.recive-content {
  background-color: #f0f7f8;
  height: 85vh;
  width: 80vw;
}
.from-min-width {
  min-width: 800px;
}
.from-width-open {
  width: 850px;
}
.fake {
  background-color: red;
  height: 100%;
  width: 1600px;
}

.recive-content {
  background-color: #f0f7f8;
  height: 85vh;
  width: 80vw;
}
</style>
