(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/PageTransition.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function PageTransition(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_c = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ranking/ranking.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ranking-module__fBvUNa__active",
  "avatarDecoration": "ranking-module__fBvUNa__avatarDecoration",
  "avatarWrapper": "ranking-module__fBvUNa__avatarWrapper",
  "bar1": "ranking-module__fBvUNa__bar1",
  "bar2": "ranking-module__fBvUNa__bar2",
  "bar3": "ranking-module__fBvUNa__bar3",
  "bronze": "ranking-module__fBvUNa__bronze",
  "bronzeDecoration": "ranking-module__fBvUNa__bronzeDecoration",
  "container": "ranking-module__fBvUNa__container",
  "fadeIn": "ranking-module__fBvUNa__fadeIn",
  "floatParticle": "ranking-module__fBvUNa__floatParticle",
  "gold": "ranking-module__fBvUNa__gold",
  "goldDecoration": "ranking-module__fBvUNa__goldDecoration",
  "gradientMove": "ranking-module__fBvUNa__gradientMove",
  "hoverCard": "ranking-module__fBvUNa__hoverCard",
  "hoverCardAvatar": "ranking-module__fBvUNa__hoverCardAvatar",
  "hoverCardAvatarDecoration": "ranking-module__fBvUNa__hoverCardAvatarDecoration",
  "hoverCardAvatarPlaceholder": "ranking-module__fBvUNa__hoverCardAvatarPlaceholder",
  "hoverCardAvatarSection": "ranking-module__fBvUNa__hoverCardAvatarSection",
  "hoverCardAvatarWrapper": "ranking-module__fBvUNa__hoverCardAvatarWrapper",
  "hoverCardBio": "ranking-module__fBvUNa__hoverCardBio",
  "hoverCardBody": "ranking-module__fBvUNa__hoverCardBody",
  "hoverCardHeaderBackground": "ranking-module__fBvUNa__hoverCardHeaderBackground",
  "hoverCardName": "ranking-module__fBvUNa__hoverCardName",
  "hoverCardStatItem": "ranking-module__fBvUNa__hoverCardStatItem",
  "hoverCardStatLabel": "ranking-module__fBvUNa__hoverCardStatLabel",
  "hoverCardStatValue": "ranking-module__fBvUNa__hoverCardStatValue",
  "hoverCardStats": "ranking-module__fBvUNa__hoverCardStats",
  "hoverCardUsername": "ranking-module__fBvUNa__hoverCardUsername",
  "hoverCardViewProfileBtn": "ranking-module__fBvUNa__hoverCardViewProfileBtn",
  "imageText": "ranking-module__fBvUNa__imageText",
  "main": "ranking-module__fBvUNa__main",
  "mainContent": "ranking-module__fBvUNa__mainContent",
  "menuBtn": "ranking-module__fBvUNa__menuBtn",
  "menuLinks": "ranking-module__fBvUNa__menuLinks",
  "navLink": "ranking-module__fBvUNa__navLink",
  "particle": "ranking-module__fBvUNa__particle",
  "particles": "ranking-module__fBvUNa__particles",
  "rank": "ranking-module__fBvUNa__rank",
  "rankCell": "ranking-module__fBvUNa__rankCell",
  "rankingTable": "ranking-module__fBvUNa__rankingTable",
  "sidebar": "ranking-module__fBvUNa__sidebar",
  "silver": "ranking-module__fBvUNa__silver",
  "silverDecoration": "ranking-module__fBvUNa__silverDecoration",
  "timeCell": "ranking-module__fBvUNa__timeCell",
  "title": "ranking-module__fBvUNa__title",
  "toggleBtn": "ranking-module__fBvUNa__toggleBtn",
  "userAvatar": "ranking-module__fBvUNa__userAvatar",
  "userAvatarPlaceholder": "ranking-module__fBvUNa__userAvatarPlaceholder",
  "userCell": "ranking-module__fBvUNa__userCell",
});
}),
"[project]/src/app/ranking/RankPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RankingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PageTransition.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/ranking/ranking.module.css [app-client] (css module)"); // Create your own CSS
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// --- Mock Data ---
// A mock database of user information. In a real app, this would be fetched.
const USERS_DATA = {
    User1: {
        name: "User1",
        username: "user_01",
        email: "user1@example.com",
        joined: "Nov 2, 2025",
        bio: "A passionate learner and explorer."
    },
    User2: {
        name: "User2",
        username: "user_02",
        email: "user2@example.com",
        joined: "Nov 2, 2025",
        bio: "Try to reach the top."
    },
    User3: {
        name: "User3",
        username: "user_03",
        email: "user3@example.com",
        joined: "Nov 3, 2025",
        bio: "Be the best."
    },
    User4: {
        name: "User4",
        username: "user_04",
        email: "user4@example.com",
        joined: "Nov 3, 2025",
        bio: "Likes to face challenges."
    }
};
// A mapping of ranking medals to their badge and decoration assets
const MEDAL_REWARDS = {
    gold: {
        badge: {
            id: "rank_gold_badge",
            url: "/medals/gold_medal.png",
            name: "Gold Medalist"
        },
        decoration: {
            id: "gold_decoration",
            name: "Gold Wreath",
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldDecoration
        }
    },
    silver: {
        badge: {
            id: "rank_silver_badge",
            url: "/medals/silver_medal.png",
            name: "Silver Medalist"
        },
        decoration: {
            id: "silver_decoration",
            name: "Silver Wreath",
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silverDecoration
        }
    },
    bronze: {
        badge: {
            id: "rank_bronze_badge",
            url: "/medals/bronze_medal.png",
            name: "Bronze Medalist"
        },
        decoration: {
            id: "bronze_decoration",
            name: "Bronze Wreath",
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronzeDecoration
        }
    }
};
// --- UserHoverCard Component ---
/**
 * A small popup card that shows detailed user info on hover.
 * This component is displayed using CSS when hovering over a user row.
 * @param {object} props - Component props.
 * @param {object} props.user - The user object to display.
 * @param {function} props.onViewProfile - Function to call when the card is clicked.
 */ function UserHoverCard(param) {
    let { user, position, onViewProfile } = param;
    // Helper function to format total seconds into "Xh Ym"
    const formatTime = (totalSeconds)=>{
        if (!totalSeconds) totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        return "".concat(hours, "h ").concat(minutes, "m");
    };
    // Helper function to get the CSS class for a user's equipped decoration
    const getDecorationClass = (decorationId)=>{
        if (decorationId === "gold_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldDecoration;
        if (decorationId === "silver_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silverDecoration;
        if (decorationId === "bronze_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronzeDecoration;
        return '';
    };
    // Render the hover card
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCard,
        // This onClick handler allows the *card itself* to be clicked to view the profile
        onClick: (e)=>onViewProfile(e, user.username),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardHeaderBackground
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardAvatarSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardAvatarWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardAvatarDecoration, " ").concat(getDecorationClass(user.equippedDecoration))
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: user.avatar,
                            alt: user.username,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardAvatar
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardAvatarPlaceholder,
                            children: user.username.charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ranking/RankPage.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardName,
                        children: user.name || user.username
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardUsername,
                        children: [
                            "@",
                            user.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardBio,
                        children: user.bio || "No bio available."
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStats,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatLabel,
                                        children: "Learning Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatValue,
                                        children: formatTime(user.totalSeconds)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatLabel,
                                        children: "Achievements"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatValue,
                                        children: user.badgeCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatLabel,
                                        children: "Joined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverCardStatValue,
                                        children: user.joined
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/RankPage.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c = UserHoverCard;
function RankingPage() {
    _s();
    // State to store the calculated and sorted list of users
    const [rankings, setRankings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for the sidebar (open/closed)
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for the background particles
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Initialize Next.js router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    ;
    // Data for the sidebar menu
    const menuItemsPrimary = [
        {
            label: "Home",
            icon: "/icons/home.png",
            path: "/home"
        },
        {
            label: "Profile",
            icon: "/icons/user.png",
            path: "/profile"
        },
        {
            label: "Ranking",
            icon: "/icons/ranking.png",
            path: "/ranking"
        },
        {
            label: "Logout",
            icon: "/icons/logout.png",
            path: "/auth"
        }
    ];
    // This useEffect runs once on mount to create background particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RankingPage.useEffect": ()=>{
            const baseParticles = [];
            // Add random properties to each particle
            const randomizedParticles = baseParticles.map({
                "RankingPage.useEffect.randomizedParticles": (p)=>({
                        ...p,
                        size: 5 + Math.random() * 15,
                        duration: 15 + Math.random() * 15,
                        color: "rgba(0,0,0,".concat(0.1 + Math.random() * 0.3, ")")
                    })
            }["RankingPage.useEffect.randomizedParticles"]);
            setParticles(randomizedParticles);
        }
    }["RankingPage.useEffect"], []); // The empty array `[]` ensures this runs only once
    // This useEffect runs once on mount to calculate the rankings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RankingPage.useEffect": ()=>{
            // 1. Load all necessary data from localStorage
            const timeData = JSON.parse(localStorage.getItem("learningTime") || "{}");
            const progressData = JSON.parse(localStorage.getItem("courseProgress") || "{}");
            const avatarData = JSON.parse(localStorage.getItem("userAvatars") || "{}");
            const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
            // 2. Create the ranking array by mapping over the 'timeData'
            const rankingArray = Object.entries(timeData).map({
                "RankingPage.useEffect.rankingArray": (param)=>{
                    let [username, totalSeconds] = param;
                    // For each user, assemble a complete object with all their info
                    const profile = USERS_DATA[username] || {};
                    const userProgress = progressData[username] || {};
                    const userDecorations = decorationData[username] || {};
                    // Count how many badges the user has earned
                    let badgeCount = 0;
                    Object.keys(userProgress).forEach({
                        "RankingPage.useEffect.rankingArray": (key)=>{
                            if (userProgress[key].badgeEarned) {
                                badgeCount++;
                            }
                        }
                    }["RankingPage.useEffect.rankingArray"]);
                    // Return the final object for this user
                    return {
                        name: profile.name,
                        username,
                        totalSeconds,
                        avatar: avatarData[username] || null,
                        equippedDecoration: userDecorations.equipped || null,
                        bio: profile.bio || "",
                        joined: profile.joined || "N/A",
                        badgeCount: badgeCount
                    };
                }
            }["RankingPage.useEffect.rankingArray"])// 3. Sort the array by 'totalSeconds' in descending order (highest first)
            .sort({
                "RankingPage.useEffect.rankingArray": (a, b)=>b.totalSeconds - a.totalSeconds
            }["RankingPage.useEffect.rankingArray"]);
            // 4. Save the final sorted array to the state
            setRankings(rankingArray);
            // --- 5. Award/Remove Medals based on the new ranking ---
            // Create deep copies of the data to modify
            const newProgressData = JSON.parse(JSON.stringify(progressData));
            const newDecorationData = JSON.parse(JSON.stringify(decorationData));
            // Get the top 3 users and the order of medals
            const top3 = rankingArray.slice(0, 3);
            const medalOrder = [
                MEDAL_REWARDS.gold,
                MEDAL_REWARDS.silver,
                MEDAL_REWARDS.bronze
            ];
            // Create a Set for fast lookup of who is in the top 3
            const rankedUsernames = new Set(top3.map({
                "RankingPage.useEffect": (user)=>user.username
            }["RankingPage.useEffect"]));
            // First, loop through *all* users and *remove* medals if they are NOT in the top 3
            Object.keys(newProgressData).forEach({
                "RankingPage.useEffect": (username)=>{
                    // Create a default decoration object if one doesn't exist
                    if (!newDecorationData[username]) newDecorationData[username] = {
                        unlocked: [],
                        equipped: null
                    };
                    // If this user is NOT in the top 3...
                    if (!rankedUsernames.has(username)) {
                        // ...loop through all possible medal rewards...
                        Object.values(MEDAL_REWARDS).forEach({
                            "RankingPage.useEffect": (reward)=>{
                                // ...and remove their medal badge from progress data
                                if (newProgressData[username] && newProgressData[username][reward.badge.id]) {
                                    delete newProgressData[username][reward.badge.id];
                                }
                                // ...and remove their medal decoration from the unlocked list
                                const decIndex = newDecorationData[username].unlocked.indexOf(reward.decoration.id);
                                if (decIndex > -1) {
                                    newDecorationData[username].unlocked.splice(decIndex, 1);
                                }
                                // ...and unequip the decoration if they had it on
                                if (newDecorationData[username].equipped === reward.decoration.id) {
                                    newDecorationData[username].equipped = null;
                                }
                            }
                        }["RankingPage.useEffect"]);
                    }
                }
            }["RankingPage.useEffect"]);
            // Second, loop through the *top 3* and *award* them their medals
            top3.forEach({
                "RankingPage.useEffect": (user, index)=>{
                    const username = user.username;
                    const reward = medalOrder[index]; // 0=gold, 1=silver, 2=bronze
                    // Ensure their progress/decoration objects exist
                    if (!newProgressData[username]) newProgressData[username] = {};
                    if (!newDecorationData[username]) newDecorationData[username] = {
                        unlocked: [],
                        equipped: null
                    };
                    // Give them the badge
                    newProgressData[username][reward.badge.id] = {
                        badgeEarned: reward.badge.url
                    };
                    // Add the decoration to their "unlocked" list if it's not already there
                    if (!newDecorationData[username].unlocked.includes(reward.decoration.id)) {
                        newDecorationData[username].unlocked.push(reward.decoration.id);
                    }
                    // Automatically equip the medal decoration
                    newDecorationData[username].equipped = reward.decoration.id;
                }
            }["RankingPage.useEffect"]);
            // 6. Save the updated progress and decoration data back to localStorage
            localStorage.setItem("courseProgress", JSON.stringify(newProgressData));
            localStorage.setItem("userDecorations", JSON.stringify(newDecorationData));
        }
    }["RankingPage.useEffect"], []); // The empty array `[]` ensures this runs only once
    // Helper function to format seconds into "Xh Ym"
    const formatTime = (totalSeconds)=>{
        if (!totalSeconds) totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        return "".concat(hours, "h ").concat(minutes, "m");
    };
    // Helper function to get the CSS class for a decoration
    const getDecorationClass = (decorationId)=>{
        if (decorationId === "gold_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldDecoration;
        if (decorationId === "silver_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silverDecoration;
        if (decorationId === "bronze_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronzeDecoration;
        return ''; // No decoration
    };
    // This function is called when a user's name or avatar is clicked
    const handleViewProfile = (e, username)=>{
        if (e) e.preventDefault(); // Stop any default link behavior
        // Store the username of the profile we want to view in localStorage
        localStorage.setItem("viewing_profile", username);
        // Navigate to the profile page
        router.push('/profile');
    };
    // --- Render the component's JSX (HTML) ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar, " ").concat(sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageText,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/OEH_logo.png",
                                        alt: "OEH Logo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                                        children: "Open Education Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleBtn, " ").concat(sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                                onClick: ()=>setSidebarOpen(!sidebarOpen),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar3
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLinks,
                        children: menuItemsPrimary.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuBtn,
                                    onClick: ()=>router.push(item.path),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.icon,
                                            alt: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/RankPage.jsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, item.label, false, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particles,
                children: particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle,
                        style: {
                            top: p.top,
                            left: p.left,
                            width: "".concat(p.size, "px"),
                            height: "".concat(p.size, "px"),
                            animationDuration: "".concat(p.duration, "s"),
                            backgroundColor: p.color
                        }
                    }, i, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    rankings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No learning records yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this) : // If yes, render the table
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rankingTable,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Rank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "User"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Total Learning Time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ranking/RankPage.jsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ranking/RankPage.jsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: rankings.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rankCell,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "".// Apply special CSS classes for the top 3
                                                    concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rank, " ").concat(index === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gold : index === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silver : index === 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronze : ''),
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrapper,
                                                        onClick: (e)=>handleViewProfile(e, user.username),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarDecoration, " ").concat(getDecorationClass(user.equippedDecoration))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                                lineNumber: 380,
                                                                columnNumber: 23
                                                            }, this),
                                                            user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: user.avatar,
                                                                alt: user.username,
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userAvatar
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                                lineNumber: 382,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userAvatarPlaceholder,
                                                                children: user.username.charAt(0).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                                lineNumber: 384,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onClick: (e)=>handleViewProfile(e, user.username),
                                                        children: user.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserHoverCard, {
                                                        user: user,
                                                        onViewProfile: handleViewProfile
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                        lineNumber: 393,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ranking$2f$ranking$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeCell,
                                                children: formatTime(user.totalSeconds)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, user.username, true, {
                                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/ranking/RankPage.jsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ranking/RankPage.jsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ranking/RankPage.jsx",
                lineNumber: 345,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ranking/RankPage.jsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
_s(RankingPage, "EhcjX8ZGAjQ/uY5Tr319/3u5sJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = RankingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "UserHoverCard");
__turbopack_context__.k.register(_c1, "RankingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ClientGate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientGate(param) {
    let { children } = param;
    _s();
    // This tracks whether the component has successfully mounted on the client.
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientGate.useEffect": ()=>{
            //Set the 'ready' state to 'true'. This signals that we are safely on the client and post-hydration.
            setReady(true);
        }
    }["ClientGate.useEffect"], []); // The empty array ensures this effect runs only once.
    // This is the logic that runs during Server-Side Rendering (SSR) and during the initial client-side render (hydration).
    if (!ready) {
        // The user sees nothing, but the HTML structure is consistent.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ClientGate, "KuazqYXqOk+6VRk8yHVvoClyoeE=");
_c = ClientGate;
var _c;
__turbopack_context__.k.register(_c, "ClientGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_4829bde9._.js.map