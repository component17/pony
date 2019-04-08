webpackJsonp([2],{"+fZm":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),M={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},M,!1,function(t){i("UBda")},null,null).exports,c=i("/ocq"),a={components:{selector:i("j1aB").default},data:function(){return{networks:[],canvasBlockWidth:0,cells:[],isLoading:!0,width:0}},created:function(){var t=this;this.$axios.get("/network").then(function(s){t.networks=s.data}),this.$axios.get("/cells").then(function(s){t.canvasBlockWidth=t.$refs.canvas.offsetWidth,console.log(t.canvasBlockWidth),t.cells=s.data,t.isLoading=!1})},mounted:function(){var t=this;window.addEventListener("resize",function(){var s=t.$refs.canvas;console.log(s),console.log(s.offsetWidth),t.canvasBlockWidth=s.offsetWidth},!1)},methods:{}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"settings"},[e("h3",{staticClass:"ports-list"},[t._v("Список портов")]),t._v(" "),t._l(4,function(s){return e("div",{staticClass:"card"},[e("div",{staticClass:"header"},[e("span",[t._v("Порт "+t._s(s))]),t._v(" "),e("router-link",{attrs:{to:"/port/"+(s-1)}},[e("div",{staticClass:"set-port"},[e("img",{attrs:{src:"",alt:""}}),t._v(" "),e("span",[e("span",{staticClass:"mdi mdi-settings-outline"}),t._v("\n                                Настроить порт\n                            ")])])])],1),t._v(" "),e("div",{ref:"canvas",refInFor:!0,staticClass:"canvas"},[t.isLoading?t._e():e("selector",{attrs:{width:t.canvasBlockWidth,cells:t.cells.filter(function(t){return t.port===t-1}),lamps:60}})],1)])})],2),t._v(" "),e("div",{staticClass:"info"},[e("h3",[t._v("Сетевые интерфейсы")]),t._v(" "),t._l(t.networks,function(s,M){return e("div",{staticClass:"info__network"},[e("img",{staticClass:"info__network-img",attrs:{src:i("UBf1"),alt:""}}),t._v(" "),e("div",[e("p",{staticClass:"info__network-name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"info__network-ip"},[t._v(t._s(s.ip))])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header-block"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:i("Rwyp"),height:"40"}}),this._v(" "),s("h1",[this._v("Настройка контроллера")])])])}]};var r=i("VU/8")(a,n,!1,function(t){i("QUUk")},null,null).exports,l={components:{selector:i("j1aB").default},data:function(){return{canvasBlockWidth:0,isActive:!1,lamps:60,isLoading:!0,cells:[]}},created:function(){var t=this;this.$axios.get("/cells-on-port/"+this.$route.params.id).then(function(s){t.canvasBlockWidth=t.$refs.canvas.offsetWidth,t.cells=s.data,t.isLoading=!1})},methods:{saveCells:function(){var t=this;console.log("save cells",this.cells),this.cells.map(function(s){s.port=+t.$route.params.id}),this.$axios.post("/cells-on-port/"+this.$route.params.id,this.cells).then(function(t){console.log(t.data)})}}},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content"},[i("div",{staticClass:"header-block"},[i("div",{staticClass:"title title-settings"},[i("h1",[t._v("Порт "+t._s(+t.$route.params.id+1))]),t._v(" "),i("div",{staticClass:"button-block"},[i("button",{staticClass:"settings-button save",on:{click:t.saveCells}},[i("span",{staticClass:"mdi mdi-content-save"}),t._v(" "),i("p",[t._v("Сохранить")])]),t._v(" "),i("router-link",{staticClass:"settings-button",attrs:{to:"/"}},[i("span",{staticClass:"mdi mdi-close"})])],1)]),t._v(" "),i("p",[t._v("Задайте количество пикселей (светодиодов) в ленте и выберите область, под которой будет размещена\n            ячейка. Редактор позволяет изменять полодение блоков, менять их размеры, задавать цвет подстветки и\n            добавлять описание ячейки.")])]),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"settings"},[i("h3",[t._v("Количество пикселей (светодиодов) в ленте:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.lamps,expression:"lamps"}],staticClass:"pixel-count",attrs:{type:"number"},domProps:{value:t.lamps},on:{input:function(s){s.target.composing||(t.lamps=s.target.value)}}}),t._v(" "),i("p",{staticClass:"warning"},[t._v("ВНИМАНИЕ! При изменении количества пикселей в ленте все установленные\n                настройки будут удалены.")]),t._v(" "),i("div",{},[i("div",{ref:"canvas",staticClass:"canvas"},[t.isLoading?t._e():i("selector",{attrs:{width:t.canvasBlockWidth-50,lamps:t.lamps,cells:t.cells,isEdited:""},on:{"update:cells":function(s){t.cells=s}}})],1)])])])])},staticRenderFns:[]};var u=i("VU/8")(l,h,!1,function(t){i("cs5I")},null,null).exports;e.a.use(c.a);var N=new c.a({mode:"history",routes:[{path:"/",name:"Index",component:r},{path:"/port/:id",name:"Settings",component:u}]}),j=(i("csSS"),i("mtWM")),z=i.n(j);i.e(0).then(i.bind(null,"CuRo")),z.a.defaults.baseURL="/api",e.a.prototype.$axios=z.a,e.a.config.productionTip=!1,new e.a({el:"#app",router:N,components:{App:o},template:"<App/>",iconfont:"mdi"})},QUUk:function(t,s){},Rwyp:function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg2IDQ4NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg2IDQ4NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggaWQ9IlhNTElEXzQ5XyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjsiIGQ9Ik0yOTguNCw0MjQuN3YxNC4yYzAsMTEuMy04LjMsMjAuNy0xOS4xLDIyLjNsLTMuNSwxMi45Yy0xLjksNy04LjIsMTEuOS0xNS41LDExLjloLTM0LjcNCgkJYy03LjMsMC0xMy42LTQuOS0xNS41LTExLjlsLTMuNC0xMi45Yy0xMC45LTEuNy0xOS4yLTExLTE5LjItMjIuNHYtMTQuMmMwLTcuNiw2LjEtMTMuNywxMy43LTEzLjdoODMuNQ0KCQlDMjkyLjMsNDExLDI5OC40LDQxNy4xLDI5OC40LDQyNC43eiBNMzYyLjcsMjMzLjNjMCwzMi4zLTEyLjgsNjEuNi0zMy42LDgzLjFjLTE1LjgsMTYuNC0yNiwzNy4zLTI5LjQsNTkuNg0KCQljLTEuNSw5LjYtOS44LDE2LjctMTkuNiwxNi43aC03NC4zYy05LjcsMC0xOC4xLTctMTkuNS0xNi42Yy0zLjUtMjIuMy0xMy44LTQzLjUtMjkuNi01OS44Yy0yMC40LTIxLjItMzMuMS01MC0zMy40LTgxLjcNCgkJYy0wLjctNjYuNiw1Mi4zLTEyMC41LDExOC45LTEyMUMzMDguNywxMTMuMSwzNjIuNywxNjYuOSwzNjIuNywyMzMuM3ogTTI1Ni41LDE2MC44YzAtNy40LTYtMTMuNS0xMy41LTEzLjUNCgkJYy00Ny42LDAtODYuNCwzOC43LTg2LjQsODYuNGMwLDcuNCw2LDEzLjUsMTMuNSwxMy41YzcuNCwwLDEzLjUtNiwxMy41LTEzLjVjMC0zMi44LDI2LjctNTkuNCw1OS40LTU5LjQNCgkJQzI1MC41LDE3NC4zLDI1Ni41LDE2OC4zLDI1Ni41LDE2MC44eiBNMjQzLDc0LjNjNy40LDAsMTMuNS02LDEzLjUtMTMuNVYxMy41YzAtNy40LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2NDcuMw0KCQlDMjI5LjUsNjguMywyMzUuNiw3NC4zLDI0Myw3NC4zeiBNODQuMSwyMzMuMmMwLTcuNC02LTEzLjUtMTMuNS0xMy41SDIzLjNjLTcuNCwwLTEzLjUsNi0xMy41LDEzLjVjMCw3LjQsNiwxMy41LDEzLjUsMTMuNWg0Ny4zDQoJCUM3OC4xLDI0Ni43LDg0LjEsMjQwLjcsODQuMSwyMzMuMnogTTQ2Mi43LDIxOS43aC00Ny4zYy03LjQsMC0xMy41LDYtMTMuNSwxMy41YzAsNy40LDYsMTMuNSwxMy41LDEzLjVoNDcuMw0KCQljNy40LDAsMTMuNS02LDEzLjUtMTMuNUM0NzYuMiwyMjUuOCw0NzAuMiwyMTkuNyw0NjIuNywyMTkuN3ogTTExMS42LDM0NS42bC0zMy41LDMzLjVjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xDQoJCWMyLjYsMi42LDYuMSwzLjksOS41LDMuOXM2LjktMS4zLDkuNS0zLjlsMzMuNS0zMy41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xQzEyNS40LDM0MC4zLDExNi44LDM0MC4zLDExMS42LDM0NS42eiBNMzY0LjksMTI0LjgNCgkJYzMuNCwwLDYuOS0xLjMsOS41LTMuOWwzMy41LTMzLjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC0zMy41LDMzLjVjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xDQoJCUMzNTgsMTIzLjUsMzYxLjQsMTI0LjgsMzY0LjksMTI0Ljh6IE0xMTEuNiwxMjAuOGMyLjYsMi42LDYuMSwzLjksOS41LDMuOXM2LjktMS4zLDkuNS0zLjljNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMOTcuMSw2OC4yDQoJCWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xTDExMS42LDEyMC44eiBNMzc0LjQsMzQ1LjZjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMQ0KCQlsMzMuNSwzMy41YzIuNiwyLjYsNi4xLDMuOSw5LjUsMy45czYuOS0xLjMsOS41LTMuOWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMUwzNzQuNCwzNDUuNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},UBda:function(t,s){},UBf1:function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtYWluLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTUwLjAwMDAwMCwgLTQ5MC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNC1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjAuMDAwMDAwLCA0NTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iNzY4MDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjAwMDAwMCwgMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjAyOTA1NTUsMjAuNzQ1OTU3OSBMMjMuMzg1NDc3NSwyMC43NDU5NTc5IEMyNC4yNzU2NjY1LDIwLjc0NTk1NzkgMjUsMjAuMDA5MTk2NSAyNSwxOS4xMDM3MzM4IEwyNSwxNS42NDIyMjQxIEMyNSwxNC43MzY3NjE0IDI0LjI3NTY2NjUsMTQgMjMuMzg1NDc3NSwxNCBMMTkuMDI5MDU1NSwxNCBMMS42MTQ1MjI0OCwxNCBDMC43MjQzMzM0OTYsMTQgMCwxNC43MzY3NjE0IDAsMTUuNjQyMjI0MSBMMCwxOS4xMDM3MzM4IEMwLDIwLjAwOTE5NjUgMC43MjQzMzM0OTYsMjAuNzQ1OTU3OSAxLjYxNDUyMjQ4LDIwLjc0NTk1NzkgTDEwLjg5OTA1NDIsMjAuNzQ1OTU3OSBMMTAuODk5MDU0MiwyMS41NjQyMzM0IEwxLjYxNDUyMjQ4LDIxLjU2NDIzMzQgQzAuNzI0MzMzNDk2LDIxLjU2NDIzMzQgMCwyMi4zMDA5OTQ4IDAsMjMuMjA2NDU3NCBMMCwyNi42Njc5NjcyIEMwLDI3LjU3MzQyOTggMC43MjQzMzM0OTYsMjguMzEwMTkxMiAxLjYxNDUyMjQ4LDI4LjMxMDE5MTIgTDEwLjg5OTA1NDIsMjguMzEwMTkxMiBMMTAuODk5MDU0MiwyOS4xMjgzMTc0IEwxLjYxNDUyMjQ4LDI5LjEyODMxNzQgQzAuNzI0MzMzNDk2LDI5LjEyODMxNzQgMCwyOS44NjUwNzg5IDAsMzAuNzcwNTQxNSBMMCwzNC4yMzIwNTEyIEMwLDM1LjEzNzUxMzkgMC43MjQzMzM0OTYsMzUuODc0Mjc1MyAxLjYxNDUyMjQ4LDM1Ljg3NDI3NTMgTDEwLjg5OTA1NDIsMzUuODc0Mjc1MyBMMTAuODk5MDU0MiwzNy42Mjk4MTI4IEMxMC4yMjgxNDY3LDM3LjkxMTA4MSA5LjY2OTgxNTQ3LDM4LjQxMzkwMDIgOS4zMTE1MzgyNiwzOS4wNDgzOTU4IEwwLjc0NzY3MDY4NCwzOS4wNDgzOTU4IEMwLjM0MjQyNTU0MSwzOS4wNDgzOTU4IDAuMDEzNzk2ODI4NSwzOS4zODI1MTM4IDAuMDEzNzk2ODI4NSwzOS43OTQ4NjEzIEwwLjAxMzc5NjgyODUsNDEuNTg2Mzc4NSBDMC4wMTM3OTY4Mjg1LDQxLjk5ODcyNiAwLjM0MjQyNTU0MSw0Mi4zMzI4NDQgMC43NDc2NzA2ODQsNDIuMzMyODQ0IEw5LjMxMTUzODI2LDQyLjMzMjg0NCBDOS44NzMyNDUzMSw0My4zMjc4ODI1IDEwLjkyNzgyMiw0NCAxMi4xMzQ0NTc0LDQ0IEMxMy4zNDEwOTI4LDQ0IDE0LjM5NTY2OTYsNDMuMzI3ODgyNSAxNC45NTcyMjk4LDQyLjMzMjg0NCBMMjQuMjY2MTI2MSw0Mi4zMzI4NDQgQzI0LjY3MTM3MTMsNDIuMzMyODQ0IDI1LDQxLjk5ODcyNiAyNSw0MS41ODYzNzg1IEwyNSwzOS43OTQ4NjEzIEMyNSwzOS4zODI1MTM4IDI0LjY3MTM3MTMsMzkuMDQ4Mzk1OCAyNC4yNjYxMjYxLDM5LjA0ODM5NTggTDE0Ljk1NzIyOTgsMzkuMDQ4Mzk1OCBDMTQuNjE2NTY1NiwzOC40NDQ5NTMxIDE0LjA5NDkyODEsMzcuOTYwOTQ0OSAxMy40Njc2MTI3LDM3LjY3MzEwNzggTDEzLjQ2NzYxMjcsMzUuODc0Mjc1MyBMMTkuMDI5MDU1NSwzNS44NzQyNzUzIEwyMy4zODU0Nzc1LDM1Ljg3NDI3NTMgQzI0LjI3NTY2NjUsMzUuODc0Mjc1MyAyNSwzNS4xMzc1MTM5IDI1LDM0LjIzMjA1MTIgTDI1LDMwLjc3MDU0MTUgQzI1LDI5Ljg2NTA3ODkgMjQuMjc1NjY2NSwyOS4xMjgzMTc0IDIzLjM4NTQ3NzUsMjkuMTI4MzE3NCBMMTkuMDI5MDU1NSwyOS4xMjgzMTc0IEwxMy40Njc2MTI3LDI5LjEyODMxNzQgTDEzLjQ2NzYxMjcsMjguMzEwMTkxMiBMMTkuMDI5MDU1NSwyOC4zMTAxOTEyIEwyMy4zODU0Nzc1LDI4LjMxMDE5MTIgQzI0LjI3NTY2NjUsMjguMzEwMTkxMiAyNSwyNy41NzM0Mjk4IDI1LDI2LjY2Nzk2NzIgTDI1LDIzLjIwNjQ1NzQgQzI1LDIyLjMwMDk5NDggMjQuMjc1NjY2NSwyMS41NjQyMzM0IDIzLjM4NTQ3NzUsMjEuNTY0MjMzNCBMMTkuMDI5MDU1NSwyMS41NjQyMzM0IEwxMy40Njc2MTI3LDIxLjU2NDIzMzQgTDEzLjQ2NzYxMjcsMjAuNzQ1OTU3OSBMMTkuMDI5MDU1NSwyMC43NDU5NTc5IFogTTIzLjUzMjI1MjMsMTUuNjQyMjI0MSBMMjMuNTMyMjUyMywxOS4xMDM3MzM4IEMyMy41MzIyNTIzLDE5LjE4NjE0MzYgMjMuNDY2MzUwNCwxOS4yNTMwMjY5IDIzLjM4NTQ3NzUsMTkuMjUzMDI2OSBMMTkuNzYyOTI5NCwxOS4yNTMwMjY5IEwxOS43NjI5Mjk0LDE1LjQ5MjkzMSBMMjMuMzg1NDc3NSwxNS40OTI5MzEgQzIzLjQ2NjM1MDQsMTUuNDkyOTMxIDIzLjUzMjI1MjMsMTUuNTU5ODE0MyAyMy41MzIyNTIzLDE1LjY0MjIyNDEgWiBNMjMuNTMyMjUyMywzMC43NzA1NDE1IEwyMy41MzIyNTIzLDM0LjIzMjA1MTIgQzIzLjUzMjI1MjMsMzQuMzE0NDYxIDIzLjQ2NjM1MDQsMzQuMzgxMzQ0MyAyMy4zODU0Nzc1LDM0LjM4MTM0NDMgTDE5Ljc2MjkyOTQsMzQuMzgxMzQ0MyBMMTkuNzYyOTI5NCwzMC42MjEyNDg0IEwyMy4zODU0Nzc1LDMwLjYyMTI0ODQgQzIzLjQ2NjM1MDQsMzAuNjIxMjQ4NCAyMy41MzIyNTIzLDMwLjY4ODEzMTcgMjMuNTMyMjUyMywzMC43NzA1NDE1IFogTTIzLjUzMjI1MjMsMjMuMjA2NDU3NCBMMjMuNTMyMjUyMywyNi42Njc5NjcyIEMyMy41MzIyNTIzLDI2Ljc1MDM3NyAyMy40NjYzNTA0LDI2LjgxNzI2MDMgMjMuMzg1NDc3NSwyNi44MTcyNjAzIEwxOS43NjI5Mjk0LDI2LjgxNzI2MDMgTDE5Ljc2MjkyOTQsMjMuMDU3MTY0MyBMMjMuMzg1NDc3NSwyMy4wNTcxNjQzIEMyMy40NjYzNTA0LDIzLjA1NzE2NDMgMjMuNTMyMjUyMywyMy4xMjQwNDc2IDIzLjUzMjI1MjMsMjMuMjA2NDU3NCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},cs5I:function(t,s){},csSS:function(t,s){},j1aB:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("BO1k"),M=i.n(e),o=i("mvHQ"),c=i.n(o),a=i("M4fF"),n={name:"HelloWorld",props:{isEdited:{type:Boolean,default:!1},width:{type:Number,required:!0},lamps:{type:Number},cells:{type:Array}},watch:{lamps:function(){this.mouseLeave(),this.markers=[],this.blocks=this.cells},blocks:{handler:function(t){this.$emit("update:cells",t)},deep:!0},width:function(t){this.canvas.width=this.width,this.sceneWidth=this.width-20}},data:function(){return{style:{scene:{padding:0},label:{font:"12px Arial",padding:{top:10,left:20}},guideLine:"#e0e0e0",activeColor:"#4a4a4a"},blocks:this.cells,canvas:null,scene:{x:10,y:10,height:100},sceneWidth:this.width-20,height:120,ctx:null,colorPicker:{r:255,g:0,b:0},cellName:"Без имени",mouse:{x:0,y:0,vx:0,vy:0,old:{x:0,y:0,cell:0},cell:0,width:1,height:1,isDown:!1,dragStart:!1,resizeStart:!1},create:{start:!1,end:!1},deltaX:0,active:!1,markers:[],activeMarker:!1}},mounted:function(){!function(){for(var t=0,s=["ms","moz","webkit","o"],i=0;i<s.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[s[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[i]+"CancelAnimationFrame"]||window[s[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(s,i){var e=(new Date).getTime(),M=Math.max(0,16-(e-t)),o=window.setTimeout(function(){s(e+M)},M);return t=e+M,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),this.canvas=this.$refs.canvas,this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.start(),console.log({step:this.step})},computed:{step:function(){return~~this.sceneWidth/this.lamps}},methods:{deleteRow:function(t){this.blocks.splice(t,1)},getStyle:function(t){return"\n                position: absolute;\n                left: "+(this.scene.x+t.x)+"px;\n                top: "+(this.scene.y+t.y+t.height)+"px;\n                width: "+t.width+"px;\n                font-size: 14px;"},save:function(t,s){this.$set(this.blocks,+t,s)},loop:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawScene(),this.drawGuideLines(),this.drawRect(),this.drawActive(),this.drawMarkers(),this.drawCreate(),window.requestAnimationFrame(this.loop)},mouseMove:function(t){this.mouse.old={x:this.mouse.x,y:this.mouse.y},this.mouse.old.cell=this.mouse.cell,this.mouse.x=t.offsetX,this.mouse.y=t.offsetY,this.mouse.vx=this.mouse.x-this.mouse.old.x,this.mouse.vy=this.mouse.y-this.mouse.old.y,this.mouse.cell=~~(this.mouse.x/this.step),this.mouse.vc=this.mouse.cell-this.mouse.old.cell,this.resize(),this.dragMove(),this.eventCreateMove()},mouseDown:function(){this.mouse.isDown=!0,this.resizeStart(),this.dragStart(),this.createStart()},mouseUp:function(){var t=this.createEnd();this.mouse.isDown=!1,t||this.dragStop()},mouseLeave:function(){this.dragStop(),this.mouse.isDown=!1,this.create.start=!1,this.create.end=!1},deleteBlock:function(){if(0!==this.markers.length){var t=this.markers[0].parent;this.blocks.splice(+t,1),this.dragStop(),this.markers=[]}},isCollision:function(t,s){return t.x<s.x+s.width&&t.x+t.width>s.x&&t.y<s.y+s.height&&t.y+t.height>s.y},createStart:function(){this.mouse.dragStart||this.mouse.resizeStart||this.blocksCollision(this.mouse)||!this.mouse.isDown||!this.isEdited||(this.create.start=this.mouse.cell,this.eventCreateStart())},createEnd:function(){var t=!1;if(!this.mouse.dragStart&&!this.mouse.resizeStart&&this.create.rect&&this.isEdited&&this.create.start)return this.create.end=this.mouse.cell,0===this.create.rect.width||this.blocksCollision(this.create.rect)||(this.blocks.push(this.create.rect),this.active=this.blocks.length-1,t=!0,this.setMarker()),t},drawScene:function(){this.ctx.strokeStyle=this.style.guideLine,this.ctx.strokeRect(.5+~~this.scene.x,.5+~~this.scene.y,this.sceneWidth,this.scene.height)},drawCreate:function(){if(this.ctx.fillStyle="rgb("+this.colorPicker.r+","+this.colorPicker.g+","+this.colorPicker.b+")",!this.mouse.dragStart&&!this.mouse.resizeStart&&this.mouse.isDown&&this.isEdited){var t={x:this.create.start*this.step,y:0,width:this.step*(this.create.start-this.mouse.cell-1)*-1,height:this.scene.height,color:this.colorPicker,name:this.cellName};t.width<0?(t.x-=Math.abs(t.width),t.width=Math.abs(t.width),t.x-=this.step,t.width+=2*this.step):this.create.start-this.mouse.cell-1==0&&(t.width=this.step),this.create.rect=t,this.ctx.fillRect(~~this.scene.x+t.x+.5,~~this.scene.y+t.y-1+.5,t.width,t.height+1)}},start:function(){this.loop()},toScene:function(t){var s=JSON.parse(c()(t));return s.x+=this.scene.x,s.y+=this.scene.y,s},dragStart:function(){if(this.mouse.isDown&&!this.mouse.resizeStart){var t=!1;for(var s in this.blocks){var i=this.toScene(this.blocks[s]);if(this.isCollision(this.mouse,i)){this.active=s,this.mouse.dragStart=!0,this.deltaX=this.mouse.x-i.x,this.eventBlockActive(),t=!0,this.setMarker();break}}t||(this.markers=[],this.dragStop())}},drawActive:function(){if(0!==this.markers.length){var t=this.markers[0].parent;this.ctx.strokeStyle=this.style.activeColor;var s=this.blocks[t];this.ctx.strokeRect(~~this.scene.x+s.x+.5,~~this.scene.y+s.y+.5,s.width-1,s.height-1)}},dragMove:function(){if(!this.mouse.resizeStart&&this.mouse.isDown&&this.mouse.dragStart&&!1!==this.active&&this.isEdited){var t=JSON.parse(c()(this.blocks[this.active])),s=this.deltaX%this.step;t.x=this.mouse.cell*this.step-this.deltaX+s,t.x<0&&(t.x=0),t.x+t.width>this.sceneWidth&&(t.x=this.sceneWidth-t.width),this.ctx.fillStyle="red",this.blocksCollision(t)||(this.save(this.active,t),this.eventMove()),this.setMarker()}},dragStop:function(){this.mouse.dragStart=!1,this.active=!1,this.mouse.resizeStart=!1,this.create.start=!1},drawRect:function(){var t=!0,s=!1,i=void 0;try{for(var e,o=M()(this.blocks);!(t=(e=o.next()).done);t=!0){var c=e.value;this.ctx.fillStyle="rgb("+c.color.r+","+c.color.g+","+c.color.b+")",this.ctx.strokeStyle="rgb("+c.color.r+","+c.color.g+","+c.color.b+")";var a={start:~~(c.x/this.step),end:~~((c.x+c.width)/this.step),x:0,width:0};a.widht=(a.end-a.start)*this.step,a.x=.5+~~(this.scene.x+a.start*this.step),this.ctx.fillRect(a.x,~~this.scene.y+c.y+.5,a.widht,c.height)}}catch(t){s=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(s)throw i}}},setMarker:function(){if(!1!==this.active){this.markers=[];var t=this.blocks[this.active],s=8,i=8,e={x:this.scene.x+t.x-s/2,y:this.scene.y+t.y+t.height/2-i/2,width:s,height:i,position:"left",parent:this.active},M={x:this.scene.x+t.x+t.width-s/2,y:this.scene.y+t.y+t.height/2-i/2,width:s,height:i,position:"right",parent:this.active};this.markers.push(e),this.markers.push(M)}},drawMarkers:function(){if(this.isEdited){this.ctx.fillStyle="white",this.ctx.strokeStyle="black";var t=!0,s=!1,i=void 0;try{for(var e,o=M()(this.markers);!(t=(e=o.next()).done);t=!0){var c=e.value;this.ctx.fillRect(.5+~~c.x,.5+~~c.y,c.width,c.height),this.ctx.strokeRect(.5+~~c.x,.5+~~c.y,c.width,c.height)}}catch(t){s=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(s)throw i}}}},resizeStart:function(){for(var t in this.markers){var s=this.markers[t];if(this.isCollision(this.mouse,s)){this.mouse.resizeStart=!0,this.activeMarker=s,this.active=s.parent,this.create.start=this.mouse.cell;break}}},blocksCollision:function(t){var s=!1;for(var i in this.blocks)if(+i!=+this.active&&this.isCollision(t,this.blocks[i])){s=!0;break}return s},drawGuideLines:function(){this.ctx.strokeStyle=this.style.guideLine;for(var t=0;t<=this.sceneWidth-this.step;t+=this.step)0!==t&&(this.ctx.beginPath(),this.ctx.moveTo(~~this.scene.x+t+.5,this.scene.y),this.ctx.lineTo(~~this.scene.x+t+.5,this.scene.y+this.scene.height),this.ctx.stroke())},resize:function(){if(this.mouse.resizeStart&&!1!==this.active&&this.isEdited){var t=JSON.parse(c()(this.blocks[this.active]));"left"===this.activeMarker.position?(t.x+=this.mouse.vc*this.step,t.width-=this.mouse.vc*this.step):t.width=this.mouse.cell*this.step-t.x,t.width<this.step||this.blocksCollision(t)||(this.save(this.active,t),this.eventResize(),this.setMarker())}},eventCreateStart:function(){},eventCreateMove:function(){this.create.start&&!this.mouse.resizeStart&&(this.$emit("update:cells",this.blocks),this.sendMessage([{port:0,start:~~this.$route.params.id,end:this.mouse.cell,color:this.colorPicker}]))},eventMove:function(){var t=~~this.blocks[this.active].x/this.step,s=~~((this.blocks[this.active].x+this.blocks[this.active].width)/this.step)-1;this.blocks[this.active].start=~~t,this.blocks[this.active].end=~~s,this.$emit("update:cells",this.blocks),this.sendMessage([{port:~~this.$route.params.id,start:~~t,end:s,color:this.blocks[this.active].color}])},eventResize:function(){var t=~~this.blocks[this.active].x/this.step,s=~~((this.blocks[this.active].x+this.blocks[this.active].width)/this.step)-1;this.blocks[this.active].start=~~t,this.blocks[this.active].end=~~s,this.$emit("update:cells",this.blocks),this.sendMessage([{port:~~this.$route.params.id,start:~~t,end:s,color:this.blocks[this.active].color}])},eventBlockActive:function(){this.$emit("update:cells",this.blocks);var t=~~this.blocks[this.active].x/this.step,s=~~((this.blocks[this.active].x+this.blocks[this.active].width)/this.step)-1;this.sendMessage([{port:~~this.$route.params.id,start:~~t,end:s,color:this.blocks[this.active].color}])},sendMessage:i.n(a).a.throttle(function(t){this.$axios.post("/move",t)},150)}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hello"},[t.width?i("div",{staticClass:"scene"},[i("canvas",{ref:"canvas",style:"border: 1px "+t.style.guideLine+" solid",on:{mousemove:t.mouseMove,mousedown:t.mouseDown,mouseup:t.mouseUp,mouseleave:t.mouseLeave}}),t._v(" "),t._l(this.blocks,function(s,e){return i("div",{key:e,staticClass:"toolTips",style:t.getStyle(s)},[t._v(t._s(s.name)+"\n        ")])})],2):t._e(),t._v(" "),t._l(t.blocks,function(s,e){return t.isEdited?i("div",{key:e,staticClass:"pixel-settings",class:{active:t.active===e}},[i("div",{staticClass:"pixel-settings-name"},[i("p",[t._v("Название:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.blocks[e].name,expression:"blocks[index].name"}],attrs:{type:"text"},domProps:{value:t.blocks[e].name},on:{input:function(s){s.target.composing||t.$set(t.blocks[e],"name",s.target.value)}}}),t._v(t._s(e)+"\n        ")]),t._v(" "),i("div",{staticClass:"color-picker"},[i("p",[t._v("RGB:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.blocks[e].color.r,expression:"blocks[index].color.r",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.blocks[e].color.r},on:{input:function(s){s.target.composing||t.$set(t.blocks[e].color,"r",t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.blocks[e].color.g,expression:"blocks[index].color.g",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.blocks[e].color.g},on:{input:function(s){s.target.composing||t.$set(t.blocks[e].color,"g",t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.blocks[e].color.b,expression:"blocks[index].color.b",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.blocks[e].color.b},on:{input:function(s){s.target.composing||t.$set(t.blocks[e].color,"b",t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),t._v(" "),i("div",{staticClass:"color-result",style:"background-color: rgb("+s.color.r+", "+s.color.g+", "+s.color.b+")"})]),t._v(" "),i("span",{staticClass:"mdi mdi-delete",on:{click:function(s){return t.deleteRow(e)}}})]):t._e()})],2)},staticRenderFns:[]};var l=i("VU/8")(n,r,!1,function(t){i("+fZm")},"data-v-41ed2a58",null);s.default=l.exports}},["NHnr"]);
//# sourceMappingURL=app.eec03a1d55da8a56a223.js.map