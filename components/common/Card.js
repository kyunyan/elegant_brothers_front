import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  min-width: 25%;
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
  
  & span.product__sale-price{
    padding-right: 8px;
    font-weight: 800;
    font-size: 16px;
    color: #fa622f;
    line-height: 20px;
  }
  
  & p.product__price {
    font-size: 17px;
    font-weight: bold;
    padding-top: 10px;
  }
  
  & p.product__basic-price {
    padding-top: 5px;
    font-size: 14px;
    color: #999;
    line-height: 18px;
    text-decoration: line-through;
  }
`

const CardTitle = styled.p`
  font-size: 16px;
  padding-top: 15px;
  line-height: 23px;
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

        {
          data.salePrice
            ?
            <>
              <p className="product__price">
                <span className="product__sale-price">{data.salePrice}%</span>
                {(Math.round(data.price - (data.price * data.salePrice / 100))).toLocaleString('ko-KR')}원
              </p>
              <p className="product__basic-price">{data.price.toLocaleString('ko-KR')}원</p>
            </>
            :
            <>
              <p className="product__price">{data.price.toLocaleString('ko-KR')}원</p>
            </>
        }
      </CardContents>
    </CardWrap>
  )
}

export default Card;
