// Compiled by ClojureScript 1.9.229 {}
goog.provide('antizer_examples.reagent');
goog.require('cljs.core');
goog.require('antizer.reagent');
goog.require('cljsjs.moment.locale.ja');
goog.require('cljsjs.moment');
goog.require('cljsjs.moment.locale.zh_cn');
goog.require('reagent.core');
goog.require('cljsjs.moment.locale.ru');
goog.require('antizer_examples.common');
goog.require('cljsjs.moment.locale.de');
goog.require('cljsjs.moment.locale.es');
goog.require('clojure.string');
antizer_examples.reagent.auto_complete = (function antizer_examples$reagent$auto_complete(){
var data = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("Autocomplete")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.auto_complete,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),((function (data){
return (function (x){
return cljs.core.reset_BANG_.call(null,data,cljs.core.take.call(null,(3),cljs.core.iterate.call(null,((function (data){
return (function (p1__28889_SHARP_){
return [cljs.core.str(p1__28889_SHARP_),cljs.core.str(clojure.string.reverse.call(null,p1__28889_SHARP_))].join('');
});})(data))
,x)));
});})(data))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter something"], null)], null)], null);
});
;})(data))
});
antizer_examples.reagent.avatar = (function antizer_examples$reagent$avatar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Avatar"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#87d068"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),"user",new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#f56a00",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fde3cf"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null),"U"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffbf00"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null),"John"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.badge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.avatar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#108ee9"], null),new cljs.core.Keyword(null,"shape","shape",1190694006),"square",new cljs.core.Keyword(null,"icon","icon",1679606541),"user"], null)], null)], null)], null)], null);
});
antizer_examples.reagent.buttons = (function antizer_examples$reagent$buttons(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null),"Primary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Default"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"danger"], null),"Warning"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"shopping-cart",new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null),"With icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"edit",new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null)], null)], null);
});
antizer_examples.reagent.card = (function antizer_examples$reagent$card(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cards"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Title",new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not the usual lorem ipsum"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"class","class",-2030961996),"card-photo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://unsplash.it/330/120/?random"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Please rate me"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.rate], null)], null)], null)], null);
});
antizer_examples.reagent.carousel = (function antizer_examples$reagent$carousel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Carousel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.carousel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),true,new cljs.core.Keyword(null,"dots","dots",714343900),true], null),(function (){var iter__26746__auto__ = (function antizer_examples$reagent$carousel_$_iter__28894(s__28895){
return (new cljs.core.LazySeq(null,(function (){
var s__28895__$1 = s__28895;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28895__$1);
if(temp__4657__auto__){
var s__28895__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28895__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__28895__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__28897 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__28896 = (0);
while(true){
if((i__28896 < size__26745__auto__)){
var i = cljs.core._nth.call(null,c__26744__auto__,i__28896);
cljs.core.chunk_append.call(null,b__28897,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("https://unsplash.it/400/300/?random="),cljs.core.str(i)].join('')], null)], null)], null));

var G__28898 = (i__28896 + (1));
i__28896 = G__28898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28897),antizer_examples$reagent$carousel_$_iter__28894.call(null,cljs.core.chunk_rest.call(null,s__28895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28897),null);
}
} else {
var i = cljs.core.first.call(null,s__28895__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("https://unsplash.it/400/300/?random="),cljs.core.str(i)].join('')], null)], null)], null),antizer_examples$reagent$carousel_$_iter__28894.call(null,cljs.core.rest.call(null,s__28895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,cljs.core.range.call(null,(3)));
})()], null)], null);
});
antizer_examples.reagent.add_actions_column = (function antizer_examples$reagent$add_actions_column(columns,data_atom){
return cljs.core.conj.call(null,columns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Actions",new cljs.core.Keyword(null,"render","render",-1408033454),(function (p1__28900_SHARP_,p2__28899_SHARP_){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"delete",new cljs.core.Keyword(null,"type","type",1174270348),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.remove.call(null,(function (d){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,p2__28899_SHARP_),"id"),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,data_atom)));
})], null)], null));
})], null));
});
antizer_examples.reagent.datatable = (function antizer_examples$reagent$datatable(){
var data = reagent.core.atom.call(null,antizer_examples.common.people);
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Data Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"columns","columns",1998437288),antizer_examples.reagent.add_actions_column.call(null,antizer_examples.common.columns,data),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),antizer_examples.common.pagination,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),"id",new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (data){
return (function (p1__28902_SHARP_,p2__28901_SHARP_){
var selected = cljs.core.js__GT_clj.call(null,p2__28901_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return antizer.reagent.message_info.call(null,[cljs.core.str("You have selected: "),cljs.core.str(cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),selected))].join(''));
});})(data))
], null)], null)], null)], null);
});
;})(data))
});
antizer_examples.reagent.user_form = (function antizer_examples$reagent$user_form(display_buttons_QMARK_){
var data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(12)], null));
return ((function (data){
return (function (props){
var form = antizer.reagent.get_form.call(null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"horizontal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"User id"], null)),antizer.reagent.decorate_field.call(null,form,"userId",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form,data){
return (function (p1__28903_SHARP_){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),p1__28903_SHARP_.target.value);
});})(form,data))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.input], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"User id"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.ant-input.ant-input-lg","input.ant-input.ant-input-lg",130252405),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"placeholder",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form,data){
return (function (p1__28904_SHARP_){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),p1__28904_SHARP_.target.value);
});})(form,data))
], null)], null)], null),(cljs.core.truth_(display_buttons_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.form_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapper-col","wrapper-col",-1413688923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(6)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form,data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),(5));
});})(form,data))
], null),"Change user id 5"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form,data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),(7));
});})(form,data))
], null),"Change user id to 7"], null)], null)], null):null)], null);
});
;})(data))
});
antizer_examples.reagent.form_example = (function antizer_examples$reagent$form_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Form"], null),antizer.reagent.create_form.call(null,antizer_examples.reagent.user_form.call(null,true))], null);
});
antizer_examples.reagent.localization = (function antizer_examples$reagent$localization(){
var locale_atom = reagent.core.atom.call(null,"en_US");
return ((function (locale_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.reagent.locales.call(null,cljs.core.deref.call(null,locale_atom))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Localization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Choose a language:",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"en_US",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (locale_atom){
return (function (p1__28905_SHARP_){
return antizer_examples.common.set_locale.call(null,p1__28905_SHARP_,locale_atom);
});})(locale_atom))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"en_US"], null),"English"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_ES"], null),"Espa\u00F1ol"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"de_DE"], null),"Deutsch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ru_RU"], null),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"zh_CN"], null),"\u4E2D\u6587"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ja_JP"], null),"\u65E5\u672C\u8A9E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.select_option,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"tlh",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Klingon"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.pagination,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),(40),new cljs.core.Keyword(null,"show-size-changer","show-size-changer",-745395013),true], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.date_picker,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),"ddd MMM Do YYYY",new cljs.core.Keyword(null,"default-value","default-value",232220170),moment(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null),new cljs.core.Keyword(null,"allow-clear","allow-clear",-424919217),false,new cljs.core.Keyword(null,"show-today","show-today",-2140454716),false], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.time_picker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.calendar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"default-value","default-value",232220170),moment()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),antizer_examples.common.columns], null)], null)], null)], null);
});
;})(locale_atom))
});
antizer_examples.reagent.messages = (function antizer_examples$reagent$messages(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_info.call(null,"Normal message");
})], null),"Normal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_success.call(null,"Success message");
})], null),"Success"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_warning.call(null,"Warning message");
})], null),"Warning"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_error.call(null,"Error message");
})], null),"Error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_loading.call(null,"This message will disappear in 10 seconds",(10));
})], null),"Timed"], null)], null);
});
antizer_examples.reagent.modal = (function antizer_examples$reagent$modal(){
var modal1 = reagent.core.atom.call(null,false);
var modal_form = reagent.core.atom.call(null,false);
return ((function (modal1,modal_form){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Modal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,true);
});})(modal1,modal_form))
], null),"Modal Dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.deref.call(null,modal1),new cljs.core.Keyword(null,"title","title",636505583),"Title of modal",new cljs.core.Keyword(null,"on-ok","on-ok",-1218416370),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,false);
});})(modal1,modal_form))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,false);
});})(modal1,modal_form))
], null),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Some content 1"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return antizer.reagent.modal_confirm.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Are you sure?",new cljs.core.Keyword(null,"content","content",15833224),"Some content"], null));
});})(modal1,modal_form))
], null),"Confirmation Modal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,true);
});})(modal1,modal_form))
], null),"Modal Form"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.deref.call(null,modal_form),new cljs.core.Keyword(null,"title","title",636505583),"Modal Form",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"on-ok","on-ok",-1218416370),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,false);
});})(modal1,modal_form))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,false);
});})(modal1,modal_form))
], null),antizer.reagent.create_form.call(null,antizer_examples.reagent.user_form.call(null,false))], null)], null);
});
;})(modal1,modal_form))
});
antizer_examples.reagent.notifications = (function antizer_examples$reagent$notifications(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Notifications"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.notification_open.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Timed Notification",new cljs.core.Keyword(null,"description","description",-1428560544),"This notification will close after 4.5 seconds"], null));
})], null),"Notification"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var key = cljs.core.random_uuid.call(null);
return antizer.reagent.notification_open.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"message","message",-406056002),"Popup Notification",new cljs.core.Keyword(null,"duration","duration",1444101068),(0),new cljs.core.Keyword(null,"btn","btn",1978294651),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key){
return (function (){
return antizer.reagent.notification_close.call(null,key);
});})(key))
], null),"Click to dismiss"], null)),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"description","description",-1428560544),"This notification will not close until it is dismissed"], null));
})], null),"Popup Notification"], null)], null);
});
antizer_examples.reagent.progress = (function antizer_examples$reagent$progress(){
var percent = reagent.core.atom.call(null,(50));
return ((function (percent){
return (function (){
var operate = ((function (percent){
return (function (operation){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),operation)){
if((cljs.core.deref.call(null,percent) < (100))){
return cljs.core.swap_BANG_.call(null,percent,cljs.core._PLUS_,(10));
} else {
return null;
}
} else {
if((cljs.core.deref.call(null,percent) >= (0))){
return cljs.core.swap_BANG_.call(null,percent,cljs.core._,(10));
} else {
return null;
}
}
});})(percent))
;
var status = (((cljs.core.deref.call(null,percent) < (42)))?"exception":((cljs.core._EQ_.call(null,cljs.core.deref.call(null,percent),(100)))?"success":"active"
));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.progress,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.deref.call(null,percent),new cljs.core.Keyword(null,"status","status",-1997798413),status], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (operate,status,percent){
return (function (){
return operate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661));
});})(operate,status,percent))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"minus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (operate,status,percent){
return (function (){
return operate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492));
});})(operate,status,percent))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.progress,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.deref.call(null,percent),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"42%"], null)], null)], null)], null);
});
;})(percent))
});
antizer_examples.reagent.timeline = (function antizer_examples$reagent$timeline(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Timeline"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),"6th June Project created"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),"8th June Initial prototype done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.timeline_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),"26th June Final Release"], null)], null)], null);
});
antizer_examples.reagent.tooltip = (function antizer_examples$reagent$tooltip(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tooltips and Popups ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Found me!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"question-circle-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Tooltip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Tooltip"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.popover,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"Dum dee dee dum dee dee dum",new cljs.core.Keyword(null,"title","title",636505583),"Deedee dum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Popover"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.popconfirm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Are you sure?",new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (){
return antizer.reagent.message_success.call(null,"You clicked OK");
}),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return antizer.reagent.message_error.call(null,"You clicked Cancel");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,"Click to confirm"], null)], null)], null);
});
antizer_examples.reagent.tree = (function antizer_examples$reagent$tree(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkable","checkable",1153780436),true,new cljs.core.Keyword(null,"default-expanded-keys","default-expanded-keys",765837139),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["functional","clr","jvm","javascript","nodejs"], null),new cljs.core.Keyword(null,"default-checked-keys","default-checked-keys",-2110500491),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure","clojure-clr","cljs","lumo","planck"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Functional Languages",new cljs.core.Keyword(null,"key","key",-1516042587),"functional"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"CLR",new cljs.core.Keyword(null,"key","key",-1516042587),"clr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure CLR",new cljs.core.Keyword(null,"key","key",-1516042587),"clojure-clr"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Haskell",new cljs.core.Keyword(null,"key","key",-1516042587),"haskell"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"JVM",new cljs.core.Keyword(null,"key","key",-1516042587),"jvm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure",new cljs.core.Keyword(null,"key","key",-1516042587),"clojure"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Frege",new cljs.core.Keyword(null,"key","key",-1516042587),"frege"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Scala",new cljs.core.Keyword(null,"disable-checkbox","disable-checkbox",714283732),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"JavaScript Engine",new cljs.core.Keyword(null,"key","key",-1516042587),"javascript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ClojureScript",new cljs.core.Keyword(null,"key","key",-1516042587),"cljs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Node.js",new cljs.core.Keyword(null,"key","key",-1516042587),"nodejs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lumo",new cljs.core.Keyword(null,"key","key",-1516042587),"lumo"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.tree_tree_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Planck",new cljs.core.Keyword(null,"key","key",-1516042587),"planck"], null)], null)], null)], null)], null);
});
/**
 * Render each example within a bordered box
 */
antizer_examples.reagent.render_example = (function antizer_examples$reagent$render_example(examples){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var iter__26746__auto__ = (function antizer_examples$reagent$render_example_$_iter__28910(s__28911){
return (new cljs.core.LazySeq(null,(function (){
var s__28911__$1 = s__28911;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28911__$1);
if(temp__4657__auto__){
var s__28911__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28911__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__28911__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__28913 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__28912 = (0);
while(true){
if((i__28912 < size__26745__auto__)){
var example = cljs.core._nth.call(null,c__26744__auto__,i__28912);
cljs.core.chunk_append.call(null,b__28913,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null));

var G__28914 = (i__28912 + (1));
i__28912 = G__28914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28913),antizer_examples$reagent$render_example_$_iter__28910.call(null,cljs.core.chunk_rest.call(null,s__28911__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28913),null);
}
} else {
var example = cljs.core.first.call(null,s__28911__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null),antizer_examples$reagent$render_example_$_iter__28910.call(null,cljs.core.rest.call(null,s__28911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,examples);
})()], null);
});
antizer_examples.reagent.render_full_row = (function antizer_examples$reagent$render_full_row(example){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null)], null)], null)], null);
});
antizer_examples.reagent.content_area = (function antizer_examples$reagent$content_area(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content-area"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(12)], null),antizer_examples.reagent.render_example.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.carousel,antizer_examples.reagent.buttons,antizer_examples.reagent.messages,antizer_examples.reagent.timeline,antizer_examples.reagent.tree,antizer_examples.reagent.progress], null)),antizer_examples.reagent.render_example.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.card,antizer_examples.reagent.tooltip,antizer_examples.reagent.notifications,antizer_examples.reagent.auto_complete,antizer_examples.reagent.localization,antizer_examples.reagent.modal,antizer_examples.reagent.avatar], null)),antizer_examples.reagent.render_full_row.call(null,antizer_examples.reagent.form_example),antizer_examples.reagent.render_full_row.call(null,antizer_examples.reagent.datatable)], null)], null);
});
antizer_examples.reagent.side_menu = (function antizer_examples$reagent$side_menu(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"inline",new cljs.core.Keyword(null,"theme","theme",-1247880880),"dark",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Menu without icons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Menu Item"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_sub_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Sub Menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Item 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,"Item 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Menu with Icons"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"home"], null)], null),"Menu Item"], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_sub_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"setting"], null)], null),"Sub Menu"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"user"], null)], null),"Item 1"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.menu_item,reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"notification"], null)], null),"Item 2"], null))], null)], null)], null);
});
antizer_examples.reagent.render_layout = (function antizer_examples$reagent$render_layout(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.reagent.locales.call(null,"en_US")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.affix,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner"], null),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.banner-header","h2.banner-header",-747771270),"Antizer Reagent Example"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),(1),new cljs.core.Keyword(null,"offset","offset",296498311),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/priornix/antizer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner-logo",new cljs.core.Keyword(null,"type","type",1174270348),"github"], null)], null)], null)], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_sider,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.side_menu], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.content_area], null)], null)], null)], null)], null);
});
});
antizer_examples.reagent.init_BANG_ = (function antizer_examples$reagent$init_BANG_(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.reagent.render_layout], null),document.getElementById("app"));
});

//# sourceMappingURL=reagent.js.map?rel=1513181587198