(this.webpackJsonpwriteword=this.webpackJsonpwriteword||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),o=(a(12),a(13),a(1)),s=Object(r.createContext)({searchWord:"nothing",searchType:"ml"});function u(e){var t=Object(r.useContext)(s),a=Object(r.useState)(t.searchWord),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(r.useState)(t.searchType),m=Object(o.a)(i,2),d=m[0],h=m[1],p={searchWord:l,setSearchWord:function(e){u(e)},searchType:d,setSearchType:function(e){h(e)}};return n.a.createElement(s.Provider,{value:p},e.children)}var i=function(){var e=Object(r.useContext)(s),t=e.searchWord,a=e.setSearchWord,c=e.searchType,l=e.setSearchType,u=Object(r.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],h=Object(r.useState)(""),p=Object(o.a)(h,2),E=p[0],v=p[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),l(c),m,d(""),v("")}},n.a.createElement("span",{id:"input-span"},n.a.createElement("h1",{className:"input-header"},"Show me words that..."),n.a.createElement("select",{className:"select-css",name:"choose search type",value:E,onChange:function(e){return l(e.target.value),e.target.selectedIndex,n.a.createElement("div",null,"Just a return value")}},n.a.createElement("option",{value:"",defaultValue:!0},"Choose Search Type"),n.a.createElement("option",{value:"ml"},"have similar meaning to:"),n.a.createElement("option",{value:"rel_ant"},"have opposite meaning to:"),n.a.createElement("option",{value:"sl"},"sound similar to:"),n.a.createElement("option",{value:"rel_rhy"},"rhymes with:"),n.a.createElement("option",{value:"rel_jjb"},"are adjectives related to:"),n.a.createElement("option",{value:"rel_jja"},"are nouns related to:")),n.a.createElement("input",{type:"text",placeholder:"Enter Word",autoFocus:!0,value:m,onChange:function(e){return d(e.target.value)},required:!0})),n.a.createElement("button",{type:"submit",name:"submit",value:"Submit"},"Submit")),n.a.createElement("h2",{id:"search-word"},"Search Term: ",n.a.createElement("span",{id:"yellow-text"},t||"")," "),n.a.createElement("h2",{id:"search-word"},"Search Type: ",n.a.createElement("span",{id:"searchtype-text"},{ml:"similar or related meaning",rel_ant:"opposite meaning",sl:"sounds similar",rel_rhy:"rhyming words",sp:"similar spelling",rel_jjb:"related adjectives",rel_jja:"related nouns"}[c])))},m=function(){return n.a.createElement("nav",{role:"navigation"},"The Write Word")},d=a(2),h=a.n(d),p=a(5),E=a(6),v=function(e){var t=e.word,a=e.score,r=(e.tag,isNaN(Math.ceil(a/1200))?1:Math.ceil(a/1200));r=r>100?100:r;var c,l=(a/1200/100).toFixed(2),o="#000";switch(!0){case l>.7:c="255,255,255",o="26,22,85";break;case l>.5:c="182,191,237",o="20,20,20";break;case l>.3:c="56,56,85",o="255,255,255";break;default:c="154,154,194",o="5,5,5"}return n.a.createElement("div",{className:"card",style:{background:"rgba(".concat(c,",0.9)"),color:"rgb(".concat(o,")")}},n.a.createElement("h3",null,t),n.a.createElement("p",null,"Relevance: ",r,"%"))},b=function(){var e=Object(p.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a&&""!==a||(a="nothing"),e.next=3,fetch("https://api.datamuse.com/words?".concat(t,"=").concat(a));case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.useContext)(s),t=e.searchWord,a=e.searchType,c=Object(E.a)([a,t],b),l=c.data,o=c.status,u=l;return void 0!==u&&console.log(Object.entries(u).length),n.a.createElement(n.a.Fragment,null,"loading"===o&&n.a.createElement("div",{id:"status-message"},"Data loading"),"error"===o&&n.a.createElement("div",{id:"status-message"}," Error loading data "),"success"===o&&n.a.createElement(n.a.Fragment,null,0===Object.entries(u).length?n.a.createElement("div",{className:"empty-div"}):l.map((function(e){return n.a.createElement(v,{key:e.word,word:e.word,score:e.score,tag:e.tag})}))))},f=function(){return n.a.createElement("footer",null,"Data Source: ",n.a.createElement("a",{href:"https://www.datamuse.com/api/",target:"_blank",rel:"noopener noreferrer"},"Datamuse API"))};var j=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null,n.a.createElement(m,null),n.a.createElement(i,null),n.a.createElement("main",{className:"content"},n.a.createElement(g,null))),n.a.createElement(f,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.317c886d.chunk.js.map