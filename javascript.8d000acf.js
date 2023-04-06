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
})({"ajzD7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e5657a2d8d000acf";
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

},{}],"ccsCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "javascript", ()=>javascript);
parcelHelpers.export(exports, "json", ()=>json);
parcelHelpers.export(exports, "jsonld", ()=>jsonld);
parcelHelpers.export(exports, "typescript", ()=>typescript);
function mkJavaScript(parserConfig) {
    var statementIndent = parserConfig.statementIndent;
    var jsonldMode = parserConfig.jsonld;
    var jsonMode = parserConfig.json || jsonldMode;
    var isTS = parserConfig.typescript;
    var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
    // Tokenizer
    var keywords = function() {
        function kw(type) {
            return {
                type: type,
                style: "keyword"
            };
        }
        var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
        var operator = kw("operator"), atom = {
            type: "atom",
            style: "atom"
        };
        return {
            "if": kw("if"),
            "while": A,
            "with": A,
            "else": B,
            "do": B,
            "try": B,
            "finally": B,
            "return": D,
            "break": D,
            "continue": D,
            "new": kw("new"),
            "delete": C,
            "void": C,
            "throw": C,
            "debugger": kw("debugger"),
            "var": kw("var"),
            "const": kw("var"),
            "let": kw("var"),
            "function": kw("function"),
            "catch": kw("catch"),
            "for": kw("for"),
            "switch": kw("switch"),
            "case": kw("case"),
            "default": kw("default"),
            "in": operator,
            "typeof": operator,
            "instanceof": operator,
            "true": atom,
            "false": atom,
            "null": atom,
            "undefined": atom,
            "NaN": atom,
            "Infinity": atom,
            "this": kw("this"),
            "class": kw("class"),
            "super": kw("atom"),
            "yield": C,
            "export": kw("export"),
            "import": kw("import"),
            "extends": C,
            "await": C
        };
    }();
    var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
    var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function readRegexp(stream) {
        var escaped = false, next, inSet = false;
        while((next = stream.next()) != null){
            if (!escaped) {
                if (next == "/" && !inSet) return;
                if (next == "[") inSet = true;
                else if (inSet && next == "]") inSet = false;
            }
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
    function tokenBase(stream, state) {
        var ch = stream.next();
        if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
        } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return ret("number", "number");
        else if (ch == "." && stream.match("..")) return ret("spread", "meta");
        else if (/[\[\]{}\(\),;\:\.]/.test(ch)) return ret(ch);
        else if (ch == "=" && stream.eat(">")) return ret("=>", "operator");
        else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return ret("number", "number");
        else if (/\d/.test(ch)) {
            stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
            return ret("number", "number");
        } else if (ch == "/") {
            if (stream.eat("*")) {
                state.tokenize = tokenComment;
                return tokenComment(stream, state);
            } else if (stream.eat("/")) {
                stream.skipToEnd();
                return ret("comment", "comment");
            } else if (expressionAllowed(stream, state, 1)) {
                readRegexp(stream);
                stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
                return ret("regexp", "string.special");
            } else {
                stream.eat("=");
                return ret("operator", "operator", stream.current());
            }
        } else if (ch == "`") {
            state.tokenize = tokenQuasi;
            return tokenQuasi(stream, state);
        } else if (ch == "#" && stream.peek() == "!") {
            stream.skipToEnd();
            return ret("meta", "meta");
        } else if (ch == "#" && stream.eatWhile(wordRE)) return ret("variable", "property");
        else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start))) {
            stream.skipToEnd();
            return ret("comment", "comment");
        } else if (isOperatorChar.test(ch)) {
            if (ch != ">" || !state.lexical || state.lexical.type != ">") {
                if (stream.eat("=")) {
                    if (ch == "!" || ch == "=") stream.eat("=");
                } else if (/[<>*+\-|&?]/.test(ch)) {
                    stream.eat(ch);
                    if (ch == ">") stream.eat(ch);
                }
            }
            if (ch == "?" && stream.eat(".")) return ret(".");
            return ret("operator", "operator", stream.current());
        } else if (wordRE.test(ch)) {
            stream.eatWhile(wordRE);
            var word = stream.current();
            if (state.lastType != ".") {
                if (keywords.propertyIsEnumerable(word)) {
                    var kw = keywords[word];
                    return ret(kw.type, kw.style, word);
                }
                if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)) return ret("async", "keyword", word);
            }
            return ret("variable", "variable", word);
        }
    }
    function tokenString(quote) {
        return function(stream, state) {
            var escaped = false, next;
            if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
                state.tokenize = tokenBase;
                return ret("jsonld-keyword", "meta");
            }
            while((next = stream.next()) != null){
                if (next == quote && !escaped) break;
                escaped = !escaped && next == "\\";
            }
            if (!escaped) state.tokenize = tokenBase;
            return ret("string", "string");
        };
    }
    function tokenComment(stream, state) {
        var maybeEnd = false, ch;
        while(ch = stream.next()){
            if (ch == "/" && maybeEnd) {
                state.tokenize = tokenBase;
                break;
            }
            maybeEnd = ch == "*";
        }
        return ret("comment", "comment");
    }
    function tokenQuasi(stream, state) {
        var escaped = false, next;
        while((next = stream.next()) != null){
            if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
                state.tokenize = tokenBase;
                break;
            }
            escaped = !escaped && next == "\\";
        }
        return ret("quasi", "string.special", stream.current());
    }
    var brackets = "([{}])";
    // This is a crude lookahead trick to try and notice that we're
    // parsing the argument patterns for a fat-arrow function before we
    // actually hit the arrow token. It only works if the arrow is on
    // the same line as the arguments and there's no strange noise
    // (comments) in between. Fallback is to only notice when we hit the
    // arrow, and not declare the arguments as locals for the arrow
    // body.
    function findFatArrow(stream, state) {
        if (state.fatArrowAt) state.fatArrowAt = null;
        var arrow = stream.string.indexOf("=>", stream.start);
        if (arrow < 0) return;
        if (isTS) {
            var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
            if (m) arrow = m.index;
        }
        var depth = 0, sawSomething = false;
        for(var pos = arrow - 1; pos >= 0; --pos){
            var ch = stream.string.charAt(pos);
            var bracket = brackets.indexOf(ch);
            if (bracket >= 0 && bracket < 3) {
                if (!depth) {
                    ++pos;
                    break;
                }
                if (--depth == 0) {
                    if (ch == "(") sawSomething = true;
                    break;
                }
            } else if (bracket >= 3 && bracket < 6) ++depth;
            else if (wordRE.test(ch)) sawSomething = true;
            else if (/["'\/`]/.test(ch)) for(;; --pos){
                if (pos == 0) return;
                var next = stream.string.charAt(pos - 1);
                if (next == ch && stream.string.charAt(pos - 2) != "\\") {
                    pos--;
                    break;
                }
            }
            else if (sawSomething && !depth) {
                ++pos;
                break;
            }
        }
        if (sawSomething && !depth) state.fatArrowAt = pos;
    }
    // Parser
    var atomicTypes = {
        "atom": true,
        "number": true,
        "variable": true,
        "string": true,
        "regexp": true,
        "this": true,
        "import": true,
        "jsonld-keyword": true
    };
    function JSLexical(indented, column, type, align, prev, info) {
        this.indented = indented;
        this.column = column;
        this.type = type;
        this.prev = prev;
        this.info = info;
        if (align != null) this.align = align;
    }
    function inScope(state, varname) {
        for(var v = state.localVars; v; v = v.next)if (v.name == varname) return true;
        for(var cx = state.context; cx; cx = cx.prev){
            for(var v = cx.vars; v; v = v.next)if (v.name == varname) return true;
        }
    }
    function parseJS(state, style, type, content, stream) {
        var cc = state.cc;
        // Communicate our context to the combinators.
        // (Less wasteful than consing up a hundred closures on every call.)
        cx.state = state;
        cx.stream = stream;
        cx.marked = null;
        cx.cc = cc;
        cx.style = style;
        if (!state.lexical.hasOwnProperty("align")) state.lexical.align = true;
        while(true){
            var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
            if (combinator(type, content)) {
                while(cc.length && cc[cc.length - 1].lex)cc.pop()();
                if (cx.marked) return cx.marked;
                if (type == "variable" && inScope(state, content)) return "variableName.local";
                return style;
            }
        }
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
        cx.marked = "def";
        if (state.context) {
            if (state.lexical.info == "var" && state.context && state.context.block) {
                // FIXME function decls are also not block scoped
                var newContext = registerVarScoped(varname, state.context);
                if (newContext != null) {
                    state.context = newContext;
                    return;
                }
            } else if (!inList(varname, state.localVars)) {
                state.localVars = new Var(varname, state.localVars);
                return;
            }
        }
        // Fall through means this is global
        if (parserConfig.globalVars && !inList(varname, state.globalVars)) state.globalVars = new Var(varname, state.globalVars);
    }
    function registerVarScoped(varname, context) {
        if (!context) return null;
        else if (context.block) {
            var inner = registerVarScoped(varname, context.prev);
            if (!inner) return null;
            if (inner == context.prev) return context;
            return new Context(inner, context.vars, true);
        } else if (inList(varname, context.vars)) return context;
        else return new Context(context.prev, new Var(varname, context.vars), false);
    }
    function isModifier(name) {
        return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly";
    }
    // Combinators
    function Context(prev, vars, block) {
        this.prev = prev;
        this.vars = vars;
        this.block = block;
    }
    function Var(name, next) {
        this.name = name;
        this.next = next;
    }
    var defaultVars = new Var("this", new Var("arguments", null));
    function pushcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
        cx.state.localVars = defaultVars;
    }
    function pushblockcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
        cx.state.localVars = null;
    }
    pushcontext.lex = pushblockcontext.lex = true;
    function popcontext() {
        cx.state.localVars = cx.state.context.vars;
        cx.state.context = cx.state.context.prev;
    }
    popcontext.lex = true;
    function pushlex(type, info) {
        var result = function() {
            var state = cx.state, indent = state.indented;
            if (state.lexical.type == "stat") indent = state.lexical.indented;
            else for(var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)indent = outer.indented;
            state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
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
        function exp(type) {
            if (type == wanted) return cont();
            else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
            else return cont(exp);
        }
        return exp;
    }
    function statement(type, value) {
        if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
        if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
        if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
        if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
        if (type == "debugger") return cont(expect(";"));
        if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
        if (type == ";") return cont();
        if (type == "if") {
            if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex) cx.state.cc.pop()();
            return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
        }
        if (type == "function") return cont(functiondef);
        if (type == "for") return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
        if (type == "class" || isTS && value == "interface") {
            cx.marked = "keyword";
            return cont(pushlex("form", type == "class" ? type : value), className, poplex);
        }
        if (type == "variable") {
            if (isTS && value == "declare") {
                cx.marked = "keyword";
                return cont(statement);
            } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
                cx.marked = "keyword";
                if (value == "enum") return cont(enumdef);
                else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
                else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex);
            } else if (isTS && value == "namespace") {
                cx.marked = "keyword";
                return cont(pushlex("form"), expression, statement, poplex);
            } else if (isTS && value == "abstract") {
                cx.marked = "keyword";
                return cont(statement);
            } else return cont(pushlex("stat"), maybelabel);
        }
        if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext, block, poplex, poplex, popcontext);
        if (type == "case") return cont(expression, expect(":"));
        if (type == "default") return cont(expect(":"));
        if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
        if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
        if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
        if (type == "async") return cont(statement);
        if (value == "@") return cont(expression, statement);
        return pass(pushlex("stat"), expression, expect(";"), poplex);
    }
    function maybeCatchBinding(type) {
        if (type == "(") return cont(funarg, expect(")"));
    }
    function expression(type, value) {
        return expressionInner(type, value, false);
    }
    function expressionNoComma(type, value) {
        return expressionInner(type, value, true);
    }
    function parenExpr(type) {
        if (type != "(") return pass();
        return cont(pushlex(")"), maybeexpression, expect(")"), poplex);
    }
    function expressionInner(type, value, noComma) {
        if (cx.state.fatArrowAt == cx.stream.start) {
            var body = noComma ? arrowBodyNoComma : arrowBody;
            if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
            else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
        }
        var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
        if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
        if (type == "function") return cont(functiondef, maybeop);
        if (type == "class" || isTS && value == "interface") {
            cx.marked = "keyword";
            return cont(pushlex("form"), classExpression, poplex);
        }
        if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
        if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
        if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
        if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
        if (type == "{") return contCommasep(objprop, "}", null, maybeop);
        if (type == "quasi") return pass(quasi, maybeop);
        if (type == "new") return cont(maybeTarget(noComma));
        return cont();
    }
    function maybeexpression(type) {
        if (type.match(/[;\}\)\],]/)) return pass();
        return pass(expression);
    }
    function maybeoperatorComma(type, value) {
        if (type == ",") return cont(maybeexpression);
        return maybeoperatorNoComma(type, value, false);
    }
    function maybeoperatorNoComma(type, value, noComma) {
        var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
        var expr = noComma == false ? expression : expressionNoComma;
        if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
        if (type == "operator") {
            if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
            if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false)) return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
            if (value == "?") return cont(expression, expect(":"), expr);
            return cont(expr);
        }
        if (type == "quasi") return pass(quasi, me);
        if (type == ";") return;
        if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
        if (type == ".") return cont(property, me);
        if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
        if (isTS && value == "as") {
            cx.marked = "keyword";
            return cont(typeexpr, me);
        }
        if (type == "regexp") {
            cx.state.lastType = cx.marked = "operator";
            cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
            return cont(expr);
        }
    }
    function quasi(type, value) {
        if (type != "quasi") return pass();
        if (value.slice(value.length - 2) != "${") return cont(quasi);
        return cont(maybeexpression, continueQuasi);
    }
    function continueQuasi(type) {
        if (type == "}") {
            cx.marked = "string.special";
            cx.state.tokenize = tokenQuasi;
            return cont(quasi);
        }
    }
    function arrowBody(type) {
        findFatArrow(cx.stream, cx.state);
        return pass(type == "{" ? statement : expression);
    }
    function arrowBodyNoComma(type) {
        findFatArrow(cx.stream, cx.state);
        return pass(type == "{" ? statement : expressionNoComma);
    }
    function maybeTarget(noComma) {
        return function(type) {
            if (type == ".") return cont(noComma ? targetNoComma : target);
            else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
            else return pass(noComma ? expressionNoComma : expression);
        };
    }
    function target(_, value) {
        if (value == "target") {
            cx.marked = "keyword";
            return cont(maybeoperatorComma);
        }
    }
    function targetNoComma(_, value) {
        if (value == "target") {
            cx.marked = "keyword";
            return cont(maybeoperatorNoComma);
        }
    }
    function maybelabel(type) {
        if (type == ":") return cont(poplex, statement);
        return pass(maybeoperatorComma, expect(";"), poplex);
    }
    function property(type) {
        if (type == "variable") {
            cx.marked = "property";
            return cont();
        }
    }
    function objprop(type, value) {
        if (type == "async") {
            cx.marked = "property";
            return cont(objprop);
        } else if (type == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            if (value == "get" || value == "set") return cont(getterSetter);
            var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
            ;
            if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false))) cx.state.fatArrowAt = cx.stream.pos + m[0].length;
            return cont(afterprop);
        } else if (type == "number" || type == "string") {
            cx.marked = jsonldMode ? "property" : cx.style + " property";
            return cont(afterprop);
        } else if (type == "jsonld-keyword") return cont(afterprop);
        else if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(objprop);
        } else if (type == "[") return cont(expression, maybetype, expect("]"), afterprop);
        else if (type == "spread") return cont(expressionNoComma, afterprop);
        else if (value == "*") {
            cx.marked = "keyword";
            return cont(objprop);
        } else if (type == ":") return pass(afterprop);
    }
    function getterSetter(type) {
        if (type != "variable") return pass(afterprop);
        cx.marked = "property";
        return cont(functiondef);
    }
    function afterprop(type) {
        if (type == ":") return cont(expressionNoComma);
        if (type == "(") return pass(functiondef);
    }
    function commasep(what, end, sep) {
        function proceed(type, value) {
            if (sep ? sep.indexOf(type) > -1 : type == ",") {
                var lex = cx.state.lexical;
                if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
                return cont(function(type, value) {
                    if (type == end || value == end) return pass();
                    return pass(what);
                }, proceed);
            }
            if (type == end || value == end) return cont();
            if (sep && sep.indexOf(";") > -1) return pass(what);
            return cont(expect(end));
        }
        return function(type, value) {
            if (type == end || value == end) return cont();
            return pass(what, proceed);
        };
    }
    function contCommasep(what, end, info) {
        for(var i = 3; i < arguments.length; i++)cx.cc.push(arguments[i]);
        return cont(pushlex(end, info), commasep(what, end), poplex);
    }
    function block(type) {
        if (type == "}") return cont();
        return pass(statement, block);
    }
    function maybetype(type, value) {
        if (isTS) {
            if (type == ":") return cont(typeexpr);
            if (value == "?") return cont(maybetype);
        }
    }
    function maybetypeOrIn(type, value) {
        if (isTS && (type == ":" || value == "in")) return cont(typeexpr);
    }
    function mayberettype(type) {
        if (isTS && type == ":") {
            if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr);
            else return cont(typeexpr);
        }
    }
    function isKW(_, value) {
        if (value == "is") {
            cx.marked = "keyword";
            return cont();
        }
    }
    function typeexpr(type, value) {
        if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
            cx.marked = "keyword";
            return cont(value == "typeof" ? expressionNoComma : typeexpr);
        }
        if (type == "variable" || value == "void") {
            cx.marked = "type";
            return cont(afterType);
        }
        if (value == "|" || value == "&") return cont(typeexpr);
        if (type == "string" || type == "number" || type == "atom") return cont(afterType);
        if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType);
        if (type == "{") return cont(pushlex("}"), typeprops, poplex, afterType);
        if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType);
        if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr);
        if (type == "quasi") return pass(quasiType, afterType);
    }
    function maybeReturnType(type) {
        if (type == "=>") return cont(typeexpr);
    }
    function typeprops(type) {
        if (type.match(/[\}\)\]]/)) return cont();
        if (type == "," || type == ";") return cont(typeprops);
        return pass(typeprop, typeprops);
    }
    function typeprop(type, value) {
        if (type == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            return cont(typeprop);
        } else if (value == "?" || type == "number" || type == "string") return cont(typeprop);
        else if (type == ":") return cont(typeexpr);
        else if (type == "[") return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop);
        else if (type == "(") return pass(functiondecl, typeprop);
        else if (!type.match(/[;\}\)\],]/)) return cont();
    }
    function quasiType(type, value) {
        if (type != "quasi") return pass();
        if (value.slice(value.length - 2) != "${") return cont(quasiType);
        return cont(typeexpr, continueQuasiType);
    }
    function continueQuasiType(type) {
        if (type == "}") {
            cx.marked = "string-2";
            cx.state.tokenize = tokenQuasi;
            return cont(quasiType);
        }
    }
    function typearg(type, value) {
        if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg);
        if (type == ":") return cont(typeexpr);
        if (type == "spread") return cont(typearg);
        return pass(typeexpr);
    }
    function afterType(type, value) {
        if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
        if (value == "|" || type == "." || value == "&") return cont(typeexpr);
        if (type == "[") return cont(typeexpr, expect("]"), afterType);
        if (value == "extends" || value == "implements") {
            cx.marked = "keyword";
            return cont(typeexpr);
        }
        if (value == "?") return cont(typeexpr, expect(":"), typeexpr);
    }
    function maybeTypeArgs(_, value) {
        if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
    }
    function typeparam() {
        return pass(typeexpr, maybeTypeDefault);
    }
    function maybeTypeDefault(_, value) {
        if (value == "=") return cont(typeexpr);
    }
    function vardef(_, value) {
        if (value == "enum") {
            cx.marked = "keyword";
            return cont(enumdef);
        }
        return pass(pattern, maybetype, maybeAssign, vardefCont);
    }
    function pattern(type, value) {
        if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(pattern);
        }
        if (type == "variable") {
            register(value);
            return cont();
        }
        if (type == "spread") return cont(pattern);
        if (type == "[") return contCommasep(eltpattern, "]");
        if (type == "{") return contCommasep(proppattern, "}");
    }
    function proppattern(type, value) {
        if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
            register(value);
            return cont(maybeAssign);
        }
        if (type == "variable") cx.marked = "property";
        if (type == "spread") return cont(pattern);
        if (type == "}") return pass();
        if (type == "[") return cont(expression, expect("]"), expect(":"), proppattern);
        return cont(expect(":"), pattern, maybeAssign);
    }
    function eltpattern() {
        return pass(pattern, maybeAssign);
    }
    function maybeAssign(_type, value) {
        if (value == "=") return cont(expressionNoComma);
    }
    function vardefCont(type) {
        if (type == ",") return cont(vardef);
    }
    function maybeelse(type, value) {
        if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
    }
    function forspec(type, value) {
        if (value == "await") return cont(forspec);
        if (type == "(") return cont(pushlex(")"), forspec1, poplex);
    }
    function forspec1(type) {
        if (type == "var") return cont(vardef, forspec2);
        if (type == "variable") return cont(forspec2);
        return pass(forspec2);
    }
    function forspec2(type, value) {
        if (type == ")") return cont();
        if (type == ";") return cont(forspec2);
        if (value == "in" || value == "of") {
            cx.marked = "keyword";
            return cont(expression, forspec2);
        }
        return pass(expression, forspec2);
    }
    function functiondef(type, value) {
        if (value == "*") {
            cx.marked = "keyword";
            return cont(functiondef);
        }
        if (type == "variable") {
            register(value);
            return cont(functiondef);
        }
        if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
        if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef);
    }
    function functiondecl(type, value) {
        if (value == "*") {
            cx.marked = "keyword";
            return cont(functiondecl);
        }
        if (type == "variable") {
            register(value);
            return cont(functiondecl);
        }
        if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
        if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl);
    }
    function typename(type, value) {
        if (type == "keyword" || type == "variable") {
            cx.marked = "type";
            return cont(typename);
        } else if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex);
    }
    function funarg(type, value) {
        if (value == "@") cont(expression, funarg);
        if (type == "spread") return cont(funarg);
        if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(funarg);
        }
        if (isTS && type == "this") return cont(maybetype, maybeAssign);
        return pass(pattern, maybetype, maybeAssign);
    }
    function classExpression(type, value) {
        // Class expressions may have an optional name.
        if (type == "variable") return className(type, value);
        return classNameAfter(type, value);
    }
    function className(type, value) {
        if (type == "variable") {
            register(value);
            return cont(classNameAfter);
        }
    }
    function classNameAfter(type, value) {
        if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter);
        if (value == "extends" || value == "implements" || isTS && type == ",") {
            if (value == "implements") cx.marked = "keyword";
            return cont(isTS ? typeexpr : expression, classNameAfter);
        }
        if (type == "{") return cont(pushlex("}"), classBody, poplex);
    }
    function classBody(type, value) {
        if (type == "async" || type == "variable" && (value == "static" || value == "get" || value == "set" || isTS && isModifier(value)) && cx.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) {
            cx.marked = "keyword";
            return cont(classBody);
        }
        if (type == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            return cont(classfield, classBody);
        }
        if (type == "number" || type == "string") return cont(classfield, classBody);
        if (type == "[") return cont(expression, maybetype, expect("]"), classfield, classBody);
        if (value == "*") {
            cx.marked = "keyword";
            return cont(classBody);
        }
        if (isTS && type == "(") return pass(functiondecl, classBody);
        if (type == ";" || type == ",") return cont(classBody);
        if (type == "}") return cont();
        if (value == "@") return cont(expression, classBody);
    }
    function classfield(type, value) {
        if (value == "!" || value == "?") return cont(classfield);
        if (type == ":") return cont(typeexpr, maybeAssign);
        if (value == "=") return cont(expressionNoComma);
        var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
        return pass(isInterface ? functiondecl : functiondef);
    }
    function afterExport(type, value) {
        if (value == "*") {
            cx.marked = "keyword";
            return cont(maybeFrom, expect(";"));
        }
        if (value == "default") {
            cx.marked = "keyword";
            return cont(expression, expect(";"));
        }
        if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
        return pass(statement);
    }
    function exportField(type, value) {
        if (value == "as") {
            cx.marked = "keyword";
            return cont(expect("variable"));
        }
        if (type == "variable") return pass(expressionNoComma, exportField);
    }
    function afterImport(type) {
        if (type == "string") return cont();
        if (type == "(") return pass(expression);
        if (type == ".") return pass(maybeoperatorComma);
        return pass(importSpec, maybeMoreImports, maybeFrom);
    }
    function importSpec(type, value) {
        if (type == "{") return contCommasep(importSpec, "}");
        if (type == "variable") register(value);
        if (value == "*") cx.marked = "keyword";
        return cont(maybeAs);
    }
    function maybeMoreImports(type) {
        if (type == ",") return cont(importSpec, maybeMoreImports);
    }
    function maybeAs(_type, value) {
        if (value == "as") {
            cx.marked = "keyword";
            return cont(importSpec);
        }
    }
    function maybeFrom(_type, value) {
        if (value == "from") {
            cx.marked = "keyword";
            return cont(expression);
        }
    }
    function arrayLiteral(type) {
        if (type == "]") return cont();
        return pass(commasep(expressionNoComma, "]"));
    }
    function enumdef() {
        return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex);
    }
    function enummember() {
        return pass(pattern, maybeAssign);
    }
    function isContinuedStatement(state, textAfter) {
        return state.lastType == "operator" || state.lastType == "," || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
    }
    function expressionAllowed(stream, state, backUp) {
        return state.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) || state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
    }
    // Interface
    return {
        name: parserConfig.name,
        startState: function(indentUnit) {
            var state = {
                tokenize: tokenBase,
                lastType: "sof",
                cc: [],
                lexical: new JSLexical(-indentUnit, 0, "block", false),
                localVars: parserConfig.localVars,
                context: parserConfig.localVars && new Context(null, null, false),
                indented: 0
            };
            if (parserConfig.globalVars && typeof parserConfig.globalVars == "object") state.globalVars = parserConfig.globalVars;
            return state;
        },
        token: function(stream, state) {
            if (stream.sol()) {
                if (!state.lexical.hasOwnProperty("align")) state.lexical.align = false;
                state.indented = stream.indentation();
                findFatArrow(stream, state);
            }
            if (state.tokenize != tokenComment && stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            if (type == "comment") return style;
            state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
            return parseJS(state, style, type, content, stream);
        },
        indent: function(state, textAfter, cx) {
            if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) return null;
            if (state.tokenize != tokenBase) return 0;
            var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
            // Kludge to prevent 'maybelse' from blocking lexical scope pops
            if (!/^\s*else\b/.test(textAfter)) for(var i = state.cc.length - 1; i >= 0; --i){
                var c = state.cc[i];
                if (c == poplex) lexical = lexical.prev;
                else if (c != maybeelse && c != popcontext) break;
            }
            while((lexical.type == "stat" || lexical.type == "form") && (firstChar == "}" || (top = state.cc[state.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter)))lexical = lexical.prev;
            if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat") lexical = lexical.prev;
            var type = lexical.type, closing = firstChar == type;
            if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
            else if (type == "form" && firstChar == "{") return lexical.indented;
            else if (type == "form") return lexical.indented + cx.unit;
            else if (type == "stat") return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || cx.unit : 0);
            else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false) return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? cx.unit : 2 * cx.unit);
            else if (lexical.align) return lexical.column + (closing ? 0 : 1);
            else return lexical.indented + (closing ? 0 : cx.unit);
        },
        languageData: {
            indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            commentTokens: jsonMode ? undefined : {
                line: "//",
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
            },
            wordChars: "$"
        }
    };
}
const javascript = mkJavaScript({
    name: "javascript"
});
const json = mkJavaScript({
    name: "json",
    json: true
});
const jsonld = mkJavaScript({
    name: "json",
    jsonld: true
});
const typescript = mkJavaScript({
    name: "typescript",
    typescript: true
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ajzD7"], null, "parcelRequire9c72")

//# sourceMappingURL=javascript.8d000acf.js.map
