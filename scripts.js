<!--/*! Simple AJAX infinite scroll by Taufik Nurrohman dte.web.id */ -->
!function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return&quot;function&quot;==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]=&quot;object&quot;==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function c(){return L.innerHTML=p.text.loading,v=!0,M?(y.classList.add(p.state.loading),l(&quot;loading&quot;,[p]),void u(M,function(t,n){y.className=x+&quot; &quot;+p.state.load,h=e.createElement(&quot;div&quot;),h.innerHTML=t;var o=r(&quot;title&quot;,h),a=r(p.target.post,h),i=r(p.target.anchors+&quot; &quot;+p.target.anchor,h),s=r(p.target.post,H);if(o=o&amp;&amp;o[0]?o[0].innerHTML:&quot;&quot;,a.length&amp;&amp;s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML(&quot;afterend&quot;,&quot; &quot;),h=e.createElement(&quot;div&quot;);for(var c=0,u=a.length;u&gt;c;++c)h.appendChild(a[c]);d.insertAdjacentHTML(&quot;afterend&quot;,h.innerHTML),f(),M=i.length?i[0].href:!1,v=!1,q++,l(&quot;load&quot;,[p,t,n])}},function(t,e){y.classList.add(p.state.error),v=!1,f(1),l(&quot;error&quot;,[p,t,e])})):(y.classList.add(p.state.loaded),L.innerHTML=p.text.loaded,l(&quot;loaded&quot;,[p]))}function f(t){if(L.innerHTML=&quot;&quot;,T){h.innerHTML=p.text[t?&quot;error&quot;:&quot;load&quot;];var e=h.firstChild;e.onclick=function(){return 2===p.type&amp;&amp;(T=!1),c(),!1},L.appendChild(e)}}var u=&quot;infinite-scroll-state-&quot;,p={target:{posts:&quot;.posts&quot;,post:&quot;.post&quot;,anchors:&quot;.anchors&quot;,anchor:&quot;.anchor&quot;},text:{load:&quot;%s&quot;,loading:&quot;%s&quot;,loaded:&quot;%s&quot;,error:&quot;%s&quot;},state:{load:u+&quot;load&quot;,loading:u+&quot;loading&quot;,loaded:u+&quot;loaded&quot;,error:u+&quot;error&quot;}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&amp;&amp;a(r)&amp;&amp;r(o.responseText,o));n&amp;&amp;a(n)&amp;&amp;n(o.responseText,o)}},o.open(&quot;GET&quot;,e),o.send()}},T=1!==p.type,v=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],M=r(p.target.anchor,L),m=e.body,y=e.documentElement,x=y.className||&quot;&quot;,E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=0,b=null,q=1;if(M.length){M=M[0].href,H.insertAdjacentHTML(&quot;afterbegin&quot;,&quot; &quot;),h=e.createElement(&quot;div&quot;),f();var w=function(){E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=m.scrollTop||y.scrollTop,v||E&gt;A+j||c()};w(),0!==p.type&amp;&amp;t.addEventListener(&quot;scroll&quot;,function(){T||(b&amp;&amp;t.clearTimeout(b),b=t.setTimeout(w,200))},!1)}return p}}(window,document); if(typeof InfiniteScroll !== &quot;undefined&quot;) { var infinite_scroll = new InfiniteScroll ({ type: 0, target: { posts: &quot;.blogPts&quot;, post: &quot;.ntry&quot;, anchors: &quot;.blogPg&quot;, anchor: &quot;.olLnk&quot;}, text: {load: &quot;<a class='jsLd' expr:aria-label='data:messages.loadMorePosts' expr:data-text='data:messages.loadMorePosts' href='javascript:;'/>&quot;, loading: &quot;<div class='jsLd wait nPst' expr:data-text='data:messages.loading'><svg viewBox='0 0 50 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'/></path></svg></div>&quot;, loaded: &quot;<div class='jsLd nPst' expr:data-text='data:messages.noResultsFound'/>&quot;, error: &quot;<a class='jsLd error' expr:aria-label='data:messages.loadMorePosts' expr:data-text='data:messages.moreEllipsis' href='javascript:;'/>&quot;} }); } function puImgPs(){for(var e=qSell(&quot;.ntry img.imgThm&quot;),t=0;t&lt;e.length;t++)if(e[t].getAttribute(&quot;data-src&quot;)){var n=e[t].getAttribute(&quot;data-src&quot;);1!=n.includes(&quot;blogspot&quot;)&amp;&amp;1!=n.includes(&quot;googleusercontent&quot;)||1!=n.includes(&quot;-pd&quot;)&amp;&amp;1!=n.includes(&quot;-p-k-no-nu&quot;)||0!=n.includes(&quot;-rw&quot;)||e[t].setAttribute(&quot;data-src&quot;,n.replace(&quot;-nu&quot;,&quot;-nu-rw-e30&quot;).replace(&quot;-pd&quot;,&quot;-pd-rw-e30&quot;))}} &quot;undefined&quot;!=typeof infinite_scroll&amp;&amp;infinite_scroll.on(&quot;load&quot;,() =&gt; { puImgPs();typeof puViews==&quot;function&quot;&amp;&amp;(puViews());typeof bkMrk==&quot;function&quot;&amp;&amp;(bkMrk());typeof pushAds==&quot;function&quot;&amp;&amp;(pushAds()); });



<!--[ Numbered pagination (Feeds must be enabled to work) ]-->
var perPage = 7, numPages = 3, firstText = "First", lastText = "Last", prevText = "Previous", nextText = "Next", urlactivepage = location.href, home_page = "/"; var noPage,currentPage,currentPageNo,postLabel;function loadScript(e,a,r){var t=document.createElement("script");t.type="text/javascript",t.src=e,t.async=a,r&&(t.onload=r),document.getElementsByTagName("head")[0].appendChild(t)}function looppagecurrentg(e){var a="";pageNumber=parseInt(numPages/2),pageNumber==numPages-pageNumber&&(numPages=2*pageNumber+1),pageStart=currentPageNo-pageNumber,pageStart<1&&(pageStart=1),lastPageNo=parseInt(e/perPage)+1,lastPageNo-1==e/perPage&&--lastPageNo,pageEnd=pageStart+numPages-1,pageEnd>lastPageNo&&(pageEnd=lastPageNo),a+="<span class='pgOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";e=parseInt(currentPageNo)-1;1<currentPageNo&&(a+="page"==currentPage?'<a class="pgFirst" href="'+home_page+'">'+firstText+"</a>":'<a class="pgFirst" href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+firstText+"</a>"),2<currentPageNo&&(a+=3==currentPageNo?"page"==currentPage?'<a class="pgPrev" href="'+home_page+'">'+prevText+"</a>":'<a class="pgPrev" href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+prevText+"</a>":"page"==currentPage?'<a class="pgPrev" href="#" onclick="redirectpage('+e+');return false">'+prevText+"</a>":'<a class="pgPrev" href="#" onclick="redirectlabel('+e+');return false">'+prevText+"</a>"),1<pageStart&&(a+="page"==currentPage?'<a class="pgNmbr" href="'+home_page+'">1</a>':'<a class="pgNmbr" href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a>'),2<pageStart&&(a+='<span class="pgHlip">&hellip;</span>');for(var r=pageStart;r<=pageEnd;r++)a+=currentPageNo==r?'<span class="pgCrnt nPst">'+r+"</span>":1==r?"page"==currentPage?'<a class="pgNmbr" href="'+home_page+'">1</a>':'<a class="pgNmbr" href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a>':"page"==currentPage?'<a class="pgNmbr" href="#" onclick="redirectpage('+r+');return false">'+r+"</a>":'<a class="pgNmbr" href="#" onclick="redirectlabel('+r+');return false">'+r+"</a>";pageEnd<lastPageNo-1&&(a+='<span class="pgHlip">&hellip;</span>'),pageEnd<lastPageNo&&(a+="page"==currentPage?'<a class="pgNmbr" href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a>":'<a class="pgNmbr" href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a>");e=parseInt(currentPageNo)+1;currentPageNo<lastPageNo-1&&(a+="page"==currentPage?'<a class="pgNext" href="#" onclick="redirectpage('+e+');return false">'+nextText+"</a>":'<a class="pgNext" href="#" onclick="redirectlabel('+e+');return false">'+nextText+"</a>"),currentPageNo<lastPageNo&&(a+="page"==currentPage?'<a class="pgLast" href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+"</a>":'<a class="pgLast" href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+"</a>");for(var t=document.getElementsByName("pageArea"),e=getid("blogPager"),s=0;s<t.length;s++)t[s].innerHTML=a;t&&0<t.length&&(a=""),e&&(e.innerHTML=a)}function totalcountdata(e){e=e.feed;looppagecurrentg(parseInt(e.openSearch$totalResults.$t,10))}function pagecurrentg(){var e=urlactivepage;-1!=e.indexOf("/search/label/")&&(postLabel=-1!=e.indexOf("?updated-max")?e.substring(e.indexOf("/search/label/")+14,e.indexOf("?updated-max")):e.substring(e.indexOf("/search/label/")+14,e.indexOf("?&max"))),-1==e.indexOf("?q=")&&-1==e.indexOf(".html")&&(-1==e.indexOf("/search/label/")?(currentPage="page",currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,loadScript(home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata",!0)):(currentPage="label",-1==e.indexOf("&max-results=")&&(perPage=20),currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,loadScript(home_page+"feeds/posts/summary/-/"+postLabel+"?alt=json-in-script&callback=totalcountdata&max-results=1",!0)))}function redirectpage(e){jsonstart=(e-1)*perPage,noPage=e,loadScript(home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost",!0)}function redirectlabel(e){jsonstart=(e-1)*perPage,noPage=e,loadScript(home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost",!0)}function finddatepost(e){post=e.feed.entry[0];e=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),e=encodeURIComponent(e),e="page"==currentPage?"/search?updated-max="+e+"&max-results="+perPage+"#PageNo="+noPage:"/search/label/"+postLabel+"?updated-max="+e+"&max-results="+perPage+"#PageNo="+noPage;location.href=e}void 0===firstText&&(firstText="First"),void 0===lastText&&(lastText="Last"),pagecurrentg();


/*<![CDATA[*/ 
    var Pu = {
        gC: function (t) {
            return (t = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([.$?*|{}()[\]\\/+^])/g, "$1") + "=([^;]*)"))) ? decodeURIComponent(t[1]) : void 0
        },
        sC: function (t, n, e = {}) {
            (e = {
                path: "/",
                ...e
            }).expires instanceof Date && (e.expires = e.expires.toUTCString());
            let o = unescape(encodeURIComponent(t)) + "=" + unescape(encodeURIComponent(n));
            for (var u in e) {
                o += "; " + u;
                var c = e[u];
                !0 !== c && (o += "=" + c)
            }
            document.cookie = o
        },
        dC: function (t) {
      Pu.sC(t, '', {
                'max-age': -1
            })
        },
        sLS: function (t, n) {
            localStorage.setItem(t, n)
        },
        gLS: function (t) {
            return localStorage.getItem(t)
        },
        rLS: function (t) {
            localStorage.removeItem(t)
        },
        sSS: function (t, n) {
            sessionStorage.setItem(t, n)
        },
        gSS: function (t) {
            return sessionStorage.getItem(t)
        },
        rSS: function (t) {
            sessionStorage.removeItem(t)
        },
        rdm: function (t) {
            return t[Math.floor(Math.random() * t.length)]
        },
        abv: function (t) {
            var n = Math.sign(Number(t));
            return 1e9 <= Math.abs(Number(t)) ? n * (Math.abs(Number(t)) / 1e9).toFixed(2) + "B" : 1e6 <= Math.abs(Number(t)) ? n * (Math.abs(Number(t)) / 1e6).toFixed(2) + "M" : 1e3 <= Math.abs(Number(t)) ? n * (Math.abs(Number(t)) / 1e3).toFixed(2) + "K" : Math.abs(Number(t))
        },
    
        gAj: function (e) {
            var r = new XMLHttpRequest;
            try {
                r = new XMLHttpRequest
            } catch (t) {
                try {
                    r = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (t) {
                    try {
                        r = new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (t) {
                        return console.warn("Something went wrong!"), !1
                    }
                }
            }
            r.onreadystatechange = function () {
                var n;
                4 == r.readyState && (200 == r.status ? (n = r.responseText, e.success(n)) : "function" == typeof e.error && e.error(r))
            }, r.open("GET", e.url, e.async), r.send()
        }
    
    };
    
    function getid(t) {
        return document.getElementById(t)
    }
    
    function getclass(t) {
        return document.getElementsByClassName(t)
    }
    
    function qSel(t) {
        return document.querySelector(t)
    }
    
    function qSell(t) {
        return document.querySelectorAll(t)
    }
    
    function addCt(t, n) {
        return t.classList.add(n)
    }
    
    function remCt(t, n) {
        return t.classList.remove(n)
    }
    
    function stS(t) {
        window.scroll({
            top: getid(t).offsetTop - 20,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    function stC(t) {
        var n = {};
        n.behavior = 'smooth', n.block = 'center', getid(t).scrollIntoView(n)
    }
    
    function stE(t) {
        var n = {};
        n.behavior = 'smooth', n.block = 'end', getid(t).scrollIntoView(n)
    }
    
    function ldJs(t, n, e, r, o) {
        const u = document.createElement('script');
        u.id = n, u.async = e, u.src = t, o && (u.onload = o), qSel(r).appendChild(u)
    }
    
    function ldCss(t, n, e) {
        const u = document.createElement('link');
        u.id = n, u.rel = 'stylesheet', u.type = "text/css", u.href = t, e && (u.onload = e), document.head.appendChild(u)
    }
     /*]]>*/
  
     
	 
	 
	 
	 
	 /* Remove ?m=0, ?m=1 - some features may not work */ /*remPar("m", "0"); remPar("m", "1");*/
    /* Disable Default Cookie Consent */ cookieChoices = {};
    /* @shinsenter/defer.js */ !function(c,i,t){var f,o=/^data-(.+)/,u='IntersectionObserver',r=/p/.test(i.readyState),s=[],a=s.slice,d='lazied',n='load',e='pageshow',l='forEach',m='hasAttribute',h='shift';function p(e){i.head.appendChild(e)}function v(e,n){a.call(e.attributes)[l](n)}function y(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function b(e,n){return a.call((n||i).querySelectorAll(e))}function g(t,e){b('source',t)[l](g),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){f(function(o){o=b(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=y(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&(t[e.name]=e.value)}),t.src&&!t[m]('async')?(t.onload=t.onerror=e,p(t)):(p(t),e()))}()})}(f=function(e,n){r?t(e,n):s.push(e,n)}).all=I,f.js=function(n,t,e,o){f(function(e){(e=y('SCRIPT',t,o)).src=n,p(e)},e)},f.css=function(n,t,e,o){f(function(e){(e=y('LINK',t,o)).rel='stylesheet',e.href=n,p(e)},e)},f.dom=function(e,n,t,o,i){function r(e){o&&!1===o(e)||g(e,t)}f(function(t){t=u in c&&new c[u](function(e){e[l](function(e,n){e.isIntersecting&&(n=e.target)&&(t.unobserve(n),r(n))})},i),b(e||'[data-src]')[l](function(e){e[m](d)||(e.setAttribute(d,''),t?t.observe(e):r(e))})},n)},f.reveal=g,c.Defer=f,c.addEventListener('on'+e in c?e:n,function(){for(I();s[0];t(s[h](),s[h]()))r=1})}(this,document,setTimeout),function(e,n){e.defer=n=e.Defer,e.deferscript=n.js,e.deferstyle=n.css,e.deferimg=e.deferiframe=n.dom}(this);
    /* Adsense Functions */
    /* Push Ads */ function pushAds(){for(let a,b=qSell("ins.adsbygoogle"),c=0;c<b.length;c++)a=b[c],a&&null==a.getAttribute("data-ad-pushed")&&!a.classList.contains("adsbygoogle-noablate")&&((adsbygoogle=window.adsbygoogle||[]).push({}),a.setAttribute("data-ad-pushed","true"))};
    /* Insert After */ function insertAfter(e,n){var t;null!=e&&null!=n&&((t=n.parentNode).lastChild==n?t.appendChild(e):t.insertBefore(e,n.nextSibling))};
    /* Middle Ads */ function middleAds(e,n){for(var t=0;t<n.length;t++){var l=document.getElementById("postBody"),d=document.getElementById(n[t][0]),l=l.getElementsByTagName(e);0<l.length?insertAfter(d,l[n[t][1]]):null!=d&&(d.remove())}};
    /* Recurring Ads */ function recurAds(e,n){var t=document.getElementById("postBody"),l=n.ads?document.getElementById(n.ads):null,d=t.getElementsByTagName(e);if(0<d.length&&null!=l)for(var r,i=0;i<d.length;i++)i%n.every==0&&0!==i&&((r=document.createElement("div")).classList.add("recAd"),r.innerHTML=l?l.innerHTML:n.html||"",insertAfter(r,d[i])),i==d.length-1&&null!=l&&(l.remove());else null!=l&&(l.remove())};
	
	
	
var welElem = document.querySelector("#greetings");
var curHr = new Date().getHours();
var welMes = ["Have a Sweet Dreams!", "Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!", "It's time to sleep!"];
let welText = "";
if (curHr < 4) welText = welMes[0];
else if (curHr < 12) welText = welMes[1];
else if (curHr < 17) welText = welMes[2];
else if (curHr < 19) welText = welMes[3];
else if (curHr < 22) welText = welMes[4];
else welText = welMes[5];
welElem.setAttribute('data-text', welText);




(function timeAgo(selector) { var templates = {prefix: "", suffix: "", seconds: "second ago", minute: "1 min", minutes: "%d min", hour: "1 hour", hours: "%d hour", day: "1 day", days: "%d days", month: "1 month", months: "%d month", year: "1 year", years: "%d years"}; var template = function(t, n) { return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n))); }; var timer = function(time) { if (!time) return; time = time.replace(/\.\d+/, ""); time = time.replace(/-/, "/").replace(/-/, "/"); time = time.replace(/T/, " ").replace(/Z/, " UTC"); time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); time = new Date(time * 1000 || time); var now = new Date(); var seconds = ((now.getTime() - time) * .001) >> 0; var minutes = seconds / 60; var hours = minutes / 60; var days = hours / 24; var years = days / 365; return templates.prefix + ( seconds < 45 && template('seconds', seconds) || seconds < 90 && template('minute', 1) || minutes < 45 && template('minutes', minutes) || minutes < 90 && template('hour', 1) || hours < 24 && template('hours', hours) || hours < 42 && template('day', 1) || days < 30 && template('days', days) || days < 45 && template('month', 1) || days < 365 && template('months', days / 30) || years < 1.5 && template('year', 1) || template('years', years) ) + templates.suffix; }; var elements = document.getElementsByClassName('dtTm'); for (var i in elements) { var $this = elements[i]; if (typeof $this === 'object') { $this.innerHTML = timer($this.getAttribute('title') || $this.getAttribute('data-datetime')); } } setTimeout(timeAgo, 60000); })();


(function() {
        var items = <data:post.commentJso/>;
        var msgs = <data:post.commentMsgs/>;
        var config = <data:post.commentConfig/>;
    
        var cursor = null;
        if (items && items.length > 0) {
          cursor = parseInt(items[items.length - 1].timestamp) + 1;
        }
    
        var bodyFromEntry = function(entry) {
          var text = (entry &&
                      ((entry.content && entry.content.$t) ||
                       (entry.summary && entry.summary.$t))) ||
              '';
          if (entry && entry.gd$extendedProperty) {
            for (var k in entry.gd$extendedProperty) {
              if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
                return '<span class="deleted-comment">' + text + '</span>';
              }
            }
          }
          return text;
        }
    
        var parse = function(data) {
          cursor = null;
          var comments = [];
          if (data && data.feed && data.feed.entry) {
            for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
              var comment = {};
              // comment ID, parsed out of the original id format
              var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
              comment.id = id ? id[2] : null;
              comment.body = bodyFromEntry(entry);
              comment.timestamp = Date.parse(entry.published.$t) + '';
              if (entry.author && entry.author.constructor === Array) {
                var auth = entry.author[0];
                if (auth) {
                  comment.author = {
                    name: (auth.name ? auth.name.$t : undefined),
                    profileUrl: (auth.uri ? auth.uri.$t : undefined),
                    avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                  };
                }
              }
              if (entry.link) {
                if (entry.link[2]) {
                  comment.link = comment.permalink = entry.link[2].href;
                }
                if (entry.link[3]) {
                  var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                  if (pid && pid[1]) {
                    comment.parentId = pid[1];
                  }
                }
              }
              comment.deleteclass = 'item-control blog-admin';
              if (entry.gd$extendedProperty) {
                for (var k in entry.gd$extendedProperty) {
                  if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                    comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                  } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                    comment.displayTime = entry.gd$extendedProperty[k].value;
                  }
                }
              }
              comments.push(comment);
            }
          }
          return comments;
        };
    
        var paginator = function(callback) {
          if (hasMore()) {
            var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
            if (cursor) {
              url += '&published-min=' + new Date(cursor).toISOString();
            }
            window.bloggercomments = function(data) {
              var parsed = parse(data);
              cursor = parsed.length < 50 ? null
                  : parseInt(parsed[parsed.length - 1].timestamp) + 1
              callback(parsed);
              window.bloggercomments = null;
            }
            url += '&callback=bloggercomments';
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
          }
        };
        var hasMore = function() {
          return !!cursor;
        };
        var getMeta = function(key, comment) {
          if ('iswriter' == key) {
            var matches = !!comment.author
                && comment.author.name == config.authorName
                && comment.author.profileUrl == config.authorUrl;
            return matches ? 'true' : '';
          } else if ('deletelink' == key) {
            return config.baseUri + '/delete-comment.g?blogID='
                 + config.blogId + '&postID=' + comment.id;
          } else if ('deleteclass' == key) {
            return comment.deleteclass;
          }
          return '';
        };
    
        var replybox = null;
        var replyUrlParts = null;
        var replyParent = undefined;
    
        var onReply = function(commentId, domId) {
          if (replybox == null) {
            // lazily cache replybox, and adjust to suit this style:
            replybox = document.getElementById('comment-editor');
            if (replybox != null) {
              replybox.height = '250px';
              replybox.style.display = 'block';
              replyUrlParts = replybox.src.split('#');
            }
          }
          if (replybox && (commentId !== replyParent)) {
            replybox.src = '';
            document.getElementById(domId).insertBefore(replybox, null);
            replybox.src = replyUrlParts[0]
                + (commentId ? '&parentID=' + commentId : '')
                + '#' + replyUrlParts[1];
            replyParent = commentId;
          }
        };
    
        var hash = (window.location.hash || '#').substring(1);
        var startThread, targetComment;
        if (/^comment-form_/.test(hash)) {
          startThread = hash.substring('comment-form_'.length);
        } else if (/^c[0-9]+$/.test(hash)) {
          targetComment = hash.substring(1);
        }
    
        // Configure commenting API:
        var configJso = {
          'maxDepth': config.maxThreadDepth
        };
        var provider = {
          'id': config.postId,
          'data': items,
          'loadNext': paginator,
          'hasMore': hasMore,
          'getMeta': getMeta,
          'onReply': onReply,
          'rendered': true,
          'initComment': targetComment,
          'initReplyThread': startThread,
          'config': configJso,
          'messages': msgs
        };
    
        var render = function() {
          if (window.goog && window.goog.comments) {
            var holder = document.getElementById('comment-holder');
            window.goog.comments.render(holder, provider);
          }
        };
    
        // render now, or queue to render when library loads:
        if (window.goog && window.goog.comments) {
          render();
        } else {
          window.goog = window.goog || {};
          window.goog.comments = window.goog.comments || {};
          window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
          window.goog.comments.loadQueue.push(render);
        }
      })();
	  
	  
	  
	  
	  
	  
