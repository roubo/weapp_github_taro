import Taro, { Component } from '@tarojs/taro'
import Index from './pages/main/index'

import './app.css'

class App extends Component {

  config = {
    pages: [
      'pages/main/index',
      'pages/about/index',
      'pages/search/index',
      'pages/detail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/main/index',
          text: '排行',
          iconPath: './asset/images/top.png',
          selectedIconPath: './asset/images/top_focus.png'
        },
        {
          pagePath: 'pages/search/index',
          text: '发现',
          iconPath: './asset/images/search.png',
          selectedIconPath: './asset/images/search_focus.png'
        },
        {
          pagePath: 'pages/about/index',
          text: '关于',
          iconPath: './asset/images/about.png',
          selectedIconPath: './asset/images/about_focus.png'
        }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
