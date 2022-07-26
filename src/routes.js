import NotFound from "./components/NotFound"
import Home from "./components/Comments/Comments"

import CreateComment from './Pages/CreateComment'
import CommentDetails from "./Pages/CommentDetails"
import FullComment from "./components/FullComments"
const routes = [
    {path:'/commentsDetails/:id' , component:CommentDetails},
    {path:'/createComment' , component:CreateComment},
    {path:'/' , component:Home , exact:true},
    {component:NotFound}
]

export default routes