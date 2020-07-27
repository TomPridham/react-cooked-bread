(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"57bH":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return m}));var n,s=t("+wNj"),c=t("ZVZ0"),b=t("9Dj+"),p={},o=(n="TypesLink",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),r={_frontmatter:p},i=b.b;function m(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)(i,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"provider"},"Provider"),Object(c.b)("p",null,"You can choose to either use default components we've created (and more components to choose from soon!) or you can add your own."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},Object(c.b)("ins",null,"Note")),": You must add a ",Object(c.b)("inlineCode",{parentName:"p"},"toastRoot"),", but you may optionally add ",Object(c.b)("inlineCode",{parentName:"p"},"toastContent")," (Although it'll look ugly without it, unless you add your own!)")),Object(c.b)("pre",{className:"language-tsx"},Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"DefaultToastRoot"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"DefaultToastContent")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'react-cooked-bread'"),"\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"MyApp"))," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ToastProvider"),"\n    toastRoot",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"DefaultToastRoot"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Required"),"\n    toastContent",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"DefaultToastContent"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Recommended, unless you customize `DefaultToastRoot`"),"\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"ToastProvider")),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(c.b)("p",null,"We give you the responsibility to add the components to the provider so that if you prefer custom components, you don't have to include unused code."),Object(c.b)("p",null,"The provider should wrap any components that need to consume or create toasts."),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"prop-descriptions"},"Prop descriptions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"toastRoot")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Node"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Toast wrapper, this animates transitions with ",Object(c.b)("inlineCode",{parentName:"td"},"React-Transition-Group")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"✔")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"toastContent")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Node"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Inner toast content, includes icons, close button, text and colors"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"*")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"container")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Node"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ToastContainer")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Wrapper component that places the toasts fixed in the viewport"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"defaultAutoDismiss")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Whether by default, all new toasts should dismiss by a timer (",Object(c.b)("inlineCode",{parentName:"td"},"addToast")," may override)"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"autoDismissTimeout")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"5000")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"How long a toast with ",Object(c.b)("inlineCode",{parentName:"td"},"autoDismiss")," should persist in milliseconds"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"placement")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("a",Object.assign({parentName:"td"},{href:"#placement"}),"Placement")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"bottom-right")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Where in the viewport the container should place the toasts"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"transitionDuration")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"220")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Transition duration for ",Object(c.b)("inlineCode",{parentName:"td"},"React-Transition-Group")," transition element"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pauseAllOnHover")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Whether all toasts should pause if mouse moves over any of the toasts"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"containerStyles")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("a",Object.assign({parentName:"td"},{href:"#stylers"}),"Styler")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"container CSS"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Override styles for container element"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"transitionGroupStyles")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("a",Object.assign({parentName:"td"},{href:"#stylers"}),"Styler")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"transition group CSS"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Override styles for transition group wrapper"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"toastStyles")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("a",Object.assign({parentName:"td"},{href:"#stylers"}),"Styler")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"toast root and content CSS"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Override styles for toast elements"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))))),Object(c.b)("small",null,"*Not required, but recommended"),Object(c.b)("h3",{id:"placement"},"Placement"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"bottom-left"),", ",Object(c.b)("inlineCode",{parentName:"p"},"bottom-center"),", ",Object(c.b)("inlineCode",{parentName:"p"},"bottom-right"),", ",Object(c.b)("inlineCode",{parentName:"p"},"top-left"),", ",Object(c.b)("inlineCode",{parentName:"p"},"top-center"),", ",Object(c.b)("inlineCode",{parentName:"p"},"top-right")),Object(c.b)("h3",{id:"stylers"},"Stylers"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A ",Object(c.b)("inlineCode",{parentName:"p"},"Styler")," is an object or a function with prop arguments that returns an object.")),Object(c.b)("h5",{id:"a-style-object"},"(a) Style object"),Object(c.b)("p",null,"With a ",Object(c.b)("inlineCode",{parentName:"p"},"React.CSSProperties")," style object:"),Object(c.b)("pre",{className:"language-tsx"},Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"ToastProvider")),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"containerStyles"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n    padding",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'1rem'"),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"toastStyles"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n    rootOuter",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n      backgroundColor",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'hotpink'"),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n    content",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n      color",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'dodgerblue'"),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n"))),Object(c.b)("h5",{id:"b-style-function"},"(b) Style function"),Object(c.b)("p",null,"Or a function that receives an argument with props for that components, that returns a ",Object(c.b)("inlineCode",{parentName:"p"},"React.CSSProperties")," style object:"),Object(c.b)("pre",{className:"language-tsx"},Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"ToastProvider")),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"containerStyles"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token parameter"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," hasToasts ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n    backgroundColor",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," hasToasts ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"?")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'hotpink'")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'transparent'"),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"toastStyles"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token parameter"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"type"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," isRunning ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n    root",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n      backgroundColor",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"type")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"===")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'error'")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"?")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'tomato'")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'mediumseagreen'"),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n    counddown",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n      animationPlayState",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," isRunning ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"?")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'running'")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'paused'"),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"transitionGroupStyles"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"\n    display",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'flex'"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n    flexDirection",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'column-reverse'"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n"))),Object(c.b)("p",null,"Then, ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/emotion-js/emotion"}),"Emotion")," creates those styles into a CSS class assigned to the element."),Object(c.b)("h3",{id:"typescript"},"TypeScript"),Object(c.b)(o,{mdxType:"TypesLink"}),Object(c.b)("pre",{className:"language-ts"},Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"interface")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"ToastProviderValueProps")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  toastRoot",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ComponentType"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ToastRootProps"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  toastContent",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ComponentType"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ToastContentProps"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  container",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"React"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token property-access"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"ComponentType")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"<"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ContainerProps"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),">"),"\n  defaultAutoDismiss",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),"\n  autoDismissTimeout",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"number"),"\n  placement",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"PlacementOption"),"\n  transitionDuration",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"number"),"\n  pauseAllOnHover",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"boolean"),"\n  containerStyles",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ContainerStyler"),"\n  transitionGroupStyles",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"TransitionGroupStyler"),"\n  toastStyles",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token maybe-class-name"}),"ToastStyler"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-provider-mdx-28370faff52e8bc408b9.js.map