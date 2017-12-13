// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__28555_SHARP_,p2__28554_SHARP_){
return p2__28554_SHARP_.call(null,p1__28555_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__28557_SHARP_,p2__28556_SHARP_){
return p2__28556_SHARP_.call(null,old_state,p1__28557_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__25966__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__28558_SHARP_){
return p1__28558_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__28563 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__28563,(0),null);
var next_state = cljs.core.nth.call(null,vec__28563,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__28559_SHARP_){
return p1__28559_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__28566__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__28566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28567__i = 0, G__28567__a = new Array(arguments.length -  0);
while (G__28567__i < G__28567__a.length) {G__28567__a[G__28567__i] = arguments[G__28567__i + 0]; ++G__28567__i;}
  args = new cljs.core.IndexedSeq(G__28567__a,0);
} 
return G__28566__delegate.call(this,args);};
G__28566.cljs$lang$maxFixedArity = 0;
G__28566.cljs$lang$applyTo = (function (arglist__28568){
var args = cljs.core.seq(arglist__28568);
return G__28566__delegate(args);
});
G__28566.cljs$core$IFn$_invoke$arity$variadic = G__28566__delegate;
return G__28566;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__28569__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__28569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28570__i = 0, G__28570__a = new Array(arguments.length -  0);
while (G__28570__i < G__28570__a.length) {G__28570__a[G__28570__i] = arguments[G__28570__i + 0]; ++G__28570__i;}
  args = new cljs.core.IndexedSeq(G__28570__a,0);
} 
return G__28569__delegate.call(this,args);};
G__28569.cljs$lang$maxFixedArity = 0;
G__28569.cljs$lang$applyTo = (function (arglist__28571){
var args = cljs.core.seq(arglist__28571);
return G__28569__delegate(args);
});
G__28569.cljs$core$IFn$_invoke$arity$variadic = G__28569__delegate;
return G__28569;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__28572__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__28572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28573__i = 0, G__28573__a = new Array(arguments.length -  0);
while (G__28573__i < G__28573__a.length) {G__28573__a[G__28573__i] = arguments[G__28573__i + 0]; ++G__28573__i;}
  args = new cljs.core.IndexedSeq(G__28573__a,0);
} 
return G__28572__delegate.call(this,args);};
G__28572.cljs$lang$maxFixedArity = 0;
G__28572.cljs$lang$applyTo = (function (arglist__28574){
var args = cljs.core.seq(arglist__28574);
return G__28572__delegate(args);
});
G__28572.cljs$core$IFn$_invoke$arity$variadic = G__28572__delegate;
return G__28572;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__25966__auto__ = (function (){var and__25954__auto__ = typeof window !== 'undefined';
if(and__25954__auto__){
var or__25966__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
var or__25966__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__25966__auto____$1)){
return or__25966__auto____$1;
} else {
var or__25966__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__25966__auto____$2)){
return or__25966__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__25954__auto__;
}
})();
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return ((function (or__25966__auto__){
return (function (p1__28575_SHARP_){
return setTimeout(p1__28575_SHARP_,(16));
});
;})(or__25966__auto__))
}
})();
rum.core.batch = (function (){var or__25966__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
var or__25966__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__25966__auto____$1)){
return or__25966__auto____$1;
} else {
return ((function (or__25966__auto____$1,or__25966__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__25966__auto____$1,or__25966__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__28582 = cljs.core.seq.call(null,queue);
var chunk__28584 = null;
var count__28585 = (0);
var i__28586 = (0);
while(true){
if((i__28586 < count__28585)){
var comp = cljs.core._nth.call(null,chunk__28584,i__28586);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__28588 = seq__28582;
var G__28589 = chunk__28584;
var G__28590 = count__28585;
var G__28591 = (i__28586 + (1));
seq__28582 = G__28588;
chunk__28584 = G__28589;
count__28585 = G__28590;
i__28586 = G__28591;
continue;
} else {
var G__28592 = seq__28582;
var G__28593 = chunk__28584;
var G__28594 = count__28585;
var G__28595 = (i__28586 + (1));
seq__28582 = G__28592;
chunk__28584 = G__28593;
count__28585 = G__28594;
i__28586 = G__28595;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28582);
if(temp__4657__auto__){
var seq__28582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28582__$1)){
var c__26777__auto__ = cljs.core.chunk_first.call(null,seq__28582__$1);
var G__28596 = cljs.core.chunk_rest.call(null,seq__28582__$1);
var G__28597 = c__26777__auto__;
var G__28598 = cljs.core.count.call(null,c__26777__auto__);
var G__28599 = (0);
seq__28582 = G__28596;
chunk__28584 = G__28597;
count__28585 = G__28598;
i__28586 = G__28599;
continue;
} else {
var comp = cljs.core.first.call(null,seq__28582__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__28600 = cljs.core.next.call(null,seq__28582__$1);
var G__28601 = null;
var G__28602 = (0);
var G__28603 = (0);
seq__28582 = G__28600;
chunk__28584 = G__28601;
count__28585 = G__28602;
i__28586 = G__28603;
continue;
} else {
var G__28604 = cljs.core.next.call(null,seq__28582__$1);
var G__28605 = null;
var G__28606 = (0);
var G__28607 = (0);
seq__28582 = G__28604;
chunk__28584 = G__28605;
count__28585 = G__28606;
i__28586 = G__28607;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args28608 = [];
var len__27041__auto___28611 = arguments.length;
var i__27042__auto___28612 = (0);
while(true){
if((i__27042__auto___28612 < len__27041__auto___28611)){
args28608.push((arguments[i__27042__auto___28612]));

var G__28613 = (i__27042__auto___28612 + (1));
i__27042__auto___28612 = G__28613;
continue;
} else {
}
break;
}

var G__28610 = args28608.length;
switch (G__28610) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28608.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_28615 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__28616 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__28616,(0),null);
var next_state = cljs.core.nth.call(null,vec__28616,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28619_28631 = cljs.core.seq.call(null,old_reactions);
var chunk__28620_28632 = null;
var count__28621_28633 = (0);
var i__28622_28634 = (0);
while(true){
if((i__28622_28634 < count__28621_28633)){
var ref_28635 = cljs.core._nth.call(null,chunk__28620_28632,i__28622_28634);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_28635)){
} else {
cljs.core.remove_watch.call(null,ref_28635,key);
}

var G__28636 = seq__28619_28631;
var G__28637 = chunk__28620_28632;
var G__28638 = count__28621_28633;
var G__28639 = (i__28622_28634 + (1));
seq__28619_28631 = G__28636;
chunk__28620_28632 = G__28637;
count__28621_28633 = G__28638;
i__28622_28634 = G__28639;
continue;
} else {
var temp__4657__auto___28640 = cljs.core.seq.call(null,seq__28619_28631);
if(temp__4657__auto___28640){
var seq__28619_28641__$1 = temp__4657__auto___28640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28619_28641__$1)){
var c__26777__auto___28642 = cljs.core.chunk_first.call(null,seq__28619_28641__$1);
var G__28643 = cljs.core.chunk_rest.call(null,seq__28619_28641__$1);
var G__28644 = c__26777__auto___28642;
var G__28645 = cljs.core.count.call(null,c__26777__auto___28642);
var G__28646 = (0);
seq__28619_28631 = G__28643;
chunk__28620_28632 = G__28644;
count__28621_28633 = G__28645;
i__28622_28634 = G__28646;
continue;
} else {
var ref_28647 = cljs.core.first.call(null,seq__28619_28641__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_28647)){
} else {
cljs.core.remove_watch.call(null,ref_28647,key);
}

var G__28648 = cljs.core.next.call(null,seq__28619_28641__$1);
var G__28649 = null;
var G__28650 = (0);
var G__28651 = (0);
seq__28619_28631 = G__28648;
chunk__28620_28632 = G__28649;
count__28621_28633 = G__28650;
i__28622_28634 = G__28651;
continue;
}
} else {
}
}
break;
}

var seq__28623_28652 = cljs.core.seq.call(null,new_reactions);
var chunk__28624_28653 = null;
var count__28625_28654 = (0);
var i__28626_28655 = (0);
while(true){
if((i__28626_28655 < count__28625_28654)){
var ref_28656 = cljs.core._nth.call(null,chunk__28624_28653,i__28626_28655);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_28656)){
} else {
cljs.core.add_watch.call(null,ref_28656,key,((function (seq__28623_28652,chunk__28624_28653,count__28625_28654,i__28626_28655,ref_28656,comp,old_reactions,vec__28616,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28615){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__28623_28652,chunk__28624_28653,count__28625_28654,i__28626_28655,ref_28656,comp,old_reactions,vec__28616,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28615))
);
}

var G__28657 = seq__28623_28652;
var G__28658 = chunk__28624_28653;
var G__28659 = count__28625_28654;
var G__28660 = (i__28626_28655 + (1));
seq__28623_28652 = G__28657;
chunk__28624_28653 = G__28658;
count__28625_28654 = G__28659;
i__28626_28655 = G__28660;
continue;
} else {
var temp__4657__auto___28661 = cljs.core.seq.call(null,seq__28623_28652);
if(temp__4657__auto___28661){
var seq__28623_28662__$1 = temp__4657__auto___28661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28623_28662__$1)){
var c__26777__auto___28663 = cljs.core.chunk_first.call(null,seq__28623_28662__$1);
var G__28664 = cljs.core.chunk_rest.call(null,seq__28623_28662__$1);
var G__28665 = c__26777__auto___28663;
var G__28666 = cljs.core.count.call(null,c__26777__auto___28663);
var G__28667 = (0);
seq__28623_28652 = G__28664;
chunk__28624_28653 = G__28665;
count__28625_28654 = G__28666;
i__28626_28655 = G__28667;
continue;
} else {
var ref_28668 = cljs.core.first.call(null,seq__28623_28662__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_28668)){
} else {
cljs.core.add_watch.call(null,ref_28668,key,((function (seq__28623_28652,chunk__28624_28653,count__28625_28654,i__28626_28655,ref_28668,seq__28623_28662__$1,temp__4657__auto___28661,comp,old_reactions,vec__28616,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28615){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__28623_28652,chunk__28624_28653,count__28625_28654,i__28626_28655,ref_28668,seq__28623_28662__$1,temp__4657__auto___28661,comp,old_reactions,vec__28616,dom,next_state,new_reactions,key,_STAR_reactions_STAR_28615))
);
}

var G__28669 = cljs.core.next.call(null,seq__28623_28662__$1);
var G__28670 = null;
var G__28671 = (0);
var G__28672 = (0);
seq__28623_28652 = G__28669;
chunk__28624_28653 = G__28670;
count__28625_28654 = G__28671;
i__28626_28655 = G__28672;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_28615;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_28673 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28627_28674 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__28628_28675 = null;
var count__28629_28676 = (0);
var i__28630_28677 = (0);
while(true){
if((i__28630_28677 < count__28629_28676)){
var ref_28678 = cljs.core._nth.call(null,chunk__28628_28675,i__28630_28677);
cljs.core.remove_watch.call(null,ref_28678,key_28673);

var G__28679 = seq__28627_28674;
var G__28680 = chunk__28628_28675;
var G__28681 = count__28629_28676;
var G__28682 = (i__28630_28677 + (1));
seq__28627_28674 = G__28679;
chunk__28628_28675 = G__28680;
count__28629_28676 = G__28681;
i__28630_28677 = G__28682;
continue;
} else {
var temp__4657__auto___28683 = cljs.core.seq.call(null,seq__28627_28674);
if(temp__4657__auto___28683){
var seq__28627_28684__$1 = temp__4657__auto___28683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28627_28684__$1)){
var c__26777__auto___28685 = cljs.core.chunk_first.call(null,seq__28627_28684__$1);
var G__28686 = cljs.core.chunk_rest.call(null,seq__28627_28684__$1);
var G__28687 = c__26777__auto___28685;
var G__28688 = cljs.core.count.call(null,c__26777__auto___28685);
var G__28689 = (0);
seq__28627_28674 = G__28686;
chunk__28628_28675 = G__28687;
count__28629_28676 = G__28688;
i__28630_28677 = G__28689;
continue;
} else {
var ref_28690 = cljs.core.first.call(null,seq__28627_28684__$1);
cljs.core.remove_watch.call(null,ref_28690,key_28673);

var G__28691 = cljs.core.next.call(null,seq__28627_28684__$1);
var G__28692 = null;
var G__28693 = (0);
var G__28694 = (0);
seq__28627_28674 = G__28691;
chunk__28628_28675 = G__28692;
count__28629_28676 = G__28693;
i__28630_28677 = G__28694;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28701 = arguments.length;
var i__27042__auto___28702 = (0);
while(true){
if((i__27042__auto___28702 < len__27041__auto___28701)){
args__27048__auto__.push((arguments[i__27042__auto___28702]));

var G__28703 = (i__27042__auto___28702 + (1));
i__27042__auto___28702 = G__28703;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((2) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27049__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__28698){
var map__28699 = p__28698;
var map__28699__$1 = ((((!((map__28699 == null)))?((((map__28699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28699):map__28699);
var options = map__28699__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq28695){
var G__28696 = cljs.core.first.call(null,seq28695);
var seq28695__$1 = cljs.core.next.call(null,seq28695);
var G__28697 = cljs.core.first.call(null,seq28695__$1);
var seq28695__$2 = cljs.core.next.call(null,seq28695__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__28696,G__28697,seq28695__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28707 = arguments.length;
var i__27042__auto___28708 = (0);
while(true){
if((i__27042__auto___28708 < len__27041__auto___28707)){
args__27048__auto__.push((arguments[i__27042__auto___28708]));

var G__28709 = (i__27042__auto___28708 + (1));
i__27042__auto___28708 = G__28709;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((2) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27049__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq28704){
var G__28705 = cljs.core.first.call(null,seq28704);
var seq28704__$1 = cljs.core.next.call(null,seq28704);
var G__28706 = cljs.core.first.call(null,seq28704__$1);
var seq28704__$2 = cljs.core.next.call(null,seq28704__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__28705,G__28706,seq28704__$2);
});


//# sourceMappingURL=core.js.map?rel=1513163799117