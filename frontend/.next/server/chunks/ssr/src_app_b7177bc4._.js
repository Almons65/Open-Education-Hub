module.exports = [
"[project]/src/app/components/PageTransition.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function PageTransition({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -10
        },
        transition: {
            duration: 0.4
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/PageTransition.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/auth/auth.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "auth-module__Y2OPrW__active",
  "auth-breathe": "auth-module__Y2OPrW__auth-breathe",
  "auth-card": "auth-module__Y2OPrW__auth-card",
  "auth-card-container": "auth-module__Y2OPrW__auth-card-container",
  "auth-drift": "auth-module__Y2OPrW__auth-drift",
  "auth-form": "auth-module__Y2OPrW__auth-form",
  "auth-page": "auth-module__Y2OPrW__auth-page",
  "auth-rotateOrb": "auth-module__Y2OPrW__auth-rotateOrb",
  "auth-tabs": "auth-module__Y2OPrW__auth-tabs",
  "checkbox-group": "auth-module__Y2OPrW__checkbox-group",
  "checkbox-label": "auth-module__Y2OPrW__checkbox-label",
  "email-icon": "auth-module__Y2OPrW__email-icon",
  "fade-in": "auth-module__Y2OPrW__fade-in",
  "fade-out": "auth-module__Y2OPrW__fade-out",
  "form-title": "auth-module__Y2OPrW__form-title",
  "gradientMove": "auth-module__Y2OPrW__gradientMove",
  "input-group": "auth-module__Y2OPrW__input-group",
  "input-icon": "auth-module__Y2OPrW__input-icon",
  "loading-gif": "auth-module__Y2OPrW__loading-gif",
  "orb-container": "auth-module__Y2OPrW__orb-container",
  "orb-side-img": "auth-module__Y2OPrW__orb-side-img",
  "orb-svg": "auth-module__Y2OPrW__orb-svg",
  "orb-with-image": "auth-module__Y2OPrW__orb-with-image",
  "orbBreath": "auth-module__Y2OPrW__orbBreath",
  "orbRotate": "auth-module__Y2OPrW__orbRotate",
  "particle": "auth-module__Y2OPrW__particle",
  "particles": "auth-module__Y2OPrW__particles",
  "slider": "auth-module__Y2OPrW__slider",
  "submit-btn": "auth-module__Y2OPrW__submit-btn",
  "submit-btn-wrapper": "auth-module__Y2OPrW__submit-btn-wrapper",
  "tabItem": "auth-module__Y2OPrW__tabItem",
  "underline": "auth-module__Y2OPrW__underline",
  "user-icon": "auth-module__Y2OPrW__user-icon",
  "visible": "auth-module__Y2OPrW__visible",
});
}),
"[project]/src/app/auth/AuthPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React's built-in hooks for managing state and side effects
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next.js's hook for navigation
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Optimized image component from Next.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// Custom PageTransition wrapper component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PageTransition.jsx [app-ssr] (ecmascript)");
// CSS module for locally-scoped styles
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/auth/auth.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function AuthPage() {
    // Router hook to be able to redirect the user
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // State to keep track of which tab is curently active
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    // State to manage the visibility of password fields (show/hide)
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        login: false,
        signup: {
            password: false,
            confirm: false
        }
    });
    // State to manage the loading status for each form's submit button
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        login: false,
        signup: false,
        reset: false
    });
    // Get direct access to the main card's DOM element (for height changes) 
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get direct acces to the tab slider's DOM element (for position changes)
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // A helper object mapping each tab to its required card height in pixels
    const tabHeights = {
        login: 640,
        signup: 710,
        reset: 530
    };
    // Effect hook runs whenever the 'activeTab' or 'tabHeights' values change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // -- Animate the card's height -- 
        if (cardRef.current) {
            // Set the card's CSS height based on the new active tab
            cardRef.current.style.height = tabHeights[activeTab] + "px";
        }
        // -- Animate the tab slider's position --
        if (sliderRef.current) {
            // Find the DOM element for the *currently active* tab
            const activeTabElement = document.getElementById(`tab-${activeTab}`);
            if (activeTabElement) {
                // Get its horizontal position (offsetLeft) and its width (offsetWidth)
                const { offsetLeft, offsetWidth } = activeTabElement;
                // Set the slider's width to match the active tab's width
                sliderRef.current.style.width = `${offsetWidth}px`;
                // Move the slider horizontally to align with the active tab
                sliderRef.current.style.transform = `translateX(${offsetLeft}px)`;
            }
        }
    // The dependency array ensures this code runs only when 'activeTab' or 'tabHeights' changes
    }, [
        activeTab,
        tabHeights
    ]);
    // Function to handle form submissions
    const handleSubmit = (e)=>{
        e.preventDefault(); // Prevent the default form submission (page reload)
        // Set the loading state for the *current* tab to true
        setLoading((prev)=>({
                ...prev,
                [activeTab]: true
            }));
        // Simulate a network request with a 2-second delay
        setTimeout(()=>{
            // After 2 seconds, set loading back to false
            setLoading((prev)=>({
                    ...prev,
                    [activeTab]: false
                }));
            // Redirect the user to the "/home" page on successful login/signup
            router.push("/home");
        }, 2000);
    };
    // Render the component's JSX
    return(// Wrap the entire page in the transition component
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-page"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].particles,
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].particle
                        }, i, false, {
                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-card-container"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-card"],
                        ref: cardRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["orb-container"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["orb-with-image"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 300 300",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["orb-svg"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                            id: "orbNeonGradient",
                                                            cx: "50%",
                                                            cy: "50%",
                                                            r: "50%",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "0%",
                                                                    stopColor: "#ffffff",
                                                                    stopOpacity: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "25%",
                                                                    stopColor: "#33cc66",
                                                                    stopOpacity: "0.7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "50%",
                                                                    stopColor: "#3399ff",
                                                                    stopOpacity: "0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "75%",
                                                                    stopColor: "#996633",
                                                                    stopOpacity: "0.3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "100%",
                                                                    stopColor: "#000000",
                                                                    stopOpacity: "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                            id: "glow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                                    stdDeviation: "12",
                                                                    result: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "blur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "SourceGraphic"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                            lineNumber: 117,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orbRotate,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orbBreath,
                                                        cx: "150",
                                                        cy: "150",
                                                        r: "70",
                                                        fill: "url(#orbNeonGradient)",
                                                        filter: "url(#glow)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "120,70 180,70 150,50",
                                                            fill: "#222222",
                                                            stroke: "#000000",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "140",
                                                            y: "70",
                                                            width: "20",
                                                            height: "10",
                                                            fill: "#222222"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "160",
                                                            y1: "70",
                                                            x2: "160",
                                                            y2: "90",
                                                            stroke: "#FFD700",
                                                            strokeWidth: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "160",
                                                            cy: "90",
                                                            r: "2",
                                                            fill: "#ffffff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/icons/OEH_logo.png",
                                            alt: "OEH Logo",
                                            width: 220,
                                            height: 180,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["orb-side-img"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/AuthPage.jsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-tabs"],
                                children: [
                                    [
                                        "login",
                                        "signup",
                                        "reset"
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: `tab-${tab}`,
                                            // Apply 'active' class if this tab is the activeTab
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabItem} ${activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                                            // Set this tab as active when clicked
                                            onClick: ()=>setActiveTab(tab),
                                            children: tab.charAt(0).toUpperCase() + tab.slice(1)
                                        }, tab, false, {
                                            fileName: "[project]/src/app/auth/AuthPage.jsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider,
                                        ref: sliderRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/auth/AuthPage.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormLogin, {
                                active: activeTab === "login",
                                loading: loading.login,
                                showPassword: showPassword,
                                setShowPassword: setShowPassword,
                                handleSubmit: handleSubmit
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/AuthPage.jsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSignup, {
                                active: activeTab === "signup",
                                loading: loading.signup,
                                showPassword: showPassword,
                                setShowPassword: setShowPassword,
                                handleSubmit: handleSubmit
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/AuthPage.jsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormReset, {
                                active: activeTab === "reset",
                                loading: loading.reset,
                                handleSubmit: handleSubmit
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/AuthPage.jsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/AuthPage.jsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/AuthPage.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this));
}
// -- FormLogin Component --
// Separate component for the Login form
const FormLogin = ({ active, loading, showPassword, setShowPassword, handleSubmit })=>// The form element. 'visible' class is added when 'active' is true.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-form"]} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : ""}`,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["form-title"],
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        placeholder: " ",
                        name: "identifier"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 209,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Email or Username"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 210,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 211,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/user-icon.png",
                        alt: "user icon",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["user-icon"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 212,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 208,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: showPassword.login ? "text" : "password",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 217,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 218,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 219,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: showPassword.login ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png",
                        alt: "toggle password",
                        width: 35,
                        height: 20,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-icon"],
                        // On click, toggle the 'login' property in the showPassword state
                        onClick: ()=>setShowPassword((prev)=>({
                                    ...prev,
                                    login: !prev.login
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 221,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 215,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["checkbox-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        id: "rememberMe"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 233,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["checkbox-label"],
                        children: "Remember Me"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 234,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 232,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingButton, {
                loading: loading,
                text: "Login"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 237,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/AuthPage.jsx",
        lineNumber: 205,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// -- FormSignup Component --
// Separate component for the Sign Up form
const FormSignup = ({ active, loading, showPassword, setShowPassword, handleSubmit })=>// The form element. 'visible' class is added when 'active' is true.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-form"]} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : ""}`,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["form-title"],
                children: "Sign Up"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 246,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 249,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Username"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 250,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 251,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/user-icon.png",
                        alt: "user icon",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["user-icon"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 252,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 248,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 256,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 257,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 258,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/email-icon.png",
                        alt: "email icon",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["email-icon"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 259,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 255,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: showPassword.signup.password ? "text" : "password",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 264,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 265,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 266,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: showPassword.signup.password ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png",
                        alt: "toggle password",
                        width: 35,
                        height: 20,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-icon"],
                        // On click, toggle the 'signup.password' property
                        onClick: ()=>setShowPassword((prev)=>({
                                    ...prev,
                                    signup: {
                                        ...prev.signup,
                                        password: !prev.signup.password
                                    }
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 268,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 262,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: showPassword.signup.confirm ? "text" : "password",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 286,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Confirm Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 287,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 288,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: showPassword.signup.confirm ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png",
                        alt: "toggle password",
                        width: 35,
                        height: 20,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-icon"],
                        // On click, toggle the 'signup.confirm' property
                        onClick: ()=>setShowPassword((prev)=>({
                                    ...prev,
                                    signup: {
                                        ...prev.signup,
                                        confirm: !prev.signup.confirm
                                    }
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 290,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 284,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingButton, {
                loading: loading,
                text: "Sign Up"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 306,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/AuthPage.jsx",
        lineNumber: 245,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// -- FormReset Component --
// Separate component for the Reset Password form
const FormReset = ({ active, loading, handleSubmit })=>// The form element. 'visible' class is added when 'active' is true.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["auth-form"]} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : ""}`,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["form-title"],
                children: "Reset Password"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 315,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["input-group"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        required: true,
                        placeholder: " "
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 318,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 319,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underline
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 320,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/email-icon.png",
                        alt: "email icon",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["email-icon"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/AuthPage.jsx",
                        lineNumber: 321,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 317,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingButton, {
                loading: loading,
                text: "Send Reset Link"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 324,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/AuthPage.jsx",
        lineNumber: 314,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// -- LoadingButton Component --
// A reusable component for a button that shows a loading state
const LoadingButton = ({ loading, text })=>{
    // State to control *when* the GIF appears.
    const [showGif, setShowGif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // This effect manages the loading GIF's appearance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        // If loading starts
        // Wait 200ms before showing the GIF. This prevents flashing on fast loads.
        if (loading) timer = setTimeout(()=>setShowGif(true), 200);
        else setShowGif(false);
        // Cleanup function: clear the timer if the component unmounts or 'loading' changes
        return ()=>clearTimeout(timer);
    }, [
        loading
    ]); // Run this effect whenever the 'loading' prop changes
    return(// Wrapper div to position the button and GIF
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["submit-btn-wrapper"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                // Apply 'fade-out' class when loading, 'fade-in' when not
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["submit-btn"]} ${loading ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["fade-out"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["fade-in"]}`,
                // Disable the button while loading
                disabled: loading,
                children: [
                    text,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 350,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showGif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["loading-gif"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/infinite_loading.gif",
                    alt: "loading"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/AuthPage.jsx",
                    lineNumber: 362,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/auth/AuthPage.jsx",
                lineNumber: 361,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/AuthPage.jsx",
        lineNumber: 348,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
}),
"[project]/src/app/components/ClientGate.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ClientGate({ children }) {
    // This tracks whether the component has successfully mounted on the client.
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        //Set the 'ready' state to 'true'. This signals that we are safely on the client and post-hydration.
        setReady(true);
    }, []); // The empty array ensures this effect runs only once.
    // This is the logic that runs during Server-Side Rendering (SSR) and during the initial client-side render (hydration).
    if (!ready) {
        // The user sees nothing, but the HTML structure is consistent.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                visibility: "hidden"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/components/ClientGate.jsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    // the *actual* children, which can be safely rendered on the client.
    return children;
}
}),
];

//# sourceMappingURL=src_app_b7177bc4._.js.map