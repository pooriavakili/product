import SignIn from "./SignIn";
import Register from "./Register";
import Map from "./Map";
import One from './One'
import Two from './Two'
import Three from './Three'
import App from "../App";
import Search from "./Search";
import Kharid from "./Kharid";
import Pardakht from "./Pardakht";
const Routes=[
    {
        exact:true,
        path:'/',
        component:App

    },
    {
        path: '/map',
        component:Map
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/signIn',
        component:SignIn
    },
    {
      path:"/one",
      component:One
    },
    {
        path:"/two",
        component:Two
    },
    {
        path:'/three',
        component:Three
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/kharid",
        component:Kharid
    },
    {
        path:"/pardakht",
        component:Pardakht
    }
]
export default Routes