<template>
  <div >
    <h2 data-vel="subheader">This is an about page4</h2>
    <div>
    <AbsTable :columns="tableinfo.columns" :value="tableinfo.data" @ondelete="cickdelete" @onmodify="clickmodify"></AbsTable>
    </div>
    <div>
      <Modal v-model="flag" @on-ok="clickok" width="800px" >
        <div>
          <Row>
            <Col v-for="obj in this.tableinfo.schema" :key="obj.column">
            <span class="expand-key">
              <strong>{{obj.column}} : </strong>
            </span>
               <input type="text" class="expand-value" v-model="tableinfo.data[index][obj.column]"/>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  </div>
</template>


<script>
import {testSchema} from '../components/tables/schemaDefine'

export default {
  name: "Abouut4", // you can enter any name (optional)
  components: {},
  inject:['reload'],
  props: {},
  data() {
    return {
      tableinfo : testSchema,
      flag : false,
      index :0
    };
  },
  computed:{
  },
  //mounted() {},
  //watch: {},
  methods: {
    cickdelete(val) {
      console.log('click delete from child => '+JSON.stringify(val));
    },
    clickmodify(index) {
      //console.log('click modify from child => '+JSON.stringify(val));
      this.index = index;
      console.log(this.index);
      console.log('click modify from child befor change => '+JSON.stringify(this.tableinfo.data[index]));
      this.flag = true;   
    },
    clickok() {
       this.reload();
    }
  }
};
</script>

<style lang="css" scoped>
</style>
