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
import Dashboard from "@/views/Dashboard/Index";
import Main from "@/views/Dashboard/Main";
import Users from "@/views/Dashboard/Users";
import ContactForms from "@/views/Dashboard/ContactForms";
import ContactFormPreview from "@/views/Dashboard/ContactFormPreview";
import JoinForms from "@/views/Dashboard/JoinForms";
import NewProjectsForms from "@/views/Dashboard/NewProjectsForms";
import NewProjectsFormsPreview from "@/views/Dashboard/NewProjectsFormsPreview";
import DashboardClients from "@/views/Dashboard/Clients/Index";
import DashboardClientsItems from "@/views/Dashboard/Clients/Items";
import DashboardClientsAdd from "@/views/Dashboard/Clients/Add";
import DashboardClientsEdit from "@/views/Dashboard/Clients/Edit";
import DashboardClientsSettings from "@/views/Dashboard/Clients/Settings";
import DashboardTeam from "@/views/Dashboard/Team/Index";
import DashboardTeamItems from "@/views/Dashboard/Team/Items";
import DashboardTeamAdd from "@/views/Dashboard/Team/Add";
import DashboardTeamEdit from "@/views/Dashboard/Team/Edit";
import DashboardTeamSettings from "@/views/Dashboard/Team/Settings";

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
    { path: '/dashboard', component: Dashboard,
        children: [
            { path: '/dashboard',component: Main },
            { path: '/dashboard/users',component: Users },
            { path: '/dashboard/users',component: Users },
            { path: '/dashboard/contact-forms',component: ContactForms },
            { path: '/dashboard/contact-forms/:id',component: ContactFormPreview },
            { path: '/dashboard/join-forms',component: JoinForms },
            { path: '/dashboard/new-projects-forms',component: NewProjectsForms },
            { path: '/dashboard/new-projects-forms/:id',component: NewProjectsFormsPreview },
            { path: '/dashboard/clients',component: DashboardClients,
                children: [
                    { path: '/dashboard/clients',component: DashboardClientsItems },
                    { path: '/dashboard/clients/add',component: DashboardClientsAdd },
                    { path: '/dashboard/clients/edit/:id',component: DashboardClientsEdit },
                    { path: '/dashboard/clients/setting',component: DashboardClientsSettings },
                ]
            },
            { path: '/dashboard/team', component: DashboardTeam,
                children: [
                    { path: '/dashboard/team',component: DashboardTeamItems },
                    { path: '/dashboard/team/add',component: DashboardTeamAdd },
                    { path: '/dashboard/team/edit/:id',component: DashboardTeamEdit },
                    { path: '/dashboard/team/setting',component: DashboardTeamSettings },
                ]
            }
        ]
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
