import  {MatxLoadable}  from "../../../components/matx/index";

const socialmedia = MatxLoadable({
    loader: () => import("./socialmedia/socialmedia")
});

const settingRoutes = [
    {
        path: "/setting/socialmedia",
        component: socialmedia
    }  
]

export default settingRoutes;
