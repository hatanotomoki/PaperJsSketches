// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#ccbb49', // 線の色
        fillColor: '#283382', // 塗りの色
        strokeWidth: 1 // 線の幅
    };
   Path.Rectangle([0,0],[500,500])

   for(let a=0;a<500;a+=25)
   for(let b=0;b<500;b+=25)
   {let lineA = Path.Line([a,0],[a,500])
    let lineB=Path.Line([a+5,0],[a+5,500])
    let lineC=Path.Line([0,a],[500,a])
    let lineD=Path.Line([0,a+5],[500,a+5])
    let lineE=Path.Line([a+15,0],[a+15,500])
    let lineF=Path.Line([0,a+15],[500,a+15])

    lineA.strokeColor=lineB.strokeColor=lineC.strokeColor=lineD.strokeColor='#ffffff';
    lineE.strokeWidth=lineF.strokeWidth=3;
    }
   
    // 画面を描く。
    view.draw();
});