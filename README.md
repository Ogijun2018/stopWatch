# StopWatch For UECTF manager
UECTFのマネさん用ストップウォッチアプリ
随時更新予定。

更新記録
4/14
```
- 「名前を記入」を消さなくてもよくした
- 測定する距離を選択できるようにした
- 殘り周数を表示させた
```
Next -> 全部のストップウォッチを同時にスタートさせるボタンをつくる

4/13
```
- ストップウォッチを複数画面に表示させる（6個はさすがにラップが見えなくなるのでMAX4個にしてみた）
- 各ストップウォッチで名前をつけれるようにした
- Lapボタンを押すと最新Lapのペースで行くと5000mが何分になるか出るようにした
```
## 環境構築手順
※ 事前に Node.js と yarn　をグローバルにインストールする。

```
$ git@github.com:eishis/dekita.git
$ cd dekita
$ yarn install
$ yarn start
```

`yarn start` してしばらく経つと、下記のオプションが選べるようになる。
```
  To run the app with live reloading, choose one of:
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  • Press a for Android emulator, or i for iOS simulator.
  • Press e to send a link to your phone with email/SMS.
  • Press s to sign in and enable more options.
```
a をタイプするとAndroid、i をタイプするとiOSのシミュレータが立ち上がる。

