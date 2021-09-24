<template>
<Table :columns="columns" :data="value">
    <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row , index }" slot="action">
        <Button type="primary" size="small" @click="modifyItem(index)" style="margin-right:5px" >修改</Button>
        <Button type="error" size="small" @click="deleteItem(index)" >刪除</Button>
    </template>   
</Table>

</template>

<script>
export default {
    name : "AbsTable",
    components:{},
    props:{
        columns :[],
        //data: [],
        value:[]
    }, 
    data () {
        return{
        }
    },
    methods: {
        deleteItem(index) {
            console.log(this.value[index]);
            this.$emit('ondelete',this.value[index]);
            this.value.splice(index,1);            
        },
        modifyItem(index) {
            console.log('modify ==>'+this.value[index]);
            this.$emit('onmodify',index);
        }
    }
}
</script>