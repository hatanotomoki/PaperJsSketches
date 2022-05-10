let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#000000", 
        fillColor: null, 
        strokeWidth: 3 
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#ffffff"
    background.strokeColor=null

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 1000;
    let angle = Math.PI * 0.1;
    let length = 10;
    let dl = 0.8;
    let randomRange = 0;

    let points = [10];
    let theta = Math.PI * 0.25;

    for(let i=0;i<count;i++){
        points.push([x,y]);

        let rand_x=Math.random()*randomRange-randomRange*0.5;
        let rand_y=Math.random()*randomRange-randomRange*0.5;

        x+=Math.cos(theta)*length+rand_x;
        y+=Math.sin(theta)*length+rand_y;

        angle += Math.PI * 0.0001;
        theta += angle;
        length += dl ;
    }

    let p =new Path(points);
    p.closed = false;
   
view.draw();
});