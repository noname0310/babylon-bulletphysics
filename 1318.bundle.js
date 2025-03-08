"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[1318],{1318:(t,e,r)=>{r.r(e),r.d(e,{_TGATextureLoader:()=>s});var a=r(1137);function n(t){let e=0;return{id_length:t[e++],colormap_type:t[e++],image_type:t[e++],colormap_index:t[e++]|t[e++]<<8,colormap_length:t[e++]|t[e++]<<8,colormap_size:t[e++],origin:[t[e++]|t[e++]<<8,t[e++]|t[e++]<<8],width:t[e++]|t[e++]<<8,height:t[e++]|t[e++]<<8,pixel_size:t[e++],flags:t[e++]}}function i(t,e){if(e.length<19)return void a.V.Error("Unable to load TGA file - Not enough data to contain header");let r=18;const i=n(e);if(i.id_length+r>e.length)return void a.V.Error("Unable to load TGA file - Not enough data");r+=i.id_length;let s,h=!1,c=!1,l=!1;switch(i.image_type){case 9:h=!0;case 1:c=!0;break;case 10:h=!0;case 2:break;case 11:h=!0;case 3:l=!0}const g=i.pixel_size>>3,f=i.width*i.height*g;let u,d,b,w,p,_,y;if(c&&(u=e.subarray(r,r+=i.colormap_length*(i.colormap_size>>3))),h){let t,a,n;s=new Uint8Array(f);let i=0;const o=new Uint8Array(g);for(;r<f&&i<f;)if(t=e[r++],a=1+(127&t),128&t){for(n=0;n<g;++n)o[n]=e[r++];for(n=0;n<a;++n)s.set(o,i+n*g);i+=g*a}else{for(a*=g,n=0;n<a;++n)s[i+n]=e[r++];i+=a}}else s=e.subarray(r,r+=c?i.width*i.height:f);switch((48&i.flags)>>4){default:case 2:d=0,w=1,y=i.width,b=0,p=1,_=i.height;break;case 0:d=0,w=1,y=i.width,b=i.height-1,p=-1,_=-1;break;case 3:d=i.width-1,w=-1,y=-1,b=0,p=1,_=i.height;break;case 1:d=i.width-1,w=-1,y=-1,b=i.height-1,p=-1,_=-1}const m="_getImageData"+(l?"Grey":"")+i.pixel_size+"bits",A=o[m](i,u,s,b,p,_,d,w,y);t.getEngine()._uploadDataToTextureDirectly(t,A)}const o={GetTGAHeader:n,UploadContent:i,_getImageData8bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=e,g=t.width,f=t.height;let u,d,b,w=0;const p=new Uint8Array(g*f*4);for(b=a;b!==i;b+=n)for(d=o;d!==h;d+=s,w++)u=c[w],p[4*(d+g*b)+3]=255,p[4*(d+g*b)+2]=l[3*u+0],p[4*(d+g*b)+1]=l[3*u+1],p[4*(d+g*b)+0]=l[3*u+2];return p},_getImageData16bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=t.width,g=t.height;let f,u,d,b=0;const w=new Uint8Array(l*g*4);for(d=a;d!==i;d+=n)for(u=o;u!==h;u+=s,b+=2){f=c[b+0]+(c[b+1]<<8);const t=255*((31744&f)>>10)/31|0,e=255*((992&f)>>5)/31|0,r=255*(31&f)/31|0;w[4*(u+l*d)+0]=t,w[4*(u+l*d)+1]=e,w[4*(u+l*d)+2]=r,w[4*(u+l*d)+3]=32768&f?0:255}return w},_getImageData24bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=t.width,g=t.height;let f,u,d=0;const b=new Uint8Array(l*g*4);for(u=a;u!==i;u+=n)for(f=o;f!==h;f+=s,d+=3)b[4*(f+l*u)+3]=255,b[4*(f+l*u)+2]=c[d+0],b[4*(f+l*u)+1]=c[d+1],b[4*(f+l*u)+0]=c[d+2];return b},_getImageData32bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=t.width,g=t.height;let f,u,d=0;const b=new Uint8Array(l*g*4);for(u=a;u!==i;u+=n)for(f=o;f!==h;f+=s,d+=4)b[4*(f+l*u)+2]=c[d+0],b[4*(f+l*u)+1]=c[d+1],b[4*(f+l*u)+0]=c[d+2],b[4*(f+l*u)+3]=c[d+3];return b},_getImageDataGrey8bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=t.width,g=t.height;let f,u,d,b=0;const w=new Uint8Array(l*g*4);for(d=a;d!==i;d+=n)for(u=o;u!==h;u+=s,b++)f=c[b],w[4*(u+l*d)+0]=f,w[4*(u+l*d)+1]=f,w[4*(u+l*d)+2]=f,w[4*(u+l*d)+3]=255;return w},_getImageDataGrey16bits:function(t,e,r,a,n,i,o,s,h){const c=r,l=t.width,g=t.height;let f,u,d=0;const b=new Uint8Array(l*g*4);for(u=a;u!==i;u+=n)for(f=o;f!==h;f+=s,d+=2)b[4*(f+l*u)+0]=c[d+0],b[4*(f+l*u)+1]=c[d+0],b[4*(f+l*u)+2]=c[d+0],b[4*(f+l*u)+3]=c[d+1];return b}};class s{constructor(){this.supportCascades=!1}loadCubeData(){throw".env not supported in Cube."}loadData(t,e,r){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),o=n(a);r(o.width,o.height,e.generateMipMaps,!1,(()=>{i(e,a)}))}}}}]);