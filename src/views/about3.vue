<template>
  <div class="about">
    <h2 data-vel="subheader">This is an about page3</h2>
    <Button type="primary" @click="shoepop">Show Pop</Button>
    <div>{{printPut}}</div>
    <!--<AbsPopup v-model="flag" :title="info" >  -->
    <Modal v-model="flag"  width="1340px"
     @on-ok="clickok"
     @on-cancel="clickcancel"
    >  
      <div class="recive-content"> 
        <div class="form-content flex">
          <AbsTabs :items="tabs">
            <template v-slot:test1 > 
              <div>This is test1</div>
              <div>
                <div>
                  <input type="text" v-model="userPut"/>
                  <br/>
                </div>
              
              </div>
            </template>
            <template v-slot:test2 >
             <div>This is test2</div>
              </template>
          </AbsTabs>
        </div>
      </div>
    </Modal>
  <!--  </AbsPopup>-->
  </div>
</template>

<script>
import {tabs1} from '../components/tabs/tabmenu';



export default {
  name: "Abouut3", // you can enter any name (optional)
  components: {},
  props: {},
  data() {
    return {
      tabs: tabs1,
      flag: false,
      info: "Title",
      userPut: "",
      printPut: "",
    };
  },
  //mounted() {},
  watch: {
  },
// computed: {},
 methods: {
   shoepop(){
     this.userPut = this.printPut;
     this.flag = true;
   },
   clickok(){
     this.printPut = this.userPut;
     this.flag = false;
   },
   clickcancel(){
     this.flag = false;
     
   }
 }
};
</script>

<style lang="css" scoped>
.recive-content {
  background-color: #f0f7f8;
  height: 85vh;
  width: 80vw;
}

</style>
