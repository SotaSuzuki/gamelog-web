<template>
  <div>
    <h1>{{game.title}} のページ</h1>
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
        maker: {},
        genres: [],
      },
    }
  },

  created () {
    this.fetchGame()
  },

  methods: {
    async fetchGame () {
      try {
        const response = await this.$http.get(`/games/${this.gameId}`)
        // NOTE このあたりの実装は ORM 使ってなんとかすべき
        this.game = Object.assign(this.game, response.data.game)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
