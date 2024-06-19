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
const router = createBrowserRouter([

    {path:"maindash",element:<MaindashboardComp/>,children:[
         // default routing
    {path:"myslider",element:<MysliderComp/>},

    // naming routing
    {path:"myimages",element:<MyImagesComp/>},

    //parameterize routing
    {path:"parent",element:<ParentComp/>},
     // child routing
    {path:"reacthook",element:<ReactHooksComp/>,children:[
        {path:"usestate",element:<UseStateHookComp/>},
        {path:"useeffect",element:<UseEffectHookComp/>},
    ]},
    ]},
   
    // wild card routing
    {path:"*",element:<PageNotFound/>},
    
    
])


export default router;