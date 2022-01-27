"use strict";(self.webpackChunkLab_aguas_cunoc=self.webpackChunkLab_aguas_cunoc||[]).push([[686],{3686:(O,g,n)=>{n.r(g),n.d(g,{EstudioModule:()=>S});var l=n(8583),Z=n(9516),a=n(665),t=n(3018),T=n(996),q=n(1841);let p=(()=>{class i extends T.O{constructor(e){super(e),this.http=e,this.url={estudio:"estudio",categoria:"categoria-estudio"}}getEstudios(e){return this.get(this.url.estudio,e)}getCategorias(e){return this.get(this.url.categoria,e)}getEstudio(e,o){return this.get(this.url.estudio+"/"+e+"/show",o)}getCategoria(e,o){return this.get(this.url.categoria+"/"+e+"/show",o)}storeEstudio(e){return this.post(this.url.estudio,e)}storeCategoria(e){return this.post(this.url.categoria,e)}deleteEstudio(e,o){return this.delete(this.url.estudio+"/"+e,o)}deleteCategoria(e,o){return this.delete(this.url.categoria+"/"+e,o)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(q.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var b=n(9344),d=n(8295),m=n(9983);function _(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"div",34),t.TgZ(9,"button",35),t._UZ(10,"i",36),t.qZA(),t.TgZ(11,"button",37),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw().modalEditar(u)}),t._UZ(12,"i",38),t.qZA(),t.TgZ(13,"button",39),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw().modalEditar(u)}),t._UZ(14,"i",40),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.descripcion)}}function A(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Por favor ingresar nombre de la categor\xeda"),t.qZA())}let h=(()=>{class i{constructor(e,o,s){this.estudioService=e,this.fb=o,this.toastr=s,this.btn_disabled=!1,this.accion="Nueva categor\xeda",this.categorias=[],this.categoriaForm=this.fb.group({nombre:["",a.kI.required],descripcion:[""],id:["0"]})}ngOnInit(){this.loadCategorias()}loadCategorias(){this.estudioService.getCategorias().subscribe(e=>{this.categorias=e.body})}modalNuevo(){this.accion="Nueva categor\xeda",this.categoriaForm.reset()}modalEditar(e){this.accion="Editar categor\xeda",this.categoriaForm.controls.nombre.setValue(e.nombre),this.categoriaForm.controls.id.setValue(e.id),this.categoriaForm.controls.descripcion.setValue(e.descripcion)}onSubmit(){this.btn_disabled=!0,this.estudioService.storeCategoria(this.categoriaForm.value).subscribe(e=>{200==e.status&&(this.toastr.success(e.body.message||"Operaci\xf3n completada","SUCCESS"),this.loadCategorias(),setTimeout(()=>{this.btn_disabled=!1},2e3))},e=>{setTimeout(()=>{this.btn_disabled=!1},2e3),this.toastr.error(e.error.message,"ERROR")})}eliminarParametro(e){this.estudioService.deleteCategoria(e).subscribe(o=>{200==o.status&&(this.toastr.success(o.body.message||"Operaci\xf3n completada","SUCCESS"),this.loadCategorias()),o.success&&(this.toastr.success(o.message||"Operaci\xf3n completada","SUCCESS"),this.loadCategorias())},o=>{this.toastr.error(o.error.message,"ERROR")})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p),t.Y36(a.qu),t.Y36(b._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-index-categoria"]],decls:85,vars:9,consts:[[1,"card"],[1,"card-header","row"],[1,"col-md-11"],[1,""],[1,"col-md-1"],["data-toggle","modal","data-target","#modal-editar",1,"btn","btn-sm","btn-block","btn-primary",3,"click"],[1,"card-body"],[1,"table","table-stripped","table-bordered"],[4,"ngFor","ngForOf"],["id","modal-editar",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[3,"formGroup","ngSubmit"],[1,"modal-body"],["type","hidden","formControlName","id"],[1,"row"],[1,"col-12","mb-1"],[2,"color","red"],[1,"col-md-4","mb-1"],["appearance","outline",1,"field"],["matInput","","type","text","placeholder","","formControlName","nombre","required","",1,"example-right-align"],[4,"ngIf"],[1,"col-md-8","mb-1"],["matInput","","type","text","placeholder","","formControlName","descripcion",1,"example-right-align"],[1,"modal-footer","justify-content-between"],["type","button","data-dismiss","modal",1,"btn","btn-default"],["type","submit",1,"btn","btn-primary",3,"disabled"],["id","modal-eliminar",1,"modal","fade"],["role","alert",1,"alert","alert-danger"],["type","submit","data-dismiss","modal",1,"btn","btn-danger",3,"click"],[1,"btn-group"],["type","button",1,"btn","btn-sm","btn-info"],[1,"fas","fa-eye"],["type","button","data-toggle","modal","data-target","#modal-editar",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fas","fa-edit"],["type","button","data-toggle","modal","data-target","#modal-eliminar",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fas","fa-trash"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h5",3),t._uU(4,"Listado de categor\xedas de los estudios"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return o.modalNuevo()}),t._uU(7," Nuevo "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"table",7),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"ID"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Nombre"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Descripci\xf3n"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Acciones"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,_,15,3,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"div",11),t.TgZ(25,"div",12),t.TgZ(26,"h4",13),t._uU(27),t.qZA(),t.TgZ(28,"button",14),t.TgZ(29,"span",15),t._uU(30,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"form",16),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(32,"div",17),t._UZ(33,"input",18),t.TgZ(34,"div",19),t.TgZ(35,"div",20),t.TgZ(36,"small",21),t._uU(37,"* Campos obligatorios"),t.qZA(),t.qZA(),t._UZ(38,"hr"),t.TgZ(39,"div",22),t.TgZ(40,"mat-form-field",23),t.TgZ(41,"mat-label"),t._uU(42,"Nombre"),t.qZA(),t._UZ(43,"input",24),t.YNc(44,A,2,0,"mat-error",25),t.qZA(),t.qZA(),t.TgZ(45,"div",26),t.TgZ(46,"mat-form-field",23),t.TgZ(47,"mat-label"),t._uU(48,"Descripcion"),t.qZA(),t._UZ(49,"input",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",28),t.TgZ(51,"button",29),t._uU(52,"Cerrar"),t.qZA(),t.TgZ(53,"button",30),t._uU(54,"Guardar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",31),t.TgZ(56,"div",10),t.TgZ(57,"div",11),t.TgZ(58,"div",12),t.TgZ(59,"h4",13),t._uU(60,"Eliminar registro"),t.qZA(),t.TgZ(61,"button",14),t.TgZ(62,"span",15),t._uU(63,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(64,"div",17),t.TgZ(65,"div",32),t.TgZ(66,"h3"),t._uU(67,"Est\xe1 seguro de eliminar este departamento?"),t.qZA(),t.TgZ(68,"p"),t._uU(69,"Nombre: "),t.TgZ(70,"b"),t._uU(71),t.qZA(),t.qZA(),t.TgZ(72,"p"),t._uU(73,"Descripci\xf3n: "),t.TgZ(74,"b"),t._uU(75),t.qZA(),t.qZA(),t._UZ(76,"hr"),t._UZ(77,"br"),t.TgZ(78,"b"),t._uU(79,"Esta acci\xf3n no se puede deshacer!!"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(80,"div",28),t.TgZ(81,"button",29),t._uU(82,"Cerrar"),t.qZA(),t.TgZ(83,"button",33),t.NdJ("click",function(){return o.eliminarParametro(o.categoriaForm.controls.id.value)}),t._uU(84,"Eliminar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(21),t.Q6J("ngForOf",o.categorias),t.xp6(6),t.Oqu(o.accion),t.xp6(4),t.Udp("font-size",15,"px"),t.Q6J("formGroup",o.categoriaForm),t.xp6(13),t.Q6J("ngIf",null==o.categoriaForm.get("nombre").errors?null:o.categoriaForm.get("nombre").errors.required),t.xp6(9),t.Q6J("disabled",!o.categoriaForm.valid||o.btn_disabled),t.xp6(18),t.Oqu(o.categoriaForm.controls.nombre.value),t.xp6(4),t.Oqu(o.categoriaForm.controls.descripcion.value))},directives:[l.sg,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,d.KE,d.hX,m.Nt,a.Q7,l.O5,d.TO],styles:[""]}),i})(),f=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ver-categoria"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"Ver categoria works!"),t.qZA())},styles:[""]}),i})();function v(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"div",40),t.TgZ(11,"button",41),t._UZ(12,"i",42),t.qZA(),t.TgZ(13,"button",43),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw().modalEditar(u)}),t._UZ(14,"i",44),t.qZA(),t.TgZ(15,"button",45),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw().modalEditar(u)}),t._UZ(16,"i",46),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e.categoria),t.xp6(2),t.Oqu(e.codigo),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.descripcion)}}function C(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Por favor ingresar nombre del par\xe1metro"),t.qZA())}function U(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Por favor ingresar c\xf3digo"),t.qZA())}function E(i,r){if(1&i&&(t.TgZ(0,"option",47),t._uU(1),t.qZA()),2&i){const e=r.$implicit,o=t.oxw();t.Q6J("value",e.id)("selected",e.id==o.estudioForm.controls.categoria_id.value),t.xp6(1),t.hij("",e.nombre," ")}}const x=[{path:"categoria",component:h},{path:"index",component:(()=>{class i{constructor(e,o,s){this.estudioService=e,this.fb=o,this.toastr=s,this.btn_disabled=!1,this.accion="Nuevo estudio",this.estudios=[],this.categorias=[],this.estudioForm=this.fb.group({nombre:["",a.kI.required],codigo:["",a.kI.required],descripcion:[""],categoria_id:[""],id:["0"]})}ngOnInit(){this.loadParametros(),this.estudioService.getCategorias().subscribe(e=>{this.categorias=e.body})}loadParametros(){this.estudioService.getEstudios().subscribe(e=>{this.estudios=e.body})}modalNuevo(){this.accion="Nuevo estudio",this.estudioForm.reset()}modalEditar(e){this.accion="Editar estudio",this.estudioForm.controls.id.setValue(e.id),this.estudioForm.controls.nombre.setValue(e.nombre),this.estudioForm.controls.descripcion.setValue(e.descripcion),this.estudioForm.controls.codigo.setValue(e.codigo),this.estudioForm.controls.categoria_id.setValue(e.categoria_id)}onSubmit(){this.btn_disabled=!0,this.estudioService.storeEstudio(this.estudioForm.value).subscribe(e=>{200==e.status&&(this.toastr.success(e.body.message||"Operaci\xf3n completada","SUCCESS"),this.loadParametros(),setTimeout(()=>{this.btn_disabled=!1},2e3))},e=>{setTimeout(()=>{this.btn_disabled=!1},2e3),this.toastr.error(e.error.message,"ERROR")})}eliminarParametro(e){this.estudioService.deleteEstudio(e).subscribe(o=>{200==o.status&&(this.toastr.success(o.body.message||"Operaci\xf3n completada","SUCCESS"),this.loadParametros()),o.success&&(this.toastr.success(o.message||"Operaci\xf3n completada","SUCCESS"),this.loadParametros())},o=>{this.toastr.error(o.error.message,"ERROR")})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p),t.Y36(a.qu),t.Y36(b._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-index-estudio"]],decls:103,vars:12,consts:[[1,"card"],[1,"card-header","row"],[1,"col-md-11"],[1,""],[1,"col-md-1"],["data-toggle","modal","data-target","#modal-editar",1,"btn","btn-sm","btn-block","btn-primary",3,"click"],[1,"card-body"],[1,"table","table-sm","table-stripped","table-bordered"],[4,"ngFor","ngForOf"],["id","modal-editar",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[3,"formGroup","ngSubmit"],[1,"modal-body"],["type","hidden","formControlName","id"],[1,"row"],[1,"col-12","mb-1"],[2,"color","red"],[1,"col-md-8","mb-1"],["appearance","outline",1,"field"],["matInput","","type","text","placeholder","","formControlName","nombre","required","",1,"example-right-align"],[4,"ngIf"],[1,"col-md-4","mb-1"],["matInput","","type","text","placeholder","","formControlName","codigo","required","",1,"example-right-align"],[1,"col-md-7","mb-1"],["matInput","","type","text","placeholder","","formControlName","descripcion",1,"example-right-align"],[1,"col-md-5","mb-1"],[1,"form-group"],["formControlName","categoria_id","required","",1,"form-control"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-between"],["type","button","data-dismiss","modal",1,"btn","btn-default"],["type","submit",1,"btn","btn-primary",3,"disabled"],["id","modal-eliminar",1,"modal","fade"],["role","alert",1,"alert","alert-danger"],["type","submit","data-dismiss","modal",1,"btn","btn-danger",3,"click"],[1,"btn-group"],["type","button",1,"btn","btn-sm","btn-info"],[1,"fas","fa-eye"],["type","button","data-toggle","modal","data-target","#modal-editar",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fas","fa-edit"],["type","button","data-toggle","modal","data-target","#modal-eliminar",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fas","fa-trash"],[3,"value","selected"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h5",3),t._uU(4,"Listado de par\xe1metros"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return o.modalNuevo()}),t._uU(7," Nuevo "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"table",7),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"Categor\xeda"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"C\xf3digo"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Nombre"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Descripci\xf3n"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Acciones"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"tbody"),t.YNc(23,v,17,4,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",9),t.TgZ(25,"div",10),t.TgZ(26,"div",11),t.TgZ(27,"div",12),t.TgZ(28,"h4",13),t._uU(29),t.qZA(),t.TgZ(30,"button",14),t.TgZ(31,"span",15),t._uU(32,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"form",16),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(34,"div",17),t._UZ(35,"input",18),t.TgZ(36,"div",19),t.TgZ(37,"div",20),t.TgZ(38,"small",21),t._uU(39,"* Campos obligatorios"),t.qZA(),t.qZA(),t._UZ(40,"hr"),t.TgZ(41,"div",22),t.TgZ(42,"mat-form-field",23),t.TgZ(43,"mat-label"),t._uU(44,"Nombre"),t.qZA(),t._UZ(45,"input",24),t.YNc(46,C,2,0,"mat-error",25),t.qZA(),t.qZA(),t.TgZ(47,"div",26),t.TgZ(48,"mat-form-field",23),t.TgZ(49,"mat-label"),t._uU(50,"C\xf3digo"),t.qZA(),t._UZ(51,"input",27),t.YNc(52,U,2,0,"mat-error",25),t.qZA(),t.qZA(),t.TgZ(53,"div",28),t.TgZ(54,"mat-form-field",23),t.TgZ(55,"mat-label"),t._uU(56,"Descripci\xf3n"),t.qZA(),t._UZ(57,"input",29),t.qZA(),t.qZA(),t.TgZ(58,"div",30),t.TgZ(59,"div",31),t.TgZ(60,"label"),t._uU(61,"Categoria"),t.qZA(),t.TgZ(62,"select",32),t.YNc(63,E,2,3,"option",33),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(64,"div",34),t.TgZ(65,"button",35),t._uU(66,"Cerrar"),t.qZA(),t.TgZ(67,"button",36),t._uU(68,"Guardar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"div",37),t.TgZ(70,"div",10),t.TgZ(71,"div",11),t.TgZ(72,"div",12),t.TgZ(73,"h4",13),t._uU(74,"Eliminar registro"),t.qZA(),t.TgZ(75,"button",14),t.TgZ(76,"span",15),t._uU(77,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(78,"div",17),t.TgZ(79,"div",38),t.TgZ(80,"h3"),t._uU(81,"Est\xe1 seguro de eliminar este municipio?"),t.qZA(),t.TgZ(82,"p"),t._uU(83,"Nombre: "),t.TgZ(84,"b"),t._uU(85),t.qZA(),t.qZA(),t.TgZ(86,"p"),t._uU(87,"C\xf3digo: "),t.TgZ(88,"b"),t._uU(89),t.qZA(),t.qZA(),t.TgZ(90,"p"),t._uU(91,"Descripci\xf3n: "),t.TgZ(92,"b"),t._uU(93),t.qZA(),t.qZA(),t._UZ(94,"hr"),t._UZ(95,"br"),t.TgZ(96,"b"),t._uU(97,"Esta acci\xf3n no se puede deshacer!!"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(98,"div",34),t.TgZ(99,"button",35),t._uU(100,"Cerrar"),t.qZA(),t.TgZ(101,"button",39),t.NdJ("click",function(){return o.eliminarParametro(o.estudioForm.controls.id.value)}),t._uU(102,"Eliminar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(23),t.Q6J("ngForOf",o.estudios),t.xp6(6),t.Oqu(o.accion),t.xp6(4),t.Udp("font-size",15,"px"),t.Q6J("formGroup",o.estudioForm),t.xp6(13),t.Q6J("ngIf",null==o.estudioForm.get("nombre").errors?null:o.estudioForm.get("nombre").errors.required),t.xp6(6),t.Q6J("ngIf",null==o.estudioForm.get("codigo").errors?null:o.estudioForm.get("codigo").errors.required),t.xp6(11),t.Q6J("ngForOf",o.categorias),t.xp6(4),t.Q6J("disabled",!o.estudioForm.valid||o.btn_disabled),t.xp6(18),t.Oqu(o.estudioForm.controls.nombre.value),t.xp6(4),t.Oqu(o.estudioForm.controls.codigo.value),t.xp6(4),t.Oqu(o.estudioForm.controls.descripcion.value))},directives:[l.sg,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,d.KE,d.hX,m.Nt,a.Q7,l.O5,a.EJ,d.TO,a.YN,a.Kr],styles:[""]}),i})()},{path:"categoria/:id",component:f},{path:"estudio/:id",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ver-estudio"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"ver-estudio works!"),t.qZA())},styles:[""]}),i})()},{path:"**",redirectTo:"index"}];let F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(x)],Z.Bz]}),i})();var y=n(7441),N=n(2613),I=n(7539);let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,F,a.u5,a.UX,m.c,d.lN,y.LD,N.Fk,I.p9]]}),i})()}}]);