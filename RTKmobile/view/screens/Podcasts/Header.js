import React, { useState } from 'react'
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components'
import { sidebarImage } from '../../images'

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.15);
`

const Input = styled(TextInput)`
  background: rgba(0, 0, 0, 0.3);
  width: 259px;
  height: 40px;
  border-radius: 20px;
  color: #ffffff;
  border-width: 1px;
  margin-top: 10px;
`

const SidebarButton = styled(TouchableOpacity)`
  width: 24px;
  height: 20px;
  margin-top: 20px;
`

const SidebarImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const Header = () => {
  const [borderInput, setBorderInput] = useState('rgba(0, 0, 0, 0.3)')
  // const [inputValue, setInputValue] = useState('test')

  const Focus = () => {
    setBorderInput('#8B00FF')
  }
  const Blur = () => {
    setBorderInput('rgba(0, 0, 0, 0.3)')
  }

  return (
    <Wrapper>
      <SidebarButton>
        <SidebarImage source={sidebarImage} />
      </SidebarButton>
      <Input
        onFocus={() => Focus()}
        onBlur={() => Blur()}
        style={{ borderColor: borderInput }}
      />
    </Wrapper>
  )
}

export default Header
