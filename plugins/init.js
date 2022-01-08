export default ({ store, $strapi}) => {
  // 「前の記事」と「次の記事」のIDを取得するために
  // 初めて表示されたタイミングで記事の一覧をstoreに保存する
  if (store.state.works) {
    return
  }
  return $strapi.find('api/works', {
    "pagination[start]": 0,
    "pagination[limit]": 9999,
    sort: ['date:desc'],
  })
    .then((res) => {
      store.commit('setWorks', res.data)
    })
    .catch(err => {
      console.error(err)
    })
}
