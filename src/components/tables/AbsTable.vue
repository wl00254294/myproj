<template>
<div>
<div>
    <Input v-model="searchText" search @on-search="clicksearch" enter-button placeholder="輸入資料查詢" class="search"	 />
</div>
<br/>
<br/>   
<Table stripe :columns="columns" :data="list" no-data-text="查無資料" >
    <template slot-scope="{ row , index }" slot="action">
        <Button  type="primary" size="small" @click="modifyItem(index)" style="margin-right:5px" >修改</Button>
        <Button  type="error" size="small" @click="deleteItem(index)" >刪除</Button>
    </template>
</Table>
<div>
    <Page :total="value.length" :current="page" :page-size="pageSize"  @on-change="changePage" />
</div>
</div>
</template>

<script>


export default {
    name : "AbsTable",
    components:{},
    props:{
        columns :[],
        searchColumn: String,
        value:[]
    }, 
    data () {
        return{
            pageSize: 3,
            page: 1,
            searchText: '',
            searchFlag: false,
            filterdata: [],
            filterIndex: []
        }
    },
    computed:{
        list : {
           get : function(){
               
             return this.getPageList(this.page, this.pageSize);
           },
           set : function(){}
        },
        pageItemnum : {
            get : function() {
                return this.list.length;
            },
            set :function() {}
        }
    },
    methods: {
        deleteItem(index) {
            //console.log(this.value[index+(this.page-1)*this.pageSize]);
            if(this.searchFlag == true)
            {
                this.$emit('ondelete',this.value[this.filterIndex[index]]);
                this.value.splice(this.filterIndex[index],1); 
                this.filterdata.splice(index,1);
            } else {
                this.$emit('ondelete',this.value[index+(this.page-1)*this.pageSize]);
                this.value.splice(index+(this.page-1)*this.pageSize,1);
                
            }

             this.pageItemnum -- ;
            if(this.pageItemnum == 0 && this.page > 1)
            {
                this.page = this.page -1;
            }
                      
        },
        modifyItem(index) {
            if(this.searchFlag == true)
            {
                this.$emit('onmodify',this.filterIndex[index]);
            }else {

                this.$emit('onmodify',index+(this.page-1)*this.pageSize);
            }
        },
        getPageList(p, size) {
            if(this.searchFlag == true)
            {
               return this.filterdata.slice((p - 1)* size, p * size);
            }else {
               return this.value.slice((p - 1)* size, p * size);
            }
        },
        changePage(p) {
            this.page = p;
        },
        clicksearch() {
 
            
            if(this.searchText != '')
            {
                this.keepData = this.value;
                this.filterdata = this.value.filter(item => item[this.searchColumn] == this.searchText);
                this.page = 1;
                this.searchFlag = true;

                if(this.filterdata.length >0)
                {
                    
                    for(var i=0 ;i<this.filterdata.length ;i++)
                    {
                       this.filterIndex.push(this.value.indexOf(this.filterdata[i]));
                    }
                }

            } else {
                this.filterIndex=[];
                this.page = 1;
                this.searchFlag = false;
            }
        }
    }
}
</script>

<style lang="css" scoped>
.search {
    width: 250px;
    margin-left: 620px;
}
</style>