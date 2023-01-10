"use strict";(self.webpackChunknu_metagen_docs=self.webpackChunknu_metagen_docs||[]).push([[400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"Introduction/getting-started",id:"Introduction/getting-started",title:"Getting Started",description:"We created MetaSDK so developers can easily integrate and add certain AR-powered functions tailored to your needs. We will also help you with the AR Contents management and production and turn your ideas into reality.",source:"@site/docs/Introduction/getting-started.md",sourceDirName:"Introduction",slug:"/Introduction/getting-started",permalink:"/Introduction/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/category/introduction"},next:{title:"Usage",permalink:"/Introduction/usage"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Android - Maven Jitpack",id:"android---maven-jitpack",level:3},{value:"Android - Local File",id:"android---local-file",level:3},{value:"Flutter - Android",id:"flutter---android",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"We created MetaSDK so developers can easily integrate and add certain AR-powered functions tailored to your needs. We will also help you with the AR Contents management and production and turn your ideas into reality."),(0,r.kt)("p",null,"Discuss with us on how you can add suitable functions for your Android apps by utilizing the Marker-based or Markerless AR technology or join our AR Ads Network and be our Publisher to generate additional revenue and monetize from AR Ads."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jitpack.io/#nuMetagen/nuMetagenSDKAndroid"},(0,r.kt)("img",{parentName:"a",src:"https://jitpack.io/v/nuMetagen/nuMetagenSDKAndroid.svg",alt:"jitPack"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/numetagen_sdk_flutter"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/pub/v/numetagen_sdk_flutter.svg",alt:"pub package"}))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installation Guide for specific platform."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"nuMetagenSDK require Android Minimal Sdk Version 26")),(0,r.kt)("h3",{id:"android---maven-jitpack"},"Android - Maven Jitpack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the JitPack repository to your build file. Add it in your root build.gradle at the end of repositories:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"allprojects {\n    repositories {\n        ...\n        maven { url 'https://jitpack.io' }\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the dependency"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n    implementation 'com.github.nuMetagen:nuMetagenSDKAndroid:0.8.4@aar'\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add meta-data for API Key on your AndroidManifest.xml inside application tag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />\n')))),(0,r.kt)("h3",{id:"android---local-file"},"Android - Local File"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download SDK ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nuMetagen/docs/releases/download/v0.8.3/nuMetagenSDK-0.8.3.aar"},"Latest Version"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create libs folder and add all nuMetagenSDK to your android project root/libs/ folder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add libs folder on your repository to access local library in settings.gradle"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"...\nrepositories {\n    google()\n    mavenCentral()\n    ...\n    flatDir {\n        dirs 'libs'\n    }\n}\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add meta-data for API Key on your AndroidManifest.xml inside application tag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement on your app build.gradle, since nuMetagenSDK dependency with google AR Core, it may conflict with your current dependency. Change latest version based on file name and SDK Version."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"implementation(name: 'numetagenSDK-<latest-version>', ext: 'aar')\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lastly, Sync your gradle and you are ready to go."))),(0,r.kt)("h3",{id:"flutter---android"},"Flutter - Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the JitPack repository to your build file. Add it in your root build.gradle at the end of repositories:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"allprojects {\n    repositories {\n        ...\n        maven { url 'https://jitpack.io' }\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add dependency"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  numetagen_sdk_flutter: ^0.8.6\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add meta-data for API Key on your AndroidManifest.xml inside application tag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="id.numetagen.sdk.apikey" android:value="YOUR_API_KEY" />\n')))),(0,r.kt)("p",null,"If you question please feel free to contact us on ",(0,r.kt)("a",{parentName:"p",href:"https://numetagen.id/"},"our Website")))}u.isMDXComponent=!0}}]);