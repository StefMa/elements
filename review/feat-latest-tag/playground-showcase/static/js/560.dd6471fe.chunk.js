"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[560],{4560:function(e,t,n){n.r(t),n.d(t,{db_breadcrumb:function(){return c}});var o=n(5671),r=n(3144),i=n(2641),a=n(2094),c=function(){function e(t){(0,o.Z)(this,e),(0,i.r)(this,t)}return(0,r.Z)(e,[{key:"children",get:function(){return this._children},set:function(e){this._children=e}},{key:"componentWillLoad",value:function(){this.data?this.compData=(0,a.p)(this.data):(this._children=Array.from(this.host.children),this.children.find((function(e){return"li"===e.tagName.toLowerCase()}))?this.hasItemsWrapper=!0:this.host.innerHTML="")}},{key:"render",value:function(){return(0,i.h)("nav",{class:"cmp-breadcrumb","aria-label":this.ariaLabel},this.compData&&(0,i.h)("ol",{innerHTML:(e=this.compData,e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):"")}),!this.compData&&(0,i.h)("ol",null,!this.hasItemsWrapper&&this._children.map((function(e,t){return(0,i.h)("li",{key:"cmp-breadcrumb-item-".concat(t),innerHTML:e.outerHTML})})),this.hasItemsWrapper&&(0,i.h)("slot",null)));var e}},{key:"host",get:function(){return(0,i.g)(this)}}]),e}();c.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-breadcrumb{color:#646973;font-size:0.75rem}.cmp-breadcrumb a{color:inherit}.cmp-breadcrumb ol{display:flex}.cmp-breadcrumb ol>*{align-items:center;display:inline-flex;margin-right:0.1875rem}.cmp-breadcrumb ol>* [aria-current=location],.cmp-breadcrumb ol>* [aria-current=page]{font-size:0.875rem;color:#282d37}.cmp-breadcrumb ol>* .elm-link,.cmp-breadcrumb ol>* li :where(button,a),li .cmp-breadcrumb ol>* :where(button,a){text-decoration:none;padding:0.0625rem 0.1875rem 0.0625rem 0.25rem;border-radius:0.25rem}.cmp-breadcrumb ol>* .elm-link:hover,.cmp-breadcrumb ol>* li :hover:where(button,a),li .cmp-breadcrumb ol>* :hover:where(button,a){background-color:rgba(40, 45, 55, 0.03)}.cmp-breadcrumb ol>* .elm-link:active,.cmp-breadcrumb ol>* li :active:where(button,a),li .cmp-breadcrumb ol>* :active:where(button,a){background-color:rgba(40, 45, 55, 0.06)}.cmp-breadcrumb ol>*:first-child::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\u2302";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-breadcrumb ol>*:first-child::before{content:var(--icon-glyph)/""}}@media aural{.cmp-breadcrumb ol>*:first-child::before{content:none}}@media speech{.cmp-breadcrumb ol>*:first-child::before{content:none}}.cmp-breadcrumb ol>*:first-child::before{--icon-margin-after:0.1875rem}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-breadcrumb ol>*:not(:first-child)::before{content:var(--icon-glyph)/""}}@media aural{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}@media speech{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-size:0.875rem;--icon-margin-after:0;margin-left:-0.125rem;color:#878c96}'},2094:function(e,t,n){n.d(t,{a:function(){return i},g:function(){return r},p:function(){return a},u:function(){return o}});var o=function(){try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}catch(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},r=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},i=function e(t,n){t.children&&Array.from(t.children).forEach((function(t){"db-link"===t.tagName.toLowerCase()&&t.setAttribute("icon-variant",n),t.children&&e(t,n)}))},a=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(t){return!1}}}}]);
//# sourceMappingURL=560.dd6471fe.chunk.js.map