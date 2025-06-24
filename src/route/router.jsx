import RootLayout from "@/layout/root";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogWithSidebar from "@/pages/blog-with-sidebar";
import BlogStandard from "@/pages/blog-standard";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import CookiePolicy from "@/pages/cookie-policy";
import Faq from "@/pages/faq";
import Gallery from "@/pages/gallery";
import Home from "@/pages/home";
import HomeFour from "@/pages/home-four";
import HomeThree from "@/pages/home-three";
import HomeTwo from "@/pages/home-two";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/portfolio";
import PortfolioDetails from "@/pages/portfolio-details";
import Pricing from "@/pages/pricing";
import PrivacyPolicy from "@/pages/privacy-policy";
import ProductsList from "@/pages/products-list";
import Services from "@/pages/services";
import ServicesDetails from "@/pages/services-details";
import SingleProducts from "@/pages/single-products";
import Team from "@/pages/team";
import TermCondition from "@/pages/term-condition";
import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "@/pages/blog-details";
import Contact from "@/pages/contact";
import Login from "@/pages/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomeTwo />
            },
            {
                path: "/home-two",
                element: <HomeTwo />
            },
            {
                path: "/home-three",
                element: <HomeThree />
            },
            {
                path: "/home-four",
                element: <HomeFour />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/portfolio-details",
                element: <PortfolioDetails />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/services-details",
                element: <ServicesDetails />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/products-list",
                element: <ProductsList />
            },
            {
                path: "/single-products",
                element: <SingleProducts />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/not-found",
                element: <NotFound />
            },
            {
                path: "*",
                element: <NotFound />
            },
            {
                path: "/term-condition",
                element: <TermCondition />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/cookie-policy",
                element: <CookiePolicy />
            },
            {
                path: "/blog-standard",
                element: <BlogStandard />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-sidebar",
                element: <BlogWithSidebar />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])