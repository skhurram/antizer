// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38455 = [];
var len__27041__auto___38458 = arguments.length;
var i__27042__auto___38459 = (0);
while(true){
if((i__27042__auto___38459 < len__27041__auto___38458)){
args38455.push((arguments[i__27042__auto___38459]));

var G__38460 = (i__27042__auto___38459 + (1));
i__27042__auto___38459 = G__38460;
continue;
} else {
}
break;
}

var G__38457 = args38455.length;
switch (G__38457) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38455.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___38463 = arguments.length;
var i__27042__auto___38464 = (0);
while(true){
if((i__27042__auto___38464 < len__27041__auto___38463)){
args__27048__auto__.push((arguments[i__27042__auto___38464]));

var G__38465 = (i__27042__auto___38464 + (1));
i__27042__auto___38464 = G__38465;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38462){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38462));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___38467 = arguments.length;
var i__27042__auto___38468 = (0);
while(true){
if((i__27042__auto___38468 < len__27041__auto___38467)){
args__27048__auto__.push((arguments[i__27042__auto___38468]));

var G__38469 = (i__27042__auto___38468 + (1));
i__27042__auto___38468 = G__38469;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38466){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38466));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38470){
var map__38473 = p__38470;
var map__38473__$1 = ((((!((map__38473 == null)))?((((map__38473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38473):map__38473);
var message = cljs.core.get.call(null,map__38473__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38473__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25966__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25966__auto__)){
return or__25966__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25954__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25954__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25954__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31087__auto___38635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___38635,ch){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___38635,ch){
return (function (state_38604){
var state_val_38605 = (state_38604[(1)]);
if((state_val_38605 === (7))){
var inst_38600 = (state_38604[(2)]);
var state_38604__$1 = state_38604;
var statearr_38606_38636 = state_38604__$1;
(statearr_38606_38636[(2)] = inst_38600);

(statearr_38606_38636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (1))){
var state_38604__$1 = state_38604;
var statearr_38607_38637 = state_38604__$1;
(statearr_38607_38637[(2)] = null);

(statearr_38607_38637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (4))){
var inst_38557 = (state_38604[(7)]);
var inst_38557__$1 = (state_38604[(2)]);
var state_38604__$1 = (function (){var statearr_38608 = state_38604;
(statearr_38608[(7)] = inst_38557__$1);

return statearr_38608;
})();
if(cljs.core.truth_(inst_38557__$1)){
var statearr_38609_38638 = state_38604__$1;
(statearr_38609_38638[(1)] = (5));

} else {
var statearr_38610_38639 = state_38604__$1;
(statearr_38610_38639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (15))){
var inst_38564 = (state_38604[(8)]);
var inst_38579 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38564);
var inst_38580 = cljs.core.first.call(null,inst_38579);
var inst_38581 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38580);
var inst_38582 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38581)].join('');
var inst_38583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38582);
var state_38604__$1 = state_38604;
var statearr_38611_38640 = state_38604__$1;
(statearr_38611_38640[(2)] = inst_38583);

(statearr_38611_38640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (13))){
var inst_38588 = (state_38604[(2)]);
var state_38604__$1 = state_38604;
var statearr_38612_38641 = state_38604__$1;
(statearr_38612_38641[(2)] = inst_38588);

(statearr_38612_38641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (6))){
var state_38604__$1 = state_38604;
var statearr_38613_38642 = state_38604__$1;
(statearr_38613_38642[(2)] = null);

(statearr_38613_38642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (17))){
var inst_38586 = (state_38604[(2)]);
var state_38604__$1 = state_38604;
var statearr_38614_38643 = state_38604__$1;
(statearr_38614_38643[(2)] = inst_38586);

(statearr_38614_38643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (3))){
var inst_38602 = (state_38604[(2)]);
var state_38604__$1 = state_38604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38604__$1,inst_38602);
} else {
if((state_val_38605 === (12))){
var inst_38563 = (state_38604[(9)]);
var inst_38577 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38563,opts);
var state_38604__$1 = state_38604;
if(cljs.core.truth_(inst_38577)){
var statearr_38615_38644 = state_38604__$1;
(statearr_38615_38644[(1)] = (15));

} else {
var statearr_38616_38645 = state_38604__$1;
(statearr_38616_38645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (2))){
var state_38604__$1 = state_38604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38604__$1,(4),ch);
} else {
if((state_val_38605 === (11))){
var inst_38564 = (state_38604[(8)]);
var inst_38569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38570 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38564);
var inst_38571 = cljs.core.async.timeout.call(null,(1000));
var inst_38572 = [inst_38570,inst_38571];
var inst_38573 = (new cljs.core.PersistentVector(null,2,(5),inst_38569,inst_38572,null));
var state_38604__$1 = state_38604;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38604__$1,(14),inst_38573);
} else {
if((state_val_38605 === (9))){
var inst_38564 = (state_38604[(8)]);
var inst_38590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38591 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38564);
var inst_38592 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38591);
var inst_38593 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38592)].join('');
var inst_38594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38593);
var state_38604__$1 = (function (){var statearr_38617 = state_38604;
(statearr_38617[(10)] = inst_38590);

return statearr_38617;
})();
var statearr_38618_38646 = state_38604__$1;
(statearr_38618_38646[(2)] = inst_38594);

(statearr_38618_38646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (5))){
var inst_38557 = (state_38604[(7)]);
var inst_38559 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38560 = (new cljs.core.PersistentArrayMap(null,2,inst_38559,null));
var inst_38561 = (new cljs.core.PersistentHashSet(null,inst_38560,null));
var inst_38562 = figwheel.client.focus_msgs.call(null,inst_38561,inst_38557);
var inst_38563 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38562);
var inst_38564 = cljs.core.first.call(null,inst_38562);
var inst_38565 = figwheel.client.autoload_QMARK_.call(null);
var state_38604__$1 = (function (){var statearr_38619 = state_38604;
(statearr_38619[(8)] = inst_38564);

(statearr_38619[(9)] = inst_38563);

return statearr_38619;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38620_38647 = state_38604__$1;
(statearr_38620_38647[(1)] = (8));

} else {
var statearr_38621_38648 = state_38604__$1;
(statearr_38621_38648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (14))){
var inst_38575 = (state_38604[(2)]);
var state_38604__$1 = state_38604;
var statearr_38622_38649 = state_38604__$1;
(statearr_38622_38649[(2)] = inst_38575);

(statearr_38622_38649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (16))){
var state_38604__$1 = state_38604;
var statearr_38623_38650 = state_38604__$1;
(statearr_38623_38650[(2)] = null);

(statearr_38623_38650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (10))){
var inst_38596 = (state_38604[(2)]);
var state_38604__$1 = (function (){var statearr_38624 = state_38604;
(statearr_38624[(11)] = inst_38596);

return statearr_38624;
})();
var statearr_38625_38651 = state_38604__$1;
(statearr_38625_38651[(2)] = null);

(statearr_38625_38651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38605 === (8))){
var inst_38563 = (state_38604[(9)]);
var inst_38567 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38563,opts);
var state_38604__$1 = state_38604;
if(cljs.core.truth_(inst_38567)){
var statearr_38626_38652 = state_38604__$1;
(statearr_38626_38652[(1)] = (11));

} else {
var statearr_38627_38653 = state_38604__$1;
(statearr_38627_38653[(1)] = (12));

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
});})(c__31087__auto___38635,ch))
;
return ((function (switch__30975__auto__,c__31087__auto___38635,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____0 = (function (){
var statearr_38631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38631[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__);

(statearr_38631[(1)] = (1));

return statearr_38631;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____1 = (function (state_38604){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_38604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e38632){if((e38632 instanceof Object)){
var ex__30979__auto__ = e38632;
var statearr_38633_38654 = state_38604;
(statearr_38633_38654[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38655 = state_38604;
state_38604 = G__38655;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__ = function(state_38604){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____1.call(this,state_38604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30976__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___38635,ch))
})();
var state__31089__auto__ = (function (){var statearr_38634 = f__31088__auto__.call(null);
(statearr_38634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___38635);

return statearr_38634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___38635,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38656_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38656_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38659 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38659){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38658){if((e38658 instanceof Error)){
var e = e38658;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38659], null));
} else {
var e = e38658;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38659))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38660){
var map__38669 = p__38660;
var map__38669__$1 = ((((!((map__38669 == null)))?((((map__38669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38669):map__38669);
var opts = map__38669__$1;
var build_id = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38669,map__38669__$1,opts,build_id){
return (function (p__38671){
var vec__38672 = p__38671;
var seq__38673 = cljs.core.seq.call(null,vec__38672);
var first__38674 = cljs.core.first.call(null,seq__38673);
var seq__38673__$1 = cljs.core.next.call(null,seq__38673);
var map__38675 = first__38674;
var map__38675__$1 = ((((!((map__38675 == null)))?((((map__38675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38675):map__38675);
var msg = map__38675__$1;
var msg_name = cljs.core.get.call(null,map__38675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38673__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38672,seq__38673,first__38674,seq__38673__$1,map__38675,map__38675__$1,msg,msg_name,_,map__38669,map__38669__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38672,seq__38673,first__38674,seq__38673__$1,map__38675,map__38675__$1,msg,msg_name,_,map__38669,map__38669__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38669,map__38669__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38683){
var vec__38684 = p__38683;
var seq__38685 = cljs.core.seq.call(null,vec__38684);
var first__38686 = cljs.core.first.call(null,seq__38685);
var seq__38685__$1 = cljs.core.next.call(null,seq__38685);
var map__38687 = first__38686;
var map__38687__$1 = ((((!((map__38687 == null)))?((((map__38687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38687):map__38687);
var msg = map__38687__$1;
var msg_name = cljs.core.get.call(null,map__38687__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38685__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38689){
var map__38701 = p__38689;
var map__38701__$1 = ((((!((map__38701 == null)))?((((map__38701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38701):map__38701);
var on_compile_warning = cljs.core.get.call(null,map__38701__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38701__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38701,map__38701__$1,on_compile_warning,on_compile_fail){
return (function (p__38703){
var vec__38704 = p__38703;
var seq__38705 = cljs.core.seq.call(null,vec__38704);
var first__38706 = cljs.core.first.call(null,seq__38705);
var seq__38705__$1 = cljs.core.next.call(null,seq__38705);
var map__38707 = first__38706;
var map__38707__$1 = ((((!((map__38707 == null)))?((((map__38707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38707):map__38707);
var msg = map__38707__$1;
var msg_name = cljs.core.get.call(null,map__38707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38705__$1;
var pred__38709 = cljs.core._EQ_;
var expr__38710 = msg_name;
if(cljs.core.truth_(pred__38709.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38710))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38709.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38710))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38701,map__38701__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__,msg_hist,msg_names,msg){
return (function (state_38938){
var state_val_38939 = (state_38938[(1)]);
if((state_val_38939 === (7))){
var inst_38858 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38858)){
var statearr_38940_38990 = state_38938__$1;
(statearr_38940_38990[(1)] = (8));

} else {
var statearr_38941_38991 = state_38938__$1;
(statearr_38941_38991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (20))){
var inst_38932 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38942_38992 = state_38938__$1;
(statearr_38942_38992[(2)] = inst_38932);

(statearr_38942_38992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (27))){
var inst_38928 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38943_38993 = state_38938__$1;
(statearr_38943_38993[(2)] = inst_38928);

(statearr_38943_38993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (1))){
var inst_38851 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38851)){
var statearr_38944_38994 = state_38938__$1;
(statearr_38944_38994[(1)] = (2));

} else {
var statearr_38945_38995 = state_38938__$1;
(statearr_38945_38995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (24))){
var inst_38930 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38946_38996 = state_38938__$1;
(statearr_38946_38996[(2)] = inst_38930);

(statearr_38946_38996[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (4))){
var inst_38936 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38938__$1,inst_38936);
} else {
if((state_val_38939 === (15))){
var inst_38934 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38947_38997 = state_38938__$1;
(statearr_38947_38997[(2)] = inst_38934);

(statearr_38947_38997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (21))){
var inst_38887 = (state_38938[(2)]);
var inst_38888 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38889 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38888);
var state_38938__$1 = (function (){var statearr_38948 = state_38938;
(statearr_38948[(7)] = inst_38887);

return statearr_38948;
})();
var statearr_38949_38998 = state_38938__$1;
(statearr_38949_38998[(2)] = inst_38889);

(statearr_38949_38998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (31))){
var inst_38917 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38917)){
var statearr_38950_38999 = state_38938__$1;
(statearr_38950_38999[(1)] = (34));

} else {
var statearr_38951_39000 = state_38938__$1;
(statearr_38951_39000[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (32))){
var inst_38926 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38952_39001 = state_38938__$1;
(statearr_38952_39001[(2)] = inst_38926);

(statearr_38952_39001[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (33))){
var inst_38913 = (state_38938[(2)]);
var inst_38914 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38915 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38914);
var state_38938__$1 = (function (){var statearr_38953 = state_38938;
(statearr_38953[(8)] = inst_38913);

return statearr_38953;
})();
var statearr_38954_39002 = state_38938__$1;
(statearr_38954_39002[(2)] = inst_38915);

(statearr_38954_39002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (13))){
var inst_38872 = figwheel.client.heads_up.clear.call(null);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(16),inst_38872);
} else {
if((state_val_38939 === (22))){
var inst_38893 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38894 = figwheel.client.heads_up.append_warning_message.call(null,inst_38893);
var state_38938__$1 = state_38938;
var statearr_38955_39003 = state_38938__$1;
(statearr_38955_39003[(2)] = inst_38894);

(statearr_38955_39003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (36))){
var inst_38924 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38956_39004 = state_38938__$1;
(statearr_38956_39004[(2)] = inst_38924);

(statearr_38956_39004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (29))){
var inst_38904 = (state_38938[(2)]);
var inst_38905 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38906 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38905);
var state_38938__$1 = (function (){var statearr_38957 = state_38938;
(statearr_38957[(9)] = inst_38904);

return statearr_38957;
})();
var statearr_38958_39005 = state_38938__$1;
(statearr_38958_39005[(2)] = inst_38906);

(statearr_38958_39005[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (6))){
var inst_38853 = (state_38938[(10)]);
var state_38938__$1 = state_38938;
var statearr_38959_39006 = state_38938__$1;
(statearr_38959_39006[(2)] = inst_38853);

(statearr_38959_39006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (28))){
var inst_38900 = (state_38938[(2)]);
var inst_38901 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38902 = figwheel.client.heads_up.display_warning.call(null,inst_38901);
var state_38938__$1 = (function (){var statearr_38960 = state_38938;
(statearr_38960[(11)] = inst_38900);

return statearr_38960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(29),inst_38902);
} else {
if((state_val_38939 === (25))){
var inst_38898 = figwheel.client.heads_up.clear.call(null);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(28),inst_38898);
} else {
if((state_val_38939 === (34))){
var inst_38919 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(37),inst_38919);
} else {
if((state_val_38939 === (17))){
var inst_38878 = (state_38938[(2)]);
var inst_38879 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38880 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38879);
var state_38938__$1 = (function (){var statearr_38961 = state_38938;
(statearr_38961[(12)] = inst_38878);

return statearr_38961;
})();
var statearr_38962_39007 = state_38938__$1;
(statearr_38962_39007[(2)] = inst_38880);

(statearr_38962_39007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (3))){
var inst_38870 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38870)){
var statearr_38963_39008 = state_38938__$1;
(statearr_38963_39008[(1)] = (13));

} else {
var statearr_38964_39009 = state_38938__$1;
(statearr_38964_39009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (12))){
var inst_38866 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38965_39010 = state_38938__$1;
(statearr_38965_39010[(2)] = inst_38866);

(statearr_38965_39010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (2))){
var inst_38853 = (state_38938[(10)]);
var inst_38853__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38938__$1 = (function (){var statearr_38966 = state_38938;
(statearr_38966[(10)] = inst_38853__$1);

return statearr_38966;
})();
if(cljs.core.truth_(inst_38853__$1)){
var statearr_38967_39011 = state_38938__$1;
(statearr_38967_39011[(1)] = (5));

} else {
var statearr_38968_39012 = state_38938__$1;
(statearr_38968_39012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (23))){
var inst_38896 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38896)){
var statearr_38969_39013 = state_38938__$1;
(statearr_38969_39013[(1)] = (25));

} else {
var statearr_38970_39014 = state_38938__$1;
(statearr_38970_39014[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (35))){
var state_38938__$1 = state_38938;
var statearr_38971_39015 = state_38938__$1;
(statearr_38971_39015[(2)] = null);

(statearr_38971_39015[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (19))){
var inst_38891 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38891)){
var statearr_38972_39016 = state_38938__$1;
(statearr_38972_39016[(1)] = (22));

} else {
var statearr_38973_39017 = state_38938__$1;
(statearr_38973_39017[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (11))){
var inst_38862 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38974_39018 = state_38938__$1;
(statearr_38974_39018[(2)] = inst_38862);

(statearr_38974_39018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (9))){
var inst_38864 = figwheel.client.heads_up.clear.call(null);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(12),inst_38864);
} else {
if((state_val_38939 === (5))){
var inst_38855 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38938__$1 = state_38938;
var statearr_38975_39019 = state_38938__$1;
(statearr_38975_39019[(2)] = inst_38855);

(statearr_38975_39019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (14))){
var inst_38882 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38882)){
var statearr_38976_39020 = state_38938__$1;
(statearr_38976_39020[(1)] = (18));

} else {
var statearr_38977_39021 = state_38938__$1;
(statearr_38977_39021[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (26))){
var inst_38908 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38908)){
var statearr_38978_39022 = state_38938__$1;
(statearr_38978_39022[(1)] = (30));

} else {
var statearr_38979_39023 = state_38938__$1;
(statearr_38979_39023[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (16))){
var inst_38874 = (state_38938[(2)]);
var inst_38875 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38876 = figwheel.client.heads_up.display_exception.call(null,inst_38875);
var state_38938__$1 = (function (){var statearr_38980 = state_38938;
(statearr_38980[(13)] = inst_38874);

return statearr_38980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(17),inst_38876);
} else {
if((state_val_38939 === (30))){
var inst_38910 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38911 = figwheel.client.heads_up.display_warning.call(null,inst_38910);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(33),inst_38911);
} else {
if((state_val_38939 === (10))){
var inst_38868 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38981_39024 = state_38938__$1;
(statearr_38981_39024[(2)] = inst_38868);

(statearr_38981_39024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (18))){
var inst_38884 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38885 = figwheel.client.heads_up.display_exception.call(null,inst_38884);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(21),inst_38885);
} else {
if((state_val_38939 === (37))){
var inst_38921 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38982_39025 = state_38938__$1;
(statearr_38982_39025[(2)] = inst_38921);

(statearr_38982_39025[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (8))){
var inst_38860 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38938__$1,(11),inst_38860);
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
});})(c__31087__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30975__auto__,c__31087__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____0 = (function (){
var statearr_38986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38986[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__);

(statearr_38986[(1)] = (1));

return statearr_38986;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____1 = (function (state_38938){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_38938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e38987){if((e38987 instanceof Object)){
var ex__30979__auto__ = e38987;
var statearr_38988_39026 = state_38938;
(statearr_38988_39026[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39027 = state_38938;
state_38938 = G__39027;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__ = function(state_38938){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____1.call(this,state_38938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__,msg_hist,msg_names,msg))
})();
var state__31089__auto__ = (function (){var statearr_38989 = f__31088__auto__.call(null);
(statearr_38989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_38989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,msg_hist,msg_names,msg))
);

return c__31087__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31087__auto___39090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___39090,ch){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto___39090,ch){
return (function (state_39073){
var state_val_39074 = (state_39073[(1)]);
if((state_val_39074 === (1))){
var state_39073__$1 = state_39073;
var statearr_39075_39091 = state_39073__$1;
(statearr_39075_39091[(2)] = null);

(statearr_39075_39091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39074 === (2))){
var state_39073__$1 = state_39073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39073__$1,(4),ch);
} else {
if((state_val_39074 === (3))){
var inst_39071 = (state_39073[(2)]);
var state_39073__$1 = state_39073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39073__$1,inst_39071);
} else {
if((state_val_39074 === (4))){
var inst_39061 = (state_39073[(7)]);
var inst_39061__$1 = (state_39073[(2)]);
var state_39073__$1 = (function (){var statearr_39076 = state_39073;
(statearr_39076[(7)] = inst_39061__$1);

return statearr_39076;
})();
if(cljs.core.truth_(inst_39061__$1)){
var statearr_39077_39092 = state_39073__$1;
(statearr_39077_39092[(1)] = (5));

} else {
var statearr_39078_39093 = state_39073__$1;
(statearr_39078_39093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39074 === (5))){
var inst_39061 = (state_39073[(7)]);
var inst_39063 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39061);
var state_39073__$1 = state_39073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39073__$1,(8),inst_39063);
} else {
if((state_val_39074 === (6))){
var state_39073__$1 = state_39073;
var statearr_39079_39094 = state_39073__$1;
(statearr_39079_39094[(2)] = null);

(statearr_39079_39094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39074 === (7))){
var inst_39069 = (state_39073[(2)]);
var state_39073__$1 = state_39073;
var statearr_39080_39095 = state_39073__$1;
(statearr_39080_39095[(2)] = inst_39069);

(statearr_39080_39095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39074 === (8))){
var inst_39065 = (state_39073[(2)]);
var state_39073__$1 = (function (){var statearr_39081 = state_39073;
(statearr_39081[(8)] = inst_39065);

return statearr_39081;
})();
var statearr_39082_39096 = state_39073__$1;
(statearr_39082_39096[(2)] = null);

(statearr_39082_39096[(1)] = (2));


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
});})(c__31087__auto___39090,ch))
;
return ((function (switch__30975__auto__,c__31087__auto___39090,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30976__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30976__auto____0 = (function (){
var statearr_39086 = [null,null,null,null,null,null,null,null,null];
(statearr_39086[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30976__auto__);

(statearr_39086[(1)] = (1));

return statearr_39086;
});
var figwheel$client$heads_up_plugin_$_state_machine__30976__auto____1 = (function (state_39073){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_39073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e39087){if((e39087 instanceof Object)){
var ex__30979__auto__ = e39087;
var statearr_39088_39097 = state_39073;
(statearr_39088_39097[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39098 = state_39073;
state_39073 = G__39098;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30976__auto__ = function(state_39073){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30976__auto____1.call(this,state_39073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30976__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30976__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto___39090,ch))
})();
var state__31089__auto__ = (function (){var statearr_39089 = f__31088__auto__.call(null);
(statearr_39089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto___39090);

return statearr_39089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___39090,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__){
return (function (state_39119){
var state_val_39120 = (state_39119[(1)]);
if((state_val_39120 === (1))){
var inst_39114 = cljs.core.async.timeout.call(null,(3000));
var state_39119__$1 = state_39119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39119__$1,(2),inst_39114);
} else {
if((state_val_39120 === (2))){
var inst_39116 = (state_39119[(2)]);
var inst_39117 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39119__$1 = (function (){var statearr_39121 = state_39119;
(statearr_39121[(7)] = inst_39116);

return statearr_39121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39119__$1,inst_39117);
} else {
return null;
}
}
});})(c__31087__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____0 = (function (){
var statearr_39125 = [null,null,null,null,null,null,null,null];
(statearr_39125[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__);

(statearr_39125[(1)] = (1));

return statearr_39125;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____1 = (function (state_39119){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_39119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e39126){if((e39126 instanceof Object)){
var ex__30979__auto__ = e39126;
var statearr_39127_39129 = state_39119;
(statearr_39127_39129[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39130 = state_39119;
state_39119 = G__39130;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__ = function(state_39119){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____1.call(this,state_39119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30976__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_39128 = f__31088__auto__.call(null);
(statearr_39128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_39128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30975__auto__ = ((function (c__31087__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39153){
var state_val_39154 = (state_39153[(1)]);
if((state_val_39154 === (1))){
var inst_39147 = cljs.core.async.timeout.call(null,(2000));
var state_39153__$1 = state_39153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39153__$1,(2),inst_39147);
} else {
if((state_val_39154 === (2))){
var inst_39149 = (state_39153[(2)]);
var inst_39150 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39151 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39150);
var state_39153__$1 = (function (){var statearr_39155 = state_39153;
(statearr_39155[(7)] = inst_39149);

return statearr_39155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39153__$1,inst_39151);
} else {
return null;
}
}
});})(c__31087__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30975__auto__,c__31087__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____0 = (function (){
var statearr_39159 = [null,null,null,null,null,null,null,null];
(statearr_39159[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__);

(statearr_39159[(1)] = (1));

return statearr_39159;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____1 = (function (state_39153){
while(true){
var ret_value__30977__auto__ = (function (){try{while(true){
var result__30978__auto__ = switch__30975__auto__.call(null,state_39153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30978__auto__;
}
break;
}
}catch (e39160){if((e39160 instanceof Object)){
var ex__30979__auto__ = e39160;
var statearr_39161_39163 = state_39153;
(statearr_39161_39163[(5)] = ex__30979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39164 = state_39153;
state_39153 = G__39164;
continue;
} else {
return ret_value__30977__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__ = function(state_39153){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____1.call(this,state_39153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30976__auto__;
})()
;})(switch__30975__auto__,c__31087__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31089__auto__ = (function (){var statearr_39162 = f__31088__auto__.call(null);
(statearr_39162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31087__auto__);

return statearr_39162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,figwheel_version,temp__4657__auto__))
);

return c__31087__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39165){
var map__39169 = p__39165;
var map__39169__$1 = ((((!((map__39169 == null)))?((((map__39169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39169):map__39169);
var file = cljs.core.get.call(null,map__39169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39169__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39169__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39171 = "";
var G__39171__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39171),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39171);
var G__39171__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39171__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39171__$1);
if(cljs.core.truth_((function (){var and__25954__auto__ = line;
if(cljs.core.truth_(and__25954__auto__)){
return column;
} else {
return and__25954__auto__;
}
})())){
return [cljs.core.str(G__39171__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39171__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39172){
var map__39179 = p__39172;
var map__39179__$1 = ((((!((map__39179 == null)))?((((map__39179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39179):map__39179);
var ed = map__39179__$1;
var formatted_exception = cljs.core.get.call(null,map__39179__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39179__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39179__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39181_39185 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39182_39186 = null;
var count__39183_39187 = (0);
var i__39184_39188 = (0);
while(true){
if((i__39184_39188 < count__39183_39187)){
var msg_39189 = cljs.core._nth.call(null,chunk__39182_39186,i__39184_39188);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39189);

var G__39190 = seq__39181_39185;
var G__39191 = chunk__39182_39186;
var G__39192 = count__39183_39187;
var G__39193 = (i__39184_39188 + (1));
seq__39181_39185 = G__39190;
chunk__39182_39186 = G__39191;
count__39183_39187 = G__39192;
i__39184_39188 = G__39193;
continue;
} else {
var temp__4657__auto___39194 = cljs.core.seq.call(null,seq__39181_39185);
if(temp__4657__auto___39194){
var seq__39181_39195__$1 = temp__4657__auto___39194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39181_39195__$1)){
var c__26777__auto___39196 = cljs.core.chunk_first.call(null,seq__39181_39195__$1);
var G__39197 = cljs.core.chunk_rest.call(null,seq__39181_39195__$1);
var G__39198 = c__26777__auto___39196;
var G__39199 = cljs.core.count.call(null,c__26777__auto___39196);
var G__39200 = (0);
seq__39181_39185 = G__39197;
chunk__39182_39186 = G__39198;
count__39183_39187 = G__39199;
i__39184_39188 = G__39200;
continue;
} else {
var msg_39201 = cljs.core.first.call(null,seq__39181_39195__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39201);

var G__39202 = cljs.core.next.call(null,seq__39181_39195__$1);
var G__39203 = null;
var G__39204 = (0);
var G__39205 = (0);
seq__39181_39185 = G__39202;
chunk__39182_39186 = G__39203;
count__39183_39187 = G__39204;
i__39184_39188 = G__39205;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39206){
var map__39209 = p__39206;
var map__39209__$1 = ((((!((map__39209 == null)))?((((map__39209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39209):map__39209);
var w = map__39209__$1;
var message = cljs.core.get.call(null,map__39209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"examples/resources/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"examples/resources/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25954__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25954__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25954__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39221 = cljs.core.seq.call(null,plugins);
var chunk__39222 = null;
var count__39223 = (0);
var i__39224 = (0);
while(true){
if((i__39224 < count__39223)){
var vec__39225 = cljs.core._nth.call(null,chunk__39222,i__39224);
var k = cljs.core.nth.call(null,vec__39225,(0),null);
var plugin = cljs.core.nth.call(null,vec__39225,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39231 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39221,chunk__39222,count__39223,i__39224,pl_39231,vec__39225,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39231.call(null,msg_hist);
});})(seq__39221,chunk__39222,count__39223,i__39224,pl_39231,vec__39225,k,plugin))
);
} else {
}

var G__39232 = seq__39221;
var G__39233 = chunk__39222;
var G__39234 = count__39223;
var G__39235 = (i__39224 + (1));
seq__39221 = G__39232;
chunk__39222 = G__39233;
count__39223 = G__39234;
i__39224 = G__39235;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39221);
if(temp__4657__auto__){
var seq__39221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39221__$1)){
var c__26777__auto__ = cljs.core.chunk_first.call(null,seq__39221__$1);
var G__39236 = cljs.core.chunk_rest.call(null,seq__39221__$1);
var G__39237 = c__26777__auto__;
var G__39238 = cljs.core.count.call(null,c__26777__auto__);
var G__39239 = (0);
seq__39221 = G__39236;
chunk__39222 = G__39237;
count__39223 = G__39238;
i__39224 = G__39239;
continue;
} else {
var vec__39228 = cljs.core.first.call(null,seq__39221__$1);
var k = cljs.core.nth.call(null,vec__39228,(0),null);
var plugin = cljs.core.nth.call(null,vec__39228,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39240 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39221,chunk__39222,count__39223,i__39224,pl_39240,vec__39228,k,plugin,seq__39221__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39240.call(null,msg_hist);
});})(seq__39221,chunk__39222,count__39223,i__39224,pl_39240,vec__39228,k,plugin,seq__39221__$1,temp__4657__auto__))
);
} else {
}

var G__39241 = cljs.core.next.call(null,seq__39221__$1);
var G__39242 = null;
var G__39243 = (0);
var G__39244 = (0);
seq__39221 = G__39241;
chunk__39222 = G__39242;
count__39223 = G__39243;
i__39224 = G__39244;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39245 = [];
var len__27041__auto___39252 = arguments.length;
var i__27042__auto___39253 = (0);
while(true){
if((i__27042__auto___39253 < len__27041__auto___39252)){
args39245.push((arguments[i__27042__auto___39253]));

var G__39254 = (i__27042__auto___39253 + (1));
i__27042__auto___39253 = G__39254;
continue;
} else {
}
break;
}

var G__39247 = args39245.length;
switch (G__39247) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39245.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39248_39256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39249_39257 = null;
var count__39250_39258 = (0);
var i__39251_39259 = (0);
while(true){
if((i__39251_39259 < count__39250_39258)){
var msg_39260 = cljs.core._nth.call(null,chunk__39249_39257,i__39251_39259);
figwheel.client.socket.handle_incoming_message.call(null,msg_39260);

var G__39261 = seq__39248_39256;
var G__39262 = chunk__39249_39257;
var G__39263 = count__39250_39258;
var G__39264 = (i__39251_39259 + (1));
seq__39248_39256 = G__39261;
chunk__39249_39257 = G__39262;
count__39250_39258 = G__39263;
i__39251_39259 = G__39264;
continue;
} else {
var temp__4657__auto___39265 = cljs.core.seq.call(null,seq__39248_39256);
if(temp__4657__auto___39265){
var seq__39248_39266__$1 = temp__4657__auto___39265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39248_39266__$1)){
var c__26777__auto___39267 = cljs.core.chunk_first.call(null,seq__39248_39266__$1);
var G__39268 = cljs.core.chunk_rest.call(null,seq__39248_39266__$1);
var G__39269 = c__26777__auto___39267;
var G__39270 = cljs.core.count.call(null,c__26777__auto___39267);
var G__39271 = (0);
seq__39248_39256 = G__39268;
chunk__39249_39257 = G__39269;
count__39250_39258 = G__39270;
i__39251_39259 = G__39271;
continue;
} else {
var msg_39272 = cljs.core.first.call(null,seq__39248_39266__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39272);

var G__39273 = cljs.core.next.call(null,seq__39248_39266__$1);
var G__39274 = null;
var G__39275 = (0);
var G__39276 = (0);
seq__39248_39256 = G__39273;
chunk__39249_39257 = G__39274;
count__39250_39258 = G__39275;
i__39251_39259 = G__39276;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27048__auto__ = [];
var len__27041__auto___39281 = arguments.length;
var i__27042__auto___39282 = (0);
while(true){
if((i__27042__auto___39282 < len__27041__auto___39281)){
args__27048__auto__.push((arguments[i__27042__auto___39282]));

var G__39283 = (i__27042__auto___39282 + (1));
i__27042__auto___39282 = G__39283;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39278){
var map__39279 = p__39278;
var map__39279__$1 = ((((!((map__39279 == null)))?((((map__39279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39279):map__39279);
var opts = map__39279__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39277){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39277));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39285){if((e39285 instanceof Error)){
var e = e39285;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39285;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39289){
var map__39290 = p__39289;
var map__39290__$1 = ((((!((map__39290 == null)))?((((map__39290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39290):map__39290);
var msg_name = cljs.core.get.call(null,map__39290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513163810962