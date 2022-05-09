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

    let q=10

    for (x=0;x<510;x+=15){
        for (y=0;y<510;y+=15){
            randx=Math.random()*q-10*0.5
            
            let a=Math.random()*5
        Path.Circle([x+randx,y+randx],a)
        }
    }
   
view.draw();
});