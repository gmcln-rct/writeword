(this.webpackJsonpwriteword=this.webpackJsonpwriteword||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),u=a.n(c),o=(a(13),a(14),a(2)),l=a.n(o),s=a(5),i=a(6),d=function(e){var t,a=e.word,r=e.score,c=(e.tag,(r/1200).toFixed(2)),u=(r/1200/100).toFixed(2),o="#000";switch(!0){case u>.7:t="50,50,50",o="rgb(255,255,150)";break;case u>.5:t="125,125,125",o="#fff";break;case u>.3:t="200,200,200";break;default:t="255,255,255"}return n.a.createElement("div",{className:"card",style:{background:"rgba(".concat(t,",0.7)"),color:"".concat(o)}},n.a.createElement("h3",null,a),n.a.createElement("p",null,"Relevance: ",c,"%"))},m=a(1),p=Object(r.createContext)({word:"",searchType:"ml"});function h(e){var t=Object(r.useContext)(p),a=Object(r.useState)(t.searchWord),c=Object(m.a)(a,2),u=c[0],o=c[1],l=Object(r.useState)(t.searchType),s=Object(m.a)(l,2),i=s[0],d=s[1],h={searchWord:u,setSearchWord:function(e){o(e)},searchType:i,setSearchType:function(e){d(e)}};return n.a.createElement(p.Provider,{value:h},e.children)}var f=function(){var e=Object(s.a)(l.a.mark((function e(t,a,r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.datamuse.com/words?".concat(a,"=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.useContext)(p),t=e.searchWord,a=(e.searchType,Object(i.a)(["words","ml",t],f)),c=a.data,u=a.status;return n.a.createElement(n.a.Fragment,null,"loading"===u&&n.a.createElement("div",{id:"status-message"},"Tauntauns are loading"),"error"===u&&n.a.createElement("div",{id:"status-message"}," Error fetching data "),"success"===u&&n.a.createElement(n.a.Fragment,null,c.map((function(e){return n.a.createElement(d,{key:e.word,word:e.word,score:e.score,tag:e.tag})}))))},b=(a(7),function(){var e=Object(r.useContext)(p),t=e.setSearchWord,a=e.setSearchType,c=Object(r.useState)(""),u=Object(m.a)(c,2),o=u[0],l=u[1],s=Object(r.useState)(""),i=Object(m.a)(s,2),d=i[0],h=i[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),a(d),l(""),h("")}},n.a.createElement("input",{type:"text",placeholder:"Enter Word",value:o,onChange:function(e){return l(e.target.value)},required:!0}),n.a.createElement("input",{type:"submit",value:"Find Related Words"})),n.a.createElement("h2",{id:"search-word"},"Current search term: ",n.a.createElement("span",{id:"yellow-text"},""===o?"nothing":o)))}),v=function(){return n.a.createElement("nav",null,"The Write Word")};var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null,n.a.createElement(v,null),n.a.createElement(b,null),n.a.createElement("div",{className:"content"},n.a.createElement(E,null))))};u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.dcadddb7.chunk.js.map