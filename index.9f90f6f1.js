function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector(".container"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),c=document.querySelector(".field").tBodies[0];n.addEventListener("click",function(e){var t=document.querySelector("tr").cloneNode(!0);c.children.length<10&&c.append(t)}),o.addEventListener("click",function(e){document.querySelector("tr").remove()}),i.addEventListener("click",function(e){var r=!0,n=!1,o=void 0;if(t(c.children).every(function(e){return e.children.length<10}))try{for(var i,l=t(c.children)[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var d=i.value,u=document.querySelector("td").cloneNode(!0);d.append(u)}}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}}),l.addEventListener("click",function(e){var r=!0,n=!1,o=void 0;try{for(var i,l=t(c.children)[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)i.value.lastElementChild.remove()}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}}),r.addEventListener("click",function(e){10===c.children.length?n.setAttribute("disabled",""):n.removeAttribute("disabled"),2===c.children.length?o.setAttribute("disabled",""):o.removeAttribute("disabled"),t(c.children).every(function(e){return 10===e.children.length})?i.setAttribute("disabled",""):i.removeAttribute("disabled"),t(c.children).every(function(e){return 2===e.children.length})?l.setAttribute("disabled",""):l.removeAttribute("disabled")});
//# sourceMappingURL=index.9f90f6f1.js.map