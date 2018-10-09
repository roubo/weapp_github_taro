import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class About extends Component {

  config = {
    navigationBarTitleText: '说明'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>参考和使用GitHub开源社区小程序的相关数据，本小程序代码Github地址：https://github.com/roubo/weapp_github_taro.git</Text>
      </View>
    )
  }
}

