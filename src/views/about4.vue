<template>
  <div >
    <h2 data-vel="subheader">This is an about page4</h2>
    <div>
    <AbsTable :columns="columns" :data="data" @ondelete="cickdelete" @onmodify="clickmodify"></AbsTable>
    </div>
    <div>
      <AbsPopup v-model="flag" >
        <div>
          <Row>
            <Col span="8" v-for="(key) of Object.entries(rowdata)" :key="key[0]">
            <span v-show="key[0] != '_index' && key[0] != '_rowKey'" class="expand-key">
                <strong>{{key[0]}} : </strong> 
            </span>
            <span v-show="key[0] != '_index' && key[0] != '_rowKey'" class="expand-value">{{key[1]}}</span>
            </Col>
          </Row>
        </div>
      </AbsPopup>
    </div>
  </div>
</template>


<script>
import {testSchema} from '../components/tables/schemaDefine'

export default {
  name: "Abouut4", // you can enter any name (optional)
  components: {},
  props: {},
  data() {
    return {
      columns : testSchema.columns,
      data : testSchema.data,
      flag : false,
      rowdata: Object
    };
  },
  //mounted() {},
 // watch: {},
  methods: {
    cickdelete(val) {
      console.log('click delete from child => '+JSON.stringify(val));
    },
    clickmodify(val) {
      console.log('click modify from child => '+JSON.stringify(val));
      this.rowdata = val; 
      this.flag = true;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
