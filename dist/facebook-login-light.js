!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLoginLight=t(require("react")):e.FacebookLoginLight=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(3),p=n(s),u=function(e){function t(e){r(this,t);var o=i(this,Object.getPrototypeOf(t).call(this,e));return o.responseApi=function(e){window.FB.api("/me",{fields:o.props.fields},function(t){Object.assign(t,e),o.props.callback(t)})},o.checkLoginState=function(e){e.authResponse?o.responseApi(e.authResponse):o.props.callback&&o.props.callback({status:e.status})},o.click=function(){var e=o.props,t=e.scope,n=e.appId;navigator.userAgent.match("CriOS")?window.location.href="https://www.facebook.com/dialog/oauth?client_id="+n+"&redirect_uri="+window.location.href+"&state=facebookdirect&"+t:window.FB.login(o.checkLoginState,{scope:t})},o}return c(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,c=t.autoLoad,a=t.language,s=document.createElement("div");s.id="fb-root",document.body.appendChild(s),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),(c||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginState)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+a+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.children;return p["default"].createElement("button",{className:t,onClick:this.click},o)}}]),t}(p["default"].Component);u.propTypes={className:s.PropTypes.string,children:s.PropTypes.node,callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,scope:s.PropTypes.string,typeButton:s.PropTypes.string,autoLoad:s.PropTypes.bool,fields:s.PropTypes.string,version:s.PropTypes.string,language:s.PropTypes.string},u.defaultProps={children:null,typeButton:"button",scope:"public_profile,email",xfbml:!1,cookie:!1,fields:"name",version:"2.3",language:"en_US"},t["default"]=u},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(t,o){t.exports=e}])});