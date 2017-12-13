// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args27262 = [];
var len__27041__auto___27282 = arguments.length;
var i__27042__auto___27283 = (0);
while(true){
if((i__27042__auto___27283 < len__27041__auto___27282)){
args27262.push((arguments[i__27042__auto___27283]));

var G__27284 = (i__27042__auto___27283 + (1));
i__27042__auto___27283 = G__27284;
continue;
} else {
}
break;
}

var G__27264 = args27262.length;
switch (G__27264) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27262.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__27265 = opts;
var map__27265__$1 = ((((!((map__27265 == null)))?((((map__27265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27265):map__27265);
var ref = cljs.core.get.call(null,map__27265__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__27265__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__27267 = cljs.core.count.call(null,refs);
switch (G__27267) {
case (1):
var vec__27268 = refs;
var a = cljs.core.nth.call(null,vec__27268,(0),null);
return ((function (vec__27268,a,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__27268,a,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__27271 = refs;
var a = cljs.core.nth.call(null,vec__27271,(0),null);
var b = cljs.core.nth.call(null,vec__27271,(1),null);
return ((function (vec__27271,a,b,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__27271,a,b,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__27274 = refs;
var a = cljs.core.nth.call(null,vec__27274,(0),null);
var b = cljs.core.nth.call(null,vec__27274,(1),null);
var c = cljs.core.nth.call(null,vec__27274,(2),null);
return ((function (vec__27274,a,b,c,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__27274,a,b,c,G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__27267,map__27265,map__27265__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__27277 = ref;
cljs.core.reset_BANG_.call(null,G__27277,recalc.call(null));

return G__27277;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__27265,map__27265__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__27265,map__27265__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__27265,map__27265__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__27265,map__27265__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__27278_27287 = cljs.core.seq.call(null,refs);
var chunk__27279_27288 = null;
var count__27280_27289 = (0);
var i__27281_27290 = (0);
while(true){
if((i__27281_27290 < count__27280_27289)){
var ref_27291__$1 = cljs.core._nth.call(null,chunk__27279_27288,i__27281_27290);
cljs.core.add_watch.call(null,ref_27291__$1,key,watch);

var G__27292 = seq__27278_27287;
var G__27293 = chunk__27279_27288;
var G__27294 = count__27280_27289;
var G__27295 = (i__27281_27290 + (1));
seq__27278_27287 = G__27292;
chunk__27279_27288 = G__27293;
count__27280_27289 = G__27294;
i__27281_27290 = G__27295;
continue;
} else {
var temp__4657__auto___27296 = cljs.core.seq.call(null,seq__27278_27287);
if(temp__4657__auto___27296){
var seq__27278_27297__$1 = temp__4657__auto___27296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27278_27297__$1)){
var c__26777__auto___27298 = cljs.core.chunk_first.call(null,seq__27278_27297__$1);
var G__27299 = cljs.core.chunk_rest.call(null,seq__27278_27297__$1);
var G__27300 = c__26777__auto___27298;
var G__27301 = cljs.core.count.call(null,c__26777__auto___27298);
var G__27302 = (0);
seq__27278_27287 = G__27299;
chunk__27279_27288 = G__27300;
count__27280_27289 = G__27301;
i__27281_27290 = G__27302;
continue;
} else {
var ref_27303__$1 = cljs.core.first.call(null,seq__27278_27297__$1);
cljs.core.add_watch.call(null,ref_27303__$1,key,watch);

var G__27304 = cljs.core.next.call(null,seq__27278_27297__$1);
var G__27305 = null;
var G__27306 = (0);
var G__27307 = (0);
seq__27278_27287 = G__27304;
chunk__27279_27288 = G__27305;
count__27280_27289 = G__27306;
i__27281_27290 = G__27307;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1513163798045