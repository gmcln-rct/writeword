(this.webpackJsonpwriteword=this.webpackJsonpwriteword||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),o=(a(12),a(13),a(1)),s=Object(r.createContext)({searchWord:"nothing",searchType:"ml"});function u(e){var t=Object(r.useContext)(s),a=Object(r.useState)(t.searchWord),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(r.useState)(t.searchType),m=Object(o.a)(i,2),d=m[0],p=m[1],h={searchWord:l,setSearchWord:function(e){u(e)},searchType:d,setSearchType:function(e){p(e)}};return n.a.createElement(s.Provider,{value:h},e.children)}var i=function(){var e=Object(r.useContext)(s),t=e.searchWord,a=e.setSearchWord,c=e.searchType,l=e.setSearchType,u=Object(r.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],p=Object(r.useState)(""),h=Object(o.a)(p,2),E=h[0],v=h[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),l(c),m,d(""),v("")}},n.a.createElement("input",{type:"text",placeholder:"Enter Word",value:m,onChange:function(e){return d(e.target.value)},required:!0}),n.a.createElement("select",{className:"select-css",name:"choose search type",value:E,onChange:function(e){return l(e.target.value),e.target.selectedIndex,n.a.createElement("div",null,"Just a return value")}},n.a.createElement("option",{value:"",defaultValue:!0},"Choose Search Type"),n.a.createElement("option",{value:"ml"},"Similar or Related Meaning"),n.a.createElement("option",{value:"rel_ant"},"Opposite Meaning"),n.a.createElement("option",{value:"sl"},"Sounds Similar"),n.a.createElement("option",{value:"rel_rhy"},"Rhymes"),n.a.createElement("option",{value:"rel_jjb"},"Related Adjectives"),n.a.createElement("option",{value:"rel_jja"},"Related Nouns")),n.a.createElement("button",{type:"submit",name:"submit",value:"Submit"},"Submit")),n.a.createElement("h2",{id:"search-word"},"Search Term: ",n.a.createElement("span",{id:"yellow-text"},t||"")," "),n.a.createElement("h2",{id:"search-word"},"Search Type: ",n.a.createElement("span",{id:"searchtype-text"},{ml:"similar or related meaning",rel_ant:"opposite meaning",sl:"sounds similar",rel_rhy:"rhyming words",sp:"similar spelling",rel_jjb:"related adjectives",rel_jja:"related nouns"}[c])))},m=function(){return n.a.createElement("nav",{role:"navigation"},"The Write Word")},d=a(2),p=a.n(d),h=a(5),E=a(6),v=function(e){var t,a=e.word,r=e.score,c=(e.tag,Math.ceil(r/1200)),l=(r/1200/100).toFixed(2),o="#000";switch(!0){case l>.7:t="255,255,255",o="26,22,85";break;case l>.5:t="182,191,237",o="20,20,20";break;case l>.3:t="56,56,85",o="255,255,255";break;default:t="154,154,194",o="5,5,5"}return n.a.createElement("div",{className:"card",style:{background:"rgba(".concat(t,",0.9)"),color:"rgb(".concat(o,")")}},n.a.createElement("h3",null,a),n.a.createElement("p",null,"Relevance: ",c,"%"))},b=function(){var e=Object(h.a)(p.a.mark((function e(t,a,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.datamuse.com/words?".concat(a,"=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.useContext)(s),t=e.searchWord,a=e.searchType,c=Object(E.a)(["words",a,t],b),l=c.data,o=c.status,u=l;return void 0!==u&&console.log(Object.entries(u).length),n.a.createElement(n.a.Fragment,null,"loading"===o&&n.a.createElement("div",{id:"status-message"},"Data loading"),"error"===o&&n.a.createElement("div",{id:"status-message"}," Error loading data "),"success"===o&&n.a.createElement(n.a.Fragment,null,0===Object.entries(u).length?n.a.createElement("div",{className:"empty-div"}):l.map((function(e){return n.a.createElement(v,{key:e.word,word:e.word,score:e.score,tag:e.tag})}))))},f=function(){return n.a.createElement("footer",null,"Data Source: ",n.a.createElement("a",{href:"https://www.datamuse.com/api/",target:"_blank",rel:"noopener noreferrer"},"Datamuse API"))};var j=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null,n.a.createElement(m,null),n.a.createElement(i,null),n.a.createElement("div",{className:"content"},n.a.createElement(g,null))),n.a.createElement(f,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.e379cf97.chunk.js.map