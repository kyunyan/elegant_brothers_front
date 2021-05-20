import React from 'react';
import styled from 'styled-components';
import Header from "../components/common/Header";
import Carousel from "antd/lib/carousel";
import Card from "../components/common/Card";

const MarketContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const CarouselWrap = styled.div`
  width: 100%;
  max-width: 100% !important;
  
  & h3 {
    height: 370px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const ContentsWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor || 'white'};
  padding-bottom: 80px;
  position: relative;
  
  & h1 {
    font-size: 2em;
    font-weight: 700;
    padding: 80px 0 30px;
    margin: 0 auto; 
  }
  
  & .ContentsCardWrap {
    display: flex;
    flex-wrap: nowrap;
    max-width: 1050px;
    margin: 0 auto;
    overflow: hidden;
  }
 
`

const Index = () => {

  const dummyData = {
    Content: {
      recency: {
        title: '이 상품 어때요?',
        type: 'basic',
        data: [
          {
            id: 1,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            salePrice: 10,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 2,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            salePrice: 15,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 3,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 4,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 5,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
        ]
      },
      lowPrice: {
        title: '놓치면 후회할 가격',
        backgroundColor: '#f7f7f7',
        type: 'basic',
        data: [
          {
            id: 1,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 2,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            salePrice: '20',
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 3,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            salePrice: '15',
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          },
          {
            id: 4,
            productName: '무농약 버터헤드레터스',
            price: 2983,
            description: ' 사실 양배추를 구입하면 한~두 끼 열심히 샐러드로 먹다가, 혹은 잎 몇 장을 뜯어 샌드위치에 활용하고서 거의 한 통을 그대로 남긴 채 냉장고에 방치할 때가 태반이죠. 일주일 뒤쯤 냉장고 구석에서 반은 얼고 반은 물러진 양상추를 발견한 적이 있다면, 버터헤드레터스로 바꿔보세요. 큰 샐러드 한 번, 혹은 두 번 만들기에 딱 적당한 양의 버터헤드레터스는 절대 처치 곤란한 천덕꾸러기가 될 일이 없답니다. 야들야들한 이파리, 입안에 넣으면 아삭한 식감, 매끌매끌한 표면, 쓰지 않은 맛으로 매력을 뽐내는 버터헤드레터스, 당장 오늘 식탁에 올려보세요.',
            imagePath: 'https://img-cf.kurly.com/shop/data/goods/1470294137606l0.jpg',
          }
        ]
      },
      tagMenu: {
        title: '태그별 추천',
        type: 'tag',
        data: [
          ''
        ]
      }
    },
  }
  return (
    <MarketContainer>
      <Header />
      <CarouselWrap>
        <Carousel autoplay>
          <div>
            <h3 style={{backgroundImage: `url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1619770790.jpg)`}}></h3>
          </div>
          <div>
            <h3 style={{backgroundImage: `url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1583112495.jpg)`}}></h3>
          </div>
        </Carousel>
      </CarouselWrap>
      {
        Object.entries(dummyData.Content).map(([key, value], index) => {
          return (
            <ContentsWrap key={key + index} bgColor={value.backgroundColor}>
              <h1>{value.title}</h1>
              <div className="ContentsCardWrap">
                {
                  value.data.map(obj => {
                    return <Card key={obj.id} data={obj}/>
                  })
                }
              </div>
            </ContentsWrap>
          )
        })
      }
    </MarketContainer>
  )
}

export default Index;
