(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Agkg:function(s,t,e){s.exports=e("Q+PA")},"Q+PA":function(s,t,e){"use strict";e.r(t);var a=e("JFUb"),r=Object(a.a)({data:function(){return{url:"https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows",layers:"Hydrography:bores",parameters:{transparent:!0,format:"image/png"},alpha:1,brightness:1,contrast:1}},mounted:function(){this.$refs.wms.createPromise.then((function(s){var t=s.Cesium,e=s.viewer;s.cesiumObject;e.camera.setView({destination:t.Rectangle.fromDegrees(114.591,-45.837,148.97,-5.73)})}))},methods:{ready:function(s){s.Cesium,s.viewer;this.cesiumInstance=s}}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("WebMapServiceImageryProvider")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),e("h3",[s._v("Load an imagerylayer with WebMapServiceImageryProvider")]),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-layer-imagery",{ref:"wms",attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[e("vc-provider-imagery-wms",{attrs:{url:s.url,layers:s.layers,parameters:s.parameters}})],1)],1),s._v(" "),e("div",{staticClass:"demo-tool"},[e("span",[s._v("alpha")]),s._v(" "),e("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),e("span",[s._v("brightness")]),s._v(" "),e("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),e("span",[s._v("contrast")]),s._v(" "),e("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}})],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),s._m(3),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),e("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-provider-imagery-wms")]),this._v(" component is used to load tiled imagery hosted by a Web Map Service (WMS) server.")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"wms"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wms")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":layers")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layers"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":parameters")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"parameters"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wms")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows'")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layers")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hydrography:bores'")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("parameters")]),s._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("transparent")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'image/png'")]),s._v("\n        },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.wms.createPromise.then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(") =>")]),s._v(" {\n        viewer.camera.setView({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": Cesium.Rectangle.fromDegrees("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("114.591")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-45.837")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("148.97")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-5.73")]),s._v(")\n        })\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("url")]),s._v(" "),e("td",[s._v("String|Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider.")])]),s._v(" "),e("tr",[e("td",[s._v("layers")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The layers to include, separated by commas.")])]),s._v(" "),e("tr",[e("td",[s._v("parameters")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Additional parameters to pass to the WMS server in the GetMap URL.")])]),s._v(" "),e("tr",[e("td",[s._v("getFeatureInfoParameters")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Additional parameters to pass to the WMS server in the GetFeatureInfo URL.")])]),s._v(" "),e("tr",[e("td",[s._v("enablePickFeatures")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property.")])]),s._v(" "),e("tr",[e("td",[s._v("getFeatureInfoFormats")]),s._v(" "),e("td",[s._v("Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The formats in which to try WMS GetFeatureInfo requests.")])]),s._v(" "),e("tr",[e("td",[s._v("rectangle")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The rectangle of the layer. "),e("strong",[s._v("structure: { west: number, south: number, east: number, north: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("tilingScheme")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The tiling scheme to use to divide the world into tiles.")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.")])]),s._v(" "),e("tr",[e("td",[s._v("tileWidth")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("256")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The width of each tile in pixels.")])]),s._v(" "),e("tr",[e("td",[s._v("tileHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("256")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The height of each tile in pixels.")])]),s._v(" "),e("tr",[e("td",[s._v("minimumLevel")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.")])]),s._v(" "),e("tr",[e("td",[s._v("maximumLevel")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. If not specified, there is no limit.")])]),s._v(" "),e("tr",[e("td",[s._v("crs")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" CRS specification, for use with WMS specification >= 1.3.0.")])]),s._v(" "),e("tr",[e("td",[s._v("srs")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" SRS specification, for use with WMS specification 1.1.0 or 1.1.1")])]),s._v(" "),e("tr",[e("td",[s._v("credit")]),s._v(" "),e("td",[s._v("Credit| String")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A credit for the data source, which is displayed on the canvas.")])]),s._v(" "),e("tr",[e("td",[s._v("subdomains")]),s._v(" "),e("td",[s._v("String| Array")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'abc'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.")])]),s._v(" "),e("tr",[e("td",[s._v("clock")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified.")])]),s._v(" "),e("tr",[e("td",[s._v("times")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html"}},[this._v("WebMapServiceImageryProvider")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),e("tr",[e("td",[s._v("errorEvent")]),s._v(" "),e("td",[s._v("TileProviderError")]),s._v(" "),e("td",[s._v("Triggers when the imagery provider encounters an asynchronous error.")])]),s._v(" "),e("tr",[e("td",[s._v("readyPromise")]),s._v(" "),e("td",[s._v("ImageryProvider")]),s._v(" "),e("td",[s._v("Triggers when the provider is ready for use.")])])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=81.9da529710600fc8dd8ab.js.map