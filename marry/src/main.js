// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'

import { routes } from './router'

Vue.config.productionTip = false

Vue.use(vueRouter)
Vue.use(Vant)
//全局变量
let global ={
  tabbarAppear:null
}

const router = new vueRouter({
        routes,
        mode: 'history' //去掉链接中的#
    })

router.beforeEach(function (to,from,next) {
  console.log(to);
  if(to.name != "nearbyLink" && to.name != "attentionLink" && to.name !='findLink' && to.name !='myLink'){
    global.tabbarAppear=false;
    console.log('tabber',global.tabbarAppear)
  }else {
    global.tabbarAppear=true;
    console.log('tabber2',global.tabbarAppear)
  }
  next();
})

Vue.prototype.$global =global ;
    /* eslint-disable no-new */
 new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})



