;
(self.AMP=self.AMP||[]).push({m:1,v:"2208242209000",n:"amp-cache-url",ev:"0.1",l:!0,f:function(t,f){(()=>{var f="ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" "),n="### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" "),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,f){if(f=f.split(":")[0],!(t=+t))return!1;switch(f){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}var s=Object.prototype.hasOwnProperty;function r(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}var o={stringify:function(t,f){f=f||"";var n,i=[];for(e in"string"!=typeof f&&(f="?"),t)if(s.call(t,e)){(n=t[e])||null!=n&&!isNaN(n)||(n="");var e=encodeURIComponent(e);n=encodeURIComponent(n),null!==e&&null!==n&&i.push(e+"="+n)}return i.length?f+i.join("&"):""},parse:function(t){for(var f,n=/([^=?&]+)=?([^&]*)/g,i={};f=n.exec(t);){var e=r(f[1]);f=r(f[2]),null===e||null===f||e in i||(i[e]=f)}return i}},u=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,c=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,a=/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;function h(t){return(t||"").toString().replace(a,"")}var l=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function d(t){var f=("undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{}).location||{};t=t||f,f={};var n,e=typeof t;if("blob:"===t.protocol)f=new m(unescape(t.pathname),{});else if("string"===e)for(n in f=new m(t,{}),p)delete f[n];else if("object"===e){for(n in t)n in p||(f[n]=t[n]);void 0===f.slashes&&(f.slashes=u.test(t.href))}return f}function v(t){return t=h(t),{protocol:(t=c.exec(t))[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&2<=t[2].length),rest:t[2]&&1===t[2].length?"/"+t[3]:t[3]}}function m(t,f,n){if(t=h(t),!(this instanceof m))return new m(t,f,n);var i=l.slice(),s=typeof f,r=0;"object"!==s&&"string"!==s&&(n=f,f=null),n&&"function"!=typeof n&&(n=o.parse),f=d(f);var u=v(t||"");for(s=!u.protocol&&!u.slashes,this.slashes=u.slashes||s&&f.slashes,this.protocol=u.protocol||f.protocol||"",t=u.rest,u.slashes||(i[3]=[/(.*)/,"pathname"]);r<i.length;r++)if("function"==typeof(u=i[r]))t=u(t);else{var c=u[0],a=u[1];c!=c?this[a]=t:"string"==typeof c?~(c=t.indexOf(c))&&("number"==typeof u[2]?(this[a]=t.slice(0,c),t=t.slice(c+u[2])):(this[a]=t.slice(c),t=t.slice(0,c))):(c=c.exec(t))&&(this[a]=c[1],t=t.slice(0,c.index)),this[a]=this[a]||s&&u[3]&&f[a]||"",u[4]&&(this[a]=this[a].toLowerCase())}if(n&&(this.query=n(this.query)),s&&f.slashes&&"/"!==this.pathname.charAt(0)&&(""!==this.pathname||""!==f.pathname)){if(t=this.pathname,f=f.pathname,""!==t){for(n=(f=(f||"/").split("/").slice(0,-1).concat(t.split("/")))[(t=f.length)-1],i=!1,r=0;t--;)"."===f[t]?f.splice(t,1):".."===f[t]?(f.splice(t,1),r++):r&&(0===t&&(i=!0),f.splice(t,1),r--);i&&f.unshift(""),"."!==n&&".."!==n||f.push(""),f=f.join("/")}this.pathname=f}"/"!==this.pathname.charAt(0)&&this.hostname&&(this.pathname="/"+this.pathname),e(this.port,this.protocol)||(this.host=this.hostname,this.port=""),this.username=this.password="",this.auth&&(u=this.auth.split(":"),this.username=u[0]||"",this.password=u[1]||""),this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null",this.href=this.toString()}m.prototype={set:function(t,f,n){switch(t){case"query":"string"==typeof f&&f.length&&(f=(n||o.parse)(f)),this[t]=f;break;case"port":this[t]=f,e(f,this.protocol)?f&&(this.host=this.hostname+":"+f):(this.host=this.hostname,this[t]="");break;case"hostname":this[t]=f,this.port&&(f+=":"+this.port),this.host=f;break;case"host":this[t]=f,/:\d+$/.test(f)?(f=f.split(":"),this.port=f.pop(),this.hostname=f.join(":")):(this.hostname=f,this.port="");break;case"protocol":this.protocol=f.toLowerCase(),this.slashes=!n;break;case"pathname":case"hash":f?(n="pathname"===t?"/":"#",this[t]=f.charAt(0)!==n?n+f:f):this[t]=f;break;default:this[t]=f}for(t=0;t<l.length;t++)(f=l[t])[4]&&(this[f[1]]=this[f[1]].toLowerCase());return this.origin=this.protocol&&this.host&&"file:"!==this.protocol?this.protocol+"//"+this.host:"null",this.href=this.toString(),this},toString:function(t){t&&"function"==typeof t||(t=o.stringify);var f=this.protocol;return f&&":"!==f.charAt(f.length-1)&&(f+=":"),f+=this.slashes?"//":"",this.username&&(f+=this.username,this.password&&(f+=":"+this.password),f+="@"),f+=this.host+this.pathname,(t="object"==typeof this.query?t(this.query):this.query)&&(f+="?"!==t.charAt(0)?"?"+t:t),this.hash&&(f+=this.hash),f}},m.extractProtocol=v,m.location=d,m.trimLeft=h,m.qs=o;var b=m,g=/^xn--/,w=/[^\0-\x7E]/,x=/[\x2E\u3002\uFF0E\uFF61]/g,y={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=Math.floor,k=String.fromCharCode;function z(t){throw new RangeError(y[t])}function q(t,f){var n=t.split("@");let i="";1<n.length&&(i=n[0]+"@",t=n[1]);{n=[];let i=(t=(t=t.replace(x,".")).split(".")).length;for(;i--;)n[i]=f(t[i]);f=n}return i+f.join(".")}function F(t,f){return t+22+75*(26>t)-((0!=f)<<5)}function I(t,f,n){let i=0;for(t=n?j(t/700):t>>1,t+=j(t/f);455<t;i+=36)t=j(t/35);return j(i+36*t/(t+38))}var A=function(t){return q(t,(function(t){return g.test(t)?function(t){const f=[],n=t.length;let i=0,e=128,s=72;var r=t.lastIndexOf("-");0>r&&(r=0);for(var o=0;o<r;++o)128<=t.charCodeAt(o)&&z("not-basic"),f.push(t.charCodeAt(o));for(r=0<r?r+1:0;r<n;){o=i;for(let f=1,e=36;;e+=36){r>=n&&z("invalid-input");var u=t.charCodeAt(r++);(36<=(u=10>u-48?u-22:26>u-65?u-65:26>u-97?u-97:36)||u>j((2147483647-i)/f))&&z("overflow"),i+=u*f;const o=e<=s?1:e>=s+26?26:e-s;if(u<o)break;f>j(2147483647/(u=36-o))&&z("overflow"),f*=u}s=I(i-o,u=f.length+1,0==o),j(i/u)>2147483647-e&&z("overflow"),e+=j(i/u),i%=u,f.splice(i++,0,e)}return String.fromCodePoint(...f)}(t.slice(4).toLowerCase()):t}))},E=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,$=/[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;function N(t){return(t="undefined"!=typeof window?function(t){return t=new TextEncoder("utf-8").encode(t),window.crypto.subtle.digest("SHA-256",t).then((t=>{var f=[];t=new DataView(t);for(let n=0;n<t.byteLength;n+=4){let i=("00000000"+t.getUint32(n).toString(16)).slice(-8);f.push(i)}return f.join("")}))}(t):void 0).then((t=>function(t){let f=[];t.match(/.{1,2}/g).forEach(((t,n)=>{f[n]=parseInt(t,16)}));var n=f.length%5,i=Math.floor(f.length/5);if(t=[],0!=n){for(var e=0;e<5-n;e++)f+="\0";i+=1}for(e=0;e<i;e++)t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(f[5*e]>>3)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((7&f[5*e])<<2|f[5*e+1]>>6)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((63&f[5*e+1])>>1)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((1&f[5*e+1])<<4|f[5*e+2]>>4)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((15&f[5*e+2])<<1|f[5*e+3]>>7)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((127&f[5*e+3])>>2)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((3&f[5*e+3])<<3|f[5*e+4]>>5)),t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(31&f[5*e+4]));for(i=0,1==n?i=6:2==n?i=4:3==n?i=3:4==n&&(i=1),n=0;n<i;n++)t.pop();for(n=0;n<i;n++)t.push("=");return t.join("")}("ffffffffff"+t+"000000").substr(8,Math.ceil(4*t.length/5))))}function C(t){return"--"==t.slice(2,4)&&"xn"!=t.slice(0,2)}function S(t,i,e=null){let s=new b(i),r=function(t,i=null){return(t=>f.some((f=>!!t.endsWith(`.${f}`))))(t)?"/i":(t=>n.some((f=>!!t.endsWith(`.${f}`))))(t)?"/r":"viewer"===i?"/v":"/c"}(s.pathname,e);return r+="https:"===s.protocol?"/s/":"/",i.endsWith("/")||(s.pathname=s.pathname.replace(/\/$/,"")),function(t){if(C(t=new b(t).hostname))var f=!1;else f=A(t),f=63>=t.length&&!(E.test(f)&&$.test(f))&&-1!=t.indexOf(".");return f?63<(f=function(t){return q(t,(function(t){return w.test(t)?"xn--"+function(t){const f=[];let n=(t=function(t){let f=[],n=0,i=t.length;for(;n<i;){let e=t.charCodeAt(n++);if(55296<=e&&56319>=e&&n<i){let i=t.charCodeAt(n++);56320==(64512&i)?f.push(((1023&e)<<10)+(1023&i)+65536):(f.push(e),n--)}else f.push(e)}return f}(t)).length,i=128,e=0,s=72;for(var r of t)128>r&&f.push(k(r));let o=r=f.length;for(r&&f.push("-");o<n;){var u=2147483647;for(const f of t)f>=i&&f<u&&(u=f);const n=o+1;u-i>j((2147483647-e)/n)&&z("overflow"),e+=(u-i)*n,i=u;for(const a of t)if(a<i&&2147483647<++e&&z("overflow"),a==i){var c=e;for(u=36;;u+=36){const t=u<=s?1:u>=s+26?26:u-s;if(c<t)break;c-=t;const n=36-t;f.push(k(F(t+c%n,0))),c=j(c/n)}f.push(k(F(c,0))),s=I(e,n,o==r),e=0,++o}++e,++i}return f.join("")}(t):t}))}(f=(f=(f=A(t)).split("-").join("--")).split(".").join("-")).toLowerCase()).length?N(t):(C(f)&&(f="0-".concat(f,"-0")),Promise.resolve(f)):N(t)}(s.toString()).then((f=>{let n=new b(i);return n.protocol="https",f=f+"."+t,n.host=f,n.hostname=f,n.pathname=r+s.hostname+s.pathname,n.toString()}))}var P=(()=>self.AMP.config.urls)();t.registerServiceForDoc("cache-url",class{constructor(){}createCacheUrl(t,f=P.cdn){return S(f.replace(/https?:\/\//,""),t)}})})()}});
//# sourceMappingURL=amp-cache-url-0.1.mjs.map