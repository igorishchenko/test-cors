(this["webpackJsonptest-apollo"]=this["webpackJsonptest-apollo"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(23),s=n(5),o=n.n(s),p=n(26),b=n.n(p),u=(n(37),n(31)),j=n(19),l=(n.p,n(38),n(56)),d=n(58),O=n(11),I=(Object(l.a)(a||(a=Object(j.a)(["\n  query GetHello {\n    getHello\n  }\n"]))),Object(l.a)(c||(c=Object(j.a)(["\n  mutation CreateUserMutation($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      firstName\n      lastName\n    }\n  }\n"]))));Object(l.a)(r||(r=Object(j.a)(["\n  mutation AddTodo($type: String!) {\n    addTodo(type: $type) {\n      id\n      type\n    }\n  }\n"])));var m=function(){var e=Object(d.a)(I),t=Object(u.a)(e,2),n=t[0];return t[1].data,Object(s.useEffect)((function(){n({variables:{createUserInput:{firstName:"Testaaa",lastName:"Testaaa",email:"test@testweq.com",password:"test123456"}}})}),[]),Object(O.jsx)("div",{className:"App"})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},f=n(30),C=n(55),N=n(57),T=n(54),U=n(29),g=Object(f.a)({uri:"https://interview-api-app.herokuapp.com/graphql"}),y=Object(U.a)((function(e,t){var n=t.headers,a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJfaWQiOiI2MGU0MmQyMzQ2MTI2NjFhYzNkYmZmYWYiLCJpYXQiOjE2MjU1NzY0MDYsImV4cCI6MTYyNTY2MjgwNn0.Zoom5TecxNHE1bbYcT6GtCEpP81ThU9SxMUcyGKibmg";return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:"Bearer ".concat(a)})}})),M=new C.a({link:y.concat(g),cache:new N.a});b.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(T.a,{client:M,children:Object(O.jsx)(m,{})})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.9136c6cc.chunk.js.map