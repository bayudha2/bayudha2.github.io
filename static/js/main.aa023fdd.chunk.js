(this.webpackJsonpporto=this.webpackJsonpporto||[]).push([[0],{29:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(12),l=s.n(i),n=(s(29),s(21)),r=s(2),o=s(8),d=s(4),h=s.n(d),j=s(1);function m(e){var t=e.to,s=e.type,c=e.className,a=e.style,i=e.children;return"link"===s?Object(j.jsx)(n.b,{to:t,className:c,style:a,children:i}):Object(j.jsx)("button",{type:s,className:c,style:a,onClick:function(){e.onClick&&e.onClick()},children:i})}m.defaultProps={type:"",onClick:h.a.func,to:"",className:""};var x=m;function b(){return Object(j.jsx)(x,{type:"link",to:"/",className:"font-bold text-2xl text-white",children:"Hello"})}var g=function(e){return Object(j.jsx)("header",{className:"py-3 bg-black flex border-8 border-gray-800",children:Object(j.jsxs)("div",{className:"flex w-9/12 mx-auto justify-between",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"hidden lg:grid grid-cols-5 gap-6",children:[Object(j.jsx)(x,{type:"button",className:"text-white font-medium hover:text-yellow-500 ",onClick:function(){e.sendToParent({about:1})},children:"About"}),Object(j.jsx)(x,{type:"button",className:"text-white font-medium hover:text-red-500",onClick:function(){e.sendToParent({expe:1})},children:"Experiences"}),Object(j.jsx)(x,{type:"button",className:"text-white font-medium hover:text-green-500",onClick:function(){e.sendToParent({skill:1})},children:"Skills"}),Object(j.jsx)(x,{type:"button",className:"text-white font-medium hover:text-blue-500",onClick:function(){e.sendToParent({porto:1})},children:"Portofolio"}),Object(j.jsx)(x,{type:"button",className:"text-white font-medium hover:text-purple-500",onClick:function(){e.sendToParent({tools:1})},children:"Certificate"})]})]})})},p=s(6),u=s(22),f=s(17),O=s(16),v=(s(36),s(37),s(43)),y=s(42);var N=function(e){var t=e.isItOpen,s=e.changeOpen,a=e.nameModal;return console.log(a),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a,{appear:!0,show:t,as:c.Fragment,children:Object(j.jsx)(y.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return s(!1)},children:Object(j.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(j.jsx)(v.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(j.jsx)(y.a.Overlay,{className:"fixed inset-0"})}),Object(j.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(v.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(j.jsx)("div",{className:"inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl ",children:Object(j.jsx)("div",{className:"mt-2",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/").concat(a,".png"),alt:"certif"})})})})]})})})})},w=function(e){var t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],i=s[1],l=Object(c.useState)(),n=Object(o.a)(l,2),r=n[0],d=n[1],h=Object(c.useRef)(null),m=Object(c.useRef)(null),x=Object(c.useRef)(null),b=Object(c.useRef)(null),g=Object(c.useRef)(null);Object(c.useEffect)((function(){1===e.toChild.about&&(h.current.classList.remove("hidden"),setTimeout((function(){h.current.classList.add("hidden")}),5e3)),1===e.toChild.expe&&(m.current.classList.remove("hidden"),setTimeout((function(){m.current.classList.add("hidden")}),5e3)),1===e.toChild.skill&&(b.current.classList.remove("hidden"),setTimeout((function(){b.current.classList.add("hidden")}),5e3)),1===e.toChild.porto&&(x.current.classList.remove("hidden"),setTimeout((function(){x.current.classList.add("hidden")}),5e3)),1===e.toChild.tools&&(g.current.classList.remove("hidden"),setTimeout((function(){g.current.classList.add("hidden")}),5e3))}));var v="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711Z";return Object(j.jsxs)("div",{className:"px-2 pb-3",children:[Object(j.jsx)(u.a,{}),Object(j.jsxs)("div",{className:"lg:flex",children:[Object(j.jsxs)("div",{className:"relative",children:[Object(j.jsx)("div",{className:"absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden",ref:x,children:Object(j.jsx)(O.a,{icon:f.a,className:" my-auto text-blue-500",size:"2x"})}),Object(j.jsxs)(p.a,{options:{width:700,pagination:!1,arrowPath:v,autoplay:!0,pauseOnHover:!0,resetProgress:!1,type:"loop",interval:4e3,classes:{}},children:[Object(j.jsx)(p.b,{children:Object(j.jsxs)("div",{className:"bg-white p-8",style:{height:648},children:[Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("a",{href:"https://hudson-parliament-66791.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"p-6 bg-gray-200 rounded-lg",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/restaurant.png"),alt:"web1",style:{height:250,width:400},className:"filter drop-shadow-lg"})})})}),Object(j.jsx)("h1",{className:"text-center font-bold text-xl pt-7",children:"Restaurant App"}),Object(j.jsx)("div",{className:"flex justify-center items-center pt-3",children:Object(j.jsx)("p",{className:" text-center font-light text-sm w-96",children:"Web App to Help people choose restaurant they like, the app provide variety of restaurant with difference kind of food. App using save feature to save restaurant user like to save and keep it on Favorite"})}),Object(j.jsx)("div",{className:"flex justify-center items-center mt-14",children:Object(j.jsx)("p",{className:"text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ",children:"Tech"})}),Object(j.jsxs)("div",{className:"flex justify-center items-center pt-5",children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/heroku.png"),alt:"tech",style:{height:32,width:"auto"},className:"pr-4"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/nodejs.png"),alt:"tech",style:{height:32,width:"auto"},className:"pr-4"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/sass.png"),alt:"tech",style:{height:32,width:"auto"},className:"pr-4"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/webpack.png"),alt:"tech",style:{height:32,width:"auto"},className:"pr-4"})]})]})}),Object(j.jsx)(p.b,{children:Object(j.jsxs)("div",{className:"bg-white p-8",style:{height:648},children:[Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("a",{href:"https://soccerbase-6c52f.web.app/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"p-6 bg-gray-200 rounded-lg",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/soccer.png"),alt:"web1",style:{height:250,width:400},className:"filter drop-shadow-lg"})})})}),Object(j.jsx)("h1",{className:"text-center font-bold text-xl pt-7",children:"Soccerbase App"}),Object(j.jsx)("div",{className:"flex justify-center items-center pt-3",children:Object(j.jsx)("p",{className:" text-center font-light text-sm w-96",children:"Web App to help people keep update with soccer league around the world. This app provides updated information of teams, matches, score from different leagure such as UEFA league, Premier league, La league."})}),Object(j.jsx)("div",{className:"flex justify-center items-center mt-14",children:Object(j.jsx)("p",{className:"text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ",children:"Tech"})}),Object(j.jsxs)("div",{className:"flex justify-center items-center pt-5",children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/materialize.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/workbox.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/firebase.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"})]})]})}),Object(j.jsx)(p.b,{children:Object(j.jsxs)("div",{className:"bg-white p-8",style:{height:648},children:[Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("a",{href:"https://staycationby.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"p-6 bg-gray-200 rounded-lg",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/staycation.png"),alt:"web1",style:{height:250,width:400},className:"filter drop-shadow-lg"})})})}),Object(j.jsx)("h1",{className:"text-center font-bold text-xl pt-7",children:"Traveling App"}),Object(j.jsx)("div",{className:"flex justify-center items-center pt-3",children:Object(j.jsx)("p",{className:" text-center font-light text-sm w-96",children:"Web App to help people find destination for Traveling, Staycation let user see what is the best and suitable place for user to enjoy their holiday with traveling. staycation provide hotel and villa for user to choose which are located ner ther destination user want to travel."})}),Object(j.jsx)("div",{className:"flex justify-center items-center mt-10",children:Object(j.jsx)("p",{className:"text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ",children:"Tech"})}),Object(j.jsxs)("div",{className:"flex justify-center items-center pt-5",children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/bootstrap.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/sass.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/react.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/heroku.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/nodejs.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"})]})]})}),Object(j.jsx)(p.b,{children:Object(j.jsxs)("div",{className:"bg-white p-8",style:{height:648},children:[Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("a",{href:"https://footbaall-api.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"p-6 bg-gray-200 rounded-lg",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/soccer2.png"),alt:"web1",style:{height:250,width:400},className:"filter drop-shadow-lg"})})})}),Object(j.jsx)("h1",{className:"text-center font-bold text-xl pt-7",children:"Soccerbase App 2"}),Object(j.jsx)("div",{className:"flex justify-center items-center pt-3",children:Object(j.jsx)("p",{className:" text-center font-light text-sm w-96",children:"Web App to help people keep update with soccer league around the world. This app provides updated information of teams, players, matches, score from different league."})}),Object(j.jsx)("div",{className:"flex justify-center items-center mt-10",children:Object(j.jsx)("p",{className:"text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ",children:"Tech"})}),Object(j.jsxs)("div",{className:"flex justify-center items-center pt-5",children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/tailwind.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/react.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/heroku.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"}),Object(j.jsx)("img",{src:"".concat("","/assets/img/nodejs.png"),alt:"tech",style:{height:35,width:"auto"},className:"pr-6"})]})]})})]})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsxs)("div",{className:"relative mt-2 lg:mt-0",children:[Object(j.jsx)("div",{className:"absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden",ref:h,children:Object(j.jsx)(O.a,{icon:f.a,className:" my-auto text-yellow-500",size:"2x"})}),Object(j.jsxs)(p.a,{options:{pagination:!1,arrowPath:v,width:474},className:"ml-2 mb-2",children:[Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-3xl",children:"About me"}),Object(j.jsx)("p",{className:"pt-4 font-light text-sm",children:"Hi, I'm Alif Prasetyo Bayu Aji. Fresh Graduate of Computer Science major at Telkom University. During my studies, I have been involved in various projects such as UI design, website and software development."})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16",style:{backgroundImage:"url(".concat("","/assets/img/fotoku.jpeg)"),backgroundSize:"100% 100%"}})})]})]}),Object(j.jsxs)("div",{className:"relative",children:[Object(j.jsx)("div",{className:"absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden",ref:m,children:Object(j.jsx)(O.a,{icon:f.a,className:" my-auto text-red-500",size:"2x"})}),Object(j.jsxs)(p.a,{options:{pagination:!1,arrowPath:v,width:474},className:"ml-2",children:[Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-3xl",children:"Experiences"}),Object(j.jsx)("p",{className:"pt-4 font-light text-sm",children:"I have participated in various activities during my studies on college."})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/secu.png"),alt:"intern",style:{height:90,width:"auto"},className:"mx-auto"}),Object(j.jsx)("h1",{className:"font-bold text-center text-lg",children:"Laboratory assistant"}),Object(j.jsx)("p",{className:"text-center text-sm font-light text-gray-400",children:"Seculab Laboratory"}),Object(j.jsx)("p",{className:"text-center text-sm font-light text-gray-400",children:"2019 - 2020"})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"".concat("","/assets/img/disjabar.png"),alt:"intern",style:{height:90,width:"auto"},className:"mx-auto"}),Object(j.jsx)("h1",{className:"font-bold text-center text-lg",children:"Informatics division intern"}),Object(j.jsx)("p",{className:"text-center text-sm font-light text-gray-400",children:"Diskominfo Jawa Barat"}),Object(j.jsx)("p",{className:"text-center text-sm font-light text-gray-400",children:"2019"})]})})})]})]})]}),Object(j.jsxs)("div",{className:"flex flex-col ",children:[Object(j.jsxs)("div",{className:"relative mt-2 lg:mt-0",children:[Object(j.jsx)("div",{className:"absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden",ref:b,children:Object(j.jsx)(O.a,{icon:f.a,className:" my-auto text-green-500",size:"2x"})}),Object(j.jsxs)(p.a,{options:{width:474,pagination:!1,arrowPath:v},className:"ml-2 mb-2",children:[Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-3xl",children:"Skills"}),Object(j.jsx)("p",{className:"pt-4 font-light text-sm",children:"Here are list of skill i have until now"})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-xl mb-4",children:"Programming language"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/js.png"),alt:"language",style:{height:50,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/python.png"),alt:"language",style:{height:50,width:"auto"}})})]})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-center text-xl mb-4",children:"Front end"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/nodejs.png"),alt:"language",style:{height:40,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/react.png"),alt:"language",style:{height:50,width:"auto"}})})]}),Object(j.jsxs)("div",{className:"flex pt-2",children:[Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/materialize.png"),alt:"language",style:{height:50,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/bootstrap.png"),alt:"language",style:{height:40,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-8",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/tailwind.png"),alt:"language",style:{height:50,width:"auto"}})})]})]})})}),Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-center text-xl mb-4",children:"Back end"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"flex-1 ml-2",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/nodejs.png"),alt:"language",style:{height:40,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-2",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/hapi.png"),alt:"language",style:{height:50,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-2",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/express.png"),alt:"language",style:{height:40,width:"auto"}})})]}),Object(j.jsxs)("div",{className:"flex pt-3",children:[Object(j.jsx)("div",{className:"flex-1 ml-4",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/mongo.png"),alt:"language",style:{height:50,width:"auto"}})}),Object(j.jsx)("div",{className:"flex-1 ml-4",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/postgre.png"),alt:"language",style:{height:50,width:"auto"}})})]})]})})})]})]}),Object(j.jsxs)("div",{className:"relative",children:[Object(j.jsx)("div",{className:"absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden",ref:g,children:Object(j.jsx)(O.a,{icon:f.a,className:" my-auto text-purple-500",size:"2x"})}),Object(j.jsxs)(p.a,{options:{pagination:!1,arrowPath:v,width:474,autoplay:!0,pauseOnHover:!0,resetProgress:!1,type:"loop",interval:4e3,classes:{}},className:"ml-2",children:[Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold  text-3xl",children:"Certificate"}),Object(j.jsx)("p",{className:"pt-4 font-light  text-sm",children:"These are my certificate from participating course and workshop"})]})})}),["aws1","aws2","be_expert","fe_expert","ibm","mern","PWA"].map((function(e,t){return Object(j.jsx)(p.b,{children:Object(j.jsx)("div",{className:"bg-white h-80 p-16 flex justify-center items-center",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"".concat("","/assets/img/").concat(e,".png"),alt:"tools",style:{height:200,width:"auto"},className:"mx-auto cursor-pointer filter shadow-md",onClick:function(){i(!0),d(e)}})})})})}))]})]})]})]}),Object(j.jsxs)("div",{className:" lg:flex",children:[Object(j.jsx)("div",{className:"bg-white mt-2",style:{width:700,backgroundImage:"url(".concat("","/assets/img/bg_gif.gif)"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}),Object(j.jsxs)("div",{className:"bg-gray-800 white mt-2 ml-2 flex-grow h-44 lg:flex",children:[Object(j.jsx)("div",{className:"lg:flex-1 bg-white flex justify-center items-center",style:{backgroundImage:"url(".concat("","/assets/img/bgppl.png)"),backgroundSize:"100% 100%"},children:Object(j.jsxs)("div",{className:"p-3 lg:p-0",children:[Object(j.jsx)("h2",{className:"text-white text-xl lg:text-2xl font-bold",children:"Hello people"}),Object(j.jsxs)("p",{className:"text-white text-sm lg:text-base font-light pt-2",children:["I would be very happy to be a part of your journey and reach the goals together.",Object(j.jsx)("br",{}),"Here i provide various way to contact me. ",">"]})]})}),Object(j.jsxs)("div",{className:"flex bg-gray-800 lg:flex-col justify-between mt-2 lg:mt-0 lg:ml-2",children:[Object(j.jsx)("div",{className:"flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110",children:Object(j.jsx)("img",{onClick:function(){return u.b.error("bayudha.bd@gmail.com")},src:"".concat("","/assets/img/gmail.png"),alt:"mail",style:{height:40,width:"auto"},className:"bg-white p-1 rounded-sm"})}),Object(j.jsx)("div",{className:"flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110",children:Object(j.jsx)("img",{onClick:function(){return u.b.success("082222217661")},src:"".concat("","/assets/img/whatsapp.png"),alt:"wa",style:{height:40,width:"auto"},className:"bg-white p-1 rounded-sm"})}),Object(j.jsx)("div",{className:"flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/alif-prasetyo-bayu-aji-122426197/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/linkedin.png"),alt:"linkedin",style:{height:40,width:"auto"},className:"bg-white p-1 rounded-sm"})})}),Object(j.jsx)("div",{className:"flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110",children:Object(j.jsx)("a",{href:"https://github.com/bayudha2",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"".concat("","/assets/img/github.png"),alt:"github",style:{height:35,width:"auto"},className:"bg-white p-1 rounded-sm"})})})]})]})]}),Object(j.jsx)(N,{isItOpen:a,changeOpen:i,nameModal:r})]})},k=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(j.jsxs)("div",{className:"bg-gray-800",children:[Object(j.jsx)(g,{toChild:s,sendToParent:a}),Object(j.jsx)(w,{toChild:s,sendToParent:a})]})};var C=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(r.c,{children:Object(j.jsx)(r.a,{exact:!0,path:"/",element:k()})})})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;s(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.aa023fdd.chunk.js.map