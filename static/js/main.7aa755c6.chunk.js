(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(27),c=a.n(s),i=(a(63),a(13)),o=a(14),r=a(17),u=a(15),m=a(16),h=a(11),d=a(31),f=a.n(d).a.initializeApp({apiKey:"AIzaSyAjJOccmVzGilFQrv4rISTJMxBRn7_Yjiw",authDomain:"reactjssocialmedia.firebaseapp.com",databaseURL:"https://reactjssocialmedia.firebaseio.com",projectId:"reactjssocialmedia",storageBucket:"reactjssocialmedia.appspot.com",messagingSenderId:"544316527350"}),p=a(122),g=a(115),b=a(116),O=(a(76),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(){f.auth().signOut()}},{key:"render",value:function(){return l.a.createElement(p.a,{className:"bg"},l.a.createElement(g.a,null,l.a.createElement(b.a,{xs:8,xsOffset:1},l.a.createElement("h4",{className:"bee"},"Burger Queen")),l.a.createElement(b.a,{xs:2},l.a.createElement("p",{onClick:this.logout,className:"exit"},l.a.createElement("i",{className:"fas fa-sign-out-alt"})))))}}]),t}(n.Component)),j=a(117),E=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(j.a,null))}}]),t}(n.Component),v=a(55),w=a(118),y=a(119),k=a(120),C=a(121),I=a(56),S=a.n(I),x=(a(110),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).login=a.login.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Login"},l.a.createElement(j.a,null,l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"logo"},l.a.createElement(w.a,{src:S.a,alt:"bee",className:"bee",responsive:!0}))),l.a.createElement(y.a,{horizontal:!0},l.a.createElement(b.a,{xs:12,md:8,mdOffset:2,lg:6,lgOffset:3},l.a.createElement(k.a,{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",id:"exampleInputEmail1",placeholder:"Email",className:"social inputs"})),l.a.createElement(b.a,{xs:12,md:8,mdOffset:2,lg:6,lgOffset:3},l.a.createElement(k.a,{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",id:"exampleInputPassword1",placeholder:"Password",className:"social inputs"})),l.a.createElement(b.a,{xs:12,md:8,mdOffset:2,lg:6,lgOffset:3},l.a.createElement(C.a,{type:"submit",className:"pink",onClick:this.login},"Iniciar Sesi\xf3n")))))}}]),t}(n.Component)),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={user:null},e.authListener=e.authListener.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:t}),localStorage.setItem("user",t.uid),localStorage.setItem("photo",t.photoURL),localStorage.setItem("userName",t.displayName),localStorage.setItem("mail",t.email)):(e.setState({user:null}),localStorage.removeItem("user"))})}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.user?l.a.createElement(E,null):l.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a.p+"static/media/logo.466fc55f.svg"},58:function(e,t,a){e.exports=a(114)},63:function(e,t,a){},76:function(e,t,a){}},[[58,2,1]]]);
//# sourceMappingURL=main.7aa755c6.chunk.js.map