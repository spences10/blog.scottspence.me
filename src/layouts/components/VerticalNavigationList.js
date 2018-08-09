import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import Search from '../components/Search'
import PropTypes from 'prop-types'

class VerticalNavigationList extends Component {
  constructor(...rest) {
    super(...rest)
    this.state = {
      hits: null
    }
  }
  render() {
    const { currentSlug, edges, searchData } = this.props
    const { hits } = this.state
    console.log('====================')
    console.log(currentSlug)
    console.log('====================')
    return (
      <div>
        <Search
          data={searchData}
          onSearch={(text, hits) =>
            this.setState({
              hits: text !== '' ? hits : null
            })
          }
        />
        <nav>
          <dl>
            {edges
              .filter(
                ({ node }) =>
                  !hits ||
                  hits.filter(hit => hit.id === node.id).length > 0
              )
              .map(({ node }, index) => (
                <div key={`nav-header-wrapper-${index}`}>
                  <NavigationItem
                    depth={1}
                    value={node.frontmatter.title}
                    key={`nav-item-${index}-${node.fields.slug}`}
                    href={`${node.fields.slug}`}
                  />
                </div>
              ))}
          </dl>
        </nav>
      </div>
    )
  }
}

VerticalNavigationList.propTypes = {
  currentSlug: PropTypes.any,
  edges: PropTypes.any,
  searchData: PropTypes.any
}

export default VerticalNavigationList
