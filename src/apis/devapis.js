import Taro from '@tarojs/taro'
import Tools from '../utils/Tools'


let RepoListUrl = 'https://python.0x2048.com/v1/trending?since=daily'
let RepoSearchUrl = 'https://python.0x2048.com/v1/repos/search'
let RepoDetailUrl = 'https://python.0x2048.com/v1/repos'

const getRepoList = (page, callback) => {
  Taro.request({
    url: RepoListUrl
  }).then(res => {
    callback.success(res.data)
  }).catch(err => {
    callback.fail(err)
  })
}

const searchRepo = (keyword, callback) => {
  Taro.request({
    url: RepoSearchUrl + '?q=' + keyword
  }).then(res => {
    callback.success(res.data.items)
  }).catch(err => {
    callback.fail(err)
  })
}

const getRepoDetail = (repo, callback) => {
  Taro.request({
    url: RepoDetailUrl + '?github=' + repo
  }).then(res => {
    callback.success(res.data)
  }).catch(err => {
    callback.fail(err)
  })
}
const devapis = {
  getRepoList,
  searchRepo,
  getRepoDetail
}

export default devapis
