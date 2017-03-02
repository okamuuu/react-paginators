import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, number } from '@kadira/storybook-addon-knobs'

import { Bootstrap3ishPaginator } from '../'

class Bootstrap3ishPaginatorStory extends Component {

  constructor(props) {
    super(props)
    this.state = { current: 3 }
  }

  handleClick(page) {
    this.setState({current: page})
  }

  render() {
    return (
      <Bootstrap3ishPaginator
        current={number('current', this.state.current)}
        last={number('last', 20)}
        maxPageCount={number('max page count', 10)}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}

storiesOf('React Paginator', module)
  .addDecorator(withKnobs)
  .add('Bootstrap3ishPaginator', () => (
    <Bootstrap3ishPaginatorStory />
  ))
