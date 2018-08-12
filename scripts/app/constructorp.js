'use strict'

const screator = {

    form: document.createElement("FORM"),
    input: document.createElement("INPUT"),
    button: document.createElement("BUTTON"),
    img: document.createElement("IMG"),
    helper: document.getElementsByClassName("littlehelper")[0],
    uploadb: document.createElement("BUTTON"),
    head: document.getElementsByClassName("head")[0],

};

function create() {

    screator.form.setAttribute("class", "searchform");
    screator.form.appendChild(screator.button);
    screator.form.appendChild(screator.input);

        if (window.innerWidth > 1060) {screator.form.setAttribute("class", "searchform");

            screator.input.placeholder = "Search videos, people and more";
            screator.input.style.width = "245px";
            screator.uploadb.innerHTML = "&uHar;   Upload"; 
            screator.uploadb.setAttribute("class", "upload ");
            screator.img.id = "sicon";
          

        };

        if (window.innerWidth > 940 && window.innerWidth < 1060) {screator.form.setAttribute("class", "searchform");

            screator.input.placeholder = "Search videos, peopl...";
            screator.input.style.width = "175px";
            screator.uploadb.innerHTML = "&uHar;   Upload"; 
            screator.uploadb.setAttribute("class", "upload ");
            screator.img.id = "sicon";
          

        };

        if (window.innerWidth < 940 && window.innerWidth > 768) { screator.form.setAttribute("class", "searchform");

            screator.input.style.width = "75px";
            screator.input.placeholder = "Search...";
            screator.uploadb.setAttribute("class", "upload d-lg-none");
            screator.uploadb.innerHTML = "&uHar;"
            screator.img.id = "sicon2";
           
            
        };

        screator.form.appendChild(screator.button);
        screator.button.appendChild(screator.img);
        screator.form.appendChild(screator.input);
        screator.helper.appendChild(screator.uploadb);
        screator.head.insertBefore(screator.form, screator.helper.nextSibling); 

    screator.form.action = "index.html/mypage.php";
    screator.button.type = 'text';
    screator.button.id = "bsearch";
    screator.img.src = "img/sicon.svg";
    screator.input.id = "search";
    screator.input.type = "text";
    screator.input.autocomplete = "off";
    screator.uploadb.onclick="location.href='http://www.example.com'";
    screator.uploadb.id = "upload-small";

       

};

                                                                            window.addEventListener("load", create);

function onFoc() {

    screator.button.style.backgroundColor = 'white';
    screator.button.style.opacity = 1;
    screator.input.style.backgroundColor = 'white';
    screator.input.style.opacity = 1;

};

function onBlur() {

    screator.button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    screator.input.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';

};

                                                                            screator.input.addEventListener("focus", onFoc);
                                                                            screator.input.addEventListener("blur", onBlur);

function onResize() {

    if (window.innerWidth > 1060) {
    
        screator.input.placeholder = "Search videos, people and more";
        screator.input.style.width = "245px";
        screator.uploadb.innerHTML = "&uHar;   Upload"; 
        screator.uploadb.setAttribute("class", "upload");
        screator.img.id = "sicon";
     
        
    };

    if (window.innerWidth > 940 && window.innerWidth < 1060) {screator.form.setAttribute("class", "searchform");

    screator.input.placeholder = "Search videos, peopl...";
    screator.input.style.width = "175px";
    screator.uploadb.innerHTML = "&uHar;   Upload"; 
    screator.uploadb.setAttribute("class", "upload ");
    screator.img.id = "sicon";
    

};

    if (window.innerWidth < 940 && window.innerWidth > 768) {
    
        screator.input.style.width = "75px";
        screator.input.placeholder = "Search...";
        screator.uploadb.setAttribute("class", "upload d-lg-none");
        screator.uploadb.innerHTML = "&uHar;"
        screator.img.id = "sicon2";
       

    };

};
        // handle event
                                                                            window.addEventListener("optimizedResize", onResize);


(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();      /*RESIZE OPTIMIZATION*/

                                                                           

const drop = {

    setup: document.getElementsByClassName('dropdown'),
    menu: document.getElementsByClassName('dmenu'),

};

function dropdown() {

    for (let i = 0; i < drop.setup.length; i++) {

        drop.setup[i].addEventListener('mouseenter', function() {
        drop.menu[i].style.visibility = 'visible';});

        drop.setup[i].addEventListener('mouseleave', function() {
        drop.menu[i].style.visibility = 'hidden';});
    };
};

                                                                                window.addEventListener('load', dropdown);

const videoplayer = {

        video: document.createElement("VIDEO"),
        source: document.createElement("SOURCE"),
        container: document.getElementsByClassName('videocontainer')

};

function loadVideo() {

        videoplayer.video.appendChild(videoplayer.source);
        videoplayer.container[0].appendChild(videoplayer.video);
        videoplayer.video.setAttribute("Class", "videoh");
        videoplayer.video.autoplay = 'true';
        videoplayer.video.loop = 'true';
        videoplayer.video.muted = 'true';
        videoplayer.source.src = "vid/load.mp4";
        videoplayer.source.type= "video/mp4";
        videoplayer.video.style.width = '100%';
        videoplayer.video.style.height = '100%';

}

                                                                            window.addEventListener('load', loadVideo);

                                                                            window.addEventListener("scroll", function() {
                                                                            screator.head.style.backgroundColor = 'rgba(53, 51, 51, 0.87)';
                                                                            if (window.scrollY === 0) {
                                                                            screator.head.style.backgroundColor = 'rgba(53, 51, 51, 0)';};});


class Fav {

constructor() {

   this.div = document.createElement('DIV');
   this.img1 = document.createElement('IMG');
   this.a1 = document.createElement('A');
   this.img2 = document.createElement('IMG');
   this.a2 = document.createElement('A');
   this.a3 = document.createElement('A');
   this.a4 = document.createElement('A');
   this.imga2 = document.createElement('IMG');
   this.imga3 = document.createElement('IMG');
   this.a5 = document.createElement('A');

   };

method() {

   this.div.appendChild(this.img1);
   this.div.appendChild(this.a1);
   this.div.appendChild(this.a5);
   this.a5.appendChild( this.img2);
   this.div.appendChild(this.a2);
   this.div.appendChild(this.a3);
   this.div.appendChild(this.a4);
   this.a2.appendChild(this.imga2);
   this.a3.appendChild(this.imga3);

   };

declareClass(divC, img1C, a1C, img2C, imga2C, imga3C, a4C) {

   this.div.setAttribute('class', divC);
   this.img1.setAttribute('class', img1C);
   this.a1.setAttribute('class', a1C);
   this.img2.setAttribute('class', img2C);
   this.imga2.setAttribute('class', imga2C);
   this.imga3.setAttribute('class', imga3C);
   this.a4.setAttribute('class', a4C);

};

img1src(img1) {

   this.img1.src = img1;

};

ahref(href, a2title, a3title, a4title, a4html) {

   this.a1.href = href;
   this.a2.href = href;
   this.a3.href = href;
   this.a4.href = href;
   this.a5.href = href;
   this.a2.title = a2title;
   this.a3.title = a3title;
   this.a4.title = a4title;
   this.a4.innerHTML = a4html;
       
};

img234src(img2, img3, img4) {

   this.img2.src = img2;
   this.imga2.src = img3;
   this.imga3.src = img4;

};

};


let favobj = {

    fav1: new Fav(),
    fav2: new Fav(),
    fav3: new Fav(),
    fav4: new Fav(),
    fav5: new Fav(),
    fav6: new Fav(),
    fav7: new Fav(),
    fav8: new Fav(),
    fav9: new Fav(),
    fav10: new Fav(),
    fav11: new Fav(),
    fav12: new Fav(),
    fav13: new Fav(),
    fav14: new Fav(),
    fav15: new Fav(),
    cont: document.getElementsByClassName("fav-container")[0],

};

function greatCreator() {

    if (window.innerWidth > 1120) {

        favobj.cont.style.width = '1096px';

        favobj.fav1.method();
        favobj.fav1.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav1.img1src("img/fav/1.jpg.");
        favobj.fav1.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav1.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav2.method();
        favobj.fav2.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav2.img1src("img/fav/2.jpg.");
        favobj.fav2.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:12', "00:12");
        favobj.fav2.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav3.method();
        favobj.fav3.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav3.img1src("img/fav/3.jpg.");
        favobj.fav3.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:09', "00:09");
        favobj.fav3.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav4.method();
        favobj.fav4.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav4.img1src("img/fav/4.jpg.");
        favobj.fav4.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:12', "00:12");
        favobj.fav4.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav5.method();
        favobj.fav5.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
        favobj.fav5.img1src("img/fav/5.jpg.");
        favobj.fav5.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:07', "00:07");
        favobj.fav5.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav6.method();
        favobj.fav6.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav6.img1src("img/fav/6.jpg.");
        favobj.fav6.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav6.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav7.method();
        favobj.fav7.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav7.img1src("img/fav/7.jpg.");
        favobj.fav7.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:24', "00:24");
        favobj.fav7.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav8.method();
        favobj.fav8.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav8.img1src("img/fav/8.jpg.");
        favobj.fav8.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:34', "00:34");
        favobj.fav8.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav9.method();
        favobj.fav9.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav9.img1src("img/fav/9.jpg.");
        favobj.fav9.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:10', "00:10");
        favobj.fav9.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav10.method();
        favobj.fav10.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
        favobj.fav10.img1src("img/fav/10.jpg.");
        favobj.fav10.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:13', "00:13");
        favobj.fav10.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav11.method();
        favobj.fav11.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav11.img1src("img/fav/11.jpg.");
        favobj.fav11.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:22', "00:22");
        favobj.fav11.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav12.method();
        favobj.fav12.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav12.img1src("img/fav/12.jpg.");
        favobj.fav12.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav12.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav13.method();
        favobj.fav13.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav13.img1src("img/fav/13.jpg.");
        favobj.fav13.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:13', "00:13");
        favobj.fav13.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav14.method();
        favobj.fav14.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav14.img1src("img/fav/14.jpg.");
        favobj.fav14.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:07', "00:07");
        favobj.fav14.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav15.method();
        favobj.fav15.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
        favobj.fav15.img1src("img/fav/15.jpg.");
        favobj.fav15.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav15.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

    };     

    if (window.innerWidth < 1120 && window.innerWidth > 768) {
    
        favobj.cont.style.width = '644px';

        favobj.fav1.method();
        favobj.fav1.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav1.img1src("img/fav/1.jpg.");
        favobj.fav1.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav1.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav2.method();
        favobj.fav2.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav2.img1src("img/fav/2.jpg.");
        favobj.fav2.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:12', "00:12");
        favobj.fav2.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav3.method();
        favobj.fav3.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav3.img1src("img/fav/3.jpg.");
        favobj.fav3.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:09', "00:09");
        favobj.fav3.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav4.method();
        favobj.fav4.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav4.img1src("img/fav/4.jpg.");
        favobj.fav4.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:12', "00:12");
        favobj.fav4.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav5.method();
        favobj.fav5.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav5.img1src("img/fav/5.jpg.");
        favobj.fav5.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:07', "00:07");
        favobj.fav5.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav6.method();
        favobj.fav6.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav6.img1src("img/fav/6.jpg.");
        favobj.fav6.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav6.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav7.method();
        favobj.fav7.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav7.img1src("img/fav/7.jpg.");
        favobj.fav7.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:24', "00:24");
        favobj.fav7.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav8.method();
        favobj.fav8.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav8.img1src("img/fav/8.jpg.");
        favobj.fav8.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:34', "00:34");
        favobj.fav8.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav9.method();
        favobj.fav9.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav9.img1src("img/fav/9.jpg.");
        favobj.fav9.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:10', "00:10");
        favobj.fav9.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav10.method();
        favobj.fav10.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav10.img1src("img/fav/10.jpg.");
        favobj.fav10.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:13', "00:13");
        favobj.fav10.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav11.method();
        favobj.fav11.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav11.img1src("img/fav/11.jpg.");
        favobj.fav11.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:22', "00:22");
        favobj.fav11.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav12.method();
        favobj.fav12.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav12.img1src("img/fav/12.jpg.");
        favobj.fav12.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav12.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav13.method();
        favobj.fav13.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav13.img1src("img/fav/13.jpg.");
        favobj.fav13.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:13', "00:13");
        favobj.fav13.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav14.method();
        favobj.fav14.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav14.img1src("img/fav/14.jpg.");
        favobj.fav14.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:07', "00:07");
        favobj.fav14.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");

        favobj.fav15.method();
        favobj.fav15.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav15.img1src("img/fav/15.jpg.");
        favobj.fav15.ahref("http://www.example2.com", "Play", "Add to Watch Later", '00:14', "00:14");
        favobj.fav15.img234src("img/prizeicon.svg", "img/play-icon.svg", "img/time.svg");


};     

    
    favobj.cont.appendChild(favobj.fav1.div);
    favobj.cont.appendChild(favobj.fav2.div);
    favobj.cont.appendChild(favobj.fav3.div);
    favobj.cont.appendChild(favobj.fav4.div);
    favobj.cont.appendChild(favobj.fav5.div);
    favobj.cont.appendChild(favobj.fav6.div);
    favobj.cont.appendChild(favobj.fav7.div);
    favobj.cont.appendChild(favobj.fav8.div);
    favobj.cont.appendChild(favobj.fav9.div);
    favobj.cont.appendChild(favobj.fav10.div);
    favobj.cont.appendChild(favobj.fav11.div);
    favobj.cont.appendChild(favobj.fav12.div);
    favobj.cont.appendChild(favobj.fav13.div);
    favobj.cont.appendChild(favobj.fav14.div);
    favobj.cont.appendChild(favobj.fav15.div);


};


                                                                            window.addEventListener('load', greatCreator);
                                                                            

const vids = {

    vids: document.getElementsByClassName('vids'),
    prize: document.getElementsByClassName('prize'),
    playb: document.getElementsByClassName('playb'),
    time1: document.getElementsByClassName('time1'),
    leng: document.getElementsByClassName('length'),
                                                        
}
                                                        
function binder() {
                                                        
    for (let i = 0; i < vids.vids.length; i++) {
                                                        
        vids.vids[i].addEventListener('mouseenter', function() {
                                                        
            vids.prize[i].style.top = '-113px';
            vids.prize[i].style.visibility = 'hidden';
                                                        
            vids.playb[i].style.visibility = 'visible';
            vids.playb[i].style.top = '-117px';
                                                                        
            vids.time1[i].style.visibility = 'visible';
            vids.time1[i].style.marginTop = '-110px';
                                                        
            vids.leng[i].style.visibility = 'visible';
            vids.leng[i].style.bottom = '38px';
                                                        
        });
                                                                                                                                   
        vids.vids[i].addEventListener('mouseleave', function() {
                                                        
            vids.prize[i].style.top = '-103px';
            vids.prize[i].style.visibility = 'visible';
                                                        
            vids.playb[i].style.visibility = 'hidden';
            vids.playb[i].style.top = '-110px';
                                                                        
            vids.time1[i].style.visibility = 'hidden';
            vids.time1[i].style.marginTop = '-102px';
                                                        
            vids.leng[i].style.visibility = 'hidden';
            vids.leng[i].style.bottom = '32px';
                                                        
                                                                    
                                                                   
        });
                                                            
    };
                                                        
                                                            
};
                                                        
                                                                            window.addEventListener('load', binder);


function resizeFavorites() {

    if (window.innerWidth > 1120) {

        favobj.cont.style.width = '1096px';

        favobj.fav3.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav5.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
        favobj.fav6.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav9.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav10.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
        favobj.fav12.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav15.declareClass("vids v5", "picb", "linkz", "prize", "playb", "time1 time2", "length length2" );
       

    }

    if (window.innerWidth < 1120 && window.innerWidth > 768) { 

        favobj.cont.style.width = '644px';

        favobj.fav3.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" ); 
        favobj.fav5.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav6.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav9.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav10.declareClass("vids", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav12.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
        favobj.fav15.declareClass("vids v3", "picb", "linkz", "prize", "playb", "time1", "length" );
       
    }

};

                                                                            window.addEventListener('optimizedResize', resizeFavorites);
                                                                            window.addEventListener('optimizedResize', greatCreator);
                                                                            window.addEventListener('optimizedResize', binder);
const videoslide = {

    varray: ["vid/1.mp4", "vid/2.mp4", "vid/3.mp4"],
    video: document.createElement("VIDEO"),
    buttons: document.getElementsByClassName('playerbuttons')[0],
    container: document.getElementsByClassName('blackscreen')[0],
    pauseplay: document.getElementsByClassName('pauseplay'),
    pauseplay2: document.getElementsByClassName('pauseplay2'),

};

function slider() {

    videoslide.video.style.width = '530px';
    videoslide.video.setAttribute('class', 'presentvideo');
    videoslide.video.muted = 'true';
    videoslide.video.type = "video/mp4";
    videoslide.container.appendChild(videoslide.video);

};

function player() {

    let but = videoslide.buttons;

        let j = 0;

        videoslide.video.src = videoslide.varray[j];
        videoslide.video.play();
        
        
    if (j === 0) {

        videoslide.pauseplay2[0].src = "img/player/pause-icon.svg" 
        videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
        videoslide.pauseplay2[2].src = "img/player/play-icon.svg"

    };
    
    for (let i = 0; i < but.children.length; i++) {

        but.children[i].children[0].addEventListener('click', function(e) {

            j = i;
            videoslide.video.setAttribute('src', videoslide.varray[i]);
            videoslide.video.pause();
            videoslide.video.currentTime = 0;
            videoslide.video.play();
            e.preventDefault();
            videoslide.video.style.opacity = 1;

            if (j === 0) {

                videoslide.pauseplay2[0].src = "img/player/pause-icon.svg" 
                videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                videoslide.pauseplay2[2].src = "img/player/play-icon.svg" 
            }

            if (j === 1) {

                videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                videoslide.pauseplay2[1].src = "img/player/pause-icon.svg" 
                videoslide.pauseplay2[2].src = "img/player/play-icon.svg" 
            }

            if (j === 2) {

                videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                videoslide.pauseplay2[2].src = "img/player/pause-icon.svg" 
            }

        });

       

    };

    videoslide.video.addEventListener('timeupdate', function() {

        if (Math.floor(videoslide.video.currentTime) === Math.floor(videoslide.video.duration)) {

            if (j === videoslide.varray.length - 1) {
        
                videoslide.video.style.opacity = 1;
                j = 0;
                videoslide.video.setAttribute('src', videoslide.varray[j]);
                videoslide.video.play();

                if (j === 0) {

                    videoslide.pauseplay2[0].src = "img/player/pause-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/play-icon.svg" 
                }
        
                if (j === 1) {
        
                    videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/pause-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/play-icon.svg" 
                }
        
                if (j === 2) {
        
                    videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/pause-icon.svg" 
                }

            }
  
            else {

                videoslide.video.style.opacity = 1;
                j++;
                videoslide.video.setAttribute('src', videoslide.varray[j]);
                videoslide.video.play();  

                if (j === 0) {

                    videoslide.pauseplay2[0].src = "img/player/pause-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/play-icon.svg" 

                }
        
                if (j === 1) {
        
                    videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/pause-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/play-icon.svg"

                }
        
                if (j === 2) {
        
                    videoslide.pauseplay2[0].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[1].src = "img/player/play-icon.svg" 
                    videoslide.pauseplay2[2].src = "img/player/pause-icon.svg"

                }

            }

        };

            if (Math.floor(videoslide.video.currentTime) === Math.floor(videoslide.video.duration - 1)) {

                videoslide.video.style.opacity = 0;

            }

        });

};
                                             
                                                                                                                window.addEventListener('load', slider)
                                                                                                                window.addEventListener('load', player)

                   
const images = {

    img1: document.createElement("IMG"),
    img2: document.createElement("IMG"),
    img3: document.createElement("IMG"),
    img4: document.createElement("IMG"),
    img5: document.createElement("IMG"),
    slide: document.getElementsByClassName("slidepictures"),
    arrow1: document.getElementById("arrow1"),
    arrow2: document.getElementById("arrow2"),
    signature: document.getElementsByClassName("sig"),
    imagesrc: ["img/slide/heads/more2.jpg", "img/slide/heads/arist3.jpg", "img/slide/heads/marx1.jpg",
     "img/slide/heads/goethe1.jpg", "img/slide/heads/schiller5.jpg", 
    ],
    quote: document.getElementById("quote"),
    quotearray: ["Workers could be liberated from this experience by seizing the means of production.", 
                 '"Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it."',
                '"It is not flesh and blood, but heart which makes us fathers and sons."',
                '"The ordinary acts we practice every day at home are of more importance to the soul than their simplicity might suggest."',
                '"The aim of art is to represent not the outward appearance of things, but their inward significance."'
                ],
    footerarray: ["Karl Marx-Philosopher", "Goethe-Writer", "Schiller-Poet", "Thomas More-Philosopher", "Aristotle-Philosopher"]

};

function slideshow() {

    images.slide[0].insertBefore(images.img2, images.arrow1.nextSibling);
    images.slide[0].insertBefore(images.img3, images.arrow1.nextSibling);
    images.slide[0].insertBefore(images.img1, images.arrow1.nextSibling);
    images.slide[0].insertBefore(images.img4, images.arrow1.nextSibling);
    images.slide[0].insertBefore(images.img5, images.arrow1.nextSibling);
    images.img1.setAttribute("id", "he1");
    images.img2.setAttribute("class", "he2");
    images.img3.setAttribute("class", "he2");
    images.img4.setAttribute("class", "he2");
    images.img5.setAttribute("class", "he2");
    images.img2.src = images.imagesrc[0];
    images.img3.src = images.imagesrc[1];
    images.img1.src = images.imagesrc[2];
    images.img4.src = images.imagesrc[3];
    images.img5.src = images.imagesrc[4];

};

                                                                       window.addEventListener('load', slideshow);

function right() {

    let neworder =  [images.img2.getAttribute("src"),
     images.img3.getAttribute("src"),
     images.img1.getAttribute("src"),
     images.img4.getAttribute("src"),
     images.img5.getAttribute("src")]
     images.img2.src = neworder[1];
     images.img3.src = neworder[2];
     images.img1.src = neworder[3];
     images.img4.src = neworder[4];
     images.img5.src = neworder[0];

    
  
     if (images.img1.getAttribute("src") === images.imagesrc[0]) {

         images.quote.innerHTML = images.quotearray[3];
         let sig = images.footerarray[3].split('-');
         images.signature[0].innerHTML = sig[0];
         images.signature[1].innerHTML = sig[1];
        
        }

     if (images.img1.getAttribute("src") === images.imagesrc[1]) {
         
        images.quote.innerHTML = images.quotearray[4];
        let sig = images.footerarray[4].split('-');
        images.signature[0].innerHTML = sig[0];
        images.signature[1].innerHTML = sig[1];
    
    }

     if (images.img1.getAttribute("src") === images.imagesrc[2]) {
         
        images.quote.innerHTML = images.quotearray[0];
        let sig = images.footerarray[0].split('-');
        images.signature[0].innerHTML = sig[0];
        images.signature[1].innerHTML = sig[1];
    
    }

     if (images.img1.getAttribute("src") === images.imagesrc[3]) {
         
        images.quote.innerHTML = images.quotearray[1];
        let sig = images.footerarray[1].split('-');
        images.signature[0].innerHTML = sig[0];
        images.signature[1].innerHTML = sig[1];

    }

     if (images.img1.getAttribute("src") === images.imagesrc[4]) {
         
        images.quote.innerHTML = images.quotearray[2];
        let sig = images.footerarray[2].split('-');
        images.signature[0].innerHTML = sig[0];
        images.signature[1].innerHTML = sig[1];

    }
   
};

setInterval(right, 7000);

                                                                    images.arrow2.addEventListener('click', right);

images.arrow1.addEventListener('click', function(f) {

    let neworder =  [images.img2.getAttribute("src"),
     images.img3.getAttribute("src"),
     images.img1.getAttribute("src"),
     images.img4.getAttribute("src"),
     images.img5.getAttribute("src")]
  
     images.img2.src = neworder[4];
     images.img3.src = neworder[0];
     images.img1.src = neworder[1];
     images.img4.src = neworder[2];
     images.img5.src = neworder[3];
  
     f.preventDefault();

     if (images.img1.getAttribute("src") === images.imagesrc[0]) {

        images.quote.innerHTML = images.quotearray[3];
        let sig = images.footerarray[3].split('-');
        images.signature[0].innerHTML = sig[0];
        images.signature[1].innerHTML = sig[1];
       
       }
    if (images.img1.getAttribute("src") === images.imagesrc[1]) {
        
       images.quote.innerHTML = images.quotearray[4];
       let sig = images.footerarray[4].split('-');
       images.signature[0].innerHTML = sig[0];
       images.signature[1].innerHTML = sig[1];
   
   }
    if (images.img1.getAttribute("src") === images.imagesrc[2]) {
        
       images.quote.innerHTML = images.quotearray[0];
       let sig = images.footerarray[0].split('-');
       images.signature[0].innerHTML = sig[0];
       images.signature[1].innerHTML = sig[1];


   
   }
    if (images.img1.getAttribute("src") === images.imagesrc[3]) {
        
       images.quote.innerHTML = images.quotearray[1];
       let sig = images.footerarray[1].split('-');
       images.signature[0].innerHTML = sig[0];
       images.signature[1].innerHTML = sig[1];

   }
    if (images.img1.getAttribute("src") === images.imagesrc[4]) {
        
       images.quote.innerHTML = images.quotearray[2];
       let sig = images.footerarray[2].split('-');
       images.signature[0].innerHTML = sig[0];
       images.signature[1].innerHTML = sig[1];

   }

   

  });

  
  function clear1(e) {

    clearInterval(1);
    e.preventDefault();
   

  }

  images.arrow1.addEventListener('click', clear1);
  images.arrow2.addEventListener('click', clear1);

const relif = {

    menu: document.getElementById("menju"),
    dropmenu: document.getElementsByClassName("dropmenu")[0],
    close: document.getElementById("x"),
    settings: document.getElementsByClassName("settingsa")[0],
    dropmenu2: document.getElementsByClassName("dropmenu2")[0],
    back: document.getElementById("y"),

}


relif.menu.addEventListener('click', function() {
    
    relif.dropmenu.style.display = "block";

});

relif.close.addEventListener('click', function() {
    
    relif.dropmenu.style.display = "none";

});

relif.settings.addEventListener('click', function() {
    
    relif.dropmenu.style.display = "none";
  relif.dropmenu2.style.display = "block";

});

relif.back.addEventListener('click', function() {
    
    relif.dropmenu.style.display = "block";
    relif.dropmenu2.style.display = "none";

});


const footdrop = {

    dropb: document.getElementsByClassName('droz1'),
    secdrop1:  document.getElementsByClassName('secdrop1'),
    arrow1:  document.getElementsByClassName('drar1'),
    arrow2:  document.getElementsByClassName('drar2'),

}


footdrop.dropb[0].addEventListener('click', function(e) {

    let stil = window.getComputedStyle(footdrop.secdrop1[0]);
    e.preventDefault();

    if (stil.getPropertyValue('height') === '220px') {

        footdrop.secdrop1[0].style.height = '35px';
        footdrop.arrow1[0].style.height = '0px';
        footdrop.arrow2[0].style.height = '20px';

    }

    else {
       
    footdrop.secdrop1[0].style.height = '220px';
    footdrop.arrow1[0].style.height = '20px';
    footdrop.arrow2[0].style.height = '0px';
        
    }

});

footdrop.dropb[1].addEventListener('click', function(e) {

    let stil = window.getComputedStyle(footdrop.secdrop1[1]);
    e.preventDefault();

    if (stil.getPropertyValue('height') === '97px') {

        footdrop.secdrop1[1].style.height = '35px';
        footdrop.arrow1[1].style.height = '0px';
        footdrop.arrow2[1].style.height = '20px';

    }

    else {
       
        footdrop.secdrop1[1].style.height = '97px';
        footdrop.arrow1[1].style.height = '20px';
        footdrop.arrow2[1].style.height = '0px';
        
    }




});

footdrop.dropb[2].addEventListener('click', function(e) {

    let stil = window.getComputedStyle(footdrop.secdrop1[2]);
    e.preventDefault();

    if (stil.getPropertyValue('height') === '160px') {

        footdrop.secdrop1[2].style.height = '35px';
        footdrop.arrow1[2].style.height = '0px';
        footdrop.arrow2[2].style.height = '20px';

    }

    else {

        footdrop.secdrop1[2].style.height = '160px';
        footdrop.arrow1[2].style.height = '20px';
        footdrop.arrow2[2].style.height = '0px';

    }
    

});

footdrop.dropb[3].addEventListener('click', function(e) {

    let stil = window.getComputedStyle(footdrop.secdrop1[3]);
    e.preventDefault();

    if (stil.getPropertyValue('height') === '220px') {

        footdrop.secdrop1[3].style.height = '35px';
        footdrop.arrow1[3].style.height = '0px';
        footdrop.arrow2[3].style.height = '20px';

    }

    else {

        footdrop.secdrop1[3].style.height = '220px';
        footdrop.arrow1[3].style.height = '20px';
        footdrop.arrow2[3].style.height = '0px';

    }

});


const lastslide = {

    slider: document.getElementById('lastslider'),
    text: document.getElementById('otext'),
    left: document.getElementById('lastarrow1'),
    right: document.getElementById('lastarrow2'),
    info: ['Privately collaborate on videos with your team', 'Drive engagement and embed anywhere',
    'Easily see how your videos are performing'],
    pics: ["img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg"],
    i: 0,
}

lastslide.left.addEventListener('click', function(e) {

    e.preventDefault();
    if (lastslide.i === 0) {

        lastslide.slider.src = lastslide.pics[2];
        lastslide.text.innerHTML = lastslide.info[2];
        lastslide.i = 2;
      
    } 

    else {

        lastslide.i--;
        lastslide.slider.src = lastslide.pics[lastslide.i];
        lastslide.text.innerHTML = lastslide.info[lastslide.i];

    }

});

lastslide.right.addEventListener('click', function(e) {

    e.preventDefault();
    if (lastslide.i === 2) {

        lastslide.slider.src = lastslide.pics[0];
        lastslide.text.innerHTML = lastslide.info[0];
        lastslide.i = 0;
        
    } 

    else {

        lastslide.i++;
        lastslide.slider.src = lastslide.pics[lastslide.i];
        lastslide.text.innerHTML = lastslide.info[lastslide.i];
       
    }

 

});