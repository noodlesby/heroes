<template>
  <div>
     <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="英雄名称" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="英雄性别" v-model="formData.gender">
          </div>

          <button type="submit" class="btn btn-success" @click.prevent='addHandler'>添加</button>
        </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
      data(){
        return {
          formData:{
        name:'',
        gender:''
      }
        }
      },
      methods:{
        addHandler(){
              axios.post('http://localhost:3001/heroes',this.formData).then((res)=>{
                if(res.status===201){
                  this.$router.push('/heroes')
                }
              }).catch((err)=>{
                if(err){
                  alert('添加失败')
                }
              })
        }
      }
}
</script>
<style>

</style>

