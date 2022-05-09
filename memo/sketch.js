let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff", 
        fillColor: "#ffffff", 
        strokeWidth: 3 
    };

    Path.Rectangle([0, 0], [500, 500])
    let background=Path.Rectangle([0, 0], [500, 500])

    createCanvas(400, 400);

    background(220);
    
    line(50, 50, 350, 350);    
   
view.draw();
});