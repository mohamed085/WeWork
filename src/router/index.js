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
import Contact from "@/views/Contact";
import About from "@/views/About";
import Join from "@/views/Join";
import MobileApps from "@/views/Projects/MobileApps";
import Websites from "@/views/Projects/Websites";
import MotionGraphicProjects from "@/views/Projects/MotionGraphicProjects";
import ProjectsCategory from "@/views/Projects/ProjectsCategory";
import MobileApp from "@/views/Projects/MobileApp";
import Project from "@/views/Projects/Project";
import Website from "@/views/Projects/Website";
import MotionGraphic from "@/views/Projects/MotionGraphic";

Vue.use(VueRouter)

const routes = [
    { path: '/',component: Home },
    { path: '/services',component: Services },
    { path: '/deliver',component: Deliver },
    { path: '/clients',component: Clients },
    { path: '/team',component: Team },
    { path: '/contact-us',component: Contact },
    { path: '/about-us',component: About },
    { path: '/join-us',component: Join },
    { path: '/projects',component: Index,
        children: [
            { path: '',component: AllCategories },
            { path: '/projects/software',component: SoftwareCategory },
            { path: '/projects/decoration',component: DecorationCategory },
            { path: '/projects/decoration',component: DecorationCategory },
            { path: '/projects/marketing',component: MarketingCategory },
        ]
    },
    { path: '/mobile-applications', component: MobileApps },
    { path: '/websites', component: Websites },
    { path: '/motion-graphic', component: MotionGraphicProjects },
    { path: '/projects/:id', component: ProjectsCategory },
    { path: '/mobile-application/:id', component: MobileApp },
    { path: '/project/:id', component: Project },
    { path: '/website/:id', component: Website },
    { path: '/motion-graphic/:id', component: MotionGraphic },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
