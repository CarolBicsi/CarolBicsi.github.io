function GitCalendarInit(t,e,n){var x,i,a,w,l,o,d,s,c,$,r,g,u,m,_,p,h,v,f,y,b,k,I,B,E,T,C,M,L;document.getElementById("git_container")&&(x=(t,e)=>{if("string"==typeof e){for(var n=document.createElement("div"),i=(n.innerHTML=e,document.createDocumentFragment());n.firstChild;)i.appendChild(n.firstChild);t.appendChild(i)}else t.appendChild(e)},i=document.getElementById("git_container"),document.getElementById("git_loading"),a=n,w=e,c=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],$=[],u=g=r="",_=[],p=[],h=[],f=v=m=0,y=[],b=[],k=()=>{if(document.getElementById("gitcanvas")){var t,s=document.getElementById("git_tooltip_container"),e=window.devicePixelRatio||1,c="",r="",g="",n=document.getElementById("gitcanvas"),i=(n.style.width="100%",n.style.height="",document.getElementById("gitmessage"),n.getContext("2d")),a=(width=n.width=document.getElementById("gitcalendarcanvasbox").offsetWidth,height=n.height=8.64*n.width/git_data.length,v=n,f=i,1<(e=e)&&(y=v.width,b=v.height,v.width=y*e,v.height=b*e,v.style.width="100%",v.style.height=b+"px",f.scale(e,e)),height/9),u=.8*a,l={x:.02*width,y:.025*width};for(t in git_data){for(var o in weekdata=git_data[t]){var d={date:"",count:"",x:0,y:0};_.push(d),i.fillStyle=C(w,weekdata[o].count),l.y=Math.round(100*l.y)/100,d.date=weekdata[o].date,d.count=weekdata[o].count,d.x=l.x,d.y=l.y,i.fillRect(l.x,l.y,u,u),l.y=l.y+a}l.y=.025*width,l.x=l.x+a}if(700<document.body.clientWidth){i.font="600  Arial",i.fillStyle="#aaa",i.fillText("日",0,1.9*a),i.fillText("二",0,3.9*a),i.fillText("四",0,5.9*a),i.fillText("六",0,7.9*a);var m,p=n.width/24;for(m in $)i.fillText($[m],p,.7*a),p+=n.width/12}n.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML=""),h(n,t)},s.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML="")};var h=(t,e)=>{var n,i=t.getBoundingClientRect(),a=e.clientX-i.left*(t.width/i.width),l=e.clientY-i.top*(t.height/i.height);for(n of _){var o=a-n.x,d=l-n.y;0<o&&o<u&&0<d&&d<u&&(r=n.date,g=n.count,c=e.clientX-100,html=M(c,e.clientY-60,r,g),x(s,html))}}}var v,f,y,b},I=()=>{g=(0===f?(B(52),B(51),B(50),B(49),B(48),v+=d[6].count,d[6]):(B(52),B(51),B(50),B(49),(()=>{for(var t=f-1;t<y.length;t++)v+=y[t].count})(),y[f-1])).date},B=t=>{for(var e of git_data[t])v+=e.count},E=()=>{for(var t of p)m+=t.count},T=t=>{(6===f?(u=p[0].date,E):(lastweek=t.contributions[51],u=lastweek[f+1].date,E(),()=>{for(var t=f;t<h.length;t++)m+=h[t].count}))()},fetch(t).then(t=>t.json()).then(t=>{document.getElementById("git_loading")&&document.getElementById("git_loading").remove(),git_data=t.contributions,l=t.total,y=git_data[48],d=git_data[47],o=t.contributions[0],p=t.contributions[52],h=t.contributions[51],f=p.length-1,r=p[f].date,o=o[0].date,s=+r.substring(5,7),b=c.splice(s,12-s),$=b.concat(c),T(t),I();t=L($,git_data,a,w,l,v,m,o,r,u,g);x(i,t),k()}).catch(function(t){console.log(t)}),window.onresize=function(){k()},window.onscroll=function(){document.querySelector(".gitmessage")&&(git_tooltip_container.innerHTML="")},C=(t,e)=>0===e?(parseInt(e/2),t[0]):e<2?t[1]:e<20?t[parseInt(e/2)]:t[9],M=(t,e,n,i)=>{var a="";return a+=`<div class="gitmessage" style="top:${e}px;left: ${t}px;position: fixed;z-index:9999">
                          <div class="angle-wrapper" style="display:block;">
                            <span>${n}&nbsp;</span>
                            <span>${i}次上传</span>
                          </div>
                        </div>`},L=(t,e,n,i,a,l,o,d,s,c,r)=>{var g,u="";return g="",u+`<div class="position-relative">
                          <div class="border py-2 graph-before-activity-overview">
                            <div class="js-gitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas gitcalendar-graph height-full text-center">
                              <div id="gitcalendarcanvasbox">
                              <canvas id="gitcanvas" style="animation: none;">
                              </canvas>
                            </div>
                            </div>
                            ${g+=`<div id="git_tooltip_container"></div>
                        <div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">
                          <div class="float-left text-gray">数据来源
                            <a href="https://github.com/${n}" target="blank">@${n}</a>
                          </div>
                          <div class="contrib-legend text-gray">Less
                            <ul class="legend">
                            <li style="background-color:${i[0]}"></li>
                            <li style="background-color:${i[2]}"></li>
                            <li style="background-color:${i[4]}"></li>
                            <li style="background-color:${i[6]}"></li>
                            <li style="background-color:${i[8]}"></li>
                            </ul>More
                          </div>
                        </div>`}
                          </div>
                        </div>`+`<div style="display:flex;width:100%">
                          <div class="contrib-column contrib-column-first table-column">
                            <span class="text-muted">过去一年提交</span>
                            <span class="contrib-number">${a}</span>
                            <span class="text-muted">${d}&nbsp;-&nbsp;${s}</span>
                          </div>
                          <div class="contrib-column table-column">
                            <span class="text-muted">最近一月提交</span>
                            <span class="contrib-number">${l}</span>
                            <span class="text-muted">${r}&nbsp;-&nbsp;${s}</span>
                          </div>
                          <div class="contrib-column table-column">
                            <span class="text-muted">最近一周提交</span>
                            <span class="contrib-number">${o}</span>
                            <span class="text-muted">${c}&nbsp;-&nbsp;${s}</span>
                          </div>
                        </div>`})}