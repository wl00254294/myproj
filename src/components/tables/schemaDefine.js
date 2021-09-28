import expandRow from './TableExpand.vue'

export const testSchema= {
    columns:[
        {
            type:'expand',
            width:50,
            render:(h,params)=>{
                return h(expandRow,{
                    props:{
                        row:params.row
                    }
                })
            }
            
        },
        {
           title:'Name',
            key:'name'
        },
        {
            title:'Age',
            key:'age',
            sortable :true
        },
        {
            title:'Address',
            key:'address'
        },
        {
            title:'Action',
            slot:'action',
            align:'center'
        }
    ],
    schema:[
        {column: 'name', datatype: 'string'},
        {column: 'age', datatype: 'int'},
        {column: 'address', datatype: 'string'},
        {column: 'job', datatype: 'string'},
        {column: 'interest', datatype: 'string'},
        {column: 'birthday', datatype: 'string'},
        {column: 'book', datatype: 'string'},
        {column: 'movie', datatype: 'string'},
        {column: 'music', datatype: 'string'}
    ]
};