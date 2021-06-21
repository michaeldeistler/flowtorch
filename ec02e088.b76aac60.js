(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{112:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return b})),s.d(t,"metadata",(function(){return n})),s.d(t,"toc",(function(){return i})),s.d(t,"default",(function(){return p}));var a=s(3),c=s(7),r=(s(0),s(116)),o=["components"],b={id:"flowtorch.bijectors",title:"flowtorch.bijectors",sidebar_label:"flowtorch.bijectors"},n={unversionedId:"api/flowtorch.bijectors",id:"api/flowtorch.bijectors",isDocsHomePage:!1,title:"flowtorch.bijectors",description:"class flowtorch.bijectors.AffineAutoregressive(paramfn float = -5.0, logscalemaxclip float = 2.0)\xb6",source:"@site/docs/api/flowtorch.bijectors.mdx",slug:"/api/flowtorch.bijectors",permalink:"/api/flowtorch.bijectors",editUrl:"https://github.com/facebookincubator/flowtorch/edit/master/website/docs/api/flowtorch.bijectors.mdx",version:"current",sidebar_label:"flowtorch.bijectors",sidebar:"apiSidebar",previous:{title:"overview",permalink:"/api"}},i=[],l={toc:i};function p(e){var t=e.components,s=Object(c.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("dl",{class:"py class"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive"},Object(r.b)("em",{class:"property"},"class "),Object(r.b)("code",{class:"sig-prename descclassname"},"flowtorch.bijectors."),Object(r.b)("code",{class:"sig-name descname"},"AffineAutoregressive"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},"param_fn: flowtorch.param.Params = <flowtorch.params.dense_autoregressive.DenseAutoregressive object>"),", ",Object(r.b)("em",{class:"sig-param"},"log_scale_min_clip: float = -5.0"),", ",Object(r.b)("em",{class:"sig-param"},"log_scale_max_clip: float = 3.0"),", ",Object(r.b)("em",{class:"sig-param"},"sigmoid_bias: float = 2.0"),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Bases: ",Object(r.b)("code",{class:"xref py py-class docutils literal notranslate"},Object(r.b)("span",{class:"pre"},"flowtorch.bijector.Bijector"))),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive.autoregressive"},Object(r.b)("code",{class:"sig-name descname"},"autoregressive"),Object(r.b)("em",{class:"property"}," = True"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive.autoregressive",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive.codomain"},Object(r.b)("code",{class:"sig-name descname"},"codomain"),Object(r.b)("em",{class:"property"},": torch.distributions.constraints.Constraint"),Object(r.b)("em",{class:"property"}," = IndependentConstraint(Real(), 1)"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive.codomain",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive.default_param_fn"},Object(r.b)("code",{class:"sig-name descname"},"default_param_fn"),Object(r.b)("em",{class:"property"}," = <flowtorch.params.dense_autoregressive.DenseAutoregressive object>"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive.default_param_fn",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive.domain"},Object(r.b)("code",{class:"sig-name descname"},"domain"),Object(r.b)("em",{class:"property"},": torch.distributions.constraints.Constraint"),Object(r.b)("em",{class:"property"}," = IndependentConstraint(Real(), 1)"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive.domain",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.AffineAutoregressive.param_shapes"},Object(r.b)("code",{class:"sig-name descname"},"param_shapes"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"dist"),Object(r.b)("span",{class:"p"},":")," ",Object(r.b)("span",{class:"n"},"torch.distributions.distribution.Distribution")),Object(r.b)("span",{class:"sig-paren"},")")," \u2192 Tuple",Object(r.b)("span",{class:"p"},"["),"torch.Size",Object(r.b)("span",{class:"p"},", "),"torch.Size",Object(r.b)("span",{class:"p"},"]"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.AffineAutoregressive.param_shapes",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Given a base distribution, calculate the parameters for the transformation of that distribution under this bijector. By default, no parameters are set."))))),Object(r.b)("dl",{class:"py class"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose"},Object(r.b)("em",{class:"property"},"class "),Object(r.b)("code",{class:"sig-prename descclassname"},"flowtorch.bijectors."),Object(r.b)("code",{class:"sig-name descname"},"Compose"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"bijectors")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"context_size"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"0")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Bases: ",Object(r.b)("code",{class:"xref py py-class docutils literal notranslate"},Object(r.b)("span",{class:"pre"},"flowtorch.bijector.Bijector"))),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.event_dim"},Object(r.b)("code",{class:"sig-name descname"},"event_dim"),Object(r.b)("em",{class:"property"}," = 1"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.event_dim",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.forward"},Object(r.b)("code",{class:"sig-name descname"},"forward"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"x")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"params"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"context"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.forward",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.inverse"},Object(r.b)("code",{class:"sig-name descname"},"inverse"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"y")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"params"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"context"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.inverse",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.log_abs_det_jacobian"},Object(r.b)("code",{class:"sig-name descname"},"log_abs_det_jacobian"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"x")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"y")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"params"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"context"),Object(r.b)("span",{class:"o"},"="),Object(r.b)("span",{class:"default_value"},"None")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.log_abs_det_jacobian",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Computes the log det jacobian $\\log |dy/dx|$",Object(r.b)("p",null,"given input and output.\nBy default, assumes a volume preserving bijection.")))),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.param_fn"},Object(r.b)("code",{class:"sig-name descname"},"param_fn"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"input_shape")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"param_shapes")),", ",Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"context_size")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.param_fn",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)),Object(r.b)("dl",{class:"py method"},Object(r.b)("dt",{id:"flowtorch.bijectors.Compose.param_shapes"},Object(r.b)("code",{class:"sig-name descname"},"param_shapes"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"dist")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Compose.param_shapes",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Given a base distribution, calculate the parameters for the transformation of that distribution under this bijector. By default, no parameters are set."))))),Object(r.b)("dl",{class:"py class"},Object(r.b)("dt",{id:"flowtorch.bijectors.Sigmoid"},Object(r.b)("em",{class:"property"},"class "),Object(r.b)("code",{class:"sig-prename descclassname"},"flowtorch.bijectors."),Object(r.b)("code",{class:"sig-name descname"},"Sigmoid"),Object(r.b)("span",{class:"sig-paren"},"("),Object(r.b)("em",{class:"sig-param"},Object(r.b)("span",{class:"n"},"param_fn"),Object(r.b)("span",{class:"p"},":")," ",Object(r.b)("span",{class:"n"},"flowtorch.param.Params")),Object(r.b)("span",{class:"sig-paren"},")"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Sigmoid",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null,Object(r.b)("p",null,"Bases: ",Object(r.b)("code",{class:"xref py py-class docutils literal notranslate"},Object(r.b)("span",{class:"pre"},"flowtorch.bijector.Bijector"))),Object(r.b)("dl",{class:"py attribute"},Object(r.b)("dt",{id:"flowtorch.bijectors.Sigmoid.codomain"},Object(r.b)("code",{class:"sig-name descname"},"codomain"),Object(r.b)("em",{class:"property"},": torch.distributions.constraints.Constraint"),Object(r.b)("em",{class:"property"}," = Interval(lower_bound=0.0, upper_bound=1.0)"),Object(r.b)("a",{class:"headerlink",href:"#flowtorch.bijectors.Sigmoid.codomain",title:"Permalink to this definition"},"\xb6")),Object(r.b)("dd",null)))))}p.isMDXComponent=!0},116:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return m}));var a=s(0),c=s.n(a);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t){if(null==e)return{};var s,a,c=function(e,t){if(null==e)return{};var s,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):b(b({},t),e)),s},p=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=n(e,["components","mdxType","originalType","parentName"]),p=l(s),d=a,m=p["".concat(o,".").concat(d)]||p[d]||j[d]||r;return s?c.a.createElement(m,b(b({ref:t},i),{},{components:s})):c.a.createElement(m,b({ref:t},i))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=d;var b={};for(var n in t)hasOwnProperty.call(t,n)&&(b[n]=t[n]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<r;i++)o[i]=s[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,s)}d.displayName="MDXCreateElement"}}]);