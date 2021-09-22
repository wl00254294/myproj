<template>
<div>
    <Row>
         <Col span="8" v-for="(key) of Object.entries(row)" :key="key[0]">
            <span v-show="key[0] != '_index' && key[0] != '_rowKey'" class="expand-key">
                <strong>{{key[0]}} : </strong> 
            </span>
            <span v-show="key[0] != '_index' && key[0] != '_rowKey'" class="expand-value">{{key[1]}}</span>
        </Col>
    </Row>    
</div>
</template>
<script>

export default {
    props:{
        row:Object
    }
};
</script>

<style scoped>
.expand-row {
        margin-bottom:16px;
}
</style>