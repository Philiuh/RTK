import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { likeImage, unlikeImage } from '../../images'

const PodcastElement = styled(View)`
  background-color: #1c122e;
  width: 100%;
  margin-left: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  padding: 20px 0px;
`

const PodcastInfo = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Wrapper = styled(View)`
  padding-left: 20px;
  width: 100%;
`
const Inner = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Container = styled(Inner)`
  justify-content: space-between;
`

const PodcastNumber = styled(Text)`
  color: #ffffff;
  font-family: Gramatika-Regular;
  font-size: 13px;
  opacity: 0.4;
  text-transform: uppercase;
`

const PodcastTitle = styled(Text)`
  color: #ffffff;
  font-family: Gramatika-Medium;
  font-size: 20px;
  opacity: 0.8;
  width: 35%;
`

const LikesCount = styled(Text)`
  display: flex;
  color: #ffffff;
  font-family: Gramatika-Regular;
  font-size: 12px;
  opacity: 0.3;
`

const PodcastImage = styled(Image)`
  width: 95px;
  height: 95px;
  border-radius: 50;
`
const LikesImage = styled(Image)`
  width: 15px;
  height: 15px;
`

const Podcast = ({
  image,
  id,
  title,
  likes,
  tags,
  url
}) => {
  return (
    <PodcastElement>
      <PodcastInfo>
        <PodcastImage source={{uri:`http://10.0.2.2:3000/${image}`}} />
        <Wrapper>
          <Container>
            <PodcastNumber>Выпуск {id}</PodcastNumber>
            <Inner>
              <LikesCount>{likes}</LikesCount>
              <TouchableOpacity>
                <LikesImage source={unlikeImage} />
              </TouchableOpacity>
            </Inner>
          </Container>
          <PodcastTitle>{title}</PodcastTitle>
        </Wrapper>
      </PodcastInfo>
    </PodcastElement>
  )
}

export default Podcast
