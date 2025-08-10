import{V as v,B as p,S as x,a as P}from"./index-DuatYoAD.js";const l={vertex:{attributeName:"aVertex",format:"float32x2",code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:"aPosition",format:"float32x2",code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:"aRotation",format:"float32",code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:"aUV",format:"float32x2",code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:"aColor",format:"unorm8x4",code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}},C=new p(0,0,0,0),c=class n extends v{constructor(e={}){e={...n.defaultOptions,...e,dynamicProperties:{...n.defaultOptions.dynamicProperties,...e?.dynamicProperties}};const{dynamicProperties:t,shader:i,roundPixels:r,texture:a,particles:s,...f}=e;super({label:"ParticleContainer",...f}),this.renderPipeId="particle",this.batched=!1,this._childrenDirty=!1,this.texture=a||null,this.shader=i,this._properties={};for(const o in l){const d=l[o],u=t[o];this._properties[o]={...d,dynamic:u}}this.allowChildren=!0,this.roundPixels=r??!1,this.particleChildren=s??[]}addParticle(...e){for(let t=0;t<e.length;t++)this.particleChildren.push(e[t]);return this.onViewUpdate(),e[0]}removeParticle(...e){let t=!1;for(let i=0;i<e.length;i++){const r=this.particleChildren.indexOf(e[i]);r>-1&&(this.particleChildren.splice(r,1),t=!0)}return t&&this.onViewUpdate(),e[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return C}updateBounds(){}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){const i=typeof e=="boolean"?e:e?.textureSource,r=this.texture??this.particleChildren[0]?.texture;r&&r.destroy(i)}this.texture=null,this.shader?.destroy()}removeParticles(e,t){e??(e=0),t??(t=this.particleChildren.length);const i=this.particleChildren.splice(e,t-e);return this.onViewUpdate(),i}removeParticleAt(e){const t=this.particleChildren.splice(e,1);return this.onViewUpdate(),t[0]}addParticleAt(e,t){return this.particleChildren.splice(t,0,e),this.onViewUpdate(),e}addChild(...e){throw new Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()")}removeChild(...e){throw new Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()")}removeChildren(e,t){throw new Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()")}removeChildAt(e){throw new Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()")}getChildAt(e){throw new Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()")}setChildIndex(e,t){throw new Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()")}getChildIndex(e){throw new Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()")}addChildAt(e,t){throw new Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()")}swapChildren(e,t){throw new Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()")}reparentChild(...e){throw new Error("ParticleContainer.reparentChild() is not available with the particle container")}reparentChildAt(e,t){throw new Error("ParticleContainer.reparentChildAt() is not available with the particle container")}};c.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};let m=c;class h{spritePool=[];active=[];container;texture;config;constructor(e,t){this.config=t,this.container=new m({properties:{position:!0,alpha:!0,scale:!1,rotation:!1,uvs:!1}}),e.addChild(this.container),this.texture=h.createCircleTexture(this.config.size,this.config.color)}burst(e,t){for(let i=0;i<this.config.count;i+=1){const r=(Math.random()-.5)*this.config.spread,a=this.config.speed*(.6+Math.random()*.4),s=this.getSprite();s.texture=this.texture,s.alpha=1,s.x=e,s.y=t,s.visible=!0,this.container.addParticle(s),this.active.push({s,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:this.config.lifetime})}}update(e){for(let t=this.active.length-1;t>=0;t-=1){const i=this.active[t];i.life-=e,i.s.x+=i.vx*e,i.s.y+=i.vy*e,i.s.alpha=Math.max(0,i.life/this.config.lifetime),i.life<=0&&this.recycle(t)}}setConfig(e){this.config={...this.config,...e}}getSprite(){return this.spritePool.pop()??new x({texture:this.texture})}recycle(e){const[t]=this.active.splice(e,1);t.s.visible=!1,this.container.removeParticle(t.s),t.s.alpha=1,this.spritePool.push(t.s)}static createCircleTexture(e,t){const i=Math.max(2,Math.ceil(e*2)),r=document.createElement("canvas");r.width=i,r.height=i;const a=r.getContext("2d");return a&&(a.clearRect(0,0,i,i),a.fillStyle=`#${t.toString(16).padStart(6,"0")}`,a.beginPath(),a.arc(i/2,i/2,e,0,Math.PI*2),a.fill()),P.from(r)}}export{h as ParticleEmitter};
