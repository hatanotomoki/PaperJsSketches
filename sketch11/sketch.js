let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#000000",
        fillColor: "#000000",
        strokeWidth: 5
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#db2100"
    background.strokeColor = null

    let x = 0;
    let y = 0;

    let count = 50;
    for (let i = 0; i < count; i++) {
        Path.Line([x, 0], [x, 500]);
        Path.Line([0, y], [500, y]);
        x += i;
        y += i;
    }

    let xx = 500;
    let yy = 500;
    for (let i = 0; i < count; i++) {
        Path.Line([xx, 0], [xx, 500]);
        Path.Line([0, yy], [500, yy]);
        xx += i;
        yy += i;
    }
    // let line = Path.Line([xx, 0], [xx, 500]);
    // let line2 = Path.Line([0, yy], [500, yy]);
    // line.translate = (100,100);
    view.draw();
});