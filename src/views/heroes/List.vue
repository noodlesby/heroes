<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
        <router-link to="/heroes/add" class="btn btn-success">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,i) in list" :key="item.id">
                <td>{{i+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                 <router-link :to="{name:'heroesedit',params:{id:item.id}}">编辑</router-link>
                  &nbsp;&nbsp;
                  <a @click.prevent="delHandler(item.id)" href="javascript:window.confirm('Are you sure?')">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
data(){
  return {
     list:[]
  }
},
created(){
this.getHandler()
},
methods:{
  delHandler(id){
  if(confirm('您确定要删除么?')){
     axios.delete(`http://localhost:3001/heroes/${id}`).then((res)=>{
     if(res.status===200){
         this.getHandler()
     }
   }).catch((err)=>{
       if(err){
         alert('删除失败')
       }
   })
  }
  },
  getHandler(){
axios.get('http://localhost:3001/heroes').then((res)=>{
if(res.status==200){
  this.list=res.data
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
