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
var len__27041__auto___28728 = arguments.length;
var i__27042__auto___28729 = (0);
while(true){
if((i__27042__auto___28729 < len__27041__auto___28728)){
args__27048__auto__.push((arguments[i__27042__auto___28729]));

var G__28730 = (i__27042__auto___28729 + (1));
i__27042__auto___28729 = G__28730;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__28725){
var map__28726 = p__28725;
var map__28726__$1 = ((((!((map__28726 == null)))?((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var options = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

antizer.reagent.create_form.cljs$lang$applyTo = (function (seq28723){
var G__28724 = cljs.core.first.call(null,seq28723);
var seq28723__$1 = cljs.core.next.call(null,seq28723);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(G__28724,seq28723__$1);
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
var args28731 = [];
var len__27041__auto___28734 = arguments.length;
var i__27042__auto___28735 = (0);
while(true){
if((i__27042__auto___28735 < len__27041__auto___28734)){
args28731.push((arguments[i__27042__auto___28735]));

var G__28736 = (i__27042__auto___28735 + (1));
i__27042__auto___28735 = G__28736;
continue;
} else {
}
break;
}

var G__28733 = args28731.length;
switch (G__28733) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28731.length)].join('')));

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
var len__27041__auto___28764 = arguments.length;
var i__27042__auto___28765 = (0);
while(true){
if((i__27042__auto___28765 < len__27041__auto___28764)){
args__27048__auto__.push((arguments[i__27042__auto___28765]));

var G__28766 = (i__27042__auto___28765 + (1));
i__27042__auto___28765 = G__28766;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq28738){
var G__28739 = cljs.core.first.call(null,seq28738);
var seq28738__$1 = cljs.core.next.call(null,seq28738);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic(G__28739,seq28738__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28767 = arguments.length;
var i__27042__auto___28768 = (0);
while(true){
if((i__27042__auto___28768 < len__27041__auto___28767)){
args__27048__auto__.push((arguments[i__27042__auto___28768]));

var G__28769 = (i__27042__auto___28768 + (1));
i__27042__auto___28768 = G__28769;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq28740){
var G__28741 = cljs.core.first.call(null,seq28740);
var seq28740__$1 = cljs.core.next.call(null,seq28740);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic(G__28741,seq28740__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28770 = arguments.length;
var i__27042__auto___28771 = (0);
while(true){
if((i__27042__auto___28771 < len__27041__auto___28770)){
args__27048__auto__.push((arguments[i__27042__auto___28771]));

var G__28772 = (i__27042__auto___28771 + (1));
i__27042__auto___28771 = G__28772;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq28742){
var G__28743 = cljs.core.first.call(null,seq28742);
var seq28742__$1 = cljs.core.next.call(null,seq28742);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic(G__28743,seq28742__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28773 = arguments.length;
var i__27042__auto___28774 = (0);
while(true){
if((i__27042__auto___28774 < len__27041__auto___28773)){
args__27048__auto__.push((arguments[i__27042__auto___28774]));

var G__28775 = (i__27042__auto___28774 + (1));
i__27042__auto___28774 = G__28775;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq28744){
var G__28745 = cljs.core.first.call(null,seq28744);
var seq28744__$1 = cljs.core.next.call(null,seq28744);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic(G__28745,seq28744__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28776 = arguments.length;
var i__27042__auto___28777 = (0);
while(true){
if((i__27042__auto___28777 < len__27041__auto___28776)){
args__27048__auto__.push((arguments[i__27042__auto___28777]));

var G__28778 = (i__27042__auto___28777 + (1));
i__27042__auto___28777 = G__28778;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq28746){
var G__28747 = cljs.core.first.call(null,seq28746);
var seq28746__$1 = cljs.core.next.call(null,seq28746);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__28747,seq28746__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28779 = arguments.length;
var i__27042__auto___28780 = (0);
while(true){
if((i__27042__auto___28780 < len__27041__auto___28779)){
args__27048__auto__.push((arguments[i__27042__auto___28780]));

var G__28781 = (i__27042__auto___28780 + (1));
i__27042__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq28748){
var G__28749 = cljs.core.first.call(null,seq28748);
var seq28748__$1 = cljs.core.next.call(null,seq28748);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic(G__28749,seq28748__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28782 = arguments.length;
var i__27042__auto___28783 = (0);
while(true){
if((i__27042__auto___28783 < len__27041__auto___28782)){
args__27048__auto__.push((arguments[i__27042__auto___28783]));

var G__28784 = (i__27042__auto___28783 + (1));
i__27042__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq28750){
var G__28751 = cljs.core.first.call(null,seq28750);
var seq28750__$1 = cljs.core.next.call(null,seq28750);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic(G__28751,seq28750__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28785 = arguments.length;
var i__27042__auto___28786 = (0);
while(true){
if((i__27042__auto___28786 < len__27041__auto___28785)){
args__27048__auto__.push((arguments[i__27042__auto___28786]));

var G__28787 = (i__27042__auto___28786 + (1));
i__27042__auto___28786 = G__28787;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq28752){
var G__28753 = cljs.core.first.call(null,seq28752);
var seq28752__$1 = cljs.core.next.call(null,seq28752);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic(G__28753,seq28752__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28788 = arguments.length;
var i__27042__auto___28789 = (0);
while(true){
if((i__27042__auto___28789 < len__27041__auto___28788)){
args__27048__auto__.push((arguments[i__27042__auto___28789]));

var G__28790 = (i__27042__auto___28789 + (1));
i__27042__auto___28789 = G__28790;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq28754){
var G__28755 = cljs.core.first.call(null,seq28754);
var seq28754__$1 = cljs.core.next.call(null,seq28754);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic(G__28755,seq28754__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28791 = arguments.length;
var i__27042__auto___28792 = (0);
while(true){
if((i__27042__auto___28792 < len__27041__auto___28791)){
args__27048__auto__.push((arguments[i__27042__auto___28792]));

var G__28793 = (i__27042__auto___28792 + (1));
i__27042__auto___28792 = G__28793;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq28756){
var G__28757 = cljs.core.first.call(null,seq28756);
var seq28756__$1 = cljs.core.next.call(null,seq28756);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic(G__28757,seq28756__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28794 = arguments.length;
var i__27042__auto___28795 = (0);
while(true){
if((i__27042__auto___28795 < len__27041__auto___28794)){
args__27048__auto__.push((arguments[i__27042__auto___28795]));

var G__28796 = (i__27042__auto___28795 + (1));
i__27042__auto___28795 = G__28796;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq28758){
var G__28759 = cljs.core.first.call(null,seq28758);
var seq28758__$1 = cljs.core.next.call(null,seq28758);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic(G__28759,seq28758__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28797 = arguments.length;
var i__27042__auto___28798 = (0);
while(true){
if((i__27042__auto___28798 < len__27041__auto___28797)){
args__27048__auto__.push((arguments[i__27042__auto___28798]));

var G__28799 = (i__27042__auto___28798 + (1));
i__27042__auto___28798 = G__28799;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq28760){
var G__28761 = cljs.core.first.call(null,seq28760);
var seq28760__$1 = cljs.core.next.call(null,seq28760);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__28761,seq28760__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28800 = arguments.length;
var i__27042__auto___28801 = (0);
while(true){
if((i__27042__auto___28801 < len__27041__auto___28800)){
args__27048__auto__.push((arguments[i__27042__auto___28801]));

var G__28802 = (i__27042__auto___28801 + (1));
i__27042__auto___28801 = G__28802;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((1) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27049__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__28007__auto__,args__28008__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__28007__auto__),args__28008__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq28762){
var G__28763 = cljs.core.first.call(null,seq28762);
var seq28762__$1 = cljs.core.next.call(null,seq28762);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic(G__28763,seq28762__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28824 = arguments.length;
var i__27042__auto___28825 = (0);
while(true){
if((i__27042__auto___28825 < len__27041__auto___28824)){
args__27048__auto__.push((arguments[i__27042__auto___28825]));

var G__28826 = (i__27042__auto___28825 + (1));
i__27042__auto___28825 = G__28826;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__28003__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_config.cljs$lang$applyTo = (function (seq28803){
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28803));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28827 = arguments.length;
var i__27042__auto___28828 = (0);
while(true){
if((i__27042__auto___28828 < len__27041__auto___28827)){
args__27048__auto__.push((arguments[i__27042__auto___28828]));

var G__28829 = (i__27042__auto___28828 + (1));
i__27042__auto___28828 = G__28829;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__28003__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_error.cljs$lang$applyTo = (function (seq28804){
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28804));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28830 = arguments.length;
var i__27042__auto___28831 = (0);
while(true){
if((i__27042__auto___28831 < len__27041__auto___28830)){
args__27048__auto__.push((arguments[i__27042__auto___28831]));

var G__28832 = (i__27042__auto___28831 + (1));
i__27042__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__28003__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_info.cljs$lang$applyTo = (function (seq28805){
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28805));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28833 = arguments.length;
var i__27042__auto___28834 = (0);
while(true){
if((i__27042__auto___28834 < len__27041__auto___28833)){
args__27048__auto__.push((arguments[i__27042__auto___28834]));

var G__28835 = (i__27042__auto___28834 + (1));
i__27042__auto___28834 = G__28835;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__28003__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq28806){
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28806));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28836 = arguments.length;
var i__27042__auto___28837 = (0);
while(true){
if((i__27042__auto___28837 < len__27041__auto___28836)){
args__27048__auto__.push((arguments[i__27042__auto___28837]));

var G__28838 = (i__27042__auto___28837 + (1));
i__27042__auto___28837 = G__28838;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__28003__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_success.cljs$lang$applyTo = (function (seq28807){
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28807));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28839 = arguments.length;
var i__27042__auto___28840 = (0);
while(true){
if((i__27042__auto___28840 < len__27041__auto___28839)){
args__27048__auto__.push((arguments[i__27042__auto___28840]));

var G__28841 = (i__27042__auto___28840 + (1));
i__27042__auto___28840 = G__28841;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__28003__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq28808){
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28808));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28842 = arguments.length;
var i__27042__auto___28843 = (0);
while(true){
if((i__27042__auto___28843 < len__27041__auto___28842)){
args__27048__auto__.push((arguments[i__27042__auto___28843]));

var G__28844 = (i__27042__auto___28843 + (1));
i__27042__auto___28843 = G__28844;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__28003__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq28809){
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28809));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28845 = arguments.length;
var i__27042__auto___28846 = (0);
while(true){
if((i__27042__auto___28846 < len__27041__auto___28845)){
args__27048__auto__.push((arguments[i__27042__auto___28846]));

var G__28847 = (i__27042__auto___28846 + (1));
i__27042__auto___28846 = G__28847;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__28003__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq28810){
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28810));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28848 = arguments.length;
var i__27042__auto___28849 = (0);
while(true){
if((i__27042__auto___28849 < len__27041__auto___28848)){
args__27048__auto__.push((arguments[i__27042__auto___28849]));

var G__28850 = (i__27042__auto___28849 + (1));
i__27042__auto___28849 = G__28850;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__28003__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq28811){
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28811));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28851 = arguments.length;
var i__27042__auto___28852 = (0);
while(true){
if((i__27042__auto___28852 < len__27041__auto___28851)){
args__27048__auto__.push((arguments[i__27042__auto___28852]));

var G__28853 = (i__27042__auto___28852 + (1));
i__27042__auto___28852 = G__28853;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__28003__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq28812){
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28812));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28854 = arguments.length;
var i__27042__auto___28855 = (0);
while(true){
if((i__27042__auto___28855 < len__27041__auto___28854)){
args__27048__auto__.push((arguments[i__27042__auto___28855]));

var G__28856 = (i__27042__auto___28855 + (1));
i__27042__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__28003__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq28813){
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28813));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28857 = arguments.length;
var i__27042__auto___28858 = (0);
while(true){
if((i__27042__auto___28858 < len__27041__auto___28857)){
args__27048__auto__.push((arguments[i__27042__auto___28858]));

var G__28859 = (i__27042__auto___28858 + (1));
i__27042__auto___28858 = G__28859;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__28003__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq28814){
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28814));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28860 = arguments.length;
var i__27042__auto___28861 = (0);
while(true){
if((i__27042__auto___28861 < len__27041__auto___28860)){
args__27048__auto__.push((arguments[i__27042__auto___28861]));

var G__28862 = (i__27042__auto___28861 + (1));
i__27042__auto___28861 = G__28862;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__28003__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq28815){
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28815));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28863 = arguments.length;
var i__27042__auto___28864 = (0);
while(true){
if((i__27042__auto___28864 < len__27041__auto___28863)){
args__27048__auto__.push((arguments[i__27042__auto___28864]));

var G__28865 = (i__27042__auto___28864 + (1));
i__27042__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__28003__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq28816){
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28816));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28866 = arguments.length;
var i__27042__auto___28867 = (0);
while(true){
if((i__27042__auto___28867 < len__27041__auto___28866)){
args__27048__auto__.push((arguments[i__27042__auto___28867]));

var G__28868 = (i__27042__auto___28867 + (1));
i__27042__auto___28867 = G__28868;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__28003__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq28817){
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28817));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28869 = arguments.length;
var i__27042__auto___28870 = (0);
while(true){
if((i__27042__auto___28870 < len__27041__auto___28869)){
args__27048__auto__.push((arguments[i__27042__auto___28870]));

var G__28871 = (i__27042__auto___28870 + (1));
i__27042__auto___28870 = G__28871;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__28003__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq28818){
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28818));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28872 = arguments.length;
var i__27042__auto___28873 = (0);
while(true){
if((i__27042__auto___28873 < len__27041__auto___28872)){
args__27048__auto__.push((arguments[i__27042__auto___28873]));

var G__28874 = (i__27042__auto___28873 + (1));
i__27042__auto___28873 = G__28874;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__28003__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq28819){
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28819));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28875 = arguments.length;
var i__27042__auto___28876 = (0);
while(true){
if((i__27042__auto___28876 < len__27041__auto___28875)){
args__27048__auto__.push((arguments[i__27042__auto___28876]));

var G__28877 = (i__27042__auto___28876 + (1));
i__27042__auto___28876 = G__28877;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__28003__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq28820){
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28820));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28878 = arguments.length;
var i__27042__auto___28879 = (0);
while(true){
if((i__27042__auto___28879 < len__27041__auto___28878)){
args__27048__auto__.push((arguments[i__27042__auto___28879]));

var G__28880 = (i__27042__auto___28879 + (1));
i__27042__auto___28879 = G__28880;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__28003__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq28821){
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28821));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28881 = arguments.length;
var i__27042__auto___28882 = (0);
while(true){
if((i__27042__auto___28882 < len__27041__auto___28881)){
args__27048__auto__.push((arguments[i__27042__auto___28882]));

var G__28883 = (i__27042__auto___28882 + (1));
i__27042__auto___28882 = G__28883;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__28003__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq28822){
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28822));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__27048__auto__ = [];
var len__27041__auto___28884 = arguments.length;
var i__27042__auto___28885 = (0);
while(true){
if((i__27042__auto___28885 < len__27041__auto___28884)){
args__27048__auto__.push((arguments[i__27042__auto___28885]));

var G__28886 = (i__27042__auto___28885 + (1));
i__27042__auto___28885 = G__28886;
continue;
} else {
}
break;
}

var argseq__27049__auto__ = ((((0) < args__27048__auto__.length))?(new cljs.core.IndexedSeq(args__27048__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__27049__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__28003__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__28003__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq28823){
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28823));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__28005__auto__){
return antizer.core.get_prop.call(null,"locales",prop__28005__auto__);
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

//# sourceMappingURL=reagent.js.map?rel=1513181586997