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
})({"eqZRp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "99adc95db8eeba9a";
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

},{}],"9IZWP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "idl", ()=>idl);
function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
}
var builtinArray = [
    "a_correlate",
    "abs",
    "acos",
    "adapt_hist_equal",
    "alog",
    "alog2",
    "alog10",
    "amoeba",
    "annotate",
    "app_user_dir",
    "app_user_dir_query",
    "arg_present",
    "array_equal",
    "array_indices",
    "arrow",
    "ascii_template",
    "asin",
    "assoc",
    "atan",
    "axis",
    "axis",
    "bandpass_filter",
    "bandreject_filter",
    "barplot",
    "bar_plot",
    "beseli",
    "beselj",
    "beselk",
    "besely",
    "beta",
    "biginteger",
    "bilinear",
    "bin_date",
    "binary_template",
    "bindgen",
    "binomial",
    "bit_ffs",
    "bit_population",
    "blas_axpy",
    "blk_con",
    "boolarr",
    "boolean",
    "boxplot",
    "box_cursor",
    "breakpoint",
    "broyden",
    "bubbleplot",
    "butterworth",
    "bytarr",
    "byte",
    "byteorder",
    "bytscl",
    "c_correlate",
    "calendar",
    "caldat",
    "call_external",
    "call_function",
    "call_method",
    "call_procedure",
    "canny",
    "catch",
    "cd",
    "cdf",
    "ceil",
    "chebyshev",
    "check_math",
    "chisqr_cvf",
    "chisqr_pdf",
    "choldc",
    "cholsol",
    "cindgen",
    "cir_3pnt",
    "clipboard",
    "close",
    "clust_wts",
    "cluster",
    "cluster_tree",
    "cmyk_convert",
    "code_coverage",
    "color_convert",
    "color_exchange",
    "color_quan",
    "color_range_map",
    "colorbar",
    "colorize_sample",
    "colormap_applicable",
    "colormap_gradient",
    "colormap_rotation",
    "colortable",
    "comfit",
    "command_line_args",
    "common",
    "compile_opt",
    "complex",
    "complexarr",
    "complexround",
    "compute_mesh_normals",
    "cond",
    "congrid",
    "conj",
    "constrained_min",
    "contour",
    "contour",
    "convert_coord",
    "convol",
    "convol_fft",
    "coord2to3",
    "copy_lun",
    "correlate",
    "cos",
    "cosh",
    "cpu",
    "cramer",
    "createboxplotdata",
    "create_cursor",
    "create_struct",
    "create_view",
    "crossp",
    "crvlength",
    "ct_luminance",
    "cti_test",
    "cursor",
    "curvefit",
    "cv_coord",
    "cvttobm",
    "cw_animate",
    "cw_animate_getp",
    "cw_animate_load",
    "cw_animate_run",
    "cw_arcball",
    "cw_bgroup",
    "cw_clr_index",
    "cw_colorsel",
    "cw_defroi",
    "cw_field",
    "cw_filesel",
    "cw_form",
    "cw_fslider",
    "cw_light_editor",
    "cw_light_editor_get",
    "cw_light_editor_set",
    "cw_orient",
    "cw_palette_editor",
    "cw_palette_editor_get",
    "cw_palette_editor_set",
    "cw_pdmenu",
    "cw_rgbslider",
    "cw_tmpl",
    "cw_zoom",
    "db_exists",
    "dblarr",
    "dcindgen",
    "dcomplex",
    "dcomplexarr",
    "define_key",
    "define_msgblk",
    "define_msgblk_from_file",
    "defroi",
    "defsysv",
    "delvar",
    "dendro_plot",
    "dendrogram",
    "deriv",
    "derivsig",
    "determ",
    "device",
    "dfpmin",
    "diag_matrix",
    "dialog_dbconnect",
    "dialog_message",
    "dialog_pickfile",
    "dialog_printersetup",
    "dialog_printjob",
    "dialog_read_image",
    "dialog_write_image",
    "dictionary",
    "digital_filter",
    "dilate",
    "dindgen",
    "dissolve",
    "dist",
    "distance_measure",
    "dlm_load",
    "dlm_register",
    "doc_library",
    "double",
    "draw_roi",
    "edge_dog",
    "efont",
    "eigenql",
    "eigenvec",
    "ellipse",
    "elmhes",
    "emboss",
    "empty",
    "enable_sysrtn",
    "eof",
    "eos",
    "erase",
    "erf",
    "erfc",
    "erfcx",
    "erode",
    "errorplot",
    "errplot",
    "estimator_filter",
    "execute",
    "exit",
    "exp",
    "expand",
    "expand_path",
    "expint",
    "extract",
    "extract_slice",
    "f_cvf",
    "f_pdf",
    "factorial",
    "fft",
    "file_basename",
    "file_chmod",
    "file_copy",
    "file_delete",
    "file_dirname",
    "file_expand_path",
    "file_gunzip",
    "file_gzip",
    "file_info",
    "file_lines",
    "file_link",
    "file_mkdir",
    "file_move",
    "file_poll_input",
    "file_readlink",
    "file_same",
    "file_search",
    "file_tar",
    "file_test",
    "file_untar",
    "file_unzip",
    "file_which",
    "file_zip",
    "filepath",
    "findgen",
    "finite",
    "fix",
    "flick",
    "float",
    "floor",
    "flow3",
    "fltarr",
    "flush",
    "format_axis_values",
    "forward_function",
    "free_lun",
    "fstat",
    "fulstr",
    "funct",
    "function",
    "fv_test",
    "fx_root",
    "fz_roots",
    "gamma",
    "gamma_ct",
    "gauss_cvf",
    "gauss_pdf",
    "gauss_smooth",
    "gauss2dfit",
    "gaussfit",
    "gaussian_function",
    "gaussint",
    "get_drive_list",
    "get_dxf_objects",
    "get_kbrd",
    "get_login_info",
    "get_lun",
    "get_screen_size",
    "getenv",
    "getwindows",
    "greg2jul",
    "grib",
    "grid_input",
    "grid_tps",
    "grid3",
    "griddata",
    "gs_iter",
    "h_eq_ct",
    "h_eq_int",
    "hanning",
    "hash",
    "hdf",
    "hdf5",
    "heap_free",
    "heap_gc",
    "heap_nosave",
    "heap_refcount",
    "heap_save",
    "help",
    "hilbert",
    "hist_2d",
    "hist_equal",
    "histogram",
    "hls",
    "hough",
    "hqr",
    "hsv",
    "i18n_multibytetoutf8",
    "i18n_multibytetowidechar",
    "i18n_utf8tomultibyte",
    "i18n_widechartomultibyte",
    "ibeta",
    "icontour",
    "iconvertcoord",
    "idelete",
    "identity",
    "idl_base64",
    "idl_container",
    "idl_validname",
    "idlexbr_assistant",
    "idlitsys_createtool",
    "idlunit",
    "iellipse",
    "igamma",
    "igetcurrent",
    "igetdata",
    "igetid",
    "igetproperty",
    "iimage",
    "image",
    "image_cont",
    "image_statistics",
    "image_threshold",
    "imaginary",
    "imap",
    "indgen",
    "int_2d",
    "int_3d",
    "int_tabulated",
    "intarr",
    "interpol",
    "interpolate",
    "interval_volume",
    "invert",
    "ioctl",
    "iopen",
    "ir_filter",
    "iplot",
    "ipolygon",
    "ipolyline",
    "iputdata",
    "iregister",
    "ireset",
    "iresolve",
    "irotate",
    "isa",
    "isave",
    "iscale",
    "isetcurrent",
    "isetproperty",
    "ishft",
    "isocontour",
    "isosurface",
    "isurface",
    "itext",
    "itranslate",
    "ivector",
    "ivolume",
    "izoom",
    "journal",
    "json_parse",
    "json_serialize",
    "jul2greg",
    "julday",
    "keyword_set",
    "krig2d",
    "kurtosis",
    "kw_test",
    "l64indgen",
    "la_choldc",
    "la_cholmprove",
    "la_cholsol",
    "la_determ",
    "la_eigenproblem",
    "la_eigenql",
    "la_eigenvec",
    "la_elmhes",
    "la_gm_linear_model",
    "la_hqr",
    "la_invert",
    "la_least_square_equality",
    "la_least_squares",
    "la_linear_equation",
    "la_ludc",
    "la_lumprove",
    "la_lusol",
    "la_svd",
    "la_tridc",
    "la_trimprove",
    "la_triql",
    "la_trired",
    "la_trisol",
    "label_date",
    "label_region",
    "ladfit",
    "laguerre",
    "lambda",
    "lambdap",
    "lambertw",
    "laplacian",
    "least_squares_filter",
    "leefilt",
    "legend",
    "legendre",
    "linbcg",
    "lindgen",
    "linfit",
    "linkimage",
    "list",
    "ll_arc_distance",
    "lmfit",
    "lmgr",
    "lngamma",
    "lnp_test",
    "loadct",
    "locale_get",
    "logical_and",
    "logical_or",
    "logical_true",
    "lon64arr",
    "lonarr",
    "long",
    "long64",
    "lsode",
    "lu_complex",
    "ludc",
    "lumprove",
    "lusol",
    "m_correlate",
    "machar",
    "make_array",
    "make_dll",
    "make_rt",
    "map",
    "mapcontinents",
    "mapgrid",
    "map_2points",
    "map_continents",
    "map_grid",
    "map_image",
    "map_patch",
    "map_proj_forward",
    "map_proj_image",
    "map_proj_info",
    "map_proj_init",
    "map_proj_inverse",
    "map_set",
    "matrix_multiply",
    "matrix_power",
    "max",
    "md_test",
    "mean",
    "meanabsdev",
    "mean_filter",
    "median",
    "memory",
    "mesh_clip",
    "mesh_decimate",
    "mesh_issolid",
    "mesh_merge",
    "mesh_numtriangles",
    "mesh_obj",
    "mesh_smooth",
    "mesh_surfacearea",
    "mesh_validate",
    "mesh_volume",
    "message",
    "min",
    "min_curve_surf",
    "mk_html_help",
    "modifyct",
    "moment",
    "morph_close",
    "morph_distance",
    "morph_gradient",
    "morph_hitormiss",
    "morph_open",
    "morph_thin",
    "morph_tophat",
    "multi",
    "n_elements",
    "n_params",
    "n_tags",
    "ncdf",
    "newton",
    "noise_hurl",
    "noise_pick",
    "noise_scatter",
    "noise_slur",
    "norm",
    "obj_class",
    "obj_destroy",
    "obj_hasmethod",
    "obj_isa",
    "obj_new",
    "obj_valid",
    "objarr",
    "on_error",
    "on_ioerror",
    "online_help",
    "openr",
    "openu",
    "openw",
    "oplot",
    "oploterr",
    "orderedhash",
    "p_correlate",
    "parse_url",
    "particle_trace",
    "path_cache",
    "path_sep",
    "pcomp",
    "plot",
    "plot3d",
    "plot",
    "plot_3dbox",
    "plot_field",
    "ploterr",
    "plots",
    "polar_contour",
    "polar_surface",
    "polyfill",
    "polyshade",
    "pnt_line",
    "point_lun",
    "polarplot",
    "poly",
    "poly_2d",
    "poly_area",
    "poly_fit",
    "polyfillv",
    "polygon",
    "polyline",
    "polywarp",
    "popd",
    "powell",
    "pref_commit",
    "pref_get",
    "pref_set",
    "prewitt",
    "primes",
    "print",
    "printf",
    "printd",
    "pro",
    "product",
    "profile",
    "profiler",
    "profiles",
    "project_vol",
    "ps_show_fonts",
    "psafm",
    "pseudo",
    "ptr_free",
    "ptr_new",
    "ptr_valid",
    "ptrarr",
    "pushd",
    "qgrid3",
    "qhull",
    "qromb",
    "qromo",
    "qsimp",
    "query_*",
    "query_ascii",
    "query_bmp",
    "query_csv",
    "query_dicom",
    "query_gif",
    "query_image",
    "query_jpeg",
    "query_jpeg2000",
    "query_mrsid",
    "query_pict",
    "query_png",
    "query_ppm",
    "query_srf",
    "query_tiff",
    "query_video",
    "query_wav",
    "r_correlate",
    "r_test",
    "radon",
    "randomn",
    "randomu",
    "ranks",
    "rdpix",
    "read",
    "readf",
    "read_ascii",
    "read_binary",
    "read_bmp",
    "read_csv",
    "read_dicom",
    "read_gif",
    "read_image",
    "read_interfile",
    "read_jpeg",
    "read_jpeg2000",
    "read_mrsid",
    "read_pict",
    "read_png",
    "read_ppm",
    "read_spr",
    "read_srf",
    "read_sylk",
    "read_tiff",
    "read_video",
    "read_wav",
    "read_wave",
    "read_x11_bitmap",
    "read_xwd",
    "reads",
    "readu",
    "real_part",
    "rebin",
    "recall_commands",
    "recon3",
    "reduce_colors",
    "reform",
    "region_grow",
    "register_cursor",
    "regress",
    "replicate",
    "replicate_inplace",
    "resolve_all",
    "resolve_routine",
    "restore",
    "retall",
    "return",
    "reverse",
    "rk4",
    "roberts",
    "rot",
    "rotate",
    "round",
    "routine_filepath",
    "routine_info",
    "rs_test",
    "s_test",
    "save",
    "savgol",
    "scale3",
    "scale3d",
    "scatterplot",
    "scatterplot3d",
    "scope_level",
    "scope_traceback",
    "scope_varfetch",
    "scope_varname",
    "search2d",
    "search3d",
    "sem_create",
    "sem_delete",
    "sem_lock",
    "sem_release",
    "set_plot",
    "set_shading",
    "setenv",
    "sfit",
    "shade_surf",
    "shade_surf_irr",
    "shade_volume",
    "shift",
    "shift_diff",
    "shmdebug",
    "shmmap",
    "shmunmap",
    "shmvar",
    "show3",
    "showfont",
    "signum",
    "simplex",
    "sin",
    "sindgen",
    "sinh",
    "size",
    "skewness",
    "skip_lun",
    "slicer3",
    "slide_image",
    "smooth",
    "sobel",
    "socket",
    "sort",
    "spawn",
    "sph_4pnt",
    "sph_scat",
    "spher_harm",
    "spl_init",
    "spl_interp",
    "spline",
    "spline_p",
    "sprsab",
    "sprsax",
    "sprsin",
    "sprstp",
    "sqrt",
    "standardize",
    "stddev",
    "stop",
    "strarr",
    "strcmp",
    "strcompress",
    "streamline",
    "streamline",
    "stregex",
    "stretch",
    "string",
    "strjoin",
    "strlen",
    "strlowcase",
    "strmatch",
    "strmessage",
    "strmid",
    "strpos",
    "strput",
    "strsplit",
    "strtrim",
    "struct_assign",
    "struct_hide",
    "strupcase",
    "surface",
    "surface",
    "surfr",
    "svdc",
    "svdfit",
    "svsol",
    "swap_endian",
    "swap_endian_inplace",
    "symbol",
    "systime",
    "t_cvf",
    "t_pdf",
    "t3d",
    "tag_names",
    "tan",
    "tanh",
    "tek_color",
    "temporary",
    "terminal_size",
    "tetra_clip",
    "tetra_surface",
    "tetra_volume",
    "text",
    "thin",
    "thread",
    "threed",
    "tic",
    "time_test2",
    "timegen",
    "timer",
    "timestamp",
    "timestamptovalues",
    "tm_test",
    "toc",
    "total",
    "trace",
    "transpose",
    "tri_surf",
    "triangulate",
    "trigrid",
    "triql",
    "trired",
    "trisol",
    "truncate_lun",
    "ts_coef",
    "ts_diff",
    "ts_fcast",
    "ts_smooth",
    "tv",
    "tvcrs",
    "tvlct",
    "tvrd",
    "tvscl",
    "typename",
    "uindgen",
    "uint",
    "uintarr",
    "ul64indgen",
    "ulindgen",
    "ulon64arr",
    "ulonarr",
    "ulong",
    "ulong64",
    "uniq",
    "unsharp_mask",
    "usersym",
    "value_locate",
    "variance",
    "vector",
    "vector_field",
    "vel",
    "velovect",
    "vert_t3d",
    "voigt",
    "volume",
    "voronoi",
    "voxel_proj",
    "wait",
    "warp_tri",
    "watershed",
    "wdelete",
    "wf_draw",
    "where",
    "widget_base",
    "widget_button",
    "widget_combobox",
    "widget_control",
    "widget_displaycontextmenu",
    "widget_draw",
    "widget_droplist",
    "widget_event",
    "widget_info",
    "widget_label",
    "widget_list",
    "widget_propertysheet",
    "widget_slider",
    "widget_tab",
    "widget_table",
    "widget_text",
    "widget_tree",
    "widget_tree_move",
    "widget_window",
    "wiener_filter",
    "window",
    "window",
    "write_bmp",
    "write_csv",
    "write_gif",
    "write_image",
    "write_jpeg",
    "write_jpeg2000",
    "write_nrif",
    "write_pict",
    "write_png",
    "write_ppm",
    "write_spr",
    "write_srf",
    "write_sylk",
    "write_tiff",
    "write_video",
    "write_wav",
    "write_wave",
    "writeu",
    "wset",
    "wshow",
    "wtn",
    "wv_applet",
    "wv_cwt",
    "wv_cw_wavelet",
    "wv_denoise",
    "wv_dwt",
    "wv_fn_coiflet",
    "wv_fn_daubechies",
    "wv_fn_gaussian",
    "wv_fn_haar",
    "wv_fn_morlet",
    "wv_fn_paul",
    "wv_fn_symlet",
    "wv_import_data",
    "wv_import_wavelet",
    "wv_plot3d_wps",
    "wv_plot_multires",
    "wv_pwt",
    "wv_tool_denoise",
    "xbm_edit",
    "xdisplayfile",
    "xdxf",
    "xfont",
    "xinteranimate",
    "xloadct",
    "xmanager",
    "xmng_tmpl",
    "xmtool",
    "xobjview",
    "xobjview_rotate",
    "xobjview_write_image",
    "xpalette",
    "xpcolor",
    "xplot3d",
    "xregistered",
    "xroi",
    "xsq_test",
    "xsurface",
    "xvaredit",
    "xvolume",
    "xvolume_rotate",
    "xvolume_write_image",
    "xyouts",
    "zlib_compress",
    "zlib_uncompress",
    "zoom",
    "zoom_24"
];
var builtins = wordRegexp(builtinArray);
var keywordArray = [
    "begin",
    "end",
    "endcase",
    "endfor",
    "endwhile",
    "endif",
    "endrep",
    "endforeach",
    "break",
    "case",
    "continue",
    "for",
    "foreach",
    "goto",
    "if",
    "then",
    "else",
    "repeat",
    "until",
    "switch",
    "while",
    "do",
    "pro",
    "function"
];
var keywords = wordRegexp(keywordArray);
var identifiers = new RegExp("^[_a-z\xa1-￿][_a-z0-9\xa1-￿]*", "i");
var singleOperators = /[+\-*&=<>\/@#~$]/;
var boolOperators = new RegExp("(and|or|eq|lt|le|gt|ge|ne|not)", "i");
function tokenBase(stream) {
    // whitespaces
    if (stream.eatSpace()) return null;
    // Handle one line Comments
    if (stream.match(";")) {
        stream.skipToEnd();
        return "comment";
    }
    // Handle Number Literals
    if (stream.match(/^[0-9\.+-]/, false)) {
        if (stream.match(/^[+-]?0x[0-9a-fA-F]+/)) return "number";
        if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)) return "number";
        if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) return "number";
    }
    // Handle Strings
    if (stream.match(/^"([^"]|(""))*"/)) return "string";
    if (stream.match(/^'([^']|(''))*'/)) return "string";
    // Handle words
    if (stream.match(keywords)) return "keyword";
    if (stream.match(builtins)) return "builtin";
    if (stream.match(identifiers)) return "variable";
    if (stream.match(singleOperators) || stream.match(boolOperators)) return "operator";
    // Handle non-detected items
    stream.next();
    return null;
}
const idl = {
    name: "idl",
    token: function(stream) {
        return tokenBase(stream);
    },
    languageData: {
        autocomplete: builtinArray.concat(keywordArray)
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eqZRp"], null, "parcelRequire9c72")

//# sourceMappingURL=idl.b8eeba9a.js.map
