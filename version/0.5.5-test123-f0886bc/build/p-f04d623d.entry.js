import{r as s,h as r}from"./p-5f545e05.js";import{u as e}from"./p-b5584080.js";const o=class{constructor(r){s(this,r),this.htmlid="db-"+e(),this.percentagesign="%",this.indeterminate=!1}render(){return r("div",{class:"elm-progress"},r("progress",Object.assign({value:this.value,max:this.max,id:this.htmlid},{indeterminate:this.indeterminate},{style:!0===this.circle?{"--progress-conic":`${this.value}`}:{"":""}})),!this.indeterminate&&r("output",{htmlFor:this.htmlid},this.value,this.percentagesign))}};o.style='.sc-db-progress:where(html){line-height:1.15}.sc-db-progress:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress .sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress{margin-block-end:0;margin-block-start:0}.sc-db-progress:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-progress:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-progress:where(b,strong).sc-db-progress{font-weight:bolder}.sc-db-progress:where(code,kbd.sc-db-progress,samp).sc-db-progress{font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(small){font-size:80%}.sc-db-progress:where(table){border-color:currentColor;text-indent:0}.sc-db-progress:where(button,input.sc-db-progress,select).sc-db-progress{margin:0}.sc-db-progress:where(button){text-transform:none}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress{-webkit-appearance:button}.sc-db-progress:where(progress){vertical-align:baseline}.sc-db-progress:where(select){text-transform:none}.sc-db-progress:where(textarea){margin:0}.sc-db-progress:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-progress::-webkit-inner-spin-button,.sc-db-progress::-webkit-outer-spin-button{height:auto}.sc-db-progress::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-progress::-webkit-search-decoration{-webkit-appearance:none}.sc-db-progress::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focus-inner{border-style:none;padding:0}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focusring{outline:1px dotted ButtonText}.sc-db-progress:where(:-moz-ui-invalid){box-shadow:none}.sc-db-progress:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-progress:where(dialog:not([open])){display:none}.sc-db-progress:where(summary){display:list-item}html.sc-db-progress,.sc-db-progress-h{box-sizing:border-box}*.sc-db-progress,.sc-db-progress::before,.sc-db-progress::after{box-sizing:inherit}img.sc-db-progress,embed.sc-db-progress,iframe.sc-db-progress,object.sc-db-progress,video.sc-db-progress{height:auto;max-width:100%}iframe.sc-db-progress{border:0}nav.sc-db-progress ol.sc-db-progress,nav.sc-db-progress ul.sc-db-progress,[role=navigation].sc-db-progress ol.sc-db-progress,[role=navigation].sc-db-progress ul.sc-db-progress{list-style:none;margin:0;padding:0}.sc-db-progress:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body.sc-db-progress,.sc-db-progress-h,div.sc-db-progress,button.sc-db-progress,input.sc-db-progress,select.sc-db-progress,textarea.sc-db-progress{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-progress{color:inherit}.elm-progress.sc-db-progress progress.sc-db-progress{--progress-value--backgroundColor:#ec0016}.elm-progress.sc-db-progress progress.sc-db-progress{appearance:none;background-color:#fcfdfd;border:none;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);height:0.25rem;vertical-align:middle}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-bar{background-color:#fcfdfd}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-value{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-moz-progress-bar{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-ms-fill{background-color:var(--progress-value--backgroundColor);border:none}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-webkit-progress-value{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-moz-progress-bar{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-ms-fill{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:2.1s;animation-iteration-count:infinite;animation-name:elmProgressMoveIndeterminate;animation-timing-function:linear;animation-timing-function:cubic-bezier(0.65, 0.815, 0.735, 0.395);background-color:#fcfdfd;background-image:linear-gradient(to right, #ec0016 100%, #fcfdfd 100%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}@media (prefers-reduced-motion: reduce){.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:15s}}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-webkit-progress-bar{background-color:transparent}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-moz-progress-bar{background-color:transparent}@supports (background: conic-gradient(#000, #fff)){.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress{--fill:calc(var(--progress-conic) * 1%);background:conic-gradient(var(--progress-value--backgroundColor) var(--fill), #fff 0);border:0;border-radius:50%;height:4.6875rem;width:4.6875rem}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-inner-element,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-bar,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-value{display:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-moz-progress-bar{background:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+output.sc-db-progress{align-items:center;background:#fdfdfd;border-radius:50%;box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.08), inset 0 5px 30px rgba(0, 0, 0, 0.05);display:block;display:flex;height:3.4375rem;justify-content:center;position:absolute;transform:translate(0.625rem, -4.0625rem);width:3.4375rem}}@keyframes elmProgressMoveIndeterminate{0%{background-position:-35% 0;background-size:35% 100%}60%{background-position:101% 0;background-size:65% 100%}100%{background-position:101% 0;background-size:1% 100%}}';export{o as db_progress}