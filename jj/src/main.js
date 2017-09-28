import Vue from "vue"
import Router from "vue-router"
import index from "./components/index.vue"


require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
 
Vue.use(Mint);

import vueAxios from "vue-axios";
import axios from "axios";


import fei from "./components/fei.vue"
import find from "./components/find.vue"
import shou from "./components/shou.vue"
import shop from "./components/shop.vue"
import mine from "./components/mine.vue"

var router=new Router({
	routes:[
      {
      	 name:"shou",
         path:"/shou",
         component:shou
        

      },
      {
      	 name:"fei",
         path:"/fei",
         component:fei
      },
      {
      	 name:"find",
         path:"/find",
         component:find
      },
      {
      	 name:"mine",
         path:"/mine",
         component:mine
      },
      {
      	 name:"shop",
         path:"/shop",
         component:shop
      },{
         path:"/",
         redirect:"/shou"
      }
	]
})

Vue.prototype.axios=axios;
Vue.use(Router,vueAxios,axios);

new Vue({
	el:"#app",
	template:"<index />",
	components:{
		index:index
	},
	router

})