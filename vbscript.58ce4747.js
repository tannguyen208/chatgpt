// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9wRgN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e2449a1758ce4747";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2qAlq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vbScript", ()=>vbScript);
parcelHelpers.export(exports, "vbScriptASP", ()=>vbScriptASP);
function mkVBScript(parserConf) {
    var ERRORCLASS = "error";
    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
    }
    var singleOperators = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]");
    var doubleOperators = new RegExp("^((<>)|(<=)|(>=))");
    var singleDelimiters = new RegExp("^[\\.,]");
    var brackets = new RegExp("^[\\(\\)]");
    var identifiers = new RegExp("^[A-Za-z][_A-Za-z0-9]*");
    var openingKeywords = [
        "class",
        "sub",
        "select",
        "while",
        "if",
        "function",
        "property",
        "with",
        "for"
    ];
    var middleKeywords = [
        "else",
        "elseif",
        "case"
    ];
    var endKeywords = [
        "next",
        "loop",
        "wend"
    ];
    var wordOperators = wordRegexp([
        "and",
        "or",
        "not",
        "xor",
        "is",
        "mod",
        "eqv",
        "imp"
    ]);
    var commonkeywords = [
        "dim",
        "redim",
        "then",
        "until",
        "randomize",
        "byval",
        "byref",
        "new",
        "property",
        "exit",
        "in",
        "const",
        "private",
        "public",
        "get",
        "set",
        "let",
        "stop",
        "on error resume next",
        "on error goto 0",
        "option explicit",
        "call",
        "me"
    ];
    //This list was from: http://msdn.microsoft.com/en-us/library/f8tbc79x(v=vs.84).aspx
    var atomWords = [
        "true",
        "false",
        "nothing",
        "empty",
        "null"
    ];
    //This list was from: http://msdn.microsoft.com/en-us/library/3ca8tfek(v=vs.84).aspx
    var builtinFuncsWords = [
        "abs",
        "array",
        "asc",
        "atn",
        "cbool",
        "cbyte",
        "ccur",
        "cdate",
        "cdbl",
        "chr",
        "cint",
        "clng",
        "cos",
        "csng",
        "cstr",
        "date",
        "dateadd",
        "datediff",
        "datepart",
        "dateserial",
        "datevalue",
        "day",
        "escape",
        "eval",
        "execute",
        "exp",
        "filter",
        "formatcurrency",
        "formatdatetime",
        "formatnumber",
        "formatpercent",
        "getlocale",
        "getobject",
        "getref",
        "hex",
        "hour",
        "inputbox",
        "instr",
        "instrrev",
        "int",
        "fix",
        "isarray",
        "isdate",
        "isempty",
        "isnull",
        "isnumeric",
        "isobject",
        "join",
        "lbound",
        "lcase",
        "left",
        "len",
        "loadpicture",
        "log",
        "ltrim",
        "rtrim",
        "trim",
        "maths",
        "mid",
        "minute",
        "month",
        "monthname",
        "msgbox",
        "now",
        "oct",
        "replace",
        "rgb",
        "right",
        "rnd",
        "round",
        "scriptengine",
        "scriptenginebuildversion",
        "scriptenginemajorversion",
        "scriptengineminorversion",
        "second",
        "setlocale",
        "sgn",
        "sin",
        "space",
        "split",
        "sqr",
        "strcomp",
        "string",
        "strreverse",
        "tan",
        "time",
        "timer",
        "timeserial",
        "timevalue",
        "typename",
        "ubound",
        "ucase",
        "unescape",
        "vartype",
        "weekday",
        "weekdayname",
        "year"
    ];
    //This list was from: http://msdn.microsoft.com/en-us/library/ydz4cfk3(v=vs.84).aspx
    var builtinConsts = [
        "vbBlack",
        "vbRed",
        "vbGreen",
        "vbYellow",
        "vbBlue",
        "vbMagenta",
        "vbCyan",
        "vbWhite",
        "vbBinaryCompare",
        "vbTextCompare",
        "vbSunday",
        "vbMonday",
        "vbTuesday",
        "vbWednesday",
        "vbThursday",
        "vbFriday",
        "vbSaturday",
        "vbUseSystemDayOfWeek",
        "vbFirstJan1",
        "vbFirstFourDays",
        "vbFirstFullWeek",
        "vbGeneralDate",
        "vbLongDate",
        "vbShortDate",
        "vbLongTime",
        "vbShortTime",
        "vbObjectError",
        "vbOKOnly",
        "vbOKCancel",
        "vbAbortRetryIgnore",
        "vbYesNoCancel",
        "vbYesNo",
        "vbRetryCancel",
        "vbCritical",
        "vbQuestion",
        "vbExclamation",
        "vbInformation",
        "vbDefaultButton1",
        "vbDefaultButton2",
        "vbDefaultButton3",
        "vbDefaultButton4",
        "vbApplicationModal",
        "vbSystemModal",
        "vbOK",
        "vbCancel",
        "vbAbort",
        "vbRetry",
        "vbIgnore",
        "vbYes",
        "vbNo",
        "vbCr",
        "VbCrLf",
        "vbFormFeed",
        "vbLf",
        "vbNewLine",
        "vbNullChar",
        "vbNullString",
        "vbTab",
        "vbVerticalTab",
        "vbUseDefault",
        "vbTrue",
        "vbFalse",
        "vbEmpty",
        "vbNull",
        "vbInteger",
        "vbLong",
        "vbSingle",
        "vbDouble",
        "vbCurrency",
        "vbDate",
        "vbString",
        "vbObject",
        "vbError",
        "vbBoolean",
        "vbVariant",
        "vbDataObject",
        "vbDecimal",
        "vbByte",
        "vbArray"
    ];
    //This list was from: http://msdn.microsoft.com/en-us/library/hkc375ea(v=vs.84).aspx
    var builtinObjsWords = [
        "WScript",
        "err",
        "debug",
        "RegExp"
    ];
    var knownProperties = [
        "description",
        "firstindex",
        "global",
        "helpcontext",
        "helpfile",
        "ignorecase",
        "length",
        "number",
        "pattern",
        "source",
        "value",
        "count"
    ];
    var knownMethods = [
        "clear",
        "execute",
        "raise",
        "replace",
        "test",
        "write",
        "writeline",
        "close",
        "open",
        "state",
        "eof",
        "update",
        "addnew",
        "end",
        "createobject",
        "quit"
    ];
    var aspBuiltinObjsWords = [
        "server",
        "response",
        "request",
        "session",
        "application"
    ];
    var aspKnownProperties = [
        "buffer",
        "cachecontrol",
        "charset",
        "contenttype",
        "expires",
        "expiresabsolute",
        "isclientconnected",
        "pics",
        "status",
        "clientcertificate",
        "cookies",
        "form",
        "querystring",
        "servervariables",
        "totalbytes",
        "contents",
        "staticobjects",
        "codepage",
        "lcid",
        "sessionid",
        "timeout",
        "scripttimeout"
    ]; //server
    var aspKnownMethods = [
        "addheader",
        "appendtolog",
        "binarywrite",
        "end",
        "flush",
        "redirect",
        "binaryread",
        "remove",
        "removeall",
        "lock",
        "unlock",
        "abandon",
        "getlasterror",
        "htmlencode",
        "mappath",
        "transfer",
        "urlencode"
    ]; //server
    var knownWords = knownMethods.concat(knownProperties);
    builtinObjsWords = builtinObjsWords.concat(builtinConsts);
    if (parserConf.isASP) {
        builtinObjsWords = builtinObjsWords.concat(aspBuiltinObjsWords);
        knownWords = knownWords.concat(aspKnownMethods, aspKnownProperties);
    }
    var keywords = wordRegexp(commonkeywords);
    var atoms = wordRegexp(atomWords);
    var builtinFuncs = wordRegexp(builtinFuncsWords);
    var builtinObjs = wordRegexp(builtinObjsWords);
    var known = wordRegexp(knownWords);
    var stringPrefixes = '"';
    var opening = wordRegexp(openingKeywords);
    var middle = wordRegexp(middleKeywords);
    var closing = wordRegexp(endKeywords);
    var doubleClosing = wordRegexp([
        "end"
    ]);
    var doOpening = wordRegexp([
        "do"
    ]);
    var noIndentWords = wordRegexp([
        "on error resume next",
        "exit"
    ]);
    var comment = wordRegexp([
        "rem"
    ]);
    function indent(_stream, state) {
        state.currentIndent++;
    }
    function dedent(_stream, state) {
        state.currentIndent--;
    }
    // tokenizers
    function tokenBase(stream, state) {
        if (stream.eatSpace()) return null;
        var ch = stream.peek();
        // Handle Comments
        if (ch === "'") {
            stream.skipToEnd();
            return "comment";
        }
        if (stream.match(comment)) {
            stream.skipToEnd();
            return "comment";
        }
        // Handle Number Literals
        if (stream.match(/^((&H)|(&O))?[0-9\.]/i, false) && !stream.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)) {
            var floatLiteral = false;
            // Floats
            if (stream.match(/^\d*\.\d+/i)) floatLiteral = true;
            else if (stream.match(/^\d+\.\d*/)) floatLiteral = true;
            else if (stream.match(/^\.\d+/)) floatLiteral = true;
            if (floatLiteral) {
                // Float literals may be "imaginary"
                stream.eat(/J/i);
                return "number";
            }
            // Integers
            var intLiteral = false;
            // Hex
            if (stream.match(/^&H[0-9a-f]+/i)) intLiteral = true;
            else if (stream.match(/^&O[0-7]+/i)) intLiteral = true;
            else if (stream.match(/^[1-9]\d*F?/)) {
                // Decimal literals may be "imaginary"
                stream.eat(/J/i);
                // TODO - Can you have imaginary longs?
                intLiteral = true;
            } else if (stream.match(/^0(?![\dx])/i)) intLiteral = true;
            if (intLiteral) {
                // Integer literals may be "long"
                stream.eat(/L/i);
                return "number";
            }
        }
        // Handle Strings
        if (stream.match(stringPrefixes)) {
            state.tokenize = tokenStringFactory(stream.current());
            return state.tokenize(stream, state);
        }
        // Handle operators and Delimiters
        if (stream.match(doubleOperators) || stream.match(singleOperators) || stream.match(wordOperators)) return "operator";
        if (stream.match(singleDelimiters)) return null;
        if (stream.match(brackets)) return "bracket";
        if (stream.match(noIndentWords)) {
            state.doInCurrentLine = true;
            return "keyword";
        }
        if (stream.match(doOpening)) {
            indent(stream, state);
            state.doInCurrentLine = true;
            return "keyword";
        }
        if (stream.match(opening)) {
            if (!state.doInCurrentLine) indent(stream, state);
            else state.doInCurrentLine = false;
            return "keyword";
        }
        if (stream.match(middle)) return "keyword";
        if (stream.match(doubleClosing)) {
            dedent(stream, state);
            dedent(stream, state);
            return "keyword";
        }
        if (stream.match(closing)) {
            if (!state.doInCurrentLine) dedent(stream, state);
            else state.doInCurrentLine = false;
            return "keyword";
        }
        if (stream.match(keywords)) return "keyword";
        if (stream.match(atoms)) return "atom";
        if (stream.match(known)) return "variableName.special";
        if (stream.match(builtinFuncs)) return "builtin";
        if (stream.match(builtinObjs)) return "builtin";
        if (stream.match(identifiers)) return "variable";
        // Handle non-detected items
        stream.next();
        return ERRORCLASS;
    }
    function tokenStringFactory(delimiter) {
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        return function(stream, state) {
            while(!stream.eol()){
                stream.eatWhile(/[^'"]/);
                if (stream.match(delimiter)) {
                    state.tokenize = tokenBase;
                    return OUTCLASS;
                } else stream.eat(/['"]/);
            }
            if (singleline) state.tokenize = tokenBase;
            return OUTCLASS;
        };
    }
    function tokenLexer(stream, state) {
        var style = state.tokenize(stream, state);
        var current = stream.current();
        // Handle '.' connected identifiers
        if (current === ".") {
            style = state.tokenize(stream, state);
            current = stream.current();
            if (style && (style.substr(0, 8) === "variable" || style === "builtin" || style === "keyword")) {
                if (style === "builtin" || style === "keyword") style = "variable";
                if (knownWords.indexOf(current.substr(1)) > -1) style = "keyword";
                return style;
            } else return ERRORCLASS;
        }
        return style;
    }
    return {
        name: "vbscript",
        startState: function() {
            return {
                tokenize: tokenBase,
                lastToken: null,
                currentIndent: 0,
                nextLineIndent: 0,
                doInCurrentLine: false,
                ignoreKeyword: false
            };
        },
        token: function(stream, state) {
            if (stream.sol()) {
                state.currentIndent += state.nextLineIndent;
                state.nextLineIndent = 0;
                state.doInCurrentLine = 0;
            }
            var style = tokenLexer(stream, state);
            state.lastToken = {
                style: style,
                content: stream.current()
            };
            if (style === null) style = null;
            return style;
        },
        indent: function(state, textAfter, cx) {
            var trueText = textAfter.replace(/^\s+|\s+$/g, "");
            if (trueText.match(closing) || trueText.match(doubleClosing) || trueText.match(middle)) return cx.unit * (state.currentIndent - 1);
            if (state.currentIndent < 0) return 0;
            return state.currentIndent * cx.unit;
        }
    };
}
const vbScript = mkVBScript({});
const vbScriptASP = mkVBScript({
    isASP: true
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9wRgN"], null, "parcelRequire9c72")

//# sourceMappingURL=vbscript.58ce4747.js.map
