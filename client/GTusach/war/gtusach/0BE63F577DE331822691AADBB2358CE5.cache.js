var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gtusach;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '0BE63F577DE331822691AADBB2358CE5';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {30:1, 198:1}, $intern_2 = 4194303, $intern_3 = 1048575, $intern_4 = {3:1, 6:1}, $intern_5 = {25:1, 32:1, 77:1}, $intern_6 = {3:1}, $intern_7 = {20:1, 12:1, 18:1, 17:1, 21:1, 13:1, 11:1}, $intern_8 = {194:1, 30:1}, $intern_9 = {155:1, 30:1}, $intern_10 = {191:1, 30:1}, $intern_11 = {193:1, 30:1}, $intern_12 = 3.141592653589793, $intern_13 = {3:1, 9:1}, $intern_14 = {3:1, 8:1, 9:1}, $intern_15 = {3:1, 8:1, 10:1, 9:1}, $intern_16 = {3:1, 6:1, 507:1}, $intern_17 = 65535, $intern_18 = {16:1, 7:1, 3:1, 5:1, 4:1}, $intern_19 = {22:1, 7:1, 3:1, 5:1, 4:1}, $intern_20 = {7:1, 60:1, 3:1, 5:1, 4:1}, $intern_21 = {7:1, 61:1, 3:1, 5:1, 4:1}, $intern_22 = {7:1, 62:1, 3:1, 5:1, 4:1}, $intern_23 = {35:1, 3:1, 5:1, 4:1}, $intern_24 = {7:1, 97:1, 3:1, 5:1, 4:1}, $intern_25 = {7:1, 52:1, 3:1, 5:1, 4:1}, $intern_26 = {12:1}, $intern_27 = {82:1, 3:1, 8:1, 10:1, 9:1}, $intern_28 = 524288, $intern_29 = 4194304, $intern_30 = 17592186044416, $intern_31 = -9223372036854775808, $intern_32 = 1000000000, $intern_33 = -2147483648, $intern_34 = {3:1, 6:1, 192:1}, $intern_35 = {127:1, 3:1}, $intern_36 = 65536, $intern_37 = 16777216, $intern_38 = 33554432, $intern_39 = 67108864, $intern_40 = {20:1, 12:1, 18:1, 17:1, 38:1, 21:1, 13:1, 11:1}, $intern_41 = {20:1, 12:1, 18:1, 17:1, 38:1, 21:1, 63:1, 13:1, 11:1}, $intern_42 = {27:1}, $intern_43 = {20:1, 12:1, 18:1, 17:1, 38:1, 21:1, 120:1, 13:1, 11:1}, $intern_44 = {59:1, 3:1, 5:1, 4:1}, $intern_45 = {23:1, 3:1, 5:1, 4:1}, $intern_46 = {48:1}, $intern_47 = {55:1}, $intern_48 = {29:1, 56:1}, $intern_49 = {24:1}, $intern_50 = {29:1, 19:1}, $intern_51 = {27:1, 53:1}, $intern_52 = 0.3010299956639812, $intern_53 = 4294967296, $intern_54 = 1073741824, $intern_55 = {3:1, 29:1, 19:1, 100:1}, $intern_56 = {3:1, 29:1, 56:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName_0(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 558:1, 5:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastAllowJso(src_0, dstId){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0)) && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_byte(x_0){
  return round_int(x_0) << 24 >> 24;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function round_short(x_0){
  return round_int(x_0) << 16 >> 16;
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName_0(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(115, 1, {115:1, 570:1}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName_2(){
  return $getName_0(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_27(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 115);
function $clinit_BookServiceImpl(){
  $clinit_BookServiceImpl = emptyMethod;
  log_1 = (new LoggerImplRegular , $ensureLogger(getLogManager(), 'BookServiceImpl'));
  currentUser = new User_2;
  getFormat(($clinit_DateTimeFormat$PredefinedFormat() , ISO_8601));
}

function $createBook(this$static, newBook, callback){
  var bean, cb, payload;
  cb = new BookServiceImpl$8(this$static, callback);
  bean = $create_0(this$static.factory, Lcom_dv_gtusach_client_model_IBook_2_classLit, newBook);
  payload = getPayload__Ljava_lang_String___devirtual$(encode(bean));
  $executeRequest(($clinit_RequestBuilder() , POST), (throwIfNull('decodedURL', '/api/book/create') , encodeURI('/api/book/create')), payload, cb);
}

function $executeRequest(method, url_0, payload, callback){
  var ex, rb;
  try {
    $info_0(log_1, 'Execute request: ' + url_0 + ', payload=' + payload);
    rb = new RequestBuilder(method, url_0);
    throwIfEmptyOrNull('header', 'Content-Type');
    throwIfEmptyOrNull('value', 'application/json');
    !rb.headers && (rb.headers = new HashMap);
    rb.headers.put('Content-Type', 'application/json');
    rb.requestData = payload;
    throwIfNull('callback', callback);
    rb.callback = callback;
    throwIfNull('callback', rb.callback);
    $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      callback.onError(null, ex);
    }
     else 
      throw unwrap($e0);
  }
}

function $getBooks(this$static, bookIds, callback){
  var cb, i, url_0;
  cb = new BookServiceImpl$7(this$static, callback);
  url_0 = '/api/books/';
  if (!bookIds || bookIds.array.length == 0) {
    url_0 += '0';
  }
   else {
    for (i = 0; i < bookIds.array.length; i++) {
      i == 0?(url_0 += (checkElementIndex(0, bookIds.array.length) , bookIds.array[0])):(url_0 += (checkElementIndex(i, bookIds.array.length) , ',' + bookIds.array[i]));
    }
  }
  $executeRequest(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', url_0) , encodeURI(url_0)), null, cb);
}

function $getSystemInfo(this$static, callback){
  var cb;
  cb = new BookServiceImpl$6(this$static, callback);
  $executeRequest(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', '/api/systeminfo') , encodeURI('/api/systeminfo')), null, cb);
}

function $init(this$static){
  var cb, sid, url_0, cookiesMap;
  $info_0(log_1, 'Initalizing book service...');
  !!this$static.timer && !!this$static.timer.timerId && $cancel(this$static.timer);
  this$static.timer = new BookServiceImpl$1(this$static);
  $scheduleRepeating(this$static.timer, 60000);
  this$static.factory = new MyAutoBeanFactoryImpl;
  sid = (cookiesMap = ensureCookies() , dynamicCastToString(cookiesMap.get_2('thuvien-dv.sid')));
  if (sid != null && sid.length > 0) {
    try {
      cb = new BookServiceImpl$2(this$static);
      url_0 = '/api/user/' + sid;
      $executeRequest(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', url_0) , encodeURI(url_0)), null, cb);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (!instanceOf($e0, 8))
        throw unwrap($e0);
    }
  }
}

function $login(this$static, username, password){
  var bean, cb, payload, user;
  cb = new BookServiceImpl$3(this$static);
  user = new User_0;
  user.name_0 = username;
  user.password = password;
  bean = $create_0(this$static.factory, Lcom_dv_gtusach_client_model_IUser_2_classLit, user);
  $info_0(log_1, 'user bean ' + bean);
  payload = getPayload__Ljava_lang_String___devirtual$(encode(bean));
  $executeRequest(($clinit_RequestBuilder() , POST), (throwIfNull('decodedURL', '/api/login') , encodeURI('/api/login')), payload, cb);
}

function $logout(this$static){
  var cb, url_0;
  cb = new BookServiceImpl$4(this$static);
  url_0 = '/api/logout/' + currentUser.sessionId;
  $executeRequest(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', url_0) , encodeURI(url_0)), null, cb);
}

function $postBook(this$static, book, callback){
  var bean, cb, payload;
  cb = new BookServiceImpl$9(callback);
  bean = $create_0(this$static.factory, Lcom_dv_gtusach_client_model_IBook_2_classLit, book);
  payload = getPayload__Ljava_lang_String___devirtual$(encode(bean));
  $executeRequest(($clinit_RequestBuilder() , POST), (throwIfNull('decodedURL', '/api/book/resume') , encodeURI('/api/book/resume')), payload, cb);
}

function $userHasLoggedOff(this$static){
  removeCookie('sid');
  $update(currentUser, new User_0);
  $fireEvent_4(this$static.eventBus, new PropertyChangeEvent(($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication), 'logout', currentUser, null));
}

function $validateSession(this$static){
  var cb, url_0;
  cb = new BookServiceImpl$5(this$static);
  url_0 = '/api/validate/' + currentUser.sessionId;
  $executeRequest(($clinit_RequestBuilder() , GET), (throwIfNull('decodedURL', url_0) , encodeURI(url_0)), null, cb);
}

function BookServiceImpl(eventBus){
  $clinit_BookServiceImpl();
  this.eventBus = eventBus;
}

defineClass(283, 1, {}, BookServiceImpl);
var currentUser, log_1, sessionTimeLeftSec = -1;
var Lcom_dv_gtusach_client_BookServiceImpl_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl', 283);
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_3(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw new IllegalArgumentException_0('must be positive');
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = true;
  this$static.timerId = valueOf_3(setInterval_0(createCallback(this$static, this$static.cancelCounter), periodMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setInterval_0(func, time){
  return $wnd.setInterval(func, time);
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(104, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 104);
function BookServiceImpl$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(284, 104, {}, BookServiceImpl$1);
_.run = function run(){
  $isLogon(($clinit_BookServiceImpl() , currentUser)) && $validateSession(this.this$01);
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$1_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/1', 284);
function BookServiceImpl$2(this$0){
  this.this$01 = this$0;
}

defineClass(285, 1, {}, BookServiceImpl$2);
_.onError = function onError(request, ex){
  removeCookie('sid');
}
;
_.onResponseReceived = function onResponseReceived(request, response){
  var bean, ex, user;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'getUser response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IUser_2_classLit, response.xmlHttpRequest.responseText);
      user = new User_1(dynamicCast(bean.as(), 57));
      $update(currentUser, user);
      $info_0(log_1, 'User bean: ' + user);
      setCookie('sid', user.sessionId);
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
      removeCookie('sid');
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
      removeCookie('sid');
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$2_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/2', 285);
function BookServiceImpl$3(this$0){
  this.this$01 = this$0;
}

defineClass(286, 1, {}, BookServiceImpl$3);
_.onError = function onError_0(request, ex){
  $fireEvent_0(($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication), ($clinit_BookServiceImpl() , currentUser));
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var bean, ex, user;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'login response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IUser_2_classLit, response.xmlHttpRequest.responseText);
      user = new User_1(dynamicCast(bean.as(), 57));
      $update(currentUser, user);
      $info_0(log_1, 'User bean: ' + user);
      setCookie('sid', user.sessionId);
      user.sessionId != null && user.sessionId.length > 0 && user.role.indexOf('admin') != -1;
      $fireEvent(($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication), 'login', user);
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
      $onFailure_2(new Exception(response.xmlHttpRequest.statusText + '(' + response.xmlHttpRequest.status + ')'));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
      $fireEvent_0(($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication), currentUser);
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$3_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/3', 286);
function BookServiceImpl$4(this$0){
  this.this$01 = this$0;
}

defineClass(287, 1, {}, BookServiceImpl$4);
_.onError = function onError_1(request, ex){
  $userHasLoggedOff(this.this$01);
}
;
_.onResponseReceived = function onResponseReceived_1(request, response){
  var bean, ex;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'logout response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IMapData_2_classLit, response.xmlHttpRequest.responseText);
      throwClassCastExceptionUnlessNull(bean.as()).nullMethod().nullMethod();
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $userHasLoggedOff(this.this$01);
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$4_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/4', 287);
function BookServiceImpl$5(this$0){
  this.this$01 = this$0;
}

defineClass(288, 1, {}, BookServiceImpl$5);
_.onError = function onError_2(request, ex){
}
;
_.onResponseReceived = function onResponseReceived_2(request, response){
  var bean, ex;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'validateSession response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IMapData_2_classLit, response.xmlHttpRequest.responseText);
      throwClassCastExceptionUnlessNull(bean.as()).nullMethod().nullMethod();
      sessionTimeLeftSec = 0;
      sessionTimeLeftSec <= 0 && $userHasLoggedOff(this.this$01);
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$5_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/5', 288);
function BookServiceImpl$6(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
}

defineClass(289, 1, {}, BookServiceImpl$6);
_.onError = function onError_3(request, ex){
}
;
_.onResponseReceived = function onResponseReceived_3(request, response){
  var bean, ex, info;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'SystemInfo response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_ISystemInfo_2_classLit, response.xmlHttpRequest.responseText);
      info = new SystemInfo(dynamicCast(bean.as(), 78));
      $info_0(log_1, 'SystemInfo bean: ' + info);
      $onSuccess_0(this.val$callback2, info);
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
      new Exception(response.xmlHttpRequest.statusText + '(' + response.xmlHttpRequest.status + ')');
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$6_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/6', 289);
function BookServiceImpl$7(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
}

defineClass(290, 1, {}, BookServiceImpl$7);
_.onError = function onError_4(request, ex){
  $onFailure_1(this.val$callback2, ex);
}
;
_.onResponseReceived = function onResponseReceived_4(request, response){
  var b, b$iterator, bean, error, ex, jsonResponse, list;
  list = new ArrayList;
  error = null;
  try {
    if (response.xmlHttpRequest.status == 200) {
      jsonResponse = '{"books": ' + response.xmlHttpRequest.responseText + '}';
      $info_0(($clinit_BookServiceImpl() , log_1), 'getBooks response: +++' + jsonResponse + '+++');
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IBookList_2_classLit, jsonResponse);
      for (b$iterator = dynamicCast(bean.as(), 114).getBooks().iterator(); b$iterator.hasNext();) {
        b = dynamicCast(b$iterator.next_0(), 36);
        $add_11(list, new Book_1(b));
        $info_0(log_1, 'Found book: ' + new Book_1(b));
      }
    }
     else {
      throw new Exception(response.xmlHttpRequest.statusText + '(' + response.xmlHttpRequest.status + ')');
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      error = ex;
    }
     else 
      throw unwrap($e0);
  }
  error?$onFailure_1(this.val$callback2, error):$onSuccess(this.val$callback2, list);
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$7_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/7', 290);
function BookServiceImpl$8(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
}

defineClass(291, 1, {}, BookServiceImpl$8);
_.onError = function onError_5(request, ex){
  $onFailure(this.val$callback2, ex);
}
;
_.onResponseReceived = function onResponseReceived_5(request, response){
  var bean, book, ex;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), 'create response: ' + response.xmlHttpRequest.responseText);
      bean = decode(this.this$01.factory, Lcom_dv_gtusach_client_model_IBook_2_classLit, response.xmlHttpRequest.responseText);
      book = new Book_1(dynamicCast(bean.as(), 36));
      $info_0(log_1, 'Book bean: ' + book);
      $setErrorMessage(this.val$callback2.this$01.tusachView, '');
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
      $onFailure(this.val$callback2, new Exception(response.xmlHttpRequest.statusText + '(' + response.xmlHttpRequest.status + ')'));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
      $onFailure(this.val$callback2, ex);
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$8_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/8', 291);
function BookServiceImpl$9(val$callback){
  this.val$url2 = '/api/book/resume';
  this.val$callback3 = val$callback;
}

defineClass(292, 1, {}, BookServiceImpl$9);
_.onError = function onError_6(request, ex){
  $onFailure_0(this.val$callback3, ex);
}
;
_.onResponseReceived = function onResponseReceived_6(request, response){
  var ex;
  try {
    if (response.xmlHttpRequest.status == 200) {
      $info_0(($clinit_BookServiceImpl() , log_1), this.val$url2 + ' - response: ' + response.xmlHttpRequest.responseText);
      $setErrorMessage(this.val$callback3.this$01.tusachView, '');
    }
     else {
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + response.xmlHttpRequest.statusText);
      $onFailure_0(this.val$callback3, new Exception(response.xmlHttpRequest.statusText + '(' + response.xmlHttpRequest.status + ')'));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(($clinit_BookServiceImpl() , log_1), 'Error: ' + ex.getMessage());
      $onFailure_0(this.val$callback3, ex);
    }
     else 
      throw unwrap($e0);
  }
}
;
var Lcom_dv_gtusach_client_BookServiceImpl$9_2_classLit = createForClass('com.dv.gtusach.client', 'BookServiceImpl/9', 292);
function $clinit_ClientFactoryImpl(){
  $clinit_ClientFactoryImpl = emptyMethod;
  eventBus_0 = new SimpleEventBus_1;
  placeController_0 = new PlaceController(eventBus_0);
  logonView = new LogonViewImpl;
  mainView = new GTusachViewImpl;
  bookService = new BookServiceImpl(eventBus_0);
}

var bookService, eventBus_0, logonView, mainView, placeController_0;
function $onModuleLoad(this$static){
  var activityManager, eventBus, historyHandler, placeController;
  $clinit_ClientFactoryImpl();
  eventBus = eventBus_0;
  placeController = placeController_0;
  activityManager = new ActivityManager(eventBus);
  $setDisplay(activityManager, this$static.appWidget);
  historyHandler = new PlaceHistoryHandler;
  $register(historyHandler, placeController, eventBus, this$static.defaultPlace);
  $add_5(get_1(), this$static.appWidget);
  $handleHistoryToken(historyHandler, ($clinit_History() , $clinit_History() , token_0));
  addNativePreviewHandler(this$static);
}

function GTusach(){
  this.defaultPlace = new MainPlace('main');
  this.appWidget = new SimplePanel;
}

defineClass(196, 1, $intern_1, GTusach);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var nEvent;
  switch ($getTypeInt(event_0.nativeEvent)) {
    case 128:
      nEvent = event_0.nativeEvent;
      (!!nEvent.ctrlKey && $eventGetKeyCode(nEvent) == 82 || $eventGetKeyCode(nEvent) == 116) && $eventPreventDefault(nEvent);
  }
}
;
var Lcom_dv_gtusach_client_GTusach_2_classLit = createForClass('com.dv.gtusach.client', 'GTusach', 196);
function $create(this$static, clazz){
  $maybeInitializeCreatorMap(this$static);
  return $create_2(this$static.creatorMap, clazz, this$static);
}

function $create_0(this$static, clazz, delegate){
  $maybeInitializeCreatorMap(this$static);
  return $create_3(this$static.creatorMap, clazz, this$static, delegate);
}

function $getEnum(this$static, clazz, token){
  var e, e$iterator, list, clazz_0, superclass;
  $maybeInitializeEnumMap(this$static);
  list = dynamicCast(this$static.stringsToEnumsMap.get_2(token), 19);
  if (!list) {
    throw new IllegalArgumentException_0(token);
  }
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next_0(), 4);
    if ((clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass) == clazz) {
      return e;
    }
  }
  throw new IllegalArgumentException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
}

function $getToken(this$static, e){
  var toReturn;
  $maybeInitializeEnumMap(this$static);
  toReturn = dynamicCastToString(this$static.enumToStringMap.get_2(e));
  if (toReturn == null) {
    throw new IllegalArgumentException_0(e.name_0 != null?e.name_0:'' + e.ordinal);
  }
  return toReturn;
}

function $maybeInitializeCreatorMap(this$static){
  if (!this$static.creatorMap) {
    this$static.creatorMap = {};
    $initializeCreatorMap(this$static.creatorMap);
  }
}

function $maybeInitializeEnumMap(this$static){
  if (!this$static.enumToStringMap) {
    this$static.enumToStringMap = new HashMap;
    this$static.stringsToEnumsMap = new HashMap;
  }
}

defineClass(550, 1, {});
var Lcom_google_web_bindery_autobean_gwt_client_impl_AbstractAutoBeanFactory_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'AbstractAutoBeanFactory', 550);
function $getConstructors_com_dv_gtusach_client_model_IBook(){
  return [function(factory){
    return new IBookAutoBean(factory);
  }
  , function(factory, wrapped){
    return new IBookAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_com_dv_gtusach_client_model_IBookList(){
  return [function(factory){
    return new IBookListAutoBean(factory);
  }
  , function(factory, wrapped){
    return new IBookListAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_com_dv_gtusach_client_model_ISystemInfo(){
  return [function(factory){
    return new ISystemInfoAutoBean(factory);
  }
  , function(factory, wrapped){
    return new ISystemInfoAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_com_dv_gtusach_client_model_IUser(){
  return [function(factory){
    return new IUserAutoBean(factory);
  }
  , function(factory, wrapped){
    return new IUserAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean(factory, wrapped);
  }
  ];
}

function $initializeCreatorMap(map_0){
  $add_8(map_0, Lcom_dv_gtusach_client_model_IBook_2_classLit, $getConstructors_com_dv_gtusach_client_model_IBook());
  $add_8(map_0, Lcom_dv_gtusach_client_model_IBookList_2_classLit, $getConstructors_com_dv_gtusach_client_model_IBookList());
  $add_8(map_0, Lcom_dv_gtusach_client_model_ISystemInfo_2_classLit, $getConstructors_com_dv_gtusach_client_model_ISystemInfo());
  $add_8(map_0, Lcom_dv_gtusach_client_model_IUser_2_classLit, $getConstructors_com_dv_gtusach_client_model_IUser());
  $add_8(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List());
  $add_8(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator());
  $add_8(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator());
}

function MyAutoBeanFactoryImpl(){
}

defineClass(438, 550, {}, MyAutoBeanFactoryImpl);
var Lcom_dv_gtusach_client_MyAutoBeanFactoryImpl_2_classLit = createForClass('com.dv.gtusach.client', 'MyAutoBeanFactoryImpl', 438);
defineClass(532, 1, {});
_.onStop = function onStop(){
}
;
var Lcom_google_gwt_activity_shared_AbstractActivity_2_classLit = createForClass('com.google.gwt.activity.shared', 'AbstractActivity', 532);
function $goTo(place){
  $goTo_0(($clinit_ClientFactoryImpl() , placeController_0), place);
}

function LogonActivity(){
}

defineClass(432, 532, {}, LogonActivity);
_.start_1 = function start_1(containerWidget, eventBus){
  var view;
  view = ($clinit_ClientFactoryImpl() , logonView);
  $setWidget(containerWidget, view);
}
;
var Lcom_dv_gtusach_client_activity_LogonActivity_2_classLit = createForClass('com.dv.gtusach.client.activity', 'LogonActivity', 432);
function $clinit_MainActivity(){
  $clinit_MainActivity = emptyMethod;
  log_2 = (new LoggerImplRegular , $ensureLogger(getLogManager(), 'MainActivity'));
}

function $create_1(this$static, newBook){
  var callback;
  callback = new MainActivity$3(this$static);
  $createBook(($clinit_ClientFactoryImpl() , bookService), newBook, callback);
}

function $fireEvent(type_0, name_0, value_0){
  var ex;
  if (!($clinit_ClientFactoryImpl() , eventBus_0)) {
    $warning_0(log_2, 'event bus in client factory is null');
    return;
  }
  try {
    $fireEvent_4(eventBus_0, new PropertyChangeEvent(type_0, name_0, value_0, null));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(log_2, ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $fireEvent_0(type_0, value_0){
  var ex;
  if (!($clinit_ClientFactoryImpl() , eventBus_0)) {
    $warning_0(log_2, 'event bus in client factory is null');
    return;
  }
  try {
    $fireEvent_4(eventBus_0, new PropertyChangeEvent(type_0, 'login', value_0, 'Error connecting to server!'));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(log_2, ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $hasPermission(permission){
  var isAdmin;
  if (permission == 1) {
    return true;
  }
   else if (permission == 2) {
    return $isLogon(($clinit_BookServiceImpl() , currentUser));
  }
   else if (permission == 4) {
    return $isLogon(($clinit_BookServiceImpl() , currentUser));
  }
   else if (permission == 3) {
    return $isLogon(($clinit_BookServiceImpl() , currentUser));
  }
   else if (permission == 5) {
    isAdmin = ($clinit_BookServiceImpl() , currentUser).role.toLowerCase().indexOf('admin') != -1;
    return $isLogon(currentUser) && isAdmin;
  }
  return false;
}

function $loadBooks(this$static, bookIds){
  var callback;
  callback = new MainActivity$5(this$static, bookIds);
  !bookIds || bookIds.array.length == 0?$setInfoMessage(this$static.tusachView, 'Loading book list...'):$setInfoMessage(this$static.tusachView, 'Updating working books...');
  $getBooks(($clinit_ClientFactoryImpl() , bookService), bookIds, callback);
}

function $login_0(userName, password){
  $login(($clinit_ClientFactoryImpl() , bookService), userName, password);
}

function $refresh(this$static){
  var book, book$iterator, callback, workingBookIds;
  workingBookIds = new ArrayList;
  for (book$iterator = new AbstractList$IteratorImpl(this$static.currentBooks); book$iterator.i < book$iterator.this$01_0.size_1();) {
    book = (checkCriticalElement(book$iterator.i < book$iterator.this$01_0.size_1()) , dynamicCast(book$iterator.this$01_0.get_3(book$iterator.last = book$iterator.i++), 47));
    book.status_0 == ($clinit_Book$BookStatus() , WORKING) && $add_11(workingBookIds, valueOf_3(book.id_0));
  }
  callback = new MainActivity$6(this$static, workingBookIds);
  $getSystemInfo(($clinit_ClientFactoryImpl() , bookService), callback);
}

function $resume(this$static, bookId){
  var book, callback;
  callback = new MainActivity$4(this$static);
  book = new Book_0;
  $setId(book, __parseAndValidateInt(bookId));
  $postBook(($clinit_ClientFactoryImpl() , bookService), book, callback);
}

function MainActivity(){
  $clinit_MainActivity();
  this.currentBooks = new ArrayList;
  this.currentScripts = new ArrayList;
}

defineClass(425, 532, {}, MainActivity);
_.onStop = function onStop_0(){
  $cancel(this.refreshTimer);
}
;
_.start_1 = function start_2(containerWidget, eventBus){
  this.tusachView = ($clinit_ClientFactoryImpl() , mainView);
  $setPresenter(this.tusachView, this);
  $setInfoMessage(this.tusachView, 'Loading...');
  $setWidget(containerWidget, this.tusachView);
  $init(bookService);
  $loadBooks(this, null);
  !!this.refreshTimer && !!this.refreshTimer.timerId && $cancel(this.refreshTimer);
  this.refreshTimer = new MainActivity$1(this);
  $scheduleRepeating(this.refreshTimer, 20000);
  $addHandler_1(eventBus_0, ($clinit_PropertyChangeEvent() , TYPE), new MainActivity$2(this));
}
;
_.libraryUpdateTime = {l:$intern_2, m:$intern_2, h:$intern_3};
var log_2;
var Lcom_dv_gtusach_client_activity_MainActivity_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity', 425);
function MainActivity$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(426, 104, {}, MainActivity$1);
_.run = function run_0(){
  $refresh(this.this$01);
}
;
var Lcom_dv_gtusach_client_activity_MainActivity$1_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/1', 426);
function MainActivity$2(this$0){
  this.this$01 = this$0;
}

defineClass(427, 1, {565:1, 30:1}, MainActivity$2);
var Lcom_dv_gtusach_client_activity_MainActivity$2_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/2', 427);
function $onFailure(this$static, caught){
  var errorMsg;
  errorMsg = caught.getMessage();
  $setErrorMessage(this$static.this$01.tusachView, errorMsg);
}

function MainActivity$3(this$0){
  this.this$01 = this$0;
}

defineClass(428, 1, {}, MainActivity$3);
var Lcom_dv_gtusach_client_activity_MainActivity$3_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/3', 428);
function $onFailure_0(this$static, caught){
  var errorMsg;
  errorMsg = caught.getMessage();
  $setErrorMessage(this$static.this$01.tusachView, errorMsg);
}

function MainActivity$4(this$0){
  this.this$01 = this$0;
}

defineClass(429, 1, {}, MainActivity$4);
var Lcom_dv_gtusach_client_activity_MainActivity$4_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/4', 429);
function $onFailure_1(this$static, caught){
  var details;
  details = caught.getMessage();
  $setErrorMessage(this$static.this$01.tusachView, 'Error loading books: ' + details);
  $info_0(($clinit_MainActivity() , log_2), 'error loading books: ' + details);
}

function $onSuccess(this$static, result){
  var ex, header, i, index_0, list, reload, updatingBook, updatingBook$iterator;
  try {
    $info_0(($clinit_MainActivity() , log_2), 'finished loading books: ' + result.array.length);
    reload = !this$static.val$bookIds2 || this$static.val$bookIds2.array.length == 0;
    if (reload) {
      this$static.this$01.currentBooks.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
      $addAll(this$static.this$01.currentBooks, result);
    }
     else {
      for (updatingBook$iterator = new AbstractList$IteratorImpl(result); updatingBook$iterator.i < updatingBook$iterator.this$01_0.size_1();) {
        updatingBook = (checkCriticalElement(updatingBook$iterator.i < updatingBook$iterator.this$01_0.size_1()) , dynamicCast(updatingBook$iterator.this$01_0.get_3(updatingBook$iterator.last = updatingBook$iterator.i++), 47));
        index_0 = -1;
        for (i = 0; i < this$static.this$01.currentBooks.array.length; i++) {
          if (dynamicCast($get_3(this$static.this$01.currentBooks, i), 47).id_0 == updatingBook.id_0) {
            index_0 = i;
            break;
          }
        }
        index_0 != -1 && $set_2(this$static.this$01.currentBooks, index_0, updatingBook);
      }
    }
    list = reload?this$static.this$01.currentBooks:result;
    header = (reload?'Loaded ':'Updated ') + list.array.length + ' books. ';
    gt(this$static.this$01.libraryUpdateTime, {l:0, m:0, h:0}) && (header += new Date_0(this$static.this$01.libraryUpdateTime));
    $setInfoMessage(this$static.this$01.tusachView, header);
    $fireEvent(($clinit_PropertyChangeEvent$EventTypeEnum() , Book), reload?'load':'update', list);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $info_0(($clinit_MainActivity() , log_2), 'Error processing books. ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function MainActivity$5(this$0, val$bookIds){
  this.this$01 = this$0;
  this.val$bookIds2 = val$bookIds;
}

defineClass(430, 1, {}, MainActivity$5);
var Lcom_dv_gtusach_client_activity_MainActivity$5_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/5', 430);
function $onSuccess_0(this$static, info){
  if (eq(this$static.this$01.libraryUpdateTime, {l:$intern_2, m:$intern_2, h:$intern_3}) || neq(fromDouble(info.bookLastUpdateTime.jsdate.getTime()), this$static.this$01.libraryUpdateTime)) {
    this$static.this$01.libraryUpdateTime = fromDouble(info.bookLastUpdateTime.jsdate.getTime());
    $loadBooks(this$static.this$01, null);
  }
   else 
    this$static.val$workingBookIds2.array.length > 0 && $loadBooks(this$static.this$01, this$static.val$workingBookIds2);
}

function MainActivity$6(this$0, val$workingBookIds){
  this.this$01 = this$0;
  this.val$workingBookIds2 = val$workingBookIds;
}

defineClass(431, 1, {}, MainActivity$6);
var Lcom_dv_gtusach_client_activity_MainActivity$6_2_classLit = createForClass('com.dv.gtusach.client.activity', 'MainActivity/6', 431);
function $onFailure_2(){
  $fireEvent_0(($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication), ($clinit_BookServiceImpl() , currentUser));
}

defineClass(512, 1, {});
_.toString$ = function toString_1(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 512);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(511, 512, {});
_.dispatch = function dispatch(handler){
  this.dispatch_0(dynamicCast(handler, 30));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 511);
function $clinit_PropertyChangeEvent(){
  $clinit_PropertyChangeEvent = emptyMethod;
  TYPE = new GwtEvent$Type;
}

function $dispatch(this$static, handler){
  $onPropertyChanged(handler.this$01.tusachView, this$static);
}

function PropertyChangeEvent(eventType, name_0, value_0, errorMessage){
  $clinit_PropertyChangeEvent();
  this.name_0 = name_0;
  this.eventType = eventType;
  this.value_0 = value_0;
  this.errorMessage = errorMessage;
}

defineClass(147, 511, {}, PropertyChangeEvent);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(this, dynamicCast(handler, 565));
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_dv_gtusach_client_event_PropertyChangeEvent_2_classLit = createForClass('com.dv.gtusach.client.event', 'PropertyChangeEvent', 147);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

function valueOf(map_0, name_0){
  var result;
  checkNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_0(!!result, 'Enum constant undefined: %s', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [name_0]));
  return result;
}

defineClass(4, 1, {3:1, 5:1, 4:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, dynamicCast(other, 4));
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_PropertyChangeEvent$EventTypeEnum(){
  $clinit_PropertyChangeEvent$EventTypeEnum = emptyMethod;
  Authentication = new PropertyChangeEvent$EventTypeEnum('Authentication', 0);
  Script = new PropertyChangeEvent$EventTypeEnum('Script', 1);
  User = new PropertyChangeEvent$EventTypeEnum('User', 2);
  Book = new PropertyChangeEvent$EventTypeEnum('Book', 3);
}

function PropertyChangeEvent$EventTypeEnum(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_PropertyChangeEvent$EventTypeEnum();
  return initValues(getClassLiteralForArray(Lcom_dv_gtusach_client_event_PropertyChangeEvent$EventTypeEnum_2_classLit, 1), $intern_4, 99, 0, [Authentication, Script, User, Book]);
}

defineClass(99, 4, {99:1, 3:1, 5:1, 4:1}, PropertyChangeEvent$EventTypeEnum);
var Authentication, Book, Script, User;
var Lcom_dv_gtusach_client_event_PropertyChangeEvent$EventTypeEnum_2_classLit = createForEnum('com.dv.gtusach.client.event', 'PropertyChangeEvent/EventTypeEnum', 99, Ljava_lang_Enum_2_classLit, values_0);
function $$init(this$static){
  this$static.status_0 = ($clinit_Book$BookStatus() , NONE);
}

function $setBuildTimeSec(this$static, buildTimeSec){
  this$static.buildTimeSec = buildTimeSec;
}

function $setCreatedBy(this$static, createdBy){
  this$static.createdBy = createdBy;
}

function $setCreatedTime(this$static, createdTime){
  this$static.createdTime = createdTime;
}

function $setCurrentPageNo(this$static, currentPageNo){
  this$static.currentPageNo = currentPageNo;
}

function $setCurrentPageUrl(this$static, nextPageUrl){
  this$static.currentPageUrl = nextPageUrl;
}

function $setEpubCreated(this$static, epubCreated){
  this$static.epubCreated = epubCreated;
}

function $setErrorMsg(this$static, errorMsg){
  this$static.errorMsg = errorMsg;
}

function $setId(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setLastUpdatedTime(this$static, lastUpdatedTime){
  this$static.lastUpdatedTime = lastUpdatedTime;
}

function $setMaxNumPages(this$static, maxNumPages){
  this$static.maxNumPages = maxNumPages;
}

function $setStartPageUrl(this$static, startPageUrl){
  this$static.startPageUrl = startPageUrl;
}

function $setStatus(this$static, s){
  s != null && s.length > 0?(this$static.status_0 = ($clinit_Book$BookStatus() , dynamicCast(valueOf(($clinit_Book$BookStatus$Map() , $MAP), s), 68))):(this$static.status_0 = ($clinit_Book$BookStatus() , NONE));
}

function $setTitle(this$static, title_0){
  this$static.title_0 = title_0;
}

function Book_0(){
  $$init(this);
}

function Book_1(source){
  $$init(this);
  $setId(this, source.getId());
  $setTitle(this, source.getTitle());
  $setCreatedBy(this, source.getCreatedBy());
  $setCreatedTime(this, source.getCreatedTime());
  $setStatus(this, source.getStatus());
  $setBuildTimeSec(this, source.getBuildTimeSec());
  $setStartPageUrl(this, source.getStartPageUrl());
  $setCurrentPageNo(this, source.getCurrentPageNo());
  $setCurrentPageUrl(this, source.getCurrentPageUrl());
  $setMaxNumPages(this, source.getMaxNumPages());
  $setLastUpdatedTime(this, source.getLastUpdatedTime());
  $setErrorMsg(this, source.getErrorMsg());
  $setEpubCreated(this, source.isEpubCreated());
}

defineClass(47, 1, {47:1, 36:1}, Book_0, Book_1);
_.getAuthor = function getAuthor(){
  return this.author;
}
;
_.getBuildTimeSec = function getBuildTimeSec(){
  return this.buildTimeSec;
}
;
_.getCreatedBy = function getCreatedBy(){
  return this.createdBy;
}
;
_.getCreatedTime = function getCreatedTime(){
  return this.createdTime;
}
;
_.getCurrentPageNo = function getCurrentPageNo(){
  return this.currentPageNo;
}
;
_.getCurrentPageUrl = function getCurrentPageUrl(){
  return this.currentPageUrl;
}
;
_.getErrorMsg = function getErrorMsg(){
  return this.errorMsg;
}
;
_.getId = function getId(){
  return this.id_0;
}
;
_.getLastUpdatedTime = function getLastUpdatedTime(){
  return this.lastUpdatedTime;
}
;
_.getMaxNumPages = function getMaxNumPages(){
  return this.maxNumPages;
}
;
_.getStartPageUrl = function getStartPageUrl(){
  return this.startPageUrl;
}
;
_.getStatus = function getStatus(){
  return this.status_0?$name(this.status_0):$name(($clinit_Book$BookStatus() , NONE));
}
;
_.getTitle = function getTitle(){
  return this.title_0;
}
;
_.isEpubCreated = function isEpubCreated(){
  return this.epubCreated;
}
;
_.toString$ = function toString_3(){
  return this.title_0 + '(' + this.id_0 + ')';
}
;
_.buildTimeSec = 0;
_.createdBy = 'dv';
_.currentPageNo = 0;
_.currentPageUrl = '';
_.epubCreated = false;
_.errorMsg = '';
_.id_0 = 0;
_.maxNumPages = 0;
_.startPageUrl = '';
var Lcom_dv_gtusach_client_model_Book_2_classLit = createForClass('com.dv.gtusach.client.model', 'Book', 47);
function $clinit_Book$BookStatus(){
  $clinit_Book$BookStatus = emptyMethod;
  NONE = new Book$BookStatus('NONE', 0);
  WORKING = new Book$BookStatus('WORKING', 1);
  COMPLETED = new Book$BookStatus('COMPLETED', 2);
  ERROR = new Book$BookStatus('ERROR', 3);
  ABORTED = new Book$BookStatus('ABORTED', 4);
}

function Book$BookStatus(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Book$BookStatus();
  return initValues(getClassLiteralForArray(Lcom_dv_gtusach_client_model_Book$BookStatus_2_classLit, 1), $intern_4, 68, 0, [NONE, WORKING, COMPLETED, ERROR, ABORTED]);
}

defineClass(68, 4, {68:1, 3:1, 5:1, 4:1}, Book$BookStatus);
var ABORTED, COMPLETED, ERROR, NONE, WORKING;
var Lcom_dv_gtusach_client_model_Book$BookStatus_2_classLit = createForEnum('com.dv.gtusach.client.model', 'Book/BookStatus', 68, Ljava_lang_Enum_2_classLit, values_1);
function $clinit_Book$BookStatus$Map(){
  $clinit_Book$BookStatus$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_Book$BookStatus() , initValues(getClassLiteralForArray(Lcom_dv_gtusach_client_model_Book$BookStatus_2_classLit, 1), $intern_4, 68, 0, [NONE, WORKING, COMPLETED, ERROR, ABORTED])));
}

var $MAP;
var Lcom_dv_gtusach_client_model_IBook_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IBook');
function $checkFrozen(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_0('The AutoBean has been frozen');
  }
}

function $checkWrapped(this$static){
  if (this$static.wrapped == null && !this$static.usingSimplePeer) {
    throw new IllegalStateException_0('The AutoBean has been unwrapped');
  }
}

function $getOrReify(this$static, propertyName){
  var coder, temp, toReturn;
  $checkWrapped(this$static);
  if (isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, propertyName)) {
    temp = getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static.data_0, propertyName);
    return temp;
  }
  if (isNull_Ljava_lang_String__Z__devirtual$(this$static.data_0, propertyName)) {
    return null;
  }
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static.data_0, propertyName, null);
  coder = doCoderFor(this$static, propertyName);
  toReturn = coder.decode_0(new AutoBeanCodexImpl$EncodeState(this$static.factory, null), get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static.data_0, propertyName));
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static.data_0, propertyName, toReturn);
  return toReturn;
}

function $getWrapped(this$static){
  $checkWrapped(this$static);
  return this$static.wrapped;
}

function $setData(this$static, data_0){
  this$static.data_0 = data_0;
  this$static.wrapped = this$static.createSimplePeer();
}

function $traverse(this$static, visitor, ctx){
  if (!$add_12(ctx.seen, this$static)) {
    return;
  }
  visitor.visit(this$static, ctx) && this$static.traverseProperties(visitor, ctx);
  visitor.endVisit(this$static, ctx);
}

function AbstractAutoBean(factory){
  AbstractAutoBean_0.call(this, factory, {});
}

function AbstractAutoBean_0(factory, data_0){
  this.data_0 = data_0;
  this.factory = factory;
  this.usingSimplePeer = true;
  this.wrapped = this.createSimplePeer();
}

function AbstractAutoBean_1(wrapped, factory){
  this.factory = factory;
  this.usingSimplePeer = false;
  this.data_0 = null;
  this.wrapped = wrapped;
  setNative(wrapped, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(32, 1, $intern_5);
_.accept = function accept(visitor){
  $traverse(this, visitor, new AbstractAutoBean$OneShotContext);
}
;
_.createSimplePeer = function createSimplePeer(){
  throw new UnsupportedOperationException;
}
;
_.getFactory = function getFactory(){
  return this.factory;
}
;
_.getSplittable = function getSplittable(){
  return this.data_0;
}
;
_.setProperty = function setProperty(propertyName, value_0){
  var backing, coder;
  $checkWrapped(this);
  $checkFrozen(this);
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this.data_0, propertyName, value_0);
  if (value_0 == null) {
    $assign_1(($clinit_Splittable() , this.data_0), propertyName);
    return;
  }
  coder = doCoderFor(this, propertyName);
  backing = coder.extractSplittable(new AutoBeanCodexImpl$EncodeState(this.factory, null), value_0);
  !backing?setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this.data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(backing, this.data_0, propertyName);
}
;
_.frozen = false;
_.usingSimplePeer = false;
var Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AbstractAutoBean', 32);
function $$init_0(this$static){
  this$static.shim = new IBookAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function IBookAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_0(this);
}

function IBookAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_0(this);
}

defineClass(554, 32, $intern_5, IBookAutoBean, IBookAutoBean_0);
_.as = function as_0(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_0(){
  return new IBookAutoBean$2(this);
}
;
_.getType = function getType(){
  return Lcom_dv_gtusach_client_model_IBook_2_classLit;
}
;
_.traverseProperties = function traverseProperties(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEpubCreated(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'epubCreated') , Z_classLit));
  visitor.visitValueProperty('epubCreated', value_0, propertyContext);
  value_0 = valueOf_3($getBuildTimeSec(as));
  propertyContext = new ClientPropertyContext((beanSetter(this, 'buildTimeSec') , I_classLit));
  visitor.visitValueProperty('buildTimeSec', value_0, propertyContext);
  value_0 = valueOf_3($getCurrentPageNo(as));
  propertyContext = new ClientPropertyContext((beanSetter(this, 'currentPageNo') , I_classLit));
  visitor.visitValueProperty('currentPageNo', value_0, propertyContext);
  value_0 = valueOf_3($getId(as));
  propertyContext = new ClientPropertyContext((beanSetter(this, 'id') , I_classLit));
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = valueOf_3($getMaxNumPages(as));
  propertyContext = new ClientPropertyContext((beanSetter(this, 'maxNumPages') , I_classLit));
  visitor.visitValueProperty('maxNumPages', value_0, propertyContext);
  value_0 = $getAuthor(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'author') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('author', value_0, propertyContext);
  value_0 = $getCreatedBy(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'createdBy') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('createdBy', value_0, propertyContext);
  value_0 = $getCurrentPageUrl(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'currentPageUrl') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('currentPageUrl', value_0, propertyContext);
  value_0 = $getErrorMsg(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'errorMsg') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('errorMsg', value_0, propertyContext);
  value_0 = $getStartPageUrl(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'startPageUrl') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('startPageUrl', value_0, propertyContext);
  value_0 = $getStatus(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'status') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('status', value_0, propertyContext);
  value_0 = $getTitle(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'title') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('title', value_0, propertyContext);
  value_0 = $getCreatedTime(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'createdTime') , Ljava_util_Date_2_classLit));
  visitor.visitValueProperty('createdTime', value_0, propertyContext);
  value_0 = $getLastUpdatedTime(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'lastUpdatedTime') , Ljava_util_Date_2_classLit));
  visitor.visitValueProperty('lastUpdatedTime', value_0, propertyContext);
}
;
var Lcom_dv_gtusach_client_model_IBookAutoBean_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookAutoBean', 554);
function $getAuthor(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getAuthor();
  return toReturn;
}

function $getBuildTimeSec(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getBuildTimeSec();
  return toReturn;
}

function $getCreatedBy(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getCreatedBy();
  return toReturn;
}

function $getCreatedTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getCreatedTime();
  return toReturn;
}

function $getCurrentPageNo(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getCurrentPageNo();
  return toReturn;
}

function $getCurrentPageUrl(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getCurrentPageUrl();
  return toReturn;
}

function $getErrorMsg(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getErrorMsg();
  return toReturn;
}

function $getId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getId();
  return toReturn;
}

function $getLastUpdatedTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getLastUpdatedTime();
  return toReturn;
}

function $getMaxNumPages(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getMaxNumPages();
  return toReturn;
}

function $getStartPageUrl(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getStartPageUrl();
  return toReturn;
}

function $getStatus(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getStatus();
  return toReturn;
}

function $getTitle(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).getTitle();
  return toReturn;
}

function $isEpubCreated(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 36).isEpubCreated();
  return toReturn;
}

function IBookAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(466, 1, {36:1}, IBookAutoBean$1);
_.equals$ = function equals_1(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 36).equals$(o);
}
;
_.getAuthor = function getAuthor_0(){
  return $getAuthor(this);
}
;
_.getBuildTimeSec = function getBuildTimeSec_0(){
  return $getBuildTimeSec(this);
}
;
_.getCreatedBy = function getCreatedBy_0(){
  return $getCreatedBy(this);
}
;
_.getCreatedTime = function getCreatedTime_0(){
  return $getCreatedTime(this);
}
;
_.getCurrentPageNo = function getCurrentPageNo_0(){
  return $getCurrentPageNo(this);
}
;
_.getCurrentPageUrl = function getCurrentPageUrl_0(){
  return $getCurrentPageUrl(this);
}
;
_.getErrorMsg = function getErrorMsg_0(){
  return $getErrorMsg(this);
}
;
_.getId = function getId_0(){
  return $getId(this);
}
;
_.getLastUpdatedTime = function getLastUpdatedTime_0(){
  return $getLastUpdatedTime(this);
}
;
_.getMaxNumPages = function getMaxNumPages_0(){
  return $getMaxNumPages(this);
}
;
_.getStartPageUrl = function getStartPageUrl_0(){
  return $getStartPageUrl(this);
}
;
_.getStatus = function getStatus_0(){
  return $getStatus(this);
}
;
_.getTitle = function getTitle_0(){
  return $getTitle(this);
}
;
_.hashCode$ = function hashCode_2(){
  return dynamicCast($getWrapped(this.this$01), 36).hashCode$();
}
;
_.isEpubCreated = function isEpubCreated_0(){
  return $isEpubCreated(this);
}
;
_.toString$ = function toString_4(){
  return dynamicCast($getWrapped(this.this$01), 36).toString$();
}
;
var Lcom_dv_gtusach_client_model_IBookAutoBean$1_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookAutoBean/1', 466);
function IBookAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(467, 1, {36:1}, IBookAutoBean$2);
_.getAuthor = function getAuthor_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'author'));
}
;
_.getBuildTimeSec = function getBuildTimeSec_1(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$01, 'buildTimeSec'), 49);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCreatedBy = function getCreatedBy_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'createdBy'));
}
;
_.getCreatedTime = function getCreatedTime_1(){
  return dynamicCast($getOrReify(this.this$01, 'createdTime'), 46);
}
;
_.getCurrentPageNo = function getCurrentPageNo_1(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$01, 'currentPageNo'), 49);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCurrentPageUrl = function getCurrentPageUrl_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'currentPageUrl'));
}
;
_.getErrorMsg = function getErrorMsg_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'errorMsg'));
}
;
_.getId = function getId_1(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$01, 'id'), 49);
  return !toReturn?0:toReturn.value_0;
}
;
_.getLastUpdatedTime = function getLastUpdatedTime_1(){
  return dynamicCast($getOrReify(this.this$01, 'lastUpdatedTime'), 46);
}
;
_.getMaxNumPages = function getMaxNumPages_1(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$01, 'maxNumPages'), 49);
  return !toReturn?0:toReturn.value_0;
}
;
_.getStartPageUrl = function getStartPageUrl_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'startPageUrl'));
}
;
_.getStatus = function getStatus_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'status'));
}
;
_.getTitle = function getTitle_1(){
  return dynamicCastToString($getOrReify(this.this$01, 'title'));
}
;
_.isEpubCreated = function isEpubCreated_1(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$01, 'epubCreated'), 58);
  return !!toReturn && toReturn.value_0;
}
;
var Lcom_dv_gtusach_client_model_IBookAutoBean$2_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookAutoBean/2', 467);
var Lcom_dv_gtusach_client_model_IBookList_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IBookList');
function $$init_1(this$static){
  this$static.shim = new IBookListAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function IBookListAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_1(this);
}

function IBookListAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_1(this);
}

defineClass(555, 32, $intern_5, IBookListAutoBean, IBookListAutoBean_0);
_.as = function as_1(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_1(){
  return new IBookListAutoBean$2(this);
}
;
_.getType = function getType_0(){
  return Lcom_dv_gtusach_client_model_IBookList_2_classLit;
}
;
_.traverseProperties = function traverseProperties_0(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getBooks_0(as)), 32);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'books') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_4, 115, 0, [Ljava_util_List_2_classLit, Lcom_dv_gtusach_client_model_IBook_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [1, 0]));
  visitor.visitReferenceProperty('books', bean, propertyContext) && !!bean && $traverse(bean, visitor, ctx);
}
;
var Lcom_dv_gtusach_client_model_IBookListAutoBean_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookListAutoBean', 555);
function $getBooks_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 114).getBooks();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as(), 19)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function IBookListAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(468, 1, {114:1}, IBookListAutoBean$1);
_.equals$ = function equals_2(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 114).equals$(o);
}
;
_.getBooks = function getBooks(){
  return $getBooks_0(this);
}
;
_.hashCode$ = function hashCode_3(){
  return dynamicCast($getWrapped(this.this$01), 114).hashCode$();
}
;
_.toString$ = function toString_5(){
  return dynamicCast($getWrapped(this.this$01), 114).toString$();
}
;
var Lcom_dv_gtusach_client_model_IBookListAutoBean$1_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookListAutoBean/1', 468);
function IBookListAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(469, 1, {114:1}, IBookListAutoBean$2);
_.getBooks = function getBooks_0(){
  return dynamicCast($getOrReify(this.this$01, 'books'), 19);
}
;
var Lcom_dv_gtusach_client_model_IBookListAutoBean$2_2_classLit = createForClass('com.dv.gtusach.client.model', 'IBookListAutoBean/2', 469);
var Lcom_dv_gtusach_client_model_ISystemInfo_2_classLit = createForInterface('com.dv.gtusach.client.model', 'ISystemInfo');
function $$init_2(this$static){
  this$static.shim = new ISystemInfoAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function ISystemInfoAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_2(this);
}

function ISystemInfoAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_2(this);
}

defineClass(556, 32, $intern_5, ISystemInfoAutoBean, ISystemInfoAutoBean_0);
_.as = function as_2(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_2(){
  return new ISystemInfoAutoBean$2(this);
}
;
_.getType = function getType_1(){
  return Lcom_dv_gtusach_client_model_ISystemInfo_2_classLit;
}
;
_.traverseProperties = function traverseProperties_1(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getParserEditing(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'parserEditing') , Ljava_lang_Boolean_2_classLit));
  visitor.visitValueProperty('parserEditing', value_0, propertyContext);
  value_0 = $getBookLastUpdateTime(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'bookLastUpdateTime') , Ljava_util_Date_2_classLit));
  visitor.visitValueProperty('bookLastUpdateTime', value_0, propertyContext);
  value_0 = $getSystemUpTime(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'systemUpTime') , Ljava_util_Date_2_classLit));
  visitor.visitValueProperty('systemUpTime', value_0, propertyContext);
}
;
var Lcom_dv_gtusach_client_model_ISystemInfoAutoBean_2_classLit = createForClass('com.dv.gtusach.client.model', 'ISystemInfoAutoBean', 556);
function $getBookLastUpdateTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 78).getBookLastUpdateTime();
  return toReturn;
}

function $getParserEditing(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 78).getParserEditing();
  return toReturn;
}

function $getSystemUpTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 78).getSystemUpTime();
  return toReturn;
}

function ISystemInfoAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(470, 1, {78:1}, ISystemInfoAutoBean$1);
_.equals$ = function equals_3(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 78).equals$(o);
}
;
_.getBookLastUpdateTime = function getBookLastUpdateTime(){
  return $getBookLastUpdateTime(this);
}
;
_.getParserEditing = function getParserEditing(){
  return $getParserEditing(this);
}
;
_.getSystemUpTime = function getSystemUpTime(){
  return $getSystemUpTime(this);
}
;
_.hashCode$ = function hashCode_4(){
  return dynamicCast($getWrapped(this.this$01), 78).hashCode$();
}
;
_.toString$ = function toString_6(){
  return dynamicCast($getWrapped(this.this$01), 78).toString$();
}
;
var Lcom_dv_gtusach_client_model_ISystemInfoAutoBean$1_2_classLit = createForClass('com.dv.gtusach.client.model', 'ISystemInfoAutoBean/1', 470);
function ISystemInfoAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(471, 1, {78:1}, ISystemInfoAutoBean$2);
_.getBookLastUpdateTime = function getBookLastUpdateTime_0(){
  return dynamicCast($getOrReify(this.this$01, 'bookLastUpdateTime'), 46);
}
;
_.getParserEditing = function getParserEditing_0(){
  return dynamicCast($getOrReify(this.this$01, 'parserEditing'), 58);
}
;
_.getSystemUpTime = function getSystemUpTime_0(){
  return dynamicCast($getOrReify(this.this$01, 'systemUpTime'), 46);
}
;
var Lcom_dv_gtusach_client_model_ISystemInfoAutoBean$2_2_classLit = createForClass('com.dv.gtusach.client.model', 'ISystemInfoAutoBean/2', 471);
var Lcom_dv_gtusach_client_model_IUser_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IUser');
function $$init_3(this$static){
  this$static.shim = new IUserAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function IUserAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_3(this);
}

function IUserAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_3(this);
}

defineClass(557, 32, $intern_5, IUserAutoBean, IUserAutoBean_0);
_.as = function as_3(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_3(){
  return new IUserAutoBean$2(this);
}
;
_.getType = function getType_2(){
  return Lcom_dv_gtusach_client_model_IUser_2_classLit;
}
;
_.traverseProperties = function traverseProperties_2(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getName(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'name') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('name', value_0, propertyContext);
  value_0 = $getPassword(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'password') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('password', value_0, propertyContext);
  value_0 = $getRole(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'role') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('role', value_0, propertyContext);
  value_0 = $getSessionId(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'sessionId') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('sessionId', value_0, propertyContext);
  value_0 = $getLastLogonTime(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'lastLogonTime') , Ljava_util_Date_2_classLit));
  visitor.visitValueProperty('lastLogonTime', value_0, propertyContext);
}
;
var Lcom_dv_gtusach_client_model_IUserAutoBean_2_classLit = createForClass('com.dv.gtusach.client.model', 'IUserAutoBean', 557);
function $getLastLogonTime(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 57).getLastLogonTime();
  return toReturn;
}

function $getName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 57).getName();
  return toReturn;
}

function $getPassword(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 57).getPassword();
  return toReturn;
}

function $getRole(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 57).getRole();
  return toReturn;
}

function $getSessionId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 57).getSessionId();
  return toReturn;
}

function IUserAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(472, 1, {57:1}, IUserAutoBean$1);
_.equals$ = function equals_4(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 57).equals$(o);
}
;
_.getLastLogonTime = function getLastLogonTime(){
  return $getLastLogonTime(this);
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getPassword = function getPassword(){
  return $getPassword(this);
}
;
_.getRole = function getRole(){
  return $getRole(this);
}
;
_.getSessionId = function getSessionId(){
  return $getSessionId(this);
}
;
_.hashCode$ = function hashCode_5(){
  return dynamicCast($getWrapped(this.this$01), 57).hashCode$();
}
;
_.toString$ = function toString_7(){
  return dynamicCast($getWrapped(this.this$01), 57).toString$();
}
;
var Lcom_dv_gtusach_client_model_IUserAutoBean$1_2_classLit = createForClass('com.dv.gtusach.client.model', 'IUserAutoBean/1', 472);
function IUserAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(473, 1, {57:1}, IUserAutoBean$2);
_.getLastLogonTime = function getLastLogonTime_0(){
  return dynamicCast($getOrReify(this.this$01, 'lastLogonTime'), 46);
}
;
_.getName = function getName_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'name'));
}
;
_.getPassword = function getPassword_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'password'));
}
;
_.getRole = function getRole_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'role'));
}
;
_.getSessionId = function getSessionId_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'sessionId'));
}
;
var Lcom_dv_gtusach_client_model_IUserAutoBean$2_2_classLit = createForClass('com.dv.gtusach.client.model', 'IUserAutoBean/2', 473);
function $setDomainName(this$static, domainName){
  this$static.domainName = domainName;
}

function $setId_0(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setScript(this$static, script){
  this$static.script = script;
}

function ParserScript(){
}

defineClass(110, 1, {110:1}, ParserScript);
_.toString$ = function toString_8(){
  return this.domainName + '(' + this.timestamp + ')';
}
;
var Lcom_dv_gtusach_client_model_ParserScript_2_classLit = createForClass('com.dv.gtusach.client.model', 'ParserScript', 110);
function $setBookLastUpdateTime(this$static, bookLastUpdateTime){
  this$static.bookLastUpdateTime = bookLastUpdateTime;
}

function $setParserEditing(this$static, parserEditing){
  this$static.parserEditing = parserEditing;
}

function $setSystemUpTime(this$static, systemUpTime){
  this$static.systemUpTime = systemUpTime;
}

function SystemInfo(source){
  $setBookLastUpdateTime(this, source.getBookLastUpdateTime());
  $setParserEditing(this, source.getParserEditing());
  $setSystemUpTime(this, source.getSystemUpTime());
}

defineClass(464, 1, {78:1}, SystemInfo);
_.getBookLastUpdateTime = function getBookLastUpdateTime_1(){
  return this.bookLastUpdateTime;
}
;
_.getParserEditing = function getParserEditing_1(){
  return this.parserEditing;
}
;
_.getSystemUpTime = function getSystemUpTime_1(){
  return this.systemUpTime;
}
;
_.toString$ = function toString_9(){
  return 'bookLastUpdateTime= ' + this.bookLastUpdateTime + ', systemUpTime= ' + this.systemUpTime + ', parserEditing= ' + this.parserEditing;
}
;
var Lcom_dv_gtusach_client_model_SystemInfo_2_classLit = createForClass('com.dv.gtusach.client.model', 'SystemInfo', 464);
function $$init_4(this$static){
}

function $isLogon(this$static){
  return this$static.sessionId != null && this$static.sessionId.length > 0;
}

function $update(this$static, user){
  this$static.name_0 = user.getName();
  this$static.password = user.getPassword();
  this$static.lastLogonTime = user.getLastLogonTime();
  this$static.role = user.getRole();
  this$static.sessionId = user.getSessionId();
}

function User_0(){
  $$init_4(this);
}

function User_1(source){
  $$init_4(this);
  $update(this, source);
}

function User_2(){
  $$init_4(this);
  this.name_0 = '';
  this.role = '';
}

defineClass(66, 1, {57:1}, User_0, User_1, User_2);
_.getLastLogonTime = function getLastLogonTime_1(){
  return this.lastLogonTime;
}
;
_.getName = function getName_1(){
  return this.name_0;
}
;
_.getPassword = function getPassword_1(){
  return this.password;
}
;
_.getRole = function getRole_1(){
  return this.role;
}
;
_.getSessionId = function getSessionId_1(){
  return this.sessionId;
}
;
_.toString$ = function toString_10(){
  return this.name_0 + '/' + this.role;
}
;
_.sessionId = '';
var Lcom_dv_gtusach_client_model_User_2_classLit = createForClass('com.dv.gtusach.client.model', 'User', 66);
function $getActivity(place){
  if (instanceOf(place, 69))
    return new MainActivity(dynamicCast(place, 69));
  else if (instanceOf(place, 96))
    return new LogonActivity(dynamicCast(place, 96));
  return null;
}

function $getPlace(token){
  var colonAt, initial, rest, tokenizer;
  colonAt = $indexOf_1(token, fromCodePoint(58));
  if (colonAt >= 0) {
    initial = token.substr(0, colonAt);
    rest = __substr(token, colonAt + 1, token.length - (colonAt + 1));
  }
   else {
    initial = '';
    rest = token;
  }
  tokenizer = $getTokenizer(initial);
  if (tokenizer) {
    return tokenizer.getPlace(rest);
  }
  return null;
}

function $getToken_0(place){
  var token;
  token = $getPrefixAndToken(place);
  if (token) {
    return token.prefix.length == 0?token.token:token.prefix + ':' + token.token;
  }
  return null;
}

function $getPrefixAndToken(newPlace){
  var place;
  if (instanceOf(newPlace, 96)) {
    place = dynamicCast(newPlace, 96);
    return new AbstractPlaceHistoryMapper$PrefixAndToken('LogonPlace', place.name_0);
  }
  if (instanceOf(newPlace, 69)) {
    place = dynamicCast(newPlace, 69);
    return new AbstractPlaceHistoryMapper$PrefixAndToken('MainPlace', place.name_0);
  }
  return null;
}

function $getTokenizer(prefix){
  if ($equals('LogonPlace', prefix)) {
    return new LogonPlace$Tokenizer;
  }
  if ($equals('MainPlace', prefix)) {
    return new MainPlace$Tokenizer;
  }
  return null;
}

function $clinit_Place(){
  $clinit_Place = emptyMethod;
  NOWHERE = new Place$1;
}

defineClass(529, 1, {});
var NOWHERE;
var Lcom_google_gwt_place_shared_Place_2_classLit = createForClass('com.google.gwt.place.shared', 'Place', 529);
function LogonPlace(token){
  $clinit_Place();
  this.name_0 = token;
}

defineClass(96, 529, {96:1}, LogonPlace);
var Lcom_dv_gtusach_client_place_LogonPlace_2_classLit = createForClass('com.dv.gtusach.client.place', 'LogonPlace', 96);
function LogonPlace$Tokenizer(){
}

defineClass(333, 1, {}, LogonPlace$Tokenizer);
_.getPlace = function getPlace(token){
  return new LogonPlace(token);
}
;
var Lcom_dv_gtusach_client_place_LogonPlace$Tokenizer_2_classLit = createForClass('com.dv.gtusach.client.place', 'LogonPlace/Tokenizer', 333);
function MainPlace(token){
  $clinit_Place();
  this.name_0 = token;
}

defineClass(69, 529, {69:1}, MainPlace);
var Lcom_dv_gtusach_client_place_MainPlace_2_classLit = createForClass('com.dv.gtusach.client.place', 'MainPlace', 69);
function MainPlace$Tokenizer(){
}

defineClass(214, 1, {}, MainPlace$Tokenizer);
_.getPlace = function getPlace_0(token){
  return new MainPlace(token);
}
;
var Lcom_dv_gtusach_client_place_MainPlace$Tokenizer_2_classLit = createForClass('com.dv.gtusach.client.place', 'MainPlace/Tokenizer', 214);
function $clinit_GTusachView$ActionEnum(){
  $clinit_GTusachView$ActionEnum = emptyMethod;
  Download = new GTusachView$ActionEnum('Download', 0);
  Delete = new GTusachView$ActionEnum('Delete', 1);
  Resume = new GTusachView$ActionEnum('Resume', 2);
  Abort = new GTusachView$ActionEnum('Abort', 3);
}

function GTusachView$ActionEnum(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function valueOf_0(name_0){
  $clinit_GTusachView$ActionEnum();
  return valueOf(($clinit_GTusachView$ActionEnum$Map() , $MAP_0), name_0);
}

function values_2(){
  $clinit_GTusachView$ActionEnum();
  return initValues(getClassLiteralForArray(Lcom_dv_gtusach_client_ui_GTusachView$ActionEnum_2_classLit, 1), $intern_4, 83, 0, [Download, Delete, Resume, Abort]);
}

defineClass(83, 4, {83:1, 3:1, 5:1, 4:1}, GTusachView$ActionEnum);
var Abort, Delete, Download, Resume;
var Lcom_dv_gtusach_client_ui_GTusachView$ActionEnum_2_classLit = createForEnum('com.dv.gtusach.client.ui', 'GTusachView/ActionEnum', 83, Ljava_lang_Enum_2_classLit, values_2);
function $clinit_GTusachView$ActionEnum$Map(){
  $clinit_GTusachView$ActionEnum$Map = emptyMethod;
  $MAP_0 = createValueOfMap(($clinit_GTusachView$ActionEnum() , initValues(getClassLiteralForArray(Lcom_dv_gtusach_client_ui_GTusachView$ActionEnum_2_classLit, 1), $intern_4, 83, 0, [Download, Delete, Resume, Abort])));
}

var $MAP_0;
function $addStyleName(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $removeStyleName(this$static){
  setStyleName(($clinit_DOM() , this$static.element), 'errorLabel', false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setStyleName(this$static){
  $setClassName(($clinit_DOM() , this$static.element), 'gwt-Label');
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(($clinit_DOM() , this$static.element), style, add_0);
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getClassName(elem);
  spaceIdx = $indexOf_1(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(13, 1, {17:1, 13:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_11(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 13);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.sinkEvents(typeInt);
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler(this$static, handler, type_0){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_1(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_2(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener_0(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener_0(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 38)) {
    dynamicCast(this$static.parent_0, 38).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, null));
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(11, 13, $intern_7);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent(event_0){
  $fireEvent_1(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents(eventBitsToAdd){
  $sinkEvents(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 11);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(539, 11, $intern_7);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_0(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget.onAttach();
  $clinit_DOM();
  setEventListener_0(this.element, this);
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    fire_0(this, false);
  }
   finally {
    this.widget.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 539);
function $clinit_GTusachViewImpl(){
  $clinit_GTusachViewImpl = emptyMethod;
  log_3 = (new LoggerImplRegular , $ensureLogger(getLogManager(), 'GTusachViewImpl'));
}

function $createImageWidget(this$static, book, action, enabled){
  var anchor, ex, image, ref, url_0;
  anchor = new Anchor_0;
  try {
    ($clinit_DOM() , anchor.element).style['cursor'] = ($clinit_Style$Cursor() , 'pointer');
    image = new GTusachViewImpl$ActionImage(action, enabled);
    $appendChild(anchor.element, image.element);
    ref = (action.name_0 != null?action.name_0:'' + action.ordinal) + '@' + book.id_0;
    $setName(anchor.element, ref);
    if (action == ($clinit_GTusachView$ActionEnum() , Download)) {
      anchor.element.type = 'application/epub+zip';
      url_0 = '/downloadBook/' + book.title_0 + '.epub' + '?bookId=' + book.id_0;
      $setHref(anchor.element, url_0);
    }
     else {
      $addDomHandler(anchor, this$static, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $printStackTrace(ex, ($clinit_System() , err));
    }
     else 
      throw unwrap($e0);
  }
  return anchor;
}

function $createNewBook(this$static){
  var author, newBook, numPageStr, numPages, title_0, url_0;
  $removeStyleName(this$static.messageLabel);
  $setText_1(this$static.messageLabel, '');
  url_0 = $getPropertyString($getElement(this$static.textURL), 'value');
  title_0 = $getPropertyString($getElement(this$static.textTitle), 'value');
  numPageStr = $getPropertyString($getElement(this$static.textNumPages), 'value');
  author = $getPropertyString($getElement(this$static.textAuthor), 'value');
  if (url_0 == null || $trim(url_0).length == 0) {
    $addStyleName(this$static.messageLabel, 'errorLabel');
    $setText_1(this$static.messageLabel, 'The URL cannot be empty!');
    return;
  }
  if (title_0 == null || $trim(title_0).length == 0) {
    $addStyleName(this$static.messageLabel, 'errorLabel');
    $setText_1(this$static.messageLabel, 'The Title cannot be empty!');
    return;
  }
  numPages = 0;
  if ($trim(numPageStr).length > 0) {
    try {
      numPages = __parseAndValidateInt($trim(numPageStr));
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 40)) {
        $addStyleName(this$static.messageLabel, 'errorLabel');
        $setText_1(this$static.messageLabel, 'Num Pages must be an integer!');
        return;
      }
       else 
        throw unwrap($e0);
    }
  }
  newBook = new Book_0;
  newBook.author = author;
  newBook.title_0 = title_0;
  newBook.maxNumPages = numPages;
  newBook.startPageUrl = url_0;
  $create_1(this$static.listener, newBook);
  $setText_2(this$static.textURL, '');
  $setText_2(this$static.textTitle, '');
  $setText_2(this$static.textAuthor, '');
  $setText_2(this$static.textNumPages, '0');
}

function $initProfilePanel(this$static){
  var user;
  $removeAllRows(this$static.profileTable);
  user = this$static.listener?($clinit_BookServiceImpl() , currentUser):new User_0;
  if (!!user && user.sessionId != null && user.sessionId.length > 0) {
    $setText_0(this$static.profileTable, 0, 0, 'Name:');
    $setText_0(this$static.profileTable, 0, 1, user.name_0);
    $setText_0(this$static.profileTable, 1, 0, 'Role:');
    $setText_0(this$static.profileTable, 1, 1, user.role);
    $setWidget_2(this$static.profileTable, 2, 0, this$static.logInOutButton);
    $setColSpan(this$static.profileTable.cellFormatter, 2);
    $setText(this$static.logInOutButton, 'Sign out');
  }
   else {
    $setText_0(this$static.profileTable, 0, 0, 'Name:');
    $setWidget_2(this$static.profileTable, 0, 1, this$static.textUserName);
    $setWidth(this$static.textUserName, '150px');
    $setText_0(this$static.profileTable, 1, 0, 'Password:');
    $setWidget_2(this$static.profileTable, 1, 1, this$static.textPassword);
    $setWidth(this$static.textPassword, '150px');
    $setWidget_2(this$static.profileTable, 2, 0, this$static.logInOutButton);
    $setColSpan(this$static.profileTable.cellFormatter, 2);
    $setText(this$static.logInOutButton, 'Sign in');
  }
}

function $initScriptPanel(this$static){
  var isAdmin, user;
  user = this$static.listener?($clinit_BookServiceImpl() , currentUser):new User_0;
  isAdmin = !!user && user.sessionId != null && user.sessionId.length > 0 && user.role.indexOf('admin') != -1;
  $setVisible(this$static.scriptPanel, isAdmin);
  if (isAdmin) {
    $setEnabled(this$static.chkScriptList, this$static.scriptMode == 0);
    $setEnabled(this$static.newButton, this$static.scriptMode == 0);
    $setEnabled(this$static.saveEditButton, this$static.scriptMode != 2);
    $setEnabled(this$static.deleteCancelButton, this$static.scriptMode != 2);
    $setEnabled(this$static.textDomainName, this$static.scriptMode == 1);
    $setEnabled(this$static.scriptTextArea, this$static.scriptMode == 1);
    $setAttribute($getElement(this$static.scriptTextArea), 'wrap', 'off');
    if (this$static.scriptMode != 2) {
      if (this$static.scriptMode == 0) {
        $setText_2(this$static.scriptTextArea, '');
        $setText_2(this$static.textDomainName, '');
        $setSelectedIndex(this$static.chkScriptList);
        $setText(this$static.saveEditButton, 'Edit');
        $setText(this$static.deleteCancelButton, 'Delete');
      }
       else if (this$static.scriptMode == 1) {
        $setText(this$static.saveEditButton, 'Save');
        $setText(this$static.deleteCancelButton, 'Cancel');
      }
    }
  }
}

function $onPropertyChanged(this$static, event_0){
  var canCreate, list, script, script$iterator;
  $info_0(log_3, 'received event: ' + $name(event_0.eventType));
  if (event_0.eventType == ($clinit_PropertyChangeEvent$EventTypeEnum() , Authentication)) {
    if (event_0.errorMessage != null) {
      $setErrorMessage(this$static, event_0.errorMessage);
    }
     else {
      this$static.listener?($clinit_BookServiceImpl() , currentUser):new User_0;
      $removeStyleName(this$static.messageLabel);
      $setText_1(this$static.messageLabel, '');
      $initProfilePanel(this$static);
      $setOpen(this$static.profilePanel, false);
      canCreate = $hasPermission(2);
      $setEnabled(this$static.createBookButton, canCreate);
      canCreate?$setVisible(this$static.createPanel, true):$setVisible(this$static.createPanel, false);
      $initScriptPanel(this$static);
      list = new ArrayList_1(new AbstractMap$2(this$static.bookTableMap));
      $setBooks(this$static, list, false);
    }
  }
   else if (event_0.eventType == Script) {
    if (event_0.errorMessage != null) {
      $setErrorMessage(this$static, event_0.errorMessage);
      $equals(event_0.name_0, 'update')?(this$static.scriptMode = 1 , $initScriptPanel(this$static)):(this$static.scriptMode = 0 , $initScriptPanel(this$static));
    }
     else {
      this$static.scripts.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
      $addAll(this$static.scripts, this$static.listener.currentScripts);
      $getSelectElement(this$static.chkScriptList).options.length = 0;
      for (script$iterator = new AbstractList$IteratorImpl(this$static.scripts); script$iterator.i < script$iterator.this$01_0.size_1();) {
        script = (checkCriticalElement(script$iterator.i < script$iterator.this$01_0.size_1()) , dynamicCast(script$iterator.this$01_0.get_3(script$iterator.last = script$iterator.i++), 110));
        $insertItem(this$static.chkScriptList, script.domainName);
      }
      if ($equals(event_0.name_0, 'update')) {
        this$static.currentScript = null;
        this$static.scriptMode = 0;
        $initScriptPanel(this$static);
      }
       else if ($equals(event_0.name_0, 'deleted')) {
        this$static.currentScript = null;
        this$static.scriptMode = 0;
        $initScriptPanel(this$static);
      }
    }
  }
   else 
    event_0.eventType == Book && ($equals(event_0.name_0, 'load')?$setBooks(this$static, dynamicCast(event_0.value_0, 19), true):$equals(event_0.name_0, 'update') && $setBooks(this$static, dynamicCast(event_0.value_0, 19), false));
}

function $setBooks(this$static, bookList, reload){
  var book, book$iterator, entry, ex, i, i0, i1, iter, row;
  try {
    if (reload) {
      $info_0(log_3, 'reloading books #' + bookList.size_1());
      this$static.bookTableMap.clear_0();
      for (i0 = 1; i0 < $getDOMRowCount(this$static.bookListTable); i0++) {
        $removeRow(this$static.bookListTable, i0);
      }
      $info_0(log_3, 'sorting books...');
      sort_0(bookList, this$static.comparator);
      for (i1 = 0; i1 < bookList.size_1(); i1++) {
        row = i1 + 1;
        $updateBook(this$static, row, dynamicCast(bookList.get_3(i1), 47));
        this$static.bookTableMap.put(valueOf_3(row), dynamicCast(bookList.get_3(i1), 47));
      }
      $info_0(log_3, 'reloading books completed');
    }
     else {
      $info_0(log_3, 'updating books...');
      for (book$iterator = bookList.iterator(); book$iterator.hasNext();) {
        book = dynamicCast(book$iterator.next_0(), 47);
        row = -1;
        iter = this$static.bookTableMap.entrySet_0().iterator();
        while (iter.hasNext()) {
          entry = dynamicCast(iter.next_0(), 24);
          if (dynamicCast(entry.getValue(), 47).id_0 == book.id_0) {
            row = dynamicCast(entry.getKey(), 49).value_0;
            break;
          }
        }
        if (row != -1) {
          $updateBook(this$static, row, book);
          this$static.bookTableMap.put(valueOf_3(row), book);
        }
      }
      $info_0(log_3, 'updating books completed');
    }
    for (i = 0; i < $getDOMRowCount(this$static.bookListTable); i++) {
      $setVisible_0(this$static.bookListTable.cellFormatter, i, 4, $getValue(this$static.showBookDetails).value_0);
      $setVisible_0(this$static.bookListTable.cellFormatter, i, 5, $getValue(this$static.showBookDetails).value_0);
      $setVisible_0(this$static.bookListTable.cellFormatter, i, 6, $getValue(this$static.showBookDetails).value_0);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(log_3, 'Error refreshing display. ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $setErrorMessage(this$static, error){
  $addStyleName(this$static.messageLabel, 'errorLabel');
  $setText_1(this$static.messageLabel, error);
}

function $setInfoMessage(this$static, info){
  $removeStyleName(this$static.messageLabel);
  $setText_1(this$static.messageLabel, info);
}

function $setPresenter(this$static, listener){
  this$static.listener = listener;
  $initProfilePanel(this$static);
}

function $updateBook(this$static, row, book){
  var ex, isWorking, panel, pageStr;
  try {
    panel = new HorizontalPanel;
    $setPropertyInt(panel.table, 'cellSpacing', 10);
    $setWidget_2(this$static.bookListTable, row, 0, panel);
    isWorking = book.status_0 == ($clinit_Book$BookStatus() , WORKING);
    $add_4(panel, $createImageWidget(this$static, book, ($clinit_GTusachView$ActionEnum() , Download), $hasPermission(1) && book.epubCreated && !isWorking));
    $add_4(panel, $createImageWidget(this$static, book, Resume, $hasPermission(4) && !isWorking));
    isWorking?$add_4(panel, $createImageWidget(this$static, book, Abort, $hasPermission(4))):$add_4(panel, $createImageWidget(this$static, book, Delete, $hasPermission(3)));
    $setText_0(this$static.bookListTable, row, 1, book.title_0);
    $setText_0(this$static.bookListTable, row, 2, book.status_0?$name(book.status_0):$name(NONE));
    $setText_0(this$static.bookListTable, row, 3, (pageStr = book.currentPageNo + '/' , book.maxNumPages > 0?(pageStr += book.maxNumPages):(pageStr += 'end') , pageStr));
    $setText_0(this$static.bookListTable, row, 4, $toString_3(book.lastUpdatedTime));
    $setText_0(this$static.bookListTable, row, 5, book.errorMsg);
    $setText_0(this$static.bookListTable, row, 6, book.currentPageUrl);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      $warning_0(log_3, 'Error updating book, row: ' + row + '. ' + ex.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $updateBookListPanelSize(this$static){
  var heightPx;
  heightPx = max_0(200, $getClientHeight($doc) - ($getBoundingClientRectTop(($clinit_DOM() , this$static.bookListPanel.element)) + $wnd.pageYOffset | 0) - 50);
  $setHeight(this$static.bookListPanel, heightPx + 'px');
}

function GTusachViewImpl(){
  var user;
  $clinit_GTusachViewImpl();
  this.createBookButton = new Button_0('Create');
  this.logInOutButton = new Button_0('');
  this.textURL = new TextBox;
  this.textTitle = new TextBox;
  this.textNumPages = new TextBox;
  this.textAuthor = new TextBox;
  this.textUserName = new TextBox;
  this.textPassword = new PasswordTextBox;
  this.bookTableMap = new HashMap;
  this.scripts = new ArrayList;
  this.comparator = new GTusachViewImpl$BookComparator;
  this.resizeTimer = new GTusachViewImpl$1(this);
  $initWidget(this, $build_f_HTMLPanel1(new GTusachViewImpl_GTusachViewImplUiBinderImpl$Widgets(this)));
  $initProfilePanel(this);
  $setText_0(this.createTable, 0, 0, 'URL');
  $setWidget_2(this.createTable, 0, 1, this.textURL);
  $setWidth(this.textURL, '90%');
  $setText_0(this.createTable, 1, 0, 'Title');
  $setWidget_2(this.createTable, 1, 1, this.textTitle);
  $setWidth(this.textTitle, '90%');
  $setText_0(this.createTable, 2, 0, 'Author');
  $setWidget_2(this.createTable, 2, 1, this.textAuthor);
  $setWidth(this.textAuthor, '90%');
  $setText_0(this.createTable, 3, 0, 'Num Pages');
  $setWidget_2(this.createTable, 3, 1, this.textNumPages);
  $setWidth(this.textNumPages, '90px');
  $setText_2(this.textNumPages, '0');
  $setWidget_2(this.createTable, 4, 0, this.createBookButton);
  $setColSpan(this.createTable.cellFormatter, 4);
  user = this.listener?($clinit_BookServiceImpl() , currentUser):new User_0;
  !user || user.sessionId != null && user.sessionId.length > 0?$setVisible(this.createPanel, false):$setVisible(this.createPanel, false);
  $initScriptPanel(this);
  $setValue(this.showBookDetails, ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  $addDomHandler(this.showBookDetails, this, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $setHeight(this.bookListTable, '30px');
  $setText_0(this.bookListTable, 0, 0, '');
  $setWidth_1(this.bookListTable.columnFormatter, 0, '75px');
  $setText_0(this.bookListTable, 0, 1, 'Title');
  $setWidth_1(this.bookListTable.columnFormatter, 1, '100px');
  $setText_0(this.bookListTable, 0, 2, 'Status');
  $setWidth_1(this.bookListTable.columnFormatter, 2, '50px');
  $setText_0(this.bookListTable, 0, 3, '#Pages');
  $setWidth_1(this.bookListTable.columnFormatter, 3, '50px');
  $setText_0(this.bookListTable, 0, 4, 'Date');
  $setText_0(this.bookListTable, 0, 5, 'Error Message');
  $setText_0(this.bookListTable, 0, 6, 'Current Page URL');
  $setPropertyInt(this.bookListTable.tableElem, 'cellPadding', 5);
  $addStyleName_1(this.bookListTable.rowFormatter);
  $addStyleName(this.bookListTable, 'bookListTable');
  $addStyleName_0(this.bookListTable.cellFormatter);
  $updateBookListPanelSize(this);
  $addDomHandler(this.chkScriptList, this, (null , TYPE_0));
  $addDomHandler(this.newButton, this, (null , TYPE_0));
  $addDomHandler(this.saveEditButton, this, (null , TYPE_0));
  $addDomHandler(this.deleteCancelButton, this, (null , TYPE_0));
  $addDomHandler(this.createBookButton, this, (null , TYPE_0));
  $addDomHandler(this.logInOutButton, this, (null , TYPE_0));
  $addHandler(this.profilePanel, new GTusachViewImpl$2(this), (!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7));
  $addHandler(this.profilePanel, new GTusachViewImpl$3(this), TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type));
  $addHandler(this.createPanel, new GTusachViewImpl$4(this), (!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7));
  $addHandler(this.createPanel, new GTusachViewImpl$5(this), TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type));
  addResizeHandler(new GTusachViewImpl$6(this));
}

defineClass(272, 539, {193:1, 20:1, 30:1, 12:1, 18:1, 17:1, 21:1, 13:1, 11:1}, GTusachViewImpl);
_.onClick = function onClick(event_0){
  var action, anchor, bookId, index_0, list, ref, updatingScript;
  if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.logInOutButton)) {
    if ($equals($getText(this.logInOutButton), 'Sign in')) {
      $removeStyleName(this.messageLabel);
      $setText_1(this.messageLabel, 'Signing in...');
      $login_0($getPropertyString($getElement(this.textUserName), 'value'), $getPropertyString($getElement(this.textPassword), 'value'));
    }
     else {
      $logout(($clinit_ClientFactoryImpl() , bookService));
    }
  }
   else if (instanceOf(event_0.source, 109)) {
    anchor = dynamicCast(event_0.source, 109);
    ref = ($clinit_DOM() , anchor.element).name;
    index_0 = ref.indexOf('@');
    action = valueOf_0(ref.substr(0, index_0));
    bookId = __substr(ref, index_0 + 1, ref.length - (index_0 + 1));
    switch (action.ordinal) {
      case 0:
        $wnd.open('/api/downloadBook/' + bookId, '', '');
        break;
      case 2:
        $resume(this.listener, bookId);
        break;
      case 1:
        $wnd.confirm('Are you sure you want to delete this book?') && undefined;
    }
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.createBookButton)) {
    $createNewBook(this);
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.newButton)) {
    this.currentScript = new ParserScript;
    $setText_2(this.textDomainName, '');
    $setText_2(this.scriptTextArea, '');
    this.scriptMode = 1;
    $initScriptPanel(this);
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.saveEditButton)) {
    if ($equalsIgnoreCase($getText(this.saveEditButton), 'Save')) {
      this.scriptMode = 2;
      $initScriptPanel(this);
      updatingScript = new ParserScript;
      $setId_0(updatingScript, this.currentScript.id_0);
      $setDomainName(updatingScript, $getPropertyString($getElement(this.textDomainName), 'value'));
      $setScript(updatingScript, $getPropertyString($getElement(this.scriptTextArea), 'value'));
    }
     else {
      this.currentScript?(this.scriptMode = 1 , $initScriptPanel(this)):($addStyleName(this.messageLabel, 'errorLabel') , $setText_1(this.messageLabel, 'No script selected!'));
    }
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.deleteCancelButton)) {
    if ($equalsIgnoreCase($getText(this.deleteCancelButton), 'Delete')) {
      if (this.currentScript) {
        this.scriptMode = 2;
        $initScriptPanel(this);
      }
       else {
        $addStyleName(this.messageLabel, 'errorLabel');
        $setText_1(this.messageLabel, 'No script selected!');
      }
    }
     else {
      this.currentScript = null;
      this.scriptMode = 0;
      $initScriptPanel(this);
    }
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.chkScriptList)) {
    $info_0(log_3, 'selected script index: ' + $getSelectElement(this.chkScriptList).selectedIndex);
    if ($getSelectElement(this.chkScriptList).selectedIndex != -1) {
      this.currentScript = dynamicCast($get_3(this.scripts, $getSelectElement(this.chkScriptList).selectedIndex), 110);
      $info_0(log_3, 'selected script: ' + this.currentScript);
      $setText_2(this.textDomainName, this.currentScript.domainName);
      $setText_2(this.scriptTextArea, this.currentScript.script);
    }
     else {
      this.currentScript = null;
    }
  }
   else if (equals_Ljava_lang_Object__Z__devirtual$(event_0.source, this.showBookDetails)) {
    list = new ArrayList_1(new AbstractMap$2(this.bookTableMap));
    $setBooks(this, list, false);
  }
}
;
_.scriptMode = 0;
var log_3;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl', 272);
function GTusachViewImpl$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(275, 104, {}, GTusachViewImpl$1);
_.run = function run_1(){
  $updateBookListPanelSize(this.this$01);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$1_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/1', 275);
function GTusachViewImpl$2(this$0){
  this.this$01 = this$0;
}

defineClass(276, 1, $intern_8, GTusachViewImpl$2);
_.onOpen = function onOpen(event_0){
  $setOpen(this.this$01.createPanel, false);
  $updateBookListPanelSize(this.this$01);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$2_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/2', 276);
function GTusachViewImpl$3(this$0){
  this.this$01 = this$0;
}

defineClass(277, 1, $intern_9, GTusachViewImpl$3);
_.onClose = function onClose(event_0){
  $updateBookListPanelSize(this.this$01);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$3_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/3', 277);
function GTusachViewImpl$4(this$0){
  this.this$01 = this$0;
}

defineClass(278, 1, $intern_8, GTusachViewImpl$4);
_.onOpen = function onOpen_0(event_0){
  $setOpen(this.this$01.profilePanel, false);
  $updateBookListPanelSize(this.this$01);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$4_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/4', 278);
function GTusachViewImpl$5(this$0){
  this.this$01 = this$0;
}

defineClass(279, 1, $intern_9, GTusachViewImpl$5);
_.onClose = function onClose_0(event_0){
  $updateBookListPanelSize(this.this$01);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$5_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/5', 279);
function GTusachViewImpl$6(this$0){
  this.this$01 = this$0;
}

defineClass(280, 1, $intern_10, GTusachViewImpl$6);
_.onResize = function onResize(event_0){
  $cancel(this.this$01.resizeTimer);
  $schedule(this.this$01.resizeTimer, 250);
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$6_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/6', 280);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $getWidth(this$static){
  return ($clinit_DOM() , this$static.element).width;
}

function $setResource(this$static, resource){
  $setUrl_1(this$static, resource.url_0, resource.width_0, resource.height_0);
}

function $setUrl(this$static, url_0){
  !!this$static.state && $setPropertyString(($clinit_DOM() , this$static.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

function Image_1(resource){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState_0(this, resource.url_0, resource.width_0, resource.height_0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

defineClass(121, 11, $intern_7, Image_0, Image_1);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 121);
function GTusachViewImpl$ActionImage(action, enabled){
  $clinit_Image();
  var tooltip, url_0;
  Image_0.call(this);
  url_0 = 'images/';
  if (action == ($clinit_GTusachView$ActionEnum() , Download)) {
    url_0 += 'download';
    tooltip = 'Download Book';
  }
   else if (action == Delete) {
    url_0 += 'delete';
    tooltip = 'Delete Book';
  }
   else if (action == Resume) {
    url_0 += 'resume';
    tooltip = 'Resume Book';
  }
   else {
    tooltip = 'Abort Book';
    url_0 += 'abort';
  }
  enabled || (url_0 += '-disabled');
  url_0 += '.png';
  $setUrl_0(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
  tooltip.length == 0?$removeAttribute(($clinit_DOM() , this.element), 'title'):$setAttribute(($clinit_DOM() , this.element), 'title', tooltip);
}

defineClass(273, 121, $intern_7, GTusachViewImpl$ActionImage);
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$ActionImage_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/ActionImage', 273);
function $compare(o1, o2){
  if (o1.status_0 == ($clinit_Book$BookStatus() , WORKING) && o2.status_0 != WORKING) {
    return -1;
  }
  if (o2.status_0 == WORKING && o1.status_0 != WORKING) {
    return 1;
  }
  if (!!o1.lastUpdatedTime && !!o2.lastUpdatedTime) {
    return $compareTo_10(o2.lastUpdatedTime, o1.lastUpdatedTime);
  }
  if (o1.lastUpdatedTime) {
    return -1;
  }
  if (o2.lastUpdatedTime) {
    return 1;
  }
  return 0;
}

function GTusachViewImpl$BookComparator(){
}

defineClass(274, 1, {}, GTusachViewImpl$BookComparator);
_.compare = function compare(o1, o2){
  return $compare(dynamicCast(o1, 47), dynamicCast(o2, 47));
}
;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl$BookComparator_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl/BookComparator', 274);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, f_FlowPanel2, f_HorizontalPanel3, f_FlowPanel6, f_FlowPanel11, messageLabel, showBookDetails, bookListPanel, bookListTable, f_Image4, f_Label5, profilePanel, profileTable, createPanel, createTable, scriptPanel, f_HorizontalPanel7, f_VerticalPanel8, scriptScrollPanel, chkScriptList, f_Label9, textDomainName, f_HorizontalPanel10, newButton, sb, saveEditButton, sb_0, deleteCancelButton, sb_1, scriptTextArea;
  f_HTMLPanel1 = new HTMLPanel($html4(this$static.domId0).html);
  $setClassName(($clinit_DOM() , f_HTMLPanel1.element), 'GPSWCODBA');
  f_HTMLPanel1.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  __attachRecord__ = attachToDom(f_HTMLPanel1.element);
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel , $add_3(f_FlowPanel2, (f_HorizontalPanel3 = new HorizontalPanel , $add_4(f_HorizontalPanel3, (f_Image4 = new Image_0 , $setUrl(f_Image4, ($clinit_UriUtils() , new SafeUriString('images/logo.png'))) , f_Image4)) , $add_4(f_HorizontalPanel3, (f_Label5 = new Label , $setClassName(f_Label5.element, 'GPSWCODBL') , $setTextOrHtml(f_Label5.directionalTextHelper, 'TU SACH KIEM HIEP') , $updateHorizontalAlignment(f_Label5) , f_Label5)) , f_HorizontalPanel3)) , $add_3(f_FlowPanel2, (f_FlowPanel6 = new FlowPanel , $add_3(f_FlowPanel6, (profilePanel = new DisclosurePanel_0('Profile') , $add_1(profilePanel, (profileTable = new FlexTable , $setClassName(profileTable.element, 'GPSWCODBI') , profileTable.element.style['width'] = '' , profileTable.element.style['height'] = '' , this$static.owner.profileTable = profileTable , profileTable)) , $setClassName(profilePanel.element, 'GPSWCODBF') , profilePanel.element.style['width'] = '' , profilePanel.element.style['height'] = '' , this$static.owner.profilePanel = profilePanel , profilePanel)) , $add_3(f_FlowPanel6, (createPanel = new DisclosurePanel_0('Create New Book') , $add_1(createPanel, (createTable = new FlexTable , $setClassName(createTable.element, 'GPSWCODBE') , createTable.element.style['width'] = '99%' , createTable.element.style['height'] = '150px' , this$static.owner.createTable = createTable , createTable)) , $setClassName(createPanel.element, 'GPSWCODBF') , createPanel.element.style['width'] = '70%' , this$static.owner.createPanel = createPanel , createPanel)) , $add_3(f_FlowPanel6, (scriptPanel = new DisclosurePanel_0('Parser Scripts') , $add_1(scriptPanel, (f_HorizontalPanel7 = new HorizontalPanel , $add_4(f_HorizontalPanel7, (f_VerticalPanel8 = new VerticalPanel , $add_6(f_VerticalPanel8, (chkScriptList = new ListBox , chkScriptList.element.style['width'] = '100%' , this$static.owner.chkScriptList = chkScriptList , chkScriptList)) , $add_6(f_VerticalPanel8, (f_Label9 = new Label , $setTextOrHtml(f_Label9.directionalTextHelper, 'Domain Name') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_6(f_VerticalPanel8, (textDomainName = new TextBox , textDomainName.element.style['width'] = '100%' , this$static.owner.textDomainName = textDomainName , textDomainName)) , $add_6(f_VerticalPanel8, (f_HorizontalPanel10 = new HorizontalPanel , $add_4(f_HorizontalPanel10, (newButton = new Button , $setHTML(newButton, (sb = new StringBuilder , sb.string += 'New' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , this$static.owner.newButton = newButton , newButton)) , $add_4(f_HorizontalPanel10, (saveEditButton = new Button , $setHTML(saveEditButton, (sb_0 = new StringBuilder , sb_0.string += 'Edit' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(saveEditButton.element, 'GPSWCODBD', true) , this$static.owner.saveEditButton = saveEditButton , saveEditButton)) , $add_4(f_HorizontalPanel10, (deleteCancelButton = new Button , $setHTML(deleteCancelButton, (sb_1 = new StringBuilder , sb_1.string += 'Delete' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(deleteCancelButton.element, 'GPSWCODBD', true) , this$static.owner.deleteCancelButton = deleteCancelButton , deleteCancelButton)) , f_HorizontalPanel10)) , $setClassName(f_VerticalPanel8.element, 'GPSWCODBJ') , f_VerticalPanel8.element.style['width'] = '200px' , f_VerticalPanel8.element.style['height'] = '150px' , f_VerticalPanel8)) , $add_4(f_HorizontalPanel7, (scriptScrollPanel = new ScrollPanel , $add_2(scriptScrollPanel, (scriptTextArea = new TextArea_0 , $setClassName(scriptTextArea.element, 'GPSWCODBK') , scriptTextArea.element.cols = 100 , scriptTextArea.element.style['height'] = '200px' , this$static.owner.scriptTextArea = scriptTextArea , scriptTextArea)) , scriptScrollPanel.element.style['width'] = '99%' , scriptScrollPanel)) , f_HorizontalPanel7)) , $setClassName(scriptPanel.element, 'GPSWCODBF') , scriptPanel.element.style['width'] = '99%' , scriptPanel.element.style['height'] = '' , this$static.owner.scriptPanel = scriptPanel , scriptPanel)) , f_FlowPanel6)) , $add_3(f_FlowPanel2, (f_FlowPanel11 = new FlowPanel , $add_3(f_FlowPanel11, (messageLabel = new Label , $setClassName(messageLabel.element, 'margin-left') , $setTextOrHtml(messageLabel.directionalTextHelper, '') , $updateHorizontalAlignment(messageLabel) , this$static.owner.messageLabel = messageLabel , messageLabel)) , $add_3(f_FlowPanel11, (showBookDetails = new CheckBox , $setTextOrHtml(showBookDetails.directionalTextHelper, 'Show Details') , this$static.owner.showBookDetails = showBookDetails , showBookDetails)) , $add_3(f_FlowPanel11, (bookListPanel = new ScrollPanel , $add_2(bookListPanel, (bookListTable = new FlexTable , $setClassName(bookListTable.element, 'GPSWCODBB') , bookListTable.element.style['width'] = '100%' , bookListTable.element.style['height'] = '100%' , this$static.owner.bookListTable = bookListTable , bookListTable)) , $setClassName(bookListPanel.element, 'floatLeft') , bookListPanel.element.style['width'] = '99%' , this$static.owner.bookListPanel = bookListPanel , bookListPanel)) , $setClassName(f_FlowPanel11.element, 'GPSWCODBC') , f_FlowPanel11.element.style['width'] = '100%' , f_FlowPanel11)) , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function GTusachViewImpl_GTusachViewImplUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = (new GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(320, 1, {}, GTusachViewImpl_GTusachViewImplUiBinderImpl$Widgets);
var Lcom_dv_gtusach_client_ui_GTusachViewImpl_1GTusachViewImplUiBinderImpl$Widgets_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl_GTusachViewImplUiBinderImpl/Widgets', 320);
function GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(418, 1, {}, GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_0;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl_1GTusachViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 418);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    inject(($clinit_LocaleInfo() , '.GPSWCODBH{font-weight:bold;}.GPSWCODBB{margin:10px 10px 10px 10px;border:3px solid skyblue;border-radius:5px;}.GPSWCODBI{margin:10px 10px 10px 10px;padding:10px;border:3px solid skyblue;border-radius:5px;}.GPSWCODBE{margin:10px 10px 10px 10px;padding:10px;border:3px solid skyblue;overflow:visible;border-radius:5px;padding-left:10px;padding-bottom:5px;}.GPSWCODBA{background-repeat:repeat;background-image:url(images/background.jpg);}.GPSWCODBL{color:blue;margin-left:10px;margin-top:50px;font-style:normal;font-weight:bold;font-size:20px;}.GPSWCODBG{float:left;}.GPSWCODBC{clear:both;}.GPSWCODBF{float:left;font-weight:bold;}.GPSWCODBJ{margin:10px 10px 10px 10px;padding:10px;border:3px solid skyblue;border-radius:5px;}.GPSWCODBD{margin-left:10px;}.GPSWCODBK{margin:10px 10px 10px 10px;border:3px solid skyblue;border-radius:5px;}'));
    return true;
  }
  return false;
}

function GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(419, 1, {}, GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_dv_gtusach_client_ui_GTusachViewImpl_1GTusachViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.dv.gtusach.client.ui', 'GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 419);
function $clinit_GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_0 = new GTusachViewImpl_GTusachViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html4(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $loginButtonClicked(this$static){
  $setStyleName(this$static.headerLabel);
  $setText_1(this$static.headerLabel, 'Signing in...');
  $setEnabled(this$static.loginButton, false);
  $setEnabled(this$static.cancelButton, false);
  $getPropertyString($getElement(this$static.userName), 'value');
  $getPropertyString($getElement(this$static.password), 'value');
}

function LogonViewImpl(){
  $initWidget(this, $build_f_HTMLPanel1_0(new LogonViewImpl_LogonViewImplUiBinderImpl$Widgets(this)));
}

defineClass(271, 539, $intern_7, LogonViewImpl);
var Lcom_dv_gtusach_client_ui_LogonViewImpl_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl', 271);
function $build_f_HTMLPanel1_0(this$static){
  var __attachRecord__, f_HTMLPanel1, f_DockLayoutPanel2, f_HorizontalPanel3, f_VerticalPanel6, f_Image4, f_Label5, headerLabel, f_HorizontalPanel7, f_Label8, userName, f_HorizontalPanel9, f_Label10, password, f_FlowPanel11, loginButton, cancelButton;
  f_HTMLPanel1 = new HTMLPanel($html1(this$static.domId0).html);
  $setClassName(($clinit_DOM() , f_HTMLPanel1.element), 'GPSWCODBM');
  f_HTMLPanel1.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  __attachRecord__ = attachToDom(f_HTMLPanel1.element);
  $get(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_DockLayoutPanel2 = new DockLayoutPanel(($clinit_Style$Unit() , PX)) , $insert(f_DockLayoutPanel2, (f_HorizontalPanel3 = new HorizontalPanel , $setHorizontalAlignment(f_HorizontalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $setVerticalAlignment(f_HorizontalPanel3, ($clinit_HasVerticalAlignment() , ALIGN_TOP)) , $add_4(f_HorizontalPanel3, (f_Image4 = new Image_0 , f_Image4.element.style['width'] = '150px' , $setUrl(f_Image4, ($clinit_UriUtils() , new SafeUriString('images/logo.png'))) , f_Image4.element.style['height'] = '150px' , f_Image4)) , $add_4(f_HorizontalPanel3, (f_Label5 = new Label , $setClassName(f_Label5.element, 'GPSWCODBAB') , $setAutoHorizontalAlignment(f_Label5, ALIGN_LEFT) , f_Label5.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap') , f_Label5.element.style['width'] = '150px' , $setTextOrHtml(f_Label5.directionalTextHelper, 'Tu Sach Kiem Hiep') , $updateHorizontalAlignment(f_Label5) , f_Label5.element.style['height'] = '150px' , f_Label5)) , f_HorizontalPanel3.element.style['width'] = '100%' , undefined , f_HorizontalPanel3.element.style['height'] = '150PX' , f_HorizontalPanel3), ($clinit_DockLayoutPanel$Direction() , NORTH), 150) , $insert(f_DockLayoutPanel2, (f_VerticalPanel6 = new VerticalPanel , $add_6(f_VerticalPanel6, (headerLabel = new Label , setStyleName(headerLabel.element, 'gwt-Label-Error', true) , $setAutoHorizontalAlignment(headerLabel, ALIGN_CENTER) , headerLabel.element.style['whiteSpace'] = 'nowrap' , this$static.owner.headerLabel = headerLabel , headerLabel)) , $add_6(f_VerticalPanel6, (f_HorizontalPanel7 = new HorizontalPanel , $setVerticalAlignment(f_HorizontalPanel7, ALIGN_MIDDLE) , $add_4(f_HorizontalPanel7, (f_Label8 = new Label , $setAutoHorizontalAlignment(f_Label8, ALIGN_RIGHT) , f_Label8.element.style['whiteSpace'] = 'nowrap' , f_Label8.element.style['width'] = '75px' , $setTextOrHtml(f_Label8.directionalTextHelper, 'User Name') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_4(f_HorizontalPanel7, (userName = new TextBox , this$static.owner.userName = userName , userName)) , $setClassName(f_HorizontalPanel7.element, 'GPSWCODBO') , f_HorizontalPanel7)) , $add_6(f_VerticalPanel6, (f_HorizontalPanel9 = new HorizontalPanel , $setVerticalAlignment(f_HorizontalPanel9, ALIGN_MIDDLE) , $add_4(f_HorizontalPanel9, (f_Label10 = new Label , $setAutoHorizontalAlignment(f_Label10, ALIGN_RIGHT) , f_Label10.element.style['whiteSpace'] = 'nowrap' , f_Label10.element.style['width'] = '75px' , $setTextOrHtml(f_Label10.directionalTextHelper, 'Password') , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_4(f_HorizontalPanel9, (password = new PasswordTextBox , this$static.owner.password = password , password)) , $setClassName(f_HorizontalPanel9.element, 'GPSWCODBO') , f_HorizontalPanel9)) , $add_6(f_VerticalPanel6, (f_FlowPanel11 = new FlowPanel , $add_3(f_FlowPanel11, (loginButton = new Button , $setClassName(loginButton.element, 'GPSWCODBN') , $setInnerText(loginButton.element, 'Sign in') , $addDomHandler(loginButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.loginButton = loginButton , loginButton)) , $add_3(f_FlowPanel11, (cancelButton = new Button , $setClassName(cancelButton.element, 'GPSWCODBN') , $setInnerText(cancelButton.element, 'Cancel') , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , this$static.owner.cancelButton = cancelButton , cancelButton)) , $setClassName(f_FlowPanel11.element, 'GPSWCODBO') , f_FlowPanel11.element.style['width'] = '142px' , f_FlowPanel11)) , $setClassName(f_VerticalPanel6.element, 'GPSWCODBO') , $setPropertyInt(f_VerticalPanel6.table, 'cellSpacing', 10) , f_VerticalPanel6.element.style['width'] = '300px' , undefined , f_VerticalPanel6.element.style['height'] = '' , f_VerticalPanel6), CENTER_0, 0) , f_DockLayoutPanel2.element.style['width'] = '100%' , f_DockLayoutPanel2.element.style['height'] = '100%' , f_DockLayoutPanel2), $get(this$static.domId0Element));
  return f_HTMLPanel1;
}

function LogonViewImpl_LogonViewImplUiBinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$2;
  this.owner = owner;
  this.style_0 = (new LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_0(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(312, 1, {}, LogonViewImpl_LogonViewImplUiBinderImpl$Widgets);
var Lcom_dv_gtusach_client_ui_LogonViewImpl_1LogonViewImplUiBinderImpl$Widgets_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl_LogonViewImplUiBinderImpl/Widgets', 312);
function LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(313, 1, $intern_11, LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_0(event_0){
  $loginButtonClicked(this.this$11.owner);
}
;
var Lcom_dv_gtusach_client_ui_LogonViewImpl_1LogonViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl_LogonViewImplUiBinderImpl/Widgets/1', 313);
function LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$2(){
}

defineClass(314, 1, $intern_11, LogonViewImpl_LogonViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_1(event_0){
  $goTo(new MainPlace('main'));
}
;
var Lcom_dv_gtusach_client_ui_LogonViewImpl_1LogonViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl_LogonViewImplUiBinderImpl/Widgets/2', 314);
function LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(416, 1, {}, LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_1;
var Lcom_dv_gtusach_client_ui_LogonViewImpl_1LogonViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 416);
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    inject(($clinit_LocaleInfo() , '.GPSWCODBP{font-weight:bold;}.GPSWCODBM{background-repeat:repeat;background-image:url(images/background.jpg);}.GPSWCODBAB{font-size:2em;font-weight:bold;color:blue;margin:50px 0;}.GPSWCODBO{margin:auto;}.GPSWCODBN{margin-left:10px;padding-left:5px;}'));
    return true;
  }
  return false;
}

function LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(417, 1, {}, LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_dv_gtusach_client_ui_LogonViewImpl_1LogonViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.dv.gtusach.client.ui', 'LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 417);
function $clinit_LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_1 = new LogonViewImpl_LogonViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_2(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $clinit_ActivityManager(){
  $clinit_ActivityManager = emptyMethod;
  NULL_ACTIVITY = new ActivityManager$1;
}

function $getNextActivity(this$static, event_0){
  if (!this$static.display_0) {
    return null;
  }
  return $getActivity(event_0.newPlace);
}

function $setDisplay(this$static, display){
  var wasActive, placeReg, placeRequestReg;
  wasActive = !!this$static.display_0;
  this$static.display_0 = display;
  !wasActive && (placeReg = $addHandler_1(this$static.eventBus, ($clinit_PlaceChangeEvent() , TYPE_10), this$static) , placeRequestReg = $addHandler_1(this$static.eventBus, ($clinit_PlaceChangeRequestEvent() , TYPE_11), this$static) , new ActivityManager$2(placeReg, placeRequestReg) , undefined);
}

function $showWidget(this$static, view){
  !!this$static.display_0 && $setWidget_0(this$static.display_0, view);
}

function $tryStart(this$static){
  var caughtOnStart, t;
  caughtOnStart = null;
  try {
    this$static.currentActivity.start_1(new ActivityManager$ProtectedDisplay(this$static, this$static.currentActivity), this$static.stopperedEventBus);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 9)) {
      t = $e0;
      caughtOnStart = t;
    }
     else 
      throw unwrap($e0);
  }
  return caughtOnStart;
}

function $tryStopOrCancel(this$static, stop_0){
  var caughtOnStop, t;
  caughtOnStop = null;
  try {
    stop_0?this$static.currentActivity.onStop():undefined;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 9)) {
      t = $e0;
      caughtOnStop = t;
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $removeHandlers(this$static.stopperedEventBus.real);
  }
  return caughtOnStop;
}

function ActivityManager(eventBus){
  $clinit_ActivityManager();
  this.currentActivity = NULL_ACTIVITY;
  this.eventBus = eventBus;
  this.stopperedEventBus = new ResettableEventBus(eventBus);
}

defineClass(195, 1, {30:1, 509:1, 560:1}, ActivityManager);
_.onPlaceChange = function onPlaceChange(event_0){
  var caughtOnCancel, caughtOnStart, caughtOnStop, causes, nextActivity;
  nextActivity = $getNextActivity(this, event_0);
  caughtOnStop = null;
  caughtOnCancel = null;
  caughtOnStart = null;
  !nextActivity && (nextActivity = NULL_ACTIVITY);
  if (this.currentActivity == nextActivity) {
    return;
  }
  if (this.startingNext) {
    caughtOnCancel = $tryStopOrCancel(this, false);
    this.currentActivity = NULL_ACTIVITY;
    this.startingNext = false;
  }
   else if (this.currentActivity != NULL_ACTIVITY) {
    !!this.display_0 && $setWidget_0(this.display_0, null);
    $removeHandlers(this.stopperedEventBus.real);
    caughtOnStop = $tryStopOrCancel(this, true);
  }
  this.currentActivity = nextActivity;
  if (this.currentActivity == NULL_ACTIVITY) {
    !!this.display_0 && $setWidget_0(this.display_0, null);
  }
   else {
    this.startingNext = true;
    caughtOnStart = $tryStart(this);
  }
  if (!!caughtOnStart || !!caughtOnCancel || !!caughtOnStop) {
    causes = new LinkedHashSet;
    !!caughtOnStop && $add_12(causes, caughtOnStop);
    !!caughtOnCancel && $add_12(causes, caughtOnCancel);
    !!caughtOnStart && $add_12(causes, caughtOnStart);
    throw new UmbrellaException_0(causes);
  }
}
;
_.startingNext = false;
var NULL_ACTIVITY;
var Lcom_google_gwt_activity_shared_ActivityManager_2_classLit = createForClass('com.google.gwt.activity.shared', 'ActivityManager', 195);
function ActivityManager$1(){
}

defineClass(222, 532, {}, ActivityManager$1);
_.start_1 = function start_3(panel, eventBus){
}
;
var Lcom_google_gwt_activity_shared_ActivityManager$1_2_classLit = createForClass('com.google.gwt.activity.shared', 'ActivityManager/1', 222);
function ActivityManager$2(val$placeReg, val$placeRequestReg){
  this.val$placeReg2 = val$placeReg;
  this.val$placeRequestReg3 = val$placeRequestReg;
}

defineClass(223, 1, {154:1}, ActivityManager$2);
_.removeHandler = function removeHandler(){
  $removeHandler(this.val$placeReg2);
  $removeHandler(this.val$placeRequestReg3);
}
;
var Lcom_google_gwt_activity_shared_ActivityManager$2_2_classLit = createForClass('com.google.gwt.activity.shared', 'ActivityManager/2', 223);
function $setWidget(this$static, view){
  if (this$static.activity == this$static.this$01.currentActivity) {
    this$static.this$01.startingNext = false;
    $showWidget(this$static.this$01, view);
  }
}

function ActivityManager$ProtectedDisplay(this$0, activity){
  this.this$01 = this$0;
  this.activity = activity;
}

defineClass(221, 1, {}, ActivityManager$ProtectedDisplay);
var Lcom_google_gwt_activity_shared_ActivityManager$ProtectedDisplay_2_classLit = createForClass('com.google.gwt.activity.shared', 'ActivityManager/ProtectedDisplay', 221);
function $cancel_0(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel_0(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update_0(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + Math.cos($intern_12 + progress * $intern_12)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(136, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + cos_0(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + cos_0($intern_12)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 136);
function $execute(this$static, timestamp){
  $update_0(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(295, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 295);
defineClass(540, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 540);
defineClass(137, 1, {137:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 137);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(412, 540, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 412);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(413, 137, {137:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 413);
function $cancelAnimationFrame(this$static, requestId){
  $remove_9(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {564:1, 3:1, 6:1}, 143, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray_1(this$static.animationRequests, curAnimations), 564);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_9(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(414, 540, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_11(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 414);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(415, 104, {}, AnimationSchedulerImplTimer$1);
_.run = function run_2(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 415);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(143, 137, {137:1, 143:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 143);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_2((buf.string += '' + item_0 , buf), ' ');
  }
  return $trim(buf.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(179, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 179);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(98, 179, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 98);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(142, 179, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 142);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN;
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(138, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 138);
function isScript(){
  return true;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static, out){
  var element, element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.getCause()) {
    t != this$static && out.print_0('Caused by: ');
    out.println(t);
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      out.println_0('\tat ' + element);
    }
  }
}

function $toString(this$static){
  var className, msg;
  className = $getName_0(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(9, 1, $intern_13);
_.getCause = function getCause(){
  return this.cause;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_12(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(8, 9, $intern_14, Exception);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 8);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(10, 8, $intern_15, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 10);
defineClass(203, 10, $intern_15);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 203);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName_0(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(51, 203, {51:1, 3:1, 8:1, 10:1, 9:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 51);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeValue(toEscape){
  var escapeTable = (!escapeTable_0 && (escapeTable_0 = initEscapeTable()) , escapeTable_0);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw new IllegalArgumentException_0(message + '\n' + data_0);
}

var escapeTable_0;
defineClass(513, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 513);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_1(handler.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
    return;
  }
  reportToBrowser(instanceOf(e, 51)?dynamicCast(e, 51).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(258, 513, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 258);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(259, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 259);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(260, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 260);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 507);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(524, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 524);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(204, 524, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_16, 73, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 204);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(525, 524, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_16, 73, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 525);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(205, 525, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 205);
function get_0(instance, key_0){
  if (instance.expando$) {
    return instance.expando$[':' + key_0];
  }
  return null;
}

function setNative(instance, key_0, value_0){
  !instance.expando$ && (instance.expando$ = {});
  instance.expando$[':' + key_0] = value_0;
}

function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException_0('' + errorMessage);
  }
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalArgument_0(expression, errorMessageTemplate, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format(errorMessageTemplate, errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_1(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_2(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_1(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_1(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getChild(this$static, index_0){
  return this$static.childNodes[index_0];
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent_0(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getSubPixelScrollWidth(this$static){
  return this$static.scrollWidth || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $setHref(this$static, href_0){
  this$static.href = href_0;
}

function $setName(this$static, name_0){
  this$static.name = name_0;
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $selectAdd(select, option, before){
  select.add(option, before);
}

function $touchGetSubPixelPageX(touch){
  return touch.pageX || 0;
}

function $touchGetSubPixelPageY(touch){
  return touch.pageY || 0;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  $setInnerText(elem, source);
  return elem;
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $isRTL(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getScrollLeft(elem){
  var left;
  left = (elem.scrollLeft || 0) | 0;
  $isRTL(elem) && (left = -left);
  return left;
}

function $getTabIndex(elem){
  return elem.tabIndex < $intern_17?elem.tabIndex:-(elem.tabIndex % $intern_17) - 1;
}

function $setScrollLeft(elem, left){
  $isRTL(elem) && (left = -left);
  elem.scrollLeft = left;
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setHeight_0(this$static, height){
  this$static.height = height;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setWidth_0(this$static, width_0){
  this$static.width = width_0;
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Cursor(){
  $clinit_Style$Cursor = emptyMethod;
  DEFAULT = new Style$Cursor$1;
  AUTO = new Style$Cursor$2;
  CROSSHAIR = new Style$Cursor$3;
  POINTER = new Style$Cursor$4;
  MOVE = new Style$Cursor$5;
  E_RESIZE = new Style$Cursor$6;
  NE_RESIZE = new Style$Cursor$7;
  NW_RESIZE = new Style$Cursor$8;
  N_RESIZE = new Style$Cursor$9;
  SE_RESIZE = new Style$Cursor$10;
  SW_RESIZE = new Style$Cursor$11;
  S_RESIZE = new Style$Cursor$12;
  W_RESIZE = new Style$Cursor$13;
  TEXT = new Style$Cursor$14;
  WAIT = new Style$Cursor$15;
  HELP = new Style$Cursor$16;
  COL_RESIZE = new Style$Cursor$17;
  ROW_RESIZE = new Style$Cursor$18;
}

function Style$Cursor(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Cursor();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, 1), $intern_4, 16, 0, [DEFAULT, AUTO, CROSSHAIR, POINTER, MOVE, E_RESIZE, NE_RESIZE, NW_RESIZE, N_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, W_RESIZE, TEXT, WAIT, HELP, COL_RESIZE, ROW_RESIZE]);
}

defineClass(16, 4, $intern_18);
var AUTO, COL_RESIZE, CROSSHAIR, DEFAULT, E_RESIZE, HELP, MOVE, NE_RESIZE, NW_RESIZE, N_RESIZE, POINTER, ROW_RESIZE, SE_RESIZE, SW_RESIZE, S_RESIZE, TEXT, WAIT, W_RESIZE;
var Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor', 16, Ljava_lang_Enum_2_classLit, values_3);
function Style$Cursor$1(){
  Style$Cursor.call(this, 'DEFAULT', 0);
}

defineClass(345, 16, $intern_18, Style$Cursor$1);
var Lcom_google_gwt_dom_client_Style$Cursor$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/1', 345, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$10(){
  Style$Cursor.call(this, 'SE_RESIZE', 9);
}

defineClass(354, 16, $intern_18, Style$Cursor$10);
var Lcom_google_gwt_dom_client_Style$Cursor$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/10', 354, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$11(){
  Style$Cursor.call(this, 'SW_RESIZE', 10);
}

defineClass(355, 16, $intern_18, Style$Cursor$11);
var Lcom_google_gwt_dom_client_Style$Cursor$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/11', 355, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$12(){
  Style$Cursor.call(this, 'S_RESIZE', 11);
}

defineClass(356, 16, $intern_18, Style$Cursor$12);
var Lcom_google_gwt_dom_client_Style$Cursor$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/12', 356, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$13(){
  Style$Cursor.call(this, 'W_RESIZE', 12);
}

defineClass(357, 16, $intern_18, Style$Cursor$13);
var Lcom_google_gwt_dom_client_Style$Cursor$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/13', 357, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$14(){
  Style$Cursor.call(this, 'TEXT', 13);
}

defineClass(358, 16, $intern_18, Style$Cursor$14);
var Lcom_google_gwt_dom_client_Style$Cursor$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/14', 358, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$15(){
  Style$Cursor.call(this, 'WAIT', 14);
}

defineClass(359, 16, $intern_18, Style$Cursor$15);
var Lcom_google_gwt_dom_client_Style$Cursor$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/15', 359, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$16(){
  Style$Cursor.call(this, 'HELP', 15);
}

defineClass(360, 16, $intern_18, Style$Cursor$16);
var Lcom_google_gwt_dom_client_Style$Cursor$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/16', 360, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$17(){
  Style$Cursor.call(this, 'COL_RESIZE', 16);
}

defineClass(361, 16, $intern_18, Style$Cursor$17);
var Lcom_google_gwt_dom_client_Style$Cursor$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/17', 361, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$18(){
  Style$Cursor.call(this, 'ROW_RESIZE', 17);
}

defineClass(362, 16, $intern_18, Style$Cursor$18);
var Lcom_google_gwt_dom_client_Style$Cursor$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/18', 362, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$2(){
  Style$Cursor.call(this, 'AUTO', 1);
}

defineClass(346, 16, $intern_18, Style$Cursor$2);
var Lcom_google_gwt_dom_client_Style$Cursor$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/2', 346, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$3(){
  Style$Cursor.call(this, 'CROSSHAIR', 2);
}

defineClass(347, 16, $intern_18, Style$Cursor$3);
var Lcom_google_gwt_dom_client_Style$Cursor$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/3', 347, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$4(){
  Style$Cursor.call(this, 'POINTER', 3);
}

defineClass(348, 16, $intern_18, Style$Cursor$4);
var Lcom_google_gwt_dom_client_Style$Cursor$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/4', 348, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$5(){
  Style$Cursor.call(this, 'MOVE', 4);
}

defineClass(349, 16, $intern_18, Style$Cursor$5);
var Lcom_google_gwt_dom_client_Style$Cursor$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/5', 349, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$6(){
  Style$Cursor.call(this, 'E_RESIZE', 5);
}

defineClass(350, 16, $intern_18, Style$Cursor$6);
var Lcom_google_gwt_dom_client_Style$Cursor$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/6', 350, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$7(){
  Style$Cursor.call(this, 'NE_RESIZE', 6);
}

defineClass(351, 16, $intern_18, Style$Cursor$7);
var Lcom_google_gwt_dom_client_Style$Cursor$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/7', 351, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$8(){
  Style$Cursor.call(this, 'NW_RESIZE', 7);
}

defineClass(352, 16, $intern_18, Style$Cursor$8);
var Lcom_google_gwt_dom_client_Style$Cursor$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/8', 352, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function Style$Cursor$9(){
  Style$Cursor.call(this, 'N_RESIZE', 8);
}

defineClass(353, 16, $intern_18, Style$Cursor$9);
var Lcom_google_gwt_dom_client_Style$Cursor$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/9', 353, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE_0 = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_4, 22, 0, [NONE_0, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(22, 4, $intern_19);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE_0, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 22, Ljava_lang_Enum_2_classLit, values_4);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(363, 22, $intern_19, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 363, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(372, 22, $intern_19, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 372, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(373, 22, $intern_19, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 373, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(374, 22, $intern_19, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 374, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(375, 22, $intern_19, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 375, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(376, 22, $intern_19, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 376, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(377, 22, $intern_19, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 377, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(378, 22, $intern_19, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 378, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(379, 22, $intern_19, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 379, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(364, 22, $intern_19, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 364, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(365, 22, $intern_19, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 365, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(366, 22, $intern_19, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 366, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(367, 22, $intern_19, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 367, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(368, 22, $intern_19, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 368, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(369, 22, $intern_19, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 369, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(370, 22, $intern_19, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 370, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(371, 22, $intern_19, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 371, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO_0 = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_4, 60, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO_0]);
}

defineClass(60, 4, $intern_20);
var AUTO_0, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 60, Ljava_lang_Enum_2_classLit, values_5);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(380, 60, $intern_20, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 380, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(381, 60, $intern_20, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 381, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(382, 60, $intern_20, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 382, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(383, 60, $intern_20, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 383, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_4, 61, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(61, 4, $intern_21);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 61, Ljava_lang_Enum_2_classLit, values_6);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(384, 61, $intern_21, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 384, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(385, 61, $intern_21, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 385, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(386, 61, $intern_21, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 386, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(387, 61, $intern_21, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 387, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_4, 62, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(62, 4, $intern_22);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 62, Ljava_lang_Enum_2_classLit, values_7);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(388, 62, $intern_22, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 388, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(389, 62, $intern_22, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 389, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(390, 62, $intern_22, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 390, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(391, 62, $intern_22, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 391, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_4, 35, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(35, 4, $intern_23);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 35, Ljava_lang_Enum_2_classLit, values_8);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(336, 35, $intern_23, Style$Unit$1);
_.getType_0 = function getType_3(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 336, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(337, 35, $intern_23, Style$Unit$2);
_.getType_0 = function getType_4(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 337, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(338, 35, $intern_23, Style$Unit$3);
_.getType_0 = function getType_5(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 338, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(339, 35, $intern_23, Style$Unit$4);
_.getType_0 = function getType_6(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 339, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(340, 35, $intern_23, Style$Unit$5);
_.getType_0 = function getType_7(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 340, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(341, 35, $intern_23, Style$Unit$6);
_.getType_0 = function getType_8(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 341, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(342, 35, $intern_23, Style$Unit$7);
_.getType_0 = function getType_9(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 342, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(343, 35, $intern_23, Style$Unit$8);
_.getType_0 = function getType_10(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 343, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(344, 35, $intern_23, Style$Unit$9);
_.getType_0 = function getType_11(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 344, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_4, 97, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(97, 4, $intern_24);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 97, Ljava_lang_Enum_2_classLit, values_9);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(392, 97, $intern_24, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 392, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(393, 97, $intern_24, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 393, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_4, 52, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(52, 4, $intern_25);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 52, Ljava_lang_Enum_2_classLit, values_10);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(394, 52, $intern_25, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 394, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(395, 52, $intern_25, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 395, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(396, 52, $intern_25, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 396, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(397, 52, $intern_25, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 397, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(398, 52, $intern_25, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 398, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    $setLength(toInjectAtStart, 0);
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    $setLength(toInject, 0);
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function inject(css){
  $clinit_StyleInjector();
  $push_0(toInject, css);
  schedule();
}

function schedule(){
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(446, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 446);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  IMPL = new StyleInjector$StyleInjectorImpl;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  $setPropertyString(style, 'language', 'text/css');
  $setInnerText(style, contents);
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl(){
}

defineClass(445, 1, {}, StyleInjector$StyleInjectorImpl);
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 445);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 19);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 84);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_1(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(543, 511, {});
_.getAssociatedType_0 = function getAssociatedType_1(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 543);
defineClass(544, 543, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 544);
defineClass(545, 544, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 545);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(328, 545, {}, ClickEvent);
_.dispatch_0 = function dispatch_1(handler){
  dynamicCast(handler, 193).onClick(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 328);
defineClass(199, 1, {});
_.hashCode$ = function hashCode_6(){
  return this.index_0;
}
;
_.toString$ = function toString_13(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 199);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(43, 199, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 43);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 19);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(84, 43, {84:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 84);
function $unsafeGet(this$static, key_0){
  return this$static.map_0[key_0];
}

function $unsafePut(this$static, key_0, value_0){
  this$static.map_0[key_0] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(403, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 403);
defineClass(553, 544, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 553);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(463, 553, {}, TouchCancelEvent);
_.dispatch_0 = function dispatch_2(handler){
  $onTouchEnd(dynamicCast(handler, 569).this$01);
}
;
_.getAssociatedType_1 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 463);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(462, 553, {}, TouchEndEvent);
_.dispatch_0 = function dispatch_3(handler){
  $onTouchEnd(dynamicCast(handler, 568).this$01);
}
;
_.getAssociatedType_1 = function getAssociatedType_4(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 462);
defineClass(459, 1, {});
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 459);
function TouchEvent$TouchSupportDetectorNo(){
  var elem;
  elem = document.createElement('div');
  elem.setAttribute('ontouchstart', 'return;');
  typeof elem.ontouchstart == 'function';
}

defineClass(460, 459, {}, TouchEvent$TouchSupportDetectorNo);
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetectorNo', 460);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch_0(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(461, 553, {}, TouchMoveEvent);
_.dispatch_0 = function dispatch_4(handler){
  $dispatch_0(this, dynamicCast(handler, 567));
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 461);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_1(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(458, 553, {}, TouchStartEvent);
_.dispatch_0 = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, 566));
}
;
_.getAssociatedType_1 = function getAssociatedType_6(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 458);
function $dispatch_2(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_5) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent_2(source.handlerManager, event_0);
  }
}

defineClass(402, 511, {}, AttachEvent);
_.dispatch_0 = function dispatch_6(handler){
  $dispatch_2(this, dynamicCast(handler, 563));
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_5;
}
;
_.attached = false;
var TYPE_5;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 402);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(330, 511, {}, CloseEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  dynamicCast(handler, 155).onClose(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 330);
function OpenEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_7) {
    event_0 = new OpenEvent;
    !!source.handlerManager && $fireEvent_2(source.handlerManager, event_0);
  }
}

defineClass(329, 511, {}, OpenEvent);
_.dispatch_0 = function dispatch_8(handler){
  dynamicCast(handler, 194).onOpen(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_OpenEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'OpenEvent', 329);
function ResizeEvent(){
}

function fire_3(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new ResizeEvent;
    $fireEvent_2(source, event_0);
  }
}

defineClass(308, 511, {}, ResizeEvent);
_.dispatch_0 = function dispatch_9(handler){
  dynamicCast(handler, 191).onResize(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 308);
function $dispatch_3(this$static, handler){
  var token;
  token = this$static.value_0;
  $handleHistoryToken(handler.this$01, token);
}

function ValueChangeEvent(value_0){
  this.value_0 = value_0;
}

function fire_4(source, value_0){
  var event_0;
  if (TYPE_9) {
    event_0 = new ValueChangeEvent(value_0);
    $fireEvent_2(source.handlers, event_0);
  }
}

defineClass(399, 511, {}, ValueChangeEvent);
_.dispatch_0 = function dispatch_10(handler){
  $dispatch_3(this, dynamicCast(handler, 561));
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 399);
defineClass(531, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 531);
function $castFireEvent(this$static, event_0){
  var e;
  try {
    this$static.fireEvent_0(event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 82)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
}

defineClass(535, 531, $intern_26);
_.fireEvent_0 = function fireEvent_0(event_0){
  throw new UnsupportedOperationException_0('Subclass responsibility. This class is a legacy wrapper for com.google.web.bindery.event.shared.EventBus. Use that directly, or try com.google.gwt.event.shared.SimpleEventBus');
}
;
var Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'EventBus', 535);
function $addHandler_0(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent_2(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 82)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(89, 1, $intern_26, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent_2(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 89);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_11(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_12(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_2(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast(this$static.map_0.get_2(type_0), 55) , dynamicCast(sourceMap.remove_1(source), 19) , sourceMap.isEmpty() && this$static.map_0.remove_1(type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_2(type_0), 55);
  if (!sourceMap) {
    sourceMap = new HashMap;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_2(source), 19);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_2(type_0), 55);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_2(source), 19);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_3(c$iterator.last = c$iterator.i++), 508));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return this$static.map_0.containsKey(eventKey);
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this, false);
}

function SimpleEventBus_0(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(132, 531, {}, SimpleEventBus);
_.doRemove = function doRemove(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 132);
function HandlerManager$Bus(fireInReverseOrder){
  SimpleEventBus_0.call(this, fireInReverseOrder);
}

defineClass(218, 132, {}, HandlerManager$Bus);
_.doRemove = function doRemove_0(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 218);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(296, 1, {562:1, 154:1}, LegacyHandlerWrapper);
_.removeHandler = function removeHandler_0(){
  $removeHandler(this.real);
}
;
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 296);
function ResettableEventBus(wrappedBus){
  this.real = new ResettableEventBus$TestableResettableEventBus(wrappedBus);
}

defineClass(244, 535, $intern_26, ResettableEventBus);
_.fireEvent = function fireEvent_2(event_0){
  $castFireEvent(this, event_0);
}
;
_.fireEvent_0 = function fireEvent_3(event_0){
  $fireEvent_3(this.real, event_0);
}
;
var Lcom_google_gwt_event_shared_ResettableEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'ResettableEventBus', 244);
function $fireEvent_3(this$static, event_0){
  $fireEvent_4(this$static.wrapped, event_0);
}

function $removeHandlers(this$static){
  var it, r;
  it = $iterator(new AbstractMap$1(this$static.registrations.map_0));
  while (it.val$outerIter2.hasNext()) {
    r = dynamicCast($next_4(it), 154);
    it.val$outerIter2.remove_0();
    r.removeHandler();
  }
}

defineClass(245, 531, {});
var Lcom_google_web_bindery_event_shared_ResettableEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'ResettableEventBus', 245);
function ResettableEventBus$TestableResettableEventBus(wrappedBus){
  this.registrations = new HashSet;
  this.wrapped = wrappedBus;
}

defineClass(246, 245, {}, ResettableEventBus$TestableResettableEventBus);
var Lcom_google_gwt_event_shared_ResettableEventBus$TestableResettableEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'ResettableEventBus/TestableResettableEventBus', 246);
function $addHandler_1(this$static, type_0, handler){
  return $doAdd(this$static.real, type_0, handler);
}

function $fireEvent_4(this$static, event_0){
  $doFire(this$static.real, event_0);
}

function SimpleEventBus_1(){
  this.real = new SimpleEventBus;
}

defineClass(270, 535, $intern_26, SimpleEventBus_1);
_.fireEvent = function fireEvent_4(event_0){
  $castFireEvent(this, event_0);
}
;
_.fireEvent_0 = function fireEvent_5(event_0){
  $fireEvent_4(this, event_0);
}
;
var Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'SimpleEventBus', 270);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 9);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 9);
    first?(first = false):(b.string += '; ' , b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(82, 10, $intern_27, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 82);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(119, 82, $intern_27, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 119);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(433, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 433);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(435, 104, {}, Request$1);
_.run = function run_3(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 435);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 51)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 51)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet_0().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), 24);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 51)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(184, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET, POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 184);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(423, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 423);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(112, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_14(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 112);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(113, 8, $intern_14, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 113);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(436, 113, $intern_14, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 436);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(465, 113, $intern_14, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 465);
defineClass(549, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 549);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(434, 549, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 434);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT_0;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT_0) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_11(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = buf.string.substr(0, 0)):0 > oldLength && (buf.string += valueOf_7(initDim(C_classLit, $intern_6, 0, -oldLength, 7, 1)));
  }
}

function $getNextCharCountInPattern(pattern, start_0){
  var ch_0, next;
  ch_0 = pattern.charCodeAt(start_0);
  next = start_0 + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch_0) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(dynamicCast($get_3(this$static.patternParts, i), 107))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_3(this$static.patternParts, i + 1), 107))) {
        abut = true;
        dynamicCast($get_3(this$static.patternParts, i), 107).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_1('MLydhHmsSDkK', fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $parsePattern(this$static, pattern){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < pattern.length; i++) {
    ch_0 = pattern.charCodeAt(i);
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += charToString(ch_0);
      }
      continue;
    }
    if ($indexOf_1('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += charToString(ch_0);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += charToString(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

defineClass(331, 1, {});
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 331);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(pattern){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  $parsePattern(this, pattern);
}

function getFormat(predef){
  $clinit_DateTimeFormat_0();
  var dtfi, pattern, pattern0;
  if (usesFixedEnglishStrings(predef)) {
    switch (predef.ordinal) {
      case 1:
        pattern0 = 'EEE, d MMM yyyy HH:mm:ss Z';
        break;
      case 0:
        pattern0 = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
        break;
      default:throw new IllegalStateException_0('Unexpected predef type ' + predef);
    }
    return getFormat_0(pattern0, new DateTimeFormatInfoImpl_en);
  }
  dtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  switch (predef.ordinal) {
    case 2:
      pattern = dtfi.dateFormatFull();
      break;
    case 3:
      pattern = dtfi.dateFormatLong();
      break;
    case 4:
      pattern = dtfi.dateFormatMedium();
      break;
    case 5:
      pattern = dtfi.dateFormatShort();
      break;
    case 10:
      pattern = dtfi.dateTimeFull(dtfi.timeFormatFull(), dtfi.dateFormatFull());
      break;
    case 11:
      pattern = dtfi.dateTimeLong(dtfi.timeFormatLong(), dtfi.dateFormatLong());
      break;
    case 12:
      pattern = dtfi.dateTimeMedium(dtfi.timeFormatMedium(), dtfi.dateFormatMedium());
      break;
    case 13:
      pattern = dtfi.dateTimeShort(dtfi.timeFormatShort(), dtfi.dateFormatShort());
      break;
    case 14:
      pattern = 'd';
      break;
    case 17:
      pattern = 'HH:mm';
      break;
    case 18:
      pattern = 'HH:mm:ss';
      break;
    case 15:
      pattern = 'h:mm a';
      break;
    case 16:
      pattern = 'h:mm:ss a';
      break;
    case 19:
      pattern = 'mm:ss';
      break;
    case 20:
      pattern = 'LLLL';
      break;
    case 21:
      pattern = 'LLL';
      break;
    case 22:
      pattern = 'MMM d';
      break;
    case 23:
      pattern = 'MMMM d';
      break;
    case 24:
      pattern = dtfi.formatMonthNumDay();
      break;
    case 25:
      pattern = dtfi.formatMonthFullWeekdayDay();
      break;
    case 6:
      pattern = dtfi.timeFormatFull();
      break;
    case 7:
      pattern = dtfi.timeFormatLong();
      break;
    case 8:
      pattern = dtfi.timeFormatMedium();
      break;
    case 9:
      pattern = dtfi.timeFormatShort();
      break;
    case 26:
      pattern = 'y';
      break;
    case 27:
      pattern = dtfi.formatYearMonthFull();
      break;
    case 28:
      pattern = dtfi.formatYearMonthAbbrev();
      break;
    case 29:
      pattern = dtfi.formatYearMonthAbbrevDay();
      break;
    case 30:
      pattern = dtfi.formatYearMonthFullDay();
      break;
    case 31:
      pattern = dtfi.formatYearMonthNum();
      break;
    case 32:
      pattern = dtfi.formatYearMonthNumDay();
      break;
    case 33:
      pattern = dtfi.formatYearMonthWeekdayDay();
      break;
    case 34:
      pattern = dtfi.formatYearQuarterFull();
      break;
    case 35:
      pattern = dtfi.formatYearQuarterShort();
      break;
    default:throw new IllegalArgumentException_0('Unexpected predefined format ' + predef);
  }
  return getFormat_0(pattern, dtfi);
}

function getFormat_0(pattern, dtfi){
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast(cache.get_2(pattern), 141));
  if (!dtf) {
    dtf = new DateTimeFormat(pattern);
    dtfi == defaultDtfi && cache.put(pattern, dtf);
  }
  return dtf;
}

function usesFixedEnglishStrings(predef){
  switch (predef.ordinal) {
    case 0:
    case 1:
      return true;
    default:return false;
  }
}

defineClass(141, 331, {141:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 141);
function $clinit_DateTimeFormat$PredefinedFormat(){
  $clinit_DateTimeFormat$PredefinedFormat = emptyMethod;
  ISO_8601 = new DateTimeFormat$PredefinedFormat('ISO_8601', 0);
  RFC_2822 = new DateTimeFormat$PredefinedFormat('RFC_2822', 1);
  DATE_FULL = new DateTimeFormat$PredefinedFormat('DATE_FULL', 2);
  DATE_LONG = new DateTimeFormat$PredefinedFormat('DATE_LONG', 3);
  DATE_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_MEDIUM', 4);
  DATE_SHORT = new DateTimeFormat$PredefinedFormat('DATE_SHORT', 5);
  TIME_FULL = new DateTimeFormat$PredefinedFormat('TIME_FULL', 6);
  TIME_LONG = new DateTimeFormat$PredefinedFormat('TIME_LONG', 7);
  TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('TIME_MEDIUM', 8);
  TIME_SHORT = new DateTimeFormat$PredefinedFormat('TIME_SHORT', 9);
  DATE_TIME_FULL = new DateTimeFormat$PredefinedFormat('DATE_TIME_FULL', 10);
  DATE_TIME_LONG = new DateTimeFormat$PredefinedFormat('DATE_TIME_LONG', 11);
  DATE_TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_TIME_MEDIUM', 12);
  DATE_TIME_SHORT = new DateTimeFormat$PredefinedFormat('DATE_TIME_SHORT', 13);
  DAY = new DateTimeFormat$PredefinedFormat('DAY', 14);
  HOUR_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE', 15);
  HOUR_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE_SECOND', 16);
  HOUR24_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE', 17);
  HOUR24_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE_SECOND', 18);
  MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('MINUTE_SECOND', 19);
  MONTH = new DateTimeFormat$PredefinedFormat('MONTH', 20);
  MONTH_ABBR = new DateTimeFormat$PredefinedFormat('MONTH_ABBR', 21);
  MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('MONTH_ABBR_DAY', 22);
  MONTH_DAY = new DateTimeFormat$PredefinedFormat('MONTH_DAY', 23);
  MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('MONTH_NUM_DAY', 24);
  MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('MONTH_WEEKDAY_DAY', 25);
  YEAR = new DateTimeFormat$PredefinedFormat('YEAR', 26);
  YEAR_MONTH = new DateTimeFormat$PredefinedFormat('YEAR_MONTH', 27);
  YEAR_MONTH_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR', 28);
  YEAR_MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR_DAY', 29);
  YEAR_MONTH_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_DAY', 30);
  YEAR_MONTH_NUM = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM', 31);
  YEAR_MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM_DAY', 32);
  YEAR_MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_WEEKDAY_DAY', 33);
  YEAR_QUARTER = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER', 34);
  YEAR_QUARTER_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER_ABBR', 35);
}

function DateTimeFormat$PredefinedFormat(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_DateTimeFormat$PredefinedFormat();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit, 1), $intern_4, 15, 0, [ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR]);
}

defineClass(15, 4, {15:1, 3:1, 5:1, 4:1}, DateTimeFormat$PredefinedFormat);
var DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, HOUR_MINUTE, HOUR_MINUTE_SECOND, ISO_8601, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, RFC_2822, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR;
var Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForEnum('com.google.gwt.i18n.client', 'DateTimeFormat/PredefinedFormat', 15, Ljava_lang_Enum_2_classLit, values_11);
defineClass(546, 1, {});
_.dateFormatFull = function dateFormatFull(){
  return 'y MMMM d, EEEE';
}
;
_.dateFormatLong = function dateFormatLong(){
  return 'y MMMM d';
}
;
_.dateFormatMedium = function dateFormatMedium(){
  return 'y MMM d';
}
;
_.dateFormatShort = function dateFormatShort(){
  return 'y-MM-dd';
}
;
_.dateTimeFull = function dateTimeFull(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeLong = function dateTimeLong(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeMedium = function dateTimeMedium(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeShort = function dateTimeShort(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay(){
  return 'MMMM d, EEEE';
}
;
_.formatMonthNumDay = function formatMonthNumDay(){
  return 'MM-dd';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev(){
  return 'y MMM';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay(){
  return 'y MMM d';
}
;
_.formatYearMonthFull = function formatYearMonthFull(){
  return 'y MMMM';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay(){
  return 'y MMMM d';
}
;
_.formatYearMonthNum = function formatYearMonthNum(){
  return 'y-MM';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay(){
  return 'y-MM-dd';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay(){
  return 'y MMM d, EEE';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull(){
  return 'y QQQQ';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort(){
  return 'y Q';
}
;
_.timeFormatFull = function timeFormatFull(){
  return 'HH:mm:ss zzzz';
}
;
_.timeFormatLong = function timeFormatLong(){
  return 'HH:mm:ss z';
}
;
_.timeFormatMedium = function timeFormatMedium(){
  return 'HH:mm:ss';
}
;
_.timeFormatShort = function timeFormatShort(){
  return 'HH:mm';
}
;
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 546);
defineClass(547, 546, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 547);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT_0 = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_4, 106, 0, [RTL, LTR, DEFAULT_0]);
}

defineClass(106, 4, {106:1, 3:1, 5:1, 4:1}, HasDirection$Direction);
var DEFAULT_0, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 106, Ljava_lang_Enum_2_classLit, values_12);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_1 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function LocaleInfo(){
}

defineClass(309, 1, {}, LocaleInfo);
var instance_1;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 309);
function DateTimeFormatInfoImpl(){
}

defineClass(400, 547, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 400);
function DateTimeFormatInfoImpl_en(){
}

defineClass(401, 400, {}, DateTimeFormatInfoImpl_en);
_.dateFormatFull = function dateFormatFull_0(){
  return 'EEEE, MMMM d, y';
}
;
_.dateFormatLong = function dateFormatLong_0(){
  return 'MMMM d, y';
}
;
_.dateFormatMedium = function dateFormatMedium_0(){
  return 'MMM d, y';
}
;
_.dateFormatShort = function dateFormatShort_0(){
  return 'M/d/yy';
}
;
_.dateTimeFull = function dateTimeFull_0(timePattern, datePattern){
  return datePattern + " 'at' " + timePattern;
}
;
_.dateTimeLong = function dateTimeLong_0(timePattern, datePattern){
  return datePattern + " 'at' " + timePattern;
}
;
_.dateTimeMedium = function dateTimeMedium_0(timePattern, datePattern){
  return datePattern + ', ' + timePattern;
}
;
_.dateTimeShort = function dateTimeShort_0(timePattern, datePattern){
  return datePattern + ', ' + timePattern;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay_0(){
  return 'EEEE, MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay_0(){
  return 'M/d';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev_0(){
  return 'MMM y';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay_0(){
  return 'MMM d, y';
}
;
_.formatYearMonthFull = function formatYearMonthFull_0(){
  return 'MMMM y';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay_0(){
  return 'MMMM d, y';
}
;
_.formatYearMonthNum = function formatYearMonthNum_0(){
  return 'M/y';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay_0(){
  return 'M/d/y';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay_0(){
  return 'EEE, MMM d, y';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull_0(){
  return 'QQQQ y';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort_0(){
  return 'Q y';
}
;
_.timeFormatFull = function timeFormatFull_0(){
  return 'h:mm:ss a zzzz';
}
;
_.timeFormatLong = function timeFormatLong_0(){
  return 'h:mm:ss a z';
}
;
_.timeFormatMedium = function timeFormatMedium_0(){
  return 'h:mm:ss a';
}
;
_.timeFormatShort = function timeFormatShort_0(){
  return 'h:mm a';
}
;
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl_en', 401);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(107, 1, {107:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 107);
function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 51)) {
    jse = dynamicCast(e, 51);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 9)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_2;
  a1 = value_0 >> 22 & $intern_2;
  a2 = value_0 < 0?$intern_3:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException('divide by zero');
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_28 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_28 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_28 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_2;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_2;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_3;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_29 + a.h * $intern_30;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_2);
  setM(a, sum1 & $intern_2);
  setH(a, sum2 & $intern_3);
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_2, m:sum1 & $intern_2, h:sum2 & $intern_3};
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function div(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_31) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_30) {
    a2 = round_int(value_0 / $intern_30);
    value_0 -= a2 * $intern_30;
  }
  a1 = 0;
  if (value_0 >= $intern_29) {
    a1 = round_int(value_0 / $intern_29);
    value_0 -= a1 * $intern_29;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 579, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_2;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_2;
  c2 += c1 >> 22;
  c1 &= $intern_2;
  c2 &= $intern_3;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_2;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_2;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_3;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_2, m:res1 & $intern_2, h:res2 & $intern_3};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_28) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_3:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_3:0;
    res1 = negative?$intern_2:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_2, m:res1 & $intern_2, h:res2 & $intern_3};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_3;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_2, m:res1 & $intern_2, h:res2 & $intern_3};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_2, m:sum1 & $intern_2, h:sum2 & $intern_3};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_31;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_29 + a.h * $intern_30;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_15(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_28 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_15(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt($intern_32);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_2, $intern_2, 524287);
  MIN_VALUE = create0(0, 0, $intern_28);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_1();
  $onModuleLoad_0($clinit_LogConfiguration());
  $onModuleLoad(new GTusach);
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height_0 * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child, userObject);
  $add_11(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel_0(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_3(l$iterator0.last = l$iterator0.i++), 95));
      l.left = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height_0 = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(l);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_3(l$iterator.last = l$iterator.i++), 95));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_9(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImpl;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(170, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 170);
function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this);
}

defineClass(294, 136, {}, Layout$1);
_.onCancel = function onCancel_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onComplete = function onComplete_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onUpdate = function onUpdate(progress){
  var l, l$iterator, child;
  for (l$iterator = new AbstractList$IteratorImpl(this.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_3(l$iterator.last = l$iterator.i++), 95));
    l.setTargetLeft && (l.left = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height_0 = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(l);
    !!this.val$callback2 && (child = l.userObject , instanceOf(child, 63) && dynamicCast(child, 63).onResize_0() , undefined);
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 294);
function $setBottomHeight(this$static, bottom, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = bottom;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, left, leftUnit, width_0, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = left;
  this$static.targetWidth = width_0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, right, rightUnit, width_0, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = right;
  this$static.targetWidth = width_0;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, top_0, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = top_0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setTopHeight(this$static, top_0, topUnit, height, heightUnit){
  this$static.setTargetTop = this$static.setTargetHeight = true;
  this$static.setTargetBottom = false;
  this$static.targetTop = top_0;
  this$static.targetHeight = height;
  this$static.targetTopUnit = topUnit;
  this$static.targetHeightUnit = heightUnit;
}

function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(95, 1, {95:1}, Layout$Layer);
_.bottom = 0;
_.height_0 = 0;
_.left = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 95);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $doc.createElement('div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  layer.visible?$setPropertyImpl(style, 'display', ''):$setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  style['left'] = layer.setLeft?layer.left + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + 'px':'';
  style['height'] = layer.setHeight?layer.height_0 + 'px':'';
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent_0(container);
  $getParentElement(child) == container && $removeFromParent_0(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function LayoutImpl(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType_0());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType_0());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType_0());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_4, 58, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE)]));
  return ruler;
}

defineClass(332, 1, {}, LayoutImpl);
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 332);
function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(103, 1, {103:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 103);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(297, 103, {103:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || ($getLevel(this) , $intern_33 > record.level.intValue())) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level.intValue();
  val >= ($clinit_Level() , 1000)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 297);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(298, 103, {103:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 298);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl_0 = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad_0(){
  var log_0;
  $configureClientSideLogging(impl_0);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl_0;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(201, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 201);
function $configureClientSideLogging(this$static){
  this$static.root = (new LoggerImplRegular , $ensureLogger(getLogManager(), ''));
  this$static.root.impl.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $addHandler_2(l.impl, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler_2(l.impl, dev);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_2('logLevel'), 19) , !paramsForName?null:dynamicCastToString(paramsForName.get_3(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , INFO));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(200, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 200);
defineClass(541, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 541);
defineClass(542, 541, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 542);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_2(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_2(s, $toString_3(date)) , s.string += ' ' , $append_2(s, event_0.loggerName) , s.string += '\n' , $append_2(s, event_0.level.getName()) , s.string += ': ' , s.string));
  $append_2(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(175, 542, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 175);
function $parse_0(name_0){
  name_0 = name_0.toUpperCase();
  if ($equals(name_0, 'ALL')) {
    return $clinit_Level() , ALL;
  }
   else if ($equals(name_0, 'CONFIG')) {
    return $clinit_Level() , CONFIG;
  }
   else if ($equals(name_0, 'FINE')) {
    return $clinit_Level() , FINE;
  }
   else if ($equals(name_0, 'FINER')) {
    return $clinit_Level() , FINER;
  }
   else if ($equals(name_0, 'FINEST')) {
    return $clinit_Level() , FINEST;
  }
   else if ($equals(name_0, 'INFO')) {
    return $clinit_Level() , INFO;
  }
   else if ($equals(name_0, 'OFF')) {
    return $clinit_Level() , OFF;
  }
   else if ($equals(name_0, 'SEVERE')) {
    return $clinit_Level() , SEVERE;
  }
   else if ($equals(name_0, 'WARNING')) {
    return $clinit_Level() , WARNING;
  }
  throw new IllegalArgumentException_0('Invalid level "' + name_0 + '"');
}

function $addHandler_2(this$static, handler){
  $add_11(this$static.handlers, handler);
}

function $fine(this$static, msg){
  $log(this$static, ($clinit_Level() , FINE), msg, null);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.impl.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.impl.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  return dynamicCast($toArray_1(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_34, 103, this$static.handlers.array.length, 0, 1)), 192);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Level() , INFO), msg, null);
}

function $isLoggable(this$static, messageLevel){
  return $getEffectiveLevel(this$static).intValue() <= messageLevel.intValue();
}

function $log(this$static, level, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue() <= level.intValue()) {
    record = new LogRecord(level, msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $log_0(this$static, record);
  }
}

function $log_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($isLoggable(this$static, record.level)) {
    for (handler$array0 = dynamicCast($toArray_1(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_34, 103, this$static.handlers.array.length, 0, 1)), 192) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = $getHandlers(logger.impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.impl.useParentHandlers?logger.impl.parent_0:null;
    }
  }
}

function $setLevel_0(this$static, newLevel){
  this$static.level = newLevel;
}

function $setName_0(this$static, newName){
  this$static.name_0 = newName;
}

function $setParent_0(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

function $warning(this$static, msg){
  $log(this$static, ($clinit_Level() , WARNING), msg, null);
}

function LoggerImplRegular(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(92, 1, {}, LoggerImplRegular);
_.level = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 92);
defineClass(536, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 536);
defineClass(537, 536, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 537);
function PrintStream(){
}

defineClass(257, 537, {}, PrintStream);
_.print_0 = function print_0(s){
}
;
_.println = function println(x_0){
}
;
_.println_0 = function println_0(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 257);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(311, 257, {}, StackTracePrintStream);
_.print_0 = function print_1(str){
  $append_2(this.builder, str);
}
;
_.println = function println_1(obj){
  $append_2(this.builder, '' + obj);
  $append_2(this.builder, '\n');
}
;
_.println_0 = function println_2(str){
  $append_2(this.builder, str);
  $append_2(this.builder, '\n');
}
;
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 311);
function AbstractPlaceHistoryMapper$PrefixAndToken(prefix, token){
  this.prefix = prefix;
  this.token = token;
}

defineClass(160, 1, {}, AbstractPlaceHistoryMapper$PrefixAndToken);
_.toString$ = function toString_16(){
  return this.prefix.length == 0?this.token:this.prefix + ':' + this.token;
}
;
var Lcom_google_gwt_place_impl_AbstractPlaceHistoryMapper$PrefixAndToken_2_classLit = createForClass('com.google.gwt.place.impl', 'AbstractPlaceHistoryMapper/PrefixAndToken', 160);
function Place$1(){
}

defineClass(213, 529, {}, Place$1);
var Lcom_google_gwt_place_shared_Place$1_2_classLit = createForClass('com.google.gwt.place.shared', 'Place/1', 213);
function $clinit_PlaceChangeEvent(){
  $clinit_PlaceChangeEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type;
}

function PlaceChangeEvent(newPlace){
  $clinit_PlaceChangeEvent();
  this.newPlace = newPlace;
}

defineClass(224, 511, {}, PlaceChangeEvent);
_.dispatch_0 = function dispatch_11(handler){
  dynamicCast(handler, 509).onPlaceChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_place_shared_PlaceChangeEvent_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceChangeEvent', 224);
function $clinit_PlaceChangeRequestEvent(){
  $clinit_PlaceChangeRequestEvent = emptyMethod;
  TYPE_11 = new GwtEvent$Type;
}

function $dispatch_4(this$static){
  this$static.warning = null;
}

function PlaceChangeRequestEvent(){
  $clinit_PlaceChangeRequestEvent();
}

defineClass(225, 511, {}, PlaceChangeRequestEvent);
_.dispatch_0 = function dispatch_12(handler){
  $dispatch_4(this, dynamicCast(handler, 560));
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_place_shared_PlaceChangeRequestEvent_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceChangeRequestEvent', 225);
function $clinit_PlaceController(){
  $clinit_PlaceController = emptyMethod;
  log_4 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_place_shared_PlaceController_2_classLit) , Lcom_google_gwt_place_shared_PlaceController_2_classLit.typeName));
}

function $goTo_0(this$static, newPlace){
  $fine_0(log_4, 'goTo: ' + newPlace);
  if (this$static.where == newPlace) {
    $fine_0(log_4, 'Asked to return to the same place: ' + newPlace);
    return;
  }
  $maybeGoTo(this$static);
  this$static.where = newPlace;
  $fireEvent_4(this$static.eventBus, new PlaceChangeEvent(newPlace));
}

function $maybeGoTo(this$static){
  var warning, willChange;
  willChange = new PlaceChangeRequestEvent;
  $fireEvent_4(this$static.eventBus, willChange);
  warning = willChange.warning;
  return warning;
}

function PlaceController(eventBus){
  $clinit_PlaceController();
  this.where = ($clinit_Place() , NOWHERE);
  this.eventBus = eventBus;
  $addWindowClosingHandler(new PlaceController$1(this));
}

defineClass(158, 1, {}, PlaceController);
var log_4;
var Lcom_google_gwt_place_shared_PlaceController_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceController', 158);
function PlaceController$1(this$0){
  this.this$01 = this$0;
}

defineClass(216, 1, {30:1, 559:1}, PlaceController$1);
var Lcom_google_gwt_place_shared_PlaceController$1_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceController/1', 216);
function $addWindowClosingHandler(handler){
  return maybeInitializeCloseHandlers() , addHandler(($clinit_Window$ClosingEvent() , $clinit_Window$ClosingEvent() , TYPE_13), handler);
}

function $clinit_PlaceHistoryHandler(){
  $clinit_PlaceHistoryHandler = emptyMethod;
  log_5 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_place_shared_PlaceHistoryHandler_2_classLit) , Lcom_google_gwt_place_shared_PlaceHistoryHandler_2_classLit.typeName));
}

function $handleHistoryToken(this$static, token){
  var newPlace;
  newPlace = null;
  $equals('', token) && (newPlace = this$static.defaultPlace);
  !newPlace && (newPlace = $getPlace(token));
  if (!newPlace) {
    $warning_0(log_5, 'Unrecognized history token: ' + token);
    newPlace = this$static.defaultPlace;
  }
  $goTo_0(this$static.placeController, newPlace);
}

function $register(this$static, placeController, eventBus, defaultPlace){
  var historyReg, placeReg;
  this$static.placeController = placeController;
  this$static.defaultPlace = defaultPlace;
  placeReg = $addHandler_1(eventBus, ($clinit_PlaceChangeEvent() , TYPE_10), new PlaceHistoryHandler$1(this$static));
  historyReg = $addValueChangeHandler(new PlaceHistoryHandler$2(this$static));
  return new PlaceHistoryHandler$3(this$static, placeReg, historyReg);
}

function $tokenForPlace(this$static, newPlace){
  var token;
  if (this$static.defaultPlace == newPlace) {
    return '';
  }
  token = $getToken_0(newPlace);
  if (token != null) {
    return token;
  }
  $warning_0(log_5, 'Place not mapped to a token: ' + newPlace);
  return '';
}

function PlaceHistoryHandler(){
  $clinit_PlaceHistoryHandler();
  this.defaultPlace = ($clinit_Place() , NOWHERE);
}

defineClass(156, 1, {}, PlaceHistoryHandler);
var log_5;
var Lcom_google_gwt_place_shared_PlaceHistoryHandler_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceHistoryHandler', 156);
function PlaceHistoryHandler$1(this$0){
  this.this$01 = this$0;
}

defineClass(226, 1, {30:1, 509:1}, PlaceHistoryHandler$1);
_.onPlaceChange = function onPlaceChange_0(event_0){
  var newPlace;
  newPlace = event_0.newPlace;
  newItem($tokenForPlace(this.this$01, newPlace));
}
;
var Lcom_google_gwt_place_shared_PlaceHistoryHandler$1_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceHistoryHandler/1', 226);
function PlaceHistoryHandler$2(this$0){
  this.this$01 = this$0;
}

defineClass(227, 1, {561:1, 30:1}, PlaceHistoryHandler$2);
var Lcom_google_gwt_place_shared_PlaceHistoryHandler$2_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceHistoryHandler/2', 227);
function PlaceHistoryHandler$3(this$0, val$placeReg, val$historyReg){
  this.this$01 = this$0;
  this.val$placeReg2 = val$placeReg;
  this.val$historyReg3 = val$historyReg;
}

defineClass(228, 1, {154:1}, PlaceHistoryHandler$3);
_.removeHandler = function removeHandler_1(){
  this.this$01.defaultPlace = ($clinit_Place() , NOWHERE);
  this.this$01.placeController = null;
  $removeHandler(this.val$placeReg2);
  $removeHandler(this.val$historyReg3.real);
}
;
var Lcom_google_gwt_place_shared_PlaceHistoryHandler$3_2_classLit = createForClass('com.google.gwt.place.shared', 'PlaceHistoryHandler/3', 228);
function $addValueChangeHandler(valueChangeHandler){
  return $clinit_History() , $addValueChangeHandler_0(historyEventSource, valueChangeHandler);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function ImageResourcePrototype(url_0){
  this.height_0 = 16;
  this.width_0 = 16;
  this.url_0 = url_0;
}

defineClass(190, 1, {}, ImageResourcePrototype);
_.height_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 190);
function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(111, 1, $intern_35, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, 127)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 127).asString());
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 111);
function SafeHtmlString(){
  this.html = '';
}

defineClass(424, 1, $intern_35, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_6(obj){
  if (!instanceOf(obj, 127)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 127).asString());
}
;
_.hashCode$ = function hashCode_8(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_17(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 424);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(88, 1, {510:1, 88:1}, SafeUriString);
_.equals$ = function equals_7(obj){
  if (!instanceOf(obj, 510)) {
    return false;
  }
  return $equals(this.uri_0, dynamicCast(dynamicCast(obj, 510), 88).uri_0);
}
;
_.hashCode$ = function hashCode_9(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 88);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

defineClass(548, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 548);
function PassthroughParser(){
}

defineClass(406, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 406);
function PassthroughRenderer(){
}

defineClass(405, 548, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 405);
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = pow_0(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if (abs_0(newVelocity.x_0) < 0.02 && abs_0(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(479, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 479);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(480, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 480);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(37, 1, {37:1}, Point, Point_0);
_.equals$ = function equals_8(obj){
  var c;
  if (!instanceOf(obj, 37)) {
    return false;
  }
  c = dynamicCast(obj, 37);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode$ = function hashCode_10(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString$ = function toString_18(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 37);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = abs_0(diff.x_0);
  absDiffY = abs_0(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01_0.size_1();) {
    point = (checkCriticalElement(point$iterator.i < point$iterator.this$01_0.size_1()) , dynamicCast(point$iterator.this$01_0.get_3(point$iterator.last = point$iterator.i++), 76));
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs_0(diff.x_0);
    absDiffY = abs_0(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_11(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01_0.size_1();) {
    reg = (checkCriticalElement(reg$iterator.i < reg$iterator.this$01_0.size_1()) , dynamicCast(reg$iterator.this$01_0.get_3(reg$iterator.last = reg$iterator.i++), 562));
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler(widget, new TouchScroller$1(this$static), (!TYPE_5 && (TYPE_5 = new GwtEvent$Type) , TYPE_5));
  $add_11(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_4)));
  $add_11(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_3)));
  $add_11(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_2)));
  $add_11(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_1)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(448, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 448);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(452, 1, {563:1, 30:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 452);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(453, 1, {566:1, 30:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 453);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(454, 1, {567:1, 30:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 454);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(455, 1, {568:1, 30:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 455);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(456, 1, {569:1, 30:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 456);
function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(186, 1, $intern_1, TouchScroller$6);
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point((event_0.nativeEvent.clientX || 0) | 0, (event_0.nativeEvent.clientY || 0) | 0);
    if ($isClickScrollTriggeringTouch(this.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$01, clickPoint)) {
      event_0.isCanceled = true;
      $eventStopPropagation(event_0.nativeEvent);
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}
;
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 186);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(449, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_4(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position);
  hPos = round_int(this.state.position.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 449);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(451, 1, $intern_10, TouchScroller$MomentumCommand$1);
_.onResize = function onResize_0(event_0){
  $finish(this.this$11);
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 451);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(450, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_5(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new AbstractList$IteratorImpl(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01_0.size_1()) {
    point = (checkCriticalElement(iter.i < iter.this$01_0.size_1()) , dynamicCast(iter.this$01_0.get_3(iter.last = iter.i++), 76));
    currentTime - point.time >= 2500 && (checkState(iter.last != -1) , iter.this$01_0.remove_3(iter.last) , iter.i = iter.last , iter.last = -1);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 450);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(76, 1, {76:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 76);
function $get(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    $removeAttribute(this$static.element, 'id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(181, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 181);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $doc.createElement('div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(407, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 407);
function ensureCookies(){
  var newCachedCookies;
  if (!cachedCookies || needsRefresh()) {
    newCachedCookies = new HashMap;
    loadCookies(newCachedCookies);
    cachedCookies = newCachedCookies;
  }
  return cachedCookies;
}

function isValidCookieValue(value_0){
  if (uriEncoding) {
    return true;
  }
  return !(value_0.indexOf('=') != -1 || value_0.indexOf(';') != -1);
}

function loadCookies(m){
  var docCookie = $doc.cookie;
  if (docCookie && docCookie != '') {
    var crumbs = docCookie.split('; ');
    for (var i = 0; i < crumbs.length; ++i) {
      var name_0, value_0;
      var eqIdx = crumbs[i].indexOf('=');
      if (eqIdx == -1) {
        name_0 = crumbs[i];
        value_0 = '';
      }
       else {
        name_0 = crumbs[i].substring(0, eqIdx);
        value_0 = crumbs[i].substring(eqIdx + 1);
      }
      if (uriEncoding) {
        try {
          name_0 = decodeURIComponent(name_0);
        }
         catch (e) {
        }
        try {
          value_0 = decodeURIComponent(value_0);
        }
         catch (e) {
        }
      }
      m.put(name_0, value_0);
    }
  }
}

function needsRefresh(){
  var docCookie = $doc.cookie;
  if (docCookie != rawCookies) {
    rawCookies = docCookie;
    return true;
  }
   else {
    return false;
  }
}

function removeCookie(name_0){
  uriEncoding && (name_0 = encodeURIComponent(name_0));
  $doc.cookie = name_0 + '=;expires=Fri, 02-Jan-1970 00:00:00 GMT';
}

function setCookie(name_0, value_0){
  var c;
  if (uriEncoding) {
    name_0 = encodeURIComponent(name_0);
    value_0 = encodeURIComponent(value_0);
  }
   else if (uriEncoding || !(name_0.indexOf('=') != -1 || name_0.indexOf(';') != -1 || name_0.indexOf(',') != -1 || $equals(name_0.substr(0, 1), '$') || (new RegExp('^(.*\\s+.*)$')).test(name_0))) {
    if (!isValidCookieValue(value_0)) {
      throw new IllegalArgumentException_0('Illegal cookie format: ' + value_0 + ' is not a valid cookie value.');
    }
  }
   else {
    throw new IllegalArgumentException_0('Illegal cookie format: ' + name_0 + ' is not a valid cookie name.');
  }
  c = name_0 + '=' + value_0;
  $doc.cookie = c;
}

var cachedCookies = null, rawCookies, uriEncoding = true;
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_5(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents_0(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_1(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_12 && (TYPE_12 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_12, handler);
}

function getEventsSunk(elem){
  return $clinit_DOM() , elem.__eventBits || 0;
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkEvents_1(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_5(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_12 && !!handlers && $isEventHandled(handlers, TYPE_12)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_2(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(197, 511, {}, Event$NativePreviewEvent);
_.dispatch_0 = function dispatch_13(handler){
  dynamicCast(handler, 198).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return TYPE_12;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_12, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 197);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function newItem(historyToken){
  $clinit_History();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!$equals(historyToken, token_0)) {
    token_0 = historyToken;
    updateToken = $wnd.encodeURI(historyToken).replace('#', '%23');
    $wnd.location.hash = updateToken;
  }
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals(hashToken, token_0)) {
    token_0 = hashToken;
    fire_4(historyEventSource, hashToken);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler_0(this$static, handler){
  return $addHandler_0(this$static.handlers, (!TYPE_9 && (TYPE_9 = new GwtEvent$Type) , TYPE_9), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(303, 1, $intern_26, History$HistoryEventSource);
_.fireEvent = function fireEvent_6(event_0){
  $fireEvent_2(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 303);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(304, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 304);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent_2(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize_1(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_3((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_13 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(217, 511, {}, Window$ClosingEvent);
_.dispatch_0 = function dispatch_14(handler){
  $maybeGoTo(dynamicCast(handler, 559).this$01, $clinit_Place());
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 217);
function buildListParamMap(queryString){
  var entry, entry$iterator, key_0, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key_0 = kv[0];
      if (!key_0.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 51))
          throw unwrap($e0);
      }
      values = dynamicCast(out.get_2(key_0), 19);
      if (!values) {
        values = new ArrayList;
        out.put(key_0, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 24);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 19)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString, href_0, hashLoc, questionLoc;
  currentQueryString = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc)) , questionLoc = href_0.indexOf('?') , questionLoc > 0?href_0.substring(questionLoc):'');
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(131, 89, $intern_26, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 131);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_36;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_28;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_29;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_37;
    case 'gesturechange':
      return $intern_38;
    case 'gestureend':
      return $intern_39;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 18)?maybeListener:null;
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_36 && (elem.onerror = bits & $intern_36?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_28 && (elem.onpaste = bits & $intern_28?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_29 && (elem.ontouchend = bits & $intern_29?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_37 && (elem.ongesturestart = bits & $intern_37?dispatchEvent_1:null);
  chMask & $intern_38 && (elem.ongesturechange = bits & $intern_38?dispatchEvent_1:null);
  chMask & $intern_39 && (elem.ongestureend = bits & $intern_39?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  !previewEvent(evt);
  return;
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function $get_0(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_3(this$static.uiObjectList, index_0), 13);
}

function $put(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.array.length;
    $add_11(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_2(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  ($clinit_DOM() , uiObject.element)['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_2(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode(index_0, this$static.freeList);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(334, 1, {}, ElementMapperImpl);
_.freeList = null;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 334);
function ElementMapperImpl$FreeNode(index_0, next){
  this.index_0 = index_0;
  this.next = next;
}

defineClass(335, 1, {}, ElementMapperImpl$FreeNode);
_.index_0 = 0;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl/FreeNode', 335);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(306, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_6(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 306);
function WindowImplIE$2(){
}

defineClass(307, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_7(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize_1));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 307);
defineClass(530, 11, $intern_40);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 530);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_7(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(91, 530, $intern_40);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 91);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(247, 91, $intern_40);
_.remove = function remove_1(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 247);
function $setEnabled(this$static, enabled){
  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(139, 11, $intern_7);
_.getTabIndex = function getTabIndex(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.onAttach = function onAttach_1(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.getTabIndex();
  -1 == tabIndex && this.setTabIndex(0);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 139);
function Anchor_0(){
  $setElement(this, $doc.createElement('a'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Anchor');
  new DirectionalTextHelper(this.element);
}

defineClass(109, 139, {20:1, 12:1, 18:1, 109:1, 17:1, 21:1, 13:1, 11:1}, Anchor_0);
_.getTabIndex = function getTabIndex_0(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Anchor', 109);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 11);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_12(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(230, 119, $intern_27, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 230);
function AttachDetachException$1(){
}

defineClass(231, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_8(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 231);
function AttachDetachException$2(){
}

defineClass(232, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_9(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 232);
function $getText(this$static){
  return ($clinit_DOM() , this$static.element).textContent;
}

function $setHTML(this$static, html){
  $setInnerHTML(($clinit_DOM() , this$static.element), html);
}

function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(171, 139, $intern_7);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 171);
function Button(){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

function Button_0(html){
  Button.call(this);
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(74, 171, $intern_7, Button, Button_0);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 74);
function $setCellHorizontalAlignment(td, align_0){
  $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(182, 91, $intern_40);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 182);
function $getValue(this$static){
  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);
}

function $setValue(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(){
  var e;
  CheckBox_0.call(this, ($clinit_DOM() , e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));
  this.inputElem = elem;
  this.labelElem = $doc.createElement('label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

defineClass(172, 171, $intern_7, CheckBox);
_.getTabIndex = function getTabIndex_1(){
  return $getTabIndex(this.inputElem);
}
;
_.onLoad = function onLoad_1(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, null);
  $setValue(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE));
}
;
_.setTabIndex = function setTabIndex_1(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_1(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents_0(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 172);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(146, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 146);
function $add_1(this$static, w){
  if (!this$static.contentWrapper.widget) {
    $setContent(this$static, w);
  }
   else {
    throw new IllegalStateException_0('A DisclosurePanel can only contain two Widgets.');
  }
}

function $remove_0(this$static, w){
  if (w == this$static.contentWrapper.widget) {
    $setContent(this$static, null);
    return true;
  }
  return false;
}

function $setContent(this$static, content_0){
  var currentContent;
  currentContent = this$static.contentWrapper.widget;
  if (currentContent) {
    $setWidget_1(this$static.contentWrapper, null);
    setStyleName(($clinit_DOM() , currentContent.element), 'content', false);
  }
  if (content_0) {
    $setWidget_1(this$static.contentWrapper, content_0);
    setStyleName(($clinit_DOM() , content_0.element), 'content', true);
    $setContentDisplay(this$static);
  }
}

function $setContentDisplay(this$static){
  if (this$static.isOpen) {
    $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'closed', false);
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'open', true);
  }
   else {
    $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'open', false);
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'closed', true);
  }
  if (this$static.contentWrapper.widget) {
    !contentAnimation && (contentAnimation = new DisclosurePanel$ContentAnimation);
    $setOpen_0(contentAnimation, this$static);
  }
}

function $setHeader(this$static, headerWidget){
  $setWidget_1(this$static.header, headerWidget);
}

function $setOpen(this$static, isOpen){
  if (this$static.isOpen != isOpen) {
    this$static.isOpen = isOpen;
    $setContentDisplay(this$static);
    this$static.isOpen?fire_2(this$static):fire_1(this$static);
  }
}

function DisclosurePanel(openImage, closedImage, headerText){
  this.mainPanel = new VerticalPanel;
  this.contentWrapper = new SimplePanel;
  this.header = new DisclosurePanel$ClickableHeader(this);
  $initWidget(this, this.mainPanel);
  $add_6(this.mainPanel, this.header);
  $add_6(this.mainPanel, this.contentWrapper);
  $setPropertyImpl($getElement(this.contentWrapper).style, 'padding', '0px');
  $setPropertyImpl($getElement(this.contentWrapper).style, 'overflow', 'hidden');
  $setClassName(($clinit_DOM() , this.element), 'gwt-DisclosurePanel');
  $setContentDisplay(this);
  $setHeader(this, new DisclosurePanel$DefaultHeader(this, openImage, closedImage, headerText));
}

function DisclosurePanel_0(headerText){
  DisclosurePanel.call(this, ($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer() , disclosurePanelOpen), ($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer() , disclosurePanelClosed), headerText);
}

defineClass(105, 539, $intern_40, DisclosurePanel_0);
_.iterator = function iterator_1(){
  return createWidgetIterator(this, initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 11, 0, [this.contentWrapper.widget]));
}
;
_.remove = function remove_2(w){
  return $remove_0(this, w);
}
;
_.isOpen = false;
var contentAnimation;
var Lcom_google_gwt_user_client_ui_DisclosurePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel', 105);
function $add_2(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_0('SimplePanel can only contain one child widget');
  }
  $setWidget_1(this$static, w);
}

function $remove_1(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget_0(this$static, w){
  $setWidget_1(this$static, !w?null:w);
}

function $setWidget_1(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_1(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(101, 530, $intern_40, SimplePanel);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_3(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 101);
function DisclosurePanel$ClickableHeader(this$0){
  var elem;
  this.this$01 = this$0;
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('a')));
  elem = this.element;
  $setPropertyString(elem, 'href', 'javascript:void(0);');
  $setPropertyImpl(elem.style, 'display', 'block');
  this.eventsToSink == -1?sinkEvents_0(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  $setClassName(this.element, 'header');
}

defineClass(300, 101, $intern_40, DisclosurePanel$ClickableHeader);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      $eventPreventDefault(event_0);
      $setOpen(this.this$01, !this.this$01.isOpen);
  }
}
;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$ClickableHeader_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/ClickableHeader', 300);
function $onUpdate(progress){
  var scrollHeight;
  scrollHeight = null.nullMethod().nullMethod();
  round_int(progress * scrollHeight);
  null.nullMethod().nullMethod().nullMethod();
  null.nullMethod().nullMethod().nullMethod();
}

function $setOpen_0(this$static, panel){
  $cancel_0(this$static);
  $setVisible(panel.contentWrapper, panel.isOpen);
  panel.isOpen && $setVisible(panel.contentWrapper.widget, true);
}

function DisclosurePanel$ContentAnimation(){
  Animation.call(this);
}

defineClass(301, 136, {}, DisclosurePanel$ContentAnimation);
_.onComplete = function onComplete_1(){
  this.opening || null.nullMethod();
  null.nullMethod().nullMethod().nullMethod();
}
;
_.onStart = function onStart_0(){
  $onUpdate((1 + cos_0($intern_12)) / 2);
  if (this.opening) {
    null.nullMethod();
    null.nullMethod();
  }
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(progress);
}
;
_.opening = false;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$ContentAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/ContentAnimation', 301);
function DisclosurePanel$DefaultHeader(this$0, openImage, closedImage, text_0){
  DisclosurePanel$DefaultHeader_0.call(this, this$0, new DisclosurePanel$DefaultHeader$2(closedImage, openImage), text_0);
}

function DisclosurePanel$DefaultHeader_0(this$0, imager, text_0){
  var imageTD, root, tbody, tr;
  this.this$01 = this$0;
  this.imager = imager;
  this.iconImage = new Image_1(imager.val$closedImage2);
  root = ($clinit_DOM() , $doc.createElement('table'));
  tbody = $doc.createElement('tbody');
  tr = $doc.createElement('tr');
  imageTD = $doc.createElement('td');
  this.labelTD = $doc.createElement('td');
  $setElement_0(this, root);
  $appendChild(root, resolve(tbody));
  $appendChild(tbody, resolve(tr));
  $appendChild(tr, resolve(imageTD));
  $appendChild(tr, resolve(this.labelTD));
  $setPropertyString(imageTD, 'align', 'center');
  $setPropertyString(imageTD, 'valign', 'middle');
  imageTD.style['width'] = $getWidth(this.iconImage) + 'px';
  $appendChild(imageTD, resolve($getElement(this.iconImage)));
  $setInnerText(this.labelTD, text_0);
  $addHandler(this$0, this, (!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7));
  $addHandler(this$0, this, TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type));
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}

defineClass(173, 11, {155:1, 20:1, 194:1, 30:1, 12:1, 18:1, 17:1, 21:1, 13:1, 11:1}, DisclosurePanel$DefaultHeader);
_.onClose = function onClose_1(event_0){
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}
;
_.onOpen = function onOpen_1(event_0){
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}
;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/DefaultHeader', 173);
function $updateImage(this$static, open_0, image){
  open_0?$setResource(image, this$static.val$openImage3):$setResource(image, this$static.val$closedImage2);
}

function DisclosurePanel$DefaultHeader$2(val$closedImage, val$openImage){
  this.val$closedImage2 = val$closedImage;
  this.val$openImage3 = val$openImage;
}

defineClass(302, 1, {}, DisclosurePanel$DefaultHeader$2);
var Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/DefaultHeader/2', 302);
var disclosurePanelClosed, disclosurePanelOpen;
function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer = emptyMethod;
  disclosurePanelClosed = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR42mNgoDZITk4WosiAtLS0M6mpqb1Amp9cAy4B8X8gfpWenp5MiQEwfB6IbSgxAIaXArEcJQaA8Ddg+NQVFhZykmsADG8MDQ1lJseA5wQDFocBP0FRm5WVxUNOGGwEJi4VcmLhKtC5HuSkg8NA5+bjDCRCAG8UDUoAAIw8kVdwMG+3AAAAAElFTkSuQmCC'))));
}

function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer = emptyMethod;
  disclosurePanelOpen = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR42mNgGD6gsLCQMy0t7TAQXyICn0lOThbCMCQ1NTUfKPmfEAaq68XqitDQUGaggqsEDHgFxPw4vZKenu6BzwCgfDLB8AAq3IjDgPNEBSgwgFSAin9iMcCG6FgBBRSa5qUkRWtWVhYPUNNzqOZvQCxHctoABRg02urITmCgAAUlMrINAKWNwZ2HAAhGkVd3k7/tAAAAAElFTkSuQmCC')));
}

function $doLayout(this$static){
  var bottom, child, child$iterator, data_0, layer, left, right, top_0;
  left = 0;
  top_0 = 0;
  right = 0;
  bottom = 0;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    data_0 = dynamicCast(child.layoutData, 123);
    layer = data_0.layer;
    if (data_0.hidden) {
      layer.visible = false;
      continue;
    }
    switch ($getResolvedDirection(data_0.direction_0).ordinal) {
      case 0:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopHeight(layer, top_0, this$static.unit, data_0.size_0, this$static.unit);
        top_0 += data_0.size_0;
        break;
      case 2:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setBottomHeight(layer, bottom, this$static.unit, data_0.size_0, this$static.unit);
        bottom += data_0.size_0;
        break;
      case 3:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setLeftWidth(layer, left, this$static.unit, data_0.size_0, this$static.unit);
        left += data_0.size_0;
        break;
      case 1:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setRightWidth(layer, right, this$static.unit, data_0.size_0, this$static.unit);
        right += data_0.size_0;
        break;
      case 4:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
    }
    layer.visible = true;
  }
}

function $getResolvedDirection(direction){
  if (direction == ($clinit_DockLayoutPanel$Direction() , LINE_START)) {
    return $clinit_LocaleInfo() , WEST;
  }
   else if (direction == LINE_END) {
    return $clinit_LocaleInfo() , EAST;
  }
  return direction;
}

function $insert(this$static, widget, direction, size_0){
  var children, data_0, layer;
  $removeFromParent(widget);
  children = this$static.children;
  $insert_1(children, widget, children.size_0);
  direction == ($clinit_DockLayoutPanel$Direction() , CENTER_0) && (this$static.center = widget);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  data_0 = new DockLayoutPanel$LayoutData(direction, size_0, layer);
  widget.layoutData = data_0;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function DockLayoutPanel(unit){
  ComplexPanel.call(this);
  this.unit = unit;
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new DockLayoutPanel$DockAnimateCommand(this, this.layout);
}

defineClass(408, 91, $intern_41, DockLayoutPanel);
_.onAttach = function onAttach_2(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
}
;
_.onResize_0 = function onResize_2(){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    instanceOf(child, 63) && dynamicCast(child, 63).onResize_0();
  }
}
;
_.remove = function remove_4(w){
  var data_0, removed;
  removed = $remove(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    data_0 = dynamicCast(w.layoutData, 123);
    $removeChild_0(this.layout, data_0.layer);
  }
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel', 408);
function $clinit_DockLayoutPanel$Direction(){
  $clinit_DockLayoutPanel$Direction = emptyMethod;
  NORTH = new DockLayoutPanel$Direction('NORTH', 0);
  EAST = new DockLayoutPanel$Direction('EAST', 1);
  SOUTH = new DockLayoutPanel$Direction('SOUTH', 2);
  WEST = new DockLayoutPanel$Direction('WEST', 3);
  CENTER_0 = new DockLayoutPanel$Direction('CENTER', 4);
  LINE_START = new DockLayoutPanel$Direction('LINE_START', 5);
  LINE_END = new DockLayoutPanel$Direction('LINE_END', 6);
}

function DockLayoutPanel$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_DockLayoutPanel$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit, 1), $intern_4, 67, 0, [NORTH, EAST, SOUTH, WEST, CENTER_0, LINE_START, LINE_END]);
}

defineClass(67, 4, {67:1, 3:1, 5:1, 4:1}, DockLayoutPanel$Direction);
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'DockLayoutPanel/Direction', 67, Ljava_lang_Enum_2_classLit, values_13);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(174, 1, {}, LayoutCommand);
_.doBeforeLayout = function doBeforeLayout(){
}
;
_.execute_1 = function execute_10(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  this.doBeforeLayout();
  $layout(this.layout, this.duration, new LayoutCommand$1);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 174);
function DockLayoutPanel$DockAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  LayoutCommand.call(this, layout);
}

defineClass(409, 174, {}, DockLayoutPanel$DockAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doLayout(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$DockAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/DockAnimateCommand', 409);
function DockLayoutPanel$LayoutData(direction, size_0, layer){
  this.direction_0 = direction;
  this.size_0 = size_0;
  this.layer = layer;
}

defineClass(123, 1, {123:1}, DockLayoutPanel$LayoutData);
_.hidden = false;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/LayoutData', 123);
function $addCells(tbody, row, num){
  var i, rowElem, tdElement;
  rowElem = tbody.rows[row];
  for (i = 0; i < num; i++) {
    tdElement = $doc.createElement('td');
    rowElem.appendChild(tdElement);
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = $getDOMRowCount_0(this$static.bodyElem);
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, ($clinit_DOM() , td), clearInnerHTML);
  return td;
}

function $getDOMCellCount(tableBody, row){
  var rowElement;
  rowElement = tableBody.rows[row];
  return rowElement.cells.length;
}

function $getDOMRowCount(this$static){
  return ($clinit_DOM() , this$static.bodyElem).rows.length;
}

function $getDOMRowCount_0(tbody){
  return ($clinit_DOM() , tbody).rows.length;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = ($clinit_DOM() , $getFirstChildElement(td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_0(this$static.widgetMap, maybeChild), 11));
  if (widget) {
    $remove_2(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
    return false;
  }
}

function $prepareColumn(column){
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column);
  }
}

function $remove_2(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = ($checkRowBounds(this$static, row) , $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row));
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setRowFormatter(this$static, rowFormatter){
  this$static.rowFormatter = rowFormatter;
}

function $setText_0(this$static, row, column, text_0){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, text_0 == null);
  text_0 != null && $setInnerText(td, text_0);
}

function $setWidget_2(this$static, row, column, widget){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, true);
  $removeFromParent(widget);
  $put(this$static.widgetMap, widget);
  $clinit_DOM();
  $appendChild(td, resolve(widget.element));
  $setParent(widget, this$static);
}

defineClass(321, 530, $intern_40);
_.iterator = function iterator_3(){
  return new HTMLTable$1(this);
}
;
_.remove = function remove_5(widget){
  return $remove_2(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 321);
function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this$static, row) , $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row));
  required = column + 1 - cellCount;
  required > 0 && $addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot create a row with a negative index: ' + row);
  }
  rowCount = $getDOMRowCount_0(this$static.bodyElem);
  for (i = rowCount; i <= row; i++) {
    i != $getDOMRowCount_0(this$static.bodyElem) && $checkRowBounds(this$static, i);
    tr = ($clinit_DOM() , $doc.createElement('tr'));
    insertChild(this$static.bodyElem, tr, i);
  }
}

function $removeAllRows(this$static){
  var i, numRows;
  numRows = $getDOMRowCount_0(this$static.bodyElem);
  for (i = 0; i < numRows; i++) {
    $removeRow(this$static, 0);
  }
}

function FlexTable(){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = ($clinit_DOM() , $doc.createElement('table'));
  this.bodyElem = $doc.createElement('tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
  $setCellFormatter(this, new FlexTable$FlexCellFormatter(this));
  $setRowFormatter(this, new HTMLTable$RowFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

defineClass(140, 321, $intern_40, FlexTable);
var Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable', 140);
function $addStyleName_0(this$static){
  var td;
  $prepareCell(this$static.this$01, 0, 2);
  td = $getCellElement(this$static.this$01.bodyElem, 0, 2);
  setStyleName(td, 'bookListNumericColumn', true);
}

function $getCellElement(tbody, row, col){
  return tbody.rows[row].cells[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement(this$static.this$01.bodyElem, row, column);
}

function $setVisible_0(this$static, row, column, visible){
  var e;
  e = ($prepareCell(this$static.this$01, row, column) , $clinit_DOM() , $getCellElement(this$static.this$01.bodyElem, row, column));
  setVisible(e, visible);
}

defineClass(322, 1, {});
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 322);
function $setColSpan(this$static, row){
  ($prepareCell(this$static.this$01, row, 0) , $clinit_DOM() , $getCellElement(this$static.this$01.bodyElem, row, 0))['colSpan'] = 2;
}

function FlexTable$FlexCellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(323, 322, {}, FlexTable$FlexCellFormatter);
var Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable/FlexCellFormatter', 323);
function $add_3(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(108, 91, $intern_40, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 108);
function $addAndReplaceElement(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children);
  while (children.index_0 < children.this$01.size_0) {
    next = $next_1(children);
    if (isOrHasChildImpl(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_5(children);
    }
  }
  $add_7(this$static.children, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(180, 91, $intern_40, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 180);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_3(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_3(this$static.widgetList, this$static.nextIndex), 11);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(326, 1, $intern_42, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_6(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_3(this.widgetList, this.lastIndex_0), 11);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 326);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $doc.createElement('colgroup'));
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($doc.createElement('col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $doc.createElement('col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function $setWidth_1(this$static, column, width_0){
  ($prepareColumn(column) , $prepareColumnGroup(this$static) , $resizeColumnGroup(this$static, column + 1, true) , $getChild(this$static.columnGroup, column))['width'] = width_0;
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(324, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 324);
function $addStyleName_1(this$static){
  setStyleName(($prepareRow(this$static.this$01, 0) , $clinit_DOM() , $getRow(this$static.this$01.bodyElem, 0)), 'bookListHeader', true);
}

function $getRow(tbody, row){
  return $getRow_0(($clinit_DOM() , tbody), row);
}

function $getRow_0(tbody, row){
  return $clinit_DOM() , tbody.rows[row];
}

function HTMLTable$RowFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(325, 1, {}, HTMLTable$RowFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/RowFormatter', 325);
function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = emptyMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
}

var ALIGN_CONTENT_START;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_LOCALE_END = ALIGN_RIGHT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

defineClass(411, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 411);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineClass(124, 411, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 124);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(144, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 144);
function $add_4(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(85, 182, $intern_40, HorizontalPanel);
_.remove = function remove_7(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 85);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(281, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 281);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(282, 1, {}, Image$State$1);
_.execute_1 = function execute_11(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString($getImageElement(this.val$image2), '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 282);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function $setUrl_0(image, url_0){
  !!image.state && $setPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}

function $setUrl_1(image, url_0, width_0, height){
  !!image.state && $setPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
  $setWidth_0(image.element, width_0);
  $setHeight_0(image.element, height);
}

function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents_1(($clinit_DOM() , image.element), 32768);
  image.eventsToSink == -1?sinkEvents_0(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

function Image$UnclippedState_0(image, url_0, width_0, height){
  Image$UnclippedState.call(this, image);
  !!image.state && $setPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
  $setWidth_0(image.element, width_0);
  $setHeight_0(image.element, height);
}

defineClass(122, 281, {}, Image$UnclippedState, Image$UnclippedState_0);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 122);
function $setAutoHorizontalAlignment(this$static, autoAlignment){
  this$static.autoHorizontalAlignment = autoAlignment;
  $updateHorizontalAlignment(this$static);
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  !this$static.autoHorizontalAlignment?(align_0 = null):this$static.autoHorizontalAlignment?(align_0 = this$static.autoHorizontalAlignment):(align_0 = this$static.autoHorizontalAlignment == ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START)?startOf(this$static.directionalTextHelper.textDir):endOf(this$static.directionalTextHelper.textDir));
  if (align_0 != this$static.horzAlign) {
    this$static.horzAlign = align_0;
    ($clinit_DOM() , this$static.element).style['textAlign'] = !this$static.horzAlign?'':this$static.horzAlign.textAlignString;
  }
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(183, 11, $intern_7);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 183);
function $setText_1(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0);
  $updateHorizontalAlignment(this$static);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
}

defineClass(87, 183, $intern_7, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 87);
function LayoutCommand$1(){
}

defineClass(305, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 305);
function $add_5(this$static, widget){
  $insert_0(this$static, widget, this$static.children.size_0);
}

function $insert_0(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent(widget);
  $insert_1(this$static.children, widget, beforeIndex);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    instanceOf(child, 63) && dynamicCast(child, 63).onResize_0();
  }
}

defineClass(229, 91, $intern_41);
_.onAttach = function onAttach_3(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_2(){
  $onDetach(this);
}
;
_.onResize_0 = function onResize_3(){
  $onResize(this);
}
;
_.remove = function remove_8(w){
  var removed;
  removed = $remove(this, w);
  removed && $removeChild_0(this.layout, dynamicCast(w.layoutData, 95));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 229);
function $getSelectElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  $removeAttribute(option, 'bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function $setSelectedIndex(this$static){
  ($clinit_DOM() , this$static.element).selectedIndex = -1;
}

function ListBox(){
  FocusWidget.call(this, $doc.createElement('select'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');
}

defineClass(299, 139, $intern_7, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 299);
function $setText_2(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(315, 139, $intern_7);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 315);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, elem, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
}

defineClass(176, 315, $intern_7);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 176);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  TextBoxBase.call(this, element);
  $setClassName(($clinit_DOM() , this.element), styleName);
}

defineClass(65, 176, $intern_7, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 65);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(177, 65, $intern_7, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 177);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_1(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_0(($clinit_RootPanel() , get_2()), singleton_0);
  }
  return singleton_0;
}

defineClass(233, 229, $intern_41, RootLayoutPanel);
_.onLoad = function onLoad_3(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 233);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(234, 1, $intern_10, RootLayoutPanel$1);
_.onResize = function onResize_4(event_0){
  $onResize(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 234);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_10(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map_0.clear_0();
    rootPanels.clear_0();
  }
}

function get_2(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast(rootPanels.get_2(null), 120);
  if (rp) {
    return rp;
  }
  if (rootPanels.size_1() == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  rp = new RootPanel$DefaultRootPanel;
  rootPanels.put(null, rp);
  $add_12(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(120, 247, $intern_43);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 120);
function RootPanel$1(){
}

defineClass(249, 1, {}, RootPanel$1);
_.execute_2 = function execute_12(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 249);
function RootPanel$2(){
}

defineClass(250, 1, $intern_9, RootPanel$2);
_.onClose = function onClose_2(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 250);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(248, 120, $intern_43, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 248);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:($getSubPixelScrollWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ($getSubPixelScrollWidth(scrollable) | 0):0;
}

function $isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function ScrollImpl(){
}

defineClass(151, 1, {}, ScrollImpl);
var impl_1;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 151);
function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetectorNo) , $clinit_Boolean() , FALSE)) , isSupported.value_0?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel(){
  SimplePanel.call(this);
  this.scrollableElem = ($clinit_DOM() , this.element);
  this.containerElem = $doc.createElement('div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  $setPropertyImpl(this.scrollableElem.style, 'zoom', '1');
  $setPropertyImpl(this.containerElem.style, 'zoom', '1');
  $setTouchScrollingDisabled(this);
  !impl_1 && (impl_1 = new ScrollImpl);
}

defineClass(178, 101, $intern_41, ScrollPanel);
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_4(){
  $onAttach(this);
  setEventListener(($clinit_DOM() , this.scrollableElem), this);
}
;
_.onDetach = function onDetach_3(){
  setEventListener(($clinit_DOM() , this.scrollableElem), null);
  $onDetach(this);
}
;
_.onResize_0 = function onResize_5(){
  var child;
  child = this.widget;
  !!child && instanceOf(child, 63) && dynamicCast(child, 63).onResize_0();
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 178);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(215, 1, $intern_42, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_9(){
  !!this.returned && $remove_1(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 215);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextArea');
}

defineClass(327, 176, $intern_7, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 327);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_1 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_4, 59, 0, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(59, 4, $intern_44);
var CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 59, Ljava_lang_Enum_2_classLit, values_14);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(316, 59, $intern_44, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 316, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(317, 59, $intern_44, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 317, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(318, 59, $intern_44, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 318, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(319, 59, $intern_44, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 319, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_6(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(($clinit_DOM() , this.table), 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(145, 182, $intern_40, VerticalPanel);
_.remove = function remove_10(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 145);
function $add_7(this$static, w){
  $insert_1(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_1(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 11, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 11, 4, 0, 1);
}

defineClass(293, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 293);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_5(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(94, 1, $intern_42, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_0 = function remove_11(){
  $remove_5(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 94);
function copyWidgetArray(widgets){
  var clone, i;
  clone = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 11, widgets.length, 0, 1);
  for (i = 0; i < widgets.length; i++) {
    setCheck(clone, i, widgets[i]);
  }
  return clone;
}

function createWidgetIterator(container, contained){
  return new WidgetIterators$1(contained, container);
}

function $gotoNextIndex(this$static){
  ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained1.length) {
    if (this$static.val$contained1[this$static.index_0]) {
      return;
    }
    ++this$static.index_0;
  }
}

function $next_2(this$static){
  var w;
  if (this$static.index_0 >= this$static.val$contained1.length) {
    throw new NoSuchElementException;
  }
  this$static.last = this$static.index_0;
  w = this$static.val$contained1[this$static.index_0];
  $gotoNextIndex(this$static);
  return w;
}

function WidgetIterators$1(val$contained, val$container){
  this.val$contained1 = val$contained;
  this.val$container2 = val$container;
  this.widgets = this.val$contained1;
  $gotoNextIndex(this);
}

defineClass(447, 1, $intern_42, WidgetIterators$1);
_.hasNext = function hasNext_2(){
  return this.index_0 < this.val$contained1.length;
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove_0 = function remove_12(){
  if (this.last < 0) {
    throw new IllegalStateException;
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  $remove_0(this.val$container2, this.val$contained1[this.last]);
  this.last = -1;
}
;
_.index_0 = -1;
_.last = -1;
_.widgetsWasCopied = false;
var Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetIterators/1', 447);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie10', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(128, 9, $intern_13);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 128);
defineClass(44, 128, $intern_13);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 44);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9):null);
}

defineClass(202, 44, $intern_13, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 202);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $traverse_0(this$static, visitor, count){
  var i, paramCount, type_0;
  if (this$static.simpleType) {
    visitor.endVisitType(this$static.simpleType);
    return 0;
  }
  type_0 = this$static.paramTypes[count];
  paramCount = this$static.paramCounts[count];
  ++count;
  for (i = 0; i < paramCount; i++) {
    count = $traverse_0(this$static, visitor, count);
  }
  visitor.endVisitType(type_0);
  return count;
}

function ClientPropertyContext(type_0){
  this.simpleType = type_0;
  this.paramTypes = null;
  this.paramCounts = null;
}

function ClientPropertyContext_0(types, paramCounts){
  this.simpleType = null;
  this.paramTypes = types;
  this.paramCounts = paramCounts;
}

defineClass(26, 1, {}, ClientPropertyContext, ClientPropertyContext_0);
var Lcom_google_web_bindery_autobean_gwt_client_impl_ClientPropertyContext_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'ClientPropertyContext', 26);
function beanSetter(bean, key_0){
  return function(value_0){
    bean.setProperty(key_0, value_0);
  }
  ;
}

function $add_8(this$static, clazz, constructors){
  this$static[$ensureNamesAreInitialized(clazz) , clazz.typeName] = constructors;
}

function $create_2(this$static, clazz, factory){
  var arr;
  arr = this$static[$ensureNamesAreInitialized(clazz) , clazz.typeName];
  if (!!arr && !!arr[0]) {
    return arr[0](factory, null);
  }
  return null;
}

function $create_3(this$static, clazz, factory, delegate){
  var arr;
  arr = this$static[$ensureNamesAreInitialized(clazz) , clazz.typeName];
  if (arr) {
    return arr[1](factory, delegate);
  }
  return null;
}

function $assign(this$static, parent_0, index_0){
  $isString(this$static)?(parent_0[index_0] = this$static.__s , undefined):(parent_0[index_0] = this$static , undefined);
}

function $getPayload(this$static){
  var sb;
  if ($isString(this$static)) {
    return escapeValue(this$static.__s);
  }
  if (stringifyFastSupported()) {
    return $stringifyFast(this$static);
  }
  return sb = new StringBuilder , $stringifySlow(this$static, sb) , sb.string;
}

function $getPropertyKeys(this$static){
  var toReturn;
  toReturn = new ArrayList;
  $getPropertyKeys0(this$static, toReturn);
  return $clinit_Collections() , new Collections$UnmodifiableRandomAccessList(toReturn);
}

function $getPropertyKeys0(this$static, list){
  for (key in this$static) {
    this$static.hasOwnProperty(key) && list.add_1(key);
  }
}

function $getRaw(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getRaw_0(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getReified(this$static, key_0){
  return this$static.__reified && this$static.__reified[':' + key_0];
}

function $isIndexed(this$static){
  return Object.prototype.toString.call(this$static) == '[object Array]';
}

function $isNumber(this$static){
  return Object.prototype.toString.call(this$static) == '[object Number]';
}

function $isReified(this$static, key_0){
  return !!(this$static.__reified && this$static.__reified.hasOwnProperty(':' + key_0));
}

function $isString(this$static){
  return this$static && this$static.__s != null;
}

function $setReified(this$static, key_0, object){
  (this$static.__reified || (this$static.__reified = function(){
  }
  ))[':' + key_0] = object;
}

function $stringifyFast(this$static){
  return $wnd.JSON.stringify(this$static, function(key_0, value_0){
    if (key_0 == '$H') {
      return;
    }
    return value_0;
  }
  );
}

function $stringifySlow(this$static, sb){
  var i, j, key_0, key$iterator, needsComma, value_0;
  if (this$static == ($clinit_Splittable() , NULL)) {
    sb.string += 'null';
    return;
  }
  if (Object.prototype.toString.call(this$static) == '[object Boolean]') {
    sb.string += this$static == true;
    return;
  }
  if ($isNumber(this$static)) {
    $append_0(sb, Number(this$static));
    return;
  }
  if ($isString(this$static)) {
    $append_2(sb, escapeValue(this$static.__s));
    return;
  }
  if ($isIndexed(this$static)) {
    sb.string += '[';
    for (i = 0 , j = this$static.length; i < j; i++) {
      i > 0 && (sb.string += ',' , sb);
      $stringifySlow($getRaw(this$static, i), sb);
    }
    sb.string += ']';
    return;
  }
  sb.string += '{';
  needsComma = false;
  for (key$iterator = new Collections$UnmodifiableCollectionIterator($getPropertyKeys(this$static).coll.iterator()); key$iterator.it.hasNext();) {
    key_0 = dynamicCastToString(key$iterator.it.next_0());
    needsComma?(sb.string += ',' , sb):(needsComma = true);
    value_0 = $getRaw_0(this$static, key_0);
    if (!(Object.prototype.toString.call(value_0) == '[object Function]')) {
      if ($equals('$H', key_0)) {
        continue;
      }
      $append_2(sb, escapeValue(key_0));
      sb.string += ':';
      $stringifySlow(value_0, sb);
    }
  }
  sb.string += '}';
}

function asNumber__D__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.asNumber():Number(this$static);
}

function asString__Ljava_lang_String___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.asString():this$static.__s;
}

function assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(this$static, parent_0, propertyName){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.assign_0(parent_0, propertyName):($isString(this$static)?(parent_0[propertyName] = this$static.__s , undefined):(parent_0[propertyName] = this$static , undefined) , undefined);
}

function create0_0(object){
  return Number(object);
}

function create0_1(object){
  return Boolean(object);
}

function getPayload__Ljava_lang_String___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getPayload():$getPayload(this$static);
}

function getPropertyKeys__Ljava_util_List___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getPropertyKeys():$getPropertyKeys(this$static);
}

function getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getReified(key_0):$getReified(this$static, key_0);
}

function getSplittable__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getSplittable():this$static;
}

function get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static, index_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.get_0(index_0):$getRaw(this$static, index_0);
}

function get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.get_1(key_0):$getRaw_0(this$static, key_0);
}

function isNull_Ljava_lang_String__Z__devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isNull_0(key_0):this$static[key_0] == null;
}

function isNumber__Z__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isNumber():$isNumber(this$static);
}

function isReified_Ljava_lang_String__Z__devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isReified(key_0):$isReified(this$static, key_0);
}

function isUnwrappedString(obj){
  return Object.prototype.toString.call(obj) == '[object String]';
}

function removeReified_Ljava_lang_String__V__devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.removeReified(key_0):(this$static.__reified && delete this$static.__reified[':' + key_0] , undefined);
}

function setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static, key_0, object){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.setReified(key_0, object):$setReified(this$static, key_0, object);
}

function setSize_I_V__devirtual$(this$static, i){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.setSize(i):(this$static.length = i , undefined);
}

function size__I__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.size_1():this$static.length;
}

function stringifyFastSupported(){
  if (stringifyFastTested) {
    return stringifyFastResult;
  }
  stringifyFastTested = true;
  return stringifyFastResult = stringifyFastSupported0();
}

function stringifyFastSupported0(){
  return $wnd.JSON && $wnd.JSON.stringify && $wnd.JSON.stringify({b:function(){
  }
  }) == '{}';
}

var stringifyFastResult = false, stringifyFastTested = false;
function $clinit_NullSplittable(){
  $clinit_NullSplittable = emptyMethod;
  INSTANCE_2 = new NullSplittable;
}

function $assign_0(parent_0, index_0){
  parent_0[index_0] = null;
}

function $assign_1(parent_0, propertyName){
  delete parent_0[propertyName];
}

function NullSplittable(){
}

defineClass(212, 1, {153:1}, NullSplittable);
_.asBoolean = function asBoolean(){
  return false;
}
;
_.asNumber = function asNumber(){
  return 0;
}
;
_.asString = function asString_1(){
  return null;
}
;
_.assign = function assign(parent_0, index_0){
  $assign_0(parent_0, index_0);
}
;
_.assign_0 = function assign_0(parent_0, propertyName){
  $assign_1(parent_0, propertyName);
}
;
_.get_0 = function get_3(index_0){
  throw new NullPointerException;
}
;
_.get_1 = function get_4(key_0){
  throw new NullPointerException;
}
;
_.getPayload = function getPayload(){
  return 'null';
}
;
_.getPropertyKeys = function getPropertyKeys(){
  throw new NullPointerException;
}
;
_.getReified = function getReified(key_0){
  throw new NullPointerException;
}
;
_.isIndexed = function isIndexed(){
  return false;
}
;
_.isNull = function isNull(index_0){
  throw new NullPointerException;
}
;
_.isNull_0 = function isNull_0(key_0){
  throw new NullPointerException;
}
;
_.isNumber = function isNumber(){
  return false;
}
;
_.isReified = function isReified(key_0){
  throw new NullPointerException;
}
;
_.removeReified = function removeReified(key_0){
  throw new NullPointerException;
}
;
_.setReified = function setReified(key_0, object){
  throw new NullPointerException;
}
;
_.setSize = function setSize(i){
  throw new NullPointerException;
}
;
_.size_1 = function size_1(){
  throw new NullPointerException;
}
;
var INSTANCE_2;
var Lcom_google_web_bindery_autobean_gwt_client_impl_NullSplittable_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'NullSplittable', 212);
var Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'AutoBean');
function decode(factory, clazz, payload){
  var data_0;
  data_0 = split_1(payload);
  return doDecode(new AutoBeanCodexImpl$EncodeState(factory, null), clazz, data_0);
}

function encode(bean){
  var sb, state;
  if (!bean) {
    return $clinit_Splittable() , NULL;
  }
  sb = new StringBuilder;
  state = new AutoBeanCodexImpl$EncodeState(bean.getFactory(), sb);
  doEncode(state, bean);
  return split_1(sb.string);
}

function getAutoBean(delegate){
  return !delegate?null:dynamicCast(get_0(delegate, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25);
}

defineClass(552, 1, {});
_.endVisit = function endVisit(bean, ctx){
}
;
_.visit = function visit(bean, ctx){
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty(propertyName, value_0, ctx){
  return true;
}
;
_.visitValueProperty = function visitValueProperty(propertyName, value_0, ctx){
  return true;
}
;
var Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared', 'AutoBeanVisitor', 552);
defineClass(551, 1, {});
_.endVisitType = function endVisitType(type_0){
}
;
var Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor$ParameterizationVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared', 'AutoBeanVisitor/ParameterizationVisitor', 551);
function $clinit_Splittable(){
  $clinit_Splittable = emptyMethod;
  NULL = ($clinit_NullSplittable() , INSTANCE_2);
}

var NULL;
var Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'Splittable');
function $clinit_ValueCodex(){
  $clinit_ValueCodex = emptyMethod;
  var t, t$array, t$index, t$max, temp;
  temp = new HashMap;
  for (t$array = values_15() , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    temp.put(t.type_0, t);
    !!t.primitiveType && temp.put(t.primitiveType, t);
  }
  $clinit_Collections();
  new Collections$UnmodifiableSet(new AbstractMap$1(temp));
  TYPES_BY_CLASS = new Collections$UnmodifiableMap(temp);
}

function canDecode(clazz){
  $clinit_ValueCodex();
  if (findType(clazz)) {
    return true;
  }
  return false;
}

function decode_0(clazz, split_0){
  $clinit_ValueCodex();
  if (!split_0 || split_0 == ($clinit_Splittable() , NULL)) {
    return null;
  }
  return getTypeOrDie(clazz).decode(clazz, split_0);
}

function encode_0(clazz, obj){
  $clinit_ValueCodex();
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  return getTypeOrDie(clazz).encode(obj);
}

function findType(clazz){
  if ((clazz.modifiers & 8) != 0) {
    return $clinit_ValueCodex$Type() , ENUM;
  }
  return dynamicCast($get_4(TYPES_BY_CLASS, clazz), 23);
}

function getTypeOrDie(clazz){
  var toReturn;
  toReturn = findType(clazz);
  if (!toReturn) {
    throw new UnsupportedOperationException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
  }
  return toReturn;
}

function getUninitializedFieldValue(clazz){
  $clinit_ValueCodex();
  var type_0;
  type_0 = getTypeOrDie(clazz);
  if (clazz == type_0.primitiveType) {
    return type_0.defaultValue;
  }
  return null;
}

var TYPES_BY_CLASS;
function $clinit_ValueCodex$Type(){
  $clinit_ValueCodex$Type = emptyMethod;
  BIG_DECIMAL = new ValueCodex$Type$1(Ljava_math_BigDecimal_2_classLit);
  BIG_INTEGER = new ValueCodex$Type$2(Ljava_math_BigInteger_2_classLit);
  BOOLEAN = new ValueCodex$Type$3(Ljava_lang_Boolean_2_classLit, Z_classLit, ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  BYTE = new ValueCodex$Type$4(Ljava_lang_Byte_2_classLit, B_classLit, valueOf_1(0));
  CHARACTER = new ValueCodex$Type$5(Ljava_lang_Character_2_classLit, C_classLit, valueOf_2(0));
  DATE = new ValueCodex$Type$6(Ljava_util_Date_2_classLit);
  DOUBLE = new ValueCodex$Type$7(Ljava_lang_Double_2_classLit, D_classLit, new Double(0));
  ENUM = new ValueCodex$Type$8(Ljava_lang_Enum_2_classLit);
  FLOAT = new ValueCodex$Type$9(Ljava_lang_Float_2_classLit, F_classLit, new Float(0));
  INTEGER = new ValueCodex$Type$10(Ljava_lang_Integer_2_classLit, I_classLit, valueOf_3(0));
  LONG = new ValueCodex$Type$11(Ljava_lang_Long_2_classLit, J_classLit, valueOf_4({l:0, m:0, h:0}));
  SHORT = new ValueCodex$Type$12(Ljava_lang_Short_2_classLit, S_classLit, valueOf_5(0));
  STRING = new ValueCodex$Type$13(Ljava_lang_String_2_classLit);
  SPLITTABLE = new ValueCodex$Type$14(Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit);
  VOID = new ValueCodex$Type$15(Ljava_lang_Void_2_classLit, V_classLit);
}

function ValueCodex$Type(enum$name, enum$ordinal, objectType){
  ValueCodex$Type_0.call(this, enum$name, enum$ordinal, objectType, null, null);
}

function ValueCodex$Type_0(enum$name, enum$ordinal, objectType, primitiveType, defaultValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.type_0 = objectType;
  this.primitiveType = primitiveType;
  this.defaultValue = defaultValue;
}

function values_15(){
  $clinit_ValueCodex$Type();
  return initValues(getClassLiteralForArray(Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, 1), $intern_4, 23, 0, [BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE, ENUM, FLOAT, INTEGER, LONG, SHORT, STRING, SPLITTABLE, VOID]);
}

defineClass(23, 4, $intern_45);
var BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE, ENUM, FLOAT, INTEGER, LONG, SHORT, SPLITTABLE, STRING, VOID;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type', 23, Ljava_lang_Enum_2_classLit, values_15);
function ValueCodex$Type$1($anonymous0){
  ValueCodex$Type.call(this, 'BIG_DECIMAL', 0, $anonymous0);
}

defineClass(482, 23, $intern_45, ValueCodex$Type$1);
_.decode = function decode_1(clazz, value_0){
  return new BigDecimal_0(asString__Ljava_lang_String___devirtual$(value_0));
}
;
_.encode = function encode_1(value_0){
  return {__s:$toString_1(dynamicCast(value_0, 50))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$1_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/1', 482, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$10($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'INTEGER', 9, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(491, 23, $intern_45, ValueCodex$Type$10);
_.decode = function decode_2(clazz, value_0){
  return valueOf_3(round_int(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_2(value_0){
  return create0_0(dynamicCast(value_0, 49).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$10_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/10', 491, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function $decode(value_0){
  if (isNumber__Z__devirtual$(value_0)) {
    return valueOf_4(fromDouble(asNumber__D__devirtual$(value_0)));
  }
  return valueOf_4(__parseAndValidateLong(asString__Ljava_lang_String___devirtual$(value_0)));
}

function ValueCodex$Type$11($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'LONG', 10, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(492, 23, $intern_45, ValueCodex$Type$11);
_.decode = function decode_3(clazz, value_0){
  return $decode(value_0);
}
;
_.encode = function encode_3(value_0){
  return {__s:'' + dynamicCast(value_0, 71)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$11_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/11', 492, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$12($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'SHORT', 11, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(493, 23, $intern_45, ValueCodex$Type$12);
_.decode = function decode_4(clazz, value_0){
  return valueOf_5(round_short(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_4(value_0){
  return create0_0(dynamicCast(value_0, 72).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$12_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/12', 493, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$13($anonymous0){
  ValueCodex$Type.call(this, 'STRING', 12, $anonymous0);
}

defineClass(494, 23, $intern_45, ValueCodex$Type$13);
_.decode = function decode_5(clazz, value_0){
  return asString__Ljava_lang_String___devirtual$(value_0);
}
;
_.encode = function encode_5(value_0){
  return {__s:dynamicCastToString(value_0)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$13_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/13', 494, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$14($anonymous0){
  ValueCodex$Type.call(this, 'SPLITTABLE', 13, $anonymous0);
}

defineClass(495, 23, $intern_45, ValueCodex$Type$14);
_.decode = function decode_6(clazz, value_0){
  return value_0;
}
;
_.encode = function encode_6(value_0){
  return dynamicCastAllowJso(value_0, 153);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$14_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/14', 495, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$15($anonymous0, $anonymous1){
  ValueCodex$Type_0.call(this, 'VOID', 14, $anonymous0, $anonymous1, null);
}

defineClass(496, 23, $intern_45, ValueCodex$Type$15);
_.decode = function decode_7(clazz, value_0){
  return null;
}
;
_.encode = function encode_7(value_0){
  return null;
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$15_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/15', 496, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$2($anonymous0){
  ValueCodex$Type.call(this, 'BIG_INTEGER', 1, $anonymous0);
}

defineClass(483, 23, $intern_45, ValueCodex$Type$2);
_.decode = function decode_8(clazz, value_0){
  return new BigInteger_4(asString__Ljava_lang_String___devirtual$(value_0));
}
;
_.encode = function encode_8(value_0){
  return {__s:toDecimalScaledString_0(dynamicCast(value_0, 14), 0)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$2_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/2', 483, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$3($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'BOOLEAN', 2, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(484, 23, $intern_45, ValueCodex$Type$3);
_.decode = function decode_9(clazz, value_0){
  return $clinit_Boolean() , (hasJavaObjectVirtualDispatch(value_0)?value_0.asBoolean():value_0 == true)?TRUE:FALSE;
}
;
_.encode = function encode_9(value_0){
  return create0_1(dynamicCast(value_0, 58).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$3_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/3', 484, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$4($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'BYTE', 3, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(485, 23, $intern_45, ValueCodex$Type$4);
_.decode = function decode_10(clazz, value_0){
  return valueOf_1(round_byte(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_10(value_0){
  return create0_0(dynamicCast(value_0, 79).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$4_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/4', 485, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$5($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'CHARACTER', 4, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(486, 23, $intern_45, ValueCodex$Type$5);
_.decode = function decode_11(clazz, value_0){
  return valueOf_2(asString__Ljava_lang_String___devirtual$(value_0).charCodeAt(0));
}
;
_.encode = function encode_11(value_0){
  return {__s:'' + dynamicCast(value_0, 70)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$5_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/5', 486, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function $decode_0(value_0){
  if (isNumber__Z__devirtual$(value_0)) {
    return new Date_0(fromDouble(asNumber__D__devirtual$(value_0)));
  }
  return tryParseDate(asString__Ljava_lang_String___devirtual$(value_0));
}

function ValueCodex$Type$6($anonymous0){
  ValueCodex$Type.call(this, 'DATE', 5, $anonymous0);
}

defineClass(487, 23, $intern_45, ValueCodex$Type$6);
_.decode = function decode_12(clazz, value_0){
  return $decode_0(value_0);
}
;
_.encode = function encode_12(value_0){
  return {__s:'' + toString_15(fromDouble(dynamicCast(value_0, 46).jsdate.getTime()))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$6_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/6', 487, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$7($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'DOUBLE', 6, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(488, 23, $intern_45, ValueCodex$Type$7);
_.decode = function decode_13(clazz, value_0){
  return new Double(asNumber__D__devirtual$(value_0));
}
;
_.encode = function encode_13(value_0){
  return create0_0(dynamicCast(value_0, 80).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$7_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/7', 488, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$8($anonymous0){
  ValueCodex$Type.call(this, 'ENUM', 7, $anonymous0);
}

defineClass(489, 23, $intern_45, ValueCodex$Type$8);
_.decode = function decode_14(clazz, value_0){
  return dynamicCast($getEnumConstants(clazz)[round_int(asNumber__D__devirtual$(value_0))], 4);
}
;
_.encode = function encode_14(value_0){
  return create0_0(dynamicCast(value_0, 4).ordinal);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$8_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/8', 489, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$9($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'FLOAT', 8, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(490, 23, $intern_45, ValueCodex$Type$9);
_.decode = function decode_15(clazz, value_0){
  return new Float(asNumber__D__devirtual$(value_0));
}
;
_.encode = function encode_15(value_0){
  return create0_0(dynamicCast(value_0, 81).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$9_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/9', 490, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function AbstractAutoBean$OneShotContext(){
  this.seen = new HashSet;
}

defineClass(188, 1, {}, AbstractAutoBean$OneShotContext);
var Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean$OneShotContext_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AbstractAutoBean/OneShotContext', 188);
function $clinit_AutoBeanCodexImpl(){
  $clinit_AutoBeanCodexImpl = emptyMethod;
  coderFor = new HashMap;
  coders = new HashMap;
}

function doCoderFor(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  var key_0, toReturn;
  key_0 = $getName_0(bean.getType()) + ':' + propertyName;
  toReturn = dynamicCast(coderFor.get_2(key_0), 48);
  if (!toReturn) {
    $traverse(bean, new AutoBeanCodexImpl$PropertyCoderCreator, new AbstractAutoBean$OneShotContext);
    toReturn = dynamicCast(coderFor.get_2(key_0), 48);
    if (!toReturn) {
      throw new IllegalArgumentException_0(propertyName);
    }
  }
  return toReturn;
}

function doDecode(state, clazz, data_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(data_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit) , Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName)), 25);
  if (toReturn) {
    return toReturn;
  }
  toReturn = $create(state.factory, clazz);
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit) , Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName), toReturn);
  if (!toReturn) {
    throw new IllegalArgumentException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
  }
  $setData(dynamicCast(toReturn, 32), data_0);
  return toReturn;
}

function doEncode(state, bean){
  $clinit_AutoBeanCodexImpl();
  var e, ex;
  e = new AutoBeanCodexImpl$PropertyGetter(state);
  try {
    bean.accept(e);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 149)) {
      ex = $e0;
      throw unwrap(dynamicCast(ex.cause, 10));
    }
     else 
      throw unwrap($e0);
  }
}

function enumCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), 48);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$EnumCoder(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

function key_1(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  return $getName_0(bean.getType()) + ':' + propertyName;
}

function objectCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), 48);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ObjectCoder(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

function tryExtractSplittable(value_0){
  $clinit_AutoBeanCodexImpl();
  var bean;
  bean = value_0 == null?null:dynamicCast(get_0(value_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25);
  if (bean != null && (!isJavaString(bean) && !hasTypeMarker(bean) || canCast(bean, 77))) {
    return getSplittable__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(dynamicCastAllowJso(bean, 77));
  }
  return null;
}

function valueCoder_0(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), 48);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ValueCoder(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

var coderFor, coders;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl', null);
function AutoBeanCodexImpl$CoderCreator(){
  this.stack_0 = new Stack;
}

defineClass(185, 551, {}, AutoBeanCodexImpl$CoderCreator);
_.endVisitType = function endVisitType_0(type_0){
  Ljava_util_List_2_classLit == type_0 || Ljava_util_Set_2_classLit == type_0?$push_1(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$CollectionCoder(type_0, dynamicCast($pop(this.stack_0), 48)))):Ljava_util_Map_2_classLit == type_0?$push_1(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$MapCoder(dynamicCast($pop(this.stack_0), 48), dynamicCast($pop(this.stack_0), 48)))):Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit == type_0?$push_1(this.stack_0, ($clinit_AutoBeanCodexImpl() , $clinit_AutoBeanCodexImpl$SplittableCoder() , INSTANCE_3)):$getEnumConstants(type_0) != null?$push_1(this.stack_0, enumCoder(type_0)):canDecode(type_0)?$push_1(this.stack_0, valueCoder_0(type_0)):$push_1(this.stack_0, objectCoder(type_0));
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/CoderCreator', 185);
function $encode(this$static, state, value_0){
  var it;
  if (value_0 == null) {
    $append_2(state.sb, 'null');
    return;
  }
  it = dynamicCast(value_0, 29).iterator();
  $append_2(state.sb, '[');
  if (it.hasNext()) {
    this$static.elementDecoder.encode_0(state, it.next_0());
    while (it.hasNext()) {
      $append_2(state.sb, ',');
      this$static.elementDecoder.encode_0(state, it.next_0());
    }
  }
  $append_2(state.sb, ']');
}

function AutoBeanCodexImpl$CollectionCoder(type_0, elementDecoder){
  this.elementDecoder = elementDecoder;
  this.type_0 = type_0;
}

defineClass(148, 1, $intern_46, AutoBeanCodexImpl$CollectionCoder);
_.decode_0 = function decode_16(state, data_0){
  var collection;
  if (Ljava_util_List_2_classLit == this.type_0) {
    collection = new SplittableList(data_0, this.elementDecoder, state);
  }
   else if (Ljava_util_Set_2_classLit == this.type_0) {
    collection = new SplittableSet(data_0, this.elementDecoder, state);
  }
   else {
    throw new RuntimeException_0($getName_0(this.type_0));
  }
  return collection;
}
;
_.encode_0 = function encode_16(state, value_0){
  $encode(this, state, value_0);
}
;
_.extractSplittable = function extractSplittable(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CollectionCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/CollectionCoder', 148);
function AutoBeanCodexImpl$EncodeState(factory, sb){
  this.factory = factory;
  this.enumMap = factory?factory:null;
  this.sb = sb;
  this.seen = !sb?null:new Stack;
}

defineClass(125, 1, {}, AutoBeanCodexImpl$EncodeState);
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EncodeState_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/EncodeState', 125);
function AutoBeanCodexImpl$EnumCoder(type_0){
  this.type_0 = type_0;
}

defineClass(439, 1, $intern_46, AutoBeanCodexImpl$EnumCoder);
_.decode_0 = function decode_17(state, data_0){
  return $getEnum(state.enumMap, this.type_0, asString__Ljava_lang_String___devirtual$(data_0));
}
;
_.encode_0 = function encode_17(state, value_0){
  if (value_0 == null) {
    $append_2(state.sb, 'null');
    return;
  }
  $append_2(state.sb, escapeValue($getToken(state.enumMap, dynamicCast(value_0, 4))));
}
;
_.extractSplittable = function extractSplittable_0(state, value_0){
  return split_1(escapeValue($getToken(state.enumMap, dynamicCast(value_0, 4))));
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EnumCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/EnumCoder', 439);
function AutoBeanCodexImpl$HaltException(cause){
  this.detailMessage = $toString(cause);
  this.cause = cause;
  $fillInStackTrace(this);
}

defineClass(149, 10, {149:1, 3:1, 8:1, 10:1, 9:1}, AutoBeanCodexImpl$HaltException);
_.getCause = function getCause_0(){
  return dynamicCast(this.cause, 10);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$HaltException_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/HaltException', 149);
function AutoBeanCodexImpl$MapCoder(valueDecoder, keyDecoder){
  this.keyDecoder = keyDecoder;
  this.valueDecoder = valueDecoder;
}

defineClass(440, 1, $intern_46, AutoBeanCodexImpl$MapCoder);
_.decode_0 = function decode_18(state, data_0){
  var toReturn;
  (hasJavaObjectVirtualDispatch(data_0)?data_0.isIndexed():$isIndexed(data_0))?(toReturn = new SplittableComplexMap(data_0, this.keyDecoder, this.valueDecoder, state)):(toReturn = new SplittableSimpleMap(data_0, this.keyDecoder, this.valueDecoder, state));
  return toReturn;
}
;
_.encode_0 = function encode_18(state, value_0){
  var entry, entry$iterator, first, isSimpleMap, keys_0, map_0, mapKey, mapValue, values;
  if (value_0 == null) {
    $append_2(state.sb, 'null');
    return;
  }
  map_0 = dynamicCast(value_0, 55);
  isSimpleMap = instanceOf(this.keyDecoder, 150);
  if (isSimpleMap) {
    first = true;
    $append_2(state.sb, '{');
    for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), 24);
      mapKey = entry.getKey();
      if (mapKey == null) {
        continue;
      }
      mapValue = entry.getValue();
      first?(first = false):$append_2(state.sb, ',');
      this.keyDecoder.encode_0(state, mapKey);
      $append_2(state.sb, ':');
      mapValue == null?$append_2(state.sb, 'null'):this.valueDecoder.encode_0(state, mapValue);
    }
    $append_2(state.sb, '}');
  }
   else {
    keys_0 = new ArrayList_0(map_0.size_1());
    values = new ArrayList_0(map_0.size_1());
    for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), 24);
      $add_11(keys_0, entry.getKey());
      $add_11(values, entry.getValue());
    }
    $append_2(state.sb, '[');
    $clinit_AutoBeanCodexImpl();
    $encode(new AutoBeanCodexImpl$CollectionCoder(Ljava_util_List_2_classLit, this.keyDecoder), state, keys_0);
    $append_2(state.sb, ',');
    $encode(new AutoBeanCodexImpl$CollectionCoder(Ljava_util_List_2_classLit, this.valueDecoder), state, values);
    $append_2(state.sb, ']');
  }
}
;
_.extractSplittable = function extractSplittable_1(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$MapCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/MapCoder', 440);
function AutoBeanCodexImpl$ObjectCoder(type_0){
  this.type_0 = type_0;
}

defineClass(441, 1, $intern_46, AutoBeanCodexImpl$ObjectCoder);
_.decode_0 = function decode_19(state, data_0){
  var bean;
  bean = doDecode(state, this.type_0, data_0);
  return !bean?null:bean.as();
}
;
_.encode_0 = function encode_19(state, value_0){
  if (value_0 == null) {
    $append_2(state.sb, 'null');
    return;
  }
  doEncode(state, value_0 == null?null:dynamicCast(get_0(value_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25));
}
;
_.extractSplittable = function extractSplittable_2(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ObjectCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/ObjectCoder', 441);
function $maybeCreateCoder(this$static, propertyName, ctx){
  var creator;
  creator = new AutoBeanCodexImpl$CoderCreator;
  $traverse_0(ctx, creator, 0);
  ($clinit_AutoBeanCodexImpl() , coderFor).put(key_1(this$static.bean, propertyName), dynamicCast($pop(creator.stack_0), 48));
}

function AutoBeanCodexImpl$PropertyCoderCreator(){
}

defineClass(442, 552, {}, AutoBeanCodexImpl$PropertyCoderCreator);
_.visit = function visit_0(bean, ctx){
  this.bean = bean;
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_0(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_0(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyCoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/PropertyCoderCreator', 442);
function $encodeProperty(this$static, propertyName, value_0, ctx){
  var decoder, pd;
  pd = new AutoBeanCodexImpl$CoderCreator;
  $traverse_0(ctx, pd, 0);
  decoder = dynamicCast($pop(pd.stack_0), 48);
  this$static.first?(this$static.first = false):$append_2(this$static.state.sb, ',');
  $append_2(this$static.state.sb, escapeValue(propertyName));
  $append_2(this$static.state.sb, ':');
  decoder.encode_0(this$static.state, value_0);
}

function AutoBeanCodexImpl$PropertyGetter(state){
  this.state = state;
}

defineClass(443, 552, {}, AutoBeanCodexImpl$PropertyGetter);
_.endVisit = function endVisit_0(bean, ctx){
  $append_2(this.state.sb, '}');
  $pop(this.state.seen);
}
;
_.visit = function visit_1(bean, ctx){
  if ($contains_2(this.state.seen, bean)) {
    throw new AutoBeanCodexImpl$HaltException(new UnsupportedOperationException_0('Cycles not supported'));
  }
  $push_1(this.state.seen, bean);
  $append_2(this.state.sb, '{');
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_1(propertyName, value_0, ctx){
  !!value_0 && $encodeProperty(this, propertyName, value_0.as(), ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_1(propertyName, value_0, ctx){
  value_0 != null && !equals_Ljava_lang_Object__Z__devirtual$(value_0, getUninitializedFieldValue(!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) && $encodeProperty(this, propertyName, value_0, ctx);
  return false;
}
;
_.first = true;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyGetter_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/PropertyGetter', 443);
function $clinit_AutoBeanCodexImpl$SplittableCoder(){
  $clinit_AutoBeanCodexImpl$SplittableCoder = emptyMethod;
  INSTANCE_3 = new AutoBeanCodexImpl$SplittableCoder;
}

function AutoBeanCodexImpl$SplittableCoder(){
}

defineClass(444, 1, $intern_46, AutoBeanCodexImpl$SplittableCoder);
_.decode_0 = function decode_20(state, data_0){
  return data_0;
}
;
_.encode_0 = function encode_20(state, value_0){
  if (value_0 == null) {
    $append_2(state.sb, 'null');
    return;
  }
  $append_2(state.sb, getPayload__Ljava_lang_String___devirtual$(dynamicCastAllowJso(value_0, 153)));
}
;
_.extractSplittable = function extractSplittable_3(state, value_0){
  return dynamicCastAllowJso(value_0, 153);
}
;
var INSTANCE_3;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$SplittableCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/SplittableCoder', 444);
function AutoBeanCodexImpl$ValueCoder(type_0){
  this.type_0 = type_0;
}

defineClass(150, 1, {48:1, 150:1}, AutoBeanCodexImpl$ValueCoder);
_.decode_0 = function decode_21(state, propertyValue){
  if (!propertyValue || propertyValue == ($clinit_Splittable() , NULL)) {
    return getUninitializedFieldValue(this.type_0);
  }
  return decode_0(this.type_0, propertyValue);
}
;
_.encode_0 = function encode_21(state, value_0){
  $append_2(state.sb, getPayload__Ljava_lang_String___devirtual$(encode_0(this.type_0, value_0)));
}
;
_.extractSplittable = function extractSplittable_4(state, value_0){
  return encode_0(this.type_0, value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ValueCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/ValueCoder', 150);
function SplittableComplexMap(data_0, keyCoder, valueCoder, state){
  this.data_0 = data_0;
  this.keys_0 = new SplittableList(get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, 0), keyCoder, state);
  this.values = new SplittableList(get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, 1), valueCoder, state);
}

defineClass(499, 1, $intern_47, SplittableComplexMap);
_.entrySet_0 = function entrySet(){
  return new SplittableComplexMap$1(this);
}
;
_.get_2 = function get_5(key_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    return null;
  }
  return $get_1(this.values, idx);
}
;
_.getSplittable = function getSplittable_0(){
  return this.data_0;
}
;
_.isEmpty = function isEmpty(){
  return this.keys_0.isEmpty();
}
;
_.put = function put(key_0, value_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    $add_9(this.keys_0, key_0);
    $add_9(this.values, value_0);
    return null;
  }
  return $set_0(this.values, idx, value_0);
}
;
_.remove_1 = function remove_13(key_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    return null;
  }
  $remove_6(this.keys_0, idx);
  return $remove_6(this.values, idx);
}
;
_.size_1 = function size_2(){
  return size__I__devirtual$(this.keys_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap', 499);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static, a){
  var i, it, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(527, 1, {29:1});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_14(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, this.size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray(this, a);
}
;
_.toString$ = function toString_19(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 527);
defineClass(528, 527, $intern_48);
_.equals$ = function equals_9(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 56)) {
    return false;
  }
  other = dynamicCast(o, 56);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_31(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 528);
function SplittableComplexMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(500, 528, $intern_48, SplittableComplexMap$1);
_.iterator = function iterator_5(){
  return new SplittableComplexMap$1$1(this);
}
;
_.size_1 = function size_3(){
  return size__I__devirtual$(this.this$01.keys_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1', 500);
function SplittableComplexMap$1$1(this$1){
  this.this$11 = this$1;
  this.keyIt = new AbstractList$IteratorImpl(this.this$11.this$01.keys_0);
  this.valueIt = new AbstractList$ListIteratorImpl(this.this$11.this$01.values, 0);
}

defineClass(501, 1, $intern_42, SplittableComplexMap$1$1);
_.hasNext = function hasNext_3(){
  return $hasNext_2(this.keyIt);
}
;
_.next_0 = function next_4(){
  return new SplittableComplexMap$1$1$1(this);
}
;
_.remove_0 = function remove_15(){
  $remove_7(this.keyIt);
  this.valueIt.remove_0();
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1/1', 501);
function SplittableComplexMap$1$1$1(this$2){
  this.this$21 = this$2;
  this.key = $next_3(this.this$21.keyIt);
  this.value_0 = this.this$21.valueIt.next_0();
}

defineClass(502, 1, $intern_49, SplittableComplexMap$1$1$1);
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.setValue = function setValue(value_0){
  $set_1(this.this$21.valueIt, value_0);
  return value_0;
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1/1/1', 502);
function $add_9(this$static, obj){
  this$static.add_0(this$static.size_1(), obj);
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = size__I__devirtual$(this$static.data_0); i < n; ++i) {
    if (equals_34(toFind, $get_1(this$static, i))) {
      return i;
    }
  }
  return -1;
}

defineClass(533, 527, $intern_50);
_.add_0 = function add_2(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_3(obj){
  return $add_9(this, obj);
}
;
_.equals$ = function equals_10(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 19)) {
    return false;
  }
  other = dynamicCast(o, 19);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_32(this);
}
;
_.iterator = function iterator_6(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_16(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
_.set_0 = function set_1(index_0, o){
  throw new UnsupportedOperationException_0('Set not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 533);
function $get_1(this$static, index_0){
  var toReturn;
  if (isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, '' + index_0)) {
    toReturn = getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static.data_0, '' + index_0);
    return toReturn;
  }
  return reify(this$static.state, this$static.data_0, index_0, this$static.elementCoder);
}

function $remove_6(this$static, index_0){
  var i, newSize, toReturn;
  toReturn = $get_1(this$static, index_0);
  newSize = size__I__devirtual$(this$static.data_0) - 1;
  for (i = index_0; i < newSize; i++) {
    $assign(get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static.data_0, i + 1), this$static.data_0, i);
    isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, '' + (i + 1))?setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static.data_0, '' + i, getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static.data_0, '' + (i + 1))):isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, '' + i) && removeReified_Ljava_lang_String__V__devirtual$(this$static.data_0, '' + i);
  }
  removeReified_Ljava_lang_String__V__devirtual$(this$static.data_0, '' + newSize);
  setSize_I_V__devirtual$(this$static.data_0, newSize);
  return toReturn;
}

function $set_0(this$static, index_0, element){
  var previous;
  previous = $get_1(this$static, index_0);
  set_3(this$static.state, this$static.data_0, index_0, this$static.elementCoder, element);
  return previous;
}

function SplittableList(data_0, elementCoder, state){
  this.data_0 = data_0;
  this.elementCoder = elementCoder;
  this.state = state;
}

function reify(state, data_0, index_0, coder){
  var toReturn;
  if (hasJavaObjectVirtualDispatch(data_0)?data_0.isNull(index_0):data_0[index_0] == null) {
    return null;
  }
  toReturn = coder.decode_0(state, get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, index_0));
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, '' + index_0, toReturn);
  return toReturn;
}

function set_3(state, data_0, index_0, coder, value_0){
  var backing;
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, '' + index_0, value_0);
  if (value_0 == null) {
    $assign_0(($clinit_Splittable() , data_0), index_0);
    return;
  }
  backing = coder.extractSplittable(state, value_0);
  !backing?setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):hasJavaObjectVirtualDispatch(backing)?backing.assign(data_0, index_0):$assign(backing, data_0, index_0);
}

defineClass(126, 533, $intern_50, SplittableList);
_.add_0 = function add_4(index_0, element){
  set_3(this.state, this.data_0, index_0, this.elementCoder, element);
}
;
_.get_3 = function get_6(index_0){
  return $get_1(this, index_0);
}
;
_.getSplittable = function getSplittable_1(){
  return this.data_0;
}
;
_.remove_3 = function remove_17(index_0){
  return $remove_6(this, index_0);
}
;
_.set_0 = function set_2(index_0, element){
  return $set_0(this, index_0, element);
}
;
_.size_1 = function size_4(){
  return size__I__devirtual$(this.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableList_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableList', 126);
function SplittableSet(data_0, elementCoder, state){
  this.data_0 = new SplittableList(data_0, elementCoder, state);
}

defineClass(498, 528, $intern_48, SplittableSet);
_.getSplittable = function getSplittable_2(){
  return this.data_0.data_0;
}
;
_.iterator = function iterator_7(){
  return new AbstractList$IteratorImpl(this.data_0);
}
;
_.remove_2 = function remove_18(o){
  return $advanceToFind(this.data_0, o, true);
}
;
_.size_1 = function size_5(){
  return size__I__devirtual$(this.data_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSet_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSet', 498);
function $get_2(this$static, key_0){
  var encodedKey;
  encodedKey = asString__Ljava_lang_String___devirtual$(this$static.keyCoder.extractSplittable(this$static.state, key_0));
  return $getRaw_1(this$static, encodedKey);
}

function $getRaw_1(this$static, encodedKey){
  var toReturn, toReturn0, value_0;
  if ($isReified(this$static.reified, encodedKey)) {
    toReturn0 = $getReified(this$static.reified, encodedKey);
    return toReturn0;
  }
  if (isNull_Ljava_lang_String__Z__devirtual$(this$static.data_0, encodedKey)) {
    return null;
  }
  value_0 = get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static.data_0, encodedKey);
  toReturn = this$static.valueCoder.decode_0(this$static.state, value_0);
  $setReified(this$static.reified, encodedKey, toReturn);
  return toReturn;
}

function $put_0(this$static, key_0, value_0){
  var encodedKey, encodedValue, toReturn;
  toReturn = $get_2(this$static, key_0);
  encodedKey = asString__Ljava_lang_String___devirtual$(this$static.keyCoder.extractSplittable(this$static.state, key_0));
  $setReified(this$static.reified, encodedKey, value_0);
  encodedValue = this$static.valueCoder.extractSplittable(this$static.state, value_0);
  !encodedValue?$setReified(this$static.reified, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(encodedValue, this$static.data_0, encodedKey);
  return toReturn;
}

function SplittableSimpleMap(data_0, keyCoder, valueCoder, state){
  this.reified = {};
  this.data_0 = data_0;
  this.keyCoder = keyCoder;
  this.state = state;
  this.valueCoder = valueCoder;
}

defineClass(503, 1, $intern_47, SplittableSimpleMap);
_.entrySet_0 = function entrySet_0(){
  return new SplittableSimpleMap$1(this);
}
;
_.get_2 = function get_7(key_0){
  return $get_2(this, key_0);
}
;
_.getSplittable = function getSplittable_3(){
  return this.data_0;
}
;
_.isEmpty = function isEmpty_1(){
  return getPropertyKeys__Ljava_util_List___devirtual$(this.data_0).list.isEmpty();
}
;
_.put = function put_0(key_0, value_0){
  return $put_0(this, key_0, value_0);
}
;
_.remove_1 = function remove_19(key_0){
  var encodedKey, toReturn;
  toReturn = $get_2(this, key_0);
  encodedKey = asString__Ljava_lang_String___devirtual$(this.keyCoder.extractSplittable(this.state, key_0));
  $setReified(this.reified, encodedKey, null);
  $assign_1(($clinit_Splittable() , this.data_0), encodedKey);
  return toReturn;
}
;
_.size_1 = function size_6(){
  return getPropertyKeys__Ljava_util_List___devirtual$(this.data_0).size_1();
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap', 503);
function SplittableSimpleMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = getPropertyKeys__Ljava_util_List___devirtual$(this.this$01.data_0);
}

defineClass(504, 528, $intern_48, SplittableSimpleMap$1);
_.iterator = function iterator_8(){
  return new SplittableSimpleMap$1$1(this);
}
;
_.size_1 = function size_7(){
  return this.keys_0.size_1();
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1', 504);
function SplittableSimpleMap$1$1(this$1){
  this.this$11 = this$1;
  this.keyIterator = this.this$11.keys_0.iterator();
}

defineClass(505, 1, $intern_42, SplittableSimpleMap$1$1);
_.hasNext = function hasNext_4(){
  return this.keyIterator.hasNext();
}
;
_.next_0 = function next_5(){
  return this.encodedKey = dynamicCastToString(this.keyIterator.next_0()) , new SplittableSimpleMap$1$1$1(this);
}
;
_.remove_0 = function remove_20(){
  delete ($clinit_Splittable() , this.this$11.this$01.data_0)[this.encodedKey];
  $setReified(this.this$11.this$01.reified, this.encodedKey, null);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1/1', 505);
function SplittableSimpleMap$1$1$1(this$2){
  this.this$21 = this$2;
  this.key = this.this$21.this$11.this$01.keyCoder.decode_0(this.this$21.this$11.this$01.state, split_1(escapeValue(this.this$21.encodedKey)));
  this.value_0 = this.this$21.this$11.this$01.valueCoder.decode_0(this.this$21.this$11.this$01.state, get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this.this$21.this$11.this$01.data_0, this.this$21.encodedKey));
}

defineClass(506, 1, $intern_49, SplittableSimpleMap$1$1$1);
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.setValue = function setValue_0(newValue){
  return $put_0(this.this$21.this$11.this$01, this.key, newValue);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1/1/1', 506);
function split_1(payload){
  var c, isSimple, toReturn;
  c = payload.charCodeAt(0);
  isSimple = c != 123 && c != 91;
  isSimple && (payload = '[' + payload + ']');
  toReturn = dynamicCastAllowJso(safeEval(payload), 153);
  isSimple && (toReturn = get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(toReturn, 0));
  return toReturn;
}

function tryParseDate(date){
  var js;
  try {
    return new Date_0(__parseAndValidateLong(date));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 40))
      throw unwrap($e0);
  }
  try {
    js = new Date(date);
    return new Date_0(fromDouble(js.getTime()));
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (!instanceOf($e1, 51))
      throw unwrap($e1);
  }
  return null;
}

function $removeHandler(this$static){
  this$static.this$01.doRemove(this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(219, 1, {154:1}, SimpleEventBus$1);
_.removeHandler = function removeHandler_2(){
  $removeHandler(this);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 219);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(220, 1, {508:1}, SimpleEventBus$2);
_.execute_1 = function execute_13(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 220);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(159, 1, {508:1}, SimpleEventBus$3);
_.execute_1 = function execute_14(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 159);
function IteratorAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new IteratorAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(476, 32, $intern_5, IteratorAutoBean);
_.as = function as_4(){
  return this.shim;
}
;
_.getType = function getType_12(){
  return Ljava_util_Iterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_3(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'next') , Z_classLit));
  visitor.visitValueProperty('next', value_0, propertyContext);
}
;
var Lemul_java_util_IteratorAutoBean_2_classLit = createForClass('emul.java.util', 'IteratorAutoBean', 476);
function $hasNext(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 27).hasNext();
  return toReturn;
}

function IteratorAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(477, 1, $intern_42, IteratorAutoBean$1);
_.equals$ = function equals_11(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 27).equals$(o);
}
;
_.hasNext = function hasNext_5(){
  return $hasNext(this);
}
;
_.hashCode$ = function hashCode_13(){
  return dynamicCast($getWrapped(this.this$01), 27).hashCode$();
}
;
_.next_0 = function next_6(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 27).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as());
  return toReturn;
}
;
_.remove_0 = function remove_21(){
  dynamicCast($getWrapped(this.this$01), 27).remove_0();
}
;
_.toString$ = function toString_20(){
  return dynamicCast($getWrapped(this.this$01), 27).toString$();
}
;
var Lemul_java_util_IteratorAutoBean$1_2_classLit = createForClass('emul.java.util', 'IteratorAutoBean/1', 477);
function ListAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new ListAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(474, 32, $intern_5, ListAutoBean);
_.as = function as_5(){
  return this.shim;
}
;
_.getType = function getType_13(){
  return Ljava_util_List_2_classLit;
}
;
_.traverseProperties = function traverseProperties_4(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'empty') , Z_classLit));
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
var Lemul_java_util_ListAutoBean_2_classLit = createForClass('emul.java.util', 'ListAutoBean', 474);
function $isEmpty(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 19).isEmpty();
  return toReturn;
}

function ListAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(475, 1, $intern_50, ListAutoBean$1);
_.add_1 = function add_5(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_12(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 19).equals$(o);
}
;
_.get_3 = function get_8(index_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).get_3(index_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as());
  initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf_3(index_0)]);
  return toReturn;
}
;
_.hashCode$ = function hashCode_14(){
  return dynamicCast($getWrapped(this.this$01), 19).hashCode$();
}
;
_.isEmpty = function isEmpty_2(){
  return $isEmpty(this);
}
;
_.iterator = function iterator_9(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as(), 27)):(toReturn = (new IteratorAutoBean(this.this$01.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator = function listIterator_1(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).listIterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as(), 53)):(toReturn = (new ListIteratorAutoBean(this.this$01.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator_0 = function listIterator_2(from){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).listIterator_0(from);
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as(), 53)):(toReturn = (new ListIteratorAutoBean(this.this$01.factory, toReturn)).shim));
  initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf_3(from)]);
  return toReturn;
}
;
_.remove_2 = function remove_22(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).remove_2(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.set_0 = function set_4(index_0, element){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).set_0(index_0, element);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as());
  initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf_3(index_0), element]);
  return toReturn;
}
;
_.size_1 = function size_8(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).size_1();
  valueOf_3(toReturn);
  return toReturn;
}
;
_.toArray = function toArray_1(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 19).toArray();
  return toReturn;
}
;
_.toString$ = function toString_21(){
  return dynamicCast($getWrapped(this.this$01), 19).toString$();
}
;
var Lemul_java_util_ListAutoBean$1_2_classLit = createForClass('emul.java.util', 'ListAutoBean/1', 475);
function ListIteratorAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new ListIteratorAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(189, 32, $intern_5, ListIteratorAutoBean);
_.as = function as_6(){
  return this.shim;
}
;
_.getType = function getType_14(){
  return Ljava_util_ListIterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_5(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext_0(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'next') , Z_classLit));
  visitor.visitValueProperty('next', value_0, propertyContext);
  value_0 = $hasPrevious(as)?TRUE:FALSE;
  propertyContext = new ClientPropertyContext((beanSetter(this, 'previous') , Z_classLit));
  visitor.visitValueProperty('previous', value_0, propertyContext);
}
;
var Lemul_java_util_ListIteratorAutoBean_2_classLit = createForClass('emul.java.util', 'ListIteratorAutoBean', 189);
function $hasNext_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 53).hasNext();
  return toReturn;
}

function $hasPrevious(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 53).hasPrevious();
  return toReturn;
}

function ListIteratorAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(478, 1, $intern_51, ListIteratorAutoBean$1);
_.equals$ = function equals_13(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 53).equals$(o);
}
;
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.hasPrevious = function hasPrevious(){
  return $hasPrevious(this);
}
;
_.hashCode$ = function hashCode_15(){
  return dynamicCast($getWrapped(this.this$01), 53).hashCode$();
}
;
_.next_0 = function next_7(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 53).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as());
  return toReturn;
}
;
_.previous = function previous_0(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 53).previous();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 25)).as());
  return toReturn;
}
;
_.remove_0 = function remove_23(){
  dynamicCast($getWrapped(this.this$01), 53).remove_0();
}
;
_.toString$ = function toString_22(){
  return dynamicCast($getWrapped(this.this$01), 53).toString$();
}
;
var Lemul_java_util_ListIteratorAutoBean$1_2_classLit = createForClass('emul.java.util', 'ListIteratorAutoBean/1', 478);
function $append0(this$static, x_0, start_0, end){
  x_0 == null && (x_0 = 'null');
  this$static.string += x_0.substr(start_0, end - start_0);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(129, 1, {});
_.toString$ = function toString_23(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 129);
function ArithmeticException(explanation){
  RuntimeException_0.call(this, explanation);
}

defineClass(117, 10, $intern_15, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 117);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 10, $intern_15, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 54);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(481, 54, $intern_15, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 481);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(102, 10, $intern_15, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 102);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function $compareTo_0(this$static, b){
  return compare_0(this$static.value_0, b.value_0);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare_0(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(58, 1, {3:1, 58:1, 5:1}, Boolean_0);
_.compareTo = function compareTo_0(b){
  return $compareTo_0(this, dynamicCast(b, 58));
}
;
_.equals$ = function equals_14(o){
  return instanceOf(o, 58) && dynamicCast(o, 58).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_16(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_24(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 58);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_33;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = __substr(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = __substr(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(s.substr(0, head), 10));
    s = __substr(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(s.substr(0, maxDigits), 10);
    s = __substr(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException('For input string: "' + orig + '"');
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, {l:0, m:0, h:0})) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, {l:0, m:0, h:0})) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

defineClass(64, 1, {3:1, 64:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 64);
function $compareTo_1(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf_1(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte(b));
  return result;
}

defineClass(79, 64, {3:1, 79:1, 5:1, 64:1}, Byte);
_.compareTo = function compareTo_1(b){
  return $compareTo_1(this, dynamicCast(b, 79));
}
;
_.equals$ = function equals_15(o){
  return instanceOf(o, 79) && dynamicCast(o, 79).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_17(){
  return this.value_0;
}
;
_.toString$ = function toString_25(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 79);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Byte_2_classLit, $intern_4, 79, 256, 0, 1);
}

var boxedValues_0;
function $compareTo_2(this$static, c){
  return this$static.value_0 - c.value_0;
}

function Character(value_0){
  this.value_0 = value_0;
}

function digit_0(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_2(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_1)[c];
    !result && (result = boxedValues_1[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(70, 1, {3:1, 70:1, 5:1}, Character);
_.compareTo = function compareTo_2(c){
  return $compareTo_2(this, dynamicCast(c, 70));
}
;
_.equals$ = function equals_16(o){
  return instanceOf(o, 70) && dynamicCast(o, 70).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_18(){
  return this.value_0;
}
;
_.toString$ = function toString_26(){
  return valueOf_6(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 70);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Character_2_classLit, $intern_4, 70, 128, 0, 1);
}

var boxedValues_1;
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(90, 10, $intern_15, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 90);
function $compareTo_3(this$static, b){
  return compare_1(this$static.value_0, b.value_0);
}

function Double(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function isNaN_0(x_0){
  return isNaN(x_0);
}

defineClass(80, 64, {3:1, 5:1, 80:1, 64:1}, Double);
_.compareTo = function compareTo_3(b){
  return $compareTo_3(this, dynamicCast(b, 80));
}
;
_.equals$ = function equals_17(o){
  return instanceOf(o, 80) && dynamicCast(o, 80).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_19(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_28(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 80);
function $compareTo_4(this$static, b){
  return compare_1(this$static.value_0, b.value_0);
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(81, 64, {3:1, 5:1, 81:1, 64:1}, Float);
_.compareTo = function compareTo_4(b){
  return $compareTo_4(this, dynamicCast(b, 81));
}
;
_.equals$ = function equals_18(o){
  return instanceOf(o, 81) && dynamicCast(o, 81).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_20(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_29(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 81);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 10, $intern_15, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 39);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(42, 10, $intern_15, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 42);
function $compareTo_5(this$static, b){
  return compare_2(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_2(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_3(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(49, 64, {3:1, 5:1, 49:1, 64:1}, Integer);
_.compareTo = function compareTo_5(b){
  return $compareTo_5(this, dynamicCast(b, 49));
}
;
_.equals$ = function equals_19(o){
  return instanceOf(o, 49) && dynamicCast(o, 49).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_21(){
  return this.value_0;
}
;
_.toString$ = function toString_30(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 49);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_2 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 49, 256, 0, 1);
}

var boxedValues_2;
function $compareTo_6(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

function Long(value_0){
  this.value_0 = value_0;
}

function compare_3(x_0, y_0){
  return lt(x_0, y_0)?-1:gt(x_0, y_0)?1:0;
}

function valueOf_4(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_2, h:$intern_3}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(71, 64, {3:1, 5:1, 71:1, 64:1}, Long);
_.compareTo = function compareTo_6(b){
  return $compareTo_6(this, dynamicCast(b, 71));
}
;
_.equals$ = function equals_20(o){
  return instanceOf(o, 71) && eq(dynamicCast(o, 71).value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_22(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_31(){
  return '' + toString_15(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 71);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_3 = initDim(Ljava_lang_Long_2_classLit, $intern_4, 71, 256, 0, 1);
}

var boxedValues_3;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function floor_0(x_0){
  return Math.floor(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 10, $intern_15, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(I_classLit, $intern_6, 0, 37, 7, 1);
  maxLengthForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(J_classLit, $intern_6, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div({l:$intern_2, m:$intern_2, h:524287}, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(40, 39, {3:1, 8:1, 40:1, 10:1, 9:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 40);
function $compareTo_7(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Short(value_0){
  this.value_0 = value_0;
}

function valueOf_5(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_4)[rebase];
    !result && (result = boxedValues_4[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(72, 64, {3:1, 5:1, 64:1, 72:1}, Short);
_.compareTo = function compareTo_7(b){
  return $compareTo_7(this, dynamicCast(b, 72));
}
;
_.equals$ = function equals_21(o){
  return instanceOf(o, 72) && dynamicCast(o, 72).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_23(){
  return this.value_0;
}
;
_.toString$ = function toString_32(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 72);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_4 = initDim(Ljava_lang_Short_2_classLit, $intern_4, 72, 256, 0, 1);
}

var boxedValues_4;
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(73, 1, {3:1, 73:1}, StackTraceElement);
_.equals$ = function equals_22(other){
  var st;
  if (instanceOf(other, 73)) {
    st = dynamicCast(other, 73);
    return this.lineNumber == st.lineNumber && equals_34(this.methodName, st.methodName) && equals_34(this.className_0, st.className_0) && equals_34(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_24(){
  return hashCode_30(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf_3(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_33(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 73);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __checkBounds(legalCount, start_0, end){
  if (start_0 < 0) {
    throw new StringIndexOutOfBoundsException(start_0);
  }
  if (end < start_0) {
    throw new StringIndexOutOfBoundsException(end - start_0);
  }
  if (end > legalCount) {
    throw new StringIndexOutOfBoundsException(end);
  }
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_8(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_8(this$static, dynamicCastToString(other)):this$static.compareTo(other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_36) {
    hiSurrogate = 55296 + (codePoint - $intern_36 >> 10 & 1023) & $intern_17;
    loSurrogate = 56320 + (codePoint - $intern_36 & 1023) & $intern_17;
    return valueOf_6(hiSurrogate) + valueOf_6(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_17);
  }
}

function valueOf_6(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_7(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

function valueOf_8(x_0, offset, count){
  var end;
  end = offset + count;
  __checkBounds(x_0.length, offset, end);
  return __valueOf(x_0, offset, end);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key_0 = ':' + str;
  var result = front[key_0];
  if (result != null) {
    return result;
  }
  result = back_0[key_0];
  result == null && (result = compute(str));
  increment();
  return front[key_0] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += charToString(x_0);
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $insert_2(this$static, index_0, x_0){
  this$static.string = __substr(this$static.string, 0, index_0) + x_0 + $substring(this$static.string, index_0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(31, 129, {558:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 31);
function StringIndexOutOfBoundsException(index_0){
  IndexOutOfBoundsException_0.call(this, 'String index out of range: ' + index_0);
}

defineClass(152, 54, $intern_15, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 152);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_0(src_0, 'src');
  checkNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src_0, 6);
    destArray = dynamicCast(dest, 6);
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 10, $intern_15, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 41);
function $clinit_BigDecimal(){
  $clinit_BigDecimal = emptyMethod;
  var i, j, j0;
  new BigDecimal({l:1, m:0, h:0}, 0);
  new BigDecimal({l:10, m:0, h:0}, 0);
  new BigDecimal({l:0, m:0, h:0}, 0);
  BI_SCALED_BY_ZERO = initDim(Ljava_math_BigDecimal_2_classLit, $intern_4, 50, 11, 0, 1);
  CH_ZEROS = initDim(C_classLit, $intern_6, 0, 100, 7, 1);
  DOUBLE_FIVE_POW = initValues(getClassLiteralForArray(D_classLit, 1), $intern_6, 0, 7, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625]);
  DOUBLE_FIVE_POW_BIT_LENGTH = initDim(I_classLit, $intern_6, 0, DOUBLE_FIVE_POW.length, 7, 1);
  DOUBLE_TEN_POW = initValues(getClassLiteralForArray(D_classLit, 1), $intern_6, 0, 7, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, $intern_32, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000]);
  DOUBLE_TEN_POW_BIT_LENGTH = initDim(I_classLit, $intern_6, 0, DOUBLE_TEN_POW.length, 7, 1);
  ZERO_SCALED_BY = initDim(Ljava_math_BigDecimal_2_classLit, $intern_4, 50, 11, 0, 1);
  i = 0;
  for (; i < ZERO_SCALED_BY.length; i++) {
    BI_SCALED_BY_ZERO[i] = new BigDecimal(fromInt(i), 0);
    ZERO_SCALED_BY[i] = new BigDecimal({l:0, m:0, h:0}, i);
    CH_ZEROS[i] = 48;
  }
  for (; i < CH_ZEROS.length; i++) {
    CH_ZEROS[i] = 48;
  }
  for (j0 = 0; j0 < DOUBLE_FIVE_POW_BIT_LENGTH.length; j0++) {
    DOUBLE_FIVE_POW_BIT_LENGTH[j0] = bitLength(DOUBLE_FIVE_POW[j0]);
  }
  for (j = 0; j < DOUBLE_TEN_POW_BIT_LENGTH.length; j++) {
    DOUBLE_TEN_POW_BIT_LENGTH[j] = bitLength(DOUBLE_TEN_POW[j]);
  }
  $clinit_Multiplication();
}

function $compareTo_8(this$static, val){
  var diffPrecision, diffScale, thisSign, thisUnscaled, valUnscaled, valueSign;
  thisSign = $signum(this$static);
  valueSign = $signum(val);
  if (thisSign == valueSign) {
    if (this$static.scale == val.scale && this$static.bitLength < 54 && val.bitLength < 54) {
      return this$static.smallValue < val.smallValue?-1:this$static.smallValue > val.smallValue?1:0;
    }
    diffScale = this$static.scale - val.scale;
    diffPrecision = (this$static.precision > 0?this$static.precision:floor_0((this$static.bitLength - 1) * $intern_52) + 1) - (val.precision > 0?val.precision:floor_0((val.bitLength - 1) * $intern_52) + 1);
    if (diffPrecision > diffScale + 1) {
      return thisSign;
    }
     else if (diffPrecision < diffScale - 1) {
      return -thisSign;
    }
     else {
      thisUnscaled = (!this$static.intVal && (this$static.intVal = valueOf_9(this$static.smallValue)) , this$static.intVal);
      valUnscaled = (!val.intVal && (val.intVal = valueOf_9(val.smallValue)) , val.intVal);
      diffScale < 0?(thisUnscaled = $multiply(thisUnscaled, powerOf10(-diffScale))):diffScale > 0 && (valUnscaled = $multiply(valUnscaled, powerOf10(diffScale)));
      return $compareTo_9(thisUnscaled, valUnscaled);
    }
  }
   else 
    return thisSign < valueSign?-1:1;
}

function $initFrom(this$static, val){
  var begin, ch_0, i, last, offset, scaleString, unscaled, unscaledBuffer;
  begin = 0;
  offset = 0;
  last = val.length;
  unscaledBuffer = new StringBuilder_0(val.length);
  if (0 < last && val.charCodeAt(0) == 43) {
    ++offset;
    ++begin;
    if (offset < last && (val.charCodeAt(offset) == 43 || val.charCodeAt(offset) == 45)) {
      throw new NumberFormatException('For input string: "' + val + '"');
    }
  }
  while (offset < last && val.charCodeAt(offset) != 46 && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
    ++offset;
  }
  $append0(unscaledBuffer, val, begin, offset);
  if (offset < last && val.charCodeAt(offset) == 46) {
    ++offset;
    begin = offset;
    while (offset < last && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
      ++offset;
    }
    this$static.scale = offset - begin;
    $append0(unscaledBuffer, val, begin, offset);
  }
   else {
    this$static.scale = 0;
  }
  if (offset < last && (val.charCodeAt(offset) == 101 || val.charCodeAt(offset) == 69)) {
    ++offset;
    begin = offset;
    if (offset < last && val.charCodeAt(offset) == 43) {
      ++offset;
      offset < last && val.charCodeAt(offset) != 45 && ++begin;
    }
    scaleString = val.substr(begin, last - begin);
    this$static.scale = this$static.scale - __parseAndValidateInt(scaleString);
    if (this$static.scale != round_int(this$static.scale)) {
      throw new NumberFormatException('Scale out of range.');
    }
  }
  unscaled = unscaledBuffer.string;
  if (unscaled.length < 16) {
    this$static.smallValue = parseUnscaled(unscaled);
    if (isNaN_0(this$static.smallValue)) {
      throw new NumberFormatException('For input string: "' + val + '"');
    }
    this$static.bitLength = bitLength(this$static.smallValue);
  }
   else {
    $setUnscaledValue(this$static, new BigInteger_4(unscaled));
  }
  this$static.precision = unscaledBuffer.string.length;
  for (i = 0; i < unscaledBuffer.string.length; ++i) {
    ch_0 = $charAt(unscaledBuffer.string, i);
    if (ch_0 != 45 && ch_0 != 48) {
      break;
    }
    --this$static.precision;
  }
  this$static.precision == 0 && (this$static.precision = 1);
}

function $setUnscaledValue(this$static, unscaledValue){
  var value_0;
  this$static.intVal = unscaledValue;
  this$static.bitLength = bitLength_1(unscaledValue);
  this$static.bitLength < 54 && (this$static.smallValue = toDouble((value_0 = unscaledValue.numberLength > 1?or(shl(fromInt(unscaledValue.digits[1]), 32), and(fromInt(unscaledValue.digits[0]), {l:$intern_2, m:1023, h:0})):and(fromInt(unscaledValue.digits[0]), {l:$intern_2, m:1023, h:0}) , mul(fromInt(unscaledValue.sign), value_0))));
}

function $signum(this$static){
  if (this$static.bitLength < 54) {
    return this$static.smallValue < 0?-1:this$static.smallValue > 0?1:0;
  }
  return (!this$static.intVal && (this$static.intVal = valueOf_9(this$static.smallValue)) , this$static.intVal).sign;
}

function $toString_1(this$static){
  var begin, end, exponent, intString, result;
  if (this$static.toStringImage != null) {
    return this$static.toStringImage;
  }
  if (this$static.bitLength < 32) {
    this$static.toStringImage = toDecimalScaledString(fromDouble(this$static.smallValue), round_int(this$static.scale));
    return this$static.toStringImage;
  }
  intString = toDecimalScaledString_0((!this$static.intVal && (this$static.intVal = valueOf_9(this$static.smallValue)) , this$static.intVal), 0);
  if (this$static.scale == 0) {
    return intString;
  }
  begin = (!this$static.intVal && (this$static.intVal = valueOf_9(this$static.smallValue)) , this$static.intVal).sign < 0?2:1;
  end = intString.length;
  exponent = -this$static.scale + end - begin;
  result = new StringBuilder;
  result.string += intString;
  if (this$static.scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      $insert_2(result, end - round_int(this$static.scale), '.');
    }
     else {
      result.string = __substr(result.string, 0, begin - 1) + '0.' + $substring(result.string, begin - 1);
      $insert_2(result, begin + 1, valueOf_8(CH_ZEROS, 0, -round_int(exponent) - 1));
    }
  }
   else {
    if (end - begin >= 1) {
      result.string = __substr(result.string, 0, begin) + '.' + $substring(result.string, begin);
      ++end;
    }
    result.string = __substr(result.string, 0, end) + 'E' + $substring(result.string, end);
    exponent > 0 && $insert_2(result, ++end, '+');
    $insert_2(result, ++end, '' + toString_15(fromDouble(exponent)));
  }
  this$static.toStringImage = result.string;
  return this$static.toStringImage;
}

function BigDecimal(smallValue, scale){
  this.scale = scale;
  this.bitLength = bitLength_0(smallValue);
  this.bitLength < 54?(this.smallValue = toDouble(smallValue)):(this.intVal = valueOf_10(smallValue));
}

function BigDecimal_0(val){
  $clinit_BigDecimal();
  $initFrom(this, val);
}

function bitLength(value_0){
  var negative, result;
  if (value_0 > -140737488355328 && value_0 < 140737488355328) {
    if (value_0 == 0) {
      return 0;
    }
    negative = value_0 < 0;
    negative && (value_0 = -value_0);
    result = round_int(floor_0(Math.log(value_0) / 0.6931471805599453));
    (!negative || value_0 != pow_0(2, result)) && ++result;
    return result;
  }
  return bitLength_0(fromDouble(value_0));
}

function bitLength_0(value_0){
  var high;
  lt(value_0, {l:0, m:0, h:0}) && (value_0 = {l:~value_0.l & $intern_2, m:~value_0.m & $intern_2, h:~value_0.h & $intern_3});
  return 64 - (high = toInt(shr(value_0, 32)) , high != 0?numberOfLeadingZeros_0(high):numberOfLeadingZeros_0(toInt(value_0)) + 32);
}

function parseUnscaled(str){
  var unscaledRegex = unscaledRegex_0;
  !unscaledRegex && (unscaledRegex = unscaledRegex_0 = /^[+-]?\d*$/i);
  if (unscaledRegex.test(str)) {
    return parseInt(str, 10);
  }
   else {
    return Number.NaN;
  }
}

defineClass(50, 64, {3:1, 5:1, 64:1, 50:1}, BigDecimal, BigDecimal_0);
_.compareTo = function compareTo_9(val){
  return $compareTo_8(this, dynamicCast(val, 50));
}
;
_.equals$ = function equals_23(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (instanceOf(x_0, 50)) {
    x1 = dynamicCast(x_0, 50);
    return x1.scale == this.scale && (this.bitLength < 54?x1.smallValue == this.smallValue:$equals_0(this.intVal, x1.intVal));
  }
  return false;
}
;
_.hashCode$ = function hashCode_25(){
  var longValue;
  if (this.hashCode != 0) {
    return this.hashCode;
  }
  if (this.bitLength < 54) {
    longValue = fromDouble(this.smallValue);
    this.hashCode = toInt(and(longValue, {l:$intern_2, m:$intern_2, h:$intern_3}));
    this.hashCode = 33 * this.hashCode + toInt(and(shr(longValue, 32), {l:$intern_2, m:$intern_2, h:$intern_3}));
    this.hashCode = 17 * this.hashCode + round_int(this.scale);
    return this.hashCode;
  }
  this.hashCode = 17 * $hashCode(this.intVal) + round_int(this.scale);
  return this.hashCode;
}
;
_.toString$ = function toString_34(){
  return $toString_1(this);
}
;
_.bitLength = 0;
_.hashCode = 0;
_.precision = 0;
_.scale = 0;
_.smallValue = 0;
var BI_SCALED_BY_ZERO, CH_ZEROS, DOUBLE_FIVE_POW, DOUBLE_FIVE_POW_BIT_LENGTH, DOUBLE_TEN_POW, DOUBLE_TEN_POW_BIT_LENGTH, ZERO_SCALED_BY, unscaledRegex_0;
var Ljava_math_BigDecimal_2_classLit = createForClass('java.math', 'BigDecimal', 50);
function $clinit_BigInteger(){
  $clinit_BigInteger = emptyMethod;
  var i;
  ONE_0 = new BigInteger_0(1, 1);
  TEN = new BigInteger_0(1, 10);
  ZERO_0 = new BigInteger_0(0, 0);
  MINUS_ONE = new BigInteger_0(-1, 1);
  SMALL_VALUES = initValues(getClassLiteralForArray(Ljava_math_BigInteger_2_classLit, 1), $intern_4, 14, 0, [ZERO_0, ONE_0, new BigInteger_0(1, 2), new BigInteger_0(1, 3), new BigInteger_0(1, 4), new BigInteger_0(1, 5), new BigInteger_0(1, 6), new BigInteger_0(1, 7), new BigInteger_0(1, 8), new BigInteger_0(1, 9), TEN]);
  TWO_POWS = initDim(Ljava_math_BigInteger_2_classLit, $intern_4, 14, 32, 0, 1);
  for (i = 0; i < TWO_POWS.length; i++) {
    TWO_POWS[i] = valueOf_10(shl({l:1, m:0, h:0}, i));
  }
}

function $$init_5(this$static){
}

function $compareTo_9(this$static, val){
  if (this$static.sign > val.sign) {
    return 1;
  }
  if (this$static.sign < val.sign) {
    return -1;
  }
  if (this$static.numberLength > val.numberLength) {
    return this$static.sign;
  }
  if (this$static.numberLength < val.numberLength) {
    return -val.sign;
  }
  return this$static.sign * compareArrays(this$static.digits, val.digits, this$static.numberLength);
}

function $cutOffLeadingZeroes(this$static){
  while (this$static.numberLength > 0 && this$static.digits[--this$static.numberLength] == 0)
  ;
  this$static.digits[this$static.numberLength++] == 0 && (this$static.sign = 0);
}

function $equals_0(this$static, x_0){
  var x1;
  if (this$static === x_0) {
    return true;
  }
  if (instanceOf(x_0, 14)) {
    x1 = dynamicCast(x_0, 14);
    return this$static.sign == x1.sign && this$static.numberLength == x1.numberLength && $equalsArrays(this$static, x1.digits);
  }
  return false;
}

function $equalsArrays(this$static, b){
  var i;
  for (i = this$static.numberLength - 1; i >= 0 && this$static.digits[i] == b[i]; i--)
  ;
  return i < 0;
}

function $getFirstNonzeroDigit(this$static){
  var i;
  if (this$static.firstNonzeroDigit == -2) {
    if (this$static.sign == 0) {
      i = -1;
    }
     else {
      for (i = 0; this$static.digits[i] == 0; i++)
      ;
    }
    this$static.firstNonzeroDigit = i;
  }
  return this$static.firstNonzeroDigit;
}

function $hashCode(this$static){
  var i;
  if (this$static.hashCode != 0) {
    return this$static.hashCode;
  }
  for (i = 0; i < this$static.digits.length; i++) {
    this$static.hashCode = this$static.hashCode * 33 + (this$static.digits[i] & -1);
  }
  this$static.hashCode = this$static.hashCode * this$static.sign;
  return this$static.hashCode;
}

function $multiply(this$static, val){
  if (val.sign == 0) {
    return ZERO_0;
  }
  if (this$static.sign == 0) {
    return ZERO_0;
  }
  return $clinit_Multiplication() , karatsuba(this$static, val);
}

function $pow(this$static, exp_0){
  var x_0;
  if (exp_0 < 0) {
    throw new ArithmeticException('Negative exponent');
  }
  if (exp_0 == 0) {
    return ONE_0;
  }
   else if (exp_0 == 1 || $equals_0(this$static, ONE_0) || $equals_0(this$static, ZERO_0)) {
    return this$static;
  }
  if (!$testBit(this$static, 0)) {
    x_0 = 1;
    while (!$testBit(this$static, x_0)) {
      ++x_0;
    }
    return $multiply(getPowerOfTwo(x_0 * exp_0), $pow($shiftRight(this$static, x_0), exp_0));
  }
  return pow_1(this$static, exp_0);
}

function $shiftLeft(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftLeft(this$static, n):shiftRight(this$static, -n);
}

function $shiftRight(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftRight(this$static, n):shiftLeft(this$static, -n);
}

function $testBit(this$static, n){
  var digit, firstNonZeroDigit, intCount;
  if (n == 0) {
    return (this$static.digits[0] & 1) != 0;
  }
  if (n < 0) {
    throw new ArithmeticException('Negative bit address');
  }
  intCount = n >> 5;
  if (intCount >= this$static.numberLength) {
    return this$static.sign < 0;
  }
  digit = this$static.digits[intCount];
  n = 1 << (n & 31);
  if (this$static.sign < 0) {
    firstNonZeroDigit = $getFirstNonzeroDigit(this$static);
    if (intCount < firstNonZeroDigit) {
      return false;
    }
     else 
      firstNonZeroDigit == intCount?(digit = -digit):(digit = ~digit);
  }
  return (digit & n) != 0;
}

function BigInteger(sign, val){
  this.sign = sign;
  if (val < $intern_53) {
    this.numberLength = 1;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [~~val]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [~~(val % $intern_53), ~~(val / $intern_53)]);
  }
}

function BigInteger_0(sign, value_0){
  $clinit_BigInteger();
  $$init_5(this);
  this.sign = sign;
  this.numberLength = 1;
  this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [value_0]);
}

function BigInteger_1(sign, numberLength, digits){
  $clinit_BigInteger();
  $$init_5(this);
  this.sign = sign;
  this.numberLength = numberLength;
  this.digits = digits;
}

function BigInteger_2(sign, val){
  $$init_5(this);
  this.sign = sign;
  if (eq(and(val, {l:0, m:4193280, h:$intern_3}), {l:0, m:0, h:0})) {
    this.numberLength = 1;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [toInt(val)]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [toInt(val), toInt(shr(val, 32))]);
  }
}

function BigInteger_3(digits){
  $clinit_BigInteger();
  $$init_5(this);
  if (digits.length == 0) {
    this.sign = 0;
    this.numberLength = 1;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [0]);
  }
   else {
    this.sign = 1;
    this.numberLength = digits.length;
    this.digits = digits;
    $cutOffLeadingZeroes(this);
  }
}

function BigInteger_4(val){
  $clinit_BigInteger();
  BigInteger_5.call(this, val);
}

function BigInteger_5(val){
  checkNotNull(val);
  if (!val.length) {
    throw new NumberFormatException('Zero length BigInteger');
  }
  setFromString(this, val);
}

function getPowerOfTwo(exp_0){
  var bitN, intCount, resDigits;
  if (exp_0 < TWO_POWS.length) {
    return TWO_POWS[exp_0];
  }
  intCount = exp_0 >> 5;
  bitN = exp_0 & 31;
  resDigits = initDim(I_classLit, $intern_6, 0, intCount + 1, 7, 1);
  resDigits[intCount] = 1 << bitN;
  return new BigInteger_1(1, intCount + 1, resDigits);
}

function setFromString(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = ($clinit_Conversion() , digitFitInInt)[10];
  bigRadixDigitsLength = ~~(stringLength / charsPerInt);
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = initDim(I_classLit, $intern_6, 0, bigRadixDigitsLength, 7, 1);
  bigRadix = bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrEnd + charsPerInt) {
    bigRadixDigit = __parseAndValidateInt(val.substr(substrStart, substrEnd - substrStart));
    newDigit = ($clinit_Multiplication() , multiplyByInt(digits, digits, digitIndex, bigRadix));
    newDigit += inplaceAdd(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  bi.sign = sign;
  bi.numberLength = digitIndex;
  bi.digits = digits;
  $cutOffLeadingZeroes(bi);
}

function valueOf_9(val){
  $clinit_BigInteger();
  if (val < 0) {
    if (val != -1) {
      return new BigInteger(-1, -val);
    }
    return MINUS_ONE;
  }
   else 
    return val <= 10?SMALL_VALUES[round_int(val)]:new BigInteger(1, val);
}

function valueOf_10(val){
  $clinit_BigInteger();
  if (lt(val, {l:0, m:0, h:0})) {
    if (neq(val, {l:$intern_2, m:$intern_2, h:$intern_3})) {
      return new BigInteger_2(-1, neg(val));
    }
    return MINUS_ONE;
  }
   else 
    return lte(val, {l:10, m:0, h:0})?SMALL_VALUES[toInt(val)]:new BigInteger_2(1, val);
}

defineClass(14, 64, {3:1, 5:1, 64:1, 14:1}, BigInteger, BigInteger_0, BigInteger_1, BigInteger_2, BigInteger_3, BigInteger_4);
_.compareTo = function compareTo_10(val){
  return $compareTo_9(this, dynamicCast(val, 14));
}
;
_.equals$ = function equals_24(x_0){
  return $equals_0(this, x_0);
}
;
_.hashCode$ = function hashCode_26(){
  return $hashCode(this);
}
;
_.toString$ = function toString_35(){
  return toDecimalScaledString_0(this, 0);
}
;
_.firstNonzeroDigit = -2;
_.hashCode = 0;
_.numberLength = 0;
_.sign = 0;
var MINUS_ONE, ONE_0, SMALL_VALUES, TEN, TWO_POWS, ZERO_0;
var Ljava_math_BigInteger_2_classLit = createForClass('java.math', 'BigInteger', 14);
function bitLength_1(val){
  var bLength, highDigit, i;
  if (val.sign == 0) {
    return 0;
  }
  bLength = val.numberLength << 5;
  highDigit = val.digits[val.numberLength - 1];
  if (val.sign < 0) {
    i = $getFirstNonzeroDigit(val);
    if (i == val.numberLength - 1) {
      --highDigit;
      highDigit = ~~highDigit;
    }
  }
  bLength -= numberOfLeadingZeros_0(highDigit);
  return bLength;
}

function shiftLeft(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.numberLength + intCount + (count == 0?0:1);
  resDigits = initDim(I_classLit, $intern_6, 0, resLength, 7, 1);
  shiftLeft_0(resDigits, source.digits, intCount, count);
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftLeft_0(result, source, intCount, count){
  var i, i0, rightShiftCount;
  if (count == 0) {
    arraycopy(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i0 = result.length - 1; i0 > intCount; i0--) {
      result[i0] |= source[i0 - intCount - 1] >>> rightShiftCount;
      result[i0 - 1] = source[i0 - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; i++) {
    result[i] = 0;
  }
}

function shiftLeftOneBit(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; i++) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function shiftRight(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.numberLength) {
    return source.sign < 0?($clinit_BigInteger() , MINUS_ONE):($clinit_BigInteger() , ZERO_0);
  }
  resLength = source.numberLength - intCount;
  resDigits = initDim(I_classLit, $intern_6, 0, resLength + 1, 7, 1);
  shiftRight_0(resDigits, resLength, source.digits, intCount, count);
  if (source.sign < 0) {
    for (i = 0; i < intCount && source.digits[i] == 0; i++)
    ;
    if (i < intCount || count > 0 && source.digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; i++) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftRight_0(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; i++) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    arraycopy(source, intCount, result, 0, resultLen);
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; i++) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function $clinit_Conversion(){
  $clinit_Conversion = emptyMethod;
  bigRadices = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [$intern_33, 1162261467, $intern_54, 1220703125, 362797056, 1977326743, $intern_54, 387420489, $intern_32, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, $intern_54, 1291467969, 1544804416, 1838265625, 60466176]);
  digitFitInInt = initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function divideLongByBillion(a){
  var aPos, quot, rem;
  if (gte_0(a, {l:0, m:0, h:0})) {
    quot = div(a, {l:1755648, m:238, h:0});
    rem = mod(a, {l:1755648, m:238, h:0});
  }
   else {
    aPos = shru(a, 1);
    quot = div(aPos, {l:877824, m:119, h:0});
    rem = mod(aPos, {l:877824, m:119, h:0});
    rem = add_1(shl(rem, 1), and(a, {l:1, m:0, h:0}));
  }
  return or(shl(rem, 32), and(quot, {l:$intern_2, m:1023, h:0}));
}

function toDecimalScaledString(value_0, scale){
  $clinit_Conversion();
  var currentChar, exponent, insertPoint, j, j0, negNumber, prev, result, result1, result10, startPoint, v;
  negNumber = lt(value_0, {l:0, m:0, h:0});
  negNumber && (value_0 = neg(value_0));
  if (eq(value_0, {l:0, m:0, h:0})) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder;
        scale < 0?(result10.string += '0E+' , result10):(result10.string += '0E' , result10);
        result10.string += scale == $intern_33?'2147483648':'' + -scale;
        return result10.string;
    }
  }
  result = initDim(C_classLit, $intern_6, 0, 19, 7, 1);
  currentChar = 18;
  v = value_0;
  do {
    prev = v;
    v = div(v, {l:10, m:0, h:0});
    result[--currentChar] = toInt(add_1({l:48, m:0, h:0}, sub_0(prev, mul(v, {l:10, m:0, h:0})))) & $intern_17;
  }
   while (neq(v, {l:0, m:0, h:0}));
  exponent = sub_0(sub_0(sub_0({l:18, m:0, h:0}, fromInt(currentChar)), fromInt(scale)), {l:1, m:0, h:0});
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_8(result, currentChar, 18 - currentChar);
  }
  if (scale > 0 && gte_0(exponent, {l:4194298, m:$intern_2, h:$intern_3})) {
    if (gte_0(exponent, {l:0, m:0, h:0})) {
      insertPoint = currentChar + toInt(exponent);
      for (j0 = 17; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_8(result, currentChar, 18 - currentChar + 1);
    }
    for (j = 2; lt(fromInt(j), add_1(neg(exponent), {l:1, m:0, h:0})); j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_8(result, currentChar, 18 - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_0;
  negNumber && (result1.string += '-' , result1);
  if (18 - startPoint >= 1) {
    $append(result1, result[currentChar]);
    result1.string += '.';
    result1.string += valueOf_8(result, currentChar + 1, 18 - currentChar - 1);
  }
   else {
    result1.string += valueOf_8(result, currentChar, 18 - currentChar);
  }
  result1.string += 'E';
  gt(exponent, {l:0, m:0, h:0}) && (result1.string += '+' , result1);
  result1.string += '' + toString_15(exponent);
  return result1.string;
}

function toDecimalScaledString_0(val, scale){
  $clinit_Conversion();
  var currentChar, delta, digits, exponent, highDigit, i, i1, insertPoint, j, j0, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result10, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.sign;
  numberLength = val.numberLength;
  digits = val.digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder;
        scale < 0?(result10.string += '0E+' , result10):(result10.string += '0E' , result10);
        result10.string += -scale;
        return result10.string;
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = initDim(C_classLit, $intern_6, 0, resLengthInChars + 1, 7, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = and(fromInt(highDigit), {l:$intern_2, m:1023, h:0});
      do {
        prev = v;
        v = div(v, {l:10, m:0, h:0});
        result[--currentChar] = 48 + toInt(sub_0(prev, mul(v, {l:10, m:0, h:0}))) & $intern_17;
      }
       while (neq(v, {l:0, m:0, h:0}));
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = ~~(v / 10);
        result[--currentChar] = 48 + (prev - v * 10) & $intern_17;
      }
       while (v != 0);
    }
  }
   else {
    temp = initDim(I_classLit, $intern_6, 0, numberLength, 7, 1);
    tempLen = numberLength;
    arraycopy(digits, 0, temp, 0, numberLength);
    BIG_LOOP: while (true) {
      result11 = {l:0, m:0, h:0};
      for (i1 = tempLen - 1; i1 >= 0; i1--) {
        temp1 = add_1(shl(result11, 32), and(fromInt(temp[i1]), {l:$intern_2, m:1023, h:0}));
        res = divideLongByBillion(temp1);
        temp[i1] = toInt(res);
        result11 = fromInt(toInt(shr(res, 32)));
      }
      resDigit = toInt(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & $intern_17;
      }
       while ((resDigit = ~~(resDigit / 10)) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; i++) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; j--) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_8(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j0 = resLengthInChars - 1; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_8(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_8(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_0;
  negNumber && (result1.string += '-' , result1);
  if (resLengthInChars - startPoint >= 1) {
    $append(result1, result[currentChar]);
    result1.string += '.';
    result1.string += valueOf_8(result, currentChar + 1, resLengthInChars - currentChar - 1);
  }
   else {
    result1.string += valueOf_8(result, currentChar, resLengthInChars - currentChar);
  }
  result1.string += 'E';
  exponent > 0 && (result1.string += '+' , result1);
  result1.string += '' + exponent;
  return result1.string;
}

var bigRadices, digitFitInInt;
function add_6(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, res0, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), {l:$intern_2, m:1023, h:0});
    b = and(fromInt(op2.digits[0]), {l:$intern_2, m:1023, h:0});
    if (op1Sign == op2Sign) {
      res0 = add_1(a, b);
      valueLo = toInt(res0);
      valueHi = toInt(shru(res0, 32));
      return valueHi == 0?new BigInteger_0(op1Sign, valueLo):new BigInteger_1(op1Sign, 2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [valueLo, valueHi]));
    }
    return valueOf_10(op1Sign < 0?sub_0(b, a):sub_0(a, b));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?add_7(op1.digits, op1Len, op2.digits, op2Len):add_7(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
    if (cmp == 0) {
      return $clinit_BigInteger() , ZERO_0;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = subtract_0(op2.digits, op2Len, op1.digits, op1Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function add_7(a, aSize, b, bSize){
  var res;
  res = initDim(I_classLit, $intern_6, 0, aSize + 1, 7, 1);
  add_8(res, a, aSize, b, bSize);
  return res;
}

function add_8(res, a, aSize, b, bSize){
  var carry, i;
  carry = add_1(and(fromInt(a[0]), {l:$intern_2, m:1023, h:0}), and(fromInt(b[0]), {l:$intern_2, m:1023, h:0}));
  res[0] = toInt(carry);
  carry = shr(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = add_1(carry, add_1(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_2, m:1023, h:0})));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = add_1(carry, and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = add_1(carry, add_1(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_2, m:1023, h:0})));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = add_1(carry, and(fromInt(b[i]), {l:$intern_2, m:1023, h:0}));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
  neq(carry, {l:0, m:0, h:0}) && (res[i] = toInt(carry));
}

function compareArrays(a, b, size_0){
  var i;
  for (i = size_0 - 1; i >= 0 && a[i] == b[i]; i--)
  ;
  return i < 0?0:lt(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_2, m:1023, h:0}))?-1:1;
}

function inplaceAdd(a, aSize, addend){
  var carry, i;
  carry = and(fromInt(addend), {l:$intern_2, m:1023, h:0});
  for (i = 0; neq(carry, {l:0, m:0, h:0}) && i < aSize; i++) {
    carry = add_1(carry, and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}));
    a[i] = toInt(carry);
    carry = shr(carry, 32);
  }
  return toInt(carry);
}

function subtract(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.sign == 0?op2:new BigInteger_1(-op2.sign, op2.numberLength, op2.digits);
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), {l:$intern_2, m:1023, h:0});
    b = and(fromInt(op2.digits[0]), {l:$intern_2, m:1023, h:0});
    op1Sign < 0 && (a = neg(a));
    op2Sign < 0 && (b = neg(b));
    return valueOf_10(sub_0(a, b));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?subtract_0(op2.digits, op2Len, op1.digits, op1Len):add_7(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return $clinit_BigInteger() , ZERO_0;
      }
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resDigits = add_7(op1.digits, op1Len, op2.digits, op2Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function subtract_0(a, aSize, b, bSize){
  var res;
  res = initDim(I_classLit, $intern_6, 0, aSize, 7, 1);
  subtract_1(res, a, aSize, b, bSize);
  return res;
}

function subtract_1(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = {l:0, m:0, h:0};
  for (i = 0; i < bSize; i++) {
    borrow = add_1(borrow, sub_0(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_2, m:1023, h:0})));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = add_1(borrow, and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
}

function $clinit_Multiplication(){
  $clinit_Multiplication = emptyMethod;
  var fivePow, i;
  bigFivePows = initDim(Ljava_math_BigInteger_2_classLit, $intern_4, 14, 32, 0, 1);
  bigTenPows = initDim(Ljava_math_BigInteger_2_classLit, $intern_4, 14, 32, 0, 1);
  fivePow = {l:1, m:0, h:0};
  for (i = 0; i <= 18; i++) {
    bigFivePows[i] = valueOf_10(fivePow);
    bigTenPows[i] = valueOf_10(shl(fivePow, i));
    fivePow = mul(fivePow, {l:5, m:0, h:0});
  }
  for (; i < bigTenPows.length; i++) {
    bigFivePows[i] = $multiply(bigFivePows[i - 1], bigFivePows[1]);
    bigTenPows[i] = $multiply(bigTenPows[i - 1], ($clinit_BigInteger() , TEN));
  }
}

function karatsuba(op1, op2){
  $clinit_Multiplication();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.numberLength > op1.numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.numberLength < 63) {
    return multiplyPAP(op1, op2);
  }
  ndiv2 = (op1.numberLength & -2) << 4;
  upperOp1 = $shiftRight(op1, ndiv2);
  upperOp2 = $shiftRight(op2, ndiv2);
  lowerOp1 = subtract(op1, $shiftLeft(upperOp1, ndiv2));
  lowerOp2 = subtract(op2, $shiftLeft(upperOp2, ndiv2));
  upper = karatsuba(upperOp1, upperOp2);
  lower = karatsuba(lowerOp1, lowerOp2);
  middle = karatsuba(subtract(upperOp1, lowerOp1), subtract(lowerOp2, upperOp2));
  middle = add_6(add_6(middle, upper), lower);
  middle = $shiftLeft(middle, ndiv2);
  upper = $shiftLeft(upper, ndiv2 << 1);
  return add_6(add_6(upper, middle), lower);
}

function multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = multiplyByInt(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = multiplyByInt(resDigits, aDigits, aLen, bDigits[0])):multPAP(aDigits, bDigits, resDigits, aLen, bLen);
}

function multPAP(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (maskUndefined(a) === maskUndefined(b) && aLen == bLen) {
    square(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; i++) {
    carry = {l:0, m:0, h:0};
    aI = a[i];
    for (j = 0; j < bLen; j++) {
      carry = add_1(add_1(mul(and(fromInt(aI), {l:$intern_2, m:1023, h:0}), and(fromInt(b[j]), {l:$intern_2, m:1023, h:0})), and(fromInt(t[i + j]), {l:$intern_2, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_2, m:1023, h:0}));
      t[i + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    t[i + bLen] = toInt(carry);
  }
}

function multiplyByInt(res, a, aSize, factor){
  $clinit_Multiplication();
  var carry, i;
  carry = {l:0, m:0, h:0};
  for (i = 0; i < aSize; i++) {
    carry = add_1(mul(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(factor), {l:$intern_2, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_2, m:1023, h:0}));
    res[i] = toInt(carry);
    carry = shru(carry, 32);
  }
  return toInt(carry);
}

function multiplyPAP(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.numberLength;
  bLen = b.numberLength;
  resLength = aLen + bLen;
  resSign = a.sign != b.sign?-1:1;
  if (resLength == 2) {
    val = mul(and(fromInt(a.digits[0]), {l:$intern_2, m:1023, h:0}), and(fromInt(b.digits[0]), {l:$intern_2, m:1023, h:0}));
    valueLo = toInt(val);
    valueHi = toInt(shru(val, 32));
    return valueHi == 0?new BigInteger_0(resSign, valueLo):new BigInteger_1(resSign, 2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_6, 0, 7, [valueLo, valueHi]));
  }
  aDigits = a.digits;
  bDigits = b.digits;
  resDigits = initDim(I_classLit, $intern_6, 0, resLength, 7, 1);
  multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits);
  result = new BigInteger_1(resSign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function pow_1(base, exponent){
  $clinit_Multiplication();
  var acc, res;
  res = ($clinit_BigInteger() , ONE_0);
  acc = base;
  for (; exponent > 1; exponent >>= 1) {
    (exponent & 1) != 0 && (res = $multiply(res, acc));
    acc.numberLength == 1?(acc = $multiply(acc, acc)):(acc = new BigInteger_3(square(acc.digits, acc.numberLength, initDim(I_classLit, $intern_6, 0, acc.numberLength << 1, 7, 1))));
  }
  res = $multiply(res, acc);
  return res;
}

function powerOf10(exp_0){
  $clinit_Multiplication();
  var intExp, longExp, powerOfFive, res;
  intExp = round_int(exp_0);
  if (exp_0 < bigTenPows.length) {
    return bigTenPows[intExp];
  }
   else if (exp_0 <= 50) {
    return $pow(($clinit_BigInteger() , TEN), intExp);
  }
   else if (exp_0 <= 1000) {
    return $shiftLeft($pow(bigFivePows[1], intExp), intExp);
  }
  if (exp_0 > 1000000) {
    throw new ArithmeticException('power of ten too big');
  }
  if (exp_0 <= $intern_0) {
    return $shiftLeft($pow(bigFivePows[1], intExp), intExp);
  }
  powerOfFive = $pow(bigFivePows[1], $intern_0);
  res = powerOfFive;
  longExp = fromDouble(exp_0 - $intern_0);
  intExp = round_int(exp_0 % $intern_0);
  while (gt(longExp, {l:$intern_2, m:511, h:0})) {
    res = $multiply(res, powerOfFive);
    longExp = sub_0(longExp, {l:$intern_2, m:511, h:0});
  }
  res = $multiply(res, $pow(bigFivePows[1], intExp));
  res = $shiftLeft(res, $intern_0);
  longExp = fromDouble(exp_0 - $intern_0);
  while (gt(longExp, {l:$intern_2, m:511, h:0})) {
    res = $shiftLeft(res, $intern_0);
    longExp = sub_0(longExp, {l:$intern_2, m:511, h:0});
  }
  res = $shiftLeft(res, intExp);
  return res;
}

function square(a, aLen, res){
  var carry, i, i0, index_0, j;
  for (i0 = 0; i0 < aLen; i0++) {
    carry = {l:0, m:0, h:0};
    for (j = i0 + 1; j < aLen; j++) {
      carry = add_1(add_1(mul(and(fromInt(a[i0]), {l:$intern_2, m:1023, h:0}), and(fromInt(a[j]), {l:$intern_2, m:1023, h:0})), and(fromInt(res[i0 + j]), {l:$intern_2, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_2, m:1023, h:0}));
      res[i0 + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    res[i0 + aLen] = toInt(carry);
  }
  shiftLeftOneBit(res, res, aLen << 1);
  carry = {l:0, m:0, h:0};
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = add_1(add_1(mul(and(fromInt(a[i]), {l:$intern_2, m:1023, h:0}), and(fromInt(a[i]), {l:$intern_2, m:1023, h:0})), and(fromInt(res[index_0]), {l:$intern_2, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_2, m:1023, h:0}));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
    ++index_0;
    carry = add_1(carry, and(fromInt(res[index_0]), {l:$intern_2, m:1023, h:0}));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
  }
  return res;
}

var bigFivePows, bigTenPows;
function $containsEntry(this$static, entry){
  var key_0, ourValue, value_0;
  key_0 = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_2(key_0);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key_0)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key_0, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 24);
    k = entry.getKey();
    if (maskUndefined(key_0) === maskUndefined(k) || key_0 != null && equals_Ljava_lang_Object__Z__devirtual$(key_0, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_0();
      }
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(526, 1, $intern_47);
_.containsKey = function containsKey(key_0){
  return !!$implFindEntry(this, key_0, false);
}
;
_.equals$ = function equals_25(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 55)) {
    return false;
  }
  otherMap = dynamicCast(obj, 55);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 24);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_9(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, false));
}
;
_.hashCode$ = function hashCode_27(){
  return hashCode_31(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_3(){
  return this.size_1() == 0;
}
;
_.put = function put_1(key_0, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_1 = function remove_24(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, true));
}
;
_.size_1 = function size_9(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_36(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 24);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_2(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_2(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 526);
function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate_0.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate_0.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(206, 526, $intern_47);
_.clear_0 = function clear_0(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key_0){
  return isJavaString(key_0)?key_0 == null?!!$getEntry(this.hashCodeMap, null):!(this.stringMap.get_4(key_0) === undefined):!!$getEntry(this.hashCodeMap, key_0);
}
;
_.containsValue = function containsValue(value_0){
  return this.stringMap.containsValue(value_0) || this.hashCodeMap.containsValue(value_0);
}
;
_.entrySet_0 = function entrySet_1(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_10(key_0){
  return isJavaString(key_0)?key_0 == null?getEntryValueOrNull($getEntry(this.hashCodeMap, null)):this.stringMap.get_4(key_0):getEntryValueOrNull($getEntry(this.hashCodeMap, key_0));
}
;
_.put = function put_2(key_0, value_0){
  return isJavaString(key_0)?key_0 == null?$put_1(this.hashCodeMap, null, value_0):this.stringMap.put_0(key_0, value_0):$put_1(this.hashCodeMap, key_0, value_0);
}
;
_.remove_1 = function remove_25(key_0){
  return isJavaString(key_0)?key_0 == null?$remove_11(this.hashCodeMap, null):this.stringMap.remove_4(key_0):$remove_11(this.hashCodeMap, key_0);
}
;
_.size_1 = function size_10(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 206);
function $contains(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 24));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(207, 528, $intern_48, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_10(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_2 = function remove_26(entry){
  var key_0;
  if ($contains(this, entry)) {
    key_0 = dynamicCast(entry, 24).getKey();
    this.this$01.remove_1(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_11(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 207);
function $hasNext_1(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(208, 1, $intern_42, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_7(){
  return $hasNext_1(this);
}
;
_.next_0 = function next_8(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext_1(this)) , this.last = this.current , dynamicCast(this.current.next_0(), 24);
}
;
_.remove_0 = function remove_27(){
  checkState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_0();
  this.last = null;
  recordLastKnownStructure(this.this$01, this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 208);
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_3(this$static.last = this$static.i++);
}

function $remove_7(this$static){
  checkState(this$static.last != -1);
  this$static.this$01_0.remove_3(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(45, 1, $intern_42, AbstractList$IteratorImpl);
_.hasNext = function hasNext_8(){
  return $hasNext_2(this);
}
;
_.next_0 = function next_9(){
  return $next_3(this);
}
;
_.remove_0 = function remove_28(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 45);
function $set_1(this$static, o){
  checkState(this$static.last != -1);
  this$static.this$01.set_0(this$static.last, o);
}

function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(134, 45, $intern_51, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious_0(){
  return this.i > 0;
}
;
_.previous = function previous_1(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_3(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 134);
function $iterator(this$static){
  var outerIter;
  outerIter = this$static.this$01.entrySet_0().iterator();
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(116, 528, $intern_48, AbstractMap$1);
_.contains_0 = function contains_1(key_0){
  return this.this$01.containsKey(key_0);
}
;
_.iterator = function iterator_11(){
  return $iterator(this);
}
;
_.remove_2 = function remove_29(key_0){
  if (this.this$01.containsKey(key_0)) {
    this.this$01.remove_1(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_12(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 116);
function $next_4(this$static){
  var entry;
  entry = dynamicCast(this$static.val$outerIter2.next_0(), 24);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(210, 1, $intern_42, AbstractMap$1$1);
_.hasNext = function hasNext_9(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_10(){
  return $next_4(this);
}
;
_.remove_0 = function remove_30(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 210);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(157, 527, {29:1}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return this.this$01.containsValue(value_0);
}
;
_.iterator = function iterator_12(){
  var outerIter;
  outerIter = this.this$01.entrySet_0().iterator();
  return new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_13(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 157);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(211, 1, $intern_42, AbstractMap$2$1);
_.hasNext = function hasNext_10(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_11(){
  var entry;
  entry = dynamicCast(this.val$outerIter2.next_0(), 24);
  return entry.getValue();
}
;
_.remove_0 = function remove_31(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 211);
function $setValue_0(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(209, 1, $intern_49);
_.equals$ = function equals_26(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return equals_34(this.key, entry.getKey()) && equals_34(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_28(){
  return hashCode_38(this.key) ^ hashCode_38(this.value_0);
}
;
_.setValue = function setValue_1(value_0){
  return $setValue_0(this, value_0);
}
;
_.toString$ = function toString_37(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 209);
function AbstractMap$SimpleEntry(key_0, value_0){
  this.key = key_0;
  this.value_0 = value_0;
}

defineClass(130, 209, $intern_49, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 130);
defineClass(534, 1, $intern_49);
_.equals$ = function equals_27(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return equals_34(this.getKey(), entry.getKey()) && equals_34(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_29(){
  return hashCode_38(this.getKey()) ^ hashCode_38(this.getValue());
}
;
_.toString$ = function toString_38(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 534);
function $$init_6(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function $add_10(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_11(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = cloneSubrange(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_3(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_34(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_8(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_3(i);
  return true;
}

function $set_2(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray_0(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_6(this);
}

function ArrayList_0(initialCapacity){
  $$init_6(this);
  checkCriticalArgument(initialCapacity >= 0, 'Initial capacity must not be negative');
}

function ArrayList_1(c){
  $$init_6(this);
  $insertAt(this, 0, $toArray(c, initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, c.this$01.size_1(), 3, 1)));
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(28, 533, $intern_55, ArrayList, ArrayList_0, ArrayList_1);
_.add_0 = function add_9(index_0, o){
  $add_10(this, index_0, o);
}
;
_.add_1 = function add_10(o){
  return $add_11(this, o);
}
;
_.contains_0 = function contains_3(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_3 = function get_11(index_0){
  return $get_3(this, index_0);
}
;
_.isEmpty = function isEmpty_4(){
  return this.array.length == 0;
}
;
_.remove_3 = function remove_32(index_0){
  return $remove_8(this, index_0);
}
;
_.remove_2 = function remove_33(o){
  return $remove_9(this, o);
}
;
_.set_0 = function set_5(index_0, o){
  return $set_2(this, index_0, o);
}
;
_.size_1 = function size_14(){
  return this.array.length;
}
;
_.toArray = function toArray_2(){
  return $toArray_0(this);
}
;
_.toArray_0 = function toArray_3(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function hashCode_30(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy;
  !comp && (comp = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument_0(length_0 >= 0, '%s > %s', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf_3(fromIndex), valueOf_3(toIndex)])) , length_0) , copy = createFrom(x_0, newLength) , arraycopy(x_0, fromIndex, copy, 0, min_0(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_31(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_32(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function replaceContents(target, x_0){
  var i, size_0;
  size_0 = target.size_1();
  for (i = 0; i < size_0; i++) {
    target.set_0(i, x_0[i]);
  }
}

function sort_0(target, c){
  $clinit_Collections();
  var x_0;
  x_0 = target.toArray();
  mergeSort(x_0, 0, x_0.length, c);
  replaceContents(target, x_0);
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 100)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(235, 533, $intern_55, Collections$EmptyList);
_.contains_0 = function contains_4(object){
  return false;
}
;
_.get_3 = function get_12(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_13(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_4;
}
;
_.listIterator = function listIterator_3(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_4;
}
;
_.size_1 = function size_15(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 235);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_4 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(236, 1, $intern_51, Collections$EmptyListIterator);
_.hasNext = function hasNext_11(){
  return false;
}
;
_.hasPrevious = function hasPrevious_1(){
  return false;
}
;
_.next_0 = function next_12(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_2(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_34(){
  throw new IllegalStateException;
}
;
var INSTANCE_4;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 236);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(161, 1, {29:1});
_.add_1 = function add_11(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_14(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove_2 = function remove_35(o){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_16(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_4(){
  return this.coll.toArray();
}
;
_.toString$ = function toString_39(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 161);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(133, 1, $intern_42, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_12(){
  return this.it.hasNext();
}
;
_.next_0 = function next_13(){
  return this.it.next_0();
}
;
_.remove_0 = function remove_36(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 133);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(162, 161, $intern_50, Collections$UnmodifiableList);
_.equals$ = function equals_28(o){
  return this.list.equals$(o);
}
;
_.get_3 = function get_13(index_0){
  return this.list.get_3(index_0);
}
;
_.hashCode$ = function hashCode_33(){
  return this.list.hashCode$();
}
;
_.isEmpty = function isEmpty_5(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_4(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_5(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
_.set_0 = function set_6(index_0, element){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 162);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(167, 133, $intern_51, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_2(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_3(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 167);
function $get_4(this$static, key_0){
  return this$static.map_0.get_2(key_0);
}

function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(163, 1, $intern_47, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_2(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_29(o){
  return this.map_0.equals$(o);
}
;
_.get_2 = function get_14(key_0){
  return $get_4(this, key_0);
}
;
_.hashCode$ = function hashCode_34(){
  return this.map_0.hashCode$();
}
;
_.isEmpty = function isEmpty_6(){
  return this.map_0.isEmpty();
}
;
_.put = function put_3(key_0, value_0){
  throw new UnsupportedOperationException;
}
;
_.remove_1 = function remove_37(key_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_17(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_40(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 163);
function Collections$UnmodifiableSet(set_0){
  Collections$UnmodifiableCollection.call(this, set_0);
}

defineClass(164, 161, $intern_48, Collections$UnmodifiableSet);
_.equals$ = function equals_30(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_35(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 164);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    setCheck(array, i, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(array[i], 24)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableSet.call(this, s);
}

defineClass(237, 164, $intern_48, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_15(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray = function toArray_5(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 237);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(238, 1, $intern_42, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_13(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_14(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next_0(), 24));
}
;
_.remove_0 = function remove_38(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 238);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(165, 1, $intern_49, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_31(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_2(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_2(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_36(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_2(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_41(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 165);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(166, 162, {29:1, 19:1, 100:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 166);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function Comparators$1(){
}

defineClass(437, 1, {}, Comparators$1);
_.compare = function compare_4(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(dynamicCast(o1, 5), o2);
}
;
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 437);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(404, 10, $intern_15, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 404);
function $compareTo_10(this$static, other){
  return compare_3(fromDouble(this$static.jsdate.getTime()), fromDouble(other.jsdate.getTime()));
}

function $toString_3(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(46, 1, {3:1, 5:1, 46:1}, Date_0);
_.compareTo = function compareTo_11(other){
  return $compareTo_10(this, dynamicCast(other, 46));
}
;
_.equals$ = function equals_32(obj){
  return instanceOf(obj, 46) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 46).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_37(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_42(){
  return $toString_3(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 46);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function EmptyStackException(){
  RuntimeException.call(this);
}

defineClass(497, 10, $intern_15, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 497);
function HashMap(){
  $reset(this);
}

defineClass(33, 206, {3:1, 55:1}, HashMap);
_.equals = function equals_33(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key_0){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key_0);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 33);
function $add_12(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_10(this$static, o){
  return this$static.map_0.remove_1(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(93, 528, $intern_56, HashSet);
_.contains_0 = function contains_5(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_7(){
  return this.map_0.size_1() == 0;
}
;
_.iterator = function iterator_16(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_2 = function remove_39(o){
  return $remove_10(this, o);
}
;
_.size_1 = function size_18(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_43(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 93);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key_0){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key_0, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key_0, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_11(this$static, key_0){
  var chain, entry, hashCode, i;
  hashCode = key_0 == null?'0':'' + this$static.host.getHashCode(key_0);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key_0, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(169, 1, {}, InternalJsHashCodeMap);
_.containsValue = function containsValue_0(value_0){
  var entry, entry$array, entry$index, entry$max, hashCode, hashCode$array, hashCode$index, hashCode$max;
  for (hashCode$array = $keys(this) , hashCode$index = 0 , hashCode$max = hashCode$array.length; hashCode$index < hashCode$max; ++hashCode$index) {
    hashCode = hashCode$array[hashCode$index];
    for (entry$array = this.backingMap[hashCode] , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
      entry = entry$array[entry$index];
      if (this.host.equals(value_0, entry.getValue())) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 169);
function $hasNext_3(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 24, 0, 0, 1);
}

defineClass(256, 1, $intern_42, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_14(){
  return $hasNext_3(this);
}
;
_.next_0 = function next_15(){
  return checkCriticalElement($hasNext_3(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_40(){
  checkState(!!this.lastEntry);
  $remove_11(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 256);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(254, 169, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.containsValue = function containsValue_1(value_0){
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return this.host.equals(value1, value2);
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 254);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(255, 28, $intern_55, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_3 = function remove_41(index_0){
  var removed;
  return removed = dynamicCast($remove_8(this, index_0), 24) , $remove_11(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 255);
function InternalJsMapFactory(){
}

defineClass(251, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 251);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate_0 = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate_0;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(253, 251, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 253);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(252, 251, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 252);
function $containsValue(this$static, value_0){
  var map_0 = this$static.backingMap;
  for (var key_0 in map_0) {
    if (this$static.equalsBridge_0(value_0, map_0[key_0])) {
      return true;
    }
  }
  return false;
}

function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key_0, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key_0];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_3(this$static, key_0, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_12(this$static, key_0){
  var value_0;
  value_0 = this$static.backingMap[key_0];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key_0];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_3(this$static, key_0, value_0){
  this$static.backingMap[key_0] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(135, 1, {}, InternalJsStringMap);
_.containsValue = function containsValue_2(value_0){
  return $containsValue(this, value_0);
}
;
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.equalsBridge_0 = function equalsBridge_0(value1, value2){
  return this.host.equals(value1, value2);
}
;
_.get_4 = function get_15(key_0){
  return this.backingMap[key_0];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key_0){
  return new InternalJsStringMap$2(this, key_0);
}
;
_.put_0 = function put_4(key_0, value_0){
  return $put_2(this, key_0, value_0);
}
;
_.remove_4 = function remove_42(key_0){
  return $remove_12(this, key_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 135);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(242, 1, $intern_42, InternalJsStringMap$1);
_.hasNext = function hasNext_15(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_16(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_43(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 242);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(168, 534, $intern_49, InternalJsStringMap$2);
_.getKey = function getKey_3(){
  return this.val$key2;
}
;
_.getValue = function getValue_3(){
  return this.this$01.get_4(this.val$key2);
}
;
_.setValue = function setValue_3(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 168);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(239, 135, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.containsValue = function containsValue_3(value_0){
  var map_0 = this.backingMap;
  for (var key_0 in map_0) {
    if (key_0.charCodeAt(0) == 58) {
      var entryValue = map_0[key_0];
      if (this.equalsBridge_0(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key_0 in this.backingMap) {
    if (key_0.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key_0.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_4 = function get_16(key_0){
  return this.backingMap[':' + key_0];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_5(key_0, value_0){
  return $put_2(this, ':' + key_0, value_0);
}
;
_.remove_4 = function remove_44(key_0){
  return $remove_12(this, ':' + key_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 239);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(241, 28, $intern_55, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_3 = function remove_45(index_0){
  var removed;
  return removed = dynamicCast($remove_8(this, index_0), 24) , $remove_12(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 241);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(240, 135, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.containsValue = function containsValue_4(value_0){
  var protoValue;
  protoValue = this.backingMap['__proto__'];
  if (!(protoValue === undefined) && this.host.equals(value_0, protoValue)) {
    return true;
  }
  return $containsValue(this, value_0);
}
;
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 240);
var Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_14(entry);
    $addToEnd(entry);
  }
}

function $remove_13(this$static, key_0){
  var entry;
  entry = dynamicCast(this$static.map_0.remove_1(key_0), 86);
  if (entry) {
    $remove_14(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  HashMap.call(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next = this.head;
}

defineClass(420, 33, {3:1, 55:1}, LinkedHashMap);
_.clear_0 = function clear_1(){
  this.map_0.clear_0();
  this.head.prev = this.head;
  this.head.next = this.head;
}
;
_.containsKey = function containsKey_1(key_0){
  return this.map_0.containsKey(key_0);
}
;
_.containsValue = function containsValue_5(value_0){
  var node;
  node = this.head.next;
  while (node != this.head) {
    if (equals_34(node.value_0, value_0)) {
      return true;
    }
    node = node.next;
  }
  return false;
}
;
_.entrySet_0 = function entrySet_3(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_2 = function get_17(key_0){
  var entry;
  entry = dynamicCast(this.map_0.get_2(key_0), 86);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_6(key_0, value_0){
  var newEntry, old, oldValue;
  old = dynamicCast(this.map_0.get_2(key_0), 86);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key_0, value_0);
    this.map_0.put(key_0, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue_0(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove_1 = function remove_46(key_0){
  return $remove_13(this, key_0);
}
;
_.size_1 = function size_19(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 420);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$01.head;
  tail.next = this$static.this$01.head.prev = this$static;
}

function $remove_14(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key_0, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key_0, value_0);
}

defineClass(86, 130, {86:1, 24:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 86);
function $contains_1(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 24));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(421, 528, $intern_48, LinkedHashMap$EntrySet);
_.contains_0 = function contains_6(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_17(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove_2 = function remove_47(entry){
  var key_0;
  if ($contains_1(this, entry)) {
    key_0 = dynamicCast(entry, 24).getKey();
    $remove_13(this.this$01, key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_20(){
  return this.this$01.map_0.size_1();
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 421);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next = this$1.this$01.head.next;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(422, 1, $intern_42, LinkedHashMap$EntrySet$EntryIterator);
_.hasNext = function hasNext_16(){
  return this.next != this.this$11.this$01.head;
}
;
_.next_0 = function next_17(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next != this.this$11.this$01.head) , this.last = this.next , this.next = this.next.next , this.last;
}
;
_.remove_0 = function remove_48(){
  checkState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_14(this.last);
  this.this$11.this$01.map_0.remove_1(this.last.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 422);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(410, 93, $intern_56, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 410);
var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
var Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
var Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(75, 10, $intern_15, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 75);
function equals_34(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_38(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
function $contains_2(this$static, elem){
  return $indexOf_2(this$static.arrayList, elem, 0) != -1;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new ArrayIndexOutOfBoundsException;
  }
}

defineClass(457, 533, $intern_55);
_.add_0 = function add_12(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_10(this.arrayList, index_0, o);
}
;
_.add_1 = function add_13(o){
  return $add_11(this.arrayList, o);
}
;
_.contains_0 = function contains_7(elem){
  return $contains_2(this, elem);
}
;
_.get_3 = function get_18(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get_3(this.arrayList, index_0);
}
;
_.isEmpty = function isEmpty_8(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_18(){
  return new AbstractList$IteratorImpl(this.arrayList);
}
;
_.remove_3 = function remove_49(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , this.arrayList.remove_3(index_0);
}
;
_.set_0 = function set_7(index_0, elem){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $set_2(this.arrayList, index_0, elem);
}
;
_.size_1 = function size_21(){
  return this.arrayList.array.length;
}
;
_.toArray = function toArray_6(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_7(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toString$ = function toString_44(){
  return $toString_0(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 457);
function $pop(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , this$static.arrayList.remove_3(sz - 1);
  }
   else {
    throw new EmptyStackException;
  }
}

function $push_1(this$static, o){
  $add_11(this$static.arrayList, o);
  return o;
}

function Stack(){
  this.arrayList = new ArrayList;
}

defineClass(187, 457, $intern_55, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 187);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

defineClass(538, 1, $intern_6);
_.getName = function getName_3(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString$ = function toString_45(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 538);
function Level$LevelAll(){
}

defineClass(261, 538, $intern_6, Level$LevelAll);
_.getName = function getName_4(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return $intern_33;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 261);
function Level$LevelConfig(){
}

defineClass(262, 538, $intern_6, Level$LevelConfig);
_.getName = function getName_5(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 262);
function Level$LevelFine(){
}

defineClass(263, 538, $intern_6, Level$LevelFine);
_.getName = function getName_6(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 263);
function Level$LevelFiner(){
}

defineClass(264, 538, $intern_6, Level$LevelFiner);
_.getName = function getName_7(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 264);
function Level$LevelFinest(){
}

defineClass(265, 538, $intern_6, Level$LevelFinest);
_.getName = function getName_8(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 265);
function Level$LevelInfo(){
}

defineClass(266, 538, $intern_6, Level$LevelInfo);
_.getName = function getName_9(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 266);
function Level$LevelOff(){
}

defineClass(267, 538, $intern_6, Level$LevelOff);
_.getName = function getName_10(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 267);
function Level$LevelSevere(){
}

defineClass(268, 538, $intern_6, Level$LevelSevere);
_.getName = function getName_11(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 268);
function Level$LevelWarning(){
}

defineClass(269, 538, $intern_6, Level$LevelWarning);
_.getName = function getName_12(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 269);
function $addLoggerImpl(this$static, logger){
  this$static.loggerMap.put(logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast(this$static.loggerMap.get_2(name_0), 118);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = __substr(name_1, 0, max_0(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_1(newLogger, $ensureLogger(this$static, parentName));
    this$static.loggerMap.put(newLogger.impl.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton_1) {
    singleton_1 = new LogManager;
    rootLogger = new Logger('');
    $setLevel_1(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton_1, rootLogger);
  }
  return singleton_1;
}

defineClass(243, 1, {}, LogManager);
var singleton_1;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 243);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  this.millis = ($clinit_System() , fromDouble(now_1()));
}

defineClass(310, 1, $intern_6, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 310);
function $fine_0(this$static, msg){
  $fine(this$static.impl, msg);
}

function $info_0(this$static, msg){
  $info(this$static.impl, msg);
}

function $log_1(this$static, level, msg, thrown){
  $log(this$static.impl, level, msg, thrown);
}

function $setLevel_1(this$static, newLevel){
  $setLevel_0(this$static.impl, newLevel);
}

function $setParent_1(this$static, newParent){
  $setParent_0(this$static.impl, newParent);
}

function $warning_0(this$static, msg){
  $warning(this$static.impl, msg);
}

function Logger(name_0){
  this.impl = new LoggerImplRegular;
  $setName_0(this.impl, name_0);
}

function getLogger(name_0){
  new LoggerImplRegular;
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(118, 1, {118:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 118);
var I_classLit = createForPrimitive('int', 'I'), Z_classLit = createForPrimitive('boolean', 'Z'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 515), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 517), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 520), B_classLit = createForPrimitive('byte', 'B'), J_classLit = createForPrimitive('long', 'J'), D_classLit = createForPrimitive('double', 'D'), F_classLit = createForPrimitive('float', 'F'), S_classLit = createForPrimitive('short', 'S'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lcom_dv_gtusach_client_model_IUser_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IUser'), Lcom_dv_gtusach_client_model_IBook_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IBook'), Lcom_dv_gtusach_client_model_IMapData_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IMapData'), Lcom_dv_gtusach_client_model_ISystemInfo_2_classLit = createForInterface('com.dv.gtusach.client.model', 'ISystemInfo'), Lcom_dv_gtusach_client_model_IBookList_2_classLit = createForInterface('com.dv.gtusach.client.model', 'IBookList'), Ljava_util_List_2_classLit = createForInterface('java.util', 'List'), Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator'), Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator'), Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set'), Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map'), Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'Splittable'), Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'AutoBean'), Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', null), V_classLit = createForPrimitive('void', 'V');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=gtusach-0.js

