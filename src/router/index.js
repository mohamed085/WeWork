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
import MainDashboard from "@/views/Dashboard/Main";
import UsersDashboard from "@/views/Dashboard/Users/Index";
import UsersDashboardItems from "@/views/Dashboard/Users/Items";
import UsersDashboardAdd from "@/views/Dashboard/Users/Add";
import JoinDashboard from "@/views/Dashboard/Join/Index";
import JoinDashboardForms from "@/views/Dashboard/Join/Forms";
import JoinDashboardSettings from "@/views/Dashboard/Join/Settings";
import ContactDashboard from "@/views/Dashboard/Contact/Index";
import ContactDashboardForms from "@/views/Dashboard/Contact/Forms";
import ContactSettingsDashboard from "@/views/Dashboard/Contact/Settings";
import ContactDashboardPreview from "@/views/Dashboard/Contact/Preview";
import ProjectsDashboard from "@/views/Dashboard/Projects/Index";
import ProjectsFormsDashboard from "@/views/Dashboard/Projects/Forms";
import ProjectsFormDashboard from "@/views/Dashboard/Projects/Form";
import ProjectsSettingsDashboard from "@/views/Dashboard/Projects/Settings";
import ProjectsMainCategoryDashboard from "@/views/Dashboard/Projects/MainCategory/Index";
import ProjectsMainCategoryItemsDashboard from "@/views/Dashboard/Projects/MainCategory/Items";
import ProjectsMainCategoryAddDashboard from "@/views/Dashboard/Projects/MainCategory/Add";
import ProjectsMainCategoryEditDashboard from "@/views/Dashboard/Projects/MainCategory/Edit";
import ProjectsSubCategoryDashboard from "@/views/Dashboard/Projects/SubCategories/Index";
import ProjectsSubCategoryItemsDashboard from "@/views/Dashboard/Projects/SubCategories/Items";
import ProjectsSubCategoryAddDashboard from "@/views/Dashboard/Projects/SubCategories/Add";
import ProjectsIndexDashboard from "@/views/Dashboard/Projects/Projects/Index";
import ProjectsItemDashboard from "@/views/Dashboard/Projects/Projects/Items";
import ProjectsAddDashboard from "@/views/Dashboard/Projects/Projects/Add";


import DashboardClients from "@/views/Dashboard/Clients/Index";
import DashboardClientsItems from "@/views/Dashboard/Clients/Items";
import DashboardClientsAdd from "@/views/Dashboard/Clients/Add";
import DashboardClientsSettings from "@/views/Dashboard/Clients/Settings";
import DashboardTeam from "@/views/Dashboard/Team/Index";
import DashboardTeamItems from "@/views/Dashboard/Team/Items";
import DashboardTeamAdd from "@/views/Dashboard/Team/Add";
import DashboardTeamEdit from "@/views/Dashboard/Team/Edit";
import DashboardTeamSettings from "@/views/Dashboard/Team/Settings";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
    { path: '/',component: Home },
    { path: '/login',component: Login },
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
            { path: '/dashboard',component: MainDashboard },
            { path: '/dashboard/users',component: UsersDashboard,
                children: [
                    { path: '/dashboard/users',component: UsersDashboardItems },
                    { path: '/dashboard/users/add',component: UsersDashboardAdd },
                ]
            },
            { path: '/dashboard/join',component: JoinDashboard,
                children: [
                    { path: '/dashboard/join',component: JoinDashboardForms },
                    { path: '/dashboard/join/setting',component: JoinDashboardSettings },
                ]
            },
            { path: '/dashboard/contact',component: ContactDashboard,
                children: [
                    { path: '/dashboard/contact',component: ContactDashboardForms },
                    { path: '/dashboard/contact/view/:id',component: ContactDashboardPreview },
                    { path: '/dashboard/contact/setting',component: ContactSettingsDashboard },
                ]
            },
            { path: '/dashboard/projects',component: ProjectsDashboard,
                children: [
                    { path: '/dashboard/projects/main-categories',component: ProjectsMainCategoryDashboard,
                        children: [
                            { path: '/dashboard/projects/main-categories',component: ProjectsMainCategoryItemsDashboard },
                            { path: '/dashboard/projects/main-categories/add',component: ProjectsMainCategoryAddDashboard },
                            { path: '/dashboard/projects/main-categories/edit/:id',component: ProjectsMainCategoryEditDashboard },
                        ]
                    },
                    { path: '/dashboard/projects/setting',component: ProjectsSettingsDashboard },
                    { path: '/dashboard/projects/forms',component: ProjectsFormsDashboard },
                    { path: '/dashboard/projects/forms/view/:id',component: ProjectsFormDashboard },
                ]
            },
            { path: '/dashboard/projects/sub-categories/items/:id', component: ProjectsSubCategoryDashboard,
                children: [
                    { path: '/dashboard/projects/sub-categories/items/:id', component: ProjectsSubCategoryItemsDashboard },
                    { path: '/dashboard/projects/sub-categories/add/:id', component: ProjectsSubCategoryAddDashboard },
                    { path: '/dashboard/projects/sub-categories/view/:id', component: ProjectsSubCategoryAddDashboard },
                    { path: '/dashboard/projects/sub-categories/edit/:id', component: ProjectsSubCategoryAddDashboard },
                ]
            },
            { path: '/dashboard/projects/item', component: ProjectsIndexDashboard,
                children: [
                    { path: '/dashboard/projects/item/items/:id', component: ProjectsItemDashboard },
                    { path: '/dashboard/projects/item/add/:id', component: ProjectsAddDashboard }
                ]
            },
            { path: '/dashboard/clients',component: DashboardClients,
                children: [
                    { path: '/dashboard/clients',component: DashboardClientsItems },
                    { path: '/dashboard/clients/add',component: DashboardClientsAdd },
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
