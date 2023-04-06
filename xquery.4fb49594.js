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
})({"jTakC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2250e5614fb49594";
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

},{}],"3SyQa":[function(require,module,exports) {
// The keywords object is set to the result of this self executing
// function. Each keyword is a property of the keywords object whose
// value is {type: atype, style: astyle}
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xQuery", ()=>xQuery);
var keywords = function() {
    // convenience functions used to build keywords object
    function kw(type) {
        return {
            type: type,
            style: "keyword"
        };
    }
    var operator = kw("operator"), atom = {
        type: "atom",
        style: "atom"
    }, punctuation = {
        type: "punctuation",
        style: null
    }, qualifier = {
        type: "axis_specifier",
        style: "qualifier"
    };
    // kwObj is what is return from this function at the end
    var kwObj = {
        ",": punctuation
    };
    // a list of 'basic' keywords. For each add a property to kwObj with the value of
    // {type: basic[i], style: "keyword"} e.g. 'after' --> {type: "after", style: "keyword"}
    var basic = [
        "after",
        "all",
        "allowing",
        "ancestor",
        "ancestor-or-self",
        "any",
        "array",
        "as",
        "ascending",
        "at",
        "attribute",
        "base-uri",
        "before",
        "boundary-space",
        "by",
        "case",
        "cast",
        "castable",
        "catch",
        "child",
        "collation",
        "comment",
        "construction",
        "contains",
        "content",
        "context",
        "copy",
        "copy-namespaces",
        "count",
        "decimal-format",
        "declare",
        "default",
        "delete",
        "descendant",
        "descendant-or-self",
        "descending",
        "diacritics",
        "different",
        "distance",
        "document",
        "document-node",
        "element",
        "else",
        "empty",
        "empty-sequence",
        "encoding",
        "end",
        "entire",
        "every",
        "exactly",
        "except",
        "external",
        "first",
        "following",
        "following-sibling",
        "for",
        "from",
        "ftand",
        "ftnot",
        "ft-option",
        "ftor",
        "function",
        "fuzzy",
        "greatest",
        "group",
        "if",
        "import",
        "in",
        "inherit",
        "insensitive",
        "insert",
        "instance",
        "intersect",
        "into",
        "invoke",
        "is",
        "item",
        "language",
        "last",
        "lax",
        "least",
        "let",
        "levels",
        "lowercase",
        "map",
        "modify",
        "module",
        "most",
        "namespace",
        "next",
        "no",
        "node",
        "nodes",
        "no-inherit",
        "no-preserve",
        "not",
        "occurs",
        "of",
        "only",
        "option",
        "order",
        "ordered",
        "ordering",
        "paragraph",
        "paragraphs",
        "parent",
        "phrase",
        "preceding",
        "preceding-sibling",
        "preserve",
        "previous",
        "processing-instruction",
        "relationship",
        "rename",
        "replace",
        "return",
        "revalidation",
        "same",
        "satisfies",
        "schema",
        "schema-attribute",
        "schema-element",
        "score",
        "self",
        "sensitive",
        "sentence",
        "sentences",
        "sequence",
        "skip",
        "sliding",
        "some",
        "stable",
        "start",
        "stemming",
        "stop",
        "strict",
        "strip",
        "switch",
        "text",
        "then",
        "thesaurus",
        "times",
        "to",
        "transform",
        "treat",
        "try",
        "tumbling",
        "type",
        "typeswitch",
        "union",
        "unordered",
        "update",
        "updating",
        "uppercase",
        "using",
        "validate",
        "value",
        "variable",
        "version",
        "weight",
        "when",
        "where",
        "wildcards",
        "window",
        "with",
        "without",
        "word",
        "words",
        "xquery"
    ];
    for(var i = 0, l = basic.length; i < l; i++)kwObj[basic[i]] = kw(basic[i]);
    // a list of types. For each add a property to kwObj with the value of
    // {type: "atom", style: "atom"}
    var types = [
        "xs:anyAtomicType",
        "xs:anySimpleType",
        "xs:anyType",
        "xs:anyURI",
        "xs:base64Binary",
        "xs:boolean",
        "xs:byte",
        "xs:date",
        "xs:dateTime",
        "xs:dateTimeStamp",
        "xs:dayTimeDuration",
        "xs:decimal",
        "xs:double",
        "xs:duration",
        "xs:ENTITIES",
        "xs:ENTITY",
        "xs:float",
        "xs:gDay",
        "xs:gMonth",
        "xs:gMonthDay",
        "xs:gYear",
        "xs:gYearMonth",
        "xs:hexBinary",
        "xs:ID",
        "xs:IDREF",
        "xs:IDREFS",
        "xs:int",
        "xs:integer",
        "xs:item",
        "xs:java",
        "xs:language",
        "xs:long",
        "xs:Name",
        "xs:NCName",
        "xs:negativeInteger",
        "xs:NMTOKEN",
        "xs:NMTOKENS",
        "xs:nonNegativeInteger",
        "xs:nonPositiveInteger",
        "xs:normalizedString",
        "xs:NOTATION",
        "xs:numeric",
        "xs:positiveInteger",
        "xs:precisionDecimal",
        "xs:QName",
        "xs:short",
        "xs:string",
        "xs:time",
        "xs:token",
        "xs:unsignedByte",
        "xs:unsignedInt",
        "xs:unsignedLong",
        "xs:unsignedShort",
        "xs:untyped",
        "xs:untypedAtomic",
        "xs:yearMonthDuration"
    ];
    for(var i = 0, l = types.length; i < l; i++)kwObj[types[i]] = atom;
    // each operator will add a property to kwObj with value of {type: "operator", style: "keyword"}
    var operators = [
        "eq",
        "ne",
        "lt",
        "le",
        "gt",
        "ge",
        ":=",
        "=",
        ">",
        ">=",
        "<",
        "<=",
        ".",
        "|",
        "?",
        "and",
        "or",
        "div",
        "idiv",
        "mod",
        "*",
        "/",
        "+",
        "-"
    ];
    for(var i = 0, l = operators.length; i < l; i++)kwObj[operators[i]] = operator;
    // each axis_specifiers will add a property to kwObj with value of {type: "axis_specifier", style: "qualifier"}
    var axis_specifiers = [
        "self::",
        "attribute::",
        "child::",
        "descendant::",
        "descendant-or-self::",
        "parent::",
        "ancestor::",
        "ancestor-or-self::",
        "following::",
        "preceding::",
        "following-sibling::",
        "preceding-sibling::"
    ];
    for(var i = 0, l = axis_specifiers.length; i < l; i++)kwObj[axis_specifiers[i]] = qualifier;
    return kwObj;
}();
function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
}
// the primary mode tokenizer
function tokenBase(stream, state) {
    var ch = stream.next(), mightBeFunction = false, isEQName = isEQNameAhead(stream);
    // an XML tag (if not in some sub, chained tokenizer)
    if (ch == "<") {
        if (stream.match("!--", true)) return chain(stream, state, tokenXMLComment);
        if (stream.match("![CDATA", false)) {
            state.tokenize = tokenCDATA;
            return "tag";
        }
        if (stream.match("?", false)) return chain(stream, state, tokenPreProcessing);
        var isclose = stream.eat("/");
        stream.eatSpace();
        var tagName = "", c;
        while(c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/))tagName += c;
        return chain(stream, state, tokenTag(tagName, isclose));
    } else if (ch == "{") {
        pushStateStack(state, {
            type: "codeblock"
        });
        return null;
    } else if (ch == "}") {
        popStateStack(state);
        return null;
    } else if (isInXmlBlock(state)) {
        if (ch == ">") return "tag";
        else if (ch == "/" && stream.eat(">")) {
            popStateStack(state);
            return "tag";
        } else return "variable";
    } else if (/\d/.test(ch)) {
        stream.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
        return "atom";
    } else if (ch === "(" && stream.eat(":")) {
        pushStateStack(state, {
            type: "comment"
        });
        return chain(stream, state, tokenComment);
    } else if (!isEQName && (ch === '"' || ch === "'")) return chain(stream, state, tokenString(ch));
    else if (ch === "$") return chain(stream, state, tokenVariable);
    else if (ch === ":" && stream.eat("=")) return "keyword";
    else if (ch === "(") {
        pushStateStack(state, {
            type: "paren"
        });
        return null;
    } else if (ch === ")") {
        popStateStack(state);
        return null;
    } else if (ch === "[") {
        pushStateStack(state, {
            type: "bracket"
        });
        return null;
    } else if (ch === "]") {
        popStateStack(state);
        return null;
    } else {
        var known = keywords.propertyIsEnumerable(ch) && keywords[ch];
        // if there's a EQName ahead, consume the rest of the string portion, it's likely a function
        if (isEQName && ch === '"') while(stream.next() !== '"');
        if (isEQName && ch === "'") while(stream.next() !== "'");
        // gobble up a word if the character is not known
        if (!known) stream.eatWhile(/[\w\$_-]/);
        // gobble a colon in the case that is a lib func type call fn:doc
        var foundColon = stream.eat(":");
        // if there's not a second colon, gobble another word. Otherwise, it's probably an axis specifier
        // which should get matched as a keyword
        if (!stream.eat(":") && foundColon) stream.eatWhile(/[\w\$_-]/);
        // if the next non whitespace character is an open paren, this is probably a function (if not a keyword of other sort)
        if (stream.match(/^[ \t]*\(/, false)) mightBeFunction = true;
        // is the word a keyword?
        var word = stream.current();
        known = keywords.propertyIsEnumerable(word) && keywords[word];
        // if we think it's a function call but not yet known,
        // set style to variable for now for lack of something better
        if (mightBeFunction && !known) known = {
            type: "function_call",
            style: "def"
        };
        // if the previous word was element, attribute, axis specifier, this word should be the name of that
        if (isInXmlConstructor(state)) {
            popStateStack(state);
            return "variable";
        }
        // as previously checked, if the word is element,attribute, axis specifier, call it an "xmlconstructor" and
        // push the stack so we know to look for it on the next word
        if (word == "element" || word == "attribute" || known.type == "axis_specifier") pushStateStack(state, {
            type: "xmlconstructor"
        });
        // if the word is known, return the details of that else just call this a generic 'word'
        return known ? known.style : "variable";
    }
}
// handle comments, including nested
function tokenComment(stream, state) {
    var maybeEnd = false, maybeNested = false, nestedCount = 0, ch;
    while(ch = stream.next()){
        if (ch == ")" && maybeEnd) {
            if (nestedCount > 0) nestedCount--;
            else {
                popStateStack(state);
                break;
            }
        } else if (ch == ":" && maybeNested) nestedCount++;
        maybeEnd = ch == ":";
        maybeNested = ch == "(";
    }
    return "comment";
}
// tokenizer for string literals
// optionally pass a tokenizer function to set state.tokenize back to when finished
function tokenString(quote, f) {
    return function(stream, state) {
        var ch;
        if (isInString(state) && stream.current() == quote) {
            popStateStack(state);
            if (f) state.tokenize = f;
            return "string";
        }
        pushStateStack(state, {
            type: "string",
            name: quote,
            tokenize: tokenString(quote, f)
        });
        // if we're in a string and in an XML block, allow an embedded code block
        if (stream.match("{", false) && isInXmlAttributeBlock(state)) {
            state.tokenize = tokenBase;
            return "string";
        }
        while(ch = stream.next()){
            if (ch == quote) {
                popStateStack(state);
                if (f) state.tokenize = f;
                break;
            } else // if we're in a string and in an XML block, allow an embedded code block in an attribute
            if (stream.match("{", false) && isInXmlAttributeBlock(state)) {
                state.tokenize = tokenBase;
                return "string";
            }
        }
        return "string";
    };
}
// tokenizer for variables
function tokenVariable(stream, state) {
    var isVariableChar = /[\w\$_-]/;
    // a variable may start with a quoted EQName so if the next character is quote, consume to the next quote
    if (stream.eat('"')) {
        while(stream.next() !== '"');
        stream.eat(":");
    } else {
        stream.eatWhile(isVariableChar);
        if (!stream.match(":=", false)) stream.eat(":");
    }
    stream.eatWhile(isVariableChar);
    state.tokenize = tokenBase;
    return "variable";
}
// tokenizer for XML tags
function tokenTag(name, isclose) {
    return function(stream, state) {
        stream.eatSpace();
        if (isclose && stream.eat(">")) {
            popStateStack(state);
            state.tokenize = tokenBase;
            return "tag";
        }
        // self closing tag without attributes?
        if (!stream.eat("/")) pushStateStack(state, {
            type: "tag",
            name: name,
            tokenize: tokenBase
        });
        if (!stream.eat(">")) {
            state.tokenize = tokenAttribute;
            return "tag";
        } else state.tokenize = tokenBase;
        return "tag";
    };
}
// tokenizer for XML attributes
function tokenAttribute(stream, state) {
    var ch = stream.next();
    if (ch == "/" && stream.eat(">")) {
        if (isInXmlAttributeBlock(state)) popStateStack(state);
        if (isInXmlBlock(state)) popStateStack(state);
        return "tag";
    }
    if (ch == ">") {
        if (isInXmlAttributeBlock(state)) popStateStack(state);
        return "tag";
    }
    if (ch == "=") return null;
    // quoted string
    if (ch == '"' || ch == "'") return chain(stream, state, tokenString(ch, tokenAttribute));
    if (!isInXmlAttributeBlock(state)) pushStateStack(state, {
        type: "attribute",
        tokenize: tokenAttribute
    });
    stream.eat(/[a-zA-Z_:]/);
    stream.eatWhile(/[-a-zA-Z0-9_:.]/);
    stream.eatSpace();
    // the case where the attribute has not value and the tag was closed
    if (stream.match(">", false) || stream.match("/", false)) {
        popStateStack(state);
        state.tokenize = tokenBase;
    }
    return "attribute";
}
// handle comments, including nested
function tokenXMLComment(stream, state) {
    var ch;
    while(ch = stream.next())if (ch == "-" && stream.match("->", true)) {
        state.tokenize = tokenBase;
        return "comment";
    }
}
// handle CDATA
function tokenCDATA(stream, state) {
    var ch;
    while(ch = stream.next())if (ch == "]" && stream.match("]", true)) {
        state.tokenize = tokenBase;
        return "comment";
    }
}
// handle preprocessing instructions
function tokenPreProcessing(stream, state) {
    var ch;
    while(ch = stream.next())if (ch == "?" && stream.match(">", true)) {
        state.tokenize = tokenBase;
        return "processingInstruction";
    }
}
// functions to test the current context of the state
function isInXmlBlock(state) {
    return isIn(state, "tag");
}
function isInXmlAttributeBlock(state) {
    return isIn(state, "attribute");
}
function isInXmlConstructor(state) {
    return isIn(state, "xmlconstructor");
}
function isInString(state) {
    return isIn(state, "string");
}
function isEQNameAhead(stream) {
    // assume we've already eaten a quote (")
    if (stream.current() === '"') return stream.match(/^[^\"]+\"\:/, false);
    else if (stream.current() === "'") return stream.match(/^[^\"]+\'\:/, false);
    else return false;
}
function isIn(state, type) {
    return state.stack.length && state.stack[state.stack.length - 1].type == type;
}
function pushStateStack(state, newState) {
    state.stack.push(newState);
}
function popStateStack(state) {
    state.stack.pop();
    var reinstateTokenize = state.stack.length && state.stack[state.stack.length - 1].tokenize;
    state.tokenize = reinstateTokenize || tokenBase;
}
const xQuery = {
    name: "xquery",
    startState: function() {
        return {
            tokenize: tokenBase,
            cc: [],
            stack: []
        };
    },
    token: function(stream, state) {
        if (stream.eatSpace()) return null;
        var style = state.tokenize(stream, state);
        return style;
    },
    languageData: {
        commentTokens: {
            block: {
                open: "(:",
                close: ":)"
            }
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jTakC"], null, "parcelRequire9c72")

//# sourceMappingURL=xquery.4fb49594.js.map
