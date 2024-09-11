let article,Interval=null,hoverBarrage=!1,comment={initBarrage(a){if(a.length){let t=0,c=[],i=document.querySelector("#comment-barrage"),e=(clearInterval(Interval),Interval=null,Interval=setInterval(()=>{var e;1<=c.length&&!hoverBarrage&&((e=c.shift()).className="comment-barrage-item out",setTimeout(()=>{i.removeChild(e)},1e3)),hoverBarrage||((async e=>{let t=await meuicat.changeTime([e.created]),a=document.createElement("div");a.className="comment-barrage-item",a.innerHTML=`
				<div class="barrageHead">
					<img class="barrageAvatar" src="${e.avatar}"/>
					<div class="barrageNick">${e.nick}</div>
					<div class="barrageTime">评论于${t[0].timeString}</div>
					<a class="comment-barrage-close" href="javascript:rm.switchCommentBarrage()"><i class="iconfont icat-close"></i></a>
				</div>
				<a class="barrageContent" href="javascript:void(0);" onclick="meuicat.scrollTo('${e.id}');">${e.comment}</a>
			`,c.push(a),i.append(a)})(a[t]),t=(t+=1)%a.length)},5e3),$("#menu-commentBarrage span").text("关闭热评"),$("#comment-barrage").hover(function(){hoverBarrage=!0,console.log("热评悬浮")},function(){hoverBarrage=!1,console.log("停止悬浮")}),btf.throttle(function(){var e=window.scrollY+document.documentElement.clientHeight,t=document.getElementById("post-comment"),t=t.offsetTop+t.offsetHeight/2;768<document.body.clientWidth&&(i.style.bottom=e<t?"40px":"-200px")},200));document.addEventListener("scroll",e),document.addEventListener("pjax:send",function(){clearInterval(Interval),document.removeEventListener("scroll",e)})}},fetchData(t,o,c){fetch("{https://carolbicsi-twikoo.hf.space}",{method:"POST",body:JSON.stringify({event:"GET_RECENT_COMMENTS",accessToken:"{0a3c2b650e28527d068e76dc676252e7}",includeReply:!0,...t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t=>{let l="",a=t.data;if("total"===o)document.querySelectorAll(".length-num.comment-total, .N_comments").forEach(e=>{e.classList.contains("N_comments")?e.innerText=a.length+"条评论":e.innerText=a.length});else{if(c)switch(o){case"visitor":a=a.filter(e=>e.mailMd5===c);break;case"v-shield":a=a.filter(e=>e.mailMd5!==c);break;case"a-shield":a=a.filter(e=>e.url!==c)}if("barrage"===o)return this.initBarrage(a);a.forEach(t=>{var a=new Date(t.created),a=`${a.getFullYear().toString().slice(-2)}-${a.getMonth()+1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}:`+a.getSeconds(),c=(l+=`<div class="comment-card">
                <div class="comment-info">
                    <img src="${t.avatar}" class="nolazyload">
                    <div class="comment-information">
                        <span class="${["亦封","亦小封"].includes(t.nick)?"comment-author":""} comment-user" data-mailMd5="${t.mailMd5}">${t.nick}</span>
                        <span class="comment-time">${a}</span>
                    </div>
                </div>
                <div class="comment-content">${t.commentText.replaceAll("<","&lt;").replaceAll(">","&gt;")}</div>
                <div class="comment-more">
                    <div class="comment-title">
                        <span class="comment-link" title="查看此文章" onclick="pjax.loadUrl('${t.url}')">
                            <i class="iconfont icat-read"></i>
                            ${article[t.url]}
                        </span>
                        <a onclick="pjax.loadUrl('${t.url}#${t.id}')">查看评论</a>
                    </div>
                    <div class="comment-tool">`,'<a href="javascript:void(0)" onclick="comment.article(event)" title="显示此文章所有评论">查看更多</a>'),i='<a href="javascript:void(0)" onclick="comment.article(event, true)" title="不显示此文章的评论">屏蔽文章</a>',r='<a href="javascript:void(0)" onclick="comment.visitor(event, true)" title="不显示该访客的评论">屏蔽Ta</a>',n='<a href="javascript:void(0)" onclick="comment.visitor(event)" title="显示该访客的所有评论">查看Ta更多评论</a>';switch(e='<a href="javascript:void(0)" onclick="comment.data()" title="查看本站最新评论">返回评论</a>',o){case"article":l+=e+r+n;break;case"visitor":l+=e+c+i;break;case"v-shield":case"a-shield":l+=c+i+r+n+e;break;default:o||(l+=c+i+r+n)}l+=`</div>
					</div>
				</div>`}),document.getElementById("comments-page").innerHTML=l}})},visitor(e,t){e=e.target.closest(".comment-card").querySelector(".comment-user").getAttribute("data-mailMd5");t?this.fetchData({pageSize:-1},"v-shield",e):this.fetchData({pageSize:-1},"visitor",e)},article(e,t){e=e.target.closest(".comment-card").querySelector(".comment-link").getAttribute("onclick").match(/'(\/.*?)'/)[1];t?this.fetchData({pageSize:-1},"a-shield",e):this.fetchData({urls:[e]},"article")},data(){article||fetch("/articles.json").then(e=>e.json()).then(e=>{article={},[...e.post,...e.page].forEach(e=>{article[e.link]=e.title})}),this.fetchData({pageSize:100})}};