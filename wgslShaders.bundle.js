"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[126],{

/***/ 33723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export backgroundUboDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98327);
// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `uniform vPrimaryColor: vec4f;uniform vPrimaryColorShadow: vec4f;uniform vDiffuseInfos: vec2f;uniform vReflectionInfos: vec2f;uniform diffuseMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform fFovMultiplier: f32;uniform pointSize: f32;uniform shadowLevel: f32;uniform alpha: f32;uniform vBackgroundCenter: vec3f;uniform vReflectionControl: vec4f;uniform projectedGroundInfos: vec2f;
#include<sceneUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const backgroundUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=backgroundUboDeclaration.js.map

/***/ }),

/***/ 40242:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bakedVertexAnimationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bakedVertexAnimation";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
let VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.z;let VATSpeed: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.w;
#else
let VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;
#endif
let totalFrames: f32=VATEndFrame-VATStartFrame+1.0;let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;let frameCorrection: f32=select(1.0,0.0,time<1.0);let numOfFrames: f32=totalFrames-frameCorrection;var VATFrameNum: f32=fract(time)*numOfFrames;VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;VATFrameNum=floor(VATFrameNum);VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;var VATInfluence : mat4x4<f32>;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[0],VATFrameNum)*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[1],VATFrameNum)*vertexInputs.matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[2],VATFrameNum)*vertexInputs.matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[3],VATFrameNum)*vertexInputs.matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[0],VATFrameNum)*vertexInputs.matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[1],VATFrameNum)*vertexInputs.matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[2],VATFrameNum)*vertexInputs.matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[3],VATFrameNum)*vertexInputs.matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bakedVertexAnimationWGSL = { name, shader };
//# sourceMappingURL=bakedVertexAnimation.js.map

/***/ }),

/***/ 98900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bakedVertexAnimationDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bakedVertexAnimationDeclaration";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationTextureSizeInverted: vec2<f32>;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;
#ifdef INSTANCES
attribute bakedVertexAnimationSettingsInstanced : vec4<f32>;
#endif
fn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>
{let offset=i32(index)*4;let frameUV=i32(frame);let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);return mat4x4<f32>(m0,m1,m2,m3);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bakedVertexAnimationDeclarationWGSL = { name, shader };
//# sourceMappingURL=bakedVertexAnimationDeclaration.js.map

/***/ }),

/***/ 32806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesDeclarationWGSL: () => (/* binding */ bonesDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bonesDeclaration";
const shader = `#if NUM_BONE_INFLUENCERS>0
attribute matricesIndices : vec4<f32>;attribute matricesWeights : vec4<f32>;
#if NUM_BONE_INFLUENCERS>4
attribute matricesIndicesExtra : vec4<f32>;attribute matricesWeightsExtra : vec4<f32>;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
var boneSampler : texture_2d<f32>;uniform boneTextureWidth : f32;
#else
uniform mBones : array<mat4x4,BonesPerMesh>;
#ifdef BONES_VELOCITY_ENABLED
uniform mPreviousBones : array<mat4x4,BonesPerMesh>;
#endif
#endif
#ifdef BONETEXTURE
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4<f32>(m0,m1,m2,m3);}
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bonesDeclarationWGSL = { name, shader };
//# sourceMappingURL=bonesDeclaration.js.map

/***/ }),

/***/ 65470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesVertexWGSL: () => (/* binding */ bonesVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bonesVertex";
const shader = `#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[1])*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[2])*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[3])*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[0])*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[1])*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[2])*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[3])*vertexInputs.matricesWeightsExtra[3];
#endif 
#else 
influence=uniforms.mBones[int(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+uniforms.mBones[int(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];
#endif 
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bonesVertexWGSL = { name, shader };
//# sourceMappingURL=bonesVertex.js.map

/***/ }),

/***/ 20727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentWGSL: () => (/* binding */ bumpFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpFragment";
const shader = `var uvOffset: vec2f= vec2f(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
var normalScale: f32=1.0;
#elif defined(BUMP)
var normalScale: f32=uniforms.vBumpInfos.y;
#else
var normalScale: f32=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#elif defined(BUMP)
var TBNUV: vec2f=select(-fragmentInputs.vBumpUV,fragmentInputs.vBumpUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV,uniforms.vTangentSpaceParams);
#else
var TBNUV: vec2f=select(-fragmentInputs.vDetailUV,fragmentInputs.vDetailUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#else
var TBNUV: vec2f=select( -fragmentInputs.vMainUV1,fragmentInputs.vMainUV1,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#endif
#ifdef PARALLAX
var invTBN: mat3x3f=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,fragmentInputs.vBumpUV,uniforms.vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,uniforms.vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
var detailColor: vec4f=textureSample(detailSampler,detailSamplerSampler,fragmentInputs.vDetailUV+uvOffset);var detailNormalRG: vec2f=detailColor.wy*2.0-1.0;var detailNormalB: f32=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));var detailNormal: vec3f= vec3f(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3x3f(uniforms.normalMatrix[0].xyz,uniforms.normalMatrix[1].xyz,uniforms.normalMatrix[2].xyz)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz,uniforms.vBumpInfos.y);
#else
var bumpNormal: vec3f=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);var blendedNormal: vec3f=normalize( vec3f(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);bumpNormal+= vec3f(0.0,0.0,1.0);detailNormal*= vec3f(-1.0,-1.0,1.0);var blendedNormal: vec3f=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,uniforms.vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);normalW=perturbNormalBase(TBN,detailNormal,uniforms.vDetailInfos.z);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bumpFragmentWGSL = { name, shader };
//# sourceMappingURL=bumpFragment.js.map

/***/ }),

/***/ 91258:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentFunctionsWGSL: () => (/* binding */ bumpFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _samplerFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80983);
// Do not edit.


const name = "bumpFragmentFunctions";
const shader = `#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const minSamples: f32=4.;const maxSamples: f32=15.;const iMaxSamples: i32=15;fn parallaxOcclusion(vViewDirCoT: vec3f,vNormalCoT: vec3f,texCoord: vec2f,parallaxScale: f32)->vec2f {var parallaxLimit: f32=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;var vOffsetDir: vec2f=normalize(vViewDirCoT.xy);var vMaxOffset: vec2f=vOffsetDir*parallaxLimit;var numSamples: f32=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));var stepSize: f32=1.0/numSamples;var currRayHeight: f32=1.0;var vCurrOffset: vec2f= vec2f(0,0);var vLastOffset: vec2f= vec2f(0,0);var lastSampledHeight: f32=1.0;var currSampledHeight: f32=1.0;var keepWorking: bool=true;for (var i: i32=0; i<iMaxSamples; i++)
{currSampledHeight=textureSample(bumpSampler,bumpSamplerSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{var delta1: f32=currSampledHeight-currRayHeight;var delta2: f32=(currRayHeight+stepSize)-lastSampledHeight;var ratio: f32=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
fn parallaxOffset(viewDir: vec3f,heightScale: f32)->vec2f
{var height: f32=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).w;var texCoordOffset: vec2f=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bumpFragmentFunctionsWGSL = { name, shader };
//# sourceMappingURL=bumpFragmentFunctions.js.map

/***/ }),

/***/ 15697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentMainFunctionsWGSL: () => (/* binding */ bumpFragmentMainFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpFragmentMainFunctions";
const shader = `#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform normalMatrix: mat4x4f;fn toNormalMatrix(m: mat4x4f)->mat4x4f
{var a00=m[0][0];var a01=m[0][1];var a02=m[0][2];var a03=m[0][3];var a10=m[1][0];var a11=m[1][1];var a12=m[1][2];var a13=m[1][3];var a20=m[2][0]; 
var a21=m[2][1];var a22=m[2][2];var a23=m[2][3];var a30=m[3][0]; 
var a31=m[3][1];var a32=m[3][2];var a33=m[3][3];var b00=a00*a11-a01*a10;var b01=a00*a12-a02*a10;var b02=a00*a13-a03*a10;var b03=a01*a12-a02*a11;var b04=a01*a13-a03*a11;var b05=a02*a13-a03*a12;var b06=a20*a31-a21*a30;var b07=a20*a32-a22*a30;var b08=a20*a33-a23*a30;var b09=a21*a32-a22*a31;var b10=a21*a33-a23*a31;var b11=a22*a33-a23*a32;var det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;var mi=mat4x4<f32>(
(a11*b11-a12*b10+a13*b09)/det,
(a02*b10-a01*b11-a03*b09)/det,
(a31*b05-a32*b04+a33*b03)/det,
(a22*b04-a21*b05-a23*b03)/det,
(a12*b08-a10*b11-a13*b07)/det,
(a00*b11-a02*b08+a03*b07)/det,
(a32*b02-a30*b05-a33*b01)/det,
(a20*b05-a22*b02+a23*b01)/det,
(a10*b10-a11*b08+a13*b06)/det,
(a01*b08-a00*b10-a03*b06)/det,
(a30*b04-a31*b02+a33*b00)/det,
(a21*b02-a20*b04-a23*b00)/det,
(a11*b07-a10*b09-a12*b06)/det,
(a00*b09-a01*b07+a02*b06)/det,
(a31*b01-a30*b03-a32*b00)/det,
(a20*b03-a21*b01+a22*b00)/det);return mat4x4<f32>(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
fn perturbNormalBase(cotangentFrame: mat3x3f,normal: vec3f,scale: f32)->vec3f
{var output=normal;
#ifdef NORMALXYSCALE
output=normalize(output* vec3f(scale,scale,1.0));
#endif
return normalize(cotangentFrame*output);}
fn perturbNormal(cotangentFrame: mat3x3f,textureSample: vec3f,scale: f32)->vec3f
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
fn cotangent_frame(normal: vec3f,p: vec3f,uv: vec2f,tangentSpaceParams: vec2f)->mat3x3f
{var dp1: vec3f=dpdx(p);var dp2: vec3f=dpdy(p);var duv1: vec2f=dpdx(uv);var duv2: vec2f=dpdy(uv);var dp2perp: vec3f=cross(dp2,normal);var dp1perp: vec3f=cross(normal,dp1);var tangent: vec3f=dp2perp*duv1.x+dp1perp*duv2.x;var bitangent: vec3f=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;var det: f32=max(dot(tangent,tangent),dot(bitangent,bitangent));var invmax: f32=select(inverseSqrt(det),0.0,det==0.0);return mat3x3f(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bumpFragmentMainFunctionsWGSL = { name, shader };
//# sourceMappingURL=bumpFragmentMainFunctions.js.map

/***/ }),

/***/ 87921:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bumpVertexWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpVertex";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bumpVertexWGSL = { name, shader };
//# sourceMappingURL=bumpVertex.js.map

/***/ }),

/***/ 97777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bumpVertexDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpVertexDeclaration";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const bumpVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=bumpVertexDeclaration.js.map

/***/ }),

/***/ 97715:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneFragmentWGSL: () => (/* binding */ clipPlaneFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneFragment";
const shader = `#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fragmentInputs.fClipDistance>0.0)
{discard;}
#endif
#ifdef CLIPPLANE2
else if (fragmentInputs.fClipDistance2>0.0)
{discard;}
#endif
#ifdef CLIPPLANE3
else if (fragmentInputs.fClipDistance3>0.0)
{discard;}
#endif
#ifdef CLIPPLANE4
else if (fragmentInputs.fClipDistance4>0.0)
{discard;}
#endif
#ifdef CLIPPLANE5
else if (fragmentInputs.fClipDistance5>0.0)
{discard;}
#endif
#ifdef CLIPPLANE6
else if (fragmentInputs.fClipDistance6>0.0)
{discard;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const clipPlaneFragmentWGSL = { name, shader };
//# sourceMappingURL=clipPlaneFragment.js.map

/***/ }),

/***/ 39759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneFragmentDeclarationWGSL: () => (/* binding */ clipPlaneFragmentDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneFragmentDeclaration";
const shader = `#ifdef CLIPPLANE
varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
varying fClipDistance6: f32;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const clipPlaneFragmentDeclarationWGSL = { name, shader };
//# sourceMappingURL=clipPlaneFragmentDeclaration.js.map

/***/ }),

/***/ 85197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneVertexWGSL: () => (/* binding */ clipPlaneVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneVertex";
const shader = `#ifdef CLIPPLANE
vertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);
#endif
#ifdef CLIPPLANE2
vertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);
#endif
#ifdef CLIPPLANE3
vertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);
#endif
#ifdef CLIPPLANE4
vertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);
#endif
#ifdef CLIPPLANE5
vertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);
#endif
#ifdef CLIPPLANE6
vertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const clipPlaneVertexWGSL = { name, shader };
//# sourceMappingURL=clipPlaneVertex.js.map

/***/ }),

/***/ 77029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneVertexDeclarationWGSL: () => (/* binding */ clipPlaneVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneVertexDeclaration";
const shader = `#ifdef CLIPPLANE
uniform vClipPlane: vec4<f32>;varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
uniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
uniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
uniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
uniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
uniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const clipPlaneVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=clipPlaneVertexDeclaration.js.map

/***/ }),

/***/ 49306:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export decalFragmentWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "decalFragment";
const shader = `#ifdef DECAL
var decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;
#ifdef GAMMADECAL
decalTempColor=toLinearSpaceVec3(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalTempAlpha=decalColor.a*decalColor.a;
#endif
surfaceAlbedo=mix(surfaceAlbedo.rgb,decalTempColor,decalTempAlpha);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const decalFragmentWGSL = { name, shader };
//# sourceMappingURL=decalFragment.js.map

/***/ }),

/***/ 71698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export defaultUboDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98327);
/* harmony import */ var _meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6874);
// Do not edit.



const name = "defaultUboDeclaration";
const shader = `uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f;uniform emissiveRightColor: vec4f;uniform vDiffuseInfos: vec2f;uniform vAmbientInfos: vec2f;uniform vOpacityInfos: vec2f;uniform vReflectionInfos: vec2f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vSpecularInfos: vec2f;uniform vBumpInfos: vec3f;uniform diffuseMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform specularMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform pointSize: f32;uniform alphaCutOff: f32;uniform refractionMatrix: mat4x4f;uniform vRefractionInfos: vec4f;uniform vRefractionPosition: vec3f;uniform vRefractionSize: vec3f;uniform vSpecularColor: vec4f;uniform vEmissiveColor: vec3f;uniform vDiffuseColor: vec4f;uniform vAmbientColor: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const defaultUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=defaultUboDeclaration.js.map

/***/ }),

/***/ 59104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export depthPrePassWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
fragmentOutputs.color= vec4f(0.,0.,0.,1.0);return fragmentOutputs;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const depthPrePassWGSL = { name, shader };
//# sourceMappingURL=depthPrePass.js.map

/***/ }),

/***/ 93243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogFragmentWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogFragment";
const shader = `#ifdef FOG
var fog: f32=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const fogFragmentWGSL = { name, shader };
//# sourceMappingURL=fogFragment.js.map

/***/ }),

/***/ 66407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fogFragmentDeclarationWGSL: () => (/* binding */ fogFragmentDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogFragmentDeclaration";
const shader = `#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
const E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32
{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)
{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}
else if (FOGMODE_EXP==uniforms.vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}
else if (FOGMODE_EXP2==uniforms.vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}
return clamp(fogCoeff,0.0,1.0);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const fogFragmentDeclarationWGSL = { name, shader };
//# sourceMappingURL=fogFragmentDeclaration.js.map

/***/ }),

/***/ 59013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogVertexWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogVertex";
const shader = `#ifdef FOG
#ifdef SCENE_UBO
vertexOutputs.vFogDistance=(scene.view*worldPos).xyz;
#else
vertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const fogVertexWGSL = { name, shader };
//# sourceMappingURL=fogVertex.js.map

/***/ }),

/***/ 75757:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogVertexDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogVertexDeclaration";
const shader = `#ifdef FOG
varying vFogDistance: vec3f;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const fogVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=fogVertexDeclaration.js.map

/***/ }),

/***/ 30976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fresnelFunctionWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fresnelFunction";
const shader = `#ifdef FRESNEL
fn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32
{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const fresnelFunctionWGSL = { name, shader };
//# sourceMappingURL=fresnelFunction.js.map

/***/ }),

/***/ 22886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gaussianSplattingVertexDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gaussianSplattingVertexDeclaration";
const shader = `attribute position: vec2f;
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const gaussianSplattingVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=gaussianSplattingVertexDeclaration.js.map

/***/ }),

/***/ 45978:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export harmonicsFunctionsWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "harmonicsFunctions";
const shader = `#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
fn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00
+ uniforms.vSphericalL1_1*(normal.y)
+ uniforms.vSphericalL10*(normal.z)
+ uniforms.vSphericalL11*(normal.x)
+ uniforms.vSphericalL2_2*(normal.y*normal.x)
+ uniforms.vSphericalL2_1*(normal.y*normal.z)
+ uniforms.vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ uniforms.vSphericalL21*(normal.z*normal.x)
+ uniforms.vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
fn computeEnvironmentIrradiance(normal: vec3f)->vec3f {var Nx: f32=normal.x;var Ny: f32=normal.y;var Nz: f32=normal.z;var C1: vec3f=uniforms.vSphericalZZ.rgb;var Cx: vec3f=uniforms.vSphericalX.rgb;var Cy: vec3f=uniforms.vSphericalY.rgb;var Cz: vec3f=uniforms.vSphericalZ.rgb;var Cxx_zz: vec3f=uniforms.vSphericalXX_ZZ.rgb;var Cyy_zz: vec3f=uniforms.vSphericalYY_ZZ.rgb;var Cxy: vec3f=uniforms.vSphericalXY.rgb;var Cyz: vec3f=uniforms.vSphericalYZ.rgb;var Czx: vec3f=uniforms.vSphericalZX.rgb;var a1: vec3f=Cyy_zz*Ny+Cy;var a2: vec3f=Cyz*Nz+a1;var b1: vec3f=Czx*Nz+Cx;var b2: vec3f=Cxy*Ny+b1;var b3: vec3f=Cxx_zz*Nx+b2;var t1: vec3f=Cz *Nz+C1;var t2: vec3f=a2 *Ny+t1;var t3: vec3f=b3 *Nx+t2;return t3;}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const harmonicsFunctionsWGSL = { name, shader };
//# sourceMappingURL=harmonicsFunctions.js.map

/***/ }),

/***/ 58866:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hdrFilteringFunctionsWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrFilteringFunctions";
const shader = `#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
fn radicalInverse_VdC(value: u32)->f32 
{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return f32(bits)*2.3283064365386963e-10; }
fn hammersley(i: u32,N: u32)->vec2f
{return vec2f( f32(i)/ f32(N),radicalInverse_VdC(i));}
fn log4(x: f32)->f32 {return log2(x)/2.;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
const NUM_SAMPLES_FLOAT: f32= f32(NUM_SAMPLES);const NUM_SAMPLES_FLOAT_INVERSED: f32=1./NUM_SAMPLES_FLOAT;const K: f32=4.;fn irradiance(inputTexture: texture_cube<f32>,inputSampler: sampler,inputN: vec3f,filteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>,icdfSamplerSampler: sampler
#endif
)->vec3f
{var n: vec3f=normalize(inputN);var result: vec3f= vec3f(0.0);
#ifndef IBL_CDF_FILTERING
var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);
#endif
var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);
#ifdef IBL_CDF_FILTERING
var T: vec2f;T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(T.x,Xi.y),0.0).y;var Ls: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));var NoL: f32=dot(n,Ls);
#else
var Ls: vec3f=hemisphereCosSample(Xi);Ls=normalize(Ls);var Ns: vec3f= vec3f(0.,0.,1.);var NoL: f32=dot(Ns,Ls);
#endif
if (NoL>0.) {
#ifdef IBL_CDF_FILTERING
var pdf: f32=textureSampleLevel(icdfSampler,icdfSamplerSampler,T,0.0).z;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,Ls,0.0).rgb;
#else
var pdf_inversed: f32=PI/NoL;var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp(l,0.0,maxLevel);var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*Ls,mipLevel).rgb;
#endif
#ifdef GAMMA_INPUT
c=toLinearSpaceVec3(c);
#endif
#ifdef IBL_CDF_FILTERING
var light: vec3f=vec3f(0.0);if (pdf>1e-6) {light=vec3f(1.0)/vec3f(pdf)*c;}
result+=NoL*light;
#else
result+=c;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;return result;}
fn radiance(alphaG: f32,inputTexture: texture_cube<f32>,inputSampler: sampler,inputN: vec3f,filteringInfo: vec2f)->vec3f
{var n: vec3f=normalize(inputN);var c: vec3f=textureSample(inputTexture,inputSampler,n).rgb; 
if (alphaG==0.) {
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {var result: vec3f= vec3f(0.);var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);var weight: f32=0.;for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);var H: vec3f=hemisphereImportanceSampleDggx(Xi,alphaG);var NoV: f32=1.;var NoH: f32=H.z;var NoH2: f32=H.z*H.z;var NoL: f32=2.*NoH2-1.;var L: vec3f= vec3f(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {var pdf_inversed: f32=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp( f32(l),0.0,maxLevel);weight+=NoL;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const hdrFilteringFunctionsWGSL = { name, shader };
//# sourceMappingURL=hdrFilteringFunctions.js.map

/***/ }),

/***/ 79702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   helperFunctionsWGSL: () => (/* binding */ helperFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "helperFunctions";
const shader = `const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF_MIN: f32=5.96046448e-08; 
const LinearEncodePowerApprox: f32=2.2;const GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;const LuminanceEncodeApprox: vec3f=vec3f(0.2126,0.7152,0.0722);const Epsilon:f32=0.0000001;fn square(x: f32)->f32 {return x*x;}
fn saturate(x: f32)->f32 {return clamp(x,0.0,1.0);}
fn saturateVec3(x: vec3f)->vec3f {return clamp(x,vec3f(),vec3f(1.0));}
fn saturateEps(x: f32)->f32 {return clamp(x,Epsilon,1.0);}
fn maxEps(x: f32)->f32 {return max(x,Epsilon);}
fn maxEpsVec3(x: vec3f)->vec3f {return max(x,vec3f(Epsilon));}
fn absEps(x: f32)->f32 {return abs(x)+Epsilon;}
fn transposeMat3(inMatrix: mat3x3f)->mat3x3f {let i0: vec3f=inMatrix[0];let i1: vec3f=inMatrix[1];let i2: vec3f=inMatrix[2];let outMatrix:mat3x3f=mat3x3f(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);return outMatrix;}
fn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,
b11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,
b21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}
#if USE_EXACT_SRGB_CONVERSIONS
fn toLinearSpaceExact(color: vec3f)->vec3f
{let nearZeroSection: vec3f=0.0773993808*color;let remainingSection: vec3f=pow(0.947867299*(color+vec3f(0.055)),vec3f(2.4));return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3f(0.04045)));}
fn toGammaSpaceExact(color: vec3f)->vec3f
{let nearZeroSection: vec3f=12.92*color;let remainingSection: vec3f=1.055*pow(color,vec3f(0.41666))-vec3f(0.055);return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3f(0.0031308)));}
#endif
fn toLinearSpace(color: f32)->f32
{
#if USE_EXACT_SRGB_CONVERSIONS
var nearZeroSection=0.0773993808*color;var remainingSection=pow(0.947867299*(color+0.055),2.4);return select(remainingSection,nearZeroSection,color<=0.04045);
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
fn toLinearSpaceVec3(color: vec3f)->vec3f
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3f(LinearEncodePowerApprox));
#endif
}
fn toLinearSpaceVec4(color: vec4<f32>)->vec4<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4f(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4f(pow(color.rgb,vec3f(LinearEncodePowerApprox)),color.a);
#endif
}
fn toGammaSpace(color: vec4<f32>)->vec4<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4<f32>(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4<f32>(pow(color.rgb,vec3f(GammaEncodePowerApprox)),color.a);
#endif
}
fn toGammaSpaceVec3(color: vec3f)->vec3f
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3f(GammaEncodePowerApprox));
#endif
}
fn squareVec3(value: vec3f)->vec3f
{return value*value;}
fn pow5(value: f32)->f32 {let sq: f32=value*value;return sq*sq*value;}
fn getLuminance(color: vec3f)->f32
{return saturate(dot(color,LuminanceEncodeApprox));}
fn getRand(seed: vec2<f32>)->f32 {return fract(sin(dot(seed.xy ,vec2<f32>(12.9898,78.233)))*43758.5453);}
fn dither(seed: vec2<f32>,varianceAmount: f32)->f32 {let rand: f32=getRand(seed);let normVariance: f32=varianceAmount/255.0;let dither: f32=mix(-normVariance,normVariance,rand);return dither;}
const rgbdMaxRange: f32=255.0;fn toRGBD(color: vec3f)->vec4<f32> {let maxRGB: f32=max(max(color.r,max(color.g,color.b)),Epsilon);var D: f32 =max(rgbdMaxRange/maxRGB,1.);D =clamp(floor(D)/255.0,0.,1.);var rgb: vec3f =color.rgb*D;rgb=toGammaSpaceVec3(rgb);return vec4<f32>(saturateVec3(rgb),D);}
fn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}
fn parallaxCorrectNormal(vertexPos: vec3f,origVec: vec3f,cubeSize: vec3f,cubePos: vec3f)->vec3f {let invOrigVec: vec3f=vec3f(1.)/origVec;let halfSize: vec3f=cubeSize*0.5;let intersecAtMaxPlane: vec3f=(cubePos+halfSize-vertexPos)*invOrigVec;let intersecAtMinPlane: vec3f=(cubePos-halfSize-vertexPos)*invOrigVec;let largestIntersec: vec3f=max(intersecAtMaxPlane,intersecAtMinPlane);let distance: f32=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);let intersectPositionWS: vec3f=vertexPos+origVec*distance;return intersectPositionWS-cubePos;}
fn equirectangularToCubemapDirection(uv : vec2f)->vec3f {var longitude : f32=uv.x*TWO_PI-PI;var latitude : f32=HALF_PI-uv.y*PI;var direction : vec3f;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
fn sqrtClamped(value: f32)->f32 {return sqrt(max(value,0.));}
fn avg(value: vec3f)->f32 {return dot(value,vec3f(0.333333333));}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const helperFunctionsWGSL = { name, shader };
//# sourceMappingURL=helperFunctions.js.map

/***/ }),

/***/ 16205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingDeclarationWGSL: () => (/* binding */ imageProcessingDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "imageProcessingDeclaration";
const shader = `#ifdef EXPOSURE
uniform exposureLinear: f32;
#endif
#ifdef CONTRAST
uniform contrast: f32;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vInverseScreenSize: vec2f;
#endif
#ifdef VIGNETTE
uniform vignetteSettings1: vec4f;uniform vignetteSettings2: vec4f;
#endif
#ifdef COLORCURVES
uniform vCameraColorCurveNegative: vec4f;uniform vCameraColorCurveNeutral: vec4f;uniform vCameraColorCurvePositive: vec4f;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
var txColorTransformSampler: sampler;var txColorTransform: texture_3d<f32>;
#else
var txColorTransformSampler: sampler;var txColorTransform: texture_2d<f32>;
#endif
uniform colorTransformSettings: vec4f;
#endif
#ifdef DITHER
uniform ditherIntensity: f32;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const imageProcessingDeclarationWGSL = { name, shader };
//# sourceMappingURL=imageProcessingDeclaration.js.map

/***/ }),

/***/ 88996:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingFunctionsWGSL: () => (/* binding */ imageProcessingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "imageProcessingFunctions";
const shader = `#if TONEMAPPING==3
const PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;result-=offset;var peak: f32=max(result.r,max(result.g,result.b));if (peak<PBRNeutralStartCompression) {return result;}
var d: f32=1.-PBRNeutralStartCompression;var newPeak: f32=1.-d*d/(peak+d-PBRNeutralStartCompression);result*=newPeak/peak;var g: f32=1.-1./(PBRNeutralDesaturation*(peak-newPeak)+1.);return mix(result,newPeak* vec3f(1,1,1),g);}
#endif
#if TONEMAPPING==2
const ACESInputMat: mat3x3f= mat3x3f(
vec3f(0.59719,0.07600,0.02840),
vec3f(0.35458,0.90834,0.13383),
vec3f(0.04823,0.01566,0.83777)
);const ACESOutputMat: mat3x3f= mat3x3f(
vec3f( 1.60475,-0.10208,-0.00327),
vec3f(-0.53108, 1.10813,-0.07276),
vec3f(-0.07367,-0.00605, 1.07602)
);fn RRTAndODTFit(v: vec3f)->vec3f
{var a: vec3f=v*(v+0.0245786)-0.000090537;var b: vec3f=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
fn ACESFitted(color: vec3f)->vec3f
{var output=ACESInputMat*color;output=RRTAndODTFit(output);output=ACESOutputMat*output;output=saturateVec3(output);return output;}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
fn applyImageProcessing(result: vec4f)->vec4f {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
var rgb=result.rgb;;
#ifdef EXPOSURE
rgb*=uniforms.exposureLinear;
#endif
#ifdef VIGNETTE
var viewportXY: vec2f=fragmentInputs.position.xy*uniforms.vInverseScreenSize;viewportXY=viewportXY*2.0-1.0;var vignetteXY1: vec3f= vec3f(viewportXY*uniforms.vignetteSettings1.xy+uniforms.vignetteSettings1.zw,1.0);var vignetteTerm: f32=dot(vignetteXY1,vignetteXY1);var vignette: f32=pow(vignetteTerm,uniforms.vignetteSettings2.w);var vignetteColor: vec3f=uniforms.vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
var vignetteColorMultiplier: vec3f=mix(vignetteColor, vec3f(1,1,1),vignette);rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
rgb=mix(vignetteColor,rgb,vignette);
#endif
#endif
#if TONEMAPPING==3
rgb=PBRNeutralToneMapping(rgb);
#elif TONEMAPPING==2
rgb=ACESFitted(rgb);
#elif TONEMAPPING==1
const tonemappingCalibration: f32=1.590579;rgb=1.0-exp2(-tonemappingCalibration*rgb);
#endif
rgb=toGammaSpaceVec3(rgb);rgb=saturateVec3(rgb);
#ifdef CONTRAST
var resultHighContrast: vec3f=rgb*rgb*(3.0-2.0*rgb);if (uniforms.contrast<1.0) {rgb=mix( vec3f(0.5,0.5,0.5),rgb,uniforms.contrast);} else {rgb=mix(rgb,resultHighContrast,uniforms.contrast-1.0);}
#endif
#ifdef COLORGRADING
var colorTransformInput: vec3f=rgb*uniforms.colorTransformSettings.xxx+uniforms.colorTransformSettings.yyy;
#ifdef COLORGRADING3D
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput).rgb;
#else
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput,uniforms.colorTransformSettings.yz).rgb;
#endif
rgb=mix(rgb,colorTransformOutput,uniforms.colorTransformSettings.www);
#endif
#ifdef COLORCURVES
var luma: f32=getLuminance(rgb);var curveMix: vec2f=clamp( vec2f(luma*3.0-1.5,luma*-3.0+1.5), vec2f(0.0), vec2f(1.0));var colorCurve: vec4f=uniforms.vCameraColorCurveNeutral+curveMix.x*uniforms.vCameraColorCurvePositive-curveMix.y*uniforms.vCameraColorCurveNegative;rgb*=colorCurve.rgb;rgb=mix( vec3f(luma),rgb,colorCurve.a);
#endif
#ifdef DITHER
var rand: f32=getRand(fragmentInputs.position.xy*uniforms.vInverseScreenSize);var dither: f32=mix(-uniforms.ditherIntensity,uniforms.ditherIntensity,rand);rgb=saturateVec3(rgb+ vec3f(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return vec4f(rgb,result.a);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const imageProcessingFunctionsWGSL = { name, shader };
//# sourceMappingURL=imageProcessingFunctions.js.map

/***/ }),

/***/ 75136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export importanceSamplingWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "importanceSampling";
const shader = `fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDggx(u: vec2f,a: f32)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDCharlie(u: vec2f,a: f32)->vec3f { 
var phi: f32=2.*PI*u.x;var sinTheta: f32=pow(u.y,a/(2.*a+1.));var cosTheta: f32=sqrt(1.-sinTheta*sinTheta);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const importanceSamplingWGSL = { name, shader };
//# sourceMappingURL=importanceSampling.js.map

/***/ }),

/***/ 44559:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export instancesDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "instancesDeclaration";
const shader = `#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#ifdef INSTANCESCOLOR
attribute instanceColor : vec4<f32>;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;
#ifdef THIN_INSTANCES
uniform previousWorld : mat4x4<f32>;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform previousWorld : mat4x4<f32>;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const instancesDeclarationWGSL = { name, shader };
//# sourceMappingURL=instancesDeclaration.js.map

/***/ }),

/***/ 91277:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export instancesVertexWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "instancesVertex";
const shader = `#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=mat4x4<f32>(
vertexInputs.previousWorld0,vertexInputs.previousWorld1,
vertexInputs.previousWorld2,vertexInputs.previousWorld3);
#endif
#ifdef THIN_INSTANCES
#if !defined(WORLD_UBO)
finalWorld=uniforms.world*finalWorld;
#else
finalWorld=mesh.world*finalWorld;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
var finalWorld=uniforms.world;
#else
var finalWorld=mesh.world;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=uniforms.previousWorld;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const instancesVertexWGSL = { name, shader };
//# sourceMappingURL=instancesVertex.js.map

/***/ }),

/***/ 52383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export kernelBlurVaryingDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "kernelBlurVaryingDeclaration";
const shader = `varying sampleCoord{X}: vec2f;`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const kernelBlurVaryingDeclarationWGSL = { name, shader };
//# sourceMappingURL=kernelBlurVaryingDeclaration.js.map

/***/ }),

/***/ 25271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragmentWGSL: () => (/* binding */ lightFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightFragment";
const shader = `#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
var diffuse{X}: vec4f=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif 
#endif 
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,diffuse{X}.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,diffuse{X}.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
#ifdef IESLIGHTTEXTURE{X}
info=computeIESSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif 
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},projectionLightTexture{X}Sampler,uniforms.textureProjectionMatrix{X},fragmentInputs.vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSMDEBUG{X}
var shadowDebug{X}: vec3f;
#endif
#ifdef SHADOWCSM{X}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
var index{X}: i32=-1;
#else
var index{X}: i32=SHADOWCSMNUM_CASCADES{X}-1;
#endif
var diff{X}: f32=0.;vPositionFromLight{X}[0]=fragmentInputs.vPositionFromLight{X}_0;vPositionFromLight{X}[1]=fragmentInputs.vPositionFromLight{X}_1;vPositionFromLight{X}[2]=fragmentInputs.vPositionFromLight{X}_2;vPositionFromLight{X}[3]=fragmentInputs.vPositionFromLight{X}_3;vDepthMetric{X}[0]=fragmentInputs.vDepthMetric{X}_0;vDepthMetric{X}[1]=fragmentInputs.vDepthMetric{X}_1;vDepthMetric{X}[2]=fragmentInputs.vDepthMetric{X}_2;vDepthMetric{X}[3]=fragmentInputs.vDepthMetric{X}_3;for (var i:i32=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=uniforms.viewFrustumZ{X}[i]+fragmentInputs.vPositionFromCamera{X}.z;
#else
diff{X}=uniforms.viewFrustumZ{X}[i]-fragmentInputs.vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3f(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
var frustumLength:f32=uniforms.frustumLengths{X}[index{X}];var diffRatio:f32=clamp(diff{X}/frustumLength,0.,1.)*uniforms.cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;var nextShadow: f32=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],,shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
aggShadow+=shadow;numLights+=1.0;
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const lightFragmentWGSL = { name, shader };
//# sourceMappingURL=lightFragment.js.map

/***/ }),

/***/ 30379:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightUboDeclarationWGSL: () => (/* binding */ lightUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightUboDeclaration";
const shader = `#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef IESLIGHTTEXTURE{X}
var iesLightTexture{X}Sampler: sampler;var iesLightTexture{X}: texture_2d<f32>;
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform textureProjectionMatrix{X}: mat4x4f;var projectionLightTexture{X}Sampler: sampler;var projectionLightTexture{X}: texture_2d<f32>;
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;uniform viewFrustumZ{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform frustumLengths{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform cascadeBlendFactor{X}: f32;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;var<private> vPositionFromLight{X}: array<vec4f,4>;var<private> vDepthMetric{X} : array<f32,4>;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d_array;var depthTexture{X}Sampler: sampler;var depthTexture{X}: texture_2d_array<f32>;uniform lightSizeUVCorrection{X}: array<vec2f,SHADOWCSMNUM_CASCADES{X}>;uniform depthCorrection{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform penumbraDarkness{X}: f32;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d_array;
#else 
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d_array<f32>;
#endif
#ifdef SHADOWCSMDEBUG{X}
const vCascadeColorsMultiplier{X}: array<vec3f,8>=array<vec3f,8>
(
vec3f ( 1.5,0.0,0.0 ),
vec3f ( 0.0,1.5,0.0 ),
vec3f ( 0.0,0.0,5.5 ),
vec3f ( 1.5,0.0,5.5 ),
vec3f ( 1.5,1.5,0.0 ),
vec3f ( 1.0,1.0,1.0 ),
vec3f ( 0.0,1.0,5.5 ),
vec3f ( 0.5,3.5,0.75 )
);
#endif
#elif defined(SHADOWCUBE{X})
var shadowTexture{X}Sampler: sampler;var shadowTexture{X}: texture_cube<f32>;
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d;var depthTexture{X}Sampler: sampler; 
var depthTexture{X}: texture_2d<f32>;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d;
#else
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d<f32>;
#endif
uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const lightUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=lightUboDeclaration.js.map

/***/ }),

/***/ 3925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxUboDeclarationWGSL: () => (/* binding */ lightVxUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightVxUboDeclaration";
const shader = `#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const lightVxUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=lightVxUboDeclaration.js.map

/***/ }),

/***/ 76493:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightsFragmentFunctionsWGSL: () => (/* binding */ lightsFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightsFragmentFunctions";
const shader = `struct lightingInfo
{diffuse: vec3f,
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef NDOTL
ndl: f32,
#endif
};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;var lightVectorW: vec3f;var attenuation: f32=1.0;if (lightData.w==0.)
{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var attenuation: f32=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn getAttenuation(cosAngle: f32,exponent: f32)->f32 {return max(0.,pow(cosAngle,exponent));}
fn getIESAttenuation(cosAngle: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->f32 {var angle=acos(cosAngle)/PI;return textureSampleLevel(iesLightTexture,iesLightTextureSampler,vec2f(angle,0),0.).r;}
fn computeBasicSpotLighting(viewDirectionW: vec3f,lightVectorW: vec3f,vNormal: vec3f,attenuation: f32,diffuseColor: vec3f,specularColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn computeIESSpotLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var dotProduct=dot(lightDirection.xyz,-lightVectorW);var cosAngle: f32=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{attenuation*=getIESAttenuation(dotProduct,iesLightTexture,iesLightTextureSampler);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeSpotLighting(viewDirectionW: vec3f,vNormal: vec3f ,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var cosAngle: f32=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{attenuation*=getAttenuation(cosAngle,lightData.w);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeHemisphericLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,groundColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightData.xyz);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f {var strq: vec4f=textureProjectionMatrix*vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return textureColor;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const lightsFragmentFunctionsWGSL = { name, shader };
//# sourceMappingURL=lightsFragmentFunctions.js.map

/***/ }),

/***/ 93226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthDeclaration";
const shader = `#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const logDepthDeclarationWGSL = { name, shader };
//# sourceMappingURL=logDepthDeclaration.js.map

/***/ }),

/***/ 38780:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthFragmentWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthFragment";
const shader = `#ifdef LOGARITHMICDEPTH
fragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const logDepthFragmentWGSL = { name, shader };
//# sourceMappingURL=logDepthFragment.js.map

/***/ }),

/***/ 81482:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthVertexWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthVertex";
const shader = `#ifdef LOGARITHMICDEPTH
vertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const logDepthVertexWGSL = { name, shader };
//# sourceMappingURL=logDepthVertex.js.map

/***/ }),

/***/ 41861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export mainUVVaryingDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const mainUVVaryingDeclarationWGSL = { name, shader };
//# sourceMappingURL=mainUVVaryingDeclaration.js.map

/***/ }),

/***/ 6874:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export meshUboDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUboDeclaration";
const shader = `struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const meshUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=meshUboDeclaration.js.map

/***/ }),

/***/ 9129:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexWGSL: () => (/* binding */ morphTargetsVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertex";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (i>=uniforms.morphTargetCount) {break;}
vertexID=f32(vertexInputs.vertexIndex)*uniforms.morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vertexInputs.position)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vertexInputs.normal)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv2)*uniforms.morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(vertexInputs.position{X}-vertexInputs.position)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(vertexInputs.normal{X}-vertexInputs.normal)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(vertexInputs.uv_{X}-vertexInputs.uv)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vertexInputs.uv2)*uniforms.morphTargetInfluences[{X}];
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const morphTargetsVertexWGSL = { name, shader };
//# sourceMappingURL=morphTargetsVertex.js.map

/***/ }),

/***/ 8217:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexDeclarationWGSL: () => (/* binding */ morphTargetsVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexDeclaration";
const shader = `#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute position{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#ifdef MORPHTARGETS_UV2
attribute uv2_{X} : vec2<f32>;
#endif
#elif {X}==0
uniform morphTargetCount: i32;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const morphTargetsVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=morphTargetsVertexDeclaration.js.map

/***/ }),

/***/ 18258:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobalWGSL: () => (/* binding */ morphTargetsVertexGlobalWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexGlobal";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
var vertexID : f32;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const morphTargetsVertexGlobalWGSL = { name, shader };
//# sourceMappingURL=morphTargetsVertexGlobal.js.map

/***/ }),

/***/ 76340:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobalDeclarationWGSL: () => (/* binding */ morphTargetsVertexGlobalDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexGlobalDeclaration";
const shader = `#ifdef MORPHTARGETS
uniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;
#ifdef MORPHTARGETS_TEXTURE 
uniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f32>;var morphTargetsSampler : sampler;fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0).xyz;}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const morphTargetsVertexGlobalDeclarationWGSL = { name, shader };
//# sourceMappingURL=morphTargetsVertexGlobalDeclaration.js.map

/***/ }),

/***/ 18639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oitDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#define MAX_DEPTH 99999.0
var oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const oitDeclarationWGSL = { name, shader };
//# sourceMappingURL=oitDeclaration.js.map

/***/ }),

/***/ 91347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oitFragmentWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
var fragDepth: f32=fragmentInputs.position.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
var halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;
#endif
var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var lastDepth: vec2f=textureLoad(oitDepthSampler,fragCoord,0).rg;var lastFrontColor: vec4f=textureLoad(oitFrontColorSampler,fragCoord,0);fragmentOutputs.depth=vec2f(-MAX_DEPTH);fragmentOutputs.frontColor=lastFrontColor;fragmentOutputs.backColor= vec4f(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
var furthestDepth: f32=-lastDepth.x;var nearestDepth: f32=lastDepth.y;
#else
var nearestDepth: f32=-lastDepth.x;var furthestDepth: f32=lastDepth.y;
#endif
var alphaMultiplier: f32=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return fragmentOutputs;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
fragmentOutputs.depth=vec2f(-fragDepth,fragDepth);return fragmentOutputs;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const oitFragmentWGSL = { name, shader };
//# sourceMappingURL=oitFragment.js.map

/***/ }),

/***/ 5543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packingFunctionsWGSL: () => (/* binding */ packingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "packingFunctions";
const shader = `fn pack(depth: f32)->vec4f
{const bit_shift: vec4f= vec4f(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const bit_mask: vec4f= vec4f(0.0,1.0/255.0,1.0/255.0,1.0/255.0);var res: vec4f=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const packingFunctionsWGSL = { name, shader };
//# sourceMappingURL=packingFunctions.js.map

/***/ }),

/***/ 75052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export pbrBRDFFunctionsWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "pbrBRDFFunctions";
const shader = `#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#ifdef MS_BRDF_ENERGY_CONSERVATION
fn getEnergyConservationFactor(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);}
#endif
#ifdef ENVIRONMENTBRDF
fn getBRDFLookup(NdotV: f32,perceptualRoughness: f32)->vec3f {var UV: vec2f= vec2f(NdotV,perceptualRoughness);var brdfLookup: vec4f= textureSample(environmentBrdfSampler,environmentBrdfSamplerSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup=vec4f(fromRGBD(brdfLookup.rgba),brdfLookup.a);
#endif
return brdfLookup.rgb;}
fn getReflectanceFromBRDFWithEnvLookup(specularEnvironmentR0: vec3f,specularEnvironmentR90: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;}
fn getReflectanceFromBRDFLookup(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
fn getBRDFLookupCharlieSheen(NdotV: f32,perceptualRoughness: f32)->f32
{var c: f32=1.0-NdotV;var c3: f32=c*c*c;return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
fn getReflectanceFromAnalyticalBRDFLookup_Jones(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
fn getSheenReflectanceFromBRDFLookup(reflectance0: vec3f,environmentBrdf: vec3f)->vec3f {var sheenEnvironmentReflectance: vec3f=reflectance0*environmentBrdf.b;return sheenEnvironmentReflectance;}
#endif
fn fresnelSchlickGGXVec3(VdotH: f32,reflectance0: vec3f,reflectance90: vec3f)->vec3f
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
fn fresnelSchlickGGX(VdotH: f32,reflectance0: f32,reflectance90: f32)->f32
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
#ifdef CLEARCOAT
fn getR0RemappedForClearCoat(f0: vec3f)->vec3f {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturateVec3(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturateVec3(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
var s: vec3f=sqrt(f0);var t: vec3f=(uniforms.vClearCoatRefractionParams.z+uniforms.vClearCoatRefractionParams.w*s)/(uniforms.vClearCoatRefractionParams.w+uniforms.vClearCoatRefractionParams.z*s);return squareVec3(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const XYZ_TO_REC709: mat3x3f= mat3x3f(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);fn getIORTfromAirToSurfaceR0(f0: vec3f)->vec3f {var sqrtF0: vec3f=sqrt(f0);return (1.+sqrtF0)/(1.-sqrtF0);}
fn getR0fromIORsVec3(iorT: vec3f,iorI: f32)->vec3f {return squareVec3((iorT- vec3f(iorI))/(iorT+ vec3f(iorI)));}
fn getR0fromIORs(iorT: f32,iorI: f32)->f32 {return square((iorT-iorI)/(iorT+iorI));}
fn evalSensitivity(opd: f32,shift: vec3f)->vec3f {var phase: f32=2.0*PI*opd*1.0e-9;const val: vec3f= vec3f(5.4856e-13,4.4201e-13,5.2481e-13);const pos: vec3f= vec3f(1.6810e+06,1.7953e+06,2.2084e+06);const vr: vec3f= vec3f(4.3278e+09,9.3046e+09,6.6121e+09);var xyz: vec3f=val*sqrt(2.0*PI*vr)*cos(pos*phase+shift)*exp(-square(phase)*vr);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));xyz/=1.0685e-7;var srgb: vec3f=XYZ_TO_REC709*xyz;return srgb;}
fn evalIridescence(outsideIOR: f32,eta2: f32,cosTheta1: f32,thinFilmThickness: f32,baseF0: vec3f)->vec3f {var I: vec3f= vec3f(1.0);var iridescenceIOR: f32=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));var sinTheta2Sq: f32=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));var cosTheta2Sq: f32=1.0-sinTheta2Sq;if (cosTheta2Sq<0.0) {return I;}
var cosTheta2: f32=sqrt(cosTheta2Sq);var R0: f32=getR0fromIORs(iridescenceIOR,outsideIOR);var R12: f32=fresnelSchlickGGX(cosTheta1,R0,1.);var R21: f32=R12;var T121: f32=1.0-R12;var phi12: f32=0.0;if (iridescenceIOR<outsideIOR) {phi12=PI;}
var phi21: f32=PI-phi12;var baseIOR: vec3f=getIORTfromAirToSurfaceR0(clamp(baseF0,vec3f(0.0),vec3f(0.9999))); 
var R1: vec3f=getR0fromIORsVec3(baseIOR,iridescenceIOR);var R23: vec3f=fresnelSchlickGGXVec3(cosTheta2,R1, vec3f(1.));var phi23: vec3f= vec3f(0.0);if (baseIOR[0]<iridescenceIOR) {phi23[0]=PI;}
if (baseIOR[1]<iridescenceIOR) {phi23[1]=PI;}
if (baseIOR[2]<iridescenceIOR) {phi23[2]=PI;}
var opd: f32=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;var phi: vec3f= vec3f(phi21)+phi23;var R123: vec3f=clamp(R12*R23,vec3f(1e-5),vec3f(0.9999));var r123: vec3f=sqrt(R123);var Rs: vec3f=(T121*T121)*R23/( vec3f(1.0)-R123);var C0: vec3f=R12+Rs;I=C0;var Cm: vec3f=Rs-T121;for (var m: i32=1; m<=2; m++)
{Cm*=r123;var Sm: vec3f=2.0*evalSensitivity( f32(m)*opd, f32(m)*phi);I+=Cm*Sm;}
return max(I, vec3f(0.0));}
#endif
fn normalDistributionFunction_TrowbridgeReitzGGX(NdotH: f32,alphaG: f32)->f32
{var a2: f32=alphaG*alphaG;var d: f32=NdotH*NdotH*(a2-1.0)+1.0;return a2/(PI*d*d);}
#ifdef SHEEN
fn normalDistributionFunction_CharlieSheen(NdotH: f32,alphaG: f32)->f32
{var invR: f32=1./alphaG;var cos2h: f32=NdotH*NdotH;var sin2h: f32=1.-cos2h;return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);}
#endif
#ifdef ANISOTROPIC
fn normalDistributionFunction_BurleyGGX_Anisotropic(NdotH: f32,TdotH: f32,BdotH: f32,alphaTB: vec2f)->f32 {var a2: f32=alphaTB.x*alphaTB.y;var v: vec3f= vec3f(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);var v2: f32=dot(v,v);var w2: f32=a2/v2;return a2*w2*w2*RECIPROCAL_PI;}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
fn smithVisibility_GGXCorrelated(NdotL: f32,NdotV: f32,alphaG: f32)->f32 {
#ifdef MOBILE
var GGXV: f32=NdotL*(NdotV*(1.0-alphaG)+alphaG);var GGXL: f32=NdotV*(NdotL*(1.0-alphaG)+alphaG);return 0.5/(GGXV+GGXL);
#else
var a2: f32=alphaG*alphaG;var GGXV: f32=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);var GGXL: f32=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);return 0.5/(GGXV+GGXL);
#endif
}
#else
fn smithVisibilityG1_TrowbridgeReitzGGXFast(dot: f32,alphaG: f32)->f32
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
var alphaSquared: f32=alphaG*alphaG;return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
fn smithVisibility_TrowbridgeReitzGGXFast(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var visibility: f32=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);return visibility;}
#endif
#ifdef ANISOTROPIC
fn smithVisibility_GGXCorrelated_Anisotropic(NdotL: f32,NdotV: f32,TdotV: f32,BdotV: f32,TdotL: f32,BdotL: f32,alphaTB: vec2f)->f32 {var lambdaV: f32=NdotL*length( vec3f(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));var lambdaL: f32=NdotV*length( vec3f(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));var v: f32=0.5/(lambdaV+lambdaL);return v;}
#endif
#ifdef CLEARCOAT
fn visibility_Kelemen(VdotH: f32)->f32 {return 0.25/(VdotH*VdotH); }
#endif
#ifdef SHEEN
fn visibility_Ashikhmin(NdotL: f32,NdotV: f32)->f32
{return 1./(4.*(NdotL+NdotV-NdotL*NdotV));}
/* NOT USED
#ifdef SHEEN_SOFTER
fn l(x: f32,alphaG: f32)->f32
{var oneMinusAlphaSq: f32=(1.0-alphaG)*(1.0-alphaG);var a: f32=mix(21.5473,25.3245,oneMinusAlphaSq);var b: f32=mix(3.82987,3.32435,oneMinusAlphaSq);var c: f32=mix(0.19823,0.16801,oneMinusAlphaSq);var d: f32=mix(-1.97760,-1.27393,oneMinusAlphaSq);var e: f32=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}
fn lambdaSheen(cosTheta: f32,alphaG: f32)->f32
{return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));}
fn visibility_CharlieSheen(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var G: f32=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));return G/(4.0*NdotV*NdotL);}
#endif
*/
#endif
fn diffuseBRDF_Burley(NdotL: f32,NdotV: f32,VdotH: f32,roughness: f32)->f32 {var diffuseFresnelNV: f32=pow5(saturateEps(1.0-NdotL));var diffuseFresnelNL: f32=pow5(saturateEps(1.0-NdotV));var diffuseFresnel90: f32=0.5+2.0*VdotH*VdotH*roughness;var fresnel: f32 =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);return fresnel/PI;}
#ifdef SS_TRANSLUCENCY
fn transmittanceBRDF_Burley(tintColor: vec3f,diffusionDistance: vec3f,thickness: f32)->vec3f {var S: vec3f=1./maxEpsVec3(diffusionDistance);var temp: vec3f=exp((-0.333333333*thickness)*S);return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);}
fn computeWrappedDiffuseNdotL(NdotL: f32,w: f32)->f32 {var t: f32=1.0+w;var invt2: f32=1.0/(t*t);return saturate((NdotL+w)*invt2);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const pbrBRDFFunctionsWGSL = { name, shader };
//# sourceMappingURL=pbrBRDFFunctions.js.map

/***/ }),

/***/ 34035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export pbrUboDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98327);
/* harmony import */ var _meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6874);
// Do not edit.



const name = "pbrUboDeclaration";
const shader = `uniform vAlbedoInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicroSurfaceSamplerInfos: vec2f;uniform vReflectionInfos: vec2f;uniform vReflectionFilteringInfo: vec2f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vBumpInfos: vec3f;uniform albedoMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform reflectivityMatrix: mat4x4f;uniform microSurfaceSamplerMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionColor: vec3f;uniform vAlbedoColor: vec4f;uniform vLightingIntensity: vec4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform pointSize: f32;uniform vReflectivityColor: vec4f;uniform vEmissiveColor: vec3f;uniform vAmbientColor: vec3f;uniform vDebugMode: vec2f;uniform vMetallicReflectanceFactors: vec4f;uniform vMetallicReflectanceInfos: vec2f;uniform metallicReflectanceMatrix: mat4x4f;uniform vReflectanceInfos: vec2f;uniform reflectanceMatrix: mat4x4f;uniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;uniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const pbrUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=pbrUboDeclaration.js.map

/***/ }),

/***/ 54211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const prePassDeclarationWGSL = { name, shader };
//# sourceMappingURL=prePassDeclaration.js.map

/***/ }),

/***/ 47033:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassVertexWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassVertex";
const shader = `#ifdef PREPASS_DEPTH
vertexOutputs.vViewPos=(scene.view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vertexOutputs.vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const prePassVertexWGSL = { name, shader };
//# sourceMappingURL=prePassVertex.js.map

/***/ }),

/***/ 37769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassVertexDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassVertexDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const prePassVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=prePassVertexDeclaration.js.map

/***/ }),

/***/ 72230:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reflectionFunctionWGSL: () => (/* binding */ reflectionFunctionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "reflectionFunction";
const shader = `fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0); }
fn computeMirroredFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(1.0-s,t,0); }
fn computeEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var cameraToVertex: vec3f=normalize(worldPos.xyz-eyePosition);var r: vec3f=normalize(reflect(cameraToVertex,worldNormal));r= (reflectionMatrix* vec4f(r,0)).xyz;var lon: f32=atan2(r.z,r.x);var lat: f32=acos(r.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0);}
fn computeSphericalCoords(worldPos: vec4f,worldNormal: vec3f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize((view*worldPos).xyz);var viewNormal: vec3f=normalize((view* vec4f(worldNormal,0.0)).xyz);var r: vec3f=reflect(viewDir,viewNormal);r= (reflectionMatrix* vec4f(r,0)).xyz;r.z=r.z-1.0;var m: f32=2.0*length(r);return vec3f(r.x/m+0.5,1.0-r.y/m-0.5,0);}
fn computePlanarCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=worldPos.xyz-eyePosition;var coords: vec3f=normalize(reflect(viewDir,worldNormal));return (reflectionMatrix* vec4f(coords,1)).xyz;}
fn computeCubicCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords= (reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeCubicLocalCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f,reflectionSize: vec3f,reflectionPosition: vec3f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=(reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeProjectionCoords(worldPos: vec4f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix*(view*worldPos)).xyz;}
fn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}
#ifdef REFLECTION
fn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,scene.view,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix,uniforms.vReflectionSize,uniforms.vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,scene.view,uniforms.reflectionMatrix);
#endif
#ifndef REFLECTIONMAP_CUBIC
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3f(0,0,0);
#endif
}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const reflectionFunctionWGSL = { name, shader };
//# sourceMappingURL=reflectionFunction.js.map

/***/ }),

/***/ 80983:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerFragmentDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "samplerFragmentDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying v_VARYINGNAME_UV: vec2f;
#endif
var _SAMPLERNAME_SamplerSampler: sampler;var _SAMPLERNAME_Sampler: texture_2d<f32>;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const samplerFragmentDeclarationWGSL = { name, shader };
//# sourceMappingURL=samplerFragmentDeclaration.js.map

/***/ }),

/***/ 89277:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerVertexDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "samplerVertexDeclaration";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying v_VARYINGNAME_UV: vec2f;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const samplerVertexDeclarationWGSL = { name, shader };
//# sourceMappingURL=samplerVertexDeclaration.js.map

/***/ }),

/***/ 52231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerVertexImplementationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "samplerVertexImplementation";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (uniforms.v_INFONAME_==0.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}
#ifdef UV2
else if (uniforms.v_INFONAME_==1.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}
#endif
#ifdef UV3
else if (uniforms.v_INFONAME_==2.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv3,1.0,0.0)).xy;}
#endif
#ifdef UV4
else if (uniforms.v_INFONAME_==3.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv4,1.0,0.0)).xy;}
#endif
#ifdef UV5
else if (uniforms.v_INFONAME_==4.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv5,1.0,0.0)).xy;}
#endif
#ifdef UV6
else if (uniforms.v_INFONAME_==5.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv6,1.0,0.0)).xy;}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const samplerVertexImplementationWGSL = { name, shader };
//# sourceMappingURL=samplerVertexImplementation.js.map

/***/ }),

/***/ 98327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export sceneUboDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "sceneUboDeclaration";
const shader = `struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};
#define SCENE_UBO
var<uniform> scene : Scene;
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const sceneUboDeclarationWGSL = { name, shader };
//# sourceMappingURL=sceneUboDeclaration.js.map

/***/ }),

/***/ 95228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export screenSpaceRayTraceWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceRayTrace";
const shader = `fn distanceSquared(a: vec2f,b: vec2f)->f32 { 
var temp=a-b; 
return dot(temp,temp); }
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
fn linearizeDepth(depth: f32,near: f32,far: f32)->f32 {
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
return -(near*far)/(far-depth*(far-near));
#else
return (near*far)/(far-depth*(far-near));
#endif
}
#endif
/**
\param csOrigin Camera-space ray origin,which must be 
within the view volume and must have z>0.01 and project within the valid screen rectangle
\param csDirection Unit length camera-space ray direction
\param projectToPixelMatrix A projection matrix that maps to **pixel** coordinates 
(**not** [-1,+1] normalized device coordinates).
\param csZBuffer The camera-space Z buffer
\param csZBufferSize Dimensions of csZBuffer
\param csZThickness Camera space csZThickness to ascribe to each pixel in the depth buffer
\param nearPlaneZ Positive number. Doesn't have to be THE actual near plane,just a reasonable value
for clipping rays headed towards the camera. Should be the actual near plane if screen-space depth is enabled.
\param farPlaneZ The far plane for the camera. Used when screen-space depth is enabled.
\param stride Step in horizontal or vertical pixels between samples. This is a var because: f32 integer math is slow on GPUs,but should be set to an integer>=1
\param jitterFraction Number between 0 and 1 for how far to bump the ray in stride units
to conceal banding artifacts,plus the stride ray offset.
\param maxSteps Maximum number of iterations. Higher gives better images but may be slow
\param maxRayTraceDistance Maximum camera-space distance to trace before returning a miss
\param selfCollisionNumSkip Number of steps to skip at start when raytracing to avar self: voidnull collisions.
1 is a reasonable value,depending on the scene you may need to set this value to 2
\param hitPixel Pixel coordinates of the first intersection with the scene
\param numIterations number of iterations performed
\param csHitPovar Camera: i32 space location of the ray hit
*/
fn traceScreenSpaceRay1(
csOrigin: vec3f,
csDirection: vec3f,
projectToPixelMatrix: mat4x4f,
csZBuffer: texture_2d<f32>,
csZBufferSize: vec2f,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
csZBackBuffer: texture_2d<f32>,
csZBackSizeFactor: f32,
#endif
csZThickness: f32,
nearPlaneZ: f32,
farPlaneZ: f32,
stride: f32,
jitterFraction: f32,
maxSteps: f32,
maxRayTraceDistance: f32,
selfCollisionNumSkip: f32,
startPixel: ptr<function,vec2f>,
hitPixel: ptr<function,vec2f>,
csHitPoint: ptr<function,vec3f>,
numIterations: ptr<function,f32>
#ifdef SSRAYTRACE_DEBUG
,debugColor: ptr<function,vec3f>
#endif
)->bool
{
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
var rayLength: f32=select(maxRayTraceDistance,(-nearPlaneZ-csOrigin.z)/csDirection.z,(csOrigin.z+csDirection.z*maxRayTraceDistance)>-nearPlaneZ);
#else
var rayLength: f32=select(maxRayTraceDistance,(nearPlaneZ-csOrigin.z)/csDirection.z,(csOrigin.z+csDirection.z*maxRayTraceDistance)<nearPlaneZ);
#endif
var csEndPoint: vec3f=csOrigin+csDirection*rayLength;*hitPixel= vec2f(-1.0,-1.0);var H0: vec4f=projectToPixelMatrix* vec4f(csOrigin,1.0);var H1: vec4f=projectToPixelMatrix* vec4f(csEndPoint,1.0);var k0: f32=1.0/H0.w;var k1: f32=1.0/H1.w;var Q0: vec3f=csOrigin*k0;var Q1: vec3f=csEndPoint*k1;var P0: vec2f=H0.xy*k0;var P1: vec2f=H1.xy*k1;
#ifdef SSRAYTRACE_CLIP_TO_FRUSTUM
var xMax: f32=csZBufferSize.x-0.5;var xMin=0.5;var yMax=csZBufferSize.y-0.5;var yMin=0.5;var alpha: f32=0.0;if ((P1.y>yMax) || (P1.y<yMin)) {alpha=(P1.y-select(yMin,yMax,(P1.y>yMax)))/(P1.y-P0.y);}
if ((P1.x>xMax) || (P1.x<xMin)) {alpha=max(alpha,(P1.x-select(xMin,xMax,(P1.x>xMax)))/(P1.x-P0.x));}
P1=mix(P1,P0,alpha); k1=mix(k1,k0,alpha); Q1=mix(Q1,Q0,alpha);
#endif
P1+= vec2f(select(0.0,0.01,distanceSquared(P0,P1)<0.0001));var delta: vec2f=P1-P0;var permute: bool=false;if (abs(delta.x)<abs(delta.y)) { 
permute=true;delta=delta.yx;P0=P0.yx;P1=P1.yx; }
var stepDirection: f32=sign(delta.x);var invdx: f32=stepDirection/delta.x;var dP: vec2f= vec2f(stepDirection,delta.y*invdx);var dQ: vec3f=(Q1-Q0)*invdx;var dk: f32=(k1-k0)*invdx;var zMin: f32=min(csEndPoint.z,csOrigin.z);var zMax: f32=max(csEndPoint.z,csOrigin.z);dP*=stride; dQ*=stride; dk*=stride;P0+=dP*jitterFraction; Q0+=dQ*jitterFraction; k0+=dk*jitterFraction;var pqk: vec4f= vec4f(P0,Q0.z,k0);var dPQK: vec4f= vec4f(dP,dQ.z,dk);*startPixel=select(P0.xy,P0.yx,permute);var prevZMaxEstimate: f32=csOrigin.z;var rayZMin: f32=prevZMaxEstimate;var rayZMax=prevZMaxEstimate;var sceneZMax: f32=rayZMax+1e4;var end: f32=P1.x*stepDirection;var hit: bool=false;var stepCount: f32;for (stepCount=0.0;(stepCount<=selfCollisionNumSkip) ||
((pqk.x*stepDirection)<=end &&
stepCount<maxSteps &&
!hit &&
sceneZMax != 0.0);pqk+=dPQK 
)
{*hitPixel=select(pqk.xy,pqk.yx,permute);rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;if (rayZMin>rayZMax) { 
var t: f32=rayZMin; rayZMin=rayZMax; rayZMax=t;}
sceneZMax=textureLoad(csZBuffer,vec2<i32>(*hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var sceneBackZ: f32=textureLoad(csZBackBuffer,vec2<i32>(*hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMax>=sceneBackZ-csZThickness) && (rayZMin<=sceneZMax);
#else
hit=(rayZMax>=sceneZMax-csZThickness) && (rayZMin<=sceneZMax);
#endif
#else
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var sceneBackZ: f32=textureLoad(csZBackBuffer,vec2<i32>(*hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMin<=sceneBackZ+csZThickness) && (rayZMax>=sceneZMax) && (sceneZMax != 0.0);
#else
hit=(rayZMin<=sceneZMax+csZThickness) && (rayZMax>=sceneZMax);
#endif
#endif
stepCount+=1.0;}
pqk-=dPQK;stepCount-=1.0;if (((pqk.x+dPQK.x)*stepDirection)>end || (stepCount+1.0)>=maxSteps || sceneZMax==0.0) {hit=false;}
#ifdef SSRAYTRACE_ENABLE_REFINEMENT
if (stride>1.0 && hit) {pqk-=dPQK;stepCount-=1.0;var invStride: f32=1.0/stride;dPQK*=invStride;var refinementStepCount: f32=0.0;prevZMaxEstimate=pqk.z/pqk.w;rayZMax=prevZMaxEstimate;sceneZMax=rayZMax+1e7;for (;refinementStepCount<=1.0 ||
((refinementStepCount<=stride*1.4) &&
(rayZMax<sceneZMax) && (sceneZMax != 0.0));pqk+=dPQK)
{rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;rayZMax=max(rayZMax,rayZMin);*hitPixel=select(pqk.xy,pqk.yx,permute);sceneZMax=textureLoad(csZBuffer,vec2<i32>(*hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
refinementStepCount+=1.0;}
pqk-=dPQK;refinementStepCount-=1.0;stepCount+=refinementStepCount/stride;}
#endif
Q0=vec3f(Q0.xy+dQ.xy*stepCount,pqk.z);*csHitPoint=Q0/pqk.w;*numIterations=stepCount+1.0;
#ifdef SSRAYTRACE_DEBUG
if (((pqk.x+dPQK.x)*stepDirection)>end) {*debugColor= vec3f(0,0,1);} else if ((stepCount+1.0)>=maxSteps) {*debugColor= vec3f(1,0,0);} else if (sceneZMax==0.0) {*debugColor= vec3f(1,1,0);} else {*debugColor= vec3f(0,stepCount/maxSteps,0);}
#endif
return hit;}
/**
texCoord: in the [0,1] range
depth: depth in view space (range [znear,zfar]])
*/
fn computeViewPosFromUVDepth(texCoord: vec2f,depth: f32,projection: mat4x4f,invProjectionMatrix: mat4x4f)->vec3f {var xy=texCoord*2.0-1.0;var z: f32;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef ORTHOGRAPHIC_CAMERA
z=-projection[2].z*depth+projection[3].z;
#else
z=-projection[2].z-projection[3].z/depth;
#endif
#else
#ifdef ORTHOGRAPHIC_CAMERA
z=projection[2].z*depth+projection[3].z;
#else
z=projection[2].z+projection[3].z/depth;
#endif
#endif
var w=1.0;var ndc=vec4f(xy,z,w);var eyePos: vec4f=invProjectionMatrix*ndc;var result=eyePos.xyz/eyePos.w;return result;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const screenSpaceRayTraceWGSL = { name, shader };
//# sourceMappingURL=screenSpaceRayTrace.js.map

/***/ }),

/***/ 89273:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentWGSL: () => (/* binding */ shadowMapFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapFragment";
const shader = `var depthSM: f32=fragmentInputs.vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
depthSM=(fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
fragmentOutputs.fragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
fragmentOutputs.fragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,uniforms.biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
fragmentOutputs.color= vec4f(depthSM,1.0,1.0,1.0);
#else
fragmentOutputs.color=pack(depthSM);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const shadowMapFragmentWGSL = { name, shader };
//# sourceMappingURL=shadowMapFragment.js.map

/***/ }),

/***/ 95799:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentSoftTransparentShadowWGSL: () => (/* binding */ shadowMapFragmentSoftTransparentShadowWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapFragmentSoftTransparentShadow";
const shader = `#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alpha) {discard;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const shadowMapFragmentSoftTransparentShadowWGSL = { name, shader };
//# sourceMappingURL=shadowMapFragmentSoftTransparentShadow.js.map

/***/ }),

/***/ 71311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexMetricWGSL: () => (/* binding */ shadowMapVertexMetricWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapVertexMetric";
const shader = `#if SM_USEDISTANCE==1
vertexOutputs.vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.position.z-=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#else
vertexOutputs.position.z+=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
vertexOutputs.zSM=vertexOutputs.position.z;vertexOutputs.position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetricSM=(-vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
vertexOutputs.vDepthMetricSM=(vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const shadowMapVertexMetricWGSL = { name, shader };
//# sourceMappingURL=shadowMapVertexMetric.js.map

/***/ }),

/***/ 78589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsFragmentFunctionsWGSL: () => (/* binding */ shadowsFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowsFragmentFunctions";
const shader = `#ifdef SHADOWS
#ifndef SHADOWFLOAT
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
fn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f32
{var mask: f32=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
fn computeShadowCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
return select(1.0,darkness,depth>shadow);}
fn computeShadowWithPoissonSamplingCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;var visibility: f32=1.;var poissonDisk: array<vec3f,4>;poissonDisk[0]= vec3f(-1.0,1.0,-1.0);poissonDisk[1]= vec3f(1.0,-1.0,-1.0);poissonDisk[2]= vec3f(-1.0,-1.0,-1.0);poissonDisk[3]= vec3f(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) {visibility-=0.25;};
#else
if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) {visibility-=0.25;};
#endif
return min(1.0,visibility+darkness);}
fn computeShadowWithESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
fn computeShadowWithCloseESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
fn computeShadowCSM(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d_array<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,uv,layer));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,uv,layer).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}
fn computeShadow(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadow: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}}
fn computeShadowWithPoissonSampling(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);var visibility: f32=1.;var poissonDisk: array<vec2f,4>;poissonDisk[0]= vec2f(-0.94201624,-0.39906216);poissonDisk[1]= vec2f(0.94558609,-0.76890725);poissonDisk[2]= vec2f(-0.094184101,-0.92938870);poissonDisk[3]= vec2f(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
#else
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithCloseESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn getZInClip(clipSpace: vec3f,uvDepth: vec3f)->f32
{
#ifdef IS_NDC_HALF_ZRANGE
return clipSpace.z;
#else
return uvDepth.z;
#endif
}
const GREATEST_LESS_THAN_ONE: f32=0.99999994;
#define DISABLE_UNIFORMITY_ANALYSIS
fn computeShadowWithCSMPCF1(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var shadow: f32=textureSampleCompare(shadowTexture,shadowSampler,uvDepth.xy,layer,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF3(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF5(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),layer,uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),layer,uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),layer,uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),layer,uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithPCF1(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var shadow: f32=textureSampleCompareLevel(shadowTexture,shadowSampler,uvDepth.xy,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF3(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF5(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const PoissonSamplers32: array<vec3f,64>=array<vec3f,64> (
vec3f(0.06407013,0.05409927,0.),
vec3f(0.7366577,0.5789394,0.),
vec3f(-0.6270542,-0.5320278,0.),
vec3f(-0.4096107,0.8411095,0.),
vec3f(0.6849564,-0.4990818,0.),
vec3f(-0.874181,-0.04579735,0.),
vec3f(0.9989998,0.0009880066,0.),
vec3f(-0.004920578,-0.9151649,0.),
vec3f(0.1805763,0.9747483,0.),
vec3f(-0.2138451,0.2635818,0.),
vec3f(0.109845,0.3884785,0.),
vec3f(0.06876755,-0.3581074,0.),
vec3f(0.374073,-0.7661266,0.),
vec3f(0.3079132,-0.1216763,0.),
vec3f(-0.3794335,-0.8271583,0.),
vec3f(-0.203878,-0.07715034,0.),
vec3f(0.5912697,0.1469799,0.),
vec3f(-0.88069,0.3031784,0.),
vec3f(0.5040108,0.8283722,0.),
vec3f(-0.5844124,0.5494877,0.),
vec3f(0.6017799,-0.1726654,0.),
vec3f(-0.5554981,0.1559997,0.),
vec3f(-0.3016369,-0.3900928,0.),
vec3f(-0.5550632,-0.1723762,0.),
vec3f(0.925029,0.2995041,0.),
vec3f(-0.2473137,0.5538505,0.),
vec3f(0.9183037,-0.2862392,0.),
vec3f(0.2469421,0.6718712,0.),
vec3f(0.3916397,-0.4328209,0.),
vec3f(-0.03576927,-0.6220032,0.),
vec3f(-0.04661255,0.7995201,0.),
vec3f(0.4402924,0.3640312,0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.)
);const PoissonSamplers64: array<vec3f,64>=array<vec3f,64> (
vec3f(-0.613392,0.617481,0.),
vec3f(0.170019,-0.040254,0.),
vec3f(-0.299417,0.791925,0.),
vec3f(0.645680,0.493210,0.),
vec3f(-0.651784,0.717887,0.),
vec3f(0.421003,0.027070,0.),
vec3f(-0.817194,-0.271096,0.),
vec3f(-0.705374,-0.668203,0.),
vec3f(0.977050,-0.108615,0.),
vec3f(0.063326,0.142369,0.),
vec3f(0.203528,0.214331,0.),
vec3f(-0.667531,0.326090,0.),
vec3f(-0.098422,-0.295755,0.),
vec3f(-0.885922,0.215369,0.),
vec3f(0.566637,0.605213,0.),
vec3f(0.039766,-0.396100,0.),
vec3f(0.751946,0.453352,0.),
vec3f(0.078707,-0.715323,0.),
vec3f(-0.075838,-0.529344,0.),
vec3f(0.724479,-0.580798,0.),
vec3f(0.222999,-0.215125,0.),
vec3f(-0.467574,-0.405438,0.),
vec3f(-0.248268,-0.814753,0.),
vec3f(0.354411,-0.887570,0.),
vec3f(0.175817,0.382366,0.),
vec3f(0.487472,-0.063082,0.),
vec3f(-0.084078,0.898312,0.),
vec3f(0.488876,-0.783441,0.),
vec3f(0.470016,0.217933,0.),
vec3f(-0.696890,-0.549791,0.),
vec3f(-0.149693,0.605762,0.),
vec3f(0.034211,0.979980,0.),
vec3f(0.503098,-0.308878,0.),
vec3f(-0.016205,-0.872921,0.),
vec3f(0.385784,-0.393902,0.),
vec3f(-0.146886,-0.859249,0.),
vec3f(0.643361,0.164098,0.),
vec3f(0.634388,-0.049471,0.),
vec3f(-0.688894,0.007843,0.),
vec3f(0.464034,-0.188818,0.),
vec3f(-0.440840,0.137486,0.),
vec3f(0.364483,0.511704,0.),
vec3f(0.034028,0.325968,0.),
vec3f(0.099094,-0.308023,0.),
vec3f(0.693960,-0.366253,0.),
vec3f(0.678884,-0.204688,0.),
vec3f(0.001801,0.780328,0.),
vec3f(0.145177,-0.898984,0.),
vec3f(0.062655,-0.611866,0.),
vec3f(0.315226,-0.604297,0.),
vec3f(-0.780145,0.486251,0.),
vec3f(-0.371868,0.882138,0.),
vec3f(0.200476,0.494430,0.),
vec3f(-0.494552,-0.711051,0.),
vec3f(0.612476,0.705252,0.),
vec3f(-0.578845,-0.768792,0.),
vec3f(-0.772454,-0.090976,0.),
vec3f(0.504440,0.372295,0.),
vec3f(0.155736,0.065157,0.),
vec3f(0.391522,0.849605,0.),
vec3f(-0.620106,-0.328104,0.),
vec3f(0.789239,-0.419965,0.),
vec3f(-0.545396,0.538133,0.),
vec3f(-0.178564,-0.596057,0.)
);fn computeShadowWithCSMPCSS(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uvDepthLayer: vec4f= vec4f(uvDepth.x,uvDepth.y,f32(layer),uvDepth.z);var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;for (var i: i32=0; i<searchTapCount; i ++) {blockerDepth=textureSample(depthTexture,depthSampler, uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);var filterRadius: vec4f= vec4f(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {var offset: vec4f= vec4f(poissonSamplers[i],0.);offset= vec4f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);let coords=uvDepthLayer+offset*filterRadius;shadow+=textureSampleCompare(shadowTexture,shadowSampler,coords.xy,i32(coords.z),coords.w);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);return select(computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff),1.0,numBlocker<1.0);}
fn computeShadowWithPCSS(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;var exitCondition: bool=depthMetric>1.0 || depthMetric<0.0;for (var i: i32=0; i<searchTapCount; i ++) {if (exitCondition) {break;}
blockerDepth=textureSampleLevel(depthTexture,depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
exitCondition=exitCondition || numBlocker<1.0;var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)+AAOffset);var filterRadius: f32=penumbraRatio*lightSizeUV*shadowMapSizeInverse;var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {if (exitCondition) {break;}
var offset: vec3f=poissonSamplers[i];offset= vec3f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);let coords=uvDepth+offset*filterRadius;shadow+=textureSampleCompareLevel(shadowTexture,shadowSampler,coords.xy,coords.z);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return select(computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff),1.0,exitCondition);}
fn computeShadowWithPCSS16(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
fn computeShadowWithPCSS32(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
fn computeShadowWithPCSS64(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
fn computeShadowWithCSMPCSS16(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS32(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS64(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const shadowsFragmentFunctionsWGSL = { name, shader };
//# sourceMappingURL=shadowsFragmentFunctions.js.map

/***/ }),

/***/ 79456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsVertexWGSL: () => (/* binding */ shadowsVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;
#if SHADOWCSMNUM_CASCADES{X}>0
vertexOutputs.vPositionFromLight{X}_0=uniforms.lightMatrix{X}[0]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_0=(-vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_0= (vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#if SHADOWCSMNUM_CASCADES{X}>1
vertexOutputs.vPositionFromLight{X}_1=uniforms.lightMatrix{X}[1]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_1=(-vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_1= (vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>2
vertexOutputs.vPositionFromLight{X}_2=uniforms.lightMatrix{X}[2]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_2=(-vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_2= (vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>3
vertexOutputs.vPositionFromLight{X}_3=uniforms.lightMatrix{X}[3]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_3=(-vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_3= (vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vertexOutputs.vPositionFromLight{X}=uniforms.lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}=(-vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}=(vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const shadowsVertexWGSL = { name, shader };
//# sourceMappingURL=shadowsVertex.js.map

/***/ }),

/***/ 1008:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export uvAttributeDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "uvAttributeDeclaration";
const shader = `#ifdef UV{X}
attribute uv{X}: vec2f;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const uvAttributeDeclarationWGSL = { name, shader };
//# sourceMappingURL=uvAttributeDeclaration.js.map

/***/ }),

/***/ 20774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export uvVariableDeclarationWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "uvVariableDeclaration";
const shader = `#ifdef MAINUV{X}
#if !defined(UV{X})
var uv{X}: vec2f=vec2f(0.,0.);
#else
var uv{X}: vec2f=vertexInputs.uv{X};
#endif
vertexOutputs.vMainUV{X}=uv{X};
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const uvVariableDeclarationWGSL = { name, shader };
//# sourceMappingURL=uvVariableDeclaration.js.map

/***/ }),

/***/ 820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export vertexColorMixingWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "vertexColorMixing";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vertexOutputs.vColor=vec4f(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vertexOutputs.vColor*=vertexInputs.color;
#else
vertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*vertexInputs.color.rgb,vertexOutputs.vColor.a);
#endif
#endif
#ifdef INSTANCESCOLOR
vertexOutputs.vColor*=vertexInputs.instanceColor;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStoreWGSL[name] = shader;
/** @internal */
const vertexColorMixingWGSL = { name, shader };
//# sourceMappingURL=vertexColorMixing.js.map

/***/ }),

/***/ 91506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anaglyphPixelShaderWGSL: () => (/* binding */ anaglyphPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "anaglyphPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var leftSamplerSampler: sampler;var leftSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var leftFrag: vec4f=textureSample(leftSampler,leftSamplerSampler,input.vUV);leftFrag= vec4f(1.0,leftFrag.g,leftFrag.b,1.0);var rightFrag: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);rightFrag= vec4f(rightFrag.r,1.0,1.0,1.0);fragmentOutputs.color= vec4f(rightFrag.rgb*leftFrag.rgb,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const anaglyphPixelShaderWGSL = { name, shader };
//# sourceMappingURL=anaglyph.fragment.js.map

/***/ }),

/***/ 92321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  backgroundPixelShaderWGSL: () => (/* binding */ backgroundPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js
var backgroundUboDeclaration = __webpack_require__(33723);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(79702);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js
var reflectionFunction = __webpack_require__(72230);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(16205);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js
var lightUboDeclaration = __webpack_require__(30379);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js
var lightsFragmentFunctions = __webpack_require__(76493);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js
var shadowsFragmentFunctions = __webpack_require__(78589);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(88996);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(39759);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(66407);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/intersectionFunctions.js
// Do not edit.

const intersectionFunctions_name = "intersectionFunctions";
const shader = `fn diskIntersectWithBackFaceCulling(ro: vec3f,rd: vec3f,c: vec3f,r: f32)->f32 {var d: f32=rd.y;if(d>0.0) { return 1e6; }
var o: vec3f=ro-c;var t: f32=-o.y/d;var q: vec3f=o+rd*t;return select(1e6,t,(dot(q,q)<r*r));}
fn sphereIntersect(ro: vec3f,rd: vec3f,ce: vec3f,ra: f32)->vec2f {var oc: vec3f=ro-ce;var b: f32=dot(oc,rd);var c: f32=dot(oc,oc)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}
fn sphereIntersectFromOrigin(ro: vec3f,rd: vec3f,ra: f32)->vec2f {var b: f32=dot(ro,rd);var c: f32=dot(ro,ro)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[intersectionFunctions_name] = shader;
/** @internal */
const intersectionFunctionsWGSL = { name: intersectionFunctions_name, shader };
//# sourceMappingURL=intersectionFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(97715);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js
var lightFragment = __webpack_require__(25271);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(38780);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(93243);
;// ./node_modules/@babylonjs/core/ShadersWGSL/background.fragment.js
// Do not edit.

















const background_fragment_name = "backgroundPixelShader";
const background_fragment_shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
varying vPositionW: vec3f;
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif 
#ifdef MAINUV2 
varying vMainUV2: vec2f; 
#endif 
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vDiffuseUV: vec2f;
#endif
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
fn fresnelSchlickEnvironmentGGX(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
fn project(viewDirectionW: vec3f,eyePosition: vec3f)->vec3f {var radius: f32=uniforms.projectedGroundInfos.x;var height: f32=uniforms.projectedGroundInfos.y;var camDir: vec3f=-viewDirectionW;var skySphereDistance: f32=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;var skySpherePositionW: vec3f=eyePosition+camDir*skySphereDistance;var p: vec3f=normalize(skySpherePositionW);var upEyePosition=vec3f(eyePosition.x,eyePosition.y-height,eyePosition.z);var sIntersection: f32=sphereIntersectFromOrigin(upEyePosition,p,radius).x;var h: vec3f= vec3f(0.0,-height,0.0);var dIntersection: f32=diskIntersectWithBackFaceCulling(upEyePosition,p,h,radius);p=(upEyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(0.0,1.0,0.0);
#endif
var shadow: f32=1.;var globalShadow: f32=0.;var shadowLightCount: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
var reflectionColor: vec4f= vec4f(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
var reflectionVector: vec3f=project(viewDirectionW,scene.vEyePosition.xyz);reflectionVector= (uniforms.reflectionMatrix*vec4f(reflectionVector,1.)).xyz;
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=reflectionVector;
#else
var reflectionCoords: vec2f=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
var reflectionLOD: f32=uniforms.vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(vReflectionMicrosurfaceInfos.x)*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;reflectionColor=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD);var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var reflectionSpecularMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
textureSample(reflectionrHighSampler,reflectionrHighSamplerSampler,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
var reflectionSample: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor).rgb,reflectionColor.a);
#endif
#ifdef GAMMAREFLECTION
reflectionColor=vec4f(toLinearSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
#ifdef REFLECTIONBGR
reflectionColor=vec4f(reflectionColor.bgr,reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#endif
var diffuseColor: vec3f= vec3f(1.,1.,1.);var finalAlpha: f32=uniforms.alpha;
#ifdef DIFFUSE
var diffuseMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap=vec4f(toLinearSpaceVec3(diffuseMap.rgb),diffuseMap.a);
#endif
diffuseMap=vec4f(diffuseMap.rgb *uniforms.vDiffuseInfos.y,diffuseMap.a);
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
var colorBase: vec3f=diffuseColor;
#else
var colorBase: vec3f=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,vec3f(0.0));
#ifdef USERGBCOLOR
var finalColor: vec3f=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
var mainColor: vec3f=mix(uniforms.vPrimaryColorShadow.rgb,uniforms.vPrimaryColor.rgb,colorBase);
#else
var mainColor: vec3f=uniforms.vPrimaryColor.rgb;
#endif
var finalColor: vec3f=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
var reflectionAmount: vec3f=uniforms.vReflectionControl.xxx;var reflectionReflectance0: vec3f=uniforms.vReflectionControl.yyy;var reflectionReflectance90: vec3f=uniforms.vReflectionControl.zzz;var VdotN: f32=dot(normalize(scene.vEyePosition.xyz),normalW);var planarReflectionFresnel: vec3f=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
var reflectionDistanceFalloff: f32=1.0-saturate(length(vPositionW.xyz-uniforms.vBackgroundCenter)*uniforms.vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturateVec3(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
var viewAngleToFloor: f32=dot(normalW,normalize(scene.vEyePosition.xyz-uniforms.vBackgroundCenter));const startAngle: f32=0.1;var fadeFactor: f32=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*uniforms.shadowLevel,finalColor,globalShadow);
#endif
var color: vec4f= vec4f(finalColor,finalAlpha);
#else
var color: vec4f= vec4f(uniforms.vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*uniforms.alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color=vec4f(clamp(color.rgb,vec3f(0.),vec3f(30.0)),color.a);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb *color.a,color.a);
#endif
#ifdef NOISE
color=vec4f(color.rgb+dither(fragmentInputs.vPositionW.xy,0.5),color.a);color=max(color,vec4f(0.0));
#endif
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[background_fragment_name] = background_fragment_shader;
/** @internal */
const backgroundPixelShaderWGSL = { name: background_fragment_name, shader: background_fragment_shader };
//# sourceMappingURL=background.fragment.js.map

/***/ }),

/***/ 35616:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundVertexShaderWGSL: () => (/* binding */ backgroundVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_backgroundUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33723);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75757);
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3925);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59013);
/* harmony import */ var _ShadersInclude_shadowsVertex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79456);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81482);
// Do not edit.

















const name = "backgroundVertexShader";
const shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif
#ifdef MAINUV2
varying vMainUV2: vec2f;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vDiffuseUV: vec2f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=input.position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);} else {vertexOutputs.position=scene.viewProjectionR*finalWorld* vec4f(input.position,1.0);}
#else
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);
#endif
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
var normalWorld: mat3x3f=mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*input.normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(input.position,0.0)).xyz);
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
var screenToWorld: mat3x3f=inverseMat3( mat3x3f(finalWorld*scene.viewProjection));var segment: vec3f=mix(vertexOutputs.vDirectionW,screenToWorld* vec3f(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vertexOutputs.vDirectionW=normalize(segment);} else {vertexOutputs.vDirectionW=normalize(vertexOutputs.vDirectionW+(vertexOutputs.vDirectionW-segment));}
#endif
#endif
#ifndef UV1
var uv: vec2f=vec2f(0.,0.);
#else
var uv=input.uv;
#endif
#ifndef UV2
var uv2: vec2f=vec2f(0.,0.);
#else
var uv2=input.uv2;
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uv;
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (uniforms.vDiffuseInfos.x==0.)
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv,1.0,0.0)).xy;}
else
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2,1.0,0.0)).xy;}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const backgroundVertexShaderWGSL = { name, shader };
//# sourceMappingURL=background.vertex.js.map

/***/ }),

/***/ 91807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bilateralBlurPixelShaderWGSL: () => (/* binding */ bilateralBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bilateralBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords=vec2f(f32(x));var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var depthDelta: f32=abs(sampleDepth-depth);var wd: f32=step(depthDelta,uniforms.depthThreshold);var normalDelta: vec3f=abs(sampleNormal-normal);var wn: f32=step(normalDelta.x+normalDelta.y+normalDelta.z,uniforms.normalThreshold);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const bilateralBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=bilateralBlur.fragment.js.map

/***/ }),

/***/ 11084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bilateralBlurQualityPixelShaderWGSL: () => (/* binding */ bilateralBlurQualityPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bilateralBlurQualityPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {for (var y: i32=-uniforms.filterSize; y<=uniforms.filterSize; y++) {var coords: vec2f= vec2f(f32(x),f32(y))*uniforms.blurDir;var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepth-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);var rNormal: f32=abs(sampleNormal.x-normal.x)+abs(sampleNormal.y-normal.y)+abs(sampleNormal.z-normal.z);var wn: f32=exp(-rNormal*rNormal/two_sigmaNormal2);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const bilateralBlurQualityPixelShaderWGSL = { name, shader };
//# sourceMappingURL=bilateralBlurQuality.fragment.js.map

/***/ }),

/***/ 65783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blackAndWhitePixelShaderWGSL: () => (/* binding */ blackAndWhitePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "blackAndWhitePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform degree: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var luminance: f32=dot(color, vec3f(0.3,0.59,0.11)); 
var blackAndWhite: vec3f= vec3f(luminance,luminance,luminance);fragmentOutputs.color= vec4f(color-((color-blackAndWhite)*uniforms.degree),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const blackAndWhitePixelShaderWGSL = { name, shader };
//# sourceMappingURL=blackAndWhite.fragment.js.map

/***/ }),

/***/ 96645:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bloomMergePixelShaderWGSL: () => (/* binding */ bloomMergePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bloomMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var bloomBlurSampler: sampler;var bloomBlur: texture_2d<f32>;uniform bloomWeight: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var blurred: vec3f=textureSample(bloomBlur,bloomBlurSampler,input.vUV).rgb;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+(blurred.rgb*uniforms.bloomWeight),fragmentOutputs.color.a);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const bloomMergePixelShaderWGSL = { name, shader };
//# sourceMappingURL=bloomMerge.fragment.js.map

/***/ }),

/***/ 12814:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundingBoxRendererPixelShaderWGSL: () => (/* binding */ boundingBoxRendererPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "boundingBoxRendererPixelShader";
const shader = `uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const boundingBoxRendererPixelShaderWGSL = { name, shader };
//# sourceMappingURL=boundingBoxRenderer.fragment.js.map

/***/ }),

/***/ 89252:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundingBoxRendererVertexShaderWGSL: () => (/* binding */ boundingBoxRendererVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "boundingBoxRendererVertexShader";
const shader = `attribute position: vec3f;uniform world: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);
#else
var worldPos: vec4f=uniforms.world* vec4f(input.position,1.0);
#endif
vertexOutputs.position=uniforms.viewProjection*worldPos;
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const boundingBoxRendererVertexShaderWGSL = { name, shader };
//# sourceMappingURL=boundingBoxRenderer.vertex.js.map

/***/ }),

/***/ 37049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export boundingInfoComputeShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "boundingInfoComputeShader";
const shader = `struct Results {minX : atomic<i32>,
minY : atomic<i32>,
minZ : atomic<i32>,
maxX : atomic<i32>,
maxY : atomic<i32>,
maxZ : atomic<i32>,
dummy1 : i32,
dummy2 : i32,};fn floatToBits(value: f32)->i32 {return bitcast<i32>(value);}
fn bitsToFloat(value: i32)->f32 {return bitcast<f32>(value);}
fn atomicMinFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value>=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn atomicMaxFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value<=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4<f32>(m0,m1,m2,m3);}
const identity=mat4x4f(
vec4f(1.0,0.0,0.0,0.0),
vec4f(0.0,1.0,0.0,0.0),
vec4f(0.0,0.0,1.0,0.0),
vec4f(0.0,0.0,0.0,1.0)
);struct Settings {morphTargetTextureInfo: vec3f,
morphTargetCount: i32,
indexResult : u32,};@group(0) @binding(0) var<storage,read> positionBuffer : array<f32>;@group(0) @binding(1) var<storage,read_write> resultBuffer : array<Results>;@group(0) @binding(7) var<uniform> settings : Settings;
#if NUM_BONE_INFLUENCERS>0
@group(0) @binding(2) var boneSampler : texture_2d<f32>;@group(0) @binding(3) var<storage,read> indexBuffer : array<vec4f>;@group(0) @binding(4) var<storage,read> weightBuffer : array<vec4f>;
#if NUM_BONE_INFLUENCERS>4
@group(0) @binding(5) var<storage,read> indexExtraBuffer : array<vec4f>;@group(0) @binding(6) var<storage,read> weightExtraBuffer : array<vec4f>;
#endif
#endif
#ifdef MORPHTARGETS
@group(0) @binding(8) var morphTargets : texture_2d_array<f32>;@group(0) @binding(9) var<storage,read> morphTargetInfluences : array<f32>;@group(0) @binding(10) var<storage,read> morphTargetTextureIndices : array<f32>;
#endif
#ifdef MORPHTARGETS
fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : u32)->vec3f
{ 
let vertexID=f32(vertexIndex)*settings.morphTargetTextureInfo.x;let y=floor(vertexID/settings.morphTargetTextureInfo.y);let x=vertexID-y*settings.morphTargetTextureInfo.y;let textureUV=vec2<i32>(i32(x),i32(y));return textureLoad(morphTargets,textureUV,i32(morphTargetTextureIndices[targetIndex]),0).xyz;}
#endif
@compute @workgroup_size(256,1,1)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {let index=global_id.x;if (index>=arrayLength(&positionBuffer)/3) {return;}
let position=vec3f(positionBuffer[index*3],positionBuffer[index*3+1],positionBuffer[index*3+2]);var finalWorld=identity;var positionUpdated=position;
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;let matricesIndices=indexBuffer[index];let matricesWeights=weightBuffer[index];influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
let matricesIndicesExtra=indexExtraBuffer[index];let matricesWeightsExtra=weightExtraBuffer[index];influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.x)*matricesWeightsExtra.x;
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.y)*matricesWeightsExtra.y;
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.z)*matricesWeightsExtra.z;
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.w)*matricesWeightsExtra.w;
#endif 
#endif 
finalWorld=finalWorld*influence;
#endif
#ifdef MORPHTARGETS
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (i>=settings.morphTargetCount) {break;}
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,index)-position)*morphTargetInfluences[i];}
#endif
var worldPos=finalWorld*vec4f(positionUpdated.x,positionUpdated.y,positionUpdated.z,1.0);atomicMinFloat(&resultBuffer[settings.indexResult].minX,worldPos.x);atomicMinFloat(&resultBuffer[settings.indexResult].minY,worldPos.y);atomicMinFloat(&resultBuffer[settings.indexResult].minZ,worldPos.z);atomicMaxFloat(&resultBuffer[settings.indexResult].maxX,worldPos.x);atomicMaxFloat(&resultBuffer[settings.indexResult].maxY,worldPos.y);atomicMaxFloat(&resultBuffer[settings.indexResult].maxZ,worldPos.z);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const boundingInfoComputeShaderWGSL = { name, shader };
//# sourceMappingURL=boundingInfo.compute.js.map

/***/ }),

/***/ 89619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chromaticAberrationPixelShaderWGSL: () => (/* binding */ chromaticAberrationPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "chromaticAberrationPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform chromatic_aberration: f32;uniform radialIntensity: f32;uniform direction: vec2f;uniform centerPosition: vec2f;uniform screen_width: f32;uniform screen_height: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var centered_screen_pos: vec2f= vec2f(input.vUV.x-uniforms.centerPosition.x,input.vUV.y-uniforms.centerPosition.y);var directionOfEffect: vec2f=uniforms.direction;if(directionOfEffect.x==0. && directionOfEffect.y==0.){directionOfEffect=normalize(centered_screen_pos);}
var radius2: f32=centered_screen_pos.x*centered_screen_pos.x
+ centered_screen_pos.y*centered_screen_pos.y;var radius: f32=sqrt(radius2);var ref_indices: vec3f= vec3f(-0.3,0.0,0.3);var ref_shiftX: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.x/uniforms.screen_width;var ref_shiftY: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.y/uniforms.screen_height;var ref_coords_r: vec2f=vec2f(input.vUV.x+ref_indices.r*ref_shiftX,input.vUV.y+ref_indices.r*ref_shiftY*0.5);var ref_coords_g: vec2f=vec2f(input.vUV.x+ref_indices.g*ref_shiftX,input.vUV.y+ref_indices.g*ref_shiftY*0.5);var ref_coords_b: vec2f=vec2f(input.vUV.x+ref_indices.b*ref_shiftX,input.vUV.y+ref_indices.b*ref_shiftY*0.5);var r=textureSample(textureSampler,textureSamplerSampler,ref_coords_r);var g=textureSample(textureSampler,textureSamplerSampler,ref_coords_g);var b=textureSample(textureSampler,textureSamplerSampler,ref_coords_b);var a=clamp(r.a+g.a+b.a,0.,1.);fragmentOutputs.color=vec4f(r.r,g.g,b.b,a);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const chromaticAberrationPixelShaderWGSL = { name, shader };
//# sourceMappingURL=chromaticAberration.fragment.js.map

/***/ }),

/***/ 22217:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleOfConfusionPixelShaderWGSL: () => (/* binding */ circleOfConfusionPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "circleOfConfusionPixelShader";
const shader = `varying vUV: vec2f;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifndef COC_DEPTH_NOT_NORMALIZED
uniform cameraMinMaxZ: vec2f;
#endif
uniform focusDistance: f32;uniform cocPrecalculation: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSample(depthSampler,depthSamplerSampler,input.vUV).r;
#define CUSTOM_COC_DEPTH
#ifdef COC_DEPTH_NOT_NORMALIZED
let pixelDistance=depth*1000.0;
#else
let pixelDistance: f32=(uniforms.cameraMinMaxZ.x+uniforms.cameraMinMaxZ.y*depth)*1000.0; 
#endif
#define CUSTOM_COC_PIXELDISTANCE
var coc: f32=abs(uniforms.cocPrecalculation*((uniforms.focusDistance-pixelDistance)/pixelDistance));coc=clamp(coc,0.0,1.0);fragmentOutputs.color= vec4f(coc,coc,coc,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const circleOfConfusionPixelShaderWGSL = { name, shader };
//# sourceMappingURL=circleOfConfusion.fragment.js.map

/***/ }),

/***/ 6278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export clearQuadPixelShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clearQuadPixelShader";
const shader = `uniform color: vec4f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=uniforms.color;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const clearQuadPixelShaderWGSL = { name, shader };
//# sourceMappingURL=clearQuad.fragment.js.map

/***/ }),

/***/ 98444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export clearQuadVertexShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clearQuadVertexShader";
const shader = `uniform depthValue: f32;const pos=array(
vec2f(-1.0,1.0),
vec2f(1.0,1.0),
vec2f(-1.0,-1.0),
vec2f(1.0,-1.0)
);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.position=vec4f(pos[input.vertexIndex],uniforms.depthValue,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const clearQuadVertexShaderWGSL = { name, shader };
//# sourceMappingURL=clearQuad.vertex.js.map

/***/ }),

/***/ 50861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorPixelShaderWGSL: () => (/* binding */ colorPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66407);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97715);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93243);
// Do not edit.





const name = "colorPixelShader";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const colorPixelShaderWGSL = { name, shader };
//# sourceMappingURL=color.fragment.js.map

/***/ }),

/***/ 84935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorVertexShaderWGSL: () => (/* binding */ colorVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75757);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59013);
/* harmony import */ var _ShadersInclude_vertexColorMixing_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(820);
// Do not edit.












const name = "colorVertexShader";
const shader = `attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const colorVertexShaderWGSL = { name, shader };
//# sourceMappingURL=color.vertex.js.map

/***/ }),

/***/ 53813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorCorrectionPixelShaderWGSL: () => (/* binding */ colorCorrectionPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "colorCorrectionPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;var colorTableSampler: sampler;var colorTable: texture_2d<f32>;const SLICE_COUNT: f32=16.0; 
fn sampleAs3DTexture(uv: vec3f,width: f32)->vec4f {var sliceSize: f32=1.0/width; 
var slicePixelSize: f32=sliceSize/width; 
var sliceInnerSize: f32=slicePixelSize*(width-1.0); 
var zSlice0: f32=min(floor(uv.z*width),width-1.0);var zSlice1: f32=min(zSlice0+1.0,width-1.0);var xOffset: f32=slicePixelSize*0.5+uv.x*sliceInnerSize;var s0: f32=xOffset+(zSlice0*sliceSize);var s1: f32=xOffset+(zSlice1*sliceSize);var slice0Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s0,uv.y));var slice1Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s1,uv.y));var zOffset: f32=((uv.z*width)%(1.0));return mix(slice0Color,slice1Color,zOffset);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var screen_color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=sampleAs3DTexture(screen_color.rgb,SLICE_COUNT);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const colorCorrectionPixelShaderWGSL = { name, shader };
//# sourceMappingURL=colorCorrection.fragment.js.map

/***/ }),

/***/ 52906:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convolutionPixelShaderWGSL: () => (/* binding */ convolutionPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "convolutionPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform kernel: array<f32,9>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var colorSum: vec4f =
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,-1))*uniforms.kernel[0] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,-1))*uniforms.kernel[1] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,-1))*uniforms.kernel[2] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,0))*uniforms.kernel[3] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,0))*uniforms.kernel[4] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,0))*uniforms.kernel[5] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,1))*uniforms.kernel[6] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,1))*uniforms.kernel[7] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,1))*uniforms.kernel[8];var kernelWeight: f32 =
uniforms.kernel[0] +
uniforms.kernel[1] +
uniforms.kernel[2] +
uniforms.kernel[3] +
uniforms.kernel[4] +
uniforms.kernel[5] +
uniforms.kernel[6] +
uniforms.kernel[7] +
uniforms.kernel[8];if (kernelWeight<=0.0) {kernelWeight=1.0;}
fragmentOutputs.color= vec4f((colorSum/kernelWeight).rgb,1);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const convolutionPixelShaderWGSL = { name, shader };
//# sourceMappingURL=convolution.fragment.js.map

/***/ }),

/***/ 95176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTexture3DLayerToTexturePixelShaderWGSL: () => (/* binding */ copyTexture3DLayerToTexturePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "copyTexture3DLayerToTexturePixelShader";
const shader = `var textureSampler: texture_3d<f32>;uniform layerNum: i32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec3f(vec2f(input.vUV.x,input.vUV.y)*vec2f(textureDimensions(textureSampler,0).xy),f32(uniforms.layerNum));let color=textureLoad(textureSampler,vec3i(coord),0).rgb;fragmentOutputs.color= vec4f(color,1);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const copyTexture3DLayerToTexturePixelShaderWGSL = { name, shader };
//# sourceMappingURL=copyTexture3DLayerToTexture.fragment.js.map

/***/ }),

/***/ 17770:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTextureToTexturePixelShaderWGSL: () => (/* binding */ copyTextureToTexturePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "copyTextureToTexturePixelShader";
const shader = `uniform conversion: f32;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef DEPTH_TEXTURE
fragmentOutputs.fragDepth=color.r;
#else
if (uniforms.conversion==1.) {color=toLinearSpaceVec4(color);} else if (uniforms.conversion==2.) {color=toGammaSpace(color);}
fragmentOutputs.color=color;
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const copyTextureToTexturePixelShaderWGSL = { name, shader };
//# sourceMappingURL=copyTextureToTexture.fragment.js.map

/***/ }),

/***/ 45791:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPixelShaderWGSL: () => (/* binding */ defaultPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_defaultUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71698);
/* harmony import */ var _ShadersInclude_prePassDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54211);
/* harmony import */ var _ShadersInclude_oitDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18639);
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41861);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_lightUboDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30379);
/* harmony import */ var _ShadersInclude_lightsFragmentFunctions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76493);
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78589);
/* harmony import */ var _ShadersInclude_samplerFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80983);
/* harmony import */ var _ShadersInclude_fresnelFunction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30976);
/* harmony import */ var _ShadersInclude_reflectionFunction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72230);
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16205);
/* harmony import */ var _ShadersInclude_imageProcessingFunctions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88996);
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15697);
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91258);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66407);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97715);
/* harmony import */ var _ShadersInclude_bumpFragment_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20727);
/* harmony import */ var _ShadersInclude_decalFragment_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49306);
/* harmony import */ var _ShadersInclude_depthPrePass_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59104);
/* harmony import */ var _ShadersInclude_lightFragment_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25271);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(38780);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(93243);
/* harmony import */ var _ShadersInclude_oitFragment_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91347);
// Do not edit.



























const name = "defaultPixelShader";
const shader = `#include<defaultUboDeclaration>
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
var refractionCubeSamplerSampler: sampler;var refractionCubeSampler: texture_cube<f32>;
#else
var refraction2DSamplerSampler: sampler;var refraction2DSampler: texture_2d<f32>;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;
#else
var reflection2DSamplerSampler: sampler;var reflection2DSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f=normalize(-cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#ifdef DIFFUSE
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<uniforms.alphaCutOff) {discard;}
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef DETAIL
baseColor=vec4f(baseColor.rgb*2.0*mix(0.5,detailColor.r,uniforms.vDetailInfos.y),baseColor.a);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
var baseAmbientColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb*uniforms.vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
var specularMapColor: vec4f=textureSample(specularSampler,specularSamplerSampler,fragmentInputs.vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;
#ifdef SPECULARTERM
var specularBase: vec3f= vec3f(0.,0.,0.);
#endif
var shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;
#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFRACTION
var refractionVector: vec3f=normalize(refract(-viewDirectionW,normalW,uniforms.vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(fragmentInputs.vPositionW,refractionVector,uniforms.vRefractionSize,uniforms.vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*uniforms.vRefractionInfos.w;var refractionLookup: vec4f=textureSample(refractionCubeSampler,refractionCubeSamplerSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
var vRefractionUVW: vec3f= (uniforms.refractionMatrix*(scene.view* vec4f(fragmentInputs.vPositionW+refractionVector*uniforms.vRefractionInfos.z,1.0))).xyz;var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=textureSample(refraction2DSampler,refraction2DSamplerSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor=vec4f(fromRGBD(refractionColor),refractionColor.a);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor=vec4f(toGammaSpaceVec3(refractionColor.rgb),refractionColor.a);
#endif
refractionColor=vec4f(refractionColor.rgb*uniforms.vRefractionInfos.x,refractionColor.a);
#endif
var reflectionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFLECTION
var vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
var bias: f32=uniforms.vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);
#else
reflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);
#endif
#else
var coords: vec2f=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=textureSample(reflection2DSampler,reflection2DSamplerSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#ifdef REFLECTIONFRESNEL
var reflectionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.reflectionRightColor.a,uniforms.reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor=vec4f(reflectionColor.rgb*specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
var refractionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.refractionRightColor.a,uniforms.refractionLeftColor.a);refractionColor=vec4f(refractionColor.rgb*uniforms.refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*uniforms.refractionRightColor.rgb,refractionColor.a);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;
#else
alpha*=opacityMap.a*uniforms.vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#ifdef OPACITYFRESNEL
var opacityFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.opacityParts.z,uniforms.opacityParts.w);alpha+=uniforms.opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*uniforms.opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<uniforms.alphaCutOff) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
var emissiveColor: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
var emissiveFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.emissiveRightColor.a,uniforms.emissiveLeftColor.a);emissiveColor*=uniforms.emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*uniforms.emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
var diffuseFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.diffuseRightColor.a,uniforms.diffuseLeftColor.a);diffuseBase*=uniforms.diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*uniforms.diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
var finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#else
var finalSpecular: vec3f= vec3f(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#ifdef EMISSIVEASILLUMINATION
var color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
var color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color=vec4f(color.rgb*lightmapColor.rgb,color.a);
#else
color=vec4f(color.rgb+lightmapColor.rgb,color.a);
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color=vec4f(max(color.rgb,vec3f(0.)),color.a);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);
#else
#ifdef IMAGEPROCESSING
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);color=applyImageProcessing(color);
#endif
#endif
color=vec4f(color.rgb,color.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb*color.a, color.a);
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
var writeGeometryInfo: f32=select(0.0,1.0,color.a>0.4);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]=vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec4(specularMapColor))*writeGeometryInfo; 
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec3(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+color.rgb*color.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-color.a));} else {fragmentOutputs.backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const defaultPixelShaderWGSL = { name, shader };
//# sourceMappingURL=default.fragment.js.map

/***/ }),

/***/ 59235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  defaultVertexShaderWGSL: () => (/* binding */ defaultVertexShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js
var defaultUboDeclaration = __webpack_require__(71698);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js
var uvAttributeDeclaration = __webpack_require__(1008);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(79702);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(32806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(98900);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(44559);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js
var prePassVertexDeclaration = __webpack_require__(37769);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(41861);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js
var samplerVertexDeclaration = __webpack_require__(89277);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js
var bumpVertexDeclaration = __webpack_require__(97777);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(77029);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(75757);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxFragmentDeclaration.js
// Do not edit.

const lightVxFragmentDeclaration_name = "lightVxFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vLightData{X}: vec4f;uniform vLightDiffuse{X}: vec4f;
#ifdef SPECULARTERM
uniform vLightSpecular{X}: vec4f;
#else
var vLightSpecular{X}: vec4f= vec4f(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: mat4x4f[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromLight{X}: vec4f[SHADOWCSMNUM_CASCADES{X}];varying var vDepthMetric{X}: f32[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying var vPositionFromLight{X}: vec4f;varying var vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
uniform shadowsInfo{X}: vec4f;uniform depthValues{X}: vec2f;
#endif
#ifdef SPOTLIGHT{X}
uniform vLightDirection{X}: vec4f;uniform vLightFalloff{X}: vec4f;
#elif defined(POINTLIGHT{X})
uniform vLightFalloff{X}: vec4f;
#elif defined(HEMILIGHT{X})
uniform vLightGround{X}: vec3f;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[lightVxFragmentDeclaration_name] = shader;
/** @internal */
const lightVxFragmentDeclarationWGSL = { name: lightVxFragmentDeclaration_name, shader };
//# sourceMappingURL=lightVxFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js
var lightVxUboDeclaration = __webpack_require__(3925);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(76340);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(8217);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(18258);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(9129);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(91277);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(65470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(40242);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertex.js
var prePassVertex = __webpack_require__(47033);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js
var uvVariableDeclaration = __webpack_require__(20774);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js
var samplerVertexImplementation = __webpack_require__(52231);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertex.js
var bumpVertex = __webpack_require__(87921);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(85197);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(59013);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js
var shadowsVertex = __webpack_require__(79456);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/vertexColorMixing.js
var vertexColorMixing = __webpack_require__(820);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(81482);
;// ./node_modules/@babylonjs/core/ShadersWGSL/default.vertex.js
// Do not edit.
































const default_vertex_name = "defaultVertexShader";
const default_vertex_shader = `#include<defaultUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld* vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[default_vertex_name] = default_vertex_shader;
/** @internal */
const defaultVertexShaderWGSL = { name: default_vertex_name, shader: default_vertex_shader };
//# sourceMappingURL=default.vertex.js.map

/***/ }),

/***/ 38939:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPixelShaderWGSL: () => (/* binding */ depthPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_packingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5543);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97715);
// Do not edit.




const name = "depthPixelShader";
const shader = `#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
varying vDepthMetric: f32;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vViewPos: vec4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
fragmentOutputs.color=pack(input.vViewPos.z);
#else
fragmentOutputs.color= vec4f(input.vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
fragmentOutputs.color=pack(input.position.z);
#else
fragmentOutputs.color= vec4f(input.position.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
fragmentOutputs.color=pack(input.vDepthMetric);
#else
fragmentOutputs.color= vec4f(input.vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const depthPixelShaderWGSL = { name, shader };
//# sourceMappingURL=depth.fragment.js.map

/***/ }),

/***/ 48453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthVertexShaderWGSL: () => (/* binding */ depthVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85197);
// Do not edit.













const name = "depthVertexShader";
const shader = `attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;uniform depthValues: vec2f;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform view: mat4x4f;varying vViewPos: vec4f;
#endif
varying vDepthMetric: f32;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vertexOutputs.vViewPos=uniforms.view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric=((-vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#else
vertexOutputs.vDepthMetric=((vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const depthVertexShaderWGSL = { name, shader };
//# sourceMappingURL=depth.vertex.js.map

/***/ }),

/***/ 10355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthBoxBlurPixelShaderWGSL: () => (/* binding */ depthBoxBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthBoxBlurPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorDepth: vec4f=vec4f(0.0);for (var x: i32=-OFFSET; x<=OFFSET; x++) {for (var y: i32=-OFFSET; y<=OFFSET; y++) {colorDepth+=textureSample(textureSampler,textureSamplerSampler,input.vUV+ vec2f(f32(x),f32(y))/uniforms.screenSize);}}
fragmentOutputs.color=(colorDepth/ f32((OFFSET*2+1)*(OFFSET*2+1)));}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const depthBoxBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=depthBoxBlur.fragment.js.map

/***/ }),

/***/ 89480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthOfFieldMergePixelShaderWGSL: () => (/* binding */ depthOfFieldMergePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthOfFieldMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;var blurStep0Sampler: sampler;var blurStep0: texture_2d<f32>;
#if BLUR_LEVEL>0
var blurStep1Sampler: sampler;var blurStep1: texture_2d<f32>;
#endif
#if BLUR_LEVEL>1
var blurStep2Sampler: sampler;var blurStep2: texture_2d<f32>;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coc: f32=textureSampleLevel(circleOfConfusionSampler,circleOfConfusionSamplerSampler,input.vUV,0.0).r;
#if BLUR_LEVEL==0
var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL==1
if(coc<0.5){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred1,coc/0.5);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.5)/0.5);}
#endif
#if BLUR_LEVEL==2
if(coc<0.33){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred2,coc/0.33);}else if(coc<0.66){var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred2,blurred1,(coc-0.33)/0.33);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.66)/0.34);}
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const depthOfFieldMergePixelShaderWGSL = { name, shader };
//# sourceMappingURL=depthOfFieldMerge.fragment.js.map

/***/ }),

/***/ 54069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayPassPixelShaderWGSL: () => (/* binding */ displayPassPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "displayPassPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const displayPassPixelShaderWGSL = { name, shader };
//# sourceMappingURL=displayPass.fragment.js.map

/***/ }),

/***/ 95516:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractHighlightsPixelShaderWGSL: () => (/* binding */ extractHighlightsPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "extractHighlightsPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform threshold: f32;uniform exposure: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var luma: f32=dot(LuminanceEncodeApprox,fragmentOutputs.color.rgb*uniforms.exposure);fragmentOutputs.color=vec4f(step(uniforms.threshold,luma)*fragmentOutputs.color.rgb,fragmentOutputs.color.a);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const extractHighlightsPixelShaderWGSL = { name, shader };
//# sourceMappingURL=extractHighlights.fragment.js.map

/***/ }),

/***/ 57912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterPixelShaderWGSL: () => (/* binding */ filterPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "filterPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform kernelMatrix: mat4x4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var baseColor: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var updatedColor: vec3f=(uniforms.kernelMatrix* vec4f(baseColor,1.0)).rgb;fragmentOutputs.color= vec4f(updatedColor,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const filterPixelShaderWGSL = { name, shader };
//# sourceMappingURL=filter.fragment.js.map

/***/ }),

/***/ 97163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingBilateralBlurPixelShaderWGSL: () => (/* binding */ fluidRenderingBilateralBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingBilateralBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform maxFilterSize: i32;uniform blurDir: vec2f;uniform projectedParticleConstant: f32;uniform depthThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color=vec4f(vec3f(depth),1.);return fragmentOutputs;}
var filterSize: i32=min(uniforms.maxFilterSize,i32(ceil(uniforms.projectedParticleConstant/depth)));var sigma: f32=f32(filterSize)/3.0;var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold/3.0;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sum: f32=0.;var wsum: f32=0.;var sumVel: f32=0.;for (var x: i32=-filterSize; x<=filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampleDepthVel: vec2f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rg;var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepthVel.r-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);sum+=sampleDepthVel.r*w*wd;sumVel+=sampleDepthVel.g*w*wd;wsum+=w*wd;}
fragmentOutputs.color=vec4f(sum/wsum,sumVel/wsum,0.,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingBilateralBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingBilateralBlur.fragment.js.map

/***/ }),

/***/ 67297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDepthPixelShaderWGSL: () => (/* binding */ fluidRenderingParticleDepthPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDepthPixelShader";
const shader = `uniform projection: mat4x4f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
varying velocityNorm: f32;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var normal: vec3f=vec3f(normalxy,sqrt(1.0-r2));
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
var realViewPos: vec4f=vec4f(input.viewPos+normal*input.sphereRadius,1.0);var clipSpacePos: vec4f=uniforms.projection*realViewPos;fragmentOutputs.fragDepth=clipSpacePos.z/clipSpacePos.w;
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
fragmentOutputs.color=vec4f(realViewPos.z,input.velocityNorm,0.,1.);
#else
fragmentOutputs.color=vec4f(realViewPos.z,0.,0.,1.);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleDepthPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDepth.fragment.js.map

/***/ }),

/***/ 27499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDepthVertexShaderWGSL: () => (/* binding */ fluidRenderingParticleDepthVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDepthVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
attribute velocity: vec3f;varying velocityNorm: f32;
#endif
@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);vertexOutputs.viewPos=(uniforms.view*vec4f(input.position,1.0)).xyz;vertexOutputs.position=uniforms.projection*vec4f(vertexOutputs.viewPos+cornerPos,1.0);vertexOutputs.uv=input.offset;vertexOutputs.sphereRadius=uniforms.size.x/2.0;
#ifdef FLUIDRENDERING_VELOCITY
vertexOutputs.velocityNorm=length(velocity);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleDepthVertexShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDepth.vertex.js.map

/***/ }),

/***/ 75636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDiffusePixelShaderWGSL: () => (/* binding */ fluidRenderingParticleDiffusePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDiffusePixelShader";
const shader = `uniform particleAlpha: f32;varying uv: vec2f;varying diffuseColor: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
fragmentOutputs.color=vec4f(input.diffuseColor,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleDiffusePixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDiffuse.fragment.js.map

/***/ }),

/***/ 8850:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fluidRenderingParticleDiffuseVertexShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDiffuseVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;varying diffuseColor: vec3f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;vertexOutputs.diffuseColor=input.color.rgb;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleDiffuseVertexShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDiffuse.vertex.js.map

/***/ }),

/***/ 84556:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleThicknessPixelShaderWGSL: () => (/* binding */ fluidRenderingParticleThicknessPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleThicknessPixelShader";
const shader = `uniform particleAlpha: f32;varying uv: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var thickness: f32=sqrt(1.0-r2);fragmentOutputs.color=vec4f(vec3f(uniforms.particleAlpha*thickness),1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleThicknessPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleThickness.fragment.js.map

/***/ }),

/***/ 63866:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleThicknessVertexShaderWGSL: () => (/* binding */ fluidRenderingParticleThicknessVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleThicknessVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingParticleThicknessVertexShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingParticleThickness.vertex.js.map

/***/ }),

/***/ 52150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingRenderPixelShaderWGSL: () => (/* binding */ fluidRenderingRenderPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingRenderPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
#define IOR 1.333
#define ETA 1.0/IOR
#define F0 0.02
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#else
uniform diffuseColor: vec3f;
#endif
#ifdef FLUIDRENDERING_FIXED_THICKNESS
uniform thickness: f32;var bgDepthSamplerSampler: sampler;var bgDepthSampler: texture_2d<f32>;
#else
uniform minimumThickness: f32;var thicknessSamplerSampler: sampler;var thicknessSampler: texture_2d<f32>;
#endif
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;
#endif
uniform viewMatrix: mat4x4f;uniform projectionMatrix: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform texelSize: vec2f;uniform dirLight: vec3f;uniform cameraFar: f32;uniform density: f32;uniform refractionStrength: f32;uniform fresnelClamp: f32;uniform specularPower: f32;varying vUV: vec2f;fn computeViewPosFromUVDepth(texCoord: vec2f,depth: f32)->vec3f {var ndc: vec4f=vec4f(texCoord*2.0-1.0,0.0,1.0);
#ifdef FLUIDRENDERING_RHS
ndc.z=-uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#else
ndc.z=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#endif
ndc.w=1.0;var eyePos: vec4f=uniforms.invProjectionMatrix*ndc;return eyePos.xyz/eyePos.w;}
fn getViewPosFromTexCoord(texCoord: vec2f)->vec3f {var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).x;return computeViewPosFromUVDepth(texCoord,depth);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var texCoord: vec2f=input.vUV;
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var color: vec4f=textureSample(debugSampler,debugSamplerSampler,texCoord);
#ifdef FLUIDRENDERING_DEBUG_DEPTH
fragmentOutputs.color=vec4f(color.rgb/vec3f(2.0),1.);if (color.r>0.999 && color.g>0.999) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#else
fragmentOutputs.color=vec4f(color.rgb,1.);if (color.r<0.001 && color.g<0.001 && color.b<0.001) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#endif
return fragmentOutputs;
#endif
var depthVel: vec2f=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).rg;var depth: f32=depthVel.r;
#ifndef FLUIDRENDERING_FIXED_THICKNESS
var thickness: f32=textureSample(thicknessSampler,thicknessSamplerSampler,texCoord).x;
#else
var thickness: f32=uniforms.thickness;var bgDepth: f32=textureSample(bgDepthSampler,bgDepthSamplerSampler,texCoord).x;var depthNonLinear: f32=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;depthNonLinear=depthNonLinear*0.5+0.5;
#endif
var backColor: vec4f=textureSample(textureSampler,textureSamplerSampler,texCoord);
#ifndef FLUIDRENDERING_FIXED_THICKNESS
if (depth>=uniforms.cameraFar || depth<=0. || thickness<=uniforms.minimumThickness) {
#else
if (depth>=uniforms.cameraFar || depth<=0. || bgDepth<=depthNonLinear) {
#endif
#ifdef FLUIDRENDERING_COMPOSITE_MODE
fragmentOutputs.color=vec4f(backColor.rgb*backColor.a,backColor.a);
#else
fragmentOutputs.color=backColor;
#endif
return fragmentOutputs;}
var viewPos: vec3f=computeViewPosFromUVDepth(texCoord,depth);var ddx: vec3f=getViewPosFromTexCoord(texCoord+vec2f(uniforms.texelSize.x,0.))-viewPos;var ddy: vec3f=getViewPosFromTexCoord(texCoord+vec2f(0.,uniforms.texelSize.y))-viewPos;var ddx2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(-uniforms.texelSize.x,0.));if (abs(ddx.z)>abs(ddx2.z)) {ddx=ddx2;}
var ddy2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(0.,-uniforms.texelSize.y));if (abs(ddy.z)>abs(ddy2.z)) {ddy=ddy2;}
var normal: vec3f=normalize(cross(ddy,ddx));
#ifdef FLUIDRENDERING_RHS
normal=-normal;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_SHOWNORMAL)
fragmentOutputs.color=vec4f(normal*0.5+0.5,1.0);return fragmentOutputs;
#endif
var rayDir: vec3f=normalize(viewPos); 
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseColor: vec3f=textureSampleLevel(diffuseSampler,diffuseSamplerSampler,texCoord,0.0).rgb;
#else
var diffuseColor: vec3f=uniforms.diffuseColor;
#endif
var lightDir: vec3f=normalize((uniforms.viewMatrix*vec4f(-uniforms.dirLight,0.)).xyz);var H: vec3f =normalize(lightDir-rayDir);var specular: f32 =pow(max(0.0,dot(H,normal)),uniforms.specularPower);
#ifdef FLUIDRENDERING_DEBUG_DIFFUSERENDERING
var diffuse: f32 =max(0.0,dot(lightDir,normal))*1.0;fragmentOutputs.color=vec4f(vec3f(0.1) /*ambient*/+vec3f(0.42,0.50,1.00)*diffuse+vec3f(0,0,0.2)+specular,1.);return fragmentOutputs;
#endif
var refractionDir: vec3f=refract(rayDir,normal,ETA);var transmitted: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,vec2f(texCoord+refractionDir.xy*thickness*uniforms.refractionStrength),0.0);
#ifdef FLUIDRENDERING_COMPOSITE_MODE
if (transmitted.a==0.) {transmitted.a=thickness;}
#endif
var transmittance: vec3f=exp(-uniforms.density*thickness*(1.0-diffuseColor)); 
var refractionColor: vec3f=transmitted.rgb*transmittance;
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionDir: vec3f=reflect(rayDir,normal);var reflectionColor: vec3f=(textureSample(reflectionSampler,reflectionSamplerSampler,reflectionDir).rgb);var fresnel: f32=clamp(F0+(1.0-F0)*pow(1.0-dot(normal,-rayDir),5.0),0.,uniforms.fresnelClamp);var finalColor: vec3f=mix(refractionColor,reflectionColor,fresnel)+specular;
#else
var finalColor: vec3f=refractionColor+specular;
#endif
#ifdef FLUIDRENDERING_VELOCITY
var velocity: f32=depthVel.g;finalColor=mix(finalColor,vec3f(1.0),smoothstep(0.3,1.0,velocity/6.0));
#endif
fragmentOutputs.color=vec4f(finalColor,transmitted.a);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingRenderPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingRender.fragment.js.map

/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingStandardBlurPixelShaderWGSL: () => (/* binding */ fluidRenderingStandardBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingStandardBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var s: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.);if (s.r==0.) {fragmentOutputs.color=vec4f(0.,0.,0.,1.);return fragmentOutputs;}
var sigma: f32=f32(uniforms.filterSize)/3.0;var twoSigma2: f32=2.0*sigma*sigma;var sum: vec4f=vec4f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampl: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.);var w: f32=exp(-coords.x*coords.x/twoSigma2);sum+=sampl*w;wsum+=w;}
sum/=wsum;fragmentOutputs.color=vec4f(sum.rgb,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fluidRenderingStandardBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fluidRenderingStandardBlur.fragment.js.map

/***/ }),

/***/ 72578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fxaaPixelShaderWGSL: () => (/* binding */ fxaaPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fxaaPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const fxaaQualitySubpix: f32=1.0;const fxaaQualityEdgeThreshold: f32=0.166;const fxaaQualityEdgeThresholdMin: f32=0.0833;const kLumaCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);fn FxaaLuma(rgba: vec4f)->f32 {return dot(rgba.rgb,kLumaCoefficients);} 
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var posM: vec2f;posM.x=input.vUV.x;posM.y=input.vUV.y;var rgbyM: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var lumaM: f32=FxaaLuma(rgbyM);var lumaS: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordS,0.0));var lumaE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordE,0.0));var lumaN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordN,0.0));var lumaW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordW,0.0));var maxSM: f32=max(lumaS,lumaM);var minSM: f32=min(lumaS,lumaM);var maxESM: f32=max(lumaE,maxSM);var minESM: f32=min(lumaE,minSM);var maxWN: f32=max(lumaN,lumaW);var minWN: f32=min(lumaN,lumaW);var rangeMax: f32=max(maxWN,maxESM);var rangeMin: f32=min(minWN,minESM);var rangeMaxScaled: f32=rangeMax*fxaaQualityEdgeThreshold;var range: f32=rangeMax-rangeMin;var rangeMaxClamped: f32=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;return fragmentOutputs;}
#endif
var lumaNW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNW,0.0));var lumaSE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSE,0.0));var lumaNE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNE,0.0));var lumaSW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSW,0.0));var lumaNS: f32=lumaN+lumaS;var lumaWE: f32=lumaW+lumaE;var subpixRcpRange: f32=1.0/range;var subpixNSWE: f32=lumaNS+lumaWE;var edgeHorz1: f32=(-2.0*lumaM)+lumaNS;var edgeVert1: f32=(-2.0*lumaM)+lumaWE;var lumaNESE: f32=lumaNE+lumaSE;var lumaNWNE: f32=lumaNW+lumaNE;var edgeHorz2: f32=(-2.0*lumaE)+lumaNESE;var edgeVert2: f32=(-2.0*lumaN)+lumaNWNE;var lumaNWSW: f32=lumaNW+lumaSW;var lumaSWSE: f32=lumaSW+lumaSE;var edgeHorz4: f32=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);var edgeVert4: f32=(abs(edgeVert1)*2.0)+abs(edgeVert2);var edgeHorz3: f32=(-2.0*lumaW)+lumaNWSW;var edgeVert3: f32=(-2.0*lumaS)+lumaSWSE;var edgeHorz: f32=abs(edgeHorz3)+edgeHorz4;var edgeVert: f32=abs(edgeVert3)+edgeVert4;var subpixNWSWNESE: f32=lumaNWSW+lumaNESE;var lengthSign: f32=uniforms.texelSize.x;var horzSpan: bool=edgeHorz>=edgeVert;var subpixA: f32=subpixNSWE*2.0+subpixNWSWNESE;if (!horzSpan)
{lumaN=lumaW;}
if (!horzSpan) 
{lumaS=lumaE;}
if (horzSpan) 
{lengthSign=uniforms.texelSize.y;}
var subpixB: f32=(subpixA*(1.0/12.0))-lumaM;var gradientN: f32=lumaN-lumaM;var gradientS: f32=lumaS-lumaM;var lumaNN: f32=lumaN+lumaM;var lumaSS: f32=lumaS+lumaM;var pairN: bool=abs(gradientN)>=abs(gradientS);var gradient: f32=max(abs(gradientN),abs(gradientS));if (pairN)
{lengthSign=-lengthSign;}
var subpixC: f32=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);var posB: vec2f;posB.x=posM.x;posB.y=posM.y;var offNP: vec2f;offNP.x=select(uniforms.texelSize.x,0.0,(!horzSpan));offNP.y=select(uniforms.texelSize.y,0.0,(horzSpan));if (!horzSpan) 
{posB.x+=lengthSign*0.5;}
if (horzSpan)
{posB.y+=lengthSign*0.5;}
var posN: vec2f;posN.x=posB.x-offNP.x*1.5;posN.y=posB.y-offNP.y*1.5;var posP: vec2f;posP.x=posB.x+offNP.x*1.5;posP.y=posB.y+offNP.y*1.5;var subpixD: f32=((-2.0)*subpixC)+3.0;var lumaEndN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN,0.0));var subpixE: f32=subpixC*subpixC;var lumaEndP: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP,0.0));if (!pairN) 
{lumaNN=lumaSS;}
var gradientScaled: f32=gradient*1.0/4.0;var lumaMM: f32=lumaM-lumaNN*0.5;var subpixF: f32=subpixD*subpixE;var lumaMLTZero: bool=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;var doneN: bool=abs(lumaEndN)>=gradientScaled;var doneP: bool=abs(lumaEndP)>=gradientScaled;if (!doneN) 
{posN.x-=offNP.x*3.0;}
if (!doneN) 
{posN.y-=offNP.y*3.0;}
var doneNP: bool=(!doneN) || (!doneP);if (!doneP) 
{posP.x+=offNP.x*3.0;}
if (!doneP)
{posP.y+=offNP.y*3.0;}
if (doneNP)
{if (!doneN) {lumaEndN=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN.xy,0.0));}
if (!doneP) {lumaEndP=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP.xy,0.0));}
if (!doneN) {lumaEndN=lumaEndN-lumaNN*0.5;}
if (!doneP) {lumaEndP=lumaEndP-lumaNN*0.5;}
doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) {posN.x-=offNP.x*12.0;}
if (!doneN) {posN.y-=offNP.y*12.0;}
doneNP=(!doneN) || (!doneP);if (!doneP) {posP.x+=offNP.x*12.0;}
if (!doneP) {posP.y+=offNP.y*12.0;}}
var dstN: f32=posM.x-posN.x;var dstP: f32=posP.x-posM.x;if (!horzSpan)
{dstN=posM.y-posN.y;}
if (!horzSpan) 
{dstP=posP.y-posM.y;}
var goodSpanN: bool=(lumaEndN<0.0) != lumaMLTZero;var spanLength: f32=(dstP+dstN);var goodSpanP: bool=(lumaEndP<0.0) != lumaMLTZero;var spanLengthRcp: f32=1.0/spanLength;var directionN: bool=dstN<dstP;var dst: f32=min(dstN,dstP);var goodSpan: bool=select(goodSpanP,goodSpanN,directionN);var subpixG: f32=subpixF*subpixF;var pixelOffset: f32=(dst*(-spanLengthRcp))+0.5;var subpixH: f32=subpixG*fxaaQualitySubpix;var pixelOffsetGood: f32=select(0.0,pixelOffset,goodSpan);var pixelOffsetSubpix: f32=max(pixelOffsetGood,subpixH);if (!horzSpan)
{posM.x+=pixelOffsetSubpix*lengthSign;}
if (horzSpan)
{posM.y+=pixelOffsetSubpix*lengthSign;}
#ifdef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;}
else
{fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);}
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fxaaPixelShaderWGSL = { name, shader };
//# sourceMappingURL=fxaa.fragment.js.map

/***/ }),

/***/ 53208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fxaaVertexShaderWGSL: () => (/* binding */ fxaaVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fxaaVertexShader";
const shader = `attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(input.position*madd+madd);vertexOutputs.sampleCoordS=vertexOutputs.vUV+ vec2f( 0.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordE=vertexOutputs.vUV+ vec2f( 1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordN=vertexOutputs.vUV+ vec2f( 0.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordW=vertexOutputs.vUV+ vec2f(-1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordNW=vertexOutputs.vUV+ vec2f(-1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSE=vertexOutputs.vUV+ vec2f( 1.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordNE=vertexOutputs.vUV+ vec2f( 1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSW=vertexOutputs.vUV+ vec2f(-1.0,1.0)*uniforms.texelSize;vertexOutputs.position=vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const fxaaVertexShaderWGSL = { name, shader };
//# sourceMappingURL=fxaa.vertex.js.map

/***/ }),

/***/ 23758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gaussianSplattingPixelShaderWGSL: () => (/* binding */ gaussianSplattingPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(39759);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(66407);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(38780);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(93243);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplattingFragmentDeclaration.js
// Do not edit.



const gaussianSplattingFragmentDeclaration_name = "gaussianSplattingFragmentDeclaration";
const shader = `fn gaussianColor(inColor: vec4f,inPosition: vec2f)->vec4f
{var A : f32=-dot(inPosition,inPosition);if (A>-4.0)
{var B: f32=exp(A)*inColor.a;
#include<logDepthFragment>
var color: vec3f=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4f(color,B);} else {return vec4f(0.0);}}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[gaussianSplattingFragmentDeclaration_name] = shader;
/** @internal */
const gaussianSplattingFragmentDeclarationWGSL = { name: gaussianSplattingFragmentDeclaration_name, shader };
//# sourceMappingURL=gaussianSplattingFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(97715);
;// ./node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.fragment.js
// Do not edit.






const gaussianSplatting_fragment_name = "gaussianSplattingPixelShader";
const gaussianSplatting_fragment_shader = `#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
fragmentOutputs.color=gaussianColor(input.vColor,input.vPosition);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[gaussianSplatting_fragment_name] = gaussianSplatting_fragment_shader;
/** @internal */
const gaussianSplattingPixelShaderWGSL = { name: gaussianSplatting_fragment_name, shader: gaussianSplatting_fragment_shader };
//# sourceMappingURL=gaussianSplatting.fragment.js.map

/***/ }),

/***/ 55597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gaussianSplattingVertexShaderWGSL: () => (/* binding */ gaussianSplattingVertexShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(98327);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js
var meshUboDeclaration = __webpack_require__(6874);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(77029);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(75757);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplatting.js
// Do not edit.

const gaussianSplatting_name = "gaussianSplatting";
const shader = `fn getDataUV(index: f32,dataTextureSize: vec2f)->vec2<f32> {let y: f32=floor(index/dataTextureSize.x);let x: f32=index-y*dataTextureSize.x;return vec2f((x+0.5),(y+0.5));}
struct Splat {center: vec4f,
color: vec4f,
covA: vec4f,
covB: vec4f,
#if SH_DEGREE>0
sh0: vec4<u32>,
#endif
#if SH_DEGREE>1
sh1: vec4<u32>,
#endif
#if SH_DEGREE>2
sh2: vec4<u32>,
#endif
};fn readSplat(splatIndex: f32,dataTextureSize: vec2f)->Splat {var splat: Splat;let splatUV=getDataUV(splatIndex,dataTextureSize);let splatUVi32=vec2<i32>(i32(splatUV.x),i32(splatUV.y));splat.center=textureLoad(centersTexture,splatUVi32,0);splat.color=textureLoad(colorsTexture,splatUVi32,0);splat.covA=textureLoad(covariancesATexture,splatUVi32,0)*splat.center.w;splat.covB=textureLoad(covariancesBTexture,splatUVi32,0)*splat.center.w;
#if SH_DEGREE>0
splat.sh0=textureLoad(shTexture0,splatUVi32,0);
#endif
#if SH_DEGREE>1
splat.sh1=textureLoad(shTexture1,splatUVi32,0);
#endif
#if SH_DEGREE>2
splat.sh2=textureLoad(shTexture2,splatUVi32,0);
#endif
return splat;}
fn computeColorFromSHDegree(dir: vec3f,sh: array<vec3<f32>,16>)->vec3f
{let SH_C0: f32=0.28209479;let SH_C1: f32=0.48860251;var SH_C2: array<f32,5>=array<f32,5>(
1.092548430,
-1.09254843,
0.315391565,
-1.09254843,
0.546274215
);var SH_C3: array<f32,7>=array<f32,7>(
-0.59004358,
2.890611442,
-0.45704579,
0.373176332,
-0.45704579,
1.445305721,
-0.59004358
);var result: vec3f=/*SH_C0**/sh[0];
#if SH_DEGREE>0
let x: f32=dir.x;let y: f32=dir.y;let z: f32=dir.z;result+=-SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
let xx: f32=x*x;let yy: f32=y*y;let zz: f32=z*z;let xy: f32=x*y;let yz: f32=y*z;let xz: f32=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0f*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0f*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0f*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0f*zz-3.0f*xx-3.0f*yy)*sh[12] +
SH_C3[4]*x*(4.0f*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0f*yy)*sh[15];
#endif
#endif
#endif
return result;}
fn decompose(value: u32)->vec4f
{let components : vec4f=vec4f(
f32((value ) & 255u),
f32((value>>u32( 8)) & 255u),
f32((value>>u32(16)) & 255u),
f32((value>>u32(24)) & 255u));return components*vec4f(2./255.)-vec4f(1.);}
fn computeSH(splat: Splat,color: vec3f,dir: vec3f)->vec3f
{var sh: array<vec3<f32>,16>;sh[0]=color;
#if SH_DEGREE>0
let sh00: vec4f=decompose(splat.sh0.x);let sh01: vec4f=decompose(splat.sh0.y);let sh02: vec4f=decompose(splat.sh0.z);sh[1]=vec3f(sh00.x,sh00.y,sh00.z);sh[2]=vec3f(sh00.w,sh01.x,sh01.y);sh[3]=vec3f(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
let sh03: vec4f=decompose(splat.sh0.w);let sh04: vec4f=decompose(splat.sh1.x);let sh05: vec4f=decompose(splat.sh1.y);sh[4]=vec3f(sh02.y,sh02.z,sh02.w);sh[5]=vec3f(sh03.x,sh03.y,sh03.z);sh[6]=vec3f(sh03.w,sh04.x,sh04.y);sh[7]=vec3f(sh04.z,sh04.w,sh05.x);sh[8]=vec3f(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
let sh06: vec4f=decompose(splat.sh1.z);let sh07: vec4f=decompose(splat.sh1.w);let sh08: vec4f=decompose(splat.sh2.x);let sh09: vec4f=decompose(splat.sh2.y);let sh10: vec4f=decompose(splat.sh2.z);let sh11: vec4f=decompose(splat.sh2.w);sh[9]=vec3f(sh06.x,sh06.y,sh06.z);sh[10]=vec3f(sh06.w,sh07.x,sh07.y);sh[11]=vec3f(sh07.z,sh07.w,sh08.x);sh[12]=vec3f(sh08.y,sh08.z,sh08.w);sh[13]=vec3f(sh09.x,sh09.y,sh09.z);sh[14]=vec3f(sh09.w,sh10.x,sh10.y);sh[15]=vec3f(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
fn gaussianSplatting(
meshPos: vec2<f32>,
worldPos: vec3<f32>,
scale: vec2<f32>,
covA: vec3<f32>,
covB: vec3<f32>,
worldMatrix: mat4x4<f32>,
viewMatrix: mat4x4<f32>,
projectionMatrix: mat4x4<f32>,
focal: vec2f,
invViewport: vec2f
)->vec4f {let modelView=viewMatrix*worldMatrix;let camspace=viewMatrix*vec4f(worldPos,1.0);let pos2d=projectionMatrix*camspace;let bounds=1.2*pos2d.w;if (pos2d.z<0. || pos2d.x<-bounds || pos2d.x>bounds || pos2d.y<-bounds || pos2d.y>bounds) {return vec4f(0.0,0.0,2.0,1.0);}
let Vrk=mat3x3<f32>(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);let J=mat3x3<f32>(
focal.x/camspace.z,0.0,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.0,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.0,0.0,0.0
);let invy=mat3x3<f32>(
1.0,0.0,0.0,
0.0,-1.0,0.0,
0.0,0.0,1.0
);let T=invy*transpose(mat3x3<f32>(
modelView[0].xyz,
modelView[1].xyz,
modelView[2].xyz))*J;let cov2d=transpose(T)*Vrk*T;let mid=(cov2d[0][0]+cov2d[1][1])/2.0;let radius=length(vec2<f32>((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));let lambda1=mid+radius;let lambda2=mid-radius;if (lambda2<0.0) {return vec4f(0.0,0.0,2.0,1.0);}
let diagonalVector=normalize(vec2<f32>(cov2d[0][1],lambda1-cov2d[0][0]));let majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;let minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2<f32>(diagonalVector.y,-diagonalVector.x);let vCenter=vec2<f32>(pos2d.x,pos2d.y);return vec4f(
vCenter+((meshPos.x*majorAxis+meshPos.y*minorAxis)*invViewport*pos2d.w)*scale,
pos2d.z,
pos2d.w
);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[gaussianSplatting_name] = shader;
/** @internal */
const gaussianSplattingWGSL = { name: gaussianSplatting_name, shader };
//# sourceMappingURL=gaussianSplatting.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(85197);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(59013);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(81482);
;// ./node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.vertex.js
// Do not edit.










const gaussianSplatting_vertex_name = "gaussianSplattingVertexShader";
const gaussianSplatting_vertex_shader = `#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
attribute splatIndex: f32;attribute position: vec2f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if SH_DEGREE>0
var shTexture0: texture_2d<u32>;
#endif
#if SH_DEGREE>1
var shTexture1: texture_2d<u32>;
#endif
#if SH_DEGREE>2
var shTexture2: texture_2d<u32>;
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var splat: Splat=readSplat(input.splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);let worldPos: vec4f=mesh.world*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=input.position;
#if SH_DEGREE>0
let dir: vec3f=normalize(worldPos.xyz-scene.vEyePosition.xyz);vertexOutputs.vColor=vec4f(computeSH(splat,splat.color.xyz,dir),1.0);
#else
vertexOutputs.vColor=splat.color;
#endif
vertexOutputs.position=gaussianSplatting(input.position,worldPos.xyz,vec2f(1.0,1.0),covA,covB,mesh.world,scene.view,scene.projection,uniforms.focal,uniforms.invViewport);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[gaussianSplatting_vertex_name] = gaussianSplatting_vertex_shader;
/** @internal */
const gaussianSplattingVertexShaderWGSL = { name: gaussianSplatting_vertex_name, shader: gaussianSplatting_vertex_shader };
//# sourceMappingURL=gaussianSplatting.vertex.js.map

/***/ }),

/***/ 38574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   geometryPixelShaderWGSL: () => (/* binding */ geometryPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15697);
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91258);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97715);
/* harmony import */ var _ShadersInclude_bumpFragment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20727);
// Do not edit.







const name = "geometryPixelShader";
const shader = `#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#ifdef NEED_UV
varying vUV: vec2f;
#endif
#ifdef BUMP
uniform vBumpInfos: vec3f;uniform vTangentSpaceParams: vec2f;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;varying vReflectivityUV: vec2f;
#endif
#ifdef ALBEDOTEXTURE
varying vAlbedoUV: vec2f;var albedoSamplerSampler: sampler;var albedoSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIVITYCOLOR
uniform reflectivityColor: vec3f;
#endif
#ifdef ALBEDOCOLOR
uniform albedoColor: vec3f;
#endif
#ifdef METALLIC
uniform metallic: f32;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform glossiness: f32;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
var normalOutput: vec3f;
#ifdef BUMP
var normalW: vec3f=normalize(input.vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize( vec3f(mat4x4f(input.vWorldView0,input.vWorldView0,input.vWorldView2,input.vWorldView3)* vec4f(normalW,0.0)));
#endif
#else
normalOutput=normalize(input.vNormalV);
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef DEPTH
fragData[DEPTH_INDEX]=vec4f(input.vViewPos.z/input.vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
fragData[NORMAL_INDEX]=vec4f(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
fragData[SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
fragData[POSITION_INDEX]= vec4f(input.vPositionW,1.0);
#endif
#ifdef VELOCITY
var a: vec2f=(input.vCurrentPosition.xy/input.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(input.vPreviousPosition.xy/input.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[VELOCITY_INDEX]= vec4f(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
var velocity : vec2f=vec2f(0.5)*((input.vPreviousPosition.xy /
input.vPreviousPosition.w) -
(input.vCurrentPosition.xy /
input.vCurrentPosition.w));fragData[VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
var reflectivity: vec4f= vec4f(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
var metal: f32=1.0;var roughness: f32=1.0;
#ifdef ORMTEXTURE
metal*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).b;roughness*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).g;
#endif
#ifdef METALLIC
metal*=uniforms.metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-uniforms.glossiness); 
#endif
reflectivity=vec4f(reflectivity.rgb,reflectivity.a-roughness);var color: vec3f= vec3f(1.0);
#ifdef ALBEDOTEXTURE
color=textureSample(albedoSampler,albedoSamplerSampler,input.vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpaceVec4(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=uniforms.albedoColor.xyz;
#endif
reflectivity=vec4f(mix( vec3f(0.04),color,metal),reflectivity.a);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity=vec4f(toLinearSpaceVec3(reflectivity.rgb),reflectivity.a);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity=vec4f(toLinearSpaceVec3(uniforms.reflectivityColor.xyz),1.0);
#endif
#endif
#ifdef GLOSSINESSS
reflectivity=vec4f(reflectivity.rgb,reflectivity.a*glossiness); 
#endif
#endif
fragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const geometryPixelShaderWGSL = { name, shader };
//# sourceMappingURL=geometry.fragment.js.map

/***/ }),

/***/ 2564:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   geometryVertexShaderWGSL: () => (/* binding */ geometryVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98327);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_bumpVertex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87921);
// Do not edit.















const name = "geometryVertexShader";
const shader = `#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<clipPlaneVertexDeclaration>
attribute position: vec3f;attribute normal: vec3f;
#ifdef NEED_UV
varying vUV: vec2f;
#ifdef ALPHATEST
uniform diffuseMatrix: mat4x4f;
#endif
#ifdef BUMP
uniform bumpMatrix: mat4x4f;varying vBumpUV: vec2f;
#endif
#ifdef REFLECTIVITY
uniform reflectivityMatrix: mat4x4f;uniform albedoMatrix: mat4x4f;varying vReflectivityUV: vec2f;varying vAlbedoUV: vec2f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;
#endif
#ifdef BUMP
varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f= vec4f(finalWorld* vec4f(positionUpdated,1.0));
#ifdef BUMP
let vWorldView=scene.view*finalWorld;vertexOutputs.vWorldView0=vWorldView[0];vertexOutputs.vWorldView1=vWorldView[1];vertexOutputs.vWorldView2=vWorldView[2];vertexOutputs.vWorldView3=vWorldView[3];let normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vertexOutputs.vNormalV=normalize((finalWorld* vec4f(normalUpdated,0.0)).xyz);
#else
vertexOutputs.vNormalV=normalize(((scene.view*finalWorld)* vec4f(normalUpdated,0.0)).xyz);
#endif
#endif
vertexOutputs.vViewPos=scene.view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vertexOutputs.vPositionW=worldPos.xyz/worldPos.w;
#endif
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV1
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef ALBEDO_UV1
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV2
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef ALBEDO_UV2
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#endif
#include<bumpVertex>
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const geometryVertexShaderWGSL = { name, shader };
//# sourceMappingURL=geometry.vertex.js.map

/***/ }),

/***/ 82937:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowBlurPostProcessPixelShaderWGSL: () => (/* binding */ glowBlurPostProcessPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowBlurPostProcessPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform direction: vec2f;uniform blurWidth: f32;fn getLuminance(color: vec3f)->f32
{return dot(color, vec3f(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var weights: array<f32 ,7>;weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;var texelSize: vec2f= vec2f(1.0/uniforms.screenSize.x,1.0/uniforms.screenSize.y);var texelStep: vec2f=texelSize*uniforms.direction*uniforms.blurWidth;var start: vec2f=input.vUV-3.0*texelStep;var baseColor: vec4f= vec4f(0.,0.,0.,0.);var texelOffset: vec2f= vec2f(0.,0.);for (var i: i32=0; i<7; i++)
{var texel: vec4f=textureSample(textureSampler,textureSamplerSampler,start+texelOffset);baseColor=vec4f(baseColor.rgb,baseColor.a+texel.a*weights[i]);var luminance: f32=getLuminance(baseColor.rgb);var luminanceTexel: f32=getLuminance(texel.rgb);var choice: f32=step(luminanceTexel,luminance);baseColor=vec4f(choice*baseColor.rgb+(1.0-choice)*texel.rgb,baseColor.a);texelOffset+=texelStep;}
fragmentOutputs.color=baseColor;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const glowBlurPostProcessPixelShaderWGSL = { name, shader };
//# sourceMappingURL=glowBlurPostProcess.fragment.js.map

/***/ }),

/***/ 19073:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapGenerationPixelShaderWGSL: () => (/* binding */ glowMapGenerationPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97715);
// Do not edit.




const name = "glowMapGenerationPixelShader";
const shader = `#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;uniform opacityIntensity: f32;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;var emissiveSamplerSampler: sampler;var emissiveSampler: texture_2d<f32>;
#endif
#ifdef VERTEXALPHA
varying vColor: vec4f;
#endif
uniform glowColor: vec4f;uniform glowIntensity: f32;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
var finalColor: vec4f=uniforms.glowColor;
#ifdef DIFFUSE
var albedoTexture: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor=vec4f(finalColor.rgb,finalColor.a*albedoTexture.a);
#endif
#ifdef HIGHLIGHT
finalColor=vec4f(finalColor.rgb,albedoTexture.a);
#endif
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vUVOpacity);
#ifdef OPACITYRGB
finalColor=vec4f(finalColor.rgb,finalColor.a*getLuminance(opacityMap.rgb));
#else
finalColor=vec4f(finalColor.rgb,finalColor.a*opacityMap.a);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*uniforms.opacityIntensity);
#endif
#ifdef VERTEXALPHA
finalColor=vec4f(finalColor.rgb,finalColor.a*fragmentInputs.vColor.a);
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE) {discard;}
#endif
#ifdef EMISSIVE
var emissive: vec4f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
fragmentOutputs.color=emissive*finalColor*uniforms.glowIntensity;
#else
fragmentOutputs.color=finalColor*uniforms.glowIntensity;
#endif
#ifdef HIGHLIGHT
fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb,uniforms.glowColor.a);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const glowMapGenerationPixelShaderWGSL = { name, shader };
//# sourceMappingURL=glowMapGeneration.fragment.js.map

/***/ }),

/***/ 48267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapGenerationVertexShaderWGSL: () => (/* binding */ glowMapGenerationVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85197);
// Do not edit.













const name = "glowMapGenerationVertexShader";
const shader = `attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;varying vPosition: vec4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;uniform diffuseMatrix: mat4x4f;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;uniform opacityMatrix: mat4x4f;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;uniform emissiveMatrix: mat4x4f;
#endif
#ifdef VERTEXALPHA
attribute color: vec4f;varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef CUBEMAP
vertexOutputs.vPosition=worldPos;vertexOutputs.position=uniforms.viewProjection*finalWorld* vec4f(input.position,1.0);
#else
vertexOutputs.vPosition=uniforms.viewProjection*worldPos;vertexOutputs.position=vertexOutputs.vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef DIFFUSEUV2
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef OPACITYUV2
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef EMISSIVEUV2
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef VERTEXALPHA
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const glowMapGenerationVertexShaderWGSL = { name, shader };
//# sourceMappingURL=glowMapGeneration.vertex.js.map

/***/ }),

/***/ 22147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapMergePixelShaderWGSL: () => (/* binding */ glowMapMergePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowMapMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef EMISSIVE
var textureSampler2Sampler: sampler;var textureSampler2: texture_2d<f32>;
#endif
uniform offset: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef EMISSIVE
baseColor+=textureSample(textureSampler2,textureSampler2Sampler,input.vUV);baseColor*=uniforms.offset;
#else
baseColor=vec4f(baseColor.rgb,abs(uniforms.offset-baseColor.a));
#ifdef STROKE
var alpha: f32=smoothstep(.0,.1,baseColor.a);baseColor=vec4f(baseColor.rgb*alpha,alpha);
#endif
#endif
#if LDR
baseColor=clamp(baseColor,vec4f(0.),vec4f(1.0));
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const glowMapMergePixelShaderWGSL = { name, shader };
//# sourceMappingURL=glowMapMerge.fragment.js.map

/***/ }),

/***/ 7101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapMergeVertexShaderWGSL: () => (/* binding */ glowMapMergeVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowMapMergeVertexShader";
const shader = `attribute position: vec2f;varying vUV: vec2f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const glowMapMergeVertexShaderWGSL = { name, shader };
//# sourceMappingURL=glowMapMerge.vertex.js.map

/***/ }),

/***/ 49875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gpuUpdateParticlesComputeShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gpuUpdateParticlesComputeShader";
const shader = `struct Particle {position : vec3<f32>,
age : f32,
size : vec3<f32>,
life : f32,
seed : vec4<f32>,
direction : vec3<f32>,
dummy0: f32,
#ifdef CUSTOMEMITTER
initialPosition : vec3<f32>,
dummy1: f32,
#endif
#ifndef COLORGRADIENTS
color : vec4<f32>,
#endif
#ifndef BILLBOARD
initialDirection : vec3<f32>,
dummy2: f32,
#endif
#ifdef NOISE
noiseCoordinates1 : vec3<f32>,
dummy3: f32,
noiseCoordinates2 : vec3<f32>,
dummy4: f32,
#endif
#ifdef ANGULARSPEEDGRADIENTS
angle : f32,
#else
angle : vec2<f32>,
#endif
#ifdef ANIMATESHEET
cellIndex : f32,
#ifdef ANIMATESHEETRANDOMSTART
cellStartOffset : f32,
#endif
#endif
};struct Particles {particles : array<Particle>,};struct SimParams {currentCount : f32,
timeDelta : f32,
stopFactor : f32,
randomTextureSize: i32,
lifeTime : vec2<f32>,
emitPower : vec2<f32>,
#ifndef COLORGRADIENTS
color1 : vec4<f32>,
color2 : vec4<f32>,
#endif
sizeRange : vec2<f32>,
scaleRange : vec4<f32>,
angleRange : vec4<f32>,
gravity : vec3<f32>,
#ifdef LIMITVELOCITYGRADIENTS
limitVelocityDamping : f32,
#endif
#ifdef ANIMATESHEET
cellInfos : vec4<f32>,
#endif
#ifdef NOISE
noiseStrength : vec3<f32>,
#endif
#ifndef LOCAL
emitterWM : mat4x4<f32>,
#endif
#ifdef BOXEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
minEmitBox : vec3<f32>,
maxEmitBox : vec3<f32>,
#endif
#ifdef CONEEMITTER
radius : vec2<f32>,
coneAngle : f32,
height : vec2<f32>,
#ifdef DIRECTEDCONEEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef CYLINDEREMITTER
radius : f32,
height : f32,
radiusRange : f32,
#ifdef DIRECTEDCYLINDEREMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef HEMISPHERICEMITTER
radius : f32,
radiusRange : f32,
directionRandomizer : f32,
#endif
#ifdef POINTEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#endif
#ifdef SPHEREEMITTER
radius : f32,
radiusRange : f32,
#ifdef DIRECTEDSPHEREEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
};@binding(0) @group(0) var<uniform> params : SimParams;@binding(1) @group(0) var<storage,read> particlesIn : Particles;@binding(2) @group(0) var<storage,read_write> particlesOut : Particles;@binding(3) @group(0) var randomTexture : texture_2d<f32>;@binding(4) @group(0) var randomTexture2 : texture_2d<f32>;
#ifdef SIZEGRADIENTS
@binding(0) @group(1) var sizeGradientSampler : sampler;@binding(1) @group(1) var sizeGradientTexture : texture_2d<f32>;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
@binding(2) @group(1) var angularSpeedGradientSampler : sampler;@binding(3) @group(1) var angularSpeedGradientTexture : texture_2d<f32>;
#endif 
#ifdef VELOCITYGRADIENTS
@binding(4) @group(1) var velocityGradientSampler : sampler;@binding(5) @group(1) var velocityGradientTexture : texture_2d<f32>;
#endif
#ifdef LIMITVELOCITYGRADIENTS
@binding(6) @group(1) var limitVelocityGradientSampler : sampler;@binding(7) @group(1) var limitVelocityGradientTexture : texture_2d<f32>;
#endif
#ifdef DRAGGRADIENTS
@binding(8) @group(1) var dragGradientSampler : sampler;@binding(9) @group(1) var dragGradientTexture : texture_2d<f32>;
#endif
#ifdef NOISE
@binding(10) @group(1) var noiseSampler : sampler;@binding(11) @group(1) var noiseTexture : texture_2d<f32>;
#endif
fn getRandomVec3(offset : f32,vertexID : f32)->vec3<f32> {return textureLoad(randomTexture2,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0).rgb;}
fn getRandomVec4(offset : f32,vertexID : f32)->vec4<f32> {return textureLoad(randomTexture,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0);}
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {let index : u32=GlobalInvocationID.x;let vertexID : f32=f32(index);if (index>=u32(params.currentCount)) {return;}
let PI : f32=3.14159;let timeDelta : f32=params.timeDelta;let newAge : f32=particlesIn.particles[index].age+timeDelta;let life : f32=particlesIn.particles[index].life;let seed : vec4<f32>=particlesIn.particles[index].seed;let direction : vec3<f32>=particlesIn.particles[index].direction;if (newAge>=life && params.stopFactor != 0.) {var newPosition : vec3<f32>;var newDirection : vec3<f32>;let randoms : vec4<f32>=getRandomVec4(seed.x,vertexID);let outLife : f32=params.lifeTime.x+(params.lifeTime.y-params.lifeTime.x)*randoms.r;particlesOut.particles[index].life=outLife;particlesOut.particles[index].age=newAge-life;particlesOut.particles[index].seed=seed;var sizex : f32;
#ifdef SIZEGRADIENTS 
sizex=textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(0.,0.),0.).r;
#else
sizex=params.sizeRange.x+(params.sizeRange.y-params.sizeRange.x)*randoms.g;
#endif
particlesOut.particles[index].size=vec3<f32>(
sizex,
params.scaleRange.x+(params.scaleRange.y-params.scaleRange.x)*randoms.b,
params.scaleRange.z+(params.scaleRange.w-params.scaleRange.z)*randoms.a);
#ifndef COLORGRADIENTS
particlesOut.particles[index].color=params.color1+(params.color2-params.color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
particlesOut.particles[index].angle=vec2<f32>(
params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r,
params.angleRange.x+(params.angleRange.y-params.angleRange.x)*randoms.a);
#else
particlesOut.particles[index].angle=params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r;
#endif 
#if defined(POINTEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=vec3<f32>(0.,0.,0.);newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#elif defined(BOXEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=params.minEmitBox+(params.maxEmitBox-params.minEmitBox)*randoms2;newDirection=params.direction1+(params.direction2-params.direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,abs(randY),randZ);newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#elif defined(SPHEREEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=normalize(params.direction1+(params.direction2-params.direction1)*randoms3);
#else
newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let yPos : f32=(-0.5+randoms2.x)*params.height;var angle : f32=randoms2.y*PI*2.;let inverseRadiusRangeSquared : f32=(1.-params.radiusRange)*(1.-params.radiusRange);let positionRadius : f32=params.radius*sqrt(inverseRadiusRangeSquared+randoms2.z*(1.-inverseRadiusRangeSquared));let xPos : f32=positionRadius*cos(angle);let zPos : f32=positionRadius*sin(angle);newPosition=vec3<f32>(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
angle=angle+(-0.5+randoms3.x)*PI*params.directionRandomizer;newDirection=vec3<f32>(cos(angle),(-0.5+randoms3.y)*params.directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let s : f32=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
let h : f32=0.0001;
#else
var h : f32=randoms2.y*params.height.y;h=1.-h*h; 
#endif
var lRadius : f32=params.radius.x-params.radius.x*randoms2.z*params.radius.y;lRadius=lRadius*h;let randX : f32=lRadius*sin(s);let randZ : f32=lRadius*cos(s);let randY : f32=h *params.height.x;newPosition=vec3<f32>(randX,randY,randZ); 
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
#ifdef DIRECTEDCONEEMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
if (abs(cos(params.coneAngle))==1.0) {newDirection=vec3<f32>(0.,1.0,0.);} else {newDirection=normalize(newPosition+params.directionRandomizer*randoms3); }
#endif
#elif defined(CUSTOMEMITTER)
newPosition=particlesIn.particles[index].initialPosition;particlesOut.particles[index].initialPosition=newPosition;
#else 
newPosition=vec3<f32>(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w,vertexID)-vec3<f32>(0.5,0.5,0.5));
#endif
let power : f32=params.emitPower.x+(params.emitPower.y-params.emitPower.x)*randoms.a;
#ifdef LOCAL
particlesOut.particles[index].position=newPosition;
#else
particlesOut.particles[index].position=(params.emitterWM*vec4<f32>(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=direction;
#endif
#else
#ifdef LOCAL
let initial : vec3<f32>=newDirection;
#else 
let initial : vec3<f32>=(params.emitterWM*vec4<f32>(newDirection,0.)).xyz;
#endif
particlesOut.particles[index].direction=initial*power;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
particlesOut.particles[index].cellIndex=params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
particlesOut.particles[index].cellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
particlesOut.particles[index].noiseCoordinates1=particlesIn.particles[index].noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=particlesIn.particles[index].noiseCoordinates2;
#endif
} else {var directionScale : f32=timeDelta;particlesOut.particles[index].age=newAge;let ageGradient : f32=newAge/life;
#ifdef VELOCITYGRADIENTS
directionScale=directionScale*textureSampleLevel(velocityGradientTexture,velocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;
#endif
#ifdef DRAGGRADIENTS
directionScale=directionScale*(1.0-textureSampleLevel(dragGradientTexture,dragGradientSampler,vec2<f32>(ageGradient,0.),0.).r);
#endif
let position : vec3<f32>=particlesIn.particles[index].position;
#if defined(CUSTOMEMITTER)
particlesOut.particles[index].position=position+(direction-position)*ageGradient; 
particlesOut.particles[index].initialPosition=particlesIn.particles[index].initialPosition;
#else
particlesOut.particles[index].position=position+direction*directionScale;
#endif
particlesOut.particles[index].life=life;particlesOut.particles[index].seed=seed;
#ifndef COLORGRADIENTS 
particlesOut.particles[index].color=particlesIn.particles[index].color;
#endif
#ifdef SIZEGRADIENTS
particlesOut.particles[index].size=vec3<f32>(
textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(ageGradient,0.),0.).r,
particlesIn.particles[index].size.yz);
#else
particlesOut.particles[index].size=particlesIn.particles[index].size;
#endif 
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=particlesIn.particles[index].initialDirection;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#else
var updatedDirection : vec3<f32>=direction+params.gravity*timeDelta;
#ifdef LIMITVELOCITYGRADIENTS
let limitVelocity : f32=textureSampleLevel(limitVelocityGradientTexture,limitVelocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;let currentVelocity : f32=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*params.limitVelocityDamping;}
#endif
particlesOut.particles[index].direction=updatedDirection;
#ifdef NOISE
let noiseCoordinates1 : vec3<f32>=particlesIn.particles[index].noiseCoordinates1;let noiseCoordinates2 : vec3<f32>=particlesIn.particles[index].noiseCoordinates2;let fetchedR : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.x,noiseCoordinates1.y)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedG : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.z,noiseCoordinates2.x)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedB : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates2.y,noiseCoordinates2.z)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let force : vec3<f32>=vec3<f32>(-1.+2.*fetchedR,-1.+2.*fetchedG,-1.+2.*fetchedB)*params.noiseStrength;particlesOut.particles[index].direction=particlesOut.particles[index].direction+force*timeDelta;particlesOut.particles[index].noiseCoordinates1=noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
let angularSpeed : f32=textureSampleLevel(angularSpeedGradientTexture,angularSpeedGradientSampler,vec2<f32>(ageGradient,0.),0.).r;particlesOut.particles[index].angle=particlesIn.particles[index].angle+angularSpeed*timeDelta;
#else
let angle : vec2<f32>=particlesIn.particles[index].angle;particlesOut.particles[index].angle=vec2<f32>(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
var offsetAge : f32=particlesOut.particles[index].age;let dist : f32=params.cellInfos.y-params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
let cellStartOffset : f32=particlesIn.particles[index].cellStartOffset;particlesOut.particles[index].cellStartOffset=cellStartOffset;offsetAge=offsetAge+cellStartOffset;
#else
let cellStartOffset : f32=0.;
#endif 
var ratio : f32;if (params.cellInfos.w==1.0) {ratio=clamp(((cellStartOffset+params.cellInfos.z*offsetAge) % life)/life,0.,1.0);}
else {ratio=clamp((cellStartOffset+params.cellInfos.z*offsetAge)/life,0.,1.0);}
particlesOut.particles[index].cellIndex=f32(i32(params.cellInfos.x+ratio*dist));
#endif
}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const gpuUpdateParticlesComputeShaderWGSL = { name, shader };
//# sourceMappingURL=gpuUpdateParticles.compute.js.map

/***/ }),

/***/ 68625:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   grainPixelShaderWGSL: () => (/* binding */ grainPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "grainPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform intensity: f32;uniform animatedSeed: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var seed: vec2f=input.vUV*uniforms.animatedSeed;var grain: f32=dither(seed,uniforms.intensity);var lum: f32=getLuminance(fragmentOutputs.color.rgb);var grainAmount: f32=(cos(-PI+(lum*PI*2.))+1.)/2.;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+grain*grainAmount,fragmentOutputs.color.a);fragmentOutputs.color=vec4f(max(fragmentOutputs.color.rgb,vec3f(0.0)),fragmentOutputs.color.a);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const grainPixelShaderWGSL = { name, shader };
//# sourceMappingURL=grain.fragment.js.map

/***/ }),

/***/ 19145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLinePixelShaderWGSL: () => (/* binding */ greasedLinePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "greasedLinePixelShader";
const shader = `var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
let grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;var outColor=vec4(uniforms.grlColor,1.);outColor.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (outColor.a==0.0) {discard;}
if (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;outColor.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (outColor.a==0.0) {discard;}}
if (uniforms.grlUseColors==1.) {
#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));
#else
let lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);
#endif
if (grlColorMode==COLOR_MODE_SET) {outColor=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {outColor+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {outColor*=grlColor;}}
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=outColor;
#endif
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+outColor.rgb*outColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-outColor.a));} else {fragmentOutputs.backColor+=outColor;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const greasedLinePixelShaderWGSL = { name, shader };
//# sourceMappingURL=greasedLine.fragment.js.map

/***/ }),

/***/ 68547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLineVertexShaderWGSL: () => (/* binding */ greasedLineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98327);
/* harmony import */ var _ShadersInclude_meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6874);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91277);
// Do not edit.





const name = "greasedLineVertexShader";
const shader = `#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute grl_widths: f32;
#ifdef GREASED_LINE_USE_OFFSETS
attribute grl_offsets: vec3f; 
#endif
attribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#ifdef GREASED_LINE_CAMERA_FACING
attribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute grl_slopes: vec3f;attribute grl_counters: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vertexOutputs.grlColorPointer=input.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;
#ifdef GREASED_LINE_CAMERA_FACING
let grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=input.grl_previousAndSide.xyz;let grlSide: f32=input.grl_previousAndSide.w;let grlNext: vec3f=input.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=input.grl_nextAndCounters.w;
#ifdef GREASED_LINE_USE_OFFSETS
var grlPositionOffset: vec3f=input.grl_offsets;
#else
var grlPositionOffset=vec3f(0.);
#endif
let grlFinalPosition: vec4f=grlMatrix*vec4f(vertexInputs.position+grlPositionOffset ,1.0);let grlPrevPos: vec4f=grlMatrix*vec4f(grlPrevious+grlPositionOffset,1.0);let grlNextPos: vec4f=grlMatrix*vec4f(grlNext+grlPositionOffset,1.0);let grlCurrentP: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlPrevP: vec2f=grlFix(grlPrevPos,uniforms.grlAspect);let grlNextP: vec2f= grlFix(grlNextPos,uniforms.grlAspect);let grlWidth:f32=grlBaseWidth*input.grl_widths;var grlDir: vec2f;if (all(grlNextP==grlCurrentP)) {grlDir=normalize(grlCurrentP-grlPrevP);} else if (all(grlPrevP==grlCurrentP)) {grlDir=normalize(grlNextP-grlCurrentP);} else {let grlDir1: vec2f=normalize(grlCurrentP-grlPrevP);let grlDir2: vec2f=normalize(grlNextP-grlCurrentP);grlDir=normalize(grlDir1+grlDir2);}
var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;
#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
grlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;
#else
grlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;
#endif
grlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}
vertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);
#else
vertexOutputs.grlCounters=input.grl_counters;vertexOutputs.position=grlMatrix*vec4f((vertexInputs.position+input.grl_offsets)+input.grl_slopes*input.grl_widths,1.0) ;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const greasedLineVertexShaderWGSL = { name, shader };
//# sourceMappingURL=greasedLine.vertex.js.map

/***/ }),

/***/ 50274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrFilteringPixelShaderWGSL: () => (/* binding */ hdrFilteringPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_importanceSampling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75136);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75052);
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58866);
// Do not edit.





const name = "hdrFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const hdrFilteringPixelShaderWGSL = { name, shader };
//# sourceMappingURL=hdrFiltering.fragment.js.map

/***/ }),

/***/ 92248:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrFilteringVertexShaderWGSL: () => (/* binding */ hdrFilteringVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrFilteringVertexShader";
const shader = `attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const hdrFilteringVertexShaderWGSL = { name, shader };
//# sourceMappingURL=hdrFiltering.vertex.js.map

/***/ }),

/***/ 64972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrIrradianceFilteringPixelShaderWGSL: () => (/* binding */ hdrIrradianceFilteringPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_importanceSampling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75136);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75052);
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58866);
// Do not edit.





const name = "hdrIrradianceFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;
#ifdef IBL_CDF_FILTERING
var icdfTextureSampler: sampler;var icdfTexture: texture_2d<f32>;
#endif
uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=irradiance(inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture,icdfTextureSampler
#endif
);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const hdrIrradianceFilteringPixelShaderWGSL = { name, shader };
//# sourceMappingURL=hdrIrradianceFiltering.fragment.js.map

/***/ }),

/***/ 858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrIrradianceFilteringVertexShaderWGSL: () => (/* binding */ hdrIrradianceFilteringVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrIrradianceFilteringVertexShader";
const shader = `attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const hdrIrradianceFilteringVertexShaderWGSL = { name, shader };
//# sourceMappingURL=hdrIrradianceFiltering.vertex.js.map

/***/ }),

/***/ 80265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   highlightsPixelShaderWGSL: () => (/* binding */ highlightsPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "highlightsPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;const RGBLuminanceCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tex: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var c: vec3f=tex.rgb;var luma: f32=dot(c.rgb,RGBLuminanceCoefficients);fragmentOutputs.color= vec4f(pow(c, vec3f(25.0-luma*15.0)),tex.a); }`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const highlightsPixelShaderWGSL = { name, shader };
//# sourceMappingURL=highlights.fragment.js.map

/***/ }),

/***/ 48137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfDebugPixelShaderWGSL: () => (/* binding */ iblCdfDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCdfDebugPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var cdfySampler: sampler;var cdfy: texture_2d<f32>;var cdfxSampler: sampler;var cdfx: texture_2d<f32>;var icdfSampler: sampler;var icdf: texture_2d<f32>;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define cdfyVSize (0.8/3.0)
#define cdfxVSize 0.1
#define cdfyHSize 0.5
uniform sizeParams: vec4f;
#ifdef IBL_USE_CUBE_MAP
fn equirectangularToCubemapDirection(uv: vec2f)->vec3f {var longitude: f32=uv.x*2.0*PI-PI;var latitude: f32=PI*0.5-uv.y*PI;var direction: vec3f;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs { 
var colour: vec3f= vec3f(0.0);var uv: vec2f =
vec2f((uniforms.sizeParams.x+input.vUV.x)*uniforms.sizeParams.z,(uniforms.sizeParams.y+input.vUV.y)*uniforms.sizeParams.w);var backgroundColour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;const iblStart: f32=1.0-cdfyVSize;const pdfStart: f32=1.0-2.0*cdfyVSize;const cdfyStart: f32=1.0-3.0*cdfyVSize;const cdfxStart: f32=1.0-3.0*cdfyVSize-cdfxVSize;const icdfxStart: f32=1.0-3.0*cdfyVSize-2.0*cdfxVSize;
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(
(uv- vec2f(0.0,iblStart))* vec2f(1.0,1.0/cdfyVSize));var iblColour: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var iblColour: vec3f=textureSample(iblSource,iblSourceSampler,(uv- vec2f(0.0,iblStart)) *
vec2f(1.0,1.0/cdfyVSize))
.rgb;
#endif
var pdfColour: vec3f =
textureSample(icdf,icdfSampler,(uv- vec2f(0.0,pdfStart))* vec2f(1.0,1.0/cdfyVSize)).zzz;var cdfyColour: f32 =
textureSample(cdfy,cdfySampler,(uv- vec2f(0.0,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).r;var icdfyColour: f32 =
textureSample(icdf,icdfSampler,(uv- vec2f(0.5,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).g;var cdfxColour: f32 =
textureSample(cdfx,cdfxSampler,(uv- vec2f(0.0,cdfxStart))* vec2f(1.0,1.0/cdfxVSize)).r;var icdfxColour: f32=textureSample(icdf,icdfSampler,(uv- vec2f(0.0,icdfxStart)) *
vec2f(1.0,1.0/cdfxVSize)).r;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {colour=backgroundColour;} else if (uv.y>iblStart) {colour+=iblColour;} else if (uv.y>pdfStart) {colour+=pdfColour;} else if (uv.y>cdfyStart && uv.x<0.5) {colour.r+=0.003*cdfyColour;} else if (uv.y>cdfyStart && uv.x>0.5) {colour.r+=icdfyColour;} else if (uv.y>cdfxStart) {colour.r+=0.00003*cdfxColour;} else if (uv.y>icdfxStart) {colour.r+=icdfxColour;}
fragmentOutputs.color =vec4(mix(colour,backgroundColour,0.5),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblCdfDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblCdfDebug.fragment.js.map

/***/ }),

/***/ 18900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfxPixelShaderWGSL: () => (/* binding */ iblCdfxPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCdfxPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var cdfy: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfyRes=textureDimensions(cdfy,0);var currentPixel=vec2u(fragmentInputs.position.xy);var cdfx: f32=0.0;for (var x: u32=1; x<=currentPixel.x; x++) {cdfx+=textureLoad(cdfy, vec2u(x-1,cdfyRes.y-1),0).x;}
fragmentOutputs.color= vec4f( vec3f(cdfx),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblCdfxPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblCdfx.fragment.js.map

/***/ }),

/***/ 61245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfyPixelShaderWGSL: () => (/* binding */ iblCdfyPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCdfyPixelShader";
const shader = `varying vUV : vec2f;
#include <helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;
#ifdef IBL_USE_CUBE_MAP
fn fetchCube(uv: vec2f)->f32 {var direction: vec3f=equirectangularToCubemapDirection(uv);return sin(PI*uv.y) *
dot(textureSampleLevel(iblSource,iblSourceSampler,direction,0.0)
.rgb,
LuminanceEncodeApprox);}
#else
fn fetchPanoramic(Coords: vec2i,envmapHeight: f32)->f32 {return sin(PI*(f32(Coords.y)+0.5)/envmapHeight) *
dot(textureLoad(iblSource,Coords,0).rgb,LuminanceEncodeApprox);}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coords: vec2i= vec2i(fragmentInputs.position.xy);var cdfy: f32=0.0;for (var y: i32=1; y<=coords.y; y++) {
#ifdef IBL_USE_CUBE_MAP
var uv: vec2f= vec2f(input.vUV.x,( f32(y-1)+0.5)/ f32(uniforms.iblHeight));cdfy+=fetchCube(uv);
#else
cdfy+=fetchPanoramic( vec2i(coords.x,y-1), f32(uniforms.iblHeight));
#endif
}
fragmentOutputs.color= vec4f(cdfy,0.0,0.0,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblCdfyPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblCdfy.fragment.js.map

/***/ }),

/***/ 92199:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCombineVoxelGridsPixelShaderWGSL: () => (/* binding */ iblCombineVoxelGridsPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCombineVoxelGridsPixelShader";
const shader = `varying vUV: vec2f;var voxelXaxisSamplerSampler: sampler;var voxelXaxisSampler: texture_3d<f32>;var voxelYaxisSamplerSampler: sampler;var voxelYaxisSampler: texture_3d<f32>;var voxelZaxisSamplerSampler: sampler;var voxelZaxisSampler: texture_3d<f32>;uniform layer: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coordZ: vec3f= vec3f(fragmentInputs.vUV.x,fragmentInputs.vUV.y,uniforms.layer);var voxelZ: f32=textureSample(voxelZaxisSampler,voxelZaxisSamplerSampler,coordZ).r;var coordX: vec3f= vec3f(1.0-uniforms.layer,fragmentInputs.vUV.y,fragmentInputs.vUV.x);var voxelX: f32=textureSample(voxelXaxisSampler,voxelXaxisSamplerSampler,coordX).r;var coordY: vec3f= vec3f(uniforms.layer,fragmentInputs.vUV.x,fragmentInputs.vUV.y);var voxelY: f32=textureSample(voxelYaxisSampler,voxelYaxisSamplerSampler,coordY).r;var voxel=select(0.0,1.0,(voxelX>0.0 || voxelY>0.0 || voxelZ>0.0));fragmentOutputs.color= vec4f( vec3f(voxel),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblCombineVoxelGridsPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblCombineVoxelGrids.fragment.js.map

/***/ }),

/***/ 23584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblGenerateVoxelMipPixelShaderWGSL: () => (/* binding */ iblGenerateVoxelMipPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblGenerateVoxelMipPixelShader";
const shader = `varying vUV: vec2f;var srcMip: texture_3d<f32>;uniform layerNum: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var Coords=vec3i(2)*vec3i(vec2i(fragmentInputs.position.xy),uniforms.layerNum);var tex =
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,0),0).x>0.0f))
<< 0u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,0),0).x>0.0f))
<< 1u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,0),0).x>0.0f))
<< 2u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,0),0).x>0.0f))
<< 3u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,1),0).x>0.0f))
<< 4u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,1),0).x>0.0f))
<< 5u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,1),0).x>0.0f))
<< 6u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,1),0).x>0.0f))
<< 7u);fragmentOutputs.color=vec4f( f32(tex)/255.0f,0.0f,0.0f,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblGenerateVoxelMipPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblGenerateVoxelMip.fragment.js.map

/***/ }),

/***/ 10461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblIcdfPixelShaderWGSL: () => (/* binding */ iblIcdfPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "iblIcdfPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var scaledLuminanceSamplerSampler : sampler;var scaledLuminanceSampler : texture_2d<f32>;var cdfx: texture_2d<f32>;var cdfy: texture_2d<f32>;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
fn fetchCDFx(x: u32)->f32 {return textureLoad(cdfx, vec2u(x,0),0).x;}
fn bisectx(size: u32,targetValue: f32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c: u32=(a+b)>>1;if (fetchCDFx(c)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFx(a))/(fetchCDFx(b)-fetchCDFx(a)))/ f32(size-1);}
fn fetchCDFy(y: u32,invocationId: u32)->f32 {return textureLoad(cdfy, vec2u(invocationId,y),0).x;}
fn bisecty(size: u32,targetValue: f32,invocationId: u32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c=(a+b)>>1;if (fetchCDFy(c,invocationId)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFy(a,invocationId))/(fetchCDFy(b,invocationId)-fetchCDFy(a,invocationId)))/ f32(size-1);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfxSize: vec2u=textureDimensions(cdfx,0);var cdfWidth: u32=cdfxSize.x;var icdfWidth: u32=cdfWidth-1;var currentPixel: vec2u= vec2u(fragmentInputs.position.xy);var outputColor: vec3f=vec3f(1.0);if (currentPixel.x==0)
{outputColor.x= 0.0;}
else if (currentPixel.x==icdfWidth-1) {outputColor.x= 1.0;} else {var targetValue: f32=fetchCDFx(cdfWidth-1)*input.vUV.x;outputColor.x= bisectx(cdfWidth,targetValue);}
var cdfySize: vec2u=textureDimensions(cdfy,0);var cdfHeight: u32=cdfySize.y;if (currentPixel.y==0) {outputColor.y= 0.0;}
else if (currentPixel.y==cdfHeight-2) {outputColor.y= 1.0;} else {var targetValue: f32=fetchCDFy(cdfHeight-1,currentPixel.x)*input.vUV.y;outputColor.y= max(bisecty(cdfHeight,targetValue,currentPixel.x),0.0);}
var size : vec2f=vec2f(textureDimensions(scaledLuminanceSampler,0));var highestMip: f32=floor(log2(size.x));var normalization : f32=textureSampleLevel(scaledLuminanceSampler,
scaledLuminanceSamplerSampler,
input.vUV,highestMip)
.r;var pixelLuminance: f32=fetchLuminance(input.vUV);outputColor.z=pixelLuminance/(2.0*PI*normalization);fragmentOutputs.color=vec4( outputColor,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblIcdfPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblIcdf.fragment.js.map

/***/ }),

/***/ 62099:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblScaledLuminancePixelShaderWGSL: () => (/* binding */ iblScaledLuminancePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "iblScaledLuminancePixelShader";
const shader = `#include<helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;uniform iblWidth: i32;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var deform: f32=sin(input.vUV.y*PI);var luminance: f32=fetchLuminance(input.vUV);fragmentOutputs.color=vec4f(vec3f(deform*luminance),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblScaledLuminancePixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblScaledLuminance.fragment.js.map

/***/ }),

/***/ 27122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowAccumulationPixelShaderWGSL: () => (/* binding */ iblShadowAccumulationPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowAccumulationPixelShader";
const shader = `varying vUV: vec2f;uniform accumulationParameters: vec4f;
#define remanence uniforms.accumulationParameters.x
#define resetb uniforms.accumulationParameters.y
#define sceneSize uniforms.accumulationParameters.z
var motionSampler: texture_2d<f32>;var positionSampler: texture_2d<f32>;var spatialBlurSampler : texture_2d<f32>;var oldAccumulationSamplerSampler: sampler;var oldAccumulationSampler: texture_2d<f32>;var prevPositionSamplerSampler: sampler;var prevPositionSampler: texture_2d<f32>;fn max2(v: vec2f,w: vec2f)->vec2f { 
return vec2f(max(v.x,w.x),max(v.y,w.y)); }
fn lessThan(x: vec2f,y: vec2f)->vec2<bool> {return x<y;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var reset: bool= bool(resetb);var gbufferRes : vec2f=vec2f(textureDimensions(positionSampler,0));var gbufferPixelCoord: vec2i= vec2i(input.vUV*gbufferRes);var shadowRes : vec2f=vec2f(textureDimensions(spatialBlurSampler,0));var shadowPixelCoord: vec2i= vec2i(input.vUV*shadowRes);var LP: vec4f=textureLoad(positionSampler,gbufferPixelCoord,0);if (0.0==LP.w) {fragmentOutputs.color=vec4f(1.0,0.0,0.0,1.0);return fragmentOutputs;}
var velocityColor: vec2f=textureLoad(motionSampler,gbufferPixelCoord,0).xy;var prevCoord: vec2f=input.vUV+velocityColor;var PrevLP: vec3f=textureSampleLevel(prevPositionSampler,prevPositionSamplerSampler,prevCoord,0.0).xyz;var PrevShadows: vec3f=textureSampleLevel(oldAccumulationSampler,oldAccumulationSamplerSampler,prevCoord,0.0).xyz;var newShadows : vec2f=textureLoad(spatialBlurSampler,shadowPixelCoord,0).xy;PrevShadows.z=select(1.0,max(PrevShadows.z/(1.0+PrevShadows.z),1.0-remanence),!reset && all(lessThan(abs(prevCoord- vec2f(0.5)), vec2f(0.5))) &&
distance(LP.xyz,PrevLP)<5e-2*sceneSize);PrevShadows=max( vec3f(0.0),PrevShadows);fragmentOutputs.color= vec4f(mix(PrevShadows.x,newShadows.x,PrevShadows.z),
mix(PrevShadows.y,newShadows.y,PrevShadows.z),PrevShadows.z,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowAccumulationPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowAccumulation.fragment.js.map

/***/ }),

/***/ 2730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowDebugPixelShaderWGSL: () => (/* binding */ iblShadowDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowDebugPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+fragmentInputs.vUV.x)*widthScale,(offsetY+fragmentInputs.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV);var debugColour: vec4f=textureSample(debugSampler,debugSamplerSampler,fragmentInputs.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {fragmentOutputs.color=vec4f(mix(debugColour.rgb,background.rgb,0.0),1.0);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowDebug.fragment.js.map

/***/ }),

/***/ 29533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowGBufferDebugPixelShaderWGSL: () => (/* binding */ iblShadowGBufferDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowGBufferDebugPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var depthSampler: sampler;var depthTexture: texture_2d<f32>;var normalSampler: sampler;var normalTexture: texture_2d<f32>;var positionSampler: sampler;var positionTexture: texture_2d<f32>;var velocitySampler: sampler;var velocityTexture: texture_2d<f32>;uniform sizeParams: vec4f;uniform maxDepth: f32;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var backgroundColour: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgba;var depth: vec4f=textureSample(depthTexture,depthSampler,input.vUV);var worldNormal: vec4f=textureSample(normalTexture,normalSampler,input.vUV);var worldPosition: vec4f=textureSample(positionTexture,positionSampler,input.vUV);var velocityLinear: vec4f=textureSample(velocityTexture,velocitySampler,input.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=backgroundColour;} else {if (uv.x<=0.25) {fragmentOutputs.color=vec4f(depth.rgb,1.0);} else if (uv.x<=0.5) {velocityLinear=vec4f(velocityLinear.r*0.5+0.5,velocityLinear.g*0.5+0.5,velocityLinear.b,velocityLinear.a);fragmentOutputs.color=vec4f(velocityLinear.rgb,1.0);} else if (uv.x<=0.75) {fragmentOutputs.color=vec4f(worldPosition.rgb,1.0);} else {fragmentOutputs.color=vec4f(worldNormal.rgb,1.0);}}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowGBufferDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowGBufferDebug.fragment.js.map

/***/ }),

/***/ 68772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowSpatialBlurPixelShaderWGSL: () => (/* binding */ iblShadowSpatialBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowSpatialBlurPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var depthSampler: texture_2d<f32>;var worldNormalSampler: texture_2d<f32>;var voxelTracingSampler : texture_2d<f32>;uniform blurParameters: vec4f;
#define stridef uniforms.blurParameters.x
#define worldScale uniforms.blurParameters.y
const weights=array<f32,5>(0.0625,0.25,0.375,0.25,0.0625);const nbWeights: i32=5;fn max2(v: vec2f,w: vec2f)->vec2f {return vec2f(max(v.x,w.x),max(v.y,w.y));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var gbufferRes=vec2f(textureDimensions(depthSampler,0));var gbufferPixelCoord= vec2i(fragmentInputs.vUV*gbufferRes);var shadowRes=vec2f(textureDimensions(voxelTracingSampler,0));var shadowPixelCoord= vec2i(fragmentInputs.vUV*shadowRes);var N: vec3f=textureLoad(worldNormalSampler,gbufferPixelCoord,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var depth: f32=-textureLoad(depthSampler,gbufferPixelCoord,0).x;var X: vec3f= vec3f(0.0);for(var y: i32=0; y<nbWeights; y++) {for(var x: i32=0; x<nbWeights; x++) {var gBufferCoords: vec2i=gbufferPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var shadowCoords: vec2i=shadowPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var T : vec2f=textureLoad(voxelTracingSampler,shadowCoords,0).xy;var ddepth: f32=-textureLoad(depthSampler,gBufferCoords,0).x-depth;var dN: vec3f=textureLoad(worldNormalSampler,gBufferCoords,0).xyz-N;var w: f32=weights[x]*weights[y] *
exp2(max(-1000.0/(worldScale*worldScale),-0.5) *
(ddepth*ddepth) -
1e1*dot(dN,dN));X+= vec3f(w*T.x,w*T.y,w);}}
fragmentOutputs.color= vec4f(X.x/X.z,X.y/X.z,0.0,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowSpatialBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowSpatialBlur.fragment.js.map

/***/ }),

/***/ 9461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowVoxelTracingPixelShaderWGSL: () => (/* binding */ iblShadowVoxelTracingPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowVoxelTracingPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;
#define DISABLE_UNIFORMITY_ANALYSIS
var depthSampler: texture_2d<f32>;var worldNormalSampler : texture_2d<f32>;var blueNoiseSampler: texture_2d<f32>;var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;var voxelGridSamplerSampler: sampler;var voxelGridSampler: texture_3d<f32>;uniform shadowParameters: vec4f;
#define SHADOWdirs uniforms.shadowParameters.x
#define SHADOWframe uniforms.shadowParameters.y
#define SHADOWenvRot uniforms.shadowParameters.w
uniform voxelBiasParameters : vec4f;
#define highestMipLevel uniforms.voxelBiasParameters.z
uniform sssParameters: vec4f;
#define SSSsamples uniforms.sssParameters.x
#define SSSstride uniforms.sssParameters.y
#define SSSmaxDistance uniforms.sssParameters.z
#define SSSthickness uniforms.sssParameters.w
uniform shadowOpacity: vec4f;uniform projMtx: mat4x4f;uniform viewMtx: mat4x4f;uniform invProjMtx: mat4x4f;uniform invViewMtx: mat4x4f;uniform wsNormalizationMtx: mat4x4f;uniform invVPMtx: mat4x4f;
#define PI 3.1415927
#define GOLD 0.618034
struct AABB3f {m_min: vec3f,
m_max: vec3f,};struct Ray {orig: vec3f,
dir: vec3f,
dir_rcp: vec3f,
t_min: f32,
t_max: f32,};fn make_ray(origin: vec3f,direction: vec3f,tmin: f32,
tmax: f32)->Ray {var ray: Ray;ray.orig=origin;ray.dir=direction;ray.dir_rcp=1.0f/direction;ray.t_min=tmin;ray.t_max=tmax;return ray;}
fn ray_box_intersection(aabb: AABB3f,ray: Ray ,
distance_near: ptr<function,f32>,distance_far: ptr<function,f32>)->bool{var tbot: vec3f=ray.dir_rcp*(aabb.m_min-ray.orig);var ttop: vec3f=ray.dir_rcp*(aabb.m_max-ray.orig);var tmin: vec3f=min(ttop,tbot);var tmax: vec3f=max(ttop,tbot);*distance_near=max(ray.t_min,max(tmin.x,max(tmin.y,tmin.z)));*distance_far=min(ray.t_max,min(tmax.x,min(tmax.y,tmax.z)));return *distance_near<=*distance_far;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
struct VoxelMarchDiagnosticInfo {heat: f32,
voxel_intersect_coords: vec3i,};
#endif
fn hash(i: u32)->u32 {var temp=i ^ (i>>16u);temp*=0x7FEB352Du;temp ^= temp>>15u;temp*=0x846CA68Bu;temp ^= temp>>16u;return temp;}
fn uintBitsToFloat(x: u32)->f32 {return bitcast<f32>(x);}
fn uint2float(i: u32)->f32 {return uintBitsToFloat(0x3F800000u | (i>>9u))-1.0;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
fn plasticSequence(rstate: u32)->vec2f {return vec2f(uint2float(rstate*3242174889u),
uint2float(rstate*2447445414u));}
fn goldenSequence(rstate: u32)->f32 {return uint2float(rstate*2654435769u);}
fn distanceSquared(a: vec2f,b: vec2f)->f32 {var diff: vec2f=a-b;return dot(diff,diff);}
fn genTB(N: vec3f,T: ptr<function,vec3f>,B: ptr<function,vec3f>) {var s: f32=select(1.0,-1.0,N.z<0.0);var a: f32=-1.0/(s+N.z);var b: f32=N.x*N.y*a;*T= vec3f(1.0+s*N.x*N.x*a,s*b,-s*N.x);*B= vec3f(b,s+N.y*N.y*a,-N.y);}
fn lessThan(x: vec3f,y: vec3f)->vec3<bool> {return x<y;}
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn anyHitVoxels(ray_vs: Ray,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->bool {
#else
fn anyHitVoxels(ray_vs: Ray)->bool {
#endif
var stack=array<i32,24>(); 
var invD: vec3f=ray_vs.dir_rcp;var D: vec3f=ray_vs.dir;var O: vec3f=ray_vs.orig;var negD=vec3i(lessThan(D, vec3f(0,0,0)));var voxel0: i32=negD.x | (negD.y<<1) | (negD.z<<2);var t0: vec3f=-O*invD;var t1=(vec3f(1.0)-O)*invD;var maxLod: i32= i32(highestMipLevel);var stackLevel: i32=0;
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var steps: u32=0u;
#endif
stack[stackLevel]=maxLod<<24;stackLevel++;while (stackLevel>0) {stackLevel=stackLevel-1;var elem: i32=stack[stackLevel];var Coords: vec4i =
vec4i(elem & 0xFF,(elem>>8) & 0xFF,(elem>>16) & 0xFF,elem>>24);if (Coords.w==0) {
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return true;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
++steps;
#endif
var invRes: f32=exp2(f32(Coords.w-maxLod));var bbmin: vec3f=invRes*vec3f(Coords.xyz+negD);var bbmax: vec3f=invRes*vec3f(Coords.xyz-negD+vec3i(1));var mint: vec3f=mix(t0,t1,bbmin);var maxt: vec3f=mix(t0,t1,bbmax);var midt: vec3f=0.5*(mint+maxt);mint.x=max(0.0,mint.x);midt.x=max(0.0,midt.x);var nodeMask: u32= u32(
round(textureLoad(voxelGridSampler,Coords.xyz,Coords.w).x*255.0));Coords.w--;var voxelBit: u32=u32(voxel0);Coords=vec4i((Coords.xyz<<vec3u(1))+negD,Coords.w);var packedCoords: i32 =
Coords.x | (Coords.y<<8) | (Coords.z<<16) | (Coords.w<<24);if (max(mint.x,max(mint.y,mint.z))<min(midt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(mint.y,mint.z))<min(maxt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(midt.y,mint.z))<min(maxt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(midt.y,mint.z))<min(midt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x4;packedCoords ^= 0x10000;if (max(mint.x,max(midt.y,midt.z))<min(midt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(midt.y,midt.z))<min(maxt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(mint.y,midt.z))<min(maxt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(mint.y,midt.z))<min(midt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return false;}
fn linearizeDepth(depth: f32,near: f32,far: f32)->f32 {return (near*far)/(far-depth*(far-near));}
fn screenSpaceShadow(csOrigin: vec3f,csDirection: vec3f,csZBufferSize: vec2f,
nearPlaneZ: f32,farPlaneZ: f32,noise: f32)->f32 {
#ifdef RIGHT_HANDED
var csZDir : f32=-1.0;
#else 
var csZDir : f32=1.0;
#endif
var ssSamples: f32=SSSsamples;var ssMaxDist: f32=SSSmaxDistance;var ssStride: f32=SSSstride;var ssThickness: f32=SSSthickness;var rayLength: f32 =
select(ssMaxDist,(nearPlaneZ-csOrigin.z)/csDirection.z,
csZDir*(csOrigin.z+ssMaxDist*csDirection.z)<csZDir*nearPlaneZ);var csEndPoint: vec3f=csOrigin+rayLength*csDirection;var H0: vec4f=uniforms.projMtx*vec4f(csOrigin,1.0);var H1: vec4f=uniforms.projMtx*vec4f(csEndPoint,1.0);var Z0=vec2f(csOrigin.z ,1.0)/H0.w;var Z1=vec2f(csEndPoint.z,1.0)/H1.w;var P0=csZBufferSize*(0.5*H0.xy*Z0.y+0.5);var P1=csZBufferSize*(0.5*H1.xy*Z1.y+0.5);P1+= vec2f(select(0.0,0.01,distanceSquared(P0,P1)<0.0001));var delta: vec2f=P1-P0;var permute: bool=false;if (abs(delta.x)<abs(delta.y)) {permute=true;P0=P0.yx;P1=P1.yx;delta=delta.yx;}
var stepDirection: f32=sign(delta.x);var invdx: f32=stepDirection/delta.x;var dP: vec2f=ssStride* vec2f(stepDirection,invdx*delta.y);var dZ: vec2f=ssStride*invdx*(Z1-Z0);var opacity: f32=0.0;var P: vec2f=P0+noise*dP;var Z: vec2f=Z0+noise*dZ;var end: f32=P1.x*stepDirection;var rayZMax=csZDir*Z.x/Z.y;var sceneDepth=rayZMax;Z+=dZ;for (var stepCount: f32=0.0; 
opacity<1.0 && P.x*stepDirection<end && sceneDepth>0.0 && stepCount<ssSamples;stepCount+=1) { 
var coords=vec2i(select(P,P.yx,permute));sceneDepth=textureLoad(depthSampler,coords,0).x;sceneDepth=linearizeDepth(sceneDepth,nearPlaneZ,farPlaneZ);sceneDepth=csZDir*sceneDepth;if (sceneDepth<=0.0) {break;}
var rayZMin: f32=rayZMax;rayZMax=csZDir*Z.x/Z.y;opacity+=max(opacity,step(rayZMax,sceneDepth+ssThickness)*step(sceneDepth,rayZMin));P+=dP;Z+=dZ;}
return opacity;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->f32 {
#else
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f)->f32 {
#endif
var vxResolution: f32=f32(textureDimensions(voxelGridSampler,0).x);var T: vec3f;var B: vec3f;genTB(wsDirection,&T,&B);var DitherXY: vec2f=sqrt(DitherNoise.x)* vec2f(cos(2.0*PI*DitherNoise.y),
sin(2.0*PI*DitherNoise.y));var Dithering : vec3f=(uniforms.voxelBiasParameters.x*wsNormal +
uniforms.voxelBiasParameters.y*wsDirection +
DitherXY.x*T+DitherXY.y*B) /
vxResolution;var O: vec3f=0.5*wsOrigin+0.5+Dithering;var ray_vs=make_ray(O,wsDirection,0.0,10.0);var voxel_aabb: AABB3f;voxel_aabb.m_min=vec3f(0);voxel_aabb.m_max=vec3f(1);var near: f32=0;var far: f32=0;if (!ray_box_intersection(voxel_aabb,ray_vs,&near,&far)) {return 0.0;}
ray_vs.t_min=max(ray_vs.t_min,near);ray_vs.t_max=min(ray_vs.t_max,far);
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
return select(0.0f,1.0f,anyHitVoxels(ray_vs,voxel_march_diagnostic_info));
#else
return select(0.0f,1.0f,anyHitVoxels(ray_vs));
#endif
}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var nbDirs=u32(SHADOWdirs);var frameId=u32(SHADOWframe);var envRot: f32=SHADOWenvRot;var Resolution: vec2f= vec2f(textureDimensions(depthSampler,0));var currentPixel=vec2i(fragmentInputs.vUV*Resolution);var GlobalIndex =
(frameId*u32(Resolution.y)+u32(currentPixel.y))*u32(Resolution.x) +
u32(currentPixel.x);var N : vec3f=textureLoad(worldNormalSampler,currentPixel,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var normalizedRotation: f32=envRot/(2.0*PI);var depth : f32=textureLoad(depthSampler,currentPixel,0).x;
#ifndef IS_NDC_HALF_ZRANGE
depth=depth*2.0-1.0;
#endif
var temp : vec2f=(vec2f(currentPixel)+vec2f(0.5))*2.0/Resolution -
vec2f(1.0);var VP : vec4f=uniforms.invProjMtx*vec4f(temp.x,-temp.y,depth,1.0);VP/=VP.w;N=normalize(N);var noise
: vec3f =
textureLoad(blueNoiseSampler,currentPixel & vec2i(0xFF),0).xyz;noise.z=fract(noise.z+goldenSequence(frameId*nbDirs));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var heat: f32=0.0f;
#endif
var shadowAccum: f32=0.0;var specShadowAccum: f32=0.0;var sampleWeight : f32=0;for (var i: u32=0; i<nbDirs; i++) {var dirId: u32=nbDirs*GlobalIndex+i;var L: vec4f;{var r: vec2f=plasticSequence(frameId*nbDirs+i);r=fract(r+ vec2f(2.0)*abs(noise.xy- vec2f(0.5)));var T: vec2f;T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(r.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(T.x,r.y),0.0).y;T.x-=normalizedRotation;L= vec4f(uv_to_normal(T),0);
#ifndef RIGHT_HANDED
L.z*=-1.0;
#endif
}
var edge_tint_const=-0.001;var cosNL: f32=dot(N,L.xyz);var opacity: f32=select(0.0,1.0,cosNL<edge_tint_const);if (cosNL>edge_tint_const) {var VP2: vec4f=VP;VP2.y*=-1.0;var unormWP : vec4f=uniforms.invViewMtx*VP2;var WP: vec3f=(uniforms.wsNormalizationMtx*unormWP).xyz;var vxNoise: vec2f =
vec2f(uint2float(hash(dirId*2)),uint2float(hash(dirId*2+1)));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
VoxelMarchDiagnosticInfo voxel_march_diagnostic_info;opacity=max(opacity,
uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise,
voxel_march_diagnostic_info));heat+=voxel_march_diagnostic_info.heat;
#else
opacity =
max(opacity,uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise));
#endif
var VL : vec3f=(uniforms.viewMtx*L).xyz;
#ifdef RIGHT_HANDED
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0);
#else
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0);
#endif
var ssShadow: f32=uniforms.shadowOpacity.y *
screenSpaceShadow(VP2.xyz,VL,Resolution,nearPlaneZ,farPlaneZ,
abs(2.0*noise.z-1.0));opacity=max(opacity,ssShadow);shadowAccum+=min(1.0-opacity,cosNL);sampleWeight+=cosNL;var VR : vec3f=abs((uniforms.viewMtx*vec4f(reflect(-L.xyz,N),0.0)).xyz);specShadowAccum+=max(1.0-(opacity*pow(VR.z,8.0)),0.0);}
noise.z=fract(noise.z+GOLD);}
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fragmentOutputs.color =
vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,heat/sampleWeight,1.0);
#else
fragmentOutputs.color=vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,0.0,1.0);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowVoxelTracingPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowVoxelTracing.fragment.js.map

/***/ }),

/***/ 22857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export iblShadowsCombinePixelShaderWGSL */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowsCombinePixelShader";
const shader = `varying vUV: vec2f;var shadowSamplerSampler : sampler;var shadowSampler : texture_2d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform shadowOpacity: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var shadow
: vec3f =
textureSample(shadowSampler,shadowSamplerSampler,input.vUV).rgb;var color
: vec3f =
textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var shadowValue: f32=mix(1.0,shadow.x,uniforms.shadowOpacity);fragmentOutputs.color=vec4f(color*shadowValue,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblShadowsCombinePixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblShadowsCombine.fragment.js.map

/***/ }),

/***/ 39107:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGridPixelShaderWGSL: () => (/* binding */ iblVoxelGridPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGridPixelShader";
const shader = `varying vNormalizedPosition: vec3f;uniform nearPlane: f32;uniform farPlane: f32;uniform stepSize: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normPos: vec3f=input.vNormalizedPosition.xyz;if (normPos.z<uniforms.nearPlane || normPos.z>uniforms.farPlane) {discard;}
fragmentOutputs.fragData0=select(vec4f(0.0),vec4f(1.0),normPos.z<uniforms.nearPlane+uniforms.stepSize);fragmentOutputs.fragData1=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+uniforms.stepSize && normPos.z<uniforms.nearPlane+2.0*uniforms.stepSize);fragmentOutputs.fragData2=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+2.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+3.0*uniforms.stepSize);fragmentOutputs.fragData3=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+3.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+4.0*uniforms.stepSize);
#if MAX_DRAW_BUFFERS>4
fragmentOutputs.fragData4=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+4.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+5.0*uniforms.stepSize);fragmentOutputs.fragData5=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+5.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+6.0*uniforms.stepSize);fragmentOutputs.fragData6=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+6.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+7.0*uniforms.stepSize);fragmentOutputs.fragData7=select(vec4f(0.0),vec4f(1.0),normPos.z>=uniforms.nearPlane+7.0*uniforms.stepSize && normPos.z<uniforms.nearPlane+8.0*uniforms.stepSize);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelGridPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelGrid.fragment.js.map

/***/ }),

/***/ 43965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGridVertexShaderWGSL: () => (/* binding */ iblVoxelGridVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGridVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.viewMatrix*uniforms.invWorldScale*uniforms.world* vec4f(input.position,1.);vertexOutputs.vNormalizedPosition=vertexOutputs.position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
vertexOutputs.position=vec4f(vertexOutputs.position.x,vertexOutputs.position.y,vertexOutputs.position.z*0.5+0.5,vertexOutputs.position.w);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelGridVertexShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelGrid.vertex.js.map

/***/ }),

/***/ 17537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGrid2dArrayDebugPixelShaderWGSL: () => (/* binding */ iblVoxelGrid2dArrayDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGrid2dArrayDebugPixelShader";
const shader = `varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform slice: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var size: vec3u=textureDimensions(voxelTexture,0);var dimension: f32=sqrt( f32(size.z));var samplePos: vec2f=fract(input.vUV.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(input.vUV.x* f32(dimension))+floor(input.vUV.y* f32(dimension))*dimension);var color=textureSample(voxelTexture,voxelTextureSampler, vec3f(samplePos.xy,sampleIndex)).rrr;color+=textureSample(textureSampler,textureSamplerSampler,input.vUV.xy).rgb;fragmentOutputs.color=vec4f(color,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelGrid2dArrayDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelGrid2dArrayDebug.fragment.js.map

/***/ }),

/***/ 84237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGrid3dDebugPixelShaderWGSL: () => (/* binding */ iblVoxelGrid3dDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGrid3dDebugPixelShader";
const shader = `varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var voxelSlabTextureSampler: sampler;var voxelSlabTexture: texture_2d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
uniform mipNumber: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var voxelSlab: vec4f=textureSample(voxelSlabTexture,voxelSlabTextureSampler,input.vUV);var size: vec3u=textureDimensions(voxelTexture, i32(uniforms.mipNumber));var dimension: f32=ceil(sqrt( f32(size.z)));var samplePos: vec2f=fract(uv.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(uv.x* f32(dimension)) +
floor(uv.y* f32(dimension))*dimension);var mip_separator: f32=0.0;if (samplePos.x<0.01 || samplePos.y<0.01) {mip_separator=1.0;}
var outBounds: bool=select(false,true,sampleIndex>size.z-1);sampleIndex=clamp(sampleIndex,0,size.z-1);var samplePosInt: vec2i= vec2i(samplePos.xy* vec2f(size.xy));var voxel: vec3f=textureLoad(voxelTexture,
vec3i(i32(samplePosInt.x),i32(samplePosInt.y),i32(sampleIndex)),
i32(uniforms.mipNumber)).rgb;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {if (outBounds) {voxel= vec3f(0.15,0.0,0.0);} else {if (voxel.r>0.001) {voxel.g=1.0;}
voxel.r+=mip_separator;}
fragmentOutputs.color=vec4f(mix(background.rgb,voxelSlab.rgb,voxelSlab.a)+voxel,1.0);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelGrid3dDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelGrid3dDebug.fragment.js.map

/***/ }),

/***/ 1138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelSlabDebugPixelShaderWGSL: () => (/* binding */ iblVoxelSlabDebugPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelSlabDebugPixelShader";
const shader = `varying vNormalizedPosition: vec3f;uniform nearPlane: f32;uniform farPlane: f32;uniform stepSize: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normPos: vec3f=input.vNormalizedPosition.xyz;var chunkSize: f32=uniforms.stepSize* f32(MAX_DRAW_BUFFERS);var numChunks: f32=1.0/chunkSize;var positionInChunk: f32=fract(normPos.z/chunkSize);var slab: f32=floor(positionInChunk* f32(MAX_DRAW_BUFFERS)) /
f32(MAX_DRAW_BUFFERS);if (normPos.x<0.0 || normPos.y<0.0 || normPos.z<0.0 ||
normPos.x>1.0 || normPos.y>1.0 || normPos.z>1.0) {fragmentOutputs.color= vec4f(0.0,0.0,0.0,0.0);} else {fragmentOutputs.color= vec4f(slab,0.0,0.0,0.75);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelSlabDebugPixelShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelSlabDebug.fragment.js.map

/***/ }),

/***/ 26472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelSlabDebugVertexShaderWGSL: () => (/* binding */ iblVoxelSlabDebugVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelSlabDebugVertexShader";
const shader = `attribute position: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform cameraViewMatrix: mat4x4f;uniform projection: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {var worldPosition: vec4f=(uniforms.world* vec4f(input.position,1.));vertexOutputs.position=uniforms.projection*uniforms.cameraViewMatrix*worldPosition;vertexOutputs.vNormalizedPosition=(uniforms.viewMatrix*uniforms.invWorldScale*worldPosition).rgb;vertexOutputs.vNormalizedPosition=vertexOutputs.vNormalizedPosition* vec3f(0.5)+ vec3f(0.5);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const iblVoxelSlabDebugVertexShaderWGSL = { name, shader };
//# sourceMappingURL=iblVoxelSlabDebug.vertex.js.map

/***/ }),

/***/ 37614:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingPixelShaderWGSL: () => (/* binding */ imageProcessingPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16205);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_imageProcessingFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88996);
// Do not edit.




const name = "imageProcessingPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const imageProcessingPixelShaderWGSL = { name, shader };
//# sourceMappingURL=imageProcessing.fragment.js.map

/***/ }),

/***/ 12850:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kernelBlurPixelShaderWGSL: () => (/* binding */ kernelBlurPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js
var kernelBlurVaryingDeclaration = __webpack_require__(52383);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js
var packingFunctions = __webpack_require__(5543);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurFragment.js
// Do not edit.

const kernelBlurFragment_name = "kernelBlurFragment";
const shader = `#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X})*computedWeight;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[kernelBlurFragment_name] = shader;
/** @internal */
const kernelBlurFragmentWGSL = { name: kernelBlurFragment_name, shader };
//# sourceMappingURL=kernelBlurFragment.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurFragment2.js
// Do not edit.

const kernelBlurFragment2_name = "kernelBlurFragment2";
const kernelBlurFragment2_shader = `#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[kernelBlurFragment2_name] = kernelBlurFragment2_shader;
/** @internal */
const kernelBlurFragment2WGSL = { name: kernelBlurFragment2_name, shader: kernelBlurFragment2_shader };
//# sourceMappingURL=kernelBlurFragment2.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/kernelBlur.fragment.js
// Do not edit.





const kernelBlur_fragment_name = "kernelBlurPixelShader";
const kernelBlur_fragment_shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform delta: vec2f;varying sampleCenter: vec2f;
#ifdef DOF
var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;fn sampleCoC(offset: vec2f)->f32 {var coc: f32=textureSample(circleOfConfusionSampler,circleOfConfusionSamplerSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var computedWeight: f32=0.0;
#ifdef PACKEDFLOAT
var blend: f32=0.;
#else
var blend: vec4f= vec4f(0.);
#endif
#ifdef DOF
var sumOfWeights: f32=CENTER_WEIGHT; 
var factor: f32=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,input.sampleCenter))*CENTER_WEIGHT;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,input.sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
fragmentOutputs.color=pack(blend);
#else
fragmentOutputs.color=blend;
#endif
#ifdef DOF
fragmentOutputs.color/=sumOfWeights;
#endif
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[kernelBlur_fragment_name] = kernelBlur_fragment_shader;
/** @internal */
const kernelBlurPixelShaderWGSL = { name: kernelBlur_fragment_name, shader: kernelBlur_fragment_shader };
//# sourceMappingURL=kernelBlur.fragment.js.map

/***/ }),

/***/ 85417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kernelBlurVertexShaderWGSL: () => (/* binding */ kernelBlurVertexShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js
var kernelBlurVaryingDeclaration = __webpack_require__(52383);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVertex.js
// Do not edit.

const kernelBlurVertex_name = "kernelBlurVertex";
const shader = `vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[kernelBlurVertex_name] = shader;
/** @internal */
const kernelBlurVertexWGSL = { name: kernelBlurVertex_name, shader };
//# sourceMappingURL=kernelBlurVertex.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/kernelBlur.vertex.js
// Do not edit.



const kernelBlur_vertex_name = "kernelBlurVertexShader";
const kernelBlur_vertex_shader = `attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[kernelBlur_vertex_name] = kernelBlur_vertex_shader;
/** @internal */
const kernelBlurVertexShaderWGSL = { name: kernelBlur_vertex_name, shader: kernelBlur_vertex_shader };
//# sourceMappingURL=kernelBlur.vertex.js.map

/***/ }),

/***/ 70711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerPixelShaderWGSL: () => (/* binding */ layerPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "layerPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor=toGammaSpace(baseColor);
#elif defined(CONVERT_TO_LINEAR)
baseColor=toLinearSpaceVec4(baseColor);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4) {discard;}
#endif
fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const layerPixelShaderWGSL = { name, shader };
//# sourceMappingURL=layer.fragment.js.map

/***/ }),

/***/ 16913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerVertexShaderWGSL: () => (/* binding */ layerVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "layerVertexShader";
const shader = `attribute position: vec2f;uniform scale: vec2f;uniform offset: vec2f;uniform textureMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var shiftedPosition: vec2f=input.position*uniforms.scale+uniforms.offset;vertexOutputs.vUV=(uniforms.textureMatrix* vec4f(shiftedPosition*madd+madd,1.0,0.0)).xy;vertexOutputs.position= vec4f(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const layerVertexShaderWGSL = { name, shader };
//# sourceMappingURL=layer.vertex.js.map

/***/ }),

/***/ 53880:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lensFlarePixelShaderWGSL: () => (/* binding */ lensFlarePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lensFlarePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const lensFlarePixelShaderWGSL = { name, shader };
//# sourceMappingURL=lensFlare.fragment.js.map

/***/ }),

/***/ 59382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lensFlareVertexShaderWGSL: () => (/* binding */ lensFlareVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lensFlareVertexShader";
const shader = `attribute position: vec2f;uniform viewportMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position=uniforms.viewportMatrix* vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const lensFlareVertexShaderWGSL = { name, shader };
//# sourceMappingURL=lensFlare.vertex.js.map

/***/ }),

/***/ 85264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linePixelShaderWGSL: () => (/* binding */ linePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38780);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97715);
// Do not edit.





const name = "linePixelShader";
const shader = `#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const linePixelShaderWGSL = { name, shader };
//# sourceMappingURL=line.fragment.js.map

/***/ }),

/***/ 80574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineVertexShaderWGSL: () => (/* binding */ lineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98327);
/* harmony import */ var _ShadersInclude_meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6874);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81482);
// Do not edit.









const name = "lineVertexShader";
const shader = `#define ADDITIONAL_VERTEX_DECLARATION
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position: vec3f;attribute normal: vec4f;uniform width: f32;uniform aspectRatio: f32;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
var worldViewProjection: mat4x4f=scene.viewProjection*finalWorld;var viewPosition: vec4f=worldViewProjection* vec4f(input.position,1.0);var viewPositionNext: vec4f=worldViewProjection* vec4f(input.normal.xyz,1.0);var currentScreen: vec2f=viewPosition.xy/viewPosition.w;var nextScreen: vec2f=viewPositionNext.xy/viewPositionNext.w;currentScreen=vec2f(currentScreen.x*uniforms.aspectRatio,currentScreen.y);nextScreen=vec2f(nextScreen.x*uniforms.aspectRatio,nextScreen.y);var dir: vec2f=normalize(nextScreen-currentScreen);var normalDir: vec2f= vec2f(-dir.y,dir.x);normalDir*=uniforms.width/2.0;normalDir=vec2f(normalDir.x/uniforms.aspectRatio,normalDir.y);var offset: vec4f= vec4f(normalDir*input.normal.w,0.0,0.0);vertexOutputs.position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const lineVertexShaderWGSL = { name, shader };
//# sourceMappingURL=line.vertex.js.map

/***/ }),

/***/ 3613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodPixelShaderWGSL: () => (/* binding */ lodPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lodPixelShader";
const shader = `const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,fragmentInputs.vUV,uniforms.lod);if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const lodPixelShaderWGSL = { name, shader };
//# sourceMappingURL=lod.fragment.js.map

/***/ }),

/***/ 91650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodCubePixelShaderWGSL: () => (/* binding */ lodCubePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lodCubePixelShader";
const shader = `const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);
#endif
if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const lodCubePixelShaderWGSL = { name, shader };
//# sourceMappingURL=lodCube.fragment.js.map

/***/ }),

/***/ 72657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererPixelShaderWGSL: () => (/* binding */ meshUVSpaceRendererPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererPixelShader";
const shader = `varying vDecalTC: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {if (input.vDecalTC.x<0. || input.vDecalTC.x>1. || input.vDecalTC.y<0. || input.vDecalTC.y>1.) {discard;}
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vDecalTC);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererPixelShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRenderer.fragment.js.map

/***/ }),

/***/ 23451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererVertexShaderWGSL: () => (/* binding */ meshUVSpaceRendererVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40242);
// Do not edit.











const name = "meshUVSpaceRendererVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;attribute uv: vec2f;uniform projMatrix: mat4x4f;varying vDecalTC: vec2f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);var vNormalW: vec3f;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
var normalView: vec3f=normalize((uniforms.projMatrix* vec4f(vNormalW,0.0)).xyz);var decalTC: vec3f=(uniforms.projMatrix*worldPos).xyz;vertexOutputs.vDecalTC=decalTC.xy;vertexOutputs.position=vec4f(input.uv*2.0-1.0,select(decalTC.z,2.,normalView.z>0.0),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererVertexShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRenderer.vertex.js.map

/***/ }),

/***/ 29700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererFinaliserPixelShaderWGSL: () => (/* binding */ meshUVSpaceRendererFinaliserPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererFinaliserPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var maskTextureSamplerSampler: sampler;var maskTextureSampler: texture_2d<f32>;uniform textureSize: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var mask: vec4f=textureSample(maskTextureSampler,maskTextureSamplerSampler,input.vUV).rgba;if (mask.r>0.5) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);} else {var texelSize: vec2f=4.0/uniforms.textureSize;var uv_p01: vec2f=input.vUV+ vec2f(-1.0,0.0)*texelSize;var uv_p21: vec2f=input.vUV+ vec2f(1.0,0.0)*texelSize;var uv_p10: vec2f=input.vUV+ vec2f(0.0,-1.0)*texelSize;var uv_p12: vec2f=input.vUV+ vec2f(0.0,1.0)*texelSize;var mask_p01: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p01).r;var mask_p21: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p21).r;var mask_p10: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p10).r;var mask_p12: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p12).r;var col: vec4f= vec4f(0.0,0.0,0.0,0.0);var total_weight: f32=0.0;if (mask_p01>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p01);total_weight+=1.0;}
if (mask_p21>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p21);total_weight+=1.0;}
if (mask_p10>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p10);total_weight+=1.0;}
if (mask_p12>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p12);total_weight+=1.0;}
if (total_weight>0.0) {fragmentOutputs.color=col/total_weight;} else {fragmentOutputs.color=col;}}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererFinaliserPixelShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererFinaliser.fragment.js.map

/***/ }),

/***/ 33570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererFinaliserVertexShaderWGSL: () => (/* binding */ meshUVSpaceRendererFinaliserVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererFinaliserVertexShader";
const shader = `attribute position: vec3f;attribute uv: vec2f;uniform worldViewProjection: mat4x4f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.worldViewProjection* vec4f(input.position,1.0);vertexOutputs.positionvUV=input.uv;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererFinaliserVertexShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererFinaliser.vertex.js.map

/***/ }),

/***/ 4044:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererMaskerPixelShaderWGSL: () => (/* binding */ meshUVSpaceRendererMaskerPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererMaskerPixelShader";
const shader = `varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color= vec4f(1.0,1.0,1.0,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererMaskerPixelShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererMasker.fragment.js.map

/***/ }),

/***/ 19226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererMaskerVertexShaderWGSL: () => (/* binding */ meshUVSpaceRendererMaskerVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererMaskerVertexShader";
const shader = `attribute uv: vec2f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position= vec4f( vec2f(input.uv.x,input.uv.y)*2.0-1.0,0.,1.0);vertexOutputs.vUV=input.uv;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const meshUVSpaceRendererMaskerVertexShaderWGSL = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererMasker.vertex.js.map

/***/ }),

/***/ 8075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   motionBlurPixelShaderWGSL: () => (/* binding */ motionBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "motionBlurPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform motionStrength: f32;uniform motionScale: f32;uniform screenSize: vec2f;
#ifdef OBJECT_BASED
var velocitySamplerSampler: sampler;var velocitySampler: texture_2d<f32>;
#else
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform inverseViewProjection: mat4x4f;uniform prevViewProjection: mat4x4f;uniform projection: mat4x4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
var texelSize: vec2f=1.0/uniforms.screenSize;var velocityColor: vec4f=textureSample(velocitySampler,velocitySamplerSampler,input.vUV);velocityColor=vec4f(velocityColor.rg*2.0- vec2f(1.0),velocityColor.b,velocityColor.a);var velocity: vec2f= vec2f(pow(velocityColor.r,3.0),pow(velocityColor.g,3.0))*velocityColor.a;velocity*=uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var samplesCount: i32= i32(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;var hlim: f32= f32(-samplesCount)*0.5+0.5;var result: vec4f=textureSample(textureSampler,textureSamplerSampler, input.vUV);for (var i: i32=1; i< i32(SAMPLES); i++)
{if (i>=samplesCount) {break;}
var offset: vec2f=input.vUV+velocity*(hlim+ f32(i));
#if defined(WEBGPU)
result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset,0.0);
#else
result+=textureSample(textureSampler,textureSamplerSampler, offset);
#endif
}
fragmentOutputs.color=vec4f(result.rgb/ f32(samplesCount),1.0);
#else
var texelSize: vec2f=1.0/uniforms.screenSize;var depth: f32=textureSample(depthSampler,depthSamplerSampler,input.vUV).r;depth=uniforms.projection[2].z+uniforms.projection[3].z/depth; 
var cpos: vec4f= vec4f(input.vUV*2.0-1.0,depth,1.0);cpos=uniforms.inverseViewProjection*cpos;cpos/=cpos.w;var ppos: vec4f=uniforms.prevViewProjection*cpos;ppos/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;var velocity: vec2f=(ppos.xy-input.vUV)*uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var nSamples: i32= i32(clamp(speed,1.0,SAMPLES));var result: vec4f=textureSample(textureSampler,textureSamplerSampler, input.vUV);for (var i: i32=1; i< i32(SAMPLES); i++) {if (i>=nSamples) {break;}
var offset1: vec2f=input.vUV+velocity*( f32(i)/ f32(nSamples-1)-0.5);
#if defined(WEBGPU)
result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset1,0.0);
#else
result+=textureSample(textureSampler,textureSamplerSampler, offset1);
#endif
}
fragmentOutputs.color=result/ f32(nSamples);
#endif
#else
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler, input.vUV);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const motionBlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=motionBlur.fragment.js.map

/***/ }),

/***/ 47312:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitBackBlendPixelShaderWGSL: () => (/* binding */ oitBackBlendPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitBackBlendPixelShader";
const shader = `var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureLoad(uBackColor,vec2i(fragmentInputs.position.xy),0);if (fragmentOutputs.color.a==0.0) {discard;}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const oitBackBlendPixelShaderWGSL = { name, shader };
//# sourceMappingURL=oitBackBlend.fragment.js.map

/***/ }),

/***/ 14958:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitFinalPixelShaderWGSL: () => (/* binding */ oitFinalPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitFinalPixelShader";
const shader = `var uFrontColor: texture_2d<f32>;var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var frontColor: vec4f=textureLoad(uFrontColor,fragCoord,0);var backColor: vec4f=textureLoad(uBackColor,fragCoord,0);var alphaMultiplier: f32=1.0-frontColor.a;fragmentOutputs.color=vec4f(
frontColor.rgb+alphaMultiplier*backColor.rgb,
frontColor.a+backColor.a
);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const oitFinalPixelShaderWGSL = { name, shader };
//# sourceMappingURL=oitFinal.fragment.js.map

/***/ }),

/***/ 13802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlinePixelShaderWGSL: () => (/* binding */ outlinePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97715);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38780);
// Do not edit.





const name = "outlinePixelShader";
const shader = `uniform color: vec4f;
#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV).a<0.4) {discard;}
#endif
#include<logDepthFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const outlinePixelShaderWGSL = { name, shader };
//# sourceMappingURL=outline.fragment.js.map

/***/ }),

/***/ 85520:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlineVertexShaderWGSL: () => (/* binding */ outlineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81482);
// Do not edit.















const name = "outlineVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const outlineVertexShaderWGSL = { name, shader };
//# sourceMappingURL=outline.vertex.js.map

/***/ }),

/***/ 96913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesPixelShaderWGSL: () => (/* binding */ particlesPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39759);
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16205);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_imageProcessingFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88996);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66407);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97715);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38780);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93243);
// Do not edit.










const name = "particlesPixelShader";
const shader = `varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;var rampSamplerSampler: sampler;var rampSampler: texture_2d<f32>;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var textureColor: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV);var baseColor: vec4f=(textureColor*uniforms.textureMask+( vec4f(1.,1.,1.,1.)-uniforms.textureMask))*input.vColor;
#ifdef RAMPGRADIENT
var alpha: f32=baseColor.a;var remappedColorIndex: f32=clamp((alpha-input.remapRanges.x)/input.remapRanges.y,0.0,1.0);var rampColor: vec4f=textureSample(rampSampler,rampSamplerSampler,vec2f(1.0-remappedColorIndex,0.));baseColor=vec4f(baseColor.rgb*rampColor.rgb,baseColor.a);var finalAlpha: f32=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-input.remapRanges.z)/input.remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
var sourceAlpha: f32=input.vColor.a*textureColor.a;baseColor=vec4f(baseColor.rgb*sourceAlpha+ vec3f(1.0)*(1.0-sourceAlpha),baseColor.a);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);
#else
#ifdef IMAGEPROCESSING
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);baseColor=applyImageProcessing(baseColor);
#endif
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const particlesPixelShaderWGSL = { name, shader };
//# sourceMappingURL=particles.fragment.js.map

/***/ }),

/***/ 27323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesVertexShaderWGSL: () => (/* binding */ particlesVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75757);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59013);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
// Do not edit.







const name = "particlesVertexShader";
const shader = `attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;
#ifdef ANIMATESHEET
attribute cellIndex: f32;
#endif
#ifndef BILLBOARD
attribute direction: vec3f;
#endif
#ifdef BILLBOARDSTRETCHED
attribute direction: vec3f;
#endif
#ifdef RAMPGRADIENT
attribute remapData: vec4f;
#endif
attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform translationPivot: vec2f;
#ifdef ANIMATESHEET
uniform particlesInfos: vec3f; 
#endif
varying vUV: vec2f;varying vColor: vec4f;varying vPositionW: vec3f;
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform invView: mat4x4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform eyePosition: vec3f;
#endif
fn rotate(yaxis: vec3f,rotatedCorner: vec3f)->vec3f {var xaxis: vec3f=normalize(cross( vec3f(0.,1.0,0.),yaxis));var zaxis: vec3f=normalize(cross(yaxis,xaxis));var row0: vec3f= vec3f(xaxis.x,xaxis.y,xaxis.z);var row1: vec3f= vec3f(yaxis.x,yaxis.y,yaxis.z);var row2: vec3f= vec3f(zaxis.x,zaxis.y,zaxis.z);var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
fn rotateAlign(toCamera: vec3f,rotatedCorner: vec3f)->vec3f {var normalizedToCamera: vec3f=normalize(toCamera);var normalizedCrossDirToCamera: vec3f=normalize(cross(normalize(vertexInputs.direction),normalizedToCamera));var row0: vec3f= vec3f(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);var row2: vec3f= vec3f(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
var row1: vec3f=vertexInputs.direction;
#else
var crossProduct: vec3f=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));var row1: vec3f= vec3f(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return input.position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var cornerPos: vec2f;cornerPos=( vec2f(input.offset.x-0.5,input.offset.y -0.5)-uniforms.translationPivot)*input.size;
#ifdef BILLBOARD
var rotatedCorner: vec3f;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=input.position-uniforms.eyePosition;yaxis.y=0.;vertexOutputs.vPositionW=rotate(normalize(yaxis),rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vertexOutputs.vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var toCamera: vec3f=input.position-uniforms.eyePosition;vertexOutputs.vPositionW=rotateAlign(toCamera,rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vertexOutputs.vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var viewPos: vec3f=(uniforms.view* vec4f(input.position,1.0)).xyz+rotatedCorner;vertexOutputs.vPositionW=(uniforms.invView* vec4f(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
vertexOutputs.remapRanges=input.remapData;
#endif
vertexOutputs.position=uniforms.projection* vec4f(viewPos,1.0);
#else
var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=normalize(vertexInputs.direction);vertexOutputs.vPositionW=rotate(yaxis,rotatedCorner);vertexOutputs.position=uniforms.projection*uniforms.view* vec4f(vertexOutputs.vPositionW,1.0);
#endif
vertexOutputs.vColor=input.color;
#ifdef ANIMATESHEET
var rowOffset: f32=floor(input.cellIndex*uniforms.particlesInfos.z);var columnOffset: f32=input.cellIndex-rowOffset/uniforms.particlesInfos.z;var uvScale: vec2f=uniforms.particlesInfos.xy;var uvOffset: vec2f= vec2f(input.offset.x ,1.0-input.offset.y);vertexOutputs.vUV=(uvOffset+ vec2f(columnOffset,rowOffset))*uvScale;
#else
vertexOutputs.vUV=input.offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
var worldPos: vec4f= vec4f(vertexOutputs.vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const particlesVertexShaderWGSL = { name, shader };
//# sourceMappingURL=particles.vertex.js.map

/***/ }),

/***/ 99965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passPixelShaderWGSL: () => (/* binding */ passPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "passPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const passPixelShaderWGSL = { name, shader };
//# sourceMappingURL=pass.fragment.js.map

/***/ }),

/***/ 67682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passCubePixelShaderWGSL: () => (/* binding */ passCubePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "passCubePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const passCubePixelShaderWGSL = { name, shader };
//# sourceMappingURL=passCube.fragment.js.map

/***/ }),

/***/ 22625:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pbrPixelShaderWGSL: () => (/* binding */ pbrPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassDeclaration.js
var prePassDeclaration = __webpack_require__(54211);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitDeclaration.js
var oitDeclaration = __webpack_require__(18639);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js
var pbrUboDeclaration = __webpack_require__(34035);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(41861);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js
// Do not edit.


const pbrFragmentExtraDeclaration_name = "pbrFragmentExtraDeclaration";
const shader = `varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrFragmentExtraDeclaration_name] = shader;
/** @internal */
const pbrFragmentExtraDeclarationWGSL = { name: pbrFragmentExtraDeclaration_name, shader };
//# sourceMappingURL=pbrFragmentExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js
var lightUboDeclaration = __webpack_require__(30379);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js
var samplerFragmentDeclaration = __webpack_require__(80983);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerFragmentAlternateDeclaration.js
// Do not edit.

const samplerFragmentAlternateDeclaration_name = "samplerFragmentAlternateDeclaration";
const samplerFragmentAlternateDeclaration_shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying v_VARYINGNAME_UV: vec2f;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[samplerFragmentAlternateDeclaration_name] = samplerFragmentAlternateDeclaration_shader;
/** @internal */
const samplerFragmentAlternateDeclarationWGSL = { name: samplerFragmentAlternateDeclaration_name, shader: samplerFragmentAlternateDeclaration_shader };
//# sourceMappingURL=samplerFragmentAlternateDeclaration.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrFragmentSamplersDeclaration.js
// Do not edit.



const pbrFragmentSamplersDeclaration_name = "pbrFragmentSamplersDeclaration";
const pbrFragmentSamplersDeclaration_shader = `#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_SAMPLERNAME_,reflectivity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_SAMPLERNAME_,microSurface)
#include<samplerFragmentDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_SAMPLERNAME_,metallicReflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_SAMPLERNAME_,reflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef CLEARCOAT
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_SAMPLERNAME_,clearCoat)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS)
var clearCoatRoughnessSamplerSampler: sampler;var clearCoatRoughnessSampler: texture_2d<f32>;
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_SAMPLERNAME_,clearCoatBump)
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_SAMPLERNAME_,clearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_SAMPLERNAME_,iridescence)
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_SAMPLERNAME_,iridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_SAMPLERNAME_,sheen)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS)
var sheenRoughnessSamplerSampler: sampler;var sheenRoughnessSampler: texture_2d<f32>;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
var environmentBrdfSamplerSampler: sampler;var environmentBrdfSampler: texture_2d<f32>;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
var refractionSamplerSampler: sampler;var refractionSampler: texture_cube<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var refractionLowSamplerSampler: sampler;var refractionLowSampler: texture_cube<f32>;var refractionHighSamplerSampler: sampler;var refractionHighSampler: texture_cube<f32>;
#endif
#else
var refractionSamplerSampler: sampler;var refractionSampler: texture_2d<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var refractionLowSamplerSampler: sampler;var refractionLowSampler: texture_2d<f32>;var refractionHighSamplerSampler: sampler;var refractionHighSampler: texture_2d<f32>;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_SAMPLERNAME_,translucencyColor)
#endif
#ifdef IBL_CDF_FILTERING
var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrFragmentSamplersDeclaration_name] = pbrFragmentSamplersDeclaration_shader;
/** @internal */
const pbrFragmentSamplersDeclarationWGSL = { name: pbrFragmentSamplersDeclaration_name, shader: pbrFragmentSamplersDeclaration_shader };
//# sourceMappingURL=pbrFragmentSamplersDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(16205);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(39759);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(66407);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(79702);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js
// Do not edit.

const subSurfaceScatteringFunctions_name = "subSurfaceScatteringFunctions";
const subSurfaceScatteringFunctions_shader = `fn testLightingForSSS(diffusionProfile: f32)->bool
{return diffusionProfile<1.;}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[subSurfaceScatteringFunctions_name] = subSurfaceScatteringFunctions_shader;
/** @internal */
const subSurfaceScatteringFunctionsWGSL = { name: subSurfaceScatteringFunctions_name, shader: subSurfaceScatteringFunctions_shader };
//# sourceMappingURL=subSurfaceScatteringFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js
var importanceSampling = __webpack_require__(75136);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js
// Do not edit.

const pbrHelperFunctions_name = "pbrHelperFunctions";
const pbrHelperFunctions_shader = `#define MINIMUMVARIANCE 0.0005
fn convertRoughnessToAverageSlope(roughness: f32)->f32
{return roughness*roughness+MINIMUMVARIANCE;}
fn fresnelGrazingReflectance(reflectance0: f32)->f32 {var reflectance90: f32=saturate(reflectance0*25.0);return reflectance90;}
fn getAARoughnessFactors(normalVector: vec3f)->vec2f {
#ifdef SPECULARAA
var nDfdx: vec3f=dpdx(normalVector.xyz);var nDfdy: vec3f=dpdy(normalVector.xyz);var slopeSquare: f32=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));var geometricRoughnessFactor: f32=pow(saturate(slopeSquare),0.333);var geometricAlphaGFactor: f32=sqrt(slopeSquare);geometricAlphaGFactor*=0.75;return vec2f(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2f(0.);
#endif
}
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_LEGACY
fn getAnisotropicRoughness(alphaG: f32,anisotropy: f32)->vec2f {var alphaT: f32=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);var alphaB: f32=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);return vec2f(alphaT,alphaB);}
fn getAnisotropicBentNormals(T: vec3f,B: vec3f,N: vec3f,V: vec3f,anisotropy: f32,roughness: f32)->vec3f {var anisotropicFrameDirection: vec3f=select(T,B,anisotropy>=0.0);var anisotropicFrameTangent: vec3f=cross(normalize(anisotropicFrameDirection),V);var anisotropicFrameNormal: vec3f=cross(anisotropicFrameTangent,anisotropicFrameDirection);var anisotropicNormal: vec3f=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));return anisotropicNormal;}
#else
fn getAnisotropicRoughness(alphaG: f32,anisotropy: f32)->vec2f {var alphaT: f32=max(mix(alphaG,1.0,anisotropy*anisotropy),MINIMUMVARIANCE);var alphaB: f32=max(alphaG,MINIMUMVARIANCE);return vec2f(alphaT,alphaB);}
fn getAnisotropicBentNormals(T: vec3f,B: vec3f,N: vec3f,V: vec3f,anisotropy: f32,roughness: f32)->vec3f {var bentNormal: vec3f=cross(B,V);bentNormal=normalize(cross(bentNormal,B));var sq=1.0-anisotropy*(1.0-roughness);var a: f32=sq*sq*sq*sq;bentNormal=normalize(mix(bentNormal,N,a));return bentNormal;}
#endif
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
fn cocaLambertVec3(alpha: vec3f,distance: f32)->vec3f {return exp(-alpha*distance);}
fn cocaLambert(NdotVRefract: f32,NdotLRefract: f32,alpha: vec3f,thickness: f32)->vec3f {return cocaLambertVec3(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));}
fn computeColorAtDistanceInMedia(color: vec3f,distance: f32)->vec3f {return -log(color)/distance;}
fn computeClearCoatAbsorption(NdotVRefract: f32,NdotLRefract: f32,clearCoatColor: vec3f,clearCoatThickness: f32,clearCoatIntensity: f32)->vec3f {var clearCoatAbsorption: vec3f=mix( vec3f(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);return clearCoatAbsorption;}
#endif
#ifdef MICROSURFACEAUTOMATIC
fn computeDefaultMicroSurface(microSurface: f32,reflectivityColor: vec3f)->f32
{const kReflectivityNoAlphaWorkflow_SmoothnessMax: f32=0.95;var reflectivityLuminance: f32=getLuminance(reflectivityColor);var reflectivityLuma: f32=sqrt(reflectivityLuminance);var resultMicroSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;return resultMicroSurface;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrHelperFunctions_name] = pbrHelperFunctions_shader;
/** @internal */
const pbrHelperFunctionsWGSL = { name: pbrHelperFunctions_name, shader: pbrHelperFunctions_shader };
//# sourceMappingURL=pbrHelperFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(88996);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js
var shadowsFragmentFunctions = __webpack_require__(78589);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/harmonicsFunctions.js
var harmonicsFunctions = __webpack_require__(45978);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js
// Do not edit.

const pbrDirectLightingSetupFunctions_name = "pbrDirectLightingSetupFunctions";
const pbrDirectLightingSetupFunctions_shader = `struct preLightingInfo
{lightOffset: vec3f,
lightDistanceSquared: f32,
lightDistance: f32,
attenuation: f32,
L: vec3f,
H: vec3f,
NdotV: f32,
NdotLUnclamped: f32,
NdotL: f32,
VdotH: f32,
roughness: f32,
#ifdef IRIDESCENCE
iridescenceIntensity: f32
#endif
};fn computePointAndSpotPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f,posW: vec3f)->preLightingInfo {var result: preLightingInfo;result.lightOffset=lightData.xyz-posW;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);result.L=normalize(result.lightOffset);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);return result;}
fn computeDirectionalPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f)->preLightingInfo {var result: preLightingInfo;result.lightDistance=length(-lightData.xyz);result.L=normalize(-lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);return result;}
fn computeHemisphericPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f)->preLightingInfo {var result: preLightingInfo;result.NdotL=dot(N,lightData.xyz)*0.5+0.5;result.NdotL=saturateEps(result.NdotL);result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));
#endif
return result;}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrDirectLightingSetupFunctions_name] = pbrDirectLightingSetupFunctions_shader;
/** @internal */
const pbrDirectLightingSetupFunctionsWGSL = { name: pbrDirectLightingSetupFunctions_name, shader: pbrDirectLightingSetupFunctions_shader };
//# sourceMappingURL=pbrDirectLightingSetupFunctions.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js
// Do not edit.

const pbrDirectLightingFalloffFunctions_name = "pbrDirectLightingFalloffFunctions";
const pbrDirectLightingFalloffFunctions_shader = `fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32
{return max(0.,1.0-length(lightOffset)/range);}
fn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32
{return 1.0/maxEps(lightDistanceSquared);}
fn computeDistanceLightFalloff_GLTF(lightDistanceSquared: f32,inverseSquaredRange: f32)->f32
{var lightDistanceFalloff: f32=1.0/maxEps(lightDistanceSquared);var factor: f32=lightDistanceSquared*inverseSquaredRange;var attenuation: f32=saturate(1.0-factor*factor);attenuation*=attenuation;lightDistanceFalloff*=attenuation;return lightDistanceFalloff;}
fn computeDirectionalLightFalloff_IES(lightDirection: vec3f,directionToLightCenterW: vec3f,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->f32
{var cosAngle: f32=dot(-lightDirection,directionToLightCenterW);var angle=acos(cosAngle)/PI;return textureSampleLevel(iesLightTexture,iesLightTextureSampler,vec2f(angle,0),0.).r;}
fn computeDistanceLightFalloff(lightOffset: vec3f,lightDistanceSquared: f32,range: f32,inverseSquaredRange: f32)->f32
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
fn computeDirectionalLightFalloff_Standard(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32,exponent: f32)->f32
{var falloff: f32=0.0;var cosAngle: f32=maxEps(dot(-lightDirection,directionToLightCenterW));if (cosAngle>=cosHalfAngle)
{falloff=max(0.,pow(cosAngle,exponent));}
return falloff;}
fn computeDirectionalLightFalloff_Physical(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32)->f32
{const kMinusLog2ConeAngleIntensityRatio: f32=6.64385618977; 
var concentrationKappa: f32=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);var lightDirectionSpreadSG: vec4f= vec4f(-lightDirection*concentrationKappa,-concentrationKappa);var falloff: f32=exp2(dot( vec4f(directionToLightCenterW,1.0),lightDirectionSpreadSG));return falloff;}
fn computeDirectionalLightFalloff_GLTF(lightDirection: vec3f,directionToLightCenterW: vec3f,lightAngleScale: f32,lightAngleOffset: f32)->f32
{var cd: f32=dot(-lightDirection,directionToLightCenterW);var falloff: f32=saturate(cd*lightAngleScale+lightAngleOffset);falloff*=falloff;return falloff;}
fn computeDirectionalLightFalloff(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32,exponent: f32,lightAngleScale: f32,lightAngleOffset: f32)->f32
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDirectionalLightFalloff_Physical(lightDirection,directionToLightCenterW,cosHalfAngle);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDirectionalLightFalloff_GLTF(lightDirection,directionToLightCenterW,lightAngleScale,lightAngleOffset);
#else
return computeDirectionalLightFalloff_Standard(lightDirection,directionToLightCenterW,cosHalfAngle,exponent);
#endif
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrDirectLightingFalloffFunctions_name] = pbrDirectLightingFalloffFunctions_shader;
/** @internal */
const pbrDirectLightingFalloffFunctionsWGSL = { name: pbrDirectLightingFalloffFunctions_name, shader: pbrDirectLightingFalloffFunctions_shader };
//# sourceMappingURL=pbrDirectLightingFalloffFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js
var pbrBRDFFunctions = __webpack_require__(75052);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js
var hdrFilteringFunctions = __webpack_require__(58866);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js
// Do not edit.

const pbrDirectLightingFunctions_name = "pbrDirectLightingFunctions";
const pbrDirectLightingFunctions_shader = `#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{diffuse: vec3f,
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef CLEARCOAT
clearCoat: vec4f,
#endif
#ifdef SHEEN
sheen: vec3f
#endif
};fn adjustRoughnessFromLightProperties(roughness: f32,lightRadius: f32,lightDistance: f32)->f32 {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
var lightRoughness: f32=lightRadius/lightDistance;var totalRoughness: f32=saturate(lightRoughness+roughness);return totalRoughness;
#else
return roughness;
#endif
}
fn computeHemisphericDiffuseLighting(info: preLightingInfo,lightColor: vec3f,groundColor: vec3f)->vec3f {return mix(groundColor,lightColor,info.NdotL);}
fn computeDiffuseLighting(info: preLightingInfo,lightColor: vec3f)->vec3f {var diffuseTerm: f32=diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness);return diffuseTerm*info.attenuation*info.NdotL*lightColor;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f{var strq: vec4f=textureProjectionMatrix* vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return toLinearSpaceVec3(textureColor);}
#ifdef SS_TRANSLUCENCY
fn computeDiffuseAndTransmittedLighting(info: preLightingInfo,lightColor: vec3f,transmittance: vec3f)->vec3f {var NdotL: f32=absEps(info.NdotLUnclamped);var wrapNdotL: f32=computeWrappedDiffuseNdotL(NdotL,0.02);var trAdapt: f32=step(0.,info.NdotLUnclamped);var transmittanceNdotL: vec3f=mix(transmittance*wrapNdotL, vec3f(wrapNdotL),trAdapt);var diffuseTerm: f32=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;}
#endif
#ifdef SPECULARTERM
fn computeSpecularLighting(info: preLightingInfo,N: vec3f,reflectance0: vec3f,reflectance90: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var roughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var fresnel: vec3f=fresnelSchlickGGXVec3(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
var distribution: f32=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
var smithVisibility: f32=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
var smithVisibility: f32=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
var specTerm: vec3f=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef ANISOTROPIC
fn computeAnisotropicSpecularLighting(info: preLightingInfo,V: vec3f,N: vec3f,T: vec3f,B: vec3f,anisotropy: f32,reflectance0: vec3f,reflectance90: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var TdotH: f32=dot(T,info.H);var BdotH: f32=dot(B,info.H);var TdotV: f32=dot(T,V);var BdotV: f32=dot(B,V);var TdotL: f32=dot(T,info.L);var BdotL: f32=dot(B,info.L);var alphaG: f32=convertRoughnessToAverageSlope(info.roughness);var alphaTB: vec2f=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,vec2f(geometricRoughnessFactor*geometricRoughnessFactor));var fresnel: vec3f=fresnelSchlickGGXVec3(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
var distribution: f32=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);var smithVisibility: f32=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);var specTerm: vec3f=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef CLEARCOAT
fn computeClearCoatLighting(info: preLightingInfo,Ncc: vec3f,geometricRoughnessFactor: f32,clearCoatIntensity: f32,lightColor: vec3f)->vec4f {var NccdotL: f32=saturateEps(dot(Ncc,info.L));var NccdotH: f32=saturateEps(dot(Ncc,info.H));var clearCoatRoughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(clearCoatRoughness);var fresnel: f32=fresnelSchlickGGX(info.VdotH,uniforms.vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnel*=clearCoatIntensity;var distribution: f32=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);var kelemenVisibility: f32=visibility_Kelemen(info.VdotH);var clearCoatTerm: f32=fresnel*distribution*kelemenVisibility;return vec4f(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);}
fn computeClearCoatLightingAbsorption(NdotVRefract: f32,L: vec3f,Ncc: vec3f,clearCoatColor: vec3f,clearCoatThickness: f32,clearCoatIntensity: f32)->vec3f {var LRefract: vec3f=-refract(L,Ncc,uniforms.vClearCoatRefractionParams.y);var NdotLRefract: f32=saturateEps(dot(Ncc,LRefract));var absorption: vec3f=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);return absorption;}
#endif
#ifdef SHEEN
fn computeSheenLighting(info: preLightingInfo,N: vec3f,reflectance0: vec3f,reflectance90: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var roughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var fresnel: f32=1.;var distribution: f32=normalDistributionFunction_CharlieSheen(NdotH,alphaG);/*#ifdef SHEEN_SOFTER
var visibility: f32=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
var visibility: f32=visibility_Ashikhmin(info.NdotL,info.NdotV);/* #endif */
var sheenTerm: f32=fresnel*distribution*visibility;return sheenTerm*info.attenuation*info.NdotL*lightColor;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrDirectLightingFunctions_name] = pbrDirectLightingFunctions_shader;
/** @internal */
const pbrDirectLightingFunctionsWGSL = { name: pbrDirectLightingFunctions_name, shader: pbrDirectLightingFunctions_shader };
//# sourceMappingURL=pbrDirectLightingFunctions.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js
// Do not edit.

const pbrIBLFunctions_name = "pbrIBLFunctions";
const pbrIBLFunctions_shader = `#if defined(REFLECTION) || defined(SS_REFRACTION)
fn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTexels);return lod;}
fn getLinearLodFromRoughness(cubeMapDimensionPixels: f32,roughness: f32)->f32 {var lod: f32=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
fn environmentRadianceOcclusion(ambientOcclusion: f32,NdotVUnclamped: f32)->f32 {var temp: f32=NdotVUnclamped+ambientOcclusion;return saturate(temp*temp-1.0+ambientOcclusion);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
fn environmentHorizonOcclusion(view: vec3f,normal: vec3f,geometricNormal: vec3f)->f32 {var reflection: vec3f=reflect(view,normal);var temp: f32=saturate(1.0+1.1*dot(reflection,geometricNormal));return temp*temp;}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
fn UNPACK_LOD(x: f32)->f32 {return (1.0-x)*255.0;}
fn getLodFromAlphaGNdotV(cubeMapDimensionPixels: f32,alphaG: f32,NdotV: f32)->f32 {var microsurfaceAverageSlope: f32=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrIBLFunctions_name] = pbrIBLFunctions_shader;
/** @internal */
const pbrIBLFunctionsWGSL = { name: pbrIBLFunctions_name, shader: pbrIBLFunctions_shader };
//# sourceMappingURL=pbrIBLFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js
var bumpFragmentMainFunctions = __webpack_require__(15697);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js
var bumpFragmentFunctions = __webpack_require__(91258);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js
var reflectionFunction = __webpack_require__(72230);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/decalFragment.js
var decalFragment = __webpack_require__(49306);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAlbedoOpacity.js
// Do not edit.


const pbrBlockAlbedoOpacity_name = "pbrBlockAlbedoOpacity";
const pbrBlockAlbedoOpacity_shader = `struct albedoOpacityOutParams
{surfaceAlbedo: vec3f,
alpha: f32};
#define pbr_inline
fn albedoOpacityBlock(
vAlbedoColor: vec4f
#ifdef ALBEDO
,albedoTexture: vec4f
,albedoInfos: vec2f
#endif
#ifdef OPACITY
,opacityMap: vec4f
,vOpacityInfos: vec2f
#endif
#ifdef DETAIL
,detailColor: vec4f
,vDetailInfos: vec4f
#endif
#ifdef DECAL
,decalColor: vec4f
,vDecalInfos: vec4f
#endif
)->albedoOpacityOutParams
{var outParams: albedoOpacityOutParams;var surfaceAlbedo: vec3f=vAlbedoColor.rgb;var alpha: f32=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpaceVec3(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifndef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=fragmentInputs.vColor.rgb;
#endif
#ifdef DETAIL
var detailAlbedo: f32=2.0*mix(0.5,detailColor.r,vDetailInfos.y);surfaceAlbedo=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
#endif
#ifdef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALBEDO
#ifdef OPACITY
#ifdef OPACITYRGB
alpha=getLuminance(opacityMap.rgb);
#else
alpha*=opacityMap.a;
#endif
alpha*=vOpacityInfos.y;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST 
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.alpha=alpha;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockAlbedoOpacity_name] = pbrBlockAlbedoOpacity_shader;
/** @internal */
const pbrBlockAlbedoOpacityWGSL = { name: pbrBlockAlbedoOpacity_name, shader: pbrBlockAlbedoOpacity_shader };
//# sourceMappingURL=pbrBlockAlbedoOpacity.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectivity.js
// Do not edit.

const pbrBlockReflectivity_name = "pbrBlockReflectivity";
const pbrBlockReflectivity_shader = `struct reflectivityOutParams
{microSurface: f32,
roughness: f32,
surfaceReflectivityColor: vec3f,
#ifdef METALLICWORKFLOW
surfaceAlbedo: vec3f,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
ambientOcclusionColor: vec3f,
#endif
#if DEBUGMODE>0
#ifdef METALLICWORKFLOW
metallicRoughness: vec2f,
#ifdef REFLECTIVITY
surfaceMetallicColorMap: vec4f,
#endif
#ifndef FROSTBITE_REFLECTANCE
metallicF0: vec3f,
#endif
#else
#ifdef REFLECTIVITY
surfaceReflectivityColorMap: vec4f,
#endif
#endif
#endif
};
#define pbr_inline
fn reflectivityBlock(
vReflectivityColor: vec4f
#ifdef METALLICWORKFLOW
,surfaceAlbedo: vec3f
,metallicReflectanceFactors: vec4f
#endif
#ifdef REFLECTIVITY
,reflectivityInfos: vec3f
,surfaceMetallicOrReflectivityColorMap: vec4f
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,ambientOcclusionColorIn: vec3f
#endif
#ifdef MICROSURFACEMAP
,microSurfaceTexel: vec4f
#endif
#ifdef DETAIL
,detailColor: vec4f
,vDetailInfos: vec4f
#endif
)->reflectivityOutParams
{var outParams: reflectivityOutParams;var microSurface: f32=vReflectivityColor.a;var surfaceReflectivityColor: vec3f=vReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
var metallicRoughness: vec2f=surfaceReflectivityColor.rg;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
var aoStoreInMetalMap: vec3f= vec3f(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
#endif
#ifdef METALLNESSSTOREINMETALMAPBLUE
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.b;
#else
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.r;
#endif
#ifdef ROUGHNESSSTOREINMETALMAPALPHA
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.a;
#else
#ifdef ROUGHNESSSTOREINMETALMAPGREEN
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.g;
#endif
#endif
#endif
#ifdef DETAIL
var detailRoughness: f32=mix(0.5,detailColor.b,vDetailInfos.w);var loLerp: f32=mix(0.,metallicRoughness.g,detailRoughness*2.);var hiLerp: f32=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#if DEBUGMODE>0
outParams.metallicRoughness=metallicRoughness;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;var baseColor: vec3f=surfaceAlbedo;
#ifdef FROSTBITE_REFLECTANCE
outParams.surfaceAlbedo=baseColor.rgb*(1.0-metallicRoughness.r);surfaceReflectivityColor=mix(0.16*reflectance*reflectance,baseColor,metallicRoughness.r);
#else
var metallicF0: vec3f=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=metallicF0;
#endif
outParams.surfaceAlbedo=mix(baseColor.rgb*(1.0-metallicF0), vec3f(0.,0.,0.),metallicRoughness.r);surfaceReflectivityColor=mix(metallicF0,baseColor,metallicRoughness.r);
#endif
#else
#ifdef REFLECTIVITY
surfaceReflectivityColor*=surfaceMetallicOrReflectivityColorMap.rgb;
#if DEBUGMODE>0
outParams.surfaceReflectivityColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef MICROSURFACEFROMREFLECTIVITYMAP
microSurface*=surfaceMetallicOrReflectivityColorMap.a;microSurface*=reflectivityInfos.z;
#else
#ifdef MICROSURFACEAUTOMATIC
microSurface*=computeDefaultMicroSurface(microSurface,surfaceReflectivityColor);
#endif
#ifdef MICROSURFACEMAP
microSurface*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE
#endif
#endif
#endif
microSurface=saturate(microSurface);var roughness: f32=1.-microSurface;outParams.microSurface=microSurface;outParams.roughness=roughness;outParams.surfaceReflectivityColor=surfaceReflectivityColor;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockReflectivity_name] = pbrBlockReflectivity_shader;
/** @internal */
const pbrBlockReflectivityWGSL = { name: pbrBlockReflectivity_name, shader: pbrBlockReflectivity_shader };
//# sourceMappingURL=pbrBlockReflectivity.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAmbientOcclusion.js
// Do not edit.

const pbrBlockAmbientOcclusion_name = "pbrBlockAmbientOcclusion";
const pbrBlockAmbientOcclusion_shader = `struct ambientOcclusionOutParams
{ambientOcclusionColor: vec3f,
#if DEBUGMODE>0 && defined(AMBIENT)
ambientOcclusionColorMap: vec3f
#endif
};
#define pbr_inline
fn ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap_: vec3f,
vAmbientInfos: vec4f
#endif
)->ambientOcclusionOutParams
{ 
var outParams: ambientOcclusionOutParams;var ambientOcclusionColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
var ambientOcclusionColorMap: vec3f=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap= vec3f(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockAmbientOcclusion_name] = pbrBlockAmbientOcclusion_shader;
/** @internal */
const pbrBlockAmbientOcclusionWGSL = { name: pbrBlockAmbientOcclusion_name, shader: pbrBlockAmbientOcclusion_shader };
//# sourceMappingURL=pbrBlockAmbientOcclusion.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAlphaFresnel.js
// Do not edit.

const pbrBlockAlphaFresnel_name = "pbrBlockAlphaFresnel";
const pbrBlockAlphaFresnel_shader = `#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}
#define pbr_inline
fn alphaFresnelBlock(
normalW: vec3f,
viewDirectionW: vec3f,
alpha: f32,
microSurface: f32
)->alphaFresnelOutParams
{var outParams: alphaFresnelOutParams;var opacityPerceptual: f32=alpha;
#ifdef LINEARALPHAFRESNEL
var opacity0: f32=opacityPerceptual;
#else
var opacity0: f32=opacityPerceptual*opacityPerceptual;
#endif
var opacity90: f32=fresnelGrazingReflectance(opacity0);var normalForward: vec3f=faceforward(normalW,-viewDirectionW,normalW);outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)), vec3f(opacity0), vec3f(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE) {discard;}
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
return outParams;}
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockAlphaFresnel_name] = pbrBlockAlphaFresnel_shader;
/** @internal */
const pbrBlockAlphaFresnelWGSL = { name: pbrBlockAlphaFresnel_name, shader: pbrBlockAlphaFresnel_shader };
//# sourceMappingURL=pbrBlockAlphaFresnel.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAnisotropic.js
// Do not edit.

const pbrBlockAnisotropic_name = "pbrBlockAnisotropic";
const pbrBlockAnisotropic_shader = `#ifdef ANISOTROPIC
struct anisotropicOutParams
{anisotropy: f32,
anisotropicTangent: vec3f,
anisotropicBitangent: vec3f,
anisotropicNormal: vec3f,
#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)
anisotropyMapData: vec3f
#endif
};
#define pbr_inline
fn anisotropicBlock(
vAnisotropy: vec3f,
roughness: f32,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData: vec3f,
#endif
TBN: mat3x3f,
normalW: vec3f,
viewDirectionW: vec3f
)->anisotropicOutParams
{ 
var outParams: anisotropicOutParams;var anisotropy: f32=vAnisotropy.b;var anisotropyDirection: vec3f= vec3f(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
var amd=anisotropyMapData.rg;anisotropy*=anisotropyMapData.b;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
amd=amd*2.0-1.0;
#ifdef ANISOTROPIC_LEGACY
anisotropyDirection=vec3f(anisotropyDirection.xy*amd,anisotropyDirection.z);
#else
anisotropyDirection=vec3f(mat2x2f(anisotropyDirection.x,anisotropyDirection.y,-anisotropyDirection.y,anisotropyDirection.x)*normalize(amd),anisotropyDirection.z);
#endif
#endif
var anisoTBN: mat3x3f= mat3x3f(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));var anisotropicTangent: vec3f=normalize(anisoTBN*anisotropyDirection);var anisotropicBitangent: vec3f=normalize(cross(anisoTBN[2],anisotropicTangent));outParams.anisotropy=anisotropy;outParams.anisotropicTangent=anisotropicTangent;outParams.anisotropicBitangent=anisotropicBitangent;outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy,roughness);return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockAnisotropic_name] = pbrBlockAnisotropic_shader;
/** @internal */
const pbrBlockAnisotropicWGSL = { name: pbrBlockAnisotropic_name, shader: pbrBlockAnisotropic_shader };
//# sourceMappingURL=pbrBlockAnisotropic.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflection.js
// Do not edit.

const pbrBlockReflection_name = "pbrBlockReflection";
const pbrBlockReflection_shader = `#ifdef REFLECTION
struct reflectionOutParams
{environmentRadiance: vec4f
,environmentIrradiance: vec3f
#ifdef REFLECTIONMAP_3D
,reflectionCoords: vec3f
#else
,reflectionCoords: vec2f
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,irradianceVector: vec3f
#endif
#endif
#endif
};
#define pbr_inline
#ifdef REFLECTIONMAP_3D
fn createReflectionCoords(
vPositionW: vec3f,
normalW: vec3f,
#ifdef ANISOTROPIC
anisotropicOut: anisotropicOutParams,
#endif
)->vec3f
{var reflectionCoords: vec3f;
#else
fn createReflectionCoords(
vPositionW: vec3f,
normalW: vec3f,
#ifdef ANISOTROPIC
anisotropicOut: anisotropicOutParams,
#endif
)->vec2f
{ 
var reflectionCoords: vec2f;
#endif
#ifdef ANISOTROPIC
var reflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
reflectionCoords=reflectionVector;
#else
reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
return reflectionCoords;}
#define pbr_inline
fn sampleReflectionTexture(
alphaG: f32
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped: f32
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness: f32
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec3f
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec2f
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif 
)->vec4f
{var environmentRadiance: vec4f;
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
var reflectionLOD: f32=getLodFromAlphaGNdotV(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
var reflectionLOD: f32=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
var reflectionLOD: f32=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
var automaticReflectionLOD: f32=UNPACK_LOD(textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords).a);var requestedReflectionLOD: f32=max(automaticReflectionLOD,reflectionLOD);
#else
var requestedReflectionLOD: f32=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance= vec4f(radiance(alphaG,reflectionSampler,reflectionSamplerSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#endif
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var environmentMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if (lodReflectionNormalizedDoubled<1.0){environmentRadiance=mix(
textureSample(reflectionHighSampler,reflectionHighSamplerSampler,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);} else {environmentRadiance=mix(
environmentMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
var envRadiance=environmentRadiance.rgb;
#ifdef RGBDREFLECTION
envRadiance=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
envRadiance=toLinearSpaceVec3(environmentRadiance.rgb);
#endif
envRadiance*=vReflectionInfos.x;envRadiance*=vReflectionColor.rgb;return vec4f(envRadiance,environmentRadiance.a);}
#define pbr_inline
fn reflectionBlock(
vPositionW: vec3f
,normalW: vec3f
,alphaG: f32
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped: f32
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness: f32
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance: vec3f
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,reflectionMatrix: mat4x4f
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,irradianceSampler: texture_cube<f32>
,irradianceSamplerSampler: sampler 
#else
,irradianceSampler: texture_2d<f32>
,irradianceSamplerSampler: sampler 
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>
,icdfSamplerSampler: sampler
#endif
#endif
)->reflectionOutParams
{var outParams: reflectionOutParams;var environmentRadiance: vec4f= vec4f(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f= vec3f(0.);
#else
var reflectionCoords: vec2f= vec2f(0.);
#endif
reflectionCoords=createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif 
);environmentRadiance=sampleReflectionTexture(
alphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#else
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif 
);var environmentIrradiance: vec3f= vec3f(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
#ifdef ANISOTROPIC
var irradianceVector: vec3f= (reflectionMatrix* vec4f(anisotropicOut.anisotropicNormal,0)).xyz;
#else
var irradianceVector: vec3f= (reflectionMatrix* vec4f(normalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradiance;
#else
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,reflectionSamplerSampler,irradianceVector,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#ifdef SS_TRANSLUCENCY
outParams.irradianceVector=irradianceVector;
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
var environmentIrradiance4: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,irradianceVector);
#else
var environmentIrradiance4: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance=toLinearSpaceVec3(environmentIrradiance.rgb);
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb;
#ifdef MIX_IBL_RADIANCE_WITH_IRRADIANCE
outParams.environmentRadiance=vec4f(mix(environmentRadiance.rgb,environmentIrradiance,alphaG),environmentRadiance.a);
#else
outParams.environmentRadiance=environmentRadiance;
#endif
outParams.environmentIrradiance=environmentIrradiance;outParams.reflectionCoords=reflectionCoords;return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockReflection_name] = pbrBlockReflection_shader;
/** @internal */
const pbrBlockReflectionWGSL = { name: pbrBlockReflection_name, shader: pbrBlockReflection_shader };
//# sourceMappingURL=pbrBlockReflection.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockSheen.js
// Do not edit.

const pbrBlockSheen_name = "pbrBlockSheen";
const pbrBlockSheen_shader = `#ifdef SHEEN
struct sheenOutParams
{sheenIntensity: f32
,sheenColor: vec3f
,sheenRoughness: f32
#ifdef SHEEN_LINKWITHALBEDO
,surfaceAlbedo: vec3f
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
,sheenAlbedoScaling: f32
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,finalSheenRadianceScaled: vec3f
#endif
#if DEBUGMODE>0
#ifdef SHEEN_TEXTURE
,sheenMapData: vec4f
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,sheenEnvironmentReflectance: vec3f
#endif
#endif
};
#define pbr_inline
fn sheenBlock(
vSheenColor: vec4f
#ifdef SHEEN_ROUGHNESS
,vSheenRoughness: f32
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData: vec4f
#endif
#endif
,roughness: f32
#ifdef SHEEN_TEXTURE
,sheenMapData: vec4f
,sheenMapLevel: f32
#endif
,reflectance: f32
#ifdef SHEEN_LINKWITHALBEDO
,baseColor: vec3f
,surfaceAlbedo: vec3f
#endif
#ifdef ENVIRONMENTBRDF
,NdotV: f32
,environmentBrdf: vec3f
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,AARoughnessFactors: vec2f
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
,vLightingIntensity: vec4f
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec3f
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec2f
#endif
,NdotVUnclamped: f32
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,seo: f32
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,eho: f32
#endif
#endif
)->sheenOutParams
{var outParams: sheenOutParams;var sheenIntensity: f32=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
var sheenFactor: f32=pow5(1.0-sheenIntensity);var sheenColor: vec3f=baseColor.rgb*(1.0-sheenFactor);var sheenRoughness: f32=sheenIntensity;outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
var sheenColor: vec3f=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor*=toLinearSpaceVec3(sheenMapData.rgb);
#else
sheenColor*=sheenMapData.rgb;
#endif
sheenColor*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
var sheenRoughness: f32=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#else
var sheenRoughness: f32=roughness;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#endif
#if !defined(SHEEN_ALBEDOSCALING)
sheenIntensity*=(1.-reflectance);
#endif
sheenColor*=sheenIntensity;
#endif
#ifdef ENVIRONMENTBRDF
/*#ifdef SHEEN_SOFTER
var environmentSheenBrdf: vec3f= vec3f(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
var environmentSheenBrdf: vec3f=getBRDFLookup(NdotV,sheenRoughness);
#else
var environmentSheenBrdf: vec3f=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
var sheenAlphaG: f32=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
var environmentSheenRadiance: vec4f= vec4f(0.,0.,0.,0.);environmentSheenRadiance=sampleReflectionTexture(
sheenAlphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,sheenRoughness
#endif
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);var sheenEnvironmentReflectance: vec3f=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
sheenEnvironmentReflectance*=seo;
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
sheenEnvironmentReflectance*=eho;
#endif
#if DEBUGMODE>0
outParams.sheenEnvironmentReflectance=sheenEnvironmentReflectance;
#endif
outParams.finalSheenRadianceScaled=
environmentSheenRadiance.rgb *
sheenEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
outParams.sheenAlbedoScaling=1.0-sheenIntensity*max(max(sheenColor.r,sheenColor.g),sheenColor.b)*environmentSheenBrdf.b;
#endif
outParams.sheenIntensity=sheenIntensity;outParams.sheenColor=sheenColor;outParams.sheenRoughness=sheenRoughness;return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockSheen_name] = pbrBlockSheen_shader;
/** @internal */
const pbrBlockSheenWGSL = { name: pbrBlockSheen_name, shader: pbrBlockSheen_shader };
//# sourceMappingURL=pbrBlockSheen.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockClearcoat.js
// Do not edit.

const pbrBlockClearcoat_name = "pbrBlockClearcoat";
const pbrBlockClearcoat_shader = `struct clearcoatOutParams
{specularEnvironmentR0: vec3f,
conservationFactor: f32,
clearCoatNormalW: vec3f,
clearCoatAARoughnessFactors: vec2f,
clearCoatIntensity: f32,
clearCoatRoughness: f32,
#ifdef REFLECTION
finalClearCoatRadianceScaled: vec3f,
#endif
#ifdef CLEARCOAT_TINT
absorption: vec3f,
clearCoatNdotVRefract: f32,
clearCoatColor: vec3f,
clearCoatThickness: f32,
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
energyConservationFactorClearCoat: vec3f,
#endif
#if DEBUGMODE>0
#ifdef CLEARCOAT_BUMP
TBNClearCoat: mat3x3f,
#endif
#ifdef CLEARCOAT_TEXTURE
clearCoatMapData: vec2f,
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
clearCoatTintMapData: vec4f,
#endif
#ifdef REFLECTION
environmentClearCoatRadiance: vec4f,
clearCoatEnvironmentReflectance: vec3f,
#endif
clearCoatNdotV: f32
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
fn clearcoatBlock(
vPositionW: vec3f
,geometricNormalW: vec3f
,viewDirectionW: vec3f
,vClearCoatParams: vec2f
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData: vec4f
#endif
,specularEnvironmentR0: vec3f
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData: vec2f
#endif
#ifdef CLEARCOAT_TINT
,vClearCoatTintParams: vec4f
,clearCoatColorAtDistance: f32
,vClearCoatRefractionParams: vec4f
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData: vec4f
#endif
#endif
#ifdef CLEARCOAT_BUMP
,vClearCoatBumpInfos: vec2f
,clearCoatBumpMapData: vec4f
,vClearCoatBumpUV: vec2f
#if defined(TANGENT) && defined(NORMAL)
,vTBN: mat3x3f
#else
,vClearCoatTangentSpaceParams: vec2f
#endif
#ifdef OBJECTSPACE_NORMALMAP
,normalMatrix: mat4x4f
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal: vec3f
#endif
#ifdef REFLECTION
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
,vLightingIntensity: vec4f
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,frontFacingMultiplier: f32
#endif 
)->clearcoatOutParams
{var outParams: clearcoatOutParams;var clearCoatIntensity: f32=vClearCoatParams.x;var clearCoatRoughness: f32=vClearCoatParams.y;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#ifdef CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE
clearCoatRoughness*=clearCoatMapData.y;
#endif
#if DEBUGMODE>0
outParams.clearCoatMapData=clearCoatMapData;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
clearCoatRoughness*=clearCoatMapRoughnessData.y;
#endif
outParams.clearCoatIntensity=clearCoatIntensity;outParams.clearCoatRoughness=clearCoatRoughness;
#ifdef CLEARCOAT_TINT
var clearCoatColor: vec3f=vClearCoatTintParams.rgb;var clearCoatThickness: f32=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpaceVec3(clearCoatTintMapData.rgb);
#else
clearCoatColor*=clearCoatTintMapData.rgb;
#endif
clearCoatThickness*=clearCoatTintMapData.a;
#if DEBUGMODE>0
outParams.clearCoatTintMapData=clearCoatTintMapData;
#endif
#endif
outParams.clearCoatColor=computeColorAtDistanceInMedia(clearCoatColor,clearCoatColorAtDistance);outParams.clearCoatThickness=clearCoatThickness;
#endif
#ifdef CLEARCOAT_REMAP_F0
var specularEnvironmentR0Updated: vec3f=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
var specularEnvironmentR0Updated: vec3f=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);var clearCoatNormalW: vec3f=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
var clearCoatNormalScale: f32=1.0;
#else
var clearCoatNormalScale: f32=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBNClearCoat: mat3x3f=vTBN;
#else
var TBNClearCoatUV: vec2f=vClearCoatBumpUV*frontFacingMultiplier;var TBNClearCoat: mat3x3f=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);clearCoatNormalW=normalize( mat3x3f(normalMatrix[0].xyz,normalMatrix[1].xyz,normalMatrix[2].xyz)*clearCoatNormalW);
#else
clearCoatNormalW=perturbNormal(TBNClearCoat,clearCoatBumpMapData.xyz,vClearCoatBumpInfos.y);
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
clearCoatNormalW*=sign(dot(clearCoatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
clearCoatNormalW=clearCoatNormalW*frontFacingMultiplier;
#endif
outParams.clearCoatNormalW=clearCoatNormalW;outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);var clearCoatNdotVUnclamped: f32=dot(clearCoatNormalW,viewDirectionW);var clearCoatNdotV: f32=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
var clearCoatVRefract: vec3f=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
var environmentClearCoatBrdf: vec3f=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
var clearCoatAlphaG: f32=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
var environmentClearCoatRadiance: vec4f= vec4f(0.,0.,0.,0.);var clearCoatReflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var clearCoatReflectionCoords: vec3f=clearCoatReflectionVector;
#else
var clearCoatReflectionCoords: vec2f=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
environmentClearCoatRadiance=sampleReflectionTexture(
clearCoatAlphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,clearCoatNdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,clearCoatRoughness
#endif
,reflectionSampler
,reflectionSamplerSampler
,clearCoatReflectionCoords
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif 
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
var clearCoatEnvironmentReflectance: vec3f=getReflectanceFromBRDFLookup(vec3f(uniforms.vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
var clearCoatEho: f32=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
var clearCoatEnvironmentReflectance: vec3f=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV, vec3f(1.), vec3f(1.),sqrt(1.-clearCoatRoughness));
#endif
clearCoatEnvironmentReflectance*=clearCoatIntensity;
#if DEBUGMODE>0
outParams.clearCoatEnvironmentReflectance=clearCoatEnvironmentReflectance;
#endif
outParams.finalClearCoatRadianceScaled=
environmentClearCoatRadiance.rgb *
clearCoatEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(CLEARCOAT_TINT)
outParams.absorption=computeClearCoatAbsorption(outParams.clearCoatNdotVRefract,outParams.clearCoatNdotVRefract,outParams.clearCoatColor,clearCoatThickness,clearCoatIntensity);
#endif
var fresnelIBLClearCoat: f32=fresnelSchlickGGX(clearCoatNdotV,uniforms.vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnelIBLClearCoat*=clearCoatIntensity;outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockClearcoat_name] = pbrBlockClearcoat_shader;
/** @internal */
const pbrBlockClearcoatWGSL = { name: pbrBlockClearcoat_name, shader: pbrBlockClearcoat_shader };
//# sourceMappingURL=pbrBlockClearcoat.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockIridescence.js
// Do not edit.

const pbrBlockIridescence_name = "pbrBlockIridescence";
const pbrBlockIridescence_shader = `struct iridescenceOutParams
{iridescenceIntensity: f32,
iridescenceIOR: f32,
iridescenceThickness: f32,
specularEnvironmentR0: vec3f};
#ifdef IRIDESCENCE
fn iridescenceBlock(
vIridescenceParams: vec4f
,viewAngle: f32
,specularEnvironmentR0: vec3f
#ifdef IRIDESCENCE_TEXTURE
,iridescenceMapData: vec2f
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,iridescenceThicknessMapData: vec2f
#endif
#ifdef CLEARCOAT
,NdotVUnclamped: f32
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData: vec2f
#endif
#endif
)->iridescenceOutParams
{var outParams: iridescenceOutParams;var iridescenceIntensity: f32=vIridescenceParams.x;var iridescenceIOR: f32=vIridescenceParams.y;var iridescenceThicknessMin: f32=vIridescenceParams.z;var iridescenceThicknessMax: f32=vIridescenceParams.w;var iridescenceThicknessWeight: f32=1.;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
var iridescenceThickness: f32=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);var topIor: f32=1.; 
#ifdef CLEARCOAT
var clearCoatIntensity: f32=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,uniforms.vClearCoatRefractionParams.w-1.,clearCoatIntensity);viewAngle=sqrt(1.0+((1.0/topIor)*(1.0/topIor))*((NdotVUnclamped*NdotVUnclamped)-1.0));
#endif
var iridescenceFresnel: vec3f=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);outParams.iridescenceIntensity=iridescenceIntensity;outParams.iridescenceThickness=iridescenceThickness;outParams.iridescenceIOR=iridescenceIOR;return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockIridescence_name] = pbrBlockIridescence_shader;
/** @internal */
const pbrBlockIridescenceWGSL = { name: pbrBlockIridescence_name, shader: pbrBlockIridescence_shader };
//# sourceMappingURL=pbrBlockIridescence.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockSubSurface.js
// Do not edit.

const pbrBlockSubSurface_name = "pbrBlockSubSurface";
const pbrBlockSubSurface_shader = `struct subSurfaceOutParams
{specularEnvironmentReflectance: vec3f,
#ifdef SS_REFRACTION
finalRefraction: vec3f,
surfaceAlbedo: vec3f,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha: f32,
#endif
#ifdef REFLECTION
refractionFactorForIrradiance: f32,
#endif
#endif
#ifdef SS_TRANSLUCENCY
transmittance: vec3f,
translucencyIntensity: f32,
#ifdef REFLECTION
refractionIrradiance: vec3f,
#endif
#endif
#if DEBUGMODE>0
#ifdef SS_THICKNESSANDMASK_TEXTURE
thicknessMap: vec4f,
#endif
#ifdef SS_REFRACTION
environmentRefraction: vec4f,
refractionTransmittance: vec3f
#endif
#endif
};
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#define pbr_inline
fn sampleEnvironmentRefraction(
ior: f32
,thickness: f32
,refractionLOD: f32
,normalW: vec3f
,vPositionW: vec3f
,viewDirectionW: vec3f
,view: mat4x4f
,vRefractionInfos: vec4f
,refractionMatrix: mat4x4f
,vRefractionMicrosurfaceInfos: vec4f
,alphaG: f32
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler: texture_cube<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_cube<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_cube<f32>
,refractionHighSamplerSampler: sampler 
#endif
#else
,refractionSampler: texture_2d<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_2d<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_2d<f32>
,refractionHighSamplerSampler: sampler 
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo: vec2f
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition: vec3f
,refractionSize: vec3f
#endif
)->vec4f {var environmentRefraction: vec4f= vec4f(0.,0.,0.,0.);
#ifdef ANISOTROPIC
var refractionVector: vec3f=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,ior);
#else
var refractionVector: vec3f=refract(-viewDirectionW,normalW,ior);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;var refractionCoords: vec3f=refractionVector;refractionCoords= (refractionMatrix* vec4f(refractionCoords,0)).xyz;
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
var vRefractionUVW: vec3f= (refractionMatrix*(view* vec4f(vPositionW+refractionVector*thickness,1.0))).xyz;
#else
var vRefractionUVW: vec3f= (refractionMatrix*(view* vec4f(vPositionW+refractionVector*vRefractionInfos.z,1.0))).xyz;
#endif
var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef LODBASEDMICROSFURACE
var lod=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
var automaticRefractionLOD: f32=UNPACK_LOD(textureSample(refractionSampler,refractionSamplerSampler,refractionCoords).a);var requestedRefractionLOD: f32=max(automaticRefractionLOD,lod);
#else
var requestedRefractionLOD: f32=lod;
#endif
#if defined(REALTIME_FILTERING) && defined(SS_REFRACTIONMAP_3D)
environmentRefraction= vec4f(radiance(alphaG,refractionSampler,refractionSamplerSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=textureSampleLevel(refractionSampler,refractionSamplerSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
var lodRefractionNormalized: f32=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));var lodRefractionNormalizedDoubled: f32=lodRefractionNormalized*2.0;var environmentRefractionMid: vec4f=textureSample(refractionSampler,refractionSamplerSampler,refractionCoords);if (lodRefractionNormalizedDoubled<1.0){environmentRefraction=mix(
textureSample(refractionHighSampler,refractionHighSamplerSampler,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);} else {environmentRefraction=mix(
environmentRefractionMid,
textureSample(refractionLowSampler,refractionLowSamplerSampler,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);}
#endif
var refraction=environmentRefraction.rgb;
#ifdef SS_RGBDREFRACTION
refraction=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
refraction=toLinearSpaceVec3(environmentRefraction.rgb);
#endif
return vec4f(refraction,environmentRefraction.a);}
#endif
#define pbr_inline
fn subSurfaceBlock(
vSubSurfaceIntensity: vec3f
,vThicknessParam: vec2f
,vTintColor: vec4f
,normalW: vec3f
,specularEnvironmentReflectance: vec3f
#ifdef SS_THICKNESSANDMASK_TEXTURE
,thicknessMap: vec4f
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,refractionIntensityMap: vec4f
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,translucencyIntensityMap: vec4f
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,reflectionMatrix: mat4x4f
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,irradianceVector_: vec3f
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,vReflectionFilteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>
,icdfSamplerSampler: sampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,irradianceSampler: texture_cube<f32>
,irradianceSamplerSampler: sampler
#else
,irradianceSampler: texture_2d<f32>
,irradianceSamplerSampler: sampler
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo: vec3f
#endif
#ifdef SS_REFRACTION
,vPositionW: vec3f
,viewDirectionW: vec3f
,view: mat4x4f
,vRefractionInfos: vec4f
,refractionMatrix: mat4x4f
,vRefractionMicrosurfaceInfos: vec4f
,vLightingIntensity: vec4f
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,alpha: f32
#endif
#ifdef SS_LODINREFRACTIONALPHA
,NdotVUnclamped: f32
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,roughness: f32
#endif
,alphaG: f32
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler: texture_cube<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_cube<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_cube<f32>
,refractionHighSamplerSampler: sampler 
#endif
#else
,refractionSampler: texture_2d<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_2d<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_2d<f32>
,refractionHighSamplerSampler: sampler 
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo: vec2f
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition: vec3f
,refractionSize: vec3f
#endif
#ifdef SS_DISPERSION
,dispersion: f32
#endif
#endif
#ifdef SS_TRANSLUCENCY
,vDiffusionDistance: vec3f
,vTranslucencyColor: vec4f
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,translucencyColorMap: vec4f
#endif
#endif
)->subSurfaceOutParams
{var outParams: subSurfaceOutParams;outParams.specularEnvironmentReflectance=specularEnvironmentReflectance;
#ifdef SS_REFRACTION
var refractionIntensity: f32=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
var translucencyIntensity: f32=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
var thickness: f32=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
var thickness: f32=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
#endif
#if DEBUGMODE>0
outParams.thicknessMap=thicknessMap;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=thicknessMap.r;
#else
refractionIntensity*=thicknessMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=thicknessMap.a;
#else
translucencyIntensity*=thicknessMap.b;
#endif
#endif
#else
var thickness: f32=vThicknessParam.y;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTIONINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=refractionIntensityMap.r;
#else
refractionIntensity*=refractionIntensityMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCYINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=translucencyIntensityMap.a;
#else
translucencyIntensity*=translucencyIntensityMap.b;
#endif
#endif
#ifdef SS_TRANSLUCENCY
thickness=maxEps(thickness);var translucencyColor: vec4f=vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
translucencyColor*=translucencyColorMap;
#endif
var transmittance: vec3f=transmittanceBRDF_Burley(translucencyColor.rgb,vDiffusionDistance,thickness);transmittance*=translucencyIntensity;outParams.transmittance=transmittance;outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
var environmentRefraction: vec4f= vec4f(0.,0.,0.,0.);
#ifdef SS_HAS_THICKNESS
var ior: f32=vRefractionInfos.y;
#else
var ior: f32=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
var refractionAlphaG: f32=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLodFromAlphaGNdotV(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
var refractionRoughness: f32=alphaG;refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
var refractionAlphaG: f32=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
var refraction_ior: f32=vRefractionInfos.y;
#ifdef SS_DISPERSION
var realIOR: f32=1.0/refraction_ior;var iorDispersionSpread: f32=0.04*dispersion*(realIOR-1.0);var iors: vec3f= vec3f(1.0/(realIOR-iorDispersionSpread),refraction_ior,1.0/(realIOR+iorDispersionSpread));for (var i: i32=0; i<3; i++) {refraction_ior=iors[i];
#endif
var envSample: vec4f=sampleEnvironmentRefraction(refraction_ior,thickness,refractionLOD,normalW,vPositionW,viewDirectionW,view,vRefractionInfos,refractionMatrix,vRefractionMicrosurfaceInfos,alphaG
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#else
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition
,refractionSize
#endif
);
#ifdef SS_DISPERSION
environmentRefraction[i]=envSample[i];}
#else
environmentRefraction=envSample;
#endif
environmentRefraction=vec4f(environmentRefraction.rgb*vRefractionInfos.x,environmentRefraction.a);
#endif
#ifdef SS_REFRACTION
var refractionTransmittance: vec3f= vec3f(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
var volumeAlbedo: vec3f=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambertVec3(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
var maxChannel: f32=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);var volumeAlbedo: vec3f=saturateVec3(maxChannel*surfaceAlbedo);environmentRefraction=vec4f(environmentRefraction.rgb*volumeAlbedo,environmentRefraction.a);
#else
var volumeAlbedo: vec3f=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambertVec3(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction=vec4f(environmentRefraction.rgb*surfaceAlbedo.rgb,environmentRefraction.a);
#endif
outParams.surfaceAlbedo=surfaceAlbedo*(1.-refractionIntensity);
#ifdef REFLECTION
outParams.refractionFactorForIrradiance=(1.-refractionIntensity);
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
var bounceSpecularEnvironmentReflectance: vec3f=(2.0*specularEnvironmentReflectance)/(1.0+specularEnvironmentReflectance);outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,specularEnvironmentReflectance,refractionIntensity);
#endif
refractionTransmittance*=1.0-outParams.specularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif
#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
var irradianceVector: vec3f= (reflectionMatrix* vec4f(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
var irradianceVector: vec3f=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
var refractionIrradiance: vec3f=irradiance(reflectionSampler,reflectionSamplerSampler,-irradianceVector,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
);
#else
var refractionIrradiance: vec3f=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
var irradianceCoords: vec3f=irradianceVector;
#else
var irradianceCoords: vec2f=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
var temp: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,-irradianceCoords);var refractionIrradiance=temp.rgb;
#ifdef RGBDREFLECTION
refractionIrradiance=fromRGBD(temp).rgb;
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance=toLinearSpaceVec3(refractionIrradiance);
#endif
#else
var refractionIrradiance: vec3f= vec3f(0.);
#endif
refractionIrradiance*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance;
#endif
return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockSubSurface_name] = pbrBlockSubSurface_shader;
/** @internal */
const pbrBlockSubSurfaceWGSL = { name: pbrBlockSubSurface_name, shader: pbrBlockSubSurface_shader };
//# sourceMappingURL=pbrBlockSubSurface.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(97715);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js
// Do not edit.

const pbrBlockNormalGeometric_name = "pbrBlockNormalGeometric";
const pbrBlockNormalGeometric_shader = `var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(input.vNormalW);
#else
var normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;
#endif
var geometricNormalW: vec3f=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=select(-geometricNormalW,geometricNormalW,fragmentInputs.frontFacing);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockNormalGeometric_name] = pbrBlockNormalGeometric_shader;
/** @internal */
const pbrBlockNormalGeometricWGSL = { name: pbrBlockNormalGeometric_name, shader: pbrBlockNormalGeometric_shader };
//# sourceMappingURL=pbrBlockNormalGeometric.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js
var bumpFragment = __webpack_require__(20727);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockNormalFinal.js
// Do not edit.

const pbrBlockNormalFinal_name = "pbrBlockNormalFinal";
const pbrBlockNormalFinal_shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
var faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=select(-faceNormal,faceNormal,fragmentInputs.frontFacing);
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockNormalFinal_name] = pbrBlockNormalFinal_shader;
/** @internal */
const pbrBlockNormalFinalWGSL = { name: pbrBlockNormalFinal_name, shader: pbrBlockNormalFinal_shader };
//# sourceMappingURL=pbrBlockNormalFinal.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/depthPrePass.js
var depthPrePass = __webpack_require__(59104);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockLightmapInit.js
// Do not edit.

const pbrBlockLightmapInit_name = "pbrBlockLightmapInit";
const pbrBlockLightmapInit_shader = `#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor=vec4f(toLinearSpaceVec3(lightmapColor.rgb),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockLightmapInit_name] = pbrBlockLightmapInit_shader;
/** @internal */
const pbrBlockLightmapInitWGSL = { name: pbrBlockLightmapInit_name, shader: pbrBlockLightmapInit_shader };
//# sourceMappingURL=pbrBlockLightmapInit.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockGeometryInfo.js
// Do not edit.

const pbrBlockGeometryInfo_name = "pbrBlockGeometryInfo";
const pbrBlockGeometryInfo_shader = `var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
var environmentBrdf: vec3f=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
var ambientMonochrome: f32=aoOut.ambientOcclusionColor.r;
#else
var ambientMonochrome: f32=getLuminance(aoOut.ambientOcclusionColor);
#endif
var seo: f32=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
var eho: f32=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockGeometryInfo_name] = pbrBlockGeometryInfo_shader;
/** @internal */
const pbrBlockGeometryInfoWGSL = { name: pbrBlockGeometryInfo_name, shader: pbrBlockGeometryInfo_shader };
//# sourceMappingURL=pbrBlockGeometryInfo.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js
// Do not edit.

const pbrBlockReflectance0_name = "pbrBlockReflectance0";
const pbrBlockReflectance0_shader = `var reflectance: f32=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);var specularEnvironmentR0: vec3f=reflectivityOut.surfaceReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
var specularEnvironmentR90: vec3f= vec3f(metallicReflectanceFactors.a);
#else 
var specularEnvironmentR90: vec3f= vec3f(1.0,1.0,1.0);
#endif
#ifdef ALPHAFRESNEL
var reflectance90: f32=fresnelGrazingReflectance(reflectance);specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockReflectance0_name] = pbrBlockReflectance0_shader;
/** @internal */
const pbrBlockReflectance0WGSL = { name: pbrBlockReflectance0_name, shader: pbrBlockReflectance0_shader };
//# sourceMappingURL=pbrBlockReflectance0.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectance.js
// Do not edit.

const pbrBlockReflectance_name = "pbrBlockReflectance";
const pbrBlockReflectance_shader = `#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
var specularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,environmentBrdf);
#ifdef RADIANCEOCCLUSION
specularEnvironmentReflectance*=seo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
specularEnvironmentReflectance*=eho;
#endif
#endif
#endif
#else
var specularEnvironmentReflectance: vec3f=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
specularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
specularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockReflectance_name] = pbrBlockReflectance_shader;
/** @internal */
const pbrBlockReflectanceWGSL = { name: pbrBlockReflectance_name, shader: pbrBlockReflectance_shader };
//# sourceMappingURL=pbrBlockReflectance.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockDirectLighting.js
// Do not edit.

const pbrBlockDirectLighting_name = "pbrBlockDirectLighting";
const pbrBlockDirectLighting_shader = `var diffuseBase: vec3f=vec3f(0.,0.,0.);
#ifdef SPECULARTERM
var specularBase: vec3f=vec3f(0.,0.,0.);
#endif
#ifdef CLEARCOAT
var clearCoatBase: vec3f=vec3f(0.,0.,0.);
#endif
#ifdef SHEEN
var sheenBase: vec3f=vec3f(0.,0.,0.);
#endif
var preInfo: preLightingInfo;var info: lightingInfo;var shadow: f32=1.; 
var aggShadow: f32=0.;var numLights: f32=0.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
var absorption: vec3f=vec3f(0.);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockDirectLighting_name] = pbrBlockDirectLighting_shader;
/** @internal */
const pbrBlockDirectLightingWGSL = { name: pbrBlockDirectLighting_name, shader: pbrBlockDirectLighting_shader };
//# sourceMappingURL=pbrBlockDirectLighting.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js
var lightFragment = __webpack_require__(25271);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalLitComponents.js
// Do not edit.

const pbrBlockFinalLitComponents_name = "pbrBlockFinalLitComponents";
const pbrBlockFinalLitComponents_shader = `aggShadow=aggShadow/numLights;
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
var energyConservationFactor: vec3f=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo=(1.-reflectance)*surfaceAlbedo.rgb;
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef REFLECTION
var finalIrradiance: vec3f=reflectionOut.environmentIrradiance;
#if defined(CLEARCOAT)
finalIrradiance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
finalIrradiance*=clearcoatOut.absorption;
#endif
#endif
#if defined(SS_REFRACTION)
finalIrradiance*=subSurfaceOut.refractionFactorForIrradiance;
#endif
#if defined(SS_TRANSLUCENCY)
finalIrradiance*=(1.0-subSurfaceOut.translucencyIntensity);finalIrradiance+=subSurfaceOut.refractionIrradiance;
#endif
finalIrradiance*=surfaceAlbedo.rgb;finalIrradiance*=uniforms.vLightingIntensity.z;finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase;finalSpecular=max(finalSpecular,vec3f(0.0));var finalSpecularScaled: vec3f=finalSpecular*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
var finalRadiance: vec3f=reflectionOut.environmentRadiance.rgb;finalRadiance*=subSurfaceOut.specularEnvironmentReflectance;var finalRadianceScaled: vec3f=finalRadiance*uniforms.vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
var finalSheen: vec3f=sheenBase*sheenOut.sheenColor;finalSheen=max(finalSheen,vec3f(0.0));var finalSheenScaled: vec3f=finalSheen*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
var finalClearCoat: vec3f=clearCoatBase;finalClearCoat=max(finalClearCoat,vec3f(0.0));var finalClearCoatScaled: vec3f=finalClearCoat*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalClearCoatScaled*=clearcoatOut.energyConservationFactorClearCoat;
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction*=clearcoatOut.conservationFactor;
#ifdef CLEARCOAT_TINT
subSurfaceOut.finalRefraction*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef ALPHABLEND
var luminanceOverAlpha: f32=0.0;
#if defined(REFLECTION) && defined(RADIANCEOVERALPHA)
luminanceOverAlpha+=getLuminance(finalRadianceScaled);
#if defined(CLEARCOAT)
luminanceOverAlpha+=getLuminance(clearcoatOut.finalClearCoatRadianceScaled);
#endif
#endif
#if defined(SPECULARTERM) && defined(SPECULAROVERALPHA)
luminanceOverAlpha+=getLuminance(finalSpecularScaled);
#endif
#if defined(CLEARCOAT) && defined(CLEARCOATOVERALPHA)
luminanceOverAlpha+=getLuminance(finalClearCoatScaled);
#endif
#if defined(RADIANCEOVERALPHA) || defined(SPECULAROVERALPHA) || defined(CLEARCOATOVERALPHA)
alpha=saturate(alpha+luminanceOverAlpha*luminanceOverAlpha);
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockFinalLitComponents_name] = pbrBlockFinalLitComponents_shader;
/** @internal */
const pbrBlockFinalLitComponentsWGSL = { name: pbrBlockFinalLitComponents_name, shader: pbrBlockFinalLitComponents_shader };
//# sourceMappingURL=pbrBlockFinalLitComponents.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalUnlitComponents.js
// Do not edit.

const pbrBlockFinalUnlitComponents_name = "pbrBlockFinalUnlitComponents";
const pbrBlockFinalUnlitComponents_shader = `var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo.rgb;finalDiffuse=max(finalDiffuse,vec3f(0.0));finalDiffuse*=uniforms.vLightingIntensity.x;var finalAmbient: vec3f=uniforms.vAmbientColor;finalAmbient*=surfaceAlbedo.rgb;var finalEmissive: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
var emissiveColorTex: vec3f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpaceVec3(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= uniforms.vEmissiveInfos.y;
#endif
finalEmissive*=uniforms.vLightingIntensity.y;
#ifdef AMBIENT
var ambientOcclusionForDirectDiffuse: vec3f=mix( vec3f(1.),aoOut.ambientOcclusionColor,uniforms.vAmbientInfos.w);
#else
var ambientOcclusionForDirectDiffuse: vec3f=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockFinalUnlitComponents_name] = pbrBlockFinalUnlitComponents_shader;
/** @internal */
const pbrBlockFinalUnlitComponentsWGSL = { name: pbrBlockFinalUnlitComponents_name, shader: pbrBlockFinalUnlitComponents_shader };
//# sourceMappingURL=pbrBlockFinalUnlitComponents.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalColorComposition.js
// Do not edit.

const pbrBlockFinalColorComposition_name = "pbrBlockFinalColorComposition";
const pbrBlockFinalColorComposition_shader = `var finalColor: vec4f= vec4f(
#ifndef UNLIT
#ifdef REFLECTION
finalIrradiance +
#endif
#ifdef SPECULARTERM
finalSpecularScaled +
#endif
#ifdef SHEEN
finalSheenScaled +
#endif
#ifdef CLEARCOAT
finalClearCoatScaled +
#endif
#ifdef REFLECTION
finalRadianceScaled +
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled +
#endif
#ifdef CLEARCOAT
clearcoatOut.finalClearCoatRadianceScaled +
#endif
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction +
#endif
#endif
finalAmbient +
finalDiffuse,
alpha);
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
finalColor=vec4f(finalColor.rgb*lightmapColor.rgb,finalColor.a);
#else
finalColor=vec4f(finalColor.rgb+lightmapColor.rgb,finalColor.a);
#endif
#endif
#endif
finalColor=vec4f(finalColor.rgb+finalEmissive,finalColor.a);
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,vec4f(0.0));
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockFinalColorComposition_name] = pbrBlockFinalColorComposition_shader;
/** @internal */
const pbrBlockFinalColorCompositionWGSL = { name: pbrBlockFinalColorComposition_name, shader: pbrBlockFinalColorComposition_shader };
//# sourceMappingURL=pbrBlockFinalColorComposition.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(38780);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(93243);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js
// Do not edit.

const pbrBlockImageProcessing_name = "pbrBlockImageProcessing";
const pbrBlockImageProcessing_shader = `#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
finalColor=vec4f(finalColor.rgb*finalColor.a,finalColor.a);;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockImageProcessing_name] = pbrBlockImageProcessing_shader;
/** @internal */
const pbrBlockImageProcessingWGSL = { name: pbrBlockImageProcessing_name, shader: pbrBlockImageProcessing_shader };
//# sourceMappingURL=pbrBlockImageProcessing.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js
// Do not edit.

const pbrBlockPrePass_name = "pbrBlockPrePass";
const pbrBlockPrePass_shader = `var writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]= vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(surfaceAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
var sqAlbedo : vec3f=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
var irradiance : vec3f=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=vec4f(finalColor.rgb-irradiance,finalColor.a); 
#endif
irradiance/=sqAlbedo;fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(clamp(irradiance,vec3f(0.),vec3f(1.)),writeGeometryInfo*uniforms.scatteringDiffusionProfile/255.); 
#else
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=finalColor; 
#endif
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(clamp(irradiance,vec3f(0.),vec3f(1.)),writeGeometryInfo); 
#endif
#elif defined(PREPASS_COLOR)
fragData[PREPASS_COLOR_INDEX]=vec4f(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(specularEnvironmentR0,microSurface)*writeGeometryInfo;
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrBlockPrePass_name] = pbrBlockPrePass_shader;
/** @internal */
const pbrBlockPrePassWGSL = { name: pbrBlockPrePass_name, shader: pbrBlockPrePass_shader };
//# sourceMappingURL=pbrBlockPrePass.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitFragment.js
var oitFragment = __webpack_require__(91347);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDebug.js
// Do not edit.

const pbrDebug_name = "pbrDebug";
const pbrDebug_shader = `#if DEBUGMODE>0
if (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;
#if DEBUGMODE==1
color=fragmentInputs.vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
color=fragmentInputs.vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
color=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
color=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
color=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
color= vec3f(input.vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
color= vec3f(input.vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
color=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
color=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
color=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
color=albedoTexture.rgb;
#ifndef GAMMAALBEDO
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==21 && defined(AMBIENT)
color=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
color=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
color=emissiveColorTex.rgb;
#ifndef GAMMAEMISSIVE
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==24 && defined(LIGHTMAP)
color=lightmapColor;
#ifndef GAMMALIGHTMAP
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
color=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
color=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
color= vec3f(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
color=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
color=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
color=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
color=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==32 && defined(BUMP)
color=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
color=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
color=reflectionOut.environmentRadiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
color=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
color=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
color=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
color=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
color=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
color=reflectionOut.environmentIrradiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==60
color=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
color=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
color= vec3f(reflectivityOut.metallicRoughness.r);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
color=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
color= vec3f(roughness);
#elif DEBUGMODE==64
color= vec3f(alphaG);
#elif DEBUGMODE==65
color= vec3f(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
color=clearcoatOut.clearCoatColor;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
color= vec3f(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
color= vec3f(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
color=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
color=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==72
color= vec3f(microSurface);
#elif DEBUGMODE==73
color=uniforms.vAlbedoColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==74 && !defined(METALLICWORKFLOW)
color=uniforms.vReflectivityColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==75
color=uniforms.vEmissiveColor;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
color= vec3f(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
color= vec3f(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
color= vec3f(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
color=specularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
color=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
color=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
color= vec3f(luminanceOverAlpha);
#elif DEBUGMODE==87
color= vec3f(alpha);
#elif DEBUGMODE==88 && defined(ALBEDO)
color= vec3f(albedoTexture.a);
#elif DEBUGMODE==89
color=aoOut.ambientOcclusionColor;
#else
var stripeWidth: f32=30.;var stripePos: f32=abs(floor(input.position.x/stripeWidth));var whichColor: f32=((stripePos)%(2.));var color1: vec3f= vec3f(.6,.2,.2);var color2: vec3f= vec3f(.3,.1,.1);color=mix(color1,color2,whichColor);
#endif
color*=uniforms.vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
color=normalize(color)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
color=toGammaSpaceVec3(color);
#endif
fragmentOutputs.color=vec4f(color,1.0);
#ifdef PREPASS
fragmentOutputs.fragData0=toLinearSpaceVec3(color); 
fragmentOutputs.fragData1=vec4f(0.,0.,0.,0.); 
#endif
#ifdef DEBUGMODE_FORCERETURN
return fragmentOutputs;
#endif
}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[pbrDebug_name] = pbrDebug_shader;
/** @internal */
const pbrDebugWGSL = { name: pbrDebug_name, shader: pbrDebug_shader };
//# sourceMappingURL=pbrDebug.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js
// Do not edit.

























































const pbr_fragment_name = "pbrPixelShader";
const pbr_fragment_shader = `#define CUSTOM_FRAGMENT_BEGIN
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<pbrUboDeclaration>
#include<pbrFragmentExtraDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<pbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<pbrBlockAlbedoOpacity>
#include<pbrBlockReflectivity>
#include<pbrBlockAmbientOcclusion>
#include<pbrBlockAlphaFresnel>
#include<pbrBlockAnisotropic>
#include<pbrBlockReflection>
#include<pbrBlockSheen>
#include<pbrBlockClearcoat>
#include<pbrBlockIridescence>
#include<pbrBlockSubSurface>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
var albedoOpacityOut: albedoOpacityOutParams;
#ifdef ALBEDO
var albedoTexture: vec4f=textureSample(albedoSampler,albedoSamplerSampler,fragmentInputs.vAlbedoUV+uvOffset);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#endif
#ifdef DECAL
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#endif
albedoOpacityOut=albedoOpacityBlock(
uniforms.vAlbedoColor
#ifdef ALBEDO
,albedoTexture
,uniforms.vAlbedoInfos
#endif
#ifdef OPACITY
,opacityMap
,uniforms.vOpacityInfos
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
#ifdef DECAL
,decalColor
,uniforms.vDecalInfos
#endif
);var surfaceAlbedo: vec3f=albedoOpacityOut.surfaceAlbedo;var alpha: f32=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var aoOut: ambientOcclusionOutParams;
#ifdef AMBIENT
var ambientOcclusionColorMap: vec3f=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
uniforms.vAmbientInfos
#endif 
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
var diffuseBase: vec3f= vec3f(1.,1.,1.);
#else
var baseColor: vec3f=surfaceAlbedo;var reflectivityOut: reflectivityOutParams;
#if defined(REFLECTIVITY)
var surfaceMetallicOrReflectivityColorMap: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,fragmentInputs.vReflectivityUV+uvOffset);var baseReflectivity: vec4f=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpaceVec4(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap=vec4f(surfaceMetallicOrReflectivityColorMap.rgb*uniforms.vReflectivityInfos.y,surfaceMetallicOrReflectivityColorMap.a);
#endif
#endif
#if defined(MICROSURFACEMAP)
var microSurfaceTexel: vec4f=textureSample(microSurfaceSampler,microSurfaceSamplerSampler,fragmentInputs.vMicroSurfaceSamplerUV+uvOffset)*uniforms.vMicroSurfaceSamplerInfos.y;
#endif
#ifdef METALLICWORKFLOW
var metallicReflectanceFactors: vec4f=uniforms.vMetallicReflectanceFactors;
#ifdef REFLECTANCE
var reflectanceFactorsMap: vec4f=textureSample(reflectanceSampler,reflectanceSamplerSampler,fragmentInputs.vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpaceVec4(reflectanceFactorsMap);
#endif
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*reflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
#ifdef METALLIC_REFLECTANCE
var metallicReflectanceFactorsMap: vec4f=textureSample(metallicReflectanceSampler,metallicReflectanceSamplerSampler,fragmentInputs.vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpaceVec4(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*metallicReflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
metallicReflectanceFactors*=metallicReflectanceFactorsMap.a;
#endif
#endif
reflectivityOut=reflectivityBlock(
uniforms.vReflectivityColor
#ifdef METALLICWORKFLOW
,surfaceAlbedo
,metallicReflectanceFactors
#endif
#ifdef REFLECTIVITY
,uniforms.vReflectivityInfos
,surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,aoOut.ambientOcclusionColor
#endif
#ifdef MICROSURFACEMAP
,microSurfaceTexel
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
);var microSurface: f32=reflectivityOut.microSurface;var roughness: f32=reflectivityOut.roughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
var alphaFresnelOut: alphaFresnelOutParams;alphaFresnelOut=alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface
);alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
var anisotropicOut: anisotropicOutParams;
#ifdef ANISOTROPIC_TEXTURE
var anisotropyMapData: vec3f=textureSample(anisotropySampler,anisotropySamplerSampler,fragmentInputs.vAnisotropyUV+uvOffset).rgb*uniforms.vAnisotropyInfos.y;
#endif
anisotropicOut=anisotropicBlock(
uniforms.vAnisotropy,
roughness,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData,
#endif
TBN,
normalW,
viewDirectionW 
);
#endif
#ifdef REFLECTION
var reflectionOut: reflectionOutParams;
#ifndef USE_CUSTOM_REFLECTION
reflectionOut=reflectionBlock(
fragmentInputs.vPositionW
,normalW
,alphaG
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness
#endif
,reflectionSampler
,reflectionSamplerSampler
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,fragmentInputs.vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,uniforms.reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
var sheenOut: sheenOutParams;
#ifdef SHEEN_TEXTURE
var sheenMapData: vec4f=textureSample(sheenSampler,sheenSamplerSampler,fragmentInputs.vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
var sheenMapRoughnessData: vec4f=textureSample(sheenRoughnessSampler,sheenRoughnessSamplerSampler,fragmentInputs.vSheenRoughnessUV+uvOffset)*uniforms.vSheenInfos.w;
#endif
sheenOut=sheenBlock(
uniforms.vSheenColor
#ifdef SHEEN_ROUGHNESS
,uniforms.vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData
#endif
#endif
,roughness
#ifdef SHEEN_TEXTURE
,sheenMapData
,uniforms.vSheenInfos.y
#endif
,reflectance
#ifdef SHEEN_LINKWITHALBEDO
,baseColor
,surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,NdotV
,environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,AARoughnessFactors
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
,reflectionOut.reflectionCoords
,NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,eho
#endif
#endif
);
#ifdef SHEEN_LINKWITHALBEDO
surfaceAlbedo=sheenOut.surfaceAlbedo;
#endif
#endif
#ifdef CLEARCOAT
#ifdef CLEARCOAT_TEXTURE
var clearCoatMapData: vec2f=textureSample(clearCoatSampler,clearCoatSamplerSampler,fragmentInputs.vClearCoatUV+uvOffset).rg*uniforms.vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
var iridescenceOut: iridescenceOutParams;
#ifdef IRIDESCENCE_TEXTURE
var iridescenceMapData: vec2f=textureSample(iridescenceSampler,iridescenceSamplerSampler,fragmentInputs.vIridescenceUV+uvOffset).rg*uniforms.vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
var iridescenceThicknessMapData: vec2f=textureSample(iridescenceThicknessSampler,iridescenceThicknessSamplerSampler,fragmentInputs.vIridescenceThicknessUV+uvOffset).rg*uniforms.vIridescenceInfos.w;
#endif
iridescenceOut=iridescenceBlock(
uniforms.vIridescenceParams
,NdotV
,specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,NdotVUnclamped
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#endif
);var iridescenceIntensity: f32=iridescenceOut.iridescenceIntensity;specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
var clearcoatOut: clearcoatOutParams;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
var clearCoatMapRoughnessData: vec4f=textureSample(clearCoatRoughnessSampler,clearCoatRoughnessSamplerSampler,fragmentInputs.vClearCoatRoughnessUV+uvOffset)*uniforms.vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
var clearCoatTintMapData: vec4f=textureSample(clearCoatTintSampler,clearCoatTintSamplerSampler,fragmentInputs.vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
var clearCoatBumpMapData: vec4f=textureSample(clearCoatBumpSampler,clearCoatBumpSamplerSampler,fragmentInputs.vClearCoatBumpUV+uvOffset);
#endif
clearcoatOut=clearcoatBlock(
fragmentInputs.vPositionW
,geometricNormalW
,viewDirectionW
,uniforms.vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData
#endif
,specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,uniforms.vClearCoatTintParams
,uniforms.clearCoatColorAtDistance
,uniforms.vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,uniforms.vClearCoatBumpInfos
,clearCoatBumpMapData
,fragmentInputs.vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,vTBN
#else
,uniforms.vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,uniforms.normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal
#endif
#ifdef REFLECTION
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,select(-1.,1.,fragmentInputs.frontFacing)
#endif
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
var subSurfaceOut: subSurfaceOutParams;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
var thicknessMap: vec4f=textureSample(thicknessSampler,thicknessSamplerSampler,fragmentInputs.vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
var refractionIntensityMap: vec4f=textureSample(refractionIntensitySampler,refractionIntensitySamplerSampler,fragmentInputs.vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
var translucencyIntensityMap: vec4f=textureSample(translucencyIntensitySampler,translucencyIntensitySamplerSampler,fragmentInputs.vTranslucencyIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
var translucencyColorMap: vec4f=textureSample(translucencyColorSampler,translucencyColorSamplerSampler,fragmentInputs.vTranslucencyColorUV+uvOffset);
#endif
subSurfaceOut=subSurfaceBlock(
uniforms.vSubSurfaceIntensity
,uniforms.vThicknessParam
,uniforms.vTintColor
,normalW
,specularEnvironmentReflectance
#ifdef SS_THICKNESSANDMASK_TEXTURE
,thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,uniforms.reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,reflectionOut.irradianceVector
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler
,reflectionSamplerSampler
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,fragmentInputs.vPositionW
,viewDirectionW
,scene.view
,uniforms.vRefractionInfos
,uniforms.refractionMatrix
,uniforms.vRefractionMicrosurfaceInfos
,uniforms.vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,roughness
#endif
,alphaG
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,uniforms.vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,uniforms.vRefractionPosition
,uniforms.vRefractionSize
#endif
#ifdef SS_DISPERSION
,dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,uniforms.vDiffusionDistance
,uniforms.vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,translucencyColorMap
#endif
#endif
);
#ifdef SS_REFRACTION
surfaceAlbedo=subSurfaceOut.surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha=subSurfaceOut.alpha;
#endif
#endif
#else
subSurfaceOut.specularEnvironmentReflectance=specularEnvironmentReflectance;
#endif
#include<pbrBlockDirectLighting>
#include<lightFragment>[0..maxSimultaneousLights]
#include<pbrBlockFinalLitComponents>
#endif 
#include<pbrBlockFinalUnlitComponents>
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
#include<pbrBlockFinalColorComposition>
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#include<pbrBlockPrePass>
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+finalColor.rgb*finalColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-finalColor.a));} else {fragmentOutputs.backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[pbr_fragment_name] = pbr_fragment_shader;
/** @internal */
const pbrPixelShaderWGSL = { name: pbr_fragment_name, shader: pbr_fragment_shader };
//# sourceMappingURL=pbr.fragment.js.map

/***/ }),

/***/ 39174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrVertexShaderWGSL: () => (/* binding */ pbrVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_pbrUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34035);
/* harmony import */ var _ShadersInclude_uvAttributeDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1008);
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41861);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_prePassVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37769);
/* harmony import */ var _ShadersInclude_samplerVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89277);
/* harmony import */ var _ShadersInclude_harmonicsFunctions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45978);
/* harmony import */ var _ShadersInclude_bumpVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97777);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77029);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75757);
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3925);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40242);
/* harmony import */ var _ShadersInclude_prePassVertex_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47033);
/* harmony import */ var _ShadersInclude_uvVariableDeclaration_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20774);
/* harmony import */ var _ShadersInclude_samplerVertexImplementation_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(52231);
/* harmony import */ var _ShadersInclude_bumpVertex_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87921);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85197);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59013);
/* harmony import */ var _ShadersInclude_shadowsVertex_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(79456);
/* harmony import */ var _ShadersInclude_vertexColorMixing_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(820);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(81482);
// Do not edit.
































const name = "pbrVertexShader";
const shader = `#include<pbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const pbrVertexShaderWGSL = { name, shader };
//# sourceMappingURL=pbr.vertex.js.map

/***/ }),

/***/ 99949:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickingPixelShaderWGSL: () => (/* binding */ pickingPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "pickingPixelShader";
const shader = `#if defined(INSTANCES)
varying vMeshID: vec4f;
#else
uniform meshID: vec4f;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#if defined(INSTANCES)
fragmentOutputs.color=input.vMeshID;
#else
fragmentOutputs.color=uniforms.meshID;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const pickingPixelShaderWGSL = { name, shader };
//# sourceMappingURL=picking.fragment.js.map

/***/ }),

/***/ 45095:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickingVertexShaderWGSL: () => (/* binding */ pickingVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32806);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98900);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76340);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8217);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44559);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18258);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9129);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91277);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65470);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40242);
// Do not edit.











const name = "pickingVertexShader";
const shader = `attribute position: vec3f;
#if defined(INSTANCES)
attribute instanceMeshID: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(INSTANCES)
varying vMeshID: vec4f;
#endif
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#if defined(INSTANCES)
vertexOutputs.vMeshID=input.instanceMeshID;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const pickingVertexShaderWGSL = { name, shader };
//# sourceMappingURL=picking.vertex.js.map

/***/ }),

/***/ 32083:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postprocessVertexShaderWGSL: () => (/* binding */ postprocessVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "postprocessVertexShader";
const shader = `attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const postprocessVertexShaderWGSL = { name, shader };
//# sourceMappingURL=postprocess.vertex.js.map

/***/ }),

/***/ 14005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proceduralVertexShaderWGSL: () => (/* binding */ proceduralVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "proceduralVertexShader";
const shader = `attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const proceduralVertexShaderWGSL = { name, shader };
//# sourceMappingURL=procedural.vertex.js.map

/***/ }),

/***/ 30371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbdDecodePixelShaderWGSL: () => (/* binding */ rgbdDecodePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "rgbdDecodePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const rgbdDecodePixelShaderWGSL = { name, shader };
//# sourceMappingURL=rgbdDecode.fragment.js.map

/***/ }),

/***/ 85035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbdEncodePixelShaderWGSL: () => (/* binding */ rgbdEncodePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
// Do not edit.


const name = "rgbdEncodePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const rgbdEncodePixelShaderWGSL = { name, shader };
//# sourceMappingURL=rgbdEncode.fragment.js.map

/***/ }),

/***/ 82365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rsmFullGlobalIlluminationPixelShaderWGSL: () => (/* binding */ rsmFullGlobalIlluminationPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "rsmFullGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is a direct application of the formula found in http:
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionW: texture_2d<f32>;var rsmNormalW: texture_2d<f32>;var rsmFlux: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var width: i32= i32(uniforms.rsmInfo.x);var height: i32= i32(uniforms.rsmInfo.y);for (var j: i32=0; j<height; j++) {for (var i: i32=0; i<width; i++) {var uv=vec2<i32>(i,j);var vplPositionW: vec3f=textureLoad(rsmPositionW,uv,0).xyz;var vplNormalW: vec3f=textureLoad(rsmNormalW,uv,0).xyz*2.0-1.0;var vplFlux: vec3f=textureLoad(rsmFlux,uv,0).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,fragmentInputs.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const rsmFullGlobalIlluminationPixelShaderWGSL = { name, shader };
//# sourceMappingURL=rsmFullGlobalIllumination.fragment.js.map

/***/ }),

/***/ 13118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rsmGlobalIlluminationPixelShaderWGSL: () => (/* binding */ rsmGlobalIlluminationPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "rsmGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is an application of the formula found in http:
* For better results,it also adds a random (noise) rotation to the RSM samples (the noise artifacts are easier to remove than the banding artifacts).
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;uniform rsmInfo2: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionWSampler: sampler;var rsmPositionW: texture_2d<f32>;var rsmNormalWSampler: sampler;var rsmNormalW: texture_2d<f32>;var rsmFluxSampler: sampler;var rsmFlux: texture_2d<f32>;var rsmSamples: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn mod289(x: f32)->f32{return x-floor(x*(1.0/289.0))*289.0;}
fn mod289Vec4(x: vec4f)->vec4f {return x-floor(x*(1.0/289.0))* 289.0;}
fn perm(x: vec4f)->vec4f {return mod289Vec4(((x*34.0)+1.0)*x) ;}
fn noise(p: vec3f)->f32{var a: vec3f=floor(p);var d: vec3f=p-a;d=d*d*(3.0-2.0*d);var b: vec4f=a.xxyy+ vec4f(0.0,1.0,0.0,1.0);var k1: vec4f=perm(b.xyxy);var k2: vec4f=perm(k1.xyxy+b.zzww);var c: vec4f=k2+a.zzzz;var k3: vec4f=perm(c);var k4: vec4f=perm(c+1.0);var o1: vec4f=fract(k3*(1.0/41.0));var o2: vec4f=fract(k4*(1.0/41.0));var o3: vec4f=o2*d.z+o1*(1.0-d.z);var o4: vec2f=o3.yw*d.x+o3.xz*(1.0-d.x);return o4.y*d.y+o4.x*(1.0-d.y);}
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var numSamples: i32= i32(uniforms.rsmInfo.x);var radius: f32=uniforms.rsmInfo.y;var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var angle: f32=noise(p*uniforms.rsmInfo2.x);var c: f32=cos(angle);var s: f32=sin(angle);for (var i: i32=0; i<numSamples; i++) {var rsmSample: vec3f=textureLoad(rsmSamples,vec2<i32>(i,0),0).xyz;var weightSquare: f32=rsmSample.z;if (uniforms.rsmInfo2.y==1.0){rsmSample=vec3f(rsmSample.x*c+rsmSample.y*s,-rsmSample.x*s+rsmSample.y*c,rsmSample.z);}
var uv: vec2f=texRSM.xy+rsmSample.xy*radius;if (uv.x<0. || uv.x>1. || uv.y<0. || uv.y>1.) {continue;}
var vplPositionW: vec3f=textureSampleLevel(rsmPositionW,rsmPositionWSampler,uv,0.).xyz;var vplNormalW: vec3f=textureSampleLevel(rsmNormalW,rsmNormalWSampler,uv,0.).xyz*2.0-1.0;var vplFlux: vec3f=textureSampleLevel(rsmFlux,rsmFluxSampler,uv,0.).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*weightSquare*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,input.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const rsmGlobalIlluminationPixelShaderWGSL = { name, shader };
//# sourceMappingURL=rsmGlobalIllumination.fragment.js.map

/***/ }),

/***/ 85423:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2PixelShaderWGSL: () => (/* binding */ screenSpaceReflection2PixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75052);
/* harmony import */ var _ShadersInclude_screenSpaceRayTrace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95228);
// Do not edit.




const name = "screenSpaceReflection2PixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#ifdef SSR_SUPPORTED
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var backDepthSampler: texture_2d<f32>;uniform backSizeFactor: f32;
#endif
#ifdef SSR_USE_ENVIRONMENT_CUBE
var envCubeSamplerSampler: sampler;var envCubeSampler: texture_cube<f32>;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;
#endif
#endif
uniform view: mat4x4f;uniform invView: mat4x4f;uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform projectionPixel: mat4x4f;uniform nearPlaneZ: f32;uniform farPlaneZ: f32;uniform stepSize: f32;uniform maxSteps: f32;uniform strength: f32;uniform thickness: f32;uniform roughnessFactor: f32;uniform reflectionSpecularFalloffExponent: f32;uniform maxDistance: f32;uniform selfCollisionNumSkip: f32;uniform reflectivityThreshold: f32;
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
fn hash(a: vec3f)->vec3f
{var result=fract(a*0.8);result+=dot(result,result.yxz+19.19);return fract((result.xxy+result.yxx)*result.zyx);}
fn computeAttenuationForIntersection(ihitPixel: vec2f,hitUV: vec2f,vsRayOrigin: vec3f,vsHitPoint: vec3f,reflectionVector: vec3f,maxRayDistance: f32,numIterations: f32)->f32 {var attenuation: f32=1.0;
#ifdef SSR_ATTENUATE_SCREEN_BORDERS
var dCoords: vec2f=smoothstep(vec2f(0.2),vec2f(0.6),abs( vec2f(0.5,0.5)-hitUV.xy));attenuation*=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_DISTANCE
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_NUMITERATIONS
attenuation*=1.0-(numIterations/uniforms.maxSteps);
#endif
#ifdef SSR_ATTENUATE_BACKFACE_REFLECTION
var reflectionNormal: vec3f=texelFetch(normalSampler,hitPixel,0).xyz;var directionBasedAttenuation: f32=smoothstep(-0.17,0.0,dot(reflectionNormal,-reflectionVector));attenuation*=directionBasedAttenuation;
#endif
return attenuation;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSR_SUPPORTED
var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var color: vec3f=colorFull.rgb;var reflectivity: vec4f=textureSampleLevel(reflectivitySampler,reflectivitySamplerSampler,input.vUV,0.0);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {
#ifdef SSR_USE_BLUR
fragmentOutputs.color= vec4f(0.);
#else
fragmentOutputs.color=colorFull;
#endif
return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec3(color);
#endif
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz; 
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(uniforms.view* vec4f(csNormal,0.0)).xyz;
#endif
var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);
#ifdef ORTHOGRAPHIC_CAMERA
var csViewDirection: vec3f= vec3f(0.,0.,1.);
#else
var csViewDirection: vec3f=normalize(csPosition);
#endif
var csReflectedVector: vec3f=reflect(csViewDirection,csNormal);
#ifdef SSR_USE_ENVIRONMENT_CUBE
var wReflectedVector: vec3f=(uniforms.invView* vec4f(csReflectedVector,0.0)).xyz;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
var worldPos: vec4f=uniforms.invView* vec4f(csPosition,1.0);wReflectedVector=parallaxCorrectNormal(worldPos.xyz,normalize(wReflectedVector),uniforms.vReflectionSize,uniforms.vReflectionPosition);
#endif
#ifdef SSR_INVERTCUBICMAP
wReflectedVector.y*=-1.0;
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
wReflectedVector.z*=-1.0;
#endif
var envColor: vec3f=textureSampleLevel(envCubeSampler,envCubeSamplerSampler,wReflectedVector,0.0).xyz;
#ifdef SSR_ENVIRONMENT_CUBE_IS_GAMMASPACE
envColor=toLinearSpaceVec3(envColor);
#endif
#else
var envColor: vec3f=color;
#endif
var reflectionAttenuation: f32=1.0;var rayHasHit: bool=false;var startPixel: vec2f;var hitPixel: vec2f;var hitPoint: vec3f;var numIterations: f32;
#ifdef SSRAYTRACE_DEBUG
var debugColor: vec3f;
#endif
#ifdef SSR_ATTENUATE_FACING_CAMERA
reflectionAttenuation*=1.0-smoothstep(0.25,0.5,dot(-csViewDirection,csReflectedVector));
#endif
if (reflectionAttenuation>0.0) {
#ifdef SSR_USE_BLUR
var jitt: vec3f= vec3f(0.);
#else
var roughness: f32=1.0-reflectivity.a;var jitt: vec3f=mix( vec3f(0.0),hash(csPosition)- vec3f(0.5),roughness)*uniforms.roughnessFactor; 
#endif
var uv2: vec2f=input.vUV*texSize;var c: f32=(uv2.x+uv2.y)*0.25;var jitter: f32=((c)%(1.0)); 
rayHasHit=traceScreenSpaceRay1(
csPosition,
normalize(csReflectedVector+jitt),
uniforms.projectionPixel,
depthSampler,
texSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
backDepthSampler,
uniforms.backSizeFactor,
#endif
uniforms.thickness,
uniforms.nearPlaneZ,
uniforms.farPlaneZ,
uniforms.stepSize,
jitter,
uniforms.maxSteps,
uniforms.maxDistance,
uniforms.selfCollisionNumSkip,
&startPixel,
&hitPixel,
&hitPoint,
&numIterations
#ifdef SSRAYTRACE_DEBUG
,&debugColor
#endif
);}
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color= vec4f(debugColor,1.);return fragmentOutputs;
#endif
var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var SSR: vec3f=envColor;if (rayHasHit) {var reflectedColor: vec3f=textureLoad(textureSampler,vec2<i32>(hitPixel),0).rgb;
#ifdef SSR_INPUT_IS_GAMMA_SPACE
reflectedColor=toLinearSpaceVec3(reflectedColor);
#endif
reflectionAttenuation*=computeAttenuationForIntersection(hitPixel,hitPixel/texSize,csPosition,hitPoint,csReflectedVector,uniforms.maxDistance,numIterations);SSR=reflectedColor*reflectionAttenuation+(1.0-reflectionAttenuation)*envColor;}
#ifndef SSR_BLEND_WITH_FRESNEL
SSR*=fresnel;
#endif
#ifdef SSR_USE_BLUR
var blur_radius: f32=0.0;var roughness: f32=1.0-reflectivity.a*(1.0-uniforms.roughnessFactor);if (roughness>0.001) {var cone_angle: f32=min(roughness,0.999)*3.14159265*0.5;var cone_len: f32=distance(startPixel,hitPixel);var op_len: f32=2.0*tan(cone_angle)*cone_len; 
var a: f32=op_len;var h: f32=cone_len;var a2: f32=a*a;var fh2: f32=4.0f*h*h;blur_radius=(a*(sqrt(a2+fh2)-a))/(4.0f*h);}
fragmentOutputs.color= vec4f(SSR,blur_radius/255.0); 
#else
#ifdef SSR_BLEND_WITH_FRESNEL
var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,colorFull.a);
#endif
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const screenSpaceReflection2PixelShaderWGSL = { name, shader };
//# sourceMappingURL=screenSpaceReflection2.fragment.js.map

/***/ }),

/***/ 66584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2BlurPixelShaderWGSL: () => (/* binding */ screenSpaceReflection2BlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceReflection2BlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;uniform texelOffsetScale: vec2f;const weights: array<f32,8>=array<f32,8>(0.071303,0.131514,0.189879,0.321392,0.452906, 0.584419,0.715932,0.847445);fn processSample(uv: vec2f,i: f32,stepSize: vec2f,accumulator: ptr<function,vec4f>,denominator: ptr<function,f32>)
{var offsetUV: vec2f=stepSize*i+uv;var coefficient: f32=weights[ i32(2.0-abs(i))];*accumulator+=textureSampleLevel(textureSampler,textureSamplerSampler,offsetUV,0.0)*coefficient;*denominator+=coefficient;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);if (dot(colorFull, vec4f(1.0))==0.0) {fragmentOutputs.color=colorFull;return fragmentOutputs;}
var blurRadius: f32=colorFull.a*255.0; 
var stepSize: vec2f=uniforms.texelOffsetScale.xy*blurRadius;var accumulator: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0)*0.214607;var denominator: f32=0.214607;processSample(input.vUV,1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*2.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*2.0,stepSize,&accumulator,&denominator);fragmentOutputs.color= vec4f(accumulator.rgb/denominator,colorFull.a);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const screenSpaceReflection2BlurPixelShaderWGSL = { name, shader };
//# sourceMappingURL=screenSpaceReflection2Blur.fragment.js.map

/***/ }),

/***/ 44143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2BlurCombinerPixelShaderWGSL: () => (/* binding */ screenSpaceReflection2BlurCombinerPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79702);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75052);
/* harmony import */ var _ShadersInclude_screenSpaceRayTrace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95228);
// Do not edit.




const name = "screenSpaceReflection2BlurCombinerPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>; 
var mainSamplerSampler: sampler;var mainSampler: texture_2d<f32>;var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;uniform strength: f32;uniform reflectionSpecularFalloffExponent: f32;uniform reflectivityThreshold: f32;varying vUV: vec2f;
#include<helperFunctions>
#ifdef SSR_BLEND_WITH_FRESNEL
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
uniform nearPlaneZ: f32;uniform farPlaneZ: f32;
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#else
var SSR: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var color: vec4f=textureSample(mainSampler,textureSamplerSampler,input.vUV);var reflectivity: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vUV);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {fragmentOutputs.color=color;return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec4(color);
#endif
#ifdef SSR_BLEND_WITH_FRESNEL
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz;var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);var csViewDirection: vec3f=normalize(csPosition);var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color.rgb*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,color.a);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const screenSpaceReflection2BlurCombinerPixelShaderWGSL = { name, shader };
//# sourceMappingURL=screenSpaceReflection2BlurCombiner.fragment.js.map

/***/ }),

/***/ 87428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  shadowMapPixelShaderWGSL: () => (/* binding */ shadowMapPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js
var packingFunctions = __webpack_require__(5543);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bayerDitherFunctions.js
// Do not edit.

const bayerDitherFunctions_name = "bayerDitherFunctions";
const shader = `fn bayerDither2(_P: vec2f)->f32 {return ((2.0*_P.y+_P.x+1.0)%(4.0));}
fn bayerDither4(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5*((_P)%(4.0))); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
fn bayerDither8(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5 *((_P)%(4.0))); 
var P4: vec2f=floor(0.25*((_P)%(8.0))); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[bayerDitherFunctions_name] = shader;
/** @internal */
const bayerDitherFunctionsWGSL = { name: bayerDitherFunctions_name, shader };
//# sourceMappingURL=bayerDitherFunctions.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js
// Do not edit.



const shadowMapFragmentExtraDeclaration_name = "shadowMapFragmentExtraDeclaration";
const shadowMapFragmentExtraDeclaration_shader = `#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform softTransparentShadowSM: vec2f;
#endif
varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
uniform lightDataSM: vec3f;varying vPositionWSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[shadowMapFragmentExtraDeclaration_name] = shadowMapFragmentExtraDeclaration_shader;
/** @internal */
const shadowMapFragmentExtraDeclarationWGSL = { name: shadowMapFragmentExtraDeclaration_name, shader: shadowMapFragmentExtraDeclaration_shader };
//# sourceMappingURL=shadowMapFragmentExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(39759);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(97715);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragment.js
var shadowMapFragment = __webpack_require__(89273);
;// ./node_modules/@babylonjs/core/ShadersWGSL/shadowMap.fragment.js
// Do not edit.





const shadowMap_fragment_name = "shadowMapPixelShader";
const shadowMap_fragment_shader = `#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
var opacityMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV);var alphaFromAlphaTexture: f32=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (uniforms.softTransparentShadowSM.y==1.0) {opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE) {discard;}
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alphaFromAlphaTexture) {discard;}
#else
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x) {discard;} 
#endif
#endif
#include<shadowMapFragment>
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[shadowMap_fragment_name] = shadowMap_fragment_shader;
/** @internal */
const shadowMapPixelShaderWGSL = { name: shadowMap_fragment_name, shader: shadowMap_fragment_shader };
//# sourceMappingURL=shadowMap.fragment.js.map

/***/ }),

/***/ 32303:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  shadowMapVertexShaderWGSL: () => (/* binding */ shadowMapVertexShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(32806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(98900);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(76340);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(8217);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(79702);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(98327);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js
var meshUboDeclaration = __webpack_require__(6874);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexExtraDeclaration.js
// Do not edit.

const shadowMapVertexExtraDeclaration_name = "shadowMapVertexExtraDeclaration";
const shader = `#if SM_NORMALBIAS==1
uniform lightDataSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
varying vPositionWSM: vec3f;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[shadowMapVertexExtraDeclaration_name] = shader;
/** @internal */
const shadowMapVertexExtraDeclarationWGSL = { name: shadowMapVertexExtraDeclaration_name, shader };
//# sourceMappingURL=shadowMapVertexExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(77029);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(18258);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(9129);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(91277);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(65470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(40242);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexNormalBias.js
// Do not edit.

const shadowMapVertexNormalBias_name = "shadowMapVertexNormalBias";
const shadowMapVertexNormalBias_shader = `#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
var worldLightDirSM: vec3f=normalize(-uniforms.lightDataSM.xyz);
#else
var directionToLightSM: vec3f=uniforms.lightDataSM.xyz-worldPos.xyz;var worldLightDirSM: vec3f=normalize(directionToLightSM);
#endif
var ndlSM: f32=dot(vNormalW,worldLightDirSM);var sinNLSM: f32=sqrt(1.0-ndlSM*ndlSM);var normalBiasSM: f32=uniforms.biasAndScaleSM.y*sinNLSM;worldPos=vec4f(worldPos.xyz-vNormalW*normalBiasSM,worldPos.w);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[shadowMapVertexNormalBias_name] = shadowMapVertexNormalBias_shader;
/** @internal */
const shadowMapVertexNormalBiasWGSL = { name: shadowMapVertexNormalBias_name, shader: shadowMapVertexNormalBias_shader };
//# sourceMappingURL=shadowMapVertexNormalBias.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js
var shadowMapVertexMetric = __webpack_require__(71311);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(85197);
;// ./node_modules/@babylonjs/core/ShadersWGSL/shadowMap.vertex.js
// Do not edit.


















const shadowMap_vertex_name = "shadowMapVertexShader";
const shadowMap_vertex_shader = `attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;
#endif
#include<helperFunctions>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#ifdef NORMAL
var normalUpdated: vec3f=input.normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
var vNormalW: vec3f=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
var vNormalW: vec3f=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
vertexOutputs.position=scene.viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[shadowMap_vertex_name] = shadowMap_vertex_shader;
/** @internal */
const shadowMapVertexShaderWGSL = { name: shadowMap_vertex_name, shader: shadowMap_vertex_shader };
//# sourceMappingURL=shadowMap.vertex.js.map

/***/ }),

/***/ 35381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sharpenPixelShaderWGSL: () => (/* binding */ sharpenPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "sharpenPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform sharpnessAmounts: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var edgeDetection: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,-1)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(-1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,1)) -
color*4.0;fragmentOutputs.color=max(vec4f(color.rgb*uniforms.sharpnessAmounts.y,color.a)-(uniforms.sharpnessAmounts.x* vec4f(edgeDetection.rgb,0)),vec4f(0.));}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const sharpenPixelShaderWGSL = { name, shader };
//# sourceMappingURL=sharpen.fragment.js.map

/***/ }),

/***/ 62843:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  spritesPixelShaderWGSL: () => (/* binding */ spritesPixelShaderWGSL)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(66407);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(93226);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(38780);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(93243);
;// ./node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingCompatibility.js
// Do not edit.

const imageProcessingCompatibility_name = "imageProcessingCompatibility";
const shader = `#ifdef IMAGEPROCESSINGPOSTPROCESS
fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStoreWGSL[imageProcessingCompatibility_name] = shader;
/** @internal */
const imageProcessingCompatibilityWGSL = { name: imageProcessingCompatibility_name, shader };
//# sourceMappingURL=imageProcessingCompatibility.js.map
;// ./node_modules/@babylonjs/core/ShadersWGSL/sprites.fragment.js
// Do not edit.






const sprites_fragment_name = "spritesPixelShader";
const sprites_fragment_shader = `uniform alphaTest: i32;varying vColor: vec4f;varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
fn uvPixelPerfect(uv: vec2f)->vec2f {var res: vec2f= vec2f(textureDimensions(diffuseSampler,0));var uvTemp=uv*res;var seam: vec2f=floor(uvTemp+0.5);uvTemp=seam+clamp((uvTemp-seam)/fwidth(uvTemp),vec2f(-0.5),vec2f(0.5));return uvTemp/res;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
var uv: vec2f=uvPixelPerfect(input.vUV);
#else
var uv: vec2f=input.vUV;
#endif
var color: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,uv);var fAlphaTest: f32= f32(uniforms.alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95) {discard;}}
color*=input.vColor;
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStoreWGSL[sprites_fragment_name] = sprites_fragment_shader;
/** @internal */
const spritesPixelShaderWGSL = { name: sprites_fragment_name, shader: sprites_fragment_shader };
//# sourceMappingURL=sprites.fragment.js.map

/***/ }),

/***/ 24448:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spritesVertexShaderWGSL: () => (/* binding */ spritesVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75757);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93226);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
// Do not edit.




const name = "spritesVertexShader";
const shader = `attribute position: vec4f;attribute options: vec2f;attribute offsets: vec2f;attribute inverts: vec2f;attribute cellInfo: vec4f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;varying vUV: vec2f;varying vColor: vec4f;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var viewPos: vec3f=(uniforms.view* vec4f(input.position.xyz,1.0)).xyz; 
var cornerPos: vec2f;var angle: f32=input.position.w;var size: vec2f= vec2f(input.options.x,input.options.y);var offset: vec2f=input.offsets.xy;cornerPos= vec2f(offset.x-0.5,offset.y -0.5)*size;var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0); 
vertexOutputs.vColor=input.color;var uvOffset: vec2f= vec2f(abs(offset.x-input.inverts.x),abs(1.0-offset.y-input.inverts.y));var uvPlace: vec2f=input.cellInfo.xy;var uvSize: vec2f=input.cellInfo.zw;vertexOutputs.vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vertexOutputs.vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vertexOutputs.vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const spritesVertexShaderWGSL = { name, shader };
//# sourceMappingURL=sprites.vertex.js.map

/***/ }),

/***/ 45076:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ssao2PixelShaderWGSL: () => (/* binding */ ssao2PixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "ssao2PixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef SSAO
const scales: array<f32,16>=array<f32,16>(
0.1,
0.11406250000000001,
0.131640625,
0.15625,
0.187890625,
0.2265625,
0.272265625,
0.325,
0.384765625,
0.4515625,
0.525390625,
0.60625,
0.694140625,
0.7890625,
0.891015625,
1.0
);uniform near: f32;uniform radius: f32;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;var randomSamplerSampler: sampler;var randomSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;uniform randTextureTiles: f32;uniform samplesFactor: f32;uniform sampleSphere: array<vec3f,SAMPLES>;uniform totalStrength: f32;uniform base: f32;uniform xViewport: f32;uniform yViewport: f32;uniform depthProjection: mat3x3f;uniform maxZ: f32;uniform minZAspect: f32;uniform texelSize: vec2f;uniform projection: mat4x4f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var random: vec3f=textureSampleLevel(randomSampler,randomSamplerSampler,input.vUV*uniforms.randTextureTiles,0.0).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r;var depthSign: f32=sign(depth);depth=depth*depthSign;var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.0).rgb;var occlusion: f32=0.0;var correctedRadius: f32=min(uniforms.radius,uniforms.minZAspect*depth/uniforms.near);var vViewRay: vec3f= vec3f((input.vUV.x*2.0-1.0)*uniforms.xViewport,(input.vUV.y*2.0-1.0)*uniforms.yViewport,depthSign);var vDepthFactor: vec3f=uniforms.depthProjection* vec3f(1.0,1.0,depth);var origin: vec3f=vViewRay*vDepthFactor;var rvec: vec3f=random*2.0-1.0;rvec.z=0.0;var dotProduct: f32=dot(rvec,normal);rvec=select( vec3f(-rvec.y,0.0,rvec.x),rvec,1.0-abs(dotProduct)>1e-2);var tangent: vec3f=normalize(rvec-normal*dot(rvec,normal));var bitangent: vec3f=cross(normal,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,normal);var difference: f32;for (var i: i32=0; i<SAMPLES; i++) {var samplePosition: vec3f=scales[(i+ i32(random.x*16.0)) % 16]*tbn*uniforms.sampleSphere[(i+ i32(random.y*16.0)) % 16];samplePosition=samplePosition*correctedRadius+origin;var offset: vec4f= vec4f(samplePosition,1.0);offset=uniforms.projection*offset;offset=vec4f(offset.xyz/offset.w,offset.w);offset=vec4f(offset.xy*0.5+0.5,offset.z,offset.w);if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {continue;}
var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,offset.xy,0.0).r);difference=depthSign*samplePosition.z-sampleDepth;var rangeCheck: f32=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);occlusion+=step(EPSILON,difference)*rangeCheck;}
occlusion=occlusion*(1.0-smoothstep(uniforms.maxZ*0.75,uniforms.maxZ,depth));var ao: f32=1.0-uniforms.totalStrength*occlusion*uniforms.samplesFactor;var result: f32=clamp(ao+uniforms.base,0.0,1.0);fragmentOutputs.color= vec4f( vec3f(result),1.0);}
#else
#ifdef BLUR
uniform outSize: f32;uniform soften: f32;uniform tolerance: f32;uniform samples: i32;
#ifndef BLUR_BYPASS
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef BLUR_LEGACY
fn blur13Bilateral(image: texture_2d<f32>,imageSampler: sampler,uv: vec2f,step: vec2f)->f32 {var result: f32=0.0;var off1: vec2f= vec2f(1.411764705882353)*step;var off2: vec2f= vec2f(3.2941176470588234)*step;var off3: vec2f= vec2f(5.176470588235294)*step;var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv,0.0).r);var sampleDepth: f32;var weight: f32;var weightSum: f32=30.0;result+=textureSampleLevel(image,imageSampler,uv,0.0).r*30.0;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv+off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv-off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off3,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off3,0.0).r*weight;return result/weightSum;}
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: f32=0.0;
#ifdef BLUR_BYPASS
result=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0).r;
#else
#ifdef BLUR_H
var step: vec2f= vec2f(1.0/uniforms.outSize,0.0);
#else
var step: vec2f= vec2f(0.0,1.0/uniforms.outSize);
#endif
#ifdef BLUR_LEGACY
result=blur13Bilateral(textureSampler,textureSamplerSampler,input.vUV,step);
#else
var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r);var weightSum: f32=0.0;for (var i: i32=-uniforms.samples; i<uniforms.samples; i+=2)
{var samplePos: vec2f=input.vUV+step*( f32(i)+0.5);var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,samplePos,0.0).r);var falloff: f32=smoothstep(0.0,
f32(uniforms.samples),
f32(uniforms.samples)-abs( f32(i))*uniforms.soften);var minDivider: f32=uniforms.tolerance*0.5+0.003;var weight: f32=falloff/( minDivider+abs(compareDepth-sampleDepth));result+=textureSampleLevel(textureSampler,textureSamplerSampler,samplePos,0.0).r*weight;weightSum+=weight;}
result/=weightSum;
#endif
#endif
fragmentOutputs.color=vec4f(result,result,result,1.0);}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const ssao2PixelShaderWGSL = { name, shader };
//# sourceMappingURL=ssao2.fragment.js.map

/***/ }),

/***/ 68217:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ssaoCombinePixelShaderWGSL: () => (/* binding */ ssaoCombinePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "ssaoCombinePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var originalColorSampler: sampler;var originalColor: texture_2d<f32>;uniform viewport: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var ssaoColor: vec4f=textureSample(textureSampler,textureSamplerSampler,uniforms.viewport.xy+input.vUV*uniforms.viewport.zw);var sceneColor: vec4f=textureSample(originalColor,originalColorSampler,input.vUV);fragmentOutputs.color=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const ssaoCombinePixelShaderWGSL = { name, shader };
//# sourceMappingURL=ssaoCombine.fragment.js.map

/***/ }),

/***/ 37706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taaPixelShaderWGSL: () => (/* binding */ taaPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "taaPixelShader";
const shader = `var textureSampler: texture_2d<f32>;var historySampler: texture_2d<f32>;uniform factor: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let c=textureLoad(textureSampler,vec2<i32>(fragmentInputs.position.xy),0);let h=textureLoad(historySampler,vec2<i32>(fragmentInputs.position.xy),0);fragmentOutputs.color= mix(h,c,uniforms.factor);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const taaPixelShaderWGSL = { name, shader };
//# sourceMappingURL=taa.fragment.js.map

/***/ }),

/***/ 18:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tonemapPixelShaderWGSL: () => (/* binding */ tonemapPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "tonemapPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform _ExposureAdjustment: f32;
#if defined(HABLE_TONEMAPPING)
const A: f32=0.15;const B: f32=0.50;const C: f32=0.10;const D: f32=0.20;const E: f32=0.02;const F: f32=0.30;const W: f32=11.2;
#endif
fn Luminance(c: vec3f)->f32
{return dot(c, vec3f(0.22,0.707,0.071));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;
#if defined(REINHARD_TONEMAPPING)
var lum: f32=Luminance(colour.rgb); 
var lumTm: f32=lum*uniforms._ExposureAdjustment;var scale: f32=lumTm/(1.0+lumTm); 
colour*=scale/lum;
#elif defined(HABLE_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;const ExposureBias: f32=2.0;var x: vec3f=ExposureBias*colour;var curr: vec3f=((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;x= vec3f(W,W,W);var whiteScale: vec3f=1.0/(((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F);colour=curr*whiteScale;
#elif defined(OPTIMIZED_HEJIDAWSON_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;var X: vec3f=max( vec3f(0.0,0.0,0.0),colour-0.004);var retColor: vec3f=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;
#elif defined(PHOTOGRAPHIC_TONEMAPPING)
colour= vec3f(1.0,1.0,1.0)-exp2(-uniforms._ExposureAdjustment*colour);
#endif
fragmentOutputs.color= vec4f(colour.rgb,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const tonemapPixelShaderWGSL = { name, shader };
//# sourceMappingURL=tonemap.fragment.js.map

/***/ }),

/***/ 57811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vrDistortionCorrectionPixelShaderWGSL: () => (/* binding */ vrDistortionCorrectionPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "vrDistortionCorrectionPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform LensCenter: vec2f;uniform Scale: vec2f;uniform ScaleIn: vec2f;uniform HmdWarpParam: vec4f;fn HmdWarp(in01: vec2f)->vec2f {var theta: vec2f=(in01-uniforms.LensCenter)*uniforms.ScaleIn; 
var rSq: f32=theta.x*theta.x+theta.y*theta.y;var rvector: vec2f=theta*(uniforms.HmdWarpParam.x+uniforms.HmdWarpParam.y*rSq+uniforms.HmdWarpParam.z*rSq*rSq+uniforms.HmdWarpParam.w*rSq*rSq*rSq);return uniforms.LensCenter+uniforms.Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tc: vec2f=HmdWarp(input.vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) {fragmentOutputs.color=vec4f(0.0,0.0,0.0,0.0);}
else{fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,tc);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStoreWGSL[name] = shader;
/** @internal */
const vrDistortionCorrectionPixelShaderWGSL = { name, shader };
//# sourceMappingURL=vrDistortionCorrection.fragment.js.map

/***/ })

}]);