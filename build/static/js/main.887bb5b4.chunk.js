(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(80)},51:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/terraceLogo.9c5f536f.png"},80:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getMenuList",function(){return v}),n.d(a,"addMenu",function(){return g}),n.d(a,"removeMenu",function(){return j}),n.d(a,"selectMenu",function(){return O}),n.d(a,"getProductList",function(){return k}),n.d(a,"addProduct",function(){return N}),n.d(a,"getRoomList",function(){return M}),n.d(a,"addRoom",function(){return x}),n.d(a,"selectRoom",function(){return C}),n.d(a,"getTableList",function(){return I}),n.d(a,"addTable",function(){return R});var o=n(0),r=n.n(o),c=n(36),l=n.n(c),u=(n(51),n(19)),s=n(1),i=n(5),m=n(6),d=n(9),p=n(7),f=n(10),h=n(8),b=n(4),E=n(15),y=n.n(E),v=function(){return function(e){y.a.get("https://api.terracesarkoy.com/api/Product/GetMenuList").then(function(t){e({type:"get_menu_list",payload:t.data})})}},g=function(e){return console.log("1--------------------\x3e",e),function(t){y.a.post("https://api.terracesarkoy.com/api/Product/addmenu",e).then(function(e){console.log("ADD_MENU--------------------\x3e",e),t({type:"add_menu",payload:e.data})})}},j=function(){return function(e){e({type:"remove_menu"})}},O=function(e){return function(t){t({type:"select_menu",payload:e})}},k=function(e){return function(t){y.a.get("https://api.terracesarkoy.com/api/Product/GetListByMenuId?MenuId="+e).then(function(e){t({type:"get_product_list",payload:e.data})})}},N=function(e){return console.log("1---------------\x3e",e),function(t){y.a.post("https://api.terracesarkoy.com/api/Product/addproduct",e).then(function(e){console.log("2---------------\x3e",e.data),t({type:"add_product",payload:e.data})})}},M=function(){return function(e){y.a.get("https://api.terracesarkoy.com/api/Admin/GetRoomList").then(function(t){e({type:"get_room_list",payload:t.data})})}},x=function(e){return console.log("2----------\x3e",e),function(t){y.a.post("https://api.terracesarkoy.com/api/Admin/AddRoom",e).then(function(e){console.log("ADD_ROOM--------------------\x3e",e.data),console.log("3----------\x3e",e.data),console.log("rooms.push----------\x3e",e.data),t({type:"add_room",payload:e.data})})}},C=function(e){return function(t){t({type:"select_room",payload:e})}},I=function(e){return function(t){y.a.get("https://api.terracesarkoy.com/api/Admin/GetTableListByRoomId?RoomId="+e).then(function(e){t({type:"get_table_list",payload:e.data})})}},R=function(e){return console.log("1------------\x3e",e),function(t){y.a.post("https://api.terracesarkoy.com/api/Admin/AddTable",e).then(function(e){console.log("ADD_TABLE--------------------\x3e",e.data),t({type:"add_table",payload:e.data})})}},_=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getMenuList()}},{key:"onClicked",value:function(e){this.props.selectMenu(e),this.props.getProductList(e.menuId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.i,null,this.props.menus.menu.map(function(t){return r.a.createElement(b.j,{active:t.menuId===e.props.selectedMenu.menuId,onClick:function(){return e.onClicked(t)},key:t.menuId,className:"RoomButton"},t.name)})))}}]),t}(o.Component),A=Object(h.b)(function(e){return console.log(e),{menus:e.menu,product:e.product.products,selectedMenu:e.menu.selectedMenu}},a)(_),S=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},this.props.product.map(function(e){return r.a.createElement("div",{className:"ProductButton",key:e.productId},r.a.createElement("h6",null,e.name),r.a.createElement("p",{style:{fontSize:13}},"\u20ba ",e.price))}))}}]),t}(o.Component),L=Object(h.b)(function(e){return console.log(e.product.products),{product:e.product.products}},a)(S),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){n.setState({menuId:parseInt(e.target.value)})},n.state={productName:"",price:"",menuId:0,description:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"saveProduct",value:function(){var e={productId:0,menuId:this.props.selectedMenu.menuId,name:this.state.productName,price:this.state.price,photo:"",description:this.state.description};this.props.addProduct(e),this.setState({productName:"",price:"",menuId:0,description:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ProductContainer"},r.a.createElement(b.d,null,r.a.createElement(b.e,null,r.a.createElement(b.h,{for:"exampleEmail"},"\xdcr\xfcn Ad\u0131"),r.a.createElement(b.f,{id:"productName",name:"productName",type:"text",onChange:function(t){return e.setState({productName:t.target.value})},value:this.state.productName})),r.a.createElement(b.e,null,r.a.createElement(b.h,{for:"examplePassword"},"Fiyat"),r.a.createElement(b.f,{id:"price",name:"price",type:"text",onChange:function(t){return e.setState({price:t.target.value})},value:this.state.price})),r.a.createElement(b.e,null,r.a.createElement(b.h,{for:"examplePassword"},"A\xe7\u0131klama"),r.a.createElement(b.f,{id:"description",name:"description",type:"textarea",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description})),r.a.createElement(b.b,{onClick:function(){return e.saveProduct()},color:"success"},"Kaydet")))}}]),t}(o.Component),w=Object(h.b)(function(e){return{selectedMenu:e.menu.selectedMenu,products:e.product}},a)(P),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={menuName:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"saveMenu",value:function(){var e={menuId:0,parentId:0,name:this.state.menuName};this.props.addMenu(e),this.setState({menuName:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.k,null,r.a.createElement(b.c,{xs:"3"},r.a.createElement("div",{className:"AddMenu"},r.a.createElement("h2",null,"Men\xfc Ekle"),r.a.createElement(b.g,{className:"AddMenuContainer"},r.a.createElement(b.f,{placeholder:"Menu Ekle",onChange:function(t){return e.setState({menuName:t.target.value})},value:this.state.menuName}),r.a.createElement(b.b,{onClick:function(){return e.saveMenu()},color:"success"},"Kaydet")),r.a.createElement(A,null))),r.a.createElement(b.c,{xs:"5"},r.a.createElement("h2",{style:{marginTop:20,marginLeft:15}},"Men\xfc Ad\u0131 : ",r.a.createElement(b.a,{color:"success"},this.props.selectedMenu.name)),r.a.createElement(L,null)),r.a.createElement(b.c,{xs:"4"},r.a.createElement("div",{className:"AddProduct"},r.a.createElement("h2",{style:{textAlign:"center"}},"\xdcr\xfcn Ekle"),r.a.createElement(w,null)))))}}]),t}(o.Component),D=Object(h.b)(function(e){return console.log(e),{menu:e.menu,product:e.product,selectedMenu:e.menu.selectedMenu}},a)(T),B=n(77),F=[{key:1,label:r.a.createElement(u.b,{to:"/"},"Salon Ekle")},{key:2,label:r.a.createElement(u.b,{to:"/menu"},"Menu Ekle")}],G=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"container-fluid flex"},r.a.createElement("div",null,r.a.createElement("img",{src:B,className:"Logo"})),r.a.createElement("ul",{className:"flex ul"},F.map(function(e,t){return r.a.createElement("li",{key:e.key},e.label)}))))}}]),t}(o.Component),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={roomName:"",description:"",modalRoom:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getRoomList()}},{key:"onClicked",value:function(e){this.props.selectRoom(e),this.props.getTableList(e.roomId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.i,null,this.props.rooms.room.map(function(t){return r.a.createElement(b.j,{active:t.roomId===e.props.selectedRoom.roomId,onClick:function(){return e.onClicked(t)},key:t.roomId,className:"RoomButton"},t.name)})))}}]),t}(o.Component),J=Object(h.b)(function(e){return console.log("room",e.room.selectedRoom),{rooms:e.room,selectedRoom:e.room.selectedRoom}},a)(K),W=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},className:"TableContainer"},this.props.tables.table.map(function(e){return r.a.createElement("div",{className:"MasaButton",key:e.tableId},r.a.createElement("h6",null,e.name))}))}}]),t}(o.Component),z=Object(h.b)(function(e){return{tables:e.table}},a)(W),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){n.setState({roomId:parseInt(e.target.value)})},n.state={tableName:"",description:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"saveTable",value:function(){var e={tableId:0,roomId:this.props.selectedRoom.roomId,name:this.state.tableName,description:this.state.description,statu:0,date:new Date,userId:0,firstName:"",lastName:""};this.props.addTable(e),this.setState({tableName:"",description:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ProductContainer"},r.a.createElement(b.d,null,r.a.createElement(b.e,null,r.a.createElement(b.h,{for:"exampleMasa"},"Masa Ad\u0131"),r.a.createElement(b.f,{id:"tableName",name:"tableName",type:"text",onChange:function(t){return e.setState({tableName:t.target.value})},value:this.state.tableName})),r.a.createElement(b.e,null,r.a.createElement(b.h,{for:"exampleDescription"},"A\xe7\u0131klama"),r.a.createElement(b.f,{id:"description",name:"description",type:"textarea",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description})),r.a.createElement(b.b,{onClick:function(){return e.saveTable()},color:"success"},"Kaydet")))}}]),t}(o.Component),q=Object(h.b)(function(e){return console.log(e.room.selectedRoom),{tables:e.table,selectedRoom:e.room.selectedRoom}},a)(U),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={roomName:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"saveRoom",value:function(){var e={roomId:0,name:this.state.roomName};this.props.addRoom(e),this.setState({roomName:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.k,null,r.a.createElement(b.c,{xs:"3",className:"RoomContainer"},r.a.createElement("div",{className:"AddMenu"},r.a.createElement("h2",null,"Salon Ekle"),r.a.createElement(b.g,{className:"AddMenuContainer"},r.a.createElement(b.f,{placeholder:"Salon Ekle",onChange:function(t){return e.setState({roomName:t.target.value})},value:this.state.roomName}),r.a.createElement(b.b,{onClick:function(){return e.saveRoom()},color:"success"},"Kaydet")),r.a.createElement(J,null))),r.a.createElement(b.c,{xs:"6"},r.a.createElement("h2",{style:{marginTop:20,marginLeft:15}},"Salon Ad\u0131 : ",r.a.createElement(b.a,{color:"success"},this.props.selectedRoom.name)),r.a.createElement(z,null)),r.a.createElement(b.c,{xs:"3"},r.a.createElement("div",{className:"AddProduct"},r.a.createElement("h2",{style:{textAlign:"center"}},"Masa Ekle"),r.a.createElement(q,null)))))}}]),t}(o.Component),Q=Object(h.b)(function(e){return console.log(e.room.selectedRoom),{selectedRoom:e.room.selectedRoom}},a)(H),V=[{key:1,path:"/",element:r.a.createElement(Q,null)},{key:2,path:"/menu",element:r.a.createElement(D,null)}];var X=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(s.c,null,V.map(function(e){return r.a.createElement(s.a,e)}))))},Y=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,87)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)})},Z=(n(78),n(20)),$=n(13),ee={menu:[],selectedMenu:{}},te={products:[]},ne={room:[],selectedRoom:{}},ae={table:[]},oe=Object(Z.b)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_menu_list":return Object($.a)({},e,{menu:t.payload});case"add_menu":return Object($.a)({},e,{menu:e.menu.concat(t.payload)});case"select_menu":return Object($.a)({},e,{selectedMenu:t.payload});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(console.log("3-------\x3e",t.payload),t.type){case"add_product":return Object($.a)({},e,{products:e.products.concat(t.payload)});case"get_product_list":return Object($.a)({},e,{products:t.payload});default:return e}},room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_room_list":return Object($.a)({},e,{room:t.payload});case"add_room":return Object($.a)({},e,{room:e.room.concat(t.payload)});case"select_room":return Object($.a)({},e,{selectedRoom:t.payload});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_table_list":return Object($.a)({},e,{table:t.payload});case"add_table":return Object($.a)({},e,{table:e.table.concat(t.payload)});default:return e}}}),re=n(41),ce=l.a.createRoot(document.getElementById("root")),le=Object(Z.c)(oe,{},Object(Z.a)(re.a));ce.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:le},r.a.createElement(X,null)))),Y()}},[[44,3,2]]]);
//# sourceMappingURL=main.887bb5b4.chunk.js.map