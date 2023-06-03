import { createBrowserRouter } from 'react-router-dom';
import {
     About,
     Account,
     Cart,
     CheckOut,
     Contact,
     Error,
     HomePage,
     LogIn,
     ProductDetailsPage,
     SignUp,
     WishList,
} from './pages';
import routesUrl from './constants/routeUrls';

const router = createBrowserRouter([
     {
          path: routesUrl.home,
          element: <HomePage />,
     },
     {
          path: routesUrl.login,
          element: <LogIn />,
     },
     {
          path: routesUrl.signup,

          element: <SignUp />,
     },
     {
          path: routesUrl.wishlist,
          element: <WishList />,
     },
     {
          path: routesUrl.cart,
          element: <Cart />,
     },
     {
          path: routesUrl.checkout,
          element: <CheckOut />,
     },
     {
          path: routesUrl.account,
          element: <Account />,
     },
     {
          path: routesUrl.about,
          element: <About />,
     },
     {
          path: routesUrl.contact,
          element: <Contact />,
     },
     {
          path: routesUrl.error,
          element: <Error />,
     },
     {
          path: routesUrl.productdetailspage,
          element: <ProductDetailsPage />,
     },
]);

export default router;
