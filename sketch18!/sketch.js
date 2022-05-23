let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#000000", 
        fillColor: null, 
        strokeWidth: 0.5
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])
    background.fillColor="#ffffff"
    background.strokeColor=null

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 1000;
    let angle = 30;
    let length = 0;
    let dl = 1;
    let randomRange = 0;

    let theta = 10;

    for(let i=0;i<count;i++){

        let rand_x=Math.random()*randomRange-randomRange*0.5;
        let rand_y=Math.random()*randomRange-randomRange*0.5;

        x+=Math.cos(theta)*length+rand_x;
        y+=Math.sin(theta)*length+rand_y;

        angle += 0.0001;
        theta += angle;
        length += dl ;
        Path.Circle([x,y],50);
    }
   
   
view.draw();
});