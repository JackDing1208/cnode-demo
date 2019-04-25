import Vue from 'vue'
import Router from 'vue-router'
import MainList from '../components/MainList'
import Article from "../components/Article";
import Footer from "../components/Footer";


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: MainList,
      }
    },
    {
      name:'post',
      path: '/topic/:id',
      components: {
        main:Article,

      }
    },
    {
      name:'user',
      path: '/user',
      components: Article
    }]
})
