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
})({"9lMGq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "139d4550a00d413b";
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

},{}],"kyM6T":[function(require,module,exports) {
// Tokenizer
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "haxe", ()=>haxe);
parcelHelpers.export(exports, "hxml", ()=>hxml);
function kw(type) {
    return {
        type: type,
        style: "keyword"
    };
}
var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
var operator = kw("operator"), atom = {
    type: "atom",
    style: "atom"
}, attribute = {
    type: "attribute",
    style: "attribute"
};
var type = kw("typedef");
var keywords = {
    "if": A,
    "while": A,
    "else": B,
    "do": B,
    "try": B,
    "return": C,
    "break": C,
    "continue": C,
    "new": C,
    "throw": C,
    "var": kw("var"),
    "inline": attribute,
    "static": attribute,
    "using": kw("import"),
    "public": attribute,
    "private": attribute,
    "cast": kw("cast"),
    "import": kw("import"),
    "macro": kw("macro"),
    "function": kw("function"),
    "catch": kw("catch"),
    "untyped": kw("untyped"),
    "callback": kw("cb"),
    "for": kw("for"),
    "switch": kw("switch"),
    "case": kw("case"),
    "default": kw("default"),
    "in": operator,
    "never": kw("property_access"),
    "trace": kw("trace"),
    "class": type,
    "abstract": type,
    "enum": type,
    "interface": type,
    "typedef": type,
    "extends": type,
    "implements": type,
    "dynamic": type,
    "true": atom,
    "false": atom,
    "null": atom
};
var isOperatorChar = /[+\-*&%=<>!?|]/;
function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
}
function toUnescaped(stream, end) {
    var escaped = false, next;
    while((next = stream.next()) != null){
        if (next == end && !escaped) return true;
        escaped = !escaped && next == "\\";
    }
}
// Used as scratch variables to communicate multiple values without
// consing up tons of objects.
var type, content;
function ret(tp, style, cont) {
    type = tp;
    content = cont;
    return style;
}
function haxeTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") return chain(stream, state, haxeTokenString(ch));
    else if (/[\[\]{}\(\),;\:\.]/.test(ch)) return ret(ch);
    else if (ch == "0" && stream.eat(/x/i)) {
        stream.eatWhile(/[\da-f]/i);
        return ret("number", "number");
    } else if (/\d/.test(ch) || ch == "-" && stream.eat(/\d/)) {
        stream.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/);
        return ret("number", "number");
    } else if (state.reAllowed && ch == "~" && stream.eat(/\//)) {
        toUnescaped(stream, "/");
        stream.eatWhile(/[gimsu]/);
        return ret("regexp", "string.special");
    } else if (ch == "/") {
        if (stream.eat("*")) return chain(stream, state, haxeTokenComment);
        else if (stream.eat("/")) {
            stream.skipToEnd();
            return ret("comment", "comment");
        } else {
            stream.eatWhile(isOperatorChar);
            return ret("operator", null, stream.current());
        }
    } else if (ch == "#") {
        stream.skipToEnd();
        return ret("conditional", "meta");
    } else if (ch == "@") {
        stream.eat(/:/);
        stream.eatWhile(/[\w_]/);
        return ret("metadata", "meta");
    } else if (isOperatorChar.test(ch)) {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
    } else {
        var word;
        if (/[A-Z]/.test(ch)) {
            stream.eatWhile(/[\w_<>]/);
            word = stream.current();
            return ret("type", "type", word);
        } else {
            stream.eatWhile(/[\w_]/);
            var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
            return known && state.kwAllowed ? ret(known.type, known.style, word) : ret("variable", "variable", word);
        }
    }
}
function haxeTokenString(quote) {
    return function(stream, state) {
        if (toUnescaped(stream, quote)) state.tokenize = haxeTokenBase;
        return ret("string", "string");
    };
}
function haxeTokenComment(stream, state) {
    var maybeEnd = false, ch;
    while(ch = stream.next()){
        if (ch == "/" && maybeEnd) {
            state.tokenize = haxeTokenBase;
            break;
        }
        maybeEnd = ch == "*";
    }
    return ret("comment", "comment");
}
// Parser
var atomicTypes = {
    "atom": true,
    "number": true,
    "variable": true,
    "string": true,
    "regexp": true
};
function HaxeLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
}
function inScope(state, varname) {
    for(var v = state.localVars; v; v = v.next)if (v.name == varname) return true;
}
function parseHaxe(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state;
    cx.stream = stream;
    cx.marked = null, cx.cc = cc;
    if (!state.lexical.hasOwnProperty("align")) state.lexical.align = true;
    while(true){
        var combinator = cc.length ? cc.pop() : statement;
        if (combinator(type, content)) {
            while(cc.length && cc[cc.length - 1].lex)cc.pop()();
            if (cx.marked) return cx.marked;
            if (type == "variable" && inScope(state, content)) return "variableName.local";
            if (type == "variable" && imported(state, content)) return "variableName.special";
            return style;
        }
    }
}
function imported(state, typename) {
    if (/[a-z]/.test(typename.charAt(0))) return false;
    var len = state.importedtypes.length;
    for(var i = 0; i < len; i++)if (state.importedtypes[i] == typename) return true;
}
function registerimport(importname) {
    var state = cx.state;
    for(var t = state.importedtypes; t; t = t.next)if (t.name == importname) return;
    state.importedtypes = {
        name: importname,
        next: state.importedtypes
    };
}
// Combinator utils
var cx = {
    state: null,
    column: null,
    marked: null,
    cc: null
};
function pass() {
    for(var i = arguments.length - 1; i >= 0; i--)cx.cc.push(arguments[i]);
}
function cont() {
    pass.apply(null, arguments);
    return true;
}
function inList(name, list) {
    for(var v = list; v; v = v.next)if (v.name == name) return true;
    return false;
}
function register(varname) {
    var state = cx.state;
    if (state.context) {
        cx.marked = "def";
        if (inList(varname, state.localVars)) return;
        state.localVars = {
            name: varname,
            next: state.localVars
        };
    } else if (state.globalVars) {
        if (inList(varname, state.globalVars)) return;
        state.globalVars = {
            name: varname,
            next: state.globalVars
        };
    }
}
// Combinators
var defaultVars = {
    name: "this",
    next: null
};
function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {
        prev: cx.state.context,
        vars: cx.state.localVars
    };
}
function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
}
popcontext.lex = true;
function pushlex(type, info) {
    var result = function() {
        var state = cx.state;
        state.lexical = new HaxeLexical(state.indented, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
}
function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
        if (state.lexical.type == ")") state.indented = state.lexical.indented;
        state.lexical = state.lexical.prev;
    }
}
poplex.lex = true;
function expect(wanted) {
    function f(type) {
        if (type == wanted) return cont();
        else if (wanted == ";") return pass();
        else return cont(f);
    }
    return f;
}
function statement(type) {
    if (type == "@") return cont(metadef);
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), pushcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "attribute") return cont(maybeattribute);
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"), poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"), block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"), statement, poplex, popcontext);
    if (type == "import") return cont(importdef, expect(";"));
    if (type == "typedef") return cont(typedef);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
}
function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "type") return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(maybeexpression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
}
function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
}
function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator" || type == ":") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
}
function maybeattribute(type) {
    if (type == "attribute") return cont(maybeattribute);
    if (type == "function") return cont(functiondef);
    if (type == "var") return cont(vardef1);
}
function metadef(type) {
    if (type == ":") return cont(metadef);
    if (type == "variable") return cont(metadef);
    if (type == "(") return cont(pushlex(")"), commasep(metaargs, ")"), poplex, statement);
}
function metaargs(type) {
    if (type == "variable") return cont();
}
function importdef(type, value) {
    if (type == "variable" && /[A-Z]/.test(value.charAt(0))) {
        registerimport(value);
        return cont();
    } else if (type == "variable" || type == "property" || type == "." || value == "*") return cont(importdef);
}
function typedef(type, value) {
    if (type == "variable" && /[A-Z]/.test(value.charAt(0))) {
        registerimport(value);
        return cont();
    } else if (type == "type" && /[A-Z]/.test(value.charAt(0))) return cont();
}
function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
}
function property(type) {
    if (type == "variable") {
        cx.marked = "property";
        return cont();
    }
}
function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
}
function commasep(what, end) {
    function proceed(type) {
        if (type == ",") return cont(what, proceed);
        if (type == end) return cont();
        return cont(expect(end));
    }
    return function(type) {
        if (type == end) return cont();
        else return pass(what, proceed);
    };
}
function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
}
function vardef1(type, value) {
    if (type == "variable") {
        register(value);
        return cont(typeuse, vardef2);
    }
    return cont();
}
function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
}
function forspec1(type, value) {
    if (type == "variable") {
        register(value);
        return cont(forin, expression);
    } else return pass();
}
function forin(_type, value) {
    if (value == "in") return cont();
}
function functiondef(type, value) {
    //function names starting with upper-case letters are recognised as types, so cludging them together here.
    if (type == "variable" || type == "type") {
        register(value);
        return cont(functiondef);
    }
    if (value == "new") return cont(functiondef);
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, typeuse, statement, popcontext);
}
function typeuse(type) {
    if (type == ":") return cont(typestring);
}
function typestring(type) {
    if (type == "type") return cont();
    if (type == "variable") return cont();
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}"), poplex);
}
function typeprop(type) {
    if (type == "variable") return cont(typeuse);
}
function funarg(type, value) {
    if (type == "variable") {
        register(value);
        return cont(typeuse);
    }
}
const haxe = {
    name: "haxe",
    startState: function(indentUnit) {
        var defaulttypes = [
            "Int",
            "Float",
            "String",
            "Void",
            "Std",
            "Bool",
            "Dynamic",
            "Array"
        ];
        var state = {
            tokenize: haxeTokenBase,
            reAllowed: true,
            kwAllowed: true,
            cc: [],
            lexical: new HaxeLexical(-indentUnit, 0, "block", false),
            importedtypes: defaulttypes,
            context: null,
            indented: 0
        };
        return state;
    },
    token: function(stream, state) {
        if (stream.sol()) {
            if (!state.lexical.hasOwnProperty("align")) state.lexical.align = false;
            state.indented = stream.indentation();
        }
        if (stream.eatSpace()) return null;
        var style = state.tokenize(stream, state);
        if (type == "comment") return style;
        state.reAllowed = !!(type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/));
        state.kwAllowed = type != ".";
        return parseHaxe(state, style, type, content, stream);
    },
    indent: function(state, textAfter, cx) {
        if (state.tokenize != haxeTokenBase) return 0;
        var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
        if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
        var type = lexical.type, closing = firstChar == type;
        if (type == "vardef") return lexical.indented + 4;
        else if (type == "form" && firstChar == "{") return lexical.indented;
        else if (type == "stat" || type == "form") return lexical.indented + cx.unit;
        else if (lexical.info == "switch" && !closing) return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? cx.unit : 2 * cx.unit);
        else if (lexical.align) return lexical.column + (closing ? 0 : 1);
        else return lexical.indented + (closing ? 0 : cx.unit);
    },
    languageData: {
        indentOnInput: /^\s*[{}]$/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        }
    }
};
const hxml = {
    name: "hxml",
    startState: function() {
        return {
            define: false,
            inString: false
        };
    },
    token: function(stream, state) {
        var ch = stream.peek();
        var sol = stream.sol();
        ///* comments */
        if (ch == "#") {
            stream.skipToEnd();
            return "comment";
        }
        if (sol && ch == "-") {
            var style = "variable-2";
            stream.eat(/-/);
            if (stream.peek() == "-") {
                stream.eat(/-/);
                style = "keyword a";
            }
            if (stream.peek() == "D") {
                stream.eat(/[D]/);
                style = "keyword c";
                state.define = true;
            }
            stream.eatWhile(/[A-Z]/i);
            return style;
        }
        var ch = stream.peek();
        if (state.inString == false && ch == "'") {
            state.inString = true;
            stream.next();
        }
        if (state.inString == true) {
            if (stream.skipTo("'")) ;
            else stream.skipToEnd();
            if (stream.peek() == "'") {
                stream.next();
                state.inString = false;
            }
            return "string";
        }
        stream.next();
        return null;
    },
    languageData: {
        commentTokens: {
            line: "#"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9lMGq"], null, "parcelRequire9c72")

//# sourceMappingURL=haxe.a00d413b.js.map
