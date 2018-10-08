import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MyScrollView from './Widget/MyScrollView'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'CodeTop'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <MyScrollView />
      </View>
    )
  }
}

