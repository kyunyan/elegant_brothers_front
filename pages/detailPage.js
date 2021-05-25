import React, { useEffect } from 'react'
import {Row, Col, Button, Descriptions, Tabs, Select} from 'antd'

function DetailProductPage(){
    const { Option } = Select;
    const { TabPane } = Tabs;
    const spanSize = 3;
    const dummyData = {
        title : "즉석밥" , 
        unit : "1 팩 " ,
        gram : "150g" ,
        package : "상온 종이포장" , 

    }
    useEffect(() => {

    }, [])

    return (
        <div style={{width: '100%', padding: '3rem 4rem'}}>
            <br />

            <Row gutter={[16,16]}>
                <Col lg={12} sm={24}>
                    {/* Produect Image */}
                   
                </Col>
                <Col lg={12} sm={24}>
                    {/* ProductInfo */}
                    <Descriptions title={dummyData.title} size="middle">
                        <Descriptions.Item label="판매단위" span={spanSize} >{dummyData.unit}</Descriptions.Item>
                        <Descriptions.Item label="중량/용량" span={spanSize}>{dummyData.gram}</Descriptions.Item>
                        <Descriptions.Item label="포장타입" span={spanSize}>{dummyData.package}</Descriptions.Item>
                        <Descriptions.Item label="상품선택" span={spanSize}>
                            <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                            <Option value="lucy">Lucy</Option>
                            </Select>
                        </Descriptions.Item>
                    </Descriptions>

                    <br />
                    <br />
                    <br />
                    <div style={{display : 'flex', justifyContent: 'center'}}>
                        <Button size='large' shape='round' type='danger' >
                            재입고알림
                        </Button>
                        <Button size='large' shape='round' type='danger' >
                            늘사는것
                        </Button>
                        <Button size='large' shape='round' type='danger' >
                            담기
                        </Button>
                    </div>

                   
                </Col>
            </Row>
            <br />

            
            <Tabs defaultActiveKey="1" type="card" size="large">
                <TabPane tab="상품설명" key="1">
                    상품설명
                </TabPane>
                <TabPane tab="상품이미지" key="2">
                    상품이미지
                </TabPane>
                <TabPane tab="상세정보" key="3">
                    상세정보
                </TabPane>
                <TabPane tab="고객후기" key="4">
                    고객후기
                </TabPane>
                <TabPane tab="싱픔문의" key="5">
                    상품문의
                </TabPane>
            </Tabs>
        </div>
        
    
    )
}

export default DetailProductPage;