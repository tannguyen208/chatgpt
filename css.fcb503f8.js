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
})({"fs5q0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "10b8127afcb503f8";
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

},{}],"dBoTT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mkCSS", ()=>mkCSS);
parcelHelpers.export(exports, "keywords", ()=>keywords);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "sCSS", ()=>sCSS);
parcelHelpers.export(exports, "less", ()=>less);
parcelHelpers.export(exports, "gss", ()=>gss);
function mkCSS(parserConfig) {
    parserConfig = {
        ...defaults,
        ...parserConfig
    };
    var inline = parserConfig.inline;
    var tokenHooks = parserConfig.tokenHooks, documentTypes = parserConfig.documentTypes || {}, mediaTypes = parserConfig.mediaTypes || {}, mediaFeatures = parserConfig.mediaFeatures || {}, mediaValueKeywords = parserConfig.mediaValueKeywords || {}, propertyKeywords = parserConfig.propertyKeywords || {}, nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {}, fontProperties = parserConfig.fontProperties || {}, counterDescriptors = parserConfig.counterDescriptors || {}, colorKeywords = parserConfig.colorKeywords || {}, valueKeywords = parserConfig.valueKeywords || {}, allowNested = parserConfig.allowNested, lineComment = parserConfig.lineComment, supportsAtComponent = parserConfig.supportsAtComponent === true, highlightNonStandardPropertyKeywords = parserConfig.highlightNonStandardPropertyKeywords !== false;
    var type, override;
    function ret(style, tp) {
        type = tp;
        return style;
    }
    // Tokenizers
    function tokenBase(stream, state) {
        var ch = stream.next();
        if (tokenHooks[ch]) {
            var result = tokenHooks[ch](stream, state);
            if (result !== false) return result;
        }
        if (ch == "@") {
            stream.eatWhile(/[\w\\\-]/);
            return ret("def", stream.current());
        } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
        else if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
        } else if (ch == "#") {
            stream.eatWhile(/[\w\\\-]/);
            return ret("atom", "hash");
        } else if (ch == "!") {
            stream.match(/^\s*\w*/);
            return ret("keyword", "important");
        } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
            stream.eatWhile(/[\w.%]/);
            return ret("number", "unit");
        } else if (ch === "-") {
            if (/[\d.]/.test(stream.peek())) {
                stream.eatWhile(/[\w.%]/);
                return ret("number", "unit");
            } else if (stream.match(/^-[\w\\\-]*/)) {
                stream.eatWhile(/[\w\\\-]/);
                if (stream.match(/^\s*:/, false)) return ret("def", "variable-definition");
                return ret("variableName", "variable");
            } else if (stream.match(/^\w+-/)) return ret("meta", "meta");
        } else if (/[,+>*\/]/.test(ch)) return ret(null, "select-op");
        else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) return ret("qualifier", "qualifier");
        else if (/[:;{}\[\]\(\)]/.test(ch)) return ret(null, ch);
        else if (stream.match(/^[\w-.]+(?=\()/)) {
            if (/^(url(-prefix)?|domain|regexp)$/i.test(stream.current())) state.tokenize = tokenParenthesized;
            return ret("variableName.function", "variable");
        } else if (/[\w\\\-]/.test(ch)) {
            stream.eatWhile(/[\w\\\-]/);
            return ret("property", "word");
        } else return ret(null, null);
    }
    function tokenString(quote) {
        return function(stream, state) {
            var escaped = false, ch;
            while((ch = stream.next()) != null){
                if (ch == quote && !escaped) {
                    if (quote == ")") stream.backUp(1);
                    break;
                }
                escaped = !escaped && ch == "\\";
            }
            if (ch == quote || !escaped && quote != ")") state.tokenize = null;
            return ret("string", "string");
        };
    }
    function tokenParenthesized(stream, state) {
        stream.next(); // Must be '('
        if (!stream.match(/^\s*[\"\')]/, false)) state.tokenize = tokenString(")");
        else state.tokenize = null;
        return ret(null, "(");
    }
    // Context management
    function Context(type, indent, prev) {
        this.type = type;
        this.indent = indent;
        this.prev = prev;
    }
    function pushContext(state, stream, type, indent) {
        state.context = new Context(type, stream.indentation() + (indent === false ? 0 : stream.indentUnit), state.context);
        return type;
    }
    function popContext(state) {
        if (state.context.prev) state.context = state.context.prev;
        return state.context.type;
    }
    function pass(type, stream, state) {
        return states[state.context.type](type, stream, state);
    }
    function popAndPass(type, stream, state, n) {
        for(var i = n || 1; i > 0; i--)state.context = state.context.prev;
        return pass(type, stream, state);
    }
    // Parser
    function wordAsValue(stream) {
        var word = stream.current().toLowerCase();
        if (valueKeywords.hasOwnProperty(word)) override = "atom";
        else if (colorKeywords.hasOwnProperty(word)) override = "keyword";
        else override = "variable";
    }
    var states = {};
    states.top = function(type, stream, state) {
        if (type == "{") return pushContext(state, stream, "block");
        else if (type == "}" && state.context.prev) return popContext(state);
        else if (supportsAtComponent && /@component/i.test(type)) return pushContext(state, stream, "atComponentBlock");
        else if (/^@(-moz-)?document$/i.test(type)) return pushContext(state, stream, "documentTypes");
        else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) return pushContext(state, stream, "atBlock");
        else if (/^@(font-face|counter-style)/i.test(type)) {
            state.stateArg = type;
            return "restricted_atBlock_before";
        } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) return "keyframes";
        else if (type && type.charAt(0) == "@") return pushContext(state, stream, "at");
        else if (type == "hash") override = "builtin";
        else if (type == "word") override = "tag";
        else if (type == "variable-definition") return "maybeprop";
        else if (type == "interpolation") return pushContext(state, stream, "interpolation");
        else if (type == ":") return "pseudo";
        else if (allowNested && type == "(") return pushContext(state, stream, "parens");
        return state.context.type;
    };
    states.block = function(type, stream, state) {
        if (type == "word") {
            var word = stream.current().toLowerCase();
            if (propertyKeywords.hasOwnProperty(word)) {
                override = "property";
                return "maybeprop";
            } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
                override = highlightNonStandardPropertyKeywords ? "string.special" : "property";
                return "maybeprop";
            } else if (allowNested) {
                override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
                return "block";
            } else {
                override = "error";
                return "maybeprop";
            }
        } else if (type == "meta") return "block";
        else if (!allowNested && (type == "hash" || type == "qualifier")) {
            override = "error";
            return "block";
        } else return states.top(type, stream, state);
    };
    states.maybeprop = function(type, stream, state) {
        if (type == ":") return pushContext(state, stream, "prop");
        return pass(type, stream, state);
    };
    states.prop = function(type, stream, state) {
        if (type == ";") return popContext(state);
        if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
        if (type == "}" || type == "{") return popAndPass(type, stream, state);
        if (type == "(") return pushContext(state, stream, "parens");
        if (type == "hash" && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(stream.current())) override = "error";
        else if (type == "word") wordAsValue(stream);
        else if (type == "interpolation") return pushContext(state, stream, "interpolation");
        return "prop";
    };
    states.propBlock = function(type, _stream, state) {
        if (type == "}") return popContext(state);
        if (type == "word") {
            override = "property";
            return "maybeprop";
        }
        return state.context.type;
    };
    states.parens = function(type, stream, state) {
        if (type == "{" || type == "}") return popAndPass(type, stream, state);
        if (type == ")") return popContext(state);
        if (type == "(") return pushContext(state, stream, "parens");
        if (type == "interpolation") return pushContext(state, stream, "interpolation");
        if (type == "word") wordAsValue(stream);
        return "parens";
    };
    states.pseudo = function(type, stream, state) {
        if (type == "meta") return "pseudo";
        if (type == "word") {
            override = "variableName.constant";
            return state.context.type;
        }
        return pass(type, stream, state);
    };
    states.documentTypes = function(type, stream, state) {
        if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
            override = "tag";
            return state.context.type;
        } else return states.atBlock(type, stream, state);
    };
    states.atBlock = function(type, stream, state) {
        if (type == "(") return pushContext(state, stream, "atBlock_parens");
        if (type == "}" || type == ";") return popAndPass(type, stream, state);
        if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");
        if (type == "interpolation") return pushContext(state, stream, "interpolation");
        if (type == "word") {
            var word = stream.current().toLowerCase();
            if (word == "only" || word == "not" || word == "and" || word == "or") override = "keyword";
            else if (mediaTypes.hasOwnProperty(word)) override = "attribute";
            else if (mediaFeatures.hasOwnProperty(word)) override = "property";
            else if (mediaValueKeywords.hasOwnProperty(word)) override = "keyword";
            else if (propertyKeywords.hasOwnProperty(word)) override = "property";
            else if (nonStandardPropertyKeywords.hasOwnProperty(word)) override = highlightNonStandardPropertyKeywords ? "string.special" : "property";
            else if (valueKeywords.hasOwnProperty(word)) override = "atom";
            else if (colorKeywords.hasOwnProperty(word)) override = "keyword";
            else override = "error";
        }
        return state.context.type;
    };
    states.atComponentBlock = function(type, stream, state) {
        if (type == "}") return popAndPass(type, stream, state);
        if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
        if (type == "word") override = "error";
        return state.context.type;
    };
    states.atBlock_parens = function(type, stream, state) {
        if (type == ")") return popContext(state);
        if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
        return states.atBlock(type, stream, state);
    };
    states.restricted_atBlock_before = function(type, stream, state) {
        if (type == "{") return pushContext(state, stream, "restricted_atBlock");
        if (type == "word" && state.stateArg == "@counter-style") {
            override = "variable";
            return "restricted_atBlock_before";
        }
        return pass(type, stream, state);
    };
    states.restricted_atBlock = function(type, stream, state) {
        if (type == "}") {
            state.stateArg = null;
            return popContext(state);
        }
        if (type == "word") {
            if (state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase()) || state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())) override = "error";
            else override = "property";
            return "maybeprop";
        }
        return "restricted_atBlock";
    };
    states.keyframes = function(type, stream, state) {
        if (type == "word") {
            override = "variable";
            return "keyframes";
        }
        if (type == "{") return pushContext(state, stream, "top");
        return pass(type, stream, state);
    };
    states.at = function(type, stream, state) {
        if (type == ";") return popContext(state);
        if (type == "{" || type == "}") return popAndPass(type, stream, state);
        if (type == "word") override = "tag";
        else if (type == "hash") override = "builtin";
        return "at";
    };
    states.interpolation = function(type, stream, state) {
        if (type == "}") return popContext(state);
        if (type == "{" || type == ";") return popAndPass(type, stream, state);
        if (type == "word") override = "variable";
        else if (type != "variable" && type != "(" && type != ")") override = "error";
        return "interpolation";
    };
    return {
        name: parserConfig.name,
        startState: function() {
            return {
                tokenize: null,
                state: inline ? "block" : "top",
                stateArg: null,
                context: new Context(inline ? "block" : "top", 0, null)
            };
        },
        token: function(stream, state) {
            if (!state.tokenize && stream.eatSpace()) return null;
            var style = (state.tokenize || tokenBase)(stream, state);
            if (style && typeof style == "object") {
                type = style[1];
                style = style[0];
            }
            override = style;
            if (type != "comment") state.state = states[state.state](type, stream, state);
            return override;
        },
        indent: function(state, textAfter, iCx) {
            var cx = state.context, ch = textAfter && textAfter.charAt(0);
            var indent = cx.indent;
            if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
            if (cx.prev) {
                if (ch == "}" && (cx.type == "block" || cx.type == "top" || cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
                    // Resume indentation from parent context.
                    cx = cx.prev;
                    indent = cx.indent;
                } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") || ch == "{" && (cx.type == "at" || cx.type == "atBlock")) // Dedent relative to current context.
                indent = Math.max(0, cx.indent - iCx.unit);
            }
            return indent;
        },
        languageData: {
            indentOnInput: /^\s*\}$/,
            commentTokens: {
                line: lineComment,
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            autocomplete: allWords
        }
    };
}
function keySet(array) {
    var keys = {};
    for(var i = 0; i < array.length; ++i)keys[array[i].toLowerCase()] = true;
    return keys;
}
var documentTypes_ = [
    "domain",
    "regexp",
    "url",
    "url-prefix"
], documentTypes = keySet(documentTypes_);
var mediaTypes_ = [
    "all",
    "aural",
    "braille",
    "handheld",
    "print",
    "projection",
    "screen",
    "tty",
    "tv",
    "embossed"
], mediaTypes = keySet(mediaTypes_);
var mediaFeatures_ = [
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
    "device-width",
    "min-device-width",
    "max-device-width",
    "device-height",
    "min-device-height",
    "max-device-height",
    "aspect-ratio",
    "min-aspect-ratio",
    "max-aspect-ratio",
    "device-aspect-ratio",
    "min-device-aspect-ratio",
    "max-device-aspect-ratio",
    "color",
    "min-color",
    "max-color",
    "color-index",
    "min-color-index",
    "max-color-index",
    "monochrome",
    "min-monochrome",
    "max-monochrome",
    "resolution",
    "min-resolution",
    "max-resolution",
    "scan",
    "grid",
    "orientation",
    "device-pixel-ratio",
    "min-device-pixel-ratio",
    "max-device-pixel-ratio",
    "pointer",
    "any-pointer",
    "hover",
    "any-hover",
    "prefers-color-scheme",
    "dynamic-range",
    "video-dynamic-range"
], mediaFeatures = keySet(mediaFeatures_);
var mediaValueKeywords_ = [
    "landscape",
    "portrait",
    "none",
    "coarse",
    "fine",
    "on-demand",
    "hover",
    "interlace",
    "progressive",
    "dark",
    "light",
    "standard",
    "high"
], mediaValueKeywords = keySet(mediaValueKeywords_);
var propertyKeywords_ = [
    "align-content",
    "align-items",
    "align-self",
    "alignment-adjust",
    "alignment-baseline",
    "all",
    "anchor-point",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "azimuth",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "binding",
    "bleed",
    "block-size",
    "bookmark-label",
    "bookmark-level",
    "bookmark-state",
    "bookmark-target",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "color",
    "color-profile",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "counter-increment",
    "counter-reset",
    "crop",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "drop-initial-after-adjust",
    "drop-initial-after-align",
    "drop-initial-before-adjust",
    "drop-initial-before-align",
    "drop-initial-size",
    "drop-initial-value",
    "elevation",
    "empty-cells",
    "fit",
    "fit-content",
    "fit-position",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "float-offset",
    "flow-from",
    "flow-into",
    "font",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-gap",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-gap",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "inline-box-align",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "line-height-step",
    "line-stacking",
    "line-stacking-ruby",
    "line-stacking-shift",
    "line-stacking-strategy",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "marquee-direction",
    "marquee-loop",
    "marquee-play-count",
    "marquee-speed",
    "marquee-style",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "move-to",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-style",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "page-policy",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pitch",
    "pitch-range",
    "place-content",
    "place-items",
    "place-self",
    "play-during",
    "position",
    "presentation-level",
    "punctuation-trim",
    "quotes",
    "region-break-after",
    "region-break-before",
    "region-break-inside",
    "region-fragment",
    "rendering-intent",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "richness",
    "right",
    "rotate",
    "rotation",
    "rotation-point",
    "row-gap",
    "ruby-align",
    "ruby-overhang",
    "ruby-position",
    "ruby-span",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-type",
    "shape-image-threshold",
    "shape-inside",
    "shape-margin",
    "shape-outside",
    "size",
    "speak",
    "speak-as",
    "speak-header",
    "speak-numeral",
    "speak-punctuation",
    "speech-rate",
    "stress",
    "string-set",
    "tab-size",
    "table-layout",
    "target",
    "target-name",
    "target-new",
    "target-position",
    "text-align",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-height",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-outline",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-space-collapse",
    "text-transform",
    "text-underline-position",
    "text-wrap",
    "top",
    "touch-action",
    "transform",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-select",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
    // SVG-specific
    "clip-path",
    "clip-rule",
    "mask",
    "enable-background",
    "filter",
    "flood-color",
    "flood-opacity",
    "lighting-color",
    "stop-color",
    "stop-opacity",
    "pointer-events",
    "color-interpolation",
    "color-interpolation-filters",
    "color-rendering",
    "fill",
    "fill-opacity",
    "fill-rule",
    "image-rendering",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "paint-order",
    "shape-rendering",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-rendering",
    "baseline-shift",
    "dominant-baseline",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "text-anchor",
    "writing-mode"
], propertyKeywords = keySet(propertyKeywords_);
var nonStandardPropertyKeywords_ = [
    "accent-color",
    "aspect-ratio",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "content-visibility",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "overflow-anchor",
    "overscroll-behavior",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "scroll-snap-stop",
    "scrollbar-3d-light-color",
    "scrollbar-arrow-color",
    "scrollbar-base-color",
    "scrollbar-dark-shadow-color",
    "scrollbar-face-color",
    "scrollbar-highlight-color",
    "scrollbar-shadow-color",
    "scrollbar-track-color",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "shape-inside",
    "zoom"
], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);
var fontProperties_ = [
    "font-display",
    "font-family",
    "src",
    "unicode-range",
    "font-variant",
    "font-feature-settings",
    "font-stretch",
    "font-weight",
    "font-style"
], fontProperties = keySet(fontProperties_);
var counterDescriptors_ = [
    "additive-symbols",
    "fallback",
    "negative",
    "pad",
    "prefix",
    "range",
    "speak-as",
    "suffix",
    "symbols",
    "system"
], counterDescriptors = keySet(counterDescriptors_);
var colorKeywords_ = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
], colorKeywords = keySet(colorKeywords_);
var valueKeywords_ = [
    "above",
    "absolute",
    "activeborder",
    "additive",
    "activecaption",
    "afar",
    "after-white-space",
    "ahead",
    "alias",
    "all",
    "all-scroll",
    "alphabetic",
    "alternate",
    "always",
    "amharic",
    "amharic-abegede",
    "antialiased",
    "appworkspace",
    "arabic-indic",
    "armenian",
    "asterisks",
    "attr",
    "auto",
    "auto-flow",
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
    "axis-pan",
    "background",
    "backwards",
    "baseline",
    "below",
    "bidi-override",
    "binary",
    "bengali",
    "blink",
    "block",
    "block-axis",
    "blur",
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
    "brightness",
    "bullets",
    "button",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "calc",
    "cambodian",
    "capitalize",
    "caps-lock-indicator",
    "caption",
    "captiontext",
    "caret",
    "cell",
    "center",
    "checkbox",
    "circle",
    "cjk-decimal",
    "cjk-earthly-branch",
    "cjk-heavenly-stem",
    "cjk-ideographic",
    "clear",
    "clip",
    "close-quote",
    "col-resize",
    "collapse",
    "color",
    "color-burn",
    "color-dodge",
    "column",
    "column-reverse",
    "compact",
    "condensed",
    "conic-gradient",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "contrast",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "cubic-bezier",
    "currentcolor",
    "cursive",
    "cyclic",
    "darken",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "dense",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "devanagari",
    "difference",
    "disc",
    "discard",
    "disclosure-closed",
    "disclosure-open",
    "document",
    "dot-dash",
    "dot-dot-dash",
    "dotted",
    "double",
    "down",
    "drop-shadow",
    "e-resize",
    "ease",
    "ease-in",
    "ease-in-out",
    "ease-out",
    "element",
    "ellipse",
    "ellipsis",
    "embed",
    "end",
    "ethiopic",
    "ethiopic-abegede",
    "ethiopic-abegede-am-et",
    "ethiopic-abegede-gez",
    "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et",
    "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et",
    "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez",
    "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et",
    "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er",
    "ethiopic-halehame-ti-et",
    "ethiopic-halehame-tig",
    "ethiopic-numeric",
    "ew-resize",
    "exclusion",
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fill-box",
    "fixed",
    "flat",
    "flex",
    "flex-end",
    "flex-start",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "georgian",
    "grayscale",
    "graytext",
    "grid",
    "groove",
    "gujarati",
    "gurmukhi",
    "hand",
    "hangul",
    "hangul-consonant",
    "hard-light",
    "hebrew",
    "help",
    "hidden",
    "hide",
    "higher",
    "highlight",
    "highlighttext",
    "hiragana",
    "hiragana-iroha",
    "horizontal",
    "hsl",
    "hsla",
    "hue",
    "hue-rotate",
    "icon",
    "ignore",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infinite",
    "infobackground",
    "infotext",
    "inherit",
    "initial",
    "inline",
    "inline-axis",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "inset",
    "inside",
    "intrinsic",
    "invert",
    "italic",
    "japanese-formal",
    "japanese-informal",
    "justify",
    "kannada",
    "katakana",
    "katakana-iroha",
    "keep-all",
    "khmer",
    "korean-hangul-formal",
    "korean-hanja-formal",
    "korean-hanja-informal",
    "landscape",
    "lao",
    "large",
    "larger",
    "left",
    "level",
    "lighter",
    "lighten",
    "line-through",
    "linear",
    "linear-gradient",
    "lines",
    "list-item",
    "listbox",
    "listitem",
    "local",
    "logical",
    "loud",
    "lower",
    "lower-alpha",
    "lower-armenian",
    "lower-greek",
    "lower-hexadecimal",
    "lower-latin",
    "lower-norwegian",
    "lower-roman",
    "lowercase",
    "ltr",
    "luminosity",
    "malayalam",
    "manipulation",
    "match",
    "matrix",
    "matrix3d",
    "media-play-button",
    "media-slider",
    "media-sliderthumb",
    "media-volume-slider",
    "media-volume-sliderthumb",
    "medium",
    "menu",
    "menulist",
    "menulist-button",
    "menutext",
    "message-box",
    "middle",
    "min-intrinsic",
    "mix",
    "mongolian",
    "monospace",
    "move",
    "multiple",
    "multiple_mask_images",
    "multiply",
    "myanmar",
    "n-resize",
    "narrower",
    "ne-resize",
    "nesw-resize",
    "no-close-quote",
    "no-drop",
    "no-open-quote",
    "no-repeat",
    "none",
    "normal",
    "not-allowed",
    "nowrap",
    "ns-resize",
    "numbers",
    "numeric",
    "nw-resize",
    "nwse-resize",
    "oblique",
    "octal",
    "opacity",
    "open-quote",
    "optimizeLegibility",
    "optimizeSpeed",
    "oriya",
    "oromo",
    "outset",
    "outside",
    "outside-shape",
    "overlay",
    "overline",
    "padding",
    "padding-box",
    "painted",
    "page",
    "paused",
    "persian",
    "perspective",
    "pinch-zoom",
    "plus-darker",
    "plus-lighter",
    "pointer",
    "polygon",
    "portrait",
    "pre",
    "pre-line",
    "pre-wrap",
    "preserve-3d",
    "progress",
    "push-button",
    "radial-gradient",
    "radio",
    "read-only",
    "read-write",
    "read-write-plaintext-only",
    "rectangle",
    "region",
    "relative",
    "repeat",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeating-conic-gradient",
    "repeat-x",
    "repeat-y",
    "reset",
    "reverse",
    "rgb",
    "rgba",
    "ridge",
    "right",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "round",
    "row",
    "row-resize",
    "row-reverse",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "saturate",
    "saturation",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "screen",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "searchfield",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "self-start",
    "self-end",
    "semi-condensed",
    "semi-expanded",
    "separate",
    "sepia",
    "serif",
    "show",
    "sidama",
    "simp-chinese-formal",
    "simp-chinese-informal",
    "single",
    "skew",
    "skewX",
    "skewY",
    "skip-white-space",
    "slide",
    "slider-horizontal",
    "slider-vertical",
    "sliderthumb-horizontal",
    "sliderthumb-vertical",
    "slow",
    "small",
    "small-caps",
    "small-caption",
    "smaller",
    "soft-light",
    "solid",
    "somali",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "space-around",
    "space-between",
    "space-evenly",
    "spell-out",
    "square",
    "square-button",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "stroke-box",
    "sub",
    "subpixel-antialiased",
    "svg_masks",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
    "system-ui",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "tamil",
    "telugu",
    "text",
    "text-bottom",
    "text-top",
    "textarea",
    "textfield",
    "thai",
    "thick",
    "thin",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "tibetan",
    "tigre",
    "tigrinya-er",
    "tigrinya-er-abegede",
    "tigrinya-et",
    "tigrinya-et-abegede",
    "to",
    "top",
    "trad-chinese-formal",
    "trad-chinese-informal",
    "transform",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
    "unidirectional-pan",
    "unset",
    "up",
    "upper-alpha",
    "upper-armenian",
    "upper-greek",
    "upper-hexadecimal",
    "upper-latin",
    "upper-norwegian",
    "upper-roman",
    "uppercase",
    "urdu",
    "url",
    "var",
    "vertical",
    "vertical-text",
    "view-box",
    "visible",
    "visibleFill",
    "visiblePainted",
    "visibleStroke",
    "visual",
    "w-resize",
    "wait",
    "wave",
    "wider",
    "window",
    "windowframe",
    "windowtext",
    "words",
    "wrap",
    "wrap-reverse",
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small"
], valueKeywords = keySet(valueKeywords_);
var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);
const keywords = {
    properties: propertyKeywords_,
    colors: colorKeywords_,
    fonts: fontProperties_,
    values: valueKeywords_,
    all: allWords
};
const defaults = {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
        "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenCComment;
            return tokenCComment(stream, state);
        }
    }
};
const css = mkCSS({
    name: "css"
});
function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while((ch = stream.next()) != null){
        if (maybeEnd && ch == "/") {
            state.tokenize = null;
            break;
        }
        maybeEnd = ch == "*";
    }
    return [
        "comment",
        "comment"
    ];
}
const sCSS = mkCSS({
    name: "scss",
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
        "/": function(stream, state) {
            if (stream.eat("/")) {
                stream.skipToEnd();
                return [
                    "comment",
                    "comment"
                ];
            } else if (stream.eat("*")) {
                state.tokenize = tokenCComment;
                return tokenCComment(stream, state);
            } else return [
                "operator",
                "operator"
            ];
        },
        ":": function(stream) {
            if (stream.match(/^\s*\{/, false)) return [
                null,
                null
            ];
            return false;
        },
        "$": function(stream) {
            stream.match(/^[\w-]+/);
            if (stream.match(/^\s*:/, false)) return [
                "def",
                "variable-definition"
            ];
            return [
                "variableName.special",
                "variable"
            ];
        },
        "#": function(stream) {
            if (!stream.eat("{")) return false;
            return [
                null,
                "interpolation"
            ];
        }
    }
});
const less = mkCSS({
    name: "less",
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
        "/": function(stream, state) {
            if (stream.eat("/")) {
                stream.skipToEnd();
                return [
                    "comment",
                    "comment"
                ];
            } else if (stream.eat("*")) {
                state.tokenize = tokenCComment;
                return tokenCComment(stream, state);
            } else return [
                "operator",
                "operator"
            ];
        },
        "@": function(stream) {
            if (stream.eat("{")) return [
                null,
                "interpolation"
            ];
            if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
            stream.eatWhile(/[\w\\\-]/);
            if (stream.match(/^\s*:/, false)) return [
                "def",
                "variable-definition"
            ];
            return [
                "variableName",
                "variable"
            ];
        },
        "&": function() {
            return [
                "atom",
                "atom"
            ];
        }
    }
});
const gss = mkCSS({
    name: "gss",
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
        "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenCComment;
            return tokenCComment(stream, state);
        }
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fs5q0"], null, "parcelRequire9c72")

//# sourceMappingURL=css.fcb503f8.js.map
