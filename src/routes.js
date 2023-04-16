import { BoxPage } from "./pages/box-page"
import { HomePage } from "./pages/home-page"
import { SplinePage } from "./pages/spline-page"
import { StarsPage } from "./pages/Stars-page"

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: '/spline',
        component: <SplinePage />,
        label: 'Spline',
    },
    {
        path: '/stars',
        component: <StarsPage />,
        label: 'Stars',
    },
    {
        path: '/box',
        component: <BoxPage />,
        label: 'boxes',
    },

]

export default routes