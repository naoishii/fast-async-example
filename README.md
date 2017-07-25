# fast-async example
async/awaitをregeneratorではなく、fast-asyncで実現するサンプルです。  

https://github.com/MatAtBread/fast-async

## usage
```
npm install
npm run start
node build/bundle.js
```

## 設定内容
### babel
* transform-regeneratorを使わないように設定
* transform-async-to-generatorを使わないように設定
  * async/awaitがregeneratorに変換されることを防ぎます
* fast-asyncを使うように設定

### webpack
* regenerator-runtimeをnull-loaderで置き換え
  * regenerator-runtimeはpolyfill側にあるため、babelの設定で除去することはできない
  

## 確認する点
* bundle.jsの中に`regenerator`が登場しないこと
* bundle.jsの中でジェネレーターが変換されず、`function*`のままであること
* 古いnodeやブラウザではジェネレーターを解釈できずエラーとなること
  * async/awaitは処理されます。


