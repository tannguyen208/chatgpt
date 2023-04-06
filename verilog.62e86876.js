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
})({"4LwGW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "729e58c662e86876";
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

},{}],"50EyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "verilog", ()=>verilog);
parcelHelpers.export(exports, "tlv", ()=>tlv);
function mkVerilog(parserConfig) {
    var statementIndentUnit = parserConfig.statementIndentUnit, dontAlignCalls = parserConfig.dontAlignCalls, noIndentKeywords = parserConfig.noIndentKeywords || [], multiLineStrings = parserConfig.multiLineStrings, hooks = parserConfig.hooks || {};
    function words(str) {
        var obj = {}, words = str.split(" ");
        for(var i = 0; i < words.length; ++i)obj[words[i]] = true;
        return obj;
    }
    /**
   * Keywords from IEEE 1800-2012
   */ var keywords = words("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor");
    /** Operators from IEEE 1800-2012
      unary_operator ::=
      + | - | ! | ~ | & | ~& | | | ~| | ^ | ~^ | ^~
      binary_operator ::=
      + | - | * | / | % | == | != | === | !== | ==? | !=? | && | || | **
      | < | <= | > | >= | & | | | ^ | ^~ | ~^ | >> | << | >>> | <<<
      | -> | <->
      inc_or_dec_operator ::= ++ | --
      unary_module_path_operator ::=
      ! | ~ | & | ~& | | | ~| | ^ | ~^ | ^~
      binary_module_path_operator ::=
      == | != | && | || | & | | | ^ | ^~ | ~^
  */ var isOperatorChar = /[\+\-\*\/!~&|^%=?:]/;
    var isBracketChar = /[\[\]{}()]/;
    var unsignedNumber = /\d[0-9_]*/;
    var decimalLiteral = /\d*\s*'s?d\s*\d[0-9_]*/i;
    var binaryLiteral = /\d*\s*'s?b\s*[xz01][xz01_]*/i;
    var octLiteral = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i;
    var hexLiteral = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i;
    var realLiteral = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i;
    var closingBracketOrWord = /^((\w+)|[)}\]])/;
    var closingBracket = /[)}\]]/;
    var curPunc;
    var curKeyword;
    // Block openings which are closed by a matching keyword in the form of ("end" + keyword)
    // E.g. "task" => "endtask"
    var blockKeywords = words("case checker class clocking config function generate interface module package primitive program property specify sequence table task");
    // Opening/closing pairs
    var openClose = {};
    for(var keyword in blockKeywords)openClose[keyword] = "end" + keyword;
    openClose["begin"] = "end";
    openClose["casex"] = "endcase";
    openClose["casez"] = "endcase";
    openClose["do"] = "while";
    openClose["fork"] = "join;join_any;join_none";
    openClose["covergroup"] = "endgroup";
    for(var i in noIndentKeywords){
        var keyword = noIndentKeywords[i];
        if (openClose[keyword]) openClose[keyword] = undefined;
    }
    // Keywords which open statements that are ended with a semi-colon
    var statementKeywords = words("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");
    function tokenBase(stream, state) {
        var ch = stream.peek(), style;
        if (hooks[ch] && (style = hooks[ch](stream, state)) != false) return style;
        if (hooks.tokenBase && (style = hooks.tokenBase(stream, state)) != false) return style;
        if (/[,;:\.]/.test(ch)) {
            curPunc = stream.next();
            return null;
        }
        if (isBracketChar.test(ch)) {
            curPunc = stream.next();
            return "bracket";
        }
        // Macros (tick-defines)
        if (ch == "`") {
            stream.next();
            if (stream.eatWhile(/[\w\$_]/)) return "def";
            else return null;
        }
        // System calls
        if (ch == "$") {
            stream.next();
            if (stream.eatWhile(/[\w\$_]/)) return "meta";
            else return null;
        }
        // Time literals
        if (ch == "#") {
            stream.next();
            stream.eatWhile(/[\d_.]/);
            return "def";
        }
        // Strings
        if (ch == '"') {
            stream.next();
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
        }
        // Comments
        if (ch == "/") {
            stream.next();
            if (stream.eat("*")) {
                state.tokenize = tokenComment;
                return tokenComment(stream, state);
            }
            if (stream.eat("/")) {
                stream.skipToEnd();
                return "comment";
            }
            stream.backUp(1);
        }
        // Numeric literals
        if (stream.match(realLiteral) || stream.match(decimalLiteral) || stream.match(binaryLiteral) || stream.match(octLiteral) || stream.match(hexLiteral) || stream.match(unsignedNumber) || stream.match(realLiteral)) return "number";
        // Operators
        if (stream.eatWhile(isOperatorChar)) return "meta";
        // Keywords / plain variables
        if (stream.eatWhile(/[\w\$_]/)) {
            var cur = stream.current();
            if (keywords[cur]) {
                if (openClose[cur]) curPunc = "newblock";
                if (statementKeywords[cur]) curPunc = "newstatement";
                curKeyword = cur;
                return "keyword";
            }
            return "variable";
        }
        stream.next();
        return null;
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
            if (end || !(escaped || multiLineStrings)) state.tokenize = tokenBase;
            return "string";
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
        return "comment";
    }
    function Context(indented, column, type, align, prev) {
        this.indented = indented;
        this.column = column;
        this.type = type;
        this.align = align;
        this.prev = prev;
    }
    function pushContext(state, col, type) {
        var indent = state.indented;
        var c = new Context(indent, col, type, null, state.context);
        return state.context = c;
    }
    function popContext(state) {
        var t = state.context.type;
        if (t == ")" || t == "]" || t == "}") state.indented = state.context.indented;
        return state.context = state.context.prev;
    }
    function isClosing(text, contextClosing) {
        if (text == contextClosing) return true;
        else {
            // contextClosing may be multiple keywords separated by ;
            var closingKeywords = contextClosing.split(";");
            for(var i in closingKeywords){
                if (text == closingKeywords[i]) return true;
            }
            return false;
        }
    }
    function buildElectricInputRegEx() {
        // Reindentation should occur on any bracket char: {}()[]
        // or on a match of any of the block closing keywords, at
        // the end of a line
        var allClosings = [];
        for(var i in openClose)if (openClose[i]) {
            var closings = openClose[i].split(";");
            for(var j in closings)allClosings.push(closings[j]);
        }
        var re = new RegExp("[{}()\\[\\]]|(" + allClosings.join("|") + ")$");
        return re;
    }
    // Interface
    return {
        name: "verilog",
        startState: function(indentUnit) {
            var state = {
                tokenize: null,
                context: new Context(-indentUnit, 0, "top", false),
                indented: 0,
                startOfLine: true
            };
            if (hooks.startState) hooks.startState(state);
            return state;
        },
        token: function(stream, state) {
            var ctx = state.context;
            if (stream.sol()) {
                if (ctx.align == null) ctx.align = false;
                state.indented = stream.indentation();
                state.startOfLine = true;
            }
            if (hooks.token) {
                // Call hook, with an optional return value of a style to override verilog styling.
                var style = hooks.token(stream, state);
                if (style !== undefined) return style;
            }
            if (stream.eatSpace()) return null;
            curPunc = null;
            curKeyword = null;
            var style = (state.tokenize || tokenBase)(stream, state);
            if (style == "comment" || style == "meta" || style == "variable") return style;
            if (ctx.align == null) ctx.align = true;
            if (curPunc == ctx.type) popContext(state);
            else if (curPunc == ";" && ctx.type == "statement" || ctx.type && isClosing(curKeyword, ctx.type)) {
                ctx = popContext(state);
                while(ctx && ctx.type == "statement")ctx = popContext(state);
            } else if (curPunc == "{") pushContext(state, stream.column(), "}");
            else if (curPunc == "[") pushContext(state, stream.column(), "]");
            else if (curPunc == "(") pushContext(state, stream.column(), ")");
            else if (ctx && ctx.type == "endcase" && curPunc == ":") pushContext(state, stream.column(), "statement");
            else if (curPunc == "newstatement") pushContext(state, stream.column(), "statement");
            else if (curPunc == "newblock") {
                if (curKeyword == "function" && ctx && (ctx.type == "statement" || ctx.type == "endgroup")) ;
                else if (curKeyword == "task" && ctx && ctx.type == "statement") ;
                else {
                    var close = openClose[curKeyword];
                    pushContext(state, stream.column(), close);
                }
            }
            state.startOfLine = false;
            return style;
        },
        indent: function(state, textAfter, cx) {
            if (state.tokenize != tokenBase && state.tokenize != null) return null;
            if (hooks.indent) {
                var fromHook = hooks.indent(state);
                if (fromHook >= 0) return fromHook;
            }
            var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
            if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
            var closing = false;
            var possibleClosing = textAfter.match(closingBracketOrWord);
            if (possibleClosing) closing = isClosing(possibleClosing[0], ctx.type);
            if (ctx.type == "statement") return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit || cx.unit);
            else if (closingBracket.test(ctx.type) && ctx.align && !dontAlignCalls) return ctx.column + (closing ? 0 : 1);
            else if (ctx.type == ")" && !closing) return ctx.indented + (statementIndentUnit || cx.unit);
            else return ctx.indented + (closing ? 0 : cx.unit);
        },
        languageData: {
            indentOnInput: buildElectricInputRegEx(),
            commentTokens: {
                line: "//",
                block: {
                    open: "/*",
                    close: "*/"
                }
            }
        }
    };
}
const verilog = mkVerilog({});
// TL-Verilog mode.
// See tl-x.org for language spec.
// See the mode in action at makerchip.com.
// Contact: steve.hoover@redwoodeda.com
// TLV Identifier prefixes.
// Note that sign is not treated separately, so "+/-" versions of numeric identifiers
// are included.
var tlvIdentifierStyle = {
    "|": "link",
    ">": "property",
    "$": "variable",
    "$$": "variable",
    "?$": "qualifier",
    "?*": "qualifier",
    "-": "contentSeparator",
    "/": "property",
    "/-": "property",
    "@": "variableName.special",
    "@-": "variableName.special",
    "@++": "variableName.special",
    "@+=": "variableName.special",
    "@+=-": "variableName.special",
    "@--": "variableName.special",
    "@-=": "variableName.special",
    "%+": "tag",
    "%-": "tag",
    "%": "tag",
    ">>": "tag",
    "<<": "tag",
    "<>": "tag",
    "#": "tag",
    "^": "attribute",
    "^^": "attribute",
    "^!": "attribute",
    "*": "variable",
    "**": "variable",
    "\\": "keyword",
    '"': "comment"
};
// Lines starting with these characters define scope (result in indentation).
var tlvScopePrefixChars = {
    "/": "beh-hier",
    ">": "beh-hier",
    "-": "phys-hier",
    "|": "pipe",
    "?": "when",
    "@": "stage",
    "\\": "keyword"
};
var tlvIndentUnit = 3;
var tlvTrackStatements = false;
var tlvIdentMatch = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/; // Matches an identifier.
// Note that ':' is excluded, because of it's use in [:].
var tlvLineIndentationMatch = /^[! ] */;
var tlvCommentMatch = /^\/[\/\*]/;
const tlv = mkVerilog({
    hooks: {
        electricInput: false,
        // Return undefined for verilog tokenizing, or style for TLV token (null not used).
        // Standard CM styles are used for most formatting, but some TL-Verilog-specific highlighting
        // can be enabled with the definition of cm-tlv-* styles, including highlighting for:
        //   - M4 tokens
        //   - TLV scope indentation
        //   - Statement delimitation (enabled by tlvTrackStatements)
        token: function(stream, state) {
            var style = undefined;
            var match; // Return value of pattern matches.
            // Set highlighting mode based on code region (TLV or SV).
            if (stream.sol() && !state.tlvInBlockComment) {
                // Process region.
                if (stream.peek() == "\\") {
                    style = "def";
                    stream.skipToEnd();
                    if (stream.string.match(/\\SV/)) state.tlvCodeActive = false;
                    else if (stream.string.match(/\\TLV/)) state.tlvCodeActive = true;
                }
                // Correct indentation in the face of a line prefix char.
                if (state.tlvCodeActive && stream.pos == 0 && state.indented == 0 && (match = stream.match(tlvLineIndentationMatch, false))) state.indented = match[0].length;
                // Compute indentation state:
                //   o Auto indentation on next line
                //   o Indentation scope styles
                var indented = state.indented;
                var depth = indented / tlvIndentUnit;
                if (depth <= state.tlvIndentationStyle.length) {
                    // not deeper than current scope
                    var blankline = stream.string.length == indented;
                    var chPos = depth * tlvIndentUnit;
                    if (chPos < stream.string.length) {
                        var bodyString = stream.string.slice(chPos);
                        var ch = bodyString[0];
                        if (tlvScopePrefixChars[ch] && (match = bodyString.match(tlvIdentMatch)) && tlvIdentifierStyle[match[1]]) {
                            // This line begins scope.
                            // Next line gets indented one level.
                            indented += tlvIndentUnit;
                            // Style the next level of indentation (except non-region keyword identifiers,
                            //   which are statements themselves)
                            if (!(ch == "\\" && chPos > 0)) {
                                state.tlvIndentationStyle[depth] = tlvScopePrefixChars[ch];
                                if (tlvTrackStatements) state.statementComment = false;
                                depth++;
                            }
                        }
                    }
                    // Clear out deeper indentation levels unless line is blank.
                    if (!blankline) while(state.tlvIndentationStyle.length > depth)state.tlvIndentationStyle.pop();
                }
                // Set next level of indentation.
                state.tlvNextIndent = indented;
            }
            if (state.tlvCodeActive) {
                // Highlight as TLV.
                var beginStatement = false;
                if (tlvTrackStatements) {
                    // This starts a statement if the position is at the scope level
                    // and we're not within a statement leading comment.
                    beginStatement = stream.peek() != " " && // not a space
                    style === undefined && // not a region identifier
                    !state.tlvInBlockComment && // not in block comment
                    //!stream.match(tlvCommentMatch, false) && // not comment start
                    stream.column() == state.tlvIndentationStyle.length * tlvIndentUnit; // at scope level
                    if (beginStatement) {
                        if (state.statementComment) // statement already started by comment
                        beginStatement = false;
                        state.statementComment = stream.match(tlvCommentMatch, false); // comment start
                    }
                }
                var match;
                if (style !== undefined) ;
                else if (state.tlvInBlockComment) {
                    // In a block comment.
                    if (stream.match(/^.*?\*\//)) {
                        // Exit block comment.
                        state.tlvInBlockComment = false;
                        if (tlvTrackStatements && !stream.eol()) // Anything after comment is assumed to be real statement content.
                        state.statementComment = false;
                    } else stream.skipToEnd();
                    style = "comment";
                } else if ((match = stream.match(tlvCommentMatch)) && !state.tlvInBlockComment) {
                    // Start comment.
                    if (match[0] == "//") // Line comment.
                    stream.skipToEnd();
                    else // Block comment.
                    state.tlvInBlockComment = true;
                    style = "comment";
                } else if (match = stream.match(tlvIdentMatch)) {
                    // looks like an identifier (or identifier prefix)
                    var prefix = match[1];
                    var mnemonic = match[2];
                    if (tlvIdentifierStyle.hasOwnProperty(prefix) && // has mnemonic or we're at the end of the line (maybe it hasn't been typed yet)
                    (mnemonic.length > 0 || stream.eol())) style = tlvIdentifierStyle[prefix];
                    else // Just swallow one character and try again.
                    // This enables subsequent identifier match with preceding symbol character, which
                    //   is legal within a statement.  (Eg, !$reset).  It also enables detection of
                    //   comment start with preceding symbols.
                    stream.backUp(stream.current().length - 1);
                } else if (stream.match(/^\t+/)) // Highlight tabs, which are illegal.
                style = "invalid";
                else if (stream.match(/^[\[\]{}\(\);\:]+/)) // [:], (), {}, ;.
                style = "meta";
                else if (match = stream.match(/^[mM]4([\+_])?[\w\d_]*/)) // m4 pre proc
                style = match[1] == "+" ? "keyword.special" : "keyword";
                else if (stream.match(/^ +/)) // Skip over spaces.
                {
                    if (stream.eol()) // Trailing spaces.
                    style = "error";
                } else if (stream.match(/^[\w\d_]+/)) // alpha-numeric token.
                style = "number";
                else // Eat the next char w/ no formatting.
                stream.next();
            } else if (stream.match(/^[mM]4([\w\d_]*)/)) // m4 pre proc
            style = "keyword";
            return style;
        },
        indent: function(state) {
            return state.tlvCodeActive == true ? state.tlvNextIndent : -1;
        },
        startState: function(state) {
            state.tlvIndentationStyle = []; // Styles to use for each level of indentation.
            state.tlvCodeActive = true; // True when we're in a TLV region (and at beginning of file).
            state.tlvNextIndent = -1; // The number of spaces to autoindent the next line if tlvCodeActive.
            state.tlvInBlockComment = false; // True inside /**/ comment.
            if (tlvTrackStatements) state.statementComment = false; // True inside a statement's header comment.
        }
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4LwGW"], null, "parcelRequire9c72")

//# sourceMappingURL=verilog.62e86876.js.map
