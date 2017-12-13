// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27883__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27880 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__27881 = cljs.core.seq.call(null,vec__27880);
var first__27882 = cljs.core.first.call(null,seq__27881);
var seq__27881__$1 = cljs.core.next.call(null,seq__27881);
var tag = first__27882;
var body = seq__27881__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27884__i = 0, G__27884__a = new Array(arguments.length -  0);
while (G__27884__i < G__27884__a.length) {G__27884__a[G__27884__i] = arguments[G__27884__i + 0]; ++G__27884__i;}
  args = new cljs.core.IndexedSeq(G__27884__a,0);
} 
return G__27883__delegate.call(this,args);};
G__27883.cljs$lang$maxFixedArity = 0;
G__27883.cljs$lang$applyTo = (function (arglist__27885){
var args = cljs.core.seq(arglist__27885);
return G__27883__delegate(args);
});
G__27883.cljs$core$IFn$_invoke$arity$variadic = G__27883__delegate;
return G__27883;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__26746__auto__ = (function sablono$core$update_arglists_$_iter__27890(s__27891){
return (new cljs.core.LazySeq(null,(function (){
var s__27891__$1 = s__27891;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27891__$1);
if(temp__4657__auto__){
var s__27891__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27891__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__27891__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__27893 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__27892 = (0);
while(true){
if((i__27892 < size__26745__auto__)){
var args = cljs.core._nth.call(null,c__26744__auto__,i__27892);
cljs.core.chunk_append.call(null,b__27893,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27894 = (i__27892 + (1));
i__27892 = G__27894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27893),sablono$core$update_arglists_$_iter__27890.call(null,cljs.core.chunk_rest.call(null,s__27891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27893),null);
}
} else {
var args = cljs.core.first.call(null,s__27891__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27890.call(null,cljs.core.rest.call(null,s__27891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__27048__auto__ = [];
var len__27041__auto___27900 = arguments.length;
var i__27042__auto___27901 = (0);
while(true){
if((i__27042__auto___27901 < len__27041__auto___27900)){
args__27048__auto__.push((arguments[i__27042__auto___27901]));

var G__27902 = (i__27042__auto___27901 + (1));
i__27042__auto___27901 = G__27902;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__26746__auto__ = (function sablono$core$iter__27896(s__27897){
return (new cljs.core.LazySeq(null,(function (){
var s__27897__$1 = s__27897;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27897__$1);
if(temp__4657__auto__){
var s__27897__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27897__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__27897__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__27899 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__27898 = (0);
while(true){
if((i__27898 < size__26745__auto__)){
var style = cljs.core._nth.call(null,c__26744__auto__,i__27898);
cljs.core.chunk_append.call(null,b__27899,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27903 = (i__27898 + (1));
i__27898 = G__27903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27899),sablono$core$iter__27896.call(null,cljs.core.chunk_rest.call(null,s__27897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27899),null);
}
} else {
var style = cljs.core.first.call(null,s__27897__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27896.call(null,cljs.core.rest.call(null,s__27897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27895){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27895));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27904 = (function sablono$core$link_to27904(var_args){
var args__27048__auto__ = [];
var len__27041__auto___27907 = arguments.length;
var i__27042__auto___27908 = (0);
while(true){
if((i__27042__auto___27908 < len__27041__auto___27907)){
args__27048__auto__.push((arguments[i__27042__auto___27908]));

var G__27909 = (i__27042__auto___27908 + (1));
i__27042__auto___27908 = G__27909;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27904.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

sablono.core.link_to27904.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27904.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27904.cljs$lang$applyTo = (function (seq27905){
var G__27906 = cljs.core.first.call(null,seq27905);
var seq27905__$1 = cljs.core.next.call(null,seq27905);
return sablono.core.link_to27904.cljs$core$IFn$_invoke$arity$variadic(G__27906,seq27905__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27904);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27910 = (function sablono$core$mail_to27910(var_args){
var args__27048__auto__ = [];
var len__27041__auto___27917 = arguments.length;
var i__27042__auto___27918 = (0);
while(true){
if((i__27042__auto___27918 < len__27041__auto___27917)){
args__27048__auto__.push((arguments[i__27042__auto___27918]));

var G__27919 = (i__27042__auto___27918 + (1));
i__27042__auto___27918 = G__27919;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27910.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

sablono.core.mail_to27910.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27913){
var vec__27914 = p__27913;
var content = cljs.core.nth.call(null,vec__27914,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25966__auto__ = content;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27910.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27910.cljs$lang$applyTo = (function (seq27911){
var G__27912 = cljs.core.first.call(null,seq27911);
var seq27911__$1 = cljs.core.next.call(null,seq27911);
return sablono.core.mail_to27910.cljs$core$IFn$_invoke$arity$variadic(G__27912,seq27911__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27910);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27920 = (function sablono$core$unordered_list27920(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__26746__auto__ = (function sablono$core$unordered_list27920_$_iter__27925(s__27926){
return (new cljs.core.LazySeq(null,(function (){
var s__27926__$1 = s__27926;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27926__$1);
if(temp__4657__auto__){
var s__27926__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27926__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__27926__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__27928 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__27927 = (0);
while(true){
if((i__27927 < size__26745__auto__)){
var x = cljs.core._nth.call(null,c__26744__auto__,i__27927);
cljs.core.chunk_append.call(null,b__27928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27929 = (i__27927 + (1));
i__27927 = G__27929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27928),sablono$core$unordered_list27920_$_iter__27925.call(null,cljs.core.chunk_rest.call(null,s__27926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27928),null);
}
} else {
var x = cljs.core.first.call(null,s__27926__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27920_$_iter__27925.call(null,cljs.core.rest.call(null,s__27926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27920);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27930 = (function sablono$core$ordered_list27930(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__26746__auto__ = (function sablono$core$ordered_list27930_$_iter__27935(s__27936){
return (new cljs.core.LazySeq(null,(function (){
var s__27936__$1 = s__27936;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27936__$1);
if(temp__4657__auto__){
var s__27936__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27936__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__27936__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__27938 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__27937 = (0);
while(true){
if((i__27937 < size__26745__auto__)){
var x = cljs.core._nth.call(null,c__26744__auto__,i__27937);
cljs.core.chunk_append.call(null,b__27938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27939 = (i__27937 + (1));
i__27937 = G__27939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27938),sablono$core$ordered_list27930_$_iter__27935.call(null,cljs.core.chunk_rest.call(null,s__27936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27938),null);
}
} else {
var x = cljs.core.first.call(null,s__27936__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27930_$_iter__27935.call(null,cljs.core.rest.call(null,s__27936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27930);
/**
 * Create an image element.
 */
sablono.core.image27940 = (function sablono$core$image27940(var_args){
var args27941 = [];
var len__27041__auto___27944 = arguments.length;
var i__27042__auto___27945 = (0);
while(true){
if((i__27042__auto___27945 < len__27041__auto___27944)){
args27941.push((arguments[i__27042__auto___27945]));

var G__27946 = (i__27042__auto___27945 + (1));
i__27042__auto___27945 = G__27946;
continue;
} else {
}
break;
}

var G__27943 = args27941.length;
switch (G__27943) {
case 1:
return sablono.core.image27940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27941.length)].join('')));

}
});

sablono.core.image27940.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27940.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27940.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27940);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27948_SHARP_,p2__27949_SHARP_){
return [cljs.core.str(p1__27948_SHARP_),cljs.core.str("["),cljs.core.str(p2__27949_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27950_SHARP_,p2__27951_SHARP_){
return [cljs.core.str(p1__27950_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27951_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25966__auto__ = value;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27952 = (function sablono$core$color_field27952(var_args){
var args27953 = [];
var len__27041__auto___28020 = arguments.length;
var i__27042__auto___28021 = (0);
while(true){
if((i__27042__auto___28021 < len__27041__auto___28020)){
args27953.push((arguments[i__27042__auto___28021]));

var G__28022 = (i__27042__auto___28021 + (1));
i__27042__auto___28021 = G__28022;
continue;
} else {
}
break;
}

var G__27955 = args27953.length;
switch (G__27955) {
case 1:
return sablono.core.color_field27952.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27952.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27953.length)].join('')));

}
});

sablono.core.color_field27952.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.color_field27952.call(null,name__27867__auto__,null);
});

sablono.core.color_field27952.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.color_field27952.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27952);

/**
 * Creates a date input field.
 */
sablono.core.date_field27956 = (function sablono$core$date_field27956(var_args){
var args27957 = [];
var len__27041__auto___28024 = arguments.length;
var i__27042__auto___28025 = (0);
while(true){
if((i__27042__auto___28025 < len__27041__auto___28024)){
args27957.push((arguments[i__27042__auto___28025]));

var G__28026 = (i__27042__auto___28025 + (1));
i__27042__auto___28025 = G__28026;
continue;
} else {
}
break;
}

var G__27959 = args27957.length;
switch (G__27959) {
case 1:
return sablono.core.date_field27956.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27956.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27957.length)].join('')));

}
});

sablono.core.date_field27956.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.date_field27956.call(null,name__27867__auto__,null);
});

sablono.core.date_field27956.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.date_field27956.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27956);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27960 = (function sablono$core$datetime_field27960(var_args){
var args27961 = [];
var len__27041__auto___28028 = arguments.length;
var i__27042__auto___28029 = (0);
while(true){
if((i__27042__auto___28029 < len__27041__auto___28028)){
args27961.push((arguments[i__27042__auto___28029]));

var G__28030 = (i__27042__auto___28029 + (1));
i__27042__auto___28029 = G__28030;
continue;
} else {
}
break;
}

var G__27963 = args27961.length;
switch (G__27963) {
case 1:
return sablono.core.datetime_field27960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27961.length)].join('')));

}
});

sablono.core.datetime_field27960.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.datetime_field27960.call(null,name__27867__auto__,null);
});

sablono.core.datetime_field27960.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.datetime_field27960.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27960);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27964 = (function sablono$core$datetime_local_field27964(var_args){
var args27965 = [];
var len__27041__auto___28032 = arguments.length;
var i__27042__auto___28033 = (0);
while(true){
if((i__27042__auto___28033 < len__27041__auto___28032)){
args27965.push((arguments[i__27042__auto___28033]));

var G__28034 = (i__27042__auto___28033 + (1));
i__27042__auto___28033 = G__28034;
continue;
} else {
}
break;
}

var G__27967 = args27965.length;
switch (G__27967) {
case 1:
return sablono.core.datetime_local_field27964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27965.length)].join('')));

}
});

sablono.core.datetime_local_field27964.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.datetime_local_field27964.call(null,name__27867__auto__,null);
});

sablono.core.datetime_local_field27964.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.datetime_local_field27964.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27964);

/**
 * Creates a email input field.
 */
sablono.core.email_field27968 = (function sablono$core$email_field27968(var_args){
var args27969 = [];
var len__27041__auto___28036 = arguments.length;
var i__27042__auto___28037 = (0);
while(true){
if((i__27042__auto___28037 < len__27041__auto___28036)){
args27969.push((arguments[i__27042__auto___28037]));

var G__28038 = (i__27042__auto___28037 + (1));
i__27042__auto___28037 = G__28038;
continue;
} else {
}
break;
}

var G__27971 = args27969.length;
switch (G__27971) {
case 1:
return sablono.core.email_field27968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27969.length)].join('')));

}
});

sablono.core.email_field27968.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.email_field27968.call(null,name__27867__auto__,null);
});

sablono.core.email_field27968.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.email_field27968.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27968);

/**
 * Creates a file input field.
 */
sablono.core.file_field27972 = (function sablono$core$file_field27972(var_args){
var args27973 = [];
var len__27041__auto___28040 = arguments.length;
var i__27042__auto___28041 = (0);
while(true){
if((i__27042__auto___28041 < len__27041__auto___28040)){
args27973.push((arguments[i__27042__auto___28041]));

var G__28042 = (i__27042__auto___28041 + (1));
i__27042__auto___28041 = G__28042;
continue;
} else {
}
break;
}

var G__27975 = args27973.length;
switch (G__27975) {
case 1:
return sablono.core.file_field27972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27973.length)].join('')));

}
});

sablono.core.file_field27972.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.file_field27972.call(null,name__27867__auto__,null);
});

sablono.core.file_field27972.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.file_field27972.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27972);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27976 = (function sablono$core$hidden_field27976(var_args){
var args27977 = [];
var len__27041__auto___28044 = arguments.length;
var i__27042__auto___28045 = (0);
while(true){
if((i__27042__auto___28045 < len__27041__auto___28044)){
args27977.push((arguments[i__27042__auto___28045]));

var G__28046 = (i__27042__auto___28045 + (1));
i__27042__auto___28045 = G__28046;
continue;
} else {
}
break;
}

var G__27979 = args27977.length;
switch (G__27979) {
case 1:
return sablono.core.hidden_field27976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27977.length)].join('')));

}
});

sablono.core.hidden_field27976.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.hidden_field27976.call(null,name__27867__auto__,null);
});

sablono.core.hidden_field27976.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.hidden_field27976.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27976);

/**
 * Creates a month input field.
 */
sablono.core.month_field27980 = (function sablono$core$month_field27980(var_args){
var args27981 = [];
var len__27041__auto___28048 = arguments.length;
var i__27042__auto___28049 = (0);
while(true){
if((i__27042__auto___28049 < len__27041__auto___28048)){
args27981.push((arguments[i__27042__auto___28049]));

var G__28050 = (i__27042__auto___28049 + (1));
i__27042__auto___28049 = G__28050;
continue;
} else {
}
break;
}

var G__27983 = args27981.length;
switch (G__27983) {
case 1:
return sablono.core.month_field27980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27981.length)].join('')));

}
});

sablono.core.month_field27980.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.month_field27980.call(null,name__27867__auto__,null);
});

sablono.core.month_field27980.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.month_field27980.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27980);

/**
 * Creates a number input field.
 */
sablono.core.number_field27984 = (function sablono$core$number_field27984(var_args){
var args27985 = [];
var len__27041__auto___28052 = arguments.length;
var i__27042__auto___28053 = (0);
while(true){
if((i__27042__auto___28053 < len__27041__auto___28052)){
args27985.push((arguments[i__27042__auto___28053]));

var G__28054 = (i__27042__auto___28053 + (1));
i__27042__auto___28053 = G__28054;
continue;
} else {
}
break;
}

var G__27987 = args27985.length;
switch (G__27987) {
case 1:
return sablono.core.number_field27984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27985.length)].join('')));

}
});

sablono.core.number_field27984.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.number_field27984.call(null,name__27867__auto__,null);
});

sablono.core.number_field27984.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.number_field27984.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27984);

/**
 * Creates a password input field.
 */
sablono.core.password_field27988 = (function sablono$core$password_field27988(var_args){
var args27989 = [];
var len__27041__auto___28056 = arguments.length;
var i__27042__auto___28057 = (0);
while(true){
if((i__27042__auto___28057 < len__27041__auto___28056)){
args27989.push((arguments[i__27042__auto___28057]));

var G__28058 = (i__27042__auto___28057 + (1));
i__27042__auto___28057 = G__28058;
continue;
} else {
}
break;
}

var G__27991 = args27989.length;
switch (G__27991) {
case 1:
return sablono.core.password_field27988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27989.length)].join('')));

}
});

sablono.core.password_field27988.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.password_field27988.call(null,name__27867__auto__,null);
});

sablono.core.password_field27988.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.password_field27988.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27988);

/**
 * Creates a range input field.
 */
sablono.core.range_field27992 = (function sablono$core$range_field27992(var_args){
var args27993 = [];
var len__27041__auto___28060 = arguments.length;
var i__27042__auto___28061 = (0);
while(true){
if((i__27042__auto___28061 < len__27041__auto___28060)){
args27993.push((arguments[i__27042__auto___28061]));

var G__28062 = (i__27042__auto___28061 + (1));
i__27042__auto___28061 = G__28062;
continue;
} else {
}
break;
}

var G__27995 = args27993.length;
switch (G__27995) {
case 1:
return sablono.core.range_field27992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27993.length)].join('')));

}
});

sablono.core.range_field27992.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.range_field27992.call(null,name__27867__auto__,null);
});

sablono.core.range_field27992.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.range_field27992.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27992);

/**
 * Creates a search input field.
 */
sablono.core.search_field27996 = (function sablono$core$search_field27996(var_args){
var args27997 = [];
var len__27041__auto___28064 = arguments.length;
var i__27042__auto___28065 = (0);
while(true){
if((i__27042__auto___28065 < len__27041__auto___28064)){
args27997.push((arguments[i__27042__auto___28065]));

var G__28066 = (i__27042__auto___28065 + (1));
i__27042__auto___28065 = G__28066;
continue;
} else {
}
break;
}

var G__27999 = args27997.length;
switch (G__27999) {
case 1:
return sablono.core.search_field27996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27997.length)].join('')));

}
});

sablono.core.search_field27996.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.search_field27996.call(null,name__27867__auto__,null);
});

sablono.core.search_field27996.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.search_field27996.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27996);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28000 = (function sablono$core$tel_field28000(var_args){
var args28001 = [];
var len__27041__auto___28068 = arguments.length;
var i__27042__auto___28069 = (0);
while(true){
if((i__27042__auto___28069 < len__27041__auto___28068)){
args28001.push((arguments[i__27042__auto___28069]));

var G__28070 = (i__27042__auto___28069 + (1));
i__27042__auto___28069 = G__28070;
continue;
} else {
}
break;
}

var G__28003 = args28001.length;
switch (G__28003) {
case 1:
return sablono.core.tel_field28000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28001.length)].join('')));

}
});

sablono.core.tel_field28000.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.tel_field28000.call(null,name__27867__auto__,null);
});

sablono.core.tel_field28000.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.tel_field28000.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28000);

/**
 * Creates a text input field.
 */
sablono.core.text_field28004 = (function sablono$core$text_field28004(var_args){
var args28005 = [];
var len__27041__auto___28072 = arguments.length;
var i__27042__auto___28073 = (0);
while(true){
if((i__27042__auto___28073 < len__27041__auto___28072)){
args28005.push((arguments[i__27042__auto___28073]));

var G__28074 = (i__27042__auto___28073 + (1));
i__27042__auto___28073 = G__28074;
continue;
} else {
}
break;
}

var G__28007 = args28005.length;
switch (G__28007) {
case 1:
return sablono.core.text_field28004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28005.length)].join('')));

}
});

sablono.core.text_field28004.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.text_field28004.call(null,name__27867__auto__,null);
});

sablono.core.text_field28004.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.text_field28004.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28004);

/**
 * Creates a time input field.
 */
sablono.core.time_field28008 = (function sablono$core$time_field28008(var_args){
var args28009 = [];
var len__27041__auto___28076 = arguments.length;
var i__27042__auto___28077 = (0);
while(true){
if((i__27042__auto___28077 < len__27041__auto___28076)){
args28009.push((arguments[i__27042__auto___28077]));

var G__28078 = (i__27042__auto___28077 + (1));
i__27042__auto___28077 = G__28078;
continue;
} else {
}
break;
}

var G__28011 = args28009.length;
switch (G__28011) {
case 1:
return sablono.core.time_field28008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28009.length)].join('')));

}
});

sablono.core.time_field28008.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.time_field28008.call(null,name__27867__auto__,null);
});

sablono.core.time_field28008.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.time_field28008.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28008);

/**
 * Creates a url input field.
 */
sablono.core.url_field28012 = (function sablono$core$url_field28012(var_args){
var args28013 = [];
var len__27041__auto___28080 = arguments.length;
var i__27042__auto___28081 = (0);
while(true){
if((i__27042__auto___28081 < len__27041__auto___28080)){
args28013.push((arguments[i__27042__auto___28081]));

var G__28082 = (i__27042__auto___28081 + (1));
i__27042__auto___28081 = G__28082;
continue;
} else {
}
break;
}

var G__28015 = args28013.length;
switch (G__28015) {
case 1:
return sablono.core.url_field28012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28013.length)].join('')));

}
});

sablono.core.url_field28012.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.url_field28012.call(null,name__27867__auto__,null);
});

sablono.core.url_field28012.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.url_field28012.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28012);

/**
 * Creates a week input field.
 */
sablono.core.week_field28016 = (function sablono$core$week_field28016(var_args){
var args28017 = [];
var len__27041__auto___28084 = arguments.length;
var i__27042__auto___28085 = (0);
while(true){
if((i__27042__auto___28085 < len__27041__auto___28084)){
args28017.push((arguments[i__27042__auto___28085]));

var G__28086 = (i__27042__auto___28085 + (1));
i__27042__auto___28085 = G__28086;
continue;
} else {
}
break;
}

var G__28019 = args28017.length;
switch (G__28019) {
case 1:
return sablono.core.week_field28016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28017.length)].join('')));

}
});

sablono.core.week_field28016.cljs$core$IFn$_invoke$arity$1 = (function (name__27867__auto__){
return sablono.core.week_field28016.call(null,name__27867__auto__,null);
});

sablono.core.week_field28016.cljs$core$IFn$_invoke$arity$2 = (function (name__27867__auto__,value__27868__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27867__auto__,value__27868__auto__);
});

sablono.core.week_field28016.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28016);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28088 = (function sablono$core$check_box28088(var_args){
var args28089 = [];
var len__27041__auto___28092 = arguments.length;
var i__27042__auto___28093 = (0);
while(true){
if((i__27042__auto___28093 < len__27041__auto___28092)){
args28089.push((arguments[i__27042__auto___28093]));

var G__28094 = (i__27042__auto___28093 + (1));
i__27042__auto___28093 = G__28094;
continue;
} else {
}
break;
}

var G__28091 = args28089.length;
switch (G__28091) {
case 1:
return sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28089.length)].join('')));

}
});

sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28088.call(null,name,null);
});

sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28088.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28088.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25966__auto__ = value;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28088.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28088);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28096 = (function sablono$core$radio_button28096(var_args){
var args28097 = [];
var len__27041__auto___28100 = arguments.length;
var i__27042__auto___28101 = (0);
while(true){
if((i__27042__auto___28101 < len__27041__auto___28100)){
args28097.push((arguments[i__27042__auto___28101]));

var G__28102 = (i__27042__auto___28101 + (1));
i__27042__auto___28101 = G__28102;
continue;
} else {
}
break;
}

var G__28099 = args28097.length;
switch (G__28099) {
case 1:
return sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28097.length)].join('')));

}
});

sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28096.call(null,group,null);
});

sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28096.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28096.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25966__auto__ = value;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28096.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28096);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28104 = (function sablono$core$select_options28104(coll){
var iter__26746__auto__ = (function sablono$core$select_options28104_$_iter__28121(s__28122){
return (new cljs.core.LazySeq(null,(function (){
var s__28122__$1 = s__28122;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28122__$1);
if(temp__4657__auto__){
var s__28122__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28122__$2)){
var c__26744__auto__ = cljs.core.chunk_first.call(null,s__28122__$2);
var size__26745__auto__ = cljs.core.count.call(null,c__26744__auto__);
var b__28124 = cljs.core.chunk_buffer.call(null,size__26745__auto__);
if((function (){var i__28123 = (0);
while(true){
if((i__28123 < size__26745__auto__)){
var x = cljs.core._nth.call(null,c__26744__auto__,i__28123);
cljs.core.chunk_append.call(null,b__28124,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28131 = x;
var text = cljs.core.nth.call(null,vec__28131,(0),null);
var val = cljs.core.nth.call(null,vec__28131,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28131,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28104.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28137 = (i__28123 + (1));
i__28123 = G__28137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28124),sablono$core$select_options28104_$_iter__28121.call(null,cljs.core.chunk_rest.call(null,s__28122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28124),null);
}
} else {
var x = cljs.core.first.call(null,s__28122__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28134 = x;
var text = cljs.core.nth.call(null,vec__28134,(0),null);
var val = cljs.core.nth.call(null,vec__28134,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28134,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28104.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28104_$_iter__28121.call(null,cljs.core.rest.call(null,s__28122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26746__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28104);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28138 = (function sablono$core$drop_down28138(var_args){
var args28139 = [];
var len__27041__auto___28142 = arguments.length;
var i__27042__auto___28143 = (0);
while(true){
if((i__27042__auto___28143 < len__27041__auto___28142)){
args28139.push((arguments[i__27042__auto___28143]));

var G__28144 = (i__27042__auto___28143 + (1));
i__27042__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var G__28141 = args28139.length;
switch (G__28141) {
case 2:
return sablono.core.drop_down28138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28138.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28139.length)].join('')));

}
});

sablono.core.drop_down28138.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28138.call(null,name,options,null);
});

sablono.core.drop_down28138.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28138.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28138);
/**
 * Creates a text area element.
 */
sablono.core.text_area28146 = (function sablono$core$text_area28146(var_args){
var args28147 = [];
var len__27041__auto___28150 = arguments.length;
var i__27042__auto___28151 = (0);
while(true){
if((i__27042__auto___28151 < len__27041__auto___28150)){
args28147.push((arguments[i__27042__auto___28151]));

var G__28152 = (i__27042__auto___28151 + (1));
i__27042__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var G__28149 = args28147.length;
switch (G__28149) {
case 1:
return sablono.core.text_area28146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28147.length)].join('')));

}
});

sablono.core.text_area28146.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28146.call(null,name,null);
});

sablono.core.text_area28146.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25966__auto__ = value;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28146.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28146);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28154 = (function sablono$core$label28154(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28154);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28155 = (function sablono$core$submit_button28155(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28155);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28156 = (function sablono$core$reset_button28156(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28156);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28157 = (function sablono$core$form_to28157(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28164 = arguments.length;
var i__27042__auto___28165 = (0);
while(true){
if((i__27042__auto___28165 < len__27041__auto___28164)){
args__27048__auto__.push((arguments[i__27042__auto___28165]));

var G__28166 = (i__27042__auto___28165 + (1));
i__27042__auto___28165 = G__28166;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28157.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

sablono.core.form_to28157.cljs$core$IFn$_invoke$arity$variadic = (function (p__28160,body){
var vec__28161 = p__28160;
var method = cljs.core.nth.call(null,vec__28161,(0),null);
var action = cljs.core.nth.call(null,vec__28161,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28157.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28157.cljs$lang$applyTo = (function (seq28158){
var G__28159 = cljs.core.first.call(null,seq28158);
var seq28158__$1 = cljs.core.next.call(null,seq28158);
return sablono.core.form_to28157.cljs$core$IFn$_invoke$arity$variadic(G__28159,seq28158__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28157);

//# sourceMappingURL=core.js.map?rel=1513163798736