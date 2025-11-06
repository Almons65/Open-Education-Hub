(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/PageTransition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/PageTransition.js
__turbopack_context__.s([
    "default",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function PageTransition(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            },
            children: children
        }, ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable", false, {
            fileName: "[project]/src/app/components/PageTransition.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PageTransition.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PageTransition.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HomePage() {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const menuItemsPrimary = [
        {
            label: "Home",
            icon: "icons/home.png",
            path: "/home"
        },
        {
            label: "Profile",
            icon: "icons/user.png",
            path: "/profile"
        },
        {
            label: "Logout",
            icon: "icons/logout.png",
            path: "/"
        }
    ];
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        subject1: false,
        subject2: false,
        subject3: false,
        subject4: false,
        subject5: false,
        subject6: false
    });
    const courses = [
        {
            id: "AAA001",
            name: "Course a",
            difficulty: "Beginner",
            subjects: [
                "subject1"
            ]
        },
        {
            id: "AAA002",
            name: "Course b",
            difficulty: "Beginner",
            subjects: [
                "subject2"
            ]
        },
        {
            id: "BAA001",
            name: "Course c",
            difficulty: "Intermediate",
            subjects: [
                "subject3"
            ]
        },
        {
            id: "BBA001",
            name: "Course d",
            difficulty: "Advanced",
            subjects: [
                "subject4"
            ]
        },
        {
            id: "BBA002",
            name: "Course e",
            difficulty: "Intermediate",
            subjects: [
                "subject5"
            ]
        },
        {
            id: "CAA100",
            name: "Course f",
            difficulty: "Advanced",
            subjects: [
                "subject6"
            ]
        },
        {
            id: "EDD098",
            name: "Course g",
            difficulty: "Beginner",
            subjects: [
                "subject5"
            ]
        },
        {
            id: "DFE050",
            name: "Course h",
            difficulty: "Intermediate",
            subjects: [
                "subject1"
            ]
        },
        {
            id: "AAA003",
            name: "Course i",
            difficulty: "Intermediate",
            subjects: [
                "subject1"
            ]
        },
        {
            id: "AAA004",
            name: "Course j",
            difficulty: "Beginner",
            subjects: [
                "subject2"
            ]
        },
        {
            id: "BAA005",
            name: "Course k",
            difficulty: "Advanced",
            subjects: [
                "subject3"
            ]
        },
        {
            id: "BBA006",
            name: "Course l",
            difficulty: "Advanced",
            subjects: [
                "subject4"
            ]
        },
        {
            id: "BBA007",
            name: "Course m",
            difficulty: "Intermediate",
            subjects: [
                "subject5"
            ]
        },
        {
            id: "CAA200",
            name: "Course n",
            difficulty: "Advanced",
            subjects: [
                "subject6"
            ]
        },
        {
            id: "EDD099",
            name: "Course o",
            difficulty: "Beginner",
            subjects: [
                "subject5"
            ]
        },
        {
            id: "DFE051",
            name: "Course p",
            difficulty: "Intermediate",
            subjects: [
                "subject1"
            ]
        },
        {
            id: "CAA201",
            name: "Course q",
            difficulty: "Advanced",
            subjects: [
                "subject6"
            ]
        },
        {
            id: "EDD100",
            name: "Course r",
            difficulty: "Beginner",
            subjects: [
                "subject5"
            ]
        },
        {
            id: "DFE052",
            name: "Course s",
            difficulty: "Intermediate",
            subjects: [
                "subject1"
            ]
        },
        {
            id: "DFE053",
            name: "Course t",
            difficulty: "Advanced",
            subjects: [
                "subject1"
            ]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const baseParticles = [
                {
                    top: "10%",
                    left: "20%"
                },
                {
                    top: "30%",
                    left: "70%"
                },
                {
                    top: "50%",
                    left: "40%"
                },
                {
                    top: "70%",
                    left: "15%"
                },
                {
                    top: "80%",
                    left: "80%"
                },
                {
                    top: "20%",
                    left: "50%"
                }
            ];
            const randomizedParticles = baseParticles.map({
                "HomePage.useEffect.randomizedParticles": (p)=>({
                        ...p,
                        size: 5 + Math.random() * 15,
                        duration: 15 + Math.random() * 15,
                        color: "rgba(0,0,0,".concat(0.1 + Math.random() * 0.3, ")")
                    })
            }["HomePage.useEffect.randomizedParticles"]);
            setParticles(randomizedParticles);
        }
    }["HomePage.useEffect"], []);
    const filteredCourses = courses.filter((course)=>{
        const matchesSearch = course.id.toLowerCase().includes(search.toLowerCase()) || course.name.toLowerCase().includes(search.toLowerCase());
        const matchesDifficulty = difficulty === "" || course.difficulty === difficulty;
        const selectedSubjects = Object.keys(subjects).filter((s)=>subjects[s]);
        const matchesSubjects = selectedSubjects.length === 0 || selectedSubjects.some((s)=>course.subjects.includes(s));
        return matchesSearch && matchesDifficulty && matchesSubjects;
    });
    const handleSubjectChange = (key)=>{
        setSubjects({
            ...subjects,
            [key]: !subjects[key]
        });
    };
    const clearFilters = ()=>{
        setSearch("");
        setDifficulty("");
        setSubjects({
            subject1: false,
            subject2: false,
            subject3: false,
            subject4: false,
            subject5: false,
            subject6: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sidebar ".concat(sidebarOpen ? "open" : "close"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/OEH_logo.png",
                                                alt: "CodePen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home/page.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 112,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text header-text",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "main",
                                                children: "Open Education Hub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home/page.jsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 115,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 111,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toggle-btn ".concat(sidebarOpen ? "open" : "close"),
                                    onClick: ()=>setSidebarOpen(!sidebarOpen),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bar bar1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 123,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bar bar2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 124,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bar bar3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 125,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 119,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 110,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "menu-links",
                                children: menuItemsPrimary.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-link",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "menu-btn",
                                            onClick: ()=>router.push(item.path),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.icon,
                                                    alt: item.label,
                                                    className: "menu-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home/page.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home/page.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 9
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 132,
                                        columnNumber: 7
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.jsx",
                                lineNumber: 130,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 129,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "particles",
                            children: particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "particle",
                                    style: {
                                        top: p.top,
                                        left: p.left,
                                        width: "".concat(p.size, "px"),
                                        height: "".concat(p.size, "px"),
                                        animationDuration: "".concat(p.duration, "s"),
                                        backgroundColor: p.color
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 150,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "course-filter",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "course id/name",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 170,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "search-btn",
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "clear-btn",
                                            onClick: clearFilters,
                                            children: "Clear"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 177,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "diff",
                                            children: [
                                                "Difficulty Level:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DifficultySelect, {
                                                    value: difficulty,
                                                    onChange: setDifficulty
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home/page.jsx",
                                                    lineNumber: 181,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 179,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 169,
                                    columnNumber: 10
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "subjects",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "subjects_label",
                                            children: "Subjects:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 186,
                                            columnNumber: 13
                                        }, this),
                                        Object.keys(subjects).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: subjects[key],
                                                        onChange: ()=>handleSubjectChange(key)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home/page.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    key
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/src/app/home/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 185,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 168,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "course-count",
                            children: [
                                filteredCourses.length,
                                " courses in total"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 200,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "course-grid",
                            children: filteredCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "course-card",
                                    onClick: ()=>alert("Opening ".concat(course.name)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "course-id",
                                            children: course.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "course-name",
                                            children: course.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tag ".concat(course.difficulty.toLowerCase()),
                                                    children: course.difficulty
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home/page.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this),
                                                course.subjects.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tag subject",
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/src/app/home/page.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, course.id, true, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/page.jsx",
                            lineNumber: 202,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 148,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.jsx",
            lineNumber: 107,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/home/page.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(HomePage, "Pxe8vN2Tr1qwiN/sP0yF+AxMbsc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomePage;
function DifficultySelect(param) {
    let { value, onChange } = param;
    _s1();
    const options = [
        "All",
        "Beginner",
        "Intermediate",
        "Advanced"
    ];
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelect = (option)=>{
        onChange(option === "All" ? "" : option);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "custom-select ".concat(open ? "open" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "selected",
                onClick: ()=>setOpen(!open),
                children: [
                    value || "All",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "arrow ".concat(open ? "up" : "down"),
                        children: "▴"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/page.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/page.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "options",
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "option",
                        onClick: ()=>handleSelect(opt),
                        children: opt
                    }, opt, false, {
                        fileName: "[project]/src/app/home/page.jsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/home/page.jsx",
                lineNumber: 240,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home/page.jsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s1(DifficultySelect, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = DifficultySelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomePage");
__turbopack_context__.k.register(_c1, "DifficultySelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ddd6e567._.js.map