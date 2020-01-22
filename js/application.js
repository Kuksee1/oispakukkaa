// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://www.oispakukkaa.com/IMG/2.png",
        "http://www.oispakukkaa.com/IMG/4.png",
        "http://www.oispakukkaa.com/IMG/8.png",
        "http://www.oispakukkaa.com/IMG/16.png",
        "http://www.oispakukkaa.com/IMG/32.png",
        "http://www.oispakukkaa.com/IMG/64.png",
        "http://www.oispakukkaa.com/IMG/128.png",
        "http://www.oispakukkaa.com/IMG/256.png",
        "http://www.oispakukkaa.com/IMG/512.png",
        "http://www.oispakukkaa.com/IMG/1024.png",
        "http://www.oispakukkaa.com/IMG/2048.png",
        "http://www.oispakukkaa.com/IMG/4096.png",
        "http://www.oispakukkaa.com/IMG/8172.png",
	"https://www.elsetge.cat/myimg/f/32-320924_wiz-khalifa-wallpaper-quotes-2013-wiz-khalifa-hd.jpg"

    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
