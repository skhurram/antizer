// Compiled by ClojureScript 1.9.229 {}
goog.provide('antizer_examples.app');
goog.require('cljs.core');
goog.require('antizer_examples.reagent');
goog.require('antizer_examples.rum');
goog.require('cljsjs.moment');
antizer_examples.app.init_BANG_ = (function antizer_examples$app$init_BANG_(){
var G__28918 = example;
switch (G__28918) {
case "reagent":
return antizer_examples.reagent.init_BANG_.call(null);

break;
case "rum":
return antizer_examples.rum.init_BANG_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(example)].join('')));

}
});
cljs.core.enable_console_print_BANG_.call(null);
antizer_examples.app.init_BANG_.call(null);

//# sourceMappingURL=app.js.map?rel=1513181587222