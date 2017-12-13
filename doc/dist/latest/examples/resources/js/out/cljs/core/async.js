// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31132 = [];
var len__27041__auto___31138 = arguments.length;
var i__27042__auto___31139 = (0);
while(true){
if((i__27042__auto___31139 < len__27041__auto___31138)){
args31132.push((arguments[i__27042__auto___31139]));

var G__31140 = (i__27042__auto___31139 + (1));
i__27042__auto___31139 = G__31140;
continue;
} else {
}
break;
}

var G__31134 = args31132.length;
switch (G__31134) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31132.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31135 = (function (f,blockable,meta31136){
this.f = f;
this.blockable = blockable;
this.meta31136 = meta31136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31137,meta31136__$1){
var self__ = this;
var _31137__$1 = this;
return (new cljs.core.async.t_cljs$core$async31135(self__.f,self__.blockable,meta31136__$1));
});

cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31137){
var self__ = this;
var _31137__$1 = this;
return self__.meta31136;
});

cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31136","meta31136",1556118478,null)], null);
});

cljs.core.async.t_cljs$core$async31135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31135";

cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async31135");
});

cljs.core.async.__GT_t_cljs$core$async31135 = (function cljs$core$async$__GT_t_cljs$core$async31135(f__$1,blockable__$1,meta31136){
return (new cljs.core.async.t_cljs$core$async31135(f__$1,blockable__$1,meta31136));
});

}

return (new cljs.core.async.t_cljs$core$async31135(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31144 = [];
var len__27041__auto___31147 = arguments.length;
var i__27042__auto___31148 = (0);
while(true){
if((i__27042__auto___31148 < len__27041__auto___31147)){
args31144.push((arguments[i__27042__auto___31148]));

var G__31149 = (i__27042__auto___31148 + (1));
i__27042__auto___31148 = G__31149;
continue;
} else {
}
break;
}

var G__31146 = args31144.length;
switch (G__31146) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31144.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args31151 = [];
var len__27041__auto___31154 = arguments.length;
var i__27042__auto___31155 = (0);
while(true){
if((i__27042__auto___31155 < len__27041__auto___31154)){
args31151.push((arguments[i__27042__auto___31155]));

var G__31156 = (i__27042__auto___31155 + (1));
i__27042__auto___31155 = G__31156;
continue;
} else {
}
break;
}

var G__31153 = args31151.length;
switch (G__31153) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31151.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args31158 = [];
var len__27041__auto___31161 = arguments.length;
var i__27042__auto___31162 = (0);
while(true){
if((i__27042__auto___31162 < len__27041__auto___31161)){
args31158.push((arguments[i__27042__auto___31162]));

var G__31163 = (i__27042__auto___31162 + (1));
i__27042__auto___31162 = G__31163;
continue;
} else {
}
break;
}

var G__31160 = args31158.length;
switch (G__31160) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31158.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31165 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31165);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31165,ret){
return (function (){
return fn1.call(null,val_31165);
});})(val_31165,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args31166 = [];
var len__27041__auto___31169 = arguments.length;
var i__27042__auto___31170 = (0);
while(true){
if((i__27042__auto___31170 < len__27041__auto___31169)){
args31166.push((arguments[i__27042__auto___31170]));

var G__31171 = (i__27042__auto___31170 + (1));
i__27042__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var G__31168 = args31166.length;
switch (G__31168) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31166.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26881__auto___31173 = n;
var x_31174 = (0);
while(true){
if((x_31174 < n__26881__auto___31173)){
(a[x_31174] = (0));

var G__31175 = (x_31174 + (1));
x_31174 = G__31175;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31176 = (i + (1));
i = G__31176;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31180 = (function (alt_flag,flag,meta31181){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31181 = meta31181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31182,meta31181__$1){
var self__ = this;
var _31182__$1 = this;
return (new cljs.core.async.t_cljs$core$async31180(self__.alt_flag,self__.flag,meta31181__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31182){
var self__ = this;
var _31182__$1 = this;
return self__.meta31181;
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31181","meta31181",767444139,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31180";

cljs.core.async.t_cljs$core$async31180.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async31180");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31180 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31180(alt_flag__$1,flag__$1,meta31181){
return (new cljs.core.async.t_cljs$core$async31180(alt_flag__$1,flag__$1,meta31181));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31180(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31186 = (function (alt_handler,flag,cb,meta31187){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31187 = meta31187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31188,meta31187__$1){
var self__ = this;
var _31188__$1 = this;
return (new cljs.core.async.t_cljs$core$async31186(self__.alt_handler,self__.flag,self__.cb,meta31187__$1));
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31188){
var self__ = this;
var _31188__$1 = this;
return self__.meta31187;
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31187","meta31187",-63354046,null)], null);
});

cljs.core.async.t_cljs$core$async31186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31186";

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async31186");
});

cljs.core.async.__GT_t_cljs$core$async31186 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31186(alt_handler__$1,flag__$1,cb__$1,meta31187){
return (new cljs.core.async.t_cljs$core$async31186(alt_handler__$1,flag__$1,cb__$1,meta31187));
});

}

return (new cljs.core.async.t_cljs$core$async31186(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31189_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31189_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31190_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31190_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25966__auto__ = wport;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31191 = (i + (1));
i = G__31191;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25966__auto__ = ret;
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25954__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25954__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25954__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27048__auto__ = [];
var len__27041__auto___31197 = arguments.length;
var i__27042__auto___31198 = (0);
while(true){
if((i__27042__auto___31198 < len__27041__auto___31197)){
args__27048__auto__.push((arguments[i__27042__auto___31198]));

var G__31199 = (i__27042__auto___31198 + (1));
i__27042__auto___31198 = G__31199;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31194){
var map__31195 = p__31194;
var map__31195__$1 = ((((!((map__31195 == null)))?((((map__31195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31195):map__31195);
var opts = map__31195__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31192){
var G__31193 = cljs.core.first.call(null,seq31192);
var seq31192__$1 = cljs.core.next.call(null,seq31192);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31193,seq31192__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31200 = [];
var len__27041__auto___31250 = arguments.length;
var i__27042__auto___31251 = (0);
while(true){
if((i__27042__auto___31251 < len__27041__auto___31250)){
args31200.push((arguments[i__27042__auto___31251]));

var G__31252 = (i__27042__auto___31251 + (1));
i__27042__auto___31251 = G__31252;
continue;
} else {
}
break;
}

var G__31202 = args31200.length;
switch (G__31202) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31200.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31087__auto___31254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31254){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___31254){
return (function (state_31226){
var state_val_31227 = (state_31226[(1)]);
if((state_val_31227 === (7))){
var inst_31222 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31228_31255 = state_31226__$1;
(statearr_31228_31255[(2)] = inst_31222);

(statearr_31228_31255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (1))){
var state_31226__$1 = state_31226;
var statearr_31229_31256 = state_31226__$1;
(statearr_31229_31256[(2)] = null);

(statearr_31229_31256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (4))){
var inst_31205 = (state_31226[(7)]);
var inst_31205__$1 = (state_31226[(2)]);
var inst_31206 = (inst_31205__$1 == null);
var state_31226__$1 = (function (){var statearr_31230 = state_31226;
(statearr_31230[(7)] = inst_31205__$1);

return statearr_31230;
})();
if(cljs.core.truth_(inst_31206)){
var statearr_31231_31257 = state_31226__$1;
(statearr_31231_31257[(1)] = (5));

} else {
var statearr_31232_31258 = state_31226__$1;
(statearr_31232_31258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (13))){
var state_31226__$1 = state_31226;
var statearr_31233_31259 = state_31226__$1;
(statearr_31233_31259[(2)] = null);

(statearr_31233_31259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (6))){
var inst_31205 = (state_31226[(7)]);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31226__$1,(11),to,inst_31205);
} else {
if((state_val_31227 === (3))){
var inst_31224 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31226__$1,inst_31224);
} else {
if((state_val_31227 === (12))){
var state_31226__$1 = state_31226;
var statearr_31234_31260 = state_31226__$1;
(statearr_31234_31260[(2)] = null);

(statearr_31234_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (2))){
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31226__$1,(4),from);
} else {
if((state_val_31227 === (11))){
var inst_31215 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31215)){
var statearr_31235_31261 = state_31226__$1;
(statearr_31235_31261[(1)] = (12));

} else {
var statearr_31236_31262 = state_31226__$1;
(statearr_31236_31262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (9))){
var state_31226__$1 = state_31226;
var statearr_31237_31263 = state_31226__$1;
(statearr_31237_31263[(2)] = null);

(statearr_31237_31263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (5))){
var state_31226__$1 = state_31226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31238_31264 = state_31226__$1;
(statearr_31238_31264[(1)] = (8));

} else {
var statearr_31239_31265 = state_31226__$1;
(statearr_31239_31265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (14))){
var inst_31220 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31240_31266 = state_31226__$1;
(statearr_31240_31266[(2)] = inst_31220);

(statearr_31240_31266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (10))){
var inst_31212 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31241_31267 = state_31226__$1;
(statearr_31241_31267[(2)] = inst_31212);

(statearr_31241_31267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (8))){
var inst_31209 = cljs.core.async.close_BANG_.call(null,to);
var state_31226__$1 = state_31226;
var statearr_31242_31268 = state_31226__$1;
(statearr_31242_31268[(2)] = inst_31209);

(statearr_31242_31268[(1)] = (10));


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
});})(c__31087__auto___31254))
;
return ((function (switch__30975__auto__,c__31087__auto___31254){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_31226){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__30979__auto__ = e31247;
var statearr_31248_31269 = state_31226;
(statearr_31248_31269[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31270 = state_31226;
state_31226 = G__31270;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_31226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_31226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___31254))
})();
var state__31089__auto__ = (function (){var statearr_31249 = f__31088__auto__.call(null);
(statearr_31249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31254);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31254))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31458){
var vec__31459 = p__31458;
var v = cljs.core.nth.call(null,vec__31459,(0),null);
var p = cljs.core.nth.call(null,vec__31459,(1),null);
var job = vec__31459;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31087__auto___31645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results){
return (function (state_31466){
var state_val_31467 = (state_31466[(1)]);
if((state_val_31467 === (1))){
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31466__$1,(2),res,v);
} else {
if((state_val_31467 === (2))){
var inst_31463 = (state_31466[(2)]);
var inst_31464 = cljs.core.async.close_BANG_.call(null,res);
var state_31466__$1 = (function (){var statearr_31468 = state_31466;
(statearr_31468[(7)] = inst_31463);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31466__$1,inst_31464);
} else {
return null;
}
}
});})(c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results))
;
return ((function (switch__30975__auto__,c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_31472 = [null,null,null,null,null,null,null,null];
(statearr_31472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__);

(statearr_31472[(1)] = (1));

return statearr_31472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1 = (function (state_31466){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31473){if((e31473 instanceof Object)){
var ex__30979__auto__ = e31473;
var statearr_31474_31646 = state_31466;
(statearr_31474_31646[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31647 = state_31466;
state_31466 = G__31647;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = function(state_31466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1.call(this,state_31466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results))
})();
var state__31089__auto__ = (function (){var statearr_31475 = f__31088__auto__.call(null);
(statearr_31475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31645);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31645,res,vec__31459,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31476){
var vec__31477 = p__31476;
var v = cljs.core.nth.call(null,vec__31477,(0),null);
var p = cljs.core.nth.call(null,vec__31477,(1),null);
var job = vec__31477;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26881__auto___31648 = n;
var __31649 = (0);
while(true){
if((__31649 < n__26881__auto___31648)){
var G__31480_31650 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31480_31650) {
case "compute":
var c__31087__auto___31652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31649,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (__31649,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (1))){
var state_31493__$1 = state_31493;
var statearr_31495_31653 = state_31493__$1;
(statearr_31495_31653[(2)] = null);

(statearr_31495_31653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,(4),jobs);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (4))){
var inst_31483 = (state_31493[(2)]);
var inst_31484 = process.call(null,inst_31483);
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31484)){
var statearr_31496_31654 = state_31493__$1;
(statearr_31496_31654[(1)] = (5));

} else {
var statearr_31497_31655 = state_31493__$1;
(statearr_31497_31655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (5))){
var state_31493__$1 = state_31493;
var statearr_31498_31656 = state_31493__$1;
(statearr_31498_31656[(2)] = null);

(statearr_31498_31656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (6))){
var state_31493__$1 = state_31493;
var statearr_31499_31657 = state_31493__$1;
(statearr_31499_31657[(2)] = null);

(statearr_31499_31657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31500_31658 = state_31493__$1;
(statearr_31500_31658[(2)] = inst_31489);

(statearr_31500_31658[(1)] = (3));


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
});})(__31649,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
;
return ((function (__31649,switch__30975__auto__,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_31504 = [null,null,null,null,null,null,null];
(statearr_31504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__);

(statearr_31504[(1)] = (1));

return statearr_31504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1 = (function (state_31493){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31505){if((e31505 instanceof Object)){
var ex__30979__auto__ = e31505;
var statearr_31506_31659 = state_31493;
(statearr_31506_31659[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31660 = state_31493;
state_31493 = G__31660;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__;
})()
;})(__31649,switch__30975__auto__,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31507 = f__31088__auto__.call(null);
(statearr_31507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31652);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(__31649,c__31087__auto___31652,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
);


break;
case "async":
var c__31087__auto___31661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31649,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (__31649,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31522_31662 = state_31520__$1;
(statearr_31522_31662[(2)] = null);

(statearr_31522_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(4),jobs);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (4))){
var inst_31510 = (state_31520[(2)]);
var inst_31511 = async.call(null,inst_31510);
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31511)){
var statearr_31523_31663 = state_31520__$1;
(statearr_31523_31663[(1)] = (5));

} else {
var statearr_31524_31664 = state_31520__$1;
(statearr_31524_31664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (5))){
var state_31520__$1 = state_31520;
var statearr_31525_31665 = state_31520__$1;
(statearr_31525_31665[(2)] = null);

(statearr_31525_31665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (6))){
var state_31520__$1 = state_31520;
var statearr_31526_31666 = state_31520__$1;
(statearr_31526_31666[(2)] = null);

(statearr_31526_31666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31527_31667 = state_31520__$1;
(statearr_31527_31667[(2)] = inst_31516);

(statearr_31527_31667[(1)] = (3));


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
});})(__31649,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
;
return ((function (__31649,switch__30975__auto__,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_31531 = [null,null,null,null,null,null,null];
(statearr_31531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__);

(statearr_31531[(1)] = (1));

return statearr_31531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1 = (function (state_31520){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31532){if((e31532 instanceof Object)){
var ex__30979__auto__ = e31532;
var statearr_31533_31668 = state_31520;
(statearr_31533_31668[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31669 = state_31520;
state_31520 = G__31669;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__;
})()
;})(__31649,switch__30975__auto__,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31534 = f__31088__auto__.call(null);
(statearr_31534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31661);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(__31649,c__31087__auto___31661,G__31480_31650,n__26881__auto___31648,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31670 = (__31649 + (1));
__31649 = G__31670;
continue;
} else {
}
break;
}

var c__31087__auto___31671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31671,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___31671,jobs,results,process,async){
return (function (state_31556){
var state_val_31557 = (state_31556[(1)]);
if((state_val_31557 === (1))){
var state_31556__$1 = state_31556;
var statearr_31558_31672 = state_31556__$1;
(statearr_31558_31672[(2)] = null);

(statearr_31558_31672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (2))){
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31556__$1,(4),from);
} else {
if((state_val_31557 === (3))){
var inst_31554 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31556__$1,inst_31554);
} else {
if((state_val_31557 === (4))){
var inst_31537 = (state_31556[(7)]);
var inst_31537__$1 = (state_31556[(2)]);
var inst_31538 = (inst_31537__$1 == null);
var state_31556__$1 = (function (){var statearr_31559 = state_31556;
(statearr_31559[(7)] = inst_31537__$1);

return statearr_31559;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31560_31673 = state_31556__$1;
(statearr_31560_31673[(1)] = (5));

} else {
var statearr_31561_31674 = state_31556__$1;
(statearr_31561_31674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (5))){
var inst_31540 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31556__$1 = state_31556;
var statearr_31562_31675 = state_31556__$1;
(statearr_31562_31675[(2)] = inst_31540);

(statearr_31562_31675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (6))){
var inst_31542 = (state_31556[(8)]);
var inst_31537 = (state_31556[(7)]);
var inst_31542__$1 = cljs.core.async.chan.call(null,(1));
var inst_31543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31544 = [inst_31537,inst_31542__$1];
var inst_31545 = (new cljs.core.PersistentVector(null,2,(5),inst_31543,inst_31544,null));
var state_31556__$1 = (function (){var statearr_31563 = state_31556;
(statearr_31563[(8)] = inst_31542__$1);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31556__$1,(8),jobs,inst_31545);
} else {
if((state_val_31557 === (7))){
var inst_31552 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31564_31676 = state_31556__$1;
(statearr_31564_31676[(2)] = inst_31552);

(statearr_31564_31676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (8))){
var inst_31542 = (state_31556[(8)]);
var inst_31547 = (state_31556[(2)]);
var state_31556__$1 = (function (){var statearr_31565 = state_31556;
(statearr_31565[(9)] = inst_31547);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31556__$1,(9),results,inst_31542);
} else {
if((state_val_31557 === (9))){
var inst_31549 = (state_31556[(2)]);
var state_31556__$1 = (function (){var statearr_31566 = state_31556;
(statearr_31566[(10)] = inst_31549);

return statearr_31566;
})();
var statearr_31567_31677 = state_31556__$1;
(statearr_31567_31677[(2)] = null);

(statearr_31567_31677[(1)] = (2));


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
});})(c__31087__auto___31671,jobs,results,process,async))
;
return ((function (switch__30975__auto__,c__31087__auto___31671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1 = (function (state_31556){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31572){if((e31572 instanceof Object)){
var ex__30979__auto__ = e31572;
var statearr_31573_31678 = state_31556;
(statearr_31573_31678[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31679 = state_31556;
state_31556 = G__31679;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = function(state_31556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1.call(this,state_31556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___31671,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31574 = f__31088__auto__.call(null);
(statearr_31574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31671);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31671,jobs,results,process,async))
);


var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__,jobs,results,process,async){
return (function (state_31612){
var state_val_31613 = (state_31612[(1)]);
if((state_val_31613 === (7))){
var inst_31608 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31614_31680 = state_31612__$1;
(statearr_31614_31680[(2)] = inst_31608);

(statearr_31614_31680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (20))){
var state_31612__$1 = state_31612;
var statearr_31615_31681 = state_31612__$1;
(statearr_31615_31681[(2)] = null);

(statearr_31615_31681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (1))){
var state_31612__$1 = state_31612;
var statearr_31616_31682 = state_31612__$1;
(statearr_31616_31682[(2)] = null);

(statearr_31616_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (4))){
var inst_31577 = (state_31612[(7)]);
var inst_31577__$1 = (state_31612[(2)]);
var inst_31578 = (inst_31577__$1 == null);
var state_31612__$1 = (function (){var statearr_31617 = state_31612;
(statearr_31617[(7)] = inst_31577__$1);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31578)){
var statearr_31618_31683 = state_31612__$1;
(statearr_31618_31683[(1)] = (5));

} else {
var statearr_31619_31684 = state_31612__$1;
(statearr_31619_31684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (15))){
var inst_31590 = (state_31612[(8)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31612__$1,(18),to,inst_31590);
} else {
if((state_val_31613 === (21))){
var inst_31603 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31620_31685 = state_31612__$1;
(statearr_31620_31685[(2)] = inst_31603);

(statearr_31620_31685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (13))){
var inst_31605 = (state_31612[(2)]);
var state_31612__$1 = (function (){var statearr_31621 = state_31612;
(statearr_31621[(9)] = inst_31605);

return statearr_31621;
})();
var statearr_31622_31686 = state_31612__$1;
(statearr_31622_31686[(2)] = null);

(statearr_31622_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (6))){
var inst_31577 = (state_31612[(7)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31612__$1,(11),inst_31577);
} else {
if((state_val_31613 === (17))){
var inst_31598 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
if(cljs.core.truth_(inst_31598)){
var statearr_31623_31687 = state_31612__$1;
(statearr_31623_31687[(1)] = (19));

} else {
var statearr_31624_31688 = state_31612__$1;
(statearr_31624_31688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (3))){
var inst_31610 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31612__$1,inst_31610);
} else {
if((state_val_31613 === (12))){
var inst_31587 = (state_31612[(10)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31612__$1,(14),inst_31587);
} else {
if((state_val_31613 === (2))){
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31612__$1,(4),results);
} else {
if((state_val_31613 === (19))){
var state_31612__$1 = state_31612;
var statearr_31625_31689 = state_31612__$1;
(statearr_31625_31689[(2)] = null);

(statearr_31625_31689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (11))){
var inst_31587 = (state_31612[(2)]);
var state_31612__$1 = (function (){var statearr_31626 = state_31612;
(statearr_31626[(10)] = inst_31587);

return statearr_31626;
})();
var statearr_31627_31690 = state_31612__$1;
(statearr_31627_31690[(2)] = null);

(statearr_31627_31690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (9))){
var state_31612__$1 = state_31612;
var statearr_31628_31691 = state_31612__$1;
(statearr_31628_31691[(2)] = null);

(statearr_31628_31691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (5))){
var state_31612__$1 = state_31612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31629_31692 = state_31612__$1;
(statearr_31629_31692[(1)] = (8));

} else {
var statearr_31630_31693 = state_31612__$1;
(statearr_31630_31693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (14))){
var inst_31590 = (state_31612[(8)]);
var inst_31592 = (state_31612[(11)]);
var inst_31590__$1 = (state_31612[(2)]);
var inst_31591 = (inst_31590__$1 == null);
var inst_31592__$1 = cljs.core.not.call(null,inst_31591);
var state_31612__$1 = (function (){var statearr_31631 = state_31612;
(statearr_31631[(8)] = inst_31590__$1);

(statearr_31631[(11)] = inst_31592__$1);

return statearr_31631;
})();
if(inst_31592__$1){
var statearr_31632_31694 = state_31612__$1;
(statearr_31632_31694[(1)] = (15));

} else {
var statearr_31633_31695 = state_31612__$1;
(statearr_31633_31695[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (16))){
var inst_31592 = (state_31612[(11)]);
var state_31612__$1 = state_31612;
var statearr_31634_31696 = state_31612__$1;
(statearr_31634_31696[(2)] = inst_31592);

(statearr_31634_31696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (10))){
var inst_31584 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31635_31697 = state_31612__$1;
(statearr_31635_31697[(2)] = inst_31584);

(statearr_31635_31697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (18))){
var inst_31595 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31636_31698 = state_31612__$1;
(statearr_31636_31698[(2)] = inst_31595);

(statearr_31636_31698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31613 === (8))){
var inst_31581 = cljs.core.async.close_BANG_.call(null,to);
var state_31612__$1 = state_31612;
var statearr_31637_31699 = state_31612__$1;
(statearr_31637_31699[(2)] = inst_31581);

(statearr_31637_31699[(1)] = (10));


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
});})(c__31087__auto__,jobs,results,process,async))
;
return ((function (switch__30975__auto__,c__31087__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_31641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__);

(statearr_31641[(1)] = (1));

return statearr_31641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1 = (function (state_31612){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31642){if((e31642 instanceof Object)){
var ex__30979__auto__ = e31642;
var statearr_31643_31700 = state_31612;
(statearr_31643_31700[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31701 = state_31612;
state_31612 = G__31701;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__ = function(state_31612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1.call(this,state_31612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31644 = f__31088__auto__.call(null);
(statearr_31644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,jobs,results,process,async))
);

return c__31087__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31702 = [];
var len__27041__auto___31705 = arguments.length;
var i__27042__auto___31706 = (0);
while(true){
if((i__27042__auto___31706 < len__27041__auto___31705)){
args31702.push((arguments[i__27042__auto___31706]));

var G__31707 = (i__27042__auto___31706 + (1));
i__27042__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var G__31704 = args31702.length;
switch (G__31704) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31702.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31709 = [];
var len__27041__auto___31712 = arguments.length;
var i__27042__auto___31713 = (0);
while(true){
if((i__27042__auto___31713 < len__27041__auto___31712)){
args31709.push((arguments[i__27042__auto___31713]));

var G__31714 = (i__27042__auto___31713 + (1));
i__27042__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var G__31711 = args31709.length;
switch (G__31711) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31709.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31716 = [];
var len__27041__auto___31769 = arguments.length;
var i__27042__auto___31770 = (0);
while(true){
if((i__27042__auto___31770 < len__27041__auto___31769)){
args31716.push((arguments[i__27042__auto___31770]));

var G__31771 = (i__27042__auto___31770 + (1));
i__27042__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var G__31718 = args31716.length;
switch (G__31718) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31716.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31087__auto___31773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31773,tc,fc){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___31773,tc,fc){
return (function (state_31744){
var state_val_31745 = (state_31744[(1)]);
if((state_val_31745 === (7))){
var inst_31740 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31746_31774 = state_31744__$1;
(statearr_31746_31774[(2)] = inst_31740);

(statearr_31746_31774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (1))){
var state_31744__$1 = state_31744;
var statearr_31747_31775 = state_31744__$1;
(statearr_31747_31775[(2)] = null);

(statearr_31747_31775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (4))){
var inst_31721 = (state_31744[(7)]);
var inst_31721__$1 = (state_31744[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31744__$1 = (function (){var statearr_31748 = state_31744;
(statearr_31748[(7)] = inst_31721__$1);

return statearr_31748;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31749_31776 = state_31744__$1;
(statearr_31749_31776[(1)] = (5));

} else {
var statearr_31750_31777 = state_31744__$1;
(statearr_31750_31777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (13))){
var state_31744__$1 = state_31744;
var statearr_31751_31778 = state_31744__$1;
(statearr_31751_31778[(2)] = null);

(statearr_31751_31778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (6))){
var inst_31721 = (state_31744[(7)]);
var inst_31727 = p.call(null,inst_31721);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31727)){
var statearr_31752_31779 = state_31744__$1;
(statearr_31752_31779[(1)] = (9));

} else {
var statearr_31753_31780 = state_31744__$1;
(statearr_31753_31780[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (3))){
var inst_31742 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31744__$1,inst_31742);
} else {
if((state_val_31745 === (12))){
var state_31744__$1 = state_31744;
var statearr_31754_31781 = state_31744__$1;
(statearr_31754_31781[(2)] = null);

(statearr_31754_31781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (2))){
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31744__$1,(4),ch);
} else {
if((state_val_31745 === (11))){
var inst_31721 = (state_31744[(7)]);
var inst_31731 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31744__$1,(8),inst_31731,inst_31721);
} else {
if((state_val_31745 === (9))){
var state_31744__$1 = state_31744;
var statearr_31755_31782 = state_31744__$1;
(statearr_31755_31782[(2)] = tc);

(statearr_31755_31782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (5))){
var inst_31724 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31725 = cljs.core.async.close_BANG_.call(null,fc);
var state_31744__$1 = (function (){var statearr_31756 = state_31744;
(statearr_31756[(8)] = inst_31724);

return statearr_31756;
})();
var statearr_31757_31783 = state_31744__$1;
(statearr_31757_31783[(2)] = inst_31725);

(statearr_31757_31783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (14))){
var inst_31738 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31758_31784 = state_31744__$1;
(statearr_31758_31784[(2)] = inst_31738);

(statearr_31758_31784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (10))){
var state_31744__$1 = state_31744;
var statearr_31759_31785 = state_31744__$1;
(statearr_31759_31785[(2)] = fc);

(statearr_31759_31785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31745 === (8))){
var inst_31733 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31733)){
var statearr_31760_31786 = state_31744__$1;
(statearr_31760_31786[(1)] = (12));

} else {
var statearr_31761_31787 = state_31744__$1;
(statearr_31761_31787[(1)] = (13));

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
});})(c__31087__auto___31773,tc,fc))
;
return ((function (switch__30975__auto__,c__31087__auto___31773,tc,fc){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_31744){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__30979__auto__ = e31766;
var statearr_31767_31788 = state_31744;
(statearr_31767_31788[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31789 = state_31744;
state_31744 = G__31789;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_31744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_31744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___31773,tc,fc))
})();
var state__31089__auto__ = (function (){var statearr_31768 = f__31088__auto__.call(null);
(statearr_31768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___31773);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31773,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__){
return (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (7))){
var inst_31849 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31855_31876 = state_31853__$1;
(statearr_31855_31876[(2)] = inst_31849);

(statearr_31855_31876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (1))){
var inst_31833 = init;
var state_31853__$1 = (function (){var statearr_31856 = state_31853;
(statearr_31856[(7)] = inst_31833);

return statearr_31856;
})();
var statearr_31857_31877 = state_31853__$1;
(statearr_31857_31877[(2)] = null);

(statearr_31857_31877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (4))){
var inst_31836 = (state_31853[(8)]);
var inst_31836__$1 = (state_31853[(2)]);
var inst_31837 = (inst_31836__$1 == null);
var state_31853__$1 = (function (){var statearr_31858 = state_31853;
(statearr_31858[(8)] = inst_31836__$1);

return statearr_31858;
})();
if(cljs.core.truth_(inst_31837)){
var statearr_31859_31878 = state_31853__$1;
(statearr_31859_31878[(1)] = (5));

} else {
var statearr_31860_31879 = state_31853__$1;
(statearr_31860_31879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (6))){
var inst_31833 = (state_31853[(7)]);
var inst_31840 = (state_31853[(9)]);
var inst_31836 = (state_31853[(8)]);
var inst_31840__$1 = f.call(null,inst_31833,inst_31836);
var inst_31841 = cljs.core.reduced_QMARK_.call(null,inst_31840__$1);
var state_31853__$1 = (function (){var statearr_31861 = state_31853;
(statearr_31861[(9)] = inst_31840__$1);

return statearr_31861;
})();
if(inst_31841){
var statearr_31862_31880 = state_31853__$1;
(statearr_31862_31880[(1)] = (8));

} else {
var statearr_31863_31881 = state_31853__$1;
(statearr_31863_31881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (3))){
var inst_31851 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31853__$1,inst_31851);
} else {
if((state_val_31854 === (2))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31853__$1,(4),ch);
} else {
if((state_val_31854 === (9))){
var inst_31840 = (state_31853[(9)]);
var inst_31833 = inst_31840;
var state_31853__$1 = (function (){var statearr_31864 = state_31853;
(statearr_31864[(7)] = inst_31833);

return statearr_31864;
})();
var statearr_31865_31882 = state_31853__$1;
(statearr_31865_31882[(2)] = null);

(statearr_31865_31882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (5))){
var inst_31833 = (state_31853[(7)]);
var state_31853__$1 = state_31853;
var statearr_31866_31883 = state_31853__$1;
(statearr_31866_31883[(2)] = inst_31833);

(statearr_31866_31883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (10))){
var inst_31847 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31867_31884 = state_31853__$1;
(statearr_31867_31884[(2)] = inst_31847);

(statearr_31867_31884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (8))){
var inst_31840 = (state_31853[(9)]);
var inst_31843 = cljs.core.deref.call(null,inst_31840);
var state_31853__$1 = state_31853;
var statearr_31868_31885 = state_31853__$1;
(statearr_31868_31885[(2)] = inst_31843);

(statearr_31868_31885[(1)] = (10));


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
});})(c__31087__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30976__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30976__auto____0 = (function (){
var statearr_31872 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31872[(0)] = cljs$core$async$reduce_$_state_machine__30976__auto__);

(statearr_31872[(1)] = (1));

return statearr_31872;
});
var cljs$core$async$reduce_$_state_machine__30976__auto____1 = (function (state_31853){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31873){if((e31873 instanceof Object)){
var ex__30979__auto__ = e31873;
var statearr_31874_31886 = state_31853;
(statearr_31874_31886[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31887 = state_31853;
state_31853 = G__31887;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30976__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30976__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30976__auto____0;
cljs$core$async$reduce_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30976__auto____1;
return cljs$core$async$reduce_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_31875 = f__31088__auto__.call(null);
(statearr_31875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,f__$1){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__,f__$1){
return (function (state_31907){
var state_val_31908 = (state_31907[(1)]);
if((state_val_31908 === (1))){
var inst_31902 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31907__$1,(2),inst_31902);
} else {
if((state_val_31908 === (2))){
var inst_31904 = (state_31907[(2)]);
var inst_31905 = f__$1.call(null,inst_31904);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31907__$1,inst_31905);
} else {
return null;
}
}
});})(c__31087__auto__,f__$1))
;
return ((function (switch__30975__auto__,c__31087__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30976__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30976__auto____0 = (function (){
var statearr_31912 = [null,null,null,null,null,null,null];
(statearr_31912[(0)] = cljs$core$async$transduce_$_state_machine__30976__auto__);

(statearr_31912[(1)] = (1));

return statearr_31912;
});
var cljs$core$async$transduce_$_state_machine__30976__auto____1 = (function (state_31907){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31913){if((e31913 instanceof Object)){
var ex__30979__auto__ = e31913;
var statearr_31914_31916 = state_31907;
(statearr_31914_31916[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31917 = state_31907;
state_31907 = G__31917;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30976__auto__ = function(state_31907){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30976__auto____1.call(this,state_31907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30976__auto____0;
cljs$core$async$transduce_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30976__auto____1;
return cljs$core$async$transduce_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__,f__$1))
})();
var state__31089__auto__ = (function (){var statearr_31915 = f__31088__auto__.call(null);
(statearr_31915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_31915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,f__$1))
);

return c__31087__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31918 = [];
var len__27041__auto___31970 = arguments.length;
var i__27042__auto___31971 = (0);
while(true){
if((i__27042__auto___31971 < len__27041__auto___31970)){
args31918.push((arguments[i__27042__auto___31971]));

var G__31972 = (i__27042__auto___31971 + (1));
i__27042__auto___31971 = G__31972;
continue;
} else {
}
break;
}

var G__31920 = args31918.length;
switch (G__31920) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31918.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__){
return (function (state_31945){
var state_val_31946 = (state_31945[(1)]);
if((state_val_31946 === (7))){
var inst_31927 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31947_31974 = state_31945__$1;
(statearr_31947_31974[(2)] = inst_31927);

(statearr_31947_31974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (1))){
var inst_31921 = cljs.core.seq.call(null,coll);
var inst_31922 = inst_31921;
var state_31945__$1 = (function (){var statearr_31948 = state_31945;
(statearr_31948[(7)] = inst_31922);

return statearr_31948;
})();
var statearr_31949_31975 = state_31945__$1;
(statearr_31949_31975[(2)] = null);

(statearr_31949_31975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (4))){
var inst_31922 = (state_31945[(7)]);
var inst_31925 = cljs.core.first.call(null,inst_31922);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31945__$1,(7),ch,inst_31925);
} else {
if((state_val_31946 === (13))){
var inst_31939 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31950_31976 = state_31945__$1;
(statearr_31950_31976[(2)] = inst_31939);

(statearr_31950_31976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (6))){
var inst_31930 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
if(cljs.core.truth_(inst_31930)){
var statearr_31951_31977 = state_31945__$1;
(statearr_31951_31977[(1)] = (8));

} else {
var statearr_31952_31978 = state_31945__$1;
(statearr_31952_31978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (3))){
var inst_31943 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31945__$1,inst_31943);
} else {
if((state_val_31946 === (12))){
var state_31945__$1 = state_31945;
var statearr_31953_31979 = state_31945__$1;
(statearr_31953_31979[(2)] = null);

(statearr_31953_31979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (2))){
var inst_31922 = (state_31945[(7)]);
var state_31945__$1 = state_31945;
if(cljs.core.truth_(inst_31922)){
var statearr_31954_31980 = state_31945__$1;
(statearr_31954_31980[(1)] = (4));

} else {
var statearr_31955_31981 = state_31945__$1;
(statearr_31955_31981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (11))){
var inst_31936 = cljs.core.async.close_BANG_.call(null,ch);
var state_31945__$1 = state_31945;
var statearr_31956_31982 = state_31945__$1;
(statearr_31956_31982[(2)] = inst_31936);

(statearr_31956_31982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (9))){
var state_31945__$1 = state_31945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31957_31983 = state_31945__$1;
(statearr_31957_31983[(1)] = (11));

} else {
var statearr_31958_31984 = state_31945__$1;
(statearr_31958_31984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (5))){
var inst_31922 = (state_31945[(7)]);
var state_31945__$1 = state_31945;
var statearr_31959_31985 = state_31945__$1;
(statearr_31959_31985[(2)] = inst_31922);

(statearr_31959_31985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (10))){
var inst_31941 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31960_31986 = state_31945__$1;
(statearr_31960_31986[(2)] = inst_31941);

(statearr_31960_31986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (8))){
var inst_31922 = (state_31945[(7)]);
var inst_31932 = cljs.core.next.call(null,inst_31922);
var inst_31922__$1 = inst_31932;
var state_31945__$1 = (function (){var statearr_31961 = state_31945;
(statearr_31961[(7)] = inst_31922__$1);

return statearr_31961;
})();
var statearr_31962_31987 = state_31945__$1;
(statearr_31962_31987[(2)] = null);

(statearr_31962_31987[(1)] = (2));


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
});})(c__31087__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_31966 = [null,null,null,null,null,null,null,null];
(statearr_31966[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_31966[(1)] = (1));

return statearr_31966;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_31945){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_31945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e31967){if((e31967 instanceof Object)){
var ex__30979__auto__ = e31967;
var statearr_31968_31988 = state_31945;
(statearr_31968_31988[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31989 = state_31945;
state_31945 = G__31989;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_31945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_31945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_31969 = f__31088__auto__.call(null);
(statearr_31969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_31969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26629__auto__ = (((_ == null))?null:_);
var m__26630__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,_);
} else {
var m__26630__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26630__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,ch);
} else {
var m__26630__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m);
} else {
var m__26630__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32215 = (function (mult,ch,cs,meta32216){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32216 = meta32216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32217,meta32216__$1){
var self__ = this;
var _32217__$1 = this;
return (new cljs.core.async.t_cljs$core$async32215(self__.mult,self__.ch,self__.cs,meta32216__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32217){
var self__ = this;
var _32217__$1 = this;
return self__.meta32216;
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32216","meta32216",-1757355173,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32215";

cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async32215");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32215 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32215(mult__$1,ch__$1,cs__$1,meta32216){
return (new cljs.core.async.t_cljs$core$async32215(mult__$1,ch__$1,cs__$1,meta32216));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32215(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31087__auto___32440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32440,cs,m,dchan,dctr,done){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___32440,cs,m,dchan,dctr,done){
return (function (state_32352){
var state_val_32353 = (state_32352[(1)]);
if((state_val_32353 === (7))){
var inst_32348 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32354_32441 = state_32352__$1;
(statearr_32354_32441[(2)] = inst_32348);

(statearr_32354_32441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (20))){
var inst_32251 = (state_32352[(7)]);
var inst_32263 = cljs.core.first.call(null,inst_32251);
var inst_32264 = cljs.core.nth.call(null,inst_32263,(0),null);
var inst_32265 = cljs.core.nth.call(null,inst_32263,(1),null);
var state_32352__$1 = (function (){var statearr_32355 = state_32352;
(statearr_32355[(8)] = inst_32264);

return statearr_32355;
})();
if(cljs.core.truth_(inst_32265)){
var statearr_32356_32442 = state_32352__$1;
(statearr_32356_32442[(1)] = (22));

} else {
var statearr_32357_32443 = state_32352__$1;
(statearr_32357_32443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (27))){
var inst_32295 = (state_32352[(9)]);
var inst_32300 = (state_32352[(10)]);
var inst_32293 = (state_32352[(11)]);
var inst_32220 = (state_32352[(12)]);
var inst_32300__$1 = cljs.core._nth.call(null,inst_32293,inst_32295);
var inst_32301 = cljs.core.async.put_BANG_.call(null,inst_32300__$1,inst_32220,done);
var state_32352__$1 = (function (){var statearr_32358 = state_32352;
(statearr_32358[(10)] = inst_32300__$1);

return statearr_32358;
})();
if(cljs.core.truth_(inst_32301)){
var statearr_32359_32444 = state_32352__$1;
(statearr_32359_32444[(1)] = (30));

} else {
var statearr_32360_32445 = state_32352__$1;
(statearr_32360_32445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (1))){
var state_32352__$1 = state_32352;
var statearr_32361_32446 = state_32352__$1;
(statearr_32361_32446[(2)] = null);

(statearr_32361_32446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (24))){
var inst_32251 = (state_32352[(7)]);
var inst_32270 = (state_32352[(2)]);
var inst_32271 = cljs.core.next.call(null,inst_32251);
var inst_32229 = inst_32271;
var inst_32230 = null;
var inst_32231 = (0);
var inst_32232 = (0);
var state_32352__$1 = (function (){var statearr_32362 = state_32352;
(statearr_32362[(13)] = inst_32229);

(statearr_32362[(14)] = inst_32270);

(statearr_32362[(15)] = inst_32232);

(statearr_32362[(16)] = inst_32230);

(statearr_32362[(17)] = inst_32231);

return statearr_32362;
})();
var statearr_32363_32447 = state_32352__$1;
(statearr_32363_32447[(2)] = null);

(statearr_32363_32447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (39))){
var state_32352__$1 = state_32352;
var statearr_32367_32448 = state_32352__$1;
(statearr_32367_32448[(2)] = null);

(statearr_32367_32448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (4))){
var inst_32220 = (state_32352[(12)]);
var inst_32220__$1 = (state_32352[(2)]);
var inst_32221 = (inst_32220__$1 == null);
var state_32352__$1 = (function (){var statearr_32368 = state_32352;
(statearr_32368[(12)] = inst_32220__$1);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32221)){
var statearr_32369_32449 = state_32352__$1;
(statearr_32369_32449[(1)] = (5));

} else {
var statearr_32370_32450 = state_32352__$1;
(statearr_32370_32450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (15))){
var inst_32229 = (state_32352[(13)]);
var inst_32232 = (state_32352[(15)]);
var inst_32230 = (state_32352[(16)]);
var inst_32231 = (state_32352[(17)]);
var inst_32247 = (state_32352[(2)]);
var inst_32248 = (inst_32232 + (1));
var tmp32364 = inst_32229;
var tmp32365 = inst_32230;
var tmp32366 = inst_32231;
var inst_32229__$1 = tmp32364;
var inst_32230__$1 = tmp32365;
var inst_32231__$1 = tmp32366;
var inst_32232__$1 = inst_32248;
var state_32352__$1 = (function (){var statearr_32371 = state_32352;
(statearr_32371[(13)] = inst_32229__$1);

(statearr_32371[(18)] = inst_32247);

(statearr_32371[(15)] = inst_32232__$1);

(statearr_32371[(16)] = inst_32230__$1);

(statearr_32371[(17)] = inst_32231__$1);

return statearr_32371;
})();
var statearr_32372_32451 = state_32352__$1;
(statearr_32372_32451[(2)] = null);

(statearr_32372_32451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (21))){
var inst_32274 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32376_32452 = state_32352__$1;
(statearr_32376_32452[(2)] = inst_32274);

(statearr_32376_32452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (31))){
var inst_32300 = (state_32352[(10)]);
var inst_32304 = done.call(null,null);
var inst_32305 = cljs.core.async.untap_STAR_.call(null,m,inst_32300);
var state_32352__$1 = (function (){var statearr_32377 = state_32352;
(statearr_32377[(19)] = inst_32304);

return statearr_32377;
})();
var statearr_32378_32453 = state_32352__$1;
(statearr_32378_32453[(2)] = inst_32305);

(statearr_32378_32453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (32))){
var inst_32295 = (state_32352[(9)]);
var inst_32294 = (state_32352[(20)]);
var inst_32292 = (state_32352[(21)]);
var inst_32293 = (state_32352[(11)]);
var inst_32307 = (state_32352[(2)]);
var inst_32308 = (inst_32295 + (1));
var tmp32373 = inst_32294;
var tmp32374 = inst_32292;
var tmp32375 = inst_32293;
var inst_32292__$1 = tmp32374;
var inst_32293__$1 = tmp32375;
var inst_32294__$1 = tmp32373;
var inst_32295__$1 = inst_32308;
var state_32352__$1 = (function (){var statearr_32379 = state_32352;
(statearr_32379[(9)] = inst_32295__$1);

(statearr_32379[(20)] = inst_32294__$1);

(statearr_32379[(21)] = inst_32292__$1);

(statearr_32379[(22)] = inst_32307);

(statearr_32379[(11)] = inst_32293__$1);

return statearr_32379;
})();
var statearr_32380_32454 = state_32352__$1;
(statearr_32380_32454[(2)] = null);

(statearr_32380_32454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (40))){
var inst_32320 = (state_32352[(23)]);
var inst_32324 = done.call(null,null);
var inst_32325 = cljs.core.async.untap_STAR_.call(null,m,inst_32320);
var state_32352__$1 = (function (){var statearr_32381 = state_32352;
(statearr_32381[(24)] = inst_32324);

return statearr_32381;
})();
var statearr_32382_32455 = state_32352__$1;
(statearr_32382_32455[(2)] = inst_32325);

(statearr_32382_32455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (33))){
var inst_32311 = (state_32352[(25)]);
var inst_32313 = cljs.core.chunked_seq_QMARK_.call(null,inst_32311);
var state_32352__$1 = state_32352;
if(inst_32313){
var statearr_32383_32456 = state_32352__$1;
(statearr_32383_32456[(1)] = (36));

} else {
var statearr_32384_32457 = state_32352__$1;
(statearr_32384_32457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (13))){
var inst_32241 = (state_32352[(26)]);
var inst_32244 = cljs.core.async.close_BANG_.call(null,inst_32241);
var state_32352__$1 = state_32352;
var statearr_32385_32458 = state_32352__$1;
(statearr_32385_32458[(2)] = inst_32244);

(statearr_32385_32458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (22))){
var inst_32264 = (state_32352[(8)]);
var inst_32267 = cljs.core.async.close_BANG_.call(null,inst_32264);
var state_32352__$1 = state_32352;
var statearr_32386_32459 = state_32352__$1;
(statearr_32386_32459[(2)] = inst_32267);

(statearr_32386_32459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (36))){
var inst_32311 = (state_32352[(25)]);
var inst_32315 = cljs.core.chunk_first.call(null,inst_32311);
var inst_32316 = cljs.core.chunk_rest.call(null,inst_32311);
var inst_32317 = cljs.core.count.call(null,inst_32315);
var inst_32292 = inst_32316;
var inst_32293 = inst_32315;
var inst_32294 = inst_32317;
var inst_32295 = (0);
var state_32352__$1 = (function (){var statearr_32387 = state_32352;
(statearr_32387[(9)] = inst_32295);

(statearr_32387[(20)] = inst_32294);

(statearr_32387[(21)] = inst_32292);

(statearr_32387[(11)] = inst_32293);

return statearr_32387;
})();
var statearr_32388_32460 = state_32352__$1;
(statearr_32388_32460[(2)] = null);

(statearr_32388_32460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (41))){
var inst_32311 = (state_32352[(25)]);
var inst_32327 = (state_32352[(2)]);
var inst_32328 = cljs.core.next.call(null,inst_32311);
var inst_32292 = inst_32328;
var inst_32293 = null;
var inst_32294 = (0);
var inst_32295 = (0);
var state_32352__$1 = (function (){var statearr_32389 = state_32352;
(statearr_32389[(9)] = inst_32295);

(statearr_32389[(20)] = inst_32294);

(statearr_32389[(27)] = inst_32327);

(statearr_32389[(21)] = inst_32292);

(statearr_32389[(11)] = inst_32293);

return statearr_32389;
})();
var statearr_32390_32461 = state_32352__$1;
(statearr_32390_32461[(2)] = null);

(statearr_32390_32461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (43))){
var state_32352__$1 = state_32352;
var statearr_32391_32462 = state_32352__$1;
(statearr_32391_32462[(2)] = null);

(statearr_32391_32462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (29))){
var inst_32336 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32392_32463 = state_32352__$1;
(statearr_32392_32463[(2)] = inst_32336);

(statearr_32392_32463[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (44))){
var inst_32345 = (state_32352[(2)]);
var state_32352__$1 = (function (){var statearr_32393 = state_32352;
(statearr_32393[(28)] = inst_32345);

return statearr_32393;
})();
var statearr_32394_32464 = state_32352__$1;
(statearr_32394_32464[(2)] = null);

(statearr_32394_32464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (6))){
var inst_32284 = (state_32352[(29)]);
var inst_32283 = cljs.core.deref.call(null,cs);
var inst_32284__$1 = cljs.core.keys.call(null,inst_32283);
var inst_32285 = cljs.core.count.call(null,inst_32284__$1);
var inst_32286 = cljs.core.reset_BANG_.call(null,dctr,inst_32285);
var inst_32291 = cljs.core.seq.call(null,inst_32284__$1);
var inst_32292 = inst_32291;
var inst_32293 = null;
var inst_32294 = (0);
var inst_32295 = (0);
var state_32352__$1 = (function (){var statearr_32395 = state_32352;
(statearr_32395[(9)] = inst_32295);

(statearr_32395[(20)] = inst_32294);

(statearr_32395[(29)] = inst_32284__$1);

(statearr_32395[(30)] = inst_32286);

(statearr_32395[(21)] = inst_32292);

(statearr_32395[(11)] = inst_32293);

return statearr_32395;
})();
var statearr_32396_32465 = state_32352__$1;
(statearr_32396_32465[(2)] = null);

(statearr_32396_32465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (28))){
var inst_32311 = (state_32352[(25)]);
var inst_32292 = (state_32352[(21)]);
var inst_32311__$1 = cljs.core.seq.call(null,inst_32292);
var state_32352__$1 = (function (){var statearr_32397 = state_32352;
(statearr_32397[(25)] = inst_32311__$1);

return statearr_32397;
})();
if(inst_32311__$1){
var statearr_32398_32466 = state_32352__$1;
(statearr_32398_32466[(1)] = (33));

} else {
var statearr_32399_32467 = state_32352__$1;
(statearr_32399_32467[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (25))){
var inst_32295 = (state_32352[(9)]);
var inst_32294 = (state_32352[(20)]);
var inst_32297 = (inst_32295 < inst_32294);
var inst_32298 = inst_32297;
var state_32352__$1 = state_32352;
if(cljs.core.truth_(inst_32298)){
var statearr_32400_32468 = state_32352__$1;
(statearr_32400_32468[(1)] = (27));

} else {
var statearr_32401_32469 = state_32352__$1;
(statearr_32401_32469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (34))){
var state_32352__$1 = state_32352;
var statearr_32402_32470 = state_32352__$1;
(statearr_32402_32470[(2)] = null);

(statearr_32402_32470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (17))){
var state_32352__$1 = state_32352;
var statearr_32403_32471 = state_32352__$1;
(statearr_32403_32471[(2)] = null);

(statearr_32403_32471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (3))){
var inst_32350 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32352__$1,inst_32350);
} else {
if((state_val_32353 === (12))){
var inst_32279 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32404_32472 = state_32352__$1;
(statearr_32404_32472[(2)] = inst_32279);

(statearr_32404_32472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (2))){
var state_32352__$1 = state_32352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32352__$1,(4),ch);
} else {
if((state_val_32353 === (23))){
var state_32352__$1 = state_32352;
var statearr_32405_32473 = state_32352__$1;
(statearr_32405_32473[(2)] = null);

(statearr_32405_32473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (35))){
var inst_32334 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32406_32474 = state_32352__$1;
(statearr_32406_32474[(2)] = inst_32334);

(statearr_32406_32474[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (19))){
var inst_32251 = (state_32352[(7)]);
var inst_32255 = cljs.core.chunk_first.call(null,inst_32251);
var inst_32256 = cljs.core.chunk_rest.call(null,inst_32251);
var inst_32257 = cljs.core.count.call(null,inst_32255);
var inst_32229 = inst_32256;
var inst_32230 = inst_32255;
var inst_32231 = inst_32257;
var inst_32232 = (0);
var state_32352__$1 = (function (){var statearr_32407 = state_32352;
(statearr_32407[(13)] = inst_32229);

(statearr_32407[(15)] = inst_32232);

(statearr_32407[(16)] = inst_32230);

(statearr_32407[(17)] = inst_32231);

return statearr_32407;
})();
var statearr_32408_32475 = state_32352__$1;
(statearr_32408_32475[(2)] = null);

(statearr_32408_32475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (11))){
var inst_32229 = (state_32352[(13)]);
var inst_32251 = (state_32352[(7)]);
var inst_32251__$1 = cljs.core.seq.call(null,inst_32229);
var state_32352__$1 = (function (){var statearr_32409 = state_32352;
(statearr_32409[(7)] = inst_32251__$1);

return statearr_32409;
})();
if(inst_32251__$1){
var statearr_32410_32476 = state_32352__$1;
(statearr_32410_32476[(1)] = (16));

} else {
var statearr_32411_32477 = state_32352__$1;
(statearr_32411_32477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (9))){
var inst_32281 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32412_32478 = state_32352__$1;
(statearr_32412_32478[(2)] = inst_32281);

(statearr_32412_32478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (5))){
var inst_32227 = cljs.core.deref.call(null,cs);
var inst_32228 = cljs.core.seq.call(null,inst_32227);
var inst_32229 = inst_32228;
var inst_32230 = null;
var inst_32231 = (0);
var inst_32232 = (0);
var state_32352__$1 = (function (){var statearr_32413 = state_32352;
(statearr_32413[(13)] = inst_32229);

(statearr_32413[(15)] = inst_32232);

(statearr_32413[(16)] = inst_32230);

(statearr_32413[(17)] = inst_32231);

return statearr_32413;
})();
var statearr_32414_32479 = state_32352__$1;
(statearr_32414_32479[(2)] = null);

(statearr_32414_32479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (14))){
var state_32352__$1 = state_32352;
var statearr_32415_32480 = state_32352__$1;
(statearr_32415_32480[(2)] = null);

(statearr_32415_32480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (45))){
var inst_32342 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32416_32481 = state_32352__$1;
(statearr_32416_32481[(2)] = inst_32342);

(statearr_32416_32481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (26))){
var inst_32284 = (state_32352[(29)]);
var inst_32338 = (state_32352[(2)]);
var inst_32339 = cljs.core.seq.call(null,inst_32284);
var state_32352__$1 = (function (){var statearr_32417 = state_32352;
(statearr_32417[(31)] = inst_32338);

return statearr_32417;
})();
if(inst_32339){
var statearr_32418_32482 = state_32352__$1;
(statearr_32418_32482[(1)] = (42));

} else {
var statearr_32419_32483 = state_32352__$1;
(statearr_32419_32483[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (16))){
var inst_32251 = (state_32352[(7)]);
var inst_32253 = cljs.core.chunked_seq_QMARK_.call(null,inst_32251);
var state_32352__$1 = state_32352;
if(inst_32253){
var statearr_32420_32484 = state_32352__$1;
(statearr_32420_32484[(1)] = (19));

} else {
var statearr_32421_32485 = state_32352__$1;
(statearr_32421_32485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (38))){
var inst_32331 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32422_32486 = state_32352__$1;
(statearr_32422_32486[(2)] = inst_32331);

(statearr_32422_32486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (30))){
var state_32352__$1 = state_32352;
var statearr_32423_32487 = state_32352__$1;
(statearr_32423_32487[(2)] = null);

(statearr_32423_32487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (10))){
var inst_32232 = (state_32352[(15)]);
var inst_32230 = (state_32352[(16)]);
var inst_32240 = cljs.core._nth.call(null,inst_32230,inst_32232);
var inst_32241 = cljs.core.nth.call(null,inst_32240,(0),null);
var inst_32242 = cljs.core.nth.call(null,inst_32240,(1),null);
var state_32352__$1 = (function (){var statearr_32424 = state_32352;
(statearr_32424[(26)] = inst_32241);

return statearr_32424;
})();
if(cljs.core.truth_(inst_32242)){
var statearr_32425_32488 = state_32352__$1;
(statearr_32425_32488[(1)] = (13));

} else {
var statearr_32426_32489 = state_32352__$1;
(statearr_32426_32489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (18))){
var inst_32277 = (state_32352[(2)]);
var state_32352__$1 = state_32352;
var statearr_32427_32490 = state_32352__$1;
(statearr_32427_32490[(2)] = inst_32277);

(statearr_32427_32490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (42))){
var state_32352__$1 = state_32352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32352__$1,(45),dchan);
} else {
if((state_val_32353 === (37))){
var inst_32320 = (state_32352[(23)]);
var inst_32311 = (state_32352[(25)]);
var inst_32220 = (state_32352[(12)]);
var inst_32320__$1 = cljs.core.first.call(null,inst_32311);
var inst_32321 = cljs.core.async.put_BANG_.call(null,inst_32320__$1,inst_32220,done);
var state_32352__$1 = (function (){var statearr_32428 = state_32352;
(statearr_32428[(23)] = inst_32320__$1);

return statearr_32428;
})();
if(cljs.core.truth_(inst_32321)){
var statearr_32429_32491 = state_32352__$1;
(statearr_32429_32491[(1)] = (39));

} else {
var statearr_32430_32492 = state_32352__$1;
(statearr_32430_32492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32353 === (8))){
var inst_32232 = (state_32352[(15)]);
var inst_32231 = (state_32352[(17)]);
var inst_32234 = (inst_32232 < inst_32231);
var inst_32235 = inst_32234;
var state_32352__$1 = state_32352;
if(cljs.core.truth_(inst_32235)){
var statearr_32431_32493 = state_32352__$1;
(statearr_32431_32493[(1)] = (10));

} else {
var statearr_32432_32494 = state_32352__$1;
(statearr_32432_32494[(1)] = (11));

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
});})(c__31087__auto___32440,cs,m,dchan,dctr,done))
;
return ((function (switch__30975__auto__,c__31087__auto___32440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30976__auto__ = null;
var cljs$core$async$mult_$_state_machine__30976__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$mult_$_state_machine__30976__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$mult_$_state_machine__30976__auto____1 = (function (state_32352){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_32352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__30979__auto__ = e32437;
var statearr_32438_32495 = state_32352;
(statearr_32438_32495[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32496 = state_32352;
state_32352 = G__32496;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30976__auto__ = function(state_32352){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30976__auto____1.call(this,state_32352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30976__auto____0;
cljs$core$async$mult_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30976__auto____1;
return cljs$core$async$mult_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___32440,cs,m,dchan,dctr,done))
})();
var state__31089__auto__ = (function (){var statearr_32439 = f__31088__auto__.call(null);
(statearr_32439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___32440);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32440,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32497 = [];
var len__27041__auto___32500 = arguments.length;
var i__27042__auto___32501 = (0);
while(true){
if((i__27042__auto___32501 < len__27041__auto___32500)){
args32497.push((arguments[i__27042__auto___32501]));

var G__32502 = (i__27042__auto___32501 + (1));
i__27042__auto___32501 = G__32502;
continue;
} else {
}
break;
}

var G__32499 = args32497.length;
switch (G__32499) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32497.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,ch);
} else {
var m__26630__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,ch);
} else {
var m__26630__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m);
} else {
var m__26630__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,state_map);
} else {
var m__26630__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26629__auto__ = (((m == null))?null:m);
var m__26630__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,m,mode);
} else {
var m__26630__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27048__auto__ = [];
var len__27041__auto___32514 = arguments.length;
var i__27042__auto___32515 = (0);
while(true){
if((i__27042__auto___32515 < len__27041__auto___32514)){
args__27048__auto__.push((arguments[i__27042__auto___32515]));

var G__32516 = (i__27042__auto___32515 + (1));
i__27042__auto___32515 = G__32516;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((3) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27049__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32508){
var map__32509 = p__32508;
var map__32509__$1 = ((((!((map__32509 == null)))?((((map__32509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);
var opts = map__32509__$1;
var statearr_32511_32517 = state;
(statearr_32511_32517[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32509,map__32509__$1,opts){
return (function (val){
var statearr_32512_32518 = state;
(statearr_32512_32518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32509,map__32509__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32513_32519 = state;
(statearr_32513_32519[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32504){
var G__32505 = cljs.core.first.call(null,seq32504);
var seq32504__$1 = cljs.core.next.call(null,seq32504);
var G__32506 = cljs.core.first.call(null,seq32504__$1);
var seq32504__$2 = cljs.core.next.call(null,seq32504__$1);
var G__32507 = cljs.core.first.call(null,seq32504__$2);
var seq32504__$3 = cljs.core.next.call(null,seq32504__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32505,G__32506,G__32507,seq32504__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32685 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32686){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32686 = meta32686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32687,meta32686__$1){
var self__ = this;
var _32687__$1 = this;
return (new cljs.core.async.t_cljs$core$async32685(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32686__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32687){
var self__ = this;
var _32687__$1 = this;
return self__.meta32686;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32686","meta32686",-901104203,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32685";

cljs.core.async.t_cljs$core$async32685.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async32685");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32685 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32685(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32686){
return (new cljs.core.async.t_cljs$core$async32685(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32686));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32685(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31087__auto___32850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32787){
var state_val_32788 = (state_32787[(1)]);
if((state_val_32788 === (7))){
var inst_32703 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32789_32851 = state_32787__$1;
(statearr_32789_32851[(2)] = inst_32703);

(statearr_32789_32851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (20))){
var inst_32715 = (state_32787[(7)]);
var state_32787__$1 = state_32787;
var statearr_32790_32852 = state_32787__$1;
(statearr_32790_32852[(2)] = inst_32715);

(statearr_32790_32852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (27))){
var state_32787__$1 = state_32787;
var statearr_32791_32853 = state_32787__$1;
(statearr_32791_32853[(2)] = null);

(statearr_32791_32853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (1))){
var inst_32691 = (state_32787[(8)]);
var inst_32691__$1 = calc_state.call(null);
var inst_32693 = (inst_32691__$1 == null);
var inst_32694 = cljs.core.not.call(null,inst_32693);
var state_32787__$1 = (function (){var statearr_32792 = state_32787;
(statearr_32792[(8)] = inst_32691__$1);

return statearr_32792;
})();
if(inst_32694){
var statearr_32793_32854 = state_32787__$1;
(statearr_32793_32854[(1)] = (2));

} else {
var statearr_32794_32855 = state_32787__$1;
(statearr_32794_32855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (24))){
var inst_32761 = (state_32787[(9)]);
var inst_32747 = (state_32787[(10)]);
var inst_32738 = (state_32787[(11)]);
var inst_32761__$1 = inst_32738.call(null,inst_32747);
var state_32787__$1 = (function (){var statearr_32795 = state_32787;
(statearr_32795[(9)] = inst_32761__$1);

return statearr_32795;
})();
if(cljs.core.truth_(inst_32761__$1)){
var statearr_32796_32856 = state_32787__$1;
(statearr_32796_32856[(1)] = (29));

} else {
var statearr_32797_32857 = state_32787__$1;
(statearr_32797_32857[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (4))){
var inst_32706 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32706)){
var statearr_32798_32858 = state_32787__$1;
(statearr_32798_32858[(1)] = (8));

} else {
var statearr_32799_32859 = state_32787__$1;
(statearr_32799_32859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (15))){
var inst_32732 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32732)){
var statearr_32800_32860 = state_32787__$1;
(statearr_32800_32860[(1)] = (19));

} else {
var statearr_32801_32861 = state_32787__$1;
(statearr_32801_32861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (21))){
var inst_32737 = (state_32787[(12)]);
var inst_32737__$1 = (state_32787[(2)]);
var inst_32738 = cljs.core.get.call(null,inst_32737__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32739 = cljs.core.get.call(null,inst_32737__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32740 = cljs.core.get.call(null,inst_32737__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32787__$1 = (function (){var statearr_32802 = state_32787;
(statearr_32802[(12)] = inst_32737__$1);

(statearr_32802[(13)] = inst_32739);

(statearr_32802[(11)] = inst_32738);

return statearr_32802;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32787__$1,(22),inst_32740);
} else {
if((state_val_32788 === (31))){
var inst_32769 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32769)){
var statearr_32803_32862 = state_32787__$1;
(statearr_32803_32862[(1)] = (32));

} else {
var statearr_32804_32863 = state_32787__$1;
(statearr_32804_32863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (32))){
var inst_32746 = (state_32787[(14)]);
var state_32787__$1 = state_32787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32787__$1,(35),out,inst_32746);
} else {
if((state_val_32788 === (33))){
var inst_32737 = (state_32787[(12)]);
var inst_32715 = inst_32737;
var state_32787__$1 = (function (){var statearr_32805 = state_32787;
(statearr_32805[(7)] = inst_32715);

return statearr_32805;
})();
var statearr_32806_32864 = state_32787__$1;
(statearr_32806_32864[(2)] = null);

(statearr_32806_32864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (13))){
var inst_32715 = (state_32787[(7)]);
var inst_32722 = inst_32715.cljs$lang$protocol_mask$partition0$;
var inst_32723 = (inst_32722 & (64));
var inst_32724 = inst_32715.cljs$core$ISeq$;
var inst_32725 = (inst_32723) || (inst_32724);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32725)){
var statearr_32807_32865 = state_32787__$1;
(statearr_32807_32865[(1)] = (16));

} else {
var statearr_32808_32866 = state_32787__$1;
(statearr_32808_32866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (22))){
var inst_32746 = (state_32787[(14)]);
var inst_32747 = (state_32787[(10)]);
var inst_32745 = (state_32787[(2)]);
var inst_32746__$1 = cljs.core.nth.call(null,inst_32745,(0),null);
var inst_32747__$1 = cljs.core.nth.call(null,inst_32745,(1),null);
var inst_32748 = (inst_32746__$1 == null);
var inst_32749 = cljs.core._EQ_.call(null,inst_32747__$1,change);
var inst_32750 = (inst_32748) || (inst_32749);
var state_32787__$1 = (function (){var statearr_32809 = state_32787;
(statearr_32809[(14)] = inst_32746__$1);

(statearr_32809[(10)] = inst_32747__$1);

return statearr_32809;
})();
if(cljs.core.truth_(inst_32750)){
var statearr_32810_32867 = state_32787__$1;
(statearr_32810_32867[(1)] = (23));

} else {
var statearr_32811_32868 = state_32787__$1;
(statearr_32811_32868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (36))){
var inst_32737 = (state_32787[(12)]);
var inst_32715 = inst_32737;
var state_32787__$1 = (function (){var statearr_32812 = state_32787;
(statearr_32812[(7)] = inst_32715);

return statearr_32812;
})();
var statearr_32813_32869 = state_32787__$1;
(statearr_32813_32869[(2)] = null);

(statearr_32813_32869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (29))){
var inst_32761 = (state_32787[(9)]);
var state_32787__$1 = state_32787;
var statearr_32814_32870 = state_32787__$1;
(statearr_32814_32870[(2)] = inst_32761);

(statearr_32814_32870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (6))){
var state_32787__$1 = state_32787;
var statearr_32815_32871 = state_32787__$1;
(statearr_32815_32871[(2)] = false);

(statearr_32815_32871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (28))){
var inst_32757 = (state_32787[(2)]);
var inst_32758 = calc_state.call(null);
var inst_32715 = inst_32758;
var state_32787__$1 = (function (){var statearr_32816 = state_32787;
(statearr_32816[(7)] = inst_32715);

(statearr_32816[(15)] = inst_32757);

return statearr_32816;
})();
var statearr_32817_32872 = state_32787__$1;
(statearr_32817_32872[(2)] = null);

(statearr_32817_32872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (25))){
var inst_32783 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32818_32873 = state_32787__$1;
(statearr_32818_32873[(2)] = inst_32783);

(statearr_32818_32873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (34))){
var inst_32781 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32819_32874 = state_32787__$1;
(statearr_32819_32874[(2)] = inst_32781);

(statearr_32819_32874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (17))){
var state_32787__$1 = state_32787;
var statearr_32820_32875 = state_32787__$1;
(statearr_32820_32875[(2)] = false);

(statearr_32820_32875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (3))){
var state_32787__$1 = state_32787;
var statearr_32821_32876 = state_32787__$1;
(statearr_32821_32876[(2)] = false);

(statearr_32821_32876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (12))){
var inst_32785 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32787__$1,inst_32785);
} else {
if((state_val_32788 === (2))){
var inst_32691 = (state_32787[(8)]);
var inst_32696 = inst_32691.cljs$lang$protocol_mask$partition0$;
var inst_32697 = (inst_32696 & (64));
var inst_32698 = inst_32691.cljs$core$ISeq$;
var inst_32699 = (inst_32697) || (inst_32698);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32699)){
var statearr_32822_32877 = state_32787__$1;
(statearr_32822_32877[(1)] = (5));

} else {
var statearr_32823_32878 = state_32787__$1;
(statearr_32823_32878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (23))){
var inst_32746 = (state_32787[(14)]);
var inst_32752 = (inst_32746 == null);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32752)){
var statearr_32824_32879 = state_32787__$1;
(statearr_32824_32879[(1)] = (26));

} else {
var statearr_32825_32880 = state_32787__$1;
(statearr_32825_32880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (35))){
var inst_32772 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
if(cljs.core.truth_(inst_32772)){
var statearr_32826_32881 = state_32787__$1;
(statearr_32826_32881[(1)] = (36));

} else {
var statearr_32827_32882 = state_32787__$1;
(statearr_32827_32882[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (19))){
var inst_32715 = (state_32787[(7)]);
var inst_32734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32715);
var state_32787__$1 = state_32787;
var statearr_32828_32883 = state_32787__$1;
(statearr_32828_32883[(2)] = inst_32734);

(statearr_32828_32883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (11))){
var inst_32715 = (state_32787[(7)]);
var inst_32719 = (inst_32715 == null);
var inst_32720 = cljs.core.not.call(null,inst_32719);
var state_32787__$1 = state_32787;
if(inst_32720){
var statearr_32829_32884 = state_32787__$1;
(statearr_32829_32884[(1)] = (13));

} else {
var statearr_32830_32885 = state_32787__$1;
(statearr_32830_32885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (9))){
var inst_32691 = (state_32787[(8)]);
var state_32787__$1 = state_32787;
var statearr_32831_32886 = state_32787__$1;
(statearr_32831_32886[(2)] = inst_32691);

(statearr_32831_32886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (5))){
var state_32787__$1 = state_32787;
var statearr_32832_32887 = state_32787__$1;
(statearr_32832_32887[(2)] = true);

(statearr_32832_32887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (14))){
var state_32787__$1 = state_32787;
var statearr_32833_32888 = state_32787__$1;
(statearr_32833_32888[(2)] = false);

(statearr_32833_32888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (26))){
var inst_32747 = (state_32787[(10)]);
var inst_32754 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32747);
var state_32787__$1 = state_32787;
var statearr_32834_32889 = state_32787__$1;
(statearr_32834_32889[(2)] = inst_32754);

(statearr_32834_32889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (16))){
var state_32787__$1 = state_32787;
var statearr_32835_32890 = state_32787__$1;
(statearr_32835_32890[(2)] = true);

(statearr_32835_32890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (38))){
var inst_32777 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32836_32891 = state_32787__$1;
(statearr_32836_32891[(2)] = inst_32777);

(statearr_32836_32891[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (30))){
var inst_32739 = (state_32787[(13)]);
var inst_32747 = (state_32787[(10)]);
var inst_32738 = (state_32787[(11)]);
var inst_32764 = cljs.core.empty_QMARK_.call(null,inst_32738);
var inst_32765 = inst_32739.call(null,inst_32747);
var inst_32766 = cljs.core.not.call(null,inst_32765);
var inst_32767 = (inst_32764) && (inst_32766);
var state_32787__$1 = state_32787;
var statearr_32837_32892 = state_32787__$1;
(statearr_32837_32892[(2)] = inst_32767);

(statearr_32837_32892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (10))){
var inst_32691 = (state_32787[(8)]);
var inst_32711 = (state_32787[(2)]);
var inst_32712 = cljs.core.get.call(null,inst_32711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32713 = cljs.core.get.call(null,inst_32711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32714 = cljs.core.get.call(null,inst_32711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32715 = inst_32691;
var state_32787__$1 = (function (){var statearr_32838 = state_32787;
(statearr_32838[(16)] = inst_32714);

(statearr_32838[(17)] = inst_32713);

(statearr_32838[(7)] = inst_32715);

(statearr_32838[(18)] = inst_32712);

return statearr_32838;
})();
var statearr_32839_32893 = state_32787__$1;
(statearr_32839_32893[(2)] = null);

(statearr_32839_32893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (18))){
var inst_32729 = (state_32787[(2)]);
var state_32787__$1 = state_32787;
var statearr_32840_32894 = state_32787__$1;
(statearr_32840_32894[(2)] = inst_32729);

(statearr_32840_32894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (37))){
var state_32787__$1 = state_32787;
var statearr_32841_32895 = state_32787__$1;
(statearr_32841_32895[(2)] = null);

(statearr_32841_32895[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32788 === (8))){
var inst_32691 = (state_32787[(8)]);
var inst_32708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32691);
var state_32787__$1 = state_32787;
var statearr_32842_32896 = state_32787__$1;
(statearr_32842_32896[(2)] = inst_32708);

(statearr_32842_32896[(1)] = (10));


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
});})(c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30975__auto__,c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30976__auto__ = null;
var cljs$core$async$mix_$_state_machine__30976__auto____0 = (function (){
var statearr_32846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32846[(0)] = cljs$core$async$mix_$_state_machine__30976__auto__);

(statearr_32846[(1)] = (1));

return statearr_32846;
});
var cljs$core$async$mix_$_state_machine__30976__auto____1 = (function (state_32787){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_32787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e32847){if((e32847 instanceof Object)){
var ex__30979__auto__ = e32847;
var statearr_32848_32897 = state_32787;
(statearr_32848_32897[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32898 = state_32787;
state_32787 = G__32898;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30976__auto__ = function(state_32787){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30976__auto____1.call(this,state_32787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30976__auto____0;
cljs$core$async$mix_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30976__auto____1;
return cljs$core$async$mix_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31089__auto__ = (function (){var statearr_32849 = f__31088__auto__.call(null);
(statearr_32849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___32850);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26629__auto__ = (((p == null))?null:p);
var m__26630__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26630__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26629__auto__ = (((p == null))?null:p);
var m__26630__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,p,v,ch);
} else {
var m__26630__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32899 = [];
var len__27041__auto___32902 = arguments.length;
var i__27042__auto___32903 = (0);
while(true){
if((i__27042__auto___32903 < len__27041__auto___32902)){
args32899.push((arguments[i__27042__auto___32903]));

var G__32904 = (i__27042__auto___32903 + (1));
i__27042__auto___32903 = G__32904;
continue;
} else {
}
break;
}

var G__32901 = args32899.length;
switch (G__32901) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32899.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26629__auto__ = (((p == null))?null:p);
var m__26630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,p);
} else {
var m__26630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26629__auto__ = (((p == null))?null:p);
var m__26630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26629__auto__)]);
if(!((m__26630__auto__ == null))){
return m__26630__auto__.call(null,p,v);
} else {
var m__26630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26630__auto____$1 == null))){
return m__26630__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32907 = [];
var len__27041__auto___33032 = arguments.length;
var i__27042__auto___33033 = (0);
while(true){
if((i__27042__auto___33033 < len__27041__auto___33032)){
args32907.push((arguments[i__27042__auto___33033]));

var G__33034 = (i__27042__auto___33033 + (1));
i__27042__auto___33033 = G__33034;
continue;
} else {
}
break;
}

var G__32909 = args32907.length;
switch (G__32909) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32907.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25966__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25966__auto__,mults){
return (function (p1__32906_SHARP_){
if(cljs.core.truth_(p1__32906_SHARP_.call(null,topic))){
return p1__32906_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32906_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25966__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32910 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32911){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32911 = meta32911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32912,meta32911__$1){
var self__ = this;
var _32912__$1 = this;
return (new cljs.core.async.t_cljs$core$async32910(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32911__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32912){
var self__ = this;
var _32912__$1 = this;
return self__.meta32911;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32911","meta32911",-1943920132,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32910";

cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async32910");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32910 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32911){
return (new cljs.core.async.t_cljs$core$async32910(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32911));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32910(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31087__auto___33036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33036,mults,ensure_mult,p){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33036,mults,ensure_mult,p){
return (function (state_32984){
var state_val_32985 = (state_32984[(1)]);
if((state_val_32985 === (7))){
var inst_32980 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32986_33037 = state_32984__$1;
(statearr_32986_33037[(2)] = inst_32980);

(statearr_32986_33037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (20))){
var state_32984__$1 = state_32984;
var statearr_32987_33038 = state_32984__$1;
(statearr_32987_33038[(2)] = null);

(statearr_32987_33038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (1))){
var state_32984__$1 = state_32984;
var statearr_32988_33039 = state_32984__$1;
(statearr_32988_33039[(2)] = null);

(statearr_32988_33039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (24))){
var inst_32963 = (state_32984[(7)]);
var inst_32972 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32963);
var state_32984__$1 = state_32984;
var statearr_32989_33040 = state_32984__$1;
(statearr_32989_33040[(2)] = inst_32972);

(statearr_32989_33040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (4))){
var inst_32915 = (state_32984[(8)]);
var inst_32915__$1 = (state_32984[(2)]);
var inst_32916 = (inst_32915__$1 == null);
var state_32984__$1 = (function (){var statearr_32990 = state_32984;
(statearr_32990[(8)] = inst_32915__$1);

return statearr_32990;
})();
if(cljs.core.truth_(inst_32916)){
var statearr_32991_33041 = state_32984__$1;
(statearr_32991_33041[(1)] = (5));

} else {
var statearr_32992_33042 = state_32984__$1;
(statearr_32992_33042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (15))){
var inst_32957 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32993_33043 = state_32984__$1;
(statearr_32993_33043[(2)] = inst_32957);

(statearr_32993_33043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (21))){
var inst_32977 = (state_32984[(2)]);
var state_32984__$1 = (function (){var statearr_32994 = state_32984;
(statearr_32994[(9)] = inst_32977);

return statearr_32994;
})();
var statearr_32995_33044 = state_32984__$1;
(statearr_32995_33044[(2)] = null);

(statearr_32995_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (13))){
var inst_32939 = (state_32984[(10)]);
var inst_32941 = cljs.core.chunked_seq_QMARK_.call(null,inst_32939);
var state_32984__$1 = state_32984;
if(inst_32941){
var statearr_32996_33045 = state_32984__$1;
(statearr_32996_33045[(1)] = (16));

} else {
var statearr_32997_33046 = state_32984__$1;
(statearr_32997_33046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (22))){
var inst_32969 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32969)){
var statearr_32998_33047 = state_32984__$1;
(statearr_32998_33047[(1)] = (23));

} else {
var statearr_32999_33048 = state_32984__$1;
(statearr_32999_33048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (6))){
var inst_32915 = (state_32984[(8)]);
var inst_32963 = (state_32984[(7)]);
var inst_32965 = (state_32984[(11)]);
var inst_32963__$1 = topic_fn.call(null,inst_32915);
var inst_32964 = cljs.core.deref.call(null,mults);
var inst_32965__$1 = cljs.core.get.call(null,inst_32964,inst_32963__$1);
var state_32984__$1 = (function (){var statearr_33000 = state_32984;
(statearr_33000[(7)] = inst_32963__$1);

(statearr_33000[(11)] = inst_32965__$1);

return statearr_33000;
})();
if(cljs.core.truth_(inst_32965__$1)){
var statearr_33001_33049 = state_32984__$1;
(statearr_33001_33049[(1)] = (19));

} else {
var statearr_33002_33050 = state_32984__$1;
(statearr_33002_33050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (25))){
var inst_32974 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33003_33051 = state_32984__$1;
(statearr_33003_33051[(2)] = inst_32974);

(statearr_33003_33051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (17))){
var inst_32939 = (state_32984[(10)]);
var inst_32948 = cljs.core.first.call(null,inst_32939);
var inst_32949 = cljs.core.async.muxch_STAR_.call(null,inst_32948);
var inst_32950 = cljs.core.async.close_BANG_.call(null,inst_32949);
var inst_32951 = cljs.core.next.call(null,inst_32939);
var inst_32925 = inst_32951;
var inst_32926 = null;
var inst_32927 = (0);
var inst_32928 = (0);
var state_32984__$1 = (function (){var statearr_33004 = state_32984;
(statearr_33004[(12)] = inst_32925);

(statearr_33004[(13)] = inst_32928);

(statearr_33004[(14)] = inst_32926);

(statearr_33004[(15)] = inst_32927);

(statearr_33004[(16)] = inst_32950);

return statearr_33004;
})();
var statearr_33005_33052 = state_32984__$1;
(statearr_33005_33052[(2)] = null);

(statearr_33005_33052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (3))){
var inst_32982 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32984__$1,inst_32982);
} else {
if((state_val_32985 === (12))){
var inst_32959 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33006_33053 = state_32984__$1;
(statearr_33006_33053[(2)] = inst_32959);

(statearr_33006_33053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (2))){
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32984__$1,(4),ch);
} else {
if((state_val_32985 === (23))){
var state_32984__$1 = state_32984;
var statearr_33007_33054 = state_32984__$1;
(statearr_33007_33054[(2)] = null);

(statearr_33007_33054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (19))){
var inst_32915 = (state_32984[(8)]);
var inst_32965 = (state_32984[(11)]);
var inst_32967 = cljs.core.async.muxch_STAR_.call(null,inst_32965);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32984__$1,(22),inst_32967,inst_32915);
} else {
if((state_val_32985 === (11))){
var inst_32925 = (state_32984[(12)]);
var inst_32939 = (state_32984[(10)]);
var inst_32939__$1 = cljs.core.seq.call(null,inst_32925);
var state_32984__$1 = (function (){var statearr_33008 = state_32984;
(statearr_33008[(10)] = inst_32939__$1);

return statearr_33008;
})();
if(inst_32939__$1){
var statearr_33009_33055 = state_32984__$1;
(statearr_33009_33055[(1)] = (13));

} else {
var statearr_33010_33056 = state_32984__$1;
(statearr_33010_33056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (9))){
var inst_32961 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33011_33057 = state_32984__$1;
(statearr_33011_33057[(2)] = inst_32961);

(statearr_33011_33057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (5))){
var inst_32922 = cljs.core.deref.call(null,mults);
var inst_32923 = cljs.core.vals.call(null,inst_32922);
var inst_32924 = cljs.core.seq.call(null,inst_32923);
var inst_32925 = inst_32924;
var inst_32926 = null;
var inst_32927 = (0);
var inst_32928 = (0);
var state_32984__$1 = (function (){var statearr_33012 = state_32984;
(statearr_33012[(12)] = inst_32925);

(statearr_33012[(13)] = inst_32928);

(statearr_33012[(14)] = inst_32926);

(statearr_33012[(15)] = inst_32927);

return statearr_33012;
})();
var statearr_33013_33058 = state_32984__$1;
(statearr_33013_33058[(2)] = null);

(statearr_33013_33058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (14))){
var state_32984__$1 = state_32984;
var statearr_33017_33059 = state_32984__$1;
(statearr_33017_33059[(2)] = null);

(statearr_33017_33059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (16))){
var inst_32939 = (state_32984[(10)]);
var inst_32943 = cljs.core.chunk_first.call(null,inst_32939);
var inst_32944 = cljs.core.chunk_rest.call(null,inst_32939);
var inst_32945 = cljs.core.count.call(null,inst_32943);
var inst_32925 = inst_32944;
var inst_32926 = inst_32943;
var inst_32927 = inst_32945;
var inst_32928 = (0);
var state_32984__$1 = (function (){var statearr_33018 = state_32984;
(statearr_33018[(12)] = inst_32925);

(statearr_33018[(13)] = inst_32928);

(statearr_33018[(14)] = inst_32926);

(statearr_33018[(15)] = inst_32927);

return statearr_33018;
})();
var statearr_33019_33060 = state_32984__$1;
(statearr_33019_33060[(2)] = null);

(statearr_33019_33060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (10))){
var inst_32925 = (state_32984[(12)]);
var inst_32928 = (state_32984[(13)]);
var inst_32926 = (state_32984[(14)]);
var inst_32927 = (state_32984[(15)]);
var inst_32933 = cljs.core._nth.call(null,inst_32926,inst_32928);
var inst_32934 = cljs.core.async.muxch_STAR_.call(null,inst_32933);
var inst_32935 = cljs.core.async.close_BANG_.call(null,inst_32934);
var inst_32936 = (inst_32928 + (1));
var tmp33014 = inst_32925;
var tmp33015 = inst_32926;
var tmp33016 = inst_32927;
var inst_32925__$1 = tmp33014;
var inst_32926__$1 = tmp33015;
var inst_32927__$1 = tmp33016;
var inst_32928__$1 = inst_32936;
var state_32984__$1 = (function (){var statearr_33020 = state_32984;
(statearr_33020[(17)] = inst_32935);

(statearr_33020[(12)] = inst_32925__$1);

(statearr_33020[(13)] = inst_32928__$1);

(statearr_33020[(14)] = inst_32926__$1);

(statearr_33020[(15)] = inst_32927__$1);

return statearr_33020;
})();
var statearr_33021_33061 = state_32984__$1;
(statearr_33021_33061[(2)] = null);

(statearr_33021_33061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (18))){
var inst_32954 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33022_33062 = state_32984__$1;
(statearr_33022_33062[(2)] = inst_32954);

(statearr_33022_33062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (8))){
var inst_32928 = (state_32984[(13)]);
var inst_32927 = (state_32984[(15)]);
var inst_32930 = (inst_32928 < inst_32927);
var inst_32931 = inst_32930;
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32931)){
var statearr_33023_33063 = state_32984__$1;
(statearr_33023_33063[(1)] = (10));

} else {
var statearr_33024_33064 = state_32984__$1;
(statearr_33024_33064[(1)] = (11));

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
});})(c__31087__auto___33036,mults,ensure_mult,p))
;
return ((function (switch__30975__auto__,c__31087__auto___33036,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33028[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33028[(1)] = (1));

return statearr_33028;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_32984){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_32984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33029){if((e33029 instanceof Object)){
var ex__30979__auto__ = e33029;
var statearr_33030_33065 = state_32984;
(statearr_33030_33065[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33066 = state_32984;
state_32984 = G__33066;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33036,mults,ensure_mult,p))
})();
var state__31089__auto__ = (function (){var statearr_33031 = f__31088__auto__.call(null);
(statearr_33031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33036);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33036,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33067 = [];
var len__27041__auto___33070 = arguments.length;
var i__27042__auto___33071 = (0);
while(true){
if((i__27042__auto___33071 < len__27041__auto___33070)){
args33067.push((arguments[i__27042__auto___33071]));

var G__33072 = (i__27042__auto___33071 + (1));
i__27042__auto___33071 = G__33072;
continue;
} else {
}
break;
}

var G__33069 = args33067.length;
switch (G__33069) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33067.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33074 = [];
var len__27041__auto___33077 = arguments.length;
var i__27042__auto___33078 = (0);
while(true){
if((i__27042__auto___33078 < len__27041__auto___33077)){
args33074.push((arguments[i__27042__auto___33078]));

var G__33079 = (i__27042__auto___33078 + (1));
i__27042__auto___33078 = G__33079;
continue;
} else {
}
break;
}

var G__33076 = args33074.length;
switch (G__33076) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33074.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33081 = [];
var len__27041__auto___33152 = arguments.length;
var i__27042__auto___33153 = (0);
while(true){
if((i__27042__auto___33153 < len__27041__auto___33152)){
args33081.push((arguments[i__27042__auto___33153]));

var G__33154 = (i__27042__auto___33153 + (1));
i__27042__auto___33153 = G__33154;
continue;
} else {
}
break;
}

var G__33083 = args33081.length;
switch (G__33083) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33081.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31087__auto___33156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var state_33122__$1 = state_33122;
var statearr_33124_33157 = state_33122__$1;
(statearr_33124_33157[(2)] = null);

(statearr_33124_33157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var state_33122__$1 = state_33122;
var statearr_33125_33158 = state_33122__$1;
(statearr_33125_33158[(2)] = null);

(statearr_33125_33158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33086 = (state_33122[(7)]);
var inst_33088 = (inst_33086 < cnt);
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33088)){
var statearr_33126_33159 = state_33122__$1;
(statearr_33126_33159[(1)] = (6));

} else {
var statearr_33127_33160 = state_33122__$1;
(statearr_33127_33160[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (15))){
var inst_33118 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33128_33161 = state_33122__$1;
(statearr_33128_33161[(2)] = inst_33118);

(statearr_33128_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (13))){
var inst_33111 = cljs.core.async.close_BANG_.call(null,out);
var state_33122__$1 = state_33122;
var statearr_33129_33162 = state_33122__$1;
(statearr_33129_33162[(2)] = inst_33111);

(statearr_33129_33162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var state_33122__$1 = state_33122;
var statearr_33130_33163 = state_33122__$1;
(statearr_33130_33163[(2)] = null);

(statearr_33130_33163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33120 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33122__$1,inst_33120);
} else {
if((state_val_33123 === (12))){
var inst_33108 = (state_33122[(8)]);
var inst_33108__$1 = (state_33122[(2)]);
var inst_33109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33108__$1);
var state_33122__$1 = (function (){var statearr_33131 = state_33122;
(statearr_33131[(8)] = inst_33108__$1);

return statearr_33131;
})();
if(cljs.core.truth_(inst_33109)){
var statearr_33132_33164 = state_33122__$1;
(statearr_33132_33164[(1)] = (13));

} else {
var statearr_33133_33165 = state_33122__$1;
(statearr_33133_33165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (2))){
var inst_33085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33086 = (0);
var state_33122__$1 = (function (){var statearr_33134 = state_33122;
(statearr_33134[(7)] = inst_33086);

(statearr_33134[(9)] = inst_33085);

return statearr_33134;
})();
var statearr_33135_33166 = state_33122__$1;
(statearr_33135_33166[(2)] = null);

(statearr_33135_33166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (11))){
var inst_33086 = (state_33122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33122,(10),Object,null,(9));
var inst_33095 = chs__$1.call(null,inst_33086);
var inst_33096 = done.call(null,inst_33086);
var inst_33097 = cljs.core.async.take_BANG_.call(null,inst_33095,inst_33096);
var state_33122__$1 = state_33122;
var statearr_33136_33167 = state_33122__$1;
(statearr_33136_33167[(2)] = inst_33097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (9))){
var inst_33086 = (state_33122[(7)]);
var inst_33099 = (state_33122[(2)]);
var inst_33100 = (inst_33086 + (1));
var inst_33086__$1 = inst_33100;
var state_33122__$1 = (function (){var statearr_33137 = state_33122;
(statearr_33137[(7)] = inst_33086__$1);

(statearr_33137[(10)] = inst_33099);

return statearr_33137;
})();
var statearr_33138_33168 = state_33122__$1;
(statearr_33138_33168[(2)] = null);

(statearr_33138_33168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (5))){
var inst_33106 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33139 = state_33122;
(statearr_33139[(11)] = inst_33106);

return statearr_33139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33122__$1,(12),dchan);
} else {
if((state_val_33123 === (14))){
var inst_33108 = (state_33122[(8)]);
var inst_33113 = cljs.core.apply.call(null,f,inst_33108);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33122__$1,(16),out,inst_33113);
} else {
if((state_val_33123 === (16))){
var inst_33115 = (state_33122[(2)]);
var state_33122__$1 = (function (){var statearr_33140 = state_33122;
(statearr_33140[(12)] = inst_33115);

return statearr_33140;
})();
var statearr_33141_33169 = state_33122__$1;
(statearr_33141_33169[(2)] = null);

(statearr_33141_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33090 = (state_33122[(2)]);
var inst_33091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33122__$1 = (function (){var statearr_33142 = state_33122;
(statearr_33142[(13)] = inst_33090);

return statearr_33142;
})();
var statearr_33143_33170 = state_33122__$1;
(statearr_33143_33170[(2)] = inst_33091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33104 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33144_33171 = state_33122__$1;
(statearr_33144_33171[(2)] = inst_33104);

(statearr_33144_33171[(1)] = (5));


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
});})(c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30975__auto__,c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33148[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33148[(1)] = (1));

return statearr_33148;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33122){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33149){if((e33149 instanceof Object)){
var ex__30979__auto__ = e33149;
var statearr_33150_33172 = state_33122;
(statearr_33150_33172[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33173 = state_33122;
state_33122 = G__33173;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31089__auto__ = (function (){var statearr_33151 = f__31088__auto__.call(null);
(statearr_33151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33156);

return statearr_33151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33156,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33175 = [];
var len__27041__auto___33233 = arguments.length;
var i__27042__auto___33234 = (0);
while(true){
if((i__27042__auto___33234 < len__27041__auto___33233)){
args33175.push((arguments[i__27042__auto___33234]));

var G__33235 = (i__27042__auto___33234 + (1));
i__27042__auto___33234 = G__33235;
continue;
} else {
}
break;
}

var G__33177 = args33175.length;
switch (G__33177) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33175.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33237,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33237,out){
return (function (state_33209){
var state_val_33210 = (state_33209[(1)]);
if((state_val_33210 === (7))){
var inst_33189 = (state_33209[(7)]);
var inst_33188 = (state_33209[(8)]);
var inst_33188__$1 = (state_33209[(2)]);
var inst_33189__$1 = cljs.core.nth.call(null,inst_33188__$1,(0),null);
var inst_33190 = cljs.core.nth.call(null,inst_33188__$1,(1),null);
var inst_33191 = (inst_33189__$1 == null);
var state_33209__$1 = (function (){var statearr_33211 = state_33209;
(statearr_33211[(7)] = inst_33189__$1);

(statearr_33211[(8)] = inst_33188__$1);

(statearr_33211[(9)] = inst_33190);

return statearr_33211;
})();
if(cljs.core.truth_(inst_33191)){
var statearr_33212_33238 = state_33209__$1;
(statearr_33212_33238[(1)] = (8));

} else {
var statearr_33213_33239 = state_33209__$1;
(statearr_33213_33239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (1))){
var inst_33178 = cljs.core.vec.call(null,chs);
var inst_33179 = inst_33178;
var state_33209__$1 = (function (){var statearr_33214 = state_33209;
(statearr_33214[(10)] = inst_33179);

return statearr_33214;
})();
var statearr_33215_33240 = state_33209__$1;
(statearr_33215_33240[(2)] = null);

(statearr_33215_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (4))){
var inst_33179 = (state_33209[(10)]);
var state_33209__$1 = state_33209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33209__$1,(7),inst_33179);
} else {
if((state_val_33210 === (6))){
var inst_33205 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33216_33241 = state_33209__$1;
(statearr_33216_33241[(2)] = inst_33205);

(statearr_33216_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (3))){
var inst_33207 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33209__$1,inst_33207);
} else {
if((state_val_33210 === (2))){
var inst_33179 = (state_33209[(10)]);
var inst_33181 = cljs.core.count.call(null,inst_33179);
var inst_33182 = (inst_33181 > (0));
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33182)){
var statearr_33218_33242 = state_33209__$1;
(statearr_33218_33242[(1)] = (4));

} else {
var statearr_33219_33243 = state_33209__$1;
(statearr_33219_33243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (11))){
var inst_33179 = (state_33209[(10)]);
var inst_33198 = (state_33209[(2)]);
var tmp33217 = inst_33179;
var inst_33179__$1 = tmp33217;
var state_33209__$1 = (function (){var statearr_33220 = state_33209;
(statearr_33220[(10)] = inst_33179__$1);

(statearr_33220[(11)] = inst_33198);

return statearr_33220;
})();
var statearr_33221_33244 = state_33209__$1;
(statearr_33221_33244[(2)] = null);

(statearr_33221_33244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (9))){
var inst_33189 = (state_33209[(7)]);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33209__$1,(11),out,inst_33189);
} else {
if((state_val_33210 === (5))){
var inst_33203 = cljs.core.async.close_BANG_.call(null,out);
var state_33209__$1 = state_33209;
var statearr_33222_33245 = state_33209__$1;
(statearr_33222_33245[(2)] = inst_33203);

(statearr_33222_33245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (10))){
var inst_33201 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33223_33246 = state_33209__$1;
(statearr_33223_33246[(2)] = inst_33201);

(statearr_33223_33246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (8))){
var inst_33179 = (state_33209[(10)]);
var inst_33189 = (state_33209[(7)]);
var inst_33188 = (state_33209[(8)]);
var inst_33190 = (state_33209[(9)]);
var inst_33193 = (function (){var cs = inst_33179;
var vec__33184 = inst_33188;
var v = inst_33189;
var c = inst_33190;
return ((function (cs,vec__33184,v,c,inst_33179,inst_33189,inst_33188,inst_33190,state_val_33210,c__31087__auto___33237,out){
return (function (p1__33174_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33174_SHARP_);
});
;})(cs,vec__33184,v,c,inst_33179,inst_33189,inst_33188,inst_33190,state_val_33210,c__31087__auto___33237,out))
})();
var inst_33194 = cljs.core.filterv.call(null,inst_33193,inst_33179);
var inst_33179__$1 = inst_33194;
var state_33209__$1 = (function (){var statearr_33224 = state_33209;
(statearr_33224[(10)] = inst_33179__$1);

return statearr_33224;
})();
var statearr_33225_33247 = state_33209__$1;
(statearr_33225_33247[(2)] = null);

(statearr_33225_33247[(1)] = (2));


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
});})(c__31087__auto___33237,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33237,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33229[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33229[(1)] = (1));

return statearr_33229;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33209){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33230){if((e33230 instanceof Object)){
var ex__30979__auto__ = e33230;
var statearr_33231_33248 = state_33209;
(statearr_33231_33248[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_33209;
state_33209 = G__33249;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33237,out))
})();
var state__31089__auto__ = (function (){var statearr_33232 = f__31088__auto__.call(null);
(statearr_33232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33237);

return statearr_33232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33237,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33250 = [];
var len__27041__auto___33299 = arguments.length;
var i__27042__auto___33300 = (0);
while(true){
if((i__27042__auto___33300 < len__27041__auto___33299)){
args33250.push((arguments[i__27042__auto___33300]));

var G__33301 = (i__27042__auto___33300 + (1));
i__27042__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var G__33252 = args33250.length;
switch (G__33252) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33250.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33303,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33303,out){
return (function (state_33276){
var state_val_33277 = (state_33276[(1)]);
if((state_val_33277 === (7))){
var inst_33258 = (state_33276[(7)]);
var inst_33258__$1 = (state_33276[(2)]);
var inst_33259 = (inst_33258__$1 == null);
var inst_33260 = cljs.core.not.call(null,inst_33259);
var state_33276__$1 = (function (){var statearr_33278 = state_33276;
(statearr_33278[(7)] = inst_33258__$1);

return statearr_33278;
})();
if(inst_33260){
var statearr_33279_33304 = state_33276__$1;
(statearr_33279_33304[(1)] = (8));

} else {
var statearr_33280_33305 = state_33276__$1;
(statearr_33280_33305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (1))){
var inst_33253 = (0);
var state_33276__$1 = (function (){var statearr_33281 = state_33276;
(statearr_33281[(8)] = inst_33253);

return statearr_33281;
})();
var statearr_33282_33306 = state_33276__$1;
(statearr_33282_33306[(2)] = null);

(statearr_33282_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (4))){
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33276__$1,(7),ch);
} else {
if((state_val_33277 === (6))){
var inst_33271 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33283_33307 = state_33276__$1;
(statearr_33283_33307[(2)] = inst_33271);

(statearr_33283_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (3))){
var inst_33273 = (state_33276[(2)]);
var inst_33274 = cljs.core.async.close_BANG_.call(null,out);
var state_33276__$1 = (function (){var statearr_33284 = state_33276;
(statearr_33284[(9)] = inst_33273);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33276__$1,inst_33274);
} else {
if((state_val_33277 === (2))){
var inst_33253 = (state_33276[(8)]);
var inst_33255 = (inst_33253 < n);
var state_33276__$1 = state_33276;
if(cljs.core.truth_(inst_33255)){
var statearr_33285_33308 = state_33276__$1;
(statearr_33285_33308[(1)] = (4));

} else {
var statearr_33286_33309 = state_33276__$1;
(statearr_33286_33309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (11))){
var inst_33253 = (state_33276[(8)]);
var inst_33263 = (state_33276[(2)]);
var inst_33264 = (inst_33253 + (1));
var inst_33253__$1 = inst_33264;
var state_33276__$1 = (function (){var statearr_33287 = state_33276;
(statearr_33287[(10)] = inst_33263);

(statearr_33287[(8)] = inst_33253__$1);

return statearr_33287;
})();
var statearr_33288_33310 = state_33276__$1;
(statearr_33288_33310[(2)] = null);

(statearr_33288_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (9))){
var state_33276__$1 = state_33276;
var statearr_33289_33311 = state_33276__$1;
(statearr_33289_33311[(2)] = null);

(statearr_33289_33311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (5))){
var state_33276__$1 = state_33276;
var statearr_33290_33312 = state_33276__$1;
(statearr_33290_33312[(2)] = null);

(statearr_33290_33312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (10))){
var inst_33268 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33291_33313 = state_33276__$1;
(statearr_33291_33313[(2)] = inst_33268);

(statearr_33291_33313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (8))){
var inst_33258 = (state_33276[(7)]);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33276__$1,(11),out,inst_33258);
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
});})(c__31087__auto___33303,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33303,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33295[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33295[(1)] = (1));

return statearr_33295;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33276){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33296){if((e33296 instanceof Object)){
var ex__30979__auto__ = e33296;
var statearr_33297_33314 = state_33276;
(statearr_33297_33314[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_33276;
state_33276 = G__33315;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33303,out))
})();
var state__31089__auto__ = (function (){var statearr_33298 = f__31088__auto__.call(null);
(statearr_33298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33303);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33303,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33323 = (function (map_LT_,f,ch,meta33324){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33324 = meta33324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33325,meta33324__$1){
var self__ = this;
var _33325__$1 = this;
return (new cljs.core.async.t_cljs$core$async33323(self__.map_LT_,self__.f,self__.ch,meta33324__$1));
});

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33325){
var self__ = this;
var _33325__$1 = this;
return self__.meta33324;
});

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33326 = (function (map_LT_,f,ch,meta33324,_,fn1,meta33327){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33324 = meta33324;
this._ = _;
this.fn1 = fn1;
this.meta33327 = meta33327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33328,meta33327__$1){
var self__ = this;
var _33328__$1 = this;
return (new cljs.core.async.t_cljs$core$async33326(self__.map_LT_,self__.f,self__.ch,self__.meta33324,self__._,self__.fn1,meta33327__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33328){
var self__ = this;
var _33328__$1 = this;
return self__.meta33327;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33316_SHARP_){
return f1.call(null,(((p1__33316_SHARP_ == null))?null:self__.f.call(null,p1__33316_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33324","meta33324",1087743622,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33323","cljs.core.async/t_cljs$core$async33323",1612482896,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33327","meta33327",-86876308,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33326";

cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async33326");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33326 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33326(map_LT___$1,f__$1,ch__$1,meta33324__$1,___$2,fn1__$1,meta33327){
return (new cljs.core.async.t_cljs$core$async33326(map_LT___$1,f__$1,ch__$1,meta33324__$1,___$2,fn1__$1,meta33327));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33326(self__.map_LT_,self__.f,self__.ch,self__.meta33324,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25954__auto__ = ret;
if(cljs.core.truth_(and__25954__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25954__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33324","meta33324",1087743622,null)], null);
});

cljs.core.async.t_cljs$core$async33323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33323";

cljs.core.async.t_cljs$core$async33323.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async33323");
});

cljs.core.async.__GT_t_cljs$core$async33323 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33323(map_LT___$1,f__$1,ch__$1,meta33324){
return (new cljs.core.async.t_cljs$core$async33323(map_LT___$1,f__$1,ch__$1,meta33324));
});

}

return (new cljs.core.async.t_cljs$core$async33323(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33332 = (function (map_GT_,f,ch,meta33333){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33333 = meta33333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33334,meta33333__$1){
var self__ = this;
var _33334__$1 = this;
return (new cljs.core.async.t_cljs$core$async33332(self__.map_GT_,self__.f,self__.ch,meta33333__$1));
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33334){
var self__ = this;
var _33334__$1 = this;
return self__.meta33333;
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33333","meta33333",-485470116,null)], null);
});

cljs.core.async.t_cljs$core$async33332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33332";

cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async33332");
});

cljs.core.async.__GT_t_cljs$core$async33332 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33332(map_GT___$1,f__$1,ch__$1,meta33333){
return (new cljs.core.async.t_cljs$core$async33332(map_GT___$1,f__$1,ch__$1,meta33333));
});

}

return (new cljs.core.async.t_cljs$core$async33332(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33338 = (function (filter_GT_,p,ch,meta33339){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33339 = meta33339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33340,meta33339__$1){
var self__ = this;
var _33340__$1 = this;
return (new cljs.core.async.t_cljs$core$async33338(self__.filter_GT_,self__.p,self__.ch,meta33339__$1));
});

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33340){
var self__ = this;
var _33340__$1 = this;
return self__.meta33339;
});

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33339","meta33339",-2089071992,null)], null);
});

cljs.core.async.t_cljs$core$async33338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33338";

cljs.core.async.t_cljs$core$async33338.cljs$lang$ctorPrWriter = (function (this__26572__auto__,writer__26573__auto__,opt__26574__auto__){
return cljs.core._write.call(null,writer__26573__auto__,"cljs.core.async/t_cljs$core$async33338");
});

cljs.core.async.__GT_t_cljs$core$async33338 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33338(filter_GT___$1,p__$1,ch__$1,meta33339){
return (new cljs.core.async.t_cljs$core$async33338(filter_GT___$1,p__$1,ch__$1,meta33339));
});

}

return (new cljs.core.async.t_cljs$core$async33338(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33341 = [];
var len__27041__auto___33385 = arguments.length;
var i__27042__auto___33386 = (0);
while(true){
if((i__27042__auto___33386 < len__27041__auto___33385)){
args33341.push((arguments[i__27042__auto___33386]));

var G__33387 = (i__27042__auto___33386 + (1));
i__27042__auto___33386 = G__33387;
continue;
} else {
}
break;
}

var G__33343 = args33341.length;
switch (G__33343) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33341.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33389,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33389,out){
return (function (state_33364){
var state_val_33365 = (state_33364[(1)]);
if((state_val_33365 === (7))){
var inst_33360 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33366_33390 = state_33364__$1;
(statearr_33366_33390[(2)] = inst_33360);

(statearr_33366_33390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (1))){
var state_33364__$1 = state_33364;
var statearr_33367_33391 = state_33364__$1;
(statearr_33367_33391[(2)] = null);

(statearr_33367_33391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (4))){
var inst_33346 = (state_33364[(7)]);
var inst_33346__$1 = (state_33364[(2)]);
var inst_33347 = (inst_33346__$1 == null);
var state_33364__$1 = (function (){var statearr_33368 = state_33364;
(statearr_33368[(7)] = inst_33346__$1);

return statearr_33368;
})();
if(cljs.core.truth_(inst_33347)){
var statearr_33369_33392 = state_33364__$1;
(statearr_33369_33392[(1)] = (5));

} else {
var statearr_33370_33393 = state_33364__$1;
(statearr_33370_33393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (6))){
var inst_33346 = (state_33364[(7)]);
var inst_33351 = p.call(null,inst_33346);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33351)){
var statearr_33371_33394 = state_33364__$1;
(statearr_33371_33394[(1)] = (8));

} else {
var statearr_33372_33395 = state_33364__$1;
(statearr_33372_33395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (3))){
var inst_33362 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33364__$1,inst_33362);
} else {
if((state_val_33365 === (2))){
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(4),ch);
} else {
if((state_val_33365 === (11))){
var inst_33354 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33373_33396 = state_33364__$1;
(statearr_33373_33396[(2)] = inst_33354);

(statearr_33373_33396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (9))){
var state_33364__$1 = state_33364;
var statearr_33374_33397 = state_33364__$1;
(statearr_33374_33397[(2)] = null);

(statearr_33374_33397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (5))){
var inst_33349 = cljs.core.async.close_BANG_.call(null,out);
var state_33364__$1 = state_33364;
var statearr_33375_33398 = state_33364__$1;
(statearr_33375_33398[(2)] = inst_33349);

(statearr_33375_33398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (10))){
var inst_33357 = (state_33364[(2)]);
var state_33364__$1 = (function (){var statearr_33376 = state_33364;
(statearr_33376[(8)] = inst_33357);

return statearr_33376;
})();
var statearr_33377_33399 = state_33364__$1;
(statearr_33377_33399[(2)] = null);

(statearr_33377_33399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (8))){
var inst_33346 = (state_33364[(7)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33364__$1,(11),out,inst_33346);
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
});})(c__31087__auto___33389,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33389,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33381 = [null,null,null,null,null,null,null,null,null];
(statearr_33381[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33381[(1)] = (1));

return statearr_33381;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33364){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33382){if((e33382 instanceof Object)){
var ex__30979__auto__ = e33382;
var statearr_33383_33400 = state_33364;
(statearr_33383_33400[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33401 = state_33364;
state_33364 = G__33401;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33389,out))
})();
var state__31089__auto__ = (function (){var statearr_33384 = f__31088__auto__.call(null);
(statearr_33384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33389);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33389,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33402 = [];
var len__27041__auto___33405 = arguments.length;
var i__27042__auto___33406 = (0);
while(true){
if((i__27042__auto___33406 < len__27041__auto___33405)){
args33402.push((arguments[i__27042__auto___33406]));

var G__33407 = (i__27042__auto___33406 + (1));
i__27042__auto___33406 = G__33407;
continue;
} else {
}
break;
}

var G__33404 = args33402.length;
switch (G__33404) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33402.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__){
return (function (state_33574){
var state_val_33575 = (state_33574[(1)]);
if((state_val_33575 === (7))){
var inst_33570 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
var statearr_33576_33617 = state_33574__$1;
(statearr_33576_33617[(2)] = inst_33570);

(statearr_33576_33617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (20))){
var inst_33540 = (state_33574[(7)]);
var inst_33551 = (state_33574[(2)]);
var inst_33552 = cljs.core.next.call(null,inst_33540);
var inst_33526 = inst_33552;
var inst_33527 = null;
var inst_33528 = (0);
var inst_33529 = (0);
var state_33574__$1 = (function (){var statearr_33577 = state_33574;
(statearr_33577[(8)] = inst_33551);

(statearr_33577[(9)] = inst_33526);

(statearr_33577[(10)] = inst_33527);

(statearr_33577[(11)] = inst_33528);

(statearr_33577[(12)] = inst_33529);

return statearr_33577;
})();
var statearr_33578_33618 = state_33574__$1;
(statearr_33578_33618[(2)] = null);

(statearr_33578_33618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (1))){
var state_33574__$1 = state_33574;
var statearr_33579_33619 = state_33574__$1;
(statearr_33579_33619[(2)] = null);

(statearr_33579_33619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (4))){
var inst_33515 = (state_33574[(13)]);
var inst_33515__$1 = (state_33574[(2)]);
var inst_33516 = (inst_33515__$1 == null);
var state_33574__$1 = (function (){var statearr_33580 = state_33574;
(statearr_33580[(13)] = inst_33515__$1);

return statearr_33580;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33581_33620 = state_33574__$1;
(statearr_33581_33620[(1)] = (5));

} else {
var statearr_33582_33621 = state_33574__$1;
(statearr_33582_33621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (15))){
var state_33574__$1 = state_33574;
var statearr_33586_33622 = state_33574__$1;
(statearr_33586_33622[(2)] = null);

(statearr_33586_33622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (21))){
var state_33574__$1 = state_33574;
var statearr_33587_33623 = state_33574__$1;
(statearr_33587_33623[(2)] = null);

(statearr_33587_33623[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (13))){
var inst_33526 = (state_33574[(9)]);
var inst_33527 = (state_33574[(10)]);
var inst_33528 = (state_33574[(11)]);
var inst_33529 = (state_33574[(12)]);
var inst_33536 = (state_33574[(2)]);
var inst_33537 = (inst_33529 + (1));
var tmp33583 = inst_33526;
var tmp33584 = inst_33527;
var tmp33585 = inst_33528;
var inst_33526__$1 = tmp33583;
var inst_33527__$1 = tmp33584;
var inst_33528__$1 = tmp33585;
var inst_33529__$1 = inst_33537;
var state_33574__$1 = (function (){var statearr_33588 = state_33574;
(statearr_33588[(9)] = inst_33526__$1);

(statearr_33588[(14)] = inst_33536);

(statearr_33588[(10)] = inst_33527__$1);

(statearr_33588[(11)] = inst_33528__$1);

(statearr_33588[(12)] = inst_33529__$1);

return statearr_33588;
})();
var statearr_33589_33624 = state_33574__$1;
(statearr_33589_33624[(2)] = null);

(statearr_33589_33624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (22))){
var state_33574__$1 = state_33574;
var statearr_33590_33625 = state_33574__$1;
(statearr_33590_33625[(2)] = null);

(statearr_33590_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (6))){
var inst_33515 = (state_33574[(13)]);
var inst_33524 = f.call(null,inst_33515);
var inst_33525 = cljs.core.seq.call(null,inst_33524);
var inst_33526 = inst_33525;
var inst_33527 = null;
var inst_33528 = (0);
var inst_33529 = (0);
var state_33574__$1 = (function (){var statearr_33591 = state_33574;
(statearr_33591[(9)] = inst_33526);

(statearr_33591[(10)] = inst_33527);

(statearr_33591[(11)] = inst_33528);

(statearr_33591[(12)] = inst_33529);

return statearr_33591;
})();
var statearr_33592_33626 = state_33574__$1;
(statearr_33592_33626[(2)] = null);

(statearr_33592_33626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (17))){
var inst_33540 = (state_33574[(7)]);
var inst_33544 = cljs.core.chunk_first.call(null,inst_33540);
var inst_33545 = cljs.core.chunk_rest.call(null,inst_33540);
var inst_33546 = cljs.core.count.call(null,inst_33544);
var inst_33526 = inst_33545;
var inst_33527 = inst_33544;
var inst_33528 = inst_33546;
var inst_33529 = (0);
var state_33574__$1 = (function (){var statearr_33593 = state_33574;
(statearr_33593[(9)] = inst_33526);

(statearr_33593[(10)] = inst_33527);

(statearr_33593[(11)] = inst_33528);

(statearr_33593[(12)] = inst_33529);

return statearr_33593;
})();
var statearr_33594_33627 = state_33574__$1;
(statearr_33594_33627[(2)] = null);

(statearr_33594_33627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (3))){
var inst_33572 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33574__$1,inst_33572);
} else {
if((state_val_33575 === (12))){
var inst_33560 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
var statearr_33595_33628 = state_33574__$1;
(statearr_33595_33628[(2)] = inst_33560);

(statearr_33595_33628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (2))){
var state_33574__$1 = state_33574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33574__$1,(4),in$);
} else {
if((state_val_33575 === (23))){
var inst_33568 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
var statearr_33596_33629 = state_33574__$1;
(statearr_33596_33629[(2)] = inst_33568);

(statearr_33596_33629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (19))){
var inst_33555 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
var statearr_33597_33630 = state_33574__$1;
(statearr_33597_33630[(2)] = inst_33555);

(statearr_33597_33630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (11))){
var inst_33540 = (state_33574[(7)]);
var inst_33526 = (state_33574[(9)]);
var inst_33540__$1 = cljs.core.seq.call(null,inst_33526);
var state_33574__$1 = (function (){var statearr_33598 = state_33574;
(statearr_33598[(7)] = inst_33540__$1);

return statearr_33598;
})();
if(inst_33540__$1){
var statearr_33599_33631 = state_33574__$1;
(statearr_33599_33631[(1)] = (14));

} else {
var statearr_33600_33632 = state_33574__$1;
(statearr_33600_33632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (9))){
var inst_33562 = (state_33574[(2)]);
var inst_33563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33574__$1 = (function (){var statearr_33601 = state_33574;
(statearr_33601[(15)] = inst_33562);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33563)){
var statearr_33602_33633 = state_33574__$1;
(statearr_33602_33633[(1)] = (21));

} else {
var statearr_33603_33634 = state_33574__$1;
(statearr_33603_33634[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (5))){
var inst_33518 = cljs.core.async.close_BANG_.call(null,out);
var state_33574__$1 = state_33574;
var statearr_33604_33635 = state_33574__$1;
(statearr_33604_33635[(2)] = inst_33518);

(statearr_33604_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (14))){
var inst_33540 = (state_33574[(7)]);
var inst_33542 = cljs.core.chunked_seq_QMARK_.call(null,inst_33540);
var state_33574__$1 = state_33574;
if(inst_33542){
var statearr_33605_33636 = state_33574__$1;
(statearr_33605_33636[(1)] = (17));

} else {
var statearr_33606_33637 = state_33574__$1;
(statearr_33606_33637[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (16))){
var inst_33558 = (state_33574[(2)]);
var state_33574__$1 = state_33574;
var statearr_33607_33638 = state_33574__$1;
(statearr_33607_33638[(2)] = inst_33558);

(statearr_33607_33638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33575 === (10))){
var inst_33527 = (state_33574[(10)]);
var inst_33529 = (state_33574[(12)]);
var inst_33534 = cljs.core._nth.call(null,inst_33527,inst_33529);
var state_33574__$1 = state_33574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33574__$1,(13),out,inst_33534);
} else {
if((state_val_33575 === (18))){
var inst_33540 = (state_33574[(7)]);
var inst_33549 = cljs.core.first.call(null,inst_33540);
var state_33574__$1 = state_33574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33574__$1,(20),out,inst_33549);
} else {
if((state_val_33575 === (8))){
var inst_33528 = (state_33574[(11)]);
var inst_33529 = (state_33574[(12)]);
var inst_33531 = (inst_33529 < inst_33528);
var inst_33532 = inst_33531;
var state_33574__$1 = state_33574;
if(cljs.core.truth_(inst_33532)){
var statearr_33608_33639 = state_33574__$1;
(statearr_33608_33639[(1)] = (10));

} else {
var statearr_33609_33640 = state_33574__$1;
(statearr_33609_33640[(1)] = (11));

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
});})(c__31087__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____0 = (function (){
var statearr_33613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33613[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__);

(statearr_33613[(1)] = (1));

return statearr_33613;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____1 = (function (state_33574){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33614){if((e33614 instanceof Object)){
var ex__30979__auto__ = e33614;
var statearr_33615_33641 = state_33574;
(statearr_33615_33641[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_33574;
state_33574 = G__33642;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__ = function(state_33574){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____1.call(this,state_33574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30976__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_33616 = f__31088__auto__.call(null);
(statearr_33616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_33616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33643 = [];
var len__27041__auto___33646 = arguments.length;
var i__27042__auto___33647 = (0);
while(true){
if((i__27042__auto___33647 < len__27041__auto___33646)){
args33643.push((arguments[i__27042__auto___33647]));

var G__33648 = (i__27042__auto___33647 + (1));
i__27042__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var G__33645 = args33643.length;
switch (G__33645) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33643.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33650 = [];
var len__27041__auto___33653 = arguments.length;
var i__27042__auto___33654 = (0);
while(true){
if((i__27042__auto___33654 < len__27041__auto___33653)){
args33650.push((arguments[i__27042__auto___33654]));

var G__33655 = (i__27042__auto___33654 + (1));
i__27042__auto___33654 = G__33655;
continue;
} else {
}
break;
}

var G__33652 = args33650.length;
switch (G__33652) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33650.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33657 = [];
var len__27041__auto___33708 = arguments.length;
var i__27042__auto___33709 = (0);
while(true){
if((i__27042__auto___33709 < len__27041__auto___33708)){
args33657.push((arguments[i__27042__auto___33709]));

var G__33710 = (i__27042__auto___33709 + (1));
i__27042__auto___33709 = G__33710;
continue;
} else {
}
break;
}

var G__33659 = args33657.length;
switch (G__33659) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33657.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33712,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33712,out){
return (function (state_33683){
var state_val_33684 = (state_33683[(1)]);
if((state_val_33684 === (7))){
var inst_33678 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33685_33713 = state_33683__$1;
(statearr_33685_33713[(2)] = inst_33678);

(statearr_33685_33713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (1))){
var inst_33660 = null;
var state_33683__$1 = (function (){var statearr_33686 = state_33683;
(statearr_33686[(7)] = inst_33660);

return statearr_33686;
})();
var statearr_33687_33714 = state_33683__$1;
(statearr_33687_33714[(2)] = null);

(statearr_33687_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (4))){
var inst_33663 = (state_33683[(8)]);
var inst_33663__$1 = (state_33683[(2)]);
var inst_33664 = (inst_33663__$1 == null);
var inst_33665 = cljs.core.not.call(null,inst_33664);
var state_33683__$1 = (function (){var statearr_33688 = state_33683;
(statearr_33688[(8)] = inst_33663__$1);

return statearr_33688;
})();
if(inst_33665){
var statearr_33689_33715 = state_33683__$1;
(statearr_33689_33715[(1)] = (5));

} else {
var statearr_33690_33716 = state_33683__$1;
(statearr_33690_33716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (6))){
var state_33683__$1 = state_33683;
var statearr_33691_33717 = state_33683__$1;
(statearr_33691_33717[(2)] = null);

(statearr_33691_33717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (3))){
var inst_33680 = (state_33683[(2)]);
var inst_33681 = cljs.core.async.close_BANG_.call(null,out);
var state_33683__$1 = (function (){var statearr_33692 = state_33683;
(statearr_33692[(9)] = inst_33680);

return statearr_33692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else {
if((state_val_33684 === (2))){
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,(4),ch);
} else {
if((state_val_33684 === (11))){
var inst_33663 = (state_33683[(8)]);
var inst_33672 = (state_33683[(2)]);
var inst_33660 = inst_33663;
var state_33683__$1 = (function (){var statearr_33693 = state_33683;
(statearr_33693[(7)] = inst_33660);

(statearr_33693[(10)] = inst_33672);

return statearr_33693;
})();
var statearr_33694_33718 = state_33683__$1;
(statearr_33694_33718[(2)] = null);

(statearr_33694_33718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (9))){
var inst_33663 = (state_33683[(8)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33683__$1,(11),out,inst_33663);
} else {
if((state_val_33684 === (5))){
var inst_33663 = (state_33683[(8)]);
var inst_33660 = (state_33683[(7)]);
var inst_33667 = cljs.core._EQ_.call(null,inst_33663,inst_33660);
var state_33683__$1 = state_33683;
if(inst_33667){
var statearr_33696_33719 = state_33683__$1;
(statearr_33696_33719[(1)] = (8));

} else {
var statearr_33697_33720 = state_33683__$1;
(statearr_33697_33720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (10))){
var inst_33675 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33698_33721 = state_33683__$1;
(statearr_33698_33721[(2)] = inst_33675);

(statearr_33698_33721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (8))){
var inst_33660 = (state_33683[(7)]);
var tmp33695 = inst_33660;
var inst_33660__$1 = tmp33695;
var state_33683__$1 = (function (){var statearr_33699 = state_33683;
(statearr_33699[(7)] = inst_33660__$1);

return statearr_33699;
})();
var statearr_33700_33722 = state_33683__$1;
(statearr_33700_33722[(2)] = null);

(statearr_33700_33722[(1)] = (2));


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
});})(c__31087__auto___33712,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33712,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33683){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__30979__auto__ = e33705;
var statearr_33706_33723 = state_33683;
(statearr_33706_33723[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33724 = state_33683;
state_33683 = G__33724;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33712,out))
})();
var state__31089__auto__ = (function (){var statearr_33707 = f__31088__auto__.call(null);
(statearr_33707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33712);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33712,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33725 = [];
var len__27041__auto___33795 = arguments.length;
var i__27042__auto___33796 = (0);
while(true){
if((i__27042__auto___33796 < len__27041__auto___33795)){
args33725.push((arguments[i__27042__auto___33796]));

var G__33797 = (i__27042__auto___33796 + (1));
i__27042__auto___33796 = G__33797;
continue;
} else {
}
break;
}

var G__33727 = args33725.length;
switch (G__33727) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33725.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33799,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33799,out){
return (function (state_33765){
var state_val_33766 = (state_33765[(1)]);
if((state_val_33766 === (7))){
var inst_33761 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33767_33800 = state_33765__$1;
(statearr_33767_33800[(2)] = inst_33761);

(statearr_33767_33800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (1))){
var inst_33728 = (new Array(n));
var inst_33729 = inst_33728;
var inst_33730 = (0);
var state_33765__$1 = (function (){var statearr_33768 = state_33765;
(statearr_33768[(7)] = inst_33730);

(statearr_33768[(8)] = inst_33729);

return statearr_33768;
})();
var statearr_33769_33801 = state_33765__$1;
(statearr_33769_33801[(2)] = null);

(statearr_33769_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (4))){
var inst_33733 = (state_33765[(9)]);
var inst_33733__$1 = (state_33765[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var inst_33735 = cljs.core.not.call(null,inst_33734);
var state_33765__$1 = (function (){var statearr_33770 = state_33765;
(statearr_33770[(9)] = inst_33733__$1);

return statearr_33770;
})();
if(inst_33735){
var statearr_33771_33802 = state_33765__$1;
(statearr_33771_33802[(1)] = (5));

} else {
var statearr_33772_33803 = state_33765__$1;
(statearr_33772_33803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (15))){
var inst_33755 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33773_33804 = state_33765__$1;
(statearr_33773_33804[(2)] = inst_33755);

(statearr_33773_33804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (13))){
var state_33765__$1 = state_33765;
var statearr_33774_33805 = state_33765__$1;
(statearr_33774_33805[(2)] = null);

(statearr_33774_33805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (6))){
var inst_33730 = (state_33765[(7)]);
var inst_33751 = (inst_33730 > (0));
var state_33765__$1 = state_33765;
if(cljs.core.truth_(inst_33751)){
var statearr_33775_33806 = state_33765__$1;
(statearr_33775_33806[(1)] = (12));

} else {
var statearr_33776_33807 = state_33765__$1;
(statearr_33776_33807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (3))){
var inst_33763 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33765__$1,inst_33763);
} else {
if((state_val_33766 === (12))){
var inst_33729 = (state_33765[(8)]);
var inst_33753 = cljs.core.vec.call(null,inst_33729);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33765__$1,(15),out,inst_33753);
} else {
if((state_val_33766 === (2))){
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33765__$1,(4),ch);
} else {
if((state_val_33766 === (11))){
var inst_33745 = (state_33765[(2)]);
var inst_33746 = (new Array(n));
var inst_33729 = inst_33746;
var inst_33730 = (0);
var state_33765__$1 = (function (){var statearr_33777 = state_33765;
(statearr_33777[(10)] = inst_33745);

(statearr_33777[(7)] = inst_33730);

(statearr_33777[(8)] = inst_33729);

return statearr_33777;
})();
var statearr_33778_33808 = state_33765__$1;
(statearr_33778_33808[(2)] = null);

(statearr_33778_33808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (9))){
var inst_33729 = (state_33765[(8)]);
var inst_33743 = cljs.core.vec.call(null,inst_33729);
var state_33765__$1 = state_33765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33765__$1,(11),out,inst_33743);
} else {
if((state_val_33766 === (5))){
var inst_33738 = (state_33765[(11)]);
var inst_33733 = (state_33765[(9)]);
var inst_33730 = (state_33765[(7)]);
var inst_33729 = (state_33765[(8)]);
var inst_33737 = (inst_33729[inst_33730] = inst_33733);
var inst_33738__$1 = (inst_33730 + (1));
var inst_33739 = (inst_33738__$1 < n);
var state_33765__$1 = (function (){var statearr_33779 = state_33765;
(statearr_33779[(11)] = inst_33738__$1);

(statearr_33779[(12)] = inst_33737);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33739)){
var statearr_33780_33809 = state_33765__$1;
(statearr_33780_33809[(1)] = (8));

} else {
var statearr_33781_33810 = state_33765__$1;
(statearr_33781_33810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (14))){
var inst_33758 = (state_33765[(2)]);
var inst_33759 = cljs.core.async.close_BANG_.call(null,out);
var state_33765__$1 = (function (){var statearr_33783 = state_33765;
(statearr_33783[(13)] = inst_33758);

return statearr_33783;
})();
var statearr_33784_33811 = state_33765__$1;
(statearr_33784_33811[(2)] = inst_33759);

(statearr_33784_33811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (10))){
var inst_33749 = (state_33765[(2)]);
var state_33765__$1 = state_33765;
var statearr_33785_33812 = state_33765__$1;
(statearr_33785_33812[(2)] = inst_33749);

(statearr_33785_33812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33766 === (8))){
var inst_33738 = (state_33765[(11)]);
var inst_33729 = (state_33765[(8)]);
var tmp33782 = inst_33729;
var inst_33729__$1 = tmp33782;
var inst_33730 = inst_33738;
var state_33765__$1 = (function (){var statearr_33786 = state_33765;
(statearr_33786[(7)] = inst_33730);

(statearr_33786[(8)] = inst_33729__$1);

return statearr_33786;
})();
var statearr_33787_33813 = state_33765__$1;
(statearr_33787_33813[(2)] = null);

(statearr_33787_33813[(1)] = (2));


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
});})(c__31087__auto___33799,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33799,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33791[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33791[(1)] = (1));

return statearr_33791;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33765){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33792){if((e33792 instanceof Object)){
var ex__30979__auto__ = e33792;
var statearr_33793_33814 = state_33765;
(statearr_33793_33814[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33815 = state_33765;
state_33765 = G__33815;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33799,out))
})();
var state__31089__auto__ = (function (){var statearr_33794 = f__31088__auto__.call(null);
(statearr_33794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33799);

return statearr_33794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33799,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33816 = [];
var len__27041__auto___33890 = arguments.length;
var i__27042__auto___33891 = (0);
while(true){
if((i__27042__auto___33891 < len__27041__auto___33890)){
args33816.push((arguments[i__27042__auto___33891]));

var G__33892 = (i__27042__auto___33891 + (1));
i__27042__auto___33891 = G__33892;
continue;
} else {
}
break;
}

var G__33818 = args33816.length;
switch (G__33818) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33816.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31087__auto___33894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___33894,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___33894,out){
return (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (7))){
var inst_33856 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33862_33895 = state_33860__$1;
(statearr_33862_33895[(2)] = inst_33856);

(statearr_33862_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (1))){
var inst_33819 = [];
var inst_33820 = inst_33819;
var inst_33821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33860__$1 = (function (){var statearr_33863 = state_33860;
(statearr_33863[(7)] = inst_33820);

(statearr_33863[(8)] = inst_33821);

return statearr_33863;
})();
var statearr_33864_33896 = state_33860__$1;
(statearr_33864_33896[(2)] = null);

(statearr_33864_33896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (4))){
var inst_33824 = (state_33860[(9)]);
var inst_33824__$1 = (state_33860[(2)]);
var inst_33825 = (inst_33824__$1 == null);
var inst_33826 = cljs.core.not.call(null,inst_33825);
var state_33860__$1 = (function (){var statearr_33865 = state_33860;
(statearr_33865[(9)] = inst_33824__$1);

return statearr_33865;
})();
if(inst_33826){
var statearr_33866_33897 = state_33860__$1;
(statearr_33866_33897[(1)] = (5));

} else {
var statearr_33867_33898 = state_33860__$1;
(statearr_33867_33898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (15))){
var inst_33850 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33868_33899 = state_33860__$1;
(statearr_33868_33899[(2)] = inst_33850);

(statearr_33868_33899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (13))){
var state_33860__$1 = state_33860;
var statearr_33869_33900 = state_33860__$1;
(statearr_33869_33900[(2)] = null);

(statearr_33869_33900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (6))){
var inst_33820 = (state_33860[(7)]);
var inst_33845 = inst_33820.length;
var inst_33846 = (inst_33845 > (0));
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33846)){
var statearr_33870_33901 = state_33860__$1;
(statearr_33870_33901[(1)] = (12));

} else {
var statearr_33871_33902 = state_33860__$1;
(statearr_33871_33902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (3))){
var inst_33858 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33860__$1,inst_33858);
} else {
if((state_val_33861 === (12))){
var inst_33820 = (state_33860[(7)]);
var inst_33848 = cljs.core.vec.call(null,inst_33820);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33860__$1,(15),out,inst_33848);
} else {
if((state_val_33861 === (2))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33860__$1,(4),ch);
} else {
if((state_val_33861 === (11))){
var inst_33824 = (state_33860[(9)]);
var inst_33828 = (state_33860[(10)]);
var inst_33838 = (state_33860[(2)]);
var inst_33839 = [];
var inst_33840 = inst_33839.push(inst_33824);
var inst_33820 = inst_33839;
var inst_33821 = inst_33828;
var state_33860__$1 = (function (){var statearr_33872 = state_33860;
(statearr_33872[(11)] = inst_33840);

(statearr_33872[(7)] = inst_33820);

(statearr_33872[(8)] = inst_33821);

(statearr_33872[(12)] = inst_33838);

return statearr_33872;
})();
var statearr_33873_33903 = state_33860__$1;
(statearr_33873_33903[(2)] = null);

(statearr_33873_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (9))){
var inst_33820 = (state_33860[(7)]);
var inst_33836 = cljs.core.vec.call(null,inst_33820);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33860__$1,(11),out,inst_33836);
} else {
if((state_val_33861 === (5))){
var inst_33824 = (state_33860[(9)]);
var inst_33821 = (state_33860[(8)]);
var inst_33828 = (state_33860[(10)]);
var inst_33828__$1 = f.call(null,inst_33824);
var inst_33829 = cljs.core._EQ_.call(null,inst_33828__$1,inst_33821);
var inst_33830 = cljs.core.keyword_identical_QMARK_.call(null,inst_33821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33831 = (inst_33829) || (inst_33830);
var state_33860__$1 = (function (){var statearr_33874 = state_33860;
(statearr_33874[(10)] = inst_33828__$1);

return statearr_33874;
})();
if(cljs.core.truth_(inst_33831)){
var statearr_33875_33904 = state_33860__$1;
(statearr_33875_33904[(1)] = (8));

} else {
var statearr_33876_33905 = state_33860__$1;
(statearr_33876_33905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (14))){
var inst_33853 = (state_33860[(2)]);
var inst_33854 = cljs.core.async.close_BANG_.call(null,out);
var state_33860__$1 = (function (){var statearr_33878 = state_33860;
(statearr_33878[(13)] = inst_33853);

return statearr_33878;
})();
var statearr_33879_33906 = state_33860__$1;
(statearr_33879_33906[(2)] = inst_33854);

(statearr_33879_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (10))){
var inst_33843 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33880_33907 = state_33860__$1;
(statearr_33880_33907[(2)] = inst_33843);

(statearr_33880_33907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (8))){
var inst_33824 = (state_33860[(9)]);
var inst_33820 = (state_33860[(7)]);
var inst_33828 = (state_33860[(10)]);
var inst_33833 = inst_33820.push(inst_33824);
var tmp33877 = inst_33820;
var inst_33820__$1 = tmp33877;
var inst_33821 = inst_33828;
var state_33860__$1 = (function (){var statearr_33881 = state_33860;
(statearr_33881[(7)] = inst_33820__$1);

(statearr_33881[(8)] = inst_33821);

(statearr_33881[(14)] = inst_33833);

return statearr_33881;
})();
var statearr_33882_33908 = state_33860__$1;
(statearr_33882_33908[(2)] = null);

(statearr_33882_33908[(1)] = (2));


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
});})(c__31087__auto___33894,out))
;
return ((function (switch__30975__auto__,c__31087__auto___33894,out){
return (function() {
var cljs$core$async$state_machine__30976__auto__ = null;
var cljs$core$async$state_machine__30976__auto____0 = (function (){
var statearr_33886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33886[(0)] = cljs$core$async$state_machine__30976__auto__);

(statearr_33886[(1)] = (1));

return statearr_33886;
});
var cljs$core$async$state_machine__30976__auto____1 = (function (state_33860){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_33860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e33887){if((e33887 instanceof Object)){
var ex__30979__auto__ = e33887;
var statearr_33888_33909 = state_33860;
(statearr_33888_33909[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33910 = state_33860;
state_33860 = G__33910;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
cljs$core$async$state_machine__30976__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30976__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30976__auto____0;
cljs$core$async$state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30976__auto____1;
return cljs$core$async$state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___33894,out))
})();
var state__31089__auto__ = (function (){var statearr_33889 = f__31088__auto__.call(null);
(statearr_33889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___33894);

return statearr_33889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___33894,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513163804229