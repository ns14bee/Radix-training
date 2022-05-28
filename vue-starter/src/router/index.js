import {createRouter, createWebHistory} from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import Milestone1  from '../pages/milestone1/BasePage.vue';
import Milestone2  from '../pages/milestone2/BasePage.vue';
import Exercise  from '../pages/exercise/BasePage.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component:IndexPage,
        children: [
            {
                path:'',
                name: 'home',
                component: () =>
                import("../pages/HomePage.vue"),
            },
            {
                path:'milestone1',
                name: 'milestone1',
                component: Milestone1,
                redirect:{name: 'interpolation'},
                children:[
                    {
                        path: 'interpolation',
                        name: 'interpolation',
                        component: () =>
                        import("../pages/milestone1/sidebar/InterpolationPage.vue"),
                    },
                    {
                        path: 'data-binding',
                        name: 'data-binding',
                        component: () =>
                        import("../pages/milestone1/sidebar/DatabindingPage.vue"),
                    },
                    {
                        path: 'reactivity',
                        name: 'reactivity',
                        component: () =>
                        import("../pages/milestone1/sidebar/ReactivityPage.vue"),
                    },
                    {
                        path: 'state',
                        name: 'state',
                        component: () =>
                        import("../pages/milestone1/sidebar/StatePage.vue"),
                    },
                    {
                        path: 'lifecycle',
                        name: 'lifecycle',
                        component: () =>
                        import("../pages/milestone1/sidebar/LifecyclePage.vue"),
                    },
                    {
                        path: 'directives',
                        name: 'directives',
                        component: () =>
                        import("../pages/milestone1/sidebar/DirectivePage.vue"),
                    },
                    {
                        path: 'event-handling',
                        name: 'event-handling',
                        component: () =>
                        import("../pages/milestone1/sidebar/EventHandlingPage.vue"),
                    },
                    {
                        path: 'computed-watcher',
                        name: 'computed-watcher',
                        component: () =>
                        import("../pages/milestone1/sidebar/ComputedWatcherPage.vue"),
                    },
                    {
                        path: 'template-ref',
                        name: 'template-ref',
                        component: () =>
                        import("../pages/milestone1/sidebar/TemplateRefPage.vue"),
                    },
                    {
                        path: 'demo',
                        name: 'demo',
                        component: () =>
                        import("../pages/milestone1/sidebar/DemoPage.vue"),
                    },
                ]
            },
            {
                path:'milestone2',
                name: 'milestone2',
                component: Milestone2,
                redirect: {name: 'mixin-store'},
                children:[
                    {
                        path:'mixin-store',
                        name: 'mixin-store',
                        component: () => 
                        import("../pages/milestone2/sidebar/MixinStorePage.vue")
                    }
                ]
            },
            {
                path:'exercise',
                name: 'exercise',
                component: Exercise
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;