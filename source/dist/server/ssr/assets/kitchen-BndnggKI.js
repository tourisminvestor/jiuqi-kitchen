import { n as require_jsx_runtime, o as require_react, s as __toESM, t as require_react_dom } from "../index.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChefHat = createLucideIcon("chef-hat", [["path", {
	d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
	key: "1qvrer"
}], ["path", {
	d: "M6 17h12",
	key: "1jwigz"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 5v16",
	key: "1f6ucr"
}], ["path", {
	d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
	key: "1fyvmf"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserRound = createLucideIcon("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Camera = createLucideIcon("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Headphones = createLucideIcon("headphones", [["path", {
	d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
	key: "1xhozi"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShoppingBag = createLucideIcon("shopping-bag", [
	["path", {
		d: "M16 10a4 4 0 0 1-8 0",
		key: "1ltviw"
	}],
	["path", {
		d: "M3.103 6.034h17.794",
		key: "awc11p"
	}],
	["path", {
		d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
		key: "o988cm"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UtensilsCrossed = createLucideIcon("utensils-crossed", [
	["path", {
		d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
		key: "n7qcjb"
	}],
	["path", {
		d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
		key: "d0u48b"
	}],
	["path", {
		d: "m2.1 21.8 6.4-6.3",
		key: "yn04lh"
	}],
	["path", {
		d: "m19 5-7 7",
		key: "194lzd"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flame = createLucideIcon("flame", [["path", {
	d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
	key: "1slcih"
}]]);
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
/**
* Copyright 2022 Joe Bell. All rights reserved.
*
* This file is licensed to you under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with the
* License. You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/ var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
	var _config_compoundVariants;
	if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
	const { variants, defaultVariants } = config;
	const getVariantClassNames = Object.keys(variants).map((variant) => {
		const variantProp = props === null || props === void 0 ? void 0 : props[variant];
		const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
		if (variantProp === null) return null;
		const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
		return variants[variant][variantKey];
	});
	const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
		let [key, value] = param;
		if (value === void 0) return acc;
		acc[key] = value;
		return acc;
	}, {});
	return cx(base, getVariantClassNames, config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
		let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
		return Object.entries(compoundVariantOptions).every((param) => {
			let [key, value] = param;
			return Array.isArray(value) ? value.includes({
				...defaultVariants,
				...propsWithoutUndefined
			}[key]) : {
				...defaultVariants,
				...propsWithoutUndefined
			}[key] === value;
		}) ? [
			...acc,
			cvClass,
			cvClassName
		] : acc;
	}, []), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp$41 = Object.defineProperty;
var __name$41 = (target, value) => __defProp$41(target, "name", {
	value,
	configurable: true
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$41(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$41(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$41(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$41(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$41(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$41(isFrame, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var __defProp$40 = Object.defineProperty;
var __name$40 = (target, value) => __defProp$40(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$40((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$40(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$40(createContext2, "createContext");
/* @__NO_SIDE_EFFECTS__ */
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$40((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$40(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$40(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$40(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$40(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$40(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$40(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$40(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$40(composeContextScopes, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$39 = Object.defineProperty;
var __name$39 = (target, value) => __defProp$39(target, "name", {
	value,
	configurable: true
});
function setRef$11(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$39(setRef$11, "setRef");
function composeRefs$10(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$11(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$11(refs[i], null);
			}
		};
	};
}
__name$39(composeRefs$10, "composeRefs");
function useComposedRefs$10(...refs) {
	return import_react.useCallback(composeRefs$10(...refs), refs);
}
__name$39(useComposedRefs$10, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$38 = Object.defineProperty;
var __name$38 = (target, value) => __defProp$38(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$3(children) && typeof use$3 === "function") children = use$3(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$3(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$3(child) && typeof use$3 === "function") child = use$3(child._payload);
				slottableElement = getSlottableElementFromSlottable$3(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$4(slottableElement) : void 0;
		const composedRef = useComposedRefs$10(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$3(ownerName) : createSlotError$3(ownerName));
			return children;
		}
		const mergedProps = mergeProps$3(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$38(createSlot$3, "createSlot");
var SLOTTABLE_IDENTIFIER$3 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$3(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$38((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$3;
	return Slottable2;
}
__name$38(createSlottable$3, "createSlottable");
var getSlottableElementFromSlottable$3 = /* @__PURE__ */ __name$38((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$3(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$38(mergeProps$3, "mergeProps");
function getElementRef$4(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$38(getElementRef$4, "getElementRef");
function isSlottable$3(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
__name$38(isSlottable$3, "isSlottable");
var REACT_LAZY_TYPE$3 = Symbol.for("react.lazy");
function isLazyComponent$3(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$3 && "_payload" in element && isPromiseLike$3(element._payload);
}
__name$38(isLazyComponent$3, "isLazyComponent");
function isPromiseLike$3(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$38(isPromiseLike$3, "isPromiseLike");
var createSlotError$3 = /* @__PURE__ */ __name$38((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$3 = /* @__PURE__ */ __name$38((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$3 = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
var __defProp$37 = Object.defineProperty;
var __name$37 = (target, value) => __defProp$37(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createCollection(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	});
	const CollectionProvider = /* @__PURE__ */ __name$37((props) => {
		const { scope, children } = props;
		const ref = import_react.useRef(null);
		const itemMap = import_react.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			scope,
			itemMap,
			collectionRef: ref,
			children
		});
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot$3(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$10(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot$3(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const composedRefs = useComposedRefs$10(forwardedRef, ref);
		const context = useCollectionContext(ITEM_SLOT_NAME, scope);
		import_react.useEffect(() => {
			context.itemMap.set(ref, {
				ref,
				...itemData
			});
			return () => void context.itemMap.delete(ref);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useCollection(scope) {
		const context = useCollectionContext(name + "CollectionConsumer", scope);
		return import_react.useCallback(() => {
			const collectionNode = context.collectionRef.current;
			if (!collectionNode) return [];
			const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
			return Array.from(context.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
		}, [context.collectionRef, context.itemMap]);
	}
	__name$37(useCollection, "useCollection");
	return [
		{
			Provider: CollectionProvider,
			Slot: CollectionSlot,
			ItemSlot: CollectionItemSlot
		},
		useCollection,
		createCollectionScope
	];
}
__name$37(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
	static {
		__name$37(this, "OrderedDict");
	}
	#keys;
	constructor(entries) {
		super(entries);
		this.#keys = [...super.keys()];
		__instanciated.set(this, true);
	}
	set(key, value) {
		if (__instanciated.get(this)) if (this.has(key)) this.#keys[this.#keys.indexOf(key)] = key;
		else this.#keys.push(key);
		super.set(key, value);
		return this;
	}
	insert(index, key, value) {
		const has = this.has(key);
		const length = this.#keys.length;
		const relativeIndex = toSafeInteger(index);
		let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
		const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
		if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
			this.set(key, value);
			return this;
		}
		const size = this.size + (has ? 0 : 1);
		if (relativeIndex < 0) actualIndex++;
		const keys = [...this.#keys];
		let nextValue;
		let shouldSkip = false;
		for (let i = actualIndex; i < size; i++) if (actualIndex === i) {
			let nextKey = keys[i];
			if (keys[i] === key) nextKey = keys[i + 1];
			if (has) this.delete(key);
			nextValue = this.get(nextKey);
			this.set(key, value);
		} else {
			if (!shouldSkip && keys[i - 1] === key) shouldSkip = true;
			const currentKey = keys[shouldSkip ? i : i - 1];
			const currentValue = nextValue;
			nextValue = this.get(currentKey);
			this.delete(currentKey);
			this.set(currentKey, currentValue);
		}
		return this;
	}
	with(index, key, value) {
		const copy = new _OrderedDict(this);
		copy.insert(index, key, value);
		return copy;
	}
	before(key) {
		const index = this.#keys.indexOf(key) - 1;
		if (index < 0) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position before the given key.
	*/
	setBefore(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index, newKey, value);
	}
	after(key) {
		let index = this.#keys.indexOf(key);
		index = index === -1 || index === this.size - 1 ? -1 : index + 1;
		if (index === -1) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position after the given key.
	*/
	setAfter(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index + 1, newKey, value);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		this.#keys = [];
		return super.clear();
	}
	delete(key) {
		const deleted = super.delete(key);
		if (deleted) this.#keys.splice(this.#keys.indexOf(key), 1);
		return deleted;
	}
	deleteAt(index) {
		const key = this.keyAt(index);
		if (key !== void 0) return this.delete(key);
		return false;
	}
	at(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return this.get(key);
	}
	entryAt(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return [key, this.get(key)];
	}
	indexOf(key) {
		return this.#keys.indexOf(key);
	}
	keyAt(index) {
		return at(this.#keys, index);
	}
	from(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.at(dest);
	}
	keyFrom(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.keyAt(dest);
	}
	find(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return entry;
			index++;
		}
	}
	findIndex(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return index;
			index++;
		}
		return -1;
	}
	filter(predicate, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) entries.push(entry);
			index++;
		}
		return new _OrderedDict(entries);
	}
	map(callbackfn, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [
				entry,
				index,
				this
			])]);
			index++;
		}
		return new _OrderedDict(entries);
	}
	reduce(...args) {
		const [callbackfn, initialValue] = args;
		let index = 0;
		let accumulator = initialValue ?? this.at(0);
		for (const entry of this) {
			if (index === 0 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
			index++;
		}
		return accumulator;
	}
	reduceRight(...args) {
		const [callbackfn, initialValue] = args;
		let accumulator = initialValue ?? this.at(-1);
		for (let index = this.size - 1; index >= 0; index--) {
			const entry = this.at(index);
			if (index === this.size - 1 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
		}
		return accumulator;
	}
	toSorted(compareFn) {
		return new _OrderedDict([...this.entries()].sort(compareFn));
	}
	toReversed() {
		const reversed = new _OrderedDict();
		for (let index = this.size - 1; index >= 0; index--) {
			const key = this.keyAt(index);
			const element = this.get(key);
			reversed.set(key, element);
		}
		return reversed;
	}
	toSpliced(...args) {
		const entries = [...this.entries()];
		entries.splice(...args);
		return new _OrderedDict(entries);
	}
	slice(start, end) {
		const result = new _OrderedDict();
		let stop = this.size - 1;
		if (start === void 0) return result;
		if (start < 0) start = start + this.size;
		if (end !== void 0 && end > 0) stop = end - 1;
		for (let index = start; index <= stop; index++) {
			const key = this.keyAt(index);
			const element = this.get(key);
			result.set(key, element);
		}
		return result;
	}
	every(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (!Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return false;
			index++;
		}
		return true;
	}
	some(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return true;
			index++;
		}
		return false;
	}
};
function at(array, index) {
	if ("at" in Array.prototype) return Array.prototype.at.call(array, index);
	const actualIndex = toSafeIndex(array, index);
	return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name$37(at, "at");
function toSafeIndex(array, index) {
	const length = array.length;
	const relativeIndex = toSafeInteger(index);
	const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
	return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name$37(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
	return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name$37(toSafeInteger, "toSafeInteger");
/* @__NO_SIDE_EFFECTS__ */
function createCollection2(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new OrderedDict(),
		setItemMap: /* @__PURE__ */ __name$37(() => void 0, "setItemMap")
	});
	const CollectionProvider = /* @__PURE__ */ __name$37(({ state, ...props }) => {
		return state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionInit, { ...props });
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const CollectionInit = /* @__PURE__ */ __name$37((props) => {
		const state = useInitCollection();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		});
	}, "CollectionInit");
	CollectionInit.displayName = PROVIDER_NAME + "Init";
	const CollectionProviderImpl = /* @__PURE__ */ __name$37((props) => {
		const { scope, children, state } = props;
		const ref = import_react.useRef(null);
		const [collectionElement, setCollectionElement] = import_react.useState(null);
		const composeRefs = useComposedRefs$10(ref, setCollectionElement);
		const [itemMap, setItemMap] = state;
		import_react.useEffect(() => {
			if (!collectionElement) return;
			const observer = getChildListObserver(() => {});
			observer.observe(collectionElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}, [collectionElement]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionContextProvider, {
			scope,
			itemMap,
			setItemMap,
			collectionRef: composeRefs,
			collectionRefObject: ref,
			collectionElement,
			children
		});
	}, "CollectionProviderImpl");
	CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot$3(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$10(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot$3(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const [element, setElement] = import_react.useState(null);
		const composedRefs = useComposedRefs$10(forwardedRef, ref, setElement);
		const { setItemMap } = useCollectionContext(ITEM_SLOT_NAME, scope);
		const itemDataRef = import_react.useRef(itemData);
		if (!shallowEqual(itemDataRef.current, itemData)) itemDataRef.current = itemData;
		const memoizedItemData = itemDataRef.current;
		import_react.useEffect(() => {
			const itemData2 = memoizedItemData;
			setItemMap((map) => {
				if (!element) return map;
				if (!map.has(element)) {
					map.set(element, {
						...itemData2,
						element
					});
					return map.toSorted(sortByDocumentPosition);
				}
				return map.set(element, {
					...itemData2,
					element
				}).toSorted(sortByDocumentPosition);
			});
			return () => {
				setItemMap((map) => {
					if (!element || !map.has(element)) return map;
					map.delete(element);
					return new OrderedDict(map);
				});
			};
		}, [
			element,
			memoizedItemData,
			setItemMap
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useInitCollection() {
		return import_react.useState(new OrderedDict());
	}
	__name$37(useInitCollection, "useInitCollection");
	function useCollection(scope) {
		const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
		return itemMap;
	}
	__name$37(useCollection, "useCollection");
	return [{
		Provider: CollectionProvider,
		Slot: CollectionSlot,
		ItemSlot: CollectionItemSlot
	}, {
		createCollectionScope,
		useCollection,
		useInitCollection
	}];
}
__name$37(createCollection2, "createCollection");
function shallowEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object") return false;
	if (a == null || b == null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (a[key] !== b[key]) return false;
	}
	return true;
}
__name$37(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
	return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name$37(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
	return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name$37(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
	return new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) if (mutation.type === "childList") {
			callback();
			return;
		}
	});
}
__name$37(getChildListObserver, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$36 = Object.defineProperty;
var __name$36 = (target, value) => __defProp$36(target, "name", {
	value,
	configurable: true
});
function setRef$10(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$36(setRef$10, "setRef");
function composeRefs$9(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$10(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$10(refs[i], null);
			}
		};
	};
}
__name$36(composeRefs$9, "composeRefs");
function useComposedRefs$9(...refs) {
	return import_react.useCallback(composeRefs$9(...refs), refs);
}
__name$36(useComposedRefs$9, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var __defProp$35 = Object.defineProperty;
var __name$35 = (target, value) => __defProp$35(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$35(useId, "useId");
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var __defProp$34 = Object.defineProperty;
var __name$34 = (target, value) => __defProp$34(target, "name", {
	value,
	configurable: true
});
function setRef$9(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$34(setRef$9, "setRef");
function composeRefs$8(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$9(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$9(refs[i], null);
			}
		};
	};
}
__name$34(composeRefs$8, "composeRefs");
function useComposedRefs$8(...refs) {
	return import_react.useCallback(composeRefs$8(...refs), refs);
}
__name$34(useComposedRefs$8, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$33 = Object.defineProperty;
var __name$33 = (target, value) => __defProp$33(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$2(children) && typeof use$2 === "function") children = use$2(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$2(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$2(child) && typeof use$2 === "function") child = use$2(child._payload);
				slottableElement = getSlottableElementFromSlottable$2(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$3(slottableElement) : void 0;
		const composedRef = useComposedRefs$8(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$2(ownerName) : createSlotError$2(ownerName));
			return children;
		}
		const mergedProps = mergeProps$2(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$33(createSlot$2, "createSlot");
var SLOTTABLE_IDENTIFIER$2 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$2(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$33((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$2;
	return Slottable2;
}
__name$33(createSlottable$2, "createSlottable");
var getSlottableElementFromSlottable$2 = /* @__PURE__ */ __name$33((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$2(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$33(mergeProps$2, "mergeProps");
function getElementRef$3(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$33(getElementRef$3, "getElementRef");
function isSlottable$2(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
__name$33(isSlottable$2, "isSlottable");
var REACT_LAZY_TYPE$2 = Symbol.for("react.lazy");
function isLazyComponent$2(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$2 && "_payload" in element && isPromiseLike$2(element._payload);
}
__name$33(isLazyComponent$2, "isLazyComponent");
function isPromiseLike$2(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$33(isPromiseLike$2, "isPromiseLike");
var createSlotError$2 = /* @__PURE__ */ __name$33((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$2 = /* @__PURE__ */ __name$33((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$2 = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var __defProp$32 = Object.defineProperty;
var __name$32 = (target, value) => __defProp$32(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot$2(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$32(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var __defProp$31 = Object.defineProperty;
var __name$31 = (target, value) => __defProp$31(target, "name", {
	value,
	configurable: true
});
function useCallbackRef$1(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$31(useCallbackRef$1, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var __defProp$30 = Object.defineProperty;
var __name$30 = (target, value) => __defProp$30(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$30(useEffectEvent, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp$29 = Object.defineProperty;
var __name$29 = (target, value) => __defProp$29(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$29(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction$4(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$29(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$29(useUncontrolledState, "useUncontrolledState");
function isFunction$4(value) {
	return typeof value === "function";
}
__name$29(isFunction$4, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$29(useControllableStateReducer, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var __defProp$28 = Object.defineProperty;
var __name$28 = (target, value) => __defProp$28(target, "name", {
	value,
	configurable: true
});
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
__name$28(useDirection, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var __defProp$27 = Object.defineProperty;
var __name$27 = (target, value) => __defProp$27(target, "name", {
	value,
	configurable: true
});
var _isHydrated = false;
function useIsHydrated() {
	const [isHydrated, setIsHydrated] = import_react.useState(_isHydrated);
	import_react.useEffect(() => {
		if (!_isHydrated) {
			_isHydrated = true;
			setIsHydrated(true);
		}
	}, []);
	return isHydrated;
}
__name$27(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = import_react[" useSyncExternalStore ".trim().toString()];
function subscribe() {
	return () => {};
}
__name$27(subscribe, "subscribe");
function useIsHydratedModern() {
	return useReactSyncExternalStore(subscribe, () => true, () => false);
}
__name$27(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;
//#endregion
//#region node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var __defProp$26 = Object.defineProperty;
var __name$26 = (target, value) => __defProp$26(target, "name", {
	value,
	configurable: true
});
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS$1 = {
	bubbles: false,
	cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection$2, useCollection$2, createCollectionScope$2] = /* @__PURE__ */ createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = /* @__PURE__ */ createContextScope(GROUP_NAME, [createCollectionScope$2]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$26(function RovingFocusGroup2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.Provider, {
		scope: props.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.Slot, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
				...props,
				ref: forwardedRef
			})
		})
	});
}, "RovingFocusGroup"));
var RovingFocusGroupImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$26(function RovingFocusGroupImpl2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$9(forwardedRef, ref);
	const direction = useDirection(dir);
	const [currentTabStopId, setCurrentTabStopId] = useControllableState({
		prop: currentTabStopIdProp,
		defaultProp: defaultCurrentTabStopId ?? null,
		onChange: onCurrentTabStopIdChange,
		caller: GROUP_NAME
	});
	const [isTabbingBackOut, setIsTabbingBackOut] = import_react.useState(false);
	const handleEntryFocus = useCallbackRef$1(onEntryFocus);
	const getItems = useCollection$2(__scopeRovingFocusGroup);
	const isClickFocusRef = import_react.useRef(false);
	const [focusableItemsCount, setFocusableItemsCount] = import_react.useState(0);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
			return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
		}
	}, [handleEntryFocus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: __scopeRovingFocusGroup,
		orientation,
		dir: direction,
		loop,
		currentTabStopId,
		onItemFocus: import_react.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
		onItemShiftTab: import_react.useCallback(() => setIsTabbingBackOut(true), []),
		onFocusableItemAdd: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
			"data-orientation": orientation,
			...groupProps,
			ref: composedRefs,
			style: {
				outline: "none",
				...props.style
			},
			onMouseDown: composeEventHandlers(props.onMouseDown, () => {
				isClickFocusRef.current = true;
			}),
			onFocus: composeEventHandlers(props.onFocus, (event) => {
				const isKeyboardFocus = !isClickFocusRef.current;
				if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
					const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS$1);
					event.currentTarget.dispatchEvent(entryFocusEvent);
					if (!entryFocusEvent.defaultPrevented) {
						const items = getItems().filter((item) => item.focusable);
						focusFirst$1([
							items.find((item) => item.active),
							items.find((item) => item.id === currentTabStopId),
							...items
						].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
					}
				}
				isClickFocusRef.current = false;
			}),
			onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
		})
	});
}, "RovingFocusGroupImpl"));
var ITEM_NAME$1 = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$26(function RovingFocusGroupItem2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
	const autoId = useId();
	const id = tabStopId || autoId;
	const context = useRovingFocusContext(ITEM_NAME$1, __scopeRovingFocusGroup);
	const isCurrentTabStop = context.currentTabStopId === id;
	const getItems = useCollection$2(__scopeRovingFocusGroup);
	const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
	const isHydrated = useIsHydrated2();
	useLayoutEffect2(() => {
		if (!isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	import_react.useEffect(() => {
		if (isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.ItemSlot, {
		scope: __scopeRovingFocusGroup,
		id,
		focusable,
		active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: isCurrentTabStop ? 0 : -1,
			"data-orientation": context.orientation,
			...itemProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!focusable) event.preventDefault();
				else context.onItemFocus(id);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Tab" && event.shiftKey) {
					context.onItemShiftTab();
					return;
				}
				if (event.target !== event.currentTarget) return;
				const focusIntent = getFocusIntent(event, context.orientation, context.dir);
				if (focusIntent !== void 0) {
					if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
					event.preventDefault();
					let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
					if (focusIntent === "last") candidateNodes.reverse();
					else if (focusIntent === "prev" || focusIntent === "next") {
						if (focusIntent === "prev") candidateNodes.reverse();
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = context.loop ? wrapArray$1(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst$1(candidateNodes));
				}
			}),
			children: typeof children === "function" ? children({
				isCurrentTabStop,
				hasTabStop: currentTabStopId != null
			}) : children
		})
	});
}, "RovingFocusGroupItem"));
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== "rtl") return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name$26(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
	if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name$26(getFocusIntent, "getFocusIntent");
function focusFirst$1(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
__name$26(focusFirst$1, "focusFirst");
function wrapArray$1(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$26(wrapArray$1, "wrapArray");
var Root$1 = RovingFocusGroup;
var Item = RovingFocusGroupItem;
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
var __defProp$25 = Object.defineProperty;
var __name$25 = (target, value) => __defProp$25(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$25(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$25((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef$2(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$25((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$25((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$25(usePresence, "usePresence");
function setRef$8(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$25(setRef$8, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef$8(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef$8(currentRefs[i], null);
			}
		};
	}, []);
}
__name$25(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$25(getAnimationName, "getAnimationName");
function getElementRef$2(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$25(getElementRef$2, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-tabs/dist/index.mjs
var __defProp$24 = Object.defineProperty;
var __name$24 = (target, value) => __defProp$24(target, "name", {
	value,
	configurable: true
});
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = /* @__PURE__ */ createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope$1 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$24(function Tabs2(props, forwardedRef) {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
}, "Tabs"));
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$24(function TabsList2(props, forwardedRef) {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
}, "TabsList"));
var TRIGGER_NAME$3 = "TabsTrigger";
var TabsTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$24(function TabsTrigger2(props, forwardedRef) {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME$3, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) context.onValueChange(value);
				else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled || event.target !== event.currentTarget) return;
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== "manual";
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
}, "TabsTrigger"));
var CONTENT_NAME$3 = "TabsContent";
var TabsContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$24(function TabsContent2(props, forwardedRef) {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME$3, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
}, "TabsContent"));
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
__name$24(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
__name$24(makeContentId, "makeContentId");
var Root2$1 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content$1 = TabsContent$1;
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
	...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let i = 0; i < classGroupIds.length; i++) lookup[classGroupIds[i]] = true;
	return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers, postfixLookupClassGroupIds } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId;
		if (hasPostfixModifier) {
			classGroupId = getClassGroupId(baseClassName.substring(0, maybePostfixModifierPosition));
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber$1 = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber$1(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber$1);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber$1,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber$1,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber$1],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber$1,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber$1,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/width
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/height
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber$1,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber$1,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber$1,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber$1,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber$1, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber$1] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber$1] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber$1,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber$1,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
//#endregion
//#region lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region components/ui/tabs.tsx
function Tabs({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
		"data-slot": "tabs",
		"data-orientation": orientation,
		orientation,
		className: cn$1("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className),
		...props
	});
}
var tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function TabsList({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		"data-slot": "tabs-list",
		"data-variant": variant,
		className: cn$1(tabsListVariants({ variant }), className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "tabs-trigger",
		className: cn$1("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content$1, {
		"data-slot": "tabs-content",
		className: cn$1("flex-1 outline-none", className),
		...props
	});
}
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$23 = Object.defineProperty;
var __name$23 = (target, value) => __defProp$23(target, "name", {
	value,
	configurable: true
});
function setRef$7(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$23(setRef$7, "setRef");
function composeRefs$7(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$7(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$7(refs[i], null);
			}
		};
	};
}
__name$23(composeRefs$7, "composeRefs");
function useComposedRefs$7(...refs) {
	return import_react.useCallback(composeRefs$7(...refs), refs);
}
__name$23(useComposedRefs$7, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$22 = Object.defineProperty;
var __name$22 = (target, value) => __defProp$22(target, "name", {
	value,
	configurable: true
});
function setRef$6(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$22(setRef$6, "setRef");
function composeRefs$6(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$6(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$6(refs[i], null);
			}
		};
	};
}
__name$22(composeRefs$6, "composeRefs");
function useComposedRefs$6(...refs) {
	return import_react.useCallback(composeRefs$6(...refs), refs);
}
__name$22(useComposedRefs$6, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var __defProp$21 = Object.defineProperty;
var __name$21 = (target, value) => __defProp$21(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$21(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs$6(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef$1((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$21(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$21(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$21(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$21(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$21(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$21(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$21(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$21((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$21(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$21(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$21(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$21((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$21(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$21(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$21(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$21(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$21(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$20 = Object.defineProperty;
var __name$20 = (target, value) => __defProp$20(target, "name", {
	value,
	configurable: true
});
function setRef$5(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$20(setRef$5, "setRef");
function composeRefs$5(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$5(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$5(refs[i], null);
			}
		};
	};
}
__name$20(composeRefs$5, "composeRefs");
function useComposedRefs$5(...refs) {
	return import_react.useCallback(composeRefs$5(...refs), refs);
}
__name$20(useComposedRefs$5, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var __defProp$19 = Object.defineProperty;
var __name$19 = (target, value) => __defProp$19(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$5(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$19(handleFocusIn2, "handleFocusIn");
			__name$19(handleFocusOut2, "handleFocusOut");
			__name$19(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$19(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$19(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$19((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$19(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$19(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$19(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$19(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$19(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$19(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$19(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$19(removeLinks, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var __defProp$18 = Object.defineProperty;
var __name$18 = (target, value) => __defProp$18(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$18(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var __defProp$17 = Object.defineProperty;
var __name$17 = (target, value) => __defProp$17(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$17(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$17(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$17(createFocusGuard, "createFocusGuard");
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter++;
		},
		remove: function() {
			counter--;
			if (!counter && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/hook.js
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/component.js
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle(styles, dynamic);
		return null;
	};
	return Sheet;
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$16 = Object.defineProperty;
var __name$16 = (target, value) => __defProp$16(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$1(children) && typeof use$1 === "function") children = use$1(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$1(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$1(child) && typeof use$1 === "function") child = use$1(child._payload);
				slottableElement = getSlottableElementFromSlottable$1(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs$7(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$1(ownerName) : createSlotError$1(ownerName));
			return children;
		}
		const mergedProps = mergeProps$1(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$16(createSlot$1, "createSlot");
var SLOTTABLE_IDENTIFIER$1 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$1(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$16((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$1;
	return Slottable2;
}
__name$16(createSlottable$1, "createSlottable");
var getSlottableElementFromSlottable$1 = /* @__PURE__ */ __name$16((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$1(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$16(mergeProps$1, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$16(getElementRef$1, "getElementRef");
function isSlottable$1(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
__name$16(isSlottable$1, "isSlottable");
var REACT_LAZY_TYPE$1 = Symbol.for("react.lazy");
function isLazyComponent$1(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$1 && "_payload" in element && isPromiseLike$1(element._payload);
}
__name$16(isLazyComponent$1, "isLazyComponent");
function isPromiseLike$1(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$16(isPromiseLike$1, "isPromiseLike");
var createSlotError$1 = /* @__PURE__ */ __name$16((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$1 = /* @__PURE__ */ __name$16((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$1 = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-dialog/dist/index.mjs
var __defProp$15 = Object.defineProperty;
var __name$15 = (target, value) => __defProp$15(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name$15((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider$1, usePortalContext$1] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name$15((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$1, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext$1(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot$1 = /* @__PURE__ */ createSlot$1("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs$7(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot$1,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$2(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME$2 = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext$1(CONTENT_NAME$2, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$7(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$2, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState$2(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState$2(open) {
	return open ? "open" : "closed";
}
__name$15(getState$2, "getState");
//#endregion
//#region components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "sheet",
		...props
	});
}
function SheetClose({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
		"data-slot": "sheet-close",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "sheet-overlay",
		className: cn$1("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		"data-slot": "sheet-content",
		className: cn$1("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "sheet-title",
		className: cn$1("font-semibold text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "sheet-description",
		className: cn$1("text-sm text-muted-foreground", className),
		...props
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), OctagonX = createLucideIcon("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), M = (e, i, s, u, m, a, l, h) => {
	/**
	* @license lucide-react v1.31.0 - ISC
	*
	* This source code is licensed under the ISC license.
	* See the LICENSE file in the root directory of this source tree.
	*/
	/**
	* @license lucide-react v1.31.0 - ISC
	*
	* This source code is licensed under the ISC license.
	* See the LICENSE file in the root directory of this source tree.
	*/
	let d = document.documentElement, w = ["light", "dark"];
	function p(n) {
		(Array.isArray(e) ? e : [e]).forEach((y) => {
			let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
			k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
		}), R(n);
	}
	function R(n) {
		h && w.includes(n) && (d.style.colorScheme = n);
	}
	function c() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (u) p(u);
	else try {
		let n = localStorage.getItem(i) || s;
		p(l && n === "system" ? c() : n);
	} catch (n) {}
}, x = import_react.createContext(void 0), U = {
	setTheme: (e) => {},
	themes: []
}, z = () => {
	var e;
	return (e = import_react.useContext(x)) != null ? e : U;
};
import_react.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
	let p = JSON.stringify([
		s,
		i,
		a,
		e,
		h,
		l,
		u,
		m
	]).slice(1, -1);
	return import_react.createElement("script", {
		...w,
		suppressHydrationWarning: !0,
		nonce: typeof window == "undefined" ? d : "",
		dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` }
	});
});
//#endregion
//#region node_modules/sonner/dist/index.mjs
function __insertCSS(code) {
	if (!code || typeof document == "undefined") return;
	let head = document.head || document.getElementsByTagName("head")[0];
	let style = document.createElement("style");
	style.type = "text/css";
	head.appendChild(style);
	style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
var getAsset = (type) => {
	switch (type) {
		case "success": return SuccessIcon;
		case "info": return InfoIcon;
		case "warning": return WarningIcon;
		case "error": return ErrorIcon;
		default: return null;
	}
};
var bars = Array(12).fill(0);
var Loader = ({ visible, className }) => {
	return /* @__PURE__ */ import_react.createElement("div", {
		className: ["sonner-loading-wrapper", className].filter(Boolean).join(" "),
		"data-visible": visible
	}, /* @__PURE__ */ import_react.createElement("div", { className: "sonner-spinner" }, bars.map((_, i) => /* @__PURE__ */ import_react.createElement("div", {
		className: "sonner-loading-bar",
		key: `spinner-bar-${i}`
	}))));
};
var SuccessIcon = /* @__PURE__ */ import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
}));
var WarningIcon = /* @__PURE__ */ import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
}));
var InfoIcon = /* @__PURE__ */ import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
}));
var ErrorIcon = /* @__PURE__ */ import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20",
	"aria-hidden": "true"
}, /* @__PURE__ */ import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
}));
var CloseIcon = /* @__PURE__ */ import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	"aria-hidden": "true"
}, /* @__PURE__ */ import_react.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), /* @__PURE__ */ import_react.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
}));
var useIsDocumentHidden = () => {
	const [isDocumentHidden, setIsDocumentHidden] = import_react.useState(document.hidden);
	import_react.useEffect(() => {
		const callback = () => {
			setIsDocumentHidden(document.hidden);
		};
		document.addEventListener("visibilitychange", callback);
		return () => document.removeEventListener("visibilitychange", callback);
	}, []);
	return isDocumentHidden;
};
var toastsCounter = 1;
var MAX_HISTORY_SIZE = 100;
var getToastId = (data) => {
	var _data_id;
	return typeof (data == null ? void 0 : data.id) === "number" || (data == null ? void 0 : (_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
};
var Observer = class {
	constructor() {
		this.subscribe = (subscriber) => {
			this.subscribers.push(subscriber);
			this.getActiveToasts().forEach((toast) => subscriber(toast));
			return () => {
				const index = this.subscribers.indexOf(subscriber);
				this.subscribers.splice(index, 1);
			};
		};
		this.publish = (data) => {
			this.subscribers.forEach((subscriber) => subscriber(data));
		};
		this.addToast = (data) => {
			this.publish(data);
			this.toasts = [...this.toasts, data];
			this.trimHistory();
		};
		this.trimHistory = () => {
			let toRemove = this.toasts.length - MAX_HISTORY_SIZE;
			if (toRemove <= 0) return;
			this.toasts = this.toasts.filter((toast) => {
				if (toRemove > 0 && this.dismissedToasts.has(toast.id)) {
					this.dismissedToasts.delete(toast.id);
					toRemove--;
					return false;
				}
				return true;
			});
		};
		this.create = (data) => {
			const { message, ...rest } = data;
			const id = getToastId(data);
			const pendingDismissal = this.pendingDismissals.get(id);
			if (pendingDismissal !== void 0) {
				cancelAnimationFrame(pendingDismissal);
				this.pendingDismissals.delete(id);
				this.dismissedToasts.delete(id);
			}
			const wasDismissed = this.dismissedToasts.has(id);
			const dismissible = data.dismissible === void 0 ? true : data.dismissible;
			if (wasDismissed) {
				this.dismissedToasts.delete(id);
				this.toasts = this.toasts.filter((toast) => toast.id !== id);
			}
			if (wasDismissed ? void 0 : this.toasts.find((toast) => {
				return toast.id === id;
			})) this.toasts = this.toasts.map((toast) => {
				if (toast.id === id) {
					this.publish({
						...toast,
						...data,
						id,
						title: message
					});
					return {
						...toast,
						...data,
						id,
						dismissible,
						title: message
					};
				}
				return toast;
			});
			else this.addToast({
				title: message,
				...rest,
				dismissible,
				id
			});
			return id;
		};
		this.dismiss = (id) => {
			if (id === void 0 || id === null) {
				this.getActiveToasts().forEach((toast) => {
					this.dismissedToasts.add(toast.id);
					this.subscribers.forEach((subscriber) => subscriber({
						id: toast.id,
						dismiss: true
					}));
				});
				return id;
			}
			this.dismissedToasts.add(id);
			const alreadyPending = this.pendingDismissals.get(id);
			if (alreadyPending !== void 0) cancelAnimationFrame(alreadyPending);
			this.pendingDismissals.set(id, requestAnimationFrame(() => {
				this.pendingDismissals.delete(id);
				this.subscribers.forEach((subscriber) => subscriber({
					id,
					dismiss: true
				}));
			}));
			return id;
		};
		this.message = (message, data) => {
			return this.create({
				...data,
				message,
				type: void 0
			});
		};
		this.error = (message, data) => {
			return this.create({
				...data,
				message,
				type: "error"
			});
		};
		this.success = (message, data) => {
			return this.create({
				...data,
				type: "success",
				message
			});
		};
		this.info = (message, data) => {
			return this.create({
				...data,
				type: "info",
				message
			});
		};
		this.warning = (message, data) => {
			return this.create({
				...data,
				type: "warning",
				message
			});
		};
		this.loading = (message, data) => {
			return this.create({
				...data,
				type: "loading",
				message
			});
		};
		this.promise = (promise, data) => {
			if (!data) return;
			let id = void 0;
			if (data.loading !== void 0) id = this.create({
				...data,
				promise,
				type: "loading",
				message: data.loading,
				description: typeof data.description !== "function" ? data.description : void 0
			});
			const p = Promise.resolve(promise instanceof Function ? promise() : promise);
			let shouldDismiss = id !== void 0;
			let result;
			const originalPromise = p.then(async (response) => {
				result = ["resolve", response];
				if (import_react.isValidElement(response)) {
					shouldDismiss = false;
					this.create({
						id,
						type: "default",
						message: response
					});
				} else if (isHttpResponse(response) && !response.ok) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(`HTTP error! status: ${response.status}`) : data.error;
					const description = typeof data.description === "function" ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
					const toastSettings = typeof promiseData === "object" && !import_react.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				} else if (response instanceof Error) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(response) : data.error;
					const description = typeof data.description === "function" ? await data.description(response) : data.description;
					const toastSettings = typeof promiseData === "object" && !import_react.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				} else if (data.success !== void 0) {
					shouldDismiss = false;
					const promiseData = typeof data.success === "function" ? await data.success(response) : data.success;
					const description = typeof data.description === "function" ? await data.description(response) : data.description;
					const toastSettings = typeof promiseData === "object" && !import_react.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "success",
						description,
						...toastSettings
					});
				}
			}).catch(async (error) => {
				result = ["reject", error];
				if (data.error !== void 0) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(error) : data.error;
					const description = typeof data.description === "function" ? await data.description(error) : data.description;
					const toastSettings = typeof promiseData === "object" && !import_react.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				}
			}).finally(() => {
				if (shouldDismiss) {
					this.dismiss(id);
					id = void 0;
				}
				data.finally == null || data.finally.call(data);
			});
			const unwrap = () => new Promise((resolve, reject) => originalPromise.then(() => result[0] === "reject" ? reject(result[1]) : resolve(result[1])).catch(reject));
			if (typeof id !== "string" && typeof id !== "number") return { unwrap };
			else return Object.assign(id, { unwrap });
		};
		this.custom = (jsx, data) => {
			const id = getToastId(data);
			this.create({
				...data,
				jsx: jsx(id),
				id,
				type: void 0
			});
			return id;
		};
		this.getActiveToasts = () => {
			return this.toasts.filter((toast) => !this.dismissedToasts.has(toast.id));
		};
		this.subscribers = [];
		this.toasts = [];
		this.dismissedToasts = /* @__PURE__ */ new Set();
		this.pendingDismissals = /* @__PURE__ */ new Map();
	}
};
var ToastState = new Observer();
var toastFunction = (message, data) => {
	return ToastState.message(message, data);
};
var isHttpResponse = (data) => {
	return data && typeof data === "object" && "ok" in data && typeof data.ok === "boolean" && "status" in data && typeof data.status === "number";
};
var basicToast = toastFunction;
var getHistory = () => ToastState.toasts;
var getToasts = () => ToastState.getActiveToasts();
var toast = Object.assign(basicToast, {
	success: ToastState.success,
	info: ToastState.info,
	warning: ToastState.warning,
	error: ToastState.error,
	custom: ToastState.custom,
	message: ToastState.message,
	promise: ToastState.promise,
	dismiss: ToastState.dismiss,
	loading: ToastState.loading
}, {
	getHistory,
	getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
	return action.label !== void 0;
}
var VISIBLE_TOASTS_AMOUNT = 3;
var VIEWPORT_OFFSET = "24px";
var MOBILE_VIEWPORT_OFFSET = "16px";
var TOAST_LIFETIME = 4e3;
var TOAST_WIDTH = 356;
var GAP = 14;
var SWIPE_THRESHOLD = 45;
var TIME_BEFORE_UNMOUNT = 200;
function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}
function getDefaultSwipeDirections(position) {
	const [y, x] = position.split("-");
	const directions = [];
	if (y) directions.push(y);
	if (x) directions.push(x);
	return directions;
}
var Toast = (props) => {
	var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
	const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = "", descriptionClassName = "", duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = "Close toast" } = props;
	const [swipeDirection, setSwipeDirection] = import_react.useState(null);
	const [swipeOutDirection, setSwipeOutDirection] = import_react.useState(null);
	const [mounted, setMounted] = import_react.useState(false);
	const [removed, setRemoved] = import_react.useState(false);
	const [swiping, setSwiping] = import_react.useState(false);
	const [swipeOut, setSwipeOut] = import_react.useState(false);
	const [isSwiped, setIsSwiped] = import_react.useState(false);
	const [offsetBeforeRemove, setOffsetBeforeRemove] = import_react.useState(0);
	const [initialHeight, setInitialHeight] = import_react.useState(0);
	const remainingTime = import_react.useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
	const dragStartTime = import_react.useRef(null);
	const toastRef = import_react.useRef(null);
	const isFront = index === 0;
	const isVisible = index + 1 <= visibleToasts;
	const toastType = toast.type;
	const toastTypeKey = toastType != null ? toastType : "default";
	const dismissible = toast.dismissible !== false;
	const toastClassname = toast.className || "";
	const toastDescriptionClassname = toast.descriptionClassName || "";
	const heightIndex = import_react.useMemo(() => heights.findIndex((height) => height.toastId === toast.id) || 0, [heights, toast.id]);
	const closeButton = import_react.useMemo(() => {
		var _toast_closeButton;
		return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
	}, [toast.closeButton, closeButtonFromToaster]);
	const duration = import_react.useMemo(() => toast.duration || durationFromToaster || TOAST_LIFETIME, [toast.duration, durationFromToaster]);
	const closeTimerStartTimeRef = import_react.useRef(0);
	const offset = import_react.useRef(0);
	const lastCloseTimerStartTimeRef = import_react.useRef(0);
	const pointerStartRef = import_react.useRef(null);
	const [y, x] = position.split("-");
	const toastsHeightBefore = import_react.useMemo(() => {
		return heights.reduce((prev, curr, reducerIndex) => {
			if (reducerIndex >= heightIndex) return prev;
			return prev + curr.height;
		}, 0);
	}, [heights, heightIndex]);
	const isDocumentHidden = useIsDocumentHidden();
	const swipeDirections = import_react.useMemo(() => {
		var _props_swipeDirections;
		return (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
	}, [props.swipeDirections, position]);
	const invert = toast.invert || ToasterInvert;
	const disabled = toastType === "loading";
	offset.current = import_react.useMemo(() => heightIndex * gap + toastsHeightBefore, [heightIndex, toastsHeightBefore]);
	import_react.useEffect(() => {
		remainingTime.current = duration;
	}, [duration]);
	import_react.useEffect(() => {
		setMounted(true);
	}, []);
	import_react.useEffect(() => {
		const toastNode = toastRef.current;
		if (toastNode) {
			const height = toastNode.getBoundingClientRect().height;
			setInitialHeight(height);
			setHeights((h) => [{
				toastId: toast.id,
				height,
				position: toast.position
			}, ...h]);
			return () => setHeights((h) => h.filter((height) => height.toastId !== toast.id));
		}
	}, [setHeights, toast.id]);
	import_react.useLayoutEffect(() => {
		if (!mounted) return;
		const toastNode = toastRef.current;
		const originalHeight = toastNode.style.height;
		toastNode.style.height = "auto";
		const newHeight = toastNode.getBoundingClientRect().height;
		toastNode.style.height = originalHeight;
		setInitialHeight(newHeight);
		setHeights((heights) => {
			if (!heights.find((height) => height.toastId === toast.id)) return [{
				toastId: toast.id,
				height: newHeight,
				position: toast.position
			}, ...heights];
			else return heights.map((height) => height.toastId === toast.id ? {
				...height,
				height: newHeight
			} : height);
		});
	}, [
		mounted,
		toast.title,
		toast.description,
		setHeights,
		toast.id,
		toast.jsx,
		toast.action,
		toast.cancel
	]);
	const deleteToast = import_react.useCallback(() => {
		setRemoved(true);
		setOffsetBeforeRemove(offset.current);
		setHeights((h) => h.filter((height) => height.toastId !== toast.id));
		setTimeout(() => {
			removeToast(toast);
		}, TIME_BEFORE_UNMOUNT);
	}, [
		toast,
		removeToast,
		setHeights,
		offset
	]);
	import_react.useEffect(() => {
		if (toast.promise && toastType === "loading" || toast.duration === Infinity || toast.type === "loading") return;
		let timeoutId;
		const pauseTimer = () => {
			if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
				const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
				remainingTime.current = remainingTime.current - elapsedTime;
			}
			lastCloseTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
		};
		const startTimer = () => {
			if (remainingTime.current === Infinity) return;
			closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
			timeoutId = setTimeout(() => {
				toast.onAutoClose == null || toast.onAutoClose.call(toast, toast);
				deleteToast();
			}, remainingTime.current);
		};
		if (expanded || interacting || isDocumentHidden) pauseTimer();
		else startTimer();
		return () => clearTimeout(timeoutId);
	}, [
		expanded,
		interacting,
		toast,
		toastType,
		isDocumentHidden,
		deleteToast
	]);
	import_react.useEffect(() => {
		if (toast.delete) {
			deleteToast();
			toast.onDismiss == null || toast.onDismiss.call(toast, toast);
		}
	}, [deleteToast, toast.delete]);
	function getLoadingIcon() {
		var _toast_classNames;
		if (icons == null ? void 0 : icons.loading) {
			var _toast_classNames1;
			return /* @__PURE__ */ import_react.createElement("div", {
				className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, "sonner-loader"),
				"data-visible": toastType === "loading"
			}, icons.loading);
		}
		return /* @__PURE__ */ import_react.createElement(Loader, {
			className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
			visible: toastType === "loading"
		});
	}
	const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
	var _toast_richColors, _icons_close;
	return /* @__PURE__ */ import_react.createElement("li", {
		tabIndex: 0,
		ref: toastRef,
		className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames[toastTypeKey], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastTypeKey]),
		"data-sonner-toast": "",
		"data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
		"data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
		"data-mounted": mounted,
		"data-promise": Boolean(toast.promise),
		"data-swiped": isSwiped,
		"data-removed": removed,
		"data-visible": isVisible,
		"data-y-position": y,
		"data-x-position": x,
		"data-index": index,
		"data-front": isFront,
		"data-swiping": swiping,
		"data-dismissible": dismissible,
		"data-type": toastType,
		"data-invert": invert,
		"data-swipe-out": swipeOut,
		"data-swipe-direction": swipeOutDirection,
		"data-expanded": Boolean(expanded || expandByDefault && mounted),
		"data-testid": toast.testId,
		style: {
			"--index": index,
			"--toasts-before": index,
			"--z-index": toasts.length - index,
			"--offset": `${removed ? offsetBeforeRemove : offset.current}px`,
			"--initial-height": expandByDefault ? "auto" : `${initialHeight}px`,
			...style,
			...toast.style
		},
		onDragEnd: () => {
			setSwiping(false);
			setSwipeDirection(null);
			pointerStartRef.current = null;
		},
		onPointerDown: (event) => {
			if (event.button === 2) return;
			if (disabled || !dismissible) return;
			dragStartTime.current = /* @__PURE__ */ new Date();
			setOffsetBeforeRemove(offset.current);
			event.target.setPointerCapture(event.pointerId);
			if (event.target.tagName === "BUTTON") return;
			setSwiping(true);
			pointerStartRef.current = {
				x: event.clientX,
				y: event.clientY
			};
		},
		onPointerUp: () => {
			var _toastRef_current, _toastRef_current1, _dragStartTime_current;
			if (swipeOut || !dismissible) return;
			pointerStartRef.current = null;
			const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
			const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
			const timeTaken = (/* @__PURE__ */ new Date()).getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
			const swipeAmount = swipeDirection === "x" ? swipeAmountX : swipeAmountY;
			const velocity = Math.abs(swipeAmount) / timeTaken;
			if ((swipeDirection === "x" ? swipeDirections.includes(swipeAmountX > 0 ? "right" : "left") : swipeDirections.includes(swipeAmountY > 0 ? "bottom" : "top")) && (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > .11)) {
				setOffsetBeforeRemove(offset.current);
				toast.onDismiss == null || toast.onDismiss.call(toast, toast);
				if (swipeDirection === "x") setSwipeOutDirection(swipeAmountX > 0 ? "right" : "left");
				else setSwipeOutDirection(swipeAmountY > 0 ? "down" : "up");
				deleteToast();
				setSwipeOut(true);
				return;
			} else {
				var _toastRef_current2, _toastRef_current3;
				(_toastRef_current2 = toastRef.current) == null || _toastRef_current2.style.setProperty("--swipe-amount-x", `0px`);
				(_toastRef_current3 = toastRef.current) == null || _toastRef_current3.style.setProperty("--swipe-amount-y", `0px`);
			}
			setIsSwiped(false);
			setSwiping(false);
			setSwipeDirection(null);
		},
		onPointerMove: (event) => {
			var _window_getSelection, _toastRef_current, _toastRef_current1;
			if (!pointerStartRef.current || !dismissible) return;
			if (((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0) return;
			const yDelta = event.clientY - pointerStartRef.current.y;
			const xDelta = event.clientX - pointerStartRef.current.x;
			if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
			let swipeAmount = {
				x: 0,
				y: 0
			};
			const getDampening = (delta) => {
				return 1 / (1.5 + Math.abs(delta) / 20);
			};
			if (swipeDirection === "y") {
				if (swipeDirections.includes("top") || swipeDirections.includes("bottom")) if (swipeDirections.includes("top") && yDelta < 0 || swipeDirections.includes("bottom") && yDelta > 0) swipeAmount.y = yDelta;
				else {
					const dampenedDelta = yDelta * getDampening(yDelta);
					swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
				}
			} else if (swipeDirection === "x") {
				if (swipeDirections.includes("left") || swipeDirections.includes("right")) if (swipeDirections.includes("left") && xDelta < 0 || swipeDirections.includes("right") && xDelta > 0) swipeAmount.x = xDelta;
				else {
					const dampenedDelta = xDelta * getDampening(xDelta);
					swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
				}
			}
			if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) setIsSwiped(true);
			(_toastRef_current = toastRef.current) == null || _toastRef_current.style.setProperty("--swipe-amount-x", `${swipeAmount.x}px`);
			(_toastRef_current1 = toastRef.current) == null || _toastRef_current1.style.setProperty("--swipe-amount-y", `${swipeAmount.y}px`);
		}
	}, closeButton && !toast.jsx && toastType !== "loading" ? /* @__PURE__ */ import_react.createElement("button", {
		"aria-label": closeButtonAriaLabel,
		"data-disabled": disabled,
		"data-close-button": true,
		onClick: disabled || !dismissible ? () => {} : () => {
			deleteToast();
			toast.onDismiss == null || toast.onDismiss.call(toast, toast);
		},
		className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
	}, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /* @__PURE__ */ import_react.createElement("div", {
		"data-icon": "",
		className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
	}, toastType === "loading" ? toast.icon || getLoadingIcon() : toast.promise ? getLoadingIcon() : null, toastType !== "loading" ? icon : null) : null, /* @__PURE__ */ import_react.createElement("div", {
		"data-content": "",
		className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
	}, /* @__PURE__ */ import_react.createElement("div", {
		"data-title": "",
		className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
	}, toast.jsx ? toast.jsx : typeof toast.title === "function" ? toast.title() : toast.title), toast.description ? /* @__PURE__ */ import_react.createElement("div", {
		"data-description": "",
		className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
	}, typeof toast.description === "function" ? toast.description() : toast.description) : null), /* @__PURE__ */ import_react.isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /* @__PURE__ */ import_react.createElement("button", {
		"data-button": true,
		"data-cancel": true,
		style: toast.cancelButtonStyle || cancelButtonStyle,
		onClick: (event) => {
			if (!isAction(toast.cancel)) return;
			if (!dismissible) return;
			toast.cancel.onClick == null || toast.cancel.onClick.call(toast.cancel, event);
			deleteToast();
		},
		className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
	}, toast.cancel.label) : null, /* @__PURE__ */ import_react.isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /* @__PURE__ */ import_react.createElement("button", {
		"data-button": true,
		"data-action": true,
		style: toast.actionButtonStyle || actionButtonStyle,
		onClick: (event) => {
			if (!isAction(toast.action)) return;
			toast.action.onClick == null || toast.action.onClick.call(toast.action, event);
			if (event.defaultPrevented) return;
			deleteToast();
		},
		className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
	}, toast.action.label) : null);
};
function getDocumentDirection() {
	if (typeof window === "undefined") return "ltr";
	if (typeof document === "undefined") return "ltr";
	const dirAttribute = document.documentElement.getAttribute("dir");
	if (dirAttribute === "auto" || !dirAttribute) return window.getComputedStyle(document.documentElement).direction;
	return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
	const styles = {};
	[defaultOffset, mobileOffset].forEach((offset, index) => {
		const isMobile = index === 1;
		const prefix = isMobile ? "--mobile-offset" : "--offset";
		const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
		function assignAll(offset) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((key) => {
				styles[`${prefix}-${key}`] = typeof offset === "number" ? `${offset}px` : offset;
			});
		}
		if (typeof offset === "number" || typeof offset === "string") assignAll(offset);
		else if (typeof offset === "object") [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((key) => {
			if (offset[key] === void 0) styles[`${prefix}-${key}`] = defaultValue;
			else styles[`${prefix}-${key}`] = typeof offset[key] === "number" ? `${offset[key]}px` : offset[key];
		});
		else assignAll(defaultValue);
	});
	return styles;
}
var Toaster$1 = /* @__PURE__ */ import_react.forwardRef(function Toaster(props, ref) {
	const { id, invert, position = "bottom-right", hotkey = ["altKey", "KeyT"], expand, closeButton, className, offset, mobileOffset, theme = "light", richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, customAriaLabel, containerAriaLabel = "Notifications" } = props;
	const [toasts, setToasts] = import_react.useState([]);
	const filteredToasts = import_react.useMemo(() => {
		if (id) return toasts.filter((toast) => toast.toasterId === id);
		return toasts.filter((toast) => !toast.toasterId);
	}, [toasts, id]);
	const possiblePositions = import_react.useMemo(() => {
		return Array.from(new Set([position].concat(filteredToasts.filter((toast) => toast.position).map((toast) => toast.position))));
	}, [filteredToasts, position]);
	const [heights, setHeights] = import_react.useState([]);
	const [expanded, setExpanded] = import_react.useState(false);
	const [interacting, setInteracting] = import_react.useState(false);
	const [actualTheme, setActualTheme] = import_react.useState(theme !== "system" ? theme : typeof window !== "undefined" ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light");
	const listRef = import_react.useRef(null);
	const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
	const lastFocusedElementRef = import_react.useRef(null);
	const isFocusWithinRef = import_react.useRef(false);
	const removeToast = import_react.useCallback((toastToRemove) => {
		setToasts((toasts) => {
			var _toasts_find;
			if (!((_toasts_find = toasts.find((toast) => toast.id === toastToRemove.id)) == null ? void 0 : _toasts_find.delete)) ToastState.dismiss(toastToRemove.id);
			return toasts.filter(({ id }) => id !== toastToRemove.id);
		});
	}, []);
	import_react.useEffect(() => {
		return ToastState.subscribe((toast) => {
			if (toast.dismiss) {
				requestAnimationFrame(() => {
					setToasts((toasts) => toasts.map((t) => t.id === toast.id ? {
						...t,
						delete: true
					} : t));
				});
				return;
			}
			setTimeout(() => {
				import_react_dom.flushSync(() => {
					setToasts((toasts) => {
						const indexOfExistingToast = toasts.findIndex((t) => t.id === toast.id);
						if (indexOfExistingToast !== -1) return [
							...toasts.slice(0, indexOfExistingToast),
							{
								...toasts[indexOfExistingToast],
								...toast
							},
							...toasts.slice(indexOfExistingToast + 1)
						];
						return [toast, ...toasts];
					});
				});
			});
		});
	}, []);
	import_react.useEffect(() => {
		if (theme !== "system") {
			setActualTheme(theme);
			return;
		}
		if (theme === "system") if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setActualTheme("dark");
		else setActualTheme("light");
		if (typeof window === "undefined") return;
		const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			darkMediaQuery.addEventListener("change", ({ matches }) => {
				if (matches) setActualTheme("dark");
				else setActualTheme("light");
			});
		} catch (error) {
			darkMediaQuery.addListener(({ matches }) => {
				try {
					if (matches) setActualTheme("dark");
					else setActualTheme("light");
				} catch (e) {
					console.error(e);
				}
			});
		}
	}, [theme]);
	import_react.useEffect(() => {
		if (toasts.length <= 1) setExpanded(false);
	}, [toasts]);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			var _listRef_current;
			if (hotkey.length > 0 && hotkey.every((key) => event[key] || event.code === key)) {
				var _listRef_current1;
				setExpanded(true);
				(_listRef_current1 = listRef.current) == null || _listRef_current1.focus();
			}
			if (event.code === "Escape" && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) setExpanded(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [hotkey]);
	import_react.useEffect(() => {
		if (listRef.current) return () => {
			if (lastFocusedElementRef.current) {
				lastFocusedElementRef.current.focus({ preventScroll: true });
				lastFocusedElementRef.current = null;
				isFocusWithinRef.current = false;
			}
		};
	}, [listRef.current]);
	return /* @__PURE__ */ import_react.createElement("section", {
		ref,
		"aria-label": customAriaLabel != null ? customAriaLabel : `${containerAriaLabel} ${hotkeyLabel}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: true,
		"data-react-aria-top-layer": true
	}, possiblePositions.map((position, index) => {
		var _heights_;
		const [y, x] = position.split("-");
		if (!filteredToasts.length) return null;
		return /* @__PURE__ */ import_react.createElement("ol", {
			key: position,
			dir: dir === "auto" ? getDocumentDirection() : dir,
			tabIndex: -1,
			ref: listRef,
			className,
			"data-sonner-toaster": true,
			"data-sonner-theme": actualTheme,
			"data-y-position": y,
			"data-x-position": x,
			style: {
				"--front-toast-height": `${((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0}px`,
				"--width": `${TOAST_WIDTH}px`,
				"--gap": `${gap}px`,
				...style,
				...assignOffset(offset, mobileOffset)
			},
			onBlur: (event) => {
				if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
					isFocusWithinRef.current = false;
					if (lastFocusedElementRef.current) {
						lastFocusedElementRef.current.focus({ preventScroll: true });
						lastFocusedElementRef.current = null;
					}
				}
			},
			onFocus: (event) => {
				if (event.target instanceof HTMLElement && event.target.dataset.dismissible === "false") return;
				if (!isFocusWithinRef.current) {
					isFocusWithinRef.current = true;
					lastFocusedElementRef.current = event.relatedTarget;
				}
			},
			onMouseEnter: () => setExpanded(true),
			onMouseMove: () => setExpanded(true),
			onMouseLeave: () => {
				if (!interacting) setExpanded(false);
			},
			onDragEnd: () => setExpanded(false),
			onPointerDown: (event) => {
				if (event.target instanceof HTMLElement && event.target.dataset.dismissible === "false") return;
				setInteracting(true);
			},
			onPointerUp: () => setInteracting(false)
		}, filteredToasts.filter((toast) => !toast.position && index === 0 || toast.position === position).map((toast, index) => {
			var _toastOptions_duration, _toastOptions_closeButton;
			return /* @__PURE__ */ import_react.createElement(Toast, {
				key: toast.id,
				icons,
				index,
				toast,
				defaultRichColors: richColors,
				duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
				className: toastOptions == null ? void 0 : toastOptions.className,
				descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
				invert,
				visibleToasts,
				closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
				interacting,
				position,
				style: toastOptions == null ? void 0 : toastOptions.style,
				unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
				classNames: toastOptions == null ? void 0 : toastOptions.classNames,
				cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
				actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
				closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
				removeToast,
				toasts: filteredToasts.filter((t) => t.position == toast.position),
				heights: heights.filter((h) => h.position == toast.position),
				setHeights,
				expandByDefault: expand,
				gap,
				expanded,
				swipeDirections: props.swipeDirections
			});
		}));
	}));
});
//#endregion
//#region components/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }),
			info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }),
			warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }),
			error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { className: "size-4" }),
			loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		...props
	});
};
//#endregion
//#region app/recipes.json
var recipes_default = /* @__PURE__ */ JSON.parse("[{\"id\":1,\"name\":\"蒜蓉粉絲蒸絲瓜\",\"source\":\"1-manjeh_kitchen.mp4 (@manjeh_kitchen)\",\"category\":\"蒸菜\",\"products\":[\"vermicelli\"],\"ingredients\":\"絲瓜、玖柒牌龍口粉絲、蒜蓉、紅辣椒\",\"seasoning\":\"海鮮豉油（或蒸魚豉油）、食用油、鹽\",\"steps\":[\"絲瓜去皮，切成約5cm厚的段，排喺碟上\",\"龍口粉絲用凍水浸15分鐘至軟身，瀝乾鋪在絲瓜段下方\",\"蒜頭去皮剁蓉，紅辣椒切碎\",\"蒜蓉、辣椒碎加海鮮豉油、少少鹽拌勻成味汁\",\"將味汁均勻淋在每段絲瓜上\",\"凍水上鍋，大火蒸約6分鐘就完成起鍋。\"],\"tips\":\"\",\"image\":\"/assets/food/1.webp\"},{\"id\":2,\"name\":\"紫菜脆片包年糕（香煎）\",\"source\":\"1-manjeh_kitchen.mp4 (@manjeh_kitchen)\",\"category\":\"香煎小食\",\"products\":[\"nori\"],\"ingredients\":\"玖柒牌紫菜脆片、白年糕（或糯米粉）\",\"seasoning\":\"食用油（少量）\",\"steps\":[\"平底鑊細火預熱，刷薄薄一層油\",\"取一張紫菜脆片放入鑊中鋪平\",\"將白年糕（或糯米粉糰）均勻鋪在紫菜上、輕輕壓平\",\"細火慢煎約2分鐘至底部微黃酥脆\",\"翻面再煎1-2分鐘至兩面金黃、年糕熟透\",\"起鍋切塊或切角，趁熱食。\"],\"tips\":\"\",\"image\":\"/assets/food/2.webp\"},{\"id\":3,\"name\":\"泰式涼拌水晶粉皮\",\"source\":\"2-big_big_foodie.mp4 (@big_big_foodie)\",\"category\":\"涼拌前菜\",\"products\":[\"crystal\"],\"ingredients\":\"玖柒牌泰式水晶粉皮、青瓜、甘筍、火腿\",\"seasoning\":\"泰式辣醬\",\"steps\":[\"青瓜、甘筍、火腿分別切幼絲備用\",\"鑊中煲滾水，放入水晶粉皮煮至軟身（約1-2分鐘）\",\"撈起粉皮立即放入冰水中過涼，瀝乾水分備用\",\"將粉皮同青瓜絲、甘筍絲、火腿絲一同上碟\",\"淋上適量泰式辣醬拌勻就完成上碟享用。\"],\"tips\":\"\",\"image\":\"/assets/food/3.webp\"},{\"id\":4,\"name\":\"椰菜豬肉寬粉煲\",\"source\":\"2-big_big_foodie.mp4 (@big_big_foodie)\",\"category\":\"煲仔菜\",\"products\":[\"wide\"],\"ingredients\":\"玖柒牌寬粉、椰菜、豬肉片、蟹柳\",\"seasoning\":\"清水、鹽、生抽\",\"steps\":[\"寬粉用涼水浸約15分鐘至軟身備用\",\"鑊中先放入泡好的寬粉鋪底\",\"依次鋪上撕成小塊的椰菜、豬肉片、蟹柳\",\"加入適量清水（水量約沒過食材一半）\",\"蓋上鍋蓋，以中火燉煮約8-10分鐘\",\"開蓋，寬粉吸飽湯汁就可以上枱。\"],\"tips\":\"\",\"image\":\"/assets/food/4.webp\"},{\"id\":5,\"name\":\"麻婆福袋海鮮粉絲煲（素甜辣版）\",\"source\":\"3-kuromi85292.mp4 (@kuromi85292)\",\"category\":\"煲仔菜\",\"products\":[\"wide\"],\"ingredients\":\"玖柒牌寬薯粉、鮮蝦仁、冬菇、絲瓜、青紅椒、紫菜、葱花\",\"seasoning\":\"蒜蓉、胡椒鹽、海鮮豉油、清水\",\"steps\":[\"寬粉用清水浸約15分鐘至軟身備用\",\"蝦仁用蒜蓉、胡椒鹽醃約15分鐘\",\"冬菇洗淨對半切開；絲瓜去皮切段\",\"砂鍋放入紫菜同清水300毫升，大火煮約3分鐘\",\"加入冬菇、絲瓜段煮滾\",\"加入泡好的寬粉\",\"加入少少素甜辣醬（控制辣度）拌勻\",\"放入醃好的蝦仁煮熟\",\"淋少少海鮮豉油調味\",\"蓋蓋細火燜約3分鐘\",\"撒上青紅椒碎粒同葱花點綴就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/5.webp\"},{\"id\":6,\"name\":\"紫菜蛋蝦仁炒水晶粉皮\",\"source\":\"4.mp4（@ching.longs）\",\"category\":\"小炒\",\"products\":[\"nori\",\"crystal\"],\"ingredients\":\"玖柒牌水晶粉皮、玖柒牌紫菜、蝦仁、雞蛋、青菜（油菜/菜心）\",\"seasoning\":\"蒜蓉、生抽、鹽、食用油\",\"steps\":[\"水晶粉皮凍水浸至軟身，剪短備用\",\"雞蛋打散；青菜洗淨切段；蝦仁去蝦線備用\",\"熱鍋熱油，先下蒜蓉爆香\",\"倒入蛋液炒至凝固盛起\",\"鑊內補油，下蝦仁炒至變色\",\"加入青菜炒至剛熟\",\"放入泡好的水晶粉皮兜炒\",\"加少少生抽、鹽調味\",\"最之後撒入紫菜碎兜炒均勻就完成上碟。\"],\"tips\":\"\",\"image\":\"/assets/food/6.webp\"},{\"id\":7,\"name\":\"蒜蓉粉絲蒸龍蝦\",\"source\":\"5.mp4 (@SERENAINHK)\",\"category\":\"蒸菜\",\"products\":[\"vermicelli\"],\"ingredients\":\"玖柒牌龍口粉絲、龍蝦、蒜蓉、葱花\",\"seasoning\":\"蒸魚豉油、食用油\",\"steps\":[\"龍蝦洗乾淨，對半切開或斬件備用\",\"龍口粉絲用温水浸10-15分鐘至軟身，瀝乾鋪喺碟底\",\"將龍蝦擺喺粉絲面頭，撒上大量蒜蓉\",\"淋少少食用油、蒸魚豉油調味\",\"蒸鍋水開之後大火蒸約8-10分鐘至龍蝦熟透\",\"起鍋撒上葱花，再淋少少熱油激香就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/7.webp\"},{\"id\":8,\"name\":\"紫菜沙白海鮮粉絲湯\",\"source\":\"5.mp4 (@SERENAINHK)\",\"category\":\"湯羹\",\"products\":[\"nori\",\"wide\"],\"ingredients\":\"玖柒牌紫菜、沙白（花甲/蛤蜊）、寬薯粉、葱花\",\"seasoning\":\"薑片、鹽、清水\",\"steps\":[\"沙白提前用淡鹽水浸吐沙1小時，沖洗乾淨\",\"寬薯粉凍水浸15分鐘至軟身\",\"鑊內加適量清水煮滾，放入薑片\",\"加入沙白煮至全部開口\",\"放入紫菜同寬薯粉再煮約2分鐘\",\"加鹽調味，撒上葱花就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/8.webp\"},{\"id\":9,\"name\":\"麻醬雞絲水晶粉皮\",\"source\":\"5.mp4 (@SERENAINHK)\",\"category\":\"涼拌/蒸菜\",\"products\":[\"crystal\"],\"ingredients\":\"玖柒牌水晶粉皮、雞腿肉（或雞胸肉）、青瓜絲、甘筍絲\",\"seasoning\":\"芝麻醬、蒜蓉、生抽、香醋、辣椒油\",\"steps\":[\"雞腿肉凍水下鍋，加薑片煮約15分鐘至熟，撈起過冰水之後撕成雞絲\",\"水晶粉皮凍水浸至軟身，剪段\",\"青瓜、甘筍切細絲\",\"粉皮同雞絲、青瓜絲、甘筍絲一同上碟\",\"麻醬加少少温水、生抽、香醋、蒜蓉、辣椒油調勻\",\"將麻醬汁淋在粉皮雞絲上拌勻就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/9.webp\"},{\"id\":10,\"name\":\"紫菜蒸凍蝦（豆卜版）\",\"source\":\"6.mp4（@christytfy38）\",\"category\":\"蒸菜\",\"products\":[\"nori\"],\"ingredients\":\"玖柒牌紫菜、凍蝦仁（或蝦柳）、豆卜（炸豆皮）、金華火腿片\",\"seasoning\":\"蒸魚豉油、薑片\",\"steps\":[\"紫菜凍水快速沖洗備用\",\"凍蝦仁解凍，豆卜對半切開\",\"將紫菜鋪喺碟底，擺上豆卜\",\"放入蝦仁、火腿片、薑片\",\"淋少少蒸魚豉油\",\"凍水上鍋，大火蒸約6-8分鐘就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/10.webp\"},{\"id\":11,\"name\":\"寬粉海鮮湯\",\"source\":\"6.mp4（@christytfy38）\",\"category\":\"湯羹\",\"products\":[\"nori\",\"wide\"],\"ingredients\":\"玖柒牌綠豆馬鈴薯寬粉、紫菜、蟹柳、火腿片、蝦仁\",\"seasoning\":\"鹽、胡椒粉、薑絲、清水\",\"steps\":[\"寬粉凍水浸約15分鐘至軟身\",\"蟹柳、火腿切段；蝦仁解凍備用\",\"鑊內加水燒開，放入薑絲\",\"加入寬粉同火腿片煮約2分鐘\",\"放入蟹柳、蝦仁煮熟\",\"加紫菜略煮\",\"加鹽、胡椒粉調味就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/11.webp\"},{\"id\":12,\"name\":\"涼拌水晶粉皮（絲瓜紫菜版）\",\"source\":\"6.mp4（@christytfy38）\",\"category\":\"涼拌\",\"products\":[\"nori\",\"crystal\"],\"ingredients\":\"玖柒牌水晶粉皮、絲瓜、紫菜、芝麻醬\",\"seasoning\":\"蒜蓉、生抽、香醋、辣椒油\",\"steps\":[\"絲瓜去皮切條；紫菜剪小片\",\"水晶粉皮凍水浸至軟身，剪段\",\"煲滾水，下絲瓜焯30秒撈起過涼水\",\"將粉皮、紫菜、絲瓜條放入大碗\",\"蒜蓉、生抽、香醋、辣椒油、芝麻醬調勻成醬汁\",\"淋上醬汁拌勻就完成上碟。\"],\"tips\":\"\",\"image\":\"/assets/food/12.webp\"},{\"id\":13,\"name\":\"龍口粉絲蝦仁蛋煎餅\",\"source\":\"6.mp4（@christytfy38）\",\"category\":\"香煎\",\"products\":[\"vermicelli\"],\"ingredients\":\"玖柒牌龍口粉絲、蝦仁、雞蛋、青菜（油菜）\",\"seasoning\":\"鹽、生抽、食用油\",\"steps\":[\"龍口粉絲温水泡軟之後剪短\",\"雞蛋打散，加入粉絲、蝦仁、切碎青菜拌勻\",\"加少少鹽、生抽調味\",\"平底鑊熱油，倒入粉絲蛋液攤成圓餅\",\"細火煎至底部金黃定型\",\"翻面再煎2分鐘至兩面金黃熟透就完成切塊上桌。\"],\"tips\":\"\",\"image\":\"/assets/food/13.webp\"},{\"id\":15,\"name\":\"XO醬肉碎炒水晶粉皮（意頭菜）\",\"source\":\"10.mp4 (@likakakitchen)\",\"category\":\"小炒\",\"products\":[\"crystal\"],\"ingredients\":\"玖柒牌水晶粉皮、豬肉碎、紅椒粒、黃椒粒、綠椒粒、葱花\",\"seasoning\":\"蒜蓉、XO醬、蠔油、老抽、生抽、食用油\",\"steps\":[\"水晶粉皮用温水浸約30分鐘，撈起瀝乾\",\"紅黃綠三色椒切小粒備用\",\"熱鍋熱油，中火下豬肉碎炒散\",\"加蒜蓉繼續炒香\",\"加入XO醬、蠔油、老抽調味上色\",\"倒入水晶粉皮兜炒至均勻上色\",\"加入三色椒粒兜炒均勻\",\"撒上葱花兜勻起鍋上碟。\"],\"tips\":\"\",\"image\":\"/assets/food/15.webp\"},{\"id\":16,\"name\":\"螞蟻上樹\",\"source\":\"\",\"category\":\"小炒\",\"products\":[\"vermicelli\"],\"ingredients\":\"龍口粉絲2把、免治豬肉150g（肥瘦比例3:7）、蒜末、薑末、葱花\",\"seasoning\":\"生抽1勺、蠔油1勺、豆瓣醬半勺、少少白糖（無豆瓣醬可替換為老乾媽）\",\"steps\":[\"粉絲温水泡 10 分鐘，剪短瀝乾\",\"肉碎凍鑊落，細火煸散變色\",\"加蒜末薑末 + 豆瓣醬炒出紅油\",\"加半碗清水，加生抽蠔油糖\",\"下粉絲，細火兜炒收汁,等粉絲吸飽醬汁\",\"湯汁收乾撒葱花起鍋\"],\"tips\":\"秘訣 ①：粉絲泡發\\n龍口粉絲用温水泡 10 分鐘\\n泡到變軟發白，撈起剪成 2 段\\n凍水泡=太硬，熱水泡=太爛\\n温水+10分鐘=剛好\\n秘訣 ②：肉碎冷鍋煸\\n肉碎凍鑊落，細火慢煸\\n不停撥散，煸到變色出油\\n熱鍋下肉碎=結塊\\n冷鍋細火=粒粒分明\",\"image\":\"/assets/food/16.webp\"},{\"id\":17,\"name\":\"炒粉絲\",\"source\":\"\",\"category\":\"小炒\",\"products\":[\"vermicelli\"],\"ingredients\":\"玖柒牌龍口粉絲3塊、火腿腸2根、洋葱半個、豆芽150g、雞蛋2個\",\"seasoning\":\"鹽、味精、生抽\",\"steps\":[\"粉絲放清水浸變軟;洋葱切絲;火腿腸斜切片\",\"鑊中油熱，下雞蛋煎至定型，搗碎盛起。\",\"留底油下豆芽、洋葱、火腿腸炒出香味，加鹽、味精、生抽調味兜炒。\",\"倒回雞蛋、粉絲兜炒1分鐘上色入味就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/17.webp\"},{\"id\":18,\"name\":\"蒜蓉粉絲金針菇\",\"source\":\"\",\"category\":\"蒸菜\",\"products\":[\"vermicelli\"],\"ingredients\":\"金針菇 龍口粉絲 蒜頭 指天椒 葱花\",\"seasoning\":\"生抽 蠔油 鹽 糖\",\"steps\":[\"調醬汁:蒜切蓉潑熱油+2勺生抽+1勺蠔油+小勺鹽+小勺糖拌勻備用\",\"粉絲温水泡軟鋪盤底，金針菇洗淨擺喺粉絲上\",\"醬汁均勻得澆在金針菇上，放上指天椒，水開上鍋蒸8分鐘，起鍋撒上葱花，淋一勺蒸魚豉油，潑熱油就完成開吃\"],\"tips\":\"\",\"image\":\"/assets/food/18.webp\"},{\"id\":19,\"name\":\"肉碎粉絲湯\",\"source\":\"\",\"category\":\"湯羹\",\"products\":[\"vermicelli\"],\"ingredients\":\"• 免治豬肉 100g 、肥肉少量\\n• 粉絲 1把\\n• 葱花、薑末、蒜末\",\"seasoning\":\"• 鹽、生抽、白胡椒粉\\n• 雞精（可選）\",\"steps\":[\"粉絲用温水泡軟，剪短備用。\",\"鑊中放少少油，放入切好的肥肉乾煸出油汁，下薑蒜爆香。\",\"倒入足量熱水燒開。\",\"放入泡好的粉絲，煮1～2分鐘至粉絲透明。\",\"用筷子慢慢一點點放入醃制好的肉碎。\",\"加鹽、白胡椒粉調味，喜歡可放一點點雞精。\",\"起鍋前撒葱花就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/19.webp\"},{\"id\":20,\"name\":\"牛肉丸粉絲湯\",\"source\":\"\",\"category\":\"湯羹\",\"products\":[\"vermicelli\"],\"ingredients\":\"粉絲，牛肉丸，豆腐皮，苕尖，蒜末葱花\",\"seasoning\":\"2勺生抽，1勺胡椒粉，1勺鹽\",\"steps\":[\"蒜末爆香，加入牛肉丸兜炒均勻\",\"加入適量開水煮滾，再加2勺生抽，1勺胡椒粉，1勺鹽，少少雞精調味\",\"倒入粉絲，豆皮，苕尖煮1分鐘\",\"加一勺辣椒油，撒上葱花就完成\"],\"tips\":\"\",\"image\":\"/assets/food/20.webp\"},{\"id\":21,\"name\":\"紫菜炒飯\",\"source\":\"\",\"category\":\"小炒\",\"products\":[\"nori\"],\"ingredients\":\"紫菜、雞蛋、火腿丁、蝦皮、米飯、葱花\",\"seasoning\":\"生抽、少少鹽、白胡椒粉\",\"steps\":[\"鍋熱放入紫菜，細火烘至變綠，撈起捏碎備用。\",\"雞蛋下鍋煎好，盛起備用。\",\"鑊中油熱，放入火腿丁煎至微焦，加入蝦皮兜炒幾秒鐘。\",\"倒入米飯，將米飯炒散。\",\"放入炒好的雞蛋，加生抽、少少鹽、白胡椒粉調味兜炒。\",\"最之後放入烘好捏碎的紫菜以及葱花，兜炒均勻就完成起鍋\"],\"tips\":\"\",\"image\":\"/assets/food/21.webp\"},{\"id\":22,\"name\":\"紫菜豆腐湯\",\"source\":\"\",\"category\":\"湯羹\",\"products\":[\"nori\"],\"ingredients\":\"豆腐、紫菜、蝦皮、蒜末、葱花\",\"seasoning\":\"1勺生抽、適量鹽、少少雞精\",\"steps\":[\"豆腐切成小塊，紫菜用手撕成小片，葱花同蒜末提前切好。\",\"鑊中放少少油，加入蝦皮、蒜末同部分葱花，細火炒出香味。 \",\"倒入2碗清水，大火煮滾之後放入豆腐，繼續煮3分鐘。\",\"放入紫菜，用勺子輕輕攪散，煮至紫菜完全泡開。 \",\"加入1勺生抽、適量鹽同少少雞精，拌勻。\",\"關火之後撒上剩餘葱花，盛入碗中就可以開喝了。\"],\"tips\":\"\",\"image\":\"/assets/food/22.webp\"},{\"id\":23,\"name\":\"口蘑紫菜湯\",\"source\":\"\",\"category\":\"湯羹\",\"products\":[\"nori\"],\"ingredients\":\"口蘑、紫菜、蝦皮、葱花\",\"seasoning\":\"生抽、香油、鹽、雞精、白胡椒粉\",\"steps\":[\"鑊中放少少油，放入口蘑煎一會兒，翻面煎出汁水。\",\"往鑊內倒入清水，煮 8 分鐘。\",\"碗中備好紫菜、蝦皮、葱花，加入生抽、半勺香油、適量鹽、雞精、白胡椒粉。\",\"將煮好的口蘑連同湯汁一起倒入碗中就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/23.webp\"},{\"id\":24,\"name\":\"紫菜蝦滑餅\",\"source\":\"\",\"category\":\"香煎\",\"products\":[\"nori\"],\"ingredients\":\"蝦滑、紫菜、葱花、蛋清、黑白芝麻\",\"seasoning\":\"生抽、鹽、白胡椒粉\",\"steps\":[\"蝦滑中加入 1 勺生抽、適量鹽、白胡椒粉，拌勻。\",\"紫菜撕碎，加入葱花、1 顆蛋清拌勻。\",\"鍋刷一層油，鋪上一層拌好的紫菜，再放上蝦滑，撒上黑白芝麻。\",\"細火煎至兩面金黃就完成起鍋。\"],\"tips\":\"\",\"image\":\"/assets/food/24.webp\"},{\"id\":25,\"name\":\"空氣炸鍋烤寬粉\",\"source\":\"\",\"category\":\"香烤\",\"products\":[\"wide\"],\"ingredients\":\"馬鈴薯寬粉、竹簽\",\"seasoning\":\"番茄醬 1 勺、蒜蓉辣椒醬 1 勺、白芝麻 1 勺、蜂蜜 1 勺、燒烤料 1 勺、辣椒粉半勺、涼開水 2 勺\",\"steps\":[\"調製醬汁：碗中放入番茄醬、蒜蓉辣椒醬、白芝麻、蜂蜜、燒烤料、辣椒粉，加入 2 勺涼開水拌勻。\",\"寬粉用熱開水泡軟。\",\"泡軟的寬粉用竹簽串起來。\",\"寬粉一面刷上醬汁，空氣炸鍋 180℃烤 5 分鐘。\",\"翻面，再次刷上醬料，繼續 180℃烤 5 分鐘就完成。\"],\"tips\":\"\",\"image\":\"/assets/food/25.webp\"},{\"id\":26,\"name\":\"流汁寬粉\",\"source\":\"\",\"category\":\"涼拌\",\"products\":[\"wide\"],\"ingredients\":\"馬鈴薯寬粉、芫荽\",\"seasoning\":\"小料（葱蒜辣椒等）、熱油、生抽、蠔油、醋、白糖、味精\",\"steps\":[\"碗中放入小料，澆上熱油激發出香味。\",\"加入生抽、蠔油、醋、白糖、味精調配醬汁。\",\"鑊中水燒開，下入寬粉。\",\"煮 3 分鐘左右撈起，過一遍涼水。\",\"寬粉瀝乾水分，倒入調好的醬汁。\",\"充分拌勻就食得。\"],\"tips\":\"\",\"image\":\"/assets/food/26.webp\"},{\"id\":27,\"name\":\"炒寬粉\",\"source\":\"\",\"category\":\"小炒\",\"products\":[\"wide\"],\"ingredients\":\"馬鈴薯寬粉、雞蛋、青瓜、火腿、蒜末\",\"seasoning\":\"生抽 1 勺、老抽半勺、鹽一小勺、雞精\",\"steps\":[\"寬粉放入水中煮透之後撈起備用。\",\"備好配菜：雞蛋打散、青瓜切片、火腿切片、蒜末備好。\",\"鑊中熱油，倒入雞蛋液，煎熟之後搗碎盛起。\",\"鍋裏再放少少油，下蒜末爆香，放入青瓜炒熟。\",\"將煮好的寬粉、雞蛋碎、火腿片一同倒入鑊中。\",\"兜炒片刻，加入 1 勺生抽、半勺老抽、一小勺鹽、少少雞精。\",\"繼續兜炒均勻就完成起鍋。\"],\"tips\":\"\",\"image\":\"/assets/food/27.webp\"}]");
//#endregion
//#region app/innovation.json
var innovation_default = [
	{
		"id": 28,
		"name": "鹹蛋黃沙沙龍口粉絲煲",
		"source": "玖柒廚房原創提案",
		"category": "創新煲仔菜",
		"products": ["vermicelli"],
		"ingredients": "玖柒牌龍口粉絲 100 克、熟鹹蛋黃 3 隻、番茄半個、紅甜椒四分一個、洋蔥四分一個、蒜頭 2 瓣、蔥 1 棵、芫荽少許",
		"seasoning": "牛油 15 克、清雞湯或清水 200 毫升、生抽 1 茶匙、糖四分一茶匙、青檸汁 1 茶匙、白胡椒粉少許",
		"steps": [
			"龍口粉絲用暖水浸約 10 分鐘至軟身，剪短後瀝乾。熟鹹蛋黃用叉壓碎，蒜頭切蓉，蔥切粒。",
			"番茄去籽，連同紅甜椒、洋蔥切成細粒，拌入青檸汁，留起做沙沙配料。",
			"砂鍋用細火燒溶牛油，加入蒜蓉炒香，再落鹹蛋黃炒約 1 至 2 分鐘，炒到起細泡同散發鹹香。",
			"倒入雞湯，加入生抽、糖同白胡椒粉，拌勻後煮滾。鹹蛋黃本身有鹹味，先試味再決定使唔使加鹽。",
			"加入粉絲，用筷子輕輕撥散，中細火煮約 2 至 3 分鐘，等粉絲吸收蛋黃汁；太乾可逐少加熱水。",
			"將大部分沙沙配料拌入粉絲，熄火。面頭集中放上餘下沙沙，撒蔥粒同少量芫荽，即刻連煲上枱。"
		],
		"tips": "建議 2 人份。沙沙配料臨上枱先加入，保留爽口口感。採用已煮熟嘅鹹蛋黃；如由生鹹蛋取黃，先蒸至全熟。",
		"image": "/assets/food/28.webp",
		"story": "金沙鹹香，遇上清新沙沙。",
		"time": "約 25 分鐘",
		"servings": "2 人份"
	},
	{
		"id": 29,
		"name": "鷹嘴豆薄荷水晶粉皮沙律",
		"source": "玖柒廚房原創提案",
		"category": "清新沙律",
		"products": ["crystal"],
		"ingredients": "玖柒牌水晶粉皮 100 克、罐裝熟鷹嘴豆 120 克（瀝乾）、青瓜半條、車厘茄 8 粒、新鮮薄荷葉 10 片、菲達芝士 30 克、檸檬半個",
		"seasoning": "橄欖油 1.5 湯匙、檸檬汁 1.5 湯匙、蜜糖 1 茶匙、鹽四分一茶匙、黑胡椒少許",
		"steps": [
			"將水晶粉皮放入滾水，煮約 1 至 2 分鐘至軟身；如包裝指示時間不同，以包裝為準。撈起後用可飲用凍水沖涼，瀝乾並剪成方便入口嘅長度。",
			"熟鷹嘴豆沖洗瀝乾。青瓜用刨刀刨成薄帶，車厘茄切半；薄荷留幾片完整葉做裝飾，其餘撕細。",
			"將橄欖油、檸檬汁、蜜糖、鹽同黑胡椒攪勻，調成清新沙律汁。",
			"粉皮同鷹嘴豆先拌入約三分之二沙律汁，等每塊粉皮都薄薄掛汁，再輕手拌入車厘茄同薄荷碎。",
			"將粉皮鬆鬆堆喺淺碟中央，青瓜帶捲成小圈排喺旁邊，再撒上捏碎嘅菲達芝士。",
			"淋上餘下沙律汁，加完整薄荷葉同少許檸檬皮屑，即拌即食。"
		],
		"tips": "建議 2 人份。冷盤請用可直接飲用嘅水沖涼粉皮。拌好後盡快食用，薄荷臨食先落最香。",
		"image": "/assets/food/29.webp",
		"story": "一口清爽，食出地中海靈感。",
		"time": "約 20 分鐘",
		"servings": "2 人份"
	},
	{
		"id": 30,
		"name": "番茄芝士燴寬粉",
		"source": "玖柒廚房原創提案",
		"category": "芝士燴菜",
		"products": ["wide"],
		"ingredients": "玖柒牌綠豆馬鈴薯寬粉 120 克、熟番茄 2 個、車厘茄 6 粒、洋蔥四分一個、蒜頭 2 瓣、莫扎瑞拉芝士 60 克、巴馬臣芝士 10 克、羅勒葉少許",
		"seasoning": "橄欖油 1 湯匙、茄膏 1 湯匙、清水 250 毫升、糖半茶匙、鹽四分一茶匙、黑胡椒少許",
		"steps": [
			"寬粉按包裝指示浸軟或煮至軟身，瀝乾備用。番茄切細粒、車厘茄切半，洋蔥切粒，蒜頭切蓉。",
			"用可上枱嘅淺鍋燒熱橄欖油，落洋蔥用中細火炒約 3 分鐘至軟，再加蒜蓉炒香。",
			"加入茄膏炒約 30 秒，落番茄粒、清水、糖、鹽同黑胡椒，煮滾後轉細火煮約 8 分鐘。",
			"將寬粉放入番茄汁，輕輕拌勻，用細火煮約 2 至 3 分鐘至入味。保持少許醬汁，避免收得太乾。",
			"鋪上車厘茄同撕碎嘅莫扎瑞拉芝士，撒巴馬臣芝士，蓋好鍋蓋，用細火焗約 2 分鐘至芝士融化。",
			"熄火後放上羅勒葉，磨少許黑胡椒，連鍋上枱。想加焦香效果，可使用適合焗爐嘅器皿，放上火焗至芝士微焦。"
		],
		"tips": "建議 2 人份。呢款寬粉係薄身幼闊條，煮到軟身就得，唔使煮到爛。芝士落鍋後用細火，避免黐底。",
		"image": "/assets/food/30.webp",
		"story": "濃茄、拉絲芝士，煮出新滋味。",
		"time": "約 30 分鐘",
		"servings": "2 人份"
	}
];
//#endregion
//#region app/ig.json
var ig_default = [{
	"id": 14,
	"name": "蒜蓉粉絲蒸貴妃蚌（花甲）",
	"source": "9.mp4（@Dusttobestar）",
	"category": "蒸菜",
	"products": ["vermicelli"],
	"ingredients": "玖柒牌龍口粉絲、貴妃蚌（或花甲）、蒜蓉、葱花",
	"seasoning": "甜辣豆瓣醬、蠔油、鹽",
	"steps": [
		"貴妃蚌/花甲用淡鹽水浸吐沙1-2小時，洗淨瀝乾",
		"龍口粉絲凍水浸約15分鐘至軟身備用",
		"鑊內下油，細火爆香蒜蓉",
		"加甜辣豆瓣醬、蠔油、少少鹽調成醬",
		"倒入泡好的粉絲翻拌均勻，再撒葱花拌勻",
		"將粉絲鋪喺碟底，貴妃蚌開口朝上擺喺粉絲上",
		"蓋鍋蓋大火蒸約5分鐘至蚌肉熟透就完成。"
	],
	"tips": "",
	"image": "/assets/food/14.webp",
	"story": "IG 人氣蒸菜。粉絲墊底吸滿蒜蓉豉香，貴妃蚌鮮甜彈牙。",
	"time": "約 25 分鐘（另加吐沙時間）",
	"servings": "2 人份"
}];
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ImagePlus = createLucideIcon("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
//#endregion
//#region components/ui/dialog.tsx
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
		"data-slot": "dialog-close",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn$1("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
			"data-slot": "dialog-content",
			className: cn$1("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn$1("text-lg leading-none font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn$1("text-sm text-muted-foreground", className),
		...props
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Circle = createLucideIcon("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
function setRef$4(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$14(setRef$4, "setRef");
function composeRefs$4(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$4(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$4(refs[i], null);
			}
		};
	};
}
__name$14(composeRefs$4, "composeRefs");
function useComposedRefs$4(...refs) {
	return import_react.useCallback(composeRefs$4(...refs), refs);
}
__name$14(useComposedRefs$4, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
function useSize(element) {
	const [size, setSize] = import_react.useState(void 0);
	useLayoutEffect2(() => {
		if (element) {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			});
			const resizeObserver = new ResizeObserver((entries) => {
				if (!Array.isArray(entries)) return;
				if (!entries.length) return;
				const entry = entries[0];
				let width;
				let height;
				if ("borderBoxSize" in entry) {
					const borderSizeEntry = entry["borderBoxSize"];
					const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
					width = borderSize["inlineSize"];
					height = borderSize["blockSize"];
				} else {
					width = element.offsetWidth;
					height = element.offsetHeight;
				}
				setSize({
					width,
					height
				});
			});
			resizeObserver.observe(element, { box: "border-box" });
			return () => resizeObserver.unobserve(element);
		} else setSize(void 0);
	}, [element]);
	return size;
}
__name$13(useSize, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-radio-group/dist/index.mjs
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = /* @__PURE__ */ createContextScope(RADIO_NAME);
var [RadioProviderImpl, useRadioContext] = createRadioContext(RADIO_NAME);
function RadioProvider(props) {
	const { __scopeRadio, checked = false, children, disabled, form, name, onCheck, required, value = "on", internal_do_not_use_render } = props;
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const context = {
		checked,
		disabled,
		required,
		name,
		form,
		value,
		control,
		setControl,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		isFormControl: control ? !!form || !!control.closest("form") : true,
		bubbleInput,
		setBubbleInput,
		onCheck: /* @__PURE__ */ __name$12(() => onCheck?.(), "onCheck")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioProviderImpl, {
		scope: __scopeRadio,
		...context,
		children: isFunction$3(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$12(RadioProvider, "RadioProvider");
var TRIGGER_NAME$2 = "RadioTrigger";
var RadioTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioTrigger2({ __scopeRadio, onClick, ...radioProps }, forwardedRef) {
	const { checked, disabled, value, setControl, onCheck, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useRadioContext(TRIGGER_NAME$2, __scopeRadio);
	const composedRefs = useComposedRefs$4(forwardedRef, setControl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "radio",
		"aria-checked": checked,
		"data-state": getState$1(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...radioProps,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (!checked) {
				onUserInteraction();
				onCheck();
			}
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "RadioTrigger"));
var INDICATOR_NAME$2 = "RadioIndicator";
var RadioIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioIndicator2(props, forwardedRef) {
	const { __scopeRadio, forceMount, ...indicatorProps } = props;
	const context = useRadioContext(INDICATOR_NAME$2, __scopeRadio);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$1(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef
		})
	});
}, "RadioIndicator"));
var BUBBLE_INPUT_NAME$3 = "RadioBubbleInput";
var RadioBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioBubbleInput2({ __scopeRadio, onClick, ...props }, forwardedRef) {
	const { control, checked, required, disabled, name, value, form, bubbleInput, setBubbleInput, hasConsumerStoppedPropagationRef, userInteractionCount } = useRadioContext(BUBBLE_INPUT_NAME$3, __scopeRadio);
	const composedRefs = useComposedRefs$4(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "radio",
		"aria-hidden": true,
		defaultChecked: defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "RadioBubbleInput"));
function isFunction$3(value) {
	return typeof value === "function";
}
__name$12(isFunction$3, "isFunction");
function getState$1(checked) {
	return checked ? "checked" : "unchecked";
}
__name$12(getState$1, "getState");
var ARROW_KEYS$1 = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = /* @__PURE__ */ createContextScope(RADIO_GROUP_NAME, [createRovingFocusGroupScope, createRadioScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioGroup2(props, forwardedRef) {
	const { __scopeRadioGroup, name, form, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? null,
		onChange: onValueChange,
		caller: RADIO_GROUP_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const composedRefs = useComposedRefs$4(forwardedRef, setControl);
	const initialValueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$12(() => setValue(initialValueRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, {
		scope: __scopeRadioGroup,
		name,
		form,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: direction,
				...groupProps,
				ref: composedRefs
			})
		})
	});
}, "RadioGroup"));
var ITEM_PROVIDER_NAME = "RadioGroupItemProvider";
var ITEM_TRIGGER_NAME = "RadioGroupItemTrigger";
function RadioGroupItemProvider(props) {
	const { __scopeRadioGroup, value, disabled, children, internal_do_not_use_render } = props;
	const context = useRadioGroupContext(ITEM_PROVIDER_NAME, __scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const isDisabled = context.disabled || disabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioProvider, {
		...radioScope,
		checked: context.value === value,
		disabled: isDisabled,
		required: context.required,
		name: context.name,
		form: context.form,
		value,
		onCheck: () => context.onValueChange(value),
		internal_do_not_use_render,
		children
	});
}
__name$12(RadioGroupItemProvider, "RadioGroupItemProvider");
var RadioGroupItemTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioGroupItemTrigger2(props, forwardedRef) {
	const { __scopeRadioGroup, ...triggerProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const { checked, disabled } = useRadioContext(ITEM_TRIGGER_NAME, radioScope.__scopeRadio);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$4(forwardedRef, ref);
	const isArrowKeyPressedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleKeyDown = /* @__PURE__ */ __name$12((event) => {
			if (ARROW_KEYS$1.includes(event.key)) isArrowKeyPressedRef.current = true;
		}, "handleKeyDown");
		const handleKeyUp = /* @__PURE__ */ __name$12(() => isArrowKeyPressedRef.current = false, "handleKeyUp");
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioTrigger, {
			...radioScope,
			...triggerProps,
			ref: composedRefs,
			onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: composeEventHandlers(triggerProps.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
}, "RadioGroupItemTrigger"));
var RadioGroupItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioGroupItem2(props, forwardedRef) {
	const { __scopeRadioGroup, value, disabled, ...itemProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemProvider, {
		__scopeRadioGroup,
		value,
		disabled,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemTrigger, {
			...itemProps,
			ref: forwardedRef,
			__scopeRadioGroup
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemBubbleInput, { __scopeRadioGroup })] })
	});
}, "RadioGroupItem"));
var RadioGroupItemBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioGroupItemBubbleInput2(props, forwardedRef) {
	const { __scopeRadioGroup, ...bubbleProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBubbleInput, {
		...useRadioScope(__scopeRadioGroup),
		...bubbleProps,
		ref: forwardedRef
	});
}, "RadioGroupItemBubbleInput"));
var RadioGroupIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function RadioGroupIndicator2(props, forwardedRef) {
	const { __scopeRadioGroup, ...indicatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioIndicator, {
		...useRadioScope(__scopeRadioGroup),
		...indicatorProps,
		ref: forwardedRef
	});
}, "RadioGroupIndicator"));
//#endregion
//#region components/ui/radio-group.tsx
function RadioGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		"data-slot": "radio-group",
		className: cn$1("grid gap-3", className),
		...props
	});
}
function RadioGroupItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		"data-slot": "radio-group-item",
		className: cn$1("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
function clamp$1(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
__name$11(clamp$1, "clamp");
//#endregion
//#region node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
function setRef$3(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$10(setRef$3, "setRef");
function composeRefs$3(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$3(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$3(refs[i], null);
			}
		};
	};
}
__name$10(composeRefs$3, "composeRefs");
function useComposedRefs$3(...refs) {
	return import_react.useCallback(composeRefs$3(...refs), refs);
}
__name$10(useComposedRefs$3, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
__name$9(usePrevious, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-slider/dist/index.mjs
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
};
var SLIDER_NAME = "Slider";
var [Collection$1, useCollection$1, createCollectionScope$1] = /* @__PURE__ */ createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = /* @__PURE__ */ createContextScope(SLIDER_NAME, [createCollectionScope$1]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function Slider2(props, forwardedRef) {
	const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [min], value, onValueChange = /* @__PURE__ */ __name$8(() => {}, "onValueChange"), onValueCommit = /* @__PURE__ */ __name$8(() => {}, "onValueCommit"), inverted = false, form, ...sliderProps } = props;
	const thumbRefs = import_react.useRef(/* @__PURE__ */ new Set());
	const valueIndexToChangeRef = import_react.useRef(0);
	const isKeyboardInteractionRef = import_react.useRef(false);
	const SliderOrientation = orientation === "horizontal" ? SliderHorizontal : SliderVertical;
	const [control, setControl] = import_react.useState(null);
	const composedRefs = useComposedRefs$3(forwardedRef, setControl);
	const [values = [], setValues] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: /* @__PURE__ */ __name$8((value2) => {
			[...thumbRefs.current][valueIndexToChangeRef.current]?.focus({
				preventScroll: true,
				focusVisible: isKeyboardInteractionRef.current
			});
			isKeyboardInteractionRef.current = false;
			onValueChange(value2);
		}, "onChange")
	});
	const valuesBeforeSlideStartRef = import_react.useRef(values);
	const initialValuesRef = import_react.useRef(values);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$8(() => setValues(initialValuesRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setValues
	]);
	function handleSlideStart(value2) {
		updateValues(value2, getClosestValueIndex(values, value2));
	}
	__name$8(handleSlideStart, "handleSlideStart");
	function handleSlideMove(value2) {
		updateValues(value2, valueIndexToChangeRef.current);
	}
	__name$8(handleSlideMove, "handleSlideMove");
	function handleSlideEnd() {
		if (String(values) !== String(valuesBeforeSlideStartRef.current)) onValueCommit(values);
	}
	__name$8(handleSlideEnd, "handleSlideEnd");
	function updateValues(value2, atIndex, { commit } = { commit: false }) {
		const decimalCount = getDecimalCount(step);
		const nextValue = clamp$1(roundValue(Math.round((value2 - min) / step) * step + min, decimalCount), [min, max]);
		setValues((prevValues = []) => {
			const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
			if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
				valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
				const hasChanged = String(nextValues) !== String(prevValues);
				if (hasChanged && commit) onValueCommit(nextValues);
				return hasChanged ? nextValues : prevValues;
			} else return prevValues;
		});
	}
	__name$8(updateValues, "updateValues");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: props.__scopeSlider,
		name,
		disabled,
		min,
		max,
		valueIndexToChangeRef,
		thumbs: thumbRefs.current,
		values,
		orientation,
		form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Provider, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Slot, {
				scope: props.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientation, {
					"aria-disabled": disabled,
					"data-disabled": disabled ? "" : void 0,
					...sliderProps,
					ref: composedRefs,
					onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
						if (!disabled) {
							valuesBeforeSlideStartRef.current = values;
							isKeyboardInteractionRef.current = false;
						}
					}),
					min,
					max,
					inverted,
					onSlideStart: disabled ? void 0 : handleSlideStart,
					onSlideMove: disabled ? void 0 : handleSlideMove,
					onSlideEnd: disabled ? void 0 : handleSlideEnd,
					onHomeKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(min, 0, { commit: true });
						}
					},
					onEndKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(max, values.length - 1, { commit: true });
						}
					},
					onStepKeyDown: ({ event, direction: stepDirection }) => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS.includes(event.key) ? 10 : 1;
							const atIndex = valueIndexToChangeRef.current;
							const value2 = values[atIndex];
							updateValues(getNextStepValue(value2, {
								min,
								step,
								direction: stepDirection,
								multiplier
							}), atIndex, { commit: true });
						}
					}
				})
			})
		})
	});
}, "Slider"));
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
});
var SliderHorizontal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderHorizontal2(props, forwardedRef) {
	const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const [slider, setSlider] = import_react.useState(null);
	const composedRefs = useComposedRefs$3(forwardedRef, setSlider);
	const rectRef = import_react.useRef(void 0);
	const direction = useDirection(dir);
	const isDirectionLTR = direction === "ltr";
	const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || slider.getBoundingClientRect();
		const value = linearScale([0, rect.width], isSlidingFromLeft ? [min, max] : [max, min]);
		rectRef.current = rect;
		return value(pointerPosition - rect.left);
	}
	__name$8(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromLeft ? "left" : "right",
		endEdge: isSlidingFromLeft ? "right" : "left",
		direction: isSlidingFromLeft ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: direction,
			"data-orientation": "horizontal",
			...sliderProps,
			ref: composedRefs,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromLeft ? "from-left" : "from-right"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal"));
var SliderVertical = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderVertical2(props, forwardedRef) {
	const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const sliderRef = import_react.useRef(null);
	const ref = useComposedRefs$3(forwardedRef, sliderRef);
	const rectRef = import_react.useRef(void 0);
	const isSlidingFromBottom = !inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
		const value = linearScale([0, rect.height], isSlidingFromBottom ? [max, min] : [min, max]);
		rectRef.current = rect;
		return value(pointerPosition - rect.top);
	}
	__name$8(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromBottom ? "bottom" : "top",
		endEdge: isSlidingFromBottom ? "top" : "bottom",
		size: "height",
		direction: isSlidingFromBottom ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...sliderProps,
			ref,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromBottom ? "from-bottom" : "from-top"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical"));
var SliderImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderImpl2(props, forwardedRef) {
	const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
	const context = useSliderContext(SLIDER_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...sliderProps,
		ref: forwardedRef,
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (event.key === "Home") {
				onHomeKeyDown(event);
				event.preventDefault();
			} else if (event.key === "End") {
				onEndKeyDown(event);
				event.preventDefault();
			} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
				onStepKeyDown(event);
				event.preventDefault();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
			const target = event.target;
			target.setPointerCapture(event.pointerId);
			event.preventDefault();
			if (context.thumbs.has(target)) target.focus({
				preventScroll: true,
				focusVisible: false
			});
			else onSlideStart(event);
		}),
		onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
			if (event.target.hasPointerCapture(event.pointerId)) onSlideMove(event);
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) {
				target.releasePointerCapture(event.pointerId);
				onSlideEnd(event);
			}
		})
	});
}, "SliderImpl"));
var TRACK_NAME = "SliderTrack";
var SliderTrack = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderTrack2(props, forwardedRef) {
	const { __scopeSlider, ...trackProps } = props;
	const context = useSliderContext(TRACK_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-disabled": context.disabled ? "" : void 0,
		"data-orientation": context.orientation,
		...trackProps,
		ref: forwardedRef
	});
}, "SliderTrack"));
var RANGE_NAME = "SliderRange";
var SliderRange = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderRange2(props, forwardedRef) {
	const { __scopeSlider, ...rangeProps } = props;
	const context = useSliderContext(RANGE_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$3(forwardedRef, import_react.useRef(null));
	const valuesCount = context.values.length;
	const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
	const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
	const offsetEnd = 100 - Math.max(...percentages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-orientation": context.orientation,
		"data-disabled": context.disabled ? "" : void 0,
		...rangeProps,
		ref: composedRefs,
		style: {
			...props.style,
			[orientation.startEdge]: offsetStart + "%",
			[orientation.endEdge]: offsetEnd + "%"
		}
	});
}, "SliderRange"));
var [SliderThumbContextProvider, useSliderThumbContext] = createSliderContext("SliderThumb");
var THUMB_PROVIDER_NAME = "SliderThumbProvider";
function SliderThumbProvider(props) {
	const { __scopeSlider, name, children, internal_do_not_use_render } = props;
	const context = useSliderContext(THUMB_PROVIDER_NAME, __scopeSlider);
	const getItems = useCollection$1(__scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const index = import_react.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
	const size = useSize(thumb);
	const isFormControl = thumb ? !!context.form || !!thumb.closest("form") : true;
	const value = context.values[index];
	const resolvedName = name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0);
	const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
	import_react.useEffect(() => {
		if (thumb) {
			context.thumbs.add(thumb);
			return () => {
				context.thumbs.delete(thumb);
			};
		}
	}, [thumb, context.thumbs]);
	const thumbContext = {
		value,
		name: resolvedName,
		form: context.form,
		isFormControl,
		index,
		thumb,
		onThumbChange: setThumb,
		percent,
		size
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbContextProvider, {
		scope: __scopeSlider,
		...thumbContext,
		children: isFunction$2(internal_do_not_use_render) ? internal_do_not_use_render(thumbContext) : children
	});
}
__name$8(SliderThumbProvider, "SliderThumbProvider");
var THUMB_TRIGGER_NAME = "SliderThumbTrigger";
var SliderThumbTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderThumbTrigger2(props, forwardedRef) {
	const { __scopeSlider, ...thumbProps } = props;
	const context = useSliderContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const { index, value, percent, size, onThumbChange } = useSliderThumbContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$3(forwardedRef, onThumbChange);
	const label = getLabel(index, context.values.length);
	const orientationSize = size?.[orientation.size];
	const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.ItemSlot, {
			scope: __scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
				role: "slider",
				"aria-label": props["aria-label"] || label,
				"aria-valuemin": context.min,
				"aria-valuenow": value,
				"aria-valuemax": context.max,
				"aria-orientation": context.orientation,
				"data-orientation": context.orientation,
				"data-disabled": context.disabled ? "" : void 0,
				tabIndex: context.disabled ? void 0 : 0,
				...thumbProps,
				ref: composedRefs,
				style: value === void 0 ? { display: "none" } : props.style,
				onFocus: composeEventHandlers(props.onFocus, () => {
					context.valueIndexToChangeRef.current = index;
				})
			})
		})
	});
}, "SliderThumbTrigger"));
var SliderThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderThumb2(props, forwardedRef) {
	const { __scopeSlider, name, ...thumbProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbProvider, {
		__scopeSlider,
		name,
		internal_do_not_use_render: ({ index, isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbTrigger, {
			...thumbProps,
			ref: forwardedRef,
			__scopeSlider
		}), isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, { __scopeSlider }, index) : null] })
	});
}, "SliderThumb"));
var BUBBLE_INPUT_NAME$2 = "SliderBubbleInput";
var SliderBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function SliderBubbleInput2({ __scopeSlider, ...props }, forwardedRef) {
	const { value, name, form } = useSliderThumbContext(BUBBLE_INPUT_NAME$2, __scopeSlider);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$3(ref, forwardedRef);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		style: { display: "none" },
		name,
		form,
		...props,
		ref: composedRefs,
		defaultValue: value
	});
}, "SliderBubbleInput"));
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
	const nextValues = [...prevValues];
	nextValues[atIndex] = nextValue;
	return nextValues.sort((a, b) => a - b);
}
__name$8(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min, max) {
	return clamp$1(100 / (max - min) * (value - min), [0, 100]);
}
__name$8(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index, totalValues) {
	if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
	else if (totalValues === 2) return ["Minimum", "Maximum"][index];
	else return;
}
__name$8(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	return distances.indexOf(closestDistance);
}
__name$8(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left, direction) {
	const halfWidth = width / 2;
	return (halfWidth - linearScale([0, 50], [0, halfWidth])(left) * direction) * direction;
}
__name$8(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
	return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
__name$8(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
	if (minStepsBetweenValues > 0) {
		const stepsBetweenValues = getStepsBetweenValues(values);
		return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
	}
	return true;
}
__name$8(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
__name$8(linearScale, "linearScale");
function getDecimalCount(value) {
	if (!Number.isFinite(value)) return 0;
	const str = value.toString();
	if (str.includes("e")) {
		const [coefficient, exponent] = str.split("e");
		const decimalPart2 = coefficient.split(".")[1] || "";
		const exponentNum = Number(exponent);
		return Math.max(0, decimalPart2.length - exponentNum);
	}
	const decimalPart = str.split(".")[1];
	return decimalPart ? decimalPart.length : 0;
}
__name$8(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
	const rounder = Math.pow(10, decimalCount);
	return Math.round(value * rounder) / rounder;
}
__name$8(roundValue, "roundValue");
function getNextStepValue(value, { min, step, direction, multiplier }) {
	const decimalCount = getDecimalCount(step);
	const stepsFromMin = (value - min) / step;
	const nearestSteps = Math.round(stepsFromMin);
	const isAligned = roundValue(nearestSteps * step + min, decimalCount) === roundValue(value, decimalCount);
	let nextSteps;
	if (isAligned) nextSteps = nearestSteps + multiplier * direction;
	else if (direction > 0) nextSteps = Math.ceil(stepsFromMin);
	else nextSteps = Math.floor(stepsFromMin);
	return roundValue(nextSteps * step + min, decimalCount);
}
__name$8(getNextStepValue, "getNextStepValue");
function isFunction$2(value) {
	return typeof value === "function";
}
__name$8(isFunction$2, "isFunction");
//#endregion
//#region components/ui/slider.tsx
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	const _values = import_react.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [
		value,
		defaultValue,
		min,
		max
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		defaultValue,
		value,
		min,
		max,
		className: cn$1("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			"data-slot": "slider-track",
			className: cn$1("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, {
				"data-slot": "slider-range",
				className: cn$1("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, index))]
	});
}
//#endregion
//#region lib/chef-image.ts
var cache = /* @__PURE__ */ new Map();
function image(src) {
	return new Promise((resolve, reject) => {
		const im = new Image();
		im.onload = () => resolve(im);
		im.onerror = () => reject(/* @__PURE__ */ new Error("主廚造型載入唔到，請再試。"));
		im.src = src;
	});
}
function keyChefPixels(data) {
	for (let i = 0; i < data.length; i += 4) {
		const r = data[i], g = data[i + 1], b = data[i + 2], excess = g - Math.max(r, b);
		if (g > 130 && excess > 70) data[i + 3] = 0;
		else if (excess > 25 && g > 85) {
			data[i + 3] = Math.round(data[i + 3] * (1 - (excess - 25) / 65));
			data[i + 1] = Math.max(r, b);
		}
	}
	return data;
}
function loadChef(gender, suit) {
	const key = gender + "-" + suit;
	let promise = cache.get(key);
	if (!promise) {
		promise = (async () => {
			const im = await image("/assets/chef-" + key + (suit === "black" ? "-chroma" : "") + ".png");
			if (suit !== "black") return im;
			const canvas = document.createElement("canvas");
			canvas.width = im.width;
			canvas.height = im.height;
			const ctx = canvas.getContext("2d");
			ctx.drawImage(im, 0, 0);
			const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
			keyChefPixels(pixels.data);
			ctx.putImageData(pixels, 0, 0);
			return image(canvas.toDataURL("image/png"));
		})();
		cache.set(key, promise);
		promise.catch(() => cache.delete(key));
	}
	return promise;
}
//#endregion
//#region app/chef-thumbnail.tsx
function ChefThumbnail({ gender, suit, alt }) {
	const [src, setSrc] = (0, import_react.useState)(""), [error, setError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		setSrc("");
		setError(false);
		loadChef(gender, suit).then((im) => {
			if (active) setSrc(im.src);
		}).catch(() => {
			if (active) setError(true);
		});
		return () => {
			active = false;
		};
	}, [gender, suit]);
	return src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "chef-thumbnail-loading",
		role: "status",
		children: error ? "造型載入唔到" : "載入造型…"
	});
}
//#endregion
//#region lib/card-design.ts
var cardLayouts = [
	{
		id: "editorial",
		name: "留白畫刊"
	},
	{
		id: "cover",
		name: "大字封面"
	},
	{
		id: "duo",
		name: "雙欄主廚"
	}
];
var cardFrames = [
	{
		id: "line",
		name: "極簡細線"
	},
	{
		id: "instant",
		name: "即影即有"
	},
	{
		id: "film",
		name: "菲林留影"
	}
];
var cardTypes = [
	{
		id: "serif",
		name: "張力明體"
	},
	{
		id: "bold",
		name: "俐落黑體"
	},
	{
		id: "slant",
		name: "斜字海報"
	}
];
function cover(ctx, im, x, y, w, h, px, py) {
	const scale = Math.max(w / im.width, h / im.height), sw = w / scale, sh = h / scale;
	ctx.drawImage(im, (im.width - sw) * px / 100, (im.height - sh) * py / 100, sw, sh, x, y, w, h);
}
function titleBlock(ctx, text, x, y, width, maxHeight, d, color) {
	const font = d.type === "bold" ? "\"Jiuqi Display\",sans-serif" : "\"Jiuqi Serif\",serif";
	let size = (d.layout === "duo" ? 100 : 120) * d.textScale / 100;
	let lines = [];
	const wrap = () => {
		ctx.font = `900 ${size}px ${font}`;
		lines = [];
		let line = "";
		for (const char of Array.from(text)) {
			if (line && ctx.measureText(line + char).width > width) {
				lines.push(line);
				line = "";
			}
			line += char;
		}
		if (line) lines.push(line);
	};
	wrap();
	while ((lines.length * size * 1.2 > maxHeight || size > 160) && size > 30) {
		size -= 2;
		wrap();
	}
	ctx.save();
	ctx.translate(x, y);
	if (d.type === "slant") ctx.transform(1, -.035, -.1, 1, 0, 0);
	ctx.fillStyle = color;
	ctx.textBaseline = "top";
	ctx.font = `900 ${size}px ${font}`;
	lines.forEach((line, i) => ctx.fillText(line, 0, i * size * 1.2, width));
	ctx.restore();
}
function paintCard(ctx, food, d) {
	const dark = d.frame === "film", paper = dark ? "#18271e" : "#fffef9", ink = dark ? "#fffef5" : "#163c28";
	ctx.fillStyle = paper;
	ctx.fillRect(0, 0, 1080, 1350);
	const image = d.layout === "cover" ? {
		x: 48,
		y: 400,
		w: 984,
		h: 892
	} : d.layout === "duo" ? {
		x: 48,
		y: 360,
		w: 690,
		h: 930
	} : {
		x: 48,
		y: 118,
		w: 984,
		h: 870
	};
	if (d.frame === "instant") {
		ctx.save();
		ctx.shadowColor = "#172b2520";
		ctx.shadowBlur = 24;
		ctx.shadowOffsetY = 10;
		ctx.fillStyle = "#fff";
		ctx.fillRect(image.x - 12, image.y - 12, image.w + 24, image.h + 42);
		ctx.restore();
	}
	ctx.save();
	ctx.filter = d.filter === "film" ? "sepia(.2) saturate(.88) contrast(1.08)" : d.filter === "fresh" ? "saturate(1.16) brightness(1.04)" : "saturate(1.04) contrast(1.025)";
	cover(ctx, food, image.x, image.y, image.w, image.h, d.photoX, d.photoY);
	ctx.restore();
	ctx.fillStyle = ink;
	ctx.font = "500 24px sans-serif";
	ctx.fillText("玖柒廚房", 52, 70);
	ctx.textAlign = "right";
	ctx.font = "500 20px sans-serif";
	ctx.fillText("我嘅拿手好味", 1027, 70);
	ctx.textAlign = "left";
	if (d.layout === "editorial") {
		ctx.fillStyle = d.accent;
		ctx.fillRect(50, 1020, 65, 7);
		titleBlock(ctx, d.title, 50, 1060, 975, 207, d, ink);
	} else if (d.layout === "cover") {
		titleBlock(ctx, d.title, 53, 117, 957, 248, d, ink);
		ctx.fillStyle = d.accent;
		ctx.fillRect(52, 374, 160, 8);
	} else {
		titleBlock(ctx, d.title, 50, 120, 980, 210, d, ink);
		ctx.fillStyle = d.accent;
		ctx.fillRect(770, 363, 260, 6);
		ctx.save();
		ctx.translate(960, 405);
		ctx.rotate(Math.PI / 2);
		ctx.font = "600 30px \"Jiuqi Serif\",serif";
		ctx.fillStyle = ink;
		ctx.fillText("親手煮嘅，特別好味。", 0, 0);
		ctx.restore();
	}
	ctx.fillStyle = ink;
	ctx.font = "400 18px sans-serif";
	ctx.fillText("我親手煮嘅", 52, 1320);
	ctx.textAlign = "right";
	ctx.fillText((/* @__PURE__ */ new Date()).toLocaleDateString("zh-HK"), 1026, 1320);
	ctx.textAlign = "left";
	if (d.frame === "line") {
		ctx.strokeStyle = d.accent;
		ctx.lineWidth = 1.5;
		ctx.strokeRect(20, 20, 1040, 1310);
	}
	if (d.frame === "film") {
		ctx.fillStyle = "#f6f5e8";
		for (let y = 34; y < 1340; y += 64) {
			ctx.fillRect(10, y, 15, 27);
			ctx.fillRect(1055, y, 15, 27);
		}
	}
	return d.layout === "duo" ? {
		tx: 666,
		ty: 665,
		tw: 389,
		th: 519
	} : d.layout === "cover" ? {
		tx: 650,
		ty: 762,
		tw: 384,
		th: 512
	} : {
		tx: 655,
		ty: 497,
		tw: 381,
		th: 508
	};
}
//#endregion
//#region app/studio.tsx
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const im = new Image();
		im.onload = () => resolve(im);
		im.onerror = () => reject(/* @__PURE__ */ new Error("呢張相讀唔到，請試吓另一張 JPG 或 PNG。"));
		im.src = src;
	});
}
async function readPhoto(file) {
	if (!file.type.startsWith("image/")) throw new Error("請揀相片檔案。");
	if (file.size > 20 * 1024 * 1024) throw new Error("請揀 20 MB 以內嘅相片。");
	const url = URL.createObjectURL(file);
	try {
		const im = await loadImage(url);
		const c = document.createElement("canvas"), ratio = Math.min(1, 1800 / Math.max(im.width, im.height));
		c.width = im.width * ratio;
		c.height = im.height * ratio;
		c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
		return c.toDataURL("image/jpeg", .9);
	} finally {
		URL.revokeObjectURL(url);
	}
}
function Studio({ open, onOpenChange, user, onPublished, onLogin }) {
	const [step, setStep] = (0, import_react.useState)(1), [photo, setPhoto] = (0, import_react.useState)(""), [title, setTitle] = (0, import_react.useState)(""), [description, setDescription] = (0, import_react.useState)(""), [face, setFace] = (0, import_react.useState)(""), [suit, setSuit] = (0, import_react.useState)("white"), [gender, setGender] = (0, import_react.useState)("male"), [filter, setFilter] = (0, import_react.useState)("natural"), [layout, setLayout] = (0, import_react.useState)("editorial"), [frame, setFrame] = (0, import_react.useState)("line"), [lettering, setLettering] = (0, import_react.useState)("serif"), [accent, setAccent] = (0, import_react.useState)("#e88232"), [photoX, setPhotoX] = (0, import_react.useState)(50), [photoY, setPhotoY] = (0, import_react.useState)(50), [textScale, setTextScale] = (0, import_react.useState)(100), [faceX, setFaceX] = (0, import_react.useState)(50), [faceY, setFaceY] = (0, import_react.useState)(35), [zoom, setZoom] = (0, import_react.useState)(1), [preview, setPreview] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(false), [rendering, setRendering] = (0, import_react.useState)(false), [renderError, setRenderError] = (0, import_react.useState)(""), [published, setPublished] = (0, import_react.useState)(false), [reading, setReading] = (0, import_react.useState)(false);
	const imageInput = (0, import_react.useRef)(null), cameraInput = (0, import_react.useRef)(null), faceInput = (0, import_react.useRef)(null), canvas = (0, import_react.useRef)(null), renderCount = (0, import_react.useRef)(0);
	async function choose(file, portrait = false) {
		if (!file) return;
		setReading(true);
		try {
			const data = await readPhoto(file);
			if (portrait) {
				setFace(data);
				setFaceX(50);
				setFaceY(35);
				setZoom(1);
				try {
					const Detector = window.FaceDetector;
					if (Detector) {
						const im = await loadImage(data);
						const results = await new Detector({
							fastMode: true,
							maxDetectedFaces: 1
						}).detect(im);
						if (results[0]) {
							const b = results[0].boundingBox;
							setFaceX((b.x + b.width / 2) / im.width * 100);
							setFaceY((b.y + b.height / 2) / im.height * 100);
							setZoom(Math.max(.6, Math.min(3, Math.min(im.width, im.height) * .38 / b.width)));
						}
					}
				} catch {}
			} else setPhoto(data);
			setPublished(false);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "相片讀唔到，請再試。");
		} finally {
			setReading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		if (!open || step === 1 || !photo || !title.trim()) return;
		const sequence = ++renderCount.current;
		setRendering(true);
		setRenderError("");
		setPublished(false);
		async function draw() {
			try {
				await document.fonts.load(lettering === "bold" ? "900 64px \"Jiuqi Display\"" : "600 64px \"Jiuqi Serif\"", title.trim());
				const [food, chef, portrait] = await Promise.all([
					loadImage(photo),
					face ? loadChef(gender, suit) : Promise.resolve(null),
					face ? loadImage(face) : Promise.resolve(null)
				]);
				const c = document.createElement("canvas");
				c.width = 1080;
				c.height = 1350;
				const ctx = c.getContext("2d");
				const chefPosition = paintCard(ctx, food, {
					layout,
					frame,
					type: lettering,
					accent,
					filter,
					title: title.trim(),
					photoX,
					photoY,
					textScale
				});
				if (chef && portrait) {
					const { tx, tw } = chefPosition;
					const th = tw * chef.height / chef.width, ty = chefPosition.ty + chefPosition.th - th;
					const box = (await fetch("/assets/chef-layout.json").then((r) => r.ok ? r.json() : null).catch(() => null))?.[gender + "-" + suit];
					if (!box?.polygon?.length) throw new Error("主廚造型暫時載入唔到，請再試。");
					const cx = tx + tw * box.x, cy = ty + th * box.y, fw = tw * box.w, fh = th * box.h;
					const sw = Math.min(portrait.width, portrait.height) * .38 / zoom, sh = sw * fh / fw, sx = Math.max(0, Math.min(portrait.width - sw, portrait.width * faceX / 100 - sw / 2)), sy = Math.max(0, Math.min(portrait.height - sh, portrait.height * faceY / 100 - sh / 2));
					ctx.save();
					ctx.beginPath();
					if ("polygon" in box && box.polygon?.length) {
						box.polygon.forEach((p, i) => {
							if (i === 0) ctx.moveTo(tx + tw * p[0], ty + th * p[1]);
							else ctx.lineTo(tx + tw * p[0], ty + th * p[1]);
						});
						ctx.closePath();
					} else ctx.ellipse(cx, cy, fw / 2, fh / 2, 0, 0, Math.PI * 2);
					ctx.clip();
					ctx.drawImage(portrait, sx, sy, sw, sh, cx - fw / 2, cy - fh / 2, fw, fh);
					ctx.restore();
					ctx.drawImage(chef, tx, ty, tw, th);
				}
				if (sequence !== renderCount.current) return;
				canvas.current = c;
				setPreview(c.toDataURL("image/png"));
			} catch (e) {
				if (sequence === renderCount.current) {
					setRenderError(e instanceof Error ? e.message : "製作唔成功，請再試。");
					setPreview("");
				}
			} finally {
				if (sequence === renderCount.current) setRendering(false);
			}
		}
		draw();
	}, [
		open,
		step,
		photo,
		title,
		face,
		suit,
		gender,
		filter,
		faceX,
		faceY,
		zoom,
		layout,
		frame,
		lettering,
		accent,
		photoX,
		photoY,
		textScale
	]);
	async function getBlob(maxBytes = 0) {
		const c = canvas.current;
		if (!c || rendering || renderError) throw new Error("請等打卡相製作完成。");
		const encode = (source) => new Promise((resolve, reject) => source.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("打卡相匯出唔到，請再試。")), "image/png"));
		let result = await encode(c);
		if (maxBytes && result.size > maxBytes) {
			let width = c.width;
			while (result.size > maxBytes && width > 500) {
				width = Math.round(width * .85);
				const reduced = document.createElement("canvas");
				reduced.width = width;
				reduced.height = Math.round(width * c.height / c.width);
				reduced.getContext("2d").drawImage(c, 0, 0, reduced.width, reduced.height);
				result = await encode(reduced);
			}
			if (result.size > maxBytes) throw new Error("張相太大，請換一張較簡潔嘅相再試。");
		}
		return result;
	}
	async function download() {
		try {
			const blob = await getBlob(), file = new File([blob], `${title.trim()}-廚神打卡.png`, { type: "image/png" });
			if (navigator.canShare?.({ files: [file] }) && /iPhone|iPad/i.test(navigator.userAgent)) {
				await navigator.share({
					files: [file],
					title: title.trim()
				});
				return;
			}
			const url = URL.createObjectURL(blob), a = document.createElement("a");
			a.href = url;
			a.download = file.name;
			a.click();
			setTimeout(() => URL.revokeObjectURL(url), 3e4);
			toast.success("打卡相已匯出；手機亦可以長按張相儲存。");
		} catch (e) {
			if (e instanceof Error && e.name !== "AbortError") toast.error(e.message);
		}
	}
	async function publish() {
		if (!user) {
			toast("先登記或登入，完成後會返到呢張打卡相。");
			onLogin();
			return;
		}
		setBusy(true);
		try {
			const blob = await getBlob(38e5), form = new FormData();
			form.append("image", blob, "card.png");
			form.append("title", title.trim());
			form.append("description", description.trim());
			const r = await fetch("/api/posts", {
				method: "POST",
				body: form
			});
			const d = await r.json();
			if (!r.ok) throw new Error(d.error);
			setPublished(true);
			toast.success("分享成功，已加入共創菜品！");
			onPublished();
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "分享唔成功，請再試。");
		} finally {
			setBusy(false);
		}
	}
	function reset() {
		setStep(1);
		setPhoto("");
		setFace("");
		setTitle("");
		setDescription("");
		setPreview("");
		setPublished(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "studio-dialog",
			showCloseButton: false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "close-button",
					"aria-label": "關閉打卡製作",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "studio-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "你就係今晚嘅大廚。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "影低拿手菜，整張你嘅專屬打卡相。" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "studio-progress",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: step === 1 ? "active" : "",
							children: "01 影低好菜"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: step === 2 ? "active" : "",
							children: "02 製作打卡"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: step === 3 ? "active" : "",
							children: "03 主廚登場"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: imageInput,
					type: "file",
					accept: "image/*",
					hidden: true,
					onChange: (e) => {
						choose(e.target.files?.[0]);
						e.target.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: cameraInput,
					type: "file",
					accept: "image/*",
					capture: "environment",
					hidden: true,
					onChange: (e) => {
						choose(e.target.files?.[0]);
						e.target.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: faceInput,
					type: "file",
					accept: "image/*",
					hidden: true,
					onChange: (e) => {
						choose(e.target.files?.[0], true);
						e.target.value = "";
					}
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "studio-first",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "upload-area " + (photo ? "has-photo" : ""),
						children: photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo,
							alt: "已揀嘅菜式"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "change-photo",
							onClick: () => imageInput.current?.click(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 }), "換張相"]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 43 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "煮好喇？影低先。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "將道菜放喺畫面中間，自然光下更靚。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "upload-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									disabled: reading,
									className: "primary",
									onClick: () => cameraInput.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 18 }), "即刻影相"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									disabled: reading,
									className: "secondary",
									onClick: () => imageInput.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 18 }), "由相簿揀相"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "支援 JPG、PNG 等相片，最大 20 MB" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "studio-fields",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "dish-name",
								children: ["幫呢道菜改個名 ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"必填 · ",
									title.length,
									"/24"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "dish-name",
								placeholder: "例如：我嘅招牌蒜蓉粉絲蝦",
								maxLength: 24,
								value: title,
								onChange: (e) => setTitle(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "dish-description",
								children: ["分享煮法 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "可唔填" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "dish-description",
								maxLength: 2e3,
								rows: 4,
								value: description,
								onChange: (e) => setDescription(e.target.value),
								placeholder: "有咩煮食小貼士？寫低分享畀大家。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "selection-note",
								children: "你嘅食譜有機會入選「精選食譜」。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "primary full",
								disabled: !photo || !title.trim() || reading,
								onClick: () => setStep(2),
								children: [
									reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										className: "spin",
										size: 18
									}) : null,
									"製作我嘅打卡相 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
								]
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "studio-preview-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preview-wrap",
						children: [
							preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "card-preview",
								src: preview,
								alt: "廚神打卡相：" + title
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "preview-placeholder",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { size: 42 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: renderError || "整緊你嘅打卡相…" })]
							}),
							rendering && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rendering",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "spin",
									size: 15
								}), "製作中"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "長按張相，亦可以儲存到手機" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preview-controls",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "text-button",
								onClick: () => setStep(step === 3 ? 2 : 1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), step === 3 ? "返回打卡款式" : "修改菜式資料"]
							}),
							step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "將好味，變成你嘅風格。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "版式" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: layout,
									onValueChange: setLayout,
									className: "layout-choices",
									children: cardLayouts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: layout === item.id ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "layout-mini mini-" + item.id,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: photo,
												alt: ""
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "好味" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: item.id }), item.name] })]
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "邊框" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: frame,
									onValueChange: setFrame,
									className: "diy-choices",
									children: cardFrames.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: frame === item.id ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: item.id }), item.name]
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "標題字款" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: lettering,
									onValueChange: setLettering,
									className: "diy-choices",
									children: cardTypes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: lettering === item.id ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: item.id }), item.name]
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "點綴色" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: accent,
									onValueChange: setAccent,
									className: "accent-choices",
									children: [
										["#e88232", "活力橙"],
										["#62863c", "橄欖綠"],
										["#b32b38", "莓果紅"]
									].map(([color, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: accent === color ? "selected" : "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												value: color,
												"aria-label": name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: color } }),
											name
										]
									}, color))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "slider-label",
									children: ["標題大小", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										"aria-label": "標題大小",
										value: [textScale],
										onValueChange: (v) => setTextScale(v[0]),
										min: 65,
										max: 130
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "slider-label",
									children: ["相片左右位置", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										"aria-label": "相片左右位置",
										value: [photoX],
										onValueChange: (v) => setPhotoX(v[0]),
										min: 0,
										max: 100
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "slider-label",
									children: ["相片上下位置", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										"aria-label": "相片上下位置",
										value: [photoY],
										onValueChange: (v) => setPhotoY(v[0]),
										min: 0,
										max: 100
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "相片色調" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: filter,
									onValueChange: setFilter,
									className: "filter-choices",
									children: [
										["natural", "自然原色"],
										["fresh", "鮮明好味"],
										["film", "暖調菲林"]
									].map(([id, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: filter === id ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name })]
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "chef-invite",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { size: 29 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "主廚本人，要唔要出鏡？" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "上載正面相，揀套廚師服，同你嘅拿手菜一齊出鏡。" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "secondary full",
											onClick: () => setStep(3),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 17 }), "加入我嘅主廚造型"]
										})
									]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "主廚，揀你嘅造型。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "secondary full",
									disabled: reading,
									onClick: () => faceInput.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 18 }), face ? "換張人像相" : "上載我嘅正面相"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "small-note",
									children: "原相只喺你嘅裝置裁切；分享時只會上載合成後嘅打卡相。"
								}),
								face && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "portrait-guide",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: face,
											alt: "人像裁切參考"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "對照打卡相預覽，微調塊面嘅位置" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "slider-label",
										children: ["左右位置", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											"aria-label": "臉部左右位置",
											value: [faceX],
											onValueChange: (v) => setFaceX(v[0]),
											min: 0,
											max: 100
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "slider-label",
										children: ["上下位置", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											"aria-label": "臉部上下位置",
											value: [faceY],
											onValueChange: (v) => setFaceY(v[0]),
											min: 0,
											max: 100
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "slider-label",
										children: ["人像大小", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
											"aria-label": "人像大小",
											value: [zoom],
											onValueChange: (v) => setZoom(v[0]),
											min: .6,
											max: 3,
											step: .05
										})]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "揀男款或女款" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
									value: gender,
									onValueChange: setGender,
									className: "gender-choices",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: gender === "male" ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: "male" }), "男款"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: gender === "female" ? "selected" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: "female" }), "女款"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "再揀你嘅主廚風格" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									value: suit,
									onValueChange: setSuit,
									className: "suit-choices",
									children: [
										[
											"white",
											"經典白",
											"雙排鈕 · 長袖"
										],
										[
											"black",
											"型格黑",
											"斜襟 · 腰圍裙"
										],
										[
											"yellow",
											"芥末黃",
											"短袖 · 工裝圍裙"
										]
									].map(([id, name, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: suit === id ? "selected" : "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefThumbnail, {
												gender,
												suit: id,
												alt: name + "廚師服"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "costume-name",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: id }), name]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: note })
										]
									}, id))
								}),
								face && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-button",
									onClick: () => setFace(""),
									children: "移除人像，只留低道菜"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "small-note",
									children: "主廚造型採用相片拼貼，可以自行微調人像。"
								})
							] }),
							renderError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "error-text",
								children: renderError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "export-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "primary full",
										disabled: busy || rendering || !preview || published,
										onClick: publish,
										children: [
											busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
												className: "spin",
												size: 18
											}) : published ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 }),
											" ",
											published ? "已分享到共創菜品" : "分享到共創菜品"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "secondary full",
										disabled: rendering || !preview,
										onClick: download,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 18 }), "下載打卡相"]
									}),
									published && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "text-button",
										onClick: reset,
										children: ["再整一張 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Carrot = createLucideIcon("carrot", [
	["path", {
		d: "M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3",
		key: "1ta62j"
	}],
	["path", {
		d: "M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7",
		key: "1svf7i"
	}],
	["path", {
		d: "m8 15-2.58-2.58",
		key: "7t238r"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Fish = createLucideIcon("fish", [
	["path", {
		d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
		key: "15baut"
	}],
	["path", {
		d: "M18 12v.5",
		key: "18hhni"
	}],
	["path", {
		d: "M16 17.93a9.77 9.77 0 0 1 0-11.86",
		key: "16dt7o"
	}],
	["path", {
		d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
		key: "l9di03"
	}],
	["path", {
		d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
		key: "1kjonw"
	}],
	["path", {
		d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
		key: "1zlm23"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wheat = createLucideIcon("wheat", [
	["path", {
		d: "M2 22 16 8",
		key: "60hf96"
	}],
	["path", {
		d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "1rdhi6"
	}],
	["path", {
		d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "1sdzmb"
	}],
	["path", {
		d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
		key: "eoatbi"
	}],
	["path", {
		d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
		key: "19rau1"
	}],
	["path", {
		d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "tc8ph9"
	}],
	["path", {
		d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "2m8kc5"
	}],
	["path", {
		d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
		key: "vex3ng"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Leaf = createLucideIcon("leaf", [["path", {
	d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
	key: "nnexq3"
}], ["path", {
	d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
	key: "mt58a7"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Milk = createLucideIcon("milk", [
	["path", {
		d: "M8 2h8",
		key: "1ssgc1"
	}],
	["path", {
		d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
		key: "qtp12x"
	}],
	["path", {
		d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
		key: "ygeh44"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Timer = createLucideIcon("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Droplets = createLucideIcon("droplets", [["path", {
	d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
	key: "1ptgy4"
}], ["path", {
	d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
	key: "1sl1rz"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShoppingBasket = createLucideIcon("shopping-basket", [
	["path", {
		d: "m15 11-1 9",
		key: "5wnq3a"
	}],
	["path", {
		d: "m19 11-4-7",
		key: "cnml18"
	}],
	["path", {
		d: "M2 11h20",
		key: "3eubbj"
	}],
	["path", {
		d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
		key: "yiazzp"
	}],
	["path", {
		d: "M4.5 15.5h15",
		key: "13mye1"
	}],
	["path", {
		d: "m5 11 4-7",
		key: "116ra9"
	}],
	["path", {
		d: "m9 11 1 9",
		key: "1ojof7"
	}]
]);
//#endregion
//#region node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
function setRef$2(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$7(setRef$2, "setRef");
function composeRefs$2(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$2(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$2(refs[i], null);
			}
		};
	};
}
__name$7(composeRefs$2, "composeRefs");
function useComposedRefs$2(...refs) {
	return import_react.useCallback(composeRefs$2(...refs), refs);
}
__name$7(useComposedRefs$2, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-checkbox/dist/index.mjs
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = /* @__PURE__ */ createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction$1(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$6(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME$1 = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME$1, __scopeCheckbox);
	const composedRefs = useComposedRefs$2(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = /* @__PURE__ */ __name$6(() => setChecked(initialCheckedStateRef.current), "reset");
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "CheckboxTrigger"));
var Checkbox$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function Checkbox2(props, forwardedRef) {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
}, "Checkbox"));
var INDICATOR_NAME$1 = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function CheckboxIndicator2(props, forwardedRef) {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME$1, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
}, "CheckboxIndicator"));
var BUBBLE_INPUT_NAME$1 = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME$1, __scopeCheckbox);
	const composedRefs = useComposedRefs$2(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function isFunction$1(value) {
	return typeof value === "function";
}
__name$6(isFunction$1, "isFunction");
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
__name$6(isIndeterminate, "isIndeterminate");
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name$6(getState, "getState");
//#endregion
//#region components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		className: cn$1("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region node_modules/@radix-ui/react-progress/dist/index.mjs
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = /* @__PURE__ */ createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function Progress2(props, forwardedRef) {
	const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
	if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
	const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
	if (valueProp !== null && !isValidValueNumber(valueProp, max)) console.error(getInvalidValueError(`${valueProp}`, "Progress"));
	const value = isValidValueNumber(valueProp, max) ? valueProp : null;
	const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: __scopeProgress,
		value,
		max,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": max,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber(value) ? value : void 0,
			"aria-valuetext": valueLabel,
			role: "progressbar",
			"data-state": getProgressState(value, max),
			"data-value": value ?? void 0,
			"data-max": max,
			...progressProps,
			ref: forwardedRef
		})
	});
}, "Progress"));
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function ProgressIndicator2(props, forwardedRef) {
	const { __scopeProgress, ...indicatorProps } = props;
	const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(context.value, context.max),
		"data-value": context.value ?? void 0,
		"data-max": context.max,
		...indicatorProps,
		ref: forwardedRef
	});
}, "ProgressIndicator"));
function defaultGetValueLabel(value, max) {
	return `${Math.round(value / max * 100)}%`;
}
__name$5(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
	return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name$5(getProgressState, "getProgressState");
function isNumber(value) {
	return typeof value === "number";
}
__name$5(isNumber, "isNumber");
function isValidMaxNumber(max) {
	return isNumber(max) && !isNaN(max) && max > 0;
}
__name$5(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max) {
	return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
__name$5(isValidValueNumber, "isValidValueNumber");
function getInvalidMaxError(propValue, componentName) {
	return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
__name$5(getInvalidMaxError, "getInvalidMaxError");
function getInvalidValueError(propValue, componentName) {
	return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name$5(getInvalidValueError, "getInvalidValueError");
var Root = Progress$1;
var Indicator = ProgressIndicator;
//#endregion
//#region components/ui/progress.tsx
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "progress",
		value,
		className: cn$1("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			"data-slot": "progress-indicator",
			className: "h-full w-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
		})
	});
}
//#endregion
//#region app/recipe-preparation.tsx
function splitIngredients(text) {
	const out = [];
	let depth = 0, current = "";
	for (const c of text) {
		if ("（(".includes(c)) depth++;
		if ("）)".includes(c)) depth = Math.max(0, depth - 1);
		if (depth === 0 && "、，,；;\n".includes(c)) {
			if (current.trim()) out.push(current.trim());
			current = "";
		} else current += c;
	}
	if (current.trim()) out.push(current.trim());
	return out;
}
function foodIcon(s) {
	if (/蝦|魚|蟹|海鮮|蜆/.test(s)) return Fish;
	if (/粉|飯|麵/.test(s)) return Wheat;
	if (/奶|芝士|蛋/.test(s)) return Milk;
	if (/菜|蔥|芫荽|薄荷/.test(s)) return Leaf;
	if (/油|水|醋|汁|酒/.test(s)) return Droplets;
	return Carrot;
}
function stepInfo(s) {
	if (/蒸|煮|煲|燜|燴|炒|焗|煎/.test(s)) return {
		Icon: Flame,
		label: "掌握火候"
	};
	if (/浸|醃|分鐘/.test(s)) return {
		Icon: Timer,
		label: "俾啲時間"
	};
	if (/盛|上碟|撒|淋/.test(s)) return {
		Icon: UtensilsCrossed,
		label: "靚靚上碟"
	};
	return {
		Icon: ChefHat,
		label: "備好食材"
	};
}
function RecipePreparation({ ingredients, seasoning, steps, tips }) {
	const [ready, setReady] = (0, import_react.useState)([]), [done, setDone] = (0, import_react.useState)([]);
	const items = splitIngredients(ingredients), sauces = splitIngredients(seasoning);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mise-en-place",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prep-section-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { size: 24 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "好味，由備料開始" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "撳一下，記低已備好嘅食材。" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						ready.length,
						"/",
						items.length + sauces.length
					] })
				]
			}), [[items, "主要食材"], [sauces, "調味配搭"]].map(([list, label], section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ingredient-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: list.map((item, i) => {
					const key = section + ":" + i, Icon = foodIcon(item);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: ready.includes(key) ? "ready" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 19,
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								"aria-label": "已備好" + item,
								checked: ready.includes(key),
								onCheckedChange: (checked) => setReady((v) => checked ? [...v, key] : v.filter((x) => x !== key))
							})
						] })
					}, key);
				}) })]
			}, section))]
		}),
		tips && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "chef-tip",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "主廚小貼士" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tips })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "cooking-method",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prep-section-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { size: 24 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "跟住煮，慢慢嚟。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"aria-live": "polite",
							children: done.length === steps.length ? "完成喇，開飯！" : `已完成 ${done.length} 個步驟`
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							done.length,
							"/",
							steps.length
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					"aria-label": "煮食進度",
					value: done.length / steps.length * 100,
					className: "cooking-progress"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "method-timeline",
					children: steps.map((step, i) => {
						const { Icon, label } = stepInfo(step), complete = done.includes(i);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: complete ? "complete" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "step-marker",
								"aria-label": (complete ? "取消完成" : "完成") + "步驟 " + (i + 1),
								"aria-pressed": complete,
								onClick: () => setDone((v) => complete ? v.filter((n) => n !== i) : [...v, i]),
								children: complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 19 }) : String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "method-copy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "method-label",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setDone((v) => complete ? v.filter((n) => n !== i) : [...v, i]),
											children: [complete ? "已完成" : "完成呢步", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step })]
							})]
						}, i);
					})
				})
			]
		})
	] });
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$4(setRef$1, "setRef");
function composeRefs$1(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$4(composeRefs$1, "composeRefs");
function useComposedRefs$1(...refs) {
	return import_react.useCallback(composeRefs$1(...refs), refs);
}
__name$4(useComposedRefs$1, "useComposedRefs");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$3 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(minPadding, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement":
						resetPlacement = initialPlacement;
						break;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$2 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset = typeof rawOffset === "number" ? {
				mainAxis: rawOffset,
				crossAxis: 0
			} : {
				mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
				crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
			};
			if (checkMainAxis) {
				const len = mainAxis === "y" ? "height" : "width";
				const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === "y" ? "width" : "height";
				const isOriginSide = originSides.has(getSide(placement));
				const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
			else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = offset$2;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = shift$2;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = flip$2;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = size$2;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = hide$2;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$2 = arrow$3;
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$1 = limitShift$2;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : function noop() {};
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
	const ref = import_react.useRef(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = import_react.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = import_react.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = import_react.useState(null);
	const [_floating, _setFloating] = import_react.useState(null);
	const setReference = import_react.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = import_react.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = import_react.useRef(null);
	const floatingRef = import_react.useRef(null);
	const dataRef = import_react.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef(whileElementsMounted);
	const platformRef = useLatestRef(platform);
	const openRef = useLatestRef(open);
	const update = import_react.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				import_react_dom.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = import_react.useRef(false);
	index(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = import_react.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = import_react.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = import_react.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return import_react.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => {
	function isRef(value) {
		return {}.hasOwnProperty.call(value, "current");
	}
	return {
		name: "arrow",
		options,
		fn(state) {
			const { element, padding } = typeof options === "function" ? options(state) : options;
			if (element && isRef(element)) {
				if (element.current != null) return arrow$2({
					element: element.current,
					padding
				}).fn(state);
				return {};
			}
			if (element) return arrow$2({
				element,
				padding
			}).fn(state);
			return {};
		}
	};
};
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = (options, deps) => {
	const result = offset$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = (options, deps) => {
	const result = shift$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift = (options, deps) => {
	return {
		fn: limitShift$1(options).fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = (options, deps) => {
	const result = flip$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = (options, deps) => {
	const result = size$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide = (options, deps) => {
	const result = hide$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = (options, deps) => {
	const result = arrow$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
//#endregion
//#region node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$3(setRef, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
__name$3(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$3(useComposedRefs, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = /* @__PURE__ */ createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = /* @__PURE__ */ __name$2((props) => {
	const { __scopePopper, children } = props;
	const [anchor, setAnchor] = import_react.useState(null);
	const [placementState, setPlacementState] = import_react.useState(void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperProvider, {
		scope: __scopePopper,
		anchor,
		onAnchorChange: setAnchor,
		placementState,
		setPlacementState,
		children
	});
}, "Popper");
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopperAnchor2(props, forwardedRef) {
	const { __scopePopper, virtualRef, ...anchorProps } = props;
	const context = usePopperContext(ANCHOR_NAME, __scopePopper);
	const ref = import_react.useRef(null);
	const onAnchorChange = context.onAnchorChange;
	const composedRefs = useComposedRefs(forwardedRef, import_react.useCallback((node) => {
		ref.current = node;
		if (node) onAnchorChange(node);
	}, [onAnchorChange]));
	const anchorRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (!virtualRef) return;
		const previousAnchor = anchorRef.current;
		anchorRef.current = virtualRef.current;
		if (previousAnchor !== anchorRef.current) onAnchorChange(anchorRef.current);
	});
	const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
	const placedSide = sideAndAlign?.[0];
	const placedAlign = sideAndAlign?.[1];
	return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-popper-side": placedSide,
		"data-radix-popper-align": placedAlign,
		...anchorProps,
		ref: composedRefs
	});
}, "PopperAnchor"));
var CONTENT_NAME$1 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$1);
var PopperContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopperContent2(props, forwardedRef) {
	const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
	const context = usePopperContext(CONTENT_NAME$1, __scopePopper);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const [arrow$4, setArrow] = import_react.useState(null);
	const arrowSize = useSize(arrow$4);
	const arrowWidth = arrowSize?.width ?? 0;
	const arrowHeight = arrowSize?.height ?? 0;
	const desiredPlacement = side + (align !== "center" ? "-" + align : "");
	const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...collisionPaddingProp
	};
	const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
	const hasExplicitBoundaries = boundary.length > 0;
	const detectOverflowOptions = {
		padding: collisionPadding,
		boundary: boundary.filter(isNotNull),
		altBoundary: hasExplicitBoundaries
	};
	const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
		strategy: "fixed",
		placement: desiredPlacement,
		whileElementsMounted: /* @__PURE__ */ __name$2((...args) => {
			return autoUpdate(...args, { animationFrame: updatePositionStrategy === "always" });
		}, "whileElementsMounted"),
		elements: { reference: context.anchor },
		middleware: [
			offset({
				mainAxis: sideOffset + arrowHeight,
				alignmentAxis: alignOffset
			}),
			avoidCollisions && shift({
				mainAxis: true,
				crossAxis: false,
				limiter: sticky === "partial" ? limitShift() : void 0,
				...detectOverflowOptions
			}),
			avoidCollisions && flip({ ...detectOverflowOptions }),
			size({
				...detectOverflowOptions,
				apply: /* @__PURE__ */ __name$2(({ elements, rects, availableWidth, availableHeight }) => {
					const { width: anchorWidth, height: anchorHeight } = rects.reference;
					const contentStyle = elements.floating.style;
					contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
					contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
					contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
					contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
				}, "apply")
			}),
			arrow$4 && arrow({
				element: arrow$4,
				padding: arrowPadding
			}),
			transformOrigin({
				arrowWidth,
				arrowHeight
			}),
			hideWhenDetached && hide({
				strategy: "referenceHidden",
				...detectOverflowOptions,
				boundary: hasExplicitBoundaries ? detectOverflowOptions.boundary : void 0
			})
		]
	});
	const setPlacementState = context.setPlacementState;
	useLayoutEffect2(() => {
		setPlacementState(placement);
		return () => {
			setPlacementState(void 0);
		};
	}, [placement, setPlacementState]);
	const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
	const handlePlaced = useCallbackRef$1(onPlaced);
	useLayoutEffect2(() => {
		if (isPositioned) handlePlaced?.();
	}, [isPositioned, handlePlaced]);
	const arrowX = middlewareData.arrow?.x;
	const arrowY = middlewareData.arrow?.y;
	const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
	const [contentZIndex, setContentZIndex] = import_react.useState();
	useLayoutEffect2(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: refs.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...floatingStyles,
			transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: contentZIndex,
			"--radix-popper-transform-origin": [middlewareData.transformOrigin?.x, middlewareData.transformOrigin?.y].join(" "),
			...middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: props.dir,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContentProvider, {
			scope: __scopePopper,
			placedSide,
			placedAlign,
			onArrowChange: setArrow,
			arrowX,
			arrowY,
			shouldHideArrow: cannotCenterArrow,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				"data-side": placedSide,
				"data-align": placedAlign,
				...contentProps,
				ref: composedRefs,
				style: {
					...contentProps.style,
					animation: !isPositioned ? "none" : contentProps.style?.animation
				}
			})
		})
	});
}, "PopperContent"));
function isNotNull(value) {
	return value !== null;
}
__name$2(isNotNull, "isNotNull");
var transformOrigin = /* @__PURE__ */ __name$2((options) => ({
	name: "transformOrigin",
	options,
	fn(data) {
		const { placement, rects, middlewareData } = data;
		const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
		const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
		const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
		const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
		const noArrowAlign = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[placedAlign];
		const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
		const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
		let x = "";
		let y = "";
		if (placedSide === "bottom") {
			x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
			y = `${-arrowHeight}px`;
		} else if (placedSide === "top") {
			x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
			y = `${rects.floating.height + arrowHeight}px`;
		} else if (placedSide === "right") {
			x = `${-arrowHeight}px`;
			y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
		} else if (placedSide === "left") {
			x = `${rects.floating.width + arrowHeight}px`;
			y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
		}
		return { data: {
			x,
			y
		} };
	}
}), "transformOrigin");
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
__name$2(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
		const composedRef = useComposedRefs$1(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$1(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$1((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$1(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$1((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$1(mergeProps, "mergeProps");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$1(getElementRef, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$1(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$1(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$1(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$1((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$1((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
});
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = /* @__PURE__ */ createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = /* @__PURE__ */ createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]);
var usePopperScope = createPopperScope();
var [SelectProviderImpl, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
function SelectProvider(props) {
	const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form, internal_do_not_use_render } = props;
	const popperScope = usePopperScope(__scopeSelect);
	const [trigger, setTrigger] = import_react.useState(null);
	const [valueNode, setValueNode] = import_react.useState(null);
	const [valueNodeHasChildren, setValueNodeHasChildren] = import_react.useState(false);
	const direction = useDirection(dir);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: SELECT_NAME
	});
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
		caller: SELECT_NAME
	});
	const triggerPointerDownPosRef = import_react.useRef(null);
	const initialValueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		const associatedForm = form ? trigger?.ownerDocument.getElementById(form) : trigger?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name(() => setValue(initialValueRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		form,
		trigger,
		setValue
	]);
	const isFormControl = trigger ? !!form || !!trigger.closest("form") : true;
	const [nativeOptionsSet, setNativeOptionsSet] = import_react.useState(/* @__PURE__ */ new Set());
	const contentId = useId();
	const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
	const handleNativeOptionAdd = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => new Set(prev).add(option));
	}, []);
	const handleNativeOptionRemove = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => {
			const optionsSet = new Set(prev);
			optionsSet.delete(option);
			return optionsSet;
		});
	}, []);
	const context = {
		required,
		trigger,
		onTriggerChange: setTrigger,
		valueNode,
		onValueNodeChange: setValueNode,
		valueNodeHasChildren,
		onValueNodeHasChildrenChange: setValueNodeHasChildren,
		contentId,
		value,
		onValueChange: setValue,
		open,
		onOpenChange: setOpen,
		dir: direction,
		triggerPointerDownPosRef,
		disabled,
		name,
		autoComplete,
		form,
		nativeOptions: nativeOptionsSet,
		nativeSelectKey,
		isFormControl
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProviderImpl, {
			scope: __scopeSelect,
			...context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
				scope: __scopeSelect,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
					scope: __scopeSelect,
					onNativeOptionAdd: handleNativeOptionAdd,
					onNativeOptionRemove: handleNativeOptionRemove,
					children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
				})
			})
		})
	});
}
__name(SelectProvider, "SelectProvider");
var Select$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeSelect, children, ...providerProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
		__scopeSelect,
		...providerProps,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBubbleInput, { __scopeSelect }) : null] })
	});
}, "Select");
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectTrigger2(props, forwardedRef) {
	const { __scopeSelect, disabled = false, ...triggerProps } = props;
	const popperScope = usePopperScope(__scopeSelect);
	const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
	const isDisabled = context.disabled || disabled;
	const composedRefs = useComposedRefs$1(forwardedRef, context.onTriggerChange);
	const getItems = useCollection(__scopeSelect);
	const pointerTypeRef = import_react.useRef("touch");
	const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.value === context.value));
		if (nextItem !== void 0) context.onValueChange(nextItem.value);
	});
	const handleOpen = /* @__PURE__ */ __name((pointerEvent) => {
		if (!isDisabled) {
			context.onOpenChange(true);
			resetTypeahead();
		}
		if (pointerEvent) context.triggerPointerDownPosRef.current = {
			x: Math.round(pointerEvent.pageX),
			y: Math.round(pointerEvent.pageY)
		};
	}, "handleOpen");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": context.open ? context.contentId : void 0,
			"aria-expanded": context.open,
			"aria-required": context.required,
			"aria-autocomplete": "none",
			dir: context.dir,
			"data-state": context.open ? "open" : "closed",
			disabled: isDisabled,
			"data-disabled": isDisabled ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
			...triggerProps,
			ref: composedRefs,
			onClick: composeEventHandlers(triggerProps.onClick, (event) => {
				event.currentTarget.focus();
				if (pointerTypeRef.current !== "mouse") handleOpen(event);
			}),
			onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
				pointerTypeRef.current = event.pointerType;
				const target = event.target;
				if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
				if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
					handleOpen(event);
					event.preventDefault();
				}
			}),
			onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
				const isTypingAhead = searchRef.current !== "";
				if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) handleTypeaheadSearch(event.key);
				if (isTypingAhead && event.key === " ") return;
				if (OPEN_KEYS.includes(event.key)) {
					handleOpen();
					event.preventDefault();
				}
			})
		})
	});
}, "SelectTrigger"));
var VALUE_NAME = "SelectValue";
var SelectValue$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectValue2(props, forwardedRef) {
	const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
	const context = useSelectContext(VALUE_NAME, __scopeSelect);
	const { onValueNodeHasChildrenChange } = context;
	const hasChildren = children !== void 0;
	const composedRefs = useComposedRefs$1(forwardedRef, context.onValueNodeChange);
	useLayoutEffect2(() => {
		onValueNodeHasChildrenChange(hasChildren);
	}, [onValueNodeHasChildrenChange, hasChildren]);
	const showPlaceholder = shouldShowPlaceholder(context.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...valueProps,
		asChild: showPlaceholder ? false : valueProps.asChild,
		ref: composedRefs,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: showPlaceholder ? placeholder : children }, showPlaceholder ? "placeholder" : "value")
	});
}, "SelectValue"));
var SelectIcon = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectIcon2(props, forwardedRef) {
	const { __scopeSelect, children, ...iconProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...iconProps,
		ref: forwardedRef,
		children: children || "▼"
	});
}, "SelectIcon"));
var [PortalProvider, usePortalContext] = createSelectContext("SelectPortal", { forceMount: void 0 });
var SelectPortal = /* @__PURE__ */ __name((props) => {
	const { __scopeSelect, forceMount, ...portalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: props.__scopeSelect,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
			asChild: true,
			...portalProps
		})
	});
}, "SelectPortal");
var CONTENT_NAME = "SelectContent";
var SelectContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeSelect);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
	const [fragment, setFragment] = import_react.useState();
	useLayoutEffect2(() => {
		setFragment(new DocumentFragment());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => present ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentImpl, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentFragment, {
			...contentProps,
			fragment
		})
	});
}, "SelectContent"));
var SelectContentFragment = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectContentFragment2(props, forwardedRef) {
	const { __scopeSelect, children, fragment } = props;
	if (!fragment) return null;
	return import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: __scopeSelect,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: forwardedRef,
				children
			})
		})
	}), fragment);
}, "SelectContentFragment"));
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectContentImpl2(props, forwardedRef) {
	const { __scopeSelect } = props;
	const { position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME, __scopeSelect);
	const [content, setContent] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const composedRefs = useComposedRefs$1(forwardedRef, setContent);
	const [selectedItem, setSelectedItem] = import_react.useState(null);
	const [selectedItemText, setSelectedItemText] = import_react.useState(null);
	const getItems = useCollection(__scopeSelect);
	const [isPositioned, setIsPositioned] = import_react.useState(false);
	const firstValidItemFoundRef = import_react.useRef(false);
	import_react.useEffect(() => {
		if (content) return hideOthers(content);
	}, [content]);
	useFocusGuards();
	const focusFirst = import_react.useCallback((candidates) => {
		const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
		const [lastItem] = restItems.slice(-1);
		const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
		for (const candidate of candidates) {
			if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
			candidate?.scrollIntoView({ block: "nearest" });
			if (candidate === firstItem && viewport) viewport.scrollTop = 0;
			if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
			candidate?.focus();
			if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
		}
	}, [getItems, viewport]);
	const focusSelectedItem = import_react.useCallback(() => focusFirst([selectedItem, content]), [
		focusFirst,
		selectedItem,
		content
	]);
	import_react.useEffect(() => {
		if (isPositioned) focusSelectedItem();
	}, [isPositioned, focusSelectedItem]);
	const { onOpenChange, triggerPointerDownPosRef } = context;
	import_react.useEffect(() => {
		if (content) {
			let pointerMoveDelta = {
				x: 0,
				y: 0
			};
			const handlePointerMove = /* @__PURE__ */ __name((event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
				};
			}, "handlePointerMove");
			const handlePointerUp = /* @__PURE__ */ __name((event) => {
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!event.composedPath().includes(content)) onOpenChange(false);
				document.removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.current = null;
			}, "handlePointerUp");
			if (triggerPointerDownPosRef.current !== null) {
				document.addEventListener("pointermove", handlePointerMove);
				document.addEventListener("pointerup", handlePointerUp, {
					capture: true,
					once: true
				});
			}
			return () => {
				document.removeEventListener("pointermove", handlePointerMove);
				document.removeEventListener("pointerup", handlePointerUp, { capture: true });
			};
		}
	}, [
		content,
		onOpenChange,
		triggerPointerDownPosRef
	]);
	import_react.useEffect(() => {
		const close = /* @__PURE__ */ __name(() => onOpenChange(false), "close");
		window.addEventListener("blur", close);
		window.addEventListener("resize", close);
		return () => {
			window.removeEventListener("blur", close);
			window.removeEventListener("resize", close);
		};
	}, [onOpenChange]);
	const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.ref.current === document.activeElement));
		if (nextItem) setTimeout(() => nextItem.ref.current?.focus());
	});
	const itemRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) {
			setSelectedItem(node);
			if (isFirstValidItem) firstValidItemFoundRef.current = true;
		}
	}, [context.value]);
	const handleItemLeave = import_react.useCallback(() => content?.focus(), [content]);
	const itemTextRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) setSelectedItemText(node);
	}, [context.value]);
	const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
	const popperContentProps = SelectPosition === SelectPopperPosition ? {
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		avoidCollisions
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		content,
		viewport,
		onViewportChange: setViewport,
		itemRefCallback,
		selectedItem,
		onItemLeave: handleItemLeave,
		itemTextRefCallback,
		focusSelectedItem,
		selectedItemText,
		position,
		isPositioned,
		searchRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
			as: Slot,
			allowPinchZoom: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
				asChild: true,
				trapped: context.open,
				onMountAutoFocus: (event) => {
					event.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
					context.trigger?.focus({ preventScroll: true });
					event.preventDefault();
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
					asChild: true,
					disableOutsidePointerEvents: true,
					onEscapeKeyDown,
					onPointerDownOutside,
					onFocusOutside: (event) => event.preventDefault(),
					onDismiss: () => context.onOpenChange(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPosition, {
						role: "listbox",
						id: context.contentId,
						"data-state": context.open ? "open" : "closed",
						dir: context.dir,
						onContextMenu: (event) => event.preventDefault(),
						...contentProps,
						...popperContentProps,
						onPlaced: () => setIsPositioned(true),
						ref: composedRefs,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...contentProps.style
						},
						onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
							const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
							if (event.key === "Tab") event.preventDefault();
							if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
							if ([
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(event.key)) {
								let candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
								if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
								if (["ArrowUp", "ArrowDown"].includes(event.key)) {
									const currentElement = event.target;
									const currentIndex = candidateNodes.indexOf(currentElement);
									candidateNodes = candidateNodes.slice(currentIndex + 1);
								}
								setTimeout(() => focusFirst(candidateNodes));
								event.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl"));
var SelectItemAlignedPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectItemAlignedPosition2(props, forwardedRef) {
	const { __scopeSelect, onPlaced, ...popperProps } = props;
	const context = useSelectContext(CONTENT_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
	const [contentWrapper, setContentWrapper] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs$1(forwardedRef, setContent);
	const getItems = useCollection(__scopeSelect);
	const shouldExpandOnScrollRef = import_react.useRef(false);
	const shouldRepositionRef = import_react.useRef(true);
	const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
	const position = import_react.useCallback(() => {
		if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
			const triggerRect = context.trigger.getBoundingClientRect();
			const contentRect = content.getBoundingClientRect();
			const valueNodeRect = context.valueNode.getBoundingClientRect();
			const itemTextRect = selectedItemText.getBoundingClientRect();
			if (context.dir !== "rtl") {
				const itemTextOffset = itemTextRect.left - contentRect.left;
				const left = valueNodeRect.left - itemTextOffset;
				const leftDelta = triggerRect.left - left;
				const minContentWidth = triggerRect.width + leftDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const rightEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedLeft = clamp$1(left, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, rightEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.left = clampedLeft + "px";
			} else {
				const itemTextOffset = contentRect.right - itemTextRect.right;
				const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
				const rightDelta = window.innerWidth - triggerRect.right - right;
				const minContentWidth = triggerRect.width + rightDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const leftEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedRight = clamp$1(right, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.right = clampedRight + "px";
			}
			const items = getItems();
			const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
			const itemsHeight = viewport.scrollHeight;
			const contentStyles = window.getComputedStyle(content);
			const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
			const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
			const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
			const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
			const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
			const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
			const viewportStyles = window.getComputedStyle(viewport);
			const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
			const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
			const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
			const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
			const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
			const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
			const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
			const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
			if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
				const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
				contentWrapper.style.bottom = "0px";
				const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
				const height = contentTopToItemMiddle + Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
				contentWrapper.style.height = height + "px";
			} else {
				const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
				contentWrapper.style.top = "0px";
				const height = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight) + itemMiddleToContentBottom;
				contentWrapper.style.height = height + "px";
				viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
			}
			contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
			contentWrapper.style.minHeight = minContentHeight + "px";
			contentWrapper.style.maxHeight = availableHeight + "px";
			onPlaced?.();
			requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
		}
	}, [
		getItems,
		context.trigger,
		context.valueNode,
		contentWrapper,
		content,
		viewport,
		selectedItem,
		selectedItemText,
		context.dir,
		onPlaced
	]);
	useLayoutEffect2(() => position(), [position]);
	const [contentZIndex, setContentZIndex] = import_react.useState();
	useLayoutEffect2(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportProvider, {
		scope: __scopeSelect,
		contentWrapper,
		shouldExpandOnScrollRef,
		onScrollButtonChange: import_react.useCallback((node) => {
			if (node && shouldRepositionRef.current === true) {
				position();
				focusSelectedItem?.();
				shouldRepositionRef.current = false;
			}
		}, [position, focusSelectedItem]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: setContentWrapper,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: contentZIndex
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...popperProps,
				ref: composedRefs,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...popperProps.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition"));
var SelectPopperPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectPopperPosition2(props, forwardedRef) {
	const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
	const popperScope = usePopperScope(__scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		...popperScope,
		...popperProps,
		ref: forwardedRef,
		align,
		collisionPadding,
		style: {
			boxSizing: "border-box",
			...popperProps.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition"));
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectViewport2(props, forwardedRef) {
	const { __scopeSelect, nonce, ...viewportProps } = props;
	const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
	const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
	const composedRefs = useComposedRefs$1(forwardedRef, contentContext.onViewportChange);
	const prevScrollTopRef = import_react.useRef(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...viewportProps,
			ref: composedRefs,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...viewportProps.style
			},
			onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
				const viewport = event.currentTarget;
				const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
				if (shouldExpandOnScrollRef?.current && contentWrapper) {
					const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
					if (scrolledBy > 0) {
						const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
						const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
						const cssHeight = parseFloat(contentWrapper.style.height);
						const prevHeight = Math.max(cssMinHeight, cssHeight);
						if (prevHeight < availableHeight) {
							const nextHeight = prevHeight + scrolledBy;
							const clampedNextHeight = Math.min(availableHeight, nextHeight);
							const heightDiff = nextHeight - clampedNextHeight;
							contentWrapper.style.height = clampedNextHeight + "px";
							if (contentWrapper.style.bottom === "0px") {
								viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
								contentWrapper.style.justifyContent = "flex-end";
							}
						}
					}
				}
				prevScrollTopRef.current = viewport.scrollTop;
			})
		})
	})] });
}, "SelectViewport"));
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext("SelectGroup");
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectItem2(props, forwardedRef) {
	const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
	const context = useSelectContext(ITEM_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
	const isSelected = context.value === value;
	const [textValue, setTextValue] = import_react.useState(textValueProp ?? "");
	const [isFocused, setIsFocused] = import_react.useState(false);
	const composedRefs = useComposedRefs$1(forwardedRef, useCallbackRef$1((node) => contentContext.itemRefCallback?.(node, value, disabled)));
	const textId = useId();
	const pointerTypeRef = import_react.useRef("touch");
	const handleSelect = /* @__PURE__ */ __name(() => {
		if (!disabled) {
			context.onValueChange(value);
			context.onOpenChange(false);
		}
	}, "handleSelect");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
		scope: __scopeSelect,
		value,
		disabled,
		textId,
		isSelected,
		onItemTextChange: import_react.useCallback((node) => {
			setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: __scopeSelect,
			value,
			disabled,
			textValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "option",
				"aria-labelledby": textId,
				"data-highlighted": isFocused ? "" : void 0,
				"aria-selected": isSelected && isFocused,
				"data-state": isSelected ? "checked" : "unchecked",
				"aria-disabled": disabled || void 0,
				"data-disabled": disabled ? "" : void 0,
				tabIndex: disabled ? void 0 : -1,
				...itemProps,
				ref: composedRefs,
				onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
				onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
				onClick: composeEventHandlers(itemProps.onClick, () => {
					if (pointerTypeRef.current !== "mouse") handleSelect();
				}),
				onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
					if (pointerTypeRef.current === "mouse") handleSelect();
				}),
				onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
					pointerTypeRef.current = event.pointerType;
				}),
				onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
					pointerTypeRef.current = event.pointerType;
					if (disabled) contentContext.onItemLeave?.();
					else if (pointerTypeRef.current === "mouse") event.currentTarget.focus({ preventScroll: true });
				}),
				onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
					if (event.currentTarget === document.activeElement) contentContext.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
					if (disabled || event.target !== event.currentTarget) return;
					if (contentContext.searchRef?.current !== "" && event.key === " ") return;
					if (SELECTION_KEYS.includes(event.key)) handleSelect();
					if (event.key === " ") event.preventDefault();
				})
			})
		})
	});
}, "SelectItem"));
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectItemText2(props, forwardedRef) {
	const { __scopeSelect, className, style, ...itemTextProps } = props;
	const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
	const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
	const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
	const [itemTextNode, setItemTextNode] = import_react.useState(null);
	const handleItemTextRefCallback = useCallbackRef$1((node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
	const composedRefs = useComposedRefs$1(forwardedRef, setItemTextNode, itemContext.onItemTextChange, handleItemTextRefCallback);
	const textContent = itemTextNode?.textContent;
	const nativeOption = import_react.useMemo(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
		value: itemContext.value,
		disabled: itemContext.disabled,
		children: textContent
	}, itemContext.value), [
		itemContext.disabled,
		itemContext.value,
		textContent
	]);
	const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
	useLayoutEffect2(() => {
		onNativeOptionAdd(nativeOption);
		return () => onNativeOptionRemove(nativeOption);
	}, [
		onNativeOptionAdd,
		onNativeOptionRemove,
		nativeOption
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		id: itemContext.textId,
		...itemTextProps,
		ref: composedRefs
	}), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren && !shouldShowPlaceholder(context.value) ? import_react_dom.createPortal(itemTextProps.children, context.valueNode) : null] });
}, "SelectItemText"));
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectItemIndicator2(props, forwardedRef) {
	const { __scopeSelect, ...itemIndicatorProps } = props;
	return useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect).isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...itemIndicatorProps,
		ref: forwardedRef
	}) : null;
}, "SelectItemIndicator"));
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectScrollUpButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const [canScrollUp, setCanScrollUp] = import_react.useState(false);
	const composedRefs = useComposedRefs$1(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				setCanScrollUp(viewport.scrollTop > 0);
			};
			__name(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollUpButton"));
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectScrollDownButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const [canScrollDown, setCanScrollDown] = import_react.useState(false);
	const composedRefs = useComposedRefs$1(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const maxScroll = viewport.scrollHeight - viewport.clientHeight;
				setCanScrollDown(Math.ceil(viewport.scrollTop) < maxScroll);
			};
			__name(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollDown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollDownButton"));
var SelectScrollButtonImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectScrollButtonImpl2(props, forwardedRef) {
	const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
	const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
	const autoScrollTimerRef = import_react.useRef(null);
	const getItems = useCollection(__scopeSelect);
	const clearAutoScrollTimer = import_react.useCallback(() => {
		if (autoScrollTimerRef.current !== null) {
			window.clearInterval(autoScrollTimerRef.current);
			autoScrollTimerRef.current = null;
		}
	}, []);
	import_react.useEffect(() => {
		return () => clearAutoScrollTimer();
	}, [clearAutoScrollTimer]);
	useLayoutEffect2(() => {
		getItems().find((item) => item.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [getItems]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		...scrollIndicatorProps,
		ref: forwardedRef,
		style: {
			flexShrink: 0,
			...scrollIndicatorProps.style
		},
		onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
			contentContext.onItemLeave?.();
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
			clearAutoScrollTimer();
		})
	});
}, "SelectScrollButtonImpl"));
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SelectBubbleInput2({ __scopeSelect, ...props }, forwardedRef) {
	const context = useSelectContext(BUBBLE_INPUT_NAME, __scopeSelect);
	const { value, onValueChange, required, disabled, name, autoComplete, form } = context;
	const { nativeOptions, nativeSelectKey } = context;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$1(forwardedRef, ref);
	const selectValue = value ?? "";
	const prevValue = usePrevious(selectValue);
	const hasEmptyValueOption = Array.from(nativeOptions).some((option) => (option.props.value ?? "") === "");
	import_react.useEffect(() => {
		const select = ref.current;
		if (!select) return;
		const selectProto = window.HTMLSelectElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
		if (prevValue !== selectValue && setValue) {
			const event = new Event("change", { bubbles: true });
			setValue.call(select, selectValue);
			select.dispatchEvent(event);
		}
	}, [prevValue, selectValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Primitive.select, {
		"aria-hidden": true,
		required,
		tabIndex: -1,
		name,
		autoComplete,
		disabled,
		form,
		onChange: (event) => onValueChange(event.target.value),
		...props,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		},
		ref: composedRefs,
		defaultValue: selectValue,
		children: [shouldShowPlaceholder(value) && !hasEmptyValueOption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }) : null, Array.from(nativeOptions)]
	}, nativeSelectKey);
}, "SelectBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name(isFunction, "isFunction");
function shouldShowPlaceholder(value) {
	return value === "" || value === void 0;
}
__name(shouldShowPlaceholder, "shouldShowPlaceholder");
function useTypeaheadSearch(onSearchChange) {
	const handleSearchChange = useCallbackRef$1(onSearchChange);
	const searchRef = import_react.useRef("");
	const timerRef = import_react.useRef(0);
	const handleTypeaheadSearch = import_react.useCallback((key) => {
		const search = searchRef.current + key;
		handleSearchChange(search);
		(/* @__PURE__ */ __name((function updateSearch(value) {
			searchRef.current = value;
			window.clearTimeout(timerRef.current);
			if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
		}), "updateSearch"))(search);
	}, [handleSearchChange]);
	const resetTypeahead = import_react.useCallback(() => {
		searchRef.current = "";
		window.clearTimeout(timerRef.current);
	}, []);
	import_react.useEffect(() => {
		return () => window.clearTimeout(timerRef.current);
	}, []);
	return [
		searchRef,
		handleTypeaheadSearch,
		resetTypeahead
	];
}
__name(useTypeaheadSearch, "useTypeaheadSearch");
function findNextItem(items, search, currentItem) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
	let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
	if (normalizedSearch.length === 1) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
	const nextItem = wrappedItems.find((item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextItem !== currentItem ? nextItem : void 0;
}
__name(findNextItem, "findNextItem");
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name(wrapArray, "wrapArray");
//#endregion
//#region components/ui/select.tsx
function Select({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select$1, {
		"data-slot": "select",
		...props
	});
}
function SelectValue({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue$1, {
		"data-slot": "select-value",
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn$1("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
		"data-slot": "select-content",
		className: cn$1("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
		position,
		align,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
				className: cn$1("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
		]
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		"data-slot": "select-item",
		className: cn$1("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
		"data-slot": "select-scroll-up-button",
		className: cn$1("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
		"data-slot": "select-scroll-down-button",
		className: cn$1("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
	});
}
//#endregion
//#region node_modules/input-otp/dist/index.mjs
var Bt = Object.defineProperty, At = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable;
var vt = (r, s, e) => s in r ? Bt(r, s, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : r[s] = e, St = (r, s) => {
	for (var e in s || (s = {})) gt.call(s, e) && vt(r, e, s[e]);
	if (Y) for (var e of Y(s)) Et.call(s, e) && vt(r, e, s[e]);
	return r;
}, bt = (r, s) => At(r, kt(s));
var Pt = (r, s) => {
	var e = {};
	for (var u in r) gt.call(r, u) && s.indexOf(u) < 0 && (e[u] = r[u]);
	if (r != null && Y) for (var u of Y(r)) s.indexOf(u) < 0 && Et.call(r, u) && (e[u] = r[u]);
	return e;
};
function ht(r) {
	return [
		setTimeout(r, 0),
		setTimeout(r, 10),
		setTimeout(r, 50)
	];
}
function _t(r) {
	let s = import_react.useRef();
	return import_react.useEffect(() => {
		s.current = r;
	}), s.current;
}
var Ot = 18, wt = 40, Gt = `${wt}px`, xt = [
	"[data-lastpass-icon-root]",
	"com-1password-button",
	"[data-dashlanecreated]",
	"[style$=\"2147483647 !important;\"]"
].join(",");
function Tt({ containerRef: r, inputRef: s, pushPasswordManagerStrategy: e, isFocused: u }) {
	let [P, D] = import_react.useState(!1), [G, H] = import_react.useState(!1), [F, W] = import_react.useState(!1), Z = import_react.useMemo(() => e === "none" ? !1 : (e === "increase-width" || e === "experimental-no-flickering") && P && G, [
		P,
		G,
		e
	]), T = import_react.useCallback(() => {
		let f = r.current, h = s.current;
		if (!f || !h || F || e === "none") return;
		let a = f, B = a.getBoundingClientRect().left + a.offsetWidth, A = a.getBoundingClientRect().top + a.offsetHeight / 2, z = B - Ot, q = A;
		document.querySelectorAll(xt).length === 0 && document.elementFromPoint(z, q) === f || (D(!0), W(!0));
	}, [
		r,
		s,
		F,
		e
	]);
	return import_react.useEffect(() => {
		let f = r.current;
		if (!f || e === "none") return;
		function h() {
			H(window.innerWidth - f.getBoundingClientRect().right >= wt);
		}
		h();
		let a = setInterval(h, 1e3);
		return () => {
			clearInterval(a);
		};
	}, [r, e]), import_react.useEffect(() => {
		let f = u || document.activeElement === s.current;
		if (e === "none" || !f) return;
		let h = setTimeout(T, 0), a = setTimeout(T, 2e3), B = setTimeout(T, 5e3), A = setTimeout(() => {
			W(!0);
		}, 6e3);
		return () => {
			clearTimeout(h), clearTimeout(a), clearTimeout(B), clearTimeout(A);
		};
	}, [
		s,
		u,
		e,
		T
	]), {
		hasPWMBadge: P,
		willPushPWMBadge: Z,
		PWM_BADGE_SPACE_WIDTH: Gt
	};
}
var jt = import_react.createContext({}), Lt = import_react.forwardRef((A, B) => {
	var z = A, { value: r, onChange: s, maxLength: e, textAlign: u = "left", pattern: P, placeholder: D, inputMode: G = "numeric", onComplete: H, pushPasswordManagerStrategy: F = "increase-width", pasteTransformer: W, containerClassName: Z, noScriptCSSFallback: T = Nt, render: f, children: h } = z, a = Pt(z, [
		"value",
		"onChange",
		"maxLength",
		"textAlign",
		"pattern",
		"placeholder",
		"inputMode",
		"onComplete",
		"pushPasswordManagerStrategy",
		"pasteTransformer",
		"containerClassName",
		"noScriptCSSFallback",
		"render",
		"children"
	]);
	var X, lt, ut, dt, ft;
	let [q, nt] = import_react.useState(typeof a.defaultValue == "string" ? a.defaultValue : ""), i = r != null ? r : q, I = _t(i), x = import_react.useCallback((t) => {
		s?.(t), nt(t);
	}, [s]), m = import_react.useMemo(() => P ? typeof P == "string" ? new RegExp(P) : P : null, [P]), l = import_react.useRef(null), K = import_react.useRef(null), J = import_react.useRef({
		value: i,
		onChange: x,
		isIOS: typeof window != "undefined" && ((lt = (X = window == null ? void 0 : window.CSS) == null ? void 0 : X.supports) == null ? void 0 : lt.call(X, "-webkit-touch-callout", "none"))
	}), V = import_react.useRef({ prev: [
		(ut = l.current) == null ? void 0 : ut.selectionStart,
		(dt = l.current) == null ? void 0 : dt.selectionEnd,
		(ft = l.current) == null ? void 0 : ft.selectionDirection
	] });
	import_react.useImperativeHandle(B, () => l.current, []), import_react.useEffect(() => {
		let t = l.current, o = K.current;
		if (!t || !o) return;
		J.current.value !== t.value && J.current.onChange(t.value), V.current.prev = [
			t.selectionStart,
			t.selectionEnd,
			t.selectionDirection
		];
		function d() {
			if (document.activeElement !== t) {
				L(null), N(null);
				return;
			}
			let c = t.selectionStart, b = t.selectionEnd, mt = t.selectionDirection, v = t.maxLength, C = t.value, _ = V.current.prev, g = -1, E = -1, w;
			if (C.length !== 0 && c !== null && b !== null) {
				let Dt = c === b, Ht = c === C.length && C.length < v;
				if (Dt && !Ht) {
					let y = c;
					if (y === 0) g = 0, E = 1, w = "forward";
					else if (y === v) g = y - 1, E = y, w = "backward";
					else if (v > 1 && C.length > 1) {
						let et = 0;
						if (_[0] !== null && _[1] !== null) {
							w = y < _[1] ? "backward" : "forward";
							let Wt = _[0] === _[1] && _[0] < v;
							w === "backward" && !Wt && (et = -1);
						}
						g = et + y, E = et + y + 1;
					}
				}
				g !== -1 && E !== -1 && g !== E && l.current.setSelectionRange(g, E, w);
			}
			let pt = g !== -1 ? g : c, Rt = E !== -1 ? E : b, yt = w != null ? w : mt;
			L(pt), N(Rt), V.current.prev = [
				pt,
				Rt,
				yt
			];
		}
		if (document.addEventListener("selectionchange", d, { capture: !0 }), d(), document.activeElement === t && Q(!0), !document.getElementById("input-otp-style")) {
			let c = document.createElement("style");
			if (c.id = "input-otp-style", document.head.appendChild(c), c.sheet) {
				let b = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
				$(c.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), $(c.sheet, `[data-input-otp]:autofill { ${b} }`), $(c.sheet, `[data-input-otp]:-webkit-autofill { ${b} }`), $(c.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), $(c.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
			}
		}
		let R = () => {
			o && o.style.setProperty("--root-height", `${t.clientHeight}px`);
		};
		R();
		let p = new ResizeObserver(R);
		return p.observe(t), () => {
			document.removeEventListener("selectionchange", d, { capture: !0 }), p.disconnect();
		};
	}, []);
	let [ot, rt] = import_react.useState(!1), [j, Q] = import_react.useState(!1), [M, L] = import_react.useState(null), [k, N] = import_react.useState(null);
	import_react.useEffect(() => {
		ht(() => {
			var R, p, c, b;
			(R = l.current) == null || R.dispatchEvent(new Event("input"));
			let t = (p = l.current) == null ? void 0 : p.selectionStart, o = (c = l.current) == null ? void 0 : c.selectionEnd, d = (b = l.current) == null ? void 0 : b.selectionDirection;
			t !== null && o !== null && (L(t), N(o), V.current.prev = [
				t,
				o,
				d
			]);
		});
	}, [i, j]), import_react.useEffect(() => {
		I !== void 0 && i !== I && I.length < e && i.length === e && H?.(i);
	}, [
		e,
		H,
		I,
		i
	]);
	let O = Tt({
		containerRef: K,
		inputRef: l,
		pushPasswordManagerStrategy: F,
		isFocused: j
	}), st = import_react.useCallback((t) => {
		let o = t.currentTarget.value.slice(0, e);
		if (o.length > 0 && m && !m.test(o)) {
			t.preventDefault();
			return;
		}
		typeof I == "string" && o.length < I.length && document.dispatchEvent(new Event("selectionchange")), x(o);
	}, [
		e,
		x,
		I,
		m
	]), at = import_react.useCallback(() => {
		var t;
		if (l.current) {
			let o = Math.min(l.current.value.length, e - 1), d = l.current.value.length;
			(t = l.current) == null || t.setSelectionRange(o, d), L(o), N(d);
		}
		Q(!0);
	}, [e]), ct = import_react.useCallback((t) => {
		var g, E;
		let o = l.current;
		if (!W && (!J.current.isIOS || !t.clipboardData || !o)) return;
		let d = t.clipboardData.getData("text/plain"), R = W ? W(d) : d;
		t.preventDefault();
		let p = (g = l.current) == null ? void 0 : g.selectionStart, c = (E = l.current) == null ? void 0 : E.selectionEnd, v = (p !== c ? i.slice(0, p) + R + i.slice(c) : i.slice(0, p) + R + i.slice(p)).slice(0, e);
		if (v.length > 0 && m && !m.test(v)) return;
		o.value = v, x(v);
		let C = Math.min(v.length, e - 1), _ = v.length;
		o.setSelectionRange(C, _), L(C), N(_);
	}, [
		e,
		x,
		m,
		i
	]), It = import_react.useMemo(() => ({
		position: "relative",
		cursor: a.disabled ? "default" : "text",
		userSelect: "none",
		WebkitUserSelect: "none",
		pointerEvents: "none"
	}), [a.disabled]), it = import_react.useMemo(() => ({
		position: "absolute",
		inset: 0,
		width: O.willPushPWMBadge ? `calc(100% + ${O.PWM_BADGE_SPACE_WIDTH})` : "100%",
		clipPath: O.willPushPWMBadge ? `inset(0 ${O.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
		height: "100%",
		display: "flex",
		textAlign: u,
		opacity: "1",
		color: "transparent",
		pointerEvents: "all",
		background: "transparent",
		caretColor: "transparent",
		border: "0 solid transparent",
		outline: "0 solid transparent",
		boxShadow: "none",
		lineHeight: "1",
		letterSpacing: "-.5em",
		fontSize: "var(--root-height)",
		fontFamily: "monospace",
		fontVariantNumeric: "tabular-nums"
	}), [
		O.PWM_BADGE_SPACE_WIDTH,
		O.willPushPWMBadge,
		u
	]), Mt = import_react.useMemo(() => import_react.createElement("input", bt(St({ autoComplete: a.autoComplete || "one-time-code" }, a), {
		"data-input-otp": !0,
		"data-input-otp-placeholder-shown": i.length === 0 || void 0,
		"data-input-otp-mss": M,
		"data-input-otp-mse": k,
		inputMode: G,
		pattern: m == null ? void 0 : m.source,
		"aria-placeholder": D,
		style: it,
		maxLength: e,
		value: i,
		ref: l,
		onPaste: (t) => {
			var o;
			ct(t), (o = a.onPaste) == null || o.call(a, t);
		},
		onChange: st,
		onMouseOver: (t) => {
			var o;
			rt(!0), (o = a.onMouseOver) == null || o.call(a, t);
		},
		onMouseLeave: (t) => {
			var o;
			rt(!1), (o = a.onMouseLeave) == null || o.call(a, t);
		},
		onFocus: (t) => {
			var o;
			at(), (o = a.onFocus) == null || o.call(a, t);
		},
		onBlur: (t) => {
			var o;
			Q(!1), (o = a.onBlur) == null || o.call(a, t);
		}
	})), [
		st,
		at,
		ct,
		G,
		it,
		e,
		k,
		M,
		a,
		m == null ? void 0 : m.source,
		i
	]), tt = import_react.useMemo(() => ({
		slots: Array.from({ length: e }).map((t, o) => {
			var c;
			let d = j && M !== null && k !== null && (M === k && o === M || o >= M && o < k), R = i[o] !== void 0 ? i[o] : null;
			return {
				char: R,
				placeholderChar: i[0] !== void 0 ? null : (c = D == null ? void 0 : D[o]) != null ? c : null,
				isActive: d,
				hasFakeCaret: d && R === null
			};
		}),
		isFocused: j,
		isHovering: !a.disabled && ot
	}), [
		j,
		ot,
		e,
		k,
		M,
		a.disabled,
		i
	]), Ct = import_react.useMemo(() => f ? f(tt) : import_react.createElement(jt.Provider, { value: tt }, h), [
		h,
		tt,
		f
	]);
	return import_react.createElement(import_react.Fragment, null, T !== null && import_react.createElement("noscript", null, import_react.createElement("style", null, T)), import_react.createElement("div", {
		ref: K,
		"data-input-otp-container": !0,
		style: It,
		className: Z
	}, Ct, import_react.createElement("div", { style: {
		position: "absolute",
		inset: 0,
		pointerEvents: "none"
	} }, Mt)));
});
Lt.displayName = "Input";
function $(r, s) {
	try {
		r.insertRule(s);
	} catch (e) {
		console.error("input-otp could not insert CSS rule:", s);
	}
}
var Nt = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
//#endregion
//#region components/ui/input-otp.tsx
function InputOTP({ className, containerClassName, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lt, {
		"data-slot": "input-otp",
		containerClassName: cn$1("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
		className: cn$1("disabled:cursor-not-allowed", className),
		...props
	});
}
function InputOTPGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "input-otp-group",
		className: cn$1("flex items-center", className),
		...props
	});
}
function InputOTPSlot({ index, className, ...props }) {
	const { char, hasFakeCaret, isActive } = import_react.useContext(jt)?.slots[index] ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-slot": "input-otp-slot",
		"data-active": isActive,
		className: cn$1("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LockKeyhole = createLucideIcon("lock-keyhole", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		x: "3",
		y: "10",
		width: "18",
		height: "12",
		rx: "2",
		key: "6s8ecr"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 10 0v3",
		key: "1pqi11"
	}]
]);
//#endregion
//#region app/password-form.tsx
function PasswordForm({ onSuccess }) {
	const [mode, setMode] = (0, import_react.useState)("register"), [name, setName] = (0, import_react.useState)(""), [username, setUsername] = (0, import_react.useState)(""), [password, setPassword] = (0, import_react.useState)(""), [confirm, setConfirm] = (0, import_react.useState)(""), [visible, setVisible] = (0, import_react.useState)(false), [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		setError("");
		if (mode === "register" && password !== confirm) {
			setError("兩次輸入嘅密碼唔一致。");
			return;
		}
		setBusy(true);
		try {
			const r = await fetch("/api/auth/password", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					mode,
					name,
					username,
					password
				})
			});
			const data = await r.json();
			if (!r.ok) throw new Error(data.error || "登入唔成功，請再試。");
			setPassword("");
			setConfirm("");
			onSuccess(data.user);
		} catch (e) {
			setError(e instanceof Error ? e.message : "請稍後再試。");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
		value: mode,
		onValueChange: (v) => {
			setMode(v);
			setError("");
		},
		className: "password-modes",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
			value: "register",
			children: "新會員登記"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
			value: "login",
			children: "已有帳戶"
		})] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "auth-fields password-fields",
		onSubmit: submit,
		children: [
			mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "password-name",
				children: "點稱呼你？"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "password-name",
				autoComplete: "nickname",
				required: true,
				maxLength: 24,
				placeholder: "你嘅主廚名",
				value: name,
				onChange: (e) => setName(e.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "login-username",
				children: "登入名稱"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "login-username",
				autoComplete: "username",
				autoCapitalize: "none",
				spellCheck: false,
				required: true,
				minLength: 4,
				maxLength: 32,
				pattern: "[A-Za-z0-9][A-Za-z0-9_.\\-]{3,31}",
				placeholder: "4–32 個英文字母、數字或 . _ -",
				value: username,
				onChange: (e) => setUsername(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "login-password",
				children: "密碼"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "password-input",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "login-password",
					type: visible ? "text" : "password",
					autoComplete: mode === "register" ? "new-password" : "current-password",
					required: true,
					minLength: 10,
					maxLength: 64,
					placeholder: "最少 10 個字元",
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": visible ? "隱藏密碼" : "顯示密碼",
					"aria-pressed": visible,
					onClick: () => setVisible((v) => !v),
					children: visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 19 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 19 })
				})]
			}),
			mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "confirm-password",
					children: "再輸入一次密碼"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "confirm-password",
					type: visible ? "text" : "password",
					autoComplete: "new-password",
					required: true,
					minLength: 10,
					maxLength: 64,
					value: confirm,
					onChange: (e) => setConfirm(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "auth-privacy",
					children: "稱呼會顯示喺你嘅帳戶同共創作品。請記低登入名稱及密碼；目前未提供自助重設密碼。"
				})
			] }),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "error-text",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "primary full",
				disabled: busy,
				type: "submit",
				children: [
					busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "spin",
						size: 18
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 18 }),
					" ",
					mode === "register" ? "建立帳戶，繼續煮" : "登入，繼續煮",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
				]
			})
		]
	})] });
}
//#endregion
//#region lib/phone.ts
var countryCodes = [
	{
		code: "852",
		name: "香港",
		lengths: [8]
	},
	{
		code: "853",
		name: "澳門",
		lengths: [8]
	},
	{
		code: "86",
		name: "中國內地",
		lengths: [11]
	},
	{
		code: "886",
		name: "台灣",
		lengths: [9]
	},
	{
		code: "65",
		name: "新加坡",
		lengths: [8]
	},
	{
		code: "60",
		name: "馬來西亞",
		lengths: [9, 10]
	},
	{
		code: "44",
		name: "英國",
		lengths: [10]
	},
	{
		code: "1",
		name: "美國／加拿大",
		lengths: [10]
	},
	{
		code: "61",
		name: "澳洲",
		lengths: [9]
	},
	{
		code: "81",
		name: "日本",
		lengths: [10]
	},
	{
		code: "82",
		name: "韓國",
		lengths: [9, 10]
	}
];
function normalizePhone(country, number) {
	if (typeof country !== "string" || typeof number !== "string") return null;
	const c = countryCodes.find((c) => c.code === country);
	if (!c || !/^[0-9\s()-]+$/.test(number)) return null;
	let local = number.replace(/\D/g, "");
	if ([
		"886",
		"60",
		"44",
		"61",
		"81",
		"82"
	].includes(country)) local = local.replace(/^0/, "");
	if (!c.lengths.includes(local.length)) return null;
	const result = "+" + country + local;
	return /^\+[1-9]\d{7,14}$/.test(result) ? result : null;
}
//#endregion
//#region app/phone-auth.tsx
function PhoneAuth({ open, onOpenChange, onSuccess }) {
	const [method, setMethod] = (0, import_react.useState)("password");
	const [country, setCountry] = (0, import_react.useState)("852"), [phone, setPhone] = (0, import_react.useState)(""), [name, setName] = (0, import_react.useState)(""), [consent, setConsent] = (0, import_react.useState)(false), [challenge, setChallenge] = (0, import_react.useState)(""), [code, setCode] = (0, import_react.useState)(""), [seconds, setSeconds] = (0, import_react.useState)(0), [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(""), [enabled, setEnabled] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!open || method !== "phone") return;
		fetch("/api/auth/status").then(async (r) => {
			if (!r.ok) throw new Error();
			setEnabled((await r.json()).smsEnabled);
		}).catch(() => {
			setEnabled(false);
			setError("暫時連接唔到登記服務，請稍後再試。");
		});
	}, [open, method]);
	(0, import_react.useEffect)(() => {
		if (seconds <= 0) return;
		const id = setTimeout(() => setSeconds((s) => s - 1), 1e3);
		return () => clearTimeout(id);
	}, [seconds]);
	async function send() {
		setError("");
		if (!normalizePhone(country, phone)) {
			setError("請檢查區號同手機號碼。");
			return;
		}
		if (!name.trim() || !consent) {
			setError("請填上稱呼，並同意接收登入驗證短訊。");
			return;
		}
		setBusy(true);
		try {
			const r = await fetch("/api/auth/send-code", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					country,
					phone,
					name,
					consent
				})
			});
			const d = await r.json();
			if (!r.ok) throw new Error(d.error || "未能發出驗證碼，請再試。");
			setChallenge(d.challengeId);
			setCode("");
			setSeconds(d.retryAfter);
		} catch (e) {
			setError(e instanceof Error ? e.message : "短訊發唔到，請稍後再試。");
		} finally {
			setBusy(false);
		}
	}
	async function verify() {
		setBusy(true);
		setError("");
		try {
			const r = await fetch("/api/auth/verify-code", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					challengeId: challenge,
					code
				})
			});
			const d = await r.json();
			if (!r.ok) throw new Error(d.error || "驗證唔成功，請再試。");
			onSuccess(d.user);
			onOpenChange(false);
			setChallenge("");
			setCode("");
		} catch (e) {
			setError(e instanceof Error ? e.message : "驗證唔成功，請再試。");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "auth-dialog",
			showCloseButton: false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "close-button",
					"aria-label": "關閉會員登記",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "auth-mark",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/logo.jpg",
						alt: "玖柒牌"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: method === "phone" && challenge ? "輸入驗證碼" : "留低你嘅拿手好味" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: method === "phone" && challenge ? `短訊已發送至 +${country} ${phone}。請輸入六位驗證碼。` : "登記或登入，收藏食譜、分享你嘅廚神時刻。" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
					value: method,
					onValueChange: setMethod,
					className: "auth-methods",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "password",
						children: "帳戶及密碼"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "phone",
						children: "手機驗證碼"
					})] })
				}),
				method === "password" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordForm, { onSuccess: (u) => {
					onSuccess(u);
					onOpenChange(false);
				} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!challenge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send();
					},
					className: "auth-fields",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "member-name",
							children: "點稱呼你？"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "member-name",
							autoComplete: "nickname",
							maxLength: 24,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "輸入你嘅主廚名"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "member-phone",
							children: "手機號碼"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "phone-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: country,
								onValueChange: setCountry,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									"aria-label": "電話區號",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: countryCodes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: c.code,
									children: [
										c.name,
										" +",
										c.code
									]
								}, c.code)) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "member-phone",
								type: "tel",
								autoComplete: "tel-national",
								inputMode: "tel",
								placeholder: "手機號碼",
								value: phone,
								maxLength: 18,
								onChange: (e) => setPhone(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "consent-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: consent,
								onCheckedChange: (v) => setConsent(v === true)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "我同意接收今次登入所需嘅驗證短訊。手機號碼只用作帳戶驗證，唔會公開。" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "auth-privacy",
							children: "完成驗證後會建立會員記錄，儲存你嘅稱呼、手機號碼、收藏及打卡作品。"
						}),
						enabled === false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "service-pending",
							role: "status",
							children: "手機登記即將開放。你可以先睇食譜，同埋製作及下載打卡相。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "primary full",
							type: "submit",
							disabled: busy || enabled !== true || !consent || !name.trim() || !phone.trim(),
							children: [
								busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "spin",
									size: 18
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }),
								" ",
								enabled === null ? "正在連接…" : enabled === false ? "短訊驗證尚未啟用" : "發送驗證碼",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						verify();
					},
					className: "otp-form",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
							"aria-label": "六位短訊驗證碼",
							maxLength: 6,
							pattern: "^[0-9]*$",
							inputMode: "numeric",
							autoComplete: "one-time-code",
							value: code,
							onChange: setCode,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPGroup, { children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: i }, i)) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "primary full",
							type: "submit",
							disabled: code.length !== 6 || busy,
							children: [
								busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "spin",
									size: 18
								}),
								"驗證並登入 ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-button",
							disabled: seconds > 0 || busy,
							onClick: send,
							children: seconds > 0 ? `${seconds} 秒後可重新發送` : "重新發送驗證碼"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "text-button",
							onClick: () => {
								setChallenge("");
								setError("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "修改手機號碼"]
						})
					]
				}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "error-text",
					children: error
				})] })
			]
		})
	});
}
//#endregion
//#region app/kitchen.tsx
var recipes = [
	...recipes_default,
	...ig_default,
	...innovation_default
];
var igIds = new Set(ig_default.map((r) => r.id));
var products = [
	{
		id: "vermicelli",
		name: "龍口粉絲",
		note: "幼滑掛汁，點煮都啱。",
		image: "vermicelli.png"
	},
	{
		id: "crystal",
		name: "水晶粉皮",
		note: "晶瑩煙韌，涼拌一流。",
		image: "crystal.png"
	},
	{
		id: "wide",
		name: "綠豆馬鈴薯寬粉",
		short: "馬鈴薯寬粉",
		note: "薄身爽滑，煲仔好拍檔。",
		image: "wide.png"
	},
	{
		id: "nori",
		name: "精選紫菜",
		note: "啖啖鮮香，屋企嘅味道。",
		image: "nori.jpg"
	}
];
function Kitchen({ user: initialUser }) {
	const [user, setUser] = (0, import_react.useState)(initialUser), [authOpen, setAuthOpen] = (0, import_react.useState)(false), [resumeStudio, setResumeStudio] = (0, import_react.useState)(false), [tab, setTab] = (0, import_react.useState)("recipes"), [product, setProduct] = (0, import_react.useState)("all"), [selected, setSelected] = (0, import_react.useState)(null), [post, setPost] = (0, import_react.useState)(null), [studio, setStudio] = (0, import_react.useState)(false), [saved, setSaved] = (0, import_react.useState)([]), [posts, setPosts] = (0, import_react.useState)([]), [loading, setLoading] = (0, import_react.useState)(true), [error, setError] = (0, import_react.useState)(""), [saveBusy, setSaveBusy] = (0, import_react.useState)([]), [completed, setCompleted] = (0, import_react.useState)([]), [accountView, setAccountView] = (0, import_react.useState)("saved");
	async function refresh() {
		setLoading(true);
		setError("");
		try {
			const r = await fetch("/api/posts");
			const data = await r.json();
			if (!r.ok) throw new Error(data.error);
			setPosts(data.posts);
		} catch (e) {
			setError(e instanceof Error ? e.message : "暫時載入唔到，請再試。");
		} finally {
			setLoading(false);
		}
	}
	async function refreshFavorites() {
		try {
			const r = await fetch("/api/favorites");
			const d = await r.json();
			if (!r.ok) throw new Error(d.error);
			setSaved(d.favorites);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "暫時載入唔到收藏。");
		}
	}
	(0, import_react.useEffect)(() => {
		refresh();
		refreshFavorites();
	}, []);
	function requireStudioLogin() {
		setResumeStudio(true);
		setStudio(false);
		setAuthOpen(true);
	}
	function startCommunity() {
		if (!user) {
			toast("先登記一個帳戶，就可以分享你嘅拿手菜。");
			requireStudioLogin();
		} else setStudio(true);
	}
	function openRecipe(r) {
		setSelected(r);
		setCompleted([]);
	}
	async function favorite(item) {
		if (!user) {
			setAuthOpen(true);
			return;
		}
		if (saveBusy.includes(item)) return;
		setSaveBusy((v) => [...v, item]);
		try {
			const next = !saved.includes(item);
			const r = await fetch("/api/favorites", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					item,
					saved: next
				})
			});
			const d = await r.json();
			if (!r.ok) throw new Error(d.error);
			setSaved((v) => next ? [...v, item] : v.filter((x) => x !== item));
			toast.success(next ? "已收藏，下次煮返呢味！" : "已取消收藏");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "儲存唔到，請再試。");
		} finally {
			setSaveBusy((v) => v.filter((x) => x !== item));
		}
	}
	async function logout() {
		if (user?.source === "platform") {
			window.location.href = "/signout-with-chatgpt?return_to=/";
			return;
		}
		try {
			if (!(await fetch("/api/auth/logout", { method: "POST" })).ok) throw new Error();
			setUser(null);
			setSaved([]);
			refresh();
			toast.success("已登出帳戶。");
		} catch {
			toast.error("暫時登出唔到，請再試一次。");
		}
	}
	function heart(item) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "heart " + (saved.includes(item) ? "is-saved" : ""),
			"aria-label": saved.includes(item) ? "取消收藏" : "收藏食譜",
			"aria-pressed": saved.includes(item),
			disabled: saveBusy.includes(item),
			onClick: (e) => {
				e.stopPropagation();
				favorite(item);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				size: 19,
				fill: saved.includes(item) ? "currentColor" : "none"
			})
		});
	}
	function recipeCard(r) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "recipe-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "recipe-photo",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openRecipe(r),
						"aria-label": "睇" + r.name + "嘅做法",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: r.name,
							loading: "lazy"
						})
					}),
					heart("r:" + r.id),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "photo-tag",
						children: r.category
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "recipe-info",
				onClick: () => openRecipe(r),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "recipe-product",
						children: r.products.map((p) => products.find((x) => x.id === p)?.short || products.find((x) => x.id === p)?.name).join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: r.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "recipe-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.steps.length, " 個步驟"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["睇做法 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })] })]
					})
				]
			})]
		}, r.id);
	}
	function postCard(p) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "recipe-card community-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "recipe-photo",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setPost(p),
					"aria-label": "睇" + p.title,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.title,
						loading: "lazy"
					})
				}), heart("p:" + p.id)]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "recipe-info",
				onClick: () => setPost(p),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "recipe-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 14 }), p.author] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "廚神打卡" })]
				})]
			})]
		}, p.id);
	}
	const shown = recipes_default.filter((r) => product === "all" || r.products.includes(product));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: tab,
			onValueChange: (v) => {
				setTab(v);
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			},
			className: "app-tabs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "site-header",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "brand",
								onClick: () => setTab("recipes"),
								"aria-label": "返回玖柒廚房主頁",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/logo.jpg",
									alt: "玖柒牌"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "玖柒廚房" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "main-nav",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "recipes",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {}), "精選食譜"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "innovation",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), "創新菜式"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "ig",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}), "IG博主同款"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "community",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}), "共創菜品"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "account",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), "我的帳戶"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "header-create",
								onClick: () => setStudio(true),
								"aria-label": "製作廚神打卡相",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "廚神打卡" })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "recipes",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["今日，煮返餐", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "靚嘅。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "一包玖柒，百變好滋味。揀好食材，就開飯。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "studio-banner",
									onClick: () => setStudio(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 26 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "你嘅拿手菜，值得打卡。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["整張專屬廚神相 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })] })] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "product-section",
								"aria-label": "按食材揀食譜",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "section-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "由好食材開始" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "all-button " + (product === "all" ? "active" : ""),
										onClick: () => setProduct("all"),
										children: ["全部食材 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "product-grid",
									children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "product-card " + (product === p.id ? "selected" : ""),
										"aria-pressed": product === p.id,
										onClick: () => setProduct(product === p.id ? "all" : p.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/" + p.image,
												alt: "玖柒牌" + p.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.short || p.name }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.note }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [recipes_default.filter((r) => r.products.includes(p.id)).length, " 道食譜"] })
											] }),
											product === p.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "product-check",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
											})
										]
									}, p.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "recipe-section",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "section-top collection-heading",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: product === "all" ? "日常好煮意" : (products.find((p) => p.id === product)?.short || products.find((p) => p.id === product)?.name) + "好煮意" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "簡單跟住煮，屋企都食得精彩。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "collection-count",
										children: [shown.length, " 道精選食譜"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "recipe-grid featured-grid",
									children: shown.map(recipeCard)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "innovation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "innovation-intro",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "innovation-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 }), " 玖柒新煮意"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
									"熟悉嘅食材，",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "煮啲唔同嘅。" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"金沙鹹香、薄荷清新、濃茄芝士。",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "mobile-break" }),
									"三款原創配搭，畀日常餐桌一啲驚喜。"
								] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "innovation-list",
							children: innovation_default.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "innovation-story story-" + i,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "innovation-image",
									onClick: () => openRecipe(r),
									"aria-label": "睇" + r.name + "嘅做法",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.image,
										alt: r.name
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "innovation-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "innovation-category",
											children: r.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: r.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.story }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "innovation-details",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 }), r.time] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }), r.servings] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "innovation-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "primary",
												onClick: () => openRecipe(r),
												children: ["試煮呢一道 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
											}), heart("r:" + r.id)]
										})
									]
								})]
							}, r.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "ig",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "innovation-intro",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "innovation-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { size: 16 }), " IG博主同款"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
									"IG 見到嘅，",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "今晚煮得返。" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"博主同款人氣蒸菜，",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "mobile-break" }),
									"粉絲吸滿蒜香，蚌肉鮮甜彈牙。"
								] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "innovation-list",
							children: ig_default.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "innovation-story story-" + i,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "innovation-image",
									onClick: () => openRecipe(r),
									"aria-label": "睇" + r.name + "嘅做法",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.image,
										alt: r.name
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "innovation-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "innovation-category",
											children: r.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: r.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.story }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "innovation-details",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 }), r.time] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }), r.servings] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "innovation-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "primary",
												onClick: () => openRecipe(r),
												children: ["試煮呢一道 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
											}), heart("r:" + r.id)]
										})
									]
								})]
							}, r.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "community",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["好味道，", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "一齊煮出嚟。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "分享你嘅拿手菜，有機會入選「精選食譜」。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "primary",
								onClick: startCommunity,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 19 }), "製作廚神打卡相"]
							})]
						}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "spin" }), "搵緊好味道…"]
						}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: error }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "secondary",
								onClick: refresh,
								children: "再試一次"
							})]
						}) : posts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "recipe-grid",
							children: posts.map(postCard)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "community-empty",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { size: 44 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "第一道好菜，等你上枱。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "影低你嘅拿手菜，將煮食靈感分享畀大家。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "primary",
									onClick: startCommunity,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), "分享我嘅第一道菜"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "account",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "account-header",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "avatar",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { size: 32 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: user ? user.name : "呢度係你嘅廚房。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: user ? user.phone ? `已驗證手機 ${user.phone}` : "收藏好煮意，記低每次好味道。" : "登記帳戶，儲起心頭好，分享廚神時刻。" })] }),
									!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "primary",
										onClick: () => setAuthOpen(true),
										children: ["登記／登入 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "account-auth-actions",
										children: [user.source === "platform" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "text-button",
											onClick: () => setAuthOpen(true),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), "手機登記"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "text-button",
											onClick: logout,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), "登出"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "account-services",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toast("客戶服務，敬請期待。"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["聯絡客服", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "有問題，我哋樂意幫手。" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toast("WhatsApp 福利群，敬請期待。"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["WhatsApp 福利群", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "好味道同專屬優惠，即將送上。" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
								value: accountView,
								onValueChange: setAccountView,
								className: "account-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "saved",
										children: ["我的收藏 · ", saved.length]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "mine",
										children: ["我的打卡 · ", posts.filter((p) => p.mine).length]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
										value: "saved",
										children: saved.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "recipe-grid",
											children: [recipes.filter((r) => saved.includes("r:" + r.id)).map(recipeCard), posts.filter((p) => saved.includes("p:" + p.id)).map(postCard)]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "empty",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 34 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "心頭好，留返下次煮。" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "撳食譜上嘅心心，就可以儲喺呢度。" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													className: "secondary",
													onClick: () => setTab("recipes"),
													children: ["睇吓精選食譜 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
										value: "mine",
										children: posts.some((p) => p.mine) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "recipe-grid",
											children: posts.filter((p) => p.mine).map(postCard)
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "empty",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 34 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "第一個廚神時刻，由你開始。" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "primary",
													onClick: () => setStudio(true),
													children: "製作打卡相"
												})
											]
										})
									})
								]
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/logo.jpg",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "玖柒廚房" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "好食材，好好煮，好好食。" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: !!selected || !!post,
			onOpenChange: (open) => {
				if (!open) {
					setSelected(null);
					setPost(null);
				}
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				className: "recipe-detail",
				showCloseButton: false,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
					className: "close-button",
					"aria-label": "關閉食譜",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail-photo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selected.image,
							alt: selected.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: igIds.has(selected.id) ? "玖柒 · IG博主同款" : selected.id > 27 ? "玖柒 · 創新菜式" : "玖柒 · 精選食譜" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "detail-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: selected.name }), heart("r:" + selected.id)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: [
								selected.time ? `${selected.time} · ${selected.servings} · ` : "",
								selected.steps.length,
								" 個步驟，跟住煮就得。"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipePreparation, {
								ingredients: selected.ingredients,
								seasoning: selected.seasoning,
								steps: selected.steps,
								tips: selected.tips
							}, selected.id),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "used-products",
								children: products.filter((p) => selected.products.includes(p.id)).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setProduct(p.id);
										setTab("recipes");
										setSelected(null);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/assets/" + p.image,
											alt: ""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["呢道菜用到", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: p.name })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })
									]
								}, p.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "detail-buy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "primary",
							onClick: () => toast("ESG 商城，敬請期待。"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 19 }), "一鍵買同款，送貨到屋企"]
						})
					})
				] }) : post ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "post-detail-image",
					src: post.image,
					alt: post.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "detail-body",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "detail-title",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: post.title }), heart("p:" + post.id)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: [
							post.author,
							" · ",
							new Date(post.createdAt).toLocaleDateString("zh-HK"),
							" · 共創菜品"
						] }),
						post.description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "post-description",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "我嘅煮食心得" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: post.description })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "selection-note",
							children: "好菜值得畀人見到，呢份作品有機會入選「精選食譜」。"
						})
					]
				})] }) : null]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {
			open: studio,
			onOpenChange: setStudio,
			user: !!user,
			onLogin: requireStudioLogin,
			onPublished: () => {
				refresh();
				setTab("community");
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAuth, {
			open: authOpen,
			onOpenChange: (v) => {
				setAuthOpen(v);
				if (!v && resumeStudio) {
					setStudio(true);
					setResumeStudio(false);
				}
			},
			onSuccess: (u) => {
				setUser(u);
				if (resumeStudio) {
					setStudio(true);
					setResumeStudio(false);
				}
				refreshFavorites();
				refresh();
				toast.success("歡迎返嚟，" + u.name + "！");
			}
		})
	] });
}
//#endregion
export { Kitchen as default };
