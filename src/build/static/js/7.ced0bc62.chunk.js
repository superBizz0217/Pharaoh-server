(this["webpackJsonppharao-frontend"]=this["webpackJsonppharao-frontend"]||[]).push([[7],{133:function(e,t,a){"use strict";var s=a(2),r=a(24),c=a(26),A=a(0),i=a(258),n=a(12),o=a.n(n),g=a(3),l=Object(A.forwardRef)((function(e,t){var a,A,n=e.color,l=e.className,d=e.imgClassName,u=e.initials,j=e.size,b=e.badgeUp,m=e.content,f=e.icon,p=e.badgeColor,x=e.badgeText,h=e.img,v=e.imgHeight,O=e.imgWidth,B=e.status,C=e.tag,N=e.contentStyles,w=Object(c.a)(e,["color","className","imgClassName","initials","size","badgeUp","content","icon","badgeColor","badgeText","img","imgHeight","imgWidth","status","tag","contentStyles"]);return Object(g.jsxs)(C,Object(s.a)(Object(s.a)({className:o()("avatar",(a={},Object(r.a)(a,l,l),Object(r.a)(a,"bg-".concat(n),n),Object(r.a)(a,"avatar-".concat(j),j),a)),ref:t},w),{},{children:[!1===h||void 0===h?Object(g.jsxs)("span",{className:o()("avatar-content",{"position-relative":b}),style:N,children:[u?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(m):m,f||null,b?Object(g.jsx)(i.a,{color:p||"primary",className:"badge-sm badge-up",pill:!0,children:x||"0"}):null]}):Object(g.jsx)("img",{className:o()(Object(r.a)({},d,d)),src:h,alt:"avatarImg",height:v&&!j?v:32,width:O&&!j?O:32}),B?Object(g.jsx)("span",{className:o()((A={},Object(r.a)(A,"avatar-status-".concat(B),B),Object(r.a)(A,"avatar-status-".concat(j),j),A))}):null]}))}));t.a=l,l.defaultProps={tag:"div"}},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return A})),a.d(t,"b",(function(){return i}));var s=a(92),r=a(15),c=a(10),A=function(e){return function(t){t({type:"LOGIN",data:e}),s.a.setToken(e.accessToken.accessToken),s.a.setRefreshToken(e.accessToken.refreshToken),localStorage.setItem(c.a.app.token,JSON.stringify(e))}},i=function(){return function(e){e({type:"LOGOUT"}),localStorage.removeItem(r.a.storageTokenKeyName),localStorage.removeItem(r.a.storageRefreshTokenKeyName),localStorage.removeItem(c.a.app.token)}}},135:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/error.41b12111.svg"},205:function(e,t,a){"use strict";var s=a(2),r=a(24),c=a(22),A=a(26),i=a(0),n=a(12),o=a.n(n),g=a(637),l=a(638),d=a(313),u=a(311),j=a(310),b=a(312),m=a(200),f=a(3),p=function(e){var t=e.label,a=e.hideIcon,n=e.showIcon,p=e.visible,x=e.className,h=e.htmlFor,v=e.placeholder,O=e.iconSize,B=Object(A.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize"]),C=Object(i.useState)(p),N=Object(c.a)(C,2),w=N[0],I=N[1];return Object(f.jsxs)(i.Fragment,{children:[t?Object(f.jsx)(d.a,{for:h,children:t}):null,Object(f.jsxs)(u.a,{className:o()(Object(r.a)({},x,x)),children:[Object(f.jsx)(j.a,Object(s.a)(Object(s.a)({type:!1===w?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"},t&&h?{id:h}:{}),B)),Object(f.jsx)(b.a,{addonType:"append",onClick:function(){return I(!w)},children:Object(f.jsx)(m.a,{className:"cursor-pointer",children:function(){var e=O||14;return!1===w?a||Object(f.jsx)(g.a,{size:e}):n||Object(f.jsx)(l.a,{size:e})}()})})]})]})};t.a=p,p.defaultProps={visible:!1}},206:function(e,t,a){},207:function(e,t,a){var s={"./arrow-down.png":208,"./auth-v1-bottom-bg.png":209,"./auth-v1-top-bg.png":210,"./calendar-illustration.png":211,"./coming-soon-dark.svg":212,"./coming-soon.svg":213,"./content-img-1.jpg":214,"./content-img-2.jpg":215,"./content-img-3.jpg":216,"./content-img-4.jpg":217,"./error-dark.svg":218,"./error.svg":135,"./forgot-password-v2-dark.svg":219,"./forgot-password-v2.svg":220,"./forgot-password.png":221,"./kb-image.jpg":222,"./login-v2-dark.svg":223,"./login-v2.svg":224,"./login/facebook.svg":225,"./login/github.svg":226,"./login/google.svg":227,"./login/twitter.svg":228,"./not-authorized-dark.svg":229,"./not-authorized.svg":230,"./pixinvent-logo.png":231,"./register-v2-dark.svg":232,"./register-v2.svg":233,"./reset-password-v2-dark.svg":234,"./reset-password-v2.svg":235,"./under-maintenance-dark.svg":236,"./under-maintenance.svg":237};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=c,e.exports=r,r.id=207},208:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAG1BMVEUAAACRkZGRkZGSkpKRkZGSkpKSkpKRkZGRkZHLso+9AAAACHRSTlMA+1JoWo0vLFQDmmkAAABlSURBVBjTY6ALSACTbBAOazOYsggAUxEdBkCSuaMVxGGX6BABUo4djQUgrmJHhwFQqkMIrJJJoqOZwaKjUQHIhkg6g6QggEWiQ7Cj0QHIgkpCpaA6wbrgkiAphKSgArJTXRhoBgB9GRPswyvBqAAAAABJRU5ErkJggg=="},209:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII="},210:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC"},211:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/calendar-illustration.42be42ce.png"},212:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/coming-soon-dark.d13e9877.svg"},213:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/coming-soon.539770ed.svg"},214:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/content-img-1.089100ed.jpg"},215:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/content-img-2.01ac1ab0.jpg"},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/content-img-3.48204896.jpg"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/content-img-4.4d172274.jpg"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/error-dark.9fb69437.svg"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/forgot-password-v2-dark.5349f5b0.svg"},220:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/forgot-password-v2.92f01a1f.svg"},221:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/forgot-password.f0568d74.png"},222:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/kb-image.e310b4d3.jpg"},223:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/login-v2-dark.e7fe27f6.svg"},224:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/login-v2.da80012f.svg"},225:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/facebook.b9b33a7d.svg"},226:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/github.32b9ac0d.svg"},227:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/google.77a59cd8.svg"},228:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/twitter.87682341.svg"},229:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/not-authorized-dark.0e720428.svg"},230:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/not-authorized.ee4b4a8b.svg"},231:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},232:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/register-v2-dark.2b051707.svg"},233:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/register-v2.24c0a62e.svg"},234:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/reset-password-v2-dark.bc2b0ee0.svg"},235:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/reset-password-v2.1e72e41a.svg"},236:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/under-maintenance-dark.52a79bff.svg"},237:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/under-maintenance.b2209628.svg"},643:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a(22),c=a(0),A=a(12),i=a.n(A),n=a(23),o=a(119),g=a(90),l=a(639),d=a(629),u=a(640),j=a(641),b=a(631),m=a(642),f=a(269),p=a(263),x=a(264),h=a(309),v=a(308),O=a(254),B=a(313),C=a(81),N=a(27),w=a(139),I=a(133),k=a(92),Q=a(134),Z=a(205),R=(a(206),a(3));t.default=function(){var e=Object(w.a)(),t=Object(r.a)(e,2),A=t[0],L=(t[1],Object(o.g)()),G=Object(n.b)(),E=Object(c.useState)(""),F=Object(r.a)(E,2),Y=F[0],y=F[1],D=Object(c.useState)({}),S=Object(r.a)(D,2),P=S[0],J=S[1],T=Object(c.useState)(""),z=Object(r.a)(T,2),K=z[0],H=z[1],V=Object(c.useState)(""),M=Object(r.a)(V,2),U=M[0],X=M[1],q=Object(c.useState)(!1),W=Object(r.a)(q,2),_=W[0],$=W[1],ee="dark"===A?"register-v2-dark.svg":"register-v2.svg",te=a(207)("./".concat(ee)).default,ae=function(){return Object(R.jsxs)(c.Fragment,{children:["I agree to",Object(R.jsx)("a",{className:"ml-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})},se=function(e){var t=e.username;return Object(R.jsxs)(c.Fragment,{children:[Object(R.jsx)("div",{className:"toastify-header",children:Object(R.jsxs)("div",{className:"title-wrapper",children:[Object(R.jsx)(I.a,{size:"sm",color:"success",icon:Object(R.jsx)(l.a,{size:12})}),Object(R.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Welcome, ",t]})]})}),Object(R.jsx)("div",{className:"toastify-body",children:Object(R.jsx)("span",{children:"You have successfully logged in as a user to Pharao\xb4s world. Now you can start to play. Enjoy!"})})]})},re=function(e){var t=e.title,a=e.desc;return Object(R.jsxs)(c.Fragment,{children:[Object(R.jsx)("div",{className:"toastify-header",children:Object(R.jsxs)("div",{className:"title-wrapper",children:[Object(R.jsx)(I.a,{size:"sm",color:"danger",icon:Object(R.jsx)(d.a,{size:12})}),Object(R.jsx)("h6",{className:"text-danger ml-50 mb-0",children:t})]})}),Object(R.jsx)("div",{className:"toastify-body",children:Object(R.jsx)("span",{children:a})})]})};return Object(R.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(R.jsxs)(p.a,{className:"auth-inner m-0",children:[Object(R.jsxs)(g.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(R.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(R.jsxs)("defs",{children:[Object(R.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(R.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(R.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(R.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(R.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(R.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(R.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(R.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(R.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(R.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(R.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(R.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(R.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(R.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(R.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Pharao\xb4s world"})]}),Object(R.jsx)(x.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(R.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(R.jsx)("img",{className:"img-fluid",src:te,alt:"Login V2"})})}),Object(R.jsx)(x.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(R.jsxs)(x.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(R.jsx)(h.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(R.jsx)(v.a,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(R.jsxs)(f.AvForm,{action:"/",className:"auth-register-form mt-2",onSubmit:function(e,t){t&&!t.length&&k.a.register({username:K,email:Y,password:U}).then((function(e){if("email"===e.data.error)N.c.error(Object(R.jsx)(re,{desc:"".concat(Y," is used by another account."),title:"Error"}),{transition:N.a,hideProgressBar:!0,autoClose:2e3});else if("username"===e.data.error)N.c.error(Object(R.jsx)(re,{desc:"".concat(K," is used by another account."),title:"Error"}),{transition:N.a,hideProgressBar:!0,autoClose:2e3});else{var t=Object(s.a)(Object(s.a)({},e.data.user),{},{accessToken:e.data.accessToken});G(Object(Q.a)(t)),N.c.success(Object(R.jsx)(se,{username:K}),{transition:N.a,hideProgressBar:!0,autoClose:2e3}),L.push("/")}})).catch((function(e){return console.log(e)}))},children:[Object(R.jsxs)(O.a,{children:[Object(R.jsx)(B.a,{className:"form-label",for:"register-username",children:"Username"}),Object(R.jsx)(f.AvInput,{required:!0,autoFocus:!0,type:"text",placeholder:"johndoe",id:"register-username",name:"register-username",value:K,onChange:function(e){var t=P;t.username&&delete t.username,H(e.target.value),J(t)},className:i()({"border-danger":Object.keys(P).length&&P.username})}),Object.keys(P).length&&P.username?Object(R.jsx)("small",{className:"text-danger",children:P.username}):null]}),Object(R.jsxs)(O.a,{children:[Object(R.jsx)(B.a,{className:"form-label",for:"register-email",children:"Email"}),Object(R.jsx)(f.AvInput,{required:!0,type:"email",id:"register-email",name:"register-email",value:Y,placeholder:"john@example.com",onChange:function(e){var t=P;t.email&&delete t.email,y(e.target.value),J(t)},className:i()({"border-danger":Object.keys(P).length&&P.email})}),Object.keys(P).length&&P.email?Object(R.jsx)("small",{className:"text-danger",children:P.email}):null]}),Object(R.jsxs)(O.a,{children:[Object(R.jsx)(B.a,{className:"form-label",for:"register-password",children:"Password"}),Object(R.jsx)(Z.a,{required:!0,tag:f.AvInput,id:"register-password",name:"register-password",value:U,className:"input-group-merge",onChange:function(e){return X(e.target.value)}})]}),Object(R.jsx)(f.AvCheckboxGroup,{name:"Remember Me",checked:_,required:!0,children:Object(R.jsx)(f.AvCheckbox,{customInput:!0,type:"checkbox",id:"remember-me",value:"Remember Me",label:Object(R.jsx)(ae,{}),className:"custom-control-Primary",onChange:function(e){return $(e.target.checked)}})}),Object(R.jsx)(C.a.Ripple,{block:!0,color:"primary",disabled:!Y.length||!U.length||!K.length||!_,children:"Sign up"})]}),Object(R.jsxs)("p",{className:"text-center mt-2",children:[Object(R.jsx)("span",{className:"mr-25",children:"Already have an account?"}),Object(R.jsx)(g.b,{to:"/login",children:Object(R.jsx)("span",{children:"Sign in instead"})})]}),Object(R.jsx)("div",{className:"divider my-2",children:Object(R.jsx)("div",{className:"divider-text",children:"or"})}),Object(R.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(R.jsx)(C.a.Ripple,{color:"facebook",children:Object(R.jsx)(u.a,{size:14})}),Object(R.jsx)(C.a.Ripple,{color:"twitter",children:Object(R.jsx)(j.a,{size:14})}),Object(R.jsx)(C.a.Ripple,{color:"google",children:Object(R.jsx)(b.a,{size:14})}),Object(R.jsx)(C.a.Ripple,{className:"mr-0",color:"github",children:Object(R.jsx)(m.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=7.ced0bc62.chunk.js.map