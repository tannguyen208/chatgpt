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
})({"ixp4o":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a95951fa9bcc36da";
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

},{}],"d8g6v":[function(require,module,exports) {
// developer.mozilla.org/en-US/docs/Web/HTML/Element
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stylus", ()=>stylus);
var tagKeywords_ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "bgsound",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video"
];
// github.com/codemirror/CodeMirror/blob/master/mode/css/css.js
// Note, "url-prefix" should precede "url" in order to match correctly in documentTypesRegexp
var documentTypes_ = [
    "domain",
    "regexp",
    "url-prefix",
    "url"
];
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
];
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
    "dynamic-range",
    "video-dynamic-range"
];
var propertyKeywords_ = [
    "align-content",
    "align-items",
    "align-self",
    "alignment-adjust",
    "alignment-baseline",
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
    "backface-visibility",
    "background",
    "background-attachment",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "binding",
    "bleed",
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
    "font-feature-settings",
    "font-family",
    "font-kerning",
    "font-language-override",
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
    "font-weight",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-position",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-row",
    "grid-row-end",
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
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
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
    "marker-offset",
    "marks",
    "marquee-direction",
    "marquee-loop",
    "marquee-play-count",
    "marquee-speed",
    "marquee-style",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "move-to",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "object-fit",
    "object-position",
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
    "rotation",
    "rotation-point",
    "ruby-align",
    "ruby-overhang",
    "ruby-position",
    "ruby-span",
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
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-height",
    "text-indent",
    "text-justify",
    "text-outline",
    "text-overflow",
    "text-shadow",
    "text-size-adjust",
    "text-space-collapse",
    "text-transform",
    "text-underline-position",
    "text-wrap",
    "top",
    "transform",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
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
    "z-index",
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
    "writing-mode",
    "font-smoothing",
    "osx-font-smoothing"
];
var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color",
    "scrollbar-base-color",
    "scrollbar-dark-shadow-color",
    "scrollbar-face-color",
    "scrollbar-highlight-color",
    "scrollbar-shadow-color",
    "scrollbar-3d-light-color",
    "scrollbar-track-color",
    "shape-inside",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "zoom"
];
var fontProperties_ = [
    "font-family",
    "src",
    "unicode-range",
    "font-variant",
    "font-feature-settings",
    "font-stretch",
    "font-weight",
    "font-style"
];
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
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
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
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
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
];
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
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
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
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
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
    "column",
    "compact",
    "condensed",
    "conic-gradient",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "currentcolor",
    "cursive",
    "cyclic",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "devanagari",
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
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fixed",
    "flat",
    "flex",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "georgian",
    "graytext",
    "groove",
    "gujarati",
    "gurmukhi",
    "hand",
    "hangul",
    "hangul-consonant",
    "hebrew",
    "help",
    "hidden",
    "hide",
    "high",
    "higher",
    "highlight",
    "highlighttext",
    "hiragana",
    "hiragana-iroha",
    "horizontal",
    "hsl",
    "hsla",
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
    "malayalam",
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
    "row-resize",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "searchfield",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "semi-condensed",
    "semi-expanded",
    "separate",
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
    "solid",
    "somali",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "spell-out",
    "square",
    "square-button",
    "standard",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "sub",
    "subpixel-antialiased",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
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
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
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
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small",
    "bicubic",
    "optimizespeed",
    "grayscale",
    "row",
    "row-reverse",
    "wrap",
    "wrap-reverse",
    "column-reverse",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "unset"
];
var wordOperatorKeywords_ = [
    "in",
    "and",
    "or",
    "not",
    "is not",
    "is a",
    "is",
    "isnt",
    "defined",
    "if unless"
], blockKeywords_ = [
    "for",
    "if",
    "else",
    "unless",
    "from",
    "to"
], commonAtoms_ = [
    "null",
    "true",
    "false",
    "href",
    "title",
    "type",
    "not-allowed",
    "readonly",
    "disabled"
], commonDef_ = [
    "@font-face",
    "@keyframes",
    "@media",
    "@viewport",
    "@page",
    "@host",
    "@supports",
    "@block",
    "@css"
];
var hintWords = tagKeywords_.concat(documentTypes_, mediaTypes_, mediaFeatures_, propertyKeywords_, nonStandardPropertyKeywords_, colorKeywords_, valueKeywords_, fontProperties_, wordOperatorKeywords_, blockKeywords_, commonAtoms_, commonDef_);
function wordRegexp(words) {
    words = words.sort(function(a, b) {
        return b > a;
    });
    return new RegExp("^((" + words.join(")|(") + "))\\b");
}
function keySet(array) {
    var keys = {};
    for(var i = 0; i < array.length; ++i)keys[array[i]] = true;
    return keys;
}
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var tagKeywords = keySet(tagKeywords_), tagVariablesRegexp = /^(a|b|i|s|col|em)$/i, propertyKeywords = keySet(propertyKeywords_), nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_), valueKeywords = keySet(valueKeywords_), colorKeywords = keySet(colorKeywords_), documentTypes = keySet(documentTypes_), documentTypesRegexp = wordRegexp(documentTypes_), mediaFeatures = keySet(mediaFeatures_), mediaTypes = keySet(mediaTypes_), fontProperties = keySet(fontProperties_), operatorsRegexp = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/, wordOperatorKeywordsRegexp = wordRegexp(wordOperatorKeywords_), blockKeywords = keySet(blockKeywords_), vendorPrefixesRegexp = new RegExp(/^\-(moz|ms|o|webkit)-/i), commonAtoms = keySet(commonAtoms_), firstWordMatch = "", states = {}, ch, style, type, override;
/**
 * Tokenizers
 */ function tokenBase(stream, state) {
    firstWordMatch = stream.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/);
    state.context.line.firstWord = firstWordMatch ? firstWordMatch[0].replace(/^\s*/, "") : "";
    state.context.line.indent = stream.indentation();
    ch = stream.peek();
    // Line comment
    if (stream.match("//")) {
        stream.skipToEnd();
        return [
            "comment",
            "comment"
        ];
    }
    // Block comment
    if (stream.match("/*")) {
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
    }
    // String
    if (ch == '"' || ch == "'") {
        stream.next();
        state.tokenize = tokenString(ch);
        return state.tokenize(stream, state);
    }
    // Def
    if (ch == "@") {
        stream.next();
        stream.eatWhile(/[\w\\-]/);
        return [
            "def",
            stream.current()
        ];
    }
    // ID selector or Hex color
    if (ch == "#") {
        stream.next();
        // Hex color
        if (stream.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)) return [
            "atom",
            "atom"
        ];
        // ID selector
        if (stream.match(/^[a-z][\w-]*/i)) return [
            "builtin",
            "hash"
        ];
    }
    // Vendor prefixes
    if (stream.match(vendorPrefixesRegexp)) return [
        "meta",
        "vendor-prefixes"
    ];
    // Numbers
    if (stream.match(/^-?[0-9]?\.?[0-9]/)) {
        stream.eatWhile(/[a-z%]/i);
        return [
            "number",
            "unit"
        ];
    }
    // !important|optional
    if (ch == "!") {
        stream.next();
        return [
            stream.match(/^(important|optional)/i) ? "keyword" : "operator",
            "important"
        ];
    }
    // Class
    if (ch == "." && stream.match(/^\.[a-z][\w-]*/i)) return [
        "qualifier",
        "qualifier"
    ];
    // url url-prefix domain regexp
    if (stream.match(documentTypesRegexp)) {
        if (stream.peek() == "(") state.tokenize = tokenParenthesized;
        return [
            "property",
            "word"
        ];
    }
    // Mixins / Functions
    if (stream.match(/^[a-z][\w-]*\(/i)) {
        stream.backUp(1);
        return [
            "keyword",
            "mixin"
        ];
    }
    // Block mixins
    if (stream.match(/^(\+|-)[a-z][\w-]*\(/i)) {
        stream.backUp(1);
        return [
            "keyword",
            "block-mixin"
        ];
    }
    // Parent Reference BEM naming
    if (stream.string.match(/^\s*&/) && stream.match(/^[-_]+[a-z][\w-]*/)) return [
        "qualifier",
        "qualifier"
    ];
    // / Root Reference & Parent Reference
    if (stream.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)) {
        stream.backUp(1);
        return [
            "variableName.special",
            "reference"
        ];
    }
    if (stream.match(/^&{1}\s*$/)) return [
        "variableName.special",
        "reference"
    ];
    // Word operator
    if (stream.match(wordOperatorKeywordsRegexp)) return [
        "operator",
        "operator"
    ];
    // Word
    if (stream.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)) {
        // Variable
        if (stream.match(/^(\.|\[)[\w-\'\"\]]+/i, false)) {
            if (!wordIsTag(stream.current())) {
                stream.match(".");
                return [
                    "variable",
                    "variable-name"
                ];
            }
        }
        return [
            "variable",
            "word"
        ];
    }
    // Operators
    if (stream.match(operatorsRegexp)) return [
        "operator",
        stream.current()
    ];
    // Delimiters
    if (/[:;,{}\[\]\(\)]/.test(ch)) {
        stream.next();
        return [
            null,
            ch
        ];
    }
    // Non-detected items
    stream.next();
    return [
        null,
        null
    ];
}
/**
 * Token comment
 */ function tokenCComment(stream, state) {
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
/**
 * Token string
 */ function tokenString(quote) {
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
        return [
            "string",
            "string"
        ];
    };
}
/**
 * Token parenthesized
 */ function tokenParenthesized(stream, state) {
    stream.next(); // Must be "("
    if (!stream.match(/\s*[\"\')]/, false)) state.tokenize = tokenString(")");
    else state.tokenize = null;
    return [
        null,
        "("
    ];
}
/**
 * Context management
 */ function Context(type, indent, prev, line) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
    this.line = line || {
        firstWord: "",
        indent: 0
    };
}
function pushContext(state, stream, type, indent) {
    indent = indent >= 0 ? indent : stream.indentUnit;
    state.context = new Context(type, stream.indentation() + indent, state.context);
    return type;
}
function popContext(state, stream, currentIndent) {
    var contextIndent = state.context.indent - stream.indentUnit;
    currentIndent = currentIndent || false;
    state.context = state.context.prev;
    if (currentIndent) state.context.indent = contextIndent;
    return state.context.type;
}
function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
}
function popAndPass(type, stream, state, n) {
    for(var i = n || 1; i > 0; i--)state.context = state.context.prev;
    return pass(type, stream, state);
}
/**
 * Parser
 */ function wordIsTag(word) {
    return word.toLowerCase() in tagKeywords;
}
function wordIsProperty(word) {
    word = word.toLowerCase();
    return word in propertyKeywords || word in fontProperties;
}
function wordIsBlock(word) {
    return word.toLowerCase() in blockKeywords;
}
function wordIsVendorPrefix(word) {
    return word.toLowerCase().match(vendorPrefixesRegexp);
}
function wordAsValue(word) {
    var wordLC = word.toLowerCase();
    var override = "variable";
    if (wordIsTag(word)) override = "tag";
    else if (wordIsBlock(word)) override = "block-keyword";
    else if (wordIsProperty(word)) override = "property";
    else if (wordLC in valueKeywords || wordLC in commonAtoms) override = "atom";
    else if (wordLC == "return" || wordLC in colorKeywords) override = "keyword";
    else if (word.match(/^[A-Z]/)) override = "string";
    return override;
}
function typeIsBlock(type, stream) {
    return endOfLine(stream) && (type == "{" || type == "]" || type == "hash" || type == "qualifier") || type == "block-mixin";
}
function typeIsInterpolation(type, stream) {
    return type == "{" && stream.match(/^\s*\$?[\w-]+/i, false);
}
function typeIsPseudo(type, stream) {
    return type == ":" && stream.match(/^[a-z-]+/, false);
}
function startOfLine(stream) {
    return stream.sol() || stream.string.match(new RegExp("^\\s*" + escapeRegExp(stream.current())));
}
function endOfLine(stream) {
    return stream.eol() || stream.match(/^\s*$/, false);
}
function firstWordOfLine(line) {
    var re = /^\s*[-_]*[a-z0-9]+[\w-]*/i;
    var result = typeof line == "string" ? line.match(re) : line.string.match(re);
    return result ? result[0].replace(/^\s*/, "") : "";
}
/**
 * Block
 */ states.block = function(type, stream, state) {
    if (type == "comment" && startOfLine(stream) || type == "," && endOfLine(stream) || type == "mixin") return pushContext(state, stream, "block", 0);
    if (typeIsInterpolation(type, stream)) return pushContext(state, stream, "interpolation");
    if (endOfLine(stream) && type == "]") {
        if (!/^\s*(\.|#|:|\[|\*|&)/.test(stream.string) && !wordIsTag(firstWordOfLine(stream))) return pushContext(state, stream, "block", 0);
    }
    if (typeIsBlock(type, stream)) return pushContext(state, stream, "block");
    if (type == "}" && endOfLine(stream)) return pushContext(state, stream, "block", 0);
    if (type == "variable-name") {
        if (stream.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || wordIsBlock(firstWordOfLine(stream))) return pushContext(state, stream, "variableName");
        else return pushContext(state, stream, "variableName", 0);
    }
    if (type == "=") {
        if (!endOfLine(stream) && !wordIsBlock(firstWordOfLine(stream))) return pushContext(state, stream, "block", 0);
        return pushContext(state, stream, "block");
    }
    if (type == "*") {
        if (endOfLine(stream) || stream.match(/\s*(,|\.|#|\[|:|{)/, false)) {
            override = "tag";
            return pushContext(state, stream, "block");
        }
    }
    if (typeIsPseudo(type, stream)) return pushContext(state, stream, "pseudo");
    if (/@(font-face|media|supports|(-moz-)?document)/.test(type)) return pushContext(state, stream, endOfLine(stream) ? "block" : "atBlock");
    if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) return pushContext(state, stream, "keyframes");
    if (/@extends?/.test(type)) return pushContext(state, stream, "extend", 0);
    if (type && type.charAt(0) == "@") {
        // Property Lookup
        if (stream.indentation() > 0 && wordIsProperty(stream.current().slice(1))) {
            override = "variable";
            return "block";
        }
        if (/(@import|@require|@charset)/.test(type)) return pushContext(state, stream, "block", 0);
        return pushContext(state, stream, "block");
    }
    if (type == "reference" && endOfLine(stream)) return pushContext(state, stream, "block");
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "vendor-prefixes") return pushContext(state, stream, "vendorPrefixes");
    if (type == "word") {
        var word = stream.current();
        override = wordAsValue(word);
        if (override == "property") {
            if (startOfLine(stream)) return pushContext(state, stream, "block", 0);
            else {
                override = "atom";
                return "block";
            }
        }
        if (override == "tag") {
            // tag is a css value
            if (/embed|menu|pre|progress|sub|table/.test(word)) {
                if (wordIsProperty(firstWordOfLine(stream))) {
                    override = "atom";
                    return "block";
                }
            }
            // tag is an attribute
            if (stream.string.match(new RegExp("\\[\\s*" + word + "|" + word + "\\s*\\]"))) {
                override = "atom";
                return "block";
            }
            // tag is a variable
            if (tagVariablesRegexp.test(word)) {
                if (startOfLine(stream) && stream.string.match(/=/) || !startOfLine(stream) && !stream.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !wordIsTag(firstWordOfLine(stream))) {
                    override = "variable";
                    if (wordIsBlock(firstWordOfLine(stream))) return "block";
                    return pushContext(state, stream, "block", 0);
                }
            }
            if (endOfLine(stream)) return pushContext(state, stream, "block");
        }
        if (override == "block-keyword") {
            override = "keyword";
            // Postfix conditionals
            if (stream.current(/(if|unless)/) && !startOfLine(stream)) return "block";
            return pushContext(state, stream, "block");
        }
        if (word == "return") return pushContext(state, stream, "block", 0);
        // Placeholder selector
        if (override == "variable" && stream.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) return pushContext(state, stream, "block");
    }
    return state.context.type;
};
/**
 * Parens
 */ states.parens = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == ")") {
        if (state.context.prev.type == "parens") return popContext(state, stream);
        if (stream.string.match(/^[a-z][\w-]*\(/i) && endOfLine(stream) || wordIsBlock(firstWordOfLine(stream)) || /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(firstWordOfLine(stream)) || !stream.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && wordIsTag(firstWordOfLine(stream))) return pushContext(state, stream, "block");
        if (stream.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) || stream.string.match(/^\s*(\(|\)|[0-9])/) || stream.string.match(/^\s+[a-z][\w-]*\(/i) || stream.string.match(/^\s+[\$-]?[a-z]/i)) return pushContext(state, stream, "block", 0);
        if (endOfLine(stream)) return pushContext(state, stream, "block");
        else return pushContext(state, stream, "block", 0);
    }
    if (type && type.charAt(0) == "@" && wordIsProperty(stream.current().slice(1))) override = "variable";
    if (type == "word") {
        var word = stream.current();
        override = wordAsValue(word);
        if (override == "tag" && tagVariablesRegexp.test(word)) override = "variable";
        if (override == "property" || word == "to") override = "atom";
    }
    if (type == "variable-name") return pushContext(state, stream, "variableName");
    if (typeIsPseudo(type, stream)) return pushContext(state, stream, "pseudo");
    return state.context.type;
};
/**
 * Vendor prefixes
 */ states.vendorPrefixes = function(type, stream, state) {
    if (type == "word") {
        override = "property";
        return pushContext(state, stream, "block", 0);
    }
    return popContext(state, stream);
};
/**
 * Pseudo
 */ states.pseudo = function(type, stream, state) {
    if (!wordIsProperty(firstWordOfLine(stream.string))) {
        stream.match(/^[a-z-]+/);
        override = "variableName.special";
        if (endOfLine(stream)) return pushContext(state, stream, "block");
        return popContext(state, stream);
    }
    return popAndPass(type, stream, state);
};
/**
 * atBlock
 */ states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (typeIsBlock(type, stream)) return pushContext(state, stream, "block");
    if (typeIsInterpolation(type, stream)) return pushContext(state, stream, "interpolation");
    if (type == "word") {
        var word = stream.current().toLowerCase();
        if (/^(only|not|and|or)$/.test(word)) override = "keyword";
        else if (documentTypes.hasOwnProperty(word)) override = "tag";
        else if (mediaTypes.hasOwnProperty(word)) override = "attribute";
        else if (mediaFeatures.hasOwnProperty(word)) override = "property";
        else if (nonStandardPropertyKeywords.hasOwnProperty(word)) override = "string.special";
        else override = wordAsValue(stream.current());
        if (override == "tag" && endOfLine(stream)) return pushContext(state, stream, "block");
    }
    if (type == "operator" && /^(not|and|or)$/.test(stream.current())) override = "keyword";
    return state.context.type;
};
states.atBlock_parens = function(type, stream, state) {
    if (type == "{" || type == "}") return state.context.type;
    if (type == ")") {
        if (endOfLine(stream)) return pushContext(state, stream, "block");
        else return pushContext(state, stream, "atBlock");
    }
    if (type == "word") {
        var word = stream.current().toLowerCase();
        override = wordAsValue(word);
        if (/^(max|min)/.test(word)) override = "property";
        if (override == "tag") tagVariablesRegexp.test(word) ? override = "variable" : override = "atom";
        return state.context.type;
    }
    return states.atBlock(type, stream, state);
};
/**
 * Keyframes
 */ states.keyframes = function(type, stream, state) {
    if (stream.indentation() == "0" && (type == "}" && startOfLine(stream) || type == "]" || type == "hash" || type == "qualifier" || wordIsTag(stream.current()))) return popAndPass(type, stream, state);
    if (type == "{") return pushContext(state, stream, "keyframes");
    if (type == "}") {
        if (startOfLine(stream)) return popContext(state, stream, true);
        else return pushContext(state, stream, "keyframes");
    }
    if (type == "unit" && /^[0-9]+\%$/.test(stream.current())) return pushContext(state, stream, "keyframes");
    if (type == "word") {
        override = wordAsValue(stream.current());
        if (override == "block-keyword") {
            override = "keyword";
            return pushContext(state, stream, "keyframes");
        }
    }
    if (/@(font-face|media|supports|(-moz-)?document)/.test(type)) return pushContext(state, stream, endOfLine(stream) ? "block" : "atBlock");
    if (type == "mixin") return pushContext(state, stream, "block", 0);
    return state.context.type;
};
/**
 * Interpolation
 */ states.interpolation = function(type, stream, state) {
    if (type == "{") popContext(state, stream) && pushContext(state, stream, "block");
    if (type == "}") {
        if (stream.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) || stream.string.match(/^\s*[a-z]/i) && wordIsTag(firstWordOfLine(stream))) return pushContext(state, stream, "block");
        if (!stream.string.match(/^(\{|\s*\&)/) || stream.match(/\s*[\w-]/, false)) return pushContext(state, stream, "block", 0);
        return pushContext(state, stream, "block");
    }
    if (type == "variable-name") return pushContext(state, stream, "variableName", 0);
    if (type == "word") {
        override = wordAsValue(stream.current());
        if (override == "tag") override = "atom";
    }
    return state.context.type;
};
/**
 * Extend/s
 */ states.extend = function(type, stream, state) {
    if (type == "[" || type == "=") return "extend";
    if (type == "]") return popContext(state, stream);
    if (type == "word") {
        override = wordAsValue(stream.current());
        return "extend";
    }
    return popContext(state, stream);
};
/**
 * Variable name
 */ states.variableName = function(type, stream, state) {
    if (type == "string" || type == "[" || type == "]" || stream.current().match(/^(\.|\$)/)) {
        if (stream.current().match(/^\.[\w-]+/i)) override = "variable";
        return "variableName";
    }
    return popAndPass(type, stream, state);
};
const stylus = {
    name: "stylus",
    startState: function() {
        return {
            tokenize: null,
            state: "block",
            context: new Context("block", 0, null)
        };
    },
    token: function(stream, state) {
        if (!state.tokenize && stream.eatSpace()) return null;
        style = (state.tokenize || tokenBase)(stream, state);
        if (style && typeof style == "object") {
            type = style[1];
            style = style[0];
        }
        override = style;
        state.state = states[state.state](type, stream, state);
        return override;
    },
    indent: function(state, textAfter, iCx) {
        var cx = state.context, ch = textAfter && textAfter.charAt(0), indent = cx.indent, lineFirstWord = firstWordOfLine(textAfter), lineIndent = iCx.lineIndent(iCx.pos), prevLineFirstWord = state.context.prev ? state.context.prev.line.firstWord : "", prevLineIndent = state.context.prev ? state.context.prev.line.indent : lineIndent;
        if (cx.prev && (ch == "}" && (cx.type == "block" || cx.type == "atBlock" || cx.type == "keyframes") || ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") || ch == "{" && cx.type == "at")) indent = cx.indent - iCx.unit;
        else if (!/(\})/.test(ch)) {
            if (/@|\$|\d/.test(ch) || /^\{/.test(textAfter) || /^\s*\/(\/|\*)/.test(textAfter) || /^\s*\/\*/.test(prevLineFirstWord) || /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(textAfter) || /^(\+|-)?[a-z][\w-]*\(/i.test(textAfter) || /^return/.test(textAfter) || wordIsBlock(lineFirstWord)) indent = lineIndent;
            else if (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(ch) || wordIsTag(lineFirstWord)) {
                if (/\,\s*$/.test(prevLineFirstWord)) indent = prevLineIndent;
                else if (!state.sol() && (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(prevLineFirstWord) || wordIsTag(prevLineFirstWord))) indent = lineIndent <= prevLineIndent ? prevLineIndent : prevLineIndent + iCx.unit;
                else indent = lineIndent;
            } else if (!/,\s*$/.test(textAfter) && (wordIsVendorPrefix(lineFirstWord) || wordIsProperty(lineFirstWord))) {
                if (wordIsBlock(prevLineFirstWord)) indent = lineIndent <= prevLineIndent ? prevLineIndent : prevLineIndent + iCx.unit;
                else if (/^\{/.test(prevLineFirstWord)) indent = lineIndent <= prevLineIndent ? lineIndent : prevLineIndent + iCx.unit;
                else if (wordIsVendorPrefix(prevLineFirstWord) || wordIsProperty(prevLineFirstWord)) indent = lineIndent >= prevLineIndent ? prevLineIndent : lineIndent;
                else if (/^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(prevLineFirstWord) || /=\s*$/.test(prevLineFirstWord) || wordIsTag(prevLineFirstWord) || /^\$[\w-\.\[\]\'\"]/.test(prevLineFirstWord)) indent = prevLineIndent + iCx.unit;
                else indent = lineIndent;
            }
        }
        return indent;
    },
    languageData: {
        indentOnInput: /^\s*\}$/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        autocomplete: hintWords
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ixp4o"], null, "parcelRequire9c72")

//# sourceMappingURL=stylus.9bcc36da.js.map
