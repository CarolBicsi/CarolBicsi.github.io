if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const b=e=>s(e,r),f={module:{uri:r},exports:a,require:b};i[r]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(d(...e),a)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"cffee3ce1cc3fa3eb60d240b38db079f"},{url:"archives/2024/08/index.html",revision:"54389d50c9d05af4bbb79312d3760aca"},{url:"archives/2024/09/index.html",revision:"a8df5c12ab28961d7b8b90d0f8c5ac5c"},{url:"archives/2024/10/index.html",revision:"fe318cf094c462461a428dfe7741733e"},{url:"archives/2024/index.html",revision:"6656dc3539c75a3d703c4e71a29b2aa9"},{url:"archives/index.html",revision:"e46412db542d7c943c2e280f5757df05"},{url:"assets/404_1.jpg",revision:"35c29d3d6cd94cc9be2f95ee50decf41"},{url:"assets/avatar.webp",revision:"32685c13d9873f79cdce249339a3429f"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"2d7c4c7c405ec33943b9975a706f448d"},{url:"assets/gulp/404.jpg",revision:"b510a3807762beda73f0ca98cc412421"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"d6b808ce6a48efba98bc2ebddffef10e"},{url:"assets/gulp/siteicon/128.png",revision:"911d717864614bf1641c6c90c4d0587d"},{url:"assets/gulp/siteicon/144.png",revision:"0f7a1d2b0815782774286b901b3607b6"},{url:"assets/gulp/siteicon/16.png",revision:"b7e0ed367512f8f4e5cdd0d466f9d29f"},{url:"assets/gulp/siteicon/192.png",revision:"10a67be38634749c67efd29ef4e26d24"},{url:"assets/gulp/siteicon/32.png",revision:"059751cfd1542a764a978f7811fc38e8"},{url:"assets/gulp/siteicon/48.png",revision:"f9f2bc3f068843896ee3d36baa452f43"},{url:"assets/gulp/siteicon/512.png",revision:"2d7c4c7c405ec33943b9975a706f448d"},{url:"assets/gulp/siteicon/64.png",revision:"700be556d329606eb1d8a02b746d747d"},{url:"assets/head.jpg",revision:"ebe0ec8843b8617927bae2a347f05446"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"assets/loading2.gif",revision:"ec0176c34591c975c1d1abb70929844a"},{url:"assets/loading3.gif",revision:"881374af3268f41b3788cd83239953d9"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/QRCode.jpg",revision:"19cc2e25a75e2ed73e91c8ca38897cce"},{url:"assets/r1.jpg",revision:"55edd88ee4ea584e192d035a4f4bbb54"},{url:"assets/r2.jpg",revision:"b510a3807762beda73f0ca98cc412421"},{url:"books/index.html",revision:"22566934dce4017b72f165245e1c50dd"},{url:"box/animation/index.html",revision:"fe9823f9dd66109dbb081018490e4e27"},{url:"box/gallery/index.html",revision:"c6753eba894499bb3ecf927d4f20d077"},{url:"box/nav/index.html",revision:"36708ab88f60da910b919ede407a25b4"},{url:"categories/index.html",revision:"12e3e42b1bfcc59583647901ce80964a"},{url:"categories/web/index.html",revision:"1c358a68b8f5acd0ab2b2e8e13b01e9c"},{url:"categories/技术/index.html",revision:"cca440502ff47877f3732b20ceba6a4d"},{url:"categories/技术/运维/index.html",revision:"169d73898640cd0d0c71dd9ccdfaf518"},{url:"categories/演示/index.html",revision:"76c5c68eb68edb9d4ccd77fa0951fb3b"},{url:"cc/index.html",revision:"67c80912501bc4e038090dc816bed9a0"},{url:"charts/index.html",revision:"b155303f61ac309b12350a9e34275e05"},{url:"collect/index.html",revision:"2db7ff73c9352d85ea47c38f639e0420"},{url:"cookies/index.html",revision:"61052362c0e7b5448d182ca3220dac8f"},{url:"css/about.css",revision:"3882144ee3ab48d8b9189616933843dc"},{url:"css/about/about.css",revision:"a579f6edd1eb62c908592744f3f675b7"},{url:"css/coin.css",revision:"04cc36ff8e69dd6cdb1b4bf522a6c731"},{url:"css/custom.css",revision:"f3def01ec797cb47d6105cf850621d49"},{url:"css/equipment.css",revision:"911a4010ce7ee62097896d7257131f8c"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"ef1d300eb04116dc7bc95ed59711bcc8"},{url:"css/kslink.css",revision:"f66225de72e47fb6c6dcea7aa2df4870"},{url:"css/poem.css",revision:"6f7ec73e85d0711d242f65534b2f3c48"},{url:"css/project.css",revision:"723cb9e12ab6a37687a7128d089e7314"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"47d38a6ae5e4d39118efb6bb0bf3b75d"},{url:"essay/index.html",revision:"b841e900ceb8d67bf21594b78e319686"},{url:"favicon.png",revision:"fcf48588378e23777693cb5e919f5913"},{url:"games/index.html",revision:"202482a87773ff5040cb726d6db94f34"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/cd_tou.png",revision:"c8b06c238a6e848ac20d746abfa9dd7c"},{url:"img/cd.png",revision:"c8b06c238a6e848ac20d746abfa9dd7c"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"index.html",revision:"b9736b789f7873b80be9a60aa4408f1b"},{url:"js/bibi.js",revision:"72b8e75d62ff17cabb1bcfb3afbd2090"},{url:"js/card_weibo.js",revision:"9eb9df5943a4255fc09c02d20024f99d"},{url:"js/census.js",revision:"fa2d4bf794870908e84e8d3f1d8d5559"},{url:"js/coin.js",revision:"7c717488333a653cd46af821d1352476"},{url:"js/comment.js",revision:"1d712567325d1f09fefc5d49e6167031"},{url:"js/countup.js",revision:"6b5dd06dd8bb59d3ee7b50b6de3b4ac9"},{url:"js/cursor.js",revision:"f435d53af3416fc988da5aa01c8a52b6"},{url:"js/easy-Danmaku.js",revision:"ae22d00d815bdbdb82469471b88c835b"},{url:"js/emoji.js",revision:"fb38c5412790aee5350f56288c4fa646"},{url:"js/fomal.js",revision:"4e9cf809d856480b1cf043f3eacecca9"},{url:"js/kslink.js",revision:"0e6cd529cc1692421969ce8ef6d44572"},{url:"js/main.js",revision:"1b5117eb62515d5b9305e1d4241058bb"},{url:"js/player.js",revision:"be5c115543e3e3669d6f3dc8a45ad9bb"},{url:"js/project.js",revision:"b40bd1558e93f1d3c2970b526266e713"},{url:"js/reward.js",revision:"271b26c314eba3f406de6432a6602685"},{url:"js/sakura.js",revision:"d515104512cc978b416d5fa2df0edaf3"},{url:"js/search/algolia.js",revision:"b6ed2600794be04baf37c56315af4b68"},{url:"js/search/local-search.js",revision:"0c2e0ec56d3d09648392dc9f191f139f"},{url:"js/tw_cn.js",revision:"d7738e0e78882a354cf94e74caff5d1d"},{url:"js/utill.js",revision:"e2a44d31e6ae21961b791a46f503cc43"},{url:"js/utils.js",revision:"56aea8fdfc36f98714e544970dddc02d"},{url:"js/waterfall.min.js",revision:"3465fa5bd672cff471b3d509aa0171e4"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/movies/index.html",revision:"9d45c5ad4567d792ad75a6d1cf34ef17"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"mapofposts/index.html",revision:"33f3b147a445b6917a5d15679228efbc"},{url:"movies/index.html",revision:"3913a1853cfa5beef6622e97b8d81fd0"},{url:"music/images/songs/Lemon-米津玄師.webp",revision:"20db96069246760e609ebc012bf24811"},{url:"music/index.html",revision:"f06424aabee8adfd162cd9be8f9242bd"},{url:"personal/about/index.html",revision:"12557b011bdf271dffa5e0bf3a95119f"},{url:"personal/bb/index.html",revision:"d875384b22e9141f6c80b41dc7e8bbc4"},{url:"personal/love/index.html",revision:"de57aa31d6c0c418dc2df09d42c9561b"},{url:"posts/2013454d.html",revision:"9235a6ff5076b09be619e24d4af2f484"},{url:"posts/40055eec.html",revision:"c5861f2a29ab4f384a1ab8015a9045fc"},{url:"posts/5e6c513c.html",revision:"2694acc842ee9b7fdf0a527cc7259717"},{url:"privacy/index.html",revision:"b426f73b45f709b39b71817a5fffbe89"},{url:"project/index.html",revision:"b43cca87e44c190e3c384e911a2b0b03"},{url:"random.html",revision:"3db714d746407eac90ddf37e16b4e8ff"},{url:"site/census/index.html",revision:"4cd44c167586cf0363f524e582c85652"},{url:"site/echarts/index.html",revision:"0f02c75211cfa84938d9103c2b724713"},{url:"site/time/index.html",revision:"0484169eee7f1d32062db631cf4015b5"},{url:"social/comments/index.html",revision:"4cecc5abf67c0554a53508093d15549f"},{url:"social/fcircle/index.html",revision:"df49080f269edc1ac5a53b3628015b24"},{url:"social/link/index.html",revision:"fdec6efeaadd2920528c27f013657e85"},{url:"songs/index.html",revision:"7f50446bb3d509deab5b903249ee03e6"},{url:"tags/EncryptedTag/index.html",revision:"2df985d35031d30db24e3406d229916b"},{url:"tags/FRP/index.html",revision:"95ff9aeec1f076a12a18dfc8cff2594e"},{url:"tags/http/index.html",revision:"b04f3823aca9560104c1d239d7026c8b"},{url:"tags/index.html",revision:"8fc4c3ec329c7a4bd301156738d29de3"},{url:"tags/Linux服务/index.html",revision:"0e412e5ed4a4e837300524f50086061d"},{url:"tags/Markdown/index.html",revision:"1acc7cc7bada480649a886059390c114"},{url:"tags/web/index.html",revision:"e660bf31a0c9127a7bb16999e9c512b1"},{url:"tags/Windows服务/index.html",revision:"db34367f4be564bfc51c54172fcd5fca"},{url:"tags/内网穿透/index.html",revision:"f503bba7a75f35e4211c81bc523626e9"},{url:"tags/外挂标签/index.html",revision:"6df760bd2f65ae45f3de68a9eda35203"}],{})}));
//# sourceMappingURL=service-worker.js.map
