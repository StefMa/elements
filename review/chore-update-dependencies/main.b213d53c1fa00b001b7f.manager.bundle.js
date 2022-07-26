(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[179],{84129:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32605),_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65316),version=__webpack_require__(4147).version;_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.KP.setConfig({theme:(0,_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__.Ue)({base:"light",brandTitle:name+"DB-UI Elements "+version,colorSecondary:"#EC0016",fontBase:'"DB Screen Sans", "Helvetica", "Arial", sans-serif',textColor:"#131821",appBg:"#FDFDFD"})})},24654:()=>{},4147:module=>{"use strict";module.exports=JSON.parse('{"name":"@db-ui/elements-monorepo","version":"0.14.4","scripts":{"prepare":"cd showcase/react-showcase && npm i && cd ../angular-showcase && npm i && cd ../vue-showcase && npm i && cd ../playground-showcase && npm i && cd ../../ && husky install","start":"concurrently  \\"npm run build.watch.enterprise --workspace=@db-ui/elements\\" \\"npm run start:storybook\\"","start:storybook":"start-storybook -c .storybook -p 6006 --ci","watch:showcase:react":"concurrently  \\"npm run build.watch.local --workspace=@db-ui/elements\\" \\"npm run watch --workspace=@db-ui/react-elements\\"","build":"npm run build.enterprise --workspace=@db-ui/elements","build:storybook":"build-storybook -c .storybook -o out","build:local:angular":"node scripts/build angular","build:local:react":"node scripts/build react","build:local:vue":"node scripts/build vue","test":"npm run test --workspace=@db-ui/elements","cypress":"npx cypress run","cypress:watch":"npx cypress open","cypress:ci":"start-server-and-test start:storybook http://localhost:6006 cypress","cypress:full":"node scripts/build angular,playground,react,reactwind,vue withShowcase && concurrently  \\"npm run cypress:watch\\" \\"npm run start:storybook\\"","release":"np","release:feature":"np prerelease --any-branch","lint:eslint":"eslint . --ext .ts,.js --ignore-path .gitignore  --ignore-path .eslintignore && npm run lint --workspace=@db-ui/elements","generate":"npm run generate --workspace=@db-ui/elements"},"workspaces":["packages/*"],"devDependencies":{"@babel/core":"7.17.5","@babel/preset-env":"^7.16.11","@babel/preset-react":"^7.16.7","@babel/preset-typescript":"^7.16.7","@commitlint/cli":"16.2.1","@commitlint/config-conventional":"16.2.1","@cypress/code-coverage":"^3.9.12","@storybook/addon-actions":"6.5.9","@storybook/addon-controls":"6.5.9","@storybook/addon-docs":"6.5.9","@storybook/addon-essentials":"6.5.9","@storybook/addon-links":"6.5.9","@storybook/builder-webpack5":"^6.5.9","@storybook/html":"6.5.9","@storybook/manager-webpack5":"^6.5.9","@storybook/react":"6.5.9","@storybook/web-components":"6.5.9","@types/estree":"0.0.51","@typescript-eslint/eslint-plugin":"^5.17.0","@typescript-eslint/parser":"^5.17.0","axios":"^0.27.2","babel-loader":"8.2.3","babel-plugin-istanbul":"^6.1.1","concurrently":"7.0.0","cpr":"3.0.1","cypress":"9.5.0","eslint":"8.9.0","eslint-config-prettier":"8.4.0","eslint-plugin-react":"^7.29.4","eslint-plugin-storybook":"0.6.1","eslint-plugin-vue":"^8.5.0","file-system-cache":"1.0.5","husky":"7.0.4","iframe-resizer":"4.3.2","jest-config":"27.5.1","node-mv":"^0.1.3","np":"7.6.1","prettier":"2.5.1","pretty-quick":"3.1.3","react-docgen-typescript-loader":"^3.7.2","replace-in-file":"6.3.5","start-server-and-test":"1.14.0","typescript":"4.5.5","validate-branch-name":"^1.3.0","xml":"1.0.1"},"validate-branch-name":{"pattern":"^((fix|feat|bugfix|feature|chore)\\\\-[a-zA-Z0-9\\\\-]+)$","errorMsg":"There is something wrong with your branch name. You should rename your branch to a valid name and try again. See the Pattern below."},"repository":{"type":"git","url":"https://github.com/db-ui/elements.git"},"license":"Apache-2.0","publishConfig":{"registry":"https://registry.npmjs.org/"},"homepage":"https://db-ui.github.io/elements/","engines":{"npm":"^8.1.0"}}')}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[546],(()=>(__webpack_exec__(37707),__webpack_exec__(84129),__webpack_exec__(7967),__webpack_exec__(80048),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(15887),__webpack_exec__(59288))));__webpack_require__.O()}]);