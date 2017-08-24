module.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=i(o),a=n(3),l=i(a),u=n(4),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),c=novi.react.React,p={name:"novi-plugin-countdown",title:"Novi Countdown",description:"Novi Countdown description",version:"1.0.0",dependencies:{},defaults:{querySelector:".novi-countdown"},ui:{editor:[r.default],settings:c.createElement(l.default,null)},excerpt:s.validCountdown};novi.plugins.register(p)},function(e,t,n){"use strict";function i(e,t){var n=t[0];n.type===n.initType&&n.time===n.initTime||(novi.element.setAttribute(n.element,"data-type",n.type),novi.element.setAttribute(n.element,"data-time",n.time),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=novi.react.React,l=novi.ui.icon,u=a.createElement("svg",{viewBox:"0 0 20 20"},a.createElement("path",{d:"M15.51 5.49c-1.487-1.487-3.428-2.355-5.51-2.475v-1.015h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.015c-2.082 0.12-4.023 0.988-5.51 2.475-1.605 1.605-2.49 3.74-2.49 6.010s0.884 4.405 2.49 6.010c1.605 1.605 3.74 2.49 6.010 2.49s4.405-0.884 6.010-2.49c1.605-1.605 2.49-3.74 2.49-6.010s-0.884-4.405-2.49-6.010zM10 18.983v-0.483c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.483c-3.738-0.247-6.736-3.245-6.983-6.983h0.483c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.483c0.247-3.738 3.245-6.736 6.983-6.983v0.483c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.483c3.738 0.247 6.736 3.245 6.983 6.983h-0.483c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.483c-0.247 3.738-3.245 6.736-6.983 6.983z"}),a.createElement("path",{d:"M9.5 12c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"})),s={trigger:a.createElement(l,null,u),tooltip:"Change Countdown settings",header:[a.createElement(l,null,u),a.createElement("span",null,"Countdown Settings")],body:[a.createElement(r.default,null)],closeIcon:"submit",title:"Countdown settings",onSubmit:i,width:360,height:160};t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=novi.ui.radioGroup,l=novi.ui.input,u=novi.react.Component,s=novi.react.React,c=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=novi.element.getAttribute(e.element,"data-type")||null,a=novi.element.getAttribute(e.element,"data-time")||null;return o.state={type:r,initType:r,time:a,initTime:a,element:e.element,isValid:!0},o._handleTimeChange=o._handleTimeChange.bind(o),o._handleRadioButtonClick=o._handleRadioButtonClick.bind(o),o}return o(t,e),r(t,[{key:"render",value:function(){var e=this.state.isValid?null:{borderColor:"#ce3849"},t={position:"absolute",top:0,right:0,marginTop:25,color:"#ce3849",pointerEvents:"none",opacity:this.state.isValid?0:1};return s.createElement("div",{className:"countdown-plugin-wrap",style:{padding:"0 12px",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",color:"#6E778A"}},s.createElement("p",{className:"novi-label",style:{marginTop:"0"}},"Type:"),s.createElement(a,{options:["until","since"],value:this.state.type,onChange:this._handleRadioButtonClick}),s.createElement("div",{style:{position:"relative"}},s.createElement("p",{className:"novi-label",style:{marginTop:15}},"Time (Example - 1 Jan 1970 00:00):"),s.createElement(l,{onChange:this._handleTimeChange,value:this.state.time,style:e}),s.createElement("span",{className:"countdown-warning",style:t},"Invalid time format!")))}},{key:"_handleRadioButtonClick",value:function(e){this.setState({type:e})}},{key:"_handleTimeChange",value:function(e){var t=this._validateTime(e.target.value);this.setState({time:e.target.value,isValid:t})}},{key:"_validateTime",value:function(e){return/^\s?(?:[1-9]|0[1-9]|[1-2]\d|3[0-1])\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}\s+(?:[0-1]\d|2[0-3]):(?:[0-5]\d)\s?$/i.exec(e)}}]),t}(u);t.default=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=novi.react.React,l=novi.react.Component,u=novi.ui.input,s=novi.ui.button,c=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={settings:e.settings},o.saveSettings=o.saveSettings.bind(o),o.onChange=o.onChange.bind(o),o}return o(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Countdown Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(u,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(s,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-countdown",this.state.settings)}}]),t}(l);t.default=c},function(e,t){"use strict";function n(e){return!!e&&i(e)}function i(e){return novi.element.getAttribute(e,"data-type")&&novi.element.getAttribute(e,"data-time")}Object.defineProperty(t,"__esModule",{value:!0}),t.validCountdown=n}]);