let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff", 
        fillColor: null, 
        strokeWidth: 3
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#000000"
    background.strokeColor=null

    let s=50

    for(x= -110;x<610;x+=100){
        for(a= -110;a<610;a+=100){

            let randx=Math.random()*s-s*0.5
            
            let Q=new Path([x+randx,0],[a+randx,500])
        }
    }
   
view.draw();
});