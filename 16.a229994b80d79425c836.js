(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8/JR":function(n,e,l){"use strict";var t=l("8T9/"),o=l("Ibf7");n.exports=function(n,e){var l=e||{},i={};return void 0===n&&(n={}),n.on=function(e,l){return i[e]?i[e].push(l):i[e]=[l],n},n.once=function(e,l){return l._once=!0,n.on(e,l),n},n.off=function(e,l){var t=arguments.length;if(1===t)delete i[e];else if(0===t)i={};else{var o=i[e];if(!o)return n;o.splice(o.indexOf(l),1)}return n},n.emit=function(){var e=t(arguments);return n.emitterSnapshot(e.shift()).apply(this,e)},n.emitterSnapshot=function(e){var u=(i[e]||[]).slice(0);return function(){var i=t(arguments),a=this||n;if("error"===e&&!1!==l.throws&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(t){l.async?o(t,i,a):t.apply(a,i),t._once&&n.off(e,t)}),n}},n}},"8T9/":function(n,e){n.exports=function(n,e){return Array.prototype.slice.call(n,e)}},Gjsa:function(n,e){var l="function"==typeof setImmediate;n.exports=l?function(n){setImmediate(n)}:function(n){setTimeout(n,0)}},Hdb2:function(n,e,l){"use strict";var t=l("8/JR"),o=l("PzH3"),i=l("tDoN"),u=document,a=u.documentElement;function r(n,e,l,t){global.navigator.pointerEnabled?o[e](n,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[l],t):global.navigator.msPointerEnabled?o[e](n,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[l],t):(o[e](n,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[l],t),o[e](n,l,t))}function d(n){if(void 0!==n.touches)return n.touches.length;if(void 0!==n.which&&0!==n.which)return n.which;if(void 0!==n.buttons)return n.buttons;var e=n.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function c(n,e){return void 0!==global[e]?global[e]:a.clientHeight?a[n]:u.body[n]}function s(n,e,l){var t,o=n||{},i=o.className;return o.className+=" gu-hide",t=u.elementFromPoint(e,l),o.className=i,t}function p(){return!1}function m(){return!0}function f(n){return n.width||n.right-n.left}function g(n){return n.height||n.bottom-n.top}function v(n){return n.parentNode===u?null:n.parentNode}function h(n){return"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||function n(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||n(v(e)))}(n)}function b(n){return n.nextElementSibling||function(){var e=n;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()}function y(n,e){var l=function(n){return n.targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n}(e),t={pageX:"clientX",pageY:"clientY"};return n in t&&!(n in l)&&t[n]in l&&(n=t[n]),l[n]}n.exports=function(n,e){var l,x,E,C,R,w,_,O,M,T,k;1===arguments.length&&!1===Array.isArray(n)&&(e=n,n=[]);var S,N=null,P=e||{};void 0===P.moves&&(P.moves=m),void 0===P.accepts&&(P.accepts=m),void 0===P.invalid&&(P.invalid=function(){return!1}),void 0===P.containers&&(P.containers=n||[]),void 0===P.isContainer&&(P.isContainer=p),void 0===P.copy&&(P.copy=!1),void 0===P.copySortSource&&(P.copySortSource=!1),void 0===P.revertOnSpill&&(P.revertOnSpill=!1),void 0===P.removeOnSpill&&(P.removeOnSpill=!1),void 0===P.direction&&(P.direction="vertical"),void 0===P.ignoreInputTextSelection&&(P.ignoreInputTextSelection=!0),void 0===P.mirrorContainer&&(P.mirrorContainer=u.body);var A=t({containers:P.containers,start:function(n){var e=Y(n);e&&Z(e)},end:z,cancel:J,remove:G,destroy:function(){D(!0),U({})},canMove:function(n){return!!Y(n)},dragging:!1});return!0===P.removeOnSpill&&A.on("over",function(n){i.rm(n,"gu-hide")}).on("out",function(n){A.dragging&&i.add(n,"gu-hide")}),D(),A;function L(n){return-1!==A.containers.indexOf(n)||P.isContainer(n)}function D(n){var e=n?"remove":"add";r(a,e,"mousedown",B),r(a,e,"mouseup",U)}function I(n){r(a,n?"remove":"add","mousemove",X)}function F(n){var e=n?"remove":"add";o[e](a,"selectstart",j),o[e](a,"click",j)}function j(n){S&&n.preventDefault()}function B(n){if(w=n.clientX,_=n.clientY,1===d(n)&&!n.metaKey&&!n.ctrlKey){var e=n.target,l=Y(e);l&&(S=l,I(),"mousedown"===n.type&&(h(e)?e.focus():n.preventDefault()))}}function X(n){if(S)if(0!==d(n)){if(void 0===n.clientX||n.clientX!==w||void 0===n.clientY||n.clientY!==_){if(P.ignoreInputTextSelection){var e=y("clientX",n),t=y("clientY",n);if(h(u.elementFromPoint(e,t)))return}var o=S;I(!0),F(),z(),Z(o);var s,p={left:(s=E.getBoundingClientRect()).left+c("scrollLeft","pageXOffset"),top:s.top+c("scrollTop","pageYOffset")};C=y("pageX",n)-p.left,R=y("pageY",n)-p.top,i.add(T||E,"gu-transit"),function(){if(!l){var n=E.getBoundingClientRect();(l=E.cloneNode(!0)).style.width=f(n)+"px",l.style.height=g(n)+"px",i.rm(l,"gu-transit"),i.add(l,"gu-mirror"),P.mirrorContainer.appendChild(l),r(a,"add","mousemove",Q),i.add(P.mirrorContainer,"gu-unselectable"),A.emit("cloned",l,E,"mirror")}}(),Q(n)}}else U({})}function Y(n){if(!(A.dragging&&l||L(n))){for(var e=n;v(n)&&!1===L(v(n));){if(P.invalid(n,e))return;if(!(n=v(n)))return}var t=v(n);if(t&&!P.invalid(n,e)&&P.moves(n,t,e,b(n)))return{item:n,source:t}}}function Z(n){("boolean"==typeof P.copy?P.copy:P.copy(n.item,n.source))&&(T=n.item.cloneNode(!0),A.emit("cloned",T,n.item,"copy")),x=n.source,E=n.item,O=M=b(n.item),A.dragging=!0,A.emit("drag",E,x)}function z(){if(A.dragging){var n=T||E;V(n,v(n))}}function q(){S=!1,I(!0),F(!0)}function U(n){if(q(),A.dragging){var e=T||E,t=y("clientX",n),o=y("clientY",n),i=W(s(l,t,o),t,o);i&&(T&&P.copySortSource||!T||i!==x)?V(e,i):P.removeOnSpill?G():J()}}function V(n,e){var l=v(n);T&&P.copySortSource&&e===x&&l.removeChild(E),K(e)&&n.parent===e?A.emit("cancel",n,x,x):A.emit("drop",n,e,x,M),H()}function G(){if(A.dragging){var n=T||E,e=v(n);e&&e.removeChild(n),A.emit(T?"cancel":"remove",n,e,x),H()}}function J(n){if(A.dragging){var e=arguments.length>0?n:P.revertOnSpill,l=T||E,t=v(l),o=K(t);!1===o&&e&&(T?t&&t.removeChild(T):x.insertBefore(l,O)),o||e?A.emit("cancel",l,x,x):A.emit("drop",l,t,x,M),H()}}function H(){var n=T||E;q(),l&&(i.rm(P.mirrorContainer,"gu-unselectable"),r(a,"remove","mousemove",Q),v(l).removeChild(l),l=null),n&&i.rm(n,"gu-transit"),k&&clearTimeout(k),A.dragging=!1,N&&A.emit("out",n,N,x),A.emit("dragend",n),x=E=T=O=M=k=N=null}function K(n,e){var t;return t=void 0!==e?e:l?M:b(T||E),n===x&&t===O}function W(n,e,l){for(var t=n;t&&!o();)t=v(t);return t;function o(){if(!1===L(t))return!1;var o=$(t,n),i=nn(t,o,e,l);return!!K(t,i)||P.accepts(E,t,x,i)}}function Q(n){if(l){n.preventDefault();var e=y("clientX",n),t=y("clientY",n),o=t-R;l.style.left=e-C+"px",l.style.top=o+"px";var i=T||E,u=s(l,e,t),a=W(u,e,t),r=null!==a&&a!==N;(r||null===a)&&(N&&m("out"),N=a,r&&m("over"));var d=v(i);if(a!==x||!T||P.copySortSource){var c,p=$(a,u);if(null!==p)c=nn(a,p,e,t);else{if(!0!==P.revertOnSpill||T)return void(T&&d&&d.removeChild(i));c=O,a=x}(null===c&&r||c!==i&&c!==b(i))&&(M=c,a.insertBefore(i,c),A.emit("shadow",i,a,x))}else d&&d.removeChild(i)}function m(n){A.emit(n,i,N,x)}}function $(n,e){for(var l=e;l!==n&&v(l)!==n;)l=v(l);return l===a?null:l}function nn(n,e,l,t){var o="horizontal"===P.direction,i="mixed"===P.direction;return e!==n?function(){var n=e.getBoundingClientRect();if(i){var a=t-n.top,r=l-n.left,d=Math.min(r,n.right-l,a,n.bottom-t);return u(r===d||a===d)}return u(o?l>n.left+f(n)/2:t>n.top+g(n)/2)}():function(){var e,u,a,r=n.children.length;for(e=0;e<r;e++){if(a=(u=n.children[e]).getBoundingClientRect(),o&&a.left+a.width/2>l)return u;if(!i&&!o&&a.top+a.height/2>t)return u;if(i&&a.left+a.width>l&&a.top+a.height>t)return u}return null}();function u(n){return n?b(e):e}}}},Ibf7:function(n,e,l){"use strict";var t=l("Gjsa");n.exports=function(n,e,l){n&&t(function(){n.apply(l||null,e||[])})}},PzH3:function(n,e,l){"use strict";var t=l("bBst"),o=l("Ys8N"),i=global.document,u=function(n,e,l,t){return n.addEventListener(e,l,t)},a=function(n,e,l,t){return n.removeEventListener(e,l,t)},r=[];function d(n,e,l){var t=function(n,e,l){var t,o;for(t=0;t<r.length;t++)if((o=r[t]).element===n&&o.type===e&&o.fn===l)return t}(n,e,l);if(t){var o=r[t].wrapper;return r.splice(t,1),o}}global.addEventListener||(u=function(n,e,l){return n.attachEvent("on"+e,function(n,e,l){var t=d(n,e,l)||function(n,e,l){return function(e){var t=e||global.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,l.call(n,t)}}(n,0,l);return r.push({wrapper:t,element:n,type:e,fn:l}),t}(n,e,l))},a=function(n,e,l){var t=d(n,e,l);if(t)return n.detachEvent("on"+e,t)}),n.exports={add:u,remove:a,fabricate:function(n,e,l){var u=-1===o.indexOf(e)?new t(e,{detail:l}):function(){var n;return i.createEvent?(n=i.createEvent("Event")).initEvent(e,!0,!0):i.createEventObject&&(n=i.createEventObject()),n}();n.dispatchEvent?n.dispatchEvent(u):n.fireEvent("on"+e,u)}}},YkNJ:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=function(){},i=l("t68o"),u=l("zbXB"),a=l("xYTU"),r=l("NcP4"),d=l("pMnS"),c=l("Ip0R"),s=l("21Lb"),p=l("OzfB"),m=l("Wf4p"),f=l("dWZg"),g=l("wFw1"),v=l("Mr+X"),h=l("SMsm"),b=l("Z5h4"),y=l("gIcY"),x=l("de3e"),E=l("lLAP"),C=l("bujt"),R=l("UodH"),w=function(){function n(){this.isChecked=!1,this.onToggleTriggered=new t.EventEmitter,this.onRemoveTriggered=new t.EventEmitter,this.title="",this.notes=""}return n.prototype.toggle=function(n){this.onToggleTriggered.emit(n)},n.prototype.remove=function(){this.onRemoveTriggered.emit(!0)},n}(),_=t["\u0275crt"]({encapsulation:0,styles:[[".completed[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%], .completed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-decoration:line-through}.tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{font-size:11px;border-radius:2px;margin:8px 4px 0 0;padding:3px 8px;background-color:rgba(0,0,0,.08)}.tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .tag-color[_ngcontent-%COMP%]{width:8px;height:8px;margin-right:8px;border-radius:50%}.btn-icon[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}"]],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,52,"div",[["class","todo-list-item mat-ripple"],["fxLayout","row"],["fxLayoutAlign","start center"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),t["\u0275did"](1,278528,null,0,c.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{completed:0}),t["\u0275did"](3,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](4,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),t["\u0275did"](5,212992,null,0,m.y,[t.ElementRef,t.NgZone,f.a,[2,m.m],[2,g.a]],null,null),(n()(),t["\u0275eld"](6,0,null,null,2,"mat-icon",[["class","handle m-r-16 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](7,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(n()(),t["\u0275ted"](-1,0,["drag_handle"])),(n()(),t["\u0275eld"](9,0,null,null,3,"mat-checkbox",[["class","m-r-16 mat-checkbox"],["fxFlex","0 1 auto"]],[[8,"id",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,l){var t=!0,o=n.component;return"click"===e&&(t=!1!==o.toggle(o.todo)&&t),t},b.b,b.a)),t["\u0275prd"](5120,null,y.l,function(n){return[n]},[x.b]),t["\u0275did"](11,737280,null,0,s.b,[p.h,t.ElementRef,[3,s.e],p.l,p.f],{flex:[0,"flex"]},null),t["\u0275did"](12,4374528,null,0,x.b,[t.ElementRef,t.ChangeDetectorRef,E.h,t.NgZone,[8,null],[2,x.a],[2,g.a]],null,null),(n()(),t["\u0275eld"](13,0,null,null,21,"div",[["class","item"],["fxFlex",""],["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t["\u0275did"](14,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](15,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),t["\u0275did"](16,737280,null,0,s.b,[p.h,t.ElementRef,[3,s.e],p.l,p.f],{flex:[0,"flex"]},null),(n()(),t["\u0275eld"](17,0,null,null,17,"div",[["fxFlex",""],["fxLayout","column"]],null,null,null,null,null)),t["\u0275did"](18,278528,null,0,c.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](19,{completed:0}),t["\u0275did"](20,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](21,737280,null,0,s.b,[p.h,t.ElementRef,[3,s.e],p.l,p.f],{flex:[0,"flex"]},null),(n()(),t["\u0275eld"](22,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](23,null,["",""])),(n()(),t["\u0275eld"](24,0,null,null,1,"div",[["class","notes"]],null,null,null,null,null)),(n()(),t["\u0275ted"](25,null,["",""])),(n()(),t["\u0275eld"](26,0,null,null,8,"div",[["class","tags"],["fxLayout","row wrap"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t["\u0275did"](27,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](28,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),(n()(),t["\u0275eld"](29,0,null,null,5,"div",[["class","tag"],["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t["\u0275did"](30,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](31,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),(n()(),t["\u0275eld"](32,0,null,null,0,"div",[["class","tag-color"],["style","background-color: rgb(56, 142, 60);"]],null,null,null,null,null)),(n()(),t["\u0275eld"](33,0,null,null,1,"div",[["class","tag-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u524d\u7aef"])),(n()(),t["\u0275eld"](35,0,null,null,17,"div",[["class","actions"],["fxLayout","row"],["fxLayoutAlign","star center"]],null,null,null,null,null)),t["\u0275did"](36,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](37,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),(n()(),t["\u0275eld"](38,0,null,null,4,"button",[["class","btn-icon"],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,C.d,C.b)),t["\u0275did"](39,180224,null,0,R.b,[t.ElementRef,f.a,E.h,[2,g.a]],null,null),(n()(),t["\u0275eld"](40,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](41,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(n()(),t["\u0275ted"](-1,0,["error"])),(n()(),t["\u0275eld"](43,0,null,null,4,"button",[["class","btn-icon"],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,C.d,C.b)),t["\u0275did"](44,180224,null,0,R.b,[t.ElementRef,f.a,E.h,[2,g.a]],null,null),(n()(),t["\u0275eld"](45,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](46,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(n()(),t["\u0275ted"](-1,0,["star"])),(n()(),t["\u0275eld"](48,0,null,null,4,"button",[["class","btn-icon"],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,C.d,C.b)),t["\u0275did"](49,180224,null,0,R.b,[t.ElementRef,f.a,E.h,[2,g.a]],null,null),(n()(),t["\u0275eld"](50,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](51,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(n()(),t["\u0275ted"](-1,0,["more_vert"]))],function(n,e){var l=e.component;n(e,1,0,"todo-list-item",n(e,2,0,l.todo.completed)),n(e,3,0,"row"),n(e,4,0,"start center"),n(e,5,0),n(e,7,0),n(e,11,0,"0 1 auto"),n(e,14,0,"row"),n(e,15,0,"start center"),n(e,16,0,""),n(e,18,0,n(e,19,0,l.todo.completed)),n(e,20,0,"column"),n(e,21,0,""),n(e,27,0,"row wrap"),n(e,28,0,"start center"),n(e,30,0,"row"),n(e,31,0,"start center"),n(e,36,0,"row"),n(e,37,0,"star center"),n(e,41,0),n(e,46,0),n(e,51,0)},function(n,e){var l=e.component;n(e,0,0,t["\u0275nov"](e,5).unbounded),n(e,6,0,t["\u0275nov"](e,7).inline),n(e,9,0,t["\u0275nov"](e,12).id,t["\u0275nov"](e,12).indeterminate,t["\u0275nov"](e,12).checked,t["\u0275nov"](e,12).disabled,"before"==t["\u0275nov"](e,12).labelPosition,"NoopAnimations"===t["\u0275nov"](e,12)._animationMode),n(e,23,0,l.todo.title),n(e,25,0,null==l.todo?null:l.todo.notes),n(e,38,0,t["\u0275nov"](e,39).disabled||null,"NoopAnimations"===t["\u0275nov"](e,39)._animationMode),n(e,40,0,t["\u0275nov"](e,41).inline),n(e,43,0,t["\u0275nov"](e,44).disabled||null,"NoopAnimations"===t["\u0275nov"](e,44)._animationMode),n(e,45,0,t["\u0275nov"](e,46).inline),n(e,48,0,t["\u0275nov"](e,49).disabled||null,"NoopAnimations"===t["\u0275nov"](e,49)._animationMode),n(e,50,0,t["\u0275nov"](e,51).inline)})}var M=l("ohiE"),T=l("w0r3"),k=l("6D25"),S=l("Lr6l"),N=l("6UMx"),P=l("0/Q6"),A=function(){},L=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1 0 auto;flex-direction:column;height:100%}.header[_ngcontent-%COMP%]{height:200px;min-height:200px;max-height:200px;color:#fff}.todo-logo-icon[_ngcontent-%COMP%]{margin-right:16px}.todo-logo-text[_ngcontent-%COMP%]{font-size:24px;line-height:24px}.todo-add-button[_ngcontent-%COMP%]{margin:20px}.nav-list-item.active[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}"]],data:{}});function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"div",[["class","header p-20"],["fxLayout","column"],["fxLayoutAlign","space-between start"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](2,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),(n()(),t["\u0275eld"](3,0,null,null,8,"div",[["class","todo-logo"],["fxFlex",""],["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](5,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),t["\u0275did"](6,737280,null,0,s.b,[p.h,t.ElementRef,[3,s.e],p.l,p.f],{flex:[0,"flex"]},null),(n()(),t["\u0275eld"](7,0,null,null,2,"mat-icon",[["class","mat-18 todo-logo-icon mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](8,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(n()(),t["\u0275ted"](-1,0,["check_box"])),(n()(),t["\u0275eld"](10,0,null,null,1,"span",[["class","todo-logo-text"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Todo"])),(n()(),t["\u0275eld"](12,0,null,null,42,"div",[["fxLayout","column"]],null,null,null,null,null)),t["\u0275did"](13,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),(n()(),t["\u0275eld"](14,0,null,null,2,"button",[["class","todo-add-button"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,C.d,C.b)),t["\u0275did"](15,180224,null,0,R.b,[t.ElementRef,f.a,E.h,[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["\u6dfb\u52a0\u4efb\u52a1"])),(n()(),t["\u0275eld"](17,0,null,null,37,"mat-nav-list",[["class","nav-list mat-nav-list"],["role","navigation"]],null,null,null,N.i,N.d)),t["\u0275did"](18,49152,null,0,P.h,[],null,null),(n()(),t["\u0275eld"](19,0,null,0,11,"mat-list-item",[["class","nav-list-item active mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,e,l){var o=!0;return"focus"===e&&(o=!1!==t["\u0275nov"](n,20)._handleFocus()&&o),"blur"===e&&(o=!1!==t["\u0275nov"](n,20)._handleBlur()&&o),o},N.f,N.b)),t["\u0275did"](20,1097728,null,3,P.d,[t.ElementRef,[2,P.h]],null,null),t["\u0275qud"](603979776,1,{_lines:1}),t["\u0275qud"](335544320,2,{_avatar:0}),t["\u0275qud"](335544320,3,{_icon:0}),(n()(),t["\u0275eld"](24,0,null,0,3,"mat-icon",[["class","mat-icon mat-list-icon"],["mat-list-icon",""],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](25,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),t["\u0275did"](26,16384,[[3,4]],0,P.c,[],null,null),(n()(),t["\u0275ted"](-1,0,["view_headline"])),(n()(),t["\u0275eld"](28,0,null,1,2,"h4",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),t["\u0275did"](29,16384,[[1,4]],0,m.o,[],null,null),(n()(),t["\u0275ted"](-1,null,["\u5168\u90e8"])),(n()(),t["\u0275eld"](31,0,null,0,11,"mat-list-item",[["class","nav-list-item mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,e,l){var o=!0;return"focus"===e&&(o=!1!==t["\u0275nov"](n,32)._handleFocus()&&o),"blur"===e&&(o=!1!==t["\u0275nov"](n,32)._handleBlur()&&o),o},N.f,N.b)),t["\u0275did"](32,1097728,null,3,P.d,[t.ElementRef,[2,P.h]],null,null),t["\u0275qud"](603979776,4,{_lines:1}),t["\u0275qud"](335544320,5,{_avatar:0}),t["\u0275qud"](335544320,6,{_icon:0}),(n()(),t["\u0275eld"](36,0,null,0,3,"mat-icon",[["class","mat-icon mat-list-icon"],["mat-list-icon",""],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](37,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),t["\u0275did"](38,16384,[[6,4]],0,P.c,[],null,null),(n()(),t["\u0275ted"](-1,0,["schedule"])),(n()(),t["\u0275eld"](40,0,null,1,2,"h4",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),t["\u0275did"](41,16384,[[4,4]],0,m.o,[],null,null),(n()(),t["\u0275ted"](-1,null,["\u672a\u5b8c\u6210"])),(n()(),t["\u0275eld"](43,0,null,0,11,"mat-list-item",[["class","nav-list-item mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,e,l){var o=!0;return"focus"===e&&(o=!1!==t["\u0275nov"](n,44)._handleFocus()&&o),"blur"===e&&(o=!1!==t["\u0275nov"](n,44)._handleBlur()&&o),o},N.f,N.b)),t["\u0275did"](44,1097728,null,3,P.d,[t.ElementRef,[2,P.h]],null,null),t["\u0275qud"](603979776,7,{_lines:1}),t["\u0275qud"](335544320,8,{_avatar:0}),t["\u0275qud"](335544320,9,{_icon:0}),(n()(),t["\u0275eld"](48,0,null,0,3,"mat-icon",[["class","mat-icon mat-list-icon"],["mat-list-icon",""],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),t["\u0275did"](49,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),t["\u0275did"](50,16384,[[9,4]],0,P.c,[],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275eld"](52,0,null,1,2,"h4",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),t["\u0275did"](53,16384,[[7,4]],0,m.o,[],null,null),(n()(),t["\u0275ted"](-1,null,["\u5df2\u5b8c\u6210"]))],function(n,e){n(e,1,0,"column"),n(e,2,0,"space-between start"),n(e,4,0,"row"),n(e,5,0,"start center"),n(e,6,0,""),n(e,8,0),n(e,13,0,"column"),n(e,25,0),n(e,37,0),n(e,49,0)},function(n,e){n(e,7,0,t["\u0275nov"](e,8).inline),n(e,14,0,t["\u0275nov"](e,15).disabled||null,"NoopAnimations"===t["\u0275nov"](e,15)._animationMode),n(e,19,0,t["\u0275nov"](e,20)._avatar||t["\u0275nov"](e,20)._icon,t["\u0275nov"](e,20)._avatar||t["\u0275nov"](e,20)._icon),n(e,24,0,t["\u0275nov"](e,25).inline),n(e,31,0,t["\u0275nov"](e,32)._avatar||t["\u0275nov"](e,32)._icon,t["\u0275nov"](e,32)._avatar||t["\u0275nov"](e,32)._icon),n(e,36,0,t["\u0275nov"](e,37).inline),n(e,43,0,t["\u0275nov"](e,44)._avatar||t["\u0275nov"](e,44)._icon,t["\u0275nov"](e,44)._avatar||t["\u0275nov"](e,44)._icon),n(e,48,0,t["\u0275nov"](e,49).inline)})}var I=function(){},F=t["\u0275crt"]({encapsulation:0,styles:[[".toolbar[_ngcontent-%COMP%]{min-height:60px;max-height:60px;border-bottom:1px solid #eee;padding:8px 24px;color:#616161}.toolbar[_ngcontent-%COMP%]   .chevrons[_ngcontent-%COMP%]{margin-left:16px}"]],data:{}});function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","toolbar"],["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t["\u0275did"](2,737280,null,0,s.e,[p.h,t.ElementRef,p.l],{layout:[0,"layout"]},null),t["\u0275did"](3,737280,null,0,s.d,[p.h,t.ElementRef,[6,s.e],p.l],{align:[0,"align"]},null),(n()(),t["\u0275eld"](4,0,null,null,2,"mat-checkbox",[["class","checkbox mat-checkbox"]],[[8,"id",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),t["\u0275prd"](5120,null,y.l,function(n){return[n]},[x.b]),t["\u0275did"](6,4374528,null,0,x.b,[t.ElementRef,t.ChangeDetectorRef,E.h,t.NgZone,[8,null],[2,x.a],[2,g.a]],null,null),(n()(),t["\u0275eld"](7,0,null,null,1,"span",[["fxFlex",""]],null,null,null,null,null)),t["\u0275did"](8,737280,null,0,s.b,[p.h,t.ElementRef,[3,s.e],p.l,p.f],{flex:[0,"flex"]},null)],function(n,e){n(e,2,0,"row"),n(e,3,0,"start center"),n(e,8,0,"")},function(n,e){n(e,4,0,t["\u0275nov"](e,6).id,t["\u0275nov"](e,6).indeterminate,t["\u0275nov"](e,6).checked,t["\u0275nov"](e,6).disabled,"before"==t["\u0275nov"](e,6).labelPosition,"NoopAnimations"===t["\u0275nov"](e,6)._animationMode)})}var B=l("Hdb2"),X=(l("mrSG"),B),Y=function(){function n(){this.droppableMap=new WeakMap,this.draggableMap=new WeakMap,this.dragulaOptions=this.createDrakeOptions(),this.drake=X([],this.dragulaOptions),this.registerEvents()}return n.prototype.register=function(n){this.droppableMap.set(n.container,n),this.drake.containers.push(n.container)},n.prototype.remove=function(n){this.droppableMap.delete(n.container);var e=this.drake.containers.indexOf(n.container);e>-1&&this.drake.containers.splice(e,1)},n.prototype.registerDraggable=function(n){this.draggableMap.set(n.element,n)},n.prototype.removeDraggable=function(n){this.draggableMap.delete(n.element)},n.prototype.createDrakeOptions=function(){var n=this;return{accepts:function(e,l){if(e.contains(l))return!1;var t=n.draggableMap.get(e),o=n.droppableMap.get(l);return!t||!o||t.dropZones.includes(o.dropZone)},copy:function(e,l){var t=n.droppableMap.get(l);return!!t&&t.copy},moves:function(e,l,t,o){var i=n.draggableMap.get(e);return!i||i.moves(l,t,o)},revertOnSpill:!0,direction:"vertical"}},n.prototype.registerEvents=function(){var n,e,l=this;this.drake.on("drag",function(t,o){if(e=void 0,n=t,t&&o){if(l.draggableMap.has(t)){var i=l.draggableMap.get(t);i.drag.emit({type:"drag",el:t,source:o,value:e=i.model})}if(l.droppableMap.has(o)){var u=l.droppableMap.get(o);l.dragulaOptions.removeOnSpill=u.removeOnSpill,u.drag.emit({type:"drag",el:t,source:o,sourceComponent:u,value:e})}}}),this.drake.on("drop",function(t,o,i){var u=l.droppableMap.get(o);if(u){var a=e,r=Array.prototype.indexOf.call(o.children,t);if(r<0)l.drake.cancel(!0);else{var d=l.droppableMap.get(i);if(d){var c=d.model,s=u.model,p=!(!c||!e),m=p?c.indexOf(e):-1;if(p&&m<0)return void l.drake.cancel(!0);if(s){var f=!c||n!==t;m>-1&&c&&o===i?c.splice(r,0,c.splice(m,1)[0]):(t.parentNode===o&&o.removeChild(t),f?a=JSON.parse(JSON.stringify(a)):(t.parentNode!==i&&l.drake.cancel(!0),c.splice(m,1)),s.splice(r,0,a))}}u.drop.emit({type:"drop",el:t,source:i,value:a,dropIndex:r})}}}),this.drake.on("remove",function(n,t,o){if(l.droppableMap.has(o)){var i=l.droppableMap.get(o),u=i.model,a=e&&u?u.indexOf(e):-1;a>-1&&(n.parentNode!==o&&o.appendChild(n),u.splice(a,1)),i.remove.emit({type:"remove",el:n,container:t,source:o,value:e})}}),this.drake.on("cancel",function(n,t,o){l.droppableMap.has(t)&&l.droppableMap.get(t).cancel.emit({type:"cancel",el:n,container:t,source:o,value:e})}),this.drake.on("over",function(n,t,o){l.droppableMap.has(t)&&l.droppableMap.get(t).over.emit({type:"over",el:n,container:t,source:o,value:e})}),this.drake.on("out",function(n,t,o){l.droppableMap.has(t)&&l.droppableMap.get(t).out.emit({type:"out",el:n,container:t,source:o,value:e})})},n}(),Z=1e4,z=function(){function n(n,e,l){this.el=n,this.renderer=e,this.drakesService=l,this.copy=!1,this.removeOnSpill=!1,this.drop=new t.EventEmitter,this.drag=new t.EventEmitter,this.over=new t.EventEmitter,this.out=new t.EventEmitter,this.remove=new t.EventEmitter,this.cancel=new t.EventEmitter}return Object.defineProperty(n.prototype,"container",{get:function(){return this.el.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dropZone",{get:function(){return this._dropZone||this.ngxDroppable||this.defaultZone},set:function(n){this._dropZone=n},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.defaultZone="@@DefaultDropZone-"+Z+++"@@",this.drakesService.register(this)},n.prototype.ngAfterViewInit=function(){var n=this;this.over.subscribe(function(){n.renderer.addClass(n.container,"gu-over")}),this.out.subscribe(function(){n.renderer.removeClass(n.container,"gu-over")})},n.prototype.ngOnDestroy=function(){this.drakesService.remove(this)},n}(),q=function(){},U=function(){function n(){this._todos=[],this.onRemoveTodo=new t.EventEmitter,this.onToggleTodo=new t.EventEmitter,this.onToggleAll=new t.EventEmitter}return Object.defineProperty(n.prototype,"todos",{get:function(){return this._todos},set:function(n){this._todos=n.slice()},enumerable:!0,configurable:!0}),n.prototype.onRemoveTriggered=function(n){this.onRemoveTodo.emit(n)},n.prototype.onToggleTriggered=function(n){this.onToggleTodo.emit(n)},n.prototype.onToggleAllTriggered=function(){this.onToggleAll.emit(!0)},n}(),V=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{overflow:scroll}"]],data:{}});function G(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","todo-list"],["ngxDroppable",""]],null,null,null,null,null)),t["\u0275did"](1,4407296,null,0,z,[t.ElementRef,t.Renderer2,Y],{ngxDroppable:[0,"ngxDroppable"]},null),t["\u0275ncd"](null,0)],function(n,e){n(e,1,0,"")},null)}var J=function(){function n(n,e){this.service=n,this.router=e}return n.prototype.ngOnInit=function(){var n=this;this.service.getTodosByParams(),this.onTodosChangedSubscrition=this.service.onTodosChangedSubject.subscribe(function(e){n.todos=e})},n.prototype.addTodo=function(n){this.service.addTodo(n)},n.prototype.toggleTodo=function(n){this.service.toggleTodo(n)},n.prototype.removeTodo=function(n){},n.prototype.toggleAll=function(){},n.prototype.clearCompleted=function(){},n.prototype.ngOnDestroy=function(){this.onTodosChangedSubscrition.unsubscribe()},n}(),H=l("ZYCi"),K=t["\u0275crt"]({encapsulation:2,styles:[[".search{margin-top:42px}.todo-list{overflow:scroll}.todo-list-item{display:block;position:relative;padding:16px 16px 16px 24px;border-bottom:1px solid rgba(0,0,0,.08);text-transform:none;cursor:pointer;flex-shrink:0;background:#fff}.todo-list-item.completed{background:#eee}.todo-list-item .handle{height:48px;line-height:48px;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.todo-list-item .item{margin:0 16px 0 8px}.todo-list-item .item .title{font-size:15px;font-weight:500}.todo-list-item .item .notes{margin-top:4px}.m-r-16{margin-right:16px}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';filter:alpha(opacity=80);box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';filter:alpha(opacity=20)}"]],data:{}});function W(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-todo-item",[],null,null,null,O,_)),t["\u0275did"](1,49152,null,0,w,[],{todo:[0,"todo"]},null)],function(n,e){n(e,1,0,e.context.$implicit)},null)}function Q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,16,"stbui-layout",[],null,null,null,M.d,M.a)),t["\u0275did"](1,114688,null,1,T.a,[],null,null),t["\u0275qud"](335544320,1,{_headerComponent:0}),(n()(),t["\u0275eld"](3,0,null,1,3,"stbui-layout-header",[["class","stbui-layout-header"]],null,null,null,M.e,M.b)),t["\u0275did"](4,114688,[[1,4]],0,T.b,[],null,null),(n()(),t["\u0275eld"](5,0,null,0,1,"stbui-search",[["class","search"],["placeholder","\u641c\u7d22..."]],null,null,null,k.b,k.a)),t["\u0275did"](6,4243456,null,0,S.a,[t.ElementRef],{placeholder:[0,"placeholder"]},null),(n()(),t["\u0275eld"](7,0,null,0,3,"stbui-layout-sidenav",[["class","stbui-layout-sidenav"]],null,null,null,M.f,M.c)),t["\u0275did"](8,114688,null,0,T.c,[],null,null),(n()(),t["\u0275eld"](9,0,null,0,1,"app-todo-sidenav",[],null,null,null,D,L)),t["\u0275did"](10,49152,null,0,A,[],null,null),(n()(),t["\u0275eld"](11,0,null,2,1,"app-todo-toolbar",[],null,null,null,j,F)),t["\u0275did"](12,49152,null,0,I,[],null,null),(n()(),t["\u0275eld"](13,0,null,2,3,"app-todo-list",[],null,null,null,G,V)),t["\u0275did"](14,49152,null,0,U,[],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,W)),t["\u0275did"](16,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var l=e.component;n(e,1,0),n(e,4,0),n(e,6,0,"\u641c\u7d22..."),n(e,8,0),n(e,16,0,l.todos)},null)}var $=t["\u0275ccf"]("app-todo",J,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-todo",[],null,null,null,Q,K)),t["\u0275did"](1,245760,null,0,J,["todoService",H.a],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),nn=l("t/Na"),en=l("eDkP"),ln=l("Fzqc"),tn=l("M2Lx"),on=l("uGex"),un=l("4tE/"),an=l("o3x0"),rn=l("jQLj"),dn=l("mVsa"),cn=l("ZYjt"),sn=l("v9Dh"),pn=l("AytR"),mn=l("26FU"),fn=Object.assign||function(n){for(var e,l=1,t=arguments.length;l<t;l++)for(var o in e=arguments[l])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},gn=function(){function n(n){this.http=n,this.apiUrl=pn.a.todoApi,this.onTodosChangedSubject=new mn.a([])}return n.prototype.getTodos=function(){return this.getTodosByParams()},n.prototype.getTodosByParams=function(){var n=this;return this.http.get(this.apiUrl).subscribe(function(e){n.onTodosChangedSubject.next(e)})},n.prototype.getTodosByFilter=function(){},n.prototype.addTodo=function(n){var e=this;this.http.post(this.apiUrl,fn({},n)).subscribe(function(n){e.onTodosChangedSubject.next(n)})},n.prototype.toggleTodo=function(n){},n}(),vn=l("hUWP"),hn=l("3pJQ"),bn=l("V9q+"),yn=l("4c35"),xn=l("qAlS"),En=l("seP3"),Cn=l("FVSy"),Rn=l("r43C"),wn=l("LC5p"),_n=l("Z+uX"),On=l("Blfk"),Mn=l("u7R8"),Tn=l("Nsh5"),kn=l("w+lc"),Sn=l("kWGw"),Nn=l("vARd"),Pn=l("La40"),An=l("8mMr"),Ln=l("9It4"),Dn=l("/VYK"),In=l("b716"),Fn=l("5dmV"),jn=l("PCNd"),Bn=l("l63R"),Xn=function(){},Yn=l("rfEm");l.d(e,"TodoModuleNgFactory",function(){return Zn});var Zn=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,u.b,u.a,a.a,a.b,r.a,d.a,$]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,nn.i,nn.o,[c.DOCUMENT,t.PLATFORM_ID,nn.m]),t["\u0275mpd"](4608,nn.p,nn.p,[nn.i,nn.n]),t["\u0275mpd"](5120,nn.a,function(n){return[n]},[nn.p]),t["\u0275mpd"](4608,nn.l,nn.l,[]),t["\u0275mpd"](6144,nn.j,null,[nn.l]),t["\u0275mpd"](4608,nn.h,nn.h,[nn.j]),t["\u0275mpd"](6144,nn.b,null,[nn.h]),t["\u0275mpd"](4608,nn.f,nn.k,[nn.b,t.Injector]),t["\u0275mpd"](4608,nn.c,nn.c,[nn.f]),t["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[t.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,y.x,y.x,[]),t["\u0275mpd"](4608,p.j,p.i,[p.d,p.g]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,e){return[p.m(n,e)]},[c.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,en.c,en.c,[en.i,en.e,t.ComponentFactoryResolver,en.h,en.f,t.Injector,t.NgZone,c.DOCUMENT,ln.b]),t["\u0275mpd"](5120,en.j,en.k,[en.c]),t["\u0275mpd"](4608,tn.c,tn.c,[]),t["\u0275mpd"](5120,on.a,on.b,[en.c]),t["\u0275mpd"](5120,un.a,un.b,[en.c]),t["\u0275mpd"](5120,an.c,an.d,[en.c]),t["\u0275mpd"](4608,an.e,an.e,[en.c,t.Injector,[2,c.Location],[2,an.b],an.c,[3,an.e],en.e]),t["\u0275mpd"](4608,rn.h,rn.h,[]),t["\u0275mpd"](5120,rn.a,rn.b,[en.c]),t["\u0275mpd"](5120,dn.b,dn.h,[en.c]),t["\u0275mpd"](4608,m.c,m.A,[[2,m.h],f.a]),t["\u0275mpd"](4608,cn.HAMMER_GESTURE_CONFIG,m.e,[[2,m.i],[2,m.n]]),t["\u0275mpd"](5120,sn.b,sn.c,[en.c]),t["\u0275mpd"](4608,m.d,m.d,[]),t["\u0275mpd"](4608,Y,Y,[]),t["\u0275mpd"](4608,"todoService",gn,[nn.c]),t["\u0275mpd"](1073742336,nn.e,nn.e,[]),t["\u0275mpd"](1073742336,nn.d,nn.d,[]),t["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),t["\u0275mpd"](1073742336,y.u,y.u,[]),t["\u0275mpd"](1073742336,y.h,y.h,[]),t["\u0275mpd"](1073742336,p.e,p.e,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,vn.a,vn.a,[]),t["\u0275mpd"](1073742336,hn.a,hn.a,[]),t["\u0275mpd"](1073742336,bn.a,bn.a,[[2,p.k],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,yn.g,yn.g,[]),t["\u0275mpd"](1073742336,f.b,f.b,[]),t["\u0275mpd"](1073742336,xn.b,xn.b,[]),t["\u0275mpd"](1073742336,en.g,en.g,[]),t["\u0275mpd"](1073742336,m.n,m.n,[[2,m.f]]),t["\u0275mpd"](1073742336,m.z,m.z,[]),t["\u0275mpd"](1073742336,m.x,m.x,[]),t["\u0275mpd"](1073742336,m.u,m.u,[]),t["\u0275mpd"](1073742336,tn.d,tn.d,[]),t["\u0275mpd"](1073742336,En.e,En.e,[]),t["\u0275mpd"](1073742336,on.d,on.d,[]),t["\u0275mpd"](1073742336,un.c,un.c,[]),t["\u0275mpd"](1073742336,Cn.g,Cn.g,[]),t["\u0275mpd"](1073742336,x.c,x.c,[]),t["\u0275mpd"](1073742336,R.c,R.c,[]),t["\u0275mpd"](1073742336,an.k,an.k,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,rn.i,rn.i,[]),t["\u0275mpd"](1073742336,m.p,m.p,[]),t["\u0275mpd"](1073742336,Rn.a,Rn.a,[]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,wn.b,wn.b,[]),t["\u0275mpd"](1073742336,P.e,P.e,[]),t["\u0275mpd"](1073742336,dn.f,dn.f,[]),t["\u0275mpd"](1073742336,m.B,m.B,[]),t["\u0275mpd"](1073742336,m.r,m.r,[]),t["\u0275mpd"](1073742336,_n.a,_n.a,[]),t["\u0275mpd"](1073742336,On.a,On.a,[]),t["\u0275mpd"](1073742336,Mn.d,Mn.d,[]),t["\u0275mpd"](1073742336,Tn.h,Tn.h,[]),t["\u0275mpd"](1073742336,kn.b,kn.b,[]),t["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),t["\u0275mpd"](1073742336,Nn.e,Nn.e,[]),t["\u0275mpd"](1073742336,Pn.l,Pn.l,[]),t["\u0275mpd"](1073742336,An.b,An.b,[]),t["\u0275mpd"](1073742336,sn.e,sn.e,[]),t["\u0275mpd"](1073742336,Ln.c,Ln.c,[]),t["\u0275mpd"](1073742336,Dn.c,Dn.c,[]),t["\u0275mpd"](1073742336,In.b,In.b,[]),t["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),t["\u0275mpd"](1073742336,jn.a,jn.a,[]),t["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),t["\u0275mpd"](1073742336,q,q,[]),t["\u0275mpd"](1073742336,H.q,H.q,[[2,H.w],[2,H.m]]),t["\u0275mpd"](1073742336,Xn,Xn,[]),t["\u0275mpd"](1073742336,Yn.a,Yn.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](256,nn.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,nn.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,m.g,m.k,[]),t["\u0275mpd"](1024,H.k,function(){return[[{path:"",component:J}]]},[])])})},Ys8N:function(n,e,l){"use strict";var t=[],o="",i=/^on/;for(o in global)i.test(o)&&t.push(o.slice(2));n.exports=t},bBst:function(n,e){var l=global.CustomEvent;n.exports=function(){try{var n=new l("cat",{detail:{foo:"bar"}});return"cat"===n.type&&"bar"===n.detail.foo}catch(n){}return!1}()?l:"function"==typeof document.createEvent?function(n,e){var l=document.createEvent("CustomEvent");return e?l.initCustomEvent(n,e.bubbles,e.cancelable,e.detail):l.initCustomEvent(n,!1,!1,void 0),l}:function(n,e){var l=document.createEventObject();return l.type=n,e?(l.bubbles=Boolean(e.bubbles),l.cancelable=Boolean(e.cancelable),l.detail=e.detail):(l.bubbles=!1,l.cancelable=!1,l.detail=void 0),l}},tDoN:function(n,e,l){"use strict";var t={},o="(?:^|\\s)",i="(?:\\s|$)";function u(n){var e=t[n];return e?e.lastIndex=0:t[n]=e=new RegExp(o+n+i,"g"),e}n.exports={add:function(n,e){var l=n.className;l.length?u(e).test(l)||(n.className+=" "+e):n.className=e},rm:function(n,e){n.className=n.className.replace(u(e)," ").trim()}}}}]);