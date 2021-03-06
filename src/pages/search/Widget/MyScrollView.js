import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './MyScrollView.css'
import RepoListItem from './RepoListItem'

export default class MyScrollView extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {
  }

  componentWillUnmount () { }

  onScroll() {
    // console.warn("onScroll")
  }

  onScrollToUpper() {
    // console.warn("onScrollToUpper")
  }

  onScrollToLower() {
    // console.warn('onScrollToLower')
  }

  render () {
    return (
      <View className='MyScrollViewContainer'>
        <ScrollView
          className='MyScrollView'
          style={process.env.TARO_ENV === 'weapp' ? 'height: 800px;' : ''}
          scrollY
          scrollWithAnimation
          enableBackToTop
          scrollTop={0}
          lowerThreshold='10'
          upperThreshold='20'
          onScroll={this.onScroll}
          onScrollToUpper={this.onScrollToUpper}
          onScrollToLower={this.onScrollToLower}
        >
          <Text className='Placeholder'> xxx </Text>
          <View>
          {
            this.props.repoList.length === 0 ? <View /> : this.props.repoList.map((item, index) => {
              return (
                <View key={String(index)}>
                  <RepoListItem
                    icon={item.owner.avatar_url}
                    name={item.name}
                    description={item.description}
                    star={item.stargazers_count}
                    forks={item.forks_count}
                    watch={item.watchers_count}
                    lang={item.language}
                    url={item.url}
                  />
                </View>
              )
            })
          }
          </View>
        </ScrollView>
      </View>
    )
  }
}


