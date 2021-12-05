"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[131],{7131:(t0,p,m)=>{m.r(p),m.d(p,{MainModule:()=>m0});var t=m(8583),n=m(4330),c=m(7716),h=m(7556);let v=(()=>{class e{constructor(a,o){this.auth=a,this.router=o}canActivate(){return!!this.auth.isAdminRole()||(this.router.navigate(["main"]),!1)}}return e.\u0275fac=function(a){return new(a||e)(c.LFG(h.e),c.LFG(n.F0))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=m(665),M=m(1841);let z=(()=>{class e{constructor(a){this.http=a,this.server_address="api"}addAuthor(a){return this.http.post(`${this.server_address}/authors/add`,a)}getAuthors(){return this.http.get(`${this.server_address}/authors`)}getAuthor(a){return this.http.get(`${this.server_address}/authors/${a}`)}updateAuthor(a,o){return this.http.put(`${this.server_address}/authors/${o}/update`,a)}deleteAuthor(a){return this.http.delete(`${this.server_address}/authors/${a}/delete`)}}return e.\u0275fac=function(a){return new(a||e)(c.LFG(M.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Z=(()=>{class e{constructor(a,o){this.authorService=a,this.router=o,this.addAuthor=new l.cw({author:new l.NI(""),info:new l.NI(""),country:new l.NI(""),language:new l.NI(""),image:new l.NI("")})}ngOnInit(){}submit(){this.addAuthor.valid&&this.authorService.addAuthor(this.addAuthor.value).subscribe(a=>{this.router.navigate(["main/authors"])})}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(z),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-add-author"]],decls:26,vars:1,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","author",1,"form-label"],["formControlName","author","required","","type","text",1,"form-control"],["for","country",1,"form-label"],["formControlName","country","required","","type","text",1,"form-control"],["for","info",1,"form-label"],["formControlName","info","type","text",1,"form-control"],["for","language",1,"form-label"],["formControlName","language","required","","type","text",1,"form-control"],["for","image",1,"form-label"],["formControlName","image","required","","type","text",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"h3"),c._uU(2,"Add Book"),c.qZA(),c.TgZ(3,"form",1),c.NdJ("ngSubmit",function(){return o.submit()}),c.TgZ(4,"div",2),c.TgZ(5,"label",3),c._uU(6,"Author Name"),c.qZA(),c._UZ(7,"input",4),c.qZA(),c.TgZ(8,"div",2),c.TgZ(9,"label",5),c._uU(10,"Country"),c.qZA(),c._UZ(11,"input",6),c.qZA(),c.TgZ(12,"div",2),c.TgZ(13,"label",7),c._uU(14,"Author Info"),c.qZA(),c._UZ(15,"input",8),c.qZA(),c.TgZ(16,"div",2),c.TgZ(17,"label",9),c._uU(18,"Language"),c.qZA(),c._UZ(19,"input",10),c.qZA(),c.TgZ(20,"div",2),c.TgZ(21,"label",11),c._uU(22,"Author Image"),c.qZA(),c._UZ(23,"input",12),c.qZA(),c.TgZ(24,"button",13),c._uU(25,"Submit"),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(3),c.Q6J("formGroup",o.addAuthor))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.Q7],styles:["form[_ngcontent-%COMP%]{background-color:#efd99b;padding:5%;margin:5%}.container[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:2%;text-align:center}"]}),e})(),s=(()=>{class e{constructor(a){this.http=a,this.server_address="api"}addBook(a){return this.http.post(`${this.server_address}/books/add`,a)}getBooks(){return this.http.get(`${this.server_address}/books`)}getBook(a){return this.http.get(`${this.server_address}/books/${a}`)}updateBook(a,o){return this.http.put(`${this.server_address}/books/${o}/update`,a)}deleteBook(a){return this.http.delete(`${this.server_address}/books/${a}/delete`)}}return e.\u0275fac=function(a){return new(a||e)(c.LFG(M.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),V=(()=>{class e{constructor(a,o){this.bookService=a,this.router=o,this.addBook=new l.cw({title:new l.NI(""),info:new l.NI(""),author:new l.NI(""),genre:new l.NI(""),image:new l.NI("")})}ngOnInit(){}submit(){this.addBook.valid&&this.bookService.addBook(this.addBook.value).subscribe(a=>{this.router.navigate(["main/books"])})}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(s),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-add-book"]],decls:26,vars:1,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","title",1,"form-label"],["formControlName","title","required","","type","text",1,"form-control"],["for","author",1,"form-label"],["formControlName","author","required","","type","text",1,"form-control"],["for","info",1,"form-label"],["formControlName","info","type","text",1,"form-control"],["for","genre",1,"form-label"],["formControlName","genre","required","","type","text",1,"form-control"],["for","image",1,"form-label"],["formControlName","image","required","","type","text",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"h3"),c._uU(2,"Add Book"),c.qZA(),c.TgZ(3,"form",1),c.NdJ("ngSubmit",function(){return o.submit()}),c.TgZ(4,"div",2),c.TgZ(5,"label",3),c._uU(6,"Book Title"),c.qZA(),c._UZ(7,"input",4),c.qZA(),c.TgZ(8,"div",2),c.TgZ(9,"label",5),c._uU(10,"Author"),c.qZA(),c._UZ(11,"input",6),c.qZA(),c.TgZ(12,"div",2),c.TgZ(13,"label",7),c._uU(14,"Book Summary"),c.qZA(),c._UZ(15,"input",8),c.qZA(),c.TgZ(16,"div",2),c.TgZ(17,"label",9),c._uU(18,"Genre"),c.qZA(),c._UZ(19,"input",10),c.qZA(),c.TgZ(20,"div",2),c.TgZ(21,"label",11),c._uU(22,"Book Image"),c.qZA(),c._UZ(23,"input",12),c.qZA(),c.TgZ(24,"button",13),c._uU(25,"Submit"),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(3),c.Q6J("formGroup",o.addBook))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.Q7],styles:["form[_ngcontent-%COMP%]{background-color:#efd99b;padding:5%;margin:5%}.container[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:2%;text-align:center}"]}),e})();function x(e,i){if(1&e&&(c.TgZ(0,"div",3),c.TgZ(1,"div",4),c._UZ(2,"img",5),c.qZA(),c.TgZ(3,"div",6),c.TgZ(4,"h5",7),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"ul",8),c.TgZ(7,"li",9),c.TgZ(8,"em"),c._uU(9,"Nationality : "),c.qZA(),c._uU(10),c.qZA(),c.TgZ(11,"li",9),c._uU(12),c.qZA(),c.qZA(),c.TgZ(13,"div",6),c.TgZ(14,"a",10),c._uU(15,"Read More"),c.qZA(),c.qZA(),c.qZA()),2&e){const a=i.$implicit;c.xp6(2),c.MGl("src","",a.image," ",c.LSH),c.xp6(3),c.Oqu(a.author),c.xp6(5),c.hij("",a.country," "),c.xp6(2),c.hij("Language :",a.language,""),c.xp6(2),c.MGl("routerLink","/main/authors/",a._id,"")}}let L=(()=>{class e{constructor(a){this.authorService=a,this.authors=[{_id:"",author:"",info:"",country:"",language:"",image:""}]}ngOnInit(){this.authorService.getAuthors().subscribe(a=>{this.authors=JSON.parse(JSON.stringify(a))})}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-author-list"]],decls:3,vars:1,consts:[[1,"container"],[1,"row","row-col-3","justify-content-center"],["class","col col-md-3",4,"ngFor","ngForOf"],[1,"col","col-md-3"],[1,"card"],["alt","",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"routerLink"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,x,16,5,"div",2),c.qZA(),c.qZA()),2&a&&(c.xp6(2),c.Q6J("ngForOf",o.authors))},directives:[t.sg,n.yS],styles:[".col[_ngcontent-%COMP%]{border-radius:5%;padding:.5%;background-color:#efd99b;margin:1%}.col[_ngcontent-%COMP%]:hover{box-shadow:#00000059 0 5px 15px}.card[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{background-color:#efd99b}.card-img-top[_ngcontent-%COMP%]{border-radius:5%}"]}),e})();function A(e,i){if(1&e){const a=c.EpF();c.TgZ(0,"div",6),c.TgZ(1,"a",12),c.TgZ(2,"button",13),c._uU(3,"Update"),c.qZA(),c.qZA(),c.TgZ(4,"button",14),c.NdJ("click",function(){return c.CHM(a),c.oxw().delete()}),c._uU(5," Delete "),c.qZA(),c.qZA()}if(2&e){const a=c.oxw();c.xp6(1),c.MGl("routerLink","/main/authors/",a.author._id,"/update")}}let N=(()=>{class e{constructor(a,o,f,r){this.auth=a,this.router=o,this.authorService=f,this.route=r,this.isAdmin=!1,this.author={_id:"",author:"",info:"",country:"",language:"",image:""}}ngOnInit(){this.isAdmin=this.auth.isAdminRole(),this.route.params.subscribe(a=>{this.authorService.getAuthor(a.id).subscribe(o=>{this.author=JSON.parse(JSON.stringify(o))})})}delete(){this.authorService.deleteAuthor(this.author._id).subscribe(a=>{}),this.router.navigate(["/main/authors"])}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(h.e),c.Y36(n.F0),c.Y36(z),c.Y36(n.gz))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-author"]],decls:19,vars:6,consts:[[1,"container"],[1,"card","mb-3",2,"width","50rem"],[1,"row","g-0"],[1,"col-md-4","img-col"],["alt","",1,"card-img-top",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["class","card-body",4,"ngIf"],[3,"routerLink"],[1,"btn","btn-sm","btn-primary"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c._UZ(4,"img",4),c.qZA(),c.TgZ(5,"div",5),c.TgZ(6,"div",6),c.TgZ(7,"h5",7),c._uU(8),c.qZA(),c.TgZ(9,"p",8),c._uU(10),c.qZA(),c.qZA(),c.TgZ(11,"ul",9),c.TgZ(12,"li",10),c.TgZ(13,"em"),c._uU(14,"Nationality: "),c.qZA(),c._uU(15),c.qZA(),c.TgZ(16,"li",10),c._uU(17),c.qZA(),c.qZA(),c.YNc(18,A,6,1,"div",11),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(4),c.MGl("src","",o.author.image," ",c.LSH),c.xp6(4),c.Oqu(o.author.author),c.xp6(2),c.hij(" ",o.author.info," "),c.xp6(5),c.hij("",o.author.country," "),c.xp6(2),c.hij("Language : ",o.author.language,""),c.xp6(1),c.Q6J("ngIf",o.isAdmin))},directives:[t.O5,n.yS],styles:[".container[_ngcontent-%COMP%]{height:80vh;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]{border-radius:5%;background-color:#efd99b;margin:1%;padding:1%}li[_ngcontent-%COMP%]{background-color:#efd99b}.img-col[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.btn[_ngcontent-%COMP%]{margin-right:2%}"]}),e})(),q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-authors"]],decls:1,vars:0,template:function(a,o){1&a&&c._UZ(0,"router-outlet")},directives:[n.lC],styles:[""]}),e})();function S(e,i){if(1&e&&(c.TgZ(0,"div",3),c.TgZ(1,"div",4),c._UZ(2,"img",5),c.qZA(),c.TgZ(3,"div",6),c.TgZ(4,"h5",7),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"ul",8),c.TgZ(7,"li",9),c.TgZ(8,"em"),c._uU(9,"written by "),c.qZA(),c._uU(10),c.qZA(),c.TgZ(11,"li",9),c._uU(12),c.qZA(),c.qZA(),c.TgZ(13,"div",6),c.TgZ(14,"a",10),c._uU(15,"Read More"),c.qZA(),c.qZA(),c.qZA()),2&e){const a=i.$implicit;c.xp6(2),c.s9C("src",a.image,c.LSH),c.xp6(3),c.Oqu(a.title),c.xp6(5),c.hij(" ",a.author,""),c.xp6(2),c.hij("Genre : ",a.genre,""),c.xp6(2),c.MGl("routerLink","/main/books/",a._id,"")}}let k=(()=>{class e{constructor(a){this.bookService=a,this.books=[{_id:"",title:"",info:"",author:"",genre:"",image:""}]}ngOnInit(){this.bookService.getBooks().subscribe(a=>{this.books=JSON.parse(JSON.stringify(a))})}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(s))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-book-list"]],decls:3,vars:1,consts:[[1,"container"],[1,"row","row-col-3","justify-content-center"],["class","col col-md-3",4,"ngFor","ngForOf"],[1,"col","col-md-3"],[1,"card"],["alt","",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"routerLink"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,S,16,5,"div",2),c.qZA(),c.qZA()),2&a&&(c.xp6(2),c.Q6J("ngForOf",o.books))},directives:[t.sg,n.yS],styles:[".col[_ngcontent-%COMP%]{border-radius:5%;padding:.5%;background-color:#efd99b;margin:1%}.col[_ngcontent-%COMP%]:hover{box-shadow:#00000059 0 5px 15px}.card[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{background-color:#efd99b}.card-img-top[_ngcontent-%COMP%]{border-radius:5%}"]}),e})();function y(e,i){if(1&e){const a=c.EpF();c.TgZ(0,"div",6),c.TgZ(1,"a",12),c.TgZ(2,"button",13),c._uU(3,"Update"),c.qZA(),c.qZA(),c.TgZ(4,"button",14),c.NdJ("click",function(){return c.CHM(a),c.oxw().delete()}),c._uU(5," Delete "),c.qZA(),c.qZA()}if(2&e){const a=c.oxw();c.xp6(1),c.MGl("routerLink","/main/books/",a.book._id,"/update")}}let _=(()=>{class e{constructor(a,o,f,r){this.bookService=a,this.auth=o,this.route=f,this.router=r,this.book={_id:"",title:"",info:"",author:"",genre:"",image:""},this.isAdmin=!1}ngOnInit(){this.isAdmin=this.auth.isAdminRole(),this.route.params.subscribe(a=>{this.bookService.getBook(a.id).subscribe(o=>{this.book=JSON.parse(JSON.stringify(o))})})}delete(){this.bookService.deleteBook(this.book._id).subscribe(a=>{}),this.router.navigate(["/main/books"])}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(s),c.Y36(h.e),c.Y36(n.gz),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-book"]],decls:19,vars:6,consts:[[1,"container"],[1,"card","mb-3",2,"width","50rem"],[1,"row","g-0"],[1,"col-md-4","img-col"],["alt","",1,"card-img-top",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["class","card-body",4,"ngIf"],[3,"routerLink"],[1,"btn","btn-sm","btn-primary"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c._UZ(4,"img",4),c.qZA(),c.TgZ(5,"div",5),c.TgZ(6,"div",6),c.TgZ(7,"h5",7),c._uU(8),c.qZA(),c.TgZ(9,"p",8),c._uU(10),c.qZA(),c.qZA(),c.TgZ(11,"ul",9),c.TgZ(12,"li",10),c.TgZ(13,"em"),c._uU(14,"written by "),c.qZA(),c._uU(15),c.qZA(),c.TgZ(16,"li",10),c._uU(17),c.qZA(),c.qZA(),c.YNc(18,y,6,1,"div",11),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(4),c.s9C("src",o.book.image,c.LSH),c.xp6(4),c.Oqu(o.book.title),c.xp6(2),c.hij(" ",o.book.info," "),c.xp6(5),c.hij(" ",o.book.author," "),c.xp6(2),c.hij("Genre : ",o.book.genre,""),c.xp6(1),c.Q6J("ngIf",o.isAdmin))},directives:[t.O5,n.yS],styles:[".container[_ngcontent-%COMP%]{height:80vh;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]{border-radius:5%;background-color:#efd99b;margin:1%;padding:1%}li[_ngcontent-%COMP%]{background-color:#efd99b}.img-col[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.btn[_ngcontent-%COMP%]{margin-right:2%}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}"]}),e})(),T=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-books"]],decls:1,vars:0,template:function(a,o){1&a&&c._UZ(0,"router-outlet")},directives:[n.lC],styles:[""]}),e})();function U(e,i){1&e&&(c.TgZ(0,"li",6),c.TgZ(1,"a",13),c._uU(2,"Add Books"),c.qZA(),c.qZA())}function w(e,i){1&e&&(c.TgZ(0,"li",6),c.TgZ(1,"a",14),c._uU(2,"Add Authors"),c.qZA(),c.qZA())}let P=(()=>{class e{constructor(a,o){this.auth=a,this.router=o,this.isAdmin=!1}ngOnInit(){this.isAdmin=this.auth.isAdminRole()}logout(){localStorage.clear(),this.router.navigate(["/"])}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(h.e),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-header"]],decls:22,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light",2,"background-color","#70560d"],["routerLink","/main/home",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"navbar-nav","main"],["routerLinkActive","active",1,"nav-item"],["routerLink","/main/home",1,"nav-link"],["routerLink","/main/books",1,"nav-link"],["routerLinkActive","active","class","nav-item",4,"ngIf"],["routerLink","/main/authors",1,"nav-link"],[1,"nav","navbar-nav","justify-content-end","logout"],[1,"btn","btn-sm","btn-outline-light",3,"click"],["routerLink","/main/addBook",1,"nav-link"],["routerLink","/main/addAuthor",1,"nav-link"]],template:function(a,o){1&a&&(c.TgZ(0,"nav",0),c.TgZ(1,"a",1),c._uU(2,"LibraryApp"),c.qZA(),c.TgZ(3,"button",2),c._UZ(4,"span",3),c.qZA(),c.TgZ(5,"div",4),c.TgZ(6,"ul",5),c.TgZ(7,"li",6),c.TgZ(8,"a",7),c._uU(9,"Home "),c.qZA(),c.qZA(),c.TgZ(10,"li",6),c.TgZ(11,"a",8),c._uU(12,"Books"),c.qZA(),c.qZA(),c.YNc(13,U,3,0,"li",9),c.TgZ(14,"li",6),c.TgZ(15,"a",10),c._uU(16,"Authors"),c.qZA(),c.qZA(),c.YNc(17,w,3,0,"li",9),c.qZA(),c.TgZ(18,"ul",11),c.TgZ(19,"li",6),c.TgZ(20,"button",12),c.NdJ("click",function(){return o.logout()}),c._uU(21," Logout "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(13),c.Q6J("ngIf",o.isAdmin),c.xp6(4),c.Q6J("ngIf",o.isAdmin))},directives:[n.yS,n.Od,t.O5],styles:["nav[_ngcontent-%COMP%]{padding:1% 5%;font-size:large}ul[_ngcontent-%COMP%]{width:100%}ul.main[_ngcontent-%COMP%]{justify-content:space-around}"]}),e})();var d={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},u={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},b={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},C={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},g=m(9434);let l0=(()=>{class e{constructor(){this.faFacebook=d,this.faTwitter=C,this.faLinkedin=b,this.faInstagram=u}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-footer"]],decls:10,vars:4,consts:[[1,"fa-2x",3,"icon"]],template:function(a,o){1&a&&(c.TgZ(0,"div"),c.TgZ(1,"ul"),c.TgZ(2,"li"),c._UZ(3,"fa-icon",0),c.qZA(),c.TgZ(4,"li"),c._UZ(5,"fa-icon",0),c.qZA(),c.TgZ(6,"li"),c._UZ(7,"fa-icon",0),c.qZA(),c.TgZ(8,"li"),c._UZ(9,"fa-icon",0),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(3),c.Q6J("icon",o.faFacebook),c.xp6(2),c.Q6J("icon",o.faTwitter),c.xp6(2),c.Q6J("icon",o.faLinkedin),c.xp6(2),c.Q6J("icon",o.faInstagram))},directives:[g.BN],styles:["ul[_ngcontent-%COMP%]{padding:2%;list-style-type:none;width:100%;display:flex;flex-direction:row;justify-content:space-evenly}div[_ngcontent-%COMP%]{width:100%;background-color:#70560d}"]}),e})(),r0=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-dashboard"]],decls:3,vars:0,template:function(a,o){1&a&&(c._UZ(0,"app-header"),c._UZ(1,"router-outlet"),c._UZ(2,"app-footer"))},directives:[P,n.lC,l0],styles:[""]}),e})(),H=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home"]],decls:116,vars:0,consts:[[1,"dock"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"panel"],[1,"panel-body"],[1,"row","story"],[1,"col-md-2","col-sm-3","text-center"],["href","#",1,"story-title"],["alt","","src","http://api.randomuser.me/portraits/thumb/men/58.jpg",1,"img-circle",2,"width","100px","height","100px"],[1,"col-md-10","col-sm-9"],[1,"col-xs-9"],[1,"label","label-default"],[1,"text-muted",2,"font-family","courier, 'new courier'"],["href","#",1,"text-muted"],[1,"col-xs-3"],["alt","","src","http://api.randomuser.me/portraits/thumb/women/56.jpg",1,"img-circle",2,"width","100px","height","100px"],["alt","","src","http://api.randomuser.me/portraits/thumb/men/29.jpg",1,"img-circle",2,"width","100px","height","100px"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"div",5),c.TgZ(6,"div",6),c._UZ(7,"br"),c.TgZ(8,"div",7),c.TgZ(9,"a",8),c._UZ(10,"img",9),c.qZA(),c.qZA(),c.TgZ(11,"div",10),c.TgZ(12,"h3"),c._uU(13,"Repurpose Content to Reach a Wider Audience"),c.qZA(),c.TgZ(14,"div",2),c.TgZ(15,"div",11),c.TgZ(16,"h4"),c.TgZ(17,"span",12),c._uU(18,"97thfloor.com"),c.qZA(),c.qZA(),c.TgZ(19,"h4"),c.TgZ(20,"small",13),c._uU(21,"2 hours ago \u2022 "),c.TgZ(22,"a",14),c._uU(23,"Read More"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"div",15),c.qZA(),c._UZ(25,"br"),c._UZ(26,"br"),c.qZA(),c.qZA(),c._UZ(27,"hr"),c.TgZ(28,"div",6),c._UZ(29,"br"),c.TgZ(30,"div",7),c.TgZ(31,"a",8),c._UZ(32,"img",16),c.qZA(),c.qZA(),c.TgZ(33,"div",10),c.TgZ(34,"h3"),c._uU(35,"14 Useful Sites for Designers"),c.qZA(),c.TgZ(36,"div",2),c.TgZ(37,"div",11),c.TgZ(38,"h4"),c.TgZ(39,"span",12),c._uU(40,"devgarage.com"),c.qZA(),c.qZA(),c.TgZ(41,"h4"),c.TgZ(42,"small",13),c._uU(43,"Yesterday \u2022 "),c.TgZ(44,"a",14),c._uU(45,"Read More"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(46,"div",15),c.qZA(),c._UZ(47,"br"),c._UZ(48,"br"),c.qZA(),c.qZA(),c._UZ(49,"hr"),c.TgZ(50,"div",6),c._UZ(51,"br"),c.TgZ(52,"div",7),c.TgZ(53,"a",8),c._UZ(54,"img",17),c.qZA(),c.qZA(),c.TgZ(55,"div",10),c.TgZ(56,"h3"),c._uU(57,"Measuring Your Link Building with Google Analytics"),c.qZA(),c.TgZ(58,"div",2),c.TgZ(59,"div",11),c.TgZ(60,"h4"),c.TgZ(61,"span",12),c._uU(62,"searchenginewatch.com"),c.qZA(),c.qZA(),c.TgZ(63,"h4"),c.TgZ(64,"small",13),c._uU(65,"Yesterday \u2022 "),c.TgZ(66,"a",14),c._uU(67,"Read More"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(68,"div",15),c.qZA(),c._UZ(69,"br"),c._UZ(70,"br"),c.qZA(),c.qZA(),c._UZ(71,"hr"),c.TgZ(72,"div",6),c._UZ(73,"br"),c.TgZ(74,"div",7),c.TgZ(75,"a",8),c._UZ(76,"img",16),c.qZA(),c.qZA(),c.TgZ(77,"div",10),c.TgZ(78,"h3"),c._uU(79," Dramatically Raise the Value of Any Piece of Content with These 27 Tactics "),c.qZA(),c.TgZ(80,"div",2),c.TgZ(81,"div",11),c.TgZ(82,"h4"),c.TgZ(83,"span",12),c._uU(84,"searchenginewatch.com"),c.qZA(),c.qZA(),c.TgZ(85,"h4"),c.TgZ(86,"small",13),c._uU(87,"2 days ago \u2022 "),c.TgZ(88,"a",14),c._uU(89,"Read More"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(90,"div",15),c.qZA(),c._UZ(91,"br"),c._UZ(92,"br"),c.qZA(),c.qZA(),c._UZ(93,"hr"),c.TgZ(94,"div",6),c._UZ(95,"br"),c.TgZ(96,"div",7),c.TgZ(97,"a",8),c._UZ(98,"img",17),c.qZA(),c.qZA(),c.TgZ(99,"div",10),c.TgZ(100,"h3"),c._uU(101,"TrendPaper - What's Trending in the World"),c.qZA(),c.TgZ(102,"div",2),c.TgZ(103,"div",11),c.TgZ(104,"h4"),c.TgZ(105,"span",12),c._uU(106,"betali.st"),c.qZA(),c.qZA(),c.TgZ(107,"h4"),c.TgZ(108,"small",13),c._uU(109,"Last week \u2022 "),c.TgZ(110,"a",14),c._uU(111,"Read More"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(112,"div",15),c.qZA(),c._UZ(113,"br"),c._UZ(114,"br"),c.qZA(),c.qZA(),c._UZ(115,"hr"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA())},styles:[".dock[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{margin-top:2%}.story[_ngcontent-%COMP%]{background-color:#efd99b;padding-top:1.5%}.story[_ngcontent-%COMP%]:hover{box-shadow:#00000059 0 5px 15px}"]}),e})();const f0=[{path:"",component:r0,children:[{path:"",component:H},{path:"home",component:H},{path:"books",component:T,children:[{path:"",component:k},{path:":id",component:_},{path:":id/update",component:(()=>{class e{constructor(a,o,f,r){this.auth=a,this.bookService=o,this.route=f,this.router=r,this.book={_id:"",title:"",info:"",author:"",genre:"",image:""}}ngOnInit(){this.route.params.subscribe(a=>{this.bookService.getBook(a.id).subscribe(o=>{this.book=JSON.parse(JSON.stringify(o))})})}submit(){this.bookService.updateBook(this.book,this.book._id).subscribe(a=>{}),this.router.navigate(["main/books"])}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(h.e),c.Y36(s),c.Y36(n.gz),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-update-book"]],decls:26,vars:5,consts:[[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","title",1,"form-label"],["name","title","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","author",1,"form-label"],["name","author","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","info",1,"form-label"],["name","info","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","genre",1,"form-label"],["name","genre","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","image",1,"form-label"],["name","image","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"h3"),c._uU(2,"Add Book"),c.qZA(),c.TgZ(3,"form",1),c.NdJ("ngSubmit",function(){return o.submit()}),c.TgZ(4,"div",2),c.TgZ(5,"label",3),c._uU(6,"Book Title"),c.qZA(),c.TgZ(7,"input",4),c.NdJ("ngModelChange",function(r){return o.book.title=r}),c.qZA(),c.qZA(),c.TgZ(8,"div",2),c.TgZ(9,"label",5),c._uU(10,"Author"),c.qZA(),c.TgZ(11,"input",6),c.NdJ("ngModelChange",function(r){return o.book.author=r}),c.qZA(),c.qZA(),c.TgZ(12,"div",2),c.TgZ(13,"label",7),c._uU(14,"Book Summary"),c.qZA(),c.TgZ(15,"input",8),c.NdJ("ngModelChange",function(r){return o.book.info=r}),c.qZA(),c.qZA(),c.TgZ(16,"div",2),c.TgZ(17,"label",9),c._uU(18,"Genre"),c.qZA(),c.TgZ(19,"input",10),c.NdJ("ngModelChange",function(r){return o.book.genre=r}),c.qZA(),c.qZA(),c.TgZ(20,"div",2),c.TgZ(21,"label",11),c._uU(22,"Book Image"),c.qZA(),c.TgZ(23,"input",12),c.NdJ("ngModelChange",function(r){return o.book.image=r}),c.qZA(),c.qZA(),c.TgZ(24,"button",13),c._uU(25,"Submit"),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(7),c.Q6J("ngModel",o.book.title),c.xp6(4),c.Q6J("ngModel",o.book.author),c.xp6(4),c.Q6J("ngModel",o.book.info),c.xp6(4),c.Q6J("ngModel",o.book.genre),c.xp6(4),c.Q6J("ngModel",o.book.image))},directives:[l._Y,l.JL,l.F,l.Fj,l.Q7,l.JJ,l.On],styles:["form[_ngcontent-%COMP%]{background-color:#efd99b;padding:5%;margin:5%}.container[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:2%;text-align:center}"]}),e})(),canActivate:[v]}]},{path:"authors",component:q,children:[{path:"",component:L},{path:":id",component:N},{path:":id/update",component:(()=>{class e{constructor(a,o,f){this.authorService=a,this.route=o,this.router=f,this.author={_id:"",author:"",info:"",country:"",language:"",image:""}}ngOnInit(){this.route.params.subscribe(a=>{this.authorService.getAuthor(a.id).subscribe(o=>{this.author=JSON.parse(JSON.stringify(o))})})}submit(){this.authorService.updateAuthor(this.author,this.author._id).subscribe(a=>{}),this.router.navigate(["main/authors"])}}return e.\u0275fac=function(a){return new(a||e)(c.Y36(z),c.Y36(n.gz),c.Y36(n.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-update-author"]],decls:26,vars:5,consts:[[1,"container"],[3,"ngSubmit"],[1,"mb-3"],["for","author",1,"form-label"],["name","author","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","country",1,"form-label"],["name","country","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","info",1,"form-label"],["name","info","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","language",1,"form-label"],["name","language","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","image",1,"form-label"],["name","image","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(a,o){1&a&&(c.TgZ(0,"div",0),c.TgZ(1,"h3"),c._uU(2,"Add Book"),c.qZA(),c.TgZ(3,"form",1),c.NdJ("ngSubmit",function(){return o.submit()}),c.TgZ(4,"div",2),c.TgZ(5,"label",3),c._uU(6,"Author Name"),c.qZA(),c.TgZ(7,"input",4),c.NdJ("ngModelChange",function(r){return o.author.author=r}),c.qZA(),c.qZA(),c.TgZ(8,"div",2),c.TgZ(9,"label",5),c._uU(10,"Country"),c.qZA(),c.TgZ(11,"input",6),c.NdJ("ngModelChange",function(r){return o.author.country=r}),c.qZA(),c.qZA(),c.TgZ(12,"div",2),c.TgZ(13,"label",7),c._uU(14,"Author Info"),c.qZA(),c.TgZ(15,"input",8),c.NdJ("ngModelChange",function(r){return o.author.info=r}),c.qZA(),c.qZA(),c.TgZ(16,"div",2),c.TgZ(17,"label",9),c._uU(18,"Language"),c.qZA(),c.TgZ(19,"input",10),c.NdJ("ngModelChange",function(r){return o.author.language=r}),c.qZA(),c.qZA(),c.TgZ(20,"div",2),c.TgZ(21,"label",11),c._uU(22,"Author Image"),c.qZA(),c.TgZ(23,"input",12),c.NdJ("ngModelChange",function(r){return o.author.image=r}),c.qZA(),c.qZA(),c.TgZ(24,"button",13),c._uU(25,"Submit"),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(7),c.Q6J("ngModel",o.author.author),c.xp6(4),c.Q6J("ngModel",o.author.country),c.xp6(4),c.Q6J("ngModel",o.author.info),c.xp6(4),c.Q6J("ngModel",o.author.language),c.xp6(4),c.Q6J("ngModel",o.author.image))},directives:[l._Y,l.JL,l.F,l.Fj,l.Q7,l.JJ,l.On],styles:["form[_ngcontent-%COMP%]{background-color:#efd99b;padding:5%;margin:5%}.container[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:2%;text-align:center}"]}),e})(),canActivate:[v]}]},{path:"addBook",component:V,canActivate:[v]},{path:"addAuthor",component:Z,canActivate:[v]}]}];let n0=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.Bz.forChild(f0)],n.Bz]}),e})(),m0=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[t.ez,n0,g.uH,l.UX,l.u5]]}),e})()}}]);