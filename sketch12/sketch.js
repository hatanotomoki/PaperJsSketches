let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#ffffff",
        fillColor: null,
        strokeWidth: 2
    };

    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#325285"
    background.strokeColor = null

    let m = 70;
    for (i = 0; i < m; i++) {
        let x = Math.random() * 500;
        let y = Math.random() * 500;
        Path.Line([x, 0], [y, 500]);
        Path.Line([0, y], [500, x]);
    }


    view.draw();
});