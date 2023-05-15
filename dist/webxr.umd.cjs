(function(v,k){typeof exports=="object"&&typeof module<"u"?k(exports,require("@lookingglass/webxr-polyfill/src/api/index"),require("@lookingglass/webxr-polyfill/src/api/XRSystem"),require("@lookingglass/webxr-polyfill/src/WebXRPolyfill"),require("holoplay-core"),require("@lookingglass/webxr-polyfill/src/devices/XRDevice"),require("@lookingglass/webxr-polyfill/src/api/XRSpace"),require("gl-matrix"),require("@lookingglass/webxr-polyfill/src/api/XRWebGLLayer")):typeof define=="function"&&define.amd?define(["exports","@lookingglass/webxr-polyfill/src/api/index","@lookingglass/webxr-polyfill/src/api/XRSystem","@lookingglass/webxr-polyfill/src/WebXRPolyfill","holoplay-core","@lookingglass/webxr-polyfill/src/devices/XRDevice","@lookingglass/webxr-polyfill/src/api/XRSpace","gl-matrix","@lookingglass/webxr-polyfill/src/api/XRWebGLLayer"],k):(v=typeof globalThis<"u"?globalThis:v||self,k(v["Looking Glass WebXR"]={},v["@lookingglass/webxr-polyfill/src/api/index"],v["@lookingglass/webxr-polyfill/src/api/XRSystem"],v["@lookingglass/webxr-polyfill/src/WebXRPolyfill"],v.holoPlayCore,v["@lookingglass/webxr-polyfill/src/devices/XRDevice"],v["@lookingglass/webxr-polyfill/src/api/XRSpace"],v.glMatrix,v["@lookingglass/webxr-polyfill/src/api/XRWebGLLayer"]))})(this,function(v,k,V,te,O,ne,ie,g,$){"use strict";var Xe=Object.defineProperty;var Ve=(v,k,V)=>k in v?Xe(v,k,{enumerable:!0,configurable:!0,writable:!0,value:V}):v[k]=V;var x=(v,k,V)=>(Ve(v,typeof k!="symbol"?k+"":k,V),V);const G=n=>n&&typeof n=="object"&&"default"in n?n:{default:n};function ae(n){if(n&&n.__esModule)return n;const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const e in n)if(e!=="default"){const s=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(a,e,s.get?s:{enumerable:!0,get:()=>n[e]})}}return a.default=n,Object.freeze(a)}const Z=G(k),se=G(V),re=G(te),oe=ae(O),le=G(ne),ce=G(ie),ue=G($),q=1.6;var Y;(function(n){n[n.Swizzled=0]="Swizzled",n[n.Center=1]="Center",n[n.Quilt=2]="Quilt"})(Y||(Y={}));class de extends EventTarget{constructor(e){super();x(this,"_calibration",{configVersion:"1.0",pitch:{value:45},slope:{value:-5},center:{value:-.5},viewCone:{value:40},invView:{value:1},verticalAngle:{value:0},DPI:{value:338},screenW:{value:250},screenH:{value:250},flipImageX:{value:0},flipImageY:{value:0},flipSubp:{value:0},serial:"LKG-DEFAULT-#####"});x(this,"_viewControls",{tileHeight:512,numViews:48,trackballX:0,trackballY:0,targetX:0,targetY:q,targetZ:-.5,targetDiam:2,fovy:13/180*Math.PI,depthiness:1.25,inlineView:Y.Center,capturing:!1,quiltResolution:3840,popup:null,XRSession:null,lkgCanvas:null,appCanvas:null});x(this,"LookingGlassDetected");this._viewControls={...this._viewControls,...e},this.syncCalibration()}syncCalibration(){new oe.Client(e=>{if(e.devices.length<1){console.log("No Looking Glass devices found");return}e.devices.length>1&&console.log("More than one Looking Glass device found... using the first one"),this.calibration=e.devices[0].calibration})}addEventListener(e,s,t){super.addEventListener(e,s,t)}onConfigChange(){this.dispatchEvent(new Event("on-config-changed"))}get calibration(){return this._calibration}set calibration(e){this._calibration={...this._calibration,...e},this.onConfigChange()}updateViewControls(e){e!=null&&(this._viewControls={...this._viewControls,...e},this.onConfigChange())}get tileHeight(){return Math.round(this.framebufferHeight/this.quiltHeight)}get quiltResolution(){return this._viewControls.quiltResolution}set quiltResolution(e){this.updateViewControls({quiltResolution:e})}get numViews(){return this.quiltWidth*this.quiltHeight}get targetX(){return this._viewControls.targetX}set targetX(e){this.updateViewControls({targetX:e})}get targetY(){return this._viewControls.targetY}set targetY(e){this.updateViewControls({targetY:e})}get targetZ(){return this._viewControls.targetZ}set targetZ(e){this.updateViewControls({targetZ:e})}get trackballX(){return this._viewControls.trackballX}set trackballX(e){this.updateViewControls({trackballX:e})}get trackballY(){return this._viewControls.trackballY}set trackballY(e){this.updateViewControls({trackballY:e})}get targetDiam(){return this._viewControls.targetDiam}set targetDiam(e){this.updateViewControls({targetDiam:e})}get fovy(){return this._viewControls.fovy}set fovy(e){this.updateViewControls({fovy:e})}get depthiness(){return this._viewControls.depthiness}set depthiness(e){this.updateViewControls({depthiness:e})}get inlineView(){return this._viewControls.inlineView}set inlineView(e){this.updateViewControls({inlineView:e})}get capturing(){return this._viewControls.capturing}set capturing(e){this.updateViewControls({capturing:e})}get popup(){return this._viewControls.popup}set popup(e){this.updateViewControls({popup:e})}get XRSession(){return this._viewControls.XRSession}set XRSession(e){this.updateViewControls({XRSession:e})}get lkgCanvas(){return this._viewControls.lkgCanvas}set lkgCanvas(e){this.updateViewControls({lkgCanvas:e})}get appCanvas(){return this._viewControls.appCanvas}set appCanvas(e){this.updateViewControls({appCanvas:e})}get aspect(){return this._calibration.screenW.value/this._calibration.screenH.value}get tileWidth(){return Math.round(this.framebufferWidth/this.quiltWidth)}get framebufferWidth(){return this._calibration.screenW.value<7e3?this._viewControls.quiltResolution:7680}get quiltWidth(){return this.calibration.screenW.value==1536?8:this.calibration.screenW.value==3840||this.calibration.screenW.value>7e3?5:8}get quiltHeight(){return this.calibration.screenW.value==1536?6:this.calibration.screenW.value==3840||this.calibration.screenW.value>7e3?9:6}get framebufferHeight(){return this._calibration.screenW.value<7e3?this._viewControls.quiltResolution:4320}get viewCone(){return this._calibration.viewCone.value*this.depthiness/180*Math.PI}get tilt(){return this._calibration.screenH.value/(this._calibration.screenW.value*this._calibration.slope.value)*(this._calibration.flipImageX.value?-1:1)}set tilt(e){}get subp(){return 1/(this._calibration.screenW.value*3)}get pitch(){const e=this._calibration.screenW.value/this._calibration.DPI.value;return this._calibration.pitch.value*e*Math.cos(Math.atan(1/this._calibration.slope.value))}}let j=null;function P(){return j==null&&(j=new de),j}function Q(n){const a=P();n!=null&&a.updateViewControls(n)}async function fe(){const n=P();function a(){if(n.appCanvas!=null)try{let s=n.appCanvas.toDataURL();const t=document.createElement("a");t.style.display="none",t.href=s,t.download=`hologram_qs${n.quiltWidth}x${n.quiltHeight}a${n.aspect}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s)}catch(s){console.error("Error while capturing canvas data:",s)}}const e=document.getElementById("screenshotbutton");e&&e.addEventListener("click",()=>{const s=N.getInstance();if(!s){console.warn("LookingGlassXRDevice not initialized");return}s.captureScreenshot=!0,s.screenshotCallback=a})}function he(){var a;const n=P();if(console.log(n,"for debugging purposes"),n.lkgCanvas==null)console.warn("window placement called without a valid XR Session!");else{let e=function(){let r=w.d-w.a,c=w.w-w.s;r&&c&&(r*=Math.sqrt(.5),c*=Math.sqrt(.5));const u=n.trackballX,p=n.trackballY,E=Math.cos(u)*r-Math.sin(u)*Math.cos(p)*c,A=-Math.sin(p)*c,S=-Math.sin(u)*r-Math.cos(u)*Math.cos(p)*c;n.targetX=n.targetX+E*n.targetDiam*.03,n.targetY=n.targetY+A*n.targetDiam*.03,n.targetZ=n.targetZ+S*n.targetDiam*.03,requestAnimationFrame(e)};const s=document.createElement("style");document.head.appendChild(s),(a=s.sheet)==null||a.insertRule("#LookingGlassWebXRControls * { all: revert; font-family: sans-serif }");const t=document.createElement("div");t.id="LookingGlassWebXRControls",t.style.position="fixed",t.style.zIndex="1000",t.style.padding="15px",t.style.width="320px",t.style.maxWidth="calc(100vw - 18px)",t.style.maxHeight="calc(100vh - 18px)",t.style.whiteSpace="nowrap",t.style.background="rgba(0, 0, 0, 0.6)",t.style.color="white",t.style.borderRadius="10px",t.style.right="15px",t.style.bottom="15px",t.style.flex="row";const l=document.createElement("div");t.appendChild(l),l.style.width="100%",l.style.textAlign="center",l.style.fontWeight="bold",l.style.marginBottom="8px",l.innerText="Looking Glass Controls";const o=document.createElement("button");o.style.display="block",o.style.margin="auto",o.style.width="100%",o.style.height="35px",o.style.padding="4px",o.style.marginBottom="8px",o.style.borderRadius="8px",o.id="screenshotbutton",t.appendChild(o),o.innerText="Save Hologram";const d=document.createElement("button");d.style.display="block",d.style.margin="auto",d.style.width="100%",d.style.height="35px",d.style.padding="4px",d.style.marginBottom="8px",d.style.borderRadius="8px",d.id="copybutton",t.appendChild(d),d.innerText="Copy Config",d.addEventListener("click",()=>{pe(n)});const f=document.createElement("div");t.appendChild(f),f.style.width="290px",f.style.whiteSpace="normal",f.style.color="rgba(255,255,255,0.7)",f.style.fontSize="14px",f.style.margin="5px 0",f.innerHTML="Click the popup and use WASD, mouse left/right drag, and scroll.";const F=document.createElement("div");t.appendChild(F);const C=(r,c,u)=>{const p=u.stringify,E=document.createElement("div");E.style.marginBottom="8px",F.appendChild(E);const A=r,S=n[r],y=document.createElement("label");E.appendChild(y),y.innerText=u.label,y.setAttribute("for",A),y.style.width="100px",y.style.display="inline-block",y.style.textDecoration="dotted underline 1px",y.style.fontFamily='"Courier New"',y.style.fontSize="13px",y.style.fontWeight="bold",y.title=u.title;const m=document.createElement("input");E.appendChild(m),Object.assign(m,c),m.id=A,m.title=u.title,m.value=c.value!==void 0?c.value:S;const B=b=>{n[r]=b,D(b)};m.oninput=()=>{const b=c.type==="range"?parseFloat(m.value):c.type==="checkbox"?m.checked:m.value;B(b)};const M=b=>{let I=b(n[r]);u.fixRange&&(I=u.fixRange(I),m.max=Math.max(parseFloat(m.max),I).toString(),m.min=Math.min(parseFloat(m.min),I).toString()),m.value=I,B(I)};c.type==="range"&&(m.style.width="110px",m.style.height="8px",m.onwheel=b=>{M(I=>I+Math.sign(b.deltaX-b.deltaY)*c.step)});let D=b=>{};if(p){const b=document.createElement("span");b.style.fontFamily='"Courier New"',b.style.fontSize="13px",b.style.marginLeft="3px",E.appendChild(b),D=I=>{b.innerHTML=p(I)},D(S)}return M};C("fovy",{type:"range",min:1/180*Math.PI,max:120.1/180*Math.PI,step:1/180*Math.PI},{label:"fov",title:"perspective fov (degrades stereo effect)",fixRange:r=>Math.max(1/180*Math.PI,Math.min(r,120.1/180*Math.PI)),stringify:r=>{const c=r/Math.PI*180,u=Math.atan(Math.tan(r/2)*n.aspect)*2/Math.PI*180;return`${c.toFixed()}&deg;&times;${u.toFixed()}&deg;`}}),C("depthiness",{type:"range",min:0,max:2,step:.01},{label:"depthiness",title:'exaggerates depth by multiplying the width of the view cone (as reported by the firmware) - can somewhat compensate for depthiness lost using higher fov. 1.25 seems to be most physically accurate on Looking Glass 8.9".',fixRange:r=>Math.max(0,r),stringify:r=>`${r.toFixed(2)}x`}),C("inlineView",{type:"range",min:0,max:2,step:1},{label:"inline view",title:"what to show inline on the original canvas (swizzled = no overwrite)",fixRange:r=>Math.max(0,Math.min(r,2)),stringify:r=>r===0?"swizzled":r===1?"center":r===2?"quilt":"?"}),n.lkgCanvas.oncontextmenu=r=>{r.preventDefault()},n.lkgCanvas.addEventListener("wheel",r=>{const c=n.targetDiam,u=1.1,p=Math.log(c)/Math.log(u);return n.targetDiam=Math.pow(u,p+r.deltaY*.01)}),n.lkgCanvas.addEventListener("mousemove",r=>{const c=r.movementX,u=-r.movementY;if(r.buttons&2||r.buttons&1&&(r.shiftKey||r.ctrlKey)){const p=n.trackballX,E=n.trackballY,A=-Math.cos(p)*c+Math.sin(p)*Math.sin(E)*u,S=-Math.cos(E)*u,y=Math.sin(p)*c+Math.cos(p)*Math.sin(E)*u;n.targetX=n.targetX+A*n.targetDiam*.001,n.targetY=n.targetY+S*n.targetDiam*.001,n.targetZ=n.targetZ+y*n.targetDiam*.001}else r.buttons&1&&(n.trackballX=n.trackballX-c*.01,n.trackballY=n.trackballY-u*.01)});const w={w:0,a:0,s:0,d:0};return n.lkgCanvas.addEventListener("keydown",r=>{switch(r.code){case"KeyW":w.w=1;break;case"KeyA":w.a=1;break;case"KeyS":w.s=1;break;case"KeyD":w.d=1;break}}),n.lkgCanvas.addEventListener("keyup",r=>{switch(r.code){case"KeyW":w.w=0;break;case"KeyA":w.a=0;break;case"KeyS":w.s=0;break;case"KeyD":w.d=0;break}}),requestAnimationFrame(e),setTimeout(()=>{fe()},1e3),t}}function pe(n){let a=n.targetX,e=n.targetY,s=n.targetZ,t=`${Math.round(n.fovy/Math.PI*180)} * Math.PI / 180`,l=n.targetDiam,o=n.trackballX,d=n.trackballY,f=n.depthiness;const F={targetX:a,targetY:e,targetZ:s,fovy:t,targetDiam:l,trackballX:o,trackballY:d,depthiness:f};let C=JSON.stringify(F,null,4);navigator.clipboard.writeText(C)}let H;const me=(n,a)=>{const e=P();if(e.lkgCanvas==null){console.warn("window placement called without a valid XR Session!");return}else if(n==!1)ve(e,H);else{H==null&&(H=he()),e.lkgCanvas.style.position="fixed",e.lkgCanvas.style.bottom="0",e.lkgCanvas.style.left="0",e.lkgCanvas.width=e.calibration.screenW.value,e.lkgCanvas.height=e.calibration.screenH.value,document.body.appendChild(H);const s="getScreenDetails"in window;console.log(s,"Screen placement API exists"),s?be(e.lkgCanvas,e,a):J(e,e.lkgCanvas,a)}};async function be(n,a,e){const s=await window.getScreenDetails();console.log(s);const t=s.screens.filter(l=>l.label.includes("LKG"))[0];if(console.log(t,"monitors"),t===void 0){console.log("no Looking Glass monitor detected - manually opening popup window"),J(a,n,e);return}else{console.log("monitor ID",t.label,"serial number",a.calibration);const l=[`left=${t.left}`,`top=${t.top}`,`width=${t.width}`,`height=${t.height}`,"menubar=no","toolbar=no","location=no","status=no","resizable=yes","scrollbars=no","fullscreenEnabled=true"].join(",");a.popup=window.open("","new",l),a.popup&&(a.popup.document.body.style.background="black",a.popup.document.body.appendChild(n),console.assert(e),a.popup.onbeforeunload=e)}}function J(n,a,e){n.popup=window.open("",void 0,"width=640,height=360"),n.popup&&(n.popup.document.title="Looking Glass Window (fullscreen me on Looking Glass!)",n.popup.document.body.style.background="black",n.popup.document.body.appendChild(a),console.assert(e),n.popup.onbeforeunload=e)}function ve(n,a){var e;(e=a.parentElement)==null||e.removeChild(a),n.popup&&(n.popup.onbeforeunload=null,n.popup.close(),n.popup=null)}const X=Symbol("LookingGlassXRWebGLLayer");class we extends ue.default{constructor(a,e,s){super(a,e,s);const t=P();t.appCanvas=e.canvas,t.lkgCanvas=document.createElement("canvas"),t.lkgCanvas.tabIndex=0;const l=t.lkgCanvas.getContext("2d",{alpha:!1});t.lkgCanvas.addEventListener("dblclick",function(){this.requestFullscreen()});const o=this[$.PRIVATE].config,d=e.createTexture();let f,F;const C=e.createFramebuffer(),w=e.getExtension("OES_vertex_array_object"),r=34229,c=w?w.bindVertexArrayOES.bind(w):e.bindVertexArray.bind(e);(o.depth||o.stencil)&&(o.depth&&o.stencil?F={format:e.DEPTH_STENCIL,attachment:e.DEPTH_STENCIL_ATTACHMENT}:o.depth?F={format:e.DEPTH_COMPONENT16,attachment:e.DEPTH_ATTACHMENT}:o.stencil&&(F={format:e.STENCIL_INDEX8,attachment:e.STENCIL_ATTACHMENT}),f=e.createRenderbuffer());const u=(i,_,R,h,T)=>{p(i,_,T.framebufferWidth,T.framebufferHeight),R&&E(i,R,h,T.framebufferWidth,T.framebufferHeight)},p=(i,_,R,h)=>{const T=i.getParameter(i.TEXTURE_BINDING_2D);i.bindTexture(i.TEXTURE_2D,_),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,R,h,0,i.RGBA,i.UNSIGNED_BYTE,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.bindTexture(i.TEXTURE_2D,T)},E=(i,_,R,h,T)=>{const L=i.getParameter(i.RENDERBUFFER_BINDING);i.bindRenderbuffer(i.RENDERBUFFER,_),i.renderbufferStorage(i.RENDERBUFFER,R.format,h,T),i.bindRenderbuffer(i.RENDERBUFFER,L)},A=(i,_,R,h,T,L)=>{const K=i.getParameter(i.FRAMEBUFFER_BINDING);i.bindFramebuffer(i.FRAMEBUFFER,_),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0),(L.depth||L.stencil)&&i.framebufferRenderbuffer(i.FRAMEBUFFER,h.attachment,i.RENDERBUFFER,T),i.bindFramebuffer(i.FRAMEBUFFER,K)};u(e,d,f,F,t),t.addEventListener("on-config-changed",()=>u(e,d,f,F,t)),A(e,C,d,F,f,o);const S=`
		attribute vec2 a_position;
		varying vec2 v_texcoord;
		void main() {
		  gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);
		  v_texcoord = a_position;
		}
	  `;function y(i,_,R){const h=i.createShader(_);return i.shaderSource(h,R),i.compileShader(h),i.getShaderParameter(h,i.COMPILE_STATUS)?h:(console.warn(i.getShaderInfoLog(h)),null)}function m(i,_,R){let h=i.createProgram();const T=y(i,i.VERTEX_SHADER,_),L=y(i,i.FRAGMENT_SHADER,R);return T===null||L===null?(console.error("There was a problem with shader construction"),null):(i.attachShader(h,T),i.attachShader(h,L),i.linkProgram(h),i.getProgramParameter(h,i.LINK_STATUS)?h:(console.warn(i.getProgramInfoLog(h)),null))}let B,M,D,b;const I=(i,_,R)=>{const h=R(_);if(h===M)return;M=h;const T=y(i,i.FRAGMENT_SHADER,h);if(T===null)return;B&&i.deleteShader(B),B=T;const L=m(i,S,h);if(L===null){console.warn("There was a problem with shader construction");return}D=i.getAttribLocation(L,"a_position"),b=i.getUniformLocation(L,"u_viewType");const K=i.getUniformLocation(L,"u_texture"),Me=i.getParameter(i.CURRENT_PROGRAM);i.useProgram(L),i.uniform1i(K,0),i.useProgram(Me),U&&i.deleteProgram(U),U=L};let U=m(e,S,O.Shader(t));U===null&&console.warn("There was a problem with shader construction"),t.addEventListener("on-config-changed",()=>{I(e,t,O.Shader)});const ee=w?w.createVertexArrayOES():e.createVertexArray(),xe=e.createBuffer(),_e=e.getParameter(e.ARRAY_BUFFER_BINDING),Le=e.getParameter(r);c(ee),e.bindBuffer(e.ARRAY_BUFFER,xe),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(D),e.vertexAttribPointer(D,2,e.FLOAT,!1,0,0),c(Le),e.bindBuffer(e.ARRAY_BUFFER,_e);const ke=()=>{console.assert(this[X].LookingGlassEnabled),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer);const i=e.getParameter(e.COLOR_CLEAR_VALUE),_=e.getParameter(e.DEPTH_CLEAR_VALUE),R=e.getParameter(e.STENCIL_CLEAR_VALUE);e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT|e.STENCIL_BUFFER_BIT),e.clearColor(i[0],i[1],i[2],i[3]),e.clearDepth(_),e.clearStencil(R)};function Se(){if(!t.appCanvas||!t.lkgCanvas)return;(t.appCanvas.width!==t.framebufferWidth||t.appCanvas.height!==t.framebufferHeight)&&(t.appCanvas.width,t.appCanvas.height,t.appCanvas.width=t.framebufferWidth,t.appCanvas.height=t.framebufferHeight);const i=Fe();Ae(),Ie(),De(),Be(),Pe(i)}function Pe(i){e.activeTexture(i.activeTexture),e.bindTexture(e.TEXTURE_2D,i.textureBinding),e.useProgram(i.program),e.bindRenderbuffer(e.RENDERBUFFER,i.renderbufferBinding),e.bindFramebuffer(e.FRAMEBUFFER,i.framebufferBinding),i.scissorTest?e.enable(e.SCISSOR_TEST):e.disable(e.SCISSOR_TEST),i.stencilTest?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),i.depthTest?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),i.blend?e.enable(e.BLEND):e.disable(e.BLEND),i.cullFace?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),c(i.VAO)}function Fe(){return{VAO:e.getParameter(e.VERTEX_ARRAY_BINDING),cullFace:e.getParameter(e.CULL_FACE),blend:e.getParameter(e.BLEND),depthTest:e.getParameter(e.DEPTH_TEST),stencilTest:e.getParameter(e.STENCIL_TEST),scissorTest:e.getParameter(e.SCISSOR_TEST),viewport:e.getParameter(e.VIEWPORT),framebufferBinding:e.getParameter(e.FRAMEBUFFER_BINDING),renderbufferBinding:e.getParameter(e.RENDERBUFFER_BINDING),program:e.getParameter(e.CURRENT_PROGRAM),activeTexture:e.getParameter(e.ACTIVE_TEXTURE),textureBinding:e.getParameter(e.TEXTURE_BINDING_2D)}}function Ae(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.useProgram(U),c(ee),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,d),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight)}function Ie(){e.uniform1i(b,0),e.drawArrays(e.TRIANGLES,0,6)}function De(){if(!t.lkgCanvas||!t.appCanvas){console.warn("Looking Glass Canvas is not defined");return}l==null||l.clearRect(0,0,t.lkgCanvas.width,t.lkgCanvas.height),l==null||l.drawImage(t.appCanvas,0,0,t.framebufferWidth,t.framebufferHeight,0,0,t.calibration.screenW.value,t.calibration.screenH.value)}function Be(){if(!t.appCanvas){console.warn("Looking Glass Canvas is not defined");return}t.inlineView!==0&&(t.capturing&&t.appCanvas.width!==t.framebufferWidth&&(t.appCanvas.width=t.framebufferWidth,t.appCanvas.height=t.framebufferHeight,e.viewport(0,0,t.framebufferHeight,t.framebufferWidth)),e.uniform1i(b,t.inlineView),e.drawArrays(e.TRIANGLES,0,6))}window.addEventListener("unload",()=>{t.popup&&t.popup.close(),t.popup=null}),this[X]={LookingGlassEnabled:!1,framebuffer:C,clearFramebuffer:ke,blitTextureToDefaultFramebufferIfNeeded:Se,moveCanvasToWindow:me}}get framebuffer(){return this[X].LookingGlassEnabled?this[X].framebuffer:null}get framebufferWidth(){return P().framebufferWidth}get framebufferHeight(){return P().framebufferHeight}}const W=class extends le.default{constructor(a){super(a),this.sessions=new Map,this.viewSpaces=[],this.basePoseMatrix=g.mat4.create(),this.inlineProjectionMatrix=g.mat4.create(),this.inlineInverseViewMatrix=g.mat4.create(),this.LookingGlassProjectionMatrices=[],this.LookingGlassInverseViewMatrices=[],this.captureScreenshot=!1,this.screenshotCallback=null,W.instance||(W.instance=this)}static getInstance(){return W.instance}onBaseLayerSet(a,e){const s=this.sessions.get(a);s.baseLayer=e;const t=P(),l=e[X];l.LookingGlassEnabled=s.immersive,s.immersive&&(t.XRSession=this.sessions.get(a),t.popup==null?l.moveCanvasToWindow(!0,()=>{this.endSession(a)}):console.warn("attempted to assign baselayer twice?"))}isSessionSupported(a){return a==="inline"||a==="immersive-vr"}isFeatureSupported(a){switch(a){case"viewer":return!0;case"local":return!0;case"local-floor":return!0;case"bounded-floor":return!1;case"unbounded":return!1;default:return console.warn("LookingGlassXRDevice.isFeatureSupported: feature not understood:",a),!1}}async requestSession(a,e){if(!this.isSessionSupported(a))return Promise.reject();const s=a!=="inline",t=new ge(a,e);return this.sessions.set(t.id,t),s&&this.dispatchEvent("@@webxr-polyfill/vr-present-start",t.id),Promise.resolve(t.id)}requestAnimationFrame(a){return this.global.requestAnimationFrame(a)}cancelAnimationFrame(a){this.global.cancelAnimationFrame(a)}onFrameStart(a,e){const s=this.sessions.get(a),t=P();if(s.immersive){const l=Math.tan(.5*t.fovy),o=.5*t.targetDiam/l,d=o-t.targetDiam,f=this.basePoseMatrix;g.mat4.fromTranslation(f,[t.targetX,t.targetY,t.targetZ]),g.mat4.rotate(f,f,t.trackballX,[0,1,0]),g.mat4.rotate(f,f,-t.trackballY,[1,0,0]),g.mat4.translate(f,f,[0,0,o]);for(let C=0;C<t.numViews;++C){const w=(C+.5)/t.numViews-.5,r=Math.tan(t.viewCone*w),c=o*r,u=this.LookingGlassInverseViewMatrices[C]=this.LookingGlassInverseViewMatrices[C]||g.mat4.create();g.mat4.translate(u,f,[c,0,0]),g.mat4.invert(u,u);const p=Math.max(d+e.depthNear,.01),E=d+e.depthFar,A=p*l,S=A,y=-A,m=p*-r,B=t.aspect*A,M=m+B,D=m-B,b=this.LookingGlassProjectionMatrices[C]=this.LookingGlassProjectionMatrices[C]||g.mat4.create();g.mat4.set(b,2*p/(M-D),0,0,0,0,2*p/(S-y),0,0,(M+D)/(M-D),(S+y)/(S-y),-(E+p)/(E-p),-1,0,0,-2*E*p/(E-p),0)}s.baseLayer[X].clearFramebuffer()}else{const l=s.baseLayer.context,o=l.drawingBufferWidth/l.drawingBufferHeight;g.mat4.perspective(this.inlineProjectionMatrix,e.inlineVerticalFieldOfView,o,e.depthNear,e.depthFar),g.mat4.fromTranslation(this.basePoseMatrix,[0,q,0]),g.mat4.invert(this.inlineInverseViewMatrix,this.basePoseMatrix)}}onFrameEnd(a){this.sessions.get(a).baseLayer[X].blitTextureToDefaultFramebufferIfNeeded(),this.captureScreenshot&&this.screenshotCallback&&(this.screenshotCallback(),this.captureScreenshot=!1)}async requestFrameOfReferenceTransform(a,e){const s=g.mat4.create();switch(a){case"viewer":case"local":return g.mat4.fromTranslation(s,[0,-q,0]),s;case"local-floor":return s;default:throw new Error("XRReferenceSpaceType not understood")}}endSession(a){const e=this.sessions.get(a);e.immersive&&e.baseLayer&&(e.baseLayer[X].moveCanvasToWindow(!1),this.dispatchEvent("@@webxr-polyfill/vr-present-end",a)),e.ended=!0}doesSessionSupportReferenceSpace(a,e){const s=this.sessions.get(a);return s.ended?!1:s.enabledFeatures.has(e)}getViewSpaces(a){if(a==="immersive-vr"){const e=P();for(let s=this.viewSpaces.length;s<e.numViews;++s)this.viewSpaces[s]=new Ee(s);return this.viewSpaces.length=e.numViews,this.viewSpaces}}getViewport(a,e,s,t,l){if(l===void 0){const d=this.sessions.get(a).baseLayer.context;t.x=0,t.y=0,t.width=d.drawingBufferWidth,t.height=d.drawingBufferHeight}else{const o=P(),d=l%o.quiltWidth,f=Math.floor(l/o.quiltWidth);t.x=o.framebufferWidth/o.quiltWidth*d,t.y=o.framebufferHeight/o.quiltHeight*f,t.width=o.framebufferWidth/o.quiltWidth,t.height=o.framebufferHeight/o.quiltHeight}return!0}getProjectionMatrix(a,e){return e===void 0?this.inlineProjectionMatrix:this.LookingGlassProjectionMatrices[e]||g.mat4.create()}getBasePoseMatrix(){return this.basePoseMatrix}getBaseViewMatrix(){return this.inlineInverseViewMatrix}_getViewMatrixByIndex(a){return this.LookingGlassInverseViewMatrices[a]=this.LookingGlassInverseViewMatrices[a]||g.mat4.create()}getInputSources(){return[]}getInputPose(a,e,s){return null}onWindowResize(){}};let N=W;x(N,"instance",null);let ye=0;class ge{constructor(a,e){x(this,"mode");x(this,"immersive");x(this,"id");x(this,"baseLayer");x(this,"inlineVerticalFieldOfView");x(this,"ended");x(this,"enabledFeatures");this.mode=a,this.immersive=a==="immersive-vr"||a==="immersive-ar",this.id=++ye,this.baseLayer=null,this.inlineVerticalFieldOfView=Math.PI*.5,this.ended=!1,this.enabledFeatures=e}}class Ee extends ce.default{constructor(e){super();x(this,"viewIndex");this.viewIndex=e}get eye(){return"none"}_onPoseUpdate(e){this._inverseBaseMatrix=e._getViewMatrixByIndex(this.viewIndex)}}class z extends re.default{constructor(e){super();x(this,"vrButton");x(this,"device");x(this,"isPresenting",!1);Q(e),this.loadPolyfill()}static async init(e){new z(e)}async loadPolyfill(){this.overrideDefaultVRButton(),console.warn('Looking Glass WebXR "polyfill" overriding native WebXR API.');for(const e in Z.default)this.global[e]=Z.default[e];this.global.XRWebGLLayer=we,this.injected=!0,this.device=new N(this.global),this.xr=new se.default(Promise.resolve(this.device)),Object.defineProperty(this.global.navigator,"xr",{value:this.xr,configurable:!0})}async overrideDefaultVRButton(){this.vrButton=await Ce("VRButton"),this.vrButton&&this.device?(this.device.addEventListener("@@webxr-polyfill/vr-present-start",()=>{this.isPresenting=!0,this.updateVRButtonUI()}),this.device.addEventListener("@@webxr-polyfill/vr-present-end",()=>{this.isPresenting=!1,this.updateVRButtonUI()}),this.vrButton.addEventListener("click",e=>{this.updateVRButtonUI()}),this.updateVRButtonUI()):console.warn("Unable to find VRButton")}async updateVRButtonUI(){if(this.vrButton){await Re(100),this.isPresenting?this.vrButton.innerHTML="EXIT LOOKING GLASS":this.vrButton.innerHTML="ENTER LOOKING GLASS";const e=220;this.vrButton.style.width=`${e}px`,this.vrButton.style.left=`calc(50% - ${e/2}px)`}}update(e){Q(e)}}async function Ce(n){return new Promise(a=>{const e=new MutationObserver(function(s){s.forEach(function(t){t.addedNodes.forEach(function(l){const o=l;o.id===n&&(a(o),e.disconnect())})})});e.observe(document.body,{subtree:!1,childList:!0}),setTimeout(()=>{e.disconnect(),a(null)},5e3)})}function Re(n){return new Promise(a=>setTimeout(a,n))}const Te=P();v.LookingGlassConfig=Te,v.LookingGlassWebXRPolyfill=z,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
