import VueRouter from 'vue-router'

//imports for router
import Landingpage from '../components/landingpage-and-other/Landingpage'
import Signin from '../components/signin-up/Signin'
import Signup from '../components/signin-up/Signup'
import Mainfeed from '../components/landingpage-and-other/Mainfeed'
import CreateArticle from '../components/articles/CreateArticle'
import CreateNews from '../components/news/CreateNews'
import NewsShow from '../components/news/NewsShow'
import ArticleShow from '../components/articles/ArticleShow'
import Myarticles from '../components/articles/Myarticles'
import RequestAuthers from '../components/landingpage-and-other/RequestAuthers'

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: "Landingpage",
        component: Landingpage
      },
      {
        path: '/signup',
        name: "Signup",
        component: Signup
      },
      {
        path: '/signin',
        name: "Signin",
        component: Signin
      },
      {
        path: '/mainfeed',
        name: "Mainfeed",
        component: Mainfeed
      },
      {
        path: '/createarticle',
        name: "CreateArticle",
        component: CreateArticle
      },
      {
        path: '/creatnews',
        name: "CreateNews",
        component: CreateNews
      },
      {
        path: '/myarticles',
        name: "Myarticles",
        component: Myarticles
      },
      {
        path: '/autherrequest',
        name: 'RequestAuthers',
        component: RequestAuthers
      },
      {
        path: '/apostnews/:idnews',
        name:"NewsShow",
        component: NewsShow
      },
      {
        path: '/apostarticle/:idarticle',
        name: "ArticleShow",
        component: ArticleShow
      },
    ],
    mode: 'history'
  })

export default router;