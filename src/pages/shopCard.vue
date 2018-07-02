<template>
    <div>
         <shopList />
    </div>
</template>

<script>
  import shopList from '@/components/shopList'
    export default {
        name:'shopCard',
        data() {
            return {
                key: ''
            }
        },
        components:{
            shopList,
        }
    }
</script>

<style scoped>

</style>