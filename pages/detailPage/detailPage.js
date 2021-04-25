import React, { useEffect } from 'react'
import {Row, Col, Button, Descriptions} from 'antd'

function DetailProductPage(){

    useEffect(() => {

    }, [])

    return (
        <div style={{width: '100%', padding: '3rem 4rem'}}>
            <div style={{display: 'flex', justifyContent: 'center' }}>
                <h1>{'test1'}</h1>
            </div>

            <br />

            <Row gutter={[16,16]}>
                <Col lg={12} sm={24}>
                    {/* Produect Image */}
                   
                </Col>
                <Col lg={12} sm={24}>
                    {/* ProductInfo */}
                    <Descriptions title="Product Info">
                        <Descriptions.Item label="Price">$500</Descriptions.Item>
                        <Descriptions.Item label="Sold">안녕하세용</Descriptions.Item>
                        <Descriptions.Item label="View">안녕하세용1</Descriptions.Item>
                        <Descriptions.Item label="Description">감사합니다!!</Descriptions.Item>
                    </Descriptions>

                    <br />
                    <br />
                    <br />
                    <div style={{display : 'flex', justifyContent: 'center'}}>
                        <Button size='large' shape='round' type='danger' >
                            Add to Cart
                        </Button>
                    </div>

                   
                </Col>
            </Row>

        
        
        </div>

    
    )
}

export default DetailProductPage;