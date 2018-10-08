import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.css'
import devapis from '../../apis/devapis'
import ShowMarkDown from '../../components/ShowMarkDown/ShowMarkDown'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null,
      readme: null
    }
  }
  config = {
    navigationBarTitleText: 'detail'
  }

  componentWillMount () {
    let repo = this.$router.params
    devapis.getRepoDetail(repo.url, {
      success: (res) => {
        this.setState({
          detail: res
        })
      }
    })
    devapis.getRepoDetail(repo.url+'/contents/README.md', {
      success: (res) => {

        if(decodeURIComponent(escape(atob(res.content))).length > 100000){
          this.setState({
            readme: decodeURIComponent(escape(atob(res.content))).substr(0, 9999) + ' ...'
          })
        }else {
          this.setState({
            readme: decodeURIComponent(escape(atob(res.content)))
          })
        }


      }
    })
  }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='DetailContainer'>
        <View className='DetailHeader'>
          <Image src={this.state.detail.owner.avatar_url} className='DetailIcon' />
          <Text className='DetailTitle'>{this.state.detail.name}</Text>
          <Text className='DetailDescription'>{this.state.detail.description}</Text>
        </View>
        <View className='DetailReadMe'>
          <ShowMarkDown
            md={this.state.readme}
          />
        </View>
      </View>
    )
  }
}

