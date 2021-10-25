(this["webpackJsonpcard-style-config-prototype"]=this["webpackJsonpcard-style-config-prototype"]||[]).push([[0],{282:function(e,n,t){},379:function(e,n,t){},381:function(e,n,t){"use strict";t.r(n);var a,i,o,s,c,r,l,d,h,u,j,b=t(42),m=t.n(b),p=t(270),x=t.n(p),O=t(218),g=t(86),f=t(87),y=t(30),w=f.a.h1(a||(a=Object(g.a)(["\n    font-size: 38px;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-family: 'Cousine', monospace;\n"]))),v=function(){return Object(y.jsx)(w,{children:"Card Config"})},k=f.a.div(i||(i=Object(g.a)(["\n    border-top: 12px dashed palevioletred;\n"]))),T=f.a.div(o||(o=Object(g.a)(["\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 10px;\n\n    @media screen and (min-width: 768px) {\n        padding: 40px;\n    }\n"]))),q=f.a.div(s||(s=Object(g.a)(["\n    margin-bottom: 80px;\n\n    &:last-child {\n        margin-bottom: 20px;\n    }\n"]))),S=f.a.h2(c||(c=Object(g.a)(["\n    text-transform: uppercase;\n    font-family: 'Cousine', monospace;\n"]))),z=f.a.div(r||(r=Object(g.a)(["\n    padding-bottom: 15px;\n    margin-bottom: 15px;\n\n    &:last-child {\n        border-bottom: none;\n        margin-bottom: 0px;\n    }\n\n    @media screen and (min-width: 768px) {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n"]))),A=f.a.h3(l||(l=Object(g.a)(["\n    font-weight: 400;\n\n    @media screen and (min-width: 768px) {\n        flex: 0 0 80px;\n    }\n"]))),N=f.a.p(d||(d=Object(g.a)(["\n    @media screen and (min-width: 768px) {\n        flex: 0 0 320px;\n        margin-left: 40px;\n    }\n"]))),W=f.a.div(h||(h=Object(g.a)(["\n    @media screen and (min-width: 768px) {\n        flex: 1;\n        margin-left: 40px;\n    }\n"]))),C=t(21),L=t(22),D=(t(282),f.a.div(u||(u=Object(g.a)(["\n    /* Layout */\n    & .flex {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    line-height: 1.4;\n\n    /* Typography */\n    & .h1 {\n        font-size: 28px;\n        font-weight: 700;\n    }\n\n    & .h2 {\n        font-size: 24px;\n        font-weight: 700;\n    }\n\n    & .h3 {\n        font-size: 24px;\n        font-weight: 400;\n    }\n\n    & .h4 {\n        font-size: 20px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: #545454;\n    }\n\n    & .h5 {\n        font-size: 20px;\n        font-weight: 400;\n        color: #545454;\n    }\n\n    & .h6 {\n        font-size: 16px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: #545454;\n    }\n\n    & .bold {\n        font-weight: 700;\n    }\n\n    & .italic {\n        font-style: italic;\n    }\n\n    & .underline {\n        text-decoration: underline;\n    }\n\n    & .uppercase {\n        text-transform: uppercase;\n    }\n"]))));function B(e){return e?"string"===typeof e?[[e],[]]:Array.isArray(e)?e.map((function(e){return B(e)})).reduce((function(e,n){var t=Object(C.a)(e,2),a=t[0],i=t[1],o=Object(C.a)(n,2),s=o[0],c=o[1];return[[].concat(Object(L.a)(a),Object(L.a)(s)),[].concat(Object(L.a)(i),Object(L.a)(c))]}),[[],[]]):[[],Object.keys(e).map((function(n){return"".concat(n,": ").concat(e[n]," !important")}))]:[[],[]]}var J,M,H,R,_,E,F,I,P,Q,V,G=function(e){var n=e.schema,t=e.data,a=function e(n,a){if(!n)return null;var i=n.content,o=B(n.style),s=Object(C.a)(o,2),c=s[0],r=s[1],l=c.join(" "),d=f.a.div(j||(j=Object(g.a)(["\n            ","\n        "])),r.join(";"));if(!i||"string"===typeof i)return Object(y.jsx)(D,{children:Object(y.jsx)(d,{className:l,children:t[i]},a)});var h=Object.keys(i);return Object(y.jsx)(D,{children:Object(y.jsx)(d,{className:l,children:h.map((function(n){return e(i[n],n)}))},a)})};if(!n||!n.sections)return null;var i=Object.keys(n.sections);return Object(y.jsx)("div",{className:"card",children:i.map((function(e){return a(n.sections[e],e)}))})},K=t(274),U=t.n(K),X=function(e){return Object(b.useMemo)((function(){try{return[U.a.parse(e),null]}catch(n){return[{layout:"card",sections:{}},n]}}),[e])},Y={one:"One",two:"Two",three:"Three"},Z=function(){var e=X("\nlayout: card\nsections:\n    one:\n        content: one\n    two:\n        content: two\n    three:\n        content: three\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:Y})},$={one:"One",two:"Two",three:"Three"},ee=function(){var e=X("\nlayout: card\nsections:\n    parent:\n        style: flex\n        content:\n            one:\n                content: one\n            two:\n                content: two\n            three:\n                content: three\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:$})},ne=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"Default"}),Object(y.jsx)(N,{children:"Content is stacked on top of each other"}),Object(y.jsx)(W,{children:Object(y.jsx)(Z,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"flex"}),Object(y.jsx)(N,{children:"Content is placed on the same row with space between. Content is vertically aligned in the middle."}),Object(y.jsx)(W,{children:Object(y.jsx)(ee,{})})]})]})},te={summary:"That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun."},ae=function(){var e=X("\nlayout: card\nsections:\n    section:\n        content: summary\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:te})},ie={heading:"The quick brown fox jumps over the lazy dog"},oe=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h1\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:ie})},se={heading:"The quick brown fox jumps over the lazy dog"},ce=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h2\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:se})},re={heading:"The quick brown fox jumps over the lazy dog"},le=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h3\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:re})},de={heading:"The quick brown fox jumps over the lazy dog"},he=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h4\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:de})},ue={heading:"The quick brown fox jumps over the lazy dog"},je=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h5\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:ue})},be={heading:"The quick brown fox jumps over the lazy dog"},me=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: h6\n        content: heading\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:be})},pe={summary:"That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun."},xe=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: bold\n        content: summary\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:pe})},Oe={summary:"That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun."},ge=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: italic\n        content: summary\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:Oe})},fe={summary:"That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun."},ye=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: underline\n        content: summary\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:fe})},we={summary:"That's a crooked tree. We'll send him to Washington. Let's go up in here, and start having some fun This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. All you need is a dream in your heart, and an almighty knife. This is probably the greatest thing to happen in my life - to be able to share this with you. Here's something that's fun."},ve=function(){var e=X("\nlayout: card\nsections:\n    section:\n        style: uppercase\n        content: summary\n"),n=Object(C.a)(e,1)[0];return Object(y.jsx)(G,{schema:n,data:we})},ke=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"Default"}),Object(y.jsx)(W,{children:Object(y.jsx)(ae,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h1"}),Object(y.jsx)(W,{children:Object(y.jsx)(oe,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h2"}),Object(y.jsx)(W,{children:Object(y.jsx)(ce,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h3"}),Object(y.jsx)(W,{children:Object(y.jsx)(le,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h4"}),Object(y.jsx)(W,{children:Object(y.jsx)(he,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h5"}),Object(y.jsx)(W,{children:Object(y.jsx)(je,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"h6"}),Object(y.jsx)(W,{children:Object(y.jsx)(me,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"bold"}),Object(y.jsx)(W,{children:Object(y.jsx)(xe,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"italic"}),Object(y.jsx)(W,{children:Object(y.jsx)(ge,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"underline"}),Object(y.jsx)(W,{children:Object(y.jsx)(ye,{})})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(A,{children:"uppercase"}),Object(y.jsx)(W,{children:Object(y.jsx)(ve,{})})]})]})},Te=function(){return Object(y.jsx)(k,{children:Object(y.jsxs)(T,{children:[Object(y.jsxs)(q,{children:[Object(y.jsx)(S,{children:"Layouts"}),Object(y.jsx)(ne,{})]}),Object(y.jsxs)(q,{children:[Object(y.jsx)(S,{children:"Typography"}),Object(y.jsx)(ke,{})]})]})})},qe=f.a.footer(J||(J=Object(g.a)(["\n    padding: 12px 0;\n    background: palevioletred;\n    color: white;\n\n    & *::selection {\n        background: white;\n        color: palevioletred;\n    }\n"]))),Se=f.a.h3(M||(M=Object(g.a)(["\n    margin: 0;\n    text-align: center;\n\n    a {\n        text-decoration: underline;\n    }\n"]))),ze=function(){return Object(y.jsx)(qe,{children:Object(y.jsxs)(Se,{children:["Made with ","<3"," by"," ",Object(y.jsx)("a",{href:"http://github.com/aquibm/card-style-config-prototype",target:"_blank",rel:"noreferrer",children:"aquibm"})]})})},Ae=t(97),Ne=f.a.nav(H||(H=Object(g.a)(["\n    display: block;\n\n    @media screen and (min-width: 768px) {\n        display: flex;\n        justify-content: center;\n    }\n"]))),We=Object(f.a)(O.b)(R||(R=Object(g.a)(["\n    display: block;\n\n    padding: 12px 10px;\n    margin: 0 0 15px 0;\n    border-radius: 8px;\n\n    color: ",";\n    background-color: ",";\n    border: 1px solid transparent;\n    box-shadow: 0px 3px 8px #e9e9e9;\n\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: uppercase;\n\n    &:hover {\n        border-color: #eee;\n        box-shadow: 0px 5px 12px #e9e9e9;\n    }\n\n    @media screen and (min-width: 768px) {\n        padding: 12px 32px;\n        margin: 0 15px 0 0;\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n"])),(function(e){return e.selected?"white":"#333"}),(function(e){return e.selected?"palevioletred":"white"})),Ce=function(){var e=Object(Ae.f)("/log"),n=Object(Ae.f)("/events"),t=Object(Ae.f)("/custom");return Object(y.jsxs)(Ne,{children:[Object(y.jsx)(We,{to:"/blog",selected:!e&&!n&&!t,children:"Blog"}),Object(y.jsx)(We,{to:"/events",selected:Boolean(n),children:"Events"}),Object(y.jsx)(We,{to:"/log",selected:Boolean(e),children:"Log"}),Object(y.jsx)(We,{to:"/custom",selected:Boolean(t),children:"Custom"})]})},Le=JSON.stringify([{id:"AB-0021",date:"21/02/2021 8:08pm",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi facilis fugiat recusandae atque laudantium. At dicta praesentium tempora animi explicabo, dignissimos magni molestiae nesciunt, unde quisquam atque? Quae, vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid, molestias accusamus omnis placeat animi ullam qui facere nostrum, id quidem nesciunt quia quae. Quos voluptatem earum numquam quasi voluptatum?"},{id:"AB-0029",date:"21/02/2021 8:30pm",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minus voluptas voluptate, nobis tempore at, mollitia doloribus deserunt fugiat quia nam! Id, deleniti porro. Culpa sint quia eum aut voluptatem!"},{id:"AB-0102",date:"21/02/2021 8:46pm",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi beatae alias numquam saepe error! Blanditiis laborum rem quibusdam ab doloribus. Voluptatem, repudiandae illum? Repellendus sapiente, numquam debitis voluptate reiciendis suscipit."}],null,2),De=JSON.stringify([{date:"21",month:"Feb",title:"Feburary 2021 OWASP Meetup",description:"So you have an access key that you need to store somewhere. Maybe it is better not to put it in your code, nor in your container."},{date:"15",month:"Mar",title:"Testing Serverless Apps in AWS",description:"What are we supposed to test? How do we test our app on both unit and integration levels? How can we make sure our app will work properly in a live environment?"}],null,2),Be=JSON.stringify([{test:"Hello"},{test:"World!"}],null,2),Je='\n[\n    {\n      "title": "RefinementCodeReview",\n      "summary": "When people think of code reviews, they usually think in terms of an explicit step in a development team\'s workflow.",\n      "posted": "28 January 2021"\n    },\n    {\n      "title": "PullRequest",\n      "summary": "Pull Requests are a mechanism popularized by github, used to help facilitate merging of work, particularly in the context of open-source projects.",\n      "posted": "28 January 2021"\n    },\n    {\n      "title": "ComputationalNotebook",\n      "summary": "A computational notebook is an environment for writing a prose document that allows the author to embed code which can be easily executed with the results also incorporated into the document. It\'s a platform particularly well-suited for data science work. Such environments include Jupyter Notebook, R Markdown, Mathematica, and Emacs\'s org-mode.",\n      "posted": "18 November 2020"\n    }\n]\n',Me="\nlayout: card\nsections:\n  heading:\n    content: title\n    style:\n      - h3\n      - margin-bottom: 12px\n  summary:\n    content: summary\n    style:\n      margin-bottom: 8px\n      color: '#555'\n  post-date:\n    content: posted\n    style:\n      - h6\n      - font-size: 14px\n        text-align: right\n        color: \"#999\"\n",He=t(262),Re=f.a.div(_||(_=Object(g.a)(["\n    @media screen and (min-width: 768px) {\n        display: flex;\n    }\n"]))),_e=f.a.div(E||(E=Object(g.a)(["\n    flex: 0 0 50%;\n    padding: 15px;\n"]))),Ee=f.a.div(F||(F=Object(g.a)(["\n    flex: 0 0 50%;\n    padding: 15px;\n"]))),Fe=f.a.h4(I||(I=Object(g.a)(["\n    color: #333;\n    text-transform: uppercase;\n    font-weight: 400;\n"]))),Ie=f.a.div(P||(P=Object(g.a)(["\n    background-color: #fff5f5;\n    border: 1px solid #fc8181;\n    color: #c53030;\n\n    padding: 20px;\n    border-radius: 8px;\n"]))),Pe=f.a.h5(Q||(Q=Object(g.a)(["\n    font-size: 18px;\n    margin: 0;\n"]))),Qe=f.a.p(V||(V=Object(g.a)(["\n    margin: 18px 0 0;\n"]))),Ve=function(e){var n=e.rawSchema,t=e.rawData,a=Object(b.useState)(n),i=Object(C.a)(a,2),o=i[0],s=i[1],c=Object(b.useState)(t),r=Object(C.a)(c,2),l=r[0],d=r[1],h=X(o),u=Object(C.a)(h,2),j=u[0],m=u[1],p=function(e){return Object(b.useMemo)((function(){try{return[JSON.parse(e),null]}catch(n){return[[],n]}}),[e])}(l),x=Object(C.a)(p,2),O=x[0],g=x[1];return Object(y.jsxs)(Re,{children:[Object(y.jsxs)(_e,{children:[Object(y.jsx)(Fe,{children:"Schema"}),Object(y.jsx)(He.a,{height:400,language:"yaml",theme:"vs-dark",value:o,onChange:s,options:{lineNumbers:"off",minimap:{enabled:!1}}}),Object(y.jsx)(Fe,{children:"Data"}),Object(y.jsx)(He.a,{height:200,language:"json",theme:"vs-dark",value:l,onChange:d,options:{lineNumbers:"off",minimap:{enabled:!1}}})]}),Object(y.jsxs)(Ee,{children:[Object(y.jsx)(Fe,{children:"Result"}),g&&Object(y.jsxs)(Ie,{children:[Object(y.jsx)(Pe,{children:"Data Error"}),Object(y.jsx)(Qe,{children:g.message})]}),m&&Object(y.jsxs)(Ie,{children:[Object(y.jsx)(Pe,{children:"Schema Error"}),Object(y.jsx)(Qe,{children:m.message})]}),!g&&!m&&O.map((function(e,n){return Object(y.jsx)(G,{schema:j,data:e},n)}))]})]})},Ge=function(){return Object(y.jsxs)(Ae.c,{children:[Object(y.jsx)(Ae.a,{path:"/blog",children:Object(y.jsx)(Ve,{rawSchema:Me,rawData:Je},"/blog")}),Object(y.jsx)(Ae.a,{path:"/log",children:Object(y.jsx)(Ve,{rawSchema:'\nlayout: card\nsections:\n  header:\n    style:\n      - flex\n      - h6\n      - margin-bottom: 18px\n        color: "#acacac"\n        font-size: 14px\n        font-weight: 400\n    content:\n      left:\n        content: id\n      right:\n        content: date\n  body:\n    content: content\n',rawData:Le},"/log")}),Object(y.jsx)(Ae.a,{path:"/events",children:Object(y.jsx)(Ve,{rawSchema:"\nlayout: card\nsections:\n  main:\n    style: flex\n    content:\n      date:\n        style:\n          flex: 0\n          background: '#ececec'\n          min-width: 45px\n          padding: 8px\n          border-radius: 8px\n          text-align: center\n        content:\n          date:\n            style: h1\n            content: date\n          month:\n            style:\n              - h6\n              - color: '#aaa'\n            content: month\n      description:\n        style:\n          flex: 1\n          margin-left: 30px\n        content:\n          title:\n            style:\n              - h3\n              - margin-bottom: 12px\n            content: title\n          description:\n            content: description\n",rawData:De},"/events")}),Object(y.jsx)(Ae.a,{path:"/custom",children:Object(y.jsx)(Ve,{rawSchema:"\nlayout: card\nsections:\n  sectionOne:\n    content: test\n",rawData:Be},"/custom")}),Object(y.jsx)(Ae.a,{children:Object(y.jsx)(Ve,{rawSchema:Me,rawData:Je},"/")})]})},Ke=(t(379),function(){return Object(y.jsxs)(O.a,{basename:"/card-style-config-prototype",children:[Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)("div",{className:"app__section",children:Object(y.jsx)(v,{})}),Object(y.jsx)("div",{className:"app__section",children:Object(y.jsx)(Ce,{})}),Object(y.jsx)("div",{className:"app__section",children:Object(y.jsx)(Ge,{})})]}),Object(y.jsx)(Te,{}),Object(y.jsx)(ze,{})]})});x.a.render(Object(y.jsx)(m.a.StrictMode,{children:Object(y.jsx)(Ke,{})}),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.b9160c2b.chunk.js.map