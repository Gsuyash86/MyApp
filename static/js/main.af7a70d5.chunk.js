(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(12),o=t.n(n),l=(t(19),t(7)),i=t(6),r=t.n(i),d=t(5),h=t(0);function b(e){var a=e.title,t=e.mode,c=e.toggleMode;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(t," bg-").concat(t),children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(d.b,{className:"navbar-brand",to:"#",children:a}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)(d.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{className:"dropdown-item",to:"#",children:"Action"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{className:"dropdown-item",to:"#",children:"Another action"})}),Object(h.jsx)("li",{children:Object(h.jsx)("hr",{className:"dropdown-divider"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{className:"dropdown-item",to:"#",children:"Something else here"})})]})]}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link disabled",children:"Disabled"})})]}),Object(h.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===t?"light":"dark"),children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckCheckedDisabled",onChange:c}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckCheckedDisabled",children:t})]})]})]})})})}function j(e){var a=e.heading,t=e.mode,s=Object(c.useState)(""),n=Object(l.a)(s,2),o=n[0],i=n[1];return Object(h.jsx)("div",{className:"light"===t?"bg-light":"bg-secondary text-white",style:{height:1e3},children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"exampleFormControlTextarea1",className:"form-label",children:Object(h.jsxs)("h1",{children:[" ",a," "]})}),Object(h.jsx)("textarea",{className:"form-control",value:o,id:"exampleFormControlTextarea1",onChange:function(e){i(e.target.value)},rows:"8"})]}),Object(h.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){i(o.toLocaleUpperCase())},children:"ConvertToUpperCase"}),Object(h.jsx)("button",{className:"btn btn-primary m-2",onClick:function(e){i("")},children:"Clear Text"}),Object(h.jsxs)("div",{className:"container my-3",children:[Object(h.jsx)("h1",{children:"The total number of words : "}),Object(h.jsxs)("p",{children:[o.length," character and"," ",0===o.length?0:o.split(" ").filter((function(e){return 0!==e.length})).length," ","words"]})]})]})})}b.protoTypes={title:r.a.string,aboutText:r.a.string};t(29);function m(e){var a=e.mode,t={color:"dark"===a?"white":"#042743",backgroundColor:"dark"===a?"#042743":"white",borderColor:"dark"===a?"white":"#042743"};return Object(h.jsx)("div",{className:"container  my-2",style:{color:"dark"===a?"white":"#042743"},children:Object(h.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(h.jsxs)("div",{className:"accordion-item",style:t,children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",style:t,children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t,children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",style:t,children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",style:t,children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t,children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",style:t,children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})})}var p=t(2);var u=function(){var e=Object(c.useState)("light"),a=Object(l.a)(e,2),t=a[0],s=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{title:"Utils",mode:t,toggleMode:function(){s("light"===t?"dark":"light")}}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/about",children:Object(h.jsx)(m,{mode:t})}),Object(h.jsx)(d.a,{path:"/",children:Object(h.jsx)(j,{heading:"Enter about you here",mode:t})})]})]})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,o=a.getTTFB;t(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.af7a70d5.chunk.js.map