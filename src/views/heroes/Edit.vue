<template>
 <div>
     <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="text" class="form-control" id="exampleInputEmail1"  v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input type="text" class="form-control" id="exampleInputPassword1"  v-model="formData.gender">
          </div>

          <button type="submit" class="btn btn-success" @click.prevent='editHandler'>编辑</button>
        </form>
        <!-- {{id}} -->
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
props:['id'],
created(){
     axios.get(`http://localhost:3001/heroes/${this.id}`).then((res)=>{
if(res.status==200){
    this.formData=res.data
}
  }).catch((err)=>{
if(err){
  alert('服务器内部错误 500')
}
  })
},
methods:{
  editHandler(){
    axios.put(`http://localhost:3001/heroes/${this.id}`,this.formData).then((res)=>{
    if(res.status===200){
      this.$router.push('/heroes')
    }
    }).catch((err)=>{
      if(err){
        alert('服务器内部错误 500')
      }
    })
  }
}
}
</script>
<style>

</style>
