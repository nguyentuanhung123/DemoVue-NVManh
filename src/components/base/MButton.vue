<template>
    
        <button id="btn-add" class="btn btn--default btn-icon btn-icon--add-employee bg--green">
            {{text}}
        </button>
    
</template>

<script>
export default {
    name:"MButton",
    props:{
       text:String
    }
}
</script>

<style scoped>
   @import url(../../css/base/button.css);
</style>