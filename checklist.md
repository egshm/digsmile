# 品質チェックリスト

## トップページ
| No. | チェック項目 | 結果 | 日付 | コメント |
|:---:|:---|:---:|:---:|:---|
|1|デザインカンプとの表示ずれが無いこと<br><small>※ Chrome拡張機能Perfect Pixelで確認</small>|N/A|N/A||
|2|500KBを超えるリソースが無いこと<br><small>※1 検証ツールのNetworkタブで確認</small><br><small>※2 PC/SPそれぞれで確認（画像出し分けを考慮）</small>|OK|2026/4/28||
|3|横スクロールしないこと|OK|2026/4/28||
|4|フォントが合っていること（`font-family`）<br><small>※ 検証ツールの[要素]-[計算済み]-[レンダリングフォント]で確認</small>|OK|2026/4/28||
|5|フォントの色が適切であること（`color`）|OK|2026/4/28||
|6|フォントサイズが適切であること（`font-size`）|OK|2026/4/28||
|7|文章の行間が適切であること（`line-height`）|OK|2026/4/28||
|8|余白が適切であること（`margin`/`padding`）|OK|2026/4/28||
|9|Consoleエラーが発生していないこと<br><small>※ シークレットブラウザで確認すること（拡張機能のJSエラーを拾わないようにするため）</small>|OK|2026/4/28||
|10|ページ内外リンクが適切に動作すること|OK|2026/4/28||
|11|Tabキー操作でフォーカス中の要素が分かりやすく表示されること|OK|2026/4/28||
|12|フォームの必須項目がすべて入力されるまで送信できないこと|N/A|N/A|フォームが無いため|
|13|フォームの入力内容が適切に送信されること|N/A|N/A|フォームが無いため|
|14|ハンバーガーメニューが見切れた時に縦スクロールできること|OK|2026/4/28||
|15|`Title`と`Meta Description`が設定されていること<br><small>※ デスクトップアプリScreamingfrogにURLを入力して確認すること</small>|OK|2026/4/28||
|16|ファビコンが適切に表示されていること|OK|2026/4/28||
|17|OGPが適切に設定されていること|N/A|N/A|OGPを設定していないため|
|18|HTML/CSSでコーディングエラーが発生しないこと<br><small>※ The W3C Markup Validation Serviceを使用すること</small>|NG|2026/4/28|HTMLで`Warning: Empty heading.`が発生する。|
|19|レスポンシブチェック<br><small>※ Chrome拡張機能Responsive Viewerで確認</small>||||
||- Medium Screen（1024 × 800）|OK|2026/4/28||
||- iPad（768 × 1024）|OK|2026/4/28||
||- iPad Pro（834 × 1112）|OK|2026/4/28||
||- iPhone 6.7.8（375 × 667）|OK|2026/4/28||
||- iPhone XR（414 × 896）|OK|2026/4/28||
||- Laptop1（1440 × 900）|OK|2026/4/28||
||- Laptop2（1920 × 1080）|OK|2026/4/28||
|20|クロスブラウザチェック||||
||- macOS / Chrome|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Firefox|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Safari|N/A|N/A|MacBookを入手でき次第、確認予定|
||- Windows / Chrome|OK|2026/4/28||
||- Windows / Firefox|OK|2026/4/28||
||- Windows / Microsoft Edge|OK|2026/4/28||
||- Windows / Safari（Playwrightで確認）|OK|2026/4/28||
||- iOS / Chrome|OK|2026/4/28||
||- iOS / Firefox|OK|2026/4/28||
||- iOS / Safari|OK|2026/4/28||
||- Android / Chrome|N/A|N/A|Android端末を入手でき次第、確認予定|

## Aboutページ
| No. | チェック項目 | 結果 | 日付 | コメント |
|:---:|:---|:---:|:---:|:---|
|1|デザインカンプとの表示ずれが無いこと<br><small>※ Chrome拡張機能Perfect Pixelで確認</small>|N/A|N/A||
|2|500KBを超えるリソースが無いこと<br><small>※1 検証ツールのNetworkタブで確認</small><br><small>※2 PC/SPそれぞれで確認（画像出し分けを考慮）</small>|OK|2026/4/28||
|3|横スクロールしないこと|OK|2026/4/28||
|4|フォントが合っていること（`font-family`）<br><small>※ 検証ツールの[要素]-[計算済み]-[レンダリングフォント]で確認</small>|OK|2026/4/28||
|5|フォントの色が適切であること（`color`）|OK|2026/4/28||
|6|フォントサイズが適切であること（`font-size`）|OK|2026/4/28||
|7|文章の行間が適切であること（`line-height`）|OK|2026/4/28||
|8|余白が適切であること（`margin`/`padding`）|OK|2026/4/28||
|9|Consoleエラーが発生していないこと<br><small>※ シークレットブラウザで確認すること（拡張機能のJSエラーを拾わないようにするため）</small>|OK|2026/4/28||
|10|ページ内外リンクが適切に動作すること|OK|2026/4/28||
|11|Tabキー操作でフォーカス中の要素が分かりやすく表示されること|OK|2026/4/28||
|12|フォームの必須項目がすべて入力されるまで送信できないこと|N/A|N/A|フォームが無いため|
|13|フォームの入力内容が適切に送信されること|N/A|N/A|フォームが無いため|
|14|ハンバーガーメニューが見切れた時に縦スクロールできること|OK|2026/4/28||
|15|`Title`と`Meta Description`が設定されていること<br><small>※ デスクトップアプリScreamingfrogにURLを入力して確認すること</small>|OK|2026/4/28||
|16|ファビコンが適切に表示されていること|OK|2026/4/28||
|17|OGPが適切に設定されていること|N/A|N/A|OGPを設定していないため|
|18|HTML/CSSでコーディングエラーが発生しないこと<br><small>※ The W3C Markup Validation Serviceを使用すること</small>|NG|2026/4/28|HTMLで`Warning: Empty heading.`が発生する。|
|19|レスポンシブチェック<br><small>※ Chrome拡張機能Responsive Viewerで確認</small>||||
||- Medium Screen（1024 × 800）|OK|2026/4/28||
||- iPad（768 × 1024）|OK|2026/4/28||
||- iPad Pro（834 × 1112）|OK|2026/4/28||
||- iPhone 6.7.8（375 × 667）|OK|2026/4/28||
||- iPhone XR（414 × 896）|OK|2026/4/28||
||- Laptop1（1440 × 900）|OK|2026/4/28||
||- Laptop2（1920 × 1080）|OK|2026/4/28||
|20|クロスブラウザチェック||||
||- macOS / Chrome|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Firefox|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Safari|N/A|N/A|MacBookを入手でき次第、確認予定|
||- Windows / Chrome|OK|2026/4/28||
||- Windows / Firefox|OK|2026/4/28||
||- Windows / Microsoft Edge|OK|2026/4/28||
||- Windows / Safari（Playwrightで確認）|OK|2026/4/28||
||- iOS / Chrome|OK|2026/4/28||
||- iOS / Firefox|OK|2026/4/28||
||- iOS / Safari|OK|2026/4/28||
||- Android / Chrome|N/A|N/A|Android端末を入手でき次第、確認予定|

## Contactページ
| No. | チェック項目 | 結果 | 日付 | コメント |
|:---:|:---|:---:|:---:|:---|
|1|デザインカンプとの表示ずれが無いこと<br><small>※ Chrome拡張機能Perfect Pixelで確認</small>|N/A|N/A||
|2|500KBを超えるリソースが無いこと<br><small>※1 検証ツールのNetworkタブで確認</small><br><small>※2 PC/SPそれぞれで確認（画像出し分けを考慮）</small>|OK|2026/4/28||
|3|横スクロールしないこと|OK|2026/4/28||
|4|フォントが合っていること（`font-family`）<br><small>※ 検証ツールの[要素]-[計算済み]-[レンダリングフォント]で確認</small>|OK|2026/4/28||
|5|フォントの色が適切であること（`color`）|OK|2026/4/28||
|6|フォントサイズが適切であること（`font-size`）|OK|2026/4/28||
|7|文章の行間が適切であること（`line-height`）|OK|2026/4/28||
|8|余白が適切であること（`margin`/`padding`）|OK|2026/4/28||
|9|Consoleエラーが発生していないこと<br><small>※ シークレットブラウザで確認すること（拡張機能のJSエラーを拾わないようにするため）</small>|OK|2026/4/28||
|10|ページ内外リンクが適切に動作すること|OK|2026/4/28||
|11|Tabキー操作でフォーカス中の要素が分かりやすく表示されること|OK|2026/4/28||
|12|フォームの必須項目がすべて入力されるまで送信できないこと|OK|2026/4/28||
|13|フォームの入力内容が適切に送信されること|OK|2026/4/28||
|14|ハンバーガーメニューが見切れた時に縦スクロールできること|OK|2026/4/28||
|15|`Title`と`Meta Description`が設定されていること<br><small>※ デスクトップアプリScreamingfrogにURLを入力して確認すること</small>|OK|2026/4/28|||
|16|ファビコンが適切に表示されていること|OK|2026/4/28||
|17|OGPが適切に設定されていること|N/A|N/A|OGPを設定していないため|
|18|HTML/CSSでコーディングエラーが発生しないこと<br><small>※ The W3C Markup Validation Serviceを使用すること</small>|NG|2026/4/28|HTMLで`Warning: Empty heading.`が発生する。|
|19|レスポンシブチェック<br><small>※ Chrome拡張機能Responsive Viewerで確認</small>||||
||- Medium Screen（1024 × 800）|OK|2026/4/28||
||- iPad（768 × 1024）|OK|2026/4/28||
||- iPad Pro（834 × 1112）|OK|2026/4/28||
||- iPhone 6.7.8（375 × 667）|OK|2026/4/28||
||- iPhone XR（414 × 896）|OK|2026/4/28||
||- Laptop1（1440 × 900）|OK|2026/4/28||
||- Laptop2（1920 × 1080）|OK|2026/4/28||
|20|クロスブラウザチェック||||
||- macOS / Chrome|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Firefox|N/A|N/A|MacBookを入手でき次第、確認予定|
||- macOS / Safari|N/A|N/A|MacBookを入手でき次第、確認予定|
||- Windows / Chrome|OK|2026/4/28||
||- Windows / Firefox|OK|2026/4/28||
||- Windows / Microsoft Edge|OK|2026/4/28||
||- Windows / Safari（Playwrightで確認）|OK|2026/4/28||
||- iOS / Chrome|OK|2026/4/28||
||- iOS / Firefox|OK|2026/4/28||
||- iOS / Safari|OK|2026/4/28||
||- Android / Chrome|N/A|N/A|Android端末を入手でき次第、確認予定|
