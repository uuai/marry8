
import Index from "./components/Index"
import Release from "./components/Release"
import My from "./components/My"
// (首页)二级路由
import Nearby from "./components/index/Nearby"
import Attention from "./components/index/Attention"
import Find from "./components/index/Find"
import FlowDetails from "./components/index/FlowDetails"
//内页
import AttentionDetails from "./components/index/AttentionDetails"
//搜索页面
import SearchDetails from "./components/search/SearchDetails"
//消息
import Notification from "./components/message/Notification"
import Notice from "./components/message/Notice"
import System from "./components/message/System"
//my
import Edit from "./components/my/Edit"

//发布
import ReleasePhoto from './components/release/ReleasePhoto'
import ReleaseVideo from './components/release/ReleaseVideo'


export const routes = [
    {path:'/',name:"indexLink",component:Index,redirect:'/find',
       children:[
         {path:'/nearby',name:"nearbyLink",component:Nearby},
         {path:'/attention',name:"attentionLink",component:Attention,},
         {path:'/find',name:"findLink",component:Find},
       ]
    },
    {path:'/release',name:"releaseLink",component:Release},
    {path:'/my',name:"myLink",component:My},
    {path:'/attentionDetails',name:"attentionDetailsLink",component:AttentionDetails},
    {path:'/flowDetails',name:"flowDetailsLink",component:FlowDetails},
    //子页面
    {path:'/search/details',name:"searchDetailsLink",component:SearchDetails},
    {path:'/notification',name:"notificationLink",component:Notification},
    {path:'/notice',name:"noticeLink",component:Notice},
    {path:'/system',name:"systemLink",component:System},
    {path:'/edit',name:"editLink",component:Edit},
    {path:'/releasePhoto',name:"releasePhotoLink",component:ReleasePhoto},
    {path:'/releaseVideo',name:"releaseVideoLink",component:ReleaseVideo},
    {path: "*", redirect: "/"},
]
