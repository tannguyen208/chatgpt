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
})({"3hIn8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "456c44b6af8efa45";
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

},{}],"vxSQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nginx", ()=>nginx);
function words(str) {
    var obj = {}, words = str.split(" ");
    for(var i = 0; i < words.length; ++i)obj[words[i]] = true;
    return obj;
}
var keywords = words(/* ngxDirectiveControl */ "break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23");
var keywords_block = words(/* ngxDirectiveBlock */ "http mail events server types location upstream charset_map limit_except if geo map");
var keywords_important = words(/* ngxDirectiveImportant */ "include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files");
var type;
function ret(style, tp) {
    type = tp;
    return style;
}
function tokenBase(stream, state) {
    stream.eatWhile(/[\w\$_]/);
    var cur = stream.current();
    if (keywords.propertyIsEnumerable(cur)) return "keyword";
    else if (keywords_block.propertyIsEnumerable(cur)) return "controlKeyword";
    else if (keywords_important.propertyIsEnumerable(cur)) return "controlKeyword";
    /**/ var ch = stream.next();
    if (ch == "@") {
        stream.eatWhile(/[\w\\\-]/);
        return ret("meta", stream.current());
    } else if (ch == "/" && stream.eat("*")) {
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
    } else if (ch == "<" && stream.eat("!")) {
        state.tokenize = tokenSGMLComment;
        return tokenSGMLComment(stream, state);
    } else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == '"' || ch == "'") {
        state.tokenize = tokenString(ch);
        return state.tokenize(stream, state);
    } else if (ch == "#") {
        stream.skipToEnd();
        return ret("comment", "comment");
    } else if (ch == "!") {
        stream.match(/^\s*\w*/);
        return ret("keyword", "important");
    } else if (/\d/.test(ch)) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
    } else if (/[,.+>*\/]/.test(ch)) return ret(null, "select-op");
    else if (/[;{}:\[\]]/.test(ch)) return ret(null, ch);
    else {
        stream.eatWhile(/[\w\\\-]/);
        return ret("variable", "variable");
    }
}
function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while((ch = stream.next()) != null){
        if (maybeEnd && ch == "/") {
            state.tokenize = tokenBase;
            break;
        }
        maybeEnd = ch == "*";
    }
    return ret("comment", "comment");
}
function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while((ch = stream.next()) != null){
        if (dashes >= 2 && ch == ">") {
            state.tokenize = tokenBase;
            break;
        }
        dashes = ch == "-" ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
}
function tokenString(quote) {
    return function(stream, state) {
        var escaped = false, ch;
        while((ch = stream.next()) != null){
            if (ch == quote && !escaped) break;
            escaped = !escaped && ch == "\\";
        }
        if (!escaped) state.tokenize = tokenBase;
        return ret("string", "string");
    };
}
const nginx = {
    name: "nginx",
    startState: function() {
        return {
            tokenize: tokenBase,
            baseIndent: 0,
            stack: []
        };
    },
    token: function(stream, state) {
        if (stream.eatSpace()) return null;
        type = null;
        var style = state.tokenize(stream, state);
        var context = state.stack[state.stack.length - 1];
        if (type == "hash" && context == "rule") style = "atom";
        else if (style == "variable") {
            if (context == "rule") style = "number";
            else if (!context || context == "@media{") style = "tag";
        }
        if (context == "rule" && /^[\{\};]$/.test(type)) state.stack.pop();
        if (type == "{") {
            if (context == "@media") state.stack[state.stack.length - 1] = "@media{";
            else state.stack.push("{");
        } else if (type == "}") state.stack.pop();
        else if (type == "@media") state.stack.push("@media");
        else if (context == "{" && type != "comment") state.stack.push("rule");
        return style;
    },
    indent: function(state, textAfter, cx) {
        var n = state.stack.length;
        if (/^\}/.test(textAfter)) n -= state.stack[state.stack.length - 1] == "rule" ? 2 : 1;
        return state.baseIndent + n * cx.unit;
    },
    languageData: {
        indentOnInput: /^\s*\}$/
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3hIn8"], null, "parcelRequire9c72")

//# sourceMappingURL=nginx.af8efa45.js.map
