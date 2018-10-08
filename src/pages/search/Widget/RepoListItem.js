import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './RepoListItem.css'
import StarIcon from '../../../asset/images/star.png'
import WatchIcon from '../../../asset/images/watch.png'
import ForkIcon from '../../../asset/images/fork.png'

export default class RepoListItem extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {
  }

  componentWillUnmount () { }

  onItemClick () {
    Taro.navigateTo({
      url: '/pages/detail/index?url=' + this.props.url
    })
  }
  render () {
    return (
      <View className='RepoListItemContainer' onClick={this.onItemClick}>
        <View className='RepoListItemTitle'>
          <Image className='ItemIcon' src={this.props.icon} />
          <Text className='ItemTitle'>{this.props.name}</Text>
        </View>
        <View className='RepoListItemInfo'>
            <Image className='ItemStarIcon' src={StarIcon} />
            <Text className='ItemStarCount'>{this.props.star}</Text>
            <Image className='ItemWatchIcon' src={WatchIcon} />
            <Text className='ItemWatchCount'>{this.props.watch}</Text>
            <Image className='ItemForksIcon' src={ForkIcon} />
            <Text className='ItemForksCount'>{this.props.forks}</Text>
        </View>
        <View className='RepoListItemContent'>
          <Text className='ItemDesc'>{this.props.description}</Text>
          <Text className='ItemLang'>{this.props.lang}</Text>
        </View>
      </View>
    )
  }
}


