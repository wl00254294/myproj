<template>
  <div class="about">
    <h2 data-vel="subheader">This is an about page2</h2>
    <Button @click="butoonaction">Click</Button>
    <Button type="primary" :disabled="!action">Btest</Button>
    
  </div>
</template>

<script>



export default {
  name: "Abouut2", // you can enter any name (optional)
  components: {},
  props: {},
  data() {
    return {
      action: true
    };
  },
  //mounted() {},
  watch: {
    action(newval,oldval) {
      console.log(oldval+' to '+newval);
    }
  },
 // computed: {
 //   isclick() {
  //    return this.action;
  //  }
 // },
  methods: {
    butoonaction() {
       this.action = !this.action;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
