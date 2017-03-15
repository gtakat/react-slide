import React from 'react'

const CONTENT = [

  <div className="App-slide">
    <div className="App-mainflame-full">フロントエンド勉強会<br /><br />2017-3-13<br />hotate</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">旅立ち</div>
    <div className="App-mainflame-body">
      <ul>
        <li>まずはReactの学習から始めた</li>
        <li>hk◯◯さんのオセロに触発されて五目並べを作ることに</li>
        <li>create-react-app</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">旅立ち</div>
    <div className="App-mainflame-body">
      <ul>
        <li>いったんできた</li>
        <li>demo</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">さまよい</div>
    <div className="App-mainflame-body">
      <ul>
        <li>判定ロジックが複雑になったのでテストを書きたくなった</li>
        <li>テストを試すことに</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">さまよい</div>
    <div className="App-mainflame-body">
      <ul>
        <li>jest、chai、enzymeあたりでテストを書いた</li>
        <li>音を出しているところをテストしたくなった</li>
        <ul>
          <li>テストを書いてみるも動かず</li>
          <li>PhantomJSに手を出す</li>
          <li>大はまりする</li>
          <li>ようやく動いたが・・</li>
        </ul>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">さまよい</div>
    <div className="App-mainflame-body">
      <ul>
        <li>PhantomJSがaudio未サポートだった。。</li>
        <li>とりあえずいったん満足したのでテストはここまで</li>
        <li>demo</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">さまよい</div>
    <div className="App-mainflame-body">
      <ul>
        <li>カバレッジほぼ100%にできた</li>
        <li>心残り</li>
        <ul>
          <li>エントリーポイントのテストの仕方がわからなかった</li>
        </ul>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">さまよい</div>
    <div className="App-mainflame-body">
      <ul>
        <li>Storybookにちょっと寄り道</li>
        <li>ii◯◯さんにこれ良くないっすかとか余計なことを言う</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">第２章</div>
    <div className="App-mainflame-body">
      <ul>
        <li>Reduxに突入</li>
        <li>最初は素のReduxから入った</li>
        <li>その後react-reduxへ突入</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">第２章</div>
    <div className="App-mainflame-body">
      <ul>
        <li>五目並べをredux化することに</li>
        <li>demo</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">第２章</div>
    <div className="App-mainflame-body">
      <ul>
        <li>はまったところ</li>
        <ul>
          <li>container, reducer, connect周り</li>
        </ul>
        <li>テストがぼろぼろになったので書き直し（調整）</li>
        <ul>
          <li>テストの適切な分離がまだいまいち</li>
          <li>音をだすところのテストはどこに書くのが適切か？</li>
          <li>エントリーポイントのテストのやり方は引き続き分からない</li>
        </ul>
        <li>demo</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">まとめ</div>
    <div className="App-mainflame-body">
      <ul>
        <li>いったんreact-reduxまでたどり着けた、がまだまだだなというのと</li>
        <li>フロントエンド幅広いので一つずつ潰していきたい</li>
        <li>これからもがんばる</li>
      </ul>
    </div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-full">おまけ</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-full">ところで気づいた方は<br />いますでしょうか？</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-full">このスライド</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-full">react-reduxで<br />できています!!</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-full">おわり</div>
  </div>,
]

export const MAX_PAGE = CONTENT.length - 1

const Slide = (props) => (
  CONTENT[props.page]
)

export default Slide