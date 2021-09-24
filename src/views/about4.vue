<template>
  <div >
    <h2 data-vel="subheader">This is an about page4</h2>
    <div>
    <AbsTable :columns="columns" :value="data" @ondelete="cickdelete" @onmodify="clickmodify"></AbsTable>
    </div>
    <div>
      <Modal v-model="flag" width="800px" >
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
      columns : testSchema.columns,
      data : testSchema.data,
      flag : false,
      rowdata: Object
    };
  },
  computed:{
  },
  //mounted() {},
  watch: {
  },
  methods: {
    cickdelete(val) {
      console.log('click delete from child => '+JSON.stringify(val));
    },
    clickmodify(index) {
      //console.log('click modify from child => '+JSON.stringify(val));
      console.log('click modify from child befor change => '+JSON.stringify(this.data[index]));
      //this.rowdata = this.data[index]; 

      this.data[index] = {
            name:'Eric Wu222',
            age:18,
            address:'New York No. 1 Lake Park',
            job:'Data engineer',
            interest:'badminton',
            birthday:'1991-05-14',
            book:'Steve Jobs',
            movie:'The Prestige',
            music:'I Cry'
        };
       
     console.log('click modify from child after change => '+JSON.stringify(this.data[index]));
      this.flag = true;
      this.reload();

    }
  }
};
</script>

<style lang="css" scoped>
</style>
