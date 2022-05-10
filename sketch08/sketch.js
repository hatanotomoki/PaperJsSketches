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

    for(x=0;x<510;x+=100){
        for(a=0;a<510;a+=100){
            
            let Q=new Path([x,0],[a,500])
        }
    }
   
view.draw();
});