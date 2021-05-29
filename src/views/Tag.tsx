import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import { Center } from "components/Center";
import {Space} from "../components/Space";

type Params = {
    id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
background: white;
  padding: 0 16px;
  margin-top: 16px;
`

const Tag: React.FC = (props) => {
    const {findTag} = useTags()
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            <InputWrapper>
                <Input type="text" placeholder="标签名" label="标签名"/>
            </InputWrapper>
            <div>
                <Space/>
                <Space/>
                <Space/>
                <Center>
                    <Button>删除标签</Button>
                </Center>
            </div>
        </Layout>
    )
}
export {Tag}