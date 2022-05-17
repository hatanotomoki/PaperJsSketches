let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: null,
        fillColor: "#ffee00",
        strokeWidth: 3
    };
    Path.Rectangle([0, 0], [500, 500])
    let background = Path.Rectangle([0, 0], [500, 500])
    background.fillColor = "#eb3609"
    background.strokeColor = null;


    let count = 50;

    for (i = 0; i < count; i++) {
        let x = Math.random() * 600 - 100;
        let y = Math.random() * 600 - 100;

        let rec = Path.Rectangle([x, y], [80, 10]);
        rec.rotate(Math.random() * 180);
    }

    view.draw();
});