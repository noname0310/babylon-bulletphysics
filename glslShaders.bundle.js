"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[9071],{

/***/ 86722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export backgroundUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28764);
// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{uniform vec4 vPrimaryColor;uniform vec4 vPrimaryColorShadow;uniform vec2 vDiffuseInfos;uniform vec2 vReflectionInfos;uniform mat4 diffuseMatrix;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;uniform float pointSize;uniform float shadowLevel;uniform float alpha;uniform vec3 vBackgroundCenter;uniform vec4 vReflectionControl;uniform vec2 projectedGroundInfos;};
#include<sceneUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const backgroundUboDeclaration = { name, shader };
//# sourceMappingURL=backgroundUboDeclaration.js.map

/***/ }),

/***/ 65523:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bakedVertexAnimation */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bakedVertexAnimation";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bakedVertexAnimation = { name, shader };
//# sourceMappingURL=bakedVertexAnimation.js.map

/***/ }),

/***/ 18959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bakedVertexAnimationDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bakedVertexAnimationDeclaration";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;uniform vec2 bakedVertexAnimationTextureSizeInverted;uniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{float offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bakedVertexAnimationDeclaration = { name, shader };
//# sourceMappingURL=bakedVertexAnimationDeclaration.js.map

/***/ }),

/***/ 69707:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesDeclaration: () => (/* binding */ bonesDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bonesDeclaration";
const shader = `#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform highp sampler2D boneSampler;uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#endif
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{float offset=index *4.0;float dx=1.0/boneTextureWidth;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));return mat4(m0,m1,m2,m3);}
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bonesDeclaration = { name, shader };
//# sourceMappingURL=bonesDeclaration.js.map

/***/ }),

/***/ 3361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesVertex: () => (/* binding */ bonesVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bonesVertex";
const shader = `#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bonesVertex = { name, shader };
//# sourceMappingURL=bonesVertex.js.map

/***/ }),

/***/ 66566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export boundingBoxRendererUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "boundingBoxRendererUboDeclaration";
const shader = `#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const boundingBoxRendererUboDeclaration = { name, shader };
//# sourceMappingURL=boundingBoxRendererUboDeclaration.js.map

/***/ }),

/***/ 27018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragment: () => (/* binding */ bumpFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpFragment";
const shader = `vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);vec2 detailNormalRG=detailColor.wy*2.0-1.0;float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;bumpNormal+=vec3(0.0,0.0,1.0);detailNormal*=vec3(-1.0,-1.0,1.0);vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bumpFragment = { name, shader };
//# sourceMappingURL=bumpFragment.js.map

/***/ }),

/***/ 8269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentFunctions: () => (/* binding */ bumpFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _samplerFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63022);
// Do not edit.


const name = "bumpFragmentFunctions";
const shader = `#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;const float maxSamples=15.;const int iMaxSamples=15;vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;vec2 vOffsetDir=normalize(vViewDirCoT.xy);vec2 vMaxOffset=vOffsetDir*parallaxLimit;float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));float stepSize=1.0/numSamples;float currRayHeight=1.0;vec2 vCurrOffset=vec2(0,0);vec2 vLastOffset=vec2(0,0);float lastSampledHeight=1.0;float currSampledHeight=1.0;bool keepWorking=true;for (int i=0; i<iMaxSamples; i++)
{currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{float delta1=currSampledHeight-currRayHeight;float delta2=(currRayHeight+stepSize)-lastSampledHeight;float ratio=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{float height=texture2D(bumpSampler,vBumpUV).w;vec2 texCoordOffset=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bumpFragmentFunctions = { name, shader };
//# sourceMappingURL=bumpFragmentFunctions.js.map

/***/ }),

/***/ 17494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentMainFunctions: () => (/* binding */ bumpFragmentMainFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpFragmentMainFunctions";
const shader = `#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{mat4 ret=inverse(wMatrix);ret=transpose(ret);ret[0][3]=0.;ret[1][3]=0.;ret[2][3]=0.;ret[3]=vec4(0.,0.,0.,1.);return ret;}
#else
mat4 toNormalMatrix(mat4 m)
{float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;float det=max(dot(tangent,tangent),dot(bitangent,bitangent));float invmax=det==0.0 ? 0.0 : inversesqrt(det);return mat3(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bumpFragmentMainFunctions = { name, shader };
//# sourceMappingURL=bumpFragmentMainFunctions.js.map

/***/ }),

/***/ 19440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bumpVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpVertex";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bumpVertex = { name, shader };
//# sourceMappingURL=bumpVertex.js.map

/***/ }),

/***/ 56390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export bumpVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bumpVertexDeclaration";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const bumpVertexDeclaration = { name, shader };
//# sourceMappingURL=bumpVertexDeclaration.js.map

/***/ }),

/***/ 7412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneFragment: () => (/* binding */ clipPlaneFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneFragment";
const shader = `#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{discard;}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{discard;}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{discard;}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{discard;}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{discard;}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{discard;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const clipPlaneFragment = { name, shader };
//# sourceMappingURL=clipPlaneFragment.js.map

/***/ }),

/***/ 6194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneFragmentDeclaration: () => (/* binding */ clipPlaneFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneFragmentDeclaration";
const shader = `#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const clipPlaneFragmentDeclaration = { name, shader };
//# sourceMappingURL=clipPlaneFragmentDeclaration.js.map

/***/ }),

/***/ 47314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneVertex: () => (/* binding */ clipPlaneVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneVertex";
const shader = `#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const clipPlaneVertex = { name, shader };
//# sourceMappingURL=clipPlaneVertex.js.map

/***/ }),

/***/ 71636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clipPlaneVertexDeclaration: () => (/* binding */ clipPlaneVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "clipPlaneVertexDeclaration";
const shader = `#ifdef CLIPPLANE
uniform vec4 vClipPlane;varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;varying float fClipDistance6;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const clipPlaneVertexDeclaration = { name, shader };
//# sourceMappingURL=clipPlaneVertexDeclaration.js.map

/***/ }),

/***/ 11205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export decalFragment */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "decalFragment";
const shader = `#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const decalFragment = { name, shader };
//# sourceMappingURL=decalFragment.js.map

/***/ }),

/***/ 48109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export decalFragmentDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "decalFragmentDeclaration";
const shader = `#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const decalFragmentDeclaration = { name, shader };
//# sourceMappingURL=decalFragmentDeclaration.js.map

/***/ }),

/***/ 96019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export decalVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "decalVertexDeclaration";
const shader = `#ifdef DECAL
uniform vec4 vDecalInfos;uniform mat4 decalMatrix;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const decalVertexDeclaration = { name, shader };
//# sourceMappingURL=decalVertexDeclaration.js.map

/***/ }),

/***/ 81438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export defaultUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28764);
/* harmony import */ var _meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96467);
// Do not edit.



const name = "defaultUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vReflectionInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 reflectionMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const defaultUboDeclaration = { name, shader };
//# sourceMappingURL=defaultUboDeclaration.js.map

/***/ }),

/***/ 1037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export depthPrePass */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const depthPrePass = { name, shader };
//# sourceMappingURL=depthPrePass.js.map

/***/ }),

/***/ 2360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogFragment */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogFragment";
const shader = `#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const fogFragment = { name, shader };
//# sourceMappingURL=fogFragment.js.map

/***/ }),

/***/ 7806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fogFragmentDeclaration: () => (/* binding */ fogFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogFragmentDeclaration";
const shader = `#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()
{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)
{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}
else if (FOGMODE_EXP==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}
else if (FOGMODE_EXP2==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}
return clamp(fogCoeff,0.0,1.0);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const fogFragmentDeclaration = { name, shader };
//# sourceMappingURL=fogFragmentDeclaration.js.map

/***/ }),

/***/ 16470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogVertex";
const shader = `#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const fogVertex = { name, shader };
//# sourceMappingURL=fogVertex.js.map

/***/ }),

/***/ 86560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fogVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fogVertexDeclaration";
const shader = `#ifdef FOG
varying vec3 vFogDistance;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const fogVertexDeclaration = { name, shader };
//# sourceMappingURL=fogVertexDeclaration.js.map

/***/ }),

/***/ 51339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fresnelFunction */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fresnelFunction";
const shader = `#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const fresnelFunction = { name, shader };
//# sourceMappingURL=fresnelFunction.js.map

/***/ }),

/***/ 39775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gaussianSplattingVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gaussianSplattingVertexDeclaration";
const shader = `attribute vec2 position;uniform mat4 view;uniform mat4 projection;uniform mat4 world;uniform vec4 vEyePosition;`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const gaussianSplattingVertexDeclaration = { name, shader };
//# sourceMappingURL=gaussianSplattingVertexDeclaration.js.map

/***/ }),

/***/ 19495:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export harmonicsFunctions */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "harmonicsFunctions";
const shader = `#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
vec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00
+ vSphericalL1_1*(normal.y)
+ vSphericalL10*(normal.z)
+ vSphericalL11*(normal.x)
+ vSphericalL2_2*(normal.y*normal.x)
+ vSphericalL2_1*(normal.y*normal.z)
+ vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ vSphericalL21*(normal.z*normal.x)
+ vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
vec3 computeEnvironmentIrradiance(vec3 normal) {float Nx=normal.x;float Ny=normal.y;float Nz=normal.z;vec3 C1=vSphericalZZ.rgb;vec3 Cx=vSphericalX.rgb;vec3 Cy=vSphericalY.rgb;vec3 Cz=vSphericalZ.rgb;vec3 Cxx_zz=vSphericalXX_ZZ.rgb;vec3 Cyy_zz=vSphericalYY_ZZ.rgb;vec3 Cxy=vSphericalXY.rgb;vec3 Cyz=vSphericalYZ.rgb;vec3 Czx=vSphericalZX.rgb;vec3 a1=Cyy_zz*Ny+Cy;vec3 a2=Cyz*Nz+a1;vec3 b1=Czx*Nz+Cx;vec3 b2=Cxy*Ny+b1;vec3 b3=Cxx_zz*Nx+b2;vec3 t1=Cz *Nz+C1;vec3 t2=a2 *Ny+t1;vec3 t3=b3 *Nx+t2;return t3;}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const harmonicsFunctions = { name, shader };
//# sourceMappingURL=harmonicsFunctions.js.map

/***/ }),

/***/ 78741:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hdrFilteringFunctions */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrFilteringFunctions";
const shader = `#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
float radicalInverse_VdC(uint bits) 
{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return float(bits)*2.3283064365386963e-10; }
vec2 hammersley(uint i,uint N)
{return vec2(float(i)/float(N),radicalInverse_VdC(i));}
#else
float vanDerCorpus(int n,int base)
{float invBase=1.0/float(base);float denom =1.0;float result =0.0;for(int i=0; i<32; ++i)
{if(n>0)
{denom =mod(float(n),2.0);result+=denom*invBase;invBase=invBase/2.0;n =int(float(n)/2.0);}}
return result;}
vec2 hammersley(int i,int N)
{return vec2(float(i)/float(N),vanDerCorpus(i,2));}
#endif
float log4(float x) {return log2(x)/2.;}
vec3 uv_to_normal(vec2 uv) {vec3 N;vec2 uvRange=uv;float theta=uvRange.x*2.0*PI;float phi=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
const float NUM_SAMPLES_FLOAT=float(NUM_SAMPLES);const float NUM_SAMPLES_FLOAT_INVERSED=1./NUM_SAMPLES_FLOAT;const float K=4.;
#define inline
vec3 irradiance(samplerCube inputTexture,vec3 inputN,vec2 filteringInfo
#ifdef IBL_CDF_FILTERING
,sampler2D icdfSampler
#endif
)
{vec3 n=normalize(inputN);vec3 result=vec3(0.0);
#ifndef IBL_CDF_FILTERING
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);
#endif
float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);
#ifdef IBL_CDF_FILTERING
vec2 T;T.x=textureLod(icdfSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureLod(icdfSampler,vec2(T.x,Xi.y),0.0).y;vec3 Ls=uv_to_normal(vec2(1.0-fract(T.x+0.25),T.y));float NoL=dot(n,Ls);
#else
vec3 Ls=hemisphereCosSample(Xi);Ls=normalize(Ls);vec3 Ns=vec3(0.,0.,1.);float NoL=dot(Ns,Ls);
#endif
if (NoL>0.) {
#ifdef IBL_CDF_FILTERING
float pdf=textureLod(icdfSampler,T,0.0).z;vec3 c=textureCubeLodEXT(inputTexture,Ls,0.0).rgb;
#else
float pdf_inversed=PI/NoL;float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(l,0.0,maxLevel);vec3 c=textureCubeLodEXT(inputTexture,tbn*Ls,mipLevel).rgb;
#endif
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
#ifdef IBL_CDF_FILTERING
vec3 light=pdf<1e-6 ? vec3(0.0) : vec3(1.0)/vec3(pdf)*c;result+=NoL*light;
#else
result+=c;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;return result;}
#define inline
vec3 radiance(float alphaG,samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{vec3 n=normalize(inputN);vec3 c=textureCube(inputTexture,n).rgb; 
if (alphaG==0.) {
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {vec3 result=vec3(0.);vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);vec3 H=hemisphereImportanceSampleDggx(Xi,alphaG);float NoV=1.;float NoH=H.z;float NoH2=H.z*H.z;float NoL=2.*NoH2-1.;vec3 L=vec3(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {float pdf_inversed=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(float(l),0.0,maxLevel);weight+=NoL;vec3 c=textureCubeLodEXT(inputTexture,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const hdrFilteringFunctions = { name, shader };
//# sourceMappingURL=hdrFilteringFunctions.js.map

/***/ }),

/***/ 73325:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   helperFunctions: () => (/* binding */ helperFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "helperFunctions";
const shader = `const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {vec3 i0=inMatrix[0];vec3 i1=inMatrix[1];vec3 i2=inMatrix[2];mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);return outMatrix;}
mat3 inverseMat3(mat3 inMatrix) {float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];float b01=a22*a11-a12*a21;float b11=-a22*a10+a12*a20;float b21=a21*a10-a11*a20;float det=a00*b01+a01*b11+a02*b21;return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{vec3 nearZeroSection=0.0773993808*color;vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{vec3 nearZeroSection=12.92*color;vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;float remainingSection=pow(0.947867299*(color+0.055),2.4);return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;float remainingSection=1.055*pow(color,0.41666)-0.055;return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{return value*value;}
vec3 square(vec3 value)
{return value*value;}
float pow5(float value) {float sq=value*value;return sq*sq*value;}
float getLuminance(vec3 color)
{return saturate(dot(color,LuminanceEncodeApprox));}
float getRand(vec2 seed) {return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);}
float dither(vec2 seed,float varianceAmount) {float rand=getRand(seed);float normVariance=varianceAmount/255.0;float dither=mix(-normVariance,normVariance,rand);return dither;}
const float rgbdMaxRange=255.;vec4 toRGBD(vec3 color) {float maxRGB=maxEps(max(color.r,max(color.g,color.b)));float D =max(rgbdMaxRange/maxRGB,1.);D =saturate(floor(D)/255.);vec3 rgb=color.rgb*D;rgb=toGammaSpace(rgb);return vec4(saturate(rgb),D);}
vec3 fromRGBD(vec4 rgbd) {rgbd.rgb=toLinearSpace(rgbd.rgb);return rgbd.rgb/rgbd.a;}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {vec3 invOrigVec=vec3(1.)/origVec;vec3 halfSize=cubeSize*0.5;vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);vec3 intersectPositionWS=vertexPos+origVec*distance;return intersectPositionWS-cubePos;}
vec3 equirectangularToCubemapDirection(vec2 uv) {float longitude=uv.x*TWO_PI-PI;float latitude=HALF_PI-uv.y*PI;vec3 direction;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
float sqrtClamped(float value) {return sqrt(max(value,0.));}
float avg(vec3 value) {return dot(value,vec3(0.333333333));}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const helperFunctions = { name, shader };
//# sourceMappingURL=helperFunctions.js.map

/***/ }),

/***/ 89392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingDeclaration: () => (/* binding */ imageProcessingDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "imageProcessingDeclaration";
const shader = `#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;uniform vec4 vCameraColorCurveNeutral;uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const imageProcessingDeclaration = { name, shader };
//# sourceMappingURL=imageProcessingDeclaration.js.map

/***/ }),

/***/ 64017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingFunctions: () => (/* binding */ imageProcessingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "imageProcessingFunctions";
const shader = `#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;sliceUV.x+=sliceInteger*sliceSize;sliceUV=saturate(sliceUV);vec4 slice0Color=texture2D(colorTransform,sliceUV);sliceUV.x+=sliceSize;sliceUV=saturate(sliceUV);vec4 slice1Color=texture2D(colorTransform,sliceUV);vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;}
#endif
#if TONEMAPPING==3
const float PBRNeutralStartCompression=0.8-0.04;const float PBRNeutralDesaturation=0.15;vec3 PBRNeutralToneMapping( vec3 color ) {float x=min(color.r,min(color.g,color.b));float offset=x<0.08 ? x-6.25*x*x : 0.04;color-=offset;float peak=max(color.r,max(color.g,color.b));if (peak<PBRNeutralStartCompression) return color;float d=1.-PBRNeutralStartCompression;float newPeak=1.-d*d/(peak+d-PBRNeutralStartCompression);color*=newPeak/peak;float g=1.-1./(PBRNeutralDesaturation*(peak-newPeak)+1.);return mix(color,newPeak*vec3(1,1,1),g);}
#endif
#if TONEMAPPING==2
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);vec3 RRTAndODTFit(vec3 v)
{vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
vec3 ACESFitted(vec3 color)
{color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;color=saturate(color);return color;}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;viewportXY=viewportXY*2.0-1.0;vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);float vignetteTerm=dot(vignetteXY1,vignetteXY1);float vignette=pow(vignetteTerm,vignetteSettings2.w);vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#if TONEMAPPING==3
result.rgb=PBRNeutralToneMapping(result.rgb);
#elif TONEMAPPING==2
result.rgb=ACESFitted(result.rgb);
#elif TONEMAPPING==1
const float tonemappingCalibration=1.590579;result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
result.rgb=toGammaSpace(result.rgb);result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);if (contrast<1.0) {result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);} else {result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);}
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;result.rgb*=colorCurve.rgb;result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);float dither=mix(-ditherIntensity,ditherIntensity,rand);result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const imageProcessingFunctions = { name, shader };
//# sourceMappingURL=imageProcessingFunctions.js.map

/***/ }),

/***/ 21469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export importanceSampling */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "importanceSampling";
const shader = `vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2.*PI*u.x;float cosTheta2=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDCharlie(vec2 u,float a) { 
float phi=2.*PI*u.x;float sinTheta=pow(u.y,a/(2.*a+1.));float cosTheta=sqrt(1.-sinTheta*sinTheta);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const importanceSampling = { name, shader };
//# sourceMappingURL=importanceSampling.js.map

/***/ }),

/***/ 1218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export instancesDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "instancesDeclaration";
const shader = `#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute vec4 previousWorld0;attribute vec4 previousWorld1;attribute vec4 previousWorld2;attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform mat4 previousWorld;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const instancesDeclaration = { name, shader };
//# sourceMappingURL=instancesDeclaration.js.map

/***/ }),

/***/ 3298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export instancesVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "instancesVertex";
const shader = `#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,
previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const instancesVertex = { name, shader };
//# sourceMappingURL=instancesVertex.js.map

/***/ }),

/***/ 17382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export kernelBlurVaryingDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "kernelBlurVaryingDeclaration";
const shader = `varying vec2 sampleCoord{X};`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const kernelBlurVaryingDeclaration = { name, shader };
//# sourceMappingURL=kernelBlurVaryingDeclaration.js.map

/***/ }),

/***/ 37256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragment: () => (/* binding */ lightFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightFragment";
const shader = `#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
vec4 diffuse{X}=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
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
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
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
info=computeIESSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness,iesLightTexture{X});
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
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
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
shadow=computeShadowWithCloseESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
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
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightFragment = { name, shader };
//# sourceMappingURL=lightFragment.js.map

/***/ }),

/***/ 92270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragmentDeclaration: () => (/* binding */ lightFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X};
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightFragmentDeclaration = { name, shader };
//# sourceMappingURL=lightFragmentDeclaration.js.map

/***/ }),

/***/ 22448:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightUboDeclaration: () => (/* binding */ lightUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X}; 
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightUboDeclaration = { name, shader };
//# sourceMappingURL=lightUboDeclaration.js.map

/***/ }),

/***/ 69440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxFragmentDeclaration: () => (/* binding */ lightVxFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightVxFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightVxFragmentDeclaration = { name, shader };
//# sourceMappingURL=lightVxFragmentDeclaration.js.map

/***/ }),

/***/ 4662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxUboDeclaration: () => (/* binding */ lightVxUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightVxUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightVxUboDeclaration = { name, shader };
//# sourceMappingURL=lightVxUboDeclaration.js.map

/***/ }),

/***/ 21962:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightsFragmentFunctions: () => (/* binding */ lightsFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lightsFragmentFunctions";
const shader = `struct lightingInfo
{vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {lightingInfo result;vec3 lightVectorW;float attenuation=1.0;if (lightData.w==0.)
{vec3 direction=lightData.xyz-vPositionW;attenuation=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
float getAttenuation(float cosAngle,float exponent) {return max(0.,pow(cosAngle,exponent));}
float getIESAttenuation(float cosAngle,sampler2D iesLightSampler) {float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
lightingInfo basicSpotLighting(vec3 viewDirectionW,vec3 lightVectorW,vec3 vNormal,float attenuation,vec3 diffuseColor,vec3 specularColor,float glossiness) {lightingInfo result; 
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
lightingInfo computeIESSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness,sampler2D iesLightSampler) { 
vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float dotProduct=dot(lightDirection.xyz,-lightVectorW);float cosAngle=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{ 
attenuation*=getIESAttenuation(dotProduct,iesLightSampler);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{ 
attenuation*=getAttenuation(cosAngle,lightData.w);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {lightingInfo result;float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return textureColor;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const lightsFragmentFunctions = { name, shader };
//# sourceMappingURL=lightsFragmentFunctions.js.map

/***/ }),

/***/ 34581:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthDeclaration";
const shader = `#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const logDepthDeclaration = { name, shader };
//# sourceMappingURL=logDepthDeclaration.js.map

/***/ }),

/***/ 29741:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthFragment */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthFragment";
const shader = `#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const logDepthFragment = { name, shader };
//# sourceMappingURL=logDepthFragment.js.map

/***/ }),

/***/ 2215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export logDepthVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "logDepthVertex";
const shader = `#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const logDepthVertex = { name, shader };
//# sourceMappingURL=logDepthVertex.js.map

/***/ }),

/***/ 4980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export mainUVVaryingDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const mainUVVaryingDeclaration = { name, shader };
//# sourceMappingURL=mainUVVaryingDeclaration.js.map

/***/ }),

/***/ 96467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export meshUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUboDeclaration";
const shader = `#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const meshUboDeclaration = { name, shader };
//# sourceMappingURL=meshUboDeclaration.js.map

/***/ }),

/***/ 15060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertex: () => (/* binding */ morphTargetsVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertex";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (i>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(readVector3FromRawSampler(i,vertexID)-position)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler(i,vertexID) -normal)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler(i,vertexID).xy-uv)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler(i,vertexID) -tangent.xyz)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(readVector3FromRawSampler(i,vertexID).xy-uv2)*morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(uv2_{X}-uv2)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const morphTargetsVertex = { name, shader };
//# sourceMappingURL=morphTargetsVertex.js.map

/***/ }),

/***/ 90738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexDeclaration: () => (/* binding */ morphTargetsVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexDeclaration";
const shader = `#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute vec3 position{X};
#endif
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#ifdef MORPHTARGETS_UV2
attribute vec2 uv2_{X};
#endif
#elif {X}==0
uniform int morphTargetCount;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const morphTargetsVertexDeclaration = { name, shader };
//# sourceMappingURL=morphTargetsVertexDeclaration.js.map

/***/ }),

/***/ 48451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobal: () => (/* binding */ morphTargetsVertexGlobal)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexGlobal";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const morphTargetsVertexGlobal = { name, shader };
//# sourceMappingURL=morphTargetsVertexGlobal.js.map

/***/ }),

/***/ 27999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobalDeclaration: () => (/* binding */ morphTargetsVertexGlobalDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "morphTargetsVertexGlobalDeclaration";
const shader = `#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV).xyz;}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const morphTargetsVertexGlobalDeclaration = { name, shader };
//# sourceMappingURL=morphTargetsVertexGlobalDeclaration.js.map

/***/ }),

/***/ 89986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oitDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;uniform sampler2D oitDepthSampler;uniform sampler2D oitFrontColorSampler;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const oitDeclaration = { name, shader };
//# sourceMappingURL=oitDeclaration.js.map

/***/ }),

/***/ 94436:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oitFragment */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);depth.rg=vec2(-MAX_DEPTH);frontColor=lastFrontColor;backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);return;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const oitFragment = { name, shader };
//# sourceMappingURL=oitFragment.js.map

/***/ }),

/***/ 8334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packingFunctions: () => (/* binding */ packingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "packingFunctions";
const shader = `vec4 pack(float depth)
{const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);vec4 res=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const packingFunctions = { name, shader };
//# sourceMappingURL=packingFunctions.js.map

/***/ }),

/***/ 8709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export pbrBRDFFunctions */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "pbrBRDFFunctions";
const shader = `#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 getEnergyConservationFactor(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);}
#endif
#ifdef ENVIRONMENTBRDF
vec3 getBRDFLookup(float NdotV,float perceptualRoughness) {vec2 UV=vec2(NdotV,perceptualRoughness);vec4 brdfLookup=texture2D(environmentBrdfSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup.rgb=fromRGBD(brdfLookup.rgba);
#endif
return brdfLookup.rgb;}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 specularEnvironmentR90,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
float getBRDFLookupCharlieSheen(float NdotV,float perceptualRoughness)
{float c=1.0-NdotV;float c3=c*c*c;return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
vec3 getReflectanceFromAnalyticalBRDFLookup_Jones(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
vec3 getSheenReflectanceFromBRDFLookup(const vec3 reflectance0,const vec3 environmentBrdf) {vec3 sheenEnvironmentReflectance=reflectance0*environmentBrdf.b;return sheenEnvironmentReflectance;}
#endif
vec3 fresnelSchlickGGX(float VdotH,vec3 reflectance0,vec3 reflectance90)
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
float fresnelSchlickGGX(float VdotH,float reflectance0,float reflectance90)
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
#ifdef CLEARCOAT
vec3 getR0RemappedForClearCoat(vec3 f0) {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturate(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturate(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
vec3 s=sqrt(f0);vec3 t=(vClearCoatRefractionParams.z+vClearCoatRefractionParams.w*s)/(vClearCoatRefractionParams.w+vClearCoatRefractionParams.z*s);return square(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const mat3 XYZ_TO_REC709=mat3(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);vec3 getIORTfromAirToSurfaceR0(vec3 f0) {vec3 sqrtF0=sqrt(f0);return (1.+sqrtF0)/(1.-sqrtF0);}
vec3 getR0fromIORs(vec3 iorT,float iorI) {return square((iorT-vec3(iorI))/(iorT+vec3(iorI)));}
float getR0fromIORs(float iorT,float iorI) {return square((iorT-iorI)/(iorT+iorI));}
vec3 evalSensitivity(float opd,vec3 shift) {float phase=2.0*PI*opd*1.0e-9;const vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);const vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);const vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-square(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));xyz/=1.0685e-7;vec3 srgb=XYZ_TO_REC709*xyz;return srgb;}
vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0) {vec3 I=vec3(1.0);float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if (cosTheta2Sq<0.0) {return I;}
float cosTheta2=sqrt(cosTheta2Sq);float R0=getR0fromIORs(iridescenceIOR,outsideIOR);float R12=fresnelSchlickGGX(cosTheta1,R0,1.);float R21=R12;float T121=1.0-R12;float phi12=0.0;if (iridescenceIOR<outsideIOR) phi12=PI;float phi21=PI-phi12;vec3 baseIOR=getIORTfromAirToSurfaceR0(clamp(baseF0,0.0,0.9999)); 
vec3 R1=getR0fromIORs(baseIOR,iridescenceIOR);vec3 R23=fresnelSchlickGGX(cosTheta2,R1,vec3(1.));vec3 phi23=vec3(0.0);if (baseIOR[0]<iridescenceIOR) phi23[0]=PI;if (baseIOR[1]<iridescenceIOR) phi23[1]=PI;if (baseIOR[2]<iridescenceIOR) phi23[2]=PI;float opd=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=square(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for (int m=1; m<=2; ++m)
{Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*opd,float(m)*phi);I+=Cm*Sm;}
return max(I,vec3(0.0));}
#endif
float normalDistributionFunction_TrowbridgeReitzGGX(float NdotH,float alphaG)
{float a2=square(alphaG);float d=NdotH*NdotH*(a2-1.0)+1.0;return a2/(PI*d*d);}
#ifdef SHEEN
float normalDistributionFunction_CharlieSheen(float NdotH,float alphaG)
{float invR=1./alphaG;float cos2h=NdotH*NdotH;float sin2h=1.-cos2h;return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);}
#endif
#ifdef ANISOTROPIC
float normalDistributionFunction_BurleyGGX_Anisotropic(float NdotH,float TdotH,float BdotH,const vec2 alphaTB) {float a2=alphaTB.x*alphaTB.y;vec3 v=vec3(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);float v2=dot(v,v);float w2=a2/v2;return a2*w2*w2*RECIPROCAL_PI;}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility_GGXCorrelated(float NdotL,float NdotV,float alphaG) {
#ifdef MOBILE
float GGXV=NdotL*(NdotV*(1.0-alphaG)+alphaG);float GGXL=NdotV*(NdotL*(1.0-alphaG)+alphaG);return 0.5/(GGXV+GGXL);
#else
float a2=alphaG*alphaG;float GGXV=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);float GGXL=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);return 0.5/(GGXV+GGXL);
#endif
}
#else
float smithVisibilityG1_TrowbridgeReitzGGXFast(float dot,float alphaG)
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
float alphaSquared=alphaG*alphaG;return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
float smithVisibility_TrowbridgeReitzGGXFast(float NdotL,float NdotV,float alphaG)
{float visibility=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);return visibility;}
#endif
#ifdef ANISOTROPIC
float smithVisibility_GGXCorrelated_Anisotropic(float NdotL,float NdotV,float TdotV,float BdotV,float TdotL,float BdotL,const vec2 alphaTB) {float lambdaV=NdotL*length(vec3(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));float lambdaL=NdotV*length(vec3(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));float v=0.5/(lambdaV+lambdaL);return v;}
#endif
#ifdef CLEARCOAT
float visibility_Kelemen(float VdotH) {return 0.25/(VdotH*VdotH); }
#endif
#ifdef SHEEN
float visibility_Ashikhmin(float NdotL,float NdotV)
{return 1./(4.*(NdotL+NdotV-NdotL*NdotV));}
/* NOT USED
#ifdef SHEEN_SOFTER
float l(float x,float alphaG)
{float oneMinusAlphaSq=(1.0-alphaG)*(1.0-alphaG);float a=mix(21.5473,25.3245,oneMinusAlphaSq);float b=mix(3.82987,3.32435,oneMinusAlphaSq);float c=mix(0.19823,0.16801,oneMinusAlphaSq);float d=mix(-1.97760,-1.27393,oneMinusAlphaSq);float e=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}
float lambdaSheen(float cosTheta,float alphaG)
{return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));}
float visibility_CharlieSheen(float NdotL,float NdotV,float alphaG)
{float G=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));return G/(4.0*NdotV*NdotL);}
#endif
*/
#endif
float diffuseBRDF_Burley(float NdotL,float NdotV,float VdotH,float roughness) {float diffuseFresnelNV=pow5(saturateEps(1.0-NdotL));float diffuseFresnelNL=pow5(saturateEps(1.0-NdotV));float diffuseFresnel90=0.5+2.0*VdotH*VdotH*roughness;float fresnel =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);return fresnel/PI;}
#ifdef SS_TRANSLUCENCY
vec3 transmittanceBRDF_Burley(const vec3 tintColor,const vec3 diffusionDistance,float thickness) {vec3 S=1./maxEps(diffusionDistance);vec3 temp=exp((-0.333333333*thickness)*S);return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);}
float computeWrappedDiffuseNdotL(float NdotL,float w) {float t=1.0+w;float invt2=1.0/square(t);return saturate((NdotL+w)*invt2);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const pbrBRDFFunctions = { name, shader };
//# sourceMappingURL=pbrBRDFFunctions.js.map

/***/ }),

/***/ 4096:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export pbrUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _sceneUboDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28764);
/* harmony import */ var _meshUboDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96467);
// Do not edit.



const name = "pbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec2 vReflectionInfos;vec2 vReflectionFilteringInfo;vec3 vReflectionPosition;vec3 vReflectionSize;vec3 vBumpInfos;mat4 albedoMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 reflectivityMatrix;mat4 microSurfaceSamplerMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;mat4 reflectionMatrix;vec3 vReflectionColor;vec4 vAlbedoColor;vec4 vLightingIntensity;vec3 vReflectionMicrosurfaceInfos;float pointSize;vec4 vReflectivityColor;vec3 vEmissiveColor;vec3 vAmbientColor;vec2 vDebugMode;vec4 vMetallicReflectanceFactors;vec2 vMetallicReflectanceInfos;mat4 metallicReflectanceMatrix;vec2 vReflectanceInfos;mat4 reflectanceMatrix;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const pbrUboDeclaration = { name, shader };
//# sourceMappingURL=pbrUboDeclaration.js.map

/***/ }),

/***/ 91211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export pointCloudVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "pointCloudVertex";
const shader = `#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const pointCloudVertex = { name, shader };
//# sourceMappingURL=pointCloudVertex.js.map

/***/ }),

/***/ 42694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_LOCAL_POSITION
varying highp vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const prePassDeclaration = { name, shader };
//# sourceMappingURL=prePassDeclaration.js.map

/***/ }),

/***/ 65438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassVertex */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassVertex";
const shader = `#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const prePassVertex = { name, shader };
//# sourceMappingURL=prePassVertex.js.map

/***/ }),

/***/ 78328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export prePassVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "prePassVertexDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const prePassVertexDeclaration = { name, shader };
//# sourceMappingURL=prePassVertexDeclaration.js.map

/***/ }),

/***/ 18223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reflectionFunction: () => (/* binding */ reflectionFunction)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "reflectionFunction";
const shader = `vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0); }
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(1.0-s,t,0); }
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);vec3 r=normalize(reflect(cameraToVertex,worldNormal));r=vec3(reflectionMatrix*vec4(r,0));float lon=atan(r.z,r.x);float lat=acos(r.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0);}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{vec3 viewDir=normalize(vec3(view*worldPos));vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));vec3 r=reflect(viewDir,viewNormal);r=vec3(reflectionMatrix*vec4(r,0));r.z=r.z-1.0;float m=2.0*length(r);return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=worldPos.xyz-eyePosition;vec3 coords=normalize(reflect(viewDir,worldNormal));return vec3(reflectionMatrix*vec4(coords,1));}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*(view*worldPos));}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*vec4(positionW,1.));}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const reflectionFunction = { name, shader };
//# sourceMappingURL=reflectionFunction.js.map

/***/ }),

/***/ 63022:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerFragmentDeclaration */
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
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const samplerFragmentDeclaration = { name, shader };
//# sourceMappingURL=samplerFragmentDeclaration.js.map

/***/ }),

/***/ 85136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerVertexDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "samplerVertexDeclaration";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const samplerVertexDeclaration = { name, shader };
//# sourceMappingURL=samplerVertexDeclaration.js.map

/***/ }),

/***/ 41316:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export samplerVertexImplementation */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "samplerVertexImplementation";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}
#ifdef UV2
else if (v_INFONAME_==1.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const samplerVertexImplementation = { name, shader };
//# sourceMappingURL=samplerVertexImplementation.js.map

/***/ }),

/***/ 28764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export sceneUboDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "sceneUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;};
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const sceneUboDeclaration = { name, shader };
//# sourceMappingURL=sceneUboDeclaration.js.map

/***/ }),

/***/ 69363:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export screenSpaceRayTrace */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceRayTrace";
const shader = `float distanceSquared(vec2 a,vec2 b) { a-=b; return dot(a,a); }
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
float linearizeDepth(float depth,float near,float far) {
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
for clipping rays headed towards the camera
\param stride Step in horizontal or vertical pixels between samples. This is a float
because integer math is slow on GPUs,but should be set to an integer>=1
\param jitterFraction Number between 0 and 1 for how far to bump the ray in stride units
to conceal banding artifacts,plus the stride ray offset.
\param maxSteps Maximum number of iterations. Higher gives better images but may be slow
\param maxRayTraceDistance Maximum camera-space distance to trace before returning a miss
\param selfCollisionNumSkip Number of steps to skip at start when raytracing to avoid self collisions.
1 is a reasonable value,depending on the scene you may need to set this value to 2
\param hitPixel Pixel coordinates of the first intersection with the scene
\param numIterations number of iterations performed
\param csHitPoint Camera space location of the ray hit
*/
#define inline
bool traceScreenSpaceRay1(
vec3 csOrigin,
vec3 csDirection,
mat4 projectToPixelMatrix,
sampler2D csZBuffer,
vec2 csZBufferSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
sampler2D csZBackBuffer,
float csZBackSizeFactor,
#endif
float csZThickness,
float nearPlaneZ,
float farPlaneZ,
float stride,
float jitterFraction,
float maxSteps,
float maxRayTraceDistance,
float selfCollisionNumSkip,
out vec2 startPixel,
out vec2 hitPixel,
out vec3 csHitPoint,
out float numIterations
#ifdef SSRAYTRACE_DEBUG
,out vec3 debugColor
#endif
)
{
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)>-nearPlaneZ ? (-nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#else
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)<nearPlaneZ ? (nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#endif
vec3 csEndPoint=csOrigin+csDirection*rayLength;hitPixel=vec2(-1.0,-1.0);vec4 H0=projectToPixelMatrix*vec4(csOrigin,1.0);vec4 H1=projectToPixelMatrix*vec4(csEndPoint,1.0);float k0=1.0/H0.w;float k1=1.0/H1.w;vec3 Q0=csOrigin*k0;vec3 Q1=csEndPoint*k1;vec2 P0=H0.xy*k0;vec2 P1=H1.xy*k1;
#ifdef SSRAYTRACE_CLIP_TO_FRUSTUM
float xMax=csZBufferSize.x-0.5,xMin=0.5,yMax=csZBufferSize.y-0.5,yMin=0.5;float alpha=0.0;if ((P1.y>yMax) || (P1.y<yMin)) {alpha=(P1.y-((P1.y>yMax) ? yMax : yMin))/(P1.y-P0.y);}
if ((P1.x>xMax) || (P1.x<xMin)) {alpha=max(alpha,(P1.x-((P1.x>xMax) ? xMax : xMin))/(P1.x-P0.x));}
P1=mix(P1,P0,alpha); k1=mix(k1,k0,alpha); Q1=mix(Q1,Q0,alpha);
#endif
P1+=vec2((distanceSquared(P0,P1)<0.0001) ? 0.01 : 0.0);vec2 delta=P1-P0;bool permute=false;if (abs(delta.x)<abs(delta.y)) { 
permute=true;delta=delta.yx;P0=P0.yx;P1=P1.yx; }
float stepDirection=sign(delta.x);float invdx=stepDirection/delta.x;vec2 dP=vec2(stepDirection,delta.y*invdx);vec3 dQ=(Q1-Q0)*invdx;float dk=(k1-k0)*invdx;float zMin=min(csEndPoint.z,csOrigin.z);float zMax=max(csEndPoint.z,csOrigin.z);dP*=stride; dQ*=stride; dk*=stride;P0+=dP*jitterFraction; Q0+=dQ*jitterFraction; k0+=dk*jitterFraction;vec4 pqk=vec4(P0,Q0.z,k0);vec4 dPQK=vec4(dP,dQ.z,dk);startPixel=permute ? P0.yx : P0.xy;float prevZMaxEstimate=csOrigin.z;float rayZMin=prevZMaxEstimate,rayZMax=prevZMaxEstimate;float sceneZMax=rayZMax+1e4;float end=P1.x*stepDirection;bool hit=false;float stepCount;for (stepCount=0.0;stepCount<=selfCollisionNumSkip ||
(pqk.x*stepDirection)<=end &&
stepCount<maxSteps &&
!hit &&
sceneZMax != 0.0; 
pqk+=dPQK,++stepCount)
{hitPixel=permute ? pqk.yx : pqk.xy;rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;if (rayZMin>rayZMax) { 
float t=rayZMin; rayZMin=rayZMax; rayZMax=t;}
sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMax>=sceneBackZ-csZThickness) && (rayZMin<=sceneZMax);
#else
hit=(rayZMax>=sceneZMax-csZThickness) && (rayZMin<=sceneZMax);
#endif
#else
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
hit=(rayZMin<=sceneBackZ+csZThickness) && (rayZMax>=sceneZMax) && (sceneZMax != 0.0);
#else
hit=(rayZMin<=sceneZMax+csZThickness) && (rayZMax>=sceneZMax);
#endif
#endif
}
pqk-=dPQK;stepCount-=1.0;if (((pqk.x+dPQK.x)*stepDirection)>end || (stepCount+1.0)>=maxSteps || sceneZMax==0.0) {hit=false;}
#ifdef SSRAYTRACE_ENABLE_REFINEMENT
if (stride>1.0 && hit) {pqk-=dPQK;stepCount-=1.0;float invStride=1.0/stride;dPQK*=invStride;float refinementStepCount=0.0;prevZMaxEstimate=pqk.z/pqk.w;rayZMax=prevZMaxEstimate;sceneZMax=rayZMax+1e7;for (;refinementStepCount<=1.0 ||
(refinementStepCount<=stride*1.4) &&
(rayZMax<sceneZMax) && (sceneZMax != 0.0);pqk+=dPQK,refinementStepCount+=1.0)
{rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;rayZMax=max(rayZMax,rayZMin);hitPixel=permute ? pqk.yx : pqk.xy;sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
}
pqk-=dPQK;refinementStepCount-=1.0;stepCount+=refinementStepCount/stride;}
#endif
Q0.xy+=dQ.xy*stepCount;Q0.z=pqk.z;csHitPoint=Q0/pqk.w;numIterations=stepCount+1.0;
#ifdef SSRAYTRACE_DEBUG
if (((pqk.x+dPQK.x)*stepDirection)>end) {debugColor=vec3(0,0,1);} else if ((stepCount+1.0)>=maxSteps) {debugColor=vec3(1,0,0);} else if (sceneZMax==0.0) {debugColor=vec3(1,1,0);} else {debugColor=vec3(0,stepCount/maxSteps,0);}
#endif
return hit;}
/**
texCoord: in the [0,1] range
depth: depth in view space (range [znear,zfar]])
*/
vec3 computeViewPosFromUVDepth(vec2 texCoord,float depth,mat4 projection,mat4 invProjectionMatrix) {vec4 ndc;ndc.xy=texCoord*2.0-1.0;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=-projection[2].z*depth+projection[3].z;
#else
ndc.z=-projection[2].z-projection[3].z/depth;
#endif
#else
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=projection[2].z*depth+projection[3].z;
#else
ndc.z=projection[2].z+projection[3].z/depth;
#endif
#endif
ndc.w=1.0;vec4 eyePos=invProjectionMatrix*ndc;eyePos.xyz/=eyePos.w;return eyePos.xyz;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const screenSpaceRayTrace = { name, shader };
//# sourceMappingURL=screenSpaceRayTrace.js.map

/***/ }),

/***/ 98322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragment: () => (/* binding */ shadowMapFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapFragment";
const shader = `float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const shadowMapFragment = { name, shader };
//# sourceMappingURL=shadowMapFragment.js.map

/***/ }),

/***/ 85426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentSoftTransparentShadow: () => (/* binding */ shadowMapFragmentSoftTransparentShadow)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapFragmentSoftTransparentShadow";
const shader = `#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const shadowMapFragmentSoftTransparentShadow = { name, shader };
//# sourceMappingURL=shadowMapFragmentSoftTransparentShadow.js.map

/***/ }),

/***/ 29796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexMetric: () => (/* binding */ shadowMapVertexMetric)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowMapVertexMetric";
const shader = `#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const shadowMapVertexMetric = { name, shader };
//# sourceMappingURL=shadowMapVertexMetric.js.map

/***/ }),

/***/ 66812:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsFragmentFunctions: () => (/* binding */ shadowsFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowsFragmentFunctions";
const shader = `#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
#define inline
float computeShadowCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;float visibility=1.;vec3 poissonDisk[4];poissonDisk[0]=vec3(-1.0,1.0,-1.0);poissonDisk[1]=vec3(1.0,-1.0,-1.0);poissonDisk[2]=vec3(-1.0,-1.0,-1.0);poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);}
#define inline
float computeShadowWithESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
#define inline
float computeShadowWithCloseESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);vec3 uvLayer=vec3(uv.x,uv.y,layer);float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);float visibility=1.;vec2 poissonDisk[4];poissonDisk[0]=vec2(-0.94201624,-0.39906216);poissonDisk[1]=vec2(0.94558609,-0.76890725);poissonDisk[2]=vec2(-0.094184101,-0.92938870);poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define DISABLE_UNIFORMITY_ANALYSIS
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float shadow=texture2D(shadowSampler,uvDepthLayer);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.)
);const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec4 offset=vec4(poissonSamplers[i],0.);offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);if (numBlocker<1.0) {return 1.0;}
else
{return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
if (numBlocker<1.0) {return 1.0;}
else
{float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec3 offset=poissonSamplers[i];offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const shadowsFragmentFunctions = { name, shader };
//# sourceMappingURL=shadowsFragmentFunctions.js.map

/***/ }),

/***/ 35687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsVertex: () => (/* binding */ shadowsVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const shadowsVertex = { name, shader };
//# sourceMappingURL=shadowsVertex.js.map

/***/ }),

/***/ 96044:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export subSurfaceScatteringFunctions */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "subSurfaceScatteringFunctions";
const shader = `bool testLightingForSSS(float diffusionProfile)
{return diffusionProfile<1.;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const subSurfaceScatteringFunctions = { name, shader };
//# sourceMappingURL=subSurfaceScatteringFunctions.js.map

/***/ }),

/***/ 94381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export uvAttributeDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "uvAttributeDeclaration";
const shader = `#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const uvAttributeDeclaration = { name, shader };
//# sourceMappingURL=uvAttributeDeclaration.js.map

/***/ }),

/***/ 4981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export uvVariableDeclaration */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "uvVariableDeclaration";
const shader = `#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const uvVariableDeclaration = { name, shader };
//# sourceMappingURL=uvVariableDeclaration.js.map

/***/ }),

/***/ 94483:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export vertexColorMixing */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "vertexColorMixing";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.IncludesShadersStore[name] = shader;
/** @internal */
const vertexColorMixing = { name, shader };
//# sourceMappingURL=vertexColorMixing.js.map

/***/ }),

/***/ 69723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anaglyphPixelShader: () => (/* binding */ anaglyphPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "anaglyphPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D leftSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 leftFrag=texture2D(leftSampler,vUV);leftFrag=vec4(1.0,leftFrag.g,leftFrag.b,1.0);vec4 rightFrag=texture2D(textureSampler,vUV);rightFrag=vec4(rightFrag.r,1.0,1.0,1.0);gl_FragColor=vec4(rightFrag.rgb*leftFrag.rgb,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const anaglyphPixelShader = { name, shader };
//# sourceMappingURL=anaglyph.fragment.js.map

/***/ }),

/***/ 58057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  backgroundPixelShader: () => (/* binding */ backgroundPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundFragmentDeclaration.js
// Do not edit.

const backgroundFragmentDeclaration_name = "backgroundFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vPrimaryColor;
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
uniform vec4 vPrimaryColorShadow;
#endif
uniform float shadowLevel;uniform float alpha;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#endif
#if defined(REFLECTIONFRESNEL) || defined(OPACITYFRESNEL)
uniform vec3 vBackgroundCenter;
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 vReflectionControl;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION)
uniform mat4 view;
#endif
#ifdef PROJECTED_GROUND
uniform vec2 projectedGroundInfos;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[backgroundFragmentDeclaration_name] = shader;
/** @internal */
const backgroundFragmentDeclaration = { name: backgroundFragmentDeclaration_name, shader };
//# sourceMappingURL=backgroundFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundUboDeclaration.js
var backgroundUboDeclaration = __webpack_require__(86722);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js
var reflectionFunction = __webpack_require__(18223);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(89392);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js
var lightFragmentDeclaration = __webpack_require__(92270);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js
var lightUboDeclaration = __webpack_require__(22448);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js
var lightsFragmentFunctions = __webpack_require__(21962);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js
var shadowsFragmentFunctions = __webpack_require__(66812);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(64017);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/intersectionFunctions.js
// Do not edit.

const intersectionFunctions_name = "intersectionFunctions";
const intersectionFunctions_shader = `float diskIntersectWithBackFaceCulling(vec3 ro,vec3 rd,vec3 c,float r) {float d=rd.y;if(d>0.0) { return 1e6; }
vec3 o=ro-c;float t=-o.y/d;vec3 q=o+rd*t;return (dot(q,q)<r*r) ? t : 1e6;}
vec2 sphereIntersect(vec3 ro,vec3 rd,vec3 ce,float ra) {vec3 oc=ro-ce;float b=dot(oc,rd);float c=dot(oc,oc)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}
vec2 sphereIntersectFromOrigin(vec3 ro,vec3 rd,float ra) {float b=dot(ro,rd);float c=dot(ro,ro)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[intersectionFunctions_name] = intersectionFunctions_shader;
/** @internal */
const intersectionFunctions = { name: intersectionFunctions_name, shader: intersectionFunctions_shader };
//# sourceMappingURL=intersectionFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js
var lightFragment = __webpack_require__(37256);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
;// ./node_modules/@babylonjs/core/Shaders/background.fragment.js
// Do not edit.



















const background_fragment_name = "backgroundPixelShader";
const background_fragment_shader = `#ifdef TEXTURELODSUPPORT
#extension GL_EXT_shader_texture_lod : enable
#endif
precision highp float;
#include<__decl__backgroundFragment>
#include<helperFunctions>
varying vec3 vPositionW;
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif 
#ifdef MAINUV2 
varying vec2 vMainUV2; 
#endif 
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vec2 vDiffuseUV;
#endif
uniform sampler2D diffuseSampler;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
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
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
vec3 fresnelSchlickEnvironmentGGX(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
vec3 project(vec3 viewDirectionW,vec3 eyePosition) {float radius=projectedGroundInfos.x;float height=projectedGroundInfos.y;vec3 camDir=-viewDirectionW;float skySphereDistance=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;vec3 skySpherePositionW=eyePosition+camDir*skySphereDistance;vec3 p=normalize(skySpherePositionW);eyePosition.y-=height;float sIntersection=sphereIntersectFromOrigin(eyePosition,p,radius).x;vec3 h=vec3(0.0,-height,0.0);float dIntersection=diskIntersectWithBackFaceCulling(eyePosition,p,h,radius);p=(eyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(0.0,1.0,0.0);
#endif
float shadow=1.;float globalShadow=0.;float shadowLightCount=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
vec4 reflectionColor=vec4(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
vec3 reflectionVector=project(viewDirectionW,vEyePosition.xyz);reflectionVector=vec3(reflectionMatrix*vec4(reflectionVector,1.));
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=reflectionVector;
#else
vec2 reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
float reflectionLOD=vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(vReflectionMicrosurfaceInfos.x)*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;reflectionColor=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#else
float lodReflectionNormalized=saturate(reflectionLOD);float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 reflectionSpecularMid=sampleReflection(reflectionSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
vec4 reflectionSample=sampleReflection(reflectionSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef GAMMAREFLECTION
reflectionColor.rgb=toLinearSpace(reflectionColor.rgb);
#endif
#ifdef REFLECTIONBGR
reflectionColor.rgb=reflectionColor.bgr;
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#endif
vec3 diffuseColor=vec3(1.,1.,1.);float finalAlpha=alpha;
#ifdef DIFFUSE
vec4 diffuseMap=texture2D(diffuseSampler,vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap.rgb=toLinearSpace(diffuseMap.rgb);
#endif
diffuseMap.rgb*=vDiffuseInfos.y;
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
vec3 colorBase=diffuseColor;
#else
vec3 colorBase=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,0.0);
#ifdef USERGBCOLOR
vec3 finalColor=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
vec3 mainColor=mix(vPrimaryColorShadow.rgb,vPrimaryColor.rgb,colorBase);
#else
vec3 mainColor=vPrimaryColor.rgb;
#endif
vec3 finalColor=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
vec3 reflectionAmount=vReflectionControl.xxx;vec3 reflectionReflectance0=vReflectionControl.yyy;vec3 reflectionReflectance90=vReflectionControl.zzz;float VdotN=dot(normalize(vEyePosition.xyz),normalW);vec3 planarReflectionFresnel=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
float reflectionDistanceFalloff=1.0-saturate(length(vPositionW.xyz-vBackgroundCenter)*vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturate(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
float viewAngleToFloor=dot(normalW,normalize(vEyePosition.xyz-vBackgroundCenter));const float startAngle=0.1;float fadeFactor=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*shadowLevel,finalColor,globalShadow);
#endif
vec4 color=vec4(finalColor,finalAlpha);
#else
vec4 color=vec4(vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color.rgb=clamp(color.rgb,0.,30.0);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#ifdef NOISE
color.rgb+=dither(vPositionW.xy,0.5);color=max(color,0.0);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[background_fragment_name] = background_fragment_shader;
/** @internal */
const backgroundPixelShader = { name: background_fragment_name, shader: background_fragment_shader };
//# sourceMappingURL=background.fragment.js.map

/***/ }),

/***/ 11114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  backgroundVertexShader: () => (/* binding */ backgroundVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundVertexDeclaration.js
// Do not edit.

const backgroundVertexDeclaration_name = "backgroundVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform float shadowLevel;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[backgroundVertexDeclaration_name] = shader;
/** @internal */
const backgroundVertexDeclaration = { name: backgroundVertexDeclaration_name, shader };
//# sourceMappingURL=backgroundVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundUboDeclaration.js
var backgroundUboDeclaration = __webpack_require__(86722);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js
var lightVxFragmentDeclaration = __webpack_require__(69440);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js
var lightVxUboDeclaration = __webpack_require__(4662);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(16470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js
var shadowsVertex = __webpack_require__(35687);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/background.vertex.js
// Do not edit.



















const background_vertex_name = "backgroundVertexShader";
const background_vertex_shader = `precision highp float;
#include<__decl__backgroundVertex>
#include<helperFunctions>
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vec2 vDiffuseUV;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*finalWorld*vec4(position,1.0);} else {gl_Position=viewProjectionR*finalWorld*vec4(position,1.0);}
#else
gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#endif
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(position,0.0)));
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
mat3 screenToWorld=inverseMat3(mat3(finalWorld*viewProjection));vec3 segment=mix(vDirectionW,screenToWorld*vec3(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vDirectionW=normalize(segment);} else {vDirectionW=normalize(vDirectionW+(vDirectionW-segment));}
#endif
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uv;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vColor=color;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[background_vertex_name] = background_vertex_shader;
/** @internal */
const backgroundVertexShader = { name: background_vertex_name, shader: background_vertex_shader };
//# sourceMappingURL=background.vertex.js.map

/***/ }),

/***/ 18516:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bilateralBlurPixelShader: () => (/* binding */ bilateralBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bilateralBlurPixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform int filterSize;uniform vec2 blurDir;uniform float depthThreshold;uniform float normalThreshold;varying vec2 vUV;void main(void) {vec3 color=textureLod(textureSampler,vUV,0.).rgb;float depth=textureLod(depthSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(color,1.);return;}
vec3 normal=textureLod(normalSampler,vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
float sigma=float(filterSize);float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sigmaNormal=normalThreshold;float two_sigmaNormal2=2.0*sigmaNormal*sigmaNormal;vec3 sum=vec3(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec3 sampleColor=textureLod(textureSampler,vUV+coords*blurDir,0.).rgb;float sampleDepth=textureLod(depthSampler,vUV+coords*blurDir,0.).r;vec3 sampleNormal=textureLod(normalSampler,vUV+coords*blurDir,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
float r=dot(coords,coords);float w=exp(-r/two_sigma2);float depthDelta=abs(sampleDepth-depth);float wd=step(depthDelta,depthThreshold);vec3 normalDelta=abs(sampleNormal-normal);float wn=step(normalDelta.x+normalDelta.y+normalDelta.z,normalThreshold);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}
glFragColor=vec4(sum/wsum,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const bilateralBlurPixelShader = { name, shader };
//# sourceMappingURL=bilateralBlur.fragment.js.map

/***/ }),

/***/ 97621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bilateralBlurQualityPixelShader: () => (/* binding */ bilateralBlurQualityPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bilateralBlurQualityPixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform int filterSize;uniform vec2 blurDir;uniform float depthThreshold;uniform float normalThreshold;varying vec2 vUV;void main(void) {vec3 color=textureLod(textureSampler,vUV,0.).rgb;float depth=textureLod(depthSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(color,1.);return;}
vec3 normal=textureLod(normalSampler,vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
float sigma=float(filterSize);float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sigmaNormal=normalThreshold;float two_sigmaNormal2=2.0*sigmaNormal*sigmaNormal;vec3 sum=vec3(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {for (int y=-filterSize; y<=filterSize; ++y) {vec2 coords=vec2(x,y)*blurDir;vec3 sampleColor=textureLod(textureSampler,vUV+coords,0.).rgb;float sampleDepth=textureLod(depthSampler,vUV+coords,0.).r;vec3 sampleNormal=textureLod(normalSampler,vUV+coords,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
float r=dot(coords,coords);float w=exp(-r/two_sigma2);float rDepth=sampleDepth-depth;float wd=exp(-rDepth*rDepth/two_sigmaDepth2);float rNormal=abs(sampleNormal.x-normal.x)+abs(sampleNormal.y-normal.y)+abs(sampleNormal.z-normal.z);float wn=exp(-rNormal*rNormal/two_sigmaNormal2);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}}
glFragColor=vec4(sum/wsum,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const bilateralBlurQualityPixelShader = { name, shader };
//# sourceMappingURL=bilateralBlurQuality.fragment.js.map

/***/ }),

/***/ 3996:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blackAndWhitePixelShader: () => (/* binding */ blackAndWhitePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "blackAndWhitePixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform float degree;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec3 color=texture2D(textureSampler,vUV).rgb;float luminance=dot(color,vec3(0.3,0.59,0.11)); 
vec3 blackAndWhite=vec3(luminance,luminance,luminance);gl_FragColor=vec4(color-((color-blackAndWhite)*degree),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const blackAndWhitePixelShader = { name, shader };
//# sourceMappingURL=blackAndWhite.fragment.js.map

/***/ }),

/***/ 39336:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bloomMergePixelShader: () => (/* binding */ bloomMergePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "bloomMergePixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D bloomBlur;varying vec2 vUV;uniform float bloomWeight;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec3 blurred=texture2D(bloomBlur,vUV).rgb;gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight); }
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const bloomMergePixelShader = { name, shader };
//# sourceMappingURL=bloomMerge.fragment.js.map

/***/ }),

/***/ 33495:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  boundingBoxRendererPixelShader: () => (/* binding */ boundingBoxRendererPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererFragmentDeclaration.js
// Do not edit.

const boundingBoxRendererFragmentDeclaration_name = "boundingBoxRendererFragmentDeclaration";
const shader = `uniform vec4 color;
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[boundingBoxRendererFragmentDeclaration_name] = shader;
/** @internal */
const boundingBoxRendererFragmentDeclaration = { name: boundingBoxRendererFragmentDeclaration_name, shader };
//# sourceMappingURL=boundingBoxRendererFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js
var boundingBoxRendererUboDeclaration = __webpack_require__(66566);
;// ./node_modules/@babylonjs/core/Shaders/boundingBoxRenderer.fragment.js
// Do not edit.



const boundingBoxRenderer_fragment_name = "boundingBoxRendererPixelShader";
const boundingBoxRenderer_fragment_shader = `#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[boundingBoxRenderer_fragment_name] = boundingBoxRenderer_fragment_shader;
/** @internal */
const boundingBoxRendererPixelShader = { name: boundingBoxRenderer_fragment_name, shader: boundingBoxRenderer_fragment_shader };
//# sourceMappingURL=boundingBoxRenderer.fragment.js.map

/***/ }),

/***/ 82187:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  boundingBoxRendererVertexShader: () => (/* binding */ boundingBoxRendererVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererVertexDeclaration.js
// Do not edit.

const boundingBoxRendererVertexDeclaration_name = "boundingBoxRendererVertexDeclaration";
const shader = `uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[boundingBoxRendererVertexDeclaration_name] = shader;
/** @internal */
const boundingBoxRendererVertexDeclaration = { name: boundingBoxRendererVertexDeclaration_name, shader };
//# sourceMappingURL=boundingBoxRendererVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js
var boundingBoxRendererUboDeclaration = __webpack_require__(66566);
;// ./node_modules/@babylonjs/core/Shaders/boundingBoxRenderer.vertex.js
// Do not edit.



const boundingBoxRenderer_vertex_name = "boundingBoxRendererVertexShader";
const boundingBoxRenderer_vertex_shader = `attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);vec4 worldPos=finalWorld*vec4(position,1.0);
#else
vec4 worldPos=world*vec4(position,1.0);
#endif
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[boundingBoxRenderer_vertex_name] = boundingBoxRenderer_vertex_shader;
/** @internal */
const boundingBoxRendererVertexShader = { name: boundingBoxRenderer_vertex_name, shader: boundingBoxRenderer_vertex_shader };
//# sourceMappingURL=boundingBoxRenderer.vertex.js.map

/***/ }),

/***/ 32048:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chromaticAberrationPixelShader: () => (/* binding */ chromaticAberrationPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "chromaticAberrationPixelShader";
const shader = `uniform sampler2D textureSampler; 
uniform float chromatic_aberration;uniform float radialIntensity;uniform vec2 direction;uniform vec2 centerPosition;uniform float screen_width;uniform float screen_height;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 centered_screen_pos=vec2(vUV.x-centerPosition.x,vUV.y-centerPosition.y);vec2 directionOfEffect=direction;if(directionOfEffect.x==0. && directionOfEffect.y==0.){directionOfEffect=normalize(centered_screen_pos);}
float radius2=centered_screen_pos.x*centered_screen_pos.x
+ centered_screen_pos.y*centered_screen_pos.y;float radius=sqrt(radius2);vec3 ref_indices=vec3(-0.3,0.0,0.3);float ref_shiftX=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.x/screen_width;float ref_shiftY=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.y/screen_height;vec2 ref_coords_r=vec2(vUV.x+ref_indices.r*ref_shiftX,vUV.y+ref_indices.r*ref_shiftY*0.5);vec2 ref_coords_g=vec2(vUV.x+ref_indices.g*ref_shiftX,vUV.y+ref_indices.g*ref_shiftY*0.5);vec2 ref_coords_b=vec2(vUV.x+ref_indices.b*ref_shiftX,vUV.y+ref_indices.b*ref_shiftY*0.5);vec4 r=texture2D(textureSampler,ref_coords_r);vec4 g=texture2D(textureSampler,ref_coords_g);vec4 b=texture2D(textureSampler,ref_coords_b);float a=clamp(r.a+g.a+b.a,0.,1.);gl_FragColor=vec4(r.r,g.g,b.b,a);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const chromaticAberrationPixelShader = { name, shader };
//# sourceMappingURL=chromaticAberration.fragment.js.map

/***/ }),

/***/ 97694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleOfConfusionPixelShader: () => (/* binding */ circleOfConfusionPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "circleOfConfusionPixelShader";
const shader = `uniform sampler2D depthSampler;varying vec2 vUV;
#ifndef COC_DEPTH_NOT_NORMALIZED
uniform vec2 cameraMinMaxZ;
#endif
uniform float focusDistance;uniform float cocPrecalculation;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float depth=texture2D(depthSampler,vUV).r;
#define CUSTOM_COC_DEPTH
#ifdef COC_DEPTH_NOT_NORMALIZED
float pixelDistance=depth*1000.0;
#else
float pixelDistance=(cameraMinMaxZ.x+cameraMinMaxZ.y*depth)*1000.0; 
#endif
#define CUSTOM_COC_PIXELDISTANCE
float coc=abs(cocPrecalculation*((focusDistance-pixelDistance)/pixelDistance));coc=clamp(coc,0.0,1.0);gl_FragColor=vec4(coc,coc,coc,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const circleOfConfusionPixelShader = { name, shader };
//# sourceMappingURL=circleOfConfusion.fragment.js.map

/***/ }),

/***/ 15450:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorPixelShader: () => (/* binding */ colorPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7806);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7412);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2360);
// Do not edit.





const name = "colorPixelShader";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vec4 vColor;
#else
uniform vec4 color;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
gl_FragColor=vColor;
#else
gl_FragColor=color;
#endif
#include<fogFragment>(color,gl_FragColor)
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const colorPixelShader = { name, shader };
//# sourceMappingURL=color.fragment.js.map

/***/ }),

/***/ 5216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorVertexShader: () => (/* binding */ colorVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71636);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86560);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65523);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47314);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16470);
/* harmony import */ var _ShadersInclude_vertexColorMixing_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94483);
// Do not edit.












const name = "colorVertexShader";
const shader = `attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform mat4 view;
#endif
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const colorVertexShader = { name, shader };
//# sourceMappingURL=color.vertex.js.map

/***/ }),

/***/ 37670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorCorrectionPixelShader: () => (/* binding */ colorCorrectionPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "colorCorrectionPixelShader";
const shader = `uniform sampler2D textureSampler; 
uniform sampler2D colorTable; 
varying vec2 vUV;const float SLICE_COUNT=16.0; 
#define inline
vec4 sampleAs3DTexture(sampler2D textureSampler,vec3 uv,float width) {float sliceSize=1.0/width; 
float slicePixelSize=sliceSize/width; 
float sliceInnerSize=slicePixelSize*(width-1.0); 
float zSlice0=min(floor(uv.z*width),width-1.0);float zSlice1=min(zSlice0+1.0,width-1.0);float xOffset=slicePixelSize*0.5+uv.x*sliceInnerSize;float s0=xOffset+(zSlice0*sliceSize);float s1=xOffset+(zSlice1*sliceSize);vec4 slice0Color=texture2D(textureSampler,vec2(s0,uv.y));vec4 slice1Color=texture2D(textureSampler,vec2(s1,uv.y));float zOffset=mod(uv.z*width,1.0);vec4 result=mix(slice0Color,slice1Color,zOffset);return result;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 screen_color=texture2D(textureSampler,vUV);gl_FragColor=sampleAs3DTexture(colorTable,screen_color.rgb,SLICE_COUNT);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const colorCorrectionPixelShader = { name, shader };
//# sourceMappingURL=colorCorrection.fragment.js.map

/***/ }),

/***/ 51537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convolutionPixelShader: () => (/* binding */ convolutionPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "convolutionPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform float kernel[9];
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 onePixel=vec2(1.0,1.0)/screenSize;vec4 colorSum =
texture2D(textureSampler,vUV+onePixel*vec2(-1,-1))*kernel[0] +
texture2D(textureSampler,vUV+onePixel*vec2(0,-1))*kernel[1] +
texture2D(textureSampler,vUV+onePixel*vec2(1,-1))*kernel[2] +
texture2D(textureSampler,vUV+onePixel*vec2(-1,0))*kernel[3] +
texture2D(textureSampler,vUV+onePixel*vec2(0,0))*kernel[4] +
texture2D(textureSampler,vUV+onePixel*vec2(1,0))*kernel[5] +
texture2D(textureSampler,vUV+onePixel*vec2(-1,1))*kernel[6] +
texture2D(textureSampler,vUV+onePixel*vec2(0,1))*kernel[7] +
texture2D(textureSampler,vUV+onePixel*vec2(1,1))*kernel[8];float kernelWeight =
kernel[0] +
kernel[1] +
kernel[2] +
kernel[3] +
kernel[4] +
kernel[5] +
kernel[6] +
kernel[7] +
kernel[8];if (kernelWeight<=0.0) {kernelWeight=1.0;}
gl_FragColor=vec4((colorSum/kernelWeight).rgb,1);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const convolutionPixelShader = { name, shader };
//# sourceMappingURL=convolution.fragment.js.map

/***/ }),

/***/ 47383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTexture3DLayerToTexturePixelShader: () => (/* binding */ copyTexture3DLayerToTexturePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "copyTexture3DLayerToTexturePixelShader";
const shader = `precision highp sampler3D;uniform sampler3D textureSampler;uniform int layerNum;varying vec2 vUV;void main(void) {vec3 coord=vec3(0.0,0.0,float(layerNum));coord.xy=vec2(vUV.x,vUV.y)*vec2(textureSize(textureSampler,0).xy);vec3 color=texelFetch(textureSampler,ivec3(coord),0).rgb;gl_FragColor=vec4(color,1);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const copyTexture3DLayerToTexturePixelShader = { name, shader };
//# sourceMappingURL=copyTexture3DLayerToTexture.fragment.js.map

/***/ }),

/***/ 45963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTextureToTexturePixelShader: () => (/* binding */ copyTextureToTexturePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "copyTextureToTexturePixelShader";
const shader = `uniform float conversion;uniform sampler2D textureSampler;varying vec2 vUV;
#include<helperFunctions>
void main(void) 
{vec4 color=texture2D(textureSampler,vUV);
#ifdef DEPTH_TEXTURE
gl_FragDepth=color.r;
#else
if (conversion==1.) {color=toLinearSpace(color);} else if (conversion==2.) {color=toGammaSpace(color);}
gl_FragColor=color;
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const copyTextureToTexturePixelShader = { name, shader };
//# sourceMappingURL=copyTextureToTexture.fragment.js.map

/***/ }),

/***/ 42319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  defaultPixelShader: () => (/* binding */ defaultPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js
var decalFragmentDeclaration = __webpack_require__(48109);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultFragmentDeclaration.js
// Do not edit.


const defaultFragmentDeclaration_name = "defaultFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;uniform vec4 emissiveRightColor;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[defaultFragmentDeclaration_name] = shader;
/** @internal */
const defaultFragmentDeclaration = { name: defaultFragmentDeclaration_name, shader };
//# sourceMappingURL=defaultFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultUboDeclaration.js
var defaultUboDeclaration = __webpack_require__(81438);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassDeclaration.js
var prePassDeclaration = __webpack_require__(42694);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/oitDeclaration.js
var oitDeclaration = __webpack_require__(89986);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js
var lightFragmentDeclaration = __webpack_require__(92270);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js
var lightUboDeclaration = __webpack_require__(22448);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js
var lightsFragmentFunctions = __webpack_require__(21962);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js
var shadowsFragmentFunctions = __webpack_require__(66812);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js
var samplerFragmentDeclaration = __webpack_require__(63022);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fresnelFunction.js
var fresnelFunction = __webpack_require__(51339);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js
var reflectionFunction = __webpack_require__(18223);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(89392);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(64017);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js
var bumpFragmentMainFunctions = __webpack_require__(17494);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js
var bumpFragmentFunctions = __webpack_require__(8269);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js
var bumpFragment = __webpack_require__(27018);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragment.js
var decalFragment = __webpack_require__(11205);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/depthPrePass.js
var depthPrePass = __webpack_require__(1037);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js
var lightFragment = __webpack_require__(37256);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/oitFragment.js
var oitFragment = __webpack_require__(94436);
;// ./node_modules/@babylonjs/core/Shaders/default.fragment.js
// Do not edit.





























const default_fragment_name = "defaultPixelShader";
const default_fragment_shader = `#define CUSTOM_FRAGMENT_EXTENSION
#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
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
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
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
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {frontColor.rgb+=color.rgb*color.a*alphaMultiplier;frontColor.a=1.0-alphaMultiplier*(1.0-color.a);} else {backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[default_fragment_name] = default_fragment_shader;
/** @internal */
const defaultPixelShader = { name: default_fragment_name, shader: default_fragment_shader };
//# sourceMappingURL=default.fragment.js.map

/***/ }),

/***/ 14268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  defaultVertexShader: () => (/* binding */ defaultVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js
var decalVertexDeclaration = __webpack_require__(96019);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultVertexDeclaration.js
// Do not edit.


const defaultVertexDeclaration_name = "defaultVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[defaultVertexDeclaration_name] = shader;
/** @internal */
const defaultVertexDeclaration = { name: defaultVertexDeclaration_name, shader };
//# sourceMappingURL=defaultVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultUboDeclaration.js
var defaultUboDeclaration = __webpack_require__(81438);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/uvAttributeDeclaration.js
var uvAttributeDeclaration = __webpack_require__(94381);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertexDeclaration.js
var prePassVertexDeclaration = __webpack_require__(78328);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexDeclaration.js
var samplerVertexDeclaration = __webpack_require__(85136);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertexDeclaration.js
var bumpVertexDeclaration = __webpack_require__(56390);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js
var lightVxFragmentDeclaration = __webpack_require__(69440);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js
var lightVxUboDeclaration = __webpack_require__(4662);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(90738);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(15060);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertex.js
var prePassVertex = __webpack_require__(65438);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/uvVariableDeclaration.js
var uvVariableDeclaration = __webpack_require__(4981);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexImplementation.js
var samplerVertexImplementation = __webpack_require__(41316);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertex.js
var bumpVertex = __webpack_require__(19440);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(16470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js
var shadowsVertex = __webpack_require__(35687);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/vertexColorMixing.js
var vertexColorMixing = __webpack_require__(94483);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pointCloudVertex.js
var pointCloudVertex = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/default.vertex.js
// Do not edit.


































const default_vertex_name = "defaultVertexShader";
const default_vertex_shader = `#define CUSTOM_VERTEX_EXTENSION
#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
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
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2Updated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2Updated;
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
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[default_vertex_name] = default_vertex_shader;
/** @internal */
const defaultVertexShader = { name: default_vertex_name, shader: default_vertex_shader };
//# sourceMappingURL=default.vertex.js.map

/***/ }),

/***/ 88852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPixelShader: () => (/* binding */ depthPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_packingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8334);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7412);
// Do not edit.




const name = "depthPixelShader";
const shader = `#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const depthPixelShader = { name, shader };
//# sourceMappingURL=depth.fragment.js.map

/***/ }),

/***/ 9977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  depthVertexShader: () => (/* binding */ depthVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(90738);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pointCloudVertexDeclaration.js
// Do not edit.

const pointCloudVertexDeclaration_name = "pointCloudVertexDeclaration";
const shader = `#ifdef POINTSIZE
uniform float pointSize;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pointCloudVertexDeclaration_name] = shader;
/** @internal */
const pointCloudVertexDeclaration = { name: pointCloudVertexDeclaration_name, shader };
//# sourceMappingURL=pointCloudVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(15060);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pointCloudVertex.js
var pointCloudVertex = __webpack_require__(91211);
;// ./node_modules/@babylonjs/core/Shaders/depth.vertex.js
// Do not edit.















const depth_vertex_name = "depthVertexShader";
const depth_vertex_shader = `attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;varying vec4 vViewPos;
#endif
#include<pointCloudVertexDeclaration>
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<pointCloudVertex>
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[depth_vertex_name] = depth_vertex_shader;
/** @internal */
const depthVertexShader = { name: depth_vertex_name, shader: depth_vertex_shader };
//# sourceMappingURL=depth.vertex.js.map

/***/ }),

/***/ 69386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthBoxBlurPixelShader: () => (/* binding */ depthBoxBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthBoxBlurPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 colorDepth=vec4(0.0);for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const depthBoxBlurPixelShader = { name, shader };
//# sourceMappingURL=depthBoxBlur.fragment.js.map

/***/ }),

/***/ 49731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export depthOfFieldPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthOfFieldPixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D highlightsSampler;uniform sampler2D depthSampler;uniform sampler2D grainSampler;uniform float grain_amount;uniform bool blur_noise;uniform float screen_width;uniform float screen_height;uniform float distortion;uniform bool dof_enabled;uniform float screen_distance; 
uniform float aperture;uniform float darken;uniform float edge_blur;uniform bool highlights;uniform float near;uniform float far;varying vec2 vUV;
#define PI 3.14159265
#define TWOPI 6.28318530
#define inverse_focal_length 0.1 
vec2 centered_screen_pos;vec2 distorted_coords;float radius2;float radius;vec2 rand(vec2 co)
{float noise1=(fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453));float noise2=(fract(sin(dot(co,vec2(12.9898,78.233)*2.0))*43758.5453));return clamp(vec2(noise1,noise2),0.0,1.0);}
vec2 getDistortedCoords(vec2 coords) {if (distortion==0.0) { return coords; }
vec2 direction=1.0*normalize(centered_screen_pos);vec2 dist_coords=vec2(0.5,0.5);dist_coords.x=0.5+direction.x*radius2*1.0;dist_coords.y=0.5+direction.y*radius2*1.0;float dist_amount=clamp(distortion*0.23,0.0,1.0);dist_coords=mix(coords,dist_coords,dist_amount);return dist_coords;}
float sampleScreen(inout vec4 color,in vec2 offset,in float weight) {vec2 coords=distorted_coords;float angle=rand(coords*100.0).x*TWOPI;coords+=vec2(offset.x*cos(angle)-offset.y*sin(angle),offset.x*sin(angle)+offset.y*cos(angle));color+=texture2D(textureSampler,coords)*weight;return weight;}
float getBlurLevel(float size) {return min(3.0,ceil(size/1.0));}
vec4 getBlurColor(float size) {vec4 col=texture2D(textureSampler,distorted_coords);float blur_level=getBlurLevel(size);float w=(size/screen_width);float h=(size/screen_height);float total_weight=1.0;vec2 sample_coords;total_weight+=sampleScreen(col,vec2(-0.50*w,0.24*h),0.93);total_weight+=sampleScreen(col,vec2(0.30*w,-0.75*h),0.90);total_weight+=sampleScreen(col,vec2(0.36*w,0.96*h),0.87);total_weight+=sampleScreen(col,vec2(-1.08*w,-0.55*h),0.85);total_weight+=sampleScreen(col,vec2(1.33*w,-0.37*h),0.83);total_weight+=sampleScreen(col,vec2(-0.82*w,1.31*h),0.80);total_weight+=sampleScreen(col,vec2(-0.31*w,-1.67*h),0.78);total_weight+=sampleScreen(col,vec2(1.47*w,1.11*h),0.76);total_weight+=sampleScreen(col,vec2(-1.97*w,0.19*h),0.74);total_weight+=sampleScreen(col,vec2(1.42*w,-1.57*h),0.72);if (blur_level>1.0) {total_weight+=sampleScreen(col,vec2(0.01*w,2.25*h),0.70);total_weight+=sampleScreen(col,vec2(-1.62*w,-1.74*h),0.67);total_weight+=sampleScreen(col,vec2(2.49*w,0.20*h),0.65);total_weight+=sampleScreen(col,vec2(-2.07*w,1.61*h),0.63);total_weight+=sampleScreen(col,vec2(0.46*w,-2.70*h),0.61);total_weight+=sampleScreen(col,vec2(1.55*w,2.40*h),0.59);total_weight+=sampleScreen(col,vec2(-2.88*w,-0.75*h),0.56);total_weight+=sampleScreen(col,vec2(2.73*w,-1.44*h),0.54);total_weight+=sampleScreen(col,vec2(-1.08*w,3.02*h),0.52);total_weight+=sampleScreen(col,vec2(-1.28*w,-3.05*h),0.49);}
if (blur_level>2.0) {total_weight+=sampleScreen(col,vec2(3.11*w,1.43*h),0.46);total_weight+=sampleScreen(col,vec2(-3.36*w,1.08*h),0.44);total_weight+=sampleScreen(col,vec2(1.80*w,-3.16*h),0.41);total_weight+=sampleScreen(col,vec2(0.83*w,3.65*h),0.38);total_weight+=sampleScreen(col,vec2(-3.16*w,-2.19*h),0.34);total_weight+=sampleScreen(col,vec2(3.92*w,-0.53*h),0.31);total_weight+=sampleScreen(col,vec2(-2.59*w,3.12*h),0.26);total_weight+=sampleScreen(col,vec2(-0.20*w,-4.15*h),0.22);total_weight+=sampleScreen(col,vec2(3.02*w,3.00*h),0.15);}
col/=total_weight; 
if (darken>0.0) {col.rgb*=clamp(0.3,1.0,1.05-size*0.5*darken);}
return col;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{centered_screen_pos=vec2(vUV.x-0.5,vUV.y-0.5);radius2=centered_screen_pos.x*centered_screen_pos.x+centered_screen_pos.y*centered_screen_pos.y;radius=sqrt(radius2);distorted_coords=getDistortedCoords(vUV); 
vec2 texels_coords=vec2(vUV.x*screen_width,vUV.y*screen_height); 
float depth=texture2D(depthSampler,distorted_coords).r; 
float distance=near+(far-near)*depth; 
vec4 color=texture2D(textureSampler,vUV); 
float coc=abs(aperture*(screen_distance*(inverse_focal_length-1.0/distance)-1.0));if (dof_enabled==false || coc<0.07) { coc=0.0; }
float edge_blur_amount=0.0;if (edge_blur>0.0) {edge_blur_amount=clamp((radius*2.0-1.0+0.15*edge_blur)*1.5,0.0,1.0)*1.3;}
float blur_amount=max(edge_blur_amount,coc);if (blur_amount==0.0) {gl_FragColor=texture2D(textureSampler,distorted_coords);}
else {gl_FragColor=getBlurColor(blur_amount*1.7);if (highlights) {gl_FragColor.rgb+=clamp(coc,0.0,1.0)*texture2D(highlightsSampler,distorted_coords).rgb;}
if (blur_noise) {vec2 noise=rand(distorted_coords)*0.01*blur_amount;vec2 blurred_coord=vec2(distorted_coords.x+noise.x,distorted_coords.y+noise.y);gl_FragColor=0.04*texture2D(textureSampler,blurred_coord)+0.96*gl_FragColor;}}
if (grain_amount>0.0) {vec4 grain_color=texture2D(grainSampler,texels_coords*0.003);gl_FragColor.rgb+=(-0.5+grain_color.rgb)*0.30*grain_amount;}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const depthOfFieldPixelShader = { name, shader };
//# sourceMappingURL=depthOfField.fragment.js.map

/***/ }),

/***/ 19411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthOfFieldMergePixelShader: () => (/* binding */ depthOfFieldMergePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "depthOfFieldMergePixelShader";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;uniform sampler2D circleOfConfusionSampler;uniform sampler2D blurStep0;
#if BLUR_LEVEL>0
uniform sampler2D blurStep1;
#endif
#if BLUR_LEVEL>1
uniform sampler2D blurStep2;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float coc=TEXTUREFUNC(circleOfConfusionSampler,vUV,0.0).r;
#if BLUR_LEVEL==0
vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);gl_FragColor=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL==1
if(coc<0.5){vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(original,blurred1,coc/0.5);}else{vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(blurred1,blurred0,(coc-0.5)/0.5);}
#endif
#if BLUR_LEVEL==2
if(coc<0.33){vec4 original=TEXTUREFUNC(textureSampler,vUV,0.0);vec4 blurred2=TEXTUREFUNC(blurStep2,vUV,0.0);gl_FragColor=mix(original,blurred2,coc/0.33);}else if(coc<0.66){vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);vec4 blurred2=TEXTUREFUNC(blurStep2,vUV,0.0);gl_FragColor=mix(blurred2,blurred1,(coc-0.33)/0.33);}else{vec4 blurred0=TEXTUREFUNC(blurStep0,vUV,0.0);vec4 blurred1=TEXTUREFUNC(blurStep1,vUV,0.0);gl_FragColor=mix(blurred1,blurred0,(coc-0.66)/0.34);}
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const depthOfFieldMergePixelShader = { name, shader };
//# sourceMappingURL=depthOfFieldMerge.fragment.js.map

/***/ }),

/***/ 73718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayPassPixelShader: () => (/* binding */ displayPassPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "displayPassPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D passSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(passSampler,vUV);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const displayPassPixelShader = { name, shader };
//# sourceMappingURL=displayPass.fragment.js.map

/***/ }),

/***/ 50446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export equirectangularPanoramaPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "equirectangularPanoramaPixelShader";
const shader = `#ifdef GL_ES
precision highp float;
#endif
#define M_PI 3.1415926535897932384626433832795
varying vec2 vUV;uniform samplerCube cubeMap;void main(void) {vec2 uv=vUV;float longitude=uv.x*2.*M_PI-M_PI+M_PI/2.;float latitude=(1.-uv.y)*M_PI;vec3 dir=vec3(
- sin( longitude )*sin( latitude ),
cos( latitude ),
- cos( longitude )*sin( latitude )
);normalize( dir );gl_FragColor=textureCube( cubeMap,dir );}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const equirectangularPanoramaPixelShader = { name, shader };
//# sourceMappingURL=equirectangularPanorama.fragment.js.map

/***/ }),

/***/ 55491:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractHighlightsPixelShader: () => (/* binding */ extractHighlightsPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "extractHighlightsPixelShader";
const shader = `#include<helperFunctions>
varying vec2 vUV;uniform sampler2D textureSampler;uniform float threshold;uniform float exposure;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);float luma=dot(LuminanceEncodeApprox,gl_FragColor.rgb*exposure);gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const extractHighlightsPixelShader = { name, shader };
//# sourceMappingURL=extractHighlights.fragment.js.map

/***/ }),

/***/ 97961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterPixelShader: () => (/* binding */ filterPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "filterPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform mat4 kernelMatrix;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec3 baseColor=texture2D(textureSampler,vUV).rgb;vec3 updatedColor=(kernelMatrix*vec4(baseColor,1.0)).rgb;gl_FragColor=vec4(updatedColor,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const filterPixelShader = { name, shader };
//# sourceMappingURL=filter.fragment.js.map

/***/ }),

/***/ 91932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingBilateralBlurPixelShader: () => (/* binding */ fluidRenderingBilateralBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingBilateralBlurPixelShader";
const shader = `uniform sampler2D textureSampler;uniform int maxFilterSize;uniform vec2 blurDir;uniform float projectedParticleConstant;uniform float depthThreshold;varying vec2 vUV;void main(void) {float depth=textureLod(textureSampler,vUV,0.).x;if (depth>=1e6 || depth<=0.) {glFragColor=vec4(vec3(depth),1.);return;}
int filterSize=min(maxFilterSize,int(ceil(projectedParticleConstant/depth)));float sigma=float(filterSize)/3.0;float two_sigma2=2.0*sigma*sigma;float sigmaDepth=depthThreshold/3.0;float two_sigmaDepth2=2.0*sigmaDepth*sigmaDepth;float sum=0.;float wsum=0.;float sumVel=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec2 sampleDepthVel=textureLod(textureSampler,vUV+coords*blurDir,0.).rg;float r=dot(coords,coords);float w=exp(-r/two_sigma2);float rDepth=sampleDepthVel.r-depth;float wd=exp(-rDepth*rDepth/two_sigmaDepth2);sum+=sampleDepthVel.r*w*wd;sumVel+=sampleDepthVel.g*w*wd;wsum+=w*wd;}
glFragColor=vec4(sum/wsum,sumVel/wsum,0.,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingBilateralBlurPixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingBilateralBlur.fragment.js.map

/***/ }),

/***/ 3934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDepthPixelShader: () => (/* binding */ fluidRenderingParticleDepthPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDepthPixelShader";
const shader = `uniform mat4 projection;varying vec2 uv;varying vec3 viewPos;varying float sphereRadius;
#ifdef FLUIDRENDERING_VELOCITY
varying float velocityNorm;
#endif
void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;normal.z=sqrt(1.0-r2);
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
vec4 realViewPos=vec4(viewPos+normal*sphereRadius,1.0);vec4 clipSpacePos=projection*realViewPos;
#ifdef WEBGPU
gl_FragDepth=clipSpacePos.z/clipSpacePos.w;
#else
gl_FragDepth=(clipSpacePos.z/clipSpacePos.w)*0.5+0.5;
#endif
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
glFragColor=vec4(realViewPos.z,velocityNorm,0.,1.);
#else
glFragColor=vec4(realViewPos.z,0.,0.,1.);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleDepthPixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDepth.fragment.js.map

/***/ }),

/***/ 13172:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDepthVertexShader: () => (/* binding */ fluidRenderingParticleDepthVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDepthVertexShader";
const shader = `attribute vec3 position;attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 size;varying vec2 uv;varying vec3 viewPos;varying float sphereRadius;
#ifdef FLUIDRENDERING_VELOCITY
attribute vec3 velocity;varying float velocityNorm;
#endif
void main(void) {vec3 cornerPos;cornerPos.xy=vec2(offset.x-0.5,offset.y-0.5)*size;cornerPos.z=0.0;viewPos=(view*vec4(position,1.0)).xyz;gl_Position=projection*vec4(viewPos+cornerPos,1.0);uv=offset;sphereRadius=size.x/2.0;
#ifdef FLUIDRENDERING_VELOCITY
velocityNorm=length(velocity);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleDepthVertexShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDepth.vertex.js.map

/***/ }),

/***/ 23483:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleDiffusePixelShader: () => (/* binding */ fluidRenderingParticleDiffusePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDiffusePixelShader";
const shader = `uniform float particleAlpha;varying vec2 uv;varying vec3 diffuseColor;void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;glFragColor=vec4(diffuseColor,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleDiffusePixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDiffuse.fragment.js.map

/***/ }),

/***/ 92837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fluidRenderingParticleDiffuseVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleDiffuseVertexShader";
const shader = `attribute vec3 position;attribute vec2 offset;attribute vec4 color;uniform mat4 view;uniform mat4 projection;uniform vec2 size;varying vec2 uv;varying vec3 diffuseColor;void main(void) {vec3 cornerPos;cornerPos.xy=vec2(offset.x-0.5,offset.y-0.5)*size;cornerPos.z=0.0;vec3 viewPos=(view*vec4(position,1.0)).xyz+cornerPos;gl_Position=projection*vec4(viewPos,1.0);uv=offset;diffuseColor=color.rgb;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleDiffuseVertexShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleDiffuse.vertex.js.map

/***/ }),

/***/ 49079:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleThicknessPixelShader: () => (/* binding */ fluidRenderingParticleThicknessPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleThicknessPixelShader";
const shader = `uniform float particleAlpha;varying vec2 uv;void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;float thickness=sqrt(1.0-r2);glFragColor=vec4(vec3(particleAlpha*thickness),1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleThicknessPixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleThickness.fragment.js.map

/***/ }),

/***/ 54577:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingParticleThicknessVertexShader: () => (/* binding */ fluidRenderingParticleThicknessVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingParticleThicknessVertexShader";
const shader = `attribute vec3 position;attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 size;varying vec2 uv;void main(void) {vec3 cornerPos;cornerPos.xy=vec2(offset.x-0.5,offset.y-0.5)*size;cornerPos.z=0.0;vec3 viewPos=(view*vec4(position,1.0)).xyz+cornerPos;gl_Position=projection*vec4(viewPos,1.0);uv=offset;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingParticleThicknessVertexShader = { name, shader };
//# sourceMappingURL=fluidRenderingParticleThickness.vertex.js.map

/***/ }),

/***/ 3399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingRenderPixelShader: () => (/* binding */ fluidRenderingRenderPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingRenderPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
#define IOR 1.333
#define ETA 1.0/IOR
#define F0 0.02
uniform sampler2D textureSampler;uniform sampler2D depthSampler;
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
uniform sampler2D diffuseSampler;
#else
uniform vec3 diffuseColor;
#endif
#ifdef FLUIDRENDERING_FIXED_THICKNESS
uniform float thickness;uniform sampler2D bgDepthSampler;
#else
uniform float minimumThickness;uniform sampler2D thicknessSampler;
#endif
#ifdef FLUIDRENDERING_ENVIRONMENT
uniform samplerCube reflectionSampler;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
uniform sampler2D debugSampler;
#endif
uniform mat4 viewMatrix;uniform mat4 projectionMatrix;uniform mat4 invProjectionMatrix;uniform vec2 texelSize;uniform vec3 dirLight;uniform float cameraFar;uniform float density;uniform float refractionStrength;uniform float fresnelClamp;uniform float specularPower;varying vec2 vUV;vec3 computeViewPosFromUVDepth(vec2 texCoord,float depth) {vec4 ndc;ndc.xy=texCoord*2.0-1.0;
#ifdef FLUIDRENDERING_RHS
ndc.z=-projectionMatrix[2].z+projectionMatrix[3].z/depth;
#else
ndc.z=projectionMatrix[2].z+projectionMatrix[3].z/depth;
#endif
ndc.w=1.0;vec4 eyePos=invProjectionMatrix*ndc;eyePos.xyz/=eyePos.w;return eyePos.xyz;}
vec3 getViewPosFromTexCoord(vec2 texCoord) {float depth=textureLod(depthSampler,texCoord,0.).x;return computeViewPosFromUVDepth(texCoord,depth);}
void main(void) {vec2 texCoord=vUV;
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
vec4 color=texture2D(debugSampler,texCoord);
#ifdef FLUIDRENDERING_DEBUG_DEPTH
glFragColor=vec4(color.rgb/vec3(2.0),1.);if (color.r>0.999 && color.g>0.999) {glFragColor=texture2D(textureSampler,texCoord);}
#else
glFragColor=vec4(color.rgb,1.);if (color.r<0.001 && color.g<0.001 && color.b<0.001) {glFragColor=texture2D(textureSampler,texCoord);}
#endif
return;
#endif
vec2 depthVel=textureLod(depthSampler,texCoord,0.).rg;float depth=depthVel.r;
#ifndef FLUIDRENDERING_FIXED_THICKNESS
float thickness=texture2D(thicknessSampler,texCoord).x;
#else
float bgDepth=texture2D(bgDepthSampler,texCoord).x;float depthNonLinear=projectionMatrix[2].z+projectionMatrix[3].z/depth;depthNonLinear=depthNonLinear*0.5+0.5;
#endif
vec4 backColor=texture2D(textureSampler,texCoord);
#ifndef FLUIDRENDERING_FIXED_THICKNESS
if (depth>=cameraFar || depth<=0. || thickness<=minimumThickness) {
#else
if (depth>=cameraFar || depth<=0. || bgDepth<=depthNonLinear) {
#endif
#ifdef FLUIDRENDERING_COMPOSITE_MODE
glFragColor.rgb=backColor.rgb*backColor.a;glFragColor.a=backColor.a;
#else
glFragColor=backColor;
#endif
return;}
vec3 viewPos=computeViewPosFromUVDepth(texCoord,depth);vec3 ddx=getViewPosFromTexCoord(texCoord+vec2(texelSize.x,0.))-viewPos;vec3 ddy=getViewPosFromTexCoord(texCoord+vec2(0.,texelSize.y))-viewPos;vec3 ddx2=viewPos-getViewPosFromTexCoord(texCoord+vec2(-texelSize.x,0.));if (abs(ddx.z)>abs(ddx2.z)) {ddx=ddx2;}
vec3 ddy2=viewPos-getViewPosFromTexCoord(texCoord+vec2(0.,-texelSize.y));if (abs(ddy.z)>abs(ddy2.z)) {ddy=ddy2;}
vec3 normal=normalize(cross(ddy,ddx));
#ifdef FLUIDRENDERING_RHS
normal=-normal;
#endif
#ifndef WEBGPU
if(isnan(normal.x) || isnan(normal.y) || isnan(normal.z) || isinf(normal.x) || isinf(normal.y) || isinf(normal.z)) {normal=vec3(0.,0.,-1.);}
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_SHOWNORMAL)
glFragColor=vec4(normal*0.5+0.5,1.0);return;
#endif
vec3 rayDir=normalize(viewPos); 
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
vec3 diffuseColor=textureLod(diffuseSampler,texCoord,0.0).rgb;
#endif
vec3 lightDir=normalize(vec3(viewMatrix*vec4(-dirLight,0.)));vec3 H =normalize(lightDir-rayDir);float specular=pow(max(0.0,dot(H,normal)),specularPower);
#ifdef FLUIDRENDERING_DEBUG_DIFFUSERENDERING
float diffuse =max(0.0,dot(lightDir,normal))*1.0;glFragColor=vec4(vec3(0.1) /*ambient*/+vec3(0.42,0.50,1.00)*diffuse+vec3(0,0,0.2)+specular,1.);return;
#endif
vec3 refractionDir=refract(rayDir,normal,ETA);vec4 transmitted=textureLod(textureSampler,vec2(texCoord+refractionDir.xy*thickness*refractionStrength),0.0);
#ifdef FLUIDRENDERING_COMPOSITE_MODE
if (transmitted.a==0.) transmitted.a=thickness;
#endif
vec3 transmittance=exp(-density*thickness*(1.0-diffuseColor)); 
vec3 refractionColor=transmitted.rgb*transmittance;
#ifdef FLUIDRENDERING_ENVIRONMENT
vec3 reflectionDir=reflect(rayDir,normal);vec3 reflectionColor=(textureCube(reflectionSampler,reflectionDir).rgb);float fresnel=clamp(F0+(1.0-F0)*pow(1.0-dot(normal,-rayDir),5.0),0.,fresnelClamp);vec3 finalColor=mix(refractionColor,reflectionColor,fresnel)+specular;
#else
vec3 finalColor=refractionColor+specular;
#endif
#ifdef FLUIDRENDERING_VELOCITY
float velocity=depthVel.g;finalColor=mix(finalColor,vec3(1.0),smoothstep(0.3,1.0,velocity/6.0));
#endif
glFragColor=vec4(finalColor,transmitted.a);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingRenderPixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingRender.fragment.js.map

/***/ }),

/***/ 75679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluidRenderingStandardBlurPixelShader: () => (/* binding */ fluidRenderingStandardBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fluidRenderingStandardBlurPixelShader";
const shader = `uniform sampler2D textureSampler;uniform int filterSize;uniform vec2 blurDir;varying vec2 vUV;void main(void) {vec4 s=textureLod(textureSampler,vUV,0.);if (s.r==0.) {glFragColor=vec4(0.,0.,0.,1.);return;}
float sigma=float(filterSize)/3.0;float twoSigma2=2.0*sigma*sigma;vec4 sum=vec4(0.);float wsum=0.;for (int x=-filterSize; x<=filterSize; ++x) {vec2 coords=vec2(x);vec4 sampl=textureLod(textureSampler,vUV+coords*blurDir,0.);float w=exp(-coords.x*coords.x/twoSigma2);sum+=sampl*w;wsum+=w;}
sum/=wsum;glFragColor=vec4(sum.rgb,1.);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fluidRenderingStandardBlurPixelShader = { name, shader };
//# sourceMappingURL=fluidRenderingStandardBlur.fragment.js.map

/***/ }),

/***/ 5499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fxaaPixelShader: () => (/* binding */ fxaaPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fxaaPixelShader";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
uniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const float fxaaQualitySubpix=1.0;const float fxaaQualityEdgeThreshold=0.166;const float fxaaQualityEdgeThresholdMin=0.0833;const vec3 kLumaCoefficients=vec3(0.2126,0.7152,0.0722);
#define FxaaLuma(rgba) dot(rgba.rgb,kLumaCoefficients)
void main(){vec2 posM;posM.x=vUV.x;posM.y=vUV.y;vec4 rgbyM=TEXTUREFUNC(textureSampler,vUV,0.0);float lumaM=FxaaLuma(rgbyM);float lumaS=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordS,0.0));float lumaE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordE,0.0));float lumaN=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordN,0.0));float lumaW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordW,0.0));float maxSM=max(lumaS,lumaM);float minSM=min(lumaS,lumaM);float maxESM=max(lumaE,maxSM);float minESM=min(lumaE,minSM);float maxWN=max(lumaN,lumaW);float minWN=min(lumaN,lumaW);float rangeMax=max(maxWN,maxESM);float rangeMin=min(minWN,minESM);float rangeMaxScaled=rangeMax*fxaaQualityEdgeThreshold;float range=rangeMax-rangeMin;float rangeMaxClamped=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped) 
{gl_FragColor=rgbyM;return;}
#endif
float lumaNW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordNW,0.0));float lumaSE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordSE,0.0));float lumaNE=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordNE,0.0));float lumaSW=FxaaLuma(TEXTUREFUNC(textureSampler,sampleCoordSW,0.0));float lumaNS=lumaN+lumaS;float lumaWE=lumaW+lumaE;float subpixRcpRange=1.0/range;float subpixNSWE=lumaNS+lumaWE;float edgeHorz1=(-2.0*lumaM)+lumaNS;float edgeVert1=(-2.0*lumaM)+lumaWE;float lumaNESE=lumaNE+lumaSE;float lumaNWNE=lumaNW+lumaNE;float edgeHorz2=(-2.0*lumaE)+lumaNESE;float edgeVert2=(-2.0*lumaN)+lumaNWNE;float lumaNWSW=lumaNW+lumaSW;float lumaSWSE=lumaSW+lumaSE;float edgeHorz4=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);float edgeVert4=(abs(edgeVert1)*2.0)+abs(edgeVert2);float edgeHorz3=(-2.0*lumaW)+lumaNWSW;float edgeVert3=(-2.0*lumaS)+lumaSWSE;float edgeHorz=abs(edgeHorz3)+edgeHorz4;float edgeVert=abs(edgeVert3)+edgeVert4;float subpixNWSWNESE=lumaNWSW+lumaNESE;float lengthSign=texelSize.x;bool horzSpan=edgeHorz>=edgeVert;float subpixA=subpixNSWE*2.0+subpixNWSWNESE;if (!horzSpan)
{lumaN=lumaW;}
if (!horzSpan) 
{lumaS=lumaE;}
if (horzSpan) 
{lengthSign=texelSize.y;}
float subpixB=(subpixA*(1.0/12.0))-lumaM;float gradientN=lumaN-lumaM;float gradientS=lumaS-lumaM;float lumaNN=lumaN+lumaM;float lumaSS=lumaS+lumaM;bool pairN=abs(gradientN)>=abs(gradientS);float gradient=max(abs(gradientN),abs(gradientS));if (pairN)
{lengthSign=-lengthSign;}
float subpixC=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);vec2 posB;posB.x=posM.x;posB.y=posM.y;vec2 offNP;offNP.x=(!horzSpan) ? 0.0 : texelSize.x;offNP.y=(horzSpan) ? 0.0 : texelSize.y;if (!horzSpan) 
{posB.x+=lengthSign*0.5;}
if (horzSpan)
{posB.y+=lengthSign*0.5;}
vec2 posN;posN.x=posB.x-offNP.x*1.5;posN.y=posB.y-offNP.y*1.5;vec2 posP;posP.x=posB.x+offNP.x*1.5;posP.y=posB.y+offNP.y*1.5;float subpixD=((-2.0)*subpixC)+3.0;float lumaEndN=FxaaLuma(TEXTUREFUNC(textureSampler,posN,0.0));float subpixE=subpixC*subpixC;float lumaEndP=FxaaLuma(TEXTUREFUNC(textureSampler,posP,0.0));if (!pairN) 
{lumaNN=lumaSS;}
float gradientScaled=gradient*1.0/4.0;float lumaMM=lumaM-lumaNN*0.5;float subpixF=subpixD*subpixE;bool lumaMLTZero=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;bool doneN=abs(lumaEndN)>=gradientScaled;bool doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) 
{posN.x-=offNP.x*3.0;}
if (!doneN) 
{posN.y-=offNP.y*3.0;}
bool doneNP=(!doneN) || (!doneP);if (!doneP) 
{posP.x+=offNP.x*3.0;}
if (!doneP)
{posP.y+=offNP.y*3.0;}
if (doneNP)
{if (!doneN) lumaEndN=FxaaLuma(TEXTUREFUNC(textureSampler,posN.xy,0.0));if (!doneP) lumaEndP=FxaaLuma(TEXTUREFUNC(textureSampler,posP.xy,0.0));if (!doneN) lumaEndN=lumaEndN-lumaNN*0.5;if (!doneP) lumaEndP=lumaEndP-lumaNN*0.5;doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) posN.x-=offNP.x*12.0;if (!doneN) posN.y-=offNP.y*12.0;doneNP=(!doneN) || (!doneP);if (!doneP) posP.x+=offNP.x*12.0;if (!doneP) posP.y+=offNP.y*12.0;}
float dstN=posM.x-posN.x;float dstP=posP.x-posM.x;if (!horzSpan)
{dstN=posM.y-posN.y;}
if (!horzSpan) 
{dstP=posP.y-posM.y;}
bool goodSpanN=(lumaEndN<0.0) != lumaMLTZero;float spanLength=(dstP+dstN);bool goodSpanP=(lumaEndP<0.0) != lumaMLTZero;float spanLengthRcp=1.0/spanLength;bool directionN=dstN<dstP;float dst=min(dstN,dstP);bool goodSpan=directionN ? goodSpanN : goodSpanP;float subpixG=subpixF*subpixF;float pixelOffset=(dst*(-spanLengthRcp))+0.5;float subpixH=subpixG*fxaaQualitySubpix;float pixelOffsetGood=goodSpan ? pixelOffset : 0.0;float pixelOffsetSubpix=max(pixelOffsetGood,subpixH);if (!horzSpan)
{posM.x+=pixelOffsetSubpix*lengthSign;}
if (horzSpan)
{posM.y+=pixelOffsetSubpix*lengthSign;}
#ifdef MALI
if(range<rangeMaxClamped) 
{gl_FragColor=rgbyM;}
else
{gl_FragColor=TEXTUREFUNC(textureSampler,posM,0.0);}
#else
gl_FragColor=TEXTUREFUNC(textureSampler,posM,0.0);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fxaaPixelShader = { name, shader };
//# sourceMappingURL=fxaa.fragment.js.map

/***/ }),

/***/ 9669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fxaaVertexShader: () => (/* binding */ fxaaVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "fxaaVertexShader";
const shader = `attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd);sampleCoordS=vUV+vec2( 0.0,1.0)*texelSize;sampleCoordE=vUV+vec2( 1.0,0.0)*texelSize;sampleCoordN=vUV+vec2( 0.0,-1.0)*texelSize;sampleCoordW=vUV+vec2(-1.0,0.0)*texelSize;sampleCoordNW=vUV+vec2(-1.0,-1.0)*texelSize;sampleCoordSE=vUV+vec2( 1.0,1.0)*texelSize;sampleCoordNE=vUV+vec2( 1.0,-1.0)*texelSize;sampleCoordSW=vUV+vec2(-1.0,1.0)*texelSize;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const fxaaVertexShader = { name, shader };
//# sourceMappingURL=fxaa.vertex.js.map

/***/ }),

/***/ 18335:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gaussianSplattingPixelShader: () => (/* binding */ gaussianSplattingPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingFragmentDeclaration.js
// Do not edit.



const gaussianSplattingFragmentDeclaration_name = "gaussianSplattingFragmentDeclaration";
const shader = `vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[gaussianSplattingFragmentDeclaration_name] = shader;
/** @internal */
const gaussianSplattingFragmentDeclaration = { name: gaussianSplattingFragmentDeclaration_name, shader };
//# sourceMappingURL=gaussianSplattingFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
;// ./node_modules/@babylonjs/core/Shaders/gaussianSplatting.fragment.js
// Do not edit.






const gaussianSplatting_fragment_name = "gaussianSplattingPixelShader";
const gaussianSplatting_fragment_shader = `#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplattingFragmentDeclaration>
void main () { 
#include<clipPlaneFragment>
gl_FragColor=gaussianColor(vColor);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[gaussianSplatting_fragment_name] = gaussianSplatting_fragment_shader;
/** @internal */
const gaussianSplattingPixelShader = { name: gaussianSplatting_fragment_name, shader: gaussianSplatting_fragment_shader };
//# sourceMappingURL=gaussianSplatting.fragment.js.map

/***/ }),

/***/ 97215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gaussianSplattingVertexShader: () => (/* binding */ gaussianSplattingVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingVertexDeclaration.js
var gaussianSplattingVertexDeclaration = __webpack_require__(39775);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(28764);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js
var meshUboDeclaration = __webpack_require__(96467);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingUboDeclaration.js
// Do not edit.



const gaussianSplattingUboDeclaration_name = "gaussianSplattingUboDeclaration";
const shader = `#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute vec2 position;`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[gaussianSplattingUboDeclaration_name] = shader;
/** @internal */
const gaussianSplattingUboDeclaration = { name: gaussianSplattingUboDeclaration_name, shader };
//# sourceMappingURL=gaussianSplattingUboDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplatting.js
// Do not edit.

const gaussianSplatting_name = "gaussianSplatting";
const gaussianSplatting_shader = `#if !defined(WEBGL2) && !defined(WEBGPU) && !defined(NATIVE)
mat3 transpose(mat3 matrix) {return mat3(matrix[0][0],matrix[1][0],matrix[2][0],
matrix[0][1],matrix[1][1],matrix[2][1],
matrix[0][2],matrix[1][2],matrix[2][2]);}
#endif
vec2 getDataUV(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return vec2((x+0.5)/textureSize.x,(y+0.5)/textureSize.y);}
#if SH_DEGREE>0
ivec2 getDataUVint(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return ivec2(uint(x+0.5),uint(y+0.5));}
#endif
struct Splat {vec4 center;vec4 color;vec4 covA;vec4 covB;
#if SH_DEGREE>0
uvec4 sh0; 
#endif
#if SH_DEGREE>1
uvec4 sh1;
#endif
#if SH_DEGREE>2
uvec4 sh2;
#endif
};Splat readSplat(float splatIndex)
{Splat splat;vec2 splatUV=getDataUV(splatIndex,dataTextureSize);splat.center=texture2D(centersTexture,splatUV);splat.color=texture2D(colorsTexture,splatUV);splat.covA=texture2D(covariancesATexture,splatUV)*splat.center.w;splat.covB=texture2D(covariancesBTexture,splatUV)*splat.center.w;
#if SH_DEGREE>0
ivec2 splatUVint=getDataUVint(splatIndex,dataTextureSize);splat.sh0=texelFetch(shTexture0,splatUVint,0);
#endif
#if SH_DEGREE>1
splat.sh1=texelFetch(shTexture1,splatUVint,0);
#endif
#if SH_DEGREE>2
splat.sh2=texelFetch(shTexture2,splatUVint,0);
#endif
return splat;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
vec3 computeColorFromSHDegree(vec3 dir,const vec3 sh[16])
{const float SH_C0=0.28209479;const float SH_C1=0.48860251;float SH_C2[5];SH_C2[0]=1.092548430;SH_C2[1]=-1.09254843;SH_C2[2]=0.315391565;SH_C2[3]=-1.09254843;SH_C2[4]=0.546274215;float SH_C3[7];SH_C3[0]=-0.59004358;SH_C3[1]=2.890611442;SH_C3[2]=-0.45704579;SH_C3[3]=0.373176332;SH_C3[4]=-0.45704579;SH_C3[5]=1.445305721;SH_C3[6]=-0.59004358;vec3 result=/*SH_C0**/sh[0];
#if SH_DEGREE>0
float x=dir.x;float y=dir.y;float z=dir.z;result+=- SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
float xx=x*x,yy=y*y,zz=z*z;float xy=x*y,yz=y*z,xz=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0*zz-3.0*xx-3.0*yy)*sh[12] +
SH_C3[4]*x*(4.0*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0*yy)*sh[15];
#endif
#endif
#endif
return result;}
vec4 decompose(uint value)
{vec4 components=vec4(
float((value ) & 255u),
float((value>>uint( 8)) & 255u),
float((value>>uint(16)) & 255u),
float((value>>uint(24)) & 255u));return components*vec4(2./255.)-vec4(1.);}
vec3 computeSH(Splat splat,vec3 color,vec3 dir)
{vec3 sh[16];sh[0]=color;
#if SH_DEGREE>0
vec4 sh00=decompose(splat.sh0.x);vec4 sh01=decompose(splat.sh0.y);vec4 sh02=decompose(splat.sh0.z);sh[1]=vec3(sh00.x,sh00.y,sh00.z);sh[2]=vec3(sh00.w,sh01.x,sh01.y);sh[3]=vec3(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
vec4 sh03=decompose(splat.sh0.w);vec4 sh04=decompose(splat.sh1.x);vec4 sh05=decompose(splat.sh1.y);sh[4]=vec3(sh02.y,sh02.z,sh02.w);sh[5]=vec3(sh03.x,sh03.y,sh03.z);sh[6]=vec3(sh03.w,sh04.x,sh04.y);sh[7]=vec3(sh04.z,sh04.w,sh05.x);sh[8]=vec3(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
vec4 sh06=decompose(splat.sh1.z);vec4 sh07=decompose(splat.sh1.w);vec4 sh08=decompose(splat.sh2.x);vec4 sh09=decompose(splat.sh2.y);vec4 sh10=decompose(splat.sh2.z);vec4 sh11=decompose(splat.sh2.w);sh[9]=vec3(sh06.x,sh06.y,sh06.z);sh[10]=vec3(sh06.w,sh07.x,sh07.y);sh[11]=vec3(sh07.z,sh07.w,sh08.x);sh[12]=vec3(sh08.y,sh08.z,sh08.w);sh[13]=vec3(sh09.x,sh09.y,sh09.z);sh[14]=vec3(sh09.w,sh10.x,sh10.y);sh[15]=vec3(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
#else
vec3 computeSH(Splat splat,vec3 color,vec3 dir)
{return color;}
#endif
vec4 gaussianSplatting(vec2 meshPos,vec3 worldPos,vec2 scale,vec3 covA,vec3 covB,mat4 worldMatrix,mat4 viewMatrix,mat4 projectionMatrix)
{mat4 modelView=viewMatrix*worldMatrix;vec4 camspace=viewMatrix*vec4(worldPos,1.);vec4 pos2d=projectionMatrix*camspace;float bounds=1.2*pos2d.w;if (pos2d.z<-pos2d.w || pos2d.x<-bounds || pos2d.x>bounds
|| pos2d.y<-bounds || pos2d.y>bounds) {return vec4(0.0,0.0,2.0,1.0);}
mat3 Vrk=mat3(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);mat3 J=mat3(
focal.x/camspace.z,0.,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.,0.,0.
);mat3 invy=mat3(1,0,0,0,-1,0,0,0,1);mat3 T=invy*transpose(mat3(modelView))*J;mat3 cov2d=transpose(T)*Vrk*T;float mid=(cov2d[0][0]+cov2d[1][1])/2.0;float radius=length(vec2((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));float lambda1=mid+radius,lambda2=mid-radius;if (lambda2<0.0)
{return vec4(0.0,0.0,2.0,1.0);}
vec2 diagonalVector=normalize(vec2(cov2d[0][1],lambda1-cov2d[0][0]));vec2 majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;vec2 minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2(diagonalVector.y,-diagonalVector.x);vec2 vCenter=vec2(pos2d);return vec4(
vCenter 
+ ((meshPos.x*majorAxis
+ meshPos.y*minorAxis)*invViewport*pos2d.w)*scale,pos2d.zw);}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[gaussianSplatting_name] = gaussianSplatting_shader;
/** @internal */
const gaussianSplatting = { name: gaussianSplatting_name, shader: gaussianSplatting_shader };
//# sourceMappingURL=gaussianSplatting.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(16470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/gaussianSplatting.vertex.js
// Do not edit.











const gaussianSplatting_vertex_name = "gaussianSplattingVertexShader";
const gaussianSplatting_vertex_shader = `#include<__decl__gaussianSplattingVertex>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
attribute float splatIndex;uniform vec2 invViewport;uniform vec2 dataTextureSize;uniform vec2 focal;uniform sampler2D covariancesATexture;uniform sampler2D covariancesBTexture;uniform sampler2D centersTexture;uniform sampler2D colorsTexture;
#if SH_DEGREE>0
uniform highp usampler2D shTexture0;
#endif
#if SH_DEGREE>1
uniform highp usampler2D shTexture1;
#endif
#if SH_DEGREE>2
uniform highp usampler2D shTexture2;
#endif
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplatting>
void main () {Splat splat=readSplat(splatIndex);vec3 covA=splat.covA.xyz;vec3 covB=vec3(splat.covA.w,splat.covB.xy);vec4 worldPos=world*vec4(splat.center.xyz,1.0);vColor=splat.color;vPosition=position;
#if SH_DEGREE>0
mat3 worldRot=mat3(world);mat3 normWorldRot=inverseMat3(worldRot);vec3 dir=normalize(normWorldRot*(worldPos.xyz-vEyePosition.xyz));dir.y*=-1.; 
vColor.xyz=computeSH(splat,splat.color.xyz,dir);
#endif
gl_Position=gaussianSplatting(position,worldPos.xyz,vec2(1.,1.),covA,covB,world,view,projection);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[gaussianSplatting_vertex_name] = gaussianSplatting_vertex_shader;
/** @internal */
const gaussianSplattingVertexShader = { name: gaussianSplatting_vertex_name, shader: gaussianSplatting_vertex_shader };
//# sourceMappingURL=gaussianSplatting.vertex.js.map

/***/ }),

/***/ 75007:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  geometryPixelShader: () => (/* binding */ geometryPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/mrtFragmentDeclaration.js
// Do not edit.

const mrtFragmentDeclaration_name = "mrtFragmentDeclaration";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[mrtFragmentDeclaration_name] = shader;
/** @internal */
const mrtFragmentDeclaration = { name: mrtFragmentDeclaration_name, shader };
//# sourceMappingURL=mrtFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js
var bumpFragmentMainFunctions = __webpack_require__(17494);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js
var bumpFragmentFunctions = __webpack_require__(8269);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js
var bumpFragment = __webpack_require__(27018);
;// ./node_modules/@babylonjs/core/Shaders/geometry.fragment.js
// Do not edit.








const geometry_fragment_name = "geometryPixelShader";
const geometry_fragment_shader = `#extension GL_EXT_draw_buffers : require
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
#ifdef BUMP
varying mat4 vWorldView;varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#ifdef NEED_UV
varying vec2 vUV;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
uniform sampler2D reflectivitySampler;varying vec2 vReflectivityUV;
#endif
#ifdef ALBEDOTEXTURE
varying vec2 vAlbedoUV;uniform sampler2D albedoSampler;
#endif
#ifdef REFLECTIVITYCOLOR
uniform vec3 reflectivityColor;
#endif
#ifdef ALBEDOCOLOR
uniform vec3 albedoColor;
#endif
#ifdef METALLIC
uniform float metallic;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform float glossiness;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<mrtFragmentDeclaration>[SCENE_MRT_COUNT]
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
void main() {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
vec3 normalOutput;
#ifdef BUMP
vec3 normalW=normalize(vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize(vec3(vWorldView*vec4(normalW,0.0)));
#endif
#else
normalOutput=normalize(vNormalV);
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
#ifdef DEPTH
gl_FragData[DEPTH_INDEX]=vec4(vViewPos.z/vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
gl_FragData[NORMAL_INDEX]=vec4(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
gl_FragData[SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
gl_FragData[POSITION_INDEX]=vec4(vPositionW,1.0);
#endif
#ifdef VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[VELOCITY_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w) -
(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
vec4 reflectivity=vec4(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
float metal=1.0;float roughness=1.0;
#ifdef ORMTEXTURE
metal*=texture2D(reflectivitySampler,vReflectivityUV).b;roughness*=texture2D(reflectivitySampler,vReflectivityUV).g;
#endif
#ifdef METALLIC
metal*=metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-glossiness); 
#endif
reflectivity.a-=roughness;vec3 color=vec3(1.0);
#ifdef ALBEDOTEXTURE
color=texture2D(albedoSampler,vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpace(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=albedoColor.xyz;
#endif
reflectivity.rgb=mix(vec3(0.04),color,metal);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=texture2D(reflectivitySampler,vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity.rgb=toLinearSpace(reflectivity.rgb);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity.rgb=toLinearSpace(reflectivityColor.xyz);reflectivity.a=1.0;
#endif
#endif
#ifdef GLOSSINESSS
reflectivity.a*=glossiness; 
#endif
#endif
gl_FragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[geometry_fragment_name] = geometry_fragment_shader;
/** @internal */
const geometryPixelShader = { name: geometry_fragment_name, shader: geometry_fragment_shader };
//# sourceMappingURL=geometry.fragment.js.map

/***/ }),

/***/ 6739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  geometryVertexShader: () => (/* binding */ geometryVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(90738);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/geometryVertexDeclaration.js
// Do not edit.

const geometryVertexDeclaration_name = "geometryVertexDeclaration";
const shader = `uniform mat4 viewProjection;uniform mat4 view;`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[geometryVertexDeclaration_name] = shader;
/** @internal */
const geometryVertexDeclaration = { name: geometryVertexDeclaration_name, shader };
//# sourceMappingURL=geometryVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(28764);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/geometryUboDeclaration.js
// Do not edit.


const geometryUboDeclaration_name = "geometryUboDeclaration";
const geometryUboDeclaration_shader = `#include<sceneUboDeclaration>
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[geometryUboDeclaration_name] = geometryUboDeclaration_shader;
/** @internal */
const geometryUboDeclaration = { name: geometryUboDeclaration_name, shader: geometryUboDeclaration_shader };
//# sourceMappingURL=geometryUboDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(15060);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertex.js
var bumpVertex = __webpack_require__(19440);
;// ./node_modules/@babylonjs/core/Shaders/geometry.vertex.js
// Do not edit.
















const geometry_vertex_name = "geometryVertexShader";
const geometry_vertex_shader = `precision highp float;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<__decl__geometryVertex>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;attribute vec3 normal;
#ifdef NEED_UV
varying vec2 vUV;
#ifdef ALPHATEST
uniform mat4 diffuseMatrix;
#endif
#ifdef BUMP
uniform mat4 bumpMatrix;varying vec2 vBumpUV;
#endif
#ifdef REFLECTIVITY
uniform mat4 reflectivityMatrix;uniform mat4 albedoMatrix;varying vec2 vReflectivityUV;varying vec2 vAlbedoUV;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef BUMP
varying mat4 vWorldView;
#endif
#ifdef BUMP
varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=vec4(finalWorld*vec4(positionUpdated,1.0));
#ifdef BUMP
vWorldView=view*finalWorld;mat3 normalWorld=mat3(finalWorld);vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vNormalV=normalize(vec3(finalWorld*vec4(normalUpdated,0.0)));
#else
vNormalV=normalize(vec3((view*finalWorld)*vec4(normalUpdated,0.0)));
#endif
#endif
vViewPos=view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vPositionW=worldPos.xyz/worldPos.w;
#endif
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#else
vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV1
vReflectivityUV=vec2(reflectivityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef ALBEDO_UV1
vAlbedoUV=vec2(albedoMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#else
vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vBumpUV=vec2(bumpMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV2
vReflectivityUV=vec2(reflectivityMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#ifdef ALBEDO_UV2
vAlbedoUV=vec2(albedoMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#endif
#include<bumpVertex>
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[geometry_vertex_name] = geometry_vertex_shader;
/** @internal */
const geometryVertexShader = { name: geometry_vertex_name, shader: geometry_vertex_shader };
//# sourceMappingURL=geometry.vertex.js.map

/***/ }),

/***/ 57094:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowBlurPostProcessPixelShader: () => (/* binding */ glowBlurPostProcessPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowBlurPostProcessPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform vec2 direction;uniform float blurWidth;float getLuminance(vec3 color)
{return dot(color,vec3(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float weights[7];weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;vec2 texelSize=vec2(1.0/screenSize.x,1.0/screenSize.y);vec2 texelStep=texelSize*direction*blurWidth;vec2 start=vUV-3.0*texelStep;vec4 baseColor=vec4(0.,0.,0.,0.);vec2 texelOffset=vec2(0.,0.);for (int i=0; i<7; i++)
{vec4 texel=texture2D(textureSampler,start+texelOffset);baseColor.a+=texel.a*weights[i];float luminance=getLuminance(baseColor.rgb);float luminanceTexel=getLuminance(texel.rgb);float choice=step(luminanceTexel,luminance);baseColor.rgb=choice*baseColor.rgb+(1.0-choice)*texel.rgb;texelOffset+=texelStep;}
gl_FragColor=baseColor;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const glowBlurPostProcessPixelShader = { name, shader };
//# sourceMappingURL=glowBlurPostProcess.fragment.js.map

/***/ }),

/***/ 83234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapGenerationPixelShader: () => (/* binding */ glowMapGenerationPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7412);
// Do not edit.




const name = "glowMapGenerationPixelShader";
const shader = `#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vUVDiffuse;uniform sampler2D diffuseSampler;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;uniform sampler2D opacitySampler;uniform float opacityIntensity;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;uniform sampler2D emissiveSampler;
#endif
#ifdef VERTEXALPHA
varying vec4 vColor;
#endif
uniform vec4 glowColor;uniform float glowIntensity;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
vec4 finalColor=glowColor;
#ifdef DIFFUSE
vec4 albedoTexture=texture2D(diffuseSampler,vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor.a*=albedoTexture.a;
#endif
#ifdef HIGHLIGHT
finalColor.a=albedoTexture.a;
#endif
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vUVOpacity);
#ifdef OPACITYRGB
finalColor.a*=getLuminance(opacityMap.rgb);
#else
finalColor.a*=opacityMap.a;
#endif
finalColor.a*=opacityIntensity;
#endif
#ifdef VERTEXALPHA
finalColor.a*=vColor.a;
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE)
discard;
#endif
#ifdef EMISSIVE
vec4 emissive=texture2D(emissiveSampler,vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
gl_FragColor=emissive*finalColor*glowIntensity;
#else
gl_FragColor=finalColor*glowIntensity;
#endif
#ifdef HIGHLIGHT
gl_FragColor.a=glowColor.a;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const glowMapGenerationPixelShader = { name, shader };
//# sourceMappingURL=glowMapGeneration.fragment.js.map

/***/ }),

/***/ 50136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapGenerationVertexShader: () => (/* binding */ glowMapGenerationVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71636);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65523);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47314);
// Do not edit.













const name = "glowMapGenerationVertexShader";
const shader = `attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;varying vec4 vPosition;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef DIFFUSE
varying vec2 vUVDiffuse;uniform mat4 diffuseMatrix;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;uniform mat4 opacityMatrix;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;uniform mat4 emissiveMatrix;
#endif
#ifdef VERTEXALPHA
attribute vec4 color;varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef CUBEMAP
vPosition=worldPos;gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#else
vPosition=viewProjection*worldPos;gl_Position=vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vUVDiffuse=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef DIFFUSEUV2
vUVDiffuse=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vUVOpacity=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef OPACITYUV2
vUVOpacity=vec2(opacityMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vUVEmissive=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef EMISSIVEUV2
vUVEmissive=vec2(emissiveMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#ifdef VERTEXALPHA
vColor=color;
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const glowMapGenerationVertexShader = { name, shader };
//# sourceMappingURL=glowMapGeneration.vertex.js.map

/***/ }),

/***/ 99858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapMergePixelShader: () => (/* binding */ glowMapMergePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowMapMergePixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#ifdef EMISSIVE
uniform sampler2D textureSampler2;
#endif
uniform float offset;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#ifdef EMISSIVE
baseColor+=texture2D(textureSampler2,vUV);baseColor*=offset;
#else
baseColor.a=abs(offset-baseColor.a);
#ifdef STROKE
float alpha=smoothstep(.0,.1,baseColor.a);baseColor.a=alpha;baseColor.rgb=baseColor.rgb*alpha;
#endif
#endif
#if LDR
baseColor=clamp(baseColor,0.,1.0);
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const glowMapMergePixelShader = { name, shader };
//# sourceMappingURL=glowMapMerge.fragment.js.map

/***/ }),

/***/ 41288:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glowMapMergeVertexShader: () => (/* binding */ glowMapMergeVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "glowMapMergeVertexShader";
const shader = `attribute vec2 position;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const glowMapMergeVertexShader = { name, shader };
//# sourceMappingURL=glowMapMerge.vertex.js.map

/***/ }),

/***/ 5596:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: gpuRenderParticlesPixelShader

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration2.js
// Do not edit.

const clipPlaneFragmentDeclaration2_name = "clipPlaneFragmentDeclaration2";
const shader = `#ifdef CLIPPLANE
in float fClipDistance;
#endif
#ifdef CLIPPLANE2
in float fClipDistance2;
#endif
#ifdef CLIPPLANE3
in float fClipDistance3;
#endif
#ifdef CLIPPLANE4
in float fClipDistance4;
#endif
#ifdef CLIPPLANE5
in float fClipDistance5;
#endif
#ifdef CLIPPLANE6
in float fClipDistance6;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[clipPlaneFragmentDeclaration2_name] = shader;
/** @internal */
const clipPlaneFragmentDeclaration2 = { name: clipPlaneFragmentDeclaration2_name, shader };
//# sourceMappingURL=clipPlaneFragmentDeclaration2.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(89392);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(64017);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
;// ./node_modules/@babylonjs/core/Shaders/gpuRenderParticles.fragment.js
// Do not edit.










const gpuRenderParticles_fragment_name = "gpuRenderParticlesPixelShader";
const gpuRenderParticles_fragment_shader = `precision highp float;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform sampler2D diffuseSampler;varying vec2 vUV;varying vec4 vColor;
#include<clipPlaneFragmentDeclaration2> 
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#include<fogFragmentDeclaration>
void main() {
#include<clipPlaneFragment> 
vec4 textureColor=texture2D(diffuseSampler,vUV);gl_FragColor=textureColor*vColor;
#ifdef BLENDMULTIPLYMODE
float alpha=vColor.a*textureColor.a;gl_FragColor.rgb=gl_FragColor.rgb*alpha+vec3(1.0)*(1.0-alpha);
#endif 
#include<logDepthFragment>
#include<fogFragment>(color,gl_FragColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=toLinearSpace(gl_FragColor.rgb);
#else
#ifdef IMAGEPROCESSING
gl_FragColor.rgb=toLinearSpace(gl_FragColor.rgb);gl_FragColor=applyImageProcessing(gl_FragColor);
#endif
#endif
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[gpuRenderParticles_fragment_name] = gpuRenderParticles_fragment_shader;
/** @internal */
const gpuRenderParticlesPixelShader = { name: gpuRenderParticles_fragment_name, shader: gpuRenderParticles_fragment_shader };
//# sourceMappingURL=gpuRenderParticles.fragment.js.map

/***/ }),

/***/ 6449:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: gpuRenderParticlesVertexShader

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration2.js
// Do not edit.

const clipPlaneVertexDeclaration2_name = "clipPlaneVertexDeclaration2";
const shader = `#ifdef CLIPPLANE
uniform vec4 vClipPlane;out float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;out float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;out float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;out float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;out float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;out float fClipDistance6;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[clipPlaneVertexDeclaration2_name] = shader;
/** @internal */
const clipPlaneVertexDeclaration2 = { name: clipPlaneVertexDeclaration2_name, shader };
//# sourceMappingURL=clipPlaneVertexDeclaration2.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(16470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/gpuRenderParticles.vertex.js
// Do not edit.







const gpuRenderParticles_vertex_name = "gpuRenderParticlesVertexShader";
const gpuRenderParticles_vertex_shader = `precision highp float;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;uniform vec3 worldOffset;
#ifdef LOCAL
uniform mat4 emitterWM;
#endif
attribute vec3 position;attribute float age;attribute float life;attribute vec3 size;
#ifndef BILLBOARD
attribute vec3 initialDirection;
#endif
#ifdef BILLBOARDSTRETCHED
attribute vec3 direction;
#endif
attribute float angle;
#ifdef ANIMATESHEET
attribute float cellIndex;
#endif
attribute vec2 offset;attribute vec2 uv;varying vec2 vUV;varying vec4 vColor;varying vec3 vPositionW;
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform mat4 invView;
#endif
#include<clipPlaneVertexDeclaration2>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef COLORGRADIENTS
uniform sampler2D colorGradientSampler;
#else
uniform vec4 colorDead;attribute vec4 color;
#endif
#ifdef ANIMATESHEET
uniform vec3 sheetInfos;
#endif
#ifdef BILLBOARD
uniform vec3 eyePosition;
#endif
vec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;
#ifdef LOCAL
return ((emitterWM*vec4(position,1.0)).xyz+worldOffset)+alignedCorner;
#else
return (position+worldOffset)+alignedCorner;
#endif
}
#ifdef BILLBOARDSTRETCHED
vec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));vec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;
#ifdef LOCAL
return ((emitterWM*vec4(position,1.0)).xyz+worldOffset)+alignedCorner;
#else
return (position+worldOffset)+alignedCorner;
#endif
}
#endif
void main() {
#ifdef ANIMATESHEET
float rowOffset=floor(cellIndex/sheetInfos.z);float columnOffset=cellIndex-rowOffset*sheetInfos.z;vec2 uvScale=sheetInfos.xy;vec2 uvOffset=vec2(uv.x ,1.0-uv.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;
#else
vUV=uv;
#endif
float ratio=min(1.0,age/life);
#ifdef COLORGRADIENTS
vColor=texture2D(colorGradientSampler,vec2(ratio,0));
#else
vColor=color*vec4(1.0-ratio)+colorDead*vec4(ratio);
#endif
vec2 cornerPos=(offset-translationPivot)*size.yz*size.x;
#ifdef BILLBOARD
vec4 rotatedCorner;rotatedCorner.w=0.;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=(position+worldOffset)-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner.xyz);vec4 viewPosition=(view*vec4(vPositionW,1.0));
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=(position+worldOffset)-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner.xyz);vec4 viewPosition=(view*vec4(vPositionW,1.0));
#else
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;
#ifdef LOCAL
vec4 viewPosition=view*vec4(((emitterWM*vec4(position,1.0)).xyz+worldOffset),1.0)+rotatedCorner;
#else
vec4 viewPosition=view*vec4((position+worldOffset),1.0)+rotatedCorner;
#endif
vPositionW=(invView*viewPosition).xyz;
#endif
#else
vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=0.;rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(initialDirection);vPositionW=rotate(yaxis,rotatedCorner);vec4 viewPosition=view*vec4(vPositionW,1.0);
#endif
gl_Position=projection*viewPosition;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
vec4 worldPos=vec4(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[gpuRenderParticles_vertex_name] = gpuRenderParticles_vertex_shader;
/** @internal */
const gpuRenderParticlesVertexShader = { name: gpuRenderParticles_vertex_name, shader: gpuRenderParticles_vertex_shader };
//# sourceMappingURL=gpuRenderParticles.vertex.js.map

/***/ }),

/***/ 14361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gpuTransformPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gpuTransformPixelShader";
const shader = `#version 300 es
void main() {discard;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const gpuTransformPixelShader = { name, shader };
//# sourceMappingURL=gpuTransform.fragment.js.map

/***/ }),

/***/ 20403:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gpuTransformVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65523);
// Do not edit.









const name = "gpuTransformVertexShader";
const shader = `attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
out vec3 outPosition;const mat4 identity=mat4(
vec4(1.0,0.0,0.0,0.0),
vec4(0.0,1.0,0.0,0.0),
vec4(0.0,0.0,1.0,0.0),
vec4(0.0,0.0,0.0,1.0)
);void main(void) {vec3 positionUpdated=position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
mat4 finalWorld=identity;
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);outPosition=worldPos.xyz;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const gpuTransformVertexShader = { name, shader };
//# sourceMappingURL=gpuTransform.vertex.js.map

/***/ }),

/***/ 57045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gpuUpdateParticlesPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gpuUpdateParticlesPixelShader";
const shader = `#version 300 es
void main() {discard;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const gpuUpdateParticlesPixelShader = { name, shader };
//# sourceMappingURL=gpuUpdateParticles.fragment.js.map

/***/ }),

/***/ 40543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gpuUpdateParticlesVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "gpuUpdateParticlesVertexShader";
const shader = `#version 300 es
#define PI 3.14159
uniform float currentCount;uniform float timeDelta;uniform float stopFactor;
#ifndef LOCAL
uniform mat4 emitterWM;
#endif
uniform vec2 lifeTime;uniform vec2 emitPower;uniform vec2 sizeRange;uniform vec4 scaleRange;
#ifndef COLORGRADIENTS
uniform vec4 color1;uniform vec4 color2;
#endif
uniform vec3 gravity;uniform sampler2D randomSampler;uniform sampler2D randomSampler2;uniform vec4 angleRange;
#ifdef BOXEMITTER
uniform vec3 direction1;uniform vec3 direction2;uniform vec3 minEmitBox;uniform vec3 maxEmitBox;
#endif
#ifdef POINTEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#endif
#ifdef HEMISPHERICEMITTER
uniform float radius;uniform float radiusRange;uniform float directionRandomizer;
#endif
#ifdef SPHEREEMITTER
uniform float radius;uniform float radiusRange;
#ifdef DIRECTEDSPHEREEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CYLINDEREMITTER
uniform float radius;uniform float height;uniform float radiusRange;
#ifdef DIRECTEDCYLINDEREMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CONEEMITTER
uniform vec2 radius;uniform float coneAngle;uniform vec2 height;
#ifdef DIRECTEDCONEEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
in vec3 position;
#ifdef CUSTOMEMITTER
in vec3 initialPosition;
#endif
in float age;in float life;in vec4 seed;in vec3 size;
#ifndef COLORGRADIENTS
in vec4 color;
#endif
in vec3 direction;
#ifndef BILLBOARD
in vec3 initialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
in float angle;
#else
in vec2 angle;
#endif
#ifdef ANIMATESHEET
in float cellIndex;
#ifdef ANIMATESHEETRANDOMSTART
in float cellStartOffset;
#endif
#endif
#ifdef NOISE
in vec3 noiseCoordinates1;in vec3 noiseCoordinates2;
#endif
out vec3 outPosition;
#ifdef CUSTOMEMITTER
out vec3 outInitialPosition;
#endif
out float outAge;out float outLife;out vec4 outSeed;out vec3 outSize;
#ifndef COLORGRADIENTS
out vec4 outColor;
#endif
out vec3 outDirection;
#ifndef BILLBOARD
out vec3 outInitialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
out float outAngle;
#else
out vec2 outAngle;
#endif
#ifdef ANIMATESHEET
out float outCellIndex;
#ifdef ANIMATESHEETRANDOMSTART
out float outCellStartOffset;
#endif
#endif
#ifdef NOISE
out vec3 outNoiseCoordinates1;out vec3 outNoiseCoordinates2;
#endif
#ifdef SIZEGRADIENTS
uniform sampler2D sizeGradientSampler;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
uniform sampler2D angularSpeedGradientSampler;
#endif 
#ifdef VELOCITYGRADIENTS
uniform sampler2D velocityGradientSampler;
#endif
#ifdef LIMITVELOCITYGRADIENTS
uniform sampler2D limitVelocityGradientSampler;uniform float limitVelocityDamping;
#endif
#ifdef DRAGGRADIENTS
uniform sampler2D dragGradientSampler;
#endif
#ifdef NOISE
uniform vec3 noiseStrength;uniform sampler2D noiseSampler;
#endif
#ifdef ANIMATESHEET
uniform vec4 cellInfos;
#endif
vec3 getRandomVec3(float offset) {return texture(randomSampler2,vec2(float(gl_VertexID)*offset/currentCount,0)).rgb;}
vec4 getRandomVec4(float offset) {return texture(randomSampler,vec2(float(gl_VertexID)*offset/currentCount,0));}
void main() {float newAge=age+timeDelta; 
if (newAge>=life && stopFactor != 0.) {vec3 newPosition;vec3 newDirection;vec4 randoms=getRandomVec4(seed.x);outLife=lifeTime.x+(lifeTime.y-lifeTime.x)*randoms.r;outAge=newAge-life;outSeed=seed;
#ifdef SIZEGRADIENTS 
outSize.x=texture(sizeGradientSampler,vec2(0,0)).r;
#else
outSize.x=sizeRange.x+(sizeRange.y-sizeRange.x)*randoms.g;
#endif
outSize.y=scaleRange.x+(scaleRange.y-scaleRange.x)*randoms.b;outSize.z=scaleRange.z+(scaleRange.w-scaleRange.z)*randoms.a; 
#ifndef COLORGRADIENTS
outColor=color1+(color2-color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
outAngle.y=angleRange.x+(angleRange.y-angleRange.x)*randoms.a;outAngle.x=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#else
outAngle=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#endif 
#ifdef POINTEMITTER
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=vec3(0,0,0);newDirection=direction1+(direction2-direction1)*randoms3;
#elif defined(BOXEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=minEmitBox+(maxEmitBox-minEmitBox)*randoms2;newDirection=direction1+(direction2-direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,abs(randY),randZ);newDirection=newPosition+directionRandomizer*randoms3; 
#elif defined(SPHEREEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=normalize(direction1+(direction2-direction1)*randoms3);
#else
newDirection=normalize(newPosition+directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float yPos=(randoms2.x-0.5)*height;float angle=randoms2.y*PI*2.;float inverseRadiusRangeSquared=((1.-radiusRange)*(1.-radiusRange));float positionRadius=radius*sqrt(inverseRadiusRangeSquared+(randoms2.z*(1.-inverseRadiusRangeSquared)));float xPos=positionRadius*cos(angle);float zPos=positionRadius*sin(angle);newPosition=vec3(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
angle=angle+((randoms3.x-0.5)*PI)*directionRandomizer;newDirection=vec3(cos(angle),(randoms3.y-0.5)*directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
vec3 randoms2=getRandomVec3(seed.y);float s=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
float h=0.0001;
#else
float h=randoms2.y*height.y;h=1.-h*h; 
#endif
float lRadius=radius.x-radius.x*randoms2.z*radius.y;lRadius=lRadius*h;float randX=lRadius*sin(s);float randZ=lRadius*cos(s);float randY=h *height.x;newPosition=vec3(randX,randY,randZ); 
vec3 randoms3=getRandomVec3(seed.z);
#ifdef DIRECTEDCONEEMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
if (abs(cos(coneAngle))==1.0) {newDirection=vec3(0.,1.0,0.);} else {newDirection=normalize(newPosition+directionRandomizer*randoms3); }
#endif
#elif defined(CUSTOMEMITTER)
newPosition=initialPosition;outInitialPosition=initialPosition;
#else 
newPosition=vec3(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w)-vec3(0.5,0.5,0.5));
#endif
float power=emitPower.x+(emitPower.y-emitPower.x)*randoms.a;
#ifdef LOCAL
outPosition=newPosition;
#else
outPosition=(emitterWM*vec4(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#ifndef BILLBOARD 
outInitialDirection=direction;
#endif
#else
#ifdef LOCAL
vec3 initial=newDirection;
#else 
vec3 initial=(emitterWM*vec4(newDirection,0.)).xyz;
#endif
outDirection=initial*power;
#ifndef BILLBOARD 
outInitialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
outCellIndex=cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif
} else {float directionScale=timeDelta;outAge=newAge;float ageGradient=newAge/life;
#ifdef VELOCITYGRADIENTS
directionScale*=texture(velocityGradientSampler,vec2(ageGradient,0)).r;
#endif
#ifdef DRAGGRADIENTS
directionScale*=1.0-texture(dragGradientSampler,vec2(ageGradient,0)).r;
#endif
#if defined(CUSTOMEMITTER)
outPosition=position+(direction-position)*ageGradient; 
outInitialPosition=initialPosition;
#else
outPosition=position+direction*directionScale;
#endif
outLife=life;outSeed=seed;
#ifndef COLORGRADIENTS 
outColor=color;
#endif
#ifdef SIZEGRADIENTS
outSize.x=texture(sizeGradientSampler,vec2(ageGradient,0)).r;outSize.yz=size.yz;
#else
outSize=size;
#endif 
#ifndef BILLBOARD 
outInitialDirection=initialDirection;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#else
vec3 updatedDirection=direction+gravity*timeDelta;
#ifdef LIMITVELOCITYGRADIENTS
float limitVelocity=texture(limitVelocityGradientSampler,vec2(ageGradient,0)).r;float currentVelocity=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*limitVelocityDamping;}
#endif
outDirection=updatedDirection;
#ifdef NOISE
float fetchedR=texture(noiseSampler,vec2(noiseCoordinates1.x,noiseCoordinates1.y)*vec2(0.5)+vec2(0.5)).r;float fetchedG=texture(noiseSampler,vec2(noiseCoordinates1.z,noiseCoordinates2.x)*vec2(0.5)+vec2(0.5)).r;float fetchedB=texture(noiseSampler,vec2(noiseCoordinates2.y,noiseCoordinates2.z)*vec2(0.5)+vec2(0.5)).r;vec3 force=vec3(2.*fetchedR-1.,2.*fetchedG-1.,2.*fetchedB-1.)*noiseStrength;outDirection=outDirection+force*timeDelta;outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
float angularSpeed=texture(angularSpeedGradientSampler,vec2(ageGradient,0)).r;outAngle=angle+angularSpeed*timeDelta;
#else
outAngle=vec2(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
float offsetAge=outAge;float dist=cellInfos.y-cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=cellStartOffset;offsetAge+=cellStartOffset;
#else
float cellStartOffset=0.;
#endif 
float ratio=0.;if (cellInfos.w==1.0) {ratio=clamp(mod(cellStartOffset+cellInfos.z*offsetAge,life)/life,0.,1.0);}
else {ratio=clamp(cellStartOffset+cellInfos.z*offsetAge/life,0.,1.0);}
outCellIndex=float(int(cellInfos.x+ratio*dist));
#endif
}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const gpuUpdateParticlesVertexShader = { name, shader };
//# sourceMappingURL=gpuUpdateParticles.vertex.js.map

/***/ }),

/***/ 50890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   grainPixelShader: () => (/* binding */ grainPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "grainPixelShader";
const shader = `#include<helperFunctions>
uniform sampler2D textureSampler; 
uniform float intensity;uniform float animatedSeed;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec2 seed=vUV*(animatedSeed);float grain=dither(seed,intensity);float lum=getLuminance(gl_FragColor.rgb);float grainAmount=(cos(-PI+(lum*PI*2.))+1.)/2.;gl_FragColor.rgb+=grain*grainAmount;gl_FragColor.rgb=max(gl_FragColor.rgb,0.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const grainPixelShader = { name, shader };
//# sourceMappingURL=grain.fragment.js.map

/***/ }),

/***/ 84710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLinePixelShader: () => (/* binding */ greasedLinePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "greasedLinePixelShader";
const shader = `precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeAndColorDistributionType;uniform vec3 grlColor;varying float grlCounters;varying float grlColorPointer;void main() {float grlColorMode=grl_colorModeAndColorDistributionType.x;float grlColorDistributionType=grl_colorModeAndColorDistributionType.y;gl_FragColor=vec4(grlColor,1.);gl_FragColor.a=step(grlCounters,grlVisibility);if (gl_FragColor.a==0.) discard;if( grlUseDash==1. ){gl_FragColor.a=ceil(mod(grlCounters+grlDashOffset,grlDashArray)-(grlDashArray*grlDashRatio));if (gl_FragColor.a==0.) discard;}
if (grlUseColors==1.) {vec4 textureColor;if (grlColorDistributionType==COLOR_DISTRIBUTION_TYPE_LINE) { 
textureColor=texture2D(grlColors,vec2(grlCounters,0.),0.);} else {textureColor=texture2D(grlColors,vec2(grlColorPointer/grlColorsWidth,0.),0.);}
if (grlColorMode==COLOR_MODE_SET) {gl_FragColor=textureColor;} else if (grlColorMode==COLOR_MODE_ADD) {gl_FragColor+=textureColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {gl_FragColor*=textureColor;}}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const greasedLinePixelShader = { name, shader };
//# sourceMappingURL=greasedLine.fragment.js.map

/***/ }),

/***/ 26892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLineVertexShader: () => (/* binding */ greasedLineVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3298);
// Do not edit.



const name = "greasedLineVertexShader";
const shader = `precision highp float;
#include<instancesDeclaration>
attribute float grl_widths;attribute vec3 grl_offsets;attribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;varying float grlCounters;varying float grlColorPointer;
#ifdef GREASED_LINE_CAMERA_FACING
attribute vec4 grl_nextAndCounters;attribute vec4 grl_previousAndSide;uniform vec2 grlResolution;uniform float grlAspect;uniform float grlWidth;uniform float grlSizeAttenuation;vec2 grlFix( vec4 i,float aspect ) {vec2 res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute vec3 grl_slopes;attribute float grl_counters;
#endif
void main() {
#include<instancesVertex>
grlColorPointer=grl_colorPointers;mat4 grlMatrix=viewProjection*finalWorld ;
#ifdef GREASED_LINE_CAMERA_FACING
float grlBaseWidth=grlWidth;vec3 grlPrevious=grl_previousAndSide.xyz;float grlSide=grl_previousAndSide.w;vec3 grlNext=grl_nextAndCounters.xyz;grlCounters=grl_nextAndCounters.w;vec3 grlPositionOffset=grl_offsets;vec4 grlFinalPosition=grlMatrix*vec4( position+grlPositionOffset ,1.0 );vec4 grlPrevPos=grlMatrix*vec4( grlPrevious+grlPositionOffset,1.0 );vec4 grlNextPos=grlMatrix*vec4( grlNext+grlPositionOffset,1.0 );vec2 grlCurrentP=grlFix( grlFinalPosition,grlAspect );vec2 grlPrevP=grlFix( grlPrevPos,grlAspect );vec2 grlNextP=grlFix( grlNextPos,grlAspect );float grlWidth=grlBaseWidth*grl_widths;vec2 grlDir;if( grlNextP==grlCurrentP ) grlDir=normalize( grlCurrentP-grlPrevP );else if( grlPrevP==grlCurrentP ) grlDir=normalize( grlNextP-grlCurrentP );else {vec2 grlDir1=normalize( grlCurrentP-grlPrevP );vec2 grlDir2=normalize( grlNextP-grlCurrentP );grlDir=normalize( grlDir1+grlDir2 );}
vec4 grlNormal=vec4( -grlDir.y,grlDir.x,0.,1. );
#ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM
grlNormal.xy*=-.5*grlWidth;
#else
grlNormal.xy*=.5*grlWidth;
#endif
grlNormal*=projection;if (grlSizeAttenuation==1.) {grlNormal.xy*=grlFinalPosition.w;grlNormal.xy/=( vec4( grlResolution,0.,1. )*projection ).xy;}
grlFinalPosition.xy+=grlNormal.xy*grlSide;gl_Position=grlFinalPosition;
#else
grlCounters=grl_counters;vec4 grlFinalPosition=grlMatrix*vec4( (position+grl_offsets)+grl_slopes*grl_widths ,1.0 ) ;gl_Position=grlFinalPosition;
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const greasedLineVertexShader = { name, shader };
//# sourceMappingURL=greasedLine.vertex.js.map

/***/ }),

/***/ 55779:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrFilteringPixelShader: () => (/* binding */ hdrFilteringPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_importanceSampling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21469);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8709);
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78741);
// Do not edit.





const name = "hdrFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const hdrFilteringPixelShader = { name, shader };
//# sourceMappingURL=hdrFiltering.fragment.js.map

/***/ }),

/***/ 86109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrFilteringVertexShader: () => (/* binding */ hdrFilteringVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrFilteringVertexShader";
const shader = `attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const hdrFilteringVertexShader = { name, shader };
//# sourceMappingURL=hdrFiltering.vertex.js.map

/***/ }),

/***/ 18961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrIrradianceFilteringPixelShader: () => (/* binding */ hdrIrradianceFilteringPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_importanceSampling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21469);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8709);
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78741);
// Do not edit.





const name = "hdrIrradianceFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform samplerCube inputTexture;
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfTexture;
#endif
uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=irradiance(inputTexture,direction,vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture
#endif
);gl_FragColor=vec4(color*hdrScale,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const hdrIrradianceFilteringPixelShader = { name, shader };
//# sourceMappingURL=hdrIrradianceFiltering.fragment.js.map

/***/ }),

/***/ 94619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrIrradianceFilteringVertexShader: () => (/* binding */ hdrIrradianceFilteringVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "hdrIrradianceFilteringVertexShader";
const shader = `attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const hdrIrradianceFilteringVertexShader = { name, shader };
//# sourceMappingURL=hdrIrradianceFiltering.vertex.js.map

/***/ }),

/***/ 96920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   highlightsPixelShader: () => (/* binding */ highlightsPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "highlightsPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;const vec3 RGBLuminanceCoefficients=vec3(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec4 tex=texture2D(textureSampler,vUV);vec3 c=tex.rgb;float luma=dot(c.rgb,RGBLuminanceCoefficients);gl_FragColor=vec4(pow(c,vec3(25.0-luma*15.0)),tex.a); }`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const highlightsPixelShader = { name, shader };
//# sourceMappingURL=highlights.fragment.js.map

/***/ }),

/***/ 46762:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfDebugPixelShader: () => (/* binding */ iblCdfDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCdfDebugPixelShader";
const shader = `precision highp samplerCube;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D cdfy;uniform sampler2D cdfx;uniform sampler2D icdf;uniform sampler2D pdf;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform sampler2D textureSampler;
#define cdfyVSize (0.8/3.0)
#define cdfxVSize 0.1
#define cdfyHSize 0.5
uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
#ifdef IBL_USE_CUBE_MAP
vec3 equirectangularToCubemapDirection(vec2 uv) {float longitude=uv.x*2.0*PI-PI;float latitude=PI*0.5-uv.y*PI;vec3 direction;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
#endif
void main(void) {vec3 colour=vec3(0.0);vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec3 backgroundColour=texture2D(textureSampler,vUV).rgb;const float iblStart=1.0-cdfyVSize;const float pdfStart=1.0-2.0*cdfyVSize;const float cdfyStart=1.0-3.0*cdfyVSize;const float cdfxStart=1.0-3.0*cdfyVSize-cdfxVSize;const float icdfxStart=1.0-3.0*cdfyVSize-2.0*cdfxVSize;
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(
(uv-vec2(0.0,iblStart))*vec2(1.0,1.0/cdfyVSize));vec3 iblColour=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 iblColour=texture2D(iblSource,(uv-vec2(0.0,iblStart)) *
vec2(1.0,1.0/cdfyVSize))
.rgb;
#endif
vec3 pdfColour=texture(icdf,(uv-vec2(0.0,pdfStart)) *
vec2(1.0,1.0/cdfyVSize)).zzz;float cdfyColour =
texture2D(cdfy,(uv-vec2(0.0,cdfyStart))*vec2(2.0,1.0/cdfyVSize))
.r;float icdfyColour =
texture2D(icdf,(uv-vec2(0.5,cdfyStart))*vec2(2.0,1.0/cdfyVSize))
.g;float cdfxColour =
texture2D(cdfx,(uv-vec2(0.0,cdfxStart))*vec2(1.0,1.0/cdfxVSize))
.r;float icdfxColour=texture2D(icdf,(uv-vec2(0.0,icdfxStart)) *
vec2(1.0,1.0/cdfxVSize))
.r;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {colour=backgroundColour;} else if (uv.y>iblStart) {colour+=iblColour;} else if (uv.y>pdfStart) {colour+=pdfColour;} else if (uv.y>cdfyStart && uv.x<0.5) {colour.r+=0.003*cdfyColour;} else if (uv.y>cdfyStart && uv.x>0.5) {colour.r+=icdfyColour;} else if (uv.y>cdfxStart) {colour.r+=0.00003*cdfxColour;} else if (uv.y>icdfxStart) {colour.r+=icdfxColour;}
gl_FragColor=vec4(colour,1.0);glFragColor.rgb=mix(gl_FragColor.rgb,backgroundColour,0.5);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblCdfDebugPixelShader = { name, shader };
//# sourceMappingURL=iblCdfDebug.fragment.js.map

/***/ }),

/***/ 47671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfxPixelShader: () => (/* binding */ iblCdfxPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCdfxPixelShader";
const shader = `precision highp sampler2D;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D cdfy;void main(void) {ivec2 cdfyRes=textureSize(cdfy,0);ivec2 currentPixel=ivec2(gl_FragCoord.xy);float cdfx=0.0;for (int x=1; x<=currentPixel.x; x++) {cdfx+=texelFetch(cdfy,ivec2(x-1,cdfyRes.y-1),0).x;}
gl_FragColor=vec4(vec3(cdfx),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblCdfxPixelShader = { name, shader };
//# sourceMappingURL=iblCdfx.fragment.js.map

/***/ }),

/***/ 24030:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCdfyPixelShader: () => (/* binding */ iblCdfyPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "iblCdfyPixelShader";
const shader = `precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
#define PI 3.1415927
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblHeight;
#ifdef IBL_USE_CUBE_MAP
float fetchCube(vec2 uv) {vec3 direction=equirectangularToCubemapDirection(uv);return sin(PI*uv.y)*dot(textureCubeLodEXT(iblSource,direction,0.0).rgb,LuminanceEncodeApprox);}
#else
float fetchPanoramic(ivec2 Coords,float envmapHeight) {return sin(PI*(float(Coords.y)+0.5)/envmapHeight) *
dot(texelFetch(iblSource,Coords,0).rgb,LuminanceEncodeApprox);}
#endif
void main(void) {ivec2 coords=ivec2(gl_FragCoord.x,gl_FragCoord.y);float cdfy=0.0;for (int y=1; y<=coords.y; y++) {
#ifdef IBL_USE_CUBE_MAP
vec2 uv=vec2(vUV.x,(float(y-1)+0.5)/float(iblHeight));cdfy+=fetchCube(uv);
#else
cdfy+=fetchPanoramic(ivec2(coords.x,y-1),float(iblHeight));
#endif
}
gl_FragColor=vec4(cdfy,0.0,0.0,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblCdfyPixelShader = { name, shader };
//# sourceMappingURL=iblCdfy.fragment.js.map

/***/ }),

/***/ 18162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblCombineVoxelGridsPixelShader: () => (/* binding */ iblCombineVoxelGridsPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblCombineVoxelGridsPixelShader";
const shader = `precision highp float;precision highp sampler3D;varying vec2 vUV;uniform sampler3D voxelXaxisSampler;uniform sampler3D voxelYaxisSampler;uniform sampler3D voxelZaxisSampler;uniform float layer;void main(void) {vec3 coordZ=vec3(vUV.x,vUV.y,layer);float voxelZ=texture(voxelZaxisSampler,coordZ).r;vec3 coordX=vec3(1.0-layer,vUV.y,vUV.x);float voxelX=texture(voxelXaxisSampler,coordX).r;vec3 coordY=vec3(layer,vUV.x,vUV.y);float voxelY=texture(voxelYaxisSampler,coordY).r;float voxel=(voxelX>0.0 || voxelY>0.0 || voxelZ>0.0) ? 1.0 : 0.0;glFragColor=vec4(vec3(voxel),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblCombineVoxelGridsPixelShader = { name, shader };
//# sourceMappingURL=iblCombineVoxelGrids.fragment.js.map

/***/ }),

/***/ 46043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblGenerateVoxelMipPixelShader: () => (/* binding */ iblGenerateVoxelMipPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblGenerateVoxelMipPixelShader";
const shader = `precision highp float;precision highp sampler3D;varying vec2 vUV;uniform sampler3D srcMip;uniform int layerNum;void main(void) {ivec3 Coords=ivec3(2)*ivec3(gl_FragCoord.x,gl_FragCoord.y,layerNum);uint tex =
uint(texelFetch(srcMip,Coords+ivec3(0,0,0),0).x>0.0f ? 1u : 0u)
<< 0u |
uint(texelFetch(srcMip,Coords+ivec3(1,0,0),0).x>0.0f ? 1u : 0u)
<< 1u |
uint(texelFetch(srcMip,Coords+ivec3(0,1,0),0).x>0.0f ? 1u : 0u)
<< 2u |
uint(texelFetch(srcMip,Coords+ivec3(1,1,0),0).x>0.0f ? 1u : 0u)
<< 3u |
uint(texelFetch(srcMip,Coords+ivec3(0,0,1),0).x>0.0f ? 1u : 0u)
<< 4u |
uint(texelFetch(srcMip,Coords+ivec3(1,0,1),0).x>0.0f ? 1u : 0u)
<< 5u |
uint(texelFetch(srcMip,Coords+ivec3(0,1,1),0).x>0.0f ? 1u : 0u)
<< 6u |
uint(texelFetch(srcMip,Coords+ivec3(1,1,1),0).x>0.0f ? 1u : 0u)
<< 7u;glFragColor.rgb=vec3(float(tex)/255.0f,0.0f,0.0f);glFragColor.a=1.0;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblGenerateVoxelMipPixelShader = { name, shader };
//# sourceMappingURL=iblGenerateVoxelMip.fragment.js.map

/***/ }),

/***/ 90982:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblIcdfPixelShader: () => (/* binding */ iblIcdfPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "iblIcdfPixelShader";
const shader = `precision highp sampler2D;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform sampler2D scaledLuminanceSampler;uniform int iblWidth;uniform int iblHeight;uniform sampler2D cdfx;uniform sampler2D cdfy;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
float fetchCDFx(int x) { return texelFetch(cdfx,ivec2(x,0),0).x; }
float bisectx(int size,float targetValue) {int a=0,b=size-1;while (b-a>1) {int c=a+b>>1;if (fetchCDFx(c)<targetValue)
a=c;else
b=c;}
return mix(float(a),float(b),
(targetValue-fetchCDFx(a))/(fetchCDFx(b)-fetchCDFx(a))) /
float(size-1);}
float fetchCDFy(int y,int invocationId) {return texelFetch(cdfy,ivec2(invocationId,y),0).x;}
float bisecty(int size,float targetValue,int invocationId) {int a=0,b=size-1;while (b-a>1) {int c=a+b>>1;if (fetchCDFy(c,invocationId)<targetValue)
a=c;else
b=c;}
return mix(float(a),float(b),
(targetValue-fetchCDFy(a,invocationId)) /
(fetchCDFy(b,invocationId)-fetchCDFy(a,invocationId))) /
float(size-1);}
void main(void) {ivec2 cdfxSize=textureSize(cdfx,0);int cdfWidth=cdfxSize.x;int icdfWidth=cdfWidth-1;ivec2 currentPixel=ivec2(gl_FragCoord.xy);vec3 outputColor=vec3(1.0);if (currentPixel.x==0) {outputColor.x=0.0;} else if (currentPixel.x==icdfWidth-1) {outputColor.x=1.0;} else {float targetValue=fetchCDFx(cdfWidth-1)*vUV.x;outputColor.x=bisectx(cdfWidth,targetValue);}
ivec2 cdfySize=textureSize(cdfy,0);int cdfHeight=cdfySize.y;if (currentPixel.y==0) {outputColor.y=0.0;} else if (currentPixel.y==cdfHeight-2) {outputColor.y=1.0;} else {float targetValue=fetchCDFy(cdfHeight-1,currentPixel.x)*vUV.y;outputColor.y=max(bisecty(cdfHeight,targetValue,currentPixel.x),0.0);}
vec2 size=vec2(textureSize(scaledLuminanceSampler,0));float highestMip=floor(log2(size.x));float normalization=texture(scaledLuminanceSampler,vUV,highestMip).r;float pixelLuminance=fetchLuminance(vUV);outputColor.z=pixelLuminance/(2.0*PI*normalization);gl_FragColor=vec4(outputColor,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblIcdfPixelShader = { name, shader };
//# sourceMappingURL=iblIcdf.fragment.js.map

/***/ }),

/***/ 80234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblScaledLuminancePixelShader: () => (/* binding */ iblScaledLuminancePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "iblScaledLuminancePixelShader";
const shader = `precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblWidth;uniform int iblHeight;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
void main(void) {float deform=sin(vUV.y*PI);float luminance=fetchLuminance(vUV);gl_FragColor=vec4(vec3(deform*luminance),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblScaledLuminancePixelShader = { name, shader };
//# sourceMappingURL=iblScaledLuminance.fragment.js.map

/***/ }),

/***/ 61089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowAccumulationPixelShader: () => (/* binding */ iblShadowAccumulationPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowAccumulationPixelShader";
const shader = `#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform vec4 accumulationParameters;
#define remanence accumulationParameters.x
#define resetb accumulationParameters.y
#define sceneSize accumulationParameters.z
uniform sampler2D motionSampler;uniform sampler2D positionSampler;uniform sampler2D spatialBlurSampler;uniform sampler2D oldAccumulationSampler;uniform sampler2D prevPositionSampler;vec2 max2(vec2 v,vec2 w) { return vec2(max(v.x,w.x),max(v.y,w.y)); }
void main(void) {bool reset=bool(resetb);vec2 gbufferRes=vec2(textureSize(motionSampler,0));ivec2 gbufferPixelCoord=ivec2(vUV*gbufferRes);vec2 shadowRes=vec2(textureSize(spatialBlurSampler,0));ivec2 shadowPixelCoord=ivec2(vUV*shadowRes);vec4 LP=texelFetch(positionSampler,gbufferPixelCoord,0);if (0.0==LP.w) {gl_FragColor=vec4(1.0,0.0,0.0,1.0);return;}
vec2 velocityColor=texelFetch(motionSampler,gbufferPixelCoord,0).xy;vec2 prevCoord=vUV+velocityColor;vec3 PrevLP=texture(prevPositionSampler,prevCoord).xyz;vec3 PrevShadows=texture(oldAccumulationSampler,prevCoord).xyz;vec2 newShadows=texelFetch(spatialBlurSampler,shadowPixelCoord,0).xy;PrevShadows.z =
!reset && all(lessThan(abs(prevCoord-vec2(0.5)),vec2(0.5))) &&
distance(LP.xyz,PrevLP)<5e-2*sceneSize
? max(PrevShadows.z/(1.0+PrevShadows.z),1.0-remanence)
: 1.0;PrevShadows=max(vec3(0.0),PrevShadows);gl_FragColor =
vec4(mix(PrevShadows.x,newShadows.x,PrevShadows.z),
mix(PrevShadows.y,newShadows.y,PrevShadows.z),PrevShadows.z,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowAccumulationPixelShader = { name, shader };
//# sourceMappingURL=iblShadowAccumulation.fragment.js.map

/***/ }),

/***/ 22495:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowDebugPixelShader: () => (/* binding */ iblShadowDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowDebugPixelShader";
const shader = `#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D debugSampler;uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 background=texture2D(textureSampler,vUV);vec4 debugColour=texture2D(debugSampler,vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=background;} else {gl_FragColor.rgb=mix(debugColour.rgb,background.rgb,0.0);gl_FragColor.a=1.0;}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowDebugPixelShader = { name, shader };
//# sourceMappingURL=iblShadowDebug.fragment.js.map

/***/ }),

/***/ 95634:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowGBufferDebugPixelShader: () => (/* binding */ iblShadowGBufferDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowGBufferDebugPixelShader";
const shader = `#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D depthSampler;uniform sampler2D normalSampler;uniform sampler2D positionSampler;uniform sampler2D velocitySampler;uniform vec4 sizeParams;uniform float maxDepth;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 backgroundColour=texture2D(textureSampler,vUV).rgba;vec4 depth=texture2D(depthSampler,vUV);vec4 worldNormal=texture2D(normalSampler,vUV);vec4 worldPosition=texture2D(positionSampler,vUV);vec4 velocityLinear=texture2D(velocitySampler,vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=backgroundColour;} else {gl_FragColor.a=1.0;if (uv.x<=0.25) {gl_FragColor.rgb=depth.rgb;gl_FragColor.a=1.0;} else if (uv.x<=0.5) {velocityLinear.rg=velocityLinear.rg*0.5+0.5;gl_FragColor.rgb=velocityLinear.rgb;} else if (uv.x<=0.75) {gl_FragColor.rgb=worldPosition.rgb;} else {gl_FragColor.rgb=worldNormal.rgb;}}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowGBufferDebugPixelShader = { name, shader };
//# sourceMappingURL=iblShadowGBufferDebug.fragment.js.map

/***/ }),

/***/ 8605:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowSpatialBlurPixelShader: () => (/* binding */ iblShadowSpatialBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowSpatialBlurPixelShader";
const shader = `precision highp sampler2D;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D depthSampler;uniform sampler2D worldNormalSampler;uniform sampler2D voxelTracingSampler;uniform vec4 blurParameters;
#define stridef blurParameters.x
#define worldScale blurParameters.y
const float weights[5]=float[5](0.0625,0.25,0.375,0.25,0.0625);const int nbWeights=5;vec2 max2(vec2 v,vec2 w) {return vec2(max(v.x,w.x),max(v.y,w.y));}
void main(void)
{vec2 gbufferRes=vec2(textureSize(depthSampler,0));ivec2 gbufferPixelCoord=ivec2(vUV*gbufferRes);vec2 shadowRes=vec2(textureSize(voxelTracingSampler,0));ivec2 shadowPixelCoord=ivec2(vUV*shadowRes);vec3 N=texelFetch(worldNormalSampler,gbufferPixelCoord,0).xyz;if (length(N)<0.01) {glFragColor=vec4(1.0,1.0,0.0,1.0);return;}
float depth=-texelFetch(depthSampler,gbufferPixelCoord,0).x;vec3 X=vec3(0.0);for(int y=0; y<nbWeights; ++y) {for(int x=0; x<nbWeights; ++x) {ivec2 gBufferCoords=gbufferPixelCoord+int(stridef)*ivec2(x-(nbWeights>>1),y-(nbWeights>>1));ivec2 shadowCoords=shadowPixelCoord+int(stridef)*ivec2(x-(nbWeights>>1),y-(nbWeights>>1));vec2 T=texelFetch(voxelTracingSampler,shadowCoords,0).xy;float ddepth=-texelFetch(depthSampler,gBufferCoords,0).x-depth;vec3 dN=texelFetch(worldNormalSampler,gBufferCoords,0).xyz-N;float w=weights[x]*weights[y] *
exp2(max(-1000.0/(worldScale*worldScale),-0.5) *
(ddepth*ddepth) -
1e1*dot(dN,dN));X+=vec3(w*T.x,w*T.y,w);}}
gl_FragColor=vec4(X.x/X.z,X.y/X.z,1.0,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowSpatialBlurPixelShader = { name, shader };
//# sourceMappingURL=iblShadowSpatialBlur.fragment.js.map

/***/ }),

/***/ 16990:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblShadowVoxelTracingPixelShader: () => (/* binding */ iblShadowVoxelTracingPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowVoxelTracingPixelShader";
const shader = `precision highp sampler2D;precision highp sampler3D;
#define PI 3.1415927
varying vec2 vUV;
#define DISABLE_UNIFORMITY_ANALYSIS
uniform sampler2D depthSampler;uniform sampler2D worldNormalSampler;uniform sampler2D blueNoiseSampler;uniform sampler2D icdfSampler;uniform sampler3D voxelGridSampler;uniform vec4 shadowParameters;
#define SHADOWdirs shadowParameters.x
#define SHADOWframe shadowParameters.y
#define SHADOWenvRot shadowParameters.w
uniform vec4 voxelBiasParameters;
#define highestMipLevel voxelBiasParameters.z
uniform vec4 sssParameters;
#define SSSsamples sssParameters.x
#define SSSstride sssParameters.y
#define SSSmaxDistance sssParameters.z
#define SSSthickness sssParameters.w
uniform vec4 shadowOpacity;uniform mat4 projMtx;uniform mat4 viewMtx;uniform mat4 invProjMtx;uniform mat4 invViewMtx;uniform mat4 wsNormalizationMtx;uniform mat4 invVPMtx;
#define PI 3.1415927
#define GOLD 0.618034
struct AABB3f {vec3 m_min;vec3 m_max;};struct Ray {vec3 orig;vec3 dir;vec3 dir_rcp;float t_min;float t_max;};Ray make_ray(const vec3 origin,const vec3 direction,const float tmin,
const float tmax) {Ray ray;ray.orig=origin;ray.dir=direction;ray.dir_rcp=1.0f/direction;ray.t_min=tmin;ray.t_max=tmax;return ray;}
bool ray_box_intersection(const in AABB3f aabb,const in Ray ray,
out float distance_near,out float distance_far) {vec3 tbot=ray.dir_rcp*(aabb.m_min-ray.orig);vec3 ttop=ray.dir_rcp*(aabb.m_max-ray.orig);vec3 tmin=min(ttop,tbot);vec3 tmax=max(ttop,tbot);distance_near=max(ray.t_min,max(tmin.x,max(tmin.y,tmin.z)));distance_far=min(ray.t_max,min(tmax.x,min(tmax.y,tmax.z)));return distance_near<=distance_far;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
struct VoxelMarchDiagnosticInfo {float heat;ivec3 voxel_intersect_coords;};
#endif
uint hash(uint i) {i ^= i>>16u;i*=0x7FEB352Du;i ^= i>>15u;i*=0x846CA68Bu;i ^= i>>16u;return i;}
float uint2float(uint i) {return uintBitsToFloat(0x3F800000u | (i>>9u))-1.0;}
vec3 uv_to_normal(vec2 uv) {vec3 N;vec2 uvRange=uv;float theta=uvRange.x*2.0*PI;float phi=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
vec2 plasticSequence(const uint rstate) {return vec2(uint2float(rstate*3242174889u),
uint2float(rstate*2447445414u));}
float goldenSequence(const uint rstate) {return uint2float(rstate*2654435769u);}
float distanceSquared(vec2 a,vec2 b) {vec2 diff=a-b;return dot(diff,diff);}
void genTB(const vec3 N,out vec3 T,out vec3 B) {float s=N.z<0.0 ? -1.0 : 1.0;float a=-1.0/(s+N.z);float b=N.x*N.y*a;T=vec3(1.0+s*N.x*N.x*a,s*b,-s*N.x);B=vec3(b,s+N.y*N.y*a,-N.y);}
int stack[24]; 
#define PUSH(i) stack[stackLevel++]=i; 
#define POP() stack[--stackLevel] 
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
bool anyHitVoxels(const Ray ray_vs,
out VoxelMarchDiagnosticInfo voxel_march_diagnostic_info) {
#else
bool anyHitVoxels(const Ray ray_vs) {
#endif
vec3 invD=ray_vs.dir_rcp;vec3 D=ray_vs.dir;vec3 O=ray_vs.orig;ivec3 negD=ivec3(lessThan(D,vec3(0,0,0)));int voxel0=negD.x | negD.y<<1 | negD.z<<2;vec3 t0=-O*invD,t1=(vec3(1.0)-O)*invD;int maxLod=int(highestMipLevel);int stackLevel=0;
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
uint steps=0u;
#endif
PUSH(maxLod<<24);while (stackLevel>0) {int elem=POP();ivec4 Coords =
ivec4(elem & 0xFF,elem>>8 & 0xFF,elem>>16 & 0xFF,elem>>24);if (Coords.w==0) {
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
voxel_march_diagnostic_info.heat=float(steps)/24.0;
#endif
return true;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
++steps;
#endif
float invRes=exp2(float(Coords.w-maxLod));vec3 bbmin=invRes*vec3(Coords.xyz+negD);vec3 bbmax=invRes*vec3(Coords.xyz-negD+ivec3(1));vec3 mint=mix(t0,t1,bbmin);vec3 maxt=mix(t0,t1,bbmax);vec3 midt=0.5*(mint+maxt);mint.x=max(0.0,mint.x);midt.x=max(0.0,midt.x);int nodeMask=int(
round(texelFetch(voxelGridSampler,Coords.xyz,Coords.w).x*255.0));Coords.w--;int voxelBit=voxel0;Coords.xyz=(Coords.xyz<<1)+negD;int packedCoords =
Coords.x | Coords.y<<8 | Coords.z<<16 | Coords.w<<24;if (max(mint.x,max(mint.y,mint.z))<min(midt.x,min(midt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(mint.y,mint.z))<min(maxt.x,min(midt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(midt.y,mint.z))<min(maxt.x,min(maxt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(midt.y,mint.z))<min(midt.x,min(maxt.y,midt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x4;packedCoords ^= 0x10000;if (max(mint.x,max(midt.y,midt.z))<min(midt.x,min(maxt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(midt.y,midt.z))<min(maxt.x,min(maxt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(mint.y,midt.z))<min(maxt.x,min(midt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(mint.y,midt.z))<min(midt.x,min(midt.y,maxt.z)) &&
(1<<voxelBit & nodeMask) != 0)
PUSH(packedCoords);}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
voxel_march_diagnostic_info.heat=float(steps)/24.0;
#endif
return false;}
float linearizeDepth(float depth,float near,float far) {return (near*far)/(far-depth*(far-near));}
float screenSpaceShadow(vec3 csOrigin,vec3 csDirection,vec2 csZBufferSize,
float nearPlaneZ,float farPlaneZ,float noise) {
#ifdef RIGHT_HANDED
float csZDir=-1.0;
#else 
float csZDir=1.0;
#endif
float ssSamples=SSSsamples;float ssMaxDist=SSSmaxDistance;float ssStride=SSSstride;float ssThickness=SSSthickness;float rayLength =
csZDir*(csOrigin.z+ssMaxDist*csDirection.z)<csZDir*nearPlaneZ
? 
(nearPlaneZ-csOrigin.z)/csDirection.z
: ssMaxDist;vec3 csEndPoint=csOrigin+rayLength*csDirection;vec4 H0=projMtx*vec4(csOrigin,1.0);vec4 H1=projMtx*vec4(csEndPoint,1.0);vec2 Z0=vec2(csOrigin.z ,1.0)/H0.w;vec2 Z1=vec2(csEndPoint.z,1.0)/H1.w;vec2 P0=csZBufferSize*(0.5*H0.xy*Z0.y+0.5);vec2 P1=csZBufferSize*(0.5*H1.xy*Z1.y+0.5);P1+=vec2(distanceSquared(P0,P1)<0.0001 ? 0.01 : 0.0);vec2 delta=P1-P0;bool permute=false;if (abs(delta.x)<abs(delta.y)) {permute=true;P0=P0.yx;P1=P1.yx;delta=delta.yx;}
float stepDirection=sign(delta.x);float invdx=stepDirection/delta.x;vec2 dP=ssStride*vec2(stepDirection,invdx*delta.y);vec2 dZ=ssStride*invdx*(Z1-Z0);float opacity=0.0;vec2 P=P0+noise*dP;vec2 Z=Z0+noise*dZ;float end=P1.x*stepDirection;float rayZMax=csZDir*Z.x/Z.y;float sceneDepth=rayZMax;Z+=dZ;for (float stepCount=0.0;opacity<1.0 && P.x*stepDirection<end && sceneDepth>0.0 && stepCount<ssSamples;stepCount++,P+=dP,
Z+=dZ) { 
ivec2 coords=ivec2(permute ? P.yx : P);sceneDepth=texelFetch(depthSampler,coords,0).x;sceneDepth=linearizeDepth(sceneDepth,nearPlaneZ,farPlaneZ);sceneDepth=csZDir*sceneDepth;if (sceneDepth<=0.0) {break;}
float rayZMin=rayZMax;rayZMax=csZDir*Z.x/Z.y;opacity+=max(opacity,step(rayZMax,sceneDepth+ssThickness)*step(sceneDepth,rayZMin));}
return opacity;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
float voxelShadow(vec3 wsOrigin,vec3 wsDirection,vec3 wsNormal,
vec2 DitherNoise,
out VoxelMarchDiagnosticInfo voxel_march_diagnostic_info) {
#else
float voxelShadow(vec3 wsOrigin,vec3 wsDirection,vec3 wsNormal,
vec2 DitherNoise) {
#endif
float vxResolution=float(textureSize(voxelGridSampler,0).x);vec3 T,B;genTB(wsDirection,T,B);vec2 DitherXY=sqrt(DitherNoise.x)*vec2(cos(2.0*PI*DitherNoise.y),
sin(2.0*PI*DitherNoise.y));float sceneScale=wsNormalizationMtx[0][0];vec3 Dithering =
(voxelBiasParameters.x*wsNormal+voxelBiasParameters.y*wsDirection +
DitherXY.x*T+DitherXY.y*B) /
vxResolution;vec3 O=0.5*wsOrigin+0.5+Dithering;Ray ray_vs=make_ray(O,wsDirection,0.0,10.0);AABB3f voxel_aabb;voxel_aabb.m_min=vec3(0);voxel_aabb.m_max=vec3(1);float near,far;if (!ray_box_intersection(voxel_aabb,ray_vs,near,far))
return 0.0;ray_vs.t_min=max(ray_vs.t_min,near);ray_vs.t_max=min(ray_vs.t_max,far);
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
return anyHitVoxels(ray_vs,voxel_march_diagnostic_info) ? 1.0f : 0.0f;
#else
return anyHitVoxels(ray_vs) ? 1.0f : 0.0f;
#endif
}
void main(void) {uint nbDirs=uint(SHADOWdirs);uint frameId=uint(SHADOWframe);float envRot=SHADOWenvRot;vec2 Resolution=vec2(textureSize(depthSampler,0));ivec2 currentPixel=ivec2(vUV*Resolution);uint GlobalIndex=(frameId*uint(Resolution.y)+uint(currentPixel.y)) *
uint(Resolution.x) +
uint(currentPixel.x);vec3 N=texelFetch(worldNormalSampler,currentPixel,0).xyz;if (length(N)<0.01) {glFragColor=vec4(1.0,1.0,0.0,1.0);return;}
float normalizedRotation=envRot/(2.0*PI);float depth=texelFetch(depthSampler,currentPixel,0).x;
#ifndef IS_NDC_HALF_ZRANGE
depth=depth*2.0-1.0;
#endif
vec2 temp=(vec2(currentPixel)+vec2(0.5))*2.0/Resolution-vec2(1.0);vec4 VP=invProjMtx*vec4(temp.x,-temp.y,depth,1.0);VP/=VP.w;N=normalize(N);vec3 noise=texelFetch(blueNoiseSampler,currentPixel & 0xFF,0).xyz;noise.z=fract(noise.z+goldenSequence(frameId*nbDirs));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
float heat=0.0f;
#endif
float shadowAccum=0.0;float specShadowAccum=0.0;float sampleWeight=0.0;for (uint i=0u; i<nbDirs; i++) {uint dirId=nbDirs*GlobalIndex+i;vec4 L;{vec2 r=plasticSequence(frameId*nbDirs+i);r=fract(r+vec2(2.0)*abs(noise.xy-vec2(0.5)));vec2 T;T.x=textureLod(icdfSampler,vec2(r.x,0.0),0.0).x;T.y=textureLod(icdfSampler,vec2(T.x,r.y),0.0).y;T.x-=normalizedRotation;L=vec4(uv_to_normal(T),0);
#ifndef RIGHT_HANDED
L.z*=-1.0;
#endif
}
float edge_tint_const=-0.001;float cosNL=dot(N,L.xyz);float opacity=cosNL<edge_tint_const ? 1.0 : 0.0;if (cosNL>edge_tint_const) {vec4 VP2=VP;VP2.y*=-1.0;vec4 unormWP=invViewMtx*VP2;vec3 WP=(wsNormalizationMtx*unormWP).xyz;vec2 vxNoise =
vec2(uint2float(hash(dirId*2u)),uint2float(hash(dirId*2u+1u)));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
VoxelMarchDiagnosticInfo voxel_march_diagnostic_info;opacity=max(opacity,
shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise,
voxel_march_diagnostic_info));heat+=voxel_march_diagnostic_info.heat;
#else
opacity =
max(opacity,shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise));
#endif
vec3 VL=(viewMtx*L).xyz;
#ifdef RIGHT_HANDED
float nearPlaneZ=-projMtx[3][2]/(projMtx[2][2]-1.0); 
float farPlaneZ=-projMtx[3][2]/(projMtx[2][2]+1.0);
#else
float nearPlaneZ=-projMtx[3][2]/(projMtx[2][2]+1.0); 
float farPlaneZ=-projMtx[3][2]/(projMtx[2][2]-1.0);
#endif
float ssShadow=shadowOpacity.y *
screenSpaceShadow(VP2.xyz,VL,Resolution,nearPlaneZ,farPlaneZ,
abs(2.0*noise.z-1.0));opacity=max(opacity,ssShadow);shadowAccum+=min(1.0-opacity,cosNL);sampleWeight+=cosNL;vec3 VR=-(viewMtx*vec4(reflect(-L.xyz,N),0.0)).xyz;specShadowAccum+=max(1.0-(opacity*pow(VR.z,8.0)),0.0);}
noise.z=fract(noise.z+GOLD);}
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
gl_FragColor=vec4(shadowAccum/float(sampleWeight),
specShadowAccum/float(sampleWeight),heat/float(sampleWeight),1.0);
#else
gl_FragColor=vec4(shadowAccum/float(sampleWeight),specShadowAccum/float(sampleWeight),0.0,1.0);
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowVoxelTracingPixelShader = { name, shader };
//# sourceMappingURL=iblShadowVoxelTracing.fragment.js.map

/***/ }),

/***/ 64666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export iblShadowsCombinePixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblShadowsCombinePixelShader";
const shader = `precision highp float;varying vec2 vUV;uniform sampler2D shadowSampler;uniform sampler2D textureSampler;uniform float shadowOpacity;void main(void)
{vec3 shadow=texture(shadowSampler,vUV).rgb;vec3 sceneColor=texture(textureSampler,vUV).rgb;float shadowValue=mix(1.0,shadow.x,shadowOpacity);gl_FragColor=vec4(sceneColor*shadowValue,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblShadowsCombinePixelShader = { name, shader };
//# sourceMappingURL=iblShadowsCombine.fragment.js.map

/***/ }),

/***/ 3414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGridPixelShader: () => (/* binding */ iblVoxelGridPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGridPixelShader";
const shader = `precision highp float;layout(location=0) out highp float glFragData[MAX_DRAW_BUFFERS];varying vec3 vNormalizedPosition;uniform float nearPlane;uniform float farPlane;uniform float stepSize;void main(void) {vec3 normPos=vNormalizedPosition.xyz;if (normPos.z<nearPlane || normPos.z>farPlane) {discard;}
glFragData[0]=normPos.z<nearPlane+stepSize ? 1.0 : 0.0;glFragData[1]=normPos.z>=nearPlane+stepSize && normPos.z<nearPlane+2.0*stepSize ? 1.0 : 0.0;glFragData[2]=normPos.z>=nearPlane+2.0*stepSize && normPos.z<nearPlane+3.0*stepSize ? 1.0 : 0.0;glFragData[3]=normPos.z>=nearPlane+3.0*stepSize && normPos.z<nearPlane+4.0*stepSize ? 1.0 : 0.0;
#if MAX_DRAW_BUFFERS>4
glFragData[4]=normPos.z>=nearPlane+4.0*stepSize && normPos.z<nearPlane+5.0*stepSize ? 1.0 : 0.0;glFragData[5]=normPos.z>=nearPlane+5.0*stepSize && normPos.z<nearPlane+6.0*stepSize ? 1.0 : 0.0;glFragData[6]=normPos.z>=nearPlane+6.0*stepSize && normPos.z<nearPlane+7.0*stepSize ? 1.0 : 0.0;glFragData[7]=normPos.z>=nearPlane+7.0*stepSize && normPos.z<nearPlane+8.0*stepSize ? 1.0 : 0.0;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelGridPixelShader = { name, shader };
//# sourceMappingURL=iblVoxelGrid.fragment.js.map

/***/ }),

/***/ 8444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGridVertexShader: () => (/* binding */ iblVoxelGridVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGridVertexShader";
const shader = `attribute vec3 position;attribute vec3 normal;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 viewMatrix;void main(void) {gl_Position=viewMatrix*invWorldScale*world*vec4(position,1.);vNormalizedPosition.xyz=gl_Position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
gl_Position.z=gl_Position.z*0.5+0.5;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelGridVertexShader = { name, shader };
//# sourceMappingURL=iblVoxelGrid.vertex.js.map

/***/ }),

/***/ 88188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGrid2dArrayDebugPixelShader: () => (/* binding */ iblVoxelGrid2dArrayDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGrid2dArrayDebugPixelShader";
const shader = `precision highp sampler2DArray;varying vec2 vUV;uniform sampler2DArray voxelTexture;uniform sampler2D textureSampler;uniform int slice;void main(void) {ivec3 size=textureSize(voxelTexture,0);float dimension=sqrt(float(size.z));vec2 samplePos=fract(vUV.xy*vec2(dimension));int sampleIndex=int(floor(vUV.x*float(dimension))+floor(vUV.y*float(dimension))*dimension);glFragColor.rgb=texture(voxelTexture,vec3(samplePos.xy,sampleIndex)).rrr;glFragColor.a=1.0;glFragColor.rgb+=texture(textureSampler,vUV.xy).rgb;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelGrid2dArrayDebugPixelShader = { name, shader };
//# sourceMappingURL=iblVoxelGrid2dArrayDebug.fragment.js.map

/***/ }),

/***/ 96214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelGrid3dDebugPixelShader: () => (/* binding */ iblVoxelGrid3dDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelGrid3dDebugPixelShader";
const shader = `precision highp sampler3D;varying vec2 vUV;uniform sampler3D voxelTexture;uniform sampler2D voxelSlabTexture;uniform sampler2D textureSampler;uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
uniform float mipNumber;void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 background=texture2D(textureSampler,vUV);vec4 voxelSlab=texture2D(voxelSlabTexture,vUV);ivec3 size=textureSize(voxelTexture,int(mipNumber));float dimension=ceil(sqrt(float(size.z)));vec2 samplePos=fract(uv.xy*vec2(dimension));int sampleIndex=int(floor(uv.x*float(dimension)) +
floor(uv.y*float(dimension))*dimension);float mip_separator=0.0;if (samplePos.x<0.01 || samplePos.y<0.01) {mip_separator=1.0;}
bool outBounds=sampleIndex>size.z-1 ? true : false;sampleIndex=clamp(sampleIndex,0,size.z-1);ivec2 samplePosInt=ivec2(samplePos.xy*vec2(size.xy));vec3 voxel=texelFetch(voxelTexture,
ivec3(samplePosInt.x,samplePosInt.y,sampleIndex),
int(mipNumber))
.rgb;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=background;} else {if (outBounds) {voxel=vec3(0.15,0.0,0.0);} else {if (voxel.r>0.001) {voxel.g=1.0;}
voxel.r+=mip_separator;}
glFragColor.rgb=mix(background.rgb,voxelSlab.rgb,voxelSlab.a)+voxel;glFragColor.a=1.0;}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelGrid3dDebugPixelShader = { name, shader };
//# sourceMappingURL=iblVoxelGrid3dDebug.fragment.js.map

/***/ }),

/***/ 85257:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelSlabDebugPixelShader: () => (/* binding */ iblVoxelSlabDebugPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelSlabDebugPixelShader";
const shader = `precision highp float;varying vec3 vNormalizedPosition;uniform float nearPlane;uniform float farPlane;uniform float stepSize;void main(void) {vec3 normPos=vNormalizedPosition.xyz;float chunkSize=stepSize*float(MAX_DRAW_BUFFERS);float numChunks=1.0/chunkSize;float positionInChunk=fract(normPos.z/chunkSize);float slab=floor(positionInChunk*float(MAX_DRAW_BUFFERS)) /
float(MAX_DRAW_BUFFERS);if (normPos.x<0.0 || normPos.y<0.0 || normPos.z<0.0 ||
normPos.x>1.0 || normPos.y>1.0 || normPos.z>1.0) {gl_FragColor=vec4(0.0,0.0,0.0,0.0);} else {gl_FragColor=vec4(slab,0.0,0.0,0.75);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelSlabDebugPixelShader = { name, shader };
//# sourceMappingURL=iblVoxelSlabDebug.fragment.js.map

/***/ }),

/***/ 71587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iblVoxelSlabDebugVertexShader: () => (/* binding */ iblVoxelSlabDebugVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "iblVoxelSlabDebugVertexShader";
const shader = `attribute vec3 position;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 cameraViewMatrix;uniform mat4 projection;uniform mat4 viewMatrix;void main(void) {vec4 worldPosition=(world*vec4(position,1.));gl_Position=projection*cameraViewMatrix*worldPosition;vNormalizedPosition=(viewMatrix*invWorldScale*worldPosition).rgb;vNormalizedPosition.xyz=vNormalizedPosition.xyz*vec3(0.5)+vec3(0.5);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const iblVoxelSlabDebugVertexShader = { name, shader };
//# sourceMappingURL=iblVoxelSlabDebug.vertex.js.map

/***/ }),

/***/ 83153:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingPixelShader: () => (/* binding */ imageProcessingPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89392);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_imageProcessingFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64017);
// Do not edit.




const name = "imageProcessingPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const imageProcessingPixelShader = { name, shader };
//# sourceMappingURL=imageProcessing.fragment.js.map

/***/ }),

/***/ 54509:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kernelBlurPixelShader: () => (/* binding */ kernelBlurPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js
var kernelBlurVaryingDeclaration = __webpack_require__(17382);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js
var packingFunctions = __webpack_require__(8334);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurFragment.js
// Do not edit.

const kernelBlurFragment_name = "kernelBlurFragment";
const shader = `#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[kernelBlurFragment_name] = shader;
/** @internal */
const kernelBlurFragment = { name: kernelBlurFragment_name, shader };
//# sourceMappingURL=kernelBlurFragment.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurFragment2.js
// Do not edit.

const kernelBlurFragment2_name = "kernelBlurFragment2";
const kernelBlurFragment2_shader = `#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[kernelBlurFragment2_name] = kernelBlurFragment2_shader;
/** @internal */
const kernelBlurFragment2 = { name: kernelBlurFragment2_name, shader: kernelBlurFragment2_shader };
//# sourceMappingURL=kernelBlurFragment2.js.map
;// ./node_modules/@babylonjs/core/Shaders/kernelBlur.fragment.js
// Do not edit.





const kernelBlur_fragment_name = "kernelBlurPixelShader";
const kernelBlur_fragment_shader = `uniform sampler2D textureSampler;uniform vec2 delta;varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;float sampleCoC(in vec2 offset) {float coc=texture2D(circleOfConfusionSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[kernelBlur_fragment_name] = kernelBlur_fragment_shader;
/** @internal */
const kernelBlurPixelShader = { name: kernelBlur_fragment_name, shader: kernelBlur_fragment_shader };
//# sourceMappingURL=kernelBlur.fragment.js.map

/***/ }),

/***/ 83802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kernelBlurVertexShader: () => (/* binding */ kernelBlurVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js
var kernelBlurVaryingDeclaration = __webpack_require__(17382);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurVertex.js
// Do not edit.

const kernelBlurVertex_name = "kernelBlurVertex";
const shader = `sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[kernelBlurVertex_name] = shader;
/** @internal */
const kernelBlurVertex = { name: kernelBlurVertex_name, shader };
//# sourceMappingURL=kernelBlurVertex.js.map
;// ./node_modules/@babylonjs/core/Shaders/kernelBlur.vertex.js
// Do not edit.



const kernelBlur_vertex_name = "kernelBlurVertexShader";
const kernelBlur_vertex_shader = `attribute vec2 position;uniform vec2 delta;varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[kernelBlur_vertex_name] = kernelBlur_vertex_shader;
/** @internal */
const kernelBlurVertexShader = { name: kernelBlur_vertex_name, shader: kernelBlur_vertex_shader };
//# sourceMappingURL=kernelBlur.vertex.js.map

/***/ }),

/***/ 35256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerPixelShader: () => (/* binding */ layerPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "layerPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor.rgb=toGammaSpace(baseColor.rgb);
#elif defined(CONVERT_TO_LINEAR)
baseColor.rgb=toLinearSpace(baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const layerPixelShader = { name, shader };
//# sourceMappingURL=layer.fragment.js.map

/***/ }),

/***/ 22614:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerVertexShader: () => (/* binding */ layerVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "layerVertexShader";
const shader = `attribute vec2 position;uniform vec2 scale;uniform vec2 offset;uniform mat4 textureMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 shiftedPosition=position*scale+offset;vUV=vec2(textureMatrix*vec4(shiftedPosition*madd+madd,1.0,0.0));gl_Position=vec4(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const layerVertexShader = { name, shader };
//# sourceMappingURL=layer.vertex.js.map

/***/ }),

/***/ 5823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lensFlarePixelShader: () => (/* binding */ lensFlarePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lensFlarePixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const lensFlarePixelShader = { name, shader };
//# sourceMappingURL=lensFlare.fragment.js.map

/***/ }),

/***/ 70633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lensFlareVertexShader: () => (/* binding */ lensFlareVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lensFlareVertexShader";
const shader = `attribute vec2 position;uniform mat4 viewportMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=viewportMatrix*vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const lensFlareVertexShader = { name, shader };
//# sourceMappingURL=lensFlare.vertex.js.map

/***/ }),

/***/ 93748:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export lensHighlightsPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lensHighlightsPixelShader";
const shader = `uniform sampler2D textureSampler; 
uniform float gain;uniform float threshold;uniform float screen_width;uniform float screen_height;varying vec2 vUV;vec4 highlightColor(vec4 color) {vec4 highlight=color;float luminance=dot(highlight.rgb,vec3(0.2125,0.7154,0.0721));float lum_threshold;if (threshold>1.0) { lum_threshold=0.94+0.01*threshold; }
else { lum_threshold=0.5+0.44*threshold; }
luminance=clamp((luminance-lum_threshold)*(1.0/(1.0-lum_threshold)),0.0,1.0);highlight*=luminance*gain;highlight.a=1.0;return highlight;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 original=texture2D(textureSampler,vUV);if (gain==-1.0) {gl_FragColor=vec4(0.0,0.0,0.0,1.0);return;}
float w=2.0/screen_width;float h=2.0/screen_height;float weight=1.0;vec4 blurred=vec4(0.0,0.0,0.0,0.0);
#ifdef PENTAGON
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.84*w,0.43*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.48*w,-1.29*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.61*w,1.51*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.55*w,-0.74*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.71*w,-0.52*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.94*w,1.59*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.40*w,-1.87*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.62*w,1.16*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.09*w,0.25*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.46*w,-1.71*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.08*w,2.42*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.85*w,-1.89*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.89*w,0.16*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.29*w,1.88*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.40*w,-2.81*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.54*w,2.26*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.60*w,-0.61*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.31*w,-1.30*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.83*w,2.53*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.12*w,-2.48*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.60*w,1.11*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.82*w,0.99*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.50*w,-2.81*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.85*w,3.33*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.94*w,-1.92*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.27*w,-0.53*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.95*w,2.48*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.23*w,-3.04*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.17*w,2.05*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.97*w,-0.04*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.25*w,-2.00*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.31*w,3.08*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.94*w,-2.59*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.37*w,0.64*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.13*w,1.93*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.03*w,-3.65*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.60*w,3.17*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.14*w,-1.19*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.00*w,-1.19*h)));
#else
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.85*w,0.36*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.52*w,-1.14*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.46*w,1.42*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.46*w,-0.83*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.79*w,-0.42*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.11*w,1.62*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.29*w,-2.07*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.69*w,1.39*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.28*w,0.12*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.65*w,-1.69*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.08*w,2.44*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.63*w,-1.90*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.55*w,0.31*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.13*w,1.52*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.56*w,-2.61*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.38*w,2.34*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.64*w,-0.81*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.53*w,-1.21*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.06*w,2.63*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.00*w,-2.69*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.59*w,1.32*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.82*w,0.78*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.57*w,-2.50*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.54*w,2.93*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.39*w,-1.81*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.01*w,-0.28*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.04*w,2.25*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.02*w,-3.05*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.09*w,2.25*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.07*w,-0.25*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.44*w,-1.90*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.52*w,3.05*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.68*w,-2.61*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.01*w,0.79*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.76*w,1.46*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.05*w,-2.94*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.21*w,2.88*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.84*w,-1.30*h)));blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.98*w,-0.96*h)));
#endif
blurred/=39.0;gl_FragColor=blurred;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const lensHighlightsPixelShader = { name, shader };
//# sourceMappingURL=lensHighlights.fragment.js.map

/***/ }),

/***/ 861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linePixelShader: () => (/* binding */ linePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29741);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7412);
// Do not edit.





const name = "linePixelShader";
const shader = `#include<clipPlaneFragmentDeclaration>
uniform vec4 color;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const linePixelShader = { name, shader };
//# sourceMappingURL=line.fragment.js.map

/***/ }),

/***/ 26149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lineVertexShader: () => (/* binding */ lineVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lineVertexDeclaration.js
// Do not edit.

const lineVertexDeclaration_name = "lineVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[lineVertexDeclaration_name] = shader;
/** @internal */
const lineVertexDeclaration = { name: lineVertexDeclaration_name, shader };
//# sourceMappingURL=lineVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(28764);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js
var meshUboDeclaration = __webpack_require__(96467);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lineUboDeclaration.js
// Do not edit.



const lineUboDeclaration_name = "lineUboDeclaration";
const lineUboDeclaration_shader = `layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[lineUboDeclaration_name] = lineUboDeclaration_shader;
/** @internal */
const lineUboDeclaration = { name: lineUboDeclaration_name, shader: lineUboDeclaration_shader };
//# sourceMappingURL=lineUboDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/line.vertex.js
// Do not edit.









const line_vertex_name = "lineVertexShader";
const line_vertex_shader = `#include<__decl__lineVertex>
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;attribute vec4 normal;uniform float width;uniform float aspectRatio;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
mat4 worldViewProjection=viewProjection*finalWorld;vec4 viewPosition=worldViewProjection*vec4(position,1.0);vec4 viewPositionNext=worldViewProjection*vec4(normal.xyz,1.0);vec2 currentScreen=viewPosition.xy/viewPosition.w;vec2 nextScreen=viewPositionNext.xy/viewPositionNext.w;currentScreen.x*=aspectRatio;nextScreen.x*=aspectRatio;vec2 dir=normalize(nextScreen-currentScreen);vec2 normalDir=vec2(-dir.y,dir.x);normalDir*=width/2.0;normalDir.x/=aspectRatio;vec4 offset=vec4(normalDir*normal.w,0.0,0.0);gl_Position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[line_vertex_name] = line_vertex_shader;
/** @internal */
const lineVertexShader = { name: line_vertex_name, shader: line_vertex_shader };
//# sourceMappingURL=line.vertex.js.map

/***/ }),

/***/ 19278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodPixelShader: () => (/* binding */ lodPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lodPixelShader";
const shader = `#extension GL_EXT_shader_texture_lod : enable
precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)
{gl_FragColor=texture2DLodEXT(textureSampler,vUV,lod);if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const lodPixelShader = { name, shader };
//# sourceMappingURL=lod.fragment.js.map

/***/ }),

/***/ 92905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodCubePixelShader: () => (/* binding */ lodCubePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "lodCubePixelShader";
const shader = `precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x),lod);
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x),lod);
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x),lod);
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x),lod);
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001),lod);
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001),lod);
#endif
if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const lodCubePixelShader = { name, shader };
//# sourceMappingURL=lodCube.fragment.js.map

/***/ }),

/***/ 30:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererPixelShader: () => (/* binding */ meshUVSpaceRendererPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererPixelShader";
const shader = `precision highp float;varying vec2 vDecalTC;uniform sampler2D textureSampler;void main(void) {if (vDecalTC.x<0. || vDecalTC.x>1. || vDecalTC.y<0. || vDecalTC.y>1.) {discard;}
gl_FragColor=texture2D(textureSampler,vDecalTC);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererPixelShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRenderer.fragment.js.map

/***/ }),

/***/ 99764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererVertexShader: () => (/* binding */ meshUVSpaceRendererVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65523);
// Do not edit.











const name = "meshUVSpaceRendererVertexShader";
const shader = `precision highp float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 projMatrix;varying vec2 vDecalTC;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
void main(void) {vec3 positionUpdated=position;vec3 normalUpdated=normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);mat3 normWorldSM=mat3(finalWorld);vec3 vNormalW;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
vec3 normalView=normalize((projMatrix*vec4(vNormalW,0.0)).xyz);vec3 decalTC=(projMatrix*worldPos).xyz;vDecalTC=decalTC.xy;gl_Position=vec4(uv*2.0-1.0,normalView.z>0.0 ? 2. : decalTC.z,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererVertexShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRenderer.vertex.js.map

/***/ }),

/***/ 15105:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererFinaliserPixelShader: () => (/* binding */ meshUVSpaceRendererFinaliserPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererFinaliserPixelShader";
const shader = `precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D maskTextureSampler;uniform vec2 textureSize;void main() {vec4 mask=texture2D(maskTextureSampler,vUV).rgba;if (mask.r>0.5) {gl_FragColor=texture2D(textureSampler,vUV);} else {vec2 texelSize=4.0/textureSize;vec2 uv_p01=vUV+vec2(-1.0,0.0)*texelSize;vec2 uv_p21=vUV+vec2(1.0,0.0)*texelSize;vec2 uv_p10=vUV+vec2(0.0,-1.0)*texelSize;vec2 uv_p12=vUV+vec2(0.0,1.0)*texelSize;float mask_p01=texture2D(maskTextureSampler,uv_p01).r;float mask_p21=texture2D(maskTextureSampler,uv_p21).r;float mask_p10=texture2D(maskTextureSampler,uv_p10).r;float mask_p12=texture2D(maskTextureSampler,uv_p12).r;vec4 col=vec4(0.0,0.0,0.0,0.0);float total_weight=0.0;if (mask_p01>0.5) {col+=texture2D(textureSampler,uv_p01);total_weight+=1.0;}
if (mask_p21>0.5) {col+=texture2D(textureSampler,uv_p21);total_weight+=1.0;}
if (mask_p10>0.5) {col+=texture2D(textureSampler,uv_p10);total_weight+=1.0;}
if (mask_p12>0.5) {col+=texture2D(textureSampler,uv_p12);total_weight+=1.0;}
if (total_weight>0.0) {gl_FragColor=col/total_weight;} else {gl_FragColor=col;}}}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererFinaliserPixelShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererFinaliser.fragment.js.map

/***/ }),

/***/ 18507:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererFinaliserVertexShader: () => (/* binding */ meshUVSpaceRendererFinaliserVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererFinaliserVertexShader";
const shader = `precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec2 vUV;void main() {gl_Position=worldViewProjection*vec4(position,1.0);vUV=uv;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererFinaliserVertexShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererFinaliser.vertex.js.map

/***/ }),

/***/ 78439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererMaskerPixelShader: () => (/* binding */ meshUVSpaceRendererMaskerPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererMaskerPixelShader";
const shader = `varying vec2 vUV;void main(void) {gl_FragColor=vec4(1.0,1.0,1.0,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererMaskerPixelShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererMasker.fragment.js.map

/***/ }),

/***/ 54561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshUVSpaceRendererMaskerVertexShader: () => (/* binding */ meshUVSpaceRendererMaskerVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "meshUVSpaceRendererMaskerVertexShader";
const shader = `attribute vec2 uv;varying vec2 vUV;void main(void) {gl_Position=vec4(vec2(uv.x,uv.y)*2.0-1.0,0.,1.0);vUV=uv;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const meshUVSpaceRendererMaskerVertexShader = { name, shader };
//# sourceMappingURL=meshUVSpaceRendererMasker.vertex.js.map

/***/ }),

/***/ 14475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export minmaxReduxPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "minmaxReduxPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#if defined(INITIAL)
uniform sampler2D sourceTexture;uniform vec2 texSize;void main(void)
{ivec2 coord=ivec2(vUV*(texSize-1.0));float f1=texelFetch(sourceTexture,coord,0).r;float f2=texelFetch(sourceTexture,coord+ivec2(1,0),0).r;float f3=texelFetch(sourceTexture,coord+ivec2(1,1),0).r;float f4=texelFetch(sourceTexture,coord+ivec2(0,1),0).r;float minz=min(min(min(f1,f2),f3),f4);
#ifdef DEPTH_REDUX
float maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#else
float maxz=max(max(max(f1,f2),f3),f4);
#endif
glFragColor=vec4(minz,maxz,0.,0.);}
#elif defined(MAIN)
uniform vec2 texSize;void main(void)
{ivec2 coord=ivec2(vUV*(texSize-1.0));vec2 f1=texelFetch(textureSampler,coord,0).rg;vec2 f2=texelFetch(textureSampler,coord+ivec2(1,0),0).rg;vec2 f3=texelFetch(textureSampler,coord+ivec2(1,1),0).rg;vec2 f4=texelFetch(textureSampler,coord+ivec2(0,1),0).rg;float minz=min(min(min(f1.x,f2.x),f3.x),f4.x);float maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);glFragColor=vec4(minz,maxz,0.,0.);}
#elif defined(ONEBEFORELAST)
uniform ivec2 texSize;void main(void)
{ivec2 coord=ivec2(vUV*vec2(texSize-1));vec2 f1=texelFetch(textureSampler,coord % texSize,0).rg;vec2 f2=texelFetch(textureSampler,(coord+ivec2(1,0)) % texSize,0).rg;vec2 f3=texelFetch(textureSampler,(coord+ivec2(1,1)) % texSize,0).rg;vec2 f4=texelFetch(textureSampler,(coord+ivec2(0,1)) % texSize,0).rg;float minz=min(f1.x,f2.x);float maxz=max(f1.y,f2.y);glFragColor=vec4(minz,maxz,0.,0.);}
#elif defined(LAST)
void main(void)
{glFragColor=vec4(0.);if (true) { 
discard;}}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const minmaxReduxPixelShader = { name, shader };
//# sourceMappingURL=minmaxRedux.fragment.js.map

/***/ }),

/***/ 25830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   motionBlurPixelShader: () => (/* binding */ motionBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "motionBlurPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform float motionStrength;uniform float motionScale;uniform vec2 screenSize;
#ifdef OBJECT_BASED
uniform sampler2D velocitySampler;
#else
uniform sampler2D depthSampler;uniform mat4 inverseViewProjection;uniform mat4 prevViewProjection;uniform mat4 projection;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
vec2 texelSize=1.0/screenSize;vec4 velocityColor=texture2D(velocitySampler,vUV);velocityColor.rg=velocityColor.rg*2.0-vec2(1.0);vec2 velocity=vec2(pow(velocityColor.r,3.0),pow(velocityColor.g,3.0))*velocityColor.a;velocity*=motionScale*motionStrength;float speed=length(velocity/texelSize);int samplesCount=int(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;float hlim=float(-samplesCount)*0.5+0.5;vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i)
{if (i>=samplesCount)
break;vec2 offset=vUV+velocity*(hlim+float(i));
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset,0.0);
#else
result+=texture2D(textureSampler,offset);
#endif
}
gl_FragColor=result/float(samplesCount);gl_FragColor.a=1.0;
#else
vec2 texelSize=1.0/screenSize;float depth=texture2D(depthSampler,vUV).r;depth=projection[2].z+projection[3].z/depth; 
vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);cpos=inverseViewProjection*cpos;cpos/=cpos.w;vec4 ppos=prevViewProjection*cpos;ppos/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;float speed=length(velocity/texelSize);int nSamples=int(clamp(speed,1.0,SAMPLES));vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i) {if (i>=nSamples)
break;vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset1,0.0);
#else
result+=texture2D(textureSampler,offset1);
#endif
}
gl_FragColor=result/float(nSamples);
#endif
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const motionBlurPixelShader = { name, shader };
//# sourceMappingURL=motionBlur.fragment.js.map

/***/ }),

/***/ 39081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export noisePixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "noisePixelShader";
const shader = `uniform float brightness;uniform float persistence;uniform float timeScale;varying vec2 vUV;vec2 hash22(vec2 p)
{p=p*mat2(127.1,311.7,269.5,183.3);p=-1.0+2.0*fract(sin(p)*43758.5453123);return sin(p*6.283+timeScale);}
float interpolationNoise(vec2 p)
{vec2 pi=floor(p);vec2 pf=p-pi;vec2 w=pf*pf*(3.-2.*pf);float f00=dot(hash22(pi+vec2(.0,.0)),pf-vec2(.0,.0));float f01=dot(hash22(pi+vec2(.0,1.)),pf-vec2(.0,1.));float f10=dot(hash22(pi+vec2(1.0,0.)),pf-vec2(1.0,0.));float f11=dot(hash22(pi+vec2(1.0,1.)),pf-vec2(1.0,1.));float xm1=mix(f00,f10,w.x);float xm2=mix(f01,f11,w.x);float ym=mix(xm1,xm2,w.y); 
return ym;}
float perlinNoise2D(float x,float y)
{float sum=0.0;float frequency=0.0;float amplitude=0.0;for(int i=0; i<OCTAVES; i++)
{frequency=pow(2.0,float(i));amplitude=pow(persistence,float(i));sum=sum+interpolationNoise(vec2(x*frequency,y*frequency))*amplitude;}
return sum;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float x=abs(vUV.x);float y=abs(vUV.y);float noise=brightness+(1.0-brightness)*perlinNoise2D(x,y);gl_FragColor=vec4(noise,noise,noise,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const noisePixelShader = { name, shader };
//# sourceMappingURL=noise.fragment.js.map

/***/ }),

/***/ 20449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitBackBlendPixelShader: () => (/* binding */ oitBackBlendPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitBackBlendPixelShader";
const shader = `precision highp float;uniform sampler2D uBackColor;void main() {glFragColor=texelFetch(uBackColor,ivec2(gl_FragCoord.xy),0);if (glFragColor.a==0.0) { 
discard;}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const oitBackBlendPixelShader = { name, shader };
//# sourceMappingURL=oitBackBlend.fragment.js.map

/***/ }),

/***/ 19015:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitFinalPixelShader: () => (/* binding */ oitFinalPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "oitFinalPixelShader";
const shader = `precision highp float;uniform sampler2D uFrontColor;uniform sampler2D uBackColor;void main() {ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec4 frontColor=texelFetch(uFrontColor,fragCoord,0);vec4 backColor=texelFetch(uBackColor,fragCoord,0);float alphaMultiplier=1.0-frontColor.a;glFragColor=vec4(
frontColor.rgb+alphaMultiplier*backColor.rgb,
frontColor.a+backColor.a
);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const oitFinalPixelShader = { name, shader };
//# sourceMappingURL=oitFinal.fragment.js.map

/***/ }),

/***/ 2641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlinePixelShader: () => (/* binding */ outlinePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7412);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29741);
// Do not edit.





const name = "outlinePixelShader";
const shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform vec4 color;
#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#include<logDepthFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const outlinePixelShader = { name, shader };
//# sourceMappingURL=outline.fragment.js.map

/***/ }),

/***/ 99899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlineVertexShader: () => (/* binding */ outlineVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71636);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65523);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47314);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2215);
// Do not edit.















const name = "outlineVertexShader";
const shader = `attribute vec3 position;attribute vec3 normal;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform float offset;
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef ALPHATEST
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
vec3 offsetPosition=positionUpdated+(normalUpdated*offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(offsetPosition,1.0);gl_Position=viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const outlineVertexShader = { name, shader };
//# sourceMappingURL=outline.vertex.js.map

/***/ }),

/***/ 16066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesPixelShader: () => (/* binding */ particlesPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6194);
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89392);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_imageProcessingFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64017);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7806);
/* harmony import */ var _ShadersInclude_clipPlaneFragment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7412);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29741);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2360);
// Do not edit.










const name = "particlesPixelShader";
const shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying vec4 remapRanges;uniform sampler2D rampSampler;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;
#ifdef RAMPGRADIENT
float alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
float sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor.rgb=toLinearSpace(baseColor.rgb);
#else
#ifdef IMAGEPROCESSING
baseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);
#endif
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const particlesPixelShader = { name, shader };
//# sourceMappingURL=particles.fragment.js.map

/***/ }),

/***/ 59384:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesVertexShader: () => (/* binding */ particlesVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71636);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86560);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_clipPlaneVertex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47314);
/* harmony import */ var _ShadersInclude_fogVertex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16470);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2215);
// Do not edit.







const name = "particlesVertexShader";
const shader = `attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;
#ifdef ANIMATESHEET
attribute float cellIndex;
#endif
#ifndef BILLBOARD
attribute vec3 direction;
#endif
#ifdef BILLBOARDSTRETCHED
attribute vec3 direction;
#endif
#ifdef RAMPGRADIENT
attribute vec4 remapData;
#endif
attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;
#ifdef ANIMATESHEET
uniform vec3 particlesInfos; 
#endif
varying vec2 vUV;varying vec4 vColor;varying vec3 vPositionW;
#ifdef RAMPGRADIENT
varying vec4 remapRanges;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform mat4 invView;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform vec3 eyePosition;
#endif
vec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
vec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
vec3 row1=direction;
#else
vec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 cornerPos;cornerPos=(vec2(offset.x-0.5,offset.y -0.5)-translationPivot)*size;
#ifdef BILLBOARD
vec3 rotatedCorner;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=position-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=position-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 viewPos=(view*vec4(position,1.0)).xyz+rotatedCorner;vPositionW=(invView*vec4(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
remapRanges=remapData;
#endif
gl_Position=projection*vec4(viewPos,1.0);
#else
vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(direction);vPositionW=rotate(yaxis,rotatedCorner);gl_Position=projection*view*vec4(vPositionW,1.0);
#endif
vColor=color;
#ifdef ANIMATESHEET
float rowOffset=floor(cellIndex*particlesInfos.z);float columnOffset=cellIndex-rowOffset/particlesInfos.z;vec2 uvScale=particlesInfos.xy;vec2 uvOffset=vec2(offset.x ,1.0-offset.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;
#else
vUV=offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
vec4 worldPos=vec4(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const particlesVertexShader = { name, shader };
//# sourceMappingURL=particles.vertex.js.map

/***/ }),

/***/ 79820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passPixelShader: () => (/* binding */ passPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "passPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const passPixelShader = { name, shader };
//# sourceMappingURL=pass.fragment.js.map

/***/ }),

/***/ 4511:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passCubePixelShader: () => (/* binding */ passCubePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "passCubePixelShader";
const shader = `varying vec2 vUV;uniform samplerCube textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001));
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const passCubePixelShader = { name, shader };
//# sourceMappingURL=passCube.fragment.js.map

/***/ }),

/***/ 84037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pbrPixelShader: () => (/* binding */ pbrPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassDeclaration.js
var prePassDeclaration = __webpack_require__(42694);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/oitDeclaration.js
var oitDeclaration = __webpack_require__(89986);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js
var decalFragmentDeclaration = __webpack_require__(48109);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentDeclaration.js
// Do not edit.


const pbrFragmentDeclaration_name = "pbrFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiveColor;uniform float visibility;uniform vec3 vAmbientColor;
#ifdef ALBEDO
uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform vec4 vAmbientInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef OPACITY
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize; 
#endif
#endif
#if defined(SS_REFRACTION) && defined(SS_USE_LOCAL_REFRACTIONMAP_CUBIC)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize; 
#endif
#ifdef CLEARCOAT
uniform vec2 vClearCoatParams;uniform vec4 vClearCoatRefractionParams;
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform vec2 vClearCoatTangentSpaceParams;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT
uniform vec4 vClearCoatTintParams;uniform float clearCoatColorAtDistance;
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#endif
#ifdef IRIDESCENCE
uniform vec4 vIridescenceParams;
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
uniform vec3 vAnisotropy;
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
uniform vec4 vSheenColor;
#ifdef SHEEN_ROUGHNESS
uniform float vSheenRoughness;
#endif
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionMicrosurfaceInfos;uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#ifdef REALTIME_FILTERING
uniform vec2 vRefractionFilteringInfo;
#endif
#ifdef SS_DISPERSION
uniform float dispersion;
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
uniform vec2 vThicknessParam;uniform vec3 vDiffusionDistance;uniform vec4 vTintColor;uniform vec3 vSubSurfaceIntensity;uniform vec4 vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrFragmentDeclaration_name] = shader;
/** @internal */
const pbrFragmentDeclaration = { name: pbrFragmentDeclaration_name, shader };
//# sourceMappingURL=pbrFragmentDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrUboDeclaration.js
var pbrUboDeclaration = __webpack_require__(4096);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(4980);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js
// Do not edit.


const pbrFragmentExtraDeclaration_name = "pbrFragmentExtraDeclaration";
const pbrFragmentExtraDeclaration_shader = `varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrFragmentExtraDeclaration_name] = pbrFragmentExtraDeclaration_shader;
/** @internal */
const pbrFragmentExtraDeclaration = { name: pbrFragmentExtraDeclaration_name, shader: pbrFragmentExtraDeclaration_shader };
//# sourceMappingURL=pbrFragmentExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js
var lightFragmentDeclaration = __webpack_require__(92270);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js
var lightUboDeclaration = __webpack_require__(22448);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js
var samplerFragmentDeclaration = __webpack_require__(63022);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js
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
varying vec2 v_VARYINGNAME_UV;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[samplerFragmentAlternateDeclaration_name] = samplerFragmentAlternateDeclaration_shader;
/** @internal */
const samplerFragmentAlternateDeclaration = { name: samplerFragmentAlternateDeclaration_name, shader: samplerFragmentAlternateDeclaration_shader };
//# sourceMappingURL=samplerFragmentAlternateDeclaration.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentSamplersDeclaration.js
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
uniform sampler2D clearCoatRoughnessSampler;
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
uniform sampler2D sheenRoughnessSampler;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
#define sampleRefraction(s,c) textureCube(s,c)
uniform samplerCube refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube refractionSamplerLow;uniform samplerCube refractionSamplerHigh;
#endif
#else
#define sampleRefraction(s,c) texture2D(s,c)
uniform sampler2D refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D refractionSamplerLow;uniform sampler2D refractionSamplerHigh;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_SAMPLERNAME_,translucencyColor)
#endif
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfSampler;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrFragmentSamplersDeclaration_name] = pbrFragmentSamplersDeclaration_shader;
/** @internal */
const pbrFragmentSamplersDeclaration = { name: pbrFragmentSamplersDeclaration_name, shader: pbrFragmentSamplersDeclaration_shader };
//# sourceMappingURL=pbrFragmentSamplersDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js
var imageProcessingDeclaration = __webpack_require__(89392);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js
var subSurfaceScatteringFunctions = __webpack_require__(96044);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/importanceSampling.js
var importanceSampling = __webpack_require__(21469);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrHelperFunctions.js
// Do not edit.

const pbrHelperFunctions_name = "pbrHelperFunctions";
const pbrHelperFunctions_shader = `#define MINIMUMVARIANCE 0.0005
float convertRoughnessToAverageSlope(float roughness)
{return square(roughness)+MINIMUMVARIANCE;}
float fresnelGrazingReflectance(float reflectance0) {float reflectance90=saturate(reflectance0*25.0);return reflectance90;}
vec2 getAARoughnessFactors(vec3 normalVector) {
#ifdef SPECULARAA
vec3 nDfdx=dFdx(normalVector.xyz);vec3 nDfdy=dFdy(normalVector.xyz);float slopeSquare=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));float geometricRoughnessFactor=pow(saturate(slopeSquare),0.333);float geometricAlphaGFactor=sqrt(slopeSquare);geometricAlphaGFactor*=0.75;return vec2(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2(0.);
#endif
}
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_LEGACY
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 anisotropicFrameDirection;if (anisotropy>=0.0) {anisotropicFrameDirection=B;} else {anisotropicFrameDirection=T;}
vec3 anisotropicFrameTangent=cross(normalize(anisotropicFrameDirection),V);vec3 anisotropicFrameNormal=cross(anisotropicFrameTangent,anisotropicFrameDirection);vec3 anisotropicNormal=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));return anisotropicNormal;}
#else
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(mix(alphaG,1.0,anisotropy*anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG,MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 bentNormal=cross(B,V);bentNormal=normalize(cross(bentNormal,B));float a=square(square(1.0-anisotropy*(1.0-roughness)));bentNormal=normalize(mix(bentNormal,N,a));return bentNormal;}
#endif
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
vec3 cocaLambert(vec3 alpha,float distance) {return exp(-alpha*distance);}
vec3 cocaLambert(float NdotVRefract,float NdotLRefract,vec3 alpha,float thickness) {return cocaLambert(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));}
vec3 computeColorAtDistanceInMedia(vec3 color,float distance) {return -log(color)/distance;}
vec3 computeClearCoatAbsorption(float NdotVRefract,float NdotLRefract,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 clearCoatAbsorption=mix(vec3(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);return clearCoatAbsorption;}
#endif
#ifdef MICROSURFACEAUTOMATIC
float computeDefaultMicroSurface(float microSurface,vec3 reflectivityColor)
{const float kReflectivityNoAlphaWorkflow_SmoothnessMax=0.95;float reflectivityLuminance=getLuminance(reflectivityColor);float reflectivityLuma=sqrt(reflectivityLuminance);microSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;return microSurface;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrHelperFunctions_name] = pbrHelperFunctions_shader;
/** @internal */
const pbrHelperFunctions = { name: pbrHelperFunctions_name, shader: pbrHelperFunctions_shader };
//# sourceMappingURL=pbrHelperFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js
var imageProcessingFunctions = __webpack_require__(64017);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js
var shadowsFragmentFunctions = __webpack_require__(66812);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/harmonicsFunctions.js
var harmonicsFunctions = __webpack_require__(19495);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingSetupFunctions.js
// Do not edit.

const pbrDirectLightingSetupFunctions_name = "pbrDirectLightingSetupFunctions";
const pbrDirectLightingSetupFunctions_shader = `struct preLightingInfo
{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float roughness;
#ifdef IRIDESCENCE
float iridescenceIntensity;
#endif
};preLightingInfo computePointAndSpotPreLightingInfo(vec4 lightData,vec3 V,vec3 N,vec3 posW) {preLightingInfo result;result.lightOffset=lightData.xyz-posW;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);result.L=normalize(result.lightOffset);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);return result;}
preLightingInfo computeDirectionalPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.lightDistance=length(-lightData.xyz);result.L=normalize(-lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);return result;}
preLightingInfo computeHemisphericPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.NdotL=dot(N,lightData.xyz)*0.5+0.5;result.NdotL=saturateEps(result.NdotL);result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));
#endif
return result;}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrDirectLightingSetupFunctions_name] = pbrDirectLightingSetupFunctions_shader;
/** @internal */
const pbrDirectLightingSetupFunctions = { name: pbrDirectLightingSetupFunctions_name, shader: pbrDirectLightingSetupFunctions_shader };
//# sourceMappingURL=pbrDirectLightingSetupFunctions.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingFalloffFunctions.js
// Do not edit.

const pbrDirectLightingFalloffFunctions_name = "pbrDirectLightingFalloffFunctions";
const pbrDirectLightingFalloffFunctions_shader = `float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
{return max(0.,1.0-length(lightOffset)/range);}
float computeDistanceLightFalloff_Physical(float lightDistanceSquared)
{return 1.0/maxEps(lightDistanceSquared);}
float computeDistanceLightFalloff_GLTF(float lightDistanceSquared,float inverseSquaredRange)
{float lightDistanceFalloff=1.0/maxEps(lightDistanceSquared);float factor=lightDistanceSquared*inverseSquaredRange;float attenuation=saturate(1.0-factor*factor);attenuation*=attenuation;lightDistanceFalloff*=attenuation;return lightDistanceFalloff;}
float computeDistanceLightFalloff(vec3 lightOffset,float lightDistanceSquared,float range,float inverseSquaredRange)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
float computeDirectionalLightFalloff_Standard(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent)
{float falloff=0.0;float cosAngle=maxEps(dot(-lightDirection,directionToLightCenterW));if (cosAngle>=cosHalfAngle)
{falloff=max(0.,pow(cosAngle,exponent));}
return falloff;}
float computeDirectionalLightFalloff_IES(vec3 lightDirection,vec3 directionToLightCenterW,sampler2D iesLightSampler)
{float cosAngle=dot(-lightDirection,directionToLightCenterW);float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
float computeDirectionalLightFalloff_Physical(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle)
{const float kMinusLog2ConeAngleIntensityRatio=6.64385618977; 
float concentrationKappa=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);vec4 lightDirectionSpreadSG=vec4(-lightDirection*concentrationKappa,-concentrationKappa);float falloff=exp2(dot(vec4(directionToLightCenterW,1.0),lightDirectionSpreadSG));return falloff;}
float computeDirectionalLightFalloff_GLTF(vec3 lightDirection,vec3 directionToLightCenterW,float lightAngleScale,float lightAngleOffset)
{float cd=dot(-lightDirection,directionToLightCenterW);float falloff=saturate(cd*lightAngleScale+lightAngleOffset);falloff*=falloff;return falloff;}
float computeDirectionalLightFalloff(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent,float lightAngleScale,float lightAngleOffset)
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
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrDirectLightingFalloffFunctions_name] = pbrDirectLightingFalloffFunctions_shader;
/** @internal */
const pbrDirectLightingFalloffFunctions = { name: pbrDirectLightingFalloffFunctions_name, shader: pbrDirectLightingFalloffFunctions_shader };
//# sourceMappingURL=pbrDirectLightingFalloffFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBRDFFunctions.js
var pbrBRDFFunctions = __webpack_require__(8709);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/hdrFilteringFunctions.js
var hdrFilteringFunctions = __webpack_require__(78741);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingFunctions.js
// Do not edit.

const pbrDirectLightingFunctions_name = "pbrDirectLightingFunctions";
const pbrDirectLightingFunctions_shader = `#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef CLEARCOAT
vec4 clearCoat;
#endif
#ifdef SHEEN
vec3 sheen;
#endif
};float adjustRoughnessFromLightProperties(float roughness,float lightRadius,float lightDistance) {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
float lightRoughness=lightRadius/lightDistance;float totalRoughness=saturate(lightRoughness+roughness);return totalRoughness;
#else
return roughness;
#endif
}
vec3 computeHemisphericDiffuseLighting(preLightingInfo info,vec3 lightColor,vec3 groundColor) {return mix(groundColor,lightColor,info.NdotL);}
vec3 computeDiffuseLighting(preLightingInfo info,vec3 lightColor) {float diffuseTerm=diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness);return diffuseTerm*info.attenuation*info.NdotL*lightColor;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return toLinearSpace(textureColor);}
#ifdef SS_TRANSLUCENCY
vec3 computeDiffuseAndTransmittedLighting(preLightingInfo info,vec3 lightColor,vec3 transmittance) {float NdotL=absEps(info.NdotLUnclamped);float wrapNdotL=computeWrappedDiffuseNdotL(NdotL,0.02);float trAdapt=step(0.,info.NdotLUnclamped);vec3 transmittanceNdotL=mix(transmittance*wrapNdotL,vec3(wrapNdotL),trAdapt);float diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;}
#endif
#ifdef SPECULARTERM
vec3 computeSpecularLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
float smithVisibility=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef ANISOTROPIC
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float TdotH=dot(T,info.H);float BdotH=dot(B,info.H);float TdotV=dot(T,V);float BdotV=dot(B,V);float TdotL=dot(T,info.L);float BdotL=dot(B,info.L);float alphaG=convertRoughnessToAverageSlope(info.roughness);vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,square(geometricRoughnessFactor));vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef CLEARCOAT
vec4 computeClearCoatLighting(preLightingInfo info,vec3 Ncc,float geometricRoughnessFactor,float clearCoatIntensity,vec3 lightColor) {float NccdotL=saturateEps(dot(Ncc,info.L));float NccdotH=saturateEps(dot(Ncc,info.H));float clearCoatRoughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(clearCoatRoughness);float fresnel=fresnelSchlickGGX(info.VdotH,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnel*=clearCoatIntensity;float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);float kelemenVisibility=visibility_Kelemen(info.VdotH);float clearCoatTerm=fresnel*distribution*kelemenVisibility;return vec4(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);}
vec3 computeClearCoatLightingAbsorption(float NdotVRefract,vec3 L,vec3 Ncc,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 LRefract=-refract(L,Ncc,vClearCoatRefractionParams.y);float NdotLRefract=saturateEps(dot(Ncc,LRefract));vec3 absorption=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);return absorption;}
#endif
#ifdef SHEEN
vec3 computeSheenLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);float fresnel=1.;float distribution=normalDistributionFunction_CharlieSheen(NdotH,alphaG);/*#ifdef SHEEN_SOFTER
float visibility=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
float visibility=visibility_Ashikhmin(info.NdotL,info.NdotV);/* #endif */
float sheenTerm=fresnel*distribution*visibility;return sheenTerm*info.attenuation*info.NdotL*lightColor;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrDirectLightingFunctions_name] = pbrDirectLightingFunctions_shader;
/** @internal */
const pbrDirectLightingFunctions = { name: pbrDirectLightingFunctions_name, shader: pbrDirectLightingFunctions_shader };
//# sourceMappingURL=pbrDirectLightingFunctions.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrIBLFunctions.js
// Do not edit.

const pbrIBLFunctions_name = "pbrIBLFunctions";
const pbrIBLFunctions_shader = `#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels);return lod;}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {float lod=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {float temp=NdotVUnclamped+ambientOcclusion;return saturate(square(temp)-1.0+ambientOcclusion);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {vec3 reflection=reflect(view,normal);float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));return square(temp);}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {float microsurfaceAverageSlope=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrIBLFunctions_name] = pbrIBLFunctions_shader;
/** @internal */
const pbrIBLFunctions = { name: pbrIBLFunctions_name, shader: pbrIBLFunctions_shader };
//# sourceMappingURL=pbrIBLFunctions.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js
var bumpFragmentMainFunctions = __webpack_require__(17494);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js
var bumpFragmentFunctions = __webpack_require__(8269);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js
var reflectionFunction = __webpack_require__(18223);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragment.js
var decalFragment = __webpack_require__(11205);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAlbedoOpacity.js
// Do not edit.


const pbrBlockAlbedoOpacity_name = "pbrBlockAlbedoOpacity";
const pbrBlockAlbedoOpacity_shader = `struct albedoOpacityOutParams
{vec3 surfaceAlbedo;float alpha;};
#define pbr_inline
albedoOpacityOutParams albedoOpacityBlock(
in vec4 vAlbedoColor
#ifdef ALBEDO
,in vec4 albedoTexture
,in vec2 albedoInfos
#endif
#ifdef OPACITY
,in vec4 opacityMap
,in vec2 vOpacityInfos
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
#ifdef DECAL
,in vec4 decalColor
,in vec4 vDecalInfos
#endif 
)
{albedoOpacityOutParams outParams;vec3 surfaceAlbedo=vAlbedoColor.rgb;float alpha=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpace(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifndef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=vColor.rgb;
#endif
#ifdef DETAIL
float detailAlbedo=2.0*mix(0.5,detailColor.r,vDetailInfos.y);surfaceAlbedo.rgb=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
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
alpha*=vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST 
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.alpha=alpha;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockAlbedoOpacity_name] = pbrBlockAlbedoOpacity_shader;
/** @internal */
const pbrBlockAlbedoOpacity = { name: pbrBlockAlbedoOpacity_name, shader: pbrBlockAlbedoOpacity_shader };
//# sourceMappingURL=pbrBlockAlbedoOpacity.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectivity.js
// Do not edit.

const pbrBlockReflectivity_name = "pbrBlockReflectivity";
const pbrBlockReflectivity_shader = `struct reflectivityOutParams
{float microSurface;float roughness;vec3 surfaceReflectivityColor;
#ifdef METALLICWORKFLOW
vec3 surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
vec3 ambientOcclusionColor;
#endif
#if DEBUGMODE>0
#ifdef METALLICWORKFLOW
vec2 metallicRoughness;
#ifdef REFLECTIVITY
vec4 surfaceMetallicColorMap;
#endif
#ifndef FROSTBITE_REFLECTANCE
vec3 metallicF0;
#endif
#else
#ifdef REFLECTIVITY
vec4 surfaceReflectivityColorMap;
#endif
#endif
#endif
};
#define pbr_inline
reflectivityOutParams reflectivityBlock(
in vec4 vReflectivityColor
#ifdef METALLICWORKFLOW
,in vec3 surfaceAlbedo
,in vec4 metallicReflectanceFactors
#endif
#ifdef REFLECTIVITY
,in vec3 reflectivityInfos
,in vec4 surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,in vec3 ambientOcclusionColorIn
#endif
#ifdef MICROSURFACEMAP
,in vec4 microSurfaceTexel
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
)
{reflectivityOutParams outParams;float microSurface=vReflectivityColor.a;vec3 surfaceReflectivityColor=vReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec2 metallicRoughness=surfaceReflectivityColor.rg;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
vec3 aoStoreInMetalMap=vec3(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
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
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);float loLerp=mix(0.,metallicRoughness.g,detailRoughness*2.);float hiLerp=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#if DEBUGMODE>0
outParams.metallicRoughness=metallicRoughness;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;vec3 baseColor=surfaceAlbedo;
#ifdef FROSTBITE_REFLECTANCE
outParams.surfaceAlbedo=baseColor.rgb*(1.0-metallicRoughness.r);surfaceReflectivityColor=mix(0.16*reflectance*reflectance,baseColor,metallicRoughness.r);
#else
vec3 metallicF0=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=metallicF0;
#endif
outParams.surfaceAlbedo=mix(baseColor.rgb*(1.0-metallicF0),vec3(0.,0.,0.),metallicRoughness.r);surfaceReflectivityColor=mix(metallicF0,baseColor,metallicRoughness.r);
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
microSurface=saturate(microSurface);float roughness=1.-microSurface;outParams.microSurface=microSurface;outParams.roughness=roughness;outParams.surfaceReflectivityColor=surfaceReflectivityColor;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockReflectivity_name] = pbrBlockReflectivity_shader;
/** @internal */
const pbrBlockReflectivity = { name: pbrBlockReflectivity_name, shader: pbrBlockReflectivity_shader };
//# sourceMappingURL=pbrBlockReflectivity.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAmbientOcclusion.js
// Do not edit.

const pbrBlockAmbientOcclusion_name = "pbrBlockAmbientOcclusion";
const pbrBlockAmbientOcclusion_shader = `struct ambientOcclusionOutParams
{vec3 ambientOcclusionColor;
#if DEBUGMODE>0 && defined(AMBIENT)
vec3 ambientOcclusionColorMap;
#endif
};ambientOcclusionOutParams ambientOcclusionBlock(
#ifdef AMBIENT
in vec3 ambientOcclusionColorMap_,
in vec4 vAmbientInfos
#endif
)
{ambientOcclusionOutParams outParams;vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockAmbientOcclusion_name] = pbrBlockAmbientOcclusion_shader;
/** @internal */
const pbrBlockAmbientOcclusion = { name: pbrBlockAmbientOcclusion_name, shader: pbrBlockAmbientOcclusion_shader };
//# sourceMappingURL=pbrBlockAmbientOcclusion.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAlphaFresnel.js
// Do not edit.

const pbrBlockAlphaFresnel_name = "pbrBlockAlphaFresnel";
const pbrBlockAlphaFresnel_shader = `#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{float alpha;};
#define pbr_inline
alphaFresnelOutParams alphaFresnelBlock(
in vec3 normalW,
in vec3 viewDirectionW,
in float alpha,
in float microSurface
)
{alphaFresnelOutParams outParams;float opacityPerceptual=alpha;
#ifdef LINEARALPHAFRESNEL
float opacity0=opacityPerceptual;
#else
float opacity0=opacityPerceptual*opacityPerceptual;
#endif
float opacity90=fresnelGrazingReflectance(opacity0);vec3 normalForward=faceforward(normalW,-viewDirectionW,normalW);outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)),vec3(opacity0),vec3(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
return outParams;}
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockAlphaFresnel_name] = pbrBlockAlphaFresnel_shader;
/** @internal */
const pbrBlockAlphaFresnel = { name: pbrBlockAlphaFresnel_name, shader: pbrBlockAlphaFresnel_shader };
//# sourceMappingURL=pbrBlockAlphaFresnel.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAnisotropic.js
// Do not edit.

const pbrBlockAnisotropic_name = "pbrBlockAnisotropic";
const pbrBlockAnisotropic_shader = `#ifdef ANISOTROPIC
struct anisotropicOutParams
{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;
#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)
vec3 anisotropyMapData;
#endif
};
#define pbr_inline
anisotropicOutParams anisotropicBlock(
in vec3 vAnisotropy,
in float roughness,
#ifdef ANISOTROPIC_TEXTURE
in vec3 anisotropyMapData,
#endif
in mat3 TBN,
in vec3 normalW,
in vec3 viewDirectionW
)
{anisotropicOutParams outParams;float anisotropy=vAnisotropy.b;vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
anisotropy*=anisotropyMapData.b;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
anisotropyMapData.rg=anisotropyMapData.rg*2.0-1.0;
#ifdef ANISOTROPIC_LEGACY
anisotropyDirection.rg*=anisotropyMapData.rg;
#else
anisotropyDirection.xy=mat2(anisotropyDirection.x,anisotropyDirection.y,-anisotropyDirection.y,anisotropyDirection.x)*normalize(anisotropyMapData.rg);
#endif
#endif
mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));vec3 anisotropicTangent=normalize(anisoTBN*anisotropyDirection);vec3 anisotropicBitangent=normalize(cross(anisoTBN[2],anisotropicTangent));outParams.anisotropy=anisotropy;outParams.anisotropicTangent=anisotropicTangent;outParams.anisotropicBitangent=anisotropicBitangent;outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy,roughness);return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockAnisotropic_name] = pbrBlockAnisotropic_shader;
/** @internal */
const pbrBlockAnisotropic = { name: pbrBlockAnisotropic_name, shader: pbrBlockAnisotropic_shader };
//# sourceMappingURL=pbrBlockAnisotropic.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflection.js
// Do not edit.

const pbrBlockReflection_name = "pbrBlockReflection";
const pbrBlockReflection_shader = `#ifdef REFLECTION
struct reflectionOutParams
{vec4 environmentRadiance;vec3 environmentIrradiance;
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords;
#else
vec2 reflectionCoords;
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
vec3 irradianceVector;
#endif
#endif
#endif
};
#define pbr_inline
void createReflectionCoords(
in vec3 vPositionW,
in vec3 normalW,
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#ifdef REFLECTIONMAP_3D
out vec3 reflectionCoords
#else
out vec2 reflectionCoords
#endif
)
{
#ifdef ANISOTROPIC
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
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
}
#define pbr_inline
#define inline
void sampleReflectionTexture(
in float alphaG,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
const vec3 reflectionCoords,
#else
in sampler2D reflectionSampler,
const vec2 reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
out vec4 environmentRadiance
)
{
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
float automaticReflectionLOD=UNPACK_LOD(sampleReflection(reflectionSampler,reflectionCoords).a);float requestedReflectionLOD=max(automaticReflectionLOD,reflectionLOD);
#else
float requestedReflectionLOD=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#else
float lodReflectionNormalized=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 environmentMid=sampleReflection(reflectionSampler,reflectionCoords);if (lodReflectionNormalizedDoubled<1.0){environmentRadiance=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);} else {environmentRadiance=mix(
environmentMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vReflectionInfos.x;environmentRadiance.rgb*=vReflectionColor.rgb;}
#define pbr_inline
#define inline
reflectionOutParams reflectionBlock(
in vec3 vPositionW
,in vec3 normalW
,in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,in float NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,in float roughness
#endif
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,in vec3 vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,in mat4 reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
)
{reflectionOutParams outParams;vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.);
#else
vec2 reflectionCoords=vec2(0.);
#endif
createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
reflectionCoords
);sampleReflectionTexture(
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
#ifdef REFLECTIONMAP_3D
reflectionSampler,
reflectionCoords,
#else
reflectionSampler,
reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentRadiance
);vec3 environmentIrradiance=vec3(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
#ifdef ANISOTROPIC
vec3 irradianceVector=vec3(reflectionMatrix*vec4(anisotropicOut.anisotropicNormal,0)).xyz;
#else
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
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
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
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
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,irradianceVector);
#else
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb;
#ifdef MIX_IBL_RADIANCE_WITH_IRRADIANCE
outParams.environmentRadiance=vec4(mix(environmentRadiance.rgb,environmentIrradiance,alphaG),environmentRadiance.a);
#else
outParams.environmentRadiance=environmentRadiance;
#endif
outParams.environmentIrradiance=environmentIrradiance;outParams.reflectionCoords=reflectionCoords;return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockReflection_name] = pbrBlockReflection_shader;
/** @internal */
const pbrBlockReflection = { name: pbrBlockReflection_name, shader: pbrBlockReflection_shader };
//# sourceMappingURL=pbrBlockReflection.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockSheen.js
// Do not edit.

const pbrBlockSheen_name = "pbrBlockSheen";
const pbrBlockSheen_shader = `#ifdef SHEEN
struct sheenOutParams
{float sheenIntensity;vec3 sheenColor;float sheenRoughness;
#ifdef SHEEN_LINKWITHALBEDO
vec3 surfaceAlbedo;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
float sheenAlbedoScaling;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 finalSheenRadianceScaled;
#endif
#if DEBUGMODE>0
#ifdef SHEEN_TEXTURE
vec4 sheenMapData;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 sheenEnvironmentReflectance;
#endif
#endif
};
#define pbr_inline
#define inline
sheenOutParams sheenBlock(
in vec4 vSheenColor
#ifdef SHEEN_ROUGHNESS
,in float vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 sheenMapRoughnessData
#endif
#endif
,in float roughness
#ifdef SHEEN_TEXTURE
,in vec4 sheenMapData
,in float sheenMapLevel
#endif
,in float reflectance
#ifdef SHEEN_LINKWITHALBEDO
,in vec3 baseColor
,in vec3 surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,in float NdotV
,in vec3 environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,in vec2 AARoughnessFactors
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
,in vec3 reflectionCoords
#else
,in sampler2D reflectionSampler
,in vec2 reflectionCoords
#endif
,in float NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,in float seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,in float eho
#endif
#endif
)
{sheenOutParams outParams;float sheenIntensity=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
float sheenFactor=pow5(1.0-sheenIntensity);vec3 sheenColor=baseColor.rgb*(1.0-sheenFactor);float sheenRoughness=sheenIntensity;outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
vec3 sheenColor=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor.rgb*=toLinearSpace(sheenMapData.rgb);
#else
sheenColor.rgb*=sheenMapData.rgb;
#endif
sheenColor.rgb*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
float sheenRoughness=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#else
float sheenRoughness=roughness;
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
vec3 environmentSheenBrdf=vec3(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
vec3 environmentSheenBrdf=getBRDFLookup(NdotV,sheenRoughness);
#else
vec3 environmentSheenBrdf=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
float sheenAlphaG=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
vec4 environmentSheenRadiance=vec4(0.,0.,0.,0.);sampleReflectionTexture(
sheenAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
sheenRoughness,
#endif
reflectionSampler,
reflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentSheenRadiance
);vec3 sheenEnvironmentReflectance=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
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
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockSheen_name] = pbrBlockSheen_shader;
/** @internal */
const pbrBlockSheen = { name: pbrBlockSheen_name, shader: pbrBlockSheen_shader };
//# sourceMappingURL=pbrBlockSheen.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockClearcoat.js
// Do not edit.

const pbrBlockClearcoat_name = "pbrBlockClearcoat";
const pbrBlockClearcoat_shader = `struct clearcoatOutParams
{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;
#ifdef REFLECTION
vec3 finalClearCoatRadianceScaled;
#endif
#ifdef CLEARCOAT_TINT
vec3 absorption;float clearCoatNdotVRefract;vec3 clearCoatColor;float clearCoatThickness;
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
vec3 energyConservationFactorClearCoat;
#endif
#if DEBUGMODE>0
#ifdef CLEARCOAT_BUMP
mat3 TBNClearCoat;
#endif
#ifdef CLEARCOAT_TEXTURE
vec2 clearCoatMapData;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData;
#endif
#ifdef REFLECTION
vec4 environmentClearCoatRadiance;vec3 clearCoatEnvironmentReflectance;
#endif
float clearCoatNdotV;
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
#define inline
clearcoatOutParams clearcoatBlock(
in vec3 vPositionW
,in vec3 geometricNormalW
,in vec3 viewDirectionW
,in vec2 vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 clearCoatMapRoughnessData
#endif
,in vec3 specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,in vec4 vClearCoatTintParams
,in float clearCoatColorAtDistance
,in vec4 vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,in vec4 clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,in vec2 vClearCoatBumpInfos
,in vec4 clearCoatBumpMapData
,in vec2 vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,in mat3 vTBN
#else
,in vec2 vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,in mat4 normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,in vec3 faceNormal
#endif
#ifdef REFLECTION
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,in float frontFacingMultiplier
#endif
)
{clearcoatOutParams outParams;float clearCoatIntensity=vClearCoatParams.x;float clearCoatRoughness=vClearCoatParams.y;
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
vec3 clearCoatColor=vClearCoatTintParams.rgb;float clearCoatThickness=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpace(clearCoatTintMapData.rgb);
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
vec3 specularEnvironmentR0Updated=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
vec3 specularEnvironmentR0Updated=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);vec3 clearCoatNormalW=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
float clearCoatNormalScale=1.0;
#else
float clearCoatNormalScale=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBNClearCoat=vTBN;
#else
vec2 TBNClearCoatUV=vClearCoatBumpUV*frontFacingMultiplier;mat3 TBNClearCoat=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);clearCoatNormalW=normalize(mat3(normalMatrix)*clearCoatNormalW);
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
outParams.clearCoatNormalW=clearCoatNormalW;outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);float clearCoatNdotVUnclamped=dot(clearCoatNormalW,viewDirectionW);float clearCoatNdotV=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
vec3 clearCoatVRefract=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
vec3 environmentClearCoatBrdf=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
float clearCoatAlphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
vec4 environmentClearCoatRadiance=vec4(0.,0.,0.,0.);vec3 clearCoatReflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 clearCoatReflectionCoords=clearCoatReflectionVector;
#else
vec2 clearCoatReflectionCoords=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
sampleReflectionTexture(
clearCoatAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
clearCoatNdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
clearCoatRoughness,
#endif
reflectionSampler,
clearCoatReflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentClearCoatRadiance
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 clearCoatEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float clearCoatEho=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
vec3 clearCoatEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV,vec3(1.),vec3(1.),sqrt(1.-clearCoatRoughness));
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
float fresnelIBLClearCoat=fresnelSchlickGGX(clearCoatNdotV,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnelIBLClearCoat*=clearCoatIntensity;outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockClearcoat_name] = pbrBlockClearcoat_shader;
/** @internal */
const pbrBlockClearcoat = { name: pbrBlockClearcoat_name, shader: pbrBlockClearcoat_shader };
//# sourceMappingURL=pbrBlockClearcoat.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockIridescence.js
// Do not edit.

const pbrBlockIridescence_name = "pbrBlockIridescence";
const pbrBlockIridescence_shader = `struct iridescenceOutParams
{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};
#ifdef IRIDESCENCE
#define pbr_inline
#define inline
iridescenceOutParams iridescenceBlock(
in vec4 vIridescenceParams
,in float viewAngle
,in vec3 specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,in vec2 iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,in vec2 iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,in float NdotVUnclamped
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#endif
)
{iridescenceOutParams outParams;float iridescenceIntensity=vIridescenceParams.x;float iridescenceIOR=vIridescenceParams.y;float iridescenceThicknessMin=vIridescenceParams.z;float iridescenceThicknessMax=vIridescenceParams.w;float iridescenceThicknessWeight=1.;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
float iridescenceThickness=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);float topIor=1.; 
#ifdef CLEARCOAT
float clearCoatIntensity=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,vClearCoatRefractionParams.w-1.,clearCoatIntensity);viewAngle=sqrt(1.0+square(1.0/topIor)*(square(NdotVUnclamped)-1.0));
#endif
vec3 iridescenceFresnel=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);outParams.iridescenceIntensity=iridescenceIntensity;outParams.iridescenceThickness=iridescenceThickness;outParams.iridescenceIOR=iridescenceIOR;return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockIridescence_name] = pbrBlockIridescence_shader;
/** @internal */
const pbrBlockIridescence = { name: pbrBlockIridescence_name, shader: pbrBlockIridescence_shader };
//# sourceMappingURL=pbrBlockIridescence.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockSubSurface.js
// Do not edit.

const pbrBlockSubSurface_name = "pbrBlockSubSurface";
const pbrBlockSubSurface_shader = `struct subSurfaceOutParams
{vec3 specularEnvironmentReflectance;
#ifdef SS_REFRACTION
vec3 finalRefraction;vec3 surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
float alpha;
#endif
#ifdef REFLECTION
float refractionFactorForIrradiance;
#endif
#endif
#ifdef SS_TRANSLUCENCY
vec3 transmittance;float translucencyIntensity;
#ifdef REFLECTION
vec3 refractionIrradiance;
#endif
#endif
#if DEBUGMODE>0
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction;vec3 refractionTransmittance;
#endif
#endif
};
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#define pbr_inline
#define inline
vec4 sampleEnvironmentRefraction(
in float ior
,in float thickness
,in float refractionLOD
,in vec3 normalW
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
) {vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef ANISOTROPIC
vec3 refractionVector=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,ior);
#else
vec3 refractionVector=refract(-viewDirectionW,normalW,ior);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec3 refractionCoords=refractionVector;refractionCoords=vec3(refractionMatrix*vec4(refractionCoords,0));
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*thickness,1.0)));
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
#endif
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef LODBASEDMICROSFURACE
refractionLOD=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
float automaticRefractionLOD=UNPACK_LOD(sampleRefraction(refractionSampler,refractionCoords).a);float requestedRefractionLOD=max(automaticRefractionLOD,refractionLOD);
#else
float requestedRefractionLOD=refractionLOD;
#endif
#if defined(REALTIME_FILTERING) && defined(SS_REFRACTIONMAP_3D)
environmentRefraction=vec4(radiance(alphaG,refractionSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=sampleRefractionLod(refractionSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
float lodRefractionNormalized=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));float lodRefractionNormalizedDoubled=lodRefractionNormalized*2.0;vec4 environmentRefractionMid=sampleRefraction(refractionSampler,refractionCoords);if (lodRefractionNormalizedDoubled<1.0){environmentRefraction=mix(
sampleRefraction(refractionSamplerHigh,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);} else {environmentRefraction=mix(
environmentRefractionMid,
sampleRefraction(refractionSamplerLow,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);}
#endif
#ifdef SS_RGBDREFRACTION
environmentRefraction.rgb=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
environmentRefraction.rgb=toLinearSpace(environmentRefraction.rgb);
#endif
return environmentRefraction;}
#endif
#define pbr_inline
#define inline
subSurfaceOutParams subSurfaceBlock(
in vec3 vSubSurfaceIntensity
,in vec2 vThicknessParam
,in vec4 vTintColor
,in vec3 normalW
,in vec3 specularEnvironmentReflectance
#ifdef SS_THICKNESSANDMASK_TEXTURE
,in vec4 thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,in vec4 refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,in vec4 translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,in mat4 reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,in vec3 irradianceVector_
#endif
#if defined(REALTIME_FILTERING)
,in samplerCube reflectionSampler
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,in vec3 surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in vec4 vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,in float alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,in float NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,in float roughness
#endif
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
#ifdef SS_DISPERSION
,in float dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,in vec3 vDiffusionDistance
,in vec4 vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,in vec4 translucencyColorMap
#endif
#endif
)
{subSurfaceOutParams outParams;outParams.specularEnvironmentReflectance=specularEnvironmentReflectance;
#ifdef SS_REFRACTION
float refractionIntensity=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
float translucencyIntensity=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
float thickness=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
float thickness=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
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
float thickness=vThicknessParam.y;
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
thickness=maxEps(thickness);vec4 translucencyColor=vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
translucencyColor*=translucencyColorMap;
#endif
vec3 transmittance=transmittanceBRDF_Burley(translucencyColor.rgb,vDiffusionDistance,thickness);transmittance*=translucencyIntensity;outParams.transmittance=transmittance;outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef SS_HAS_THICKNESS
float ior=vRefractionInfos.y;
#else
float ior=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
float refractionRoughness=alphaG;refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
float refraction_ior=vRefractionInfos.y;
#ifdef SS_DISPERSION
float realIOR=1.0/refraction_ior;float iorDispersionSpread=0.04*dispersion*(realIOR-1.0);vec3 iors=vec3(1.0/(realIOR-iorDispersionSpread),refraction_ior,1.0/(realIOR+iorDispersionSpread));for (int i=0; i<3; i++) {refraction_ior=iors[i];
#endif
vec4 envSample=sampleEnvironmentRefraction(refraction_ior,thickness,refractionLOD,normalW,vPositionW,viewDirectionW,view,vRefractionInfos,refractionMatrix,vRefractionMicrosurfaceInfos,alphaG
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#else
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
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
environmentRefraction.rgb*=vRefractionInfos.x;
#endif
#ifdef SS_REFRACTION
vec3 refractionTransmittance=vec3(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
float maxChannel=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);vec3 volumeAlbedo=saturate(maxChannel*surfaceAlbedo);environmentRefraction.rgb*=volumeAlbedo;
#else
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction.rgb*=surfaceAlbedo.rgb;
#endif
outParams.surfaceAlbedo=surfaceAlbedo*(1.-refractionIntensity);
#ifdef REFLECTION
outParams.refractionFactorForIrradiance=(1.-refractionIntensity);
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
vec3 bounceSpecularEnvironmentReflectance=(2.0*specularEnvironmentReflectance)/(1.0+specularEnvironmentReflectance);outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,specularEnvironmentReflectance,refractionIntensity);
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
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
vec3 irradianceVector=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
vec3 refractionIrradiance=irradiance(reflectionSampler,-irradianceVector,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
);
#else
vec3 refractionIrradiance=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec3 irradianceCoords=irradianceVector;
#else
vec2 irradianceCoords=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
vec4 refractionIrradiance=sampleReflection(irradianceSampler,-irradianceCoords);
#ifdef RGBDREFLECTION
refractionIrradiance.rgb=fromRGBD(refractionIrradiance);
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance.rgb=toLinearSpace(refractionIrradiance.rgb);
#endif
#else
vec4 refractionIrradiance=vec4(0.);
#endif
refractionIrradiance.rgb*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance.rgb*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance.rgb;
#endif
return outParams;}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockSubSurface_name] = pbrBlockSubSurface_shader;
/** @internal */
const pbrBlockSubSurface = { name: pbrBlockSubSurface_name, shader: pbrBlockSubSurface_shader };
//# sourceMappingURL=pbrBlockSubSurface.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockNormalGeometric.js
// Do not edit.

const pbrBlockNormalGeometric_name = "pbrBlockNormalGeometric";
const pbrBlockNormalGeometric_shader = `vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockNormalGeometric_name] = pbrBlockNormalGeometric_shader;
/** @internal */
const pbrBlockNormalGeometric = { name: pbrBlockNormalGeometric_name, shader: pbrBlockNormalGeometric_shader };
//# sourceMappingURL=pbrBlockNormalGeometric.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js
var bumpFragment = __webpack_require__(27018);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockNormalFinal.js
// Do not edit.

const pbrBlockNormalFinal_name = "pbrBlockNormalFinal";
const pbrBlockNormalFinal_shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockNormalFinal_name] = pbrBlockNormalFinal_shader;
/** @internal */
const pbrBlockNormalFinal = { name: pbrBlockNormalFinal_name, shader: pbrBlockNormalFinal_shader };
//# sourceMappingURL=pbrBlockNormalFinal.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/depthPrePass.js
var depthPrePass = __webpack_require__(1037);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockLightmapInit.js
// Do not edit.

const pbrBlockLightmapInit_name = "pbrBlockLightmapInit";
const pbrBlockLightmapInit_shader = `#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockLightmapInit_name] = pbrBlockLightmapInit_shader;
/** @internal */
const pbrBlockLightmapInit = { name: pbrBlockLightmapInit_name, shader: pbrBlockLightmapInit_shader };
//# sourceMappingURL=pbrBlockLightmapInit.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockGeometryInfo.js
// Do not edit.

const pbrBlockGeometryInfo_name = "pbrBlockGeometryInfo";
const pbrBlockGeometryInfo_shader = `float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
vec3 environmentBrdf=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
float ambientMonochrome=aoOut.ambientOcclusionColor.r;
#else
float ambientMonochrome=getLuminance(aoOut.ambientOcclusionColor);
#endif
float seo=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float eho=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockGeometryInfo_name] = pbrBlockGeometryInfo_shader;
/** @internal */
const pbrBlockGeometryInfo = { name: pbrBlockGeometryInfo_name, shader: pbrBlockGeometryInfo_shader };
//# sourceMappingURL=pbrBlockGeometryInfo.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectance0.js
// Do not edit.

const pbrBlockReflectance0_name = "pbrBlockReflectance0";
const pbrBlockReflectance0_shader = `float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);vec3 specularEnvironmentR0=reflectivityOut.surfaceReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec3 specularEnvironmentR90=vec3(metallicReflectanceFactors.a);
#else 
vec3 specularEnvironmentR90=vec3(1.0,1.0,1.0);
#endif
#ifdef ALPHAFRESNEL
float reflectance90=fresnelGrazingReflectance(reflectance);specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockReflectance0_name] = pbrBlockReflectance0_shader;
/** @internal */
const pbrBlockReflectance0 = { name: pbrBlockReflectance0_name, shader: pbrBlockReflectance0_shader };
//# sourceMappingURL=pbrBlockReflectance0.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectance.js
// Do not edit.

const pbrBlockReflectance_name = "pbrBlockReflectance";
const pbrBlockReflectance_shader = `#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 specularEnvironmentReflectance=getReflectanceFromBRDFLookup(clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,environmentBrdf);
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
vec3 specularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
specularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
specularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockReflectance_name] = pbrBlockReflectance_shader;
/** @internal */
const pbrBlockReflectance = { name: pbrBlockReflectance_name, shader: pbrBlockReflectance_shader };
//# sourceMappingURL=pbrBlockReflectance.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockDirectLighting.js
// Do not edit.

const pbrBlockDirectLighting_name = "pbrBlockDirectLighting";
const pbrBlockDirectLighting_shader = `vec3 diffuseBase=vec3(0.,0.,0.);
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#ifdef CLEARCOAT
vec3 clearCoatBase=vec3(0.,0.,0.);
#endif
#ifdef SHEEN
vec3 sheenBase=vec3(0.,0.,0.);
#endif
preLightingInfo preInfo;lightingInfo info;float shadow=1.; 
float aggShadow=0.;float numLights=0.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
vec3 absorption=vec3(0.);
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockDirectLighting_name] = pbrBlockDirectLighting_shader;
/** @internal */
const pbrBlockDirectLighting = { name: pbrBlockDirectLighting_name, shader: pbrBlockDirectLighting_shader };
//# sourceMappingURL=pbrBlockDirectLighting.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js
var lightFragment = __webpack_require__(37256);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalLitComponents.js
// Do not edit.

const pbrBlockFinalLitComponents_name = "pbrBlockFinalLitComponents";
const pbrBlockFinalLitComponents_shader = `aggShadow=aggShadow/numLights;
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 energyConservationFactor=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo.rgb=(1.-reflectance)*surfaceAlbedo.rgb;
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo.rgb=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef REFLECTION
vec3 finalIrradiance=reflectionOut.environmentIrradiance;
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
finalIrradiance*=surfaceAlbedo.rgb;finalIrradiance*=vLightingIntensity.z;finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase;finalSpecular=max(finalSpecular,0.0);vec3 finalSpecularScaled=finalSpecular*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
vec3 finalRadiance=reflectionOut.environmentRadiance.rgb;finalRadiance*=subSurfaceOut.specularEnvironmentReflectance;vec3 finalRadianceScaled=finalRadiance*vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
vec3 finalSheen=sheenBase*sheenOut.sheenColor;finalSheen=max(finalSheen,0.0);vec3 finalSheenScaled=finalSheen*vLightingIntensity.x*vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
vec3 finalClearCoat=clearCoatBase;finalClearCoat=max(finalClearCoat,0.0);vec3 finalClearCoatScaled=finalClearCoat*vLightingIntensity.x*vLightingIntensity.w;
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
float luminanceOverAlpha=0.0;
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
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockFinalLitComponents_name] = pbrBlockFinalLitComponents_shader;
/** @internal */
const pbrBlockFinalLitComponents = { name: pbrBlockFinalLitComponents_name, shader: pbrBlockFinalLitComponents_shader };
//# sourceMappingURL=pbrBlockFinalLitComponents.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalUnlitComponents.js
// Do not edit.

const pbrBlockFinalUnlitComponents_name = "pbrBlockFinalUnlitComponents";
const pbrBlockFinalUnlitComponents_shader = `vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo.rgb;finalDiffuse=max(finalDiffuse,0.0);finalDiffuse*=vLightingIntensity.x;vec3 finalAmbient=vAmbientColor;finalAmbient*=surfaceAlbedo.rgb;vec3 finalEmissive=vEmissiveColor;
#ifdef EMISSIVE
vec3 emissiveColorTex=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpace(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= vEmissiveInfos.y;
#endif
finalEmissive*=vLightingIntensity.y;
#ifdef AMBIENT
vec3 ambientOcclusionForDirectDiffuse=mix(vec3(1.),aoOut.ambientOcclusionColor,vAmbientInfos.w);
#else
vec3 ambientOcclusionForDirectDiffuse=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockFinalUnlitComponents_name] = pbrBlockFinalUnlitComponents_shader;
/** @internal */
const pbrBlockFinalUnlitComponents = { name: pbrBlockFinalUnlitComponents_name, shader: pbrBlockFinalUnlitComponents_shader };
//# sourceMappingURL=pbrBlockFinalUnlitComponents.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalColorComposition.js
// Do not edit.

const pbrBlockFinalColorComposition_name = "pbrBlockFinalColorComposition";
const pbrBlockFinalColorComposition_shader = `vec4 finalColor=vec4(
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
finalColor.rgb*=lightmapColor.rgb;
#else
finalColor.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
finalColor.rgb+=finalEmissive;
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,0.0);
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockFinalColorComposition_name] = pbrBlockFinalColorComposition_shader;
/** @internal */
const pbrBlockFinalColorComposition = { name: pbrBlockFinalColorComposition_name, shader: pbrBlockFinalColorComposition_shader };
//# sourceMappingURL=pbrBlockFinalColorComposition.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockImageProcessing.js
// Do not edit.

const pbrBlockImageProcessing_name = "pbrBlockImageProcessing";
const pbrBlockImageProcessing_shader = `#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA
finalColor.rgb*=finalColor.a;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockImageProcessing_name] = pbrBlockImageProcessing_shader;
/** @internal */
const pbrBlockImageProcessing = { name: pbrBlockImageProcessing_name, shader: pbrBlockImageProcessing_shader };
//# sourceMappingURL=pbrBlockImageProcessing.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockPrePass.js
// Do not edit.

const pbrBlockPrePass_name = "pbrBlockPrePass";
const pbrBlockPrePass_shader = `float writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(surfaceAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
vec3 sqAlbedo=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
vec3 irradiance=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb-irradiance,finalColor.a); 
#endif
irradiance/=sqAlbedo;
#else
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=finalColor; 
#endif
float scatteringDiffusionProfile=255.;
#endif
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(clamp(irradiance,vec3(0.),vec3(1.)),writeGeometryInfo*scatteringDiffusionProfile/255.); 
#elif defined(PREPASS_COLOR)
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqAlbedo,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(specularEnvironmentR0,microSurface)*writeGeometryInfo;
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4( 0.0,0.0,0.0,1.0 )*writeGeometryInfo;
#endif
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrBlockPrePass_name] = pbrBlockPrePass_shader;
/** @internal */
const pbrBlockPrePass = { name: pbrBlockPrePass_name, shader: pbrBlockPrePass_shader };
//# sourceMappingURL=pbrBlockPrePass.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/oitFragment.js
var oitFragment = __webpack_require__(94436);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDebug.js
// Do not edit.

const pbrDebug_name = "pbrDebug";
const pbrDebug_shader = `#if DEBUGMODE>0
if (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {
#if DEBUGMODE==1
gl_FragColor.rgb=vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
gl_FragColor.rgb=vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
gl_FragColor.rgb=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
gl_FragColor.rgb=vec3(vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
gl_FragColor.rgb=vec3(vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
gl_FragColor.rgb=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
gl_FragColor.rgb=albedoTexture.rgb;
#ifndef GAMMAALBEDO
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==21 && defined(AMBIENT)
gl_FragColor.rgb=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
gl_FragColor.rgb=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
gl_FragColor.rgb=emissiveColorTex.rgb;
#ifndef GAMMAEMISSIVE
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==24 && defined(LIGHTMAP)
gl_FragColor.rgb=lightmapColor.rgb;
#ifndef GAMMALIGHTMAP
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
gl_FragColor.rgb=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
gl_FragColor.rgb=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
gl_FragColor.rgb=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
gl_FragColor.rgb=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==32 && defined(BUMP)
gl_FragColor.rgb=texture2D(bumpSampler,vBumpUV).rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentRadiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
gl_FragColor.rgb=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
gl_FragColor.rgb=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
gl_FragColor.rgb=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
gl_FragColor.rgb=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
gl_FragColor.rgb=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentIrradiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==60
gl_FragColor.rgb=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
gl_FragColor.rgb=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=vec3(reflectivityOut.metallicRoughness.r);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
gl_FragColor.rgb=vec3(roughness);
#elif DEBUGMODE==64
gl_FragColor.rgb=vec3(alphaG);
#elif DEBUGMODE==65
gl_FragColor.rgb=vec3(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
gl_FragColor.rgb=clearcoatOut.clearCoatColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
gl_FragColor.rgb=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==72
gl_FragColor.rgb=vec3(microSurface);
#elif DEBUGMODE==73
gl_FragColor.rgb=vAlbedoColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==74 && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=vReflectivityColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==75
gl_FragColor.rgb=vEmissiveColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
gl_FragColor.rgb=vec3(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
gl_FragColor.rgb=vec3(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
gl_FragColor.rgb=vec3(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=specularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
gl_FragColor.rgb=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
gl_FragColor.rgb=vec3(luminanceOverAlpha);
#elif DEBUGMODE==87
gl_FragColor.rgb=vec3(alpha);
#elif DEBUGMODE==88 && defined(ALBEDO)
gl_FragColor.rgb=vec3(albedoTexture.a);
#elif DEBUGMODE==89
gl_FragColor.rgb=aoOut.ambientOcclusionColor.rgb;
#else
float stripeWidth=30.;float stripePos=floor(gl_FragCoord.x/stripeWidth);float whichColor=mod(stripePos,2.);vec3 color1=vec3(.6,.2,.2);vec3 color2=vec3(.3,.1,.1);gl_FragColor.rgb=mix(color1,color2,whichColor);
#endif
gl_FragColor.rgb*=vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
gl_FragColor.rgb=normalize(gl_FragColor.rgb)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
gl_FragColor.rgb=toGammaSpace(gl_FragColor.rgb);
#endif
gl_FragColor.a=1.0;
#ifdef PREPASS
gl_FragData[0]=toLinearSpace(gl_FragColor); 
gl_FragData[1]=vec4(0.,0.,0.,0.); 
#endif
#ifdef DEBUGMODE_FORCERETURN
return;
#endif
}
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrDebug_name] = pbrDebug_shader;
/** @internal */
const pbrDebug = { name: pbrDebug_name, shader: pbrDebug_shader };
//# sourceMappingURL=pbrDebug.js.map
;// ./node_modules/@babylonjs/core/Shaders/pbr.fragment.js
// Do not edit.



























































const pbr_fragment_name = "pbrPixelShader";
const pbr_fragment_shader = `#define CUSTOM_FRAGMENT_EXTENSION
#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef LODBASEDMICROSFURACE
#extension GL_EXT_shader_texture_lod : enable
#endif
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
precision highp float;
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<__decl__pbrFragment>
#include<pbrFragmentExtraDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
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
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
albedoOpacityOutParams albedoOpacityOut;
#ifdef ALBEDO
vec4 albedoTexture=texture2D(albedoSampler,vAlbedoUV+uvOffset);
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#endif
#ifdef DECAL
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#endif
albedoOpacityOut=albedoOpacityBlock(
vAlbedoColor
#ifdef ALBEDO
,albedoTexture
,vAlbedoInfos
#endif
#ifdef OPACITY
,opacityMap
,vOpacityInfos
#endif
#ifdef DETAIL
,detailColor
,vDetailInfos
#endif
#ifdef DECAL
,decalColor
,vDecalInfos
#endif
);vec3 surfaceAlbedo=albedoOpacityOut.surfaceAlbedo;float alpha=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
ambientOcclusionOutParams aoOut;
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
vAmbientInfos
#endif 
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else
vec3 baseColor=surfaceAlbedo;reflectivityOutParams reflectivityOut;
#if defined(REFLECTIVITY)
vec4 surfaceMetallicOrReflectivityColorMap=texture2D(reflectivitySampler,vReflectivityUV+uvOffset);vec4 baseReflectivity=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpace(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap.rgb*=vReflectivityInfos.y;
#endif
#endif
#if defined(MICROSURFACEMAP)
vec4 microSurfaceTexel=texture2D(microSurfaceSampler,vMicroSurfaceSamplerUV+uvOffset)*vMicroSurfaceSamplerInfos.y;
#endif
#ifdef METALLICWORKFLOW
vec4 metallicReflectanceFactors=vMetallicReflectanceFactors;
#ifdef REFLECTANCE
vec4 reflectanceFactorsMap=texture2D(reflectanceSampler,vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpace(reflectanceFactorsMap);
#endif
metallicReflectanceFactors.rgb*=reflectanceFactorsMap.rgb;
#endif
#ifdef METALLIC_REFLECTANCE
vec4 metallicReflectanceFactorsMap=texture2D(metallicReflectanceSampler,vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpace(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors.rgb*=metallicReflectanceFactorsMap.rgb;
#endif
metallicReflectanceFactors*=metallicReflectanceFactorsMap.a;
#endif
#endif
reflectivityOut=reflectivityBlock(
vReflectivityColor
#ifdef METALLICWORKFLOW
,surfaceAlbedo
,metallicReflectanceFactors
#endif
#ifdef REFLECTIVITY
,vReflectivityInfos
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
,vDetailInfos
#endif
);float microSurface=reflectivityOut.microSurface;float roughness=reflectivityOut.roughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
alphaFresnelOutParams alphaFresnelOut;alphaFresnelOut=alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface
);alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
anisotropicOutParams anisotropicOut;
#ifdef ANISOTROPIC_TEXTURE
vec3 anisotropyMapData=texture2D(anisotropySampler,vAnisotropyUV+uvOffset).rgb*vAnisotropyInfos.y;
#endif
anisotropicOut=anisotropicBlock(
vAnisotropy,
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
reflectionOutParams reflectionOut;
#ifndef USE_CUSTOM_REFLECTION
reflectionOut=reflectionBlock(
vPositionW
,normalW
,alphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
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
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
sheenOutParams sheenOut;
#ifdef SHEEN_TEXTURE
vec4 sheenMapData=texture2D(sheenSampler,vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 sheenMapRoughnessData=texture2D(sheenRoughnessSampler,vSheenRoughnessUV+uvOffset)*vSheenInfos.w;
#endif
sheenOut=sheenBlock(
vSheenColor
#ifdef SHEEN_ROUGHNESS
,vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData
#endif
#endif
,roughness
#ifdef SHEEN_TEXTURE
,sheenMapData
,vSheenInfos.y
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
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
,vLightingIntensity
,reflectionSampler
,reflectionOut.reflectionCoords
,NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
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
vec2 clearCoatMapData=texture2D(clearCoatSampler,vClearCoatUV+uvOffset).rg*vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
iridescenceOutParams iridescenceOut;
#ifdef IRIDESCENCE_TEXTURE
vec2 iridescenceMapData=texture2D(iridescenceSampler,vIridescenceUV+uvOffset).rg*vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
vec2 iridescenceThicknessMapData=texture2D(iridescenceThicknessSampler,vIridescenceThicknessUV+uvOffset).rg*vIridescenceInfos.w;
#endif
iridescenceOut=iridescenceBlock(
vIridescenceParams
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
);float iridescenceIntensity=iridescenceOut.iridescenceIntensity;specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
clearcoatOutParams clearcoatOut;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 clearCoatMapRoughnessData=texture2D(clearCoatRoughnessSampler,vClearCoatRoughnessUV+uvOffset)*vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData=texture2D(clearCoatTintSampler,vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
vec4 clearCoatBumpMapData=texture2D(clearCoatBumpSampler,vClearCoatBumpUV+uvOffset);
#endif
clearcoatOut=clearcoatBlock(
vPositionW
,geometricNormalW
,viewDirectionW
,vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData
#endif
,specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,vClearCoatTintParams
,clearCoatColorAtDistance
,vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,vClearCoatBumpInfos
,clearCoatBumpMapData
,vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,vTBN
#else
,vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal
#endif
#ifdef REFLECTION
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
,vLightingIntensity
,reflectionSampler
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,(gl_FrontFacing ? 1. : -1.)
#endif
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
subSurfaceOutParams subSurfaceOut;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap=texture2D(thicknessSampler,vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
vec4 refractionIntensityMap=texture2D(refractionIntensitySampler,vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
vec4 translucencyIntensityMap=texture2D(translucencyIntensitySampler,vTranslucencyIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
vec4 translucencyColorMap=texture2D(translucencyColorSampler,vTranslucencyColorUV+uvOffset);
#endif
subSurfaceOut=subSurfaceBlock(
vSubSurfaceIntensity
,vThicknessParam
,vTintColor
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
,reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,reflectionOut.irradianceVector
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,vPositionW
,viewDirectionW
,view
,vRefractionInfos
,refractionMatrix
,vRefractionMicrosurfaceInfos
,vLightingIntensity
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
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,vRefractionPosition
,vRefractionSize
#endif
#ifdef SS_DISPERSION
,dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,vDiffusionDistance
,vTranslucencyColor
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
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {frontColor.rgb+=finalColor.rgb*finalColor.a*alphaMultiplier;frontColor.a=1.0-alphaMultiplier*(1.0-finalColor.a);} else {backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[pbr_fragment_name] = pbr_fragment_shader;
/** @internal */
const pbrPixelShader = { name: pbr_fragment_name, shader: pbr_fragment_shader };
//# sourceMappingURL=pbr.fragment.js.map

/***/ }),

/***/ 81448:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pbrVertexShader: () => (/* binding */ pbrVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js
var decalVertexDeclaration = __webpack_require__(96019);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrVertexDeclaration.js
// Do not edit.


const pbrVertexDeclaration_name = "pbrVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
#ifdef ALBEDO
uniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY 
uniform vec3 vReflectivityInfos;uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef REFLECTANCE
uniform vec2 vReflectanceInfos;uniform mat4 reflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#ifdef IRIDESCENCE
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[pbrVertexDeclaration_name] = shader;
/** @internal */
const pbrVertexDeclaration = { name: pbrVertexDeclaration_name, shader };
//# sourceMappingURL=pbrVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrUboDeclaration.js
var pbrUboDeclaration = __webpack_require__(4096);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/uvAttributeDeclaration.js
var uvAttributeDeclaration = __webpack_require__(94381);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js
var mainUVVaryingDeclaration = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js
var instancesDeclaration = __webpack_require__(1218);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertexDeclaration.js
var prePassVertexDeclaration = __webpack_require__(78328);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexDeclaration.js
var samplerVertexDeclaration = __webpack_require__(85136);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/harmonicsFunctions.js
var harmonicsFunctions = __webpack_require__(19495);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertexDeclaration.js
var bumpVertexDeclaration = __webpack_require__(56390);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js
var fogVertexDeclaration = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js
var lightVxFragmentDeclaration = __webpack_require__(69440);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js
var lightVxUboDeclaration = __webpack_require__(4662);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(90738);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(15060);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertex.js
var prePassVertex = __webpack_require__(65438);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/uvVariableDeclaration.js
var uvVariableDeclaration = __webpack_require__(4981);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexImplementation.js
var samplerVertexImplementation = __webpack_require__(41316);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertex.js
var bumpVertex = __webpack_require__(19440);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js
var fogVertex = __webpack_require__(16470);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js
var shadowsVertex = __webpack_require__(35687);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/vertexColorMixing.js
var vertexColorMixing = __webpack_require__(94483);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js
var logDepthVertex = __webpack_require__(2215);
;// ./node_modules/@babylonjs/core/Shaders/pbr.vertex.js
// Do not edit.


































const pbr_vertex_name = "pbrVertexShader";
const pbr_vertex_shader = `#define CUSTOM_VERTEX_EXTENSION
precision highp float;
#include<__decl__pbrVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
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
varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);vPositionW=vec3(worldPos);
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
vec3 reflectionVector=vec3(reflectionMatrix*vec4(vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vClipSpacePosition=gl_Position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2Updated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2Updated;
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
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[pbr_vertex_name] = pbr_vertex_shader;
/** @internal */
const pbrVertexShader = { name: pbr_vertex_name, shader: pbr_vertex_shader };
//# sourceMappingURL=pbr.vertex.js.map

/***/ }),

/***/ 29698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickingPixelShader: () => (/* binding */ pickingPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "pickingPixelShader";
const shader = `#if defined(INSTANCES)
varying vec4 vMeshID;
#else
uniform vec4 meshID;
#endif
void main(void) {
#if defined(INSTANCES)
gl_FragColor=vMeshID;
#else
gl_FragColor=meshID;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const pickingPixelShader = { name, shader };
//# sourceMappingURL=picking.fragment.js.map

/***/ }),

/***/ 99992:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickingVertexShader: () => (/* binding */ pickingVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65523);
// Do not edit.











const name = "pickingVertexShader";
const shader = `attribute vec3 position;
#if defined(INSTANCES)
attribute vec4 instanceMeshID;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;
#if defined(INSTANCES)
varying vec4 vMeshID;
#endif
void main(void) {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;
#if defined(INSTANCES)
vMeshID=instanceMeshID;
#endif
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const pickingVertexShader = { name, shader };
//# sourceMappingURL=picking.vertex.js.map

/***/ }),

/***/ 16612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postprocessVertexShader: () => (/* binding */ postprocessVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "postprocessVertexShader";
const shader = `attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const postprocessVertexShader = { name, shader };
//# sourceMappingURL=postprocess.vertex.js.map

/***/ }),

/***/ 17156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proceduralVertexShader: () => (/* binding */ proceduralVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "proceduralVertexShader";
const shader = `attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const proceduralVertexShader = { name, shader };
//# sourceMappingURL=procedural.vertex.js.map

/***/ }),

/***/ 56126:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export refractionPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "refractionPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D refractionSampler;uniform vec3 baseColor;uniform float depth;uniform float colorLevel;void main() {float ref=1.0-texture2D(refractionSampler,vUV).r;vec2 uv=vUV-vec2(0.5);vec2 offset=uv*depth*ref;vec3 sourceColor=texture2D(textureSampler,vUV-offset).rgb;gl_FragColor=vec4(sourceColor+sourceColor*ref*colorLevel,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const refractionPixelShader = { name, shader };
//# sourceMappingURL=refraction.fragment.js.map

/***/ }),

/***/ 9682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbdDecodePixelShader: () => (/* binding */ rgbdDecodePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "rgbdDecodePixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const rgbdDecodePixelShader = { name, shader };
//# sourceMappingURL=rgbdDecode.fragment.js.map

/***/ }),

/***/ 32646:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbdEncodePixelShader: () => (/* binding */ rgbdEncodePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
// Do not edit.


const name = "rgbdEncodePixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const rgbdEncodePixelShader = { name, shader };
//# sourceMappingURL=rgbdEncode.fragment.js.map

/***/ }),

/***/ 88826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rsmFullGlobalIlluminationPixelShader: () => (/* binding */ rsmFullGlobalIlluminationPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "rsmFullGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is a direct application of the formula found in http:
*/
precision highp float;varying vec2 vUV;uniform mat4 rsmLightMatrix;uniform vec4 rsmInfo;uniform sampler2D textureSampler;uniform sampler2D normalSampler;uniform sampler2D rsmPositionW;uniform sampler2D rsmNormalW;uniform sampler2D rsmFlux;
#ifdef TRANSFORM_NORMAL
uniform mat4 invView;
#endif
vec3 computeIndirect(vec3 p,vec3 n) {vec3 indirectDiffuse=vec3(0.);float intensity=rsmInfo.z;float edgeArtifactCorrection=rsmInfo.w;vec4 texRSM=rsmLightMatrix*vec4(p,1.);texRSM.xy/=texRSM.w;texRSM.xy=texRSM.xy*0.5+0.5;int width=int(rsmInfo.x);int height=int(rsmInfo.y);for (int j=0; j<height; j++) {for (int i=0; i<width; i++) {ivec2 uv=ivec2(i,j);vec3 vplPositionW=texelFetch(rsmPositionW,uv,0).xyz;vec3 vplNormalW=texelFetch(rsmNormalW,uv,0).xyz*2.0-1.0;vec3 vplFlux=texelFetch(rsmFlux,uv,0).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
float dist2=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}}
return clamp(indirectDiffuse*intensity,0.0,1.0);}
void main(void) 
{vec3 positionW=texture2D(textureSampler,vUV).xyz;vec3 normalW=texture2D(normalSampler,vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(invView*vec4(normalW,0.)).xyz;
#endif
gl_FragColor.rgb=computeIndirect(positionW,normalW);gl_FragColor.a=1.0;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const rsmFullGlobalIlluminationPixelShader = { name, shader };
//# sourceMappingURL=rsmFullGlobalIllumination.fragment.js.map

/***/ }),

/***/ 3157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rsmGlobalIlluminationPixelShader: () => (/* binding */ rsmGlobalIlluminationPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "rsmGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is an application of the formula found in http:
* For better results,it also adds a random (noise) rotation to the RSM samples (the noise artifacts are easier to remove than the banding artifacts).
*/
precision highp float;varying vec2 vUV;uniform mat4 rsmLightMatrix;uniform vec4 rsmInfo;uniform vec4 rsmInfo2;uniform sampler2D textureSampler;uniform sampler2D normalSampler;uniform sampler2D rsmPositionW;uniform sampler2D rsmNormalW;uniform sampler2D rsmFlux;uniform sampler2D rsmSamples;
#ifdef TRANSFORM_NORMAL
uniform mat4 invView;
#endif
float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 perm(vec4 x){return mod289(((x*34.0)+1.0)*x);}
float noise(vec3 p){vec3 a=floor(p);vec3 d=p-a;d=d*d*(3.0-2.0*d);vec4 b=a.xxyy+vec4(0.0,1.0,0.0,1.0);vec4 k1=perm(b.xyxy);vec4 k2=perm(k1.xyxy+b.zzww);vec4 c=k2+a.zzzz;vec4 k3=perm(c);vec4 k4=perm(c+1.0);vec4 o1=fract(k3*(1.0/41.0));vec4 o2=fract(k4*(1.0/41.0));vec4 o3=o2*d.z+o1*(1.0-d.z);vec2 o4=o3.yw*d.x+o3.xz*(1.0-d.x);return o4.y*d.y+o4.x*(1.0-d.y);}
vec3 computeIndirect(vec3 p,vec3 n) {vec3 indirectDiffuse=vec3(0.);int numSamples=int(rsmInfo.x);float radius=rsmInfo.y;float intensity=rsmInfo.z;float edgeArtifactCorrection=rsmInfo.w;vec4 texRSM=rsmLightMatrix*vec4(p,1.);texRSM.xy/=texRSM.w;texRSM.xy=texRSM.xy*0.5+0.5;float angle=noise(p*rsmInfo2.x);float c=cos(angle);float s=sin(angle);for (int i=0; i<numSamples; i++) {vec3 rsmSample=texelFetch(rsmSamples,ivec2(i,0),0).xyz;float weightSquare=rsmSample.z;if (rsmInfo2.y==1.0) rsmSample.xy=vec2(rsmSample.x*c+rsmSample.y*s,-rsmSample.x*s+rsmSample.y*c);vec2 uv=texRSM.xy+rsmSample.xy*radius;if (uv.x<0. || uv.x>1. || uv.y<0. || uv.y>1.) continue;vec3 vplPositionW=textureLod(rsmPositionW,uv,0.).xyz;vec3 vplNormalW=textureLod(rsmNormalW,uv,0.).xyz*2.0-1.0;vec3 vplFlux=textureLod(rsmFlux,uv,0.).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
float dist2=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*weightSquare*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}
return clamp(indirectDiffuse*intensity,0.0,1.0);}
void main(void) 
{vec3 positionW=texture2D(textureSampler,vUV).xyz;vec3 normalW=texture2D(normalSampler,vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(invView*vec4(normalW,0.)).xyz;
#endif
gl_FragColor.rgb=computeIndirect(positionW,normalW);gl_FragColor.a=1.0;}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const rsmGlobalIlluminationPixelShader = { name, shader };
//# sourceMappingURL=rsmGlobalIllumination.fragment.js.map

/***/ }),

/***/ 94490:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export screenSpaceCurvaturePixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceCurvaturePixelShader";
const shader = `precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D normalSampler;uniform float curvature_ridge;uniform float curvature_valley;
#ifndef CURVATURE_OFFSET
#define CURVATURE_OFFSET 1
#endif
float curvature_soft_clamp(float curvature,float control)
{if (curvature<0.5/control)
return curvature*(1.0-curvature*control);return 0.25/control;}
float calculate_curvature(ivec2 texel,float ridge,float valley)
{vec2 normal_up =texelFetch(normalSampler,texel+ivec2(0, CURVATURE_OFFSET),0).rb;vec2 normal_down =texelFetch(normalSampler,texel+ivec2(0,-CURVATURE_OFFSET),0).rb;vec2 normal_left =texelFetch(normalSampler,texel+ivec2(-CURVATURE_OFFSET,0),0).rb;vec2 normal_right=texelFetch(normalSampler,texel+ivec2( CURVATURE_OFFSET,0),0).rb;float normal_diff=((normal_up.g-normal_down.g)+(normal_right.r-normal_left.r));if (normal_diff<0.0)
return -2.0*curvature_soft_clamp(-normal_diff,valley);return 2.0*curvature_soft_clamp(normal_diff,ridge);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{ivec2 texel=ivec2(gl_FragCoord.xy);vec4 baseColor=texture2D(textureSampler,vUV);float curvature=calculate_curvature(texel,curvature_ridge,curvature_valley);baseColor.rgb*=curvature+1.0;gl_FragColor=baseColor;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const screenSpaceCurvaturePixelShader = { name, shader };
//# sourceMappingURL=screenSpaceCurvature.fragment.js.map

/***/ }),

/***/ 87066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export screenSpaceReflectionPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceReflectionPixelShader";
const shader = `uniform sampler2D textureSampler;
#ifdef SSR_SUPPORTED
uniform sampler2D reflectivitySampler;uniform sampler2D normalSampler;uniform sampler2D positionSampler;
#endif
uniform mat4 view;uniform mat4 projection;uniform float stepSize;uniform float strength;uniform float threshold;uniform float roughnessFactor;uniform float reflectionSpecularFalloffExponent;varying vec2 vUV;
#ifdef SSR_SUPPORTED
struct ReflectionInfo {vec3 color;vec4 coords;};/**
* According to specular,see https:
*/
vec3 fresnelSchlick(float cosTheta,vec3 F0)
{return F0+(1.0-F0)*pow(1.0-cosTheta,5.0);}
/**
* Once the pixel's coordinates has been found,let's adjust (smooth) a little bit
* by sampling multiple reflection pixels.
*/
ReflectionInfo smoothReflectionInfo(vec3 dir,vec3 hitCoord)
{ReflectionInfo info;info.color=vec3(0.0);vec4 projectedCoord;float sampledDepth;for(int i=0; i<SMOOTH_STEPS; i++)
{projectedCoord=projection*vec4(hitCoord,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);sampledDepth=(view*texture2D(positionSampler,projectedCoord.xy)).z;float depth=sampledDepth-hitCoord.z;dir*=0.5;if(depth>0.0)
hitCoord-=dir;else
hitCoord+=dir;info.color+=texture2D(textureSampler,projectedCoord.xy).rgb;}
projectedCoord=projection*vec4(hitCoord,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);info.coords=vec4(projectedCoord.xy,sampledDepth,1.0);info.color+=texture2D(textureSampler,projectedCoord.xy).rgb;info.color/=float(SMOOTH_STEPS+1);return info;}
/**
* Tests the given world position (hitCoord) according to the given reflection vector (dir)
* until it finds a collision (means that depth is enough close to say "it's the pixel to sample!").
*/
ReflectionInfo getReflectionInfo(vec3 dir,vec3 hitCoord)
{ReflectionInfo info;vec4 projectedCoord;float sampledDepth;dir*=stepSize;for(int i=0; i<REFLECTION_SAMPLES; i++)
{hitCoord+=dir;projectedCoord=projection*vec4(hitCoord,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);sampledDepth=(view*texture2D(positionSampler,projectedCoord.xy)).z;float depth=sampledDepth-hitCoord.z;
#ifdef RIGHT_HANDED_SCENE
depth*=-1.0;
#endif
if(((depth-dir.z)<threshold) && depth<=0.0)
{
#ifdef ENABLE_SMOOTH_REFLECTIONS
return smoothReflectionInfo(dir,hitCoord);
#else
info.color=texture2D(textureSampler,projectedCoord.xy).rgb;info.coords=vec4(projectedCoord.xy,sampledDepth,0.0);return info;
#endif
}}
info.color=texture2D(textureSampler,projectedCoord.xy).rgb;info.coords=vec4(projectedCoord.xy,sampledDepth,0.0);return info;}
vec3 hash(vec3 a)
{a=fract(a*0.8);a+=dot(a,a.yxz+19.19);return fract((a.xxy+a.yxx)*a.zyx);}
#endif
void main()
{
#ifdef SSR_SUPPORTED
vec4 albedoFull=texture2D(textureSampler,vUV);vec3 albedo=albedoFull.rgb;float spec=texture2D(reflectivitySampler,vUV).r;if (spec==0.0) {gl_FragColor=albedoFull;return;}
vec3 normal=(texture2D(normalSampler,vUV)).xyz;vec3 position=(view*texture2D(positionSampler,vUV)).xyz;vec3 reflected=normalize(reflect(normalize(position),normalize(normal)));float roughness=1.0-texture2D(reflectivitySampler,vUV).a;vec3 jitt=mix(vec3(0.0),hash(position),roughness)*roughnessFactor;ReflectionInfo info=getReflectionInfo(jitt+reflected,position);vec2 dCoords=smoothstep(0.2,0.6,abs(vec2(0.5,0.5)-info.coords.xy));float screenEdgefactor=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);vec3 F0=vec3(0.04);F0 =mix(F0,albedo,spec);vec3 fresnel=fresnelSchlick(max(dot(normalize(normal),normalize(position)),0.0),F0);
#ifdef RIGHT_HANDED_SCENE
reflected.z*=-1.0;
#endif
float reflectionMultiplier=clamp(pow(spec*strength,reflectionSpecularFalloffExponent)*screenEdgefactor*reflected.z,0.0,0.9);float albedoMultiplier=1.0-reflectionMultiplier;vec3 SSR=info.color*fresnel;gl_FragColor=vec4((albedo*albedoMultiplier)+(SSR*reflectionMultiplier),albedoFull.a);
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const screenSpaceReflectionPixelShader = { name, shader };
//# sourceMappingURL=screenSpaceReflection.fragment.js.map

/***/ }),

/***/ 94354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2PixelShader: () => (/* binding */ screenSpaceReflection2PixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8709);
/* harmony import */ var _ShadersInclude_screenSpaceRayTrace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69363);
// Do not edit.




const name = "screenSpaceReflection2PixelShader";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#define TEXTURECUBEFUNC(s,c,lod) textureLod(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#define TEXTURECUBEFUNC(s,c,bias) textureCube(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;
#ifdef SSR_SUPPORTED
uniform sampler2D reflectivitySampler;uniform sampler2D normalSampler;uniform sampler2D depthSampler;
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
uniform sampler2D backDepthSampler;uniform float backSizeFactor;
#endif
#ifdef SSR_USE_ENVIRONMENT_CUBE
uniform samplerCube envCubeSampler;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize;
#endif
#endif
uniform mat4 view;uniform mat4 invView;uniform mat4 projection;uniform mat4 invProjectionMatrix;uniform mat4 projectionPixel;uniform float nearPlaneZ;uniform float farPlaneZ;uniform float stepSize;uniform float maxSteps;uniform float strength;uniform float thickness;uniform float roughnessFactor;uniform float reflectionSpecularFalloffExponent;uniform float maxDistance;uniform float selfCollisionNumSkip;uniform float reflectivityThreshold;
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
vec3 hash(vec3 a)
{a=fract(a*0.8);a+=dot(a,a.yxz+19.19);return fract((a.xxy+a.yxx)*a.zyx);}
float computeAttenuationForIntersection(ivec2 hitPixel,vec2 hitUV,vec3 vsRayOrigin,vec3 vsHitPoint,vec3 reflectionVector,float maxRayDistance,float numIterations) {float attenuation=1.0;
#ifdef SSR_ATTENUATE_SCREEN_BORDERS
vec2 dCoords=smoothstep(0.2,0.6,abs(vec2(0.5,0.5)-hitUV.xy));attenuation*=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_DISTANCE
attenuation*=1.0-clamp(distance(vsRayOrigin,vsHitPoint)/maxRayDistance,0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_NUMITERATIONS
attenuation*=1.0-(numIterations/maxSteps);
#endif
#ifdef SSR_ATTENUATE_BACKFACE_REFLECTION
vec3 reflectionNormal=texelFetch(normalSampler,hitPixel,0).xyz;float directionBasedAttenuation=smoothstep(-0.17,0.0,dot(reflectionNormal,-reflectionVector));attenuation*=directionBasedAttenuation;
#endif
return attenuation;}
#endif
void main()
{
#ifdef SSR_SUPPORTED
vec4 colorFull=TEXTUREFUNC(textureSampler,vUV,0.0);vec3 color=colorFull.rgb;vec4 reflectivity=TEXTUREFUNC(reflectivitySampler,vUV,0.0);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=reflectivityThreshold) {
#ifdef SSR_USE_BLUR
gl_FragColor=vec4(0.);
#else
gl_FragColor=colorFull;
#endif
return;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpace(color);
#endif
vec2 texSize=vec2(textureSize(depthSampler,0));vec3 csNormal=texelFetch(normalSampler,ivec2(vUV*texSize),0).xyz; 
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(view*vec4(csNormal,0.0)).xyz;
#endif
float depth=texelFetch(depthSampler,ivec2(vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,nearPlaneZ,farPlaneZ);
#endif
vec3 csPosition=computeViewPosFromUVDepth(vUV,depth,projection,invProjectionMatrix);
#ifdef ORTHOGRAPHIC_CAMERA
vec3 csViewDirection=vec3(0.,0.,1.);
#else
vec3 csViewDirection=normalize(csPosition);
#endif
vec3 csReflectedVector=reflect(csViewDirection,csNormal);
#ifdef SSR_USE_ENVIRONMENT_CUBE
vec3 wReflectedVector=vec3(invView*vec4(csReflectedVector,0.0));
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
vec4 worldPos=invView*vec4(csPosition,1.0);wReflectedVector=parallaxCorrectNormal(worldPos.xyz,normalize(wReflectedVector),vReflectionSize,vReflectionPosition);
#endif
#ifdef SSR_INVERTCUBICMAP
wReflectedVector.y*=-1.0;
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
wReflectedVector.z*=-1.0;
#endif
vec3 envColor=TEXTURECUBEFUNC(envCubeSampler,wReflectedVector,0.0).xyz;
#ifdef SSR_ENVIRONMENT_CUBE_IS_GAMMASPACE
envColor=toLinearSpace(envColor);
#endif
#else
vec3 envColor=color;
#endif
float reflectionAttenuation=1.0;bool rayHasHit=false;vec2 startPixel;vec2 hitPixel;vec3 hitPoint;float numIterations;
#ifdef SSRAYTRACE_DEBUG
vec3 debugColor;
#endif
#ifdef SSR_ATTENUATE_FACING_CAMERA
reflectionAttenuation*=1.0-smoothstep(0.25,0.5,dot(-csViewDirection,csReflectedVector));
#endif
if (reflectionAttenuation>0.0) {
#ifdef SSR_USE_BLUR
vec3 jitt=vec3(0.);
#else
float roughness=1.0-reflectivity.a;vec3 jitt=mix(vec3(0.0),hash(csPosition)-vec3(0.5),roughness)*roughnessFactor; 
#endif
vec2 uv2=vUV*texSize;float c=(uv2.x+uv2.y)*0.25;float jitter=mod(c,1.0); 
rayHasHit=traceScreenSpaceRay1(
csPosition,
normalize(csReflectedVector+jitt),
projectionPixel,
depthSampler,
texSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
backDepthSampler,
backSizeFactor,
#endif
thickness,
nearPlaneZ,
farPlaneZ,
stepSize,
jitter,
maxSteps,
maxDistance,
selfCollisionNumSkip,
startPixel,
hitPixel,
hitPoint,
numIterations
#ifdef SSRAYTRACE_DEBUG
,debugColor
#endif
);}
#ifdef SSRAYTRACE_DEBUG
gl_FragColor=vec4(debugColor,1.);return;
#endif
vec3 F0=reflectivity.rgb;vec3 fresnel=fresnelSchlickGGX(max(dot(csNormal,-csViewDirection),0.0),F0,vec3(1.));vec3 SSR=envColor;if (rayHasHit) {vec3 reflectedColor=texelFetch(textureSampler,ivec2(hitPixel),0).rgb;
#ifdef SSR_INPUT_IS_GAMMA_SPACE
reflectedColor=toLinearSpace(reflectedColor);
#endif
reflectionAttenuation*=computeAttenuationForIntersection(ivec2(hitPixel),hitPixel/texSize,csPosition,hitPoint,csReflectedVector,maxDistance,numIterations);SSR=reflectedColor*reflectionAttenuation+(1.0-reflectionAttenuation)*envColor;}
#ifndef SSR_BLEND_WITH_FRESNEL
SSR*=fresnel;
#endif
#ifdef SSR_USE_BLUR
float blur_radius=0.0;float roughness=1.0-reflectivity.a*(1.0-roughnessFactor);if (roughness>0.001) {float cone_angle=min(roughness,0.999)*3.14159265*0.5;float cone_len=distance(startPixel,hitPixel);float op_len=2.0*tan(cone_angle)*cone_len; 
float a=op_len;float h=cone_len;float a2=a*a;float fh2=4.0f*h*h;blur_radius=(a*(sqrt(a2+fh2)-a))/(4.0f*h);}
gl_FragColor=vec4(SSR,blur_radius/255.0); 
#else
#ifdef SSR_BLEND_WITH_FRESNEL
vec3 reflectionMultiplier=clamp(pow(fresnel*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#else
vec3 reflectionMultiplier=clamp(pow(reflectivity.rgb*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#endif
vec3 colorMultiplier=1.0-reflectionMultiplier;vec3 finalColor=(color*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpace(finalColor);
#endif
gl_FragColor=vec4(finalColor,colorFull.a);
#endif
#else
gl_FragColor=TEXTUREFUNC(textureSampler,vUV,0.0);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const screenSpaceReflection2PixelShader = { name, shader };
//# sourceMappingURL=screenSpaceReflection2.fragment.js.map

/***/ }),

/***/ 68133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2BlurPixelShader: () => (/* binding */ screenSpaceReflection2BlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "screenSpaceReflection2BlurPixelShader";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,lod) texture2DLodEXT(s,c,lod)
#else
#define TEXTUREFUNC(s,c,bias) texture2D(s,c,bias)
#endif
uniform sampler2D textureSampler;varying vec2 vUV;uniform vec2 texelOffsetScale;const float weights[8]=float[8] (0.071303,0.131514,0.189879,0.321392,0.452906, 0.584419,0.715932,0.847445);void processSample(vec2 uv,float i,vec2 stepSize,inout vec4 accumulator,inout float denominator)
{vec2 offsetUV=stepSize*i+uv;float coefficient=weights[int(2.0-abs(i))];accumulator+=TEXTUREFUNC(textureSampler,offsetUV,0.0)*coefficient;denominator+=coefficient;}
void main()
{vec4 colorFull=TEXTUREFUNC(textureSampler,vUV,0.0);if (dot(colorFull,vec4(1.0))==0.0) {gl_FragColor=colorFull;return;}
float blurRadius=colorFull.a*255.0; 
vec2 stepSize=texelOffsetScale.xy*blurRadius;vec4 accumulator=TEXTUREFUNC(textureSampler,vUV,0.0)*0.214607;float denominator=0.214607;processSample(vUV,1.0,stepSize,accumulator,denominator);processSample(vUV,1.0*0.2,stepSize,accumulator,denominator);processSample(vUV,1.0*0.4,stepSize,accumulator,denominator);processSample(vUV,1.0*0.6,stepSize,accumulator,denominator);processSample(vUV,1.0*0.8,stepSize,accumulator,denominator);processSample(vUV,1.0*1.2,stepSize,accumulator,denominator);processSample(vUV,1.0*1.4,stepSize,accumulator,denominator);processSample(vUV,1.0*1.6,stepSize,accumulator,denominator);processSample(vUV,1.0*1.8,stepSize,accumulator,denominator);processSample(vUV,1.0*2.0,stepSize,accumulator,denominator);processSample(vUV,-1.0,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.2,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.4,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.6,stepSize,accumulator,denominator);processSample(vUV,-1.0*0.8,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.2,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.4,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.6,stepSize,accumulator,denominator);processSample(vUV,-1.0*1.8,stepSize,accumulator,denominator);processSample(vUV,-1.0*2.0,stepSize,accumulator,denominator);gl_FragColor=vec4(accumulator.rgb/denominator,colorFull.a);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const screenSpaceReflection2BlurPixelShader = { name, shader };
//# sourceMappingURL=screenSpaceReflection2Blur.fragment.js.map

/***/ }),

/***/ 17406:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenSpaceReflection2BlurCombinerPixelShader: () => (/* binding */ screenSpaceReflection2BlurCombinerPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_helperFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73325);
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8709);
/* harmony import */ var _ShadersInclude_screenSpaceRayTrace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69363);
// Do not edit.




const name = "screenSpaceReflection2BlurCombinerPixelShader";
const shader = `uniform sampler2D textureSampler; 
uniform sampler2D mainSampler;uniform sampler2D reflectivitySampler;uniform float strength;uniform float reflectionSpecularFalloffExponent;uniform float reflectivityThreshold;varying vec2 vUV;
#include<helperFunctions>
#ifdef SSR_BLEND_WITH_FRESNEL
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
uniform mat4 projection;uniform mat4 invProjectionMatrix;uniform sampler2D normalSampler;uniform sampler2D depthSampler;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
uniform float nearPlaneZ;uniform float farPlaneZ;
#endif
#endif
void main()
{
#ifdef SSRAYTRACE_DEBUG
gl_FragColor=texture2D(textureSampler,vUV);
#else
vec3 SSR=texture2D(textureSampler,vUV).rgb;vec4 color=texture2D(mainSampler,vUV);vec4 reflectivity=texture2D(reflectivitySampler,vUV);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=reflectivityThreshold) {gl_FragColor=color;return;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpace(color);
#endif
#ifdef SSR_BLEND_WITH_FRESNEL
vec2 texSize=vec2(textureSize(depthSampler,0));vec3 csNormal=texelFetch(normalSampler,ivec2(vUV*texSize),0).xyz;float depth=texelFetch(depthSampler,ivec2(vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,nearPlaneZ,farPlaneZ);
#endif
vec3 csPosition=computeViewPosFromUVDepth(vUV,depth,projection,invProjectionMatrix);vec3 csViewDirection=normalize(csPosition);vec3 F0=reflectivity.rgb;vec3 fresnel=fresnelSchlickGGX(max(dot(csNormal,-csViewDirection),0.0),F0,vec3(1.));vec3 reflectionMultiplier=clamp(pow(fresnel*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#else
vec3 reflectionMultiplier=clamp(pow(reflectivity.rgb*strength,vec3(reflectionSpecularFalloffExponent)),0.0,1.0);
#endif
vec3 colorMultiplier=1.0-reflectionMultiplier;vec3 finalColor=(color.rgb*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpace(finalColor);
#endif
gl_FragColor=vec4(finalColor,color.a);
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const screenSpaceReflection2BlurCombinerPixelShader = { name, shader };
//# sourceMappingURL=screenSpaceReflection2BlurCombiner.fragment.js.map

/***/ }),

/***/ 70169:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  shadowMapPixelShader: () => (/* binding */ shadowMapPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js
var packingFunctions = __webpack_require__(8334);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bayerDitherFunctions.js
// Do not edit.

const bayerDitherFunctions_name = "bayerDitherFunctions";
const shader = `float bayerDither2(vec2 _P) {return mod(2.0*_P.y+_P.x+1.0,4.0);}
float bayerDither4(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
float bayerDither8(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[bayerDitherFunctions_name] = shader;
/** @internal */
const bayerDitherFunctions = { name: bayerDitherFunctions_name, shader };
//# sourceMappingURL=bayerDitherFunctions.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentExtraDeclaration.js
// Do not edit.



const shadowMapFragmentExtraDeclaration_name = "shadowMapFragmentExtraDeclaration";
const shadowMapFragmentExtraDeclaration_shader = `#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform vec2 softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[shadowMapFragmentExtraDeclaration_name] = shadowMapFragmentExtraDeclaration_shader;
/** @internal */
const shadowMapFragmentExtraDeclaration = { name: shadowMapFragmentExtraDeclaration_name, shader: shadowMapFragmentExtraDeclaration_shader };
//# sourceMappingURL=shadowMapFragmentExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js
var clipPlaneFragmentDeclaration = __webpack_require__(6194);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js
var clipPlaneFragment = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment.js
var shadowMapFragment = __webpack_require__(98322);
;// ./node_modules/@babylonjs/core/Shaders/shadowMap.fragment.js
// Do not edit.





const shadowMap_fragment_name = "shadowMapPixelShader";
const shadowMap_fragment_shader = `#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
vec4 opacityMap=texture2D(diffuseSampler,vUV);float alphaFromAlphaTexture=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (softTransparentShadowSM.y==1.0) {opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x) discard;
#endif
#endif
#include<shadowMapFragment>
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[shadowMap_fragment_name] = shadowMap_fragment_shader;
/** @internal */
const shadowMapPixelShader = { name: shadowMap_fragment_name, shader: shadowMap_fragment_shader };
//# sourceMappingURL=shadowMap.fragment.js.map

/***/ }),

/***/ 29468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  shadowMapVertexShader: () => (/* binding */ shadowMapVertexShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js
var bonesDeclaration = __webpack_require__(69707);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js
var bakedVertexAnimationDeclaration = __webpack_require__(18959);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js
var morphTargetsVertexGlobalDeclaration = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js
var morphTargetsVertexDeclaration = __webpack_require__(90738);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneVertexDeclaration.js
// Do not edit.

const sceneVertexDeclaration_name = "sceneVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[sceneVertexDeclaration_name] = shader;
/** @internal */
const sceneVertexDeclaration = { name: sceneVertexDeclaration_name, shader };
//# sourceMappingURL=sceneVertexDeclaration.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/meshVertexDeclaration.js
// Do not edit.

const meshVertexDeclaration_name = "meshVertexDeclaration";
const meshVertexDeclaration_shader = `uniform mat4 world;uniform float visibility;
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[meshVertexDeclaration_name] = meshVertexDeclaration_shader;
/** @internal */
const meshVertexDeclaration = { name: meshVertexDeclaration_name, shader: meshVertexDeclaration_shader };
//# sourceMappingURL=meshVertexDeclaration.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexDeclaration.js
// Do not edit.



const shadowMapVertexDeclaration_name = "shadowMapVertexDeclaration";
const shadowMapVertexDeclaration_shader = `#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[shadowMapVertexDeclaration_name] = shadowMapVertexDeclaration_shader;
/** @internal */
const shadowMapVertexDeclaration = { name: shadowMapVertexDeclaration_name, shader: shadowMapVertexDeclaration_shader };
//# sourceMappingURL=shadowMapVertexDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js
var sceneUboDeclaration = __webpack_require__(28764);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js
var meshUboDeclaration = __webpack_require__(96467);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapUboDeclaration.js
// Do not edit.



const shadowMapUboDeclaration_name = "shadowMapUboDeclaration";
const shadowMapUboDeclaration_shader = `layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[shadowMapUboDeclaration_name] = shadowMapUboDeclaration_shader;
/** @internal */
const shadowMapUboDeclaration = { name: shadowMapUboDeclaration_name, shader: shadowMapUboDeclaration_shader };
//# sourceMappingURL=shadowMapUboDeclaration.js.map
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexExtraDeclaration.js
// Do not edit.

const shadowMapVertexExtraDeclaration_name = "shadowMapVertexExtraDeclaration";
const shadowMapVertexExtraDeclaration_shader = `#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[shadowMapVertexExtraDeclaration_name] = shadowMapVertexExtraDeclaration_shader;
/** @internal */
const shadowMapVertexExtraDeclaration = { name: shadowMapVertexExtraDeclaration_name, shader: shadowMapVertexExtraDeclaration_shader };
//# sourceMappingURL=shadowMapVertexExtraDeclaration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js
var clipPlaneVertexDeclaration = __webpack_require__(71636);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js
var morphTargetsVertexGlobal = __webpack_require__(48451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js
var morphTargetsVertex = __webpack_require__(15060);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js
var instancesVertex = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js
var bonesVertex = __webpack_require__(3361);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js
var bakedVertexAnimation = __webpack_require__(65523);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexNormalBias.js
// Do not edit.

const shadowMapVertexNormalBias_name = "shadowMapVertexNormalBias";
const shadowMapVertexNormalBias_shader = `#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[shadowMapVertexNormalBias_name] = shadowMapVertexNormalBias_shader;
/** @internal */
const shadowMapVertexNormalBias = { name: shadowMapVertexNormalBias_name, shader: shadowMapVertexNormalBias_shader };
//# sourceMappingURL=shadowMapVertexNormalBias.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexMetric.js
var shadowMapVertexMetric = __webpack_require__(29796);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js
var clipPlaneVertex = __webpack_require__(47314);
;// ./node_modules/@babylonjs/core/Shaders/shadowMap.vertex.js
// Do not edit.


















const shadowMap_vertex_name = "shadowMapVertexShader";
const shadowMap_vertex_shader = `attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[shadowMap_vertex_name] = shadowMap_vertex_shader;
/** @internal */
const shadowMapVertexShader = { name: shadowMap_vertex_name, shader: shadowMap_vertex_shader };
//# sourceMappingURL=shadowMap.vertex.js.map

/***/ }),

/***/ 78438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sharpenPixelShader: () => (/* binding */ sharpenPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "sharpenPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform vec2 sharpnessAmounts;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 onePixel=vec2(1.0,1.0)/screenSize;vec4 color=texture2D(textureSampler,vUV);vec4 edgeDetection=texture2D(textureSampler,vUV+onePixel*vec2(0,-1)) +
texture2D(textureSampler,vUV+onePixel*vec2(-1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(0,1)) -
color*4.0;gl_FragColor=max(vec4(color.rgb*sharpnessAmounts.y,color.a)-(sharpnessAmounts.x*vec4(edgeDetection.rgb,0)),0.);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const sharpenPixelShader = { name, shader };
//# sourceMappingURL=sharpen.fragment.js.map

/***/ }),

/***/ 69708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export spriteMapPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7806);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_logDepthFragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29741);
/* harmony import */ var _ShadersInclude_fogFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2360);
// Do not edit.





const name = "spriteMapPixelShader";
const shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
precision highp float;varying vec3 vPosition;varying vec2 vUV;varying vec2 tUV;uniform float time;uniform float spriteCount;uniform sampler2D spriteSheet;uniform vec2 spriteMapSize;uniform vec2 outputSize;uniform vec2 stageSize;uniform sampler2D frameMap;uniform sampler2D tileMaps[LAYERS];uniform sampler2D animationMap;uniform vec3 colorMul;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
float mt;const float fdStep=1.0*0.25;const float aFrameSteps=MAX_ANIMATION_FRAMES==0.0 ? 0.0 : 1.0/MAX_ANIMATION_FRAMES;mat4 getFrameData(float frameID) {float fX=frameID/spriteCount;return mat4(
TEXTUREFUNC(frameMap,vec2(fX,0.0),0.0),
TEXTUREFUNC(frameMap,vec2(fX,fdStep*1.0),0.0),
TEXTUREFUNC(frameMap,vec2(fX,fdStep*2.0),0.0),
vec4(0.0)
);}
void main() {vec4 color=vec4(0.0);vec2 tileUV=fract(tUV);vec2 tileID=floor(tUV);vec2 sheetUnits=1.0/spriteMapSize;float spriteUnits=1.0/spriteCount;vec2 stageUnits=1.0/stageSize;for(int i=0; i<LAYERS; i++) {float frameID;
#define LAYER_ID_SWITCH
vec4 animationData=TEXTUREFUNC(animationMap,vec2((frameID+0.5)/spriteCount,0.0),0.0);if(animationData.y>0.0) {mt=mod(time*animationData.z,1.0);for(float f=0.0; f<MAX_ANIMATION_FRAMES; f++) {if(animationData.y>mt) {frameID=animationData.x;break;}
animationData=TEXTUREFUNC(animationMap,vec2((frameID+0.5)/spriteCount,aFrameSteps*f),0.0);}}
mat4 frameData=getFrameData(frameID+0.5);vec2 frameSize=(frameData[0].zw)/spriteMapSize;vec2 offset=frameData[0].xy*sheetUnits;vec2 ratio=frameData[2].xy/frameData[0].zw;
#ifdef FR_CW
if (frameData[2].z==1.0) {tileUV.xy=tileUV.yx;} else {tileUV.xy=fract(tUV).xy;}
#ifdef FLIPU
tileUV.y=1.0-tileUV.y;
#endif
#else
if (frameData[2].z==1.0) {
#ifdef FLIPU
tileUV.y=1.0-tileUV.y;
#endif
tileUV.xy=tileUV.yx;} else {tileUV.xy=fract(tUV).xy;
#ifdef FLIPU
tileUV.y=1.0-tileUV.y;
#endif
}
#endif
vec4 nc=TEXTUREFUNC(spriteSheet,tileUV*frameSize+offset,0.0);if (i==0) {color=nc;} else {float alpha=min(color.a+nc.a,1.0);vec3 mixed=mix(color.xyz,nc.xyz,nc.a);color=vec4(mixed,alpha);}}
color.xyz*=colorMul;
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const spriteMapPixelShader = { name, shader };
//# sourceMappingURL=spriteMap.fragment.js.map

/***/ }),

/***/ 52794:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export spriteMapVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86560);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2215);
// Do not edit.




const name = "spriteMapVertexShader";
const shader = `precision highp float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;varying vec3 vPosition;varying vec2 vUV;varying vec2 tUV;uniform float time;uniform mat4 world;uniform mat4 view;uniform mat4 projection;uniform vec2 stageSize;uniform float stageScale;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
void main() {vec4 p=vec4( position,1. );vPosition=p.xyz;vUV=uv;tUV=uv*stageSize; 
vec3 viewPos=(view*world*p).xyz; 
gl_Position=projection*vec4(viewPos,1.0); 
#ifdef FOG
vFogDistance=viewPos;
#endif
#include<logDepthVertex>
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const spriteMapVertexShader = { name, shader };
//# sourceMappingURL=spriteMap.vertex.js.map

/***/ }),

/***/ 87554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  spritesPixelShader: () => (/* binding */ spritesPixelShader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js
var fogFragmentDeclaration = __webpack_require__(7806);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js
var logDepthDeclaration = __webpack_require__(34581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js
var logDepthFragment = __webpack_require__(29741);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js
var fogFragment = __webpack_require__(2360);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingCompatibility.js
// Do not edit.

const imageProcessingCompatibility_name = "imageProcessingCompatibility";
const shader = `#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[imageProcessingCompatibility_name] = shader;
/** @internal */
const imageProcessingCompatibility = { name: imageProcessingCompatibility_name, shader };
//# sourceMappingURL=imageProcessingCompatibility.js.map
;// ./node_modules/@babylonjs/core/Shaders/sprites.fragment.js
// Do not edit.






const sprites_fragment_name = "spritesPixelShader";
const sprites_fragment_shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform bool alphaTest;varying vec4 vColor;varying vec2 vUV;uniform sampler2D diffuseSampler;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
vec2 uvPixelPerfect(vec2 uv) {vec2 res=vec2(textureSize(diffuseSampler,0));uv=uv*res;vec2 seam=floor(uv+0.5);uv=seam+clamp((uv-seam)/fwidth(uv),-0.5,0.5);return uv/res;}
#endif
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
vec2 uv=uvPixelPerfect(vUV);
#else
vec2 uv=vUV;
#endif
vec4 color=texture2D(diffuseSampler,uv);float fAlphaTest=float(alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95)
discard;}
color*=vColor;
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[sprites_fragment_name] = sprites_fragment_shader;
/** @internal */
const spritesPixelShader = { name: sprites_fragment_name, shader: sprites_fragment_shader };
//# sourceMappingURL=sprites.fragment.js.map

/***/ }),

/***/ 79831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spritesVertexShader: () => (/* binding */ spritesVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_fogVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86560);
/* harmony import */ var _ShadersInclude_logDepthDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34581);
/* harmony import */ var _ShadersInclude_logDepthVertex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2215);
// Do not edit.




const name = "spritesVertexShader";
const shader = `attribute vec4 position;attribute vec2 options;attribute vec2 offsets;attribute vec2 inverts;attribute vec4 cellInfo;attribute vec4 color;uniform mat4 view;uniform mat4 projection;varying vec2 vUV;varying vec4 vColor;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 viewPos=(view*vec4(position.xyz,1.0)).xyz; 
vec2 cornerPos;float angle=position.w;vec2 size=vec2(options.x,options.y);vec2 offset=offsets.xy;cornerPos=vec2(offset.x-0.5,offset.y -0.5)*size;vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;gl_Position=projection*vec4(viewPos,1.0); 
vColor=color;vec2 uvOffset=vec2(abs(offset.x-inverts.x),abs(1.0-offset.y-inverts.y));vec2 uvPlace=cellInfo.xy;vec2 uvSize=cellInfo.zw;vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const spritesVertexShader = { name, shader };
//# sourceMappingURL=sprites.vertex.js.map

/***/ }),

/***/ 23881:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ssaoPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "ssaoPixelShader";
const shader = `uniform sampler2D textureSampler;varying vec2 vUV;
#ifdef SSAO
uniform sampler2D randomSampler;uniform float randTextureTiles;uniform float samplesFactor;uniform vec3 sampleSphere[SAMPLES];uniform float totalStrength;uniform float radius;uniform float area;uniform float fallOff;uniform float base;vec3 normalFromDepth(float depth,vec2 coords)
{vec2 offset1=vec2(0.0,radius);vec2 offset2=vec2(radius,0.0);float depth1=texture2D(textureSampler,coords+offset1).r;float depth2=texture2D(textureSampler,coords+offset2).r;vec3 p1=vec3(offset1,depth1-depth);vec3 p2=vec3(offset2,depth2-depth);vec3 normal=cross(p1,p2);normal.z=-normal.z;return normalize(normal);}
void main()
{vec3 random=normalize(texture2D(randomSampler,vUV*randTextureTiles).rgb);float depth=texture2D(textureSampler,vUV).r;vec3 position=vec3(vUV,depth);vec3 normal=normalFromDepth(depth,vUV);float radiusDepth=radius/depth;float occlusion=0.0;vec3 ray;vec3 hemiRay;float occlusionDepth;float difference;for (int i=0; i<SAMPLES; i++)
{ray=radiusDepth*reflect(sampleSphere[i],random);hemiRay=position+sign(dot(ray,normal))*ray;occlusionDepth=texture2D(textureSampler,clamp(hemiRay.xy,vec2(0.001,0.001),vec2(0.999,0.999))).r;difference=depth-occlusionDepth;occlusion+=step(fallOff,difference)*(1.0-smoothstep(fallOff,area,difference));}
float ao=1.0-totalStrength*occlusion*samplesFactor;float result=clamp(ao+base,0.0,1.0);gl_FragColor.r=result;gl_FragColor.g=result;gl_FragColor.b=result;gl_FragColor.a=1.0;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const ssaoPixelShader = { name, shader };
//# sourceMappingURL=ssao.fragment.js.map

/***/ }),

/***/ 85363:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ssao2PixelShader: () => (/* binding */ ssao2PixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "ssao2PixelShader";
const shader = `precision highp float;uniform sampler2D textureSampler;varying vec2 vUV;
#ifdef SSAO
float scales[16]=float[16](
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
);uniform float near;uniform float radius;uniform sampler2D depthSampler;uniform sampler2D randomSampler;uniform sampler2D normalSampler;uniform float randTextureTiles;uniform float samplesFactor;uniform vec3 sampleSphere[SAMPLES];uniform float totalStrength;uniform float base;uniform float xViewport;uniform float yViewport;uniform mat3 depthProjection;uniform float maxZ;uniform float minZAspect;uniform vec2 texelSize;uniform mat4 projection;void main()
{vec3 random=textureLod(randomSampler,vUV*randTextureTiles,0.0).rgb;float depth=textureLod(depthSampler,vUV,0.0).r;float depthSign=sign(depth);depth=depth*depthSign;vec3 normal=textureLod(normalSampler,vUV,0.0).rgb;float occlusion=0.0;float correctedRadius=min(radius,minZAspect*depth/near);vec3 vViewRay=vec3((vUV.x*2.0-1.0)*xViewport,(vUV.y*2.0-1.0)*yViewport,depthSign);vec3 vDepthFactor=depthProjection*vec3(1.0,1.0,depth);vec3 origin=vViewRay*vDepthFactor;vec3 rvec=random*2.0-1.0;rvec.z=0.0;float dotProduct=dot(rvec,normal);rvec=1.0-abs(dotProduct)>1e-2 ? rvec : vec3(-rvec.y,0.0,rvec.x);vec3 tangent=normalize(rvec-normal*dot(rvec,normal));vec3 bitangent=cross(normal,tangent);mat3 tbn=mat3(tangent,bitangent,normal);float difference;for (int i=0; i<SAMPLES; ++i) {vec3 samplePosition=scales[(i+int(random.x*16.0)) % 16]*tbn*sampleSphere[(i+int(random.y*16.0)) % 16];samplePosition=samplePosition*correctedRadius+origin;vec4 offset=vec4(samplePosition,1.0);offset=projection*offset;offset.xyz/=offset.w;offset.xy=offset.xy*0.5+0.5;if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {continue;}
float sampleDepth=abs(textureLod(depthSampler,offset.xy,0.0).r);difference=depthSign*samplePosition.z-sampleDepth;float rangeCheck=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);occlusion+=step(EPSILON,difference)*rangeCheck;}
occlusion=occlusion*(1.0-smoothstep(maxZ*0.75,maxZ,depth));float ao=1.0-totalStrength*occlusion*samplesFactor;float result=clamp(ao+base,0.0,1.0);gl_FragColor=vec4(vec3(result),1.0);}
#endif
#ifdef BLUR
uniform float outSize;uniform float soften;uniform float tolerance;uniform int samples;
#ifndef BLUR_BYPASS
uniform sampler2D depthSampler;
#ifdef BLUR_LEGACY
#define inline
float blur13Bilateral(sampler2D image,vec2 uv,vec2 step) {float result=0.0;vec2 off1=vec2(1.411764705882353)*step;vec2 off2=vec2(3.2941176470588234)*step;vec2 off3=vec2(5.176470588235294)*step;float compareDepth=abs(textureLod(depthSampler,uv,0.0).r);float sampleDepth;float weight;float weightSum=30.0;result+=textureLod(image,uv,0.0).r*30.0;sampleDepth=abs(textureLod(depthSampler,uv+off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureLod(image,uv+off1,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureLod(image,uv-off1,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv+off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv+off2,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv-off2,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv+off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv+off3,0.0).r*weight;sampleDepth=abs(textureLod(depthSampler,uv-off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureLod(image,uv-off3,0.0).r*weight;return result/weightSum;}
#endif
#endif
void main()
{float result=0.0;
#ifdef BLUR_BYPASS
result=textureLod(textureSampler,vUV,0.0).r;
#else
#ifdef BLUR_H
vec2 step=vec2(1.0/outSize,0.0);
#else
vec2 step=vec2(0.0,1.0/outSize);
#endif
#ifdef BLUR_LEGACY
result=blur13Bilateral(textureSampler,vUV,step);
#else
float compareDepth=abs(textureLod(depthSampler,vUV,0.0).r);float weightSum=0.0;for (int i=-samples; i<samples; i+=2)
{vec2 samplePos=vUV+step*(float(i)+0.5);float sampleDepth=abs(textureLod(depthSampler,samplePos,0.0).r);float falloff=smoothstep(0.0,
float(samples),
float(samples)-abs(float(i))*soften);float minDivider=tolerance*0.5+0.003;float weight=falloff/( minDivider+abs(compareDepth-sampleDepth));result+=textureLod(textureSampler,samplePos,0.0).r*weight;weightSum+=weight;}
result/=weightSum;
#endif
#endif
gl_FragColor.rgb=vec3(result);gl_FragColor.a=1.0;}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const ssao2PixelShader = { name, shader };
//# sourceMappingURL=ssao2.fragment.js.map

/***/ }),

/***/ 74154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ssaoCombinePixelShader: () => (/* binding */ ssaoCombinePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "ssaoCombinePixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D originalColor;uniform vec4 viewport;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);vec4 sceneColor=texture2D(originalColor,vUV);gl_FragColor=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const ssaoCombinePixelShader = { name, shader };
//# sourceMappingURL=ssaoCombine.fragment.js.map

/***/ }),

/***/ 61660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export standardPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_packingFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8334);
// Do not edit.


const name = "standardPixelShader";
const shader = `uniform sampler2D textureSampler;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
#if defined(PASS_POST_PROCESS)
void main(void)
{vec4 color=texture2D(textureSampler,vUV);gl_FragColor=color;}
#endif
#if defined(DOWN_SAMPLE_X4)
uniform vec2 dsOffsets[16];void main(void)
{vec4 average=vec4(0.0,0.0,0.0,0.0);average=texture2D(textureSampler,vUV+dsOffsets[0]);average+=texture2D(textureSampler,vUV+dsOffsets[1]);average+=texture2D(textureSampler,vUV+dsOffsets[2]);average+=texture2D(textureSampler,vUV+dsOffsets[3]);average+=texture2D(textureSampler,vUV+dsOffsets[4]);average+=texture2D(textureSampler,vUV+dsOffsets[5]);average+=texture2D(textureSampler,vUV+dsOffsets[6]);average+=texture2D(textureSampler,vUV+dsOffsets[7]);average+=texture2D(textureSampler,vUV+dsOffsets[8]);average+=texture2D(textureSampler,vUV+dsOffsets[9]);average+=texture2D(textureSampler,vUV+dsOffsets[10]);average+=texture2D(textureSampler,vUV+dsOffsets[11]);average+=texture2D(textureSampler,vUV+dsOffsets[12]);average+=texture2D(textureSampler,vUV+dsOffsets[13]);average+=texture2D(textureSampler,vUV+dsOffsets[14]);average+=texture2D(textureSampler,vUV+dsOffsets[15]);average/=16.0;gl_FragColor=average;}
#endif
#if defined(BRIGHT_PASS)
uniform vec2 dsOffsets[4];uniform float brightThreshold;void main(void)
{vec4 average=vec4(0.0,0.0,0.0,0.0);average=texture2D(textureSampler,vUV+vec2(dsOffsets[0].x,dsOffsets[0].y));average+=texture2D(textureSampler,vUV+vec2(dsOffsets[1].x,dsOffsets[1].y));average+=texture2D(textureSampler,vUV+vec2(dsOffsets[2].x,dsOffsets[2].y));average+=texture2D(textureSampler,vUV+vec2(dsOffsets[3].x,dsOffsets[3].y));average*=0.25;float luminance=length(average.rgb);if (luminance<brightThreshold) {average=vec4(0.0,0.0,0.0,1.0);}
gl_FragColor=average;}
#endif
#if defined(TEXTURE_ADDER)
uniform sampler2D otherSampler;uniform sampler2D lensSampler;uniform float exposure;void main(void)
{vec3 colour=texture2D(textureSampler,vUV).rgb;colour*=exposure;vec3 X=max(vec3(0.0,0.0,0.0),colour-0.004);vec3 retColor=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;colour+=colour*texture2D(lensSampler,vUV).rgb;vec4 finalColor=vec4(colour.rgb,1.0)+texture2D(otherSampler,vUV);gl_FragColor=finalColor;}
#endif
#if defined(VLS)
#define PI 3.1415926535897932384626433832795
uniform mat4 shadowViewProjection;uniform mat4 lightWorld;uniform vec3 cameraPosition;uniform vec3 sunDirection;uniform vec3 sunColor;uniform vec2 depthValues;uniform float scatteringCoefficient;uniform float scatteringPower;uniform sampler2D shadowMapSampler;uniform sampler2D positionSampler;float computeScattering(float lightDotView)
{float result=1.0-scatteringCoefficient*scatteringCoefficient;result/=(4.0*PI*pow(1.0+scatteringCoefficient*scatteringCoefficient-(2.0*scatteringCoefficient)*lightDotView,1.5));return result;}
void main(void)
{vec3 worldPos=texture2D(positionSampler,vUV).rgb;vec3 startPosition=cameraPosition;vec3 rayVector=worldPos-startPosition;float rayLength=length(rayVector);vec3 rayDirection=rayVector/rayLength;float stepLength=rayLength/NB_STEPS;vec3 stepL=rayDirection*stepLength;vec3 currentPosition=startPosition;vec3 accumFog=vec3(0.0);for (int i=0; i<int(NB_STEPS); i++)
{vec4 worldInShadowCameraSpace=shadowViewProjection*vec4(currentPosition,1.0);float depthMetric= (worldInShadowCameraSpace.z+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depthMetric,0.0,1.0);worldInShadowCameraSpace.xyz/=worldInShadowCameraSpace.w;worldInShadowCameraSpace.xyz=0.5*worldInShadowCameraSpace.xyz+vec3(0.5);float shadowMapValue=texture2D(shadowMapSampler,worldInShadowCameraSpace.xy).r;if (shadowMapValue>shadowPixelDepth)
accumFog+=sunColor*computeScattering(dot(rayDirection,sunDirection));currentPosition+=stepL;}
accumFog/=NB_STEPS;vec3 color=accumFog*scatteringPower;gl_FragColor=vec4(color*exp(color) ,1.0);}
#endif
#if defined(VLSMERGE)
uniform sampler2D originalSampler;void main(void)
{gl_FragColor=texture2D(originalSampler,vUV)+texture2D(textureSampler,vUV);}
#endif
#if defined(LUMINANCE)
uniform vec2 lumOffsets[4];void main()
{float average=0.0;vec4 color=vec4(0.0);float maximum=-1e20;vec3 weight=vec3(0.299,0.587,0.114);for (int i=0; i<4; i++)
{color=texture2D(textureSampler,vUV+ lumOffsets[i]);float GreyValue=dot(color.rgb,vec3(0.33,0.33,0.33));
#ifdef WEIGHTED_AVERAGE
float GreyValue=dot(color.rgb,weight);
#endif
#ifdef BRIGHTNESS
float GreyValue=max(color.r,max(color.g,color.b));
#endif
#ifdef HSL_COMPONENT
float GreyValue=0.5*(max(color.r,max(color.g,color.b))+min(color.r,min(color.g,color.b)));
#endif
#ifdef MAGNITUDE
float GreyValue=length(color.rgb);
#endif
maximum=max(maximum,GreyValue);average+=(0.25*log(1e-5+GreyValue));}
average=exp(average);gl_FragColor=vec4(average,maximum,0.0,1.0);}
#endif
#if defined(LUMINANCE_DOWN_SAMPLE)
uniform vec2 dsOffsets[9];uniform float halfDestPixelSize;
#ifdef FINAL_DOWN_SAMPLER
#include<packingFunctions>
#endif
void main()
{vec4 color=vec4(0.0);float average=0.0;for (int i=0; i<9; i++)
{color=texture2D(textureSampler,vUV+vec2(halfDestPixelSize,halfDestPixelSize)+dsOffsets[i]);average+=color.r;}
average/=9.0;
#ifdef FINAL_DOWN_SAMPLER
gl_FragColor=pack(average);
#else
gl_FragColor=vec4(average,average,0.0,1.0);
#endif
}
#endif
#if defined(HDR)
uniform sampler2D textureAdderSampler;uniform float averageLuminance;void main()
{vec4 color=texture2D(textureAdderSampler,vUV);
#ifndef AUTO_EXPOSURE
vec4 adjustedColor=color/averageLuminance;color=adjustedColor;color.a=1.0;
#endif
gl_FragColor=color;}
#endif
#if defined(LENS_FLARE)
#define GHOSTS 3
uniform sampler2D lensColorSampler;uniform float strength;uniform float ghostDispersal;uniform float haloWidth;uniform vec2 resolution;uniform float distortionStrength;float hash(vec2 p)
{float h=dot(p,vec2(127.1,311.7));return -1.0+2.0*fract(sin(h)*43758.5453123);}
float noise(in vec2 p)
{vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);return mix(mix(hash(i+vec2(0.0,0.0)),
hash(i+vec2(1.0,0.0)),u.x),
mix(hash(i+vec2(0.0,1.0)),
hash(i+vec2(1.0,1.0)),u.x),u.y);}
float fbm(vec2 p)
{float f=0.0;f+=0.5000*noise(p); p*=2.02;f+=0.2500*noise(p); p*=2.03;f+=0.1250*noise(p); p*=2.01;f+=0.0625*noise(p); p*=2.04;f/=0.9375;return f;}
vec3 pattern(vec2 uv)
{vec2 p=-1.0+2.0*uv;float p2=dot(p,p);float f=fbm(vec2(15.0*p2))/2.0;float r=0.2+0.6*sin(12.5*length(uv-vec2(0.5)));float g=0.2+0.6*sin(20.5*length(uv-vec2(0.5)));float b=0.2+0.6*sin(17.2*length(uv-vec2(0.5)));return (1.0-f)*vec3(r,g,b);}
float luminance(vec3 color)
{return dot(color.rgb,vec3(0.2126,0.7152,0.0722));}
vec4 textureDistorted(sampler2D tex,vec2 texcoord,vec2 direction,vec3 distortion)
{return vec4(
texture2D(tex,texcoord+direction*distortion.r).r,
texture2D(tex,texcoord+direction*distortion.g).g,
texture2D(tex,texcoord+direction*distortion.b).b,
1.0
);}
void main(void)
{vec2 uv=-vUV+vec2(1.0);vec2 ghostDir=(vec2(0.5)-uv)*ghostDispersal;vec2 texelSize=1.0/resolution;vec3 distortion=vec3(-texelSize.x*distortionStrength,0.0,texelSize.x*distortionStrength);vec4 result=vec4(0.0);float ghostIndice=1.0;for (int i=0; i<GHOSTS; ++i)
{vec2 offset=fract(uv+ghostDir*ghostIndice);float weight=length(vec2(0.5)-offset)/length(vec2(0.5));weight=pow(1.0-weight,10.0);result+=textureDistorted(textureSampler,offset,normalize(ghostDir),distortion)*weight*strength;ghostIndice+=1.0;}
vec2 haloVec=normalize(ghostDir)*haloWidth;float weight=length(vec2(0.5)-fract(uv+haloVec))/length(vec2(0.5));weight=pow(1.0-weight,10.0);result+=textureDistorted(textureSampler,fract(uv+haloVec),normalize(ghostDir),distortion)*weight*strength;result*=texture2D(lensColorSampler,vec2(length(vec2(0.5)-uv)/length(vec2(0.5))));gl_FragColor=result;}
#endif
#if defined(LENS_FLARE_COMPOSE)
uniform sampler2D otherSampler;uniform sampler2D lensDirtSampler;uniform sampler2D lensStarSampler;uniform mat4 lensStarMatrix;void main(void)
{vec2 lensFlareCoords=(lensStarMatrix*vec4(vUV,1.0,1.0)).xy;vec4 lensMod=texture2D(lensDirtSampler,vUV);lensMod+=texture2D(lensStarSampler,vUV/*lensFlareCoords*/);vec4 result=texture2D(textureSampler,vUV)*lensMod;gl_FragColor=texture2D(otherSampler,vUV)+result;}
#endif
#if defined(DEPTH_OF_FIELD)
uniform sampler2D otherSampler;uniform sampler2D depthSampler;uniform float distance;void main(void)
{vec4 sharp=texture2D(otherSampler,vUV);vec4 blur=texture2D(textureSampler,vUV);float dist=clamp(texture2D(depthSampler,vUV).r*distance,0.0,1.0);float factor=0.0;if (dist<0.05)
factor=1.0;else if (dist<0.1)
factor=20.0*(0.1-dist);else if (dist<0.5)
factor=0.0;else
factor=2.0*(dist-0.5);factor=clamp(factor,0.0,0.90);gl_FragColor=mix(sharp,blur,factor);}
#endif
#if defined(MOTION_BLUR)
uniform mat4 inverseViewProjection;uniform mat4 prevViewProjection;uniform vec2 screenSize;uniform float motionScale;uniform float motionStrength;uniform sampler2D depthSampler;void main(void)
{vec2 texelSize=1.0/screenSize;float depth=texture2D(depthSampler,vUV).r;vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);cpos=cpos*inverseViewProjection;vec4 ppos=cpos*prevViewProjection;ppos.xyz/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;float speed=length(velocity/texelSize);int nSamples=int(clamp(speed,1.0,MAX_MOTION_SAMPLES));vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(MAX_MOTION_SAMPLES); ++i) {if (i>=nSamples)
break;vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);result+=texture2D(textureSampler,offset1);}
gl_FragColor=result/float(nSamples);}
#endif
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const standardPixelShader = { name, shader };
//# sourceMappingURL=standard.fragment.js.map

/***/ }),

/***/ 80781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export stereoscopicInterlacePixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "stereoscopicInterlacePixelShader";
const shader = `const vec3 TWO=vec3(2.0,2.0,2.0);varying vec2 vUV;uniform sampler2D camASampler;uniform sampler2D textureSampler;uniform vec2 stepSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{bool useCamA;bool useCamB;vec2 texCoord1;vec2 texCoord2;vec3 frag1;vec3 frag2;
#ifdef IS_STEREOSCOPIC_HORIZ
useCamB=vUV.x>0.5;useCamA=!useCamB;texCoord1=vec2(useCamB ? (vUV.x-0.5)*2.0 : vUV.x*2.0,vUV.y);texCoord2=vec2(texCoord1.x+stepSize.x,vUV.y);
#else
#ifdef IS_STEREOSCOPIC_INTERLACED
float rowNum=floor(vUV.y/stepSize.y);useCamA=mod(rowNum,2.0)==1.0;useCamB=mod(rowNum,2.0)==0.0;texCoord1=vec2(vUV.x,vUV.y);texCoord2=vec2(vUV.x,vUV.y);
#else
useCamB=vUV.y>0.5;useCamA=!useCamB;texCoord1=vec2(vUV.x,useCamB ? (vUV.y-0.5)*2.0 : vUV.y*2.0);texCoord2=vec2(vUV.x,texCoord1.y+stepSize.y);
#endif
#endif
if (useCamB){frag1=texture2D(textureSampler,texCoord1).rgb;frag2=texture2D(textureSampler,texCoord2).rgb;}else if (useCamA){frag1=texture2D(camASampler ,texCoord1).rgb;frag2=texture2D(camASampler ,texCoord2).rgb;}else {discard;}
gl_FragColor=vec4((frag1+frag2)/TWO,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const stereoscopicInterlacePixelShader = { name, shader };
//# sourceMappingURL=stereoscopicInterlace.fragment.js.map

/***/ }),

/***/ 74719:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: subSurfaceScatteringPixelShader

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/shaderStore.js
var shaderStore = __webpack_require__(69610);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/fibonacci.js
// Do not edit.

const fibonacci_name = "fibonacci";
const shader = `#define rcp(x) 1./x
#define GOLDEN_RATIO 1.618033988749895
#define TWO_PI 6.2831855
vec2 Golden2dSeq(int i,float n)
{return vec2(float(i)/n+(0.5/n),fract(float(i)*rcp(GOLDEN_RATIO)));}
vec2 SampleDiskGolden(int i,int sampleCount)
{vec2 f=Golden2dSeq(i,float(sampleCount));return vec2(sqrt(f.x),TWO_PI*f.y);}`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[fibonacci_name] = shader;
/** @internal */
const fibonacci = { name: fibonacci_name, shader };
//# sourceMappingURL=fibonacci.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js
var helperFunctions = __webpack_require__(73325);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js
var subSurfaceScatteringFunctions = __webpack_require__(96044);
;// ./node_modules/@babylonjs/core/Shaders/ShadersInclude/diffusionProfile.js
// Do not edit.

const diffusionProfile_name = "diffusionProfile";
const diffusionProfile_shader = `uniform vec3 diffusionS[5];uniform float diffusionD[5];uniform float filterRadii[5];`;
// Sideeffect
shaderStore/* ShaderStore */.l.IncludesShadersStore[diffusionProfile_name] = diffusionProfile_shader;
/** @internal */
const diffusionProfile = { name: diffusionProfile_name, shader: diffusionProfile_shader };
//# sourceMappingURL=diffusionProfile.js.map
;// ./node_modules/@babylonjs/core/Shaders/subSurfaceScattering.fragment.js
// Do not edit.





const subSurfaceScattering_fragment_name = "subSurfaceScatteringPixelShader";
const subSurfaceScattering_fragment_shader = `#include<fibonacci>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<diffusionProfile>
varying vec2 vUV;uniform vec2 texelSize;uniform sampler2D textureSampler;uniform sampler2D irradianceSampler;uniform sampler2D depthSampler;uniform sampler2D albedoSampler;uniform vec2 viewportSize;uniform float metersPerUnit;const float LOG2_E=1.4426950408889634;const float SSS_PIXELS_PER_SAMPLE=4.;const int _SssSampleBudget=40;
#define rcp(x) 1./x
#define Sq(x) x*x
#define SSS_BILATERAL_FILTER true
vec3 EvalBurleyDiffusionProfile(float r,vec3 S)
{vec3 exp_13=exp2(((LOG2_E*(-1.0/3.0))*r)*S); 
vec3 expSum=exp_13*(1.+exp_13*exp_13); 
return (S*rcp(8.*PI))*expSum; }
vec2 SampleBurleyDiffusionProfile(float u,float rcpS)
{u=1.-u; 
float g=1.+(4.*u)*(2.*u+sqrt(1.+(4.*u)*u));float n=exp2(log2(g)*(-1.0/3.0)); 
float p=(g*n)*n; 
float c=1.+p+n; 
float d=(3./LOG2_E*2.)+(3./LOG2_E)*log2(u); 
float x=(3./LOG2_E)*log2(c)-d; 
float rcpExp=((c*c)*c)*rcp((4.*u)*((c*c)+(4.*u)*(4.*u)));float r=x*rcpS;float rcpPdf=(8.*PI*rcpS)*rcpExp; 
return vec2(r,rcpPdf);}
vec3 ComputeBilateralWeight(float xy2,float z,float mmPerUnit,vec3 S,float rcpPdf)
{
#ifndef SSS_BILATERAL_FILTER
z=0.;
#endif
float r=sqrt(xy2+(z*mmPerUnit)*(z*mmPerUnit));float area=rcpPdf;
#if SSS_CLAMP_ARTIFACT
return clamp(EvalBurleyDiffusionProfile(r,S)*area,0.0,1.0);
#else
return EvalBurleyDiffusionProfile(r,S)*area;
#endif
}
void EvaluateSample(int i,int n,vec3 S,float d,vec3 centerPosVS,float mmPerUnit,float pixelsPerMm,
float phase,inout vec3 totalIrradiance,inout vec3 totalWeight)
{float scale =rcp(float(n));float offset=rcp(float(n))*0.5;float sinPhase,cosPhase;sinPhase=sin(phase);cosPhase=cos(phase);vec2 bdp=SampleBurleyDiffusionProfile(float(i)*scale+offset,d);float r=bdp.x;float rcpPdf=bdp.y;float phi=SampleDiskGolden(i,n).y;float sinPhi,cosPhi;sinPhi=sin(phi);cosPhi=cos(phi);float sinPsi=cosPhase*sinPhi+sinPhase*cosPhi; 
float cosPsi=cosPhase*cosPhi-sinPhase*sinPhi; 
vec2 vec=r*vec2(cosPsi,sinPsi);vec2 position; 
float xy2;position=vUV+round((pixelsPerMm*r)*vec2(cosPsi,sinPsi))*texelSize;xy2 =r*r;vec4 textureSample=texture2D(irradianceSampler,position);float viewZ=texture2D(depthSampler,position).r;vec3 irradiance =textureSample.rgb;if (testLightingForSSS(textureSample.a))
{float relZ=viewZ-centerPosVS.z;vec3 weight=ComputeBilateralWeight(xy2,relZ,mmPerUnit,S,rcpPdf);totalIrradiance+=weight*irradiance;totalWeight +=weight;}
else
{}}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec4 irradianceAndDiffusionProfile =texture2D(irradianceSampler,vUV);vec3 centerIrradiance=irradianceAndDiffusionProfile.rgb;int diffusionProfileIndex=int(round(irradianceAndDiffusionProfile.a*255.));float centerDepth =0.;vec4 inputColor=texture2D(textureSampler,vUV);bool passedStencilTest=testLightingForSSS(irradianceAndDiffusionProfile.a);if (passedStencilTest)
{centerDepth=texture2D(depthSampler,vUV).r;}
if (!passedStencilTest) { 
gl_FragColor=inputColor;return;}
float distScale =1.;vec3 S =diffusionS[diffusionProfileIndex];float d =diffusionD[diffusionProfileIndex];float filterRadius=filterRadii[diffusionProfileIndex];vec2 centerPosNDC=vUV;vec2 cornerPosNDC=vUV+0.5*texelSize;vec3 centerPosVS =vec3(centerPosNDC*viewportSize,1.0)*centerDepth; 
vec3 cornerPosVS =vec3(cornerPosNDC*viewportSize,1.0)*centerDepth; 
float mmPerUnit =1000.*(metersPerUnit*rcp(distScale));float unitsPerMm=rcp(mmPerUnit);float unitsPerPixel=2.*abs(cornerPosVS.x-centerPosVS.x);float pixelsPerMm =rcp(unitsPerPixel)*unitsPerMm;float filterArea =PI*Sq(filterRadius*pixelsPerMm);int sampleCount =int(filterArea*rcp(SSS_PIXELS_PER_SAMPLE));int sampleBudget=_SssSampleBudget;int texturingMode=0;vec3 albedo =texture2D(albedoSampler,vUV).rgb;if (distScale==0. || sampleCount<1)
{
#ifdef DEBUG_SSS_SAMPLES
vec3 green=vec3(0.,1.,0.);gl_FragColor=vec4(green,1.0);return;
#endif
gl_FragColor=vec4(inputColor.rgb+albedo*centerIrradiance,1.0);return;}
#ifdef DEBUG_SSS_SAMPLES
vec3 red =vec3(1.,0.,0.);vec3 blue=vec3(0.,0.,1.);gl_FragColor=vec4(mix(blue,red,clamp(float(sampleCount)/float(sampleBudget),0.0,1.0)),1.0);return;
#endif
float phase=0.;int n=min(sampleCount,sampleBudget);vec3 centerWeight =vec3(0.); 
vec3 totalIrradiance=vec3(0.);vec3 totalWeight =vec3(0.);for (int i=0; i<n; i++)
{EvaluateSample(i,n,S,d,centerPosVS,mmPerUnit,pixelsPerMm,
phase,totalIrradiance,totalWeight);}
totalWeight=max(totalWeight,HALF_MIN);gl_FragColor=vec4(inputColor.rgb+albedo*max(totalIrradiance/totalWeight,vec3(0.0)),1.);}`;
// Sideeffect
shaderStore/* ShaderStore */.l.ShadersStore[subSurfaceScattering_fragment_name] = subSurfaceScattering_fragment_shader;
/** @internal */
const subSurfaceScatteringPixelShader = { name: subSurfaceScattering_fragment_name, shader: subSurfaceScattering_fragment_shader };
//# sourceMappingURL=subSurfaceScattering.fragment.js.map

/***/ }),

/***/ 71405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taaPixelShader: () => (/* binding */ taaPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "taaPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D historySampler;uniform float factor;void main() {vec4 c=texelFetch(textureSampler,ivec2(gl_FragCoord.xy),0);vec4 h=texelFetch(historySampler,ivec2(gl_FragCoord.xy),0);gl_FragColor=mix(h,c,factor);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const taaPixelShader = { name, shader };
//# sourceMappingURL=taa.fragment.js.map

/***/ }),

/***/ 17985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tonemapPixelShader: () => (/* binding */ tonemapPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "tonemapPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform float _ExposureAdjustment;
#if defined(HABLE_TONEMAPPING)
const float A=0.15;const float B=0.50;const float C=0.10;const float D=0.20;const float E=0.02;const float F=0.30;const float W=11.2;
#endif
float Luminance(vec3 c)
{return dot(c,vec3(0.22,0.707,0.071));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec3 colour=texture2D(textureSampler,vUV).rgb;
#if defined(REINHARD_TONEMAPPING)
float lum=Luminance(colour.rgb); 
float lumTm=lum*_ExposureAdjustment;float scale=lumTm/(1.0+lumTm); 
colour*=scale/lum;
#elif defined(HABLE_TONEMAPPING)
colour*=_ExposureAdjustment;const float ExposureBias=2.0;vec3 x=ExposureBias*colour;vec3 curr=((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;x=vec3(W,W,W);vec3 whiteScale=1.0/(((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F);colour=curr*whiteScale;
#elif defined(OPTIMIZED_HEJIDAWSON_TONEMAPPING)
colour*=_ExposureAdjustment;vec3 X=max(vec3(0.0,0.0,0.0),colour-0.004);vec3 retColor=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;
#elif defined(PHOTOGRAPHIC_TONEMAPPING)
colour= vec3(1.0,1.0,1.0)-exp2(-_ExposureAdjustment*colour);
#endif
gl_FragColor=vec4(colour.rgb,1.0);}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const tonemapPixelShader = { name, shader };
//# sourceMappingURL=tonemap.fragment.js.map

/***/ }),

/***/ 5118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export velocityPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "velocityPixelShader";
const shader = `precision highp float;
#define CUSTOM_FRAGMENT_BEGIN
varying vec4 clipPos;varying vec4 previousClipPos;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
highp vec4 motionVector=( clipPos/clipPos.w-previousClipPos/previousClipPos.w );gl_FragColor=motionVector;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const velocityPixelShader = { name, shader };
//# sourceMappingURL=velocity.fragment.js.map

/***/ }),

/***/ 96519:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export velocityVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3298);
// Do not edit.



const name = "velocityVertexShader";
const shader = `#define CUSTOM_VERTEX_BEGIN
#define VELOCITY
attribute vec3 position;
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform mat4 previousViewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;uniform mat4 previousViewProjectionR;
#endif
varying vec4 clipPos;varying vec4 previousClipPos;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);vec4 previousWorldPos=finalPreviousWorld*vec4(positionUpdated,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {clipPos=viewProjection*worldPos;previousClipPos=previousViewProjection*previousWorldPos;gl_Position=clipPos;} else {clipPos=viewProjectionR*worldPos;previousClipPos=previousViewProjectionR*previousWorldPos;gl_Position=clipPos;}
#elif
clipPos=viewProjection*worldPos;previousClipPos=previousViewProjection*previousWorldPos;gl_Position=clipPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const velocityVertexShader = { name, shader };
//# sourceMappingURL=velocity.vertex.js.map

/***/ }),

/***/ 55145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export volumetricLightScatteringPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "volumetricLightScatteringPixelShader";
const shader = `uniform sampler2D textureSampler;uniform sampler2D lightScatteringSampler;uniform float decay;uniform float exposure;uniform float weight;uniform float density;uniform vec2 meshPositionOnScreen;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec2 tc=vUV;vec2 deltaTexCoord=(tc-meshPositionOnScreen.xy);deltaTexCoord*=1.0/float(NUM_SAMPLES)*density;float illuminationDecay=1.0;vec4 color=texture2D(lightScatteringSampler,tc)*0.4;for(int i=0; i<NUM_SAMPLES; i++) {tc-=deltaTexCoord;vec4 dataSample=texture2D(lightScatteringSampler,tc)*0.4;dataSample*=illuminationDecay*weight;color+=dataSample;illuminationDecay*=decay;}
vec4 realColor=texture2D(textureSampler,vUV);gl_FragColor=((vec4((vec3(color.r,color.g,color.b)*exposure),realColor.a))+(realColor*(1.5-0.4)));
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const volumetricLightScatteringPixelShader = { name, shader };
//# sourceMappingURL=volumetricLightScattering.fragment.js.map

/***/ }),

/***/ 1962:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export volumetricLightScatteringPassPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "volumetricLightScatteringPassPixelShader";
const shader = `#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
#endif
#if defined(ALPHATEST)
uniform sampler2D diffuseSampler;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#if defined(ALPHATEST)
vec4 diffuseColor=texture2D(diffuseSampler,vUV);if (diffuseColor.a<0.4)
discard;
#endif
gl_FragColor=vec4(0.0,0.0,0.0,1.0);}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const volumetricLightScatteringPassPixelShader = { name, shader };
//# sourceMappingURL=volumetricLightScatteringPass.fragment.js.map

/***/ }),

/***/ 2608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export volumetricLightScatteringPassVertexShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
/* harmony import */ var _ShadersInclude_bonesDeclaration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69707);
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18959);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27999);
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90738);
/* harmony import */ var _ShadersInclude_instancesDeclaration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1218);
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48451);
/* harmony import */ var _ShadersInclude_morphTargetsVertex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15060);
/* harmony import */ var _ShadersInclude_instancesVertex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3298);
/* harmony import */ var _ShadersInclude_bonesVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3361);
/* harmony import */ var _ShadersInclude_bakedVertexAnimation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65523);
// Do not edit.











const name = "volumetricLightScatteringPassVertexShader";
const shader = `attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV1)
vec2 uvUpdated=uv;
#endif
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV2)
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
}
`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const volumetricLightScatteringPassVertexShader = { name, shader };
//# sourceMappingURL=volumetricLightScatteringPass.vertex.js.map

/***/ }),

/***/ 21830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vrDistortionCorrectionPixelShader: () => (/* binding */ vrDistortionCorrectionPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "vrDistortionCorrectionPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 LensCenter;uniform vec2 Scale;uniform vec2 ScaleIn;uniform vec4 HmdWarpParam;vec2 HmdWarp(vec2 in01) {vec2 theta=(in01-LensCenter)*ScaleIn; 
float rSq=theta.x*theta.x+theta.y*theta.y;vec2 rvector=theta*(HmdWarpParam.x+HmdWarpParam.y*rSq+HmdWarpParam.z*rSq*rSq+HmdWarpParam.w*rSq*rSq*rSq);return LensCenter+Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 tc=HmdWarp(vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0)
gl_FragColor=vec4(0.0,0.0,0.0,0.0);else{gl_FragColor=texture2D(textureSampler,tc);}}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const vrDistortionCorrectionPixelShader = { name, shader };
//# sourceMappingURL=vrDistortionCorrection.fragment.js.map

/***/ }),

/***/ 69095:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export vrMultiviewToSingleviewPixelShader */
/* harmony import */ var _Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69610);
// Do not edit.

const name = "vrMultiviewToSingleviewPixelShader";
const shader = `precision mediump sampler2DArray;varying vec2 vUV;uniform sampler2DArray multiviewSampler;uniform int imageIndex;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(multiviewSampler,vec3(vUV,imageIndex));}`;
// Sideeffect
_Engines_shaderStore_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderStore */ .l.ShadersStore[name] = shader;
/** @internal */
const vrMultiviewToSingleviewPixelShader = { name, shader };
//# sourceMappingURL=vrMultiviewToSingleview.fragment.js.map

/***/ })

}]);