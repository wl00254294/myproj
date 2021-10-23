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
        <tr v-for="(item,index) in redata" :key="item.role">
            <td class="tdkeycolumn" v-if="showRow(item)" >
              <span v-if="item.haschild"  @click="clickitem(index,item)">
                <Icon type="md-arrow-dropdown" size="24" v-if="(clickindex >= index && clickgroup == item.group) "/>
                <Icon type="md-arrow-dropup" size="24" v-else/>
              </span>
              <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>
                {{item.role}}
              </span>              
            </td>
          
            <td class="tdcolumn" v-if="showRow(item)">{{item.principal}}</td>
            <td class="tdcolumn" v-if="showRow(item)">{{item.createdate}}</td>
            <td class="tdcolumn" v-if="showRow(item)">{{item.exprience}}</td>     
            
        </tr>       
                
    </tbody>
    </table>
    <div >  {{redata}}   </div>
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
      clicklevel :-1,
      clickflag : false,
      clickindex : -1,
      clickrole : '',
      clickgroup: '',
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
              exprience: '5 year',
              childs: [
               // {
                //  role : 'Vue',
               //   principal: '趙子龍',
               //   createdate: '2020-01-01',
               //   exprience: '8 year',
               //   childs:[]
               // }

              ]
            },
            {
              role : '後端',
              principal: '關羽',
              createdate: '2020-01-21',
              exprience: '3 year',
              childs: [
                 {
                  role : 'Spring boot',
                  principal: '常威',
                  createdate: '2020-01-01',
                  exprience: '8 year',
                  childs:[]
                },
                 {
                  role : 'Php larvel',
                  principal: '項羽',
                  createdate: '2020-01-01',
                  exprience: '8 year',
                  childs:[
                      {
                        role : 'Php1',
                        principal: '實習生',
                        createdate: '2020-01-01',
                        exprience: '1 year',
                        childs:[]
                      }

                  ]
                }                
              ]
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
              exprience: '5 year',
              childs: []
            },
            {
              role : '交互作用',
              principal: '韓信',
              createdate: '2020-02-21',
              exprience: '3 year',
              childs: [
                 {
                  role : 'UX',
                  principal: '王八',
                  createdate: '2020-02-11',
                  exprience: '5 year',
                  childs: []
                }

              ]
            }            
          ]
        },
        {
          role : '宣傳',
          principal: '董卓',
          createdate: '2020-03-01',
          exprience: '10 year',
          childs:[]
        }        
      ]
    };
  },
  //mounted() {},
 // watch: {},
 computed: {
   redata(){
     let tmp = [];
     let level = 0;
     this.expandData(tmp,this.data,level,"");
     return tmp;
   }
 },
 methods: {
   clickitem(index,item) {

     
     if((this.clickindex >= index)  )
     {
        this.clickrole ='';
       this.clicklevel =item.level;
        this.clickgroup = item.group;
       console.log("HERE="+this.clickrole+","+item.role+","+item.parent);
      // this.clicklevel = item.level-1;
       this.clickindex = index-1;
     } else {
       this.clickgroup = item.group;
       this.clicklevel = item.level;
       this.clickindex = index;
       this.clickrole = this.redata[index].role;
       this.clickflag = true;
     }

     
     
   console.log(this.clickindex+","+index+","+this.clickrole+","+item.role+","+item.parent+","+item.level+","+this.clicklevel);
   },
   expandData(outData,data,level,parent,group) {
      for(var i=0;i<data.length;i++)
      {
        let item = {};
        item.role = data[i].role;
        item.principal = data[i].principal;
        item.createdate = data[i].createdate;
        item.exprience = data[i].exprience;
        item.childs = [];
        item.level = level;
        if(level == 0)
        {
          item.parent = "";
          item.group = data[i].role;
          group = data[i].role;

        } else {
          item.group = group;
          item.parent = parent;
        }

        if(data[i].childs.length > 0) {
          item.haschild = true;
          outData.push(item);
          let nexlevel = level +1;
          this.expandData(outData,data[i].childs,nexlevel,data[i].role,group);
        } else {
          item.haschild = false;
          outData.push(item);
        }

      }
      
   },
   showRow(item) {
     
     if((item.parent == '' ) || 
        ((this.clickrole == item.parent||this.clickrole==item.role) || 
        item.level<=this.clicklevel) && 
        this.clickgroup == item.group)
     {
       return true;
     }
     return false;
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
