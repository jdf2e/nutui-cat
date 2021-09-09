/* eslint-disable @typescript-eslint/no-var-requires */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index.vue';
import { nav } from '@/config'

Vue.use(VueRouter);

const routes = [
  {
		path: '*',
		redirect: '/'
	},
  {
    path: '/',
    name: '/',
    component: Index
  },

];

// console.log('nav', nav)
let navData: any = [];
// const files = require.context('@/packages', true, /doc\.md$/);
// console.log('nav', nav)
nav.forEach( navItem => {
  // console.log('navItem', navItem.packages)
  navData = navItem.packages.forEach( component => {
    if (component.show) {
      routes.push({
        path: component?.child ? '/' + component?.child +'/'+ component?.name.toLowerCase() : '/' + component?.name.toLowerCase(),
        // @ts-ignore
        component: component?.child ? () => import(`@/packages/${component?.child}/${component?.name.toLowerCase()}/demo.vue`)
                                   : () => import(`@/packages/${component?.name.toLowerCase()}/demo.vue`),
        // component: Index,
        name: component?.child ? component?.child + component?.name.toLowerCase() : component?.name.toLowerCase(),
      });
    }
  })
})


// console.log('routes', routes)

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
		if (to.path == '/index') {
			return null;
		} else {
			return { x: 0, y: 0 };
		}
	}
});

// console.log('mobile router', router)

export default router;
