let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff", 
        fillColor: "#ffffff", 
        strokeWidth: null 
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#000000"
    background.strokeColor=null

    let r=10
    
    for (x=0;x<510;x+=10){
        for (y=0;y<510;y+=10){
            rand=Math.random()*r-r*0.5
            let a=Math.random()*2
        Path.Circle([x+rand,y+rand],a)
        }
    }
    
    let r2=100

    for(s=0;s<520;s+=170){
        for(d=0;d<520;d+=170){
            rand2=Math.random()*r2-r2*0.5
            
           let star= Path.Star([s+rand2,d+rand2],4,2,30)
           star.rotate(45)
        }
    }
   
view.draw();
});