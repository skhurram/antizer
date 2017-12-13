// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25966__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29725 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_29725){
return (function (){
var _STAR_always_update_STAR_29726 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29726;
}});})(_STAR_always_update_STAR_29725))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29725;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args29727 = [];
var len__27041__auto___29730 = arguments.length;
var i__27042__auto___29731 = (0);
while(true){
if((i__27042__auto___29731 < len__27041__auto___29730)){
args29727.push((arguments[i__27042__auto___29731]));

var G__29732 = (i__27042__auto___29731 + (1));
i__27042__auto___29731 = G__29732;
continue;
} else {
}
break;
}

var G__29729 = args29727.length;
switch (G__29729) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29727.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__29738_29742 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29739_29743 = null;
var count__29740_29744 = (0);
var i__29741_29745 = (0);
while(true){
if((i__29741_29745 < count__29740_29744)){
var v_29746 = cljs.core._nth.call(null,chunk__29739_29743,i__29741_29745);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29746);

var G__29747 = seq__29738_29742;
var G__29748 = chunk__29739_29743;
var G__29749 = count__29740_29744;
var G__29750 = (i__29741_29745 + (1));
seq__29738_29742 = G__29747;
chunk__29739_29743 = G__29748;
count__29740_29744 = G__29749;
i__29741_29745 = G__29750;
continue;
} else {
var temp__4657__auto___29751 = cljs.core.seq.call(null,seq__29738_29742);
if(temp__4657__auto___29751){
var seq__29738_29752__$1 = temp__4657__auto___29751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29738_29752__$1)){
var c__26777__auto___29753 = cljs.core.chunk_first.call(null,seq__29738_29752__$1);
var G__29754 = cljs.core.chunk_rest.call(null,seq__29738_29752__$1);
var G__29755 = c__26777__auto___29753;
var G__29756 = cljs.core.count.call(null,c__26777__auto___29753);
var G__29757 = (0);
seq__29738_29742 = G__29754;
chunk__29739_29743 = G__29755;
count__29740_29744 = G__29756;
i__29741_29745 = G__29757;
continue;
} else {
var v_29758 = cljs.core.first.call(null,seq__29738_29752__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29758);

var G__29759 = cljs.core.next.call(null,seq__29738_29752__$1);
var G__29760 = null;
var G__29761 = (0);
var G__29762 = (0);
seq__29738_29742 = G__29759;
chunk__29739_29743 = G__29760;
count__29740_29744 = G__29761;
i__29741_29745 = G__29762;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1513163800934