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
"[project]/src/app/profile/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "achievementContainer": "profile-module__5FeCNW__achievementContainer",
  "achievementTitle": "profile-module__5FeCNW__achievementTitle",
  "active": "profile-module__5FeCNW__active",
  "arrow": "profile-module__5FeCNW__arrow",
  "arrowOpen": "profile-module__5FeCNW__arrowOpen",
  "avatarDecoration": "profile-module__5FeCNW__avatarDecoration",
  "avatarOverlay": "profile-module__5FeCNW__avatarOverlay",
  "avatarWrapper": "profile-module__5FeCNW__avatarWrapper",
  "backToProfileBtn": "profile-module__5FeCNW__backToProfileBtn",
  "badgeCard": "profile-module__5FeCNW__badgeCard",
  "badgeGrid": "profile-module__5FeCNW__badgeGrid",
  "badgeImage": "profile-module__5FeCNW__badgeImage",
  "badgeLabel": "profile-module__5FeCNW__badgeLabel",
  "bar1": "profile-module__5FeCNW__bar1",
  "bar2": "profile-module__5FeCNW__bar2",
  "bar3": "profile-module__5FeCNW__bar3",
  "bronzeDecoration": "profile-module__5FeCNW__bronzeDecoration",
  "cancelBtn": "profile-module__5FeCNW__cancelBtn",
  "decorationActive": "profile-module__5FeCNW__decorationActive",
  "decorationName": "profile-module__5FeCNW__decorationName",
  "decorationOption": "profile-module__5FeCNW__decorationOption",
  "decorationPreview": "profile-module__5FeCNW__decorationPreview",
  "decorationPreviewInner": "profile-module__5FeCNW__decorationPreviewInner",
  "decorationSelector": "profile-module__5FeCNW__decorationSelector",
  "dropBtn": "profile-module__5FeCNW__dropBtn",
  "dropBtnLeft": "profile-module__5FeCNW__dropBtnLeft",
  "dropContent": "profile-module__5FeCNW__dropContent",
  "dropContentOpen": "profile-module__5FeCNW__dropContentOpen",
  "dropIcon": "profile-module__5FeCNW__dropIcon",
  "dropItem": "profile-module__5FeCNW__dropItem",
  "dropLabel": "profile-module__5FeCNW__dropLabel",
  "dropdown": "profile-module__5FeCNW__dropdown",
  "dropdownGroup": "profile-module__5FeCNW__dropdownGroup",
  "editBtn": "profile-module__5FeCNW__editBtn",
  "editForm": "profile-module__5FeCNW__editForm",
  "emailIcon": "profile-module__5FeCNW__emailIcon",
  "emailWrapper": "profile-module__5FeCNW__emailWrapper",
  "floatParticle": "profile-module__5FeCNW__floatParticle",
  "formActions": "profile-module__5FeCNW__formActions",
  "goldDecoration": "profile-module__5FeCNW__goldDecoration",
  "gradientMove": "profile-module__5FeCNW__gradientMove",
  "headerLabel": "profile-module__5FeCNW__headerLabel",
  "imageText": "profile-module__5FeCNW__imageText",
  "main": "profile-module__5FeCNW__main",
  "mainContent": "profile-module__5FeCNW__mainContent",
  "menuBtn": "profile-module__5FeCNW__menuBtn",
  "menuLinks": "profile-module__5FeCNW__menuLinks",
  "navLink": "profile-module__5FeCNW__navLink",
  "particle": "profile-module__5FeCNW__particle",
  "particles": "profile-module__5FeCNW__particles",
  "percentLabel": "profile-module__5FeCNW__percentLabel",
  "profileActions": "profile-module__5FeCNW__profileActions",
  "profileAvatarImage": "profile-module__5FeCNW__profileAvatarImage",
  "profileAvatarPlaceholder": "profile-module__5FeCNW__profileAvatarPlaceholder",
  "profileBio": "profile-module__5FeCNW__profileBio",
  "profileContainer": "profile-module__5FeCNW__profileContainer",
  "profileEmail": "profile-module__5FeCNW__profileEmail",
  "profileHeader": "profile-module__5FeCNW__profileHeader",
  "profileInfoWrapper": "profile-module__5FeCNW__profileInfoWrapper",
  "profileLayout": "profile-module__5FeCNW__profileLayout",
  "profileName": "profile-module__5FeCNW__profileName",
  "profileUsername": "profile-module__5FeCNW__profileUsername",
  "progressBar": "profile-module__5FeCNW__progressBar",
  "progressContainer": "profile-module__5FeCNW__progressContainer",
  "progressWrapper": "profile-module__5FeCNW__progressWrapper",
  "saveBtn": "profile-module__5FeCNW__saveBtn",
  "sidebar": "profile-module__5FeCNW__sidebar",
  "silverDecoration": "profile-module__5FeCNW__silverDecoration",
  "statBlock": "profile-module__5FeCNW__statBlock",
  "statItem": "profile-module__5FeCNW__statItem",
  "toggleBtn": "profile-module__5FeCNW__toggleBtn",
});
}),
"[project]/src/app/profile/ProfilePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PageTransition.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/profile/profile.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// --- Mock Data and Constants ---
// The username of the person currently logged in.
const LOGGED_IN_USERNAME = "User2";
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
// --- Reusable Dropdown Component ---
/**
 * A reusable dropdown component.
 * @param {object} props - Component props.
 * @param {string} props.label - The text to display on the dropdown button.
 * @param {string} props.icon - The path to the icon image.
 * @param {React.ReactNode} props.children - The content to show inside the dropdown.
 * @param {string} props.width - The CSS width of the component.
 * @param {function} props.onOpen - A callback function to run when the dropdown is opened.
 */ function Dropdown(param) {
    let { label, icon, children, width = "100%", onOpen } = param;
    _s();
    // State to track if the dropdown is open or closed
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ref to get a reference to the main dropdown <div>
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // This effect adds a global click listener to close the dropdown
    // when the user clicks *outside* of it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            function onDocClick(e) {
                // If the ref is set and the click was *not* inside the ref's element
                if (ref.current && !ref.current.contains(e.target)) {
                    setOpen(false); // Close the dropdown
                }
            }
            // Add the listener
            document.addEventListener("mousedown", onDocClick);
            // Cleanup: Remove the listener when the component unmounts
            return ({
                "Dropdown.useEffect": ()=>document.removeEventListener("mousedown", onDocClick)
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], []);
    // Function to toggle the dropdown's open state
    const toggleDropdown = ()=>{
        const newOpen = !open;
        setOpen(newOpen);
        // If we are opening it and an 'onOpen' function was provided, call it
        if (newOpen && onOpen) {
            onOpen();
        }
    };
    // Render the dropdown
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
        ref: ref,
        style: {
            width
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropBtn,
                onClick: toggleDropdown,
                "aria-expanded": open,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropBtnLeft,
                        children: [
                            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: icon,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropIcon
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 75,
                                columnNumber: 20
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropLabel,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow, " ").concat(open ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowOpen : ""),
                        "aria-hidden": "true",
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropContent, " ").concat(open ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropContentOpen : ""),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/ProfilePage.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(Dropdown, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c = Dropdown;
// --- Profile Page Component ---
// A list of all courses, used to look up names and badge info
const courses = [
    {
        id: "AAA001",
        name: "Introduction to Programming",
        totalLectures: 3,
        badge: "/badges/ITP_badge.png",
        badgeName: "Python Pioneer"
    },
    {
        id: "AAA002",
        name: "Calculus 1",
        totalLectures: 3,
        badge: "/badges/Cal_Badge.png",
        badgeName: "Mathematical Master"
    },
    {
        id: "BAA001",
        name: "Electromagnetic Induction",
        totalLectures: 3,
        badge: "/badges/Electromag_Badge.png",
        badgeName: "Physics Phenom"
    },
    {
        id: "BBA001",
        name: "Introduction to Deep Learning",
        totalLectures: 3,
        badge: "/badges/ITDL_Badge.png",
        badgeName: "AI Technician"
    },
    {
        id: "BBA002",
        name: "Ecology",
        totalLectures: 3,
        badge: "/badges/Eco_Badge.png",
        badgeName: "Eco Explorer"
    },
    {
        id: "CAA100",
        name: "Electrodynamics",
        totalLectures: 3,
        badge: "/badges/ElectroDyn_Badge.png",
        badgeName: "Quantum Quester"
    }
];
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
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldDecoration
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
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silverDecoration
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
            styleClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronzeDecoration
        }
    }
};
function ProfilePage() {
    _s1();
    // Initialize Next.js router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // State for the sidebar (open/closed)
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for the background particles
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for tracking if the profile is in "edit mode"
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State to store the user's avatar (as a base64 Data URL)
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ref to access the hidden file input for changing the avatar
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for the user's list of favorite course IDs
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for the user's list of recently viewed course IDs
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for the user's earned badge objects { url, name }
    const [badges, setBadges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for the *entire* course progress object (for all users)
    const [courseProgress, setCourseProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // State for the user's total learning time in seconds
    const [learningTime, setLearningTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // State for the list of decoration IDs the user has unlocked
    const [unlockedDecorations, setUnlockedDecorations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for the currently equipped decoration ID
    const [equippedDecoration, setEquippedDecoration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // This state is crucial. It stores *which profile we are currently viewing*.
    // It starts as 'null' to indicate we haven't checked the URL yet.
    const [currentUsername, setCurrentUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for the static user data (name, bio, etc.)
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // State for the form data when in "edit mode"
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // This function calculates the user's earned badges from their progress
    // 'useCallback' memoizes the function so it doesn't change on every render,
    // making it safe to use in 'useEffect' dependency arrays.
    const updateEarnedBadges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfilePage.useCallback[updateEarnedBadges]": (currentProgress)=>{
            // Don't run if the user isn't set yet
            if (!currentUsername) return;
            const earnedBadges = [];
            // Get the progress for *this specific user*
            const userProgress = currentProgress[currentUsername] || {};
            // 1. Check for a badge for each *course*
            for (const course of courses){
                const progressData = userProgress[course.id];
                // If the user has progress data and their 'badgeEarned' property matches
                if (progressData && progressData.badgeEarned === course.badge) {
                    earnedBadges.push({
                        url: course.badge,
                        name: course.badgeName
                    });
                }
            }
            // 2. Check for a badge for each *ranking medal*
            for (const reward of Object.values(MEDAL_REWARDS)){
                const medalData = userProgress[reward.badge.id];
                // If the user has progress data and their 'badgeEarned' property matches
                if (medalData && medalData.badgeEarned === reward.badge.url) {
                    earnedBadges.push({
                        url: reward.badge.url,
                        name: reward.badge.name
                    });
                }
            }
            // Update the state with the final list of badges
            setBadges(earnedBadges);
        }
    }["ProfilePage.useCallback[updateEarnedBadges]"], [
        currentUsername
    ]); // This function will be remade if 'currentUsername' changes
    // A helper function to format total seconds into "Xh Ym" format
    const formatTime = (totalSeconds)=>{
        if (!totalSeconds) totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        return "".concat(hours, "h ").concat(minutes, "m");
    };
    // Get the URL search/query parameters
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // EFFECT 1: This effect runs ONCE on page load to determine *which user to display*.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            // Get the '?view=' parameter from the URL (e.g., "/profile?view=User1")
            const viewParam = searchParams.get("view");
            // If URL is "?view=me", load the logged-in user
            if (viewParam === "me") {
                setCurrentUsername(LOGGED_IN_USERNAME);
                return; // Stop here
            }
            // If URL has a specific username (e.g., "?view=User1"), load that user
            if (viewParam && viewParam !== "me") {
                setCurrentUsername(viewParam);
                return; // Stop here
            }
            // FALLBACK: If no '?view=' param, check localStorage (from Ranking page)
            const storedProfile = localStorage.getItem("viewing_profile");
            // Load the stored profile, or default to the logged-in user
            setCurrentUsername(storedProfile || LOGGED_IN_USERNAME);
        }
    }["ProfilePage.useEffect"], [
        searchParams
    ]); // This effect re-runs if the URL search params change
    // EFFECT 2: This effect loads all data *after* 'currentUsername' has been set.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
            if (!currentUsername) return;
            // --- Load all data from mock database and localStorage ---
            // 1. Load static user info (name, bio, etc.)
            const userInfo = USERS_DATA[currentUsername] || {
                name: "Guest",
                username: "guest",
                email: "",
                joined: "N/A",
                bio: ""
            };
            setUser(userInfo);
            setFormData(userInfo); // Pre-fill the edit form
            // 2. Load user's favorites
            let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
            if (Array.isArray(allFavorites)) {
                allFavorites = {};
            } // Fix old data format
            setFavorites(allFavorites[currentUsername] || []); // Get only this user's list
            // 3. Load user's history
            let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
            if (Array.isArray(allHistory)) {
                allHistory = {};
            } // Fix old data format
            setHistory(allHistory[currentUsername] || []); // Get only this user's list
            // 4. Load course progress and update badges
            const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
            setCourseProgress(savedProgress); // Save the *entire* progress object
            updateEarnedBadges(savedProgress); // Calculate badges from it
            // 5. Load learning time
            const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
            setLearningTime(savedTime[currentUsername] || 0); // Get only this user's time
            // 6. Load avatar
            const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
            setAvatar(savedAvatars[currentUsername] || null); // Get only this user's avatar
            // 7. Load decorations
            const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
            const userDecorations = decorationData[currentUsername] || {
                unlocked: [],
                equipped: null
            };
            setUnlockedDecorations(userDecorations.unlocked);
            setEquippedDecoration(userDecorations.equipped);
        }
    }["ProfilePage.useEffect"], [
        currentUsername,
        updateEarnedBadges
    ]); // Re-runs if 'currentUsername' changes
    // EFFECT 3: This effect sets up listeners to keep the page in sync with other tabs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            // Don't attach listeners if we don't know *which* user to listen for
            if (!currentUsername) return;
            // This function re-loads ALL data from localStorage
            const handleStorageAndFocus = {
                "ProfilePage.useEffect.handleStorageAndFocus": ()=>{
                    // (This is the same logic as EFFECT 2, just re-running to get fresh data)
                    let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
                    if (Array.isArray(allFavorites)) {
                        allFavorites = {};
                    }
                    setFavorites(allFavorites[currentUsername] || []);
                    let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
                    if (Array.isArray(allHistory)) {
                        allHistory = {};
                    }
                    setHistory(allHistory[currentUsername] || []);
                    const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
                    setCourseProgress(savedProgress);
                    updateEarnedBadges(savedProgress);
                    const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
                    setLearningTime(savedTime[currentUsername] || 0);
                    const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
                    setAvatar(savedAvatars[currentUsername] || null);
                    const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
                    const userDecorations = decorationData[currentUsername] || {
                        unlocked: [],
                        equipped: null
                    };
                    setUnlockedDecorations(userDecorations.unlocked);
                    setEquippedDecoration(userDecorations.equipped);
                }
            }["ProfilePage.useEffect.handleStorageAndFocus"];
            // Custom events dispatched by other components for instant updates
            const handleHistoryUpdated = {
                "ProfilePage.useEffect.handleHistoryUpdated": ()=>handleStorageAndFocus()
            }["ProfilePage.useEffect.handleHistoryUpdated"];
            const handleFavoritesUpdated = {
                "ProfilePage.useEffect.handleFavoritesUpdated": ()=>handleStorageAndFocus()
            }["ProfilePage.useEffect.handleFavoritesUpdated"];
            // Listen for 'storage' events (changes in other tabs)
            window.addEventListener("storage", handleStorageAndFocus);
            // Listen for 'focus' events (user clicking back to this tab)
            window.addEventListener("focus", handleStorageAndFocus);
            // Listen for our custom events
            window.addEventListener("favoritesUpdated", handleFavoritesUpdated);
            window.addEventListener("historyUpdated", handleHistoryUpdated);
            // Cleanup: Remove all listeners when the component unmounts
            return ({
                "ProfilePage.useEffect": ()=>{
                    window.removeEventListener("storage", handleStorageAndFocus);
                    window.removeEventListener("focus", handleStorageAndFocus);
                    window.removeEventListener("favoritesUpdated", handleFavoritesUpdated);
                    window.removeEventListener("historyUpdated", handleHistoryUpdated);
                }
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], [
        updateEarnedBadges,
        currentUsername
    ]); // Re-attach listeners if the user changes
    // Calculates progress for a course, pulling from the *correct user's* data
    const calculateProgress = (courseId)=>{
        if (!currentUsername) return 0; // Safety check
        const course = courses.find((course)=>course.id === courseId);
        const totalLectures = course ? course.totalLectures : 0;
        if (totalLectures === 0) return 0; // Prevent divide by zero
        // Get this user's progress from the main progress object
        const userProgress = courseProgress[currentUsername] || {};
        const courseData = userProgress[courseId] || {};
        const completedLectures = courseData.completedLectures || [];
        const progress = completedLectures.length / totalLectures * 100;
        return progress;
    };
    // EFFECT 4: This effect runs ONCE on mount to create background particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            const baseParticles = [];
            const randomizedParticles = baseParticles.map({
                "ProfilePage.useEffect.randomizedParticles": (p)=>({
                        ...p,
                        size: 5 + Math.random() * 15,
                        duration: 15 + Math.random() * 15,
                        color: "rgba(0,0,0,".concat(0.1 + Math.random() * 0.3, ")")
                    })
            }["ProfilePage.useEffect.randomizedParticles"]);
            setParticles(randomizedParticles);
        }
    }["ProfilePage.useEffect"], []); // The empty array `[]` ensures this runs only once
    // --- Event Handlers for Editing Profile ---
    // Called when "Edit Profile" is clicked
    const handleEditClick = ()=>{
        setFormData(user);
        setIsEditing(true);
    };
    // Called when "Cancel" is clicked
    const handleCancelClick = ()=>{
        setIsEditing(false);
    };
    // Called when "Save" is clicked
    const handleSaveClick = ()=>{
        // Merge the edited 'formData' into the 'user' object
        const updatedUser = {
            ...user,
            ...formData
        };
        setUser(updatedUser); // Update the state
        // In a real app, this would be an API call to a database.
        // Here, we just update the mock data object.
        USERS_DATA[currentUsername] = updatedUser;
        setIsEditing(false); // Exit edit mode
    };
    // Updates 'formData' state as the user types in an input
    const handleChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    // Called when a new avatar file is selected
    const handleAvatarChange = (e)=>{
        if (!currentUsername) return; // Safety check
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader(); // Use FileReader to read the file
            reader.onload = ()=>{
                // 'reader.result' is a base64 Data URL (e.g., "data:image/png;base64,...")
                const avatarDataUrl = reader.result;
                setAvatar(avatarDataUrl); // Update the UI
                // Save the avatar to localStorage under this user's name
                const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
                savedAvatars[currentUsername] = avatarDataUrl;
                localStorage.setItem("userAvatars", JSON.stringify(savedAvatars));
                // Dispatch a 'storage' event to notify other components/tabs
                window.dispatchEvent(new Event("storage"));
            };
            reader.readAsDataURL(file); // Start reading the file
        }
    };
    // --- End User Info Handlers ---
    // --- Decoration Handlers ---
    // Helper to get the CSS class for a decoration ID
    const getDecorationClass = (decorationId)=>{
        if (decorationId === "gold_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldDecoration;
        if (decorationId === "silver_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].silverDecoration;
        if (decorationId === "bronze_decoration") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bronzeDecoration;
        return ''; // Default: no class
    };
    // Helper to get the name (e.g., "Gold Wreath") for a decoration ID
    const getDecorationName = (decorationId)=>{
        for (const reward of Object.values(MEDAL_REWARDS)){
            if (reward.decoration.id === decorationId) return reward.decoration.name;
        }
        return "None";
    };
    // Called when a new decoration is selected in the edit form
    const handleEquipDecoration = (decorationId)=>{
        if (!currentUsername) return;
        // If "none" is clicked, set to null. Otherwise, use the ID.
        const newEquippedId = decorationId === "none" ? null : decorationId;
        setEquippedDecoration(newEquippedId); // Update the UI
        // Save the new equipped decoration to localStorage
        const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
        if (!decorationData[currentUsername]) {
            // Ensure the user's object exists
            decorationData[currentUsername] = {
                unlocked: [],
                equipped: null
            };
        }
        decorationData[currentUsername].equipped = newEquippedId;
        localStorage.setItem("userDecorations", JSON.stringify(decorationData));
        // Notify other components/tabs
        window.dispatchEvent(new Event("storage"));
    };
    // --- End Decoration Handlers ---
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
    // A boolean flag to check if we are viewing our *own* profile
    // This is used to show/hide the "Edit Profile" button, avatar change, etc.
    const isViewingOwnProfile = currentUsername === LOGGED_IN_USERNAME;
    // --- Loading State Render ---
    // If 'currentUsername' is still null, we are still waiting for EFFECT 1
    // to run and figure out who to load. Show a loading message.
    if (!currentUsername) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar, " ").concat(sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageText,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/icons/OEH_logo.png",
                                alt: "OEH Logo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            paddingTop: '100px',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#1a2c50'
                        },
                        children: "Loading profile..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                    lineNumber: 462,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profile/ProfilePage.jsx",
            lineNumber: 452,
            columnNumber: 7
        }, this);
    }
    // --- Main Page Render ---
    // This renders *after* 'currentUsername' is set and data has been loaded.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PageTransition$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            !isViewingOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backToProfileBtn,
                onClick: ()=>{
                    // When clicked, clear the 'viewing_profile' from localStorage
                    localStorage.removeItem("viewing_profile");
                    // And navigate back to our own profile URL
                    router.replace("/profile?view=me");
                },
                children: "← Back to My Profile"
            }, void 0, false, {
                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                lineNumber: 478,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar, " ").concat(sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageText,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/OEH_logo.png",
                                                alt: "OEH Logo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                                                children: "Open Education Hub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleBtn, " ").concat(sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar1
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar2
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar3
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLinks,
                                children: menuItemsPrimary.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuBtn,
                                            onClick: ()=>router.push(item.path),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.icon,
                                                    alt: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                    lineNumber: 514,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particles,
                                children: particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle,
                                        style: {
                                            top: p.top,
                                            left: p.left,
                                            width: "".concat(p.size, "px"),
                                            height: "".concat(p.size, "px"),
                                            animationDuration: "".concat(p.duration, "s"),
                                            backgroundColor: p.color
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileLayout,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfoWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLabel,
                                                        children: "USER CENTRE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrapper,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarDecoration, " ").concat(getDecorationClass(equippedDecoration))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 547,
                                                                columnNumber: 19
                                                            }, this),
                                                            avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: avatar,
                                                                alt: "Profile Avatar",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatarImage
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 550,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatarPlaceholder,
                                                                children: "AVATAR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 552,
                                                                columnNumber: 21
                                                            }, this),
                                                            isViewingOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOverlay,
                                                                onClick: ()=>{
                                                                    var _fileInputRef_current;
                                                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                                                },
                                                                children: "Change Avatar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this),
                                                            isViewingOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                ref: fileInputRef,
                                                                onChange: handleAvatarChange,
                                                                style: {
                                                                    display: "none"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 567,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 545,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, this),
                                            !isEditing ? // --- VIEW MODE ---
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileName,
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileUsername,
                                                        children: [
                                                            "@",
                                                            user.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBlock,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Total Learning Time:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learntime,
                                                                        children: formatTime(learningTime)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 587,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 585,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Member Since:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSince,
                                                                        children: user.joined
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 591,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 584,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBio,
                                                        children: user.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emailWrapper,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/icons/email-icon.png",
                                                                alt: "email icon",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emailIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 598,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileEmail,
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 599,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 597,
                                                        columnNumber: 19
                                                    }, this),
                                                    isViewingOwnProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileActions,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editBtn,
                                                            onClick: handleEditClick,
                                                            children: "Edit Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                            lineNumber: 605,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 604,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : // --- EDIT MODE ---
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editForm,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 613,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "name",
                                                                        value: formData.name,
                                                                        onChange: handleChange
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 613,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Bio"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        name: "bio",
                                                                        value: formData.bio,
                                                                        onChange: handleChange,
                                                                        rows: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 616,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        name: "email",
                                                                        value: formData.email,
                                                                        onChange: handleChange
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 619,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Avatar Decoration"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 625,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationSelector,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationOption, " ").concat(!equippedDecoration ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationActive : ''),
                                                                                onClick: ()=>handleEquipDecoration("none"),
                                                                                type: "button",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationPreview,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationPreviewInner
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                            lineNumber: 634,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                        lineNumber: 633,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationName,
                                                                                        children: "None"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                        lineNumber: 636,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                lineNumber: 628,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            unlockedDecorations.map((decoId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    // Add 'decorationActive' class if this is the equipped one
                                                                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationOption, " ").concat(equippedDecoration === decoId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationActive : ''),
                                                                                    onClick: ()=>handleEquipDecoration(decoId),
                                                                                    type: "button",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationPreview, " ").concat(getDecorationClass(decoId)),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationPreviewInner
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                                lineNumber: 650,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                            lineNumber: 649,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decorationName,
                                                                                            children: getDecorationName(decoId)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                            lineNumber: 652,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, decoId, true, {
                                                                                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                                    lineNumber: 641,
                                                                                    columnNumber: 27
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 624,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 612,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveBtn,
                                                                onClick: handleSaveClick,
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 660,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                                                onClick: handleCancelClick,
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 661,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 659,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].achievementContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].achievementTitle,
                                                children: "Achievements"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 669,
                                                columnNumber: 15
                                            }, this),
                                            badges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No achievements yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this) : // Otherwise, create a grid of badges
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeGrid,
                                                children: badges.map((badge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeCard,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: badge.url,
                                                                alt: badge.name,
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeImage,
                                                                // Fallback image in case the src is broken
                                                                onError: (e)=>e.target.src = 'https://placehold.co/100x100/eee/aaa?text=Badge'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 678,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeLabel,
                                                                children: badge.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 685,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 677,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 675,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 668,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                                label: "FAVORITE",
                                                icon: "/icons/heart.png",
                                                // When opened, re-fetch favorites data from localStorage
                                                onOpen: ()=>{
                                                    let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
                                                    if (Array.isArray(allFavorites)) {
                                                        allFavorites = {};
                                                    }
                                                    setFavorites(allFavorites[currentUsername] || []);
                                                },
                                                children: favorites.length > 0 ? favorites.map((id)=>{
                                                    const course = courses.find((c)=>c.id === id);
                                                    const progress = calculateProgress(id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropItem,
                                                        onClick: ()=>router.push("/courses/".concat(id)),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: course ? course.name : id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 716,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressWrapper,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressContainer,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                                                            style: {
                                                                                width: "".concat(Math.round(progress), "%")
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                            lineNumber: 720,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 719,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].percentLabel,
                                                                        children: [
                                                                            Math.round(progress),
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 718,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, id, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 711,
                                                        columnNumber: 23
                                                    }, this);
                                                }) : // Show a message if no favorites
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropItem,
                                                    children: "No favorites yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 695,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                                label: "HISTORY",
                                                icon: "/icons/history.png",
                                                // When opened, re-fetch all data to ensure it's up to date
                                                onOpen: ()=>{
                                                    let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
                                                    if (Array.isArray(allHistory)) {
                                                        allHistory = {};
                                                    }
                                                    setHistory(allHistory[currentUsername] || []);
                                                    const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
                                                    setCourseProgress(savedProgress);
                                                    updateEarnedBadges(savedProgress);
                                                    const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
                                                    setLearningTime(savedTime[currentUsername] || 0);
                                                },
                                                children: history.length > 0 ? history.map((id)=>{
                                                    const course = courses.find((c)=>c.id === id);
                                                    const progress = calculateProgress(id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropItem,
                                                        onClick: ()=>router.push("/courses/".concat(id)),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: course ? course.name : id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 765,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressWrapper,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressContainer,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                                                            style: {
                                                                                width: "".concat(Math.round(progress), "%")
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                            lineNumber: 769,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 768,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].percentLabel,
                                                                        children: [
                                                                            Math.round(progress),
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                        lineNumber: 774,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                                lineNumber: 767,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, id, true, {
                                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                        lineNumber: 760,
                                                        columnNumber: 23
                                                    }, this);
                                                }) : // Show a message if no history
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropItem,
                                                    children: "No recent courses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                    lineNumber: 781,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                                lineNumber: 737,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                        lineNumber: 693,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/ProfilePage.jsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/ProfilePage.jsx",
                lineNumber: 492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/ProfilePage.jsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
_s1(ProfilePage, "8TFMBoToWxlFipC7ohioX93/lpQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = ProfilePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Dropdown");
__turbopack_context__.k.register(_c1, "ProfilePage");
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

//# sourceMappingURL=src_app_60b38bf4._.js.map