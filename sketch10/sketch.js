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

    let count=10;
    let x=0;
    let y=0;
    let w=100;
    let t=100;
    let rec=[];

    for(i=0;i<count;i++){
        rec.push([x,y]);
        Path.Rectangle([x,y],[w,t]);

        x+=w;
        y+=t;
    }


   
view.draw();
});