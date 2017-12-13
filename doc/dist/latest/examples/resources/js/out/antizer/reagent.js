// Compiled by ClojureScript 1.9.229 {}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 *  any hiccup form. Accepts the following options:
 * 
 *  :options - map of Form.create() options. Refer to: 
 *             https://ant.design/components/form/#Form.create(options) for
 *             details
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29869 = arguments.length;
var i__27042__auto___29870 = (0);
while(true){
if((i__27042__auto___29870 < len__27041__auto___29869)){
args__27048__auto__.push((arguments[i__27042__auto___29870]));

var G__29871 = (i__27042__auto___29870 + (1));
i__27042__auto___29870 = G__29871;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__29866){
var map__29867 = p__29866;
var map__29867__$1 = ((((!((map__29867 == null)))?((((map__29867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var options = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq29864){
var G__29865 = cljs.core.first.call(null,seq29864);
var seq29864__$1 = cljs.core.next.call(null,seq29864);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__29865,seq29864__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,reagent.core.props.call(null,reagent.core.current_component.call(null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var args29872 = [];
var len__27041__auto___29875 = arguments.length;
var i__27042__auto___29876 = (0);
while(true){
if((i__27042__auto___29876 < len__27041__auto___29875)){
args29872.push((arguments[i__27042__auto___29876]));

var G__29877 = (i__27042__auto___29876 + (1));
i__27042__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var G__29874 = args29872.length;
switch (G__29874) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29872.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.call(null,form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = new cljs.core.Keyword(null,"getFieldDecorator","getFieldDecorator",-1859085334).cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options));
return field_decorator.call(null,id,params).call(null,reagent.core.as_element.call(null,field));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29905 = arguments.length;
var i__27042__auto___29906 = (0);
while(true){
if((i__27042__auto___29906 < len__27041__auto___29905)){
args__27048__auto__.push((arguments[i__27042__auto___29906]));

var G__29907 = (i__27042__auto___29906 + (1));
i__27042__auto___29906 = G__29907;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq29879){
var G__29880 = cljs.core.first.call(null,seq29879);
var seq29879__$1 = cljs.core.next.call(null,seq29879);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__29880,seq29879__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29908 = arguments.length;
var i__27042__auto___29909 = (0);
while(true){
if((i__27042__auto___29909 < len__27041__auto___29908)){
args__27048__auto__.push((arguments[i__27042__auto___29909]));

var G__29910 = (i__27042__auto___29909 + (1));
i__27042__auto___29909 = G__29910;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq29881){
var G__29882 = cljs.core.first.call(null,seq29881);
var seq29881__$1 = cljs.core.next.call(null,seq29881);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__29882,seq29881__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29911 = arguments.length;
var i__27042__auto___29912 = (0);
while(true){
if((i__27042__auto___29912 < len__27041__auto___29911)){
args__27048__auto__.push((arguments[i__27042__auto___29912]));

var G__29913 = (i__27042__auto___29912 + (1));
i__27042__auto___29912 = G__29913;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq29883){
var G__29884 = cljs.core.first.call(null,seq29883);
var seq29883__$1 = cljs.core.next.call(null,seq29883);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__29884,seq29883__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29914 = arguments.length;
var i__27042__auto___29915 = (0);
while(true){
if((i__27042__auto___29915 < len__27041__auto___29914)){
args__27048__auto__.push((arguments[i__27042__auto___29915]));

var G__29916 = (i__27042__auto___29915 + (1));
i__27042__auto___29915 = G__29916;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq29885){
var G__29886 = cljs.core.first.call(null,seq29885);
var seq29885__$1 = cljs.core.next.call(null,seq29885);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__29886,seq29885__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29917 = arguments.length;
var i__27042__auto___29918 = (0);
while(true){
if((i__27042__auto___29918 < len__27041__auto___29917)){
args__27048__auto__.push((arguments[i__27042__auto___29918]));

var G__29919 = (i__27042__auto___29918 + (1));
i__27042__auto___29918 = G__29919;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq29887){
var G__29888 = cljs.core.first.call(null,seq29887);
var seq29887__$1 = cljs.core.next.call(null,seq29887);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__29888,seq29887__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29920 = arguments.length;
var i__27042__auto___29921 = (0);
while(true){
if((i__27042__auto___29921 < len__27041__auto___29920)){
args__27048__auto__.push((arguments[i__27042__auto___29921]));

var G__29922 = (i__27042__auto___29921 + (1));
i__27042__auto___29921 = G__29922;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq29889){
var G__29890 = cljs.core.first.call(null,seq29889);
var seq29889__$1 = cljs.core.next.call(null,seq29889);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__29890,seq29889__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29923 = arguments.length;
var i__27042__auto___29924 = (0);
while(true){
if((i__27042__auto___29924 < len__27041__auto___29923)){
args__27048__auto__.push((arguments[i__27042__auto___29924]));

var G__29925 = (i__27042__auto___29924 + (1));
i__27042__auto___29924 = G__29925;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq29891){
var G__29892 = cljs.core.first.call(null,seq29891);
var seq29891__$1 = cljs.core.next.call(null,seq29891);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__29892,seq29891__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29926 = arguments.length;
var i__27042__auto___29927 = (0);
while(true){
if((i__27042__auto___29927 < len__27041__auto___29926)){
args__27048__auto__.push((arguments[i__27042__auto___29927]));

var G__29928 = (i__27042__auto___29927 + (1));
i__27042__auto___29927 = G__29928;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq29893){
var G__29894 = cljs.core.first.call(null,seq29893);
var seq29893__$1 = cljs.core.next.call(null,seq29893);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__29894,seq29893__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29929 = arguments.length;
var i__27042__auto___29930 = (0);
while(true){
if((i__27042__auto___29930 < len__27041__auto___29929)){
args__27048__auto__.push((arguments[i__27042__auto___29930]));

var G__29931 = (i__27042__auto___29930 + (1));
i__27042__auto___29930 = G__29931;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq29895){
var G__29896 = cljs.core.first.call(null,seq29895);
var seq29895__$1 = cljs.core.next.call(null,seq29895);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__29896,seq29895__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29932 = arguments.length;
var i__27042__auto___29933 = (0);
while(true){
if((i__27042__auto___29933 < len__27041__auto___29932)){
args__27048__auto__.push((arguments[i__27042__auto___29933]));

var G__29934 = (i__27042__auto___29933 + (1));
i__27042__auto___29933 = G__29934;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq29897){
var G__29898 = cljs.core.first.call(null,seq29897);
var seq29897__$1 = cljs.core.next.call(null,seq29897);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__29898,seq29897__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29935 = arguments.length;
var i__27042__auto___29936 = (0);
while(true){
if((i__27042__auto___29936 < len__27041__auto___29935)){
args__27048__auto__.push((arguments[i__27042__auto___29936]));

var G__29937 = (i__27042__auto___29936 + (1));
i__27042__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq29899){
var G__29900 = cljs.core.first.call(null,seq29899);
var seq29899__$1 = cljs.core.next.call(null,seq29899);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__29900,seq29899__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29938 = arguments.length;
var i__27042__auto___29939 = (0);
while(true){
if((i__27042__auto___29939 < len__27041__auto___29938)){
args__27048__auto__.push((arguments[i__27042__auto___29939]));

var G__29940 = (i__27042__auto___29939 + (1));
i__27042__auto___29939 = G__29940;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq29901){
var G__29902 = cljs.core.first.call(null,seq29901);
var seq29901__$1 = cljs.core.next.call(null,seq29901);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__29902,seq29901__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29941 = arguments.length;
var i__27042__auto___29942 = (0);
while(true){
if((i__27042__auto___29942 < len__27041__auto___29941)){
args__27048__auto__.push((arguments[i__27042__auto___29942]));

var G__29943 = (i__27042__auto___29942 + (1));
i__27042__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__27266__auto__,args__27267__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__27266__auto__),args__27267__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq29903){
var G__29904 = cljs.core.first.call(null,seq29903);
var seq29903__$1 = cljs.core.next.call(null,seq29903);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__29904,seq29903__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29965 = arguments.length;
var i__27042__auto___29966 = (0);
while(true){
if((i__27042__auto___29966 < len__27041__auto___29965)){
args__27048__auto__.push((arguments[i__27042__auto___29966]));

var G__29967 = (i__27042__auto___29966 + (1));
i__27042__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__27262__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq29944){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29944));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29968 = arguments.length;
var i__27042__auto___29969 = (0);
while(true){
if((i__27042__auto___29969 < len__27041__auto___29968)){
args__27048__auto__.push((arguments[i__27042__auto___29969]));

var G__29970 = (i__27042__auto___29969 + (1));
i__27042__auto___29969 = G__29970;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__27262__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq29945){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29945));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29971 = arguments.length;
var i__27042__auto___29972 = (0);
while(true){
if((i__27042__auto___29972 < len__27041__auto___29971)){
args__27048__auto__.push((arguments[i__27042__auto___29972]));

var G__29973 = (i__27042__auto___29972 + (1));
i__27042__auto___29972 = G__29973;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__27262__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq29946){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29946));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29974 = arguments.length;
var i__27042__auto___29975 = (0);
while(true){
if((i__27042__auto___29975 < len__27041__auto___29974)){
args__27048__auto__.push((arguments[i__27042__auto___29975]));

var G__29976 = (i__27042__auto___29975 + (1));
i__27042__auto___29975 = G__29976;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__27262__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq29947){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29947));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29977 = arguments.length;
var i__27042__auto___29978 = (0);
while(true){
if((i__27042__auto___29978 < len__27041__auto___29977)){
args__27048__auto__.push((arguments[i__27042__auto___29978]));

var G__29979 = (i__27042__auto___29978 + (1));
i__27042__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__27262__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq29948){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29948));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29980 = arguments.length;
var i__27042__auto___29981 = (0);
while(true){
if((i__27042__auto___29981 < len__27041__auto___29980)){
args__27048__auto__.push((arguments[i__27042__auto___29981]));

var G__29982 = (i__27042__auto___29981 + (1));
i__27042__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__27262__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq29949){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29949));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29983 = arguments.length;
var i__27042__auto___29984 = (0);
while(true){
if((i__27042__auto___29984 < len__27041__auto___29983)){
args__27048__auto__.push((arguments[i__27042__auto___29984]));

var G__29985 = (i__27042__auto___29984 + (1));
i__27042__auto___29984 = G__29985;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__27262__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq29950){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29950));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29986 = arguments.length;
var i__27042__auto___29987 = (0);
while(true){
if((i__27042__auto___29987 < len__27041__auto___29986)){
args__27048__auto__.push((arguments[i__27042__auto___29987]));

var G__29988 = (i__27042__auto___29987 + (1));
i__27042__auto___29987 = G__29988;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__27262__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq29951){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29951));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29989 = arguments.length;
var i__27042__auto___29990 = (0);
while(true){
if((i__27042__auto___29990 < len__27041__auto___29989)){
args__27048__auto__.push((arguments[i__27042__auto___29990]));

var G__29991 = (i__27042__auto___29990 + (1));
i__27042__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__27262__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq29952){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29952));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29992 = arguments.length;
var i__27042__auto___29993 = (0);
while(true){
if((i__27042__auto___29993 < len__27041__auto___29992)){
args__27048__auto__.push((arguments[i__27042__auto___29993]));

var G__29994 = (i__27042__auto___29993 + (1));
i__27042__auto___29993 = G__29994;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__27262__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq29953){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29953));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29995 = arguments.length;
var i__27042__auto___29996 = (0);
while(true){
if((i__27042__auto___29996 < len__27041__auto___29995)){
args__27048__auto__.push((arguments[i__27042__auto___29996]));

var G__29997 = (i__27042__auto___29996 + (1));
i__27042__auto___29996 = G__29997;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__27262__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq29954){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29954));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___29998 = arguments.length;
var i__27042__auto___29999 = (0);
while(true){
if((i__27042__auto___29999 < len__27041__auto___29998)){
args__27048__auto__.push((arguments[i__27042__auto___29999]));

var G__30000 = (i__27042__auto___29999 + (1));
i__27042__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__27262__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq29955){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29955));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30001 = arguments.length;
var i__27042__auto___30002 = (0);
while(true){
if((i__27042__auto___30002 < len__27041__auto___30001)){
args__27048__auto__.push((arguments[i__27042__auto___30002]));

var G__30003 = (i__27042__auto___30002 + (1));
i__27042__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__27262__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq29956){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29956));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30004 = arguments.length;
var i__27042__auto___30005 = (0);
while(true){
if((i__27042__auto___30005 < len__27041__auto___30004)){
args__27048__auto__.push((arguments[i__27042__auto___30005]));

var G__30006 = (i__27042__auto___30005 + (1));
i__27042__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__27262__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq29957){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29957));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30007 = arguments.length;
var i__27042__auto___30008 = (0);
while(true){
if((i__27042__auto___30008 < len__27041__auto___30007)){
args__27048__auto__.push((arguments[i__27042__auto___30008]));

var G__30009 = (i__27042__auto___30008 + (1));
i__27042__auto___30008 = G__30009;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__27262__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq29958){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29958));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30010 = arguments.length;
var i__27042__auto___30011 = (0);
while(true){
if((i__27042__auto___30011 < len__27041__auto___30010)){
args__27048__auto__.push((arguments[i__27042__auto___30011]));

var G__30012 = (i__27042__auto___30011 + (1));
i__27042__auto___30011 = G__30012;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__27262__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq29959){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29959));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30013 = arguments.length;
var i__27042__auto___30014 = (0);
while(true){
if((i__27042__auto___30014 < len__27041__auto___30013)){
args__27048__auto__.push((arguments[i__27042__auto___30014]));

var G__30015 = (i__27042__auto___30014 + (1));
i__27042__auto___30014 = G__30015;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__27262__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq29960){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29960));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30016 = arguments.length;
var i__27042__auto___30017 = (0);
while(true){
if((i__27042__auto___30017 < len__27041__auto___30016)){
args__27048__auto__.push((arguments[i__27042__auto___30017]));

var G__30018 = (i__27042__auto___30017 + (1));
i__27042__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__27262__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq29961){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29961));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30019 = arguments.length;
var i__27042__auto___30020 = (0);
while(true){
if((i__27042__auto___30020 < len__27041__auto___30019)){
args__27048__auto__.push((arguments[i__27042__auto___30020]));

var G__30021 = (i__27042__auto___30020 + (1));
i__27042__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__27262__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq29962){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29962));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30022 = arguments.length;
var i__27042__auto___30023 = (0);
while(true){
if((i__27042__auto___30023 < len__27041__auto___30022)){
args__27048__auto__.push((arguments[i__27042__auto___30023]));

var G__30024 = (i__27042__auto___30023 + (1));
i__27042__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__27262__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq29963){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29963));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___30025 = arguments.length;
var i__27042__auto___30026 = (0);
while(true){
if((i__27042__auto___30026 < len__27041__auto___30025)){
args__27048__auto__.push((arguments[i__27042__auto___30026]));

var G__30027 = (i__27042__auto___30026 + (1));
i__27042__auto___30026 = G__30027;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__27262__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__27262__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq29964){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29964));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__27264__auto__){
return antizer.core.get_prop.call(null,"locales",prop__27264__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.form = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));

//# sourceMappingURL=reagent.js.map?rel=1513179493187