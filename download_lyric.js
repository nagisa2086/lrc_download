// ==UserScript==
// @name        download_lyric
// @namespace   Violentmonkey Scripts
// @include     https://music.apple.com/*/album/*
// @include     https://y.qq.com/n/ryqq/albumDetail/*
// @grant       none
// @version     1.1
// @author      nagisa
// @description 2024/8/25 22:16:23
// @description:zh-CN 支持平台:AppleMusic,QQMusic
// @description:zh-CN 支持全专和选择下载
// ==/UserScript==
const circle=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76"),topButton=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76"),bottomButton=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");circle['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x66\x69\x78\x65\x64",circle['\x73\x74\x79\x6c\x65']['\x72\x69\x67\x68\x74']="\x30",circle['\x73\x74\x79\x6c\x65']['\x74\x6f\x70']="\x35\x30\x25",circle['\x73\x74\x79\x6c\x65']['\x74\x72\x61\x6e\x73\x66\x6f\x72\x6d']="\x74\x72\x61\x6e\x73\x6c\x61\x74\x65\x59\x28\x2d\x35\x30\x25\x29",circle['\x73\x74\x79\x6c\x65']['\x77\x69\x64\x74\x68']="\x37\x30\x70\x78",circle['\x73\x74\x79\x6c\x65']['\x68\x65\x69\x67\x68\x74']="\x37\x30\x70\x78",circle['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x23\x31\x32\x39\x36\x44\x42",circle['\x73\x74\x79\x6c\x65']['\x63\x6f\x6c\x6f\x72']="\x23\x46\x46\x46\x46\x46\x46",circle['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",circle['\x73\x74\x79\x6c\x65']['\x61\x6c\x69\x67\x6e\x49\x74\x65\x6d\x73']="\x63\x65\x6e\x74\x65\x72",circle['\x73\x74\x79\x6c\x65']['\x6a\x75\x73\x74\x69\x66\x79\x43\x6f\x6e\x74\x65\x6e\x74']="\x63\x65\x6e\x74\x65\x72",circle['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73']="\x35\x30\x25",circle['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x53\x69\x7a\x65']="\x31\x36\x70\x78",circle['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x46\x61\x6d\x69\x6c\x79']="\x41\x72\x69\x61\x6c\x2c \x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66",circle['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x41\x6c\x69\x67\x6e']="\x63\x65\x6e\x74\x65\x72",circle['\x73\x74\x79\x6c\x65']['\x63\x75\x72\x73\x6f\x72']="\x70\x6f\x69\x6e\x74\x65\x72",circle['\x73\x74\x79\x6c\x65']['\x6f\x76\x65\x72\x66\x6c\x6f\x77']="\x68\x69\x64\x64\x65\x6e",circle['\x73\x74\x79\x6c\x65']['\x7a\x49\x6e\x64\x65\x78']="\x39\x39\x38",topButton['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x61\x62\x73\x6f\x6c\x75\x74\x65",topButton['\x73\x74\x79\x6c\x65']['\x77\x69\x64\x74\x68']="\x37\x30\x70\x78",topButton['\x73\x74\x79\x6c\x65']['\x68\x65\x69\x67\x68\x74']="\x33\x35\x70\x78",topButton['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x23\x46\x46\x39\x39\x30\x30",topButton['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x42\x6f\x74\x74\x6f\x6d']="\x6e\x6f\x6e\x65",topButton['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73']="\x33\x35\x70\x78 \x33\x35\x70\x78 \x30 \x30",topButton['\x73\x74\x79\x6c\x65']['\x63\x6f\x6c\x6f\x72']="\x23\x46\x46\x46\x46\x46\x46",topButton['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",topButton['\x73\x74\x79\x6c\x65']['\x61\x6c\x69\x67\x6e\x49\x74\x65\x6d\x73']="\x63\x65\x6e\x74\x65\x72",topButton['\x73\x74\x79\x6c\x65']['\x6a\x75\x73\x74\x69\x66\x79\x43\x6f\x6e\x74\x65\x6e\x74']="\x63\x65\x6e\x74\x65\x72",topButton['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x53\x69\x7a\x65']="\x31\x34\x70\x78",topButton['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x46\x61\x6d\x69\x6c\x79']="\x41\x72\x69\x61\x6c\x2c \x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66",topButton['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x41\x6c\x69\x67\x6e']="\x63\x65\x6e\x74\x65\x72",topButton['\x73\x74\x79\x6c\x65']['\x74\x6f\x70']="\x30",topButton['\x73\x74\x79\x6c\x65']['\x6c\x65\x66\x74']="\x30",topButton['\x73\x74\x79\x6c\x65']['\x7a\x49\x6e\x64\x65\x78']="\x39\x39\x39",bottomButton['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x61\x62\x73\x6f\x6c\x75\x74\x65",bottomButton['\x73\x74\x79\x6c\x65']['\x77\x69\x64\x74\x68']="\x37\x30\x70\x78",bottomButton['\x73\x74\x79\x6c\x65']['\x68\x65\x69\x67\x68\x74']="\x33\x35\x70\x78",bottomButton['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x23\x35\x32\x63\x34\x31\x61",bottomButton['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x54\x6f\x70']="\x6e\x6f\x6e\x65",bottomButton['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73']="\x30 \x30 \x33\x35\x70\x78 \x33\x35\x70\x78",bottomButton['\x73\x74\x79\x6c\x65']['\x63\x6f\x6c\x6f\x72']="\x23\x46\x46\x46\x46\x46\x46",bottomButton['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",bottomButton['\x73\x74\x79\x6c\x65']['\x61\x6c\x69\x67\x6e\x49\x74\x65\x6d\x73']="\x63\x65\x6e\x74\x65\x72",bottomButton['\x73\x74\x79\x6c\x65']['\x6a\x75\x73\x74\x69\x66\x79\x43\x6f\x6e\x74\x65\x6e\x74']="\x63\x65\x6e\x74\x65\x72",bottomButton['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x53\x69\x7a\x65']="\x31\x34\x70\x78",bottomButton['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x46\x61\x6d\x69\x6c\x79']="\x41\x72\x69\x61\x6c\x2c \x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66",bottomButton['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x41\x6c\x69\x67\x6e']="\x63\x65\x6e\x74\x65\x72",bottomButton['\x73\x74\x79\x6c\x65']['\x62\x6f\x74\x74\x6f\x6d']="\x30",bottomButton['\x73\x74\x79\x6c\x65']['\x6c\x65\x66\x74']="\x30",bottomButton['\x73\x74\x79\x6c\x65']['\x7a\x49\x6e\x64\x65\x78']="\x39\x39\x39",circle['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']("\x6d\x6f\x75\x73\x65\x65\x6e\x74\x65\x72",function(){circle['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="",topButton['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u6574\u4e13",bottomButton['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u5355\u9009",circle['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](topButton),circle['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](bottomButton)}),circle['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']("\x6d\x6f\x75\x73\x65\x6c\x65\x61\x76\x65",function(){circle['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64'](topButton),circle['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64'](bottomButton),circle['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u6b4c\u8bcd"}),circle['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u6b4c\u8bcd",window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x62\x6f\x64\x79']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](circle);var PdS1=window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66'];let am_get_album=async function(){let t=new URL(PdS1)['\x70\x61\x74\x68\x6e\x61\x6d\x65']['\x73\x70\x6c\x69\x74']("\x2f")[1],e=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74']['\x6c\x61\x6e\x67'];const o=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']('\x6d\x65\x74\x61\x5b\x6e\x61\x6d\x65\x3d\x22\x61\x70\x70\x6c\x65\x3a\x63\x6f\x6e\x74\x65\x6e\x74\x5f\x69\x64\x22\x5d')['\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65']("\x63\x6f\x6e\x74\x65\x6e\x74"),n=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']("\x69\x66\x72\x61\x6d\x65"),l=n?n['\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65']("\x73\x72\x63"):"";let r=new URL(l,"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x65\x78\x61\x6d\x70\x6c\x65\x2e\x63\x6f\x6d")['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61\x6d\x73']['\x67\x65\x74']("\x64\x65\x76\x54\x6f\x6b\x65\x6e"),a=getCookieMap(window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x6f\x6f\x6b\x69\x65'])['\x67\x65\x74']("\x6d\x65\x64\x69\x61\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e");return async function(trl2){try{return(e=(await function(trl2){return new Promise((e,o)=>{const n=new XMLHttpRequest;n['\x6f\x70\x65\x6e']("\x47\x45\x54",trl2,!0),n['\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72']("\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e","\x42\x65\x61\x72\x65\x72 "+r),n['\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72']("\x6d\x65\x64\x69\x61\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e",a),n['\x6f\x6e\x6c\x6f\x61\x64']=(()=>{if(200===n['\x73\x74\x61\x74\x75\x73'])try{const trl2=JSON['\x70\x61\x72\x73\x65'](n['\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x65\x78\x74']);e(trl2)}catch(trl2){o(new window["\x45\x72\x72\x6f\x72"]("\x4a\x53\x4f\x4e \u89e3\u6790\u5931\u8d25"))}else o(new window["\x45\x72\x72\x6f\x72"](`请求失败:${n['\x73\x74\x61\x74\x75\x73']}`))}),n['\x6f\x6e\x65\x72\x72\x6f\x72']=(()=>{o(new window["\x45\x72\x72\x6f\x72"]("\u7f51\u7edc\u9519\u8bef"))}),n['\x73\x65\x6e\x64']()})}(trl2))['\x64\x61\x74\x61'][0])&&e['\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x73']&&e['\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x73']['\x74\x72\x61\x63\x6b\x73']&&window["\x41\x72\x72\x61\x79"]['\x69\x73\x41\x72\x72\x61\x79'](e['\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x73']['\x74\x72\x61\x63\x6b\x73']['\x64\x61\x74\x61'])?e['\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x73']['\x74\x72\x61\x63\x6b\x73']['\x64\x61\x74\x61']['\x6d\x61\x70'](trl2=>({songid:trl2['\x69\x64']||"\x55\x6e\x6b\x6e\x6f\x77\x6e",songname:trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']&&trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']['\x6e\x61\x6d\x65']?trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']['\x6e\x61\x6d\x65']:"\x55\x6e\x6b\x6e\x6f\x77\x6e",singer:trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']&&trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']['\x61\x72\x74\x69\x73\x74\x4e\x61\x6d\x65']?trl2['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']['\x61\x72\x74\x69\x73\x74\x4e\x61\x6d\x65']:"\x55\x6e\x6b\x6e\x6f\x77\x6e"})):(console['\x65\x72\x72\x6f\x72']("\x49\x6e\x76\x61\x6c\x69\x64 \x4a\x53\x4f\x4e \x73\x74\x72\x75\x63\x74\x75\x72\x65"),[])}catch(trl2){console['\x65\x72\x72\x6f\x72']("\u5904\u7406\u6570\u636e\u65f6\u51fa\u9519\x3a",trl2)}var klholNK3}("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x70\x2d\x61\x70\x69\x2e\x6d\x75\x73\x69\x63\x2e\x61\x70\x70\x6c\x65\x2e\x63\x6f\x6d\x2f\x76\x31\x2f\x63\x61\x74\x61\x6c\x6f\x67\x2f"+t+"\x2f\x61\x6c\x62\x75\x6d\x73\x2f"+o+"\x3f\x6c\x3d"+e)},TBMaK4=async function(t){let e=new URL(PdS1)['\x70\x61\x74\x68\x6e\x61\x6d\x65']['\x73\x70\x6c\x69\x74']("\x2f")[1];window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74']['\x6c\x61\x6e\x67'];window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']('\x6d\x65\x74\x61\x5b\x6e\x61\x6d\x65\x3d\x22\x61\x70\x70\x6c\x65\x3a\x63\x6f\x6e\x74\x65\x6e\x74\x5f\x69\x64\x22\x5d')['\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65']("\x63\x6f\x6e\x74\x65\x6e\x74");const o=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']("\x69\x66\x72\x61\x6d\x65"),n=o?o['\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65']("\x73\x72\x63"):"";let l=new URL(n,"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x65\x78\x61\x6d\x70\x6c\x65\x2e\x63\x6f\x6d")['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61\x6d\x73']['\x67\x65\x74']("\x64\x65\x76\x54\x6f\x6b\x65\x6e"),r=getCookieMap(window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x6f\x6f\x6b\x69\x65'])['\x67\x65\x74']("\x6d\x65\x64\x69\x61\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e");async function a(KBUA5){const e=new Headers;e['\x61\x70\x70\x65\x6e\x64']("\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e","\x42\x65\x61\x72\x65\x72 "+l),e['\x61\x70\x70\x65\x6e\x64']("\x6d\x65\x64\x69\x61\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e",r);let o=await fetch(KBUA5,{method:"\x47\x45\x54",headers:e});if(!o['\x6f\x6b'])throw new window["\x45\x72\x72\x6f\x72"]("\x48\x54\x54\x50 \x65\x72\x72\x6f\x72\x21 \x53\x74\x61\x74\x75\x73\x3a "+o['\x73\x74\x61\x74\x75\x73']);return await o['\x6a\x73\x6f\x6e']()}function s(AX$I_o6){return AX$I_o6['\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73']['\x74\x74\x6d\x6c']||"\x4e\x6f \x54\x54\x4d\x4c \x66\x6f\x75\x6e\x64"}function i(v7){const e=(new DOMParser)['\x70\x61\x72\x73\x65\x46\x72\x6f\x6d\x53\x74\x72\x69\x6e\x67'](v7,"\x74\x65\x78\x74\x2f\x78\x6d\x6c")['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c']("\x70"),o=[];return e['\x66\x6f\x72\x45\x61\x63\x68']((v7,n)=>{const l=v7['\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65']("\x62\x65\x67\x69\x6e");let r=n===e['\x6c\x65\x6e\x67\x74\x68']-1,a=v7['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']['\x74\x72\x69\x6d'](),s="";if(null!=l){s=function(v7){return"\x5b"+window["\x4d\x61\x74\x68"]['\x66\x6c\x6f\x6f\x72'](v7/60)['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x70\x61\x64\x53\x74\x61\x72\x74'](2,"\x30")+"\x3a"+(v7%60)['\x74\x6f\x46\x69\x78\x65\x64'](3)['\x70\x61\x64\x53\x74\x61\x72\x74'](6,"\x30")+"\x5d"}(function(FpT_I8){if(FpT_I8['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x3a")){const[e,o]=FpT_I8['\x73\x70\x6c\x69\x74']("\x3a"),[n,l]=o['\x73\x70\x6c\x69\x74']("\x2e");return 60*window["\x70\x61\x72\x73\x65\x46\x6c\x6f\x61\x74"](e)+window["\x70\x61\x72\x73\x65\x46\x6c\x6f\x61\x74"](n)+(window["\x70\x61\x72\x73\x65\x46\x6c\x6f\x61\x74"](l)||0)/1e3}return window["\x70\x61\x72\x73\x65\x46\x6c\x6f\x61\x74"](FpT_I8)}(l))+" "+a+(r?"":"\n")}else s=a+(r?"":"\n");o['\x70\x75\x73\x68'](s)}),o['\x6a\x6f\x69\x6e']("")}function c(jsBl$wfCq9,CYN10){const o=new Blob([jsBl$wfCq9],{type:"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e"}),n=URL['\x63\x72\x65\x61\x74\x65\x4f\x62\x6a\x65\x63\x74\x55\x52\x4c'](o),l=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x61");l['\x68\x72\x65\x66']=n,l['\x64\x6f\x77\x6e\x6c\x6f\x61\x64']=CYN10,l['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x6e\x6f\x6e\x65",window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x62\x6f\x64\x79']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](l),l['\x63\x6c\x69\x63\x6b'](),URL['\x72\x65\x76\x6f\x6b\x65\x4f\x62\x6a\x65\x63\x74\x55\x52\x4c'](n),window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x62\x6f\x64\x79']['\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64'](l)}await async function(b11){let o=[];for(let l of b11){let b11="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x70\x2d\x61\x70\x69\x2e\x6d\x75\x73\x69\x63\x2e\x61\x70\x70\x6c\x65\x2e\x63\x6f\x6d\x2f\x76\x31\x2f\x63\x61\x74\x61\x6c\x6f\x67\x2f"+e+"\x2f\x73\x6f\x6e\x67\x73\x2f"+l['\x73\x6f\x6e\x67\x69\x64']+"\x2f\x6c\x79\x72\x69\x63\x73";var LEp12=l['\x73\x69\x6e\x67\x65\x72']+" \x2d "+l['\x73\x6f\x6e\x67\x6e\x61\x6d\x65']+"\x2e\x6c\x72\x63";o['\x70\x75\x73\x68'](a(b11)['\x74\x68\x65\x6e'](b11=>{var AP$bbBWa13=i(s(b11['\x64\x61\x74\x61'][0]));c(AP$bbBWa13,LEp12)})),o['\x6c\x65\x6e\x67\x74\x68']>=1&&(await Promise['\x61\x6c\x6c'](o),o=[])}await Promise['\x61\x6c\x6c'](o)}(t)},qq_get_album=async function(){return async function(PeZVM14){try{return(e=await function(PeZVM14){return new Promise((e,o)=>{const n=new XMLHttpRequest;n['\x6f\x70\x65\x6e']("\x47\x45\x54",PeZVM14,!0),n['\x6f\x6e\x6c\x6f\x61\x64']=(()=>{if(200===n['\x73\x74\x61\x74\x75\x73'])try{const PeZVM14=JSON['\x70\x61\x72\x73\x65'](n['\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x65\x78\x74']);e(PeZVM14)}catch(PeZVM14){o(new window["\x45\x72\x72\x6f\x72"]("\x4a\x53\x4f\x4e \u89e3\u6790\u5931\u8d25"))}else o(new window["\x45\x72\x72\x6f\x72"](`请求失败:${n['\x73\x74\x61\x74\x75\x73']}`))}),n['\x6f\x6e\x65\x72\x72\x6f\x72']=(()=>{o(new window["\x45\x72\x72\x6f\x72"]("\u7f51\u7edc\u9519\u8bef"))}),n['\x73\x65\x6e\x64']()})}(PeZVM14))&&e['\x64\x61\x74\x61']&&e['\x64\x61\x74\x61']['\x6c\x69\x73\x74']?e['\x64\x61\x74\x61']['\x6c\x69\x73\x74']['\x6d\x61\x70'](PeZVM14=>({songmid:PeZVM14['\x73\x6f\x6e\x67\x6d\x69\x64'],songname:PeZVM14['\x73\x6f\x6e\x67\x6e\x61\x6d\x65'],singer:PeZVM14['\x73\x69\x6e\x67\x65\x72']['\x6d\x61\x70'](PeZVM14=>PeZVM14['\x6e\x61\x6d\x65'])['\x6a\x6f\x69\x6e'](" \x7c ")})):(console['\x65\x72\x72\x6f\x72']("\x49\x6e\x76\x61\x6c\x69\x64 \x4a\x53\x4f\x4e \x73\x74\x72\x75\x63\x74\x75\x72\x65"),[])}catch(PeZVM14){console['\x65\x72\x72\x6f\x72']("\u5904\u7406\u6570\u636e\u65f6\u51fa\u9519\x3a",PeZVM14)}var nhkfealX15}("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x2e\x79\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x76\x38\x2f\x66\x63\x67\x2d\x62\x69\x6e\x2f\x66\x63\x67\x5f\x76\x38\x5f\x61\x6c\x62\x75\x6d\x5f\x69\x6e\x66\x6f\x5f\x63\x70\x2e\x66\x63\x67\x3f\x61\x6c\x62\x75\x6d\x6d\x69\x64\x3d"+window['\x5f\x5f\x49\x4e\x49\x54\x49\x41\x4c\x5f\x44\x41\x54\x41\x5f\x5f']['\x64\x65\x74\x61\x69\x6c']['\x61\x6c\x62\x75\x6d\x4d\x69\x64'])},ON16=async function(t){async function e(PMnmpneA17,dMq18){const o={callback:"\x4d\x75\x73\x69\x63\x4a\x73\x6f\x6e\x43\x61\x6c\x6c\x62\x61\x63\x6b\x5f\x6c\x72\x63",pcachetime:(new window["\x44\x61\x74\x65"])['\x67\x65\x74\x54\x69\x6d\x65'](),songmid:dMq18,g_tk:"\x35\x33\x38\x31",jsonpCallback:"\x4d\x75\x73\x69\x63\x4a\x73\x6f\x6e\x43\x61\x6c\x6c\x62\x61\x63\x6b\x5f\x6c\x72\x63",loginUin:"\x30",hostUin:"\x30",format:"\x6a\x73\x6f\x6e\x70",inCharset:"\x75\x74\x66\x38",outCharset:"\x75\x74\x66\x38",notice:"\x30",platform:"\x79\x71\x71",needNewCode:"\x30"};let n=new URLSearchParams(o)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](),l=await fetch(PMnmpneA17,{method:"\x50\x4f\x53\x54",headers:{"\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65":"\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64"},body:n});if(!l['\x6f\x6b'])throw new window["\x45\x72\x72\x6f\x72"]("\x48\x54\x54\x50 \x65\x72\x72\x6f\x72\x21 \x53\x74\x61\x74\x75\x73\x3a "+l['\x73\x74\x61\x74\x75\x73']);return await l['\x74\x65\x78\x74']()}function o(SzWMqses19,VAo20){const o=new Blob([SzWMqses19],{type:"\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"}),n=URL['\x63\x72\x65\x61\x74\x65\x4f\x62\x6a\x65\x63\x74\x55\x52\x4c'](o)['\x72\x65\x70\x6c\x61\x63\x65'](/\\/g,"\x2f"),l=new XMLHttpRequest;l['\x6f\x70\x65\x6e']("\x47\x45\x54",n,!0),l['\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79\x70\x65']="\x62\x6c\x6f\x62",l['\x6f\x6e\x6c\x6f\x61\x64']=(()=>{if(200===l['\x73\x74\x61\x74\x75\x73']){const SzWMqses19=new Blob([l['\x72\x65\x73\x70\x6f\x6e\x73\x65']]),o=window['\x55\x52\x4c']||window['\x77\x65\x62\x6b\x69\x74\x55\x52\x4c']||window,n=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x61");n['\x68\x72\x65\x66']=o['\x63\x72\x65\x61\x74\x65\x4f\x62\x6a\x65\x63\x74\x55\x52\x4c'](SzWMqses19),n['\x64\x6f\x77\x6e\x6c\x6f\x61\x64']=VAo20,n['\x63\x6c\x69\x63\x6b'](),o['\x72\x65\x76\x6f\x6b\x65\x4f\x62\x6a\x65\x63\x74\x55\x52\x4c'](n['\x68\x72\x65\x66'])}else console['\x65\x72\x72\x6f\x72']("\x46\x61\x69\x6c\x65\x64 \x74\x6f \x64\x6f\x77\x6e\x6c\x6f\x61\x64 \x66\x69\x6c\x65\x2e \x53\x74\x61\x74\x75\x73\x3a "+l['\x73\x74\x61\x74\x75\x73'])}),l['\x6f\x6e\x65\x72\x72\x6f\x72']=(()=>{console['\x65\x72\x72\x6f\x72']("\x52\x65\x71\x75\x65\x73\x74 \x66\x61\x69\x6c\x65\x64 \x77\x69\x74\x68 \x73\x74\x61\x74\x75\x73\x3a "+l['\x73\x74\x61\x74\x75\x73'])}),l['\x73\x65\x6e\x64']()}await async function(YqMa_r21){let n=[];for(let r of YqMa_r21){let YqMa_r21="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x2e\x79\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x6c\x79\x72\x69\x63\x2f\x66\x63\x67\x69\x2d\x62\x69\x6e\x2f\x66\x63\x67\x5f\x71\x75\x65\x72\x79\x5f\x6c\x79\x72\x69\x63\x5f\x6e\x65\x77\x2e\x66\x63\x67";var iU22=r['\x73\x69\x6e\x67\x65\x72']+" \x2d "+r['\x73\x6f\x6e\x67\x6e\x61\x6d\x65']+"\x2e\x6c\x72\x63";n['\x70\x75\x73\x68'](e(YqMa_r21,r['\x73\x6f\x6e\x67\x6d\x69\x64'])['\x74\x68\x65\x6e'](YqMa_r21=>{var Tf_w23=JSON['\x70\x61\x72\x73\x65'](YqMa_r21['\x72\x65\x70\x6c\x61\x63\x65']("\x4d\x75\x73\x69\x63\x4a\x73\x6f\x6e\x43\x61\x6c\x6c\x62\x61\x63\x6b\x5f\x6c\x72\x63\x28","")['\x72\x65\x70\x6c\x61\x63\x65']("\x29",""));const n=atob(Tf_w23['\x6c\x79\x72\x69\x63']),r=new TextDecoder("\x75\x74\x66\x2d\x38"),a=r['\x64\x65\x63\x6f\x64\x65'](new Uint8Array(n['\x73\x70\x6c\x69\x74']("")['\x6d\x61\x70'](YqMa_r21=>YqMa_r21['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0)))),s=a['\x73\x70\x6c\x69\x74']("\n")['\x66\x69\x6c\x74\x65\x72'](YqMa_r21=>/\[\d{2}:\d{2}\.\d{2}\]/['\x74\x65\x73\x74'](YqMa_r21))['\x6a\x6f\x69\x6e']("\n");o(s,iU22)})),n['\x6c\x65\x6e\x67\x74\x68']>=1&&(await Promise['\x61\x6c\x6c'](n),n=[])}await Promise['\x61\x6c\x6c'](n)}(t)};function getCookieMap(m24){let e=/^([^=]+)=([^;]*)/,o=m24['\x73\x70\x6c\x69\x74']("\x3b "),n=new Map;for(let m24 of o){let o=e['\x65\x78\x65\x63'](m24);o&&n['\x73\x65\x74'](decodeURIComponent(o[1]['\x74\x72\x69\x6d']()),decodeURIComponent(o[2]['\x74\x72\x69\x6d']()))}return n}function createModal(mnB25,f26){(()=>{const o=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");o['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x66\x69\x78\x65\x64",o['\x73\x74\x79\x6c\x65']['\x7a\x49\x6e\x64\x65\x78']="\x39\x39\x39\x39",o['\x73\x74\x79\x6c\x65']['\x6c\x65\x66\x74']="\x30",o['\x73\x74\x79\x6c\x65']['\x74\x6f\x70']="\x30",o['\x73\x74\x79\x6c\x65']['\x77\x69\x64\x74\x68']="\x31\x30\x30\x25",o['\x73\x74\x79\x6c\x65']['\x68\x65\x69\x67\x68\x74']="\x31\x30\x30\x25",o['\x73\x74\x79\x6c\x65']['\x6f\x76\x65\x72\x66\x6c\x6f\x77']="\x61\x75\x74\x6f",o['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x72\x67\x62\x28\x32\x33\x39\x2c\x32\x33\x39\x2c\x32\x33\x39\x2c\x30\x2e\x33\x29";const n=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");n['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x23\x45\x46\x45\x46\x45\x46",n['\x73\x74\x79\x6c\x65']['\x6d\x61\x72\x67\x69\x6e']="\x35\x25 \x61\x75\x74\x6f",n['\x73\x74\x79\x6c\x65']['\x70\x61\x64\x64\x69\x6e\x67']="\x32\x30\x70\x78",n['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72']="\x31\x70\x78 \x73\x6f\x6c\x69\x64 \x23\x38\x38\x38",n['\x73\x74\x79\x6c\x65']['\x77\x69\x64\x74\x68']="\x33\x33\x25",n['\x73\x74\x79\x6c\x65']['\x6d\x61\x78\x48\x65\x69\x67\x68\x74']="\x37\x30\x25",n['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73']="\x38\x70\x78",n['\x73\x74\x79\x6c\x65']['\x62\x6f\x78\x53\x68\x61\x64\x6f\x77']="\x30\x70\x78 \x34\x70\x78 \x38\x70\x78 \x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x32\x29",n['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",n['\x73\x74\x79\x6c\x65']['\x66\x6c\x65\x78\x44\x69\x72\x65\x63\x74\x69\x6f\x6e']="\x63\x6f\x6c\x75\x6d\x6e",n['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x72\x65\x6c\x61\x74\x69\x76\x65";const l=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");l['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x41\x6c\x69\x67\x6e']="\x63\x65\x6e\x74\x65\x72",l['\x73\x74\x79\x6c\x65']['\x70\x61\x64\x64\x69\x6e\x67\x42\x6f\x74\x74\x6f\x6d']="\x31\x30\x70\x78",l['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x72\x65\x6c\x61\x74\x69\x76\x65";const r=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x68\x32");r['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u9009\u62e9\u5bf9\u5e94\u66f2\u76ee\u4e0b\u8f7d",l['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](r);const a=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x73\x70\x61\x6e");a['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']="\x26\x74\x69\x6d\x65\x73\x3b",a['\x73\x74\x79\x6c\x65']['\x70\x6f\x73\x69\x74\x69\x6f\x6e']="\x61\x62\x73\x6f\x6c\x75\x74\x65",a['\x73\x74\x79\x6c\x65']['\x74\x6f\x70']="\x31\x30\x70\x78",a['\x73\x74\x79\x6c\x65']['\x72\x69\x67\x68\x74']="\x31\x30\x70\x78",a['\x73\x74\x79\x6c\x65']['\x63\x6f\x6c\x6f\x72']="\x23\x61\x61\x61",a['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x53\x69\x7a\x65']="\x32\x38\x70\x78",a['\x73\x74\x79\x6c\x65']['\x66\x6f\x6e\x74\x57\x65\x69\x67\x68\x74']="\x62\x6f\x6c\x64",a['\x73\x74\x79\x6c\x65']['\x63\x75\x72\x73\x6f\x72']="\x70\x6f\x69\x6e\x74\x65\x72",a['\x6f\x6e\x63\x6c\x69\x63\x6b']=(()=>{o['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x6e\x6f\x6e\x65"}),l['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](a);const s=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");s['\x73\x74\x79\x6c\x65']['\x66\x6c\x65\x78']="\x31",s['\x73\x74\x79\x6c\x65']['\x6f\x76\x65\x72\x66\x6c\x6f\x77\x59']="\x61\x75\x74\x6f",s['\x73\x74\x79\x6c\x65']['\x70\x61\x64\x64\x69\x6e\x67\x42\x6f\x74\x74\x6f\x6d']="\x31\x30\x70\x78",s['\x73\x74\x79\x6c\x65']['\x6d\x61\x72\x67\x69\x6e\x4c\x65\x66\x74']="\x37\x25",s['\x73\x74\x79\x6c\x65']['\x6d\x61\x72\x67\x69\x6e\x52\x69\x67\x68\x74']="\x37\x25";const i=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x66\x6f\x72\x6d");i['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",i['\x73\x74\x79\x6c\x65']['\x66\x6c\x65\x78\x44\x69\x72\x65\x63\x74\x69\x6f\x6e']="\x63\x6f\x6c\x75\x6d\x6e",i['\x73\x74\x79\x6c\x65']['\x61\x6c\x69\x67\x6e\x49\x74\x65\x6d\x73']="\x66\x6c\x65\x78\x2d\x73\x74\x61\x72\x74";var v_OO27=0;f26['\x66\x6f\x72\x45\x61\x63\x68'](mnB25=>{const f26=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");f26['\x73\x74\x79\x6c\x65']['\x6d\x61\x72\x67\x69\x6e\x42\x6f\x74\x74\x6f\x6d']="\x31\x30\x70\x78",f26['\x73\x74\x79\x6c\x65']['\x6d\x61\x78\x57\x69\x64\x74\x68']="\x63\x61\x6c\x63\x28\x31\x30\x30\x25 \x2d \x31\x34\x25\x29",f26['\x73\x74\x79\x6c\x65']['\x6f\x76\x65\x72\x66\x6c\x6f\x77']="\x68\x69\x64\x64\x65\x6e",f26['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x4f\x76\x65\x72\x66\x6c\x6f\x77']="\x65\x6c\x6c\x69\x70\x73\x69\x73",f26['\x73\x74\x79\x6c\x65']['\x77\x68\x69\x74\x65\x53\x70\x61\x63\x65']="\x6e\x6f\x77\x72\x61\x70",f26['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x66\x6c\x65\x78",f26['\x73\x74\x79\x6c\x65']['\x61\x6c\x69\x67\x6e\x49\x74\x65\x6d\x73']="\x63\x65\x6e\x74\x65\x72";const o=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x69\x6e\x70\x75\x74");o['\x74\x79\x70\x65']="\x63\x68\x65\x63\x6b\x62\x6f\x78",o['\x69\x64']=mnB25['\x73\x6f\x6e\x67\x6d\x69\x64'],o['\x6e\x61\x6d\x65']="\x6f\x70\x74\x69\x6f\x6e\x73",o['\x76\x61\x6c\x75\x65']=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](mnB25),o['\x73\x74\x79\x6c\x65']['\x6d\x61\x72\x67\x69\x6e\x52\x69\x67\x68\x74']="\x31\x30\x70\x78";const n=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x6c\x61\x62\x65\x6c");n['\x68\x74\x6d\x6c\x46\x6f\x72']=mnB25,n['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']=++v_OO27+"\x2e "+mnB25['\x73\x69\x6e\x67\x65\x72']+" \x2d "+mnB25['\x73\x6f\x6e\x67\x6e\x61\x6d\x65'],f26['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](o),f26['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](n),i['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](f26)}),s['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](i);const d=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x64\x69\x76");d['\x73\x74\x79\x6c\x65']['\x74\x65\x78\x74\x41\x6c\x69\x67\x6e']="\x63\x65\x6e\x74\x65\x72",d['\x73\x74\x79\x6c\x65']['\x70\x61\x64\x64\x69\x6e\x67\x54\x6f\x70']="\x31\x30\x70\x78";const u=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']("\x62\x75\x74\x74\x6f\x6e");u['\x74\x79\x70\x65']="\x62\x75\x74\x74\x6f\x6e",u['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74']="\u786e\u8ba4",u['\x73\x74\x79\x6c\x65']['\x70\x61\x64\x64\x69\x6e\x67']="\x31\x30\x70\x78 \x32\x30\x70\x78",u['\x73\x74\x79\x6c\x65']['\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72']="\x23\x31\x32\x39\x36\x44\x42",u['\x73\x74\x79\x6c\x65']['\x63\x6f\x6c\x6f\x72']="\x77\x68\x69\x74\x65",u['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72']="\x6e\x6f\x6e\x65",u['\x73\x74\x79\x6c\x65']['\x62\x6f\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73']="\x34\x70\x78",u['\x73\x74\x79\x6c\x65']['\x63\x75\x72\x73\x6f\x72']="\x70\x6f\x69\x6e\x74\x65\x72",u['\x6f\x6e\x63\x6c\x69\x63\x6b']=(()=>{const f26=window["\x41\x72\x72\x61\x79"]['\x66\x72\x6f\x6d'](i['\x65\x6c\x65\x6d\x65\x6e\x74\x73']['\x6f\x70\x74\x69\x6f\x6e\x73'])['\x66\x69\x6c\x74\x65\x72'](mnB25=>mnB25['\x63\x68\x65\x63\x6b\x65\x64'])['\x6d\x61\x70'](mnB25=>JSON['\x70\x61\x72\x73\x65'](mnB25['\x76\x61\x6c\x75\x65']));o['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x6e\x6f\x6e\x65",0==f26['\x6c\x65\x6e\x67\x74\x68']?window["\x61\x6c\x65\x72\x74"]("\u6ca1\u6709\u9009\u62e9\uff01"):mnB25(f26)}),d['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](u),n['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](l),n['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](s),n['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](d),o['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](n),window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x62\x6f\x64\x79']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](o),o['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']="\x62\x6c\x6f\x63\x6b"})()}topButton['\x6f\x6e\x63\x6c\x69\x63\x6b']=async function(){if(PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x79\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x6e\x2f\x72\x79\x71\x71\x2f\x61\x6c\x62\x75\x6d\x44\x65\x74\x61\x69\x6c")){let t=await qq_get_album();await ON16(t)}else if(PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x6d\x75\x73\x69\x63\x2e\x61\x70\x70\x6c\x65\x2e\x63\x6f\x6d")&&PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x61\x6c\x62\x75\x6d")){let t=await am_get_album();await TBMaK4(t)}},bottomButton['\x6f\x6e\x63\x6c\x69\x63\x6b']=async function(){if(PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x79\x2e\x71\x71\x2e\x63\x6f\x6d\x2f\x6e\x2f\x72\x79\x71\x71\x2f\x61\x6c\x62\x75\x6d\x44\x65\x74\x61\x69\x6c")){let t=await qq_get_album();createModal(ON16,t)}else if(PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x6d\x75\x73\x69\x63\x2e\x61\x70\x70\x6c\x65\x2e\x63\x6f\x6d")&&PdS1['\x69\x6e\x63\x6c\x75\x64\x65\x73']("\x61\x6c\x62\x75\x6d")){let t=await am_get_album();createModal(TBMaK4,t)}};
