import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.css'

export default class SearchInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchText: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // onInput() {
  //   console.warn('input on')
  //   if(this.props.onSearch){
  //     this.props.onSearch()
  //   }
  // }

  render () {
    return (
      <View className='searchInputContainer'>
        <Input
          className='searchInputItem'
          placeholderClass='searchInputPlaceHolder'
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.searchText}
          onInput={this.props.onSearch}
          confirmType='search'
        />
      </View>
    )
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
}

