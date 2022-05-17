let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);
    
    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#000000"
    background.strokeColor=null


    project.currentStyle = {
        strokeColor: "#ffcc00", 
        fillColor: null, 
        strokeWidth: 2 
    };

    
    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 1000;
    let angle = 10;
    let length = 0;
    let dl = 7;
    let randomRange = 0;

    let points = [];
    let theta = 0;

    for(let i=0;i<count;i++){
        points.push([x,y]);

        let rand_x=Math.random()*randomRange-randomRange*0.5;
        let rand_y=Math.random()*randomRange-randomRange*0.5;

        x+=Math.cos(theta)*length+rand_x;
        y+=Math.sin(theta)*length+rand_y;

        angle += 0.001;
        theta += angle;
        length += dl ;
    }

    let p =new Path(points);
    p.closed = false;
   
view.draw();
});