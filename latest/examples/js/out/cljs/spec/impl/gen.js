// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36770 = arguments.length;
var i__27042__auto___36771 = (0);
while(true){
if((i__27042__auto___36771 < len__27041__auto___36770)){
args__27048__auto__.push((arguments[i__27042__auto___36771]));

var G__36772 = (i__27042__auto___36771 + (1));
i__27042__auto___36771 = G__36772;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36769){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36769));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36774 = arguments.length;
var i__27042__auto___36775 = (0);
while(true){
if((i__27042__auto___36775 < len__27041__auto___36774)){
args__27048__auto__.push((arguments[i__27042__auto___36775]));

var G__36776 = (i__27042__auto___36775 + (1));
i__27042__auto___36775 = G__36776;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36773){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36773));
});

var g_QMARK__36777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36778 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36777){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36777))
,null));
var mkg_36779 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36777,g_36778){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36777,g_36778))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36777,g_36778,mkg_36779){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36777).call(null,x);
});})(g_QMARK__36777,g_36778,mkg_36779))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36777,g_36778,mkg_36779){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36779).call(null,gfn);
});})(g_QMARK__36777,g_36778,mkg_36779))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36777,g_36778,mkg_36779){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36778).call(null,generator);
});})(g_QMARK__36777,g_36778,mkg_36779))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36741__auto___36798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__36741__auto___36798){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36799 = arguments.length;
var i__27042__auto___36800 = (0);
while(true){
if((i__27042__auto___36800 < len__27041__auto___36799)){
args__27048__auto__.push((arguments[i__27042__auto___36800]));

var G__36801 = (i__27042__auto___36800 + (1));
i__27042__auto___36800 = G__36801;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36798))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36798),args);
});})(g__36741__auto___36798))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__36741__auto___36798){
return (function (seq36780){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36780));
});})(g__36741__auto___36798))
;


var g__36741__auto___36802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__36741__auto___36802){
return (function cljs$spec$impl$gen$list(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36803 = arguments.length;
var i__27042__auto___36804 = (0);
while(true){
if((i__27042__auto___36804 < len__27041__auto___36803)){
args__27048__auto__.push((arguments[i__27042__auto___36804]));

var G__36805 = (i__27042__auto___36804 + (1));
i__27042__auto___36804 = G__36805;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36802))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36802),args);
});})(g__36741__auto___36802))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__36741__auto___36802){
return (function (seq36781){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36781));
});})(g__36741__auto___36802))
;


var g__36741__auto___36806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__36741__auto___36806){
return (function cljs$spec$impl$gen$map(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36807 = arguments.length;
var i__27042__auto___36808 = (0);
while(true){
if((i__27042__auto___36808 < len__27041__auto___36807)){
args__27048__auto__.push((arguments[i__27042__auto___36808]));

var G__36809 = (i__27042__auto___36808 + (1));
i__27042__auto___36808 = G__36809;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36806))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36806),args);
});})(g__36741__auto___36806))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__36741__auto___36806){
return (function (seq36782){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36782));
});})(g__36741__auto___36806))
;


var g__36741__auto___36810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__36741__auto___36810){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36811 = arguments.length;
var i__27042__auto___36812 = (0);
while(true){
if((i__27042__auto___36812 < len__27041__auto___36811)){
args__27048__auto__.push((arguments[i__27042__auto___36812]));

var G__36813 = (i__27042__auto___36812 + (1));
i__27042__auto___36812 = G__36813;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36810))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36810),args);
});})(g__36741__auto___36810))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__36741__auto___36810){
return (function (seq36783){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36783));
});})(g__36741__auto___36810))
;


var g__36741__auto___36814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__36741__auto___36814){
return (function cljs$spec$impl$gen$set(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36815 = arguments.length;
var i__27042__auto___36816 = (0);
while(true){
if((i__27042__auto___36816 < len__27041__auto___36815)){
args__27048__auto__.push((arguments[i__27042__auto___36816]));

var G__36817 = (i__27042__auto___36816 + (1));
i__27042__auto___36816 = G__36817;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36814))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36814),args);
});})(g__36741__auto___36814))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__36741__auto___36814){
return (function (seq36784){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36784));
});})(g__36741__auto___36814))
;


var g__36741__auto___36818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__36741__auto___36818){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36819 = arguments.length;
var i__27042__auto___36820 = (0);
while(true){
if((i__27042__auto___36820 < len__27041__auto___36819)){
args__27048__auto__.push((arguments[i__27042__auto___36820]));

var G__36821 = (i__27042__auto___36820 + (1));
i__27042__auto___36820 = G__36821;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36818))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36818),args);
});})(g__36741__auto___36818))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__36741__auto___36818){
return (function (seq36785){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36785));
});})(g__36741__auto___36818))
;


var g__36741__auto___36822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__36741__auto___36822){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36823 = arguments.length;
var i__27042__auto___36824 = (0);
while(true){
if((i__27042__auto___36824 < len__27041__auto___36823)){
args__27048__auto__.push((arguments[i__27042__auto___36824]));

var G__36825 = (i__27042__auto___36824 + (1));
i__27042__auto___36824 = G__36825;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36822))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36822),args);
});})(g__36741__auto___36822))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__36741__auto___36822){
return (function (seq36786){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36786));
});})(g__36741__auto___36822))
;


var g__36741__auto___36826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__36741__auto___36826){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36827 = arguments.length;
var i__27042__auto___36828 = (0);
while(true){
if((i__27042__auto___36828 < len__27041__auto___36827)){
args__27048__auto__.push((arguments[i__27042__auto___36828]));

var G__36829 = (i__27042__auto___36828 + (1));
i__27042__auto___36828 = G__36829;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36826))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36826),args);
});})(g__36741__auto___36826))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__36741__auto___36826){
return (function (seq36787){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36787));
});})(g__36741__auto___36826))
;


var g__36741__auto___36830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__36741__auto___36830){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36831 = arguments.length;
var i__27042__auto___36832 = (0);
while(true){
if((i__27042__auto___36832 < len__27041__auto___36831)){
args__27048__auto__.push((arguments[i__27042__auto___36832]));

var G__36833 = (i__27042__auto___36832 + (1));
i__27042__auto___36832 = G__36833;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36830))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36830),args);
});})(g__36741__auto___36830))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__36741__auto___36830){
return (function (seq36788){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36788));
});})(g__36741__auto___36830))
;


var g__36741__auto___36834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__36741__auto___36834){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36835 = arguments.length;
var i__27042__auto___36836 = (0);
while(true){
if((i__27042__auto___36836 < len__27041__auto___36835)){
args__27048__auto__.push((arguments[i__27042__auto___36836]));

var G__36837 = (i__27042__auto___36836 + (1));
i__27042__auto___36836 = G__36837;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36834))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36834),args);
});})(g__36741__auto___36834))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__36741__auto___36834){
return (function (seq36789){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36789));
});})(g__36741__auto___36834))
;


var g__36741__auto___36838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__36741__auto___36838){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36839 = arguments.length;
var i__27042__auto___36840 = (0);
while(true){
if((i__27042__auto___36840 < len__27041__auto___36839)){
args__27048__auto__.push((arguments[i__27042__auto___36840]));

var G__36841 = (i__27042__auto___36840 + (1));
i__27042__auto___36840 = G__36841;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36838))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36838),args);
});})(g__36741__auto___36838))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__36741__auto___36838){
return (function (seq36790){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36790));
});})(g__36741__auto___36838))
;


var g__36741__auto___36842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__36741__auto___36842){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36843 = arguments.length;
var i__27042__auto___36844 = (0);
while(true){
if((i__27042__auto___36844 < len__27041__auto___36843)){
args__27048__auto__.push((arguments[i__27042__auto___36844]));

var G__36845 = (i__27042__auto___36844 + (1));
i__27042__auto___36844 = G__36845;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36842))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36842),args);
});})(g__36741__auto___36842))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__36741__auto___36842){
return (function (seq36791){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36791));
});})(g__36741__auto___36842))
;


var g__36741__auto___36846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__36741__auto___36846){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36847 = arguments.length;
var i__27042__auto___36848 = (0);
while(true){
if((i__27042__auto___36848 < len__27041__auto___36847)){
args__27048__auto__.push((arguments[i__27042__auto___36848]));

var G__36849 = (i__27042__auto___36848 + (1));
i__27042__auto___36848 = G__36849;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36846))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36846),args);
});})(g__36741__auto___36846))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__36741__auto___36846){
return (function (seq36792){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36792));
});})(g__36741__auto___36846))
;


var g__36741__auto___36850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__36741__auto___36850){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36851 = arguments.length;
var i__27042__auto___36852 = (0);
while(true){
if((i__27042__auto___36852 < len__27041__auto___36851)){
args__27048__auto__.push((arguments[i__27042__auto___36852]));

var G__36853 = (i__27042__auto___36852 + (1));
i__27042__auto___36852 = G__36853;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36850))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36850),args);
});})(g__36741__auto___36850))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__36741__auto___36850){
return (function (seq36793){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36793));
});})(g__36741__auto___36850))
;


var g__36741__auto___36854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__36741__auto___36854){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36855 = arguments.length;
var i__27042__auto___36856 = (0);
while(true){
if((i__27042__auto___36856 < len__27041__auto___36855)){
args__27048__auto__.push((arguments[i__27042__auto___36856]));

var G__36857 = (i__27042__auto___36856 + (1));
i__27042__auto___36856 = G__36857;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36854))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36854),args);
});})(g__36741__auto___36854))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__36741__auto___36854){
return (function (seq36794){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36794));
});})(g__36741__auto___36854))
;


var g__36741__auto___36858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__36741__auto___36858){
return (function cljs$spec$impl$gen$return(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36859 = arguments.length;
var i__27042__auto___36860 = (0);
while(true){
if((i__27042__auto___36860 < len__27041__auto___36859)){
args__27048__auto__.push((arguments[i__27042__auto___36860]));

var G__36861 = (i__27042__auto___36860 + (1));
i__27042__auto___36860 = G__36861;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36858))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36858),args);
});})(g__36741__auto___36858))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__36741__auto___36858){
return (function (seq36795){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36795));
});})(g__36741__auto___36858))
;


var g__36741__auto___36862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__36741__auto___36862){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36863 = arguments.length;
var i__27042__auto___36864 = (0);
while(true){
if((i__27042__auto___36864 < len__27041__auto___36863)){
args__27048__auto__.push((arguments[i__27042__auto___36864]));

var G__36865 = (i__27042__auto___36864 + (1));
i__27042__auto___36864 = G__36865;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36862))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36862),args);
});})(g__36741__auto___36862))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36741__auto___36862){
return (function (seq36796){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36796));
});})(g__36741__auto___36862))
;


var g__36741__auto___36866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__36741__auto___36866){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36867 = arguments.length;
var i__27042__auto___36868 = (0);
while(true){
if((i__27042__auto___36868 < len__27041__auto___36867)){
args__27048__auto__.push((arguments[i__27042__auto___36868]));

var G__36869 = (i__27042__auto___36868 + (1));
i__27042__auto___36868 = G__36869;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36741__auto___36866))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36741__auto___36866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36741__auto___36866),args);
});})(g__36741__auto___36866))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__36741__auto___36866){
return (function (seq36797){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36797));
});})(g__36741__auto___36866))
;

var g__36754__auto___36891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__36754__auto___36891){
return (function cljs$spec$impl$gen$any(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36892 = arguments.length;
var i__27042__auto___36893 = (0);
while(true){
if((i__27042__auto___36893 < len__27041__auto___36892)){
args__27048__auto__.push((arguments[i__27042__auto___36893]));

var G__36894 = (i__27042__auto___36893 + (1));
i__27042__auto___36893 = G__36894;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36891))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36891){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36891);
});})(g__36754__auto___36891))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__36754__auto___36891){
return (function (seq36870){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36870));
});})(g__36754__auto___36891))
;


var g__36754__auto___36895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__36754__auto___36895){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36896 = arguments.length;
var i__27042__auto___36897 = (0);
while(true){
if((i__27042__auto___36897 < len__27041__auto___36896)){
args__27048__auto__.push((arguments[i__27042__auto___36897]));

var G__36898 = (i__27042__auto___36897 + (1));
i__27042__auto___36897 = G__36898;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36895))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36895){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36895);
});})(g__36754__auto___36895))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__36754__auto___36895){
return (function (seq36871){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36871));
});})(g__36754__auto___36895))
;


var g__36754__auto___36899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__36754__auto___36899){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36900 = arguments.length;
var i__27042__auto___36901 = (0);
while(true){
if((i__27042__auto___36901 < len__27041__auto___36900)){
args__27048__auto__.push((arguments[i__27042__auto___36901]));

var G__36902 = (i__27042__auto___36901 + (1));
i__27042__auto___36901 = G__36902;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36899))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36899){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36899);
});})(g__36754__auto___36899))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__36754__auto___36899){
return (function (seq36872){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36872));
});})(g__36754__auto___36899))
;


var g__36754__auto___36903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__36754__auto___36903){
return (function cljs$spec$impl$gen$char(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36904 = arguments.length;
var i__27042__auto___36905 = (0);
while(true){
if((i__27042__auto___36905 < len__27041__auto___36904)){
args__27048__auto__.push((arguments[i__27042__auto___36905]));

var G__36906 = (i__27042__auto___36905 + (1));
i__27042__auto___36905 = G__36906;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36903))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36903){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36903);
});})(g__36754__auto___36903))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__36754__auto___36903){
return (function (seq36873){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36873));
});})(g__36754__auto___36903))
;


var g__36754__auto___36907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__36754__auto___36907){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36908 = arguments.length;
var i__27042__auto___36909 = (0);
while(true){
if((i__27042__auto___36909 < len__27041__auto___36908)){
args__27048__auto__.push((arguments[i__27042__auto___36909]));

var G__36910 = (i__27042__auto___36909 + (1));
i__27042__auto___36909 = G__36910;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36907))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36907){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36907);
});})(g__36754__auto___36907))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__36754__auto___36907){
return (function (seq36874){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36874));
});})(g__36754__auto___36907))
;


var g__36754__auto___36911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__36754__auto___36911){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36912 = arguments.length;
var i__27042__auto___36913 = (0);
while(true){
if((i__27042__auto___36913 < len__27041__auto___36912)){
args__27048__auto__.push((arguments[i__27042__auto___36913]));

var G__36914 = (i__27042__auto___36913 + (1));
i__27042__auto___36913 = G__36914;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36911))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36911){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36911);
});})(g__36754__auto___36911))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__36754__auto___36911){
return (function (seq36875){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36875));
});})(g__36754__auto___36911))
;


var g__36754__auto___36915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__36754__auto___36915){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36916 = arguments.length;
var i__27042__auto___36917 = (0);
while(true){
if((i__27042__auto___36917 < len__27041__auto___36916)){
args__27048__auto__.push((arguments[i__27042__auto___36917]));

var G__36918 = (i__27042__auto___36917 + (1));
i__27042__auto___36917 = G__36918;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36915))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36915){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36915);
});})(g__36754__auto___36915))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__36754__auto___36915){
return (function (seq36876){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36876));
});})(g__36754__auto___36915))
;


var g__36754__auto___36919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__36754__auto___36919){
return (function cljs$spec$impl$gen$double(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36920 = arguments.length;
var i__27042__auto___36921 = (0);
while(true){
if((i__27042__auto___36921 < len__27041__auto___36920)){
args__27048__auto__.push((arguments[i__27042__auto___36921]));

var G__36922 = (i__27042__auto___36921 + (1));
i__27042__auto___36921 = G__36922;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36919))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36919){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36919);
});})(g__36754__auto___36919))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__36754__auto___36919){
return (function (seq36877){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36877));
});})(g__36754__auto___36919))
;


var g__36754__auto___36923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__36754__auto___36923){
return (function cljs$spec$impl$gen$int(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36924 = arguments.length;
var i__27042__auto___36925 = (0);
while(true){
if((i__27042__auto___36925 < len__27041__auto___36924)){
args__27048__auto__.push((arguments[i__27042__auto___36925]));

var G__36926 = (i__27042__auto___36925 + (1));
i__27042__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36923))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36923){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36923);
});})(g__36754__auto___36923))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__36754__auto___36923){
return (function (seq36878){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36878));
});})(g__36754__auto___36923))
;


var g__36754__auto___36927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__36754__auto___36927){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36928 = arguments.length;
var i__27042__auto___36929 = (0);
while(true){
if((i__27042__auto___36929 < len__27041__auto___36928)){
args__27048__auto__.push((arguments[i__27042__auto___36929]));

var G__36930 = (i__27042__auto___36929 + (1));
i__27042__auto___36929 = G__36930;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36927))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36927){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36927);
});})(g__36754__auto___36927))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__36754__auto___36927){
return (function (seq36879){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36879));
});})(g__36754__auto___36927))
;


var g__36754__auto___36931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__36754__auto___36931){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36932 = arguments.length;
var i__27042__auto___36933 = (0);
while(true){
if((i__27042__auto___36933 < len__27041__auto___36932)){
args__27048__auto__.push((arguments[i__27042__auto___36933]));

var G__36934 = (i__27042__auto___36933 + (1));
i__27042__auto___36933 = G__36934;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36931))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36931){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36931);
});})(g__36754__auto___36931))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__36754__auto___36931){
return (function (seq36880){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36880));
});})(g__36754__auto___36931))
;


var g__36754__auto___36935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__36754__auto___36935){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36936 = arguments.length;
var i__27042__auto___36937 = (0);
while(true){
if((i__27042__auto___36937 < len__27041__auto___36936)){
args__27048__auto__.push((arguments[i__27042__auto___36937]));

var G__36938 = (i__27042__auto___36937 + (1));
i__27042__auto___36937 = G__36938;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36935))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36935){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36935);
});})(g__36754__auto___36935))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__36754__auto___36935){
return (function (seq36881){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36881));
});})(g__36754__auto___36935))
;


var g__36754__auto___36939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__36754__auto___36939){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36940 = arguments.length;
var i__27042__auto___36941 = (0);
while(true){
if((i__27042__auto___36941 < len__27041__auto___36940)){
args__27048__auto__.push((arguments[i__27042__auto___36941]));

var G__36942 = (i__27042__auto___36941 + (1));
i__27042__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36939))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36939){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36939);
});})(g__36754__auto___36939))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__36754__auto___36939){
return (function (seq36882){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36882));
});})(g__36754__auto___36939))
;


var g__36754__auto___36943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__36754__auto___36943){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36944 = arguments.length;
var i__27042__auto___36945 = (0);
while(true){
if((i__27042__auto___36945 < len__27041__auto___36944)){
args__27048__auto__.push((arguments[i__27042__auto___36945]));

var G__36946 = (i__27042__auto___36945 + (1));
i__27042__auto___36945 = G__36946;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36943))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36943){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36943);
});})(g__36754__auto___36943))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__36754__auto___36943){
return (function (seq36883){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36883));
});})(g__36754__auto___36943))
;


var g__36754__auto___36947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__36754__auto___36947){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36948 = arguments.length;
var i__27042__auto___36949 = (0);
while(true){
if((i__27042__auto___36949 < len__27041__auto___36948)){
args__27048__auto__.push((arguments[i__27042__auto___36949]));

var G__36950 = (i__27042__auto___36949 + (1));
i__27042__auto___36949 = G__36950;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36947))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36947){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36947);
});})(g__36754__auto___36947))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__36754__auto___36947){
return (function (seq36884){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36884));
});})(g__36754__auto___36947))
;


var g__36754__auto___36951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__36754__auto___36951){
return (function cljs$spec$impl$gen$string(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36952 = arguments.length;
var i__27042__auto___36953 = (0);
while(true){
if((i__27042__auto___36953 < len__27041__auto___36952)){
args__27048__auto__.push((arguments[i__27042__auto___36953]));

var G__36954 = (i__27042__auto___36953 + (1));
i__27042__auto___36953 = G__36954;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36951))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36951){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36951);
});})(g__36754__auto___36951))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__36754__auto___36951){
return (function (seq36885){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36885));
});})(g__36754__auto___36951))
;


var g__36754__auto___36955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__36754__auto___36955){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36956 = arguments.length;
var i__27042__auto___36957 = (0);
while(true){
if((i__27042__auto___36957 < len__27041__auto___36956)){
args__27048__auto__.push((arguments[i__27042__auto___36957]));

var G__36958 = (i__27042__auto___36957 + (1));
i__27042__auto___36957 = G__36958;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36955))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36955){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36955);
});})(g__36754__auto___36955))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__36754__auto___36955){
return (function (seq36886){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36886));
});})(g__36754__auto___36955))
;


var g__36754__auto___36959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__36754__auto___36959){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36960 = arguments.length;
var i__27042__auto___36961 = (0);
while(true){
if((i__27042__auto___36961 < len__27041__auto___36960)){
args__27048__auto__.push((arguments[i__27042__auto___36961]));

var G__36962 = (i__27042__auto___36961 + (1));
i__27042__auto___36961 = G__36962;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36959))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36959){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36959);
});})(g__36754__auto___36959))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__36754__auto___36959){
return (function (seq36887){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36887));
});})(g__36754__auto___36959))
;


var g__36754__auto___36963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__36754__auto___36963){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36964 = arguments.length;
var i__27042__auto___36965 = (0);
while(true){
if((i__27042__auto___36965 < len__27041__auto___36964)){
args__27048__auto__.push((arguments[i__27042__auto___36965]));

var G__36966 = (i__27042__auto___36965 + (1));
i__27042__auto___36965 = G__36966;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36963))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36963){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36963);
});})(g__36754__auto___36963))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__36754__auto___36963){
return (function (seq36888){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36888));
});})(g__36754__auto___36963))
;


var g__36754__auto___36967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__36754__auto___36967){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36968 = arguments.length;
var i__27042__auto___36969 = (0);
while(true){
if((i__27042__auto___36969 < len__27041__auto___36968)){
args__27048__auto__.push((arguments[i__27042__auto___36969]));

var G__36970 = (i__27042__auto___36969 + (1));
i__27042__auto___36969 = G__36970;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36967))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36967){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36967);
});})(g__36754__auto___36967))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__36754__auto___36967){
return (function (seq36889){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36889));
});})(g__36754__auto___36967))
;


var g__36754__auto___36971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__36754__auto___36971){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36972 = arguments.length;
var i__27042__auto___36973 = (0);
while(true){
if((i__27042__auto___36973 < len__27041__auto___36972)){
args__27048__auto__.push((arguments[i__27042__auto___36973]));

var G__36974 = (i__27042__auto___36973 + (1));
i__27042__auto___36973 = G__36974;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});})(g__36754__auto___36971))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36754__auto___36971){
return (function (args){
return cljs.core.deref.call(null,g__36754__auto___36971);
});})(g__36754__auto___36971))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__36754__auto___36971){
return (function (seq36890){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36890));
});})(g__36754__auto___36971))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27048__auto__ = [];
var len__27041__auto___36977 = arguments.length;
var i__27042__auto___36978 = (0);
while(true){
if((i__27042__auto___36978 < len__27041__auto___36977)){
args__27048__auto__.push((arguments[i__27042__auto___36978]));

var G__36979 = (i__27042__auto___36978 + (1));
i__27042__auto___36978 = G__36979;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36975_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36975_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36976){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36976));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36980_SHARP_){
return (new Date(p1__36980_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1513163808418