<template>
  <div >
    <h2 data-vel="subheader">This is an about page</h2>
    <div>
      <Button @click="showview" type="primary">使用AbsPopup</Button>
      <br/><br/><br/>
      <Button type="primary" @click="modal1 = true">使用iview Modal</Button>
        <!--等於<AbsPopup :value="showDialog" @input="showDialog = $event"> -->
        <AbsPopup v-model="showDialog" >         
              <div class="recive-content">
               <div class="form-content flex">
                 <div>lightbox</div>
               </div>                
              </div>
        </AbsPopup>
        
     <Modal
        v-model="modal1"
        title="Common Modal dialog box title">
        <div slot="header">
           This is Header  
        </div>
        <p>eeee</p>
    </Modal>

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
      showDialog: false,
      modal1: false
    };
  },
  //mounted() {},
 // watch: {},
  methods: {
    showview() {
      console.log('showview');
      this.showDialog = true;
    },
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      this.$Message.info('Clicked cancel');
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
