let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: null,
        fillColor: "#ffffff",
        strokeWidth: 2
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#000000"
    background.strokeColor = null

    let n = 5;
    let r=100;
    
    for (i = 0; i < n; i++) {
        let rand_x=250+Math.random()*r-r*0.5;
        let rand_y=250+Math.random()*r-r*0.5;
        
        Path.Circle([rand_x, rand_y], 50);
        let star=Path.Star([rand_x,rand_y],5,20,100);
        star.rotate(Math.random()*72);
    }

    view.draw();
});