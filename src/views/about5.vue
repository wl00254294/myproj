<template> 
  <div >
    <table>
      <thead>
        <tr>
            <th class="thkeycolumn">職位</th>
            <th class="thcolumn">人員</th>
            <th class="thcolumn">到職日</th>
            <th class="thcolumn">經驗</th>
        </tr>       
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="item.role">
            <td class="tdkeycolumn" @click="clickitem(index)">
              <span v-if="item.childs.length > 0">
                <Icon type="md-arrow-dropdown" size="24" v-if="clickindex == index && clickflag"/>
                <Icon type="md-arrow-dropup" size="24" v-else/>
              </span>
              <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>
                {{item.role}}
              </span>              
            </td>
            <td class="tdcolumn">{{item.principal}}</td>
            <td class="tdcolumn">{{item.createdate}}</td>
            <td class="tdcolumn">{{item.exprience}}</td>     
        </tr>       
                
    </tbody>
    <tbody v-if="clickflag">
        <tr v-for="citem in data[clickindex].childs" :key="citem.role">
            <td class="tdkeycolumn">{{citem.role}}</td>
            <td class="tdcolumn">{{citem.principal}}</td>
            <td class="tdcolumn">{{citem.createdate}}</td>
            <td class="tdcolumn">{{citem.exprience}}</td>
        </tr> 
    </tbody>      
    </table>
  </div>  
</template>


<script>

export default {
  name: "Abouut5", // you can enter any name (optional)
  components: {},
  props: {},
  //render(h) {
  //  return h('div',JSON.stringify(this.data));
  //},
  data() {
    return {
      clickflag : false,
      clickindex : 0,
      data : [
        {
          role : '技術',
          principal: '劉備',
          createdate: '2020-01-01',
          exprience: '10 year',
          childs : [
            {
              role : '前端',
              principal: '張飛',
              createdate: '2020-01-11',
              exprience: '5 year'
            },
            {
              role : '後端',
              principal: '關羽',
              createdate: '2020-01-21',
              exprience: '3 year'
            }            
          ]
        },
        {
          role : '設計',
          principal: '曹操',
          createdate: '2020-02-01',
          exprience: '10 year',
          childs : [
            {
              role : '視覺設計',
              principal: '張遼',
              createdate: '2020-02-11',
              exprience: '5 year'
            },
            {
              role : '交互作用',
              principal: '韓信',
              createdate: '2020-02-21',
              exprience: '3 year'
            }            
          ]
        },
        //{
       //   role : '宣傳',
       //   principal: '董卓',
       //   createdate: '2020-03-01',
       //   exprience: '10 year',
       //   childs:[]
       // }        
      ]
    };
  },
  //mounted() {},
 // watch: {},
 computed: {
   dataSize() {
     return "temp";
   }
 },
 methods: {
   clickitem(index) {
     this.clickflag = !this.clickflag;
     this.clickindex = index;
     console.log(this.clickflag);
   }
 }
};
</script>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 80%;
}

.thcolumn {
  border-bottom: 2px grey solid;
  width: 100px;
  text-align: center;
  font-size: 15px;
}
.thkeycolumn {
  border-bottom: 2px grey solid;
  width: 100px;
  text-align: left;
  font-size: 15px;
}

.tdkeycolumn {
  width: 100px;
  text-align: left;
  font-size: 15px;  
}

.tdcolumn {
  width: 100px;
  text-align: center;
  font-size: 15px;  
}

table {
  width: 100%;
}
</style>
