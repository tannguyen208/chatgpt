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
})({"gOr6O":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b4534fbeaa355958";
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

},{}],"di8Mg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textile", ()=>textile);
var TOKEN_STYLES = {
    addition: "inserted",
    attributes: "propertyName",
    bold: "strong",
    cite: "keyword",
    code: "monospace",
    definitionList: "list",
    deletion: "deleted",
    div: "punctuation",
    em: "emphasis",
    footnote: "variable",
    footCite: "qualifier",
    header: "heading",
    html: "comment",
    image: "atom",
    italic: "emphasis",
    link: "link",
    linkDefinition: "link",
    list1: "list",
    list2: "list.special",
    list3: "list",
    notextile: "string.special",
    pre: "operator",
    p: "content",
    quote: "bracket",
    span: "quote",
    specialChar: "character",
    strong: "strong",
    sub: "content.special",
    sup: "content.special",
    table: "variableName.special",
    tableHeading: "operator"
};
function startNewLine(stream, state) {
    state.mode = Modes.newLayout;
    state.tableHeading = false;
    if (state.layoutType === "definitionList" && state.spanningLayout && stream.match(RE("definitionListEnd"), false)) state.spanningLayout = false;
}
function handlePhraseModifier(stream, state, ch) {
    if (ch === "_") {
        if (stream.eat("_")) return togglePhraseModifier(stream, state, "italic", /__/, 2);
        else return togglePhraseModifier(stream, state, "em", /_/, 1);
    }
    if (ch === "*") {
        if (stream.eat("*")) return togglePhraseModifier(stream, state, "bold", /\*\*/, 2);
        return togglePhraseModifier(stream, state, "strong", /\*/, 1);
    }
    if (ch === "[") {
        if (stream.match(/\d+\]/)) state.footCite = true;
        return tokenStyles(state);
    }
    if (ch === "(") {
        var spec = stream.match(/^(r|tm|c)\)/);
        if (spec) return TOKEN_STYLES.specialChar;
    }
    if (ch === "<" && stream.match(/(\w+)[^>]+>[^<]+<\/\1>/)) return TOKEN_STYLES.html;
    if (ch === "?" && stream.eat("?")) return togglePhraseModifier(stream, state, "cite", /\?\?/, 2);
    if (ch === "=" && stream.eat("=")) return togglePhraseModifier(stream, state, "notextile", /==/, 2);
    if (ch === "-" && !stream.eat("-")) return togglePhraseModifier(stream, state, "deletion", /-/, 1);
    if (ch === "+") return togglePhraseModifier(stream, state, "addition", /\+/, 1);
    if (ch === "~") return togglePhraseModifier(stream, state, "sub", /~/, 1);
    if (ch === "^") return togglePhraseModifier(stream, state, "sup", /\^/, 1);
    if (ch === "%") return togglePhraseModifier(stream, state, "span", /%/, 1);
    if (ch === "@") return togglePhraseModifier(stream, state, "code", /@/, 1);
    if (ch === "!") {
        var type = togglePhraseModifier(stream, state, "image", /(?:\([^\)]+\))?!/, 1);
        stream.match(/^:\S+/); // optional Url portion
        return type;
    }
    return tokenStyles(state);
}
function togglePhraseModifier(stream, state, phraseModifier, closeRE, openSize) {
    var charBefore = stream.pos > openSize ? stream.string.charAt(stream.pos - openSize - 1) : null;
    var charAfter = stream.peek();
    if (state[phraseModifier]) {
        if ((!charAfter || /\W/.test(charAfter)) && charBefore && /\S/.test(charBefore)) {
            var type = tokenStyles(state);
            state[phraseModifier] = false;
            return type;
        }
    } else if ((!charBefore || /\W/.test(charBefore)) && charAfter && /\S/.test(charAfter) && stream.match(new RegExp("^.*\\S" + closeRE.source + "(?:\\W|$)"), false)) {
        state[phraseModifier] = true;
        state.mode = Modes.attributes;
    }
    return tokenStyles(state);
}
function tokenStyles(state) {
    var disabled = textileDisabled(state);
    if (disabled) return disabled;
    var styles = [];
    if (state.layoutType) styles.push(TOKEN_STYLES[state.layoutType]);
    styles = styles.concat(activeStyles(state, "addition", "bold", "cite", "code", "deletion", "em", "footCite", "image", "italic", "link", "span", "strong", "sub", "sup", "table", "tableHeading"));
    if (state.layoutType === "header") styles.push(TOKEN_STYLES.header + "-" + state.header);
    return styles.length ? styles.join(" ") : null;
}
function textileDisabled(state) {
    var type = state.layoutType;
    switch(type){
        case "notextile":
        case "code":
        case "pre":
            return TOKEN_STYLES[type];
        default:
            if (state.notextile) return TOKEN_STYLES.notextile + (type ? " " + TOKEN_STYLES[type] : "");
            return null;
    }
}
function activeStyles(state) {
    var styles = [];
    for(var i = 1; i < arguments.length; ++i)if (state[arguments[i]]) styles.push(TOKEN_STYLES[arguments[i]]);
    return styles;
}
function blankLine(state) {
    var spanningLayout = state.spanningLayout, type = state.layoutType;
    for(var key in state)if (state.hasOwnProperty(key)) delete state[key];
    state.mode = Modes.newLayout;
    if (spanningLayout) {
        state.layoutType = type;
        state.spanningLayout = true;
    }
}
var REs = {
    cache: {},
    single: {
        bc: "bc",
        bq: "bq",
        definitionList: /- .*?:=+/,
        definitionListEnd: /.*=:\s*$/,
        div: "div",
        drawTable: /\|.*\|/,
        foot: /fn\d+/,
        header: /h[1-6]/,
        html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
        link: /[^"]+":\S/,
        linkDefinition: /\[[^\s\]]+\]\S+/,
        list: /(?:#+|\*+)/,
        notextile: "notextile",
        para: "p",
        pre: "pre",
        table: "table",
        tableCellAttributes: /[\/\\]\d+/,
        tableHeading: /\|_\./,
        tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
        text: /[^!"_=\*\[\(<\?\+~\^%@-]+/
    },
    attributes: {
        align: /(?:<>|<|>|=)/,
        selector: /\([^\(][^\)]+\)/,
        lang: /\[[^\[\]]+\]/,
        pad: /(?:\(+|\)+){1,2}/,
        css: /\{[^\}]+\}/
    },
    createRe: function(name) {
        switch(name){
            case "drawTable":
                return REs.makeRe("^", REs.single.drawTable, "$");
            case "html":
                return REs.makeRe("^", REs.single.html, "(?:", REs.single.html, ")*", "$");
            case "linkDefinition":
                return REs.makeRe("^", REs.single.linkDefinition, "$");
            case "listLayout":
                return REs.makeRe("^", REs.single.list, RE("allAttributes"), "*\\s+");
            case "tableCellAttributes":
                return REs.makeRe("^", REs.choiceRe(REs.single.tableCellAttributes, RE("allAttributes")), "+\\.");
            case "type":
                return REs.makeRe("^", RE("allTypes"));
            case "typeLayout":
                return REs.makeRe("^", RE("allTypes"), RE("allAttributes"), "*\\.\\.?", "(\\s+|$)");
            case "attributes":
                return REs.makeRe("^", RE("allAttributes"), "+");
            case "allTypes":
                return REs.choiceRe(REs.single.div, REs.single.foot, REs.single.header, REs.single.bc, REs.single.bq, REs.single.notextile, REs.single.pre, REs.single.table, REs.single.para);
            case "allAttributes":
                return REs.choiceRe(REs.attributes.selector, REs.attributes.css, REs.attributes.lang, REs.attributes.align, REs.attributes.pad);
            default:
                return REs.makeRe("^", REs.single[name]);
        }
    },
    makeRe: function() {
        var pattern = "";
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            pattern += typeof arg === "string" ? arg : arg.source;
        }
        return new RegExp(pattern);
    },
    choiceRe: function() {
        var parts = [
            arguments[0]
        ];
        for(var i = 1; i < arguments.length; ++i){
            parts[i * 2 - 1] = "|";
            parts[i * 2] = arguments[i];
        }
        parts.unshift("(?:");
        parts.push(")");
        return REs.makeRe.apply(null, parts);
    }
};
function RE(name) {
    return REs.cache[name] || (REs.cache[name] = REs.createRe(name));
}
var Modes = {
    newLayout: function(stream, state) {
        if (stream.match(RE("typeLayout"), false)) {
            state.spanningLayout = false;
            return (state.mode = Modes.blockType)(stream, state);
        }
        var newMode;
        if (!textileDisabled(state)) {
            if (stream.match(RE("listLayout"), false)) newMode = Modes.list;
            else if (stream.match(RE("drawTable"), false)) newMode = Modes.table;
            else if (stream.match(RE("linkDefinition"), false)) newMode = Modes.linkDefinition;
            else if (stream.match(RE("definitionList"))) newMode = Modes.definitionList;
            else if (stream.match(RE("html"), false)) newMode = Modes.html;
        }
        return (state.mode = newMode || Modes.text)(stream, state);
    },
    blockType: function(stream, state) {
        var match, type;
        state.layoutType = null;
        if (match = stream.match(RE("type"))) type = match[0];
        else return (state.mode = Modes.text)(stream, state);
        if (match = type.match(RE("header"))) {
            state.layoutType = "header";
            state.header = parseInt(match[0][1]);
        } else if (type.match(RE("bq"))) state.layoutType = "quote";
        else if (type.match(RE("bc"))) state.layoutType = "code";
        else if (type.match(RE("foot"))) state.layoutType = "footnote";
        else if (type.match(RE("notextile"))) state.layoutType = "notextile";
        else if (type.match(RE("pre"))) state.layoutType = "pre";
        else if (type.match(RE("div"))) state.layoutType = "div";
        else if (type.match(RE("table"))) state.layoutType = "table";
        state.mode = Modes.attributes;
        return tokenStyles(state);
    },
    text: function(stream, state) {
        if (stream.match(RE("text"))) return tokenStyles(state);
        var ch = stream.next();
        if (ch === '"') return (state.mode = Modes.link)(stream, state);
        return handlePhraseModifier(stream, state, ch);
    },
    attributes: function(stream, state) {
        state.mode = Modes.layoutLength;
        if (stream.match(RE("attributes"))) return TOKEN_STYLES.attributes;
        else return tokenStyles(state);
    },
    layoutLength: function(stream, state) {
        if (stream.eat(".") && stream.eat(".")) state.spanningLayout = true;
        state.mode = Modes.text;
        return tokenStyles(state);
    },
    list: function(stream, state) {
        var match = stream.match(RE("list"));
        state.listDepth = match[0].length;
        var listMod = (state.listDepth - 1) % 3;
        if (!listMod) state.layoutType = "list1";
        else if (listMod === 1) state.layoutType = "list2";
        else state.layoutType = "list3";
        state.mode = Modes.attributes;
        return tokenStyles(state);
    },
    link: function(stream, state) {
        state.mode = Modes.text;
        if (stream.match(RE("link"))) {
            stream.match(/\S+/);
            return TOKEN_STYLES.link;
        }
        return tokenStyles(state);
    },
    linkDefinition: function(stream) {
        stream.skipToEnd();
        return TOKEN_STYLES.linkDefinition;
    },
    definitionList: function(stream, state) {
        stream.match(RE("definitionList"));
        state.layoutType = "definitionList";
        if (stream.match(/\s*$/)) state.spanningLayout = true;
        else state.mode = Modes.attributes;
        return tokenStyles(state);
    },
    html: function(stream) {
        stream.skipToEnd();
        return TOKEN_STYLES.html;
    },
    table: function(stream, state) {
        state.layoutType = "table";
        return (state.mode = Modes.tableCell)(stream, state);
    },
    tableCell: function(stream, state) {
        if (stream.match(RE("tableHeading"))) state.tableHeading = true;
        else stream.eat("|");
        state.mode = Modes.tableCellAttributes;
        return tokenStyles(state);
    },
    tableCellAttributes: function(stream, state) {
        state.mode = Modes.tableText;
        if (stream.match(RE("tableCellAttributes"))) return TOKEN_STYLES.attributes;
        else return tokenStyles(state);
    },
    tableText: function(stream, state) {
        if (stream.match(RE("tableText"))) return tokenStyles(state);
        if (stream.peek() === "|") {
            state.mode = Modes.tableCell;
            return tokenStyles(state);
        }
        return handlePhraseModifier(stream, state, stream.next());
    }
};
const textile = {
    name: "textile",
    startState: function() {
        return {
            mode: Modes.newLayout
        };
    },
    token: function(stream, state) {
        if (stream.sol()) startNewLine(stream, state);
        return state.mode(stream, state);
    },
    blankLine: blankLine
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gOr6O"], null, "parcelRequire9c72")

//# sourceMappingURL=textile.aa355958.js.map
