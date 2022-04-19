// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: '#fbff00', // 塗りの色
        strokeWidth: 1 // 線の幅
    };
   Path.Rectangle([0,0],[500,500])

   for (let a = 10; a<500; a += 20)[Path.Line([a,0],[a,500])]
   
   Path.Line([a,0],[a,500])
   let line = Path.Line([a,0],[a,500])
   line.strokeColor= '#ff0000' 
    // 画面を描く。
    view.draw();
});