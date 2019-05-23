# StopWatch For UECTF manager
UECTFのマネさん用ストップウォッチアプリ
随時更新予定。

更新記録
5/21
```
- 全てのストップウォッチを同時スタートするボタンを作成
- レイアウトの整理
```

4/30
```
- タイマー機能の完成
```

4/16
```
- タイマーを実装させた（仮）
```

4/14
```
- 「名前を記入」を消さなくてもよくした
- 測定する距離を選択できるようにした
- 殘り周数を表示させた
```
Next -> Androidでの動作を軽くする・Result画面を作成する

## 環境構築手順
※ 事前に Node.js と yarn　をグローバルにインストールする。

`yarn start` してしばらく経つと、下記のオプションが選べるようになる。

```
  To run the app with live reloading, choose one of:
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  • Press a for Android emulator, or i for iOS simulator.
  • Press e to send a link to your phone with email/SMS.
  • Press s to sign in and enable more options.
```
a をタイプするとAndroid、i をタイプするとiOSのシミュレータが立ち上がる。

