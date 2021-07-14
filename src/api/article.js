// 封装所有与文章相关的网络请求
// 导入 myhttp
import myhttp from '../utils/myhttp'
// 封装方法：得到文章列表
export function apiGetArticleList (channelid) {
  return myhttp({
    url: '/app/v1_1/articles',
    method: 'GET',
    params: {
      channel_id: channelid,
      timestamp: Date.now(),
      with_top: 0
    }
  })
}
