/* eslint-disable @typescript-eslint/no-var-requires */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/Index.vue';
import Home from './views/Home.vue';
import Examples from './views/Examples.vue';
import { nav } from '@/config'


Vue.use(VueRouter);

// console.log('nav', nav)
const pagesRouter: any = [];
let navData: any = [];
// const files = require.context('@/packages', true, /doc\.md$/);

nav.forEach( navItem => {
  // console.log('navItem', navItem.packages)
  navData = navItem.packages.forEach( component => {
    if (component.show) {
      // console.log('component', component.name.toLowerCase())

      pagesRouter.push({
        path: component?.child ? '/' + component.child +'/'+ component.name.toLowerCase() : '/' + component.name.toLowerCase(),
        // @ts-ignore
        component: component?.child ? () => import(`@/packages/${component.child}/${component.name.toLowerCase()}/doc.md`)
                                   : () => import(`@/packages/${component.name.toLowerCase()}/doc.md`),
        // component: Index,
        name: component?.child ? component.child + component.name.toLowerCase() : component.name.toLowerCase(),
      });


      // files.keys().forEach( item => {
      //   // console.log('item', item)
      //   const name1 = `${item.split('/')[1]}`;
      //   const name2 = `${item.split('/')[2]}`;
      //   let file = name2 == 'doc.md' ? name1 : name2;
      //   // console.log('files', file)
      //   if(file.toLowerCase() == component.name.toLowerCase()) {
      //     pagesRouter.push({
      //       path: name2 == 'doc.md' ? '/' + component.name.toLowerCase() : '/' + name1 + '/'+ name2,
      //       component: files(item).default,
      //       name: component.name.toLowerCase()
      //     });
      //   }
      // })
      // pagesRouter.push({
      //   path: '/shop',
      //   component: shop,
      //   name: 'shop'
      // });
    }
  })
})
console.log('pagesRouter 0', pagesRouter)

const docs = require.context('@/docs', true, /\.md$/);
docs.keys().forEach(component => {
  const componentEntity = docs(component).default;
  const name = `${component.split('/')[1].replace('.md', '')}`;
  // console.log('name', name)
  pagesRouter.push({
    path: '/' + name,
    component: componentEntity,
    name
  });
  // console.log('pagesRouter 1', pagesRouter)
});

const routes = [
  { 
    path: '/', 
    component: Home,
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/intro',
    name: 'guide',
    component: Index
  },
  {
    path: '/examples',
    name: 'examples',
    component: Examples
  }
];
console.log('router 1', routes)
const router = new VueRouter({
  routes,
  scrollBehavior(to) {
    // if (to.path == '/index') {
		// 	return null;
		// } else {
		// 	return { x: 0, y: 0 };
		// }
    if (to.hash) {
      const id = to.hash.split('#')[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  }
});
// console.log('sites router', router)
router.afterEach((to, from) => {
  try {
	  setTimeout(() => {
      new Image().src =
        "https://nutui.jd.com/openapi/point?p=" +
        encodeURIComponent(JSON.stringify(location));
	  }, 500);
	} catch (error) {}

  // new HttpClient().request('/user/saveVisitInfo', 'post', {
  //   headers: '',
  //   componentName: to.path.split('/')[1]
  // });
});
export default router;
