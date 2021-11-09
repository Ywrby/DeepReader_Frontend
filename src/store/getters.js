const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  username: state => state.user.username,
  sex: state => state.user.sex,
  nation: state => state.user.nation,
  majorName: state => state.major.majorName,
  clsNo: state => state.major.clsNo,
  college: state => state.major.college,
  bookId: state => state.major.bookId,
  bookName: state => state.major.bookName,
  author: state => state.major.author,
  publishingHouse: state => state.major.publishingHouse,
  publishDate: state => state.major.publishDate,
  pages: state => state.major.pages,
  ISBN: state => state.major.ISBN,
  price: state => state.major.price,
  briefIntroduction: state => state.major.briefIntroduction,
  authorIntroduction: state => state.major.authorIntroduction,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
