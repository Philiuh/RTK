import React, { useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Podcast from './Podcast'
import Header from './Header'
import styled from 'styled-components'
import { getPodcasts, requestPodcasts } from '../../../modules/podcasts'
import { connect } from 'react-redux'

const Wrapper = styled(View)`
  background-color: #1c122e;
`

const PodcastsList = ({ podcasts: { data }, requestPodcasts }) => {
  useEffect(() => {
    requestPodcasts()
  }, [])

  return (
    <Wrapper>
      <Header />
      <ScrollView>
        {data &&
          data.map(({ id, title, image, likes, tags, url }) => (
            <Podcast
              key={id}
              id={id}
              title={title}
              image={image}
              likes={likes}
              tags={tags}
              url={url}
            />
          ))}
      </ScrollView>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return { podcasts: getPodcasts(state) }
}

export default connect(
  mapStateToProps,
  { requestPodcasts },
)(PodcastsList)
