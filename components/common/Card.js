import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  padding: 10px;
  position: relative;
  cursor: pointer;
`

const CardImageWrap = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardContents = styled.div`
  font-size: 13px;
  color: #212121;
  
  & p {
    line-height: 1.2;
    margin-bottom: 0;
  }
  
  & p:last-child {
    font-size: 17px;
    font-weight: bold;
    padding-top: 5px;
  }
`

const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-top: 5px;
`

const Card = ({data}) => {
  return (
    <CardWrap>
      <CardImageWrap>
        <img src={data.imagePath}/>
      </CardImageWrap>
      <CardContents>
        <CardTitle>
          {data.productName}
        </CardTitle>
        <p>
          {data.price}원
        </p>
      </CardContents>
    </CardWrap>
  )
}

export default Card;
