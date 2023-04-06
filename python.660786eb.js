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
})({"eFRr0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0cf7e2b4660786eb";
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

},{}],"gXe1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mkPython", ()=>mkPython);
parcelHelpers.export(exports, "python", ()=>python);
parcelHelpers.export(exports, "cython", ()=>cython);
function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
}
var wordOperators = wordRegexp([
    "and",
    "or",
    "not",
    "is"
]);
var commonKeywords = [
    "as",
    "assert",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "lambda",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield",
    "in"
];
var commonBuiltins = [
    "abs",
    "all",
    "any",
    "bin",
    "bool",
    "bytearray",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "filter",
    "float",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip",
    "__import__",
    "NotImplemented",
    "Ellipsis",
    "__debug__"
];
function top(state) {
    return state.scopes[state.scopes.length - 1];
}
function mkPython(parserConf) {
    var ERRORCLASS = "error";
    var delimiters = parserConf.delimiters || parserConf.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
    //               (Backwards-compatibility with old, cumbersome config system)
    var operators = [
        parserConf.singleOperators,
        parserConf.doubleOperators,
        parserConf.doubleDelimiters,
        parserConf.tripleDelimiters,
        parserConf.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/
    ];
    for(var i = 0; i < operators.length; i++)if (!operators[i]) operators.splice(i--, 1);
    var hangingIndent = parserConf.hangingIndent;
    var myKeywords = commonKeywords, myBuiltins = commonBuiltins;
    if (parserConf.extra_keywords != undefined) myKeywords = myKeywords.concat(parserConf.extra_keywords);
    if (parserConf.extra_builtins != undefined) myBuiltins = myBuiltins.concat(parserConf.extra_builtins);
    var py3 = !(parserConf.version && Number(parserConf.version) < 3);
    if (py3) {
        // since http://legacy.python.org/dev/peps/pep-0465/ @ is also an operator
        var identifiers = parserConf.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        myKeywords = myKeywords.concat([
            "nonlocal",
            "False",
            "True",
            "None",
            "async",
            "await"
        ]);
        myBuiltins = myBuiltins.concat([
            "ascii",
            "bytes",
            "exec",
            "print"
        ]);
        var stringPrefixes = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))", "i");
    } else {
        var identifiers = parserConf.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        myKeywords = myKeywords.concat([
            "exec",
            "print"
        ]);
        myBuiltins = myBuiltins.concat([
            "apply",
            "basestring",
            "buffer",
            "cmp",
            "coerce",
            "execfile",
            "file",
            "intern",
            "long",
            "raw_input",
            "reduce",
            "reload",
            "unichr",
            "unicode",
            "xrange",
            "False",
            "True",
            "None"
        ]);
        var stringPrefixes = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
    }
    var keywords = wordRegexp(myKeywords);
    var builtins = wordRegexp(myBuiltins);
    // tokenizers
    function tokenBase(stream, state) {
        var sol = stream.sol() && state.lastToken != "\\";
        if (sol) state.indent = stream.indentation();
        // Handle scope changes
        if (sol && top(state).type == "py") {
            var scopeOffset = top(state).offset;
            if (stream.eatSpace()) {
                var lineOffset = stream.indentation();
                if (lineOffset > scopeOffset) pushPyScope(stream, state);
                else if (lineOffset < scopeOffset && dedent(stream, state) && stream.peek() != "#") state.errorToken = true;
                return null;
            } else {
                var style = tokenBaseInner(stream, state);
                if (scopeOffset > 0 && dedent(stream, state)) style += " " + ERRORCLASS;
                return style;
            }
        }
        return tokenBaseInner(stream, state);
    }
    function tokenBaseInner(stream, state, inFormat) {
        if (stream.eatSpace()) return null;
        // Handle Comments
        if (!inFormat && stream.match(/^#.*/)) return "comment";
        // Handle Number Literals
        if (stream.match(/^[0-9\.]/, false)) {
            var floatLiteral = false;
            // Floats
            if (stream.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) floatLiteral = true;
            if (stream.match(/^[\d_]+\.\d*/)) floatLiteral = true;
            if (stream.match(/^\.\d+/)) floatLiteral = true;
            if (floatLiteral) {
                // Float literals may be "imaginary"
                stream.eat(/J/i);
                return "number";
            }
            // Integers
            var intLiteral = false;
            // Hex
            if (stream.match(/^0x[0-9a-f_]+/i)) intLiteral = true;
            // Binary
            if (stream.match(/^0b[01_]+/i)) intLiteral = true;
            // Octal
            if (stream.match(/^0o[0-7_]+/i)) intLiteral = true;
            // Decimal
            if (stream.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
                // Decimal literals may be "imaginary"
                stream.eat(/J/i);
                // TODO - Can you have imaginary longs?
                intLiteral = true;
            }
            // Zero by itself with no other piece of number.
            if (stream.match(/^0(?![\dx])/i)) intLiteral = true;
            if (intLiteral) {
                // Integer literals may be "long"
                stream.eat(/L/i);
                return "number";
            }
        }
        // Handle Strings
        if (stream.match(stringPrefixes)) {
            var isFmtString = stream.current().toLowerCase().indexOf("f") !== -1;
            if (!isFmtString) {
                state.tokenize = tokenStringFactory(stream.current(), state.tokenize);
                return state.tokenize(stream, state);
            } else {
                state.tokenize = formatStringFactory(stream.current(), state.tokenize);
                return state.tokenize(stream, state);
            }
        }
        for(var i = 0; i < operators.length; i++)if (stream.match(operators[i])) return "operator";
        if (stream.match(delimiters)) return "punctuation";
        if (state.lastToken == "." && stream.match(identifiers)) return "property";
        if (stream.match(keywords) || stream.match(wordOperators)) return "keyword";
        if (stream.match(builtins)) return "builtin";
        if (stream.match(/^(self|cls)\b/)) return "self";
        if (stream.match(identifiers)) {
            if (state.lastToken == "def" || state.lastToken == "class") return "def";
            return "variable";
        }
        // Handle non-detected items
        stream.next();
        return inFormat ? null : ERRORCLASS;
    }
    function formatStringFactory(delimiter, tokenOuter) {
        while("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)delimiter = delimiter.substr(1);
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        function tokenNestedExpr(depth) {
            return function(stream, state) {
                var inner = tokenBaseInner(stream, state, true);
                if (inner == "punctuation") {
                    if (stream.current() == "{") state.tokenize = tokenNestedExpr(depth + 1);
                    else if (stream.current() == "}") {
                        if (depth > 1) state.tokenize = tokenNestedExpr(depth - 1);
                        else state.tokenize = tokenString;
                    }
                }
                return inner;
            };
        }
        function tokenString(stream, state) {
            while(!stream.eol()){
                stream.eatWhile(/[^'"\{\}\\]/);
                if (stream.eat("\\")) {
                    stream.next();
                    if (singleline && stream.eol()) return OUTCLASS;
                } else if (stream.match(delimiter)) {
                    state.tokenize = tokenOuter;
                    return OUTCLASS;
                } else if (stream.match("{{")) // ignore {{ in f-str
                return OUTCLASS;
                else if (stream.match("{", false)) {
                    // switch to nested mode
                    state.tokenize = tokenNestedExpr(0);
                    if (stream.current()) return OUTCLASS;
                    else return state.tokenize(stream, state);
                } else if (stream.match("}}")) return OUTCLASS;
                else if (stream.match("}")) // single } in f-string is an error
                return ERRORCLASS;
                else stream.eat(/['"]/);
            }
            if (singleline) {
                if (parserConf.singleLineStringErrors) return ERRORCLASS;
                else state.tokenize = tokenOuter;
            }
            return OUTCLASS;
        }
        tokenString.isString = true;
        return tokenString;
    }
    function tokenStringFactory(delimiter, tokenOuter) {
        while("rubf".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)delimiter = delimiter.substr(1);
        var singleline = delimiter.length == 1;
        var OUTCLASS = "string";
        function tokenString(stream, state) {
            while(!stream.eol()){
                stream.eatWhile(/[^'"\\]/);
                if (stream.eat("\\")) {
                    stream.next();
                    if (singleline && stream.eol()) return OUTCLASS;
                } else if (stream.match(delimiter)) {
                    state.tokenize = tokenOuter;
                    return OUTCLASS;
                } else stream.eat(/['"]/);
            }
            if (singleline) {
                if (parserConf.singleLineStringErrors) return ERRORCLASS;
                else state.tokenize = tokenOuter;
            }
            return OUTCLASS;
        }
        tokenString.isString = true;
        return tokenString;
    }
    function pushPyScope(stream, state) {
        while(top(state).type != "py")state.scopes.pop();
        state.scopes.push({
            offset: top(state).offset + stream.indentUnit,
            type: "py",
            align: null
        });
    }
    function pushBracketScope(stream, state, type) {
        var align = stream.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : stream.column() + 1;
        state.scopes.push({
            offset: state.indent + (hangingIndent || stream.indentUnit),
            type: type,
            align: align
        });
    }
    function dedent(stream, state) {
        var indented = stream.indentation();
        while(state.scopes.length > 1 && top(state).offset > indented){
            if (top(state).type != "py") return true;
            state.scopes.pop();
        }
        return top(state).offset != indented;
    }
    function tokenLexer(stream, state) {
        if (stream.sol()) {
            state.beginningOfLine = true;
            state.dedent = false;
        }
        var style = state.tokenize(stream, state);
        var current = stream.current();
        // Handle decorators
        if (state.beginningOfLine && current == "@") return stream.match(identifiers, false) ? "meta" : py3 ? "operator" : ERRORCLASS;
        if (/\S/.test(current)) state.beginningOfLine = false;
        if ((style == "variable" || style == "builtin") && state.lastToken == "meta") style = "meta";
        // Handle scope changes.
        if (current == "pass" || current == "return") state.dedent = true;
        if (current == "lambda") state.lambda = true;
        if (current == ":" && !state.lambda && top(state).type == "py" && stream.match(/^\s*(?:#|$)/, false)) pushPyScope(stream, state);
        if (current.length == 1 && !/string|comment/.test(style)) {
            var delimiter_index = "[({".indexOf(current);
            if (delimiter_index != -1) pushBracketScope(stream, state, "])}".slice(delimiter_index, delimiter_index + 1));
            delimiter_index = "])}".indexOf(current);
            if (delimiter_index != -1) {
                if (top(state).type == current) state.indent = state.scopes.pop().offset - (hangingIndent || stream.indentUnit);
                else return ERRORCLASS;
            }
        }
        if (state.dedent && stream.eol() && top(state).type == "py" && state.scopes.length > 1) state.scopes.pop();
        return style;
    }
    return {
        name: "python",
        startState: function() {
            return {
                tokenize: tokenBase,
                scopes: [
                    {
                        offset: 0,
                        type: "py",
                        align: null
                    }
                ],
                indent: 0,
                lastToken: null,
                lambda: false,
                dedent: 0
            };
        },
        token: function(stream, state) {
            var addErr = state.errorToken;
            if (addErr) state.errorToken = false;
            var style = tokenLexer(stream, state);
            if (style && style != "comment") state.lastToken = style == "keyword" || style == "punctuation" ? stream.current() : style;
            if (style == "punctuation") style = null;
            if (stream.eol() && state.lambda) state.lambda = false;
            return addErr ? ERRORCLASS : style;
        },
        indent: function(state, textAfter, cx) {
            if (state.tokenize != tokenBase) return state.tokenize.isString ? null : 0;
            var scope = top(state);
            var closing = scope.type == textAfter.charAt(0) || scope.type == "py" && !state.dedent && /^(else:|elif |except |finally:)/.test(textAfter);
            if (scope.align != null) return scope.align - (closing ? 1 : 0);
            else return scope.offset - (closing ? hangingIndent || cx.unit : 0);
        },
        languageData: {
            autocomplete: commonKeywords.concat(commonBuiltins).concat([
                "exec",
                "print"
            ]),
            indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
            commentTokens: {
                line: "#"
            },
            closeBrackets: {
                brackets: [
                    "(",
                    "[",
                    "{",
                    "'",
                    '"',
                    "'''",
                    '"""'
                ]
            }
        }
    };
}
var words = function(str) {
    return str.split(" ");
};
const python = mkPython({});
const cython = mkPython({
    extra_keywords: words("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eFRr0"], null, "parcelRequire9c72")

//# sourceMappingURL=python.660786eb.js.map
