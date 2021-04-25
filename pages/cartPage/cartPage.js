import React, { useEffect} from 'react';
import {Icon , Col, Card, Row, Button, Checkbox, Select} from 'antd';
import Meta from 'antd/lib/card/Meta';

function cartPage(){
-

    useEffect(() => {
       
   }, [])
   
    
    return (
        <div style={{width: '75%' ,margin: '3rem auto'}}>
            <div style={{textAlign : 'center'}}>
                <h2>Cart<Icon type="rocket"/></h2>
            </div>

            {/* 뿌려지는 부분 */}
            <Row gutter={16, 16}>
                <Col lg={6} md={8} xs={24}>
                    <Card>
                        <Meta
                            title={'test'}
                            description={`$500`}
                        />
                        <br/>
                        <Select
                            style={{ width: 200 ,height: 70 }}
                            />
                    </Card>
                </Col>    
                <Col lg={6} md={8} xs={24}>
                    <Card>
                        <Meta
                            title={'test1'}
                            description={`$600`}
                        />
                        <br/>
                        <Select
                            style={{ width: 200 ,height: 70 }}
                            />
                    </Card>
                </Col>    
                <Col lg={6} md={8} xs={24}>
                    <Card>
                        <Meta
                            title={'test2'}
                            description={`$700`}
                        />
                        <br/>
                        <Select
                            style={{ width: 200 ,height: 70 }}
                            />
                    </Card>
                </Col>
                <Col lg={6} md={8} xs={24}>
                    <Card >
                        <Meta
                            title={'test3'}
                            description={`$800`}
                        />
                        <br/>
                        <Select
                            style={{ width: 200 ,height: 70 }}
                            />
                    </Card>
                </Col>        
            </Row>

            <br/>

            <div style={{display : 'flex', justifyContent: 'center'}}>
                <Button size='large' shape='round' type='danger' >
                    구매하기
                </Button>
            </div>

        </div>    

    )

}

export default cartPage;