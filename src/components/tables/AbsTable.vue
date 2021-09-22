<template>
<Table :columns="columns" :data="data">
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
        data: []
    }, 
    data () {
        return{
        }
    },
    methods: {
        deleteItem(index) {
            console.log(this.data[index]);
            this.$emit('ondelete',this.data[index]);
            this.data.splice(index,1);            
        },
        modifyItem(index) {
            console.log('modify ==>'+this.data[index]);
            this.$emit('onmodify',this.data[index]);
        }
    }
}
</script>