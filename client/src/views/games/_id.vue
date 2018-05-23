<template>
  <div>
    <h1>{{game.title}} のページ</h1>
    <h2></h2>
    <table border="1">
      <tbody>
        <tr>
          <th>タイトル</th>
          <td>{{game.title}}</td>
        </tr>
        <tr>
          <th>ジャンル</th>
          <td>
            <span
              v-for="genre in game.genres"
              :key="genre.id"
            >{{genre.name}},</span>
          </td>
        </tr>
        <tr>
          <th>メーカー</th>
          <td>{{game.maker.name}}</td>
        </tr>
        <tr>
          <th>プラットフォーム</th>
          <td>
            <span
              v-for="platform in game.platforms"
              :key="platform.id"
            >{{platform.name}},</span>
          </td>
        </tr>
        <tr>
          <th>発売日</th>
          <td>{{game.releaseDate}}</td>
        </tr>
      </tbody>
    </table>

    <table border="1" style="margin-top: 1em">
      <tbody>
        <tr>
          <th>総レビュー数</th>
          <td>{{game.reviewCount}}</td>
        </tr>
      </tbody>
    </table>

    <table border="1" style="margin-top: 1em">
      <thead>
        <tr>
          <th>ユーザー名</th>
          <th>レビュー内容</th>
          <th>投稿日</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(review, i) in game.reviews"
          :key="`review-${i}`"
        >
          <th>{{review.author.name}}</th>
          <td>{{review.body}}</td>
          <td>{{review.publishedAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gameId: this.$route.params.id,
      game: {
        title: 'Chrono Trigger',
        description: '時空を越えるRPG',
        releaseDate: '1995/3/11',
        reviewCount: 2,
        maker: {
          name: 'スクウェア・エニックス',
        },
        genres: [
          { id: 1, name: 'ロールプレイング' },
        ],
        platforms: [
          { id: 1, name: 'SFC' },
          { id: 2, name: 'DS' },
        ],
        reviews: [
          {
            body: 'マールは俺の嫁。',
            author: {
              id: '100',
              name: 'hiropon',
            },
            publishedAt: '2001/3/9',
          },
          {
            body: '人生で一番やりこんだゲーム。6周はした。',
            author: {
              id: '101',
              name: 'pomodoroX',
            },
            publishedAt: '2000/11/1',
          },
        ],
      },
    }
  },
}
</script>
