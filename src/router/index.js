import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const User = () => import('../views/user/User.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:'Supermall - 首页'
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      title:'Supermall - 分类'
    }
  },
  {
    path:'/shopcart',
    component:Shopcart,
    meta:{
      title:'Supermall - 购物车'
    }
  },
  {
    path:'/user',
    component:User,
    meta:{
      title:'Supermall - 个人中心'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router
