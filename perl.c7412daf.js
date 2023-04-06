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
})({"ggllI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "770162dcc7412daf";
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

},{}],"hmlbv":[function(require,module,exports) {
// it's like "peek", but need for look-ahead or look-behind if index < 0
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "perl", ()=>perl);
function look(stream, c) {
    return stream.string.charAt(stream.pos + (c || 0));
}
// return a part of prefix of current stream from current position
function prefix(stream, c) {
    if (c) {
        var x = stream.pos - c;
        return stream.string.substr(x >= 0 ? x : 0, c);
    } else return stream.string.substr(0, stream.pos - 1);
}
// return a part of suffix of current stream from current position
function suffix(stream, c) {
    var y = stream.string.length;
    var x = y - stream.pos + 1;
    return stream.string.substr(stream.pos, c && c < y ? c : x);
}
// eating and vomiting a part of stream from current position
function eatSuffix(stream, c) {
    var x = stream.pos + c;
    var y;
    if (x <= 0) stream.pos = 0;
    else if (x >= (y = stream.string.length - 1)) stream.pos = y;
    else stream.pos = x;
}
// http://perldoc.perl.org
var PERL = {
    //   1 - keyword
    //   2 - def
    //   3 - atom
    //   4 - operator
    //   5 - builtin (predefined)
    //   [x,y] - x=1,2,3; y=must be defined if x{...}
    //      PERL operators
    "->": 4,
    "++": 4,
    "--": 4,
    "**": 4,
    //   ! ~ \ and unary + and -
    "=~": 4,
    "!~": 4,
    "*": 4,
    "/": 4,
    "%": 4,
    "x": 4,
    "+": 4,
    "-": 4,
    ".": 4,
    "<<": 4,
    ">>": 4,
    //   named unary operators
    "<": 4,
    ">": 4,
    "<=": 4,
    ">=": 4,
    "lt": 4,
    "gt": 4,
    "le": 4,
    "ge": 4,
    "==": 4,
    "!=": 4,
    "<=>": 4,
    "eq": 4,
    "ne": 4,
    "cmp": 4,
    "~~": 4,
    "&": 4,
    "|": 4,
    "^": 4,
    "&&": 4,
    "||": 4,
    "//": 4,
    "..": 4,
    "...": 4,
    "?": 4,
    ":": 4,
    "=": 4,
    "+=": 4,
    "-=": 4,
    "*=": 4,
    ",": 4,
    "=>": 4,
    "::": 4,
    //   list operators (rightward)
    "not": 4,
    "and": 4,
    "or": 4,
    "xor": 4,
    //      PERL predefined variables (I know, what this is a paranoid idea, but may be needed for people, who learn PERL, and for me as well, ...and may be for you?;)
    "BEGIN": [
        5,
        1
    ],
    "END": [
        5,
        1
    ],
    "PRINT": [
        5,
        1
    ],
    "PRINTF": [
        5,
        1
    ],
    "GETC": [
        5,
        1
    ],
    "READ": [
        5,
        1
    ],
    "READLINE": [
        5,
        1
    ],
    "DESTROY": [
        5,
        1
    ],
    "TIE": [
        5,
        1
    ],
    "TIEHANDLE": [
        5,
        1
    ],
    "UNTIE": [
        5,
        1
    ],
    "STDIN": 5,
    "STDIN_TOP": 5,
    "STDOUT": 5,
    "STDOUT_TOP": 5,
    "STDERR": 5,
    "STDERR_TOP": 5,
    "$ARG": 5,
    "$_": 5,
    "@ARG": 5,
    "@_": 5,
    "$LIST_SEPARATOR": 5,
    '$"': 5,
    "$PROCESS_ID": 5,
    "$PID": 5,
    "$$": 5,
    "$REAL_GROUP_ID": 5,
    "$GID": 5,
    "$(": 5,
    "$EFFECTIVE_GROUP_ID": 5,
    "$EGID": 5,
    "$)": 5,
    "$PROGRAM_NAME": 5,
    "$0": 5,
    "$SUBSCRIPT_SEPARATOR": 5,
    "$SUBSEP": 5,
    "$;": 5,
    "$REAL_USER_ID": 5,
    "$UID": 5,
    "$<": 5,
    "$EFFECTIVE_USER_ID": 5,
    "$EUID": 5,
    "$>": 5,
    "$a": 5,
    "$b": 5,
    "$COMPILING": 5,
    "$^C": 5,
    "$DEBUGGING": 5,
    "$^D": 5,
    "${^ENCODING}": 5,
    "$ENV": 5,
    "%ENV": 5,
    "$SYSTEM_FD_MAX": 5,
    "$^F": 5,
    "@F": 5,
    "${^GLOBAL_PHASE}": 5,
    "$^H": 5,
    "%^H": 5,
    "@INC": 5,
    "%INC": 5,
    "$INPLACE_EDIT": 5,
    "$^I": 5,
    "$^M": 5,
    "$OSNAME": 5,
    "$^O": 5,
    "${^OPEN}": 5,
    "$PERLDB": 5,
    "$^P": 5,
    "$SIG": 5,
    "%SIG": 5,
    "$BASETIME": 5,
    "$^T": 5,
    "${^TAINT}": 5,
    "${^UNICODE}": 5,
    "${^UTF8CACHE}": 5,
    "${^UTF8LOCALE}": 5,
    "$PERL_VERSION": 5,
    "$^V": 5,
    "${^WIN32_SLOPPY_STAT}": 5,
    "$EXECUTABLE_NAME": 5,
    "$^X": 5,
    "$1": 5,
    "$MATCH": 5,
    "$&": 5,
    "${^MATCH}": 5,
    "$PREMATCH": 5,
    "$`": 5,
    "${^PREMATCH}": 5,
    "$POSTMATCH": 5,
    "$'": 5,
    "${^POSTMATCH}": 5,
    "$LAST_PAREN_MATCH": 5,
    "$+": 5,
    "$LAST_SUBMATCH_RESULT": 5,
    "$^N": 5,
    "@LAST_MATCH_END": 5,
    "@+": 5,
    "%LAST_PAREN_MATCH": 5,
    "%+": 5,
    "@LAST_MATCH_START": 5,
    "@-": 5,
    "%LAST_MATCH_START": 5,
    "%-": 5,
    "$LAST_REGEXP_CODE_RESULT": 5,
    "$^R": 5,
    "${^RE_DEBUG_FLAGS}": 5,
    "${^RE_TRIE_MAXBUF}": 5,
    "$ARGV": 5,
    "@ARGV": 5,
    "ARGV": 5,
    "ARGVOUT": 5,
    "$OUTPUT_FIELD_SEPARATOR": 5,
    "$OFS": 5,
    "$,": 5,
    "$INPUT_LINE_NUMBER": 5,
    "$NR": 5,
    "$.": 5,
    "$INPUT_RECORD_SEPARATOR": 5,
    "$RS": 5,
    "$/": 5,
    "$OUTPUT_RECORD_SEPARATOR": 5,
    "$ORS": 5,
    "$\\": 5,
    "$OUTPUT_AUTOFLUSH": 5,
    "$|": 5,
    "$ACCUMULATOR": 5,
    "$^A": 5,
    "$FORMAT_FORMFEED": 5,
    "$^L": 5,
    "$FORMAT_PAGE_NUMBER": 5,
    "$%": 5,
    "$FORMAT_LINES_LEFT": 5,
    "$-": 5,
    "$FORMAT_LINE_BREAK_CHARACTERS": 5,
    "$:": 5,
    "$FORMAT_LINES_PER_PAGE": 5,
    "$=": 5,
    "$FORMAT_TOP_NAME": 5,
    "$^": 5,
    "$FORMAT_NAME": 5,
    "$~": 5,
    "${^CHILD_ERROR_NATIVE}": 5,
    "$EXTENDED_OS_ERROR": 5,
    "$^E": 5,
    "$EXCEPTIONS_BEING_CAUGHT": 5,
    "$^S": 5,
    "$WARNING": 5,
    "$^W": 5,
    "${^WARNING_BITS}": 5,
    "$OS_ERROR": 5,
    "$ERRNO": 5,
    "$!": 5,
    "%OS_ERROR": 5,
    "%ERRNO": 5,
    "%!": 5,
    "$CHILD_ERROR": 5,
    "$?": 5,
    "$EVAL_ERROR": 5,
    "$@": 5,
    "$OFMT": 5,
    "$#": 5,
    "$*": 5,
    "$ARRAY_BASE": 5,
    "$[": 5,
    "$OLD_PERL_VERSION": 5,
    "$]": 5,
    //      PERL blocks
    "if": [
        1,
        1
    ],
    elsif: [
        1,
        1
    ],
    "else": [
        1,
        1
    ],
    "while": [
        1,
        1
    ],
    unless: [
        1,
        1
    ],
    "for": [
        1,
        1
    ],
    foreach: [
        1,
        1
    ],
    //      PERL functions
    "abs": 1,
    accept: 1,
    alarm: 1,
    "atan2": 1,
    bind: 1,
    binmode: 1,
    bless: 1,
    bootstrap: 1,
    "break": 1,
    caller: 1,
    chdir: 1,
    chmod: 1,
    chomp: 1,
    chop: 1,
    chown: 1,
    chr: 1,
    chroot: 1,
    close: 1,
    closedir: 1,
    connect: 1,
    "continue": [
        1,
        1
    ],
    "cos": 1,
    crypt: 1,
    dbmclose: 1,
    dbmopen: 1,
    "default": 1,
    defined: 1,
    "delete": 1,
    die: 1,
    "do": 1,
    dump: 1,
    each: 1,
    endgrent: 1,
    endhostent: 1,
    endnetent: 1,
    endprotoent: 1,
    endpwent: 1,
    endservent: 1,
    eof: 1,
    "eval": 1,
    "exec": 1,
    exists: 1,
    exit: 1,
    "exp": 1,
    fcntl: 1,
    fileno: 1,
    flock: 1,
    fork: 1,
    format: 1,
    formline: 1,
    getc: 1,
    getgrent: 1,
    getgrgid: 1,
    getgrnam: 1,
    gethostbyaddr: 1,
    gethostbyname: 1,
    gethostent: 1,
    getlogin: 1,
    getnetbyaddr: 1,
    getnetbyname: 1,
    getnetent: 1,
    getpeername: 1,
    getpgrp: 1,
    getppid: 1,
    getpriority: 1,
    getprotobyname: 1,
    getprotobynumber: 1,
    getprotoent: 1,
    getpwent: 1,
    getpwnam: 1,
    getpwuid: 1,
    getservbyname: 1,
    getservbyport: 1,
    getservent: 1,
    getsockname: 1,
    getsockopt: 1,
    given: 1,
    glob: 1,
    gmtime: 1,
    "goto": 1,
    grep: 1,
    hex: 1,
    "import": 1,
    index: 1,
    "int": 1,
    ioctl: 1,
    "join": 1,
    keys: 1,
    kill: 1,
    last: 1,
    lc: 1,
    lcfirst: 1,
    length: 1,
    "link": 1,
    listen: 1,
    local: 2,
    localtime: 1,
    lock: 1,
    "log": 1,
    lstat: 1,
    m: null,
    map: 1,
    mkdir: 1,
    msgctl: 1,
    msgget: 1,
    msgrcv: 1,
    msgsnd: 1,
    my: 2,
    "new": 1,
    next: 1,
    no: 1,
    oct: 1,
    open: 1,
    opendir: 1,
    ord: 1,
    our: 2,
    pack: 1,
    "package": 1,
    pipe: 1,
    pop: 1,
    pos: 1,
    print: 1,
    printf: 1,
    prototype: 1,
    push: 1,
    q: null,
    qq: null,
    qr: null,
    quotemeta: null,
    qw: null,
    qx: null,
    rand: 1,
    read: 1,
    readdir: 1,
    readline: 1,
    readlink: 1,
    readpipe: 1,
    recv: 1,
    redo: 1,
    ref: 1,
    rename: 1,
    require: 1,
    reset: 1,
    "return": 1,
    reverse: 1,
    rewinddir: 1,
    rindex: 1,
    rmdir: 1,
    s: null,
    say: 1,
    scalar: 1,
    seek: 1,
    seekdir: 1,
    select: 1,
    semctl: 1,
    semget: 1,
    semop: 1,
    send: 1,
    setgrent: 1,
    sethostent: 1,
    setnetent: 1,
    setpgrp: 1,
    setpriority: 1,
    setprotoent: 1,
    setpwent: 1,
    setservent: 1,
    setsockopt: 1,
    shift: 1,
    shmctl: 1,
    shmget: 1,
    shmread: 1,
    shmwrite: 1,
    shutdown: 1,
    "sin": 1,
    sleep: 1,
    socket: 1,
    socketpair: 1,
    "sort": 1,
    splice: 1,
    "split": 1,
    sprintf: 1,
    "sqrt": 1,
    srand: 1,
    stat: 1,
    state: 1,
    study: 1,
    "sub": 1,
    "substr": 1,
    symlink: 1,
    syscall: 1,
    sysopen: 1,
    sysread: 1,
    sysseek: 1,
    system: 1,
    syswrite: 1,
    tell: 1,
    telldir: 1,
    tie: 1,
    tied: 1,
    time: 1,
    times: 1,
    tr: null,
    truncate: 1,
    uc: 1,
    ucfirst: 1,
    umask: 1,
    undef: 1,
    unlink: 1,
    unpack: 1,
    unshift: 1,
    untie: 1,
    use: 1,
    utime: 1,
    values: 1,
    vec: 1,
    wait: 1,
    waitpid: 1,
    wantarray: 1,
    warn: 1,
    when: 1,
    write: 1,
    y: null
}; // - transliterate a string
var RXstyle = "string.special";
var RXmodifiers = /[goseximacplud]/; // NOTE: "m", "s", "y" and "tr" need to correct real modifiers for each regexp type
function tokenChain(stream, state, chain, style, tail) {
    state.chain = null; //                                                          12   3tail
    state.style = null;
    state.tail = null;
    state.tokenize = function(stream, state) {
        var e = false, c, i = 0;
        while(c = stream.next()){
            if (c === chain[i] && !e) {
                if (chain[++i] !== undefined) {
                    state.chain = chain[i];
                    state.style = style;
                    state.tail = tail;
                } else if (tail) stream.eatWhile(tail);
                state.tokenize = tokenPerl;
                return style;
            }
            e = !e && c == "\\";
        }
        return style;
    };
    return state.tokenize(stream, state);
}
function tokenSOMETHING(stream, state, string) {
    state.tokenize = function(stream, state) {
        if (stream.string == string) state.tokenize = tokenPerl;
        stream.skipToEnd();
        return "string";
    };
    return state.tokenize(stream, state);
}
function tokenPerl(stream, state) {
    if (stream.eatSpace()) return null;
    if (state.chain) return tokenChain(stream, state, state.chain, state.style, state.tail);
    if (stream.match(/^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/)) return "number";
    if (stream.match(/^<<(?=[_a-zA-Z])/)) {
        stream.eatWhile(/\w/);
        return tokenSOMETHING(stream, state, stream.current().substr(2));
    }
    if (stream.sol() && stream.match(/^\=item(?!\w)/)) return tokenSOMETHING(stream, state, "=cut");
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
        if (prefix(stream, 3) == "<<" + ch) {
            var p = stream.pos;
            stream.eatWhile(/\w/);
            var n = stream.current().substr(1);
            if (n && stream.eat(ch)) return tokenSOMETHING(stream, state, n);
            stream.pos = p;
        }
        return tokenChain(stream, state, [
            ch
        ], "string");
    }
    if (ch == "q") {
        var c = look(stream, -2);
        if (!(c && /\w/.test(c))) {
            c = look(stream, 0);
            if (c == "x") {
                c = look(stream, 1);
                if (c == "(") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ")"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "[") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "]"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "{") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "}"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "<") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ">"
                    ], RXstyle, RXmodifiers);
                }
                if (/[\^'"!~\/]/.test(c)) {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        stream.eat(c)
                    ], RXstyle, RXmodifiers);
                }
            } else if (c == "q") {
                c = look(stream, 1);
                if (c == "(") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ")"
                    ], "string");
                }
                if (c == "[") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "]"
                    ], "string");
                }
                if (c == "{") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "}"
                    ], "string");
                }
                if (c == "<") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ">"
                    ], "string");
                }
                if (/[\^'"!~\/]/.test(c)) {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        stream.eat(c)
                    ], "string");
                }
            } else if (c == "w") {
                c = look(stream, 1);
                if (c == "(") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ")"
                    ], "bracket");
                }
                if (c == "[") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "]"
                    ], "bracket");
                }
                if (c == "{") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "}"
                    ], "bracket");
                }
                if (c == "<") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ">"
                    ], "bracket");
                }
                if (/[\^'"!~\/]/.test(c)) {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        stream.eat(c)
                    ], "bracket");
                }
            } else if (c == "r") {
                c = look(stream, 1);
                if (c == "(") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ")"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "[") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "]"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "{") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        "}"
                    ], RXstyle, RXmodifiers);
                }
                if (c == "<") {
                    eatSuffix(stream, 2);
                    return tokenChain(stream, state, [
                        ">"
                    ], RXstyle, RXmodifiers);
                }
                if (/[\^'"!~\/]/.test(c)) {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        stream.eat(c)
                    ], RXstyle, RXmodifiers);
                }
            } else if (/[\^'"!~\/(\[{<]/.test(c)) {
                if (c == "(") {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        ")"
                    ], "string");
                }
                if (c == "[") {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        "]"
                    ], "string");
                }
                if (c == "{") {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        "}"
                    ], "string");
                }
                if (c == "<") {
                    eatSuffix(stream, 1);
                    return tokenChain(stream, state, [
                        ">"
                    ], "string");
                }
                if (/[\^'"!~\/]/.test(c)) return tokenChain(stream, state, [
                    stream.eat(c)
                ], "string");
            }
        }
    }
    if (ch == "m") {
        var c = look(stream, -2);
        if (!(c && /\w/.test(c))) {
            c = stream.eat(/[(\[{<\^'"!~\/]/);
            if (c) {
                if (/[\^'"!~\/]/.test(c)) return tokenChain(stream, state, [
                    c
                ], RXstyle, RXmodifiers);
                if (c == "(") return tokenChain(stream, state, [
                    ")"
                ], RXstyle, RXmodifiers);
                if (c == "[") return tokenChain(stream, state, [
                    "]"
                ], RXstyle, RXmodifiers);
                if (c == "{") return tokenChain(stream, state, [
                    "}"
                ], RXstyle, RXmodifiers);
                if (c == "<") return tokenChain(stream, state, [
                    ">"
                ], RXstyle, RXmodifiers);
            }
        }
    }
    if (ch == "s") {
        var c = /[\/>\]})\w]/.test(look(stream, -2));
        if (!c) {
            c = stream.eat(/[(\[{<\^'"!~\/]/);
            if (c) {
                if (c == "[") return tokenChain(stream, state, [
                    "]",
                    "]"
                ], RXstyle, RXmodifiers);
                if (c == "{") return tokenChain(stream, state, [
                    "}",
                    "}"
                ], RXstyle, RXmodifiers);
                if (c == "<") return tokenChain(stream, state, [
                    ">",
                    ">"
                ], RXstyle, RXmodifiers);
                if (c == "(") return tokenChain(stream, state, [
                    ")",
                    ")"
                ], RXstyle, RXmodifiers);
                return tokenChain(stream, state, [
                    c,
                    c
                ], RXstyle, RXmodifiers);
            }
        }
    }
    if (ch == "y") {
        var c = /[\/>\]})\w]/.test(look(stream, -2));
        if (!c) {
            c = stream.eat(/[(\[{<\^'"!~\/]/);
            if (c) {
                if (c == "[") return tokenChain(stream, state, [
                    "]",
                    "]"
                ], RXstyle, RXmodifiers);
                if (c == "{") return tokenChain(stream, state, [
                    "}",
                    "}"
                ], RXstyle, RXmodifiers);
                if (c == "<") return tokenChain(stream, state, [
                    ">",
                    ">"
                ], RXstyle, RXmodifiers);
                if (c == "(") return tokenChain(stream, state, [
                    ")",
                    ")"
                ], RXstyle, RXmodifiers);
                return tokenChain(stream, state, [
                    c,
                    c
                ], RXstyle, RXmodifiers);
            }
        }
    }
    if (ch == "t") {
        var c = /[\/>\]})\w]/.test(look(stream, -2));
        if (!c) {
            c = stream.eat("r");
            if (c) {
                c = stream.eat(/[(\[{<\^'"!~\/]/);
                if (c) {
                    if (c == "[") return tokenChain(stream, state, [
                        "]",
                        "]"
                    ], RXstyle, RXmodifiers);
                    if (c == "{") return tokenChain(stream, state, [
                        "}",
                        "}"
                    ], RXstyle, RXmodifiers);
                    if (c == "<") return tokenChain(stream, state, [
                        ">",
                        ">"
                    ], RXstyle, RXmodifiers);
                    if (c == "(") return tokenChain(stream, state, [
                        ")",
                        ")"
                    ], RXstyle, RXmodifiers);
                    return tokenChain(stream, state, [
                        c,
                        c
                    ], RXstyle, RXmodifiers);
                }
            }
        }
    }
    if (ch == "`") return tokenChain(stream, state, [
        ch
    ], "builtin");
    if (ch == "/") {
        if (!/~\s*$/.test(prefix(stream))) return "operator";
        else return tokenChain(stream, state, [
            ch
        ], RXstyle, RXmodifiers);
    }
    if (ch == "$") {
        var p = stream.pos;
        if (stream.eatWhile(/\d/) || stream.eat("{") && stream.eatWhile(/\d/) && stream.eat("}")) return "builtin";
        else stream.pos = p;
    }
    if (/[$@%]/.test(ch)) {
        var p = stream.pos;
        if (stream.eat("^") && stream.eat(/[A-Z]/) || !/[@$%&]/.test(look(stream, -2)) && stream.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/)) {
            var c = stream.current();
            if (PERL[c]) return "builtin";
        }
        stream.pos = p;
    }
    if (/[$@%&]/.test(ch)) {
        if (stream.eatWhile(/[\w$]/) || stream.eat("{") && stream.eatWhile(/[\w$]/) && stream.eat("}")) {
            var c = stream.current();
            if (PERL[c]) return "builtin";
            else return "variable";
        }
    }
    if (ch == "#") {
        if (look(stream, -2) != "$") {
            stream.skipToEnd();
            return "comment";
        }
    }
    if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(ch)) {
        var p = stream.pos;
        stream.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/);
        if (PERL[stream.current()]) return "operator";
        else stream.pos = p;
    }
    if (ch == "_") {
        if (stream.pos == 1) {
            if (suffix(stream, 6) == "_END__") return tokenChain(stream, state, [
                "\0"
            ], "comment");
            else if (suffix(stream, 7) == "_DATA__") return tokenChain(stream, state, [
                "\0"
            ], "builtin");
            else if (suffix(stream, 7) == "_C__") return tokenChain(stream, state, [
                "\0"
            ], "string");
        }
    }
    if (/\w/.test(ch)) {
        var p = stream.pos;
        if (look(stream, -2) == "{" && (look(stream, 0) == "}" || stream.eatWhile(/\w/) && look(stream, 0) == "}")) return "string";
        else stream.pos = p;
    }
    if (/[A-Z]/.test(ch)) {
        var l = look(stream, -2);
        var p = stream.pos;
        stream.eatWhile(/[A-Z_]/);
        if (/[\da-z]/.test(look(stream, 0))) stream.pos = p;
        else {
            var c = PERL[stream.current()];
            if (!c) return "meta";
            if (c[1]) c = c[0];
            if (l != ":") {
                if (c == 1) return "keyword";
                else if (c == 2) return "def";
                else if (c == 3) return "atom";
                else if (c == 4) return "operator";
                else if (c == 5) return "builtin";
                else return "meta";
            } else return "meta";
        }
    }
    if (/[a-zA-Z_]/.test(ch)) {
        var l = look(stream, -2);
        stream.eatWhile(/\w/);
        var c = PERL[stream.current()];
        if (!c) return "meta";
        if (c[1]) c = c[0];
        if (l != ":") {
            if (c == 1) return "keyword";
            else if (c == 2) return "def";
            else if (c == 3) return "atom";
            else if (c == 4) return "operator";
            else if (c == 5) return "builtin";
            else return "meta";
        } else return "meta";
    }
    return null;
}
const perl = {
    name: "perl",
    startState: function() {
        return {
            tokenize: tokenPerl,
            chain: null,
            style: null,
            tail: null
        };
    },
    token: function(stream, state) {
        return (state.tokenize || tokenPerl)(stream, state);
    },
    languageData: {
        commentTokens: {
            line: "#"
        },
        wordChars: "$"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ggllI"], null, "parcelRequire9c72")

//# sourceMappingURL=perl.c7412daf.js.map
