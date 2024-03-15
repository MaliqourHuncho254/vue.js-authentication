<template>
    <div class="about">
        <h1>This is the SignUp Page</h1>
        <h2>({result})</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            result: null
        }
    },

    created(){
        this.$http.get('test').then(function (response){
            console.log(response.body);
        });
    }
}
</script>
