"use strict";(self.webpackChunkreact_showcase=self.webpackChunkreact_showcase||[]).push([[91],{5091:function(e,t,r){r.r(t),r.d(t,{db_textarea:function(){return i}});var a=r(5671),o=r(3144),d=r(8323),i=function(){function e(t){(0,a.Z)(this,e),(0,d.r)(this,t),this.dbChange=(0,d.c)(this,"dbChange",7),this.valueSize=0,this.input_id="textarea-"+Math.random().toString(),this.variant="semitransparent"}return(0,o.Z)(e,[{key:"handleChange",value:function(e){var t;this.dbChange.emit(e),this.value=null===(t=e.target)||void 0===t?void 0:t.value}},{key:"render",value:function(){var e=this;return(0,d.h)(d.H,null,(0,d.h)("label",{class:"elm-label",htmlFor:this.input_id},this.label),(0,d.h)("textarea",{class:"elm-textarea",id:this.input_id,"aria-invalid":this.ariainvalid,"aria-required":this.ariarequired,autofocus:this.autofocus,cols:this.cols,"data-dirname":this.dirname,disabled:this.disabled,maxlength:this.maxlength,minlength:this.minlength,name:this.name,placeholder:this.placeholder,readonly:this.readonly,required:this.required,rows:this.rows,wrap:this.wrap,"data-variant":this.variant,onInput:function(t){e.valueSize=t.target.value.length},onChange:function(t){return e.handleChange(t)}},(0,d.h)("slot",null)),this.maxlength&&(0,d.h)("output",{htmlFor:this.input_id,id:"".concat(this.input_id,"-result")},"".concat(this.valueSize," / ").concat(this.maxlength)),this.description&&(0,d.h)("p",{id:"".concat(this.input_id,"-hint"),class:"description"},this.description))}}]),e}();i.style='.sc-db-textarea:where(html){line-height:1.15}.sc-db-textarea:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea .sc-db-textarea:where(dl,ol.sc-db-textarea,ul).sc-db-textarea{margin-block-end:0;margin-block-start:0}.sc-db-textarea:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-textarea:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-textarea:where(b,strong).sc-db-textarea{font-weight:bolder}.sc-db-textarea:where(code,kbd.sc-db-textarea,samp).sc-db-textarea{font-family:monospace, monospace;font-size:1em}.sc-db-textarea:where(small){font-size:80%}.sc-db-textarea:where(table){border-color:currentColor;text-indent:0}.sc-db-textarea:where(button,input.sc-db-textarea,select).sc-db-textarea{margin:0}.sc-db-textarea:where(button){text-transform:none}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea{-webkit-appearance:button}.sc-db-textarea:where(progress){vertical-align:baseline}.sc-db-textarea:where(select){text-transform:none}.sc-db-textarea:where(textarea){margin:0}.sc-db-textarea:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-textarea::-webkit-inner-spin-button,.sc-db-textarea::-webkit-outer-spin-button{height:auto}.sc-db-textarea::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-textarea::-webkit-search-decoration{-webkit-appearance:none}.sc-db-textarea::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focus-inner{border-style:none;padding:0}.sc-db-textarea:where(button,input.sc-db-textarea:is([type=button i],[type=color i].sc-db-textarea,[type=reset i].sc-db-textarea,[type=submit i])).sc-db-textarea::-moz-focusring{outline:1px dotted ButtonText}.sc-db-textarea:where(:-moz-ui-invalid){box-shadow:none}.sc-db-textarea:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-textarea:where(dialog:not([open])){display:none}.sc-db-textarea:where(summary){display:list-item}html.sc-db-textarea,.sc-db-textarea-h{box-sizing:border-box}*.sc-db-textarea,.sc-db-textarea::before,.sc-db-textarea::after{box-sizing:inherit}img.sc-db-textarea,embed.sc-db-textarea,iframe.sc-db-textarea,object.sc-db-textarea,video.sc-db-textarea{height:auto;max-width:100%}iframe.sc-db-textarea{border:0}nav.sc-db-textarea ol.sc-db-textarea,nav.sc-db-textarea ul.sc-db-textarea,[role=navigation].sc-db-textarea ol.sc-db-textarea,[role=navigation].sc-db-textarea ul.sc-db-textarea{list-style:none;margin:0;padding:0}.sc-db-textarea:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-textarea:is(a,button.sc-db-textarea,input.sc-db-textarea,textarea.sc-db-textarea,summary).sc-db-textarea:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body.sc-db-textarea,.sc-db-textarea-h,div.sc-db-textarea,button.sc-db-textarea,input.sc-db-textarea,select.sc-db-textarea,textarea.sc-db-textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-textarea{color:inherit}.elm-textarea.sc-db-textarea{border-radius:4px;color:#282d37;caret-color:#ec0016;--formElement---borderTopColor:var(--formElement---borderColor, transparent);--formElement---borderRightColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  );--formElement---borderBottomColor:var(\n  \t--formElement---borderColor,\n  \trgba(40, 45, 55, 0.5)\n  );--formElement---borderLeftColor:var(\n  \t--formElement---borderColor,\n  \ttransparent\n  )}.elm-textarea.sc-db-textarea~.description.sc-db-textarea{font-size:0.875rem;color:#646973;padding:0.375rem 0.625rem}.elm-textarea[data-variant=semitransparent].sc-db-textarea,.sc-db-textarea:where(.elm-textarea){background-color:rgba(40, 45, 55, 0.05);border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-textarea[data-variant=white].sc-db-textarea{background-color:#ffffff;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-textarea[data-variant=solid].sc-db-textarea{background-color:#f0f3f5;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;--formElement---borderColor:rgba(40, 45, 55, 0.5)}.elm-textarea[data-variant=outline].sc-db-textarea{background-color:transparent;border-top:1px solid var(--formElement---borderTopColor);border-right:1px solid var(--formElement---borderRightColor);border-bottom:1px solid var(--formElement---borderBottomColor);border-left:1px solid var(--formElement---borderLeftColor);--formElement---borderColor:rgba(40, 45, 55, 0.25)}.elm-textarea.sc-db-textarea{font-size:1rem;line-height:1.5rem;display:block;width:100%;max-width:100%;height:2.75rem;padding:0.375rem 0.625rem;resize:vertical}.elm-textarea.sc-db-textarea:not([rows]){max-height:37.5rem;min-height:7.5rem}.elm-textarea[rows].sc-db-textarea{height:initial}.elm-textarea.sc-db-textarea:focus:not(:disabled),.elm-textarea.sc-db-textarea:hover:not(:disabled){--formElement---borderColor:#878c96}.elm-textarea.sc-db-textarea:disabled,.elm-textarea.sc-db-textarea:disabled+.elm-label.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea,fieldset.sc-db-textarea:disabled .elm-textarea.sc-db-textarea+.elm-label.sc-db-textarea{opacity:0.4}.elm-textarea.sc-db-textarea:required:valid:not([aria-invalid]),.elm-textarea.sc-db-textarea:focus:valid:not([aria-invalid]){--formElement---borderColor:#2a7230}.elm-textarea.sc-db-textarea:required:invalid:not(:placeholder-shown),.elm-textarea.sc-db-textarea:focus:invalid:not(:placeholder-shown){--formElement---borderColor:#ec0016}.elm-textarea.sc-db-textarea:required:invalid:not(:placeholder-shown)~.description.sc-db-textarea,.elm-textarea.sc-db-textarea:focus:invalid:not(:placeholder-shown)~.description.sc-db-textarea{color:#ec0016}.elm-textarea[aria-invalid=true].sc-db-textarea{--formElement---borderColor:#ec0016}.elm-textarea.sc-db-textarea+output.sc-db-textarea{float:right;margin-top:0.75rem}.elm-textarea.sc-db-textarea+output.sc-db-textarea,.elm-textarea.sc-db-textarea+output.sc-db-textarea+.description.sc-db-textarea{font-size:0.875rem;color:#646973;padding:0.375rem 0.625rem}'}}]);
//# sourceMappingURL=91.afc1b035.chunk.js.map