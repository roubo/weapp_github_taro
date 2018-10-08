import Taro, { Component } from '@tarojs/taro'
import { View , Text} from '@tarojs/components'
import './index.css'
import SearchInput from "../../components/SearchInput/index";
import MyScrollView from './Widget/MyScrollView'
import devapis from '../../apis/devapis'

export default class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      RepoList : []
    }
  }
  config = {
    navigationBarTitleText: 'search'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onSearch (event) {
    console.warn('searct' + event.target.value)
    devapis.searchRepo(String(event.target.value), {
      success: (res) => {
        this.setState({
          RepoList: res
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
  render () {
    return (
      <View className='searchContainer'>
        <Text className='Placeholder' >xxxx</Text>
        <SearchInput
          placeholder='搜索'
          onSearch={this.onSearch}
        />
        <View className='searchContent'>
          <MyScrollView
            repoList={this.state.RepoList}
          />
        </View>
      </View>
    )
  }
}

