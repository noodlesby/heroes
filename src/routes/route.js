import VueRouter from 'vue-router'
import Vue from 'vue';
/* 导入内容区域组件 */
import HeroList from '../views/heroes/List.vue'
import WeaponList from '../views/weapons/List.vue'
import EquipmentList from '../views/equipments/List.vue'
/* 导入添加功能组件 */
import HeroAdd from '../views/heroes/Add.vue'
/* 导入编辑功能组件 */
import HeroEdit from '../views/heroes/Edit.vue'
Vue.use(VueRouter)
    /* 创建路由对象，指定路由规则 */
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/heroes' },
        { name: 'heroes', path: '/heroes', component: HeroList },
        { name: 'heroesadd', path: '/heroes/add', component: HeroAdd },
        { name: 'heroesedit', path: '/heroes/edit/:id', component: HeroEdit, props: true },
        { name: 'weapons', path: '/weapons', component: WeaponList },
        { name: 'equipments', path: '/equipments', component: EquipmentList }
    ],
    /* 配置激活类样式 */
    linkActiveClass: 'active'
})

/*导出路由对象 */
export default router