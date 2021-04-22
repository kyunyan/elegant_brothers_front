import React, { useEffect} from 'react';
import {Icon , Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';

function list(){

    useEffect(() => {
       
   }, [])
   
    
    return (
        <div style={{width: '75%' ,margin: '3rem auto'}}>
            <div style={{textAlign : 'center'}}>
                <h2>List<Icon type="rocket"/></h2>
            </div>
            
            {/* 조회부분 */}
            <div style={{display:'flex' , justifyContent: 'flex-end', margin: '1rem auto'}}>
            </div>

            {/* 뿌려지는 부분 */}
            <Row gutter={16, 16}>
                <Col lg={6} md={8} xs={24}>
                    <Card>
                        <Meta
                            title={'test'}
                            description={`$500`}
                        />
                    </Card>
                </Col>    
            </Row>

            <br/>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button>더보기</button>
            </div>
        </div>    

    )

}

export default list;