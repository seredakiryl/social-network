(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(9),a=n.n(r),s=n(17),c=n(49),i=n(3),o=n(15),u=n(31),l="ADD-POST",d="SET_USERS_PROFILE",j=" SET_STATUS",b="SAVE_PHOTO_SUCCESS",f={posts:[{id:1,message:"My personal ID is 18399",likesCount:12},{id:2,message:"React/Redux",likesCount:11},{id:3,message:"It's sunny today who wants to take a walk",likesCount:11},{id:4,message:"It's my first post",likesCount:11}],profile:null,status:""},p=function(e){return{type:l,newPostText:e}},h=function(e){return{type:j,status:e}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(O(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b}));var r=n(3),a=n(74),s=(n(1),n(29)),c=n.n(s),i=n(96),o=n(0),u=["input","meta","child","Element"],l=function(e){var t=e.input,n=e.meta,s=(e.child,e.Element),i=Object(a.a)(e,u),l=n.touched&&n.error;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(l?c.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)(s,Object(r.a)(Object(r.a)({},t),i))}),l&&Object(o.jsx)("span",{children:n.error})]})},d=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Element:"textarea"}))},j=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Element:"input"}))},b=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))," ",Object(o.jsxs)("div",{className:c.a.loginform,children:[" ",u]})]})}},132:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(49),a=n(3),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:6,name:"Valera"}],messages:[{id:1,message:"My personal ID is 18399"},{id:2,message:"React/Redux"},{id:3,message:"It's sunny today who wants to take a walk"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},136:function(e,t,n){e.exports={userPhoto:"users_userPhoto__4Hxq8",followBtn:"users_followBtn__3Slxa"}},140:function(e,t,n){"use strict";var r=n(40),a=n(1),s=n(35),c=n(26),i=n.n(c),o=n(0),u=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(e.status),u=Object(r.a)(i,2),l=u[0],d=u[1];Object(a.useEffect)((function(){d(e.status)}),[e.status]);return Object(o.jsxs)("div",{children:[!s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Status"})," ",Object(o.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"No status"})]}),s&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(l)},onChange:function(e){d(e.currentTarget.value)},value:l})})]})},l=n(75),d=n(95),j=n(21),b=n.n(j),f=n(33),p=n.n(f),h=function(e){var t=e.profile,n=e.goToEditMode,r=e.isOwner;return Object(o.jsxs)("div",{className:i.a.OwnerPage,children:[Object(o.jsx)("div",{}),r,Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Looking for a job"}),":",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"My professional skills"}),":",t.lookingForAJobDescription]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"About Me"}),":",t.aboutMe]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Contacts"}),":",Object.keys(t.contacts).map((function(e){if("mainLink"!==e&&"youtube"!==e&&"twitter"!==e&&"website"!==e&&"facebook"!==e)return Object(o.jsx)(O,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),Object(o.jsxs)("div",{children:["  ",Object(o.jsx)("button",{className:p()([b.a.btn],i.a.editBtn),onClick:n,children:"Edit"})]})]})},O=function(e){var t=e.contactTitle,n=e.contactValue;return Object(o.jsxs)("div",{className:i.a.contact,children:[Object(o.jsx)("b",{children:t}),":",n]})};t.a=function(e){var t=e.profile,n=e.status,c=e.updateStatus,j=e.isOwner,b=e.savePhoto,f=e.saveProfile,p=Object(a.useState)(!1),O=Object(r.a)(p,2),g=O[0],m=O[1];if(!t)return Object(o.jsx)(s.a,{});return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:i.a.userProffile,children:[Object(o.jsxs)("div",{className:i.a.userPhoto,children:[Object(o.jsx)("div",{className:i.a.fullName,children:t.fullName}),Object(o.jsx)("img",{src:t.photos.large||l.a})]}),Object(o.jsxs)("div",{className:i.a.dataProfile,children:[Object(o.jsx)(u,{className:!0,status:n,updateStatus:c}),g?Object(o.jsx)(d.a,{initialValues:t,profile:t,onSubmit:function(e){f(e).then((function(){m(!1)}))}}):Object(o.jsx)(h,{goToEditMode:function(){m(!0)},profile:t,isOwner:j}),j&&Object(o.jsx)("input",{className:i.a.addPhotoBtn,type:"file",onChange:function(e){e.target.files.length&&b(e.target.files[0])}})]})]})})}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(135),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"150d914b-0c39-4e15-a6fc-98bf47f87328"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return i.getProfile(e)}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{Headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}}},170:function(e,t,n){},179:function(e,t,n){},19:function(e,t,n){e.exports={item:"Navbar_item__27Gdh",activeLink:"Navbar_activeLink__2AziG"}},21:function(e,t,n){e.exports={btn:"body_btn__2a24e"}},26:function(e,t,n){e.exports={userProffile:"ProfileInfo_userProffile__1RMZa",userPhoto:"ProfileInfo_userPhoto__WarPD",addPhotoBtn:"ProfileInfo_addPhotoBtn__23t7n",editBtn:"ProfileInfo_editBtn__1skYs",fullName:"ProfileInfo_fullName__2zpnf",dataProfile:"ProfileInfo_dataProfile__3MoJY"}},29:function(e,t,n){e.exports={login:"FormsControls_login__1m9_d",loginBtn:"FormsControls_loginBtn__2XwxF",formControl:"FormsControls_formControl__1IX_G",error:"FormsControls_error__1srdn",formSummaryError:"FormsControls_formSummaryError__1vs4x"}},299:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(1),s=n.n(a),c=n(70),i=n.n(c),o=(n(170),n(42)),u=n(43),l=n(45),d=n(44),j=n(61),b=n.n(j),f=n(19),p=n.n(f),h=n(16),O=n(0),g=function(){return Object(O.jsxs)("nav",{className:p.a.navBar,children:[Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/Profile",activeClassName:p.a.activeLink,children:" Profile"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/Dialogs",activeClassName:p.a.activeLink,children:" Massages"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/News",activeClassName:p.a.activeLink,children:" News "})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/Music",activeClassName:p.a.activeLink,children:" Music "})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/Settings",activeClassName:p.a.activeLink,children:" Settings "})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(h.b,{to:"/Users",activeClassName:p.a.activeLink,children:" Find sers "})})]})},m=(n(179),function(e){return Object(O.jsx)("div",{children:"News"})}),v=n(10),x=n(18),_=n(9),w=n.n(_),P=n(17),S=n(49),y=n(3),C=n(15),N=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},k="FOLLOW",I="UNFOLLOW",E="SET_USERS",F="SET_CURRENT_PAGE",A="SET_TOTAL_USERS_COUNT",L="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",M={users:[],pageSize:20,totalUsersCount:1300,currentPage:5,isFetching:!1,followingInProgress:[]},B=function(e){return{type:k,userId:e}},U=function(e){return{type:I,userId:e}},z=function(e){return{type:F,currentPage:e}},D=function(e){return{type:L,isFetching:e}},R=function(e,t){return{type:T,isFetching:e,userId:t}},G=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(R(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case I:return Object(y.a)(Object(y.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case E:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case F:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case A:return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case L:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case T:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},V=n(74),W=n(73),H=n(40),Y=n(50),X=n.n(Y),q=n(21),Z=n.n(q),K=n(33),Q=n.n(K),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(a.useState)(1),b=Object(H.a)(j,2),f=b[0],p=b[1],h=(f-1)*i+1,g=f*i;return Object(O.jsxs)("div",{className:X.a.paginator,children:[f>1&&Object(O.jsx)("button",{className:Q()(Z.a.btn,X.a.paginatorBtn),onClick:function(){p(f-1)},children:"\xab"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:Q()(Object(W.a)({},X.a.selectedPage,r===e),X.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>f&&Object(O.jsx)("button",{className:Q()(Z.a.btn,X.a.paginatorBtn),onClick:function(){p(f+1)},children:"\xbb"})]})},ee=n(136),te=n.n(ee),ne=n(75),re=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(h.b,{to:"/Profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:ne.a,className:te.a.userPhoto})})]}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{className:Z.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:" Unfollow"}):Object(O.jsx)("button",{className:Z.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"user.location.country"}),Object(O.jsx)("div",{children:"user.location.city"})]})]})]})},ae=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],se=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,c=Object(V.a)(e,ae);return Object(O.jsxs)("div",{children:[Object(O.jsx)($,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(O.jsx)("div",{children:s.map((function(e){return Object(O.jsx)(re,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))})]})},ce=n(35),ie=function(e){return e.usersPage.users},oe=function(e){return e.usersPage.pageSize},ue=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPages(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(ce.a,{}):null,Object(O.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),fe=Object(x.b)((function(e){return{users:ie(e),pageSize:oe(e),totalUsersCount:ue(e),currentPage:le(e),isFetching:de(e),followingInProgress:je(e)}}),{follow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,C.c.follow.bind(C.c),B);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,C.c.unfollow.bind(C.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPages:z,toggleFollowingProgress:R,getUsers:function(e,t){return function(){var n=Object(P.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(e)),r(D(!0)),n.next=4,C.c.getUsers(e,t);case 4:a=n.sent,r(D(!1)),r((c=a.items,{type:E,users:c})),r((s=a.totalCount,{type:A,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}})(be),pe=n(77),he=n.n(pe),Oe=n.p+"static/media/MyLogo.a75c32a2.png",ge=function(e){return Object(O.jsxs)("header",{className:he.a.header,children:[Object(O.jsx)("img",{src:Oe}),Object(O.jsx)("div",{className:he.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login,Object(O.jsx)("button",{className:Q()([Z.a.btn],he.a.headerButton),onClick:e.logout,children:"Log out"})," "]}):Object(O.jsxs)("button",{className:Z.a.btn,children:[" ",Object(O.jsx)(h.b,{to:"/login",children:"Login"})]})})]})},me=n(31),ve="samurai-networ/auth/SET_USERS_DATA",xe={userId:null,email:null,login:null,isAuth:!1},_e=function(e,t,n,r){return{type:ve,payload:{userId:e,email:t,login:n,isAuth:r}}},we=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r,a,s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(_e(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},Se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(ge,Object(y.a)({},this.props))}}]),n}(s.a.Component),ye=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(_e(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),Ce=n(97),Ne=n(53),ke=n(12),Ie=n(29),Ee=n.n(Ie),Fe=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsx)("div",{className:Ee.a.rememberMe,children:Object(O.jsxs)("form",{onSubmit:t,children:[Object(ke.c)("Email","email",[Ne.b],ke.a),Object(ke.c)("Password","password",[Ne.b],ke.a,{type:"password"}),Object(ke.c)(null,"rememberMe",[],ke.a,{type:"checkbox"},"remember me"),n&&Object(O.jsx)("div",{className:Ee.a.formSummaryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:Z.a.btn,children:"Login"})})]})})})),Ae=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(P.a)(w.a.mark((function r(a){var s,c;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(we()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(me.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(v.a,{to:"/profile"}):Object(O.jsxs)("div",{className:Ee.a.login,children:[Object(O.jsx)("h1",{children:"login"}),Object(O.jsx)(Fe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Le="INITIALIZED_SUCCESS",Te={initialized:!1},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},Be=function(e){return function(t){return Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)(ce.a,{}),children:Object(O.jsx)(e,Object(y.a)({},t))})}},Ue=(n(95),n(140),function(){return Object(O.jsx)("div",{})}),ze=s.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),De=s.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),Re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:b.a.header,children:[Object(O.jsx)(ye,{}),Object(O.jsxs)("div",{className:b.a.appWrapperContent,children:[Object(O.jsx)("div",{className:b.a.nav,children:Object(O.jsx)(g,{})}),Object(O.jsx)(v.b,{exact:!0,path:"/dialogs",render:Be(ze)}),Object(O.jsx)("div",{className:b.a.ProfileContainer,children:Object(O.jsx)(v.b,{path:"/profile/:userId?",render:Be(De)})}),Object(O.jsx)(v.b,{path:"/News",render:function(){return Object(O.jsx)(m,{})}}),Object(O.jsx)(v.b,{path:"/users",render:function(){return Object(O.jsx)(fe,{})}}),Object(O.jsx)(v.b,{path:"/login",render:function(){return Object(O.jsx)(Ae,{})}}),Object(O.jsx)(v.b,{path:"/settings",render:function(){return Object(O.jsx)(Ue,{})}})]})]}):Object(O.jsx)(ce.a,{})}}]),n}(a.Component),Ge=Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(we());Promise.all([t]).then((function(){e({type:Le})}))}}})(Re),Je=n(11),Ve=n(132),We=n(102),He=n(139),Ye=n(133),Xe=Object(Je.c)({profilePage:We.b,dialogsPage:Ve.a,usersPage:J,auth:Pe,form:Ye.a,app:Me}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je.d,Ze=Object(Je.e)(Xe,qe(Object(Je.a)(He.a)));i.a.render(Object(O.jsx)(h.a,{children:Object(O.jsx)(x.a,{store:Ze,children:Object(O.jsx)(Ge,{})})}),document.getElementById("root")),window.store=Ze,r()},35:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.02d752a1.svg",a=(n(1),n(0));t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},50:function(e,t,n){e.exports={paginator:"paginator_paginator__1jEuR",pageNumber:"paginator_pageNumber__2-aB7",selectedPage:"paginator_selectedPage__37sgN",paginatorBtn:"paginator_paginatorBtn__1bi6m"}},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is requred"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},61:function(e,t,n){e.exports={header:"App_header__1hlhy",appWrapperContent:"App_appWrapperContent__MEAgR",nav:"App_nav__3QAjW",Profile:"App_Profile__2R8bl"}},75:function(e,t,n){"use strict";t.a=n.p+"static/media/images.16815c49.png"},77:function(e,t,n){e.exports={header:"Header_header__1qSff",loginBlock:"Header_loginBlock__3vSSu",headerButton:"Header_headerButton__1ddyL"}},95:function(e,t,n){"use strict";n(1);var r=n(26),a=n.n(r),s=n(12),c=n(97),i=n(29),o=n.n(i),u=n(53),l=n(0),d=Object(c.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"save"})}),r&&Object(l.jsx)("div",{className:o.a.formSummaryError,children:r}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Full name"}),": ",Object(s.c)("Full name","fullName",[u.b],s.a)]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Looking for a job"}),": ",Object(s.c)("","lookingForAJob",[],s.a,{type:"checkbox"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"My professional skills"}),":",Object(s.c)("My professional skills","lookingForAJobDescription",[],s.b)]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"About me"}),":",Object(s.c)("About me","aboutMe",[],s.b)]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return Object(l.jsx)("div",{className:a.a.contact,children:Object(l.jsxs)("b",{children:[e,": ",Object(s.c)(e,"contacts."+e,[],s.a)]})},e)}))]})]})}));t.a=d}},[[299,1,2]]]);
//# sourceMappingURL=main.0801c5e9.chunk.js.map