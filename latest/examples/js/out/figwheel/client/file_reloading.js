// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25966__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25966__auto__){
return or__25966__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25966__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35699_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35699_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35704 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35705 = null;
var count__35706 = (0);
var i__35707 = (0);
while(true){
if((i__35707 < count__35706)){
var n = cljs.core._nth.call(null,chunk__35705,i__35707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35708 = seq__35704;
var G__35709 = chunk__35705;
var G__35710 = count__35706;
var G__35711 = (i__35707 + (1));
seq__35704 = G__35708;
chunk__35705 = G__35709;
count__35706 = G__35710;
i__35707 = G__35711;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35704);
if(temp__4657__auto__){
var seq__35704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35704__$1)){
var c__26777__auto__ = cljs.core.chunk_first.call(null,seq__35704__$1);
var G__35712 = cljs.core.chunk_rest.call(null,seq__35704__$1);
var G__35713 = c__26777__auto__;
var G__35714 = cljs.core.count.call(null,c__26777__auto__);
var G__35715 = (0);
seq__35704 = G__35712;
chunk__35705 = G__35713;
count__35706 = G__35714;
i__35707 = G__35715;
continue;
} else {
var n = cljs.core.first.call(null,seq__35704__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35716 = cljs.core.next.call(null,seq__35704__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__35704 = G__35716;
chunk__35705 = G__35717;
count__35706 = G__35718;
i__35707 = G__35719;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35770_35781 = cljs.core.seq.call(null,deps);
var chunk__35771_35782 = null;
var count__35772_35783 = (0);
var i__35773_35784 = (0);
while(true){
if((i__35773_35784 < count__35772_35783)){
var dep_35785 = cljs.core._nth.call(null,chunk__35771_35782,i__35773_35784);
topo_sort_helper_STAR_.call(null,dep_35785,(depth + (1)),state);

var G__35786 = seq__35770_35781;
var G__35787 = chunk__35771_35782;
var G__35788 = count__35772_35783;
var G__35789 = (i__35773_35784 + (1));
seq__35770_35781 = G__35786;
chunk__35771_35782 = G__35787;
count__35772_35783 = G__35788;
i__35773_35784 = G__35789;
continue;
} else {
var temp__4657__auto___35790 = cljs.core.seq.call(null,seq__35770_35781);
if(temp__4657__auto___35790){
var seq__35770_35791__$1 = temp__4657__auto___35790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35770_35791__$1)){
var c__26777__auto___35792 = cljs.core.chunk_first.call(null,seq__35770_35791__$1);
var G__35793 = cljs.core.chunk_rest.call(null,seq__35770_35791__$1);
var G__35794 = c__26777__auto___35792;
var G__35795 = cljs.core.count.call(null,c__26777__auto___35792);
var G__35796 = (0);
seq__35770_35781 = G__35793;
chunk__35771_35782 = G__35794;
count__35772_35783 = G__35795;
i__35773_35784 = G__35796;
continue;
} else {
var dep_35797 = cljs.core.first.call(null,seq__35770_35791__$1);
topo_sort_helper_STAR_.call(null,dep_35797,(depth + (1)),state);

var G__35798 = cljs.core.next.call(null,seq__35770_35791__$1);
var G__35799 = null;
var G__35800 = (0);
var G__35801 = (0);
seq__35770_35781 = G__35798;
chunk__35771_35782 = G__35799;
count__35772_35783 = G__35800;
i__35773_35784 = G__35801;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35774){
var vec__35778 = p__35774;
var seq__35779 = cljs.core.seq.call(null,vec__35778);
var first__35780 = cljs.core.first.call(null,seq__35779);
var seq__35779__$1 = cljs.core.next.call(null,seq__35779);
var x = first__35780;
var xs = seq__35779__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35778,seq__35779,first__35780,seq__35779__$1,x,xs,get_deps__$1){
return (function (p1__35720_SHARP_){
return clojure.set.difference.call(null,p1__35720_SHARP_,x);
});})(vec__35778,seq__35779,first__35780,seq__35779__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35814 = cljs.core.seq.call(null,provides);
var chunk__35815 = null;
var count__35816 = (0);
var i__35817 = (0);
while(true){
if((i__35817 < count__35816)){
var prov = cljs.core._nth.call(null,chunk__35815,i__35817);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35818_35826 = cljs.core.seq.call(null,requires);
var chunk__35819_35827 = null;
var count__35820_35828 = (0);
var i__35821_35829 = (0);
while(true){
if((i__35821_35829 < count__35820_35828)){
var req_35830 = cljs.core._nth.call(null,chunk__35819_35827,i__35821_35829);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35830,prov);

var G__35831 = seq__35818_35826;
var G__35832 = chunk__35819_35827;
var G__35833 = count__35820_35828;
var G__35834 = (i__35821_35829 + (1));
seq__35818_35826 = G__35831;
chunk__35819_35827 = G__35832;
count__35820_35828 = G__35833;
i__35821_35829 = G__35834;
continue;
} else {
var temp__4657__auto___35835 = cljs.core.seq.call(null,seq__35818_35826);
if(temp__4657__auto___35835){
var seq__35818_35836__$1 = temp__4657__auto___35835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35818_35836__$1)){
var c__26777__auto___35837 = cljs.core.chunk_first.call(null,seq__35818_35836__$1);
var G__35838 = cljs.core.chunk_rest.call(null,seq__35818_35836__$1);
var G__35839 = c__26777__auto___35837;
var G__35840 = cljs.core.count.call(null,c__26777__auto___35837);
var G__35841 = (0);
seq__35818_35826 = G__35838;
chunk__35819_35827 = G__35839;
count__35820_35828 = G__35840;
i__35821_35829 = G__35841;
continue;
} else {
var req_35842 = cljs.core.first.call(null,seq__35818_35836__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35842,prov);

var G__35843 = cljs.core.next.call(null,seq__35818_35836__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__35818_35826 = G__35843;
chunk__35819_35827 = G__35844;
count__35820_35828 = G__35845;
i__35821_35829 = G__35846;
continue;
}
} else {
}
}
break;
}

var G__35847 = seq__35814;
var G__35848 = chunk__35815;
var G__35849 = count__35816;
var G__35850 = (i__35817 + (1));
seq__35814 = G__35847;
chunk__35815 = G__35848;
count__35816 = G__35849;
i__35817 = G__35850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35814);
if(temp__4657__auto__){
var seq__35814__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35814__$1)){
var c__26777__auto__ = cljs.core.chunk_first.call(null,seq__35814__$1);
var G__35851 = cljs.core.chunk_rest.call(null,seq__35814__$1);
var G__35852 = c__26777__auto__;
var G__35853 = cljs.core.count.call(null,c__26777__auto__);
var G__35854 = (0);
seq__35814 = G__35851;
chunk__35815 = G__35852;
count__35816 = G__35853;
i__35817 = G__35854;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35814__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35822_35855 = cljs.core.seq.call(null,requires);
var chunk__35823_35856 = null;
var count__35824_35857 = (0);
var i__35825_35858 = (0);
while(true){
if((i__35825_35858 < count__35824_35857)){
var req_35859 = cljs.core._nth.call(null,chunk__35823_35856,i__35825_35858);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35859,prov);

var G__35860 = seq__35822_35855;
var G__35861 = chunk__35823_35856;
var G__35862 = count__35824_35857;
var G__35863 = (i__35825_35858 + (1));
seq__35822_35855 = G__35860;
chunk__35823_35856 = G__35861;
count__35824_35857 = G__35862;
i__35825_35858 = G__35863;
continue;
} else {
var temp__4657__auto___35864__$1 = cljs.core.seq.call(null,seq__35822_35855);
if(temp__4657__auto___35864__$1){
var seq__35822_35865__$1 = temp__4657__auto___35864__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35822_35865__$1)){
var c__26777__auto___35866 = cljs.core.chunk_first.call(null,seq__35822_35865__$1);
var G__35867 = cljs.core.chunk_rest.call(null,seq__35822_35865__$1);
var G__35868 = c__26777__auto___35866;
var G__35869 = cljs.core.count.call(null,c__26777__auto___35866);
var G__35870 = (0);
seq__35822_35855 = G__35867;
chunk__35823_35856 = G__35868;
count__35824_35857 = G__35869;
i__35825_35858 = G__35870;
continue;
} else {
var req_35871 = cljs.core.first.call(null,seq__35822_35865__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35871,prov);

var G__35872 = cljs.core.next.call(null,seq__35822_35865__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35822_35855 = G__35872;
chunk__35823_35856 = G__35873;
count__35824_35857 = G__35874;
i__35825_35858 = G__35875;
continue;
}
} else {
}
}
break;
}

var G__35876 = cljs.core.next.call(null,seq__35814__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35814 = G__35876;
chunk__35815 = G__35877;
count__35816 = G__35878;
i__35817 = G__35879;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35884_35888 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35885_35889 = null;
var count__35886_35890 = (0);
var i__35887_35891 = (0);
while(true){
if((i__35887_35891 < count__35886_35890)){
var ns_35892 = cljs.core._nth.call(null,chunk__35885_35889,i__35887_35891);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35892);

var G__35893 = seq__35884_35888;
var G__35894 = chunk__35885_35889;
var G__35895 = count__35886_35890;
var G__35896 = (i__35887_35891 + (1));
seq__35884_35888 = G__35893;
chunk__35885_35889 = G__35894;
count__35886_35890 = G__35895;
i__35887_35891 = G__35896;
continue;
} else {
var temp__4657__auto___35897 = cljs.core.seq.call(null,seq__35884_35888);
if(temp__4657__auto___35897){
var seq__35884_35898__$1 = temp__4657__auto___35897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35884_35898__$1)){
var c__26777__auto___35899 = cljs.core.chunk_first.call(null,seq__35884_35898__$1);
var G__35900 = cljs.core.chunk_rest.call(null,seq__35884_35898__$1);
var G__35901 = c__26777__auto___35899;
var G__35902 = cljs.core.count.call(null,c__26777__auto___35899);
var G__35903 = (0);
seq__35884_35888 = G__35900;
chunk__35885_35889 = G__35901;
count__35886_35890 = G__35902;
i__35887_35891 = G__35903;
continue;
} else {
var ns_35904 = cljs.core.first.call(null,seq__35884_35898__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35904);

var G__35905 = cljs.core.next.call(null,seq__35884_35898__$1);
var G__35906 = null;
var G__35907 = (0);
var G__35908 = (0);
seq__35884_35888 = G__35905;
chunk__35885_35889 = G__35906;
count__35886_35890 = G__35907;
i__35887_35891 = G__35908;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25966__auto__ = goog.require__;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35909__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35910__i = 0, G__35910__a = new Array(arguments.length -  0);
while (G__35910__i < G__35910__a.length) {G__35910__a[G__35910__i] = arguments[G__35910__i + 0]; ++G__35910__i;}
  args = new cljs.core.IndexedSeq(G__35910__a,0);
} 
return G__35909__delegate.call(this,args);};
G__35909.cljs$lang$maxFixedArity = 0;
G__35909.cljs$lang$applyTo = (function (arglist__35911){
var args = cljs.core.seq(arglist__35911);
return G__35909__delegate(args);
});
G__35909.cljs$core$IFn$_invoke$arity$variadic = G__35909__delegate;
return G__35909;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35912 = cljs.core._EQ_;
var expr__35913 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35913))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35912,expr__35913){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35912,expr__35913))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35912,expr__35913){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35915){if((e35915 instanceof Error)){
var e = e35915;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35915;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35912,expr__35913))
} else {
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35913))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35913))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35912.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35913))){
return ((function (pred__35912,expr__35913){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35916){if((e35916 instanceof Error)){
var e = e35916;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35916;

}
}})());
});
;})(pred__35912,expr__35913))
} else {
return ((function (pred__35912,expr__35913){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35912,expr__35913))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35917,callback){
var map__35920 = p__35917;
var map__35920__$1 = ((((!((map__35920 == null)))?((((map__35920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35920):map__35920);
var file_msg = map__35920__$1;
var request_url = cljs.core.get.call(null,map__35920__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35920,map__35920__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35920,map__35920__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__){
return (function (state_35944){
var state_val_35945 = (state_35944[(1)]);
if((state_val_35945 === (7))){
var inst_35940 = (state_35944[(2)]);
var state_35944__$1 = state_35944;
var statearr_35946_35966 = state_35944__$1;
(statearr_35946_35966[(2)] = inst_35940);

(statearr_35946_35966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (1))){
var state_35944__$1 = state_35944;
var statearr_35947_35967 = state_35944__$1;
(statearr_35947_35967[(2)] = null);

(statearr_35947_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (4))){
var inst_35924 = (state_35944[(7)]);
var inst_35924__$1 = (state_35944[(2)]);
var state_35944__$1 = (function (){var statearr_35948 = state_35944;
(statearr_35948[(7)] = inst_35924__$1);

return statearr_35948;
})();
if(cljs.core.truth_(inst_35924__$1)){
var statearr_35949_35968 = state_35944__$1;
(statearr_35949_35968[(1)] = (5));

} else {
var statearr_35950_35969 = state_35944__$1;
(statearr_35950_35969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (6))){
var state_35944__$1 = state_35944;
var statearr_35951_35970 = state_35944__$1;
(statearr_35951_35970[(2)] = null);

(statearr_35951_35970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (3))){
var inst_35942 = (state_35944[(2)]);
var state_35944__$1 = state_35944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35944__$1,inst_35942);
} else {
if((state_val_35945 === (2))){
var state_35944__$1 = state_35944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35944__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35945 === (11))){
var inst_35936 = (state_35944[(2)]);
var state_35944__$1 = (function (){var statearr_35952 = state_35944;
(statearr_35952[(8)] = inst_35936);

return statearr_35952;
})();
var statearr_35953_35971 = state_35944__$1;
(statearr_35953_35971[(2)] = null);

(statearr_35953_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (9))){
var inst_35928 = (state_35944[(9)]);
var inst_35930 = (state_35944[(10)]);
var inst_35932 = inst_35930.call(null,inst_35928);
var state_35944__$1 = state_35944;
var statearr_35954_35972 = state_35944__$1;
(statearr_35954_35972[(2)] = inst_35932);

(statearr_35954_35972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (5))){
var inst_35924 = (state_35944[(7)]);
var inst_35926 = figwheel.client.file_reloading.blocking_load.call(null,inst_35924);
var state_35944__$1 = state_35944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35944__$1,(8),inst_35926);
} else {
if((state_val_35945 === (10))){
var inst_35928 = (state_35944[(9)]);
var inst_35934 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35928);
var state_35944__$1 = state_35944;
var statearr_35955_35973 = state_35944__$1;
(statearr_35955_35973[(2)] = inst_35934);

(statearr_35955_35973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (8))){
var inst_35924 = (state_35944[(7)]);
var inst_35930 = (state_35944[(10)]);
var inst_35928 = (state_35944[(2)]);
var inst_35929 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35930__$1 = cljs.core.get.call(null,inst_35929,inst_35924);
var state_35944__$1 = (function (){var statearr_35956 = state_35944;
(statearr_35956[(9)] = inst_35928);

(statearr_35956[(10)] = inst_35930__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35930__$1)){
var statearr_35957_35974 = state_35944__$1;
(statearr_35957_35974[(1)] = (9));

} else {
var statearr_35958_35975 = state_35944__$1;
(statearr_35958_35975[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31087__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30976__auto__ = null;
var figwheel$client$file_reloading$state_machine__30976__auto____0 = (function (){
var statearr_35962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35962[(0)] = figwheel$client$file_reloading$state_machine__30976__auto__);

(statearr_35962[(1)] = (1));

return statearr_35962;
});
var figwheel$client$file_reloading$state_machine__30976__auto____1 = (function (state_35944){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_35944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e35963){if((e35963 instanceof Object)){
var ex__30979__auto__ = e35963;
var statearr_35964_35976 = state_35944;
(statearr_35964_35976[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_35944;
state_35944 = G__35977;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30976__auto__ = function(state_35944){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30976__auto____1.call(this,state_35944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30976__auto____0;
figwheel$client$file_reloading$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30976__auto____1;
return figwheel$client$file_reloading$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_35965 = f__31088__auto__.call(null);
(statearr_35965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_35965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35978,callback){
var map__35981 = p__35978;
var map__35981__$1 = ((((!((map__35981 == null)))?((((map__35981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35981):map__35981);
var file_msg = map__35981__$1;
var namespace = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35981,map__35981__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35981,map__35981__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35983){
var map__35986 = p__35983;
var map__35986__$1 = ((((!((map__35986 == null)))?((((map__35986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35986):map__35986);
var file_msg = map__35986__$1;
var namespace = cljs.core.get.call(null,map__35986__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35988){
var map__35991 = p__35988;
var map__35991__$1 = ((((!((map__35991 == null)))?((((map__35991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35991):map__35991);
var file_msg = map__35991__$1;
var namespace = cljs.core.get.call(null,map__35991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25954__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25954__auto__){
var or__25966__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
var or__25966__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25966__auto____$1)){
return or__25966__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25954__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35993,callback){
var map__35996 = p__35993;
var map__35996__$1 = ((((!((map__35996 == null)))?((((map__35996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35996):map__35996);
var file_msg = map__35996__$1;
var request_url = cljs.core.get.call(null,map__35996__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31087__auto___36100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___36100,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___36100,out){
return (function (state_36082){
var state_val_36083 = (state_36082[(1)]);
if((state_val_36083 === (1))){
var inst_36056 = cljs.core.seq.call(null,files);
var inst_36057 = cljs.core.first.call(null,inst_36056);
var inst_36058 = cljs.core.next.call(null,inst_36056);
var inst_36059 = files;
var state_36082__$1 = (function (){var statearr_36084 = state_36082;
(statearr_36084[(7)] = inst_36059);

(statearr_36084[(8)] = inst_36058);

(statearr_36084[(9)] = inst_36057);

return statearr_36084;
})();
var statearr_36085_36101 = state_36082__$1;
(statearr_36085_36101[(2)] = null);

(statearr_36085_36101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (2))){
var inst_36059 = (state_36082[(7)]);
var inst_36065 = (state_36082[(10)]);
var inst_36064 = cljs.core.seq.call(null,inst_36059);
var inst_36065__$1 = cljs.core.first.call(null,inst_36064);
var inst_36066 = cljs.core.next.call(null,inst_36064);
var inst_36067 = (inst_36065__$1 == null);
var inst_36068 = cljs.core.not.call(null,inst_36067);
var state_36082__$1 = (function (){var statearr_36086 = state_36082;
(statearr_36086[(11)] = inst_36066);

(statearr_36086[(10)] = inst_36065__$1);

return statearr_36086;
})();
if(inst_36068){
var statearr_36087_36102 = state_36082__$1;
(statearr_36087_36102[(1)] = (4));

} else {
var statearr_36088_36103 = state_36082__$1;
(statearr_36088_36103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (3))){
var inst_36080 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36082__$1,inst_36080);
} else {
if((state_val_36083 === (4))){
var inst_36065 = (state_36082[(10)]);
var inst_36070 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36065);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36082__$1,(7),inst_36070);
} else {
if((state_val_36083 === (5))){
var inst_36076 = cljs.core.async.close_BANG_.call(null,out);
var state_36082__$1 = state_36082;
var statearr_36089_36104 = state_36082__$1;
(statearr_36089_36104[(2)] = inst_36076);

(statearr_36089_36104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (6))){
var inst_36078 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
var statearr_36090_36105 = state_36082__$1;
(statearr_36090_36105[(2)] = inst_36078);

(statearr_36090_36105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (7))){
var inst_36066 = (state_36082[(11)]);
var inst_36072 = (state_36082[(2)]);
var inst_36073 = cljs.core.async.put_BANG_.call(null,out,inst_36072);
var inst_36059 = inst_36066;
var state_36082__$1 = (function (){var statearr_36091 = state_36082;
(statearr_36091[(7)] = inst_36059);

(statearr_36091[(12)] = inst_36073);

return statearr_36091;
})();
var statearr_36092_36106 = state_36082__$1;
(statearr_36092_36106[(2)] = null);

(statearr_36092_36106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31087__auto___36100,out))
;
return ((function (switch__30975__auto__,c__31087__auto___36100,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____0 = (function (){
var statearr_36096 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36096[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__);

(statearr_36096[(1)] = (1));

return statearr_36096;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____1 = (function (state_36082){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_36082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e36097){if((e36097 instanceof Object)){
var ex__30979__auto__ = e36097;
var statearr_36098_36107 = state_36082;
(statearr_36098_36107[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36108 = state_36082;
state_36082 = G__36108;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__ = function(state_36082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____1.call(this,state_36082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___36100,out))
})();
var state__31089__auto__ = (function (){var statearr_36099 = f__31088__auto__.call(null);
(statearr_36099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___36100);

return statearr_36099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___36100,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36109,opts){
var map__36113 = p__36109;
var map__36113__$1 = ((((!((map__36113 == null)))?((((map__36113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36113):map__36113);
var eval_body__$1 = cljs.core.get.call(null,map__36113__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36113__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25954__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25954__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25954__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36115){var e = e36115;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36116_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36116_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36125){
var vec__36126 = p__36125;
var k = cljs.core.nth.call(null,vec__36126,(0),null);
var v = cljs.core.nth.call(null,vec__36126,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36129){
var vec__36130 = p__36129;
var k = cljs.core.nth.call(null,vec__36130,(0),null);
var v = cljs.core.nth.call(null,vec__36130,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36136,p__36137){
var map__36384 = p__36136;
var map__36384__$1 = ((((!((map__36384 == null)))?((((map__36384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36384):map__36384);
var opts = map__36384__$1;
var before_jsload = cljs.core.get.call(null,map__36384__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36384__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36384__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36385 = p__36137;
var map__36385__$1 = ((((!((map__36385 == null)))?((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385):map__36385);
var msg = map__36385__$1;
var files = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36538){
var state_val_36539 = (state_36538[(1)]);
if((state_val_36539 === (7))){
var inst_36399 = (state_36538[(7)]);
var inst_36400 = (state_36538[(8)]);
var inst_36402 = (state_36538[(9)]);
var inst_36401 = (state_36538[(10)]);
var inst_36407 = cljs.core._nth.call(null,inst_36400,inst_36402);
var inst_36408 = figwheel.client.file_reloading.eval_body.call(null,inst_36407,opts);
var inst_36409 = (inst_36402 + (1));
var tmp36540 = inst_36399;
var tmp36541 = inst_36400;
var tmp36542 = inst_36401;
var inst_36399__$1 = tmp36540;
var inst_36400__$1 = tmp36541;
var inst_36401__$1 = tmp36542;
var inst_36402__$1 = inst_36409;
var state_36538__$1 = (function (){var statearr_36543 = state_36538;
(statearr_36543[(7)] = inst_36399__$1);

(statearr_36543[(11)] = inst_36408);

(statearr_36543[(8)] = inst_36400__$1);

(statearr_36543[(9)] = inst_36402__$1);

(statearr_36543[(10)] = inst_36401__$1);

return statearr_36543;
})();
var statearr_36544_36630 = state_36538__$1;
(statearr_36544_36630[(2)] = null);

(statearr_36544_36630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (20))){
var inst_36442 = (state_36538[(12)]);
var inst_36450 = figwheel.client.file_reloading.sort_files.call(null,inst_36442);
var state_36538__$1 = state_36538;
var statearr_36545_36631 = state_36538__$1;
(statearr_36545_36631[(2)] = inst_36450);

(statearr_36545_36631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (27))){
var state_36538__$1 = state_36538;
var statearr_36546_36632 = state_36538__$1;
(statearr_36546_36632[(2)] = null);

(statearr_36546_36632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (1))){
var inst_36391 = (state_36538[(13)]);
var inst_36388 = before_jsload.call(null,files);
var inst_36389 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36390 = (function (){return ((function (inst_36391,inst_36388,inst_36389,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36133_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36133_SHARP_);
});
;})(inst_36391,inst_36388,inst_36389,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36391__$1 = cljs.core.filter.call(null,inst_36390,files);
var inst_36392 = cljs.core.not_empty.call(null,inst_36391__$1);
var state_36538__$1 = (function (){var statearr_36547 = state_36538;
(statearr_36547[(14)] = inst_36389);

(statearr_36547[(15)] = inst_36388);

(statearr_36547[(13)] = inst_36391__$1);

return statearr_36547;
})();
if(cljs.core.truth_(inst_36392)){
var statearr_36548_36633 = state_36538__$1;
(statearr_36548_36633[(1)] = (2));

} else {
var statearr_36549_36634 = state_36538__$1;
(statearr_36549_36634[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (24))){
var state_36538__$1 = state_36538;
var statearr_36550_36635 = state_36538__$1;
(statearr_36550_36635[(2)] = null);

(statearr_36550_36635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (39))){
var inst_36492 = (state_36538[(16)]);
var state_36538__$1 = state_36538;
var statearr_36551_36636 = state_36538__$1;
(statearr_36551_36636[(2)] = inst_36492);

(statearr_36551_36636[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (46))){
var inst_36533 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36552_36637 = state_36538__$1;
(statearr_36552_36637[(2)] = inst_36533);

(statearr_36552_36637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (4))){
var inst_36436 = (state_36538[(2)]);
var inst_36437 = cljs.core.List.EMPTY;
var inst_36438 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36437);
var inst_36439 = (function (){return ((function (inst_36436,inst_36437,inst_36438,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36134_SHARP_){
var and__25954__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36134_SHARP_);
if(cljs.core.truth_(and__25954__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36134_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36134_SHARP_)));
} else {
return and__25954__auto__;
}
});
;})(inst_36436,inst_36437,inst_36438,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36440 = cljs.core.filter.call(null,inst_36439,files);
var inst_36441 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36442 = cljs.core.concat.call(null,inst_36440,inst_36441);
var state_36538__$1 = (function (){var statearr_36553 = state_36538;
(statearr_36553[(12)] = inst_36442);

(statearr_36553[(17)] = inst_36438);

(statearr_36553[(18)] = inst_36436);

return statearr_36553;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36554_36638 = state_36538__$1;
(statearr_36554_36638[(1)] = (16));

} else {
var statearr_36555_36639 = state_36538__$1;
(statearr_36555_36639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (15))){
var inst_36426 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36556_36640 = state_36538__$1;
(statearr_36556_36640[(2)] = inst_36426);

(statearr_36556_36640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (21))){
var inst_36452 = (state_36538[(19)]);
var inst_36452__$1 = (state_36538[(2)]);
var inst_36453 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36452__$1);
var state_36538__$1 = (function (){var statearr_36557 = state_36538;
(statearr_36557[(19)] = inst_36452__$1);

return statearr_36557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36538__$1,(22),inst_36453);
} else {
if((state_val_36539 === (31))){
var inst_36536 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36538__$1,inst_36536);
} else {
if((state_val_36539 === (32))){
var inst_36492 = (state_36538[(16)]);
var inst_36497 = inst_36492.cljs$lang$protocol_mask$partition0$;
var inst_36498 = (inst_36497 & (64));
var inst_36499 = inst_36492.cljs$core$ISeq$;
var inst_36500 = (inst_36498) || (inst_36499);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36500)){
var statearr_36558_36641 = state_36538__$1;
(statearr_36558_36641[(1)] = (35));

} else {
var statearr_36559_36642 = state_36538__$1;
(statearr_36559_36642[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (40))){
var inst_36513 = (state_36538[(20)]);
var inst_36512 = (state_36538[(2)]);
var inst_36513__$1 = cljs.core.get.call(null,inst_36512,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36514 = cljs.core.get.call(null,inst_36512,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36515 = cljs.core.not_empty.call(null,inst_36513__$1);
var state_36538__$1 = (function (){var statearr_36560 = state_36538;
(statearr_36560[(21)] = inst_36514);

(statearr_36560[(20)] = inst_36513__$1);

return statearr_36560;
})();
if(cljs.core.truth_(inst_36515)){
var statearr_36561_36643 = state_36538__$1;
(statearr_36561_36643[(1)] = (41));

} else {
var statearr_36562_36644 = state_36538__$1;
(statearr_36562_36644[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (33))){
var state_36538__$1 = state_36538;
var statearr_36563_36645 = state_36538__$1;
(statearr_36563_36645[(2)] = false);

(statearr_36563_36645[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (13))){
var inst_36412 = (state_36538[(22)]);
var inst_36416 = cljs.core.chunk_first.call(null,inst_36412);
var inst_36417 = cljs.core.chunk_rest.call(null,inst_36412);
var inst_36418 = cljs.core.count.call(null,inst_36416);
var inst_36399 = inst_36417;
var inst_36400 = inst_36416;
var inst_36401 = inst_36418;
var inst_36402 = (0);
var state_36538__$1 = (function (){var statearr_36564 = state_36538;
(statearr_36564[(7)] = inst_36399);

(statearr_36564[(8)] = inst_36400);

(statearr_36564[(9)] = inst_36402);

(statearr_36564[(10)] = inst_36401);

return statearr_36564;
})();
var statearr_36565_36646 = state_36538__$1;
(statearr_36565_36646[(2)] = null);

(statearr_36565_36646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (22))){
var inst_36456 = (state_36538[(23)]);
var inst_36452 = (state_36538[(19)]);
var inst_36455 = (state_36538[(24)]);
var inst_36460 = (state_36538[(25)]);
var inst_36455__$1 = (state_36538[(2)]);
var inst_36456__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36455__$1);
var inst_36457 = (function (){var all_files = inst_36452;
var res_SINGLEQUOTE_ = inst_36455__$1;
var res = inst_36456__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36456,inst_36452,inst_36455,inst_36460,inst_36455__$1,inst_36456__$1,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36135_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36135_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36456,inst_36452,inst_36455,inst_36460,inst_36455__$1,inst_36456__$1,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36458 = cljs.core.filter.call(null,inst_36457,inst_36455__$1);
var inst_36459 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36460__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36459);
var inst_36461 = cljs.core.not_empty.call(null,inst_36460__$1);
var state_36538__$1 = (function (){var statearr_36566 = state_36538;
(statearr_36566[(23)] = inst_36456__$1);

(statearr_36566[(24)] = inst_36455__$1);

(statearr_36566[(25)] = inst_36460__$1);

(statearr_36566[(26)] = inst_36458);

return statearr_36566;
})();
if(cljs.core.truth_(inst_36461)){
var statearr_36567_36647 = state_36538__$1;
(statearr_36567_36647[(1)] = (23));

} else {
var statearr_36568_36648 = state_36538__$1;
(statearr_36568_36648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (36))){
var state_36538__$1 = state_36538;
var statearr_36569_36649 = state_36538__$1;
(statearr_36569_36649[(2)] = false);

(statearr_36569_36649[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (41))){
var inst_36513 = (state_36538[(20)]);
var inst_36517 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36518 = cljs.core.map.call(null,inst_36517,inst_36513);
var inst_36519 = cljs.core.pr_str.call(null,inst_36518);
var inst_36520 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36519)].join('');
var inst_36521 = figwheel.client.utils.log.call(null,inst_36520);
var state_36538__$1 = state_36538;
var statearr_36570_36650 = state_36538__$1;
(statearr_36570_36650[(2)] = inst_36521);

(statearr_36570_36650[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (43))){
var inst_36514 = (state_36538[(21)]);
var inst_36524 = (state_36538[(2)]);
var inst_36525 = cljs.core.not_empty.call(null,inst_36514);
var state_36538__$1 = (function (){var statearr_36571 = state_36538;
(statearr_36571[(27)] = inst_36524);

return statearr_36571;
})();
if(cljs.core.truth_(inst_36525)){
var statearr_36572_36651 = state_36538__$1;
(statearr_36572_36651[(1)] = (44));

} else {
var statearr_36573_36652 = state_36538__$1;
(statearr_36573_36652[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (29))){
var inst_36492 = (state_36538[(16)]);
var inst_36456 = (state_36538[(23)]);
var inst_36452 = (state_36538[(19)]);
var inst_36455 = (state_36538[(24)]);
var inst_36460 = (state_36538[(25)]);
var inst_36458 = (state_36538[(26)]);
var inst_36488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36491 = (function (){var all_files = inst_36452;
var res_SINGLEQUOTE_ = inst_36455;
var res = inst_36456;
var files_not_loaded = inst_36458;
var dependencies_that_loaded = inst_36460;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36492,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36488,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36490){
var map__36574 = p__36490;
var map__36574__$1 = ((((!((map__36574 == null)))?((((map__36574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36574):map__36574);
var namespace = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36492,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36488,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36492__$1 = cljs.core.group_by.call(null,inst_36491,inst_36458);
var inst_36494 = (inst_36492__$1 == null);
var inst_36495 = cljs.core.not.call(null,inst_36494);
var state_36538__$1 = (function (){var statearr_36576 = state_36538;
(statearr_36576[(16)] = inst_36492__$1);

(statearr_36576[(28)] = inst_36488);

return statearr_36576;
})();
if(inst_36495){
var statearr_36577_36653 = state_36538__$1;
(statearr_36577_36653[(1)] = (32));

} else {
var statearr_36578_36654 = state_36538__$1;
(statearr_36578_36654[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (44))){
var inst_36514 = (state_36538[(21)]);
var inst_36527 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36514);
var inst_36528 = cljs.core.pr_str.call(null,inst_36527);
var inst_36529 = [cljs.core.str("not required: "),cljs.core.str(inst_36528)].join('');
var inst_36530 = figwheel.client.utils.log.call(null,inst_36529);
var state_36538__$1 = state_36538;
var statearr_36579_36655 = state_36538__$1;
(statearr_36579_36655[(2)] = inst_36530);

(statearr_36579_36655[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (6))){
var inst_36433 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36580_36656 = state_36538__$1;
(statearr_36580_36656[(2)] = inst_36433);

(statearr_36580_36656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (28))){
var inst_36458 = (state_36538[(26)]);
var inst_36485 = (state_36538[(2)]);
var inst_36486 = cljs.core.not_empty.call(null,inst_36458);
var state_36538__$1 = (function (){var statearr_36581 = state_36538;
(statearr_36581[(29)] = inst_36485);

return statearr_36581;
})();
if(cljs.core.truth_(inst_36486)){
var statearr_36582_36657 = state_36538__$1;
(statearr_36582_36657[(1)] = (29));

} else {
var statearr_36583_36658 = state_36538__$1;
(statearr_36583_36658[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (25))){
var inst_36456 = (state_36538[(23)]);
var inst_36472 = (state_36538[(2)]);
var inst_36473 = cljs.core.not_empty.call(null,inst_36456);
var state_36538__$1 = (function (){var statearr_36584 = state_36538;
(statearr_36584[(30)] = inst_36472);

return statearr_36584;
})();
if(cljs.core.truth_(inst_36473)){
var statearr_36585_36659 = state_36538__$1;
(statearr_36585_36659[(1)] = (26));

} else {
var statearr_36586_36660 = state_36538__$1;
(statearr_36586_36660[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (34))){
var inst_36507 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36507)){
var statearr_36587_36661 = state_36538__$1;
(statearr_36587_36661[(1)] = (38));

} else {
var statearr_36588_36662 = state_36538__$1;
(statearr_36588_36662[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (17))){
var state_36538__$1 = state_36538;
var statearr_36589_36663 = state_36538__$1;
(statearr_36589_36663[(2)] = recompile_dependents);

(statearr_36589_36663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (3))){
var state_36538__$1 = state_36538;
var statearr_36590_36664 = state_36538__$1;
(statearr_36590_36664[(2)] = null);

(statearr_36590_36664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (12))){
var inst_36429 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36591_36665 = state_36538__$1;
(statearr_36591_36665[(2)] = inst_36429);

(statearr_36591_36665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (2))){
var inst_36391 = (state_36538[(13)]);
var inst_36398 = cljs.core.seq.call(null,inst_36391);
var inst_36399 = inst_36398;
var inst_36400 = null;
var inst_36401 = (0);
var inst_36402 = (0);
var state_36538__$1 = (function (){var statearr_36592 = state_36538;
(statearr_36592[(7)] = inst_36399);

(statearr_36592[(8)] = inst_36400);

(statearr_36592[(9)] = inst_36402);

(statearr_36592[(10)] = inst_36401);

return statearr_36592;
})();
var statearr_36593_36666 = state_36538__$1;
(statearr_36593_36666[(2)] = null);

(statearr_36593_36666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (23))){
var inst_36456 = (state_36538[(23)]);
var inst_36452 = (state_36538[(19)]);
var inst_36455 = (state_36538[(24)]);
var inst_36460 = (state_36538[(25)]);
var inst_36458 = (state_36538[(26)]);
var inst_36463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36465 = (function (){var all_files = inst_36452;
var res_SINGLEQUOTE_ = inst_36455;
var res = inst_36456;
var files_not_loaded = inst_36458;
var dependencies_that_loaded = inst_36460;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36463,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36464){
var map__36594 = p__36464;
var map__36594__$1 = ((((!((map__36594 == null)))?((((map__36594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36594):map__36594);
var request_url = cljs.core.get.call(null,map__36594__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36463,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36466 = cljs.core.reverse.call(null,inst_36460);
var inst_36467 = cljs.core.map.call(null,inst_36465,inst_36466);
var inst_36468 = cljs.core.pr_str.call(null,inst_36467);
var inst_36469 = figwheel.client.utils.log.call(null,inst_36468);
var state_36538__$1 = (function (){var statearr_36596 = state_36538;
(statearr_36596[(31)] = inst_36463);

return statearr_36596;
})();
var statearr_36597_36667 = state_36538__$1;
(statearr_36597_36667[(2)] = inst_36469);

(statearr_36597_36667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (35))){
var state_36538__$1 = state_36538;
var statearr_36598_36668 = state_36538__$1;
(statearr_36598_36668[(2)] = true);

(statearr_36598_36668[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (19))){
var inst_36442 = (state_36538[(12)]);
var inst_36448 = figwheel.client.file_reloading.expand_files.call(null,inst_36442);
var state_36538__$1 = state_36538;
var statearr_36599_36669 = state_36538__$1;
(statearr_36599_36669[(2)] = inst_36448);

(statearr_36599_36669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (11))){
var state_36538__$1 = state_36538;
var statearr_36600_36670 = state_36538__$1;
(statearr_36600_36670[(2)] = null);

(statearr_36600_36670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (9))){
var inst_36431 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36601_36671 = state_36538__$1;
(statearr_36601_36671[(2)] = inst_36431);

(statearr_36601_36671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (5))){
var inst_36402 = (state_36538[(9)]);
var inst_36401 = (state_36538[(10)]);
var inst_36404 = (inst_36402 < inst_36401);
var inst_36405 = inst_36404;
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36405)){
var statearr_36602_36672 = state_36538__$1;
(statearr_36602_36672[(1)] = (7));

} else {
var statearr_36603_36673 = state_36538__$1;
(statearr_36603_36673[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (14))){
var inst_36412 = (state_36538[(22)]);
var inst_36421 = cljs.core.first.call(null,inst_36412);
var inst_36422 = figwheel.client.file_reloading.eval_body.call(null,inst_36421,opts);
var inst_36423 = cljs.core.next.call(null,inst_36412);
var inst_36399 = inst_36423;
var inst_36400 = null;
var inst_36401 = (0);
var inst_36402 = (0);
var state_36538__$1 = (function (){var statearr_36604 = state_36538;
(statearr_36604[(7)] = inst_36399);

(statearr_36604[(8)] = inst_36400);

(statearr_36604[(32)] = inst_36422);

(statearr_36604[(9)] = inst_36402);

(statearr_36604[(10)] = inst_36401);

return statearr_36604;
})();
var statearr_36605_36674 = state_36538__$1;
(statearr_36605_36674[(2)] = null);

(statearr_36605_36674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (45))){
var state_36538__$1 = state_36538;
var statearr_36606_36675 = state_36538__$1;
(statearr_36606_36675[(2)] = null);

(statearr_36606_36675[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (26))){
var inst_36456 = (state_36538[(23)]);
var inst_36452 = (state_36538[(19)]);
var inst_36455 = (state_36538[(24)]);
var inst_36460 = (state_36538[(25)]);
var inst_36458 = (state_36538[(26)]);
var inst_36475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36477 = (function (){var all_files = inst_36452;
var res_SINGLEQUOTE_ = inst_36455;
var res = inst_36456;
var files_not_loaded = inst_36458;
var dependencies_that_loaded = inst_36460;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36475,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36476){
var map__36607 = p__36476;
var map__36607__$1 = ((((!((map__36607 == null)))?((((map__36607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36607):map__36607);
var namespace = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36607__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36475,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36478 = cljs.core.map.call(null,inst_36477,inst_36456);
var inst_36479 = cljs.core.pr_str.call(null,inst_36478);
var inst_36480 = figwheel.client.utils.log.call(null,inst_36479);
var inst_36481 = (function (){var all_files = inst_36452;
var res_SINGLEQUOTE_ = inst_36455;
var res = inst_36456;
var files_not_loaded = inst_36458;
var dependencies_that_loaded = inst_36460;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36475,inst_36477,inst_36478,inst_36479,inst_36480,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36456,inst_36452,inst_36455,inst_36460,inst_36458,inst_36475,inst_36477,inst_36478,inst_36479,inst_36480,state_val_36539,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36482 = setTimeout(inst_36481,(10));
var state_36538__$1 = (function (){var statearr_36609 = state_36538;
(statearr_36609[(33)] = inst_36480);

(statearr_36609[(34)] = inst_36475);

return statearr_36609;
})();
var statearr_36610_36676 = state_36538__$1;
(statearr_36610_36676[(2)] = inst_36482);

(statearr_36610_36676[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (16))){
var state_36538__$1 = state_36538;
var statearr_36611_36677 = state_36538__$1;
(statearr_36611_36677[(2)] = reload_dependents);

(statearr_36611_36677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (38))){
var inst_36492 = (state_36538[(16)]);
var inst_36509 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36492);
var state_36538__$1 = state_36538;
var statearr_36612_36678 = state_36538__$1;
(statearr_36612_36678[(2)] = inst_36509);

(statearr_36612_36678[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (30))){
var state_36538__$1 = state_36538;
var statearr_36613_36679 = state_36538__$1;
(statearr_36613_36679[(2)] = null);

(statearr_36613_36679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (10))){
var inst_36412 = (state_36538[(22)]);
var inst_36414 = cljs.core.chunked_seq_QMARK_.call(null,inst_36412);
var state_36538__$1 = state_36538;
if(inst_36414){
var statearr_36614_36680 = state_36538__$1;
(statearr_36614_36680[(1)] = (13));

} else {
var statearr_36615_36681 = state_36538__$1;
(statearr_36615_36681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (18))){
var inst_36446 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
if(cljs.core.truth_(inst_36446)){
var statearr_36616_36682 = state_36538__$1;
(statearr_36616_36682[(1)] = (19));

} else {
var statearr_36617_36683 = state_36538__$1;
(statearr_36617_36683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (42))){
var state_36538__$1 = state_36538;
var statearr_36618_36684 = state_36538__$1;
(statearr_36618_36684[(2)] = null);

(statearr_36618_36684[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (37))){
var inst_36504 = (state_36538[(2)]);
var state_36538__$1 = state_36538;
var statearr_36619_36685 = state_36538__$1;
(statearr_36619_36685[(2)] = inst_36504);

(statearr_36619_36685[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36539 === (8))){
var inst_36399 = (state_36538[(7)]);
var inst_36412 = (state_36538[(22)]);
var inst_36412__$1 = cljs.core.seq.call(null,inst_36399);
var state_36538__$1 = (function (){var statearr_36620 = state_36538;
(statearr_36620[(22)] = inst_36412__$1);

return statearr_36620;
})();
if(inst_36412__$1){
var statearr_36621_36686 = state_36538__$1;
(statearr_36621_36686[(1)] = (10));

} else {
var statearr_36622_36687 = state_36538__$1;
(statearr_36622_36687[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30975__auto__,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____0 = (function (){
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____1 = (function (state_36538){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_36538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__30979__auto__ = e36627;
var statearr_36628_36688 = state_36538;
(statearr_36628_36688[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36689 = state_36538;
state_36538 = G__36689;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__ = function(state_36538){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____1.call(this,state_36538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31089__auto__ = (function (){var statearr_36629 = f__31088__auto__.call(null);
(statearr_36629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,map__36384,map__36384__$1,opts,before_jsload,on_jsload,reload_dependents,map__36385,map__36385__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31087__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36692,link){
var map__36695 = p__36692;
var map__36695__$1 = ((((!((map__36695 == null)))?((((map__36695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36695):map__36695);
var file = cljs.core.get.call(null,map__36695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36695,map__36695__$1,file){
return (function (p1__36690_SHARP_,p2__36691_SHARP_){
if(cljs.core._EQ_.call(null,p1__36690_SHARP_,p2__36691_SHARP_)){
return p1__36690_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36695,map__36695__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36701){
var map__36702 = p__36701;
var map__36702__$1 = ((((!((map__36702 == null)))?((((map__36702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36702):map__36702);
var match_length = cljs.core.get.call(null,map__36702__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36702__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36697_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36697_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36704_SHARP_,p2__36705_SHARP_){
return cljs.core.assoc.call(null,p1__36704_SHARP_,cljs.core.get.call(null,p2__36705_SHARP_,key),p2__36705_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36706 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36706);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36706);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36707,p__36708){
var map__36713 = p__36707;
var map__36713__$1 = ((((!((map__36713 == null)))?((((map__36713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36713):map__36713);
var on_cssload = cljs.core.get.call(null,map__36713__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36714 = p__36708;
var map__36714__$1 = ((((!((map__36714 == null)))?((((map__36714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36714):map__36714);
var files_msg = map__36714__$1;
var files = cljs.core.get.call(null,map__36714__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513163807971