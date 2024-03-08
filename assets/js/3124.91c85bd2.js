"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3124],{8164:(t,i,e)=>{e.d(i,{c:()=>n});var s=e(1504),o=e(8952);function n({children:t,fallback:i}){var e;return(0,o.c)()?s.createElement(s.Fragment,null,null===(e=t)||void 0===e?void 0:e()):null!=i?i:null}},6280:(t,i,e)=>{e.d(i,{c:()=>d});var s=e(1504),o=e(4971),n=e(3652),h=e(5628),a=e(476),r=e(1580);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function d(){const{shown:t,scrollToTop:i}=function({threshold:t}){const[i,e]=(0,s.useState)(!1),o=(0,s.useRef)(!1),{startScroll:n,cancelScroll:h}=(0,a.yI)();return(0,a.SM)((({scrollY:i},s)=>{var n;const a=null===(n=s)||void 0===n?void 0:n.scrollY;a&&(o.current?o.current=!1:i>=a?(h(),e(!1)):i<t?e(!1):i+window.innerHeight<document.documentElement.scrollHeight&&e(!0))})),(0,r.c)((t=>{t.location.hash&&(o.current=!0,e(!1))})),{shown:i,scrollToTop:()=>n(0)}}({threshold:300});return s.createElement("button",{"aria-label":(0,n.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.c)("clean-btn",h.W.common.backToTopButton,c.backToTopButton,t&&c.backToTopButtonShow),type:"button",onClick:i})}},5628:(t,i,e)=>{e.d(i,{W:()=>s});const s={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:t=>`theme-admonition-${t}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:t=>`theme-doc-sidebar-item-category-level-${t}`,docSidebarItemLinkLevel:t=>`theme-doc-sidebar-item-link-level-${t}`},blog:{}}},5652:(t,i,e)=>{function s(t){return Math.abs(Math.floor(t))}function o(t,i){return Math.random()*(i-t)+t}function n(t,i){return Math.floor(o(t,i+1))}function h(t,i,e,s){const o=Math.pow;return Math.sqrt(o(t-e,2)+o(i-s,2))}function a(t,i,e=1){if(t>360||t<0)throw new Error(`Expected hue 0-360 range, got \`${t}\``);if(i>100||i<0)throw new Error(`Expected lightness 0-100 range, got \`${i}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${t}, 100%, ${i}%, ${e})`}e.d(i,{w:()=>b});const r=t=>{if("object"==typeof t&&null!==t){if("function"==typeof Object.getPrototypeOf){const i=Object.getPrototypeOf(t);return i===Object.prototype||null===i}return"[object Object]"===Object.prototype.toString.call(t)}return!1},c=["__proto__","constructor","prototype"],d=(...t)=>t.reduce(((t,i)=>(Object.keys(i).forEach((e=>{c.includes(e)||(Array.isArray(t[e])&&Array.isArray(i[e])?t[e]=i[e]:r(t[e])&&r(i[e])?t[e]=d(t[e],i[e]):t[e]=i[e])})),t)),{});class l{x;y;ctx;hue;friction;gravity;flickering;lineWidth;explosionLength;angle;speed;brightness;coordinates=[];decay;alpha=1;constructor({x:t,y:i,ctx:e,hue:s,decay:h,gravity:a,friction:r,brightness:c,flickering:d,lineWidth:l,explosionLength:u}){for(this.x=t,this.y=i,this.ctx=e,this.hue=s,this.gravity=a,this.friction=r,this.flickering=d,this.lineWidth=l,this.explosionLength=u,this.angle=o(0,2*Math.PI),this.speed=n(1,10),this.brightness=n(c.min,c.max),this.decay=o(h.min,h.max);this.explosionLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=a(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=a(this.hue,this.flickering?o(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class u{constructor(t,i){this.options=t,this.canvas=i,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}active=!1;x;y;get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,i){const{click:e,move:s}=this.mouseOptions;(e||s)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=i)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class p{hue;rocketsPoint;opacity;acceleration;friction;gravity;particles;explosion;mouse;boundaries;sound;delay;brightness;decay;flickering;intensity;traceLength;traceSpeed;lineWidth;lineStyle;autoresize;constructor(){this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,d(this,t))}}class g{constructor(t,i){this.options=t,this.render=i}tick=0;rafId=0;fps=60;tolerance=.1;now;mount(){this.now=performance.now();const t=1e3/this.fps,i=e=>{this.rafId=requestAnimationFrame(i);const s=e-this.now;s>=t-this.tolerance&&(this.render(),this.now=e-s%t,this.tick+=s*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(i)}unmount(){cancelAnimationFrame(this.rafId)}}class m{constructor(t,i,e){this.options=t,this.updateSize=i,this.container=e}resizer;mount(){if(!this.resizer){const t=function(t,i){let e;return(...s)=>{e&&clearTimeout(e),e=setTimeout((()=>t(...s)),i)}}((()=>this.updateSize()),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class x{constructor(t){this.options=t,this.init()}buffers=[];audioContext;onInit=!1;get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const i=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(i).then((t=>{this.buffers.push(t)})).catch((t=>{throw t}))}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),i=this.buffers[n(0,this.buffers.length-1)],e=this.audioContext.createGain();t.buffer=i,e.gain.value=o(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),e.connect(this.audioContext.destination),t.connect(e),t.start(0)}else this.init()}}class f{x;y;sx;sy;dx;dy;ctx;hue;speed;acceleration;traceLength;totalDistance;angle;brightness;coordinates=[];currentDistance=0;constructor({x:t,y:i,dx:e,dy:s,ctx:o,hue:a,speed:r,traceLength:c,acceleration:d}){for(this.x=t,this.y=i,this.sx=t,this.sy=i,this.dx=e,this.dy=s,this.ctx=o,this.hue=a,this.speed=r,this.traceLength=c,this.acceleration=d,this.totalDistance=h(t,i,e,s),this.angle=Math.atan2(s-i,e-t),this.brightness=n(50,70);this.traceLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const i=Math.cos(this.angle)*this.speed,e=Math.sin(this.angle)*this.speed;this.currentDistance=h(this.sx,this.sy,this.x+i,this.y+e),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=i,this.y+=e)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=a(this.hue,this.brightness),this.ctx.stroke()}}class b{target;container;canvas;ctx;width;height;traces=[];explosions=[];waitStopRaf;running=!1;opts;sound;resize;mouse;raf;constructor(t,i={}){this.target=t,this.container=t,this.opts=new p,this.createCanvas(this.target),this.updateOptions(i),this.sound=new x(this.opts),this.resize=new m(this.opts,this.updateSize.bind(this),this.container),this.mouse=new u(this.opts,this.canvas),this.raf=new g(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.7"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise((i=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),i()))},this.waitStopRaf()}))}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let i=0;i<t;i++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:i=this.container.clientHeight}={}){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i,this.updateBoundaries({...this.opts.boundaries,width:t,height:i})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:i,lineWidth:e}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=i,this.ctx.lineJoin="round",this.ctx.lineWidth=o(e.trace.min,e.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:i,boundaries:e,traceLength:o,traceSpeed:h,acceleration:a,mouse:r}=this.opts;this.traces.push(new f({x:this.width*n(i.min,i.max)/100,y:this.height,dx:this.mouse.x&&r.move||this.mouse.active?this.mouse.x:n(e.x,e.width-2*e.x),dy:this.mouse.y&&r.move||this.mouse.active?this.mouse.y:n(e.y,.5*e.height),ctx:this.ctx,hue:n(t.min,t.max),speed:h,acceleration:a,traceLength:s(o)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:i}=this.opts;(this.raf.tick>n(t.min,t.max)||this.mouse.active&&i.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update(((i,e,s)=>{this.initExplosion(i,e,s),this.sound.play(),this.traces.splice(t,1)}))}initExplosion(t,i,e){const{particles:h,flickering:a,lineWidth:r,explosion:c,brightness:d,friction:u,gravity:p,decay:g}=this.opts;let m=s(h);for(;m--;)this.explosions.push(new l({x:t,y:i,ctx:this.ctx,hue:e,friction:u,gravity:p,flickering:n(0,100)<=a,lineWidth:o(r.explosion.min,r.explosion.max),explosionLength:s(c),brightness:d,decay:g}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update((()=>{this.explosions.splice(t,1)}))}}}}]);