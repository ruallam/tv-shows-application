import DashboardPage from '../views/DashboardPage';
import PageNotFound from '../views/PageNotFound';
import ViewCategory from '../views/ViewCategory';
import SearchResults from '../views/SearchResults';
import ShowDetails from '../views/ShowDetails';

export default [
    {
        path: "/",
        name: "DashboardPage",
        component: DashboardPage,
    },
    {
        path: "/search/:searchName",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/category/:genreName",
        name: "ViewCategory",
        component: ViewCategory,
    },
    {
        path: "/:catchAll(.*)",
        name: "PageNotFound",
        component: PageNotFound,
    },
    {
        path:"/shows/:id",
        name: "ShowDetails",
        component: ShowDetails
    },
    
]