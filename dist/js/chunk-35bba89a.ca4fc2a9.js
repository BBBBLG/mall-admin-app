(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35bba89a"],{"4fde":function(o,t,e){"use strict";e("7ce0")},"7ce0":function(o,t,e){},a55b:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"login"},[e("a-form-model",o._b({ref:"loginForm",attrs:{model:o.loginForm,rules:o.rules}},"a-form-model",o.layout,!1),[e("a-form-model-item",{attrs:{"has-feedback":"",label:"邮箱：",prop:"email"}},[e("a-input",{attrs:{placeholder:"邮箱"},model:{value:o.loginForm.email,callback:function(t){o.$set(o.loginForm,"email",t)},expression:"loginForm.email"}})],1),e("a-form-model-item",{attrs:{"has-feedback":"",label:"密码：",prop:"password"}},[e("a-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:o.loginForm.password,callback:function(t){o.$set(o.loginForm,"password",t)},expression:"loginForm.password"}})],1),e("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[e("a-button",{attrs:{type:"primary"},on:{click:function(t){return o.submitForm("loginForm")}}},[o._v(" 登录 ")]),e("router-link",{attrs:{tag:"a-button",to:"registered"}},[o._v("注册")])],1)],1)],1)},a=[],n=e("c24f"),s={data:function(){var o=/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,t=function(t,e,r){return e?o.test(e)?r():r(new Error("邮箱格式不正确")):r(new Error("请输入邮箱"))},e=function(o,t,e){""===t?e(new Error("请输入密码")):e()};return{loginForm:{password:"",email:""},rules:{password:[{validator:e,trigger:"change"}],email:[{validator:t,trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:{submitForm:function(o){var t=this;this.$refs[o].validate((function(o){return!!o&&(n["a"].login(t.loginForm).then((function(o){t.$store.dispatch("setUserInfo",o),t.$message.success("登陆成功，即将跳转首页！"),setTimeout((function(){t.$router.push({name:"/statistics"})}),1500)})).catch((function(o){t.$message.error(o)})),!0)}))}}},i=s,l=(e("4fde"),e("2877")),u=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports},c24f:function(o,t,e){"use strict";var r=e("bb36");t["a"]={login:function(o){return r["a"].post("/passport/login",o)},registered:function(o){return r["a"].post("/passport/logon",o)},getCode:function(o){return r["a"].post("/passport/getCode",o)}}}}]);
//# sourceMappingURL=chunk-35bba89a.ca4fc2a9.js.map