var demo = {};
demo.r = null; // Raphael JS container
demo.g = null; // Our SVG group
demo.info = null;
demo.infoContent = {
    remove: 'Group removed from Raphael JS canvas',
    translate: 'Group translated',
    rotate: 'Group rotated',
    scale: 'Group scaled',
    push: 'Elements added to the group',
    getAttr: '',
    toFront: 'Group placed on top of all SVG elements',
    clipPath: 'Created a clip path in the shape of a circle. Content outside of the circle is not visible.',
    animate: 'Animates horizontal position. Optional callback on animation end'
};
demo.randomElements = function(){
    var arrayOfElements = [];
    for(i=0;i<5;i++){
        var randomX = Math.random()*640,
            randomY = Math.random()*280;
        arrayOfElements.push(demo.r.text(randomX,randomY,'Text '+ i + '').attr({fill:'#f00','font-size':18}));
    }
    return arrayOfElements
}
var init = function(){
    demo.r = Raphael('container',640,280);
    demo.info = document.getElementById('info');
};
if(window.attachEvent){
    window.attachEvent('onload', function load(event){
        window.detachEvent('load', load);
        init()
    })
}else{
    window.addEventListener('load', function load(event){
        window.removeEventListener("load", load, false);
        init()
    },false);
}


/* Available methods

 * group.remove
 * group.translate
 * group.rotate
 * group.scale
 * group.push
 * group.getAttr
 * group.toFront
 * group.clipPath
 * group.animate

 */

demo.group = function(){
    demo.r.clear();
    var randomElements = [];
    for(i=0;i<10;i++){
        var randomX = 100+Math.random()*540,
            randomY = 80+Math.random()*200,
            randomRadius = Math.random()*15+5;
        randomElements.push(demo.r.circle(randomX,randomY,randomRadius).attr({fill:'#a30000',stroke:'none'}));
    }
    demo.g = new demo.r.group('container',randomElements);
    demo.info.innerHTML = 'Group created';
    demo.info.style.display = 'block';
};

demo.remove = function(){
    if(null==demo.g)return!1; // return false if the group doesn't exist

    demo.g.remove();
    demo.g = null;
    demo.info.innerHTML = demo.infoContent['remove'];
};

demo.translate = function(){
    if(null==demo.g)return!1;

    demo.g.translate(50,75); // translate x,y
    demo.info.innerHTML = demo.infoContent['translate'];
};

demo.rotate = function(){
    if(null==demo.g)return!1;

    demo.g.rotate(10,15,45); // rotate x,y,z
    demo.info.innerHTML = demo.infoContent['rotate'];
};

demo.scale = function(){
    if(null==demo.g)return!1;

    demo.g.scale(.3,1.2); // scale x,y
    demo.info.innerHTML = demo.infoContent['scale'];
};

demo.push = function(){
    if(null==demo.g)return!1;

    var randomElements = demo.randomElements();
    demo.g.push(randomElements[0],randomElements[3]);
    demo.info.innerHTML = demo.infoContent['push'];
};

demo.getAttr = function(){
    if(null==demo.g)return!1;

    demo.info.innerHTML = '<p>Element attributes:</p>'
    demo.info.innerHTML += '<p>'+JSON.stringify(demo.g.getAttr('translate'))+'</p>';
    demo.info.innerHTML += '<p>'+JSON.stringify(demo.g.getAttr('rotate'))+'</p>';
    demo.info.innerHTML += '<p>'+JSON.stringify(demo.g.getAttr('scale'))+'</p>';
};

demo.toFront = function(){
    if(null==demo.g)return!1;

    demo.g.toFront();
    demo.info.innerHTML = demo.infoContent['toFront'];
};

demo.clipPath = function(){
    if(null==demo.g)return!1;

    demo.g.clipPath(demo.r.circle(225,125,100));
    demo.info.innerHTML = demo.infoContent['clipPath'];
};

demo.animate = function(){
    if(null==demo.g)return!1;

    demo.g.animate({x:60,y:120},1000,function(){
        demo.info.innerHTML = demo.infoContent['animate'];
    });
};