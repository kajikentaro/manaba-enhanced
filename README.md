# manaba Enhanced for Chuo

Make your manaba a little bit more comfortable.

このソフトウェアは「manaba Enhanced for Tsukuba」を中央大学向けにリビルドしたものです。
mkobayashime氏に感謝いたします。

フォーク元: https://github.com/mkobayashime/manaba-enhanced

![Screenshot](./bin/dist/thumbnail1.png)

## 機能

1. マイページに表示される課題一覧を、締切までの時間によって色分けします

    赤: 期限まであと1日  
    黄: 期限まであと3日  
    緑: 期限まであと7日

1. レポート入力画面で入力しているレポートを自動保存し、ページを閉じても消えないようにします
    * !私の環境で入力が必要なレポートが存在しなかったので未動作確認です。多分動きません（）!

1. コースニュースやコンテンツの公開期限を強調表示します

1. マイページのコースをモジュールでフィルターする機能を追加します
    * 中央大学にはこのようなタームは存在しませんが丸々残してあります。

1. 外部リンクをクリックした際の確認ダイアログを取り除きます

1. 出席コードをResponで開く右クリックメニューを追加します

## 免責事項

これは大学非公式のソフトウェアであり、中央大学とは無関係です

作者はこのソフトウェアを利用したことによるいかなる損害、トラブルに対する責任を負いません

## Development

あなたの大学がmanabaを導入しており、マイページに「未提出課題」タブが存在する場合、以下の手順で対応が可能です。

1. このレポジトリをフォークする。
1. `manifest.json`に記述されている`content_scripts`の`matches`をあなたの大学のmanabaのURLに変更する。
1. ビルドしChromeにインストールする。  
詳細は前項の[chrome-extension-cli](https://github.com/dutiyesh/chrome-extension-cli)を参照してください。

## Contribution

Suggestions and pull requests are welcomed!

## License

[MIT License](./LICENSE)