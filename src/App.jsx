import "./App.css"
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import Root from "./roots/roots";
import { LoadingHelper } from "./lib/LoadingHelper";
//from here will contain the import from your various page files in the page folders, no need for typing
import Color from "./pages/FavColor";
import BrandCar from "./pages/BrandCar";
import Timer from "./pages/Timer";
import CheckAmt from "./pages/CheckAmt";
import Focusinput from "./pages/FocusInput";
import CompContext from "./pages/CompContext";
import Reduceapp from "./pages/Reduceapp";
import CallbackApp from "./pages/CallbackApp";
import MemoApp from "./pages/MemoApp";
import Start from "./pages/Start";

function App() {
    const router = createBrowserRouter([{
        path:"/",
        element: <Root />,
        children: [
        {
            index: true,
            element: (
            <Suspense fallback={<LoadingHelper/>}>
                <Start />
            </Suspense>),
        },
        {
            path:"/carbrand",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <BrandCar/>
                </Suspense>
            )
        },
        {
            path:"/timer",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <Timer/>
                </Suspense>
            )
        },
        {
            path:"/applicationCheck",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <CheckAmt/>
                </Suspense>
            )
        },
        {
            path:"/focusinput",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <Focusinput/>
                </Suspense>
            )
        },
        {
            path:"/compcontext",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <CompContext/>
                </Suspense>
            )
        },
        {
            path:"/reducer",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <Reduceapp/>
                </Suspense>
            )
        },
        {
            path:"/callback",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <CallbackApp/>
                </Suspense>
            )
        },
        {
            path:"/memoCall",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <MemoApp/>
                </Suspense>
            )
        },
        {
            path:"/favColor",
            element: (
                <Suspense fallback={<LoadingHelper />}>
                    <Color/>
                </Suspense>
            )
        }
    ]
    }])
    return <RouterProvider router = {router} />;
}
export default App;
