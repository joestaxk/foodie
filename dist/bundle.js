(()=>{"use strict";(()=>{const e=JSON.parse('{"K":{"o":{"pizza":{"img":"pizza.jpg","title":"Friday Night Pizza","icon":"local_pizza"},"tomatorice":{"img":["r1.jpg","r3.jpg"],"title":"rice & tomato stew","icon":"rice_bowl"},"soup":{"img":"https://i.pinimg.com/originals/bd/06/e3/bd06e3b4de358b7c5700150e987b2850.jpg","title":"Delicious soup","icon":"soup"},"breakfast":{"img":["https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],"title":"Breakfast time","icon":"rice_bowl"},"coffee":{"img":["https://images.pexels.com/photos/230490/pexels-photo-230490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],"title":"Tea and Coffee time","icon":"coffee"},"cake":{"img":["https://images.unsplash.com/photo-1589218909732-f304d13fbf2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://unsplash.com/photos/LRIQuZyxKRM","https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],"title":"Birthday gift","icon":"cake"},"meat":{"img":["https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],"title":"Suasage & meat time","icon":"restaurant_menu"},"drink":{"img":["https://images.pexels.com/photos/3044/restaurant-love-romantic-dinner.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/5538222/pexels-photo-5538222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],"title":"Drinks","icon":"wine_bar"}}},"Q":[{"img":"veg.jpeg","title":"Vegetable soup","price":"₦500","percentage":"58"},{"img":"r3.jpg","title":"jollof rice","price":"₦1,200","percentage":"66"},{"img":"r1.jpg","title":"jollof rice","price":"₦1,400","percentage":"80"},{"img":"yam.jpeg","title":"Yam","price":"₦800","percentage":"43"},{"img":"beans.jpeg","title":"Beans","price":"₦750","percentage":"49"},{"img":"spag1.jpeg","title":"Spaghetti pasta","price":"₦1,100","percentage":"98"},{"img":"tea.jpeg","title":"Tea","price":"₦500","percentage":"53"}]}');function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function a(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,o;return i=a,(o=[{key:"Front_gallary",value:function(n){var a=e.K.o,i={};switch(n){case"sunday":i=a.breakfast;break;case"monday":i=a.tomatorice;break;case"tuesday":i=a.cake;break;case"wednesday":i=a.coffee;break;case"thursday":i=a.soup;break;case"friday":i=a.pizza;break;case"saturday":i=a.meat;break;default:i=a.drink}if("object"===t(i))return i}},{key:"SetGallaryDisplayDay",value:function(){var e=this.Front_gallary,t=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()],n={img:"",title:"",icon:""},a=e.call(null,t),i=Array.isArray(a.img)?Math.floor(Math.random()*a.img.length):null;return n.img=Array.isArray(a.img)?a.img[i]:a.img,n.title=a.title,n.icon=a.icon,n}},{key:"RenderAvailaibility",value:function(){return e.Q}}])&&n(i.prototype,o),a}(),i=function(e,t){var n="";return e?n=document.querySelector(e):t&&(n=document.querySelectorAll(t)),n},o=function(e,t,n,a){t.addEventListener(e,n,a)};function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"pageGreeting",value:function(){var e=["Good morning","Good Afternoon","Good Evening"],t=["wb_cloudy","light_mode","nightlight_round","dark_mode"],n={greet:""},a=(new Date).getHours(),i="We're avalaible now, we currently have!";return a<=12?(n.greet=e[0],n.icon=t[0],n.status=i):a>12&&a<16?(n.greet=e[1],n.icon=t[1],n.status=i):a>16&&a<=18?(n.greet=e[2],n.icon=t[2],n.status=i):a>18&&(n.greet=e[2],n.icon=t[3],n.status="We're unavalaible now, but we currently have!"),n}},{key:"scrollThroughBtn",value:function(){o("click",document.body,(function(e){var t=e.target,n=i(".feeds");"t_right"===t.id?n.scrollBy({top:0,left:parseInt(n.clientWidth),behaviour:"smooth"}):"t_left"===t.id&&n.scrollBy({top:0,left:-n.offsetWidth,behaviour:"smooth"})}),"once")}},{key:"removeAnglebtnOnMoibile",value:function(){var e=navigator.platform;/^(linux|win|mac)/i.test(e)||i(".btnAngle").remove()}},{key:"init",value:function(){return{pageGreeting:this.pageGreeting(),scrollBtn:this.scrollThroughBtn(),removeAnglebtn:this.removeAnglebtnOnMoibile()}}}])&&r(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"loadpage",value:function(){this.loadGreetings(),this.loadHeroBanner(),this.loadAvalaibility(),this.showNavFn()}},{key:"loadHeroBanner",value:function(){var e=(new a).SetGallaryDisplayDay(),t=i(".carousel"),n="\n            <h2>".concat(e.title,' <span class="material-icons">').concat(e.icon,'</span> </h2>\n            <div class="material-icons">\n                arrow_circle_right\n            </div>\n        ');t.innerHTML=n,t.style.cssText="background-image: linear-gradient(90deg,rgba(44, 42, 42, 0.288) 40%, rgba(37, 37, 37, 0.399)), url(".concat(/^https:*/.test(e.img)?e.img:"../img/".concat(e.img),")")}},{key:"loadAvalaibility",value:function(){(new a).RenderAvailaibility().forEach((function(e){var t,n,a='\n                <div class="meal">\n                    <div class="img">\n                        <img loading="lazy" src='.concat("../img/"+e.img," alt=").concat(e.title,'>\n                        <h4 class="title">').concat(e.title,"| <small>").concat(e.price,'/plate</small></h4>\n                    </div>\n                    <div class="avail">\n                        <label>availability: </label>\n                        <div class="progress">\n                            <div class="text ').concat((t=e.percentage,n=parseInt(t),n>69&&n<99?"green":n>49&&n<68?"orange":"red"),'">').concat(e.percentage,'%</div>\n                        </div>\n                    </div>\n                    <div class="checkout">\n                        <span class="cart">add to cart: </span>\n                        <input type="checkbox" name="checkbox" id="">\n                    </div>\n                </div>');i(".feeds").insertAdjacentHTML("beforeend",a)})),i(null,".meal").forEach((function(e){e.querySelector(".text").style.cssText="width: 0%"}))}},{key:"loadGreetings",value:function(){var e=(new s).init(),t="\n        <h2>".concat(e.pageGreeting.greet,'<span class="material-icons">').concat(e.pageGreeting.icon,"</span> </h2>\n        <span>Available meal for ").concat(e.pageGreeting.greet,"</span>\n        ");i(".greetings").innerHTML=t,i(".opening").textContent=e.pageGreeting.status}},{key:"showNavFn",value:function(){var e=i("[data-close]"),t=i("[data-show]");[e,t].forEach((function(n,a){o("click",n,(function(){var a=n.dataset.close,o=n.dataset.show;a?(e.classList.add("none"),t.classList.remove("none"),i(".nav").classList.remove("none"),i("body").style.cssText="overflow-y: hidden",i(".nav").animate([{opacity:0},{opacity:1}],{duration:250})):o&&(e.classList.remove("none"),t.classList.add("none"),i(".nav").classList.add("none"),i("body").style.cssText="overflow-y: scroll")}))}))}}])&&l(t.prototype,n),e}())).loadpage(),function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"observeGallery",value:function(){var e=i(".availaible");new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&e.target.querySelectorAll(".meal").forEach((function(e){var t=e.querySelector(".text");t.style.cssText="transition: .5s; width: ".concat(t.textContent)}))}))}),{rootMargin:"10%",threshold:1}).observe(e)}},{key:"observeService",value:function(){var e=i(null,".post"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.querySelector(".postImage").classList.add("postImageR"),e.target.querySelector(".postText").classList.add("postTextR"),e.target.scrollIntoView({behavior:"smooth"}))}))}),{rootMargin:"-10px",threshold:0});e.forEach((function(e){t.observe(e)}))}},{key:"observeGalleries",value:function(){var e=i(null,".meal"),t=e[0],n=e[e.length-1],a=i(".availaible_btn_left"),o=i(".availaible_btn_right"),r=i(".btnAngle");r&&(new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting||(r.innerHTML='\n                        <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>\n                        <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>\n                    ')}))}),{threshold:.75}).observe(n),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(r.innerHTML='\n                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>\n                    ',o&&o.remove())}))}),{threshold:.75}).observe(n),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting||(r.innerHTML='\n                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>\n                    <div class="material-icons availaible_btn_right id="t_right">chevron_right</div>\n                    ')}))}),{threshold:.75}).observe(t),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting||(r.innerHTML='\n                    <div class="material-icons availaible_btn_left" id="t_left">chevron_left</div>\n                    <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>\n                    '),r.innerHTML='\n                <div class="material-icons availaible_btn_right" id="t_right">chevron_right</div>\n                ',a&&a.remove()}))}),{threshold:.75}).observe(t))}},{key:"init",value:function(){e.observeGallery(),e.observeService(),e.observeGalleries()}}],null&&c(t.prototype,null),n&&c(t,n),e}().init()})()})();