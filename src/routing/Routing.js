import { createBrowserRouter } from "react-router-dom";
import MysliderComp from "../components/MysliderComp";
import MyImagesComp from "../components/MyImagesComp";
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../hooks/ReactHooksComp";
import UseStateHookComp from "../hooks/UseStateHookComp";
import UseEffectHookComp from "../hooks/UseEffectHookComp";
import MaindashboardComp from "../layout/MaindashboardComp";
import NavComp from "../layout/NavComp";
import FooterComp from "../layout/FooterComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginComp from "../layout/LoginComp";
const router = createBrowserRouter([
    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    {path:"maindash",element:<MaindashboardComp/>,children:[
         // default routing
    {path:"myslider",element:<MysliderComp/>},

    // naming routing
    {path:"myimages",element:<MyImagesComp/>},
    {path:"productdash",element:<ProductDashboardComp/>},
    {path:"productadd",element:<ProductAddComp/>},
    {path:"productupdate/:id",element:<ProductUpdateComp/>},

    //parameterize routing
    {path:"parent",element:<ParentComp/>},
     // child routing
    {path:"reacthook",element:<ReactHooksComp/>,children:[
        {path:"usestate",element:<UseStateHookComp/>},
        {path:"useeffect",element:<UseEffectHookComp/>},
    ]},
    {path:"virtualdom",element:<VirtualDomComp/>},
    {path:"formval",element:<FormValComp/>},
    ]},
  
   
    // wild card routing
    {path:"*",element:<PageNotFound/>},
    
    
])


export default router;