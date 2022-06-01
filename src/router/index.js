import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Services from "@/views/Services";
import Deliver from "@/views/Deliver";
import Index from "@/views/Projects/Index";
import AllCategories from "@/views/Projects/AllCategories";
import SoftwareCategory from "@/views/Projects/SoftwareCategory";
import DecorationCategory from "@/views/Projects/DecorationCategory";
import MarketingCategory from "@/views/Projects/MarketingCategory";
import Clients from "@/views/Clients";
import Team from "@/views/Team";

Vue.use(VueRouter)

const routes = [
    { path: '/',component: Home },
    { path: '/services',component: Services },
    { path: '/deliver',component: Deliver },
    { path: '/clients',component: Clients },
    { path: '/team',component: Team },
    { path: '/projects',component: Index,
        children: [
            { path: '',component: AllCategories },
            { path: '/projects/software',component: SoftwareCategory },
            { path: '/projects/decoration',component: DecorationCategory },
            { path: '/projects/decoration',component: DecorationCategory },
            { path: '/projects/marketing',component: MarketingCategory },
        ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
