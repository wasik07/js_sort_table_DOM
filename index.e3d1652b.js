function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r=function(t){return+t.textContent.replace(/\D/g,"")},e=document.querySelector("tbody"),n=document.querySelector("thead");n.querySelectorAll("th").forEach(function(t,r){t.dataset.index=r}),n.onclick=function(n){var o=n.target.closest("th");if(o){var a,l=function(r){if(Array.isArray(r))return t(r)}(a=e.querySelectorAll("tr"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o.dataset.index;l.sort(function(t,e){var n=t.querySelectorAll("td"),o=e.querySelectorAll("td"),a=n[i].textContent,l=o[i].textContent;return r(o[i])?r(n[i])-r(o[i]):a.localeCompare(l)}).forEach(function(t){return e.appendChild(t)})}};
//# sourceMappingURL=index.e3d1652b.js.map
