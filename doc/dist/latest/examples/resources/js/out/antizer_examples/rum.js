// Compiled by ClojureScript 1.9.229 {}
goog.provide('antizer_examples.rum');
goog.require('cljs.core');
goog.require('antizer.rum');
goog.require('cljsjs.moment.locale.ja');
goog.require('cljsjs.moment');
goog.require('cljsjs.moment.locale.zh_cn');
goog.require('rum.core');
goog.require('cljsjs.moment.locale.ru');
goog.require('antizer_examples.common');
goog.require('cljsjs.moment.locale.de');
goog.require('cljsjs.moment.locale.es');
goog.require('clojure.string');
antizer_examples.rum.auto_complete = rum.core.build_defcs.call(null,(function (state){
var data = new cljs.core.Keyword("antizer-examples.rum","data","antizer-examples.rum/data",-1120401644).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",null,(function (){var attrs30551 = [cljs.core.str("Autocomplete")].join('');
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs30551))?sablono.interpreter.attributes.call(null,attrs30551):null),((cljs.core.map_QMARK_.call(null,attrs30551))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30551)], null)));
})(),sablono.interpreter.interpret.call(null,antizer.rum.auto_complete.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),((function (data){
return (function (x){
return cljs.core.reset_BANG_.call(null,data,cljs.core.take.call(null,(3),cljs.core.iterate.call(null,((function (data){
return (function (p1__30550_SHARP_){
return [cljs.core.str(p1__30550_SHARP_),cljs.core.str(clojure.string.reverse.call(null,p1__30550_SHARP_))].join('');
});})(data))
,x)));
});})(data))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter something"], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("antizer-examples.rum","data","antizer-examples.rum/data",-1120401644))], null),"auto-complete");
antizer_examples.rum.avatar = (function antizer_examples$rum$avatar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Avatar"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),antizer.rum.avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#87d068"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),"user",new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null)),antizer.rum.avatar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#f56a00",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fde3cf"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null),"U"),antizer.rum.avatar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffbf00"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"va-middle"], null),"John"),antizer.rum.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(10)], null),antizer.rum.avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#108ee9"], null),new cljs.core.Keyword(null,"shape","shape",1190694006),"square",new cljs.core.Keyword(null,"icon","icon",1679606541),"user"], null)))], null)], null);
});
antizer_examples.rum.buttons = (function antizer_examples$rum$buttons(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Buttons"], null),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null),"Primary"),antizer.rum.button.call(null,"Default"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"danger"], null),"Warning"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"shopping-cart",new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null),"With icon"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"edit",new cljs.core.Keyword(null,"type","type",1174270348),"primary"], null))], null);
});
antizer_examples.rum.card = (function antizer_examples$rum$card(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cards"], null),antizer.rum.card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Title",new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not the usual lorem ipsum"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),antizer.rum.card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"class","class",-2030961996),"card-photo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://unsplash.it/330/120/?random"], null)], null)], null),antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Please rate me"], null)], null)),antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),antizer.rum.rate.call(null)))], null);
});
antizer_examples.rum.carousel = (function antizer_examples$rum$carousel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Carousel"], null),antizer.rum.carousel.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),true,new cljs.core.Keyword(null,"dots","dots",714343900),true], null),(function (){var iter__26746__auto__ = (function antizer_examples$rum$carousel_$_iter__30556(s__30557){
return (new cljs.core.LazySeq(null,(function (){
var s__30557__$1 = s__30557;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30557__$1);
if(temp__4657__auto__){
var s__30557__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30557__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__30557__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__30559 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__30558 = (0);
while(true){
if((i__30558 < size__26745__auto__)){
var i = cljs.core._nth.call(null,c__26744__auto__,i__30558);
cljs.core.chunk_append.call(null,b__30559,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("https://unsplash.it/400/300/?random="),cljs.core.str(i)].join('')], null)], null)], null));

var G__30560 = (i__30558 + (1));
i__30558 = G__30560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),antizer_examples$rum$carousel_$_iter__30556.call(null,cljs.core.chunk_rest.call(null,s__30557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),null);
}
} else {
var i = cljs.core.first.call(null,s__30557__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("https://unsplash.it/400/300/?random="),cljs.core.str(i)].join('')], null)], null)], null),antizer_examples$rum$carousel_$_iter__30556.call(null,cljs.core.rest.call(null,s__30557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,cljs.core.range.call(null,(3)));
})())], null);
});
antizer_examples.rum.add_actions_column = (function antizer_examples$rum$add_actions_column(columns,data_atom){
return cljs.core.conj.call(null,columns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Actions",new cljs.core.Keyword(null,"render","render",-1408033454),(function (p1__30562_SHARP_,p2__30561_SHARP_){
return antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"delete",new cljs.core.Keyword(null,"type","type",1174270348),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.remove.call(null,(function (d){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,p2__30561_SHARP_),"id"),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,data_atom)));
})], null));
})], null));
});
antizer_examples.rum.datatable = rum.core.build_defcs.call(null,(function (state){
var data = new cljs.core.Keyword("antizer-examples.rum","data","antizer-examples.rum/data",-1120401644).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",null,React.createElement("h2",null,"Data Table"),sablono.interpreter.interpret.call(null,antizer.rum.table.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"columns","columns",1998437288),antizer_examples.rum.add_actions_column.call(null,antizer_examples.common.columns,data),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),antizer_examples.common.pagination,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),"id",new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (data){
return (function (p1__30564_SHARP_,p2__30563_SHARP_){
var selected = cljs.core.js__GT_clj.call(null,p2__30563_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return antizer.rum.message_info.call(null,[cljs.core.str("You have selected: "),cljs.core.str(cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),selected))].join(''));
});})(data))
], null)], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,antizer_examples.common.people,new cljs.core.Keyword("antizer-examples.rum","data","antizer-examples.rum/data",-1120401644))], null),"datatable");
antizer_examples.rum.user_form = rum.core.build_defcs.call(null,(function (state){
var form = antizer.rum.get_form.call(null,state);
return sablono.interpreter.interpret.call(null,antizer.rum.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"horizontal"], null),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null)),antizer.rum.decorate_field.call(null,form,"name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),antizer.rum.input.call(null))),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Email"], null)),antizer.rum.decorate_field.call(null,form,"email",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"email"], null)], null)], null),antizer.rum.input.call(null))),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Address"], null)),antizer.rum.decorate_field.call(null,form,"address",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),"Some initial value",new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),antizer.rum.input.call(null))),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Years of Experience"], null)),antizer.rum.decorate_field.call(null,form,"experience",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),antizer.rum.radio_group.call(null,antizer.rum.radio.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),"1-10"),antizer.rum.radio.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"10-30"),antizer.rum.radio.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(30)], null),"30-50"),antizer.rum.radio.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(50)], null),"> 50")))),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Start Date"], null)),antizer.rum.decorate_field.call(null,form,"date",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),moment(),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),antizer.rum.date_picker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),"MMM Do YYYY"], null)))),antizer.rum.form_item.call(null,cljs.core.merge.call(null,antizer_examples.common.form_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Accept Terms?"], null)),antizer.rum.decorate_field.call(null,form,"accept-terms",antizer.rum.switch$.call(null))),((cljs.core.not.call(null,new cljs.core.Keyword(null,"hide-buttons?","hide-buttons?",100798757).cljs$core$IFn$_invoke$arity$1(state)))?antizer.rum.form_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapper-col","wrapper-col",-1413688923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(6)], null)], null),antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(4)], null),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form){
return (function (){
return antizer.rum.validate_fields.call(null,form);
});})(form))
], null),"Submit")),antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(1)], null),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form){
return (function (){
return antizer.rum.reset_fields.call(null,form);
});})(form))
], null),"Reset"))):null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.merge.call(null,state,cljs.core.js__GT_clj.call(null,props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
})], null)], null),"user-form");
antizer_examples.rum.form_example = (function antizer_examples$rum$form_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Form"], null),antizer.rum.create_form.call(null,antizer_examples.rum.user_form)], null);
});
antizer_examples.rum.localization = rum.core.build_defcs.call(null,(function (state){
var locale = new cljs.core.Keyword("antizer-examples.rum","locale","antizer-examples.rum/locale",1572536598).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,antizer.rum.locale_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.rum.locales.call(null,cljs.core.deref.call(null,locale))], null),antizer.rum.col.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Localization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Choose a language:",antizer.rum.select.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"en_US",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (locale){
return (function (p1__30567_SHARP_){
return antizer_examples.common.set_locale.call(null,p1__30567_SHARP_,locale);
});})(locale))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"en_US"], null),"English"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"es_ES"], null),"Espa\u00F1ol"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"de_DE"], null),"Deutsch"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ru_RU"], null),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"zh_CN"], null),"\u4E2D\u6587"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ja_JP"], null),"\u65E5\u672C\u8A9E"),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"tlh",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Klingon"))], null),antizer.rum.pagination.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),(40),new cljs.core.Keyword(null,"show-size-changer","show-size-changer",-745395013),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),antizer.rum.date_picker.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),"ddd MMM Do YYYY",new cljs.core.Keyword(null,"default-value","default-value",232220170),moment(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null),new cljs.core.Keyword(null,"allow-clear","allow-clear",-424919217),false,new cljs.core.Keyword(null,"show-today","show-today",-2140454716),false], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),antizer.rum.time_picker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),antizer.rum.calendar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false,new cljs.core.Keyword(null,"default-value","default-value",232220170),moment()], null)),antizer.rum.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),antizer_examples.common.columns], null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,"en_US",new cljs.core.Keyword("antizer-examples.rum","locale","antizer-examples.rum/locale",1572536598))], null),"localization");
antizer_examples.rum.messages = (function antizer_examples$rum$messages(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Messages"], null),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.message_info.call(null,"Normal message");
})], null),"Normal"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.message_success.call(null,"Success message");
})], null),"Success"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.message_warning.call(null,"Warning message");
})], null),"Warning"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.message_error.call(null,"Error message");
})], null),"Error"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.message_loading.call(null,"This message will disappear in 10 seconds",(10));
})], null),"Timed")], null);
});
antizer_examples.rum.modal = rum.core.build_defcs.call(null,(function (state){
var modal1 = new cljs.core.Keyword("antizer-examples.rum","modal1","antizer-examples.rum/modal1",231997636).cljs$core$IFn$_invoke$arity$1(state);
var modal_form = new cljs.core.Keyword("antizer-examples.rum","modal-form","antizer-examples.rum/modal-form",-959095046).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",({"className": "example-button"}),React.createElement("h2",null,"Modal"),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,true);
});})(modal1,modal_form))
], null),"Modal Dialog")),sablono.interpreter.interpret.call(null,antizer.rum.modal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.deref.call(null,modal1),new cljs.core.Keyword(null,"title","title",636505583),"Title of modal",new cljs.core.Keyword(null,"on-ok","on-ok",-1218416370),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,false);
});})(modal1,modal_form))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal1,false);
});})(modal1,modal_form))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Some content 1"], null))),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return antizer.rum.modal_confirm.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Are you sure?",new cljs.core.Keyword(null,"content","content",15833224),"Some content"], null));
});})(modal1,modal_form))
], null),"Confirmation Modal")),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,true);
});})(modal1,modal_form))
], null),"Modal Form")),sablono.interpreter.interpret.call(null,antizer.rum.modal.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.deref.call(null,modal_form),new cljs.core.Keyword(null,"title","title",636505583),"Modal Form",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"on-ok","on-ok",-1218416370),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,false);
});})(modal1,modal_form))
,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (modal1,modal_form){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_form,false);
});})(modal1,modal_form))
], null),antizer.rum.create_form.call(null,antizer_examples.rum.user_form,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-buttons?","hide-buttons?",100798757),true], null)))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,false,new cljs.core.Keyword("antizer-examples.rum","modal1","antizer-examples.rum/modal1",231997636)),rum.core.local.call(null,false,new cljs.core.Keyword("antizer-examples.rum","modal-form","antizer-examples.rum/modal-form",-959095046))], null),"modal");
antizer_examples.rum.notifications = (function antizer_examples$rum$notifications(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Notifications"], null),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.rum.notification_open.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Timed Notification",new cljs.core.Keyword(null,"description","description",-1428560544),"This notification will close after 4.5 seconds"], null));
})], null),"Notification"),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var key = cljs.core.random_uuid.call(null);
return antizer.rum.notification_open.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"message","message",-406056002),"Popup Notification",new cljs.core.Keyword(null,"duration","duration",1444101068),(0),new cljs.core.Keyword(null,"btn","btn",1978294651),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key){
return (function (){
return antizer.rum.notification_close.call(null,key);
});})(key))
], null),"Click to dismiss"),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"description","description",-1428560544),"This notification will not close until it is dismissed"], null));
})], null),"Popup Notification")], null);
});
antizer_examples.rum.progress = rum.core.build_defcs.call(null,(function (state){
var percent = new cljs.core.Keyword("antizer-examples.rum","percent","antizer-examples.rum/percent",1148145324).cljs$core$IFn$_invoke$arity$1(state);
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
return React.createElement("div",({"className": "progress"}),React.createElement("h2",null,"Progress"),sablono.interpreter.interpret.call(null,antizer.rum.progress.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.deref.call(null,percent),new cljs.core.Keyword(null,"status","status",-1997798413),status], null))),sablono.interpreter.interpret.call(null,antizer.rum.button_group.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (percent,operate,status){
return (function (){
return operate.call(null,new cljs.core.Keyword(null,"plus","plus",211540661));
});})(percent,operate,status))
], null)),antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"minus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (percent,operate,status){
return (function (){
return operate.call(null,new cljs.core.Keyword(null,"minus","minus",-1683561492));
});})(percent,operate,status))
], null)))),sablono.interpreter.interpret.call(null,antizer.rum.progress.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.deref.call(null,percent),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"42%"], null)], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,(50),new cljs.core.Keyword("antizer-examples.rum","percent","antizer-examples.rum/percent",1148145324))], null),"progress");
antizer_examples.rum.timeline = (function antizer_examples$rum$timeline(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Timeline"], null),antizer.rum.timeline.call(null,antizer.rum.timeline_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),"6th June Project created"),antizer.rum.timeline_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),"8th June Initial prototype done"),antizer.rum.timeline_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),"20th June Final release"))], null);
});
antizer_examples.rum.tooltip = (function antizer_examples$rum$tooltip(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-button","div.example-button",1726642496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tooltips and Popups ",antizer.rum.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Found me!"], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"question-circle-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null)], null)))], null),antizer.rum.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Tooltip"], null),antizer.rum.button.call(null,"Tooltip")),antizer.rum.popover.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"Dum dee dee dum dee dee dum",new cljs.core.Keyword(null,"title","title",636505583),"Deedee dum"], null),antizer.rum.button.call(null,"Popover")),antizer.rum.popconfirm.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Are you sure?",new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (){
return antizer.rum.message_success.call(null,"You clicked OK");
}),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return antizer.rum.message_error.call(null,"You clicked Cancel");
})], null),antizer.rum.button.call(null,"Click to confirm"))], null);
});
antizer_examples.rum.tree = (function antizer_examples$rum$tree(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tree"], null),antizer.rum.tree.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkable","checkable",1153780436),true,new cljs.core.Keyword(null,"default-expanded-keys","default-expanded-keys",765837139),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["functional","clr","jvm","javascript","nodejs"], null),new cljs.core.Keyword(null,"default-checked-keys","default-checked-keys",-2110500491),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure","clojure-clr","cljs","lumo","planck"], null)], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Functional Languages",new cljs.core.Keyword(null,"key","key",-1516042587),"functional"], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"CLR",new cljs.core.Keyword(null,"key","key",-1516042587),"clr"], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure CLR",new cljs.core.Keyword(null,"key","key",-1516042587),"clojure-clr"], null))),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Haskell",new cljs.core.Keyword(null,"key","key",-1516042587),"haskell"], null)),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"JVM",new cljs.core.Keyword(null,"key","key",-1516042587),"jvm"], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure",new cljs.core.Keyword(null,"key","key",-1516042587),"clojure"], null)),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Frege",new cljs.core.Keyword(null,"key","key",-1516042587),"frege"], null)),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Scala",new cljs.core.Keyword(null,"disable-checkbox","disable-checkbox",714283732),true], null))),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"JavaScript Engine",new cljs.core.Keyword(null,"key","key",-1516042587),"javascript"], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ClojureScript",new cljs.core.Keyword(null,"key","key",-1516042587),"cljs"], null))),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Node.js",new cljs.core.Keyword(null,"key","key",-1516042587),"nodejs"], null),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lumo",new cljs.core.Keyword(null,"key","key",-1516042587),"lumo"], null))),antizer.rum.tree_tree_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Planck",new cljs.core.Keyword(null,"key","key",-1516042587),"planck"], null))))], null);
});
/**
 * Render each example within a bordered box
 */
antizer_examples.rum.render_example = (function antizer_examples$rum$render_example(examples){
return antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),(function (){var iter__26746__auto__ = (function antizer_examples$rum$render_example_$_iter__30576(s__30577){
return (new cljs.core.LazySeq(null,(function (){
var s__30577__$1 = s__30577;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30577__$1);
if(temp__4657__auto__){
var s__30577__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30577__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__30577__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__30579 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__30578 = (0);
while(true){
if((i__30578 < size__26745__auto__)){
var example = cljs.core._nth.call(null,c__26744__auto__,i__30578);
cljs.core.chunk_append.call(null,b__30579,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),example.call(null)], null)], null));

var G__30580 = (i__30578 + (1));
i__30578 = G__30580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30579),antizer_examples$rum$render_example_$_iter__30576.call(null,cljs.core.chunk_rest.call(null,s__30577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30579),null);
}
} else {
var example = cljs.core.first.call(null,s__30577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),example.call(null)], null)], null),antizer_examples$rum$render_example_$_iter__30576.call(null,cljs.core.rest.call(null,s__30577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,examples);
})());
});
antizer_examples.rum.render_full_row = (function antizer_examples$rum$render_full_row(example){
return antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-content","div.box-content",1562367075),example.call(null)], null)], null));
});
antizer_examples.rum.content_area = (function antizer_examples$rum$content_area(){
return antizer.rum.layout_content.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content-area"], null),antizer.rum.row.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(12)], null),antizer_examples.rum.render_example.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.rum.carousel,antizer_examples.rum.buttons,antizer_examples.rum.messages,antizer_examples.rum.timeline,antizer_examples.rum.tree,antizer_examples.rum.progress], null)),antizer_examples.rum.render_example.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer_examples.rum.card,antizer_examples.rum.tooltip,antizer_examples.rum.notifications,antizer_examples.rum.auto_complete,antizer_examples.rum.localization,antizer_examples.rum.modal,antizer_examples.rum.avatar], null))),antizer_examples.rum.render_full_row.call(null,antizer_examples.rum.form_example),antizer_examples.rum.render_full_row.call(null,antizer_examples.rum.datatable));
});
antizer_examples.rum.side_menu = (function antizer_examples$rum$side_menu(){
return antizer.rum.menu.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"inline",new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),antizer.rum.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Menu without icons"),antizer.rum.menu_item.call(null,"Menu Item"),antizer.rum.menu_sub_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Sub Menu"], null),antizer.rum.menu_item.call(null,"Item 1"),antizer.rum.menu_item.call(null,"Item 2")),antizer.rum.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Menu with icons"),antizer.rum.menu_item.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"s"], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"home"], null)),"Menu Item"], null)),antizer.rum.menu_sub_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"setting"], null)),"Sub Menu"], null)], null),antizer.rum.menu_item.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"s"], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"user"], null)),"Item 1"], null)),antizer.rum.menu_item.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"s"], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"notification"], null)),"Item 2"], null))));
});
antizer_examples.rum.render_layout = (function antizer_examples$rum$render_layout(){
return antizer.rum.locale_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.rum.locales.call(null,"en_US")], null),antizer.rum.layout.call(null,antizer.rum.affix.call(null,antizer.rum.layout_header.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner"], null),antizer.rum.row.call(null,antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.banner-header","h2.banner-header",-747771270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"layout"], null),"Antizer Rum Example"], null)),antizer.rum.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"span","span",1394872991),(1),new cljs.core.Keyword(null,"offset","offset",296498311),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/priornix/antizer",new cljs.core.Keyword(null,"key","key",-1516042587),"link"], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner-logo",new cljs.core.Keyword(null,"type","type",1174270348),"github"], null))], null))))),antizer.rum.layout.call(null,antizer.rum.layout_sider.call(null,antizer_examples.rum.side_menu.call(null)),antizer.rum.layout.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60%"], null)], null),antizer_examples.rum.content_area.call(null)))));
});
antizer_examples.rum.init_BANG_ = (function antizer_examples$rum$init_BANG_(){
return rum.core.mount.call(null,antizer_examples.rum.render_layout.call(null),document.getElementById("app"));
});

//# sourceMappingURL=rum.js.map?rel=1513179494472