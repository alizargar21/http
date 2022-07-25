import NotFound from "./components/NotFound"
import Home from "./Pages/Home"
import CommentsList from "./Pages/CommentsList"
const routes = [
    {path:'/commentsList' , component:CommentsList},
    {path:'/' , component:Home , exact:true},
    {component:NotFound}
]

export default routes