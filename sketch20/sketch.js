let sketchName = 'My Sketch';
window.addEventListener('load', function () {
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: "#5091a1",
        fillColor: null,
        strokeWidth: 2
    };

    Path.Rectangle([0, 0], [500, 500]);
    let background = Path.Rectangle([0, 0], [500, 500]);
    background.fillColor = "#abe0e0";
    background.strokeColor = null;

    function line() {
        let x = 0;
        let y = 0;
        let m = 100;
        let dl = 31.6;
        let rand = 0;

        let points = [];
        for (let i = 0; i < m; i++) {
            let rand_y = Math.random() * rand - rand * 0.5;
            points.push([x, y]);

            x += 500 - x;
            y += dl + rand_y;

            points.push([x, y]);

            x -= 500;
            dl -= 2;
            y += dl + rand_y;
        }

        let p = new Path(points);
        p.closed = false;
    }
    line();


    let n = 20;
    for (i = 0; i < n; i++) {
        let x = Math.random() * 500;
        let y = Math.random() * 500;

        let circle=Path.Circle([x, y], 20);
        circle.strokeColor="#ffffff"
    }




    view.draw();
});