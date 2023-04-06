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
})({"c0Y9S":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "79817214812b0495";
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

},{}],"hCLLs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clike", ()=>clike);
parcelHelpers.export(exports, "c", ()=>c);
parcelHelpers.export(exports, "cpp", ()=>cpp);
parcelHelpers.export(exports, "java", ()=>java);
parcelHelpers.export(exports, "csharp", ()=>csharp);
parcelHelpers.export(exports, "scala", ()=>scala);
parcelHelpers.export(exports, "kotlin", ()=>kotlin);
parcelHelpers.export(exports, "shader", ()=>shader);
parcelHelpers.export(exports, "nesC", ()=>nesC);
parcelHelpers.export(exports, "objectiveC", ()=>objectiveC);
parcelHelpers.export(exports, "objectiveCpp", ()=>objectiveCpp);
parcelHelpers.export(exports, "squirrel", ()=>squirrel);
parcelHelpers.export(exports, "ceylon", ()=>ceylon);
parcelHelpers.export(exports, "dart", ()=>dart);
function Context(indented, column, type, info, align, prev) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.info = info;
    this.align = align;
    this.prev = prev;
}
function pushContext(state, col, type, info) {
    var indent = state.indented;
    if (state.context && state.context.type == "statement" && type != "statement") indent = state.context.indented;
    return state.context = new Context(indent, col, type, info, null, state.context);
}
function popContext(state) {
    var t = state.context.type;
    if (t == ")" || t == "]" || t == "}") state.indented = state.context.indented;
    return state.context = state.context.prev;
}
function typeBefore(stream, state, pos) {
    if (state.prevToken == "variable" || state.prevToken == "type") return true;
    if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0, pos))) return true;
    if (state.typeAtEndOfLine && stream.column() == stream.indentation()) return true;
}
function isTopScope(context) {
    for(;;){
        if (!context || context.type == "top") return true;
        if (context.type == "}" && context.prev.info != "namespace") return false;
        context = context.prev;
    }
}
function clike(parserConfig) {
    var statementIndentUnit = parserConfig.statementIndentUnit, dontAlignCalls = parserConfig.dontAlignCalls, keywords = parserConfig.keywords || {}, types = parserConfig.types || {}, builtin = parserConfig.builtin || {}, blockKeywords = parserConfig.blockKeywords || {}, defKeywords = parserConfig.defKeywords || {}, atoms = parserConfig.atoms || {}, hooks = parserConfig.hooks || {}, multiLineStrings = parserConfig.multiLineStrings, indentStatements = parserConfig.indentStatements !== false, indentSwitch = parserConfig.indentSwitch !== false, namespaceSeparator = parserConfig.namespaceSeparator, isPunctuationChar = parserConfig.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, numberStart = parserConfig.numberStart || /[\d\.]/, number = parserConfig.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, isOperatorChar = parserConfig.isOperatorChar || /[+\-*&%=<>!?|\/]/, isIdentifierChar = parserConfig.isIdentifierChar || /[\w\$_\xa1-\uffff]/, // An optional function that takes a {string} token and returns true if it
    // should be treated as a builtin.
    isReservedIdentifier = parserConfig.isReservedIdentifier || false;
    var curPunc, isDefKeyword;
    function tokenBase(stream, state) {
        var ch = stream.next();
        if (hooks[ch]) {
            var result = hooks[ch](stream, state);
            if (result !== false) return result;
        }
        if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
        }
        if (numberStart.test(ch)) {
            stream.backUp(1);
            if (stream.match(number)) return "number";
            stream.next();
        }
        if (isPunctuationChar.test(ch)) {
            curPunc = ch;
            return null;
        }
        if (ch == "/") {
            if (stream.eat("*")) {
                state.tokenize = tokenComment;
                return tokenComment(stream, state);
            }
            if (stream.eat("/")) {
                stream.skipToEnd();
                return "comment";
            }
        }
        if (isOperatorChar.test(ch)) {
            while(!stream.match(/^\/[\/*]/, false) && stream.eat(isOperatorChar));
            return "operator";
        }
        stream.eatWhile(isIdentifierChar);
        if (namespaceSeparator) while(stream.match(namespaceSeparator))stream.eatWhile(isIdentifierChar);
        var cur = stream.current();
        if (contains(keywords, cur)) {
            if (contains(blockKeywords, cur)) curPunc = "newstatement";
            if (contains(defKeywords, cur)) isDefKeyword = true;
            return "keyword";
        }
        if (contains(types, cur)) return "type";
        if (contains(builtin, cur) || isReservedIdentifier && isReservedIdentifier(cur)) {
            if (contains(blockKeywords, cur)) curPunc = "newstatement";
            return "builtin";
        }
        if (contains(atoms, cur)) return "atom";
        return "variable";
    }
    function tokenString(quote) {
        return function(stream, state) {
            var escaped = false, next, end = false;
            while((next = stream.next()) != null){
                if (next == quote && !escaped) {
                    end = true;
                    break;
                }
                escaped = !escaped && next == "\\";
            }
            if (end || !(escaped || multiLineStrings)) state.tokenize = null;
            return "string";
        };
    }
    function tokenComment(stream, state) {
        var maybeEnd = false, ch;
        while(ch = stream.next()){
            if (ch == "/" && maybeEnd) {
                state.tokenize = null;
                break;
            }
            maybeEnd = ch == "*";
        }
        return "comment";
    }
    function maybeEOL(stream, state) {
        if (parserConfig.typeFirstDefinitions && stream.eol() && isTopScope(state.context)) state.typeAtEndOfLine = typeBefore(stream, state, stream.pos);
    }
    // Interface
    return {
        name: parserConfig.name,
        startState: function(indentUnit) {
            return {
                tokenize: null,
                context: new Context(-indentUnit, 0, "top", null, false),
                indented: 0,
                startOfLine: true,
                prevToken: null
            };
        },
        token: function(stream, state) {
            var ctx = state.context;
            if (stream.sol()) {
                if (ctx.align == null) ctx.align = false;
                state.indented = stream.indentation();
                state.startOfLine = true;
            }
            if (stream.eatSpace()) {
                maybeEOL(stream, state);
                return null;
            }
            curPunc = isDefKeyword = null;
            var style = (state.tokenize || tokenBase)(stream, state);
            if (style == "comment" || style == "meta") return style;
            if (ctx.align == null) ctx.align = true;
            if (curPunc == ";" || curPunc == ":" || curPunc == "," && stream.match(/^\s*(?:\/\/.*)?$/, false)) while(state.context.type == "statement")popContext(state);
            else if (curPunc == "{") pushContext(state, stream.column(), "}");
            else if (curPunc == "[") pushContext(state, stream.column(), "]");
            else if (curPunc == "(") pushContext(state, stream.column(), ")");
            else if (curPunc == "}") {
                while(ctx.type == "statement")ctx = popContext(state);
                if (ctx.type == "}") ctx = popContext(state);
                while(ctx.type == "statement")ctx = popContext(state);
            } else if (curPunc == ctx.type) popContext(state);
            else if (indentStatements && ((ctx.type == "}" || ctx.type == "top") && curPunc != ";" || ctx.type == "statement" && curPunc == "newstatement")) pushContext(state, stream.column(), "statement", stream.current());
            if (style == "variable" && (state.prevToken == "def" || parserConfig.typeFirstDefinitions && typeBefore(stream, state, stream.start) && isTopScope(state.context) && stream.match(/^\s*\(/, false))) style = "def";
            if (hooks.token) {
                var result = hooks.token(stream, state, style);
                if (result !== undefined) style = result;
            }
            if (style == "def" && parserConfig.styleDefs === false) style = "variable";
            state.startOfLine = false;
            state.prevToken = isDefKeyword ? "def" : style || curPunc;
            maybeEOL(stream, state);
            return style;
        },
        indent: function(state, textAfter, context) {
            if (state.tokenize != tokenBase && state.tokenize != null || state.typeAtEndOfLine) return null;
            var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
            var closing = firstChar == ctx.type;
            if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
            if (parserConfig.dontIndentStatements) while(ctx.type == "statement" && parserConfig.dontIndentStatements.test(ctx.info))ctx = ctx.prev;
            if (hooks.indent) {
                var hook = hooks.indent(state, ctx, textAfter, context.unit);
                if (typeof hook == "number") return hook;
            }
            var switchBlock = ctx.prev && ctx.prev.info == "switch";
            if (parserConfig.allmanIndentation && /[{(]/.test(firstChar)) {
                while(ctx.type != "top" && ctx.type != "}")ctx = ctx.prev;
                return ctx.indented;
            }
            if (ctx.type == "statement") return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit || context.unit);
            if (ctx.align && (!dontAlignCalls || ctx.type != ")")) return ctx.column + (closing ? 0 : 1);
            if (ctx.type == ")" && !closing) return ctx.indented + (statementIndentUnit || context.unit);
            return ctx.indented + (closing ? 0 : context.unit) + (!closing && switchBlock && !/^(?:case|default)\b/.test(textAfter) ? context.unit : 0);
        },
        languageData: {
            indentOnInput: indentSwitch ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
            commentTokens: {
                line: "//",
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            autocomplete: Object.keys(keywords).concat(Object.keys(types)).concat(Object.keys(builtin)).concat(Object.keys(atoms)),
            ...parserConfig.languageData
        }
    };
}
function words(str) {
    var obj = {}, words = str.split(" ");
    for(var i = 0; i < words.length; ++i)obj[words[i]] = true;
    return obj;
}
function contains(words, word) {
    if (typeof words === "function") return words(word);
    else return words.propertyIsEnumerable(word);
}
var cKeywords = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran";
// Keywords from https://en.cppreference.com/w/cpp/keyword includes C++20.
var cppKeywords = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq";
var objCKeywords = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available";
var objCBuiltins = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT";
// Do not use this. Use the cTypes function below. This is global just to avoid
// excessive calls when cTypes is being called multiple times during a parse.
var basicCTypes = words("int long char short double float unsigned signed void bool");
// Do not use this. Use the objCTypes function below. This is global just to avoid
// excessive calls when objCTypes is being called multiple times during a parse.
var basicObjCTypes = words("SEL instancetype id Class Protocol BOOL");
// Returns true if identifier is a "C" type.
// C type is defined as those that are reserved by the compiler (basicTypes),
// and those that end in _t (Reserved by POSIX for types)
// http://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html
function cTypes(identifier) {
    return contains(basicCTypes, identifier) || /.+_t$/.test(identifier);
}
// Returns true if identifier is a "Objective C" type.
function objCTypes(identifier) {
    return cTypes(identifier) || contains(basicObjCTypes, identifier);
}
var cBlockKeywords = "case do else for if switch while struct enum union";
var cDefKeywords = "struct enum union";
function cppHook(stream, state) {
    if (!state.startOfLine) return false;
    for(var ch, next = null; ch = stream.peek();){
        if (ch == "\\" && stream.match(/^.$/)) {
            next = cppHook;
            break;
        } else if (ch == "/" && stream.match(/^\/[\/\*]/, false)) break;
        stream.next();
    }
    state.tokenize = next;
    return "meta";
}
function pointerHook(_stream, state) {
    if (state.prevToken == "type") return "type";
    return false;
}
// For C and C++ (and ObjC): identifiers starting with __
// or _ followed by a capital letter are reserved for the compiler.
function cIsReservedIdentifier(token) {
    if (!token || token.length < 2) return false;
    if (token[0] != "_") return false;
    return token[1] == "_" || token[1] !== token[1].toLowerCase();
}
function cpp14Literal(stream) {
    stream.eatWhile(/[\w\.']/);
    return "number";
}
function cpp11StringHook(stream, state) {
    stream.backUp(1);
    // Raw strings.
    if (stream.match(/^(?:R|u8R|uR|UR|LR)/)) {
        var match = stream.match(/^"([^\s\\()]{0,16})\(/);
        if (!match) return false;
        state.cpp11RawStringDelim = match[1];
        state.tokenize = tokenRawString;
        return tokenRawString(stream, state);
    }
    // Unicode strings/chars.
    if (stream.match(/^(?:u8|u|U|L)/)) {
        if (stream.match(/^["']/, /* eat */ false)) return "string";
        return false;
    }
    // Ignore this hook.
    stream.next();
    return false;
}
function cppLooksLikeConstructor(word) {
    var lastTwo = /(\w+)::~?(\w+)$/.exec(word);
    return lastTwo && lastTwo[1] == lastTwo[2];
}
// C#-style strings where "" escapes a quote.
function tokenAtString(stream, state) {
    var next;
    while((next = stream.next()) != null)if (next == '"' && !stream.eat('"')) {
        state.tokenize = null;
        break;
    }
    return "string";
}
// C++11 raw string literal is <prefix>"<delim>( anything )<delim>", where
// <delim> can be a string up to 16 characters long.
function tokenRawString(stream, state) {
    // Escape characters that have special regex meanings.
    var delim = state.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
    var match = stream.match(new RegExp(".*?\\)" + delim + '"'));
    if (match) state.tokenize = null;
    else stream.skipToEnd();
    return "string";
}
const c = clike({
    name: "c",
    keywords: words(cKeywords),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    defKeywords: words(cDefKeywords),
    typeFirstDefinitions: true,
    atoms: words("NULL true false"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
        "#": cppHook,
        "*": pointerHook
    }
});
const cpp = clike({
    name: "cpp",
    keywords: words(cKeywords + " " + cppKeywords),
    types: cTypes,
    blockKeywords: words(cBlockKeywords + " class try catch"),
    defKeywords: words(cDefKeywords + " class namespace"),
    typeFirstDefinitions: true,
    atoms: words("true false NULL nullptr"),
    dontIndentStatements: /^template$/,
    isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
        "#": cppHook,
        "*": pointerHook,
        "u": cpp11StringHook,
        "U": cpp11StringHook,
        "L": cpp11StringHook,
        "R": cpp11StringHook,
        "0": cpp14Literal,
        "1": cpp14Literal,
        "2": cpp14Literal,
        "3": cpp14Literal,
        "4": cpp14Literal,
        "5": cpp14Literal,
        "6": cpp14Literal,
        "7": cpp14Literal,
        "8": cpp14Literal,
        "9": cpp14Literal,
        token: function(stream, state, style) {
            if (style == "variable" && stream.peek() == "(" && (state.prevToken == ";" || state.prevToken == null || state.prevToken == "}") && cppLooksLikeConstructor(stream.current())) return "def";
        }
    },
    namespaceSeparator: "::"
});
const java = clike({
    name: "java",
    keywords: words("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
    types: words("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords: words("catch class do else finally for if switch try while"),
    defKeywords: words("class interface enum @interface"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks: {
        "@": function(stream) {
            // Don't match the @interface keyword.
            if (stream.match("interface", false)) return false;
            stream.eatWhile(/[\w\$_]/);
            return "meta";
        },
        '"': function(stream, state) {
            if (!stream.match(/""$/)) return false;
            state.tokenize = tokenTripleString;
            return state.tokenize(stream, state);
        }
    }
});
const csharp = clike({
    name: "csharp",
    keywords: words("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
    types: words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
    blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
    defKeywords: words("class interface namespace struct var"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {
        "@": function(stream, state) {
            if (stream.eat('"')) {
                state.tokenize = tokenAtString;
                return tokenAtString(stream, state);
            }
            stream.eatWhile(/[\w\$_]/);
            return "meta";
        }
    }
});
function tokenTripleString(stream, state) {
    var escaped = false;
    while(!stream.eol()){
        if (!escaped && stream.match('"""')) {
            state.tokenize = null;
            break;
        }
        escaped = stream.next() == "\\" && !escaped;
    }
    return "string";
}
function tokenNestedComment(depth) {
    return function(stream, state) {
        var ch;
        while(ch = stream.next()){
            if (ch == "*" && stream.eat("/")) {
                if (depth == 1) {
                    state.tokenize = null;
                    break;
                } else {
                    state.tokenize = tokenNestedComment(depth - 1);
                    return state.tokenize(stream, state);
                }
            } else if (ch == "/" && stream.eat("*")) {
                state.tokenize = tokenNestedComment(depth + 1);
                return state.tokenize(stream, state);
            }
        }
        return "comment";
    };
}
const scala = clike({
    name: "scala",
    keywords: words(/* scala */ "abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
    types: words("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
    multiLineStrings: true,
    blockKeywords: words("catch class enum do else finally for forSome if match switch try while"),
    defKeywords: words("class enum def object package trait type val var"),
    atoms: words("true false null"),
    indentStatements: false,
    indentSwitch: false,
    isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
    hooks: {
        "@": function(stream) {
            stream.eatWhile(/[\w\$_]/);
            return "meta";
        },
        '"': function(stream, state) {
            if (!stream.match('""')) return false;
            state.tokenize = tokenTripleString;
            return state.tokenize(stream, state);
        },
        "'": function(stream) {
            if (stream.match(/^(\\[^'\s]+|[^\\'])'/)) return "character";
            stream.eatWhile(/[\w\$_\xa1-\uffff]/);
            return "atom";
        },
        "=": function(stream, state) {
            var cx = state.context;
            if (cx.type == "}" && cx.align && stream.eat(">")) {
                state.context = new Context(cx.indented, cx.column, cx.type, cx.info, null, cx.prev);
                return "operator";
            } else return false;
        },
        "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenNestedComment(1);
            return state.tokenize(stream, state);
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
});
function tokenKotlinString(tripleString) {
    return function(stream, state) {
        var escaped = false, next, end = false;
        while(!stream.eol()){
            if (!tripleString && !escaped && stream.match('"')) {
                end = true;
                break;
            }
            if (tripleString && stream.match('"""')) {
                end = true;
                break;
            }
            next = stream.next();
            if (!escaped && next == "$" && stream.match("{")) stream.skipTo("}");
            escaped = !escaped && next == "\\" && !tripleString;
        }
        if (end || !tripleString) state.tokenize = null;
        return "string";
    };
}
const kotlin = clike({
    name: "kotlin",
    keywords: words(/*keywords*/ "package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),
    types: words(/* package java.lang */ "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),
    intendSwitch: false,
    indentStatements: false,
    multiLineStrings: true,
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    blockKeywords: words("catch class do else finally for if where try while enum"),
    defKeywords: words("class val var object interface fun"),
    atoms: words("true false null this"),
    hooks: {
        "@": function(stream) {
            stream.eatWhile(/[\w\$_]/);
            return "meta";
        },
        "*": function(_stream, state) {
            return state.prevToken == "." ? "variable" : "operator";
        },
        '"': function(stream, state) {
            state.tokenize = tokenKotlinString(stream.match('""'));
            return state.tokenize(stream, state);
        },
        "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenNestedComment(1);
            return state.tokenize(stream, state);
        },
        indent: function(state, ctx, textAfter, indentUnit) {
            var firstChar = textAfter && textAfter.charAt(0);
            if ((state.prevToken == "}" || state.prevToken == ")") && textAfter == "") return state.indented;
            if (state.prevToken == "operator" && textAfter != "}" && state.context.type != "}" || state.prevToken == "variable" && firstChar == "." || (state.prevToken == "}" || state.prevToken == ")") && firstChar == ".") return indentUnit * 2 + ctx.indented;
            if (ctx.align && ctx.type == "}") return ctx.indented + (state.context.type == (textAfter || "").charAt(0) ? 0 : indentUnit);
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
});
const shader = clike({
    name: "shader",
    keywords: words("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
    types: words("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
    blockKeywords: words("for while do if else struct"),
    builtin: words("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
    atoms: words("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
    indentSwitch: false,
    hooks: {
        "#": cppHook
    }
});
const nesC = clike({
    name: "nesc",
    keywords: words(cKeywords + " as atomic async call command component components configuration event generic " + "implementation includes interface module new norace nx_struct nx_union post provides " + "signal task uses abstract extends"),
    types: cTypes,
    blockKeywords: words(cBlockKeywords),
    atoms: words("null true false"),
    hooks: {
        "#": cppHook
    }
});
const objectiveC = clike({
    name: "objectivec",
    keywords: words(cKeywords + " " + objCKeywords),
    types: objCTypes,
    builtin: words(objCBuiltins),
    blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
    defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class"),
    dontIndentStatements: /^@.*$/,
    typeFirstDefinitions: true,
    atoms: words("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
        "#": cppHook,
        "*": pointerHook
    }
});
const objectiveCpp = clike({
    name: "objectivecpp",
    keywords: words(cKeywords + " " + objCKeywords + " " + cppKeywords),
    types: objCTypes,
    builtin: words(objCBuiltins),
    blockKeywords: words(cBlockKeywords + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
    defKeywords: words(cDefKeywords + " @interface @implementation @protocol @class class namespace"),
    dontIndentStatements: /^@.*$|^template$/,
    typeFirstDefinitions: true,
    atoms: words("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: cIsReservedIdentifier,
    hooks: {
        "#": cppHook,
        "*": pointerHook,
        "u": cpp11StringHook,
        "U": cpp11StringHook,
        "L": cpp11StringHook,
        "R": cpp11StringHook,
        "0": cpp14Literal,
        "1": cpp14Literal,
        "2": cpp14Literal,
        "3": cpp14Literal,
        "4": cpp14Literal,
        "5": cpp14Literal,
        "6": cpp14Literal,
        "7": cpp14Literal,
        "8": cpp14Literal,
        "9": cpp14Literal,
        token: function(stream, state, style) {
            if (style == "variable" && stream.peek() == "(" && (state.prevToken == ";" || state.prevToken == null || state.prevToken == "}") && cppLooksLikeConstructor(stream.current())) return "def";
        }
    },
    namespaceSeparator: "::"
});
const squirrel = clike({
    name: "squirrel",
    keywords: words("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
    types: cTypes,
    blockKeywords: words("case catch class else for foreach if switch try while"),
    defKeywords: words("function local class"),
    typeFirstDefinitions: true,
    atoms: words("true false null"),
    hooks: {
        "#": cppHook
    }
});
// Ceylon Strings need to deal with interpolation
var stringTokenizer = null;
function tokenCeylonString(type) {
    return function(stream, state) {
        var escaped = false, next, end = false;
        while(!stream.eol()){
            if (!escaped && stream.match('"') && (type == "single" || stream.match('""'))) {
                end = true;
                break;
            }
            if (!escaped && stream.match("``")) {
                stringTokenizer = tokenCeylonString(type);
                end = true;
                break;
            }
            next = stream.next();
            escaped = type == "single" && !escaped && next == "\\";
        }
        if (end) state.tokenize = null;
        return "string";
    };
}
const ceylon = clike({
    name: "ceylon",
    keywords: words("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
    types: function(word) {
        // In Ceylon all identifiers that start with an uppercase are types
        var first = word.charAt(0);
        return first === first.toUpperCase() && first !== first.toLowerCase();
    },
    blockKeywords: words("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords: words("class dynamic function interface module object package value"),
    builtin: words("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
    numberStart: /[\d#$]/,
    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings: true,
    typeFirstDefinitions: true,
    atoms: words("true false null larger smaller equal empty finished"),
    indentSwitch: false,
    styleDefs: false,
    hooks: {
        "@": function(stream) {
            stream.eatWhile(/[\w\$_]/);
            return "meta";
        },
        '"': function(stream, state) {
            state.tokenize = tokenCeylonString(stream.match('""') ? "triple" : "single");
            return state.tokenize(stream, state);
        },
        "`": function(stream, state) {
            if (!stringTokenizer || !stream.match("`")) return false;
            state.tokenize = stringTokenizer;
            stringTokenizer = null;
            return state.tokenize(stream, state);
        },
        "'": function(stream) {
            stream.eatWhile(/[\w\$_\xa1-\uffff]/);
            return "atom";
        },
        token: function(_stream, state, style) {
            if ((style == "variable" || style == "type") && state.prevToken == ".") return "variableName.special";
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
});
function pushInterpolationStack(state) {
    (state.interpolationStack || (state.interpolationStack = [])).push(state.tokenize);
}
function popInterpolationStack(state) {
    return (state.interpolationStack || (state.interpolationStack = [])).pop();
}
function sizeInterpolationStack(state) {
    return state.interpolationStack ? state.interpolationStack.length : 0;
}
function tokenDartString(quote, stream, state, raw) {
    var tripleQuoted = false;
    if (stream.eat(quote)) {
        if (stream.eat(quote)) tripleQuoted = true;
        else return "string"; //empty string
    }
    function tokenStringHelper(stream, state) {
        var escaped = false;
        while(!stream.eol()){
            if (!raw && !escaped && stream.peek() == "$") {
                pushInterpolationStack(state);
                state.tokenize = tokenInterpolation;
                return "string";
            }
            var next = stream.next();
            if (next == quote && !escaped && (!tripleQuoted || stream.match(quote + quote))) {
                state.tokenize = null;
                break;
            }
            escaped = !raw && !escaped && next == "\\";
        }
        return "string";
    }
    state.tokenize = tokenStringHelper;
    return tokenStringHelper(stream, state);
}
function tokenInterpolation(stream, state) {
    stream.eat("$");
    if (stream.eat("{")) // let clike handle the content of ${...},
    // we take over again when "}" appears (see hooks).
    state.tokenize = null;
    else state.tokenize = tokenInterpolationIdentifier;
    return null;
}
function tokenInterpolationIdentifier(stream, state) {
    stream.eatWhile(/[\w_]/);
    state.tokenize = popInterpolationStack(state);
    return "variable";
}
const dart = clike({
    name: "dart",
    keywords: words("this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required"),
    blockKeywords: words("try catch finally do else for if switch while"),
    builtin: words("void bool num int double dynamic var String Null Never"),
    atoms: words("true false null"),
    hooks: {
        "@": function(stream) {
            stream.eatWhile(/[\w\$_\.]/);
            return "meta";
        },
        // custom string handling to deal with triple-quoted strings and string interpolation
        "'": function(stream, state) {
            return tokenDartString("'", stream, state, false);
        },
        '"': function(stream, state) {
            return tokenDartString('"', stream, state, false);
        },
        "r": function(stream, state) {
            var peek = stream.peek();
            if (peek == "'" || peek == '"') return tokenDartString(stream.next(), stream, state, true);
            return false;
        },
        "}": function(_stream, state) {
            // "}" is end of interpolation, if interpolation stack is non-empty
            if (sizeInterpolationStack(state) > 0) {
                state.tokenize = popInterpolationStack(state);
                return null;
            }
            return false;
        },
        "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenNestedComment(1);
            return state.tokenize(stream, state);
        },
        token: function(stream, _, style) {
            if (style == "variable") {
                // Assume uppercase symbols are classes
                var isUpper = RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g");
                if (isUpper.test(stream.current())) return "type";
            }
        }
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["c0Y9S"], null, "parcelRequire9c72")

//# sourceMappingURL=clike.812b0495.js.map
