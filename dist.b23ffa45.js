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
})({"01DC8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fad291f3b23ffa45";
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

},{}],"2wNM9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cassandra", ()=>Cassandra);
parcelHelpers.export(exports, "MSSQL", ()=>MSSQL);
parcelHelpers.export(exports, "MariaSQL", ()=>MariaSQL);
parcelHelpers.export(exports, "MySQL", ()=>MySQL);
parcelHelpers.export(exports, "PLSQL", ()=>PLSQL);
parcelHelpers.export(exports, "PostgreSQL", ()=>PostgreSQL);
parcelHelpers.export(exports, "SQLDialect", ()=>SQLDialect);
parcelHelpers.export(exports, "SQLite", ()=>SQLite);
parcelHelpers.export(exports, "StandardSQL", ()=>StandardSQL);
parcelHelpers.export(exports, "keywordCompletion", ()=>keywordCompletion);
parcelHelpers.export(exports, "keywordCompletionSource", ()=>keywordCompletionSource);
parcelHelpers.export(exports, "schemaCompletion", ()=>schemaCompletion);
parcelHelpers.export(exports, "schemaCompletionSource", ()=>schemaCompletionSource);
parcelHelpers.export(exports, "sql", ()=>sql);
var _language = require("@codemirror/language");
var _highlight = require("@lezer/highlight");
var _lr = require("@lezer/lr");
var _autocomplete = require("@codemirror/autocomplete");
// This file was generated by lezer-generator. You probably shouldn't edit it.
const whitespace = 36, LineComment = 1, BlockComment = 2, String$1 = 3, Number = 4, Bool = 5, Null = 6, ParenL = 7, ParenR = 8, BraceL = 9, BraceR = 10, BracketL = 11, BracketR = 12, Semi = 13, Dot = 14, Operator = 15, Punctuation = 16, SpecialVar = 17, Identifier = 18, QuotedIdentifier = 19, Keyword = 20, Type = 21, Bits = 22, Bytes = 23, Builtin = 24;
function isAlpha(ch) {
    return ch >= 65 /* Ch.A */  && ch <= 90 /* Ch.Z */  || ch >= 97 /* Ch.a */  && ch <= 122 /* Ch.z */  || ch >= 48 /* Ch._0 */  && ch <= 57 /* Ch._9 */ ;
}
function isHexDigit(ch) {
    return ch >= 48 /* Ch._0 */  && ch <= 57 /* Ch._9 */  || ch >= 97 /* Ch.a */  && ch <= 102 /* Ch.f */  || ch >= 65 /* Ch.A */  && ch <= 70 /* Ch.F */ ;
}
function readLiteral(input, endQuote, backslashEscapes) {
    for(let escaped = false;;){
        if (input.next < 0) return;
        if (input.next == endQuote && !escaped) {
            input.advance();
            return;
        }
        escaped = backslashEscapes && !escaped && input.next == 92 /* Ch.Backslash */ ;
        input.advance();
    }
}
function readDoubleDollarLiteral(input) {
    for(;;){
        if (input.next < 0 || input.peek(1) < 0) return;
        if (input.next == 36 /* Ch.Dollar */  && input.peek(1) == 36 /* Ch.Dollar */ ) {
            input.advance(2);
            return;
        }
        input.advance();
    }
}
function readWord(input, result) {
    for(;;){
        if (input.next != 95 /* Ch.Underscore */  && !isAlpha(input.next)) break;
        if (result != null) result += String.fromCharCode(input.next);
        input.advance();
    }
    return result;
}
function readWordOrQuoted(input) {
    if (input.next == 39 /* Ch.SingleQuote */  || input.next == 34 /* Ch.DoubleQuote */  || input.next == 96 /* Ch.Backtick */ ) {
        let quote = input.next;
        input.advance();
        readLiteral(input, quote, false);
    } else readWord(input);
}
function readBits(input, endQuote) {
    while(input.next == 48 /* Ch._0 */  || input.next == 49 /* Ch._1 */ )input.advance();
    if (endQuote && input.next == endQuote) input.advance();
}
function readNumber(input, sawDot) {
    for(;;){
        if (input.next == 46 /* Ch.Dot */ ) {
            if (sawDot) break;
            sawDot = true;
        } else if (input.next < 48 /* Ch._0 */  || input.next > 57 /* Ch._9 */ ) break;
        input.advance();
    }
    if (input.next == 69 /* Ch.E */  || input.next == 101 /* Ch.e */ ) {
        input.advance();
        if (input.next == 43 /* Ch.Plus */  || input.next == 45 /* Ch.Dash */ ) input.advance();
        while(input.next >= 48 /* Ch._0 */  && input.next <= 57 /* Ch._9 */ )input.advance();
    }
}
function eol(input) {
    while(!(input.next < 0 || input.next == 10 /* Ch.Newline */ ))input.advance();
}
function inString(ch, str) {
    for(let i = 0; i < str.length; i++)if (str.charCodeAt(i) == ch) return true;
    return false;
}
const Space = " 	\r\n";
function keywords(keywords, types, builtin) {
    let result = Object.create(null);
    result["true"] = result["false"] = Bool;
    result["null"] = result["unknown"] = Null;
    for (let kw of keywords.split(" "))if (kw) result[kw] = Keyword;
    for (let tp of types.split(" "))if (tp) result[tp] = Type;
    for (let kw of (builtin || "").split(" "))if (kw) result[kw] = Builtin;
    return result;
}
const SQLTypes = "array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ";
const SQLKeywords = "absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ";
const defaults = {
    backslashEscapes: false,
    hashComments: false,
    spaceAfterDashes: false,
    slashComments: false,
    doubleQuotedStrings: false,
    doubleDollarQuotedStrings: false,
    unquotedBitLiterals: false,
    treatBitsAsBytes: false,
    charSetCasts: false,
    operatorChars: "*+-%<>!=&|~^/",
    specialVar: "?",
    identifierQuotes: '"',
    words: /*@__PURE__*/ keywords(SQLKeywords, SQLTypes)
};
function dialect(spec, kws, types, builtin) {
    let dialect = {};
    for(let prop in defaults)dialect[prop] = (spec.hasOwnProperty(prop) ? spec : defaults)[prop];
    if (kws) dialect.words = keywords(kws, types || "", builtin);
    return dialect;
}
function tokensFor(d) {
    return new (0, _lr.ExternalTokenizer)((input)=>{
        var _a;
        let { next  } = input;
        input.advance();
        if (inString(next, Space)) {
            while(inString(input.next, Space))input.advance();
            input.acceptToken(whitespace);
        } else if (next == 36 /* Ch.Dollar */  && input.next == 36 /* Ch.Dollar */  && d.doubleDollarQuotedStrings) {
            readDoubleDollarLiteral(input);
            input.acceptToken(String$1);
        } else if (next == 39 /* Ch.SingleQuote */  || next == 34 /* Ch.DoubleQuote */  && d.doubleQuotedStrings) {
            readLiteral(input, next, d.backslashEscapes);
            input.acceptToken(String$1);
        } else if (next == 35 /* Ch.Hash */  && d.hashComments || next == 47 /* Ch.Slash */  && input.next == 47 /* Ch.Slash */  && d.slashComments) {
            eol(input);
            input.acceptToken(LineComment);
        } else if (next == 45 /* Ch.Dash */  && input.next == 45 /* Ch.Dash */  && (!d.spaceAfterDashes || input.peek(1) == 32 /* Ch.Space */ )) {
            eol(input);
            input.acceptToken(LineComment);
        } else if (next == 47 /* Ch.Slash */  && input.next == 42 /* Ch.Star */ ) {
            input.advance();
            for(let prev = -1, depth = 1;;){
                if (input.next < 0) break;
                input.advance();
                if (prev == 42 /* Ch.Star */  && input.next == 47 /* Ch.Slash */ ) {
                    depth--;
                    if (!depth) {
                        input.advance();
                        break;
                    }
                    prev = -1;
                } else if (prev == 47 /* Ch.Slash */  && input.next == 42 /* Ch.Star */ ) {
                    depth++;
                    prev = -1;
                } else prev = input.next;
            }
            input.acceptToken(BlockComment);
        } else if ((next == 101 /* Ch.e */  || next == 69 /* Ch.E */ ) && input.next == 39 /* Ch.SingleQuote */ ) {
            input.advance();
            readLiteral(input, 39 /* Ch.SingleQuote */ , true);
        } else if ((next == 110 /* Ch.n */  || next == 78 /* Ch.N */ ) && input.next == 39 /* Ch.SingleQuote */  && d.charSetCasts) {
            input.advance();
            readLiteral(input, 39 /* Ch.SingleQuote */ , d.backslashEscapes);
            input.acceptToken(String$1);
        } else if (next == 95 /* Ch.Underscore */  && d.charSetCasts) for(let i = 0;; i++){
            if (input.next == 39 /* Ch.SingleQuote */  && i > 1) {
                input.advance();
                readLiteral(input, 39 /* Ch.SingleQuote */ , d.backslashEscapes);
                input.acceptToken(String$1);
                break;
            }
            if (!isAlpha(input.next)) break;
            input.advance();
        }
        else if (next == 40 /* Ch.ParenL */ ) input.acceptToken(ParenL);
        else if (next == 41 /* Ch.ParenR */ ) input.acceptToken(ParenR);
        else if (next == 123 /* Ch.BraceL */ ) input.acceptToken(BraceL);
        else if (next == 125 /* Ch.BraceR */ ) input.acceptToken(BraceR);
        else if (next == 91 /* Ch.BracketL */ ) input.acceptToken(BracketL);
        else if (next == 93 /* Ch.BracketR */ ) input.acceptToken(BracketR);
        else if (next == 59 /* Ch.Semi */ ) input.acceptToken(Semi);
        else if (d.unquotedBitLiterals && next == 48 /* Ch._0 */  && input.next == 98 /* Ch.b */ ) {
            input.advance();
            readBits(input);
            input.acceptToken(Bits);
        } else if ((next == 98 /* Ch.b */  || next == 66 /* Ch.B */ ) && (input.next == 39 /* Ch.SingleQuote */  || input.next == 34 /* Ch.DoubleQuote */ )) {
            const quoteStyle = input.next;
            input.advance();
            if (d.treatBitsAsBytes) {
                readLiteral(input, quoteStyle, d.backslashEscapes);
                input.acceptToken(Bytes);
            } else {
                readBits(input, quoteStyle);
                input.acceptToken(Bits);
            }
        } else if (next == 48 /* Ch._0 */  && (input.next == 120 /* Ch.x */  || input.next == 88 /* Ch.X */ ) || (next == 120 /* Ch.x */  || next == 88 /* Ch.X */ ) && input.next == 39 /* Ch.SingleQuote */ ) {
            let quoted = input.next == 39 /* Ch.SingleQuote */ ;
            input.advance();
            while(isHexDigit(input.next))input.advance();
            if (quoted && input.next == 39 /* Ch.SingleQuote */ ) input.advance();
            input.acceptToken(Number);
        } else if (next == 46 /* Ch.Dot */  && input.next >= 48 /* Ch._0 */  && input.next <= 57 /* Ch._9 */ ) {
            readNumber(input, true);
            input.acceptToken(Number);
        } else if (next == 46 /* Ch.Dot */ ) input.acceptToken(Dot);
        else if (next >= 48 /* Ch._0 */  && next <= 57 /* Ch._9 */ ) {
            readNumber(input, false);
            input.acceptToken(Number);
        } else if (inString(next, d.operatorChars)) {
            while(inString(input.next, d.operatorChars))input.advance();
            input.acceptToken(Operator);
        } else if (inString(next, d.specialVar)) {
            if (input.next == next) input.advance();
            readWordOrQuoted(input);
            input.acceptToken(SpecialVar);
        } else if (inString(next, d.identifierQuotes)) {
            readLiteral(input, next, false);
            input.acceptToken(QuotedIdentifier);
        } else if (next == 58 /* Ch.Colon */  || next == 44 /* Ch.Comma */ ) input.acceptToken(Punctuation);
        else if (isAlpha(next)) {
            let word = readWord(input, String.fromCharCode(next));
            input.acceptToken(input.next == 46 /* Ch.Dot */  ? Identifier : (_a = d.words[word.toLowerCase()]) !== null && _a !== void 0 ? _a : Identifier);
        }
    });
}
const tokens = /*@__PURE__*/ tokensFor(defaults);
// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser$1 = /*@__PURE__*/ (0, _lr.LRParser).deserialize({
    version: 14,
    states: "%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",
    stateData: ",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",
    goto: "#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",
    nodeNames: "⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",
    maxTerm: 38,
    skippedNodes: [
        0,
        1,
        2
    ],
    repeatNodeCount: 3,
    tokenData: "RORO",
    tokenizers: [
        0,
        tokens
    ],
    topRules: {
        "Script": [
            0,
            25
        ]
    },
    tokenPrec: 0
});
function tokenBefore(tree) {
    let cursor = tree.cursor().moveTo(tree.from, -1);
    while(/Comment/.test(cursor.name))cursor.moveTo(cursor.from, -1);
    return cursor.node;
}
function idName(doc, node) {
    let text = doc.sliceString(node.from, node.to);
    let quoted = /^([`'"])(.*)\1$/.exec(text);
    return quoted ? quoted[2] : text;
}
function plainID(node) {
    return node && (node.name == "Identifier" || node.name == "QuotedIdentifier");
}
function pathFor(doc, id) {
    if (id.name == "CompositeIdentifier") {
        let path = [];
        for(let ch = id.firstChild; ch; ch = ch.nextSibling)if (plainID(ch)) path.push(idName(doc, ch));
        return path;
    }
    return [
        idName(doc, id)
    ];
}
function parentsFor(doc, node) {
    for(let path = [];;){
        if (!node || node.name != ".") return path;
        let name = tokenBefore(node);
        if (!plainID(name)) return path;
        path.unshift(idName(doc, name));
        node = tokenBefore(name);
    }
}
function sourceContext(state, startPos) {
    let pos = (0, _language.syntaxTree)(state).resolveInner(startPos, -1);
    let aliases = getAliases(state.doc, pos);
    if (pos.name == "Identifier" || pos.name == "QuotedIdentifier" || pos.name == "Keyword") return {
        from: pos.from,
        quoted: pos.name == "QuotedIdentifier" ? state.doc.sliceString(pos.from, pos.from + 1) : null,
        parents: parentsFor(state.doc, tokenBefore(pos)),
        aliases
    };
    if (pos.name == ".") return {
        from: startPos,
        quoted: null,
        parents: parentsFor(state.doc, pos),
        aliases
    };
    else return {
        from: startPos,
        quoted: null,
        parents: [],
        empty: true,
        aliases
    };
}
const EndFrom = /*@__PURE__*/ new Set(/*@__PURE__*/ "where group having order union intersect except all distinct limit offset fetch for".split(" "));
function getAliases(doc, at) {
    let statement;
    for(let parent = at; !statement; parent = parent.parent){
        if (!parent) return null;
        if (parent.name == "Statement") statement = parent;
    }
    let aliases = null;
    for(let scan = statement.firstChild, sawFrom = false, prevID = null; scan; scan = scan.nextSibling){
        let kw = scan.name == "Keyword" ? doc.sliceString(scan.from, scan.to).toLowerCase() : null;
        let alias = null;
        if (!sawFrom) sawFrom = kw == "from";
        else if (kw == "as" && prevID && plainID(scan.nextSibling)) alias = idName(doc, scan.nextSibling);
        else if (kw && EndFrom.has(kw)) break;
        else if (prevID && plainID(scan)) alias = idName(doc, scan);
        if (alias) {
            if (!aliases) aliases = Object.create(null);
            aliases[alias] = pathFor(doc, prevID);
        }
        prevID = /Identifier$/.test(scan.name) ? scan : null;
    }
    return aliases;
}
function maybeQuoteCompletions(quote, completions) {
    if (!quote) return completions;
    return completions.map((c)=>Object.assign(Object.assign({}, c), {
            label: quote + c.label + quote,
            apply: undefined
        }));
}
const Span = /^\w*$/, QuotedSpan = /^[`'"]?\w*[`'"]?$/;
class CompletionLevel {
    constructor(){
        this.list = [];
        this.children = undefined;
    }
    child(name) {
        let children = this.children || (this.children = Object.create(null));
        return children[name] || (children[name] = new CompletionLevel);
    }
    childCompletions(type) {
        return this.children ? Object.keys(this.children).filter((x)=>x).map((name)=>({
                label: name,
                type
            })) : [];
    }
}
function completeFromSchema(schema, tables, schemas, defaultTableName, defaultSchemaName) {
    let top = new CompletionLevel;
    let defaultSchema = top.child(defaultSchemaName || "");
    for(let table in schema){
        let dot = table.indexOf(".");
        let schemaCompletions = dot > -1 ? top.child(table.slice(0, dot)) : defaultSchema;
        let tableCompletions = schemaCompletions.child(dot > -1 ? table.slice(dot + 1) : table);
        tableCompletions.list = schema[table].map((val)=>typeof val == "string" ? {
                label: val,
                type: "property"
            } : val);
    }
    defaultSchema.list = (tables || defaultSchema.childCompletions("type")).concat(defaultTableName ? defaultSchema.child(defaultTableName).list : []);
    for(let sName in top.children){
        let schema = top.child(sName);
        if (!schema.list.length) schema.list = schema.childCompletions("type");
    }
    top.list = defaultSchema.list.concat(schemas || top.childCompletions("type"));
    return (context)=>{
        let { parents , from , quoted , empty , aliases  } = sourceContext(context.state, context.pos);
        if (empty && !context.explicit) return null;
        if (aliases && parents.length == 1) parents = aliases[parents[0]] || parents;
        let level = top;
        for (let name of parents){
            while(!level.children || !level.children[name]){
                if (level == top) level = defaultSchema;
                else if (level == defaultSchema && defaultTableName) level = level.child(defaultTableName);
                else return null;
            }
            level = level.child(name);
        }
        let quoteAfter = quoted && context.state.sliceDoc(context.pos, context.pos + 1) == quoted;
        let options = level.list;
        if (level == top && aliases) options = options.concat(Object.keys(aliases).map((name)=>({
                label: name,
                type: "constant"
            })));
        return {
            from,
            to: quoteAfter ? context.pos + 1 : undefined,
            options: maybeQuoteCompletions(quoted, options),
            validFor: quoted ? QuotedSpan : Span
        };
    };
}
function completeKeywords(keywords, upperCase) {
    let completions = Object.keys(keywords).map((keyword)=>({
            label: upperCase ? keyword.toUpperCase() : keyword,
            type: keywords[keyword] == Type ? "type" : keywords[keyword] == Keyword ? "keyword" : "variable",
            boost: -1
        }));
    return (0, _autocomplete.ifNotIn)([
        "QuotedIdentifier",
        "SpecialVar",
        "String",
        "LineComment",
        "BlockComment",
        "."
    ], (0, _autocomplete.completeFromList)(completions));
}
let parser = /*@__PURE__*/ parser$1.configure({
    props: [
        /*@__PURE__*/ (0, _language.indentNodeProp).add({
            Statement: /*@__PURE__*/ (0, _language.continuedIndent)()
        }),
        /*@__PURE__*/ (0, _language.foldNodeProp).add({
            Statement (tree) {
                return {
                    from: tree.firstChild.to,
                    to: tree.to
                };
            },
            BlockComment (tree) {
                return {
                    from: tree.from + 2,
                    to: tree.to - 2
                };
            }
        }),
        /*@__PURE__*/ (0, _highlight.styleTags)({
            Keyword: (0, _highlight.tags).keyword,
            Type: (0, _highlight.tags).typeName,
            Builtin: /*@__PURE__*/ (0, _highlight.tags).standard((0, _highlight.tags).name),
            Bits: (0, _highlight.tags).number,
            Bytes: (0, _highlight.tags).string,
            Bool: (0, _highlight.tags).bool,
            Null: (0, _highlight.tags).null,
            Number: (0, _highlight.tags).number,
            String: (0, _highlight.tags).string,
            Identifier: (0, _highlight.tags).name,
            QuotedIdentifier: /*@__PURE__*/ (0, _highlight.tags).special((0, _highlight.tags).string),
            SpecialVar: /*@__PURE__*/ (0, _highlight.tags).special((0, _highlight.tags).name),
            LineComment: (0, _highlight.tags).lineComment,
            BlockComment: (0, _highlight.tags).blockComment,
            Operator: (0, _highlight.tags).operator,
            "Semi Punctuation": (0, _highlight.tags).punctuation,
            "( )": (0, _highlight.tags).paren,
            "{ }": (0, _highlight.tags).brace,
            "[ ]": (0, _highlight.tags).squareBracket
        })
    ]
});
/**
Represents an SQL dialect.
*/ class SQLDialect {
    constructor(/**
    @internal
    */ dialect, /**
    The language for this dialect.
    */ language){
        this.dialect = dialect;
        this.language = language;
    }
    /**
    Returns the language for this dialect as an extension.
    */ get extension() {
        return this.language.extension;
    }
    /**
    Define a new dialect.
    */ static define(spec) {
        let d = dialect(spec, spec.keywords, spec.types, spec.builtin);
        let language = (0, _language.LRLanguage).define({
            name: "sql",
            parser: parser.configure({
                tokenizers: [
                    {
                        from: tokens,
                        to: tokensFor(d)
                    }
                ]
            }),
            languageData: {
                commentTokens: {
                    line: "--",
                    block: {
                        open: "/*",
                        close: "*/"
                    }
                },
                closeBrackets: {
                    brackets: [
                        "(",
                        "[",
                        "{",
                        "'",
                        '"',
                        "`"
                    ]
                }
            }
        });
        return new SQLDialect(d, language);
    }
}
/**
Returns a completion source that provides keyword completion for
the given SQL dialect.
*/ function keywordCompletionSource(dialect, upperCase = false) {
    return completeKeywords(dialect.dialect.words, upperCase);
}
/**
FIXME remove on 1.0 @internal
*/ function keywordCompletion(dialect, upperCase = false) {
    return dialect.language.data.of({
        autocomplete: keywordCompletionSource(dialect, upperCase)
    });
}
/**
Returns a completion sources that provides schema-based completion
for the given configuration.
*/ function schemaCompletionSource(config) {
    return config.schema ? completeFromSchema(config.schema, config.tables, config.schemas, config.defaultTable, config.defaultSchema) : ()=>null;
}
/**
FIXME remove on 1.0 @internal
*/ function schemaCompletion(config) {
    return config.schema ? (config.dialect || StandardSQL).language.data.of({
        autocomplete: schemaCompletionSource(config)
    }) : [];
}
/**
SQL language support for the given SQL dialect, with keyword
completion, and, if provided, schema-based completion as extra
extensions.
*/ function sql(config = {}) {
    let lang = config.dialect || StandardSQL;
    return new (0, _language.LanguageSupport)(lang.language, [
        schemaCompletion(config),
        keywordCompletion(lang, !!config.upperCaseKeywords)
    ]);
}
/**
The standard SQL dialect.
*/ const StandardSQL = /*@__PURE__*/ SQLDialect.define({});
/**
Dialect for [PostgreSQL](https://www.postgresql.org).
*/ const PostgreSQL = /*@__PURE__*/ SQLDialect.define({
    charSetCasts: true,
    doubleDollarQuotedStrings: true,
    operatorChars: "+-*/<>=~!@#%^&|`?",
    specialVar: "",
    keywords: SQLKeywords + "a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",
    types: SQLTypes + "bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"
});
const MySQLKeywords = "accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill";
const MySQLTypes = SQLTypes + "bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed";
const MySQLBuiltin = "charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee";
/**
[MySQL](https://dev.mysql.com/) dialect.
*/ const MySQL = /*@__PURE__*/ SQLDialect.define({
    operatorChars: "*+-%<>!=&|^",
    charSetCasts: true,
    doubleQuotedStrings: true,
    unquotedBitLiterals: true,
    hashComments: true,
    spaceAfterDashes: true,
    specialVar: "@?",
    identifierQuotes: "`",
    keywords: SQLKeywords + "group_concat " + MySQLKeywords,
    types: MySQLTypes,
    builtin: MySQLBuiltin
});
/**
Variant of [`MySQL`](https://codemirror.net/6/docs/ref/#lang-sql.MySQL) for
[MariaDB](https://mariadb.org/).
*/ const MariaSQL = /*@__PURE__*/ SQLDialect.define({
    operatorChars: "*+-%<>!=&|^",
    charSetCasts: true,
    doubleQuotedStrings: true,
    unquotedBitLiterals: true,
    hashComments: true,
    spaceAfterDashes: true,
    specialVar: "@?",
    identifierQuotes: "`",
    keywords: SQLKeywords + "always generated groupby_concat hard persistent shutdown soft virtual " + MySQLKeywords,
    types: MySQLTypes,
    builtin: MySQLBuiltin
});
/**
SQL dialect for Microsoft [SQL
Server](https://www.microsoft.com/en-us/sql-server).
*/ const MSSQL = /*@__PURE__*/ SQLDialect.define({
    keywords: SQLKeywords + "trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",
    types: SQLTypes + "bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",
    builtin: "binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",
    operatorChars: "*+-%<>!=^&|/",
    specialVar: "@"
});
/**
[SQLite](https://sqlite.org/) dialect.
*/ const SQLite = /*@__PURE__*/ SQLDialect.define({
    keywords: SQLKeywords + "abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",
    types: SQLTypes + "bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",
    builtin: "auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",
    operatorChars: "*+-%<>!=&|/~",
    identifierQuotes: '`"',
    specialVar: "@:?$"
});
/**
Dialect for [Cassandra](https://cassandra.apache.org/)'s SQL-ish query language.
*/ const Cassandra = /*@__PURE__*/ SQLDialect.define({
    keywords: "add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",
    types: SQLTypes + "ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",
    slashComments: true
});
/**
[PL/SQL](https://en.wikipedia.org/wiki/PL/SQL) dialect.
*/ const PLSQL = /*@__PURE__*/ SQLDialect.define({
    keywords: SQLKeywords + "abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",
    builtin: "appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",
    types: SQLTypes + "ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",
    operatorChars: "*/+-%<>!=~",
    doubleQuotedStrings: true,
    charSetCasts: true
});

},{"@codemirror/language":"gATQT","@lezer/highlight":"jPvEX","@lezer/lr":"6BaXg","@codemirror/autocomplete":"daAey","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["01DC8"], null, "parcelRequire9c72")

//# sourceMappingURL=dist.b23ffa45.js.map
