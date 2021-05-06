import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`

`
const NotesSection = styled.section`
`

const CategorySection = styled.section`
`

const NumberPadSection = styled.section`
`
function Money() {
  return (
    <Layout>
        <TagsSection>
            <ol>
                <li>衣服</li>
                <li>住房</li>
                <li>餐饮</li>
                <li>交通</li>
            </ol>
            <button>新增标签</button>
        </TagsSection>
        <NotesSection>
            <span>备注</span>
            <input type="text"/>
        </NotesSection>
        <CategorySection>
            <ul>
                <li>支出</li>
                <li>收入</li>
            </ul>
        </CategorySection>
        <NumberPadSection>
            <div>100</div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </div>
        </NumberPadSection>
    </Layout>
  );
}

export default Money;
