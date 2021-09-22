<template>
    <Tabs type="card">
        <TabPane v-for="tab in items" :key="tab.id" :label="tab.title">
            <slot :name="tab.id"></slot>    
        </TabPane>    
    </Tabs>
</template>
<script>
   
    export default {
        name : "AbsTabs",
        props: {
            items: {}
        },
        data () {
            return {
             
            }
        },
        methods: {}
    }
</script>