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
})({"4XYP0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b819ffe95582c468";
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

},{}],"6XIeK":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////
// constants
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "erlang", ()=>erlang);
var typeWords = [
    "-type",
    "-spec",
    "-export_type",
    "-opaque"
];
var keywordWords = [
    "after",
    "begin",
    "catch",
    "case",
    "cond",
    "end",
    "fun",
    "if",
    "let",
    "of",
    "query",
    "receive",
    "try",
    "when"
];
var separatorRE = /[\->,;]/;
var separatorWords = [
    "->",
    ";",
    ","
];
var operatorAtomWords = [
    "and",
    "andalso",
    "band",
    "bnot",
    "bor",
    "bsl",
    "bsr",
    "bxor",
    "div",
    "not",
    "or",
    "orelse",
    "rem",
    "xor"
];
var operatorSymbolRE = /[\+\-\*\/<>=\|:!]/;
var operatorSymbolWords = [
    "=",
    "+",
    "-",
    "*",
    "/",
    ">",
    ">=",
    "<",
    "=<",
    "=:=",
    "==",
    "=/=",
    "/=",
    "||",
    "<-",
    "!"
];
var openParenRE = /[<\(\[\{]/;
var openParenWords = [
    "<<",
    "(",
    "[",
    "{"
];
var closeParenRE = /[>\)\]\}]/;
var closeParenWords = [
    "}",
    "]",
    ")",
    ">>"
];
var guardWords = [
    "is_atom",
    "is_binary",
    "is_bitstring",
    "is_boolean",
    "is_float",
    "is_function",
    "is_integer",
    "is_list",
    "is_number",
    "is_pid",
    "is_port",
    "is_record",
    "is_reference",
    "is_tuple",
    "atom",
    "binary",
    "bitstring",
    "boolean",
    "function",
    "integer",
    "list",
    "number",
    "pid",
    "port",
    "record",
    "reference",
    "tuple"
];
var bifWords = [
    "abs",
    "adler32",
    "adler32_combine",
    "alive",
    "apply",
    "atom_to_binary",
    "atom_to_list",
    "binary_to_atom",
    "binary_to_existing_atom",
    "binary_to_list",
    "binary_to_term",
    "bit_size",
    "bitstring_to_list",
    "byte_size",
    "check_process_code",
    "contact_binary",
    "crc32",
    "crc32_combine",
    "date",
    "decode_packet",
    "delete_module",
    "disconnect_node",
    "element",
    "erase",
    "exit",
    "float",
    "float_to_list",
    "garbage_collect",
    "get",
    "get_keys",
    "group_leader",
    "halt",
    "hd",
    "integer_to_list",
    "internal_bif",
    "iolist_size",
    "iolist_to_binary",
    "is_alive",
    "is_atom",
    "is_binary",
    "is_bitstring",
    "is_boolean",
    "is_float",
    "is_function",
    "is_integer",
    "is_list",
    "is_number",
    "is_pid",
    "is_port",
    "is_process_alive",
    "is_record",
    "is_reference",
    "is_tuple",
    "length",
    "link",
    "list_to_atom",
    "list_to_binary",
    "list_to_bitstring",
    "list_to_existing_atom",
    "list_to_float",
    "list_to_integer",
    "list_to_pid",
    "list_to_tuple",
    "load_module",
    "make_ref",
    "module_loaded",
    "monitor_node",
    "node",
    "node_link",
    "node_unlink",
    "nodes",
    "notalive",
    "now",
    "open_port",
    "pid_to_list",
    "port_close",
    "port_command",
    "port_connect",
    "port_control",
    "pre_loaded",
    "process_flag",
    "process_info",
    "processes",
    "purge_module",
    "put",
    "register",
    "registered",
    "round",
    "self",
    "setelement",
    "size",
    "spawn",
    "spawn_link",
    "spawn_monitor",
    "spawn_opt",
    "split_binary",
    "statistics",
    "term_to_binary",
    "time",
    "throw",
    "tl",
    "trunc",
    "tuple_size",
    "tuple_to_list",
    "unlink",
    "unregister",
    "whereis"
];
// upper case: [A-Z] [Ø-Þ] [À-Ö]
// lower case: [a-z] [ß-ö] [ø-ÿ]
var anumRE = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/;
var escapesRE = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
/////////////////////////////////////////////////////////////////////////////
// tokenizer
function tokenizer(stream, state) {
    // in multi-line string
    if (state.in_string) {
        state.in_string = !doubleQuote(stream);
        return rval(state, stream, "string");
    }
    // in multi-line atom
    if (state.in_atom) {
        state.in_atom = !singleQuote(stream);
        return rval(state, stream, "atom");
    }
    // whitespace
    if (stream.eatSpace()) return rval(state, stream, "whitespace");
    // attributes and type specs
    if (!peekToken(state) && stream.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) {
        if (is_member(stream.current(), typeWords)) return rval(state, stream, "type");
        else return rval(state, stream, "attribute");
    }
    var ch = stream.next();
    // comment
    if (ch == "%") {
        stream.skipToEnd();
        return rval(state, stream, "comment");
    }
    // colon
    if (ch == ":") return rval(state, stream, "colon");
    // macro
    if (ch == "?") {
        stream.eatSpace();
        stream.eatWhile(anumRE);
        return rval(state, stream, "macro");
    }
    // record
    if (ch == "#") {
        stream.eatSpace();
        stream.eatWhile(anumRE);
        return rval(state, stream, "record");
    }
    // dollar escape
    if (ch == "$") {
        if (stream.next() == "\\" && !stream.match(escapesRE)) return rval(state, stream, "error");
        return rval(state, stream, "number");
    }
    // dot
    if (ch == ".") return rval(state, stream, "dot");
    // quoted atom
    if (ch == "'") {
        if (!(state.in_atom = !singleQuote(stream))) {
            if (stream.match(/\s*\/\s*[0-9]/, false)) {
                stream.match(/\s*\/\s*[0-9]/, true);
                return rval(state, stream, "fun"); // 'f'/0 style fun
            }
            if (stream.match(/\s*\(/, false) || stream.match(/\s*:/, false)) return rval(state, stream, "function");
        }
        return rval(state, stream, "atom");
    }
    // string
    if (ch == '"') {
        state.in_string = !doubleQuote(stream);
        return rval(state, stream, "string");
    }
    // variable
    if (/[A-Z_Ø-ÞÀ-Ö]/.test(ch)) {
        stream.eatWhile(anumRE);
        return rval(state, stream, "variable");
    }
    // atom/keyword/BIF/function
    if (/[a-z_ß-öø-ÿ]/.test(ch)) {
        stream.eatWhile(anumRE);
        if (stream.match(/\s*\/\s*[0-9]/, false)) {
            stream.match(/\s*\/\s*[0-9]/, true);
            return rval(state, stream, "fun"); // f/0 style fun
        }
        var w = stream.current();
        if (is_member(w, keywordWords)) return rval(state, stream, "keyword");
        else if (is_member(w, operatorAtomWords)) return rval(state, stream, "operator");
        else if (stream.match(/\s*\(/, false)) {
            // 'put' and 'erlang:put' are bifs, 'foo:put' is not
            if (is_member(w, bifWords) && (peekToken(state).token != ":" || peekToken(state, 2).token == "erlang")) return rval(state, stream, "builtin");
            else if (is_member(w, guardWords)) return rval(state, stream, "guard");
            else return rval(state, stream, "function");
        } else if (lookahead(stream) == ":") {
            if (w == "erlang") return rval(state, stream, "builtin");
            else return rval(state, stream, "function");
        } else if (is_member(w, [
            "true",
            "false"
        ])) return rval(state, stream, "boolean");
        else return rval(state, stream, "atom");
    }
    // number
    var digitRE = /[0-9]/;
    var radixRE = /[0-9a-zA-Z]/; // 36#zZ style int
    if (digitRE.test(ch)) {
        stream.eatWhile(digitRE);
        if (stream.eat("#")) {
            if (!stream.eatWhile(radixRE)) stream.backUp(1); //"36#" - syntax error
        } else if (stream.eat(".")) {
            if (!stream.eatWhile(digitRE)) stream.backUp(1); // "3." - probably end of function
            else if (stream.eat(/[eE]/)) {
                if (stream.eat(/[-+]/)) {
                    if (!stream.eatWhile(digitRE)) stream.backUp(2); // "2e-" - syntax error
                } else if (!stream.eatWhile(digitRE)) stream.backUp(1); // "2e" - syntax error
            }
        }
        return rval(state, stream, "number"); // normal integer
    }
    // open parens
    if (nongreedy(stream, openParenRE, openParenWords)) return rval(state, stream, "open_paren");
    // close parens
    if (nongreedy(stream, closeParenRE, closeParenWords)) return rval(state, stream, "close_paren");
    // separators
    if (greedy(stream, separatorRE, separatorWords)) return rval(state, stream, "separator");
    // operators
    if (greedy(stream, operatorSymbolRE, operatorSymbolWords)) return rval(state, stream, "operator");
    return rval(state, stream, null);
}
/////////////////////////////////////////////////////////////////////////////
// utilities
function nongreedy(stream, re, words) {
    if (stream.current().length == 1 && re.test(stream.current())) {
        stream.backUp(1);
        while(re.test(stream.peek())){
            stream.next();
            if (is_member(stream.current(), words)) return true;
        }
        stream.backUp(stream.current().length - 1);
    }
    return false;
}
function greedy(stream, re, words) {
    if (stream.current().length == 1 && re.test(stream.current())) {
        while(re.test(stream.peek()))stream.next();
        while(0 < stream.current().length){
            if (is_member(stream.current(), words)) return true;
            else stream.backUp(1);
        }
        stream.next();
    }
    return false;
}
function doubleQuote(stream) {
    return quote(stream, '"', "\\");
}
function singleQuote(stream) {
    return quote(stream, "'", "\\");
}
function quote(stream, quoteChar, escapeChar) {
    while(!stream.eol()){
        var ch = stream.next();
        if (ch == quoteChar) return true;
        else if (ch == escapeChar) stream.next();
    }
    return false;
}
function lookahead(stream) {
    var m = stream.match(/^\s*([^\s%])/, false);
    return m ? m[1] : "";
}
function is_member(element, list) {
    return -1 < list.indexOf(element);
}
function rval(state, stream, type) {
    // parse stack
    pushToken(state, realToken(type, stream));
    // map erlang token type to CodeMirror style class
    //     erlang             -> CodeMirror tag
    switch(type){
        case "atom":
            return "atom";
        case "attribute":
            return "attribute";
        case "boolean":
            return "atom";
        case "builtin":
            return "builtin";
        case "close_paren":
            return null;
        case "colon":
            return null;
        case "comment":
            return "comment";
        case "dot":
            return null;
        case "error":
            return "error";
        case "fun":
            return "meta";
        case "function":
            return "tag";
        case "guard":
            return "property";
        case "keyword":
            return "keyword";
        case "macro":
            return "macroName";
        case "number":
            return "number";
        case "open_paren":
            return null;
        case "operator":
            return "operator";
        case "record":
            return "bracket";
        case "separator":
            return null;
        case "string":
            return "string";
        case "type":
            return "def";
        case "variable":
            return "variable";
        default:
            return null;
    }
}
function aToken(tok, col, ind, typ) {
    return {
        token: tok,
        column: col,
        indent: ind,
        type: typ
    };
}
function realToken(type, stream) {
    return aToken(stream.current(), stream.column(), stream.indentation(), type);
}
function fakeToken(type) {
    return aToken(type, 0, 0, type);
}
function peekToken(state, depth) {
    var len = state.tokenStack.length;
    var dep = depth ? depth : 1;
    if (len < dep) return false;
    else return state.tokenStack[len - dep];
}
function pushToken(state, token) {
    if (!(token.type == "comment" || token.type == "whitespace")) {
        state.tokenStack = maybe_drop_pre(state.tokenStack, token);
        state.tokenStack = maybe_drop_post(state.tokenStack);
    }
}
function maybe_drop_pre(s, token) {
    var last = s.length - 1;
    if (0 < last && s[last].type === "record" && token.type === "dot") s.pop();
    else if (0 < last && s[last].type === "group") {
        s.pop();
        s.push(token);
    } else s.push(token);
    return s;
}
function maybe_drop_post(s) {
    if (!s.length) return s;
    var last = s.length - 1;
    if (s[last].type === "dot") return [];
    if (last > 1 && s[last].type === "fun" && s[last - 1].token === "fun") return s.slice(0, last - 1);
    switch(s[last].token){
        case "}":
            return d(s, {
                g: [
                    "{"
                ]
            });
        case "]":
            return d(s, {
                i: [
                    "["
                ]
            });
        case ")":
            return d(s, {
                i: [
                    "("
                ]
            });
        case ">>":
            return d(s, {
                i: [
                    "<<"
                ]
            });
        case "end":
            return d(s, {
                i: [
                    "begin",
                    "case",
                    "fun",
                    "if",
                    "receive",
                    "try"
                ]
            });
        case ",":
            return d(s, {
                e: [
                    "begin",
                    "try",
                    "when",
                    "->",
                    ",",
                    "(",
                    "[",
                    "{",
                    "<<"
                ]
            });
        case "->":
            return d(s, {
                r: [
                    "when"
                ],
                m: [
                    "try",
                    "if",
                    "case",
                    "receive"
                ]
            });
        case ";":
            return d(s, {
                E: [
                    "case",
                    "fun",
                    "if",
                    "receive",
                    "try",
                    "when"
                ]
            });
        case "catch":
            return d(s, {
                e: [
                    "try"
                ]
            });
        case "of":
            return d(s, {
                e: [
                    "case"
                ]
            });
        case "after":
            return d(s, {
                e: [
                    "receive",
                    "try"
                ]
            });
        default:
            return s;
    }
}
function d(stack, tt) {
    // stack is a stack of Token objects.
    // tt is an object; {type:tokens}
    // type is a char, tokens is a list of token strings.
    // The function returns (possibly truncated) stack.
    // It will descend the stack, looking for a Token such that Token.token
    //  is a member of tokens. If it does not find that, it will normally (but
    //  see "E" below) return stack. If it does find a match, it will remove
    //  all the Tokens between the top and the matched Token.
    // If type is "m", that is all it does.
    // If type is "i", it will also remove the matched Token and the top Token.
    // If type is "g", like "i", but add a fake "group" token at the top.
    // If type is "r", it will remove the matched Token, but not the top Token.
    // If type is "e", it will keep the matched Token but not the top Token.
    // If type is "E", it behaves as for type "e", except if there is no match,
    //  in which case it will return an empty stack.
    for(var type in tt){
        var len = stack.length - 1;
        var tokens = tt[type];
        for(var i = len - 1; -1 < i; i--)if (is_member(stack[i].token, tokens)) {
            var ss = stack.slice(0, i);
            switch(type){
                case "m":
                    return ss.concat(stack[i]).concat(stack[len]);
                case "r":
                    return ss.concat(stack[len]);
                case "i":
                    return ss;
                case "g":
                    return ss.concat(fakeToken("group"));
                case "E":
                    return ss.concat(stack[i]);
                case "e":
                    return ss.concat(stack[i]);
            }
        }
    }
    return type == "E" ? [] : stack;
}
/////////////////////////////////////////////////////////////////////////////
// indenter
function indenter(state, textAfter, cx) {
    var t;
    var wordAfter = wordafter(textAfter);
    var currT = peekToken(state, 1);
    var prevT = peekToken(state, 2);
    if (state.in_string || state.in_atom) return null;
    else if (!prevT) return 0;
    else if (currT.token == "when") return currT.column + cx.unit;
    else if (wordAfter === "when" && prevT.type === "function") return prevT.indent + cx.unit;
    else if (wordAfter === "(" && currT.token === "fun") return currT.column + 3;
    else if (wordAfter === "catch" && (t = getToken(state, [
        "try"
    ]))) return t.column;
    else if (is_member(wordAfter, [
        "end",
        "after",
        "of"
    ])) {
        t = getToken(state, [
            "begin",
            "case",
            "fun",
            "if",
            "receive",
            "try"
        ]);
        return t ? t.column : null;
    } else if (is_member(wordAfter, closeParenWords)) {
        t = getToken(state, openParenWords);
        return t ? t.column : null;
    } else if (is_member(currT.token, [
        ",",
        "|",
        "||"
    ]) || is_member(wordAfter, [
        ",",
        "|",
        "||"
    ])) {
        t = postcommaToken(state);
        return t ? t.column + t.token.length : cx.unit;
    } else if (currT.token == "->") {
        if (is_member(prevT.token, [
            "receive",
            "case",
            "if",
            "try"
        ])) return prevT.column + cx.unit + cx.unit;
        else return prevT.column + cx.unit;
    } else if (is_member(currT.token, openParenWords)) return currT.column + currT.token.length;
    else {
        t = defaultToken(state);
        return truthy(t) ? t.column + cx.unit : 0;
    }
}
function wordafter(str) {
    var m = str.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
    return truthy(m) && m.index === 0 ? m[0] : "";
}
function postcommaToken(state) {
    var objs = state.tokenStack.slice(0, -1);
    var i = getTokenIndex(objs, "type", [
        "open_paren"
    ]);
    return truthy(objs[i]) ? objs[i] : false;
}
function defaultToken(state) {
    var objs = state.tokenStack;
    var stop = getTokenIndex(objs, "type", [
        "open_paren",
        "separator",
        "keyword"
    ]);
    var oper = getTokenIndex(objs, "type", [
        "operator"
    ]);
    if (truthy(stop) && truthy(oper) && stop < oper) return objs[stop + 1];
    else if (truthy(stop)) return objs[stop];
    else return false;
}
function getToken(state, tokens) {
    var objs = state.tokenStack;
    var i = getTokenIndex(objs, "token", tokens);
    return truthy(objs[i]) ? objs[i] : false;
}
function getTokenIndex(objs, propname, propvals) {
    for(var i = objs.length - 1; -1 < i; i--){
        if (is_member(objs[i][propname], propvals)) return i;
    }
    return false;
}
function truthy(x) {
    return x !== false && x != null;
}
const erlang = {
    name: "erlang",
    startState () {
        return {
            tokenStack: [],
            in_string: false,
            in_atom: false
        };
    },
    token: tokenizer,
    indent: indenter,
    languageData: {
        commentTokens: {
            line: "%"
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4XYP0"], null, "parcelRequire9c72")

//# sourceMappingURL=erlang.5582c468.js.map
