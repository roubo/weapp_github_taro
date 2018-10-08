import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './ShowMarkDown.css'



export default class ShowMarkDown extends Component {

  config = {
    usingComponents: {
      wemark : '../../static/wemark/wemark'
    }
  }

  constructor(props){
    super(props)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='ShowMarkDownContainer'>
        {process.env.TARO_ENV === 'weapp' && <wemark md={this.props.md}  highlight type='wemark' />}
      </View>
    )
  }
}

ShowMarkDown.propTypes = {
  md: PropTypes.string
}

