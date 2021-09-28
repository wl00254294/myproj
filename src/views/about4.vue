<template>
  <div >
    <h2 data-vel="subheader">This is an about page4</h2>
    <div>
      <Button type="primary" size="small" @click="clickadd" style="margin-left:5px" >新增</Button>

      <AbsTable :columns="tableinfo.columns" :value="data" :searchColumn="searchColumn" @ondelete="cickdelete" @onmodify="clickmodify"></AbsTable>
    </div>
    <div>
      <Modal v-model="flag" @on-ok="clickok" width="800px" >
        <div>
          <Row>
            <Col v-for="obj in this.tableinfo.schema" :key="obj.column">
            <span class="expand-key">
              <strong>{{obj.column}} : </strong>
            </span>
               <input type="text" class="expand-value" v-model="modifyobj[obj.column]"/>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
    <div>
      <Modal v-model="addflag" @on-ok="clickok" width="800px">
        <div>
          <Row>
            <Col v-for="obj in this.tableinfo.schema" :key="obj.column">
            <span class="expand-key">
              <strong>{{obj.column}} : </strong>
            </span>
              <input type="text" class="expand-value" v-model="addobj[obj.column]"/> 
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
      searchColumn: 'name',
      flag : false,
      addflag: false,
      index :0,
      addobj : {},
      modifyobj: {},
      data : [
        
       {
            name:'Eric Wu',
            age:18,
            address:'New York No. 1 Lake Park',
            job:'Data engineer',
            interest:'badminton',
            birthday:'1991-05-14',
            book:'Steve Jobs',
            movie:'The Prestige',
            music:'I Cry'
        },
        {
            name:'Jim Green',
            age:25,
            address:'London No. 1 Lake Park',
            job:'Data Scientist',
            interest:'volleyball',
            birthday:'1989-03-18',
            book:'My Struggle',
            movie:'Roman Holiday',
            music:'My Heart Will Go On'
        },
        {
            name:'Joe Black',
            age:30,
            address:'Sydney No. 1 Lake Park',
            job:'Data Product Manager',
            interest:'tennis',
            birthday:'1992-01-31',
            book:'Win',
            movie:'Jobs',
            music:'Don’t Cry'
        },
        {
            name:'Jon Snow',
            age:26,
            address:'Ottawa No. 2 Lake Park',
            job:'Data Analyst',
            interest:'snooker',
            birthday:'1988-7-25',
            book:'A Dream in Red Mansions',
            movie:'A Chinese Ghost Story',
            music:'actor'
        },
        {
          name:'eric'
        },
        {
          name: 'dan'
        },
        {
          name: 'kain'
        }
      ]       
      
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
      this.index = index;
      this.modifyobj = this.data[index];
      this.flag = true;   
    },
    clickok() {
      if(JSON.stringify(this.addobj) != "{}")
      {
       let item = this.addobj;
       this.data.push(item);
       this.addobj= {};
       this.addflag = false;  
      } else {
       this.data[this.index] = this.modifyobj;
      }


    //   this.reload();
    },
    clickadd() {
       this.addflag = true;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
