import entertainmentWebAppImage from '../../static/entertainment-web-app.jpg'
import rockPaperScissorsImage from '../../static/rock-paper-scissors.jpg'
import foodOrderAppImage from '../../static/food-order-app.jpg'
import countriesInfoAppImage from '../../static/countries-info-app.jpg'
import ecommerceProductPageImage from '../../static/ecommerce-product-page.jpg'
import planetsFactSiteImage from '../../static/planets-fact-site.jpg'

export const projectData = [
    {
        title:"Entertainment Web App",
        content: "Media website for movies and tv-series with ability to search, navigate and add favorite movies to bookmarks (ReactJS, Typescript)",
        GitHub: "https://github.com/iDamjan/Entertainment-web-app",
        WebPage: "/",
        image: entertainmentWebAppImage,
        mobile: true
    },
    {
        title:"Food Order App ",
        content: "Pratice project with sign up and login form, connected to dummy backend, with functionality for adding and ordering food (ReactJS) ",
        GitHub: "https://github.com/iDamjan/Food-order-app",
        WebPage: "",
        image: foodOrderAppImage,
        mobile:false

    },
    {
        title:"Rock-Paper-Scissors Game",
        content: "Simple rock paper scissors game where the user plays against the computer Maintain the state of the score after refreshing the browser (ReactJS) ",
        GitHub: "https://github.com/iDamjan/Rock-paper-scissors-game",
        WebPage: "",
        image: rockPaperScissorsImage,
        mobile:true
    },
    {
        title:"Planets Fact Site",
        content: "Website for viewing and learning information about the planets, geology and inner planetary structure. (React-router, ReactJS, Typescript)",
        GitHub: "https://github.com/iDamjan/planets-fact-site",
        WebPage: "",
        image:planetsFactSiteImage,
        mobile:true

    },
    {
        title:"Countries Info App",
        content: "Website project for practicing geting data from API and multiple filter functionality, using search & select filter. Darkmode enabled (ReactJS)",
        GitHub: "https://github.com/iDamjan/Countries-Info-App",
        WebPage: "",
        image: countriesInfoAppImage,
        mobile:true

    },
    {
        title:"Ecommerce Product Page",
        content: "Ecommerce Product page build using Vanila JavaScript, with image carousel for mobile version and adding products to cart functionality",
        GitHub: "https://github.com/iDamjan/Ecommerce-Product-page",
        WebPage: "https://idamjan.github.io/Ecommerce-Product-page/",
        image: ecommerceProductPageImage,
        mobile:true

    },
]