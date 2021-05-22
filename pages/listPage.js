import React, { useEffect} from 'react';
import { Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
import Header from "../components/common/Header";

function listPage(){
    

    const dummy = [
        {
            id : 1 ,
            title : 'test' , 
            price : '5000원' , 
        } ,
        {
            id : 2 ,
            title : 'test1' , 
            price : '5000원' , 

        } ,
        {
            id : 3 ,
            title : 'test3' , 
            price : '5000원' , 

        }
    ]

    const gridMain = dummy.map((product , index) => {
        return (
        <Row key= {product.id} gutter={16, 16}>
            <Col  span={8} lg={6} md={8} xs={24} >
                <Card>
                    <Meta
                        title={product.title}
                        description={product.price}
                    />
                </Card>
            </Col>
        </Row>
        )
    }) 

    useEffect(() => {

   }, [])


    return (
        <div>
        <Header />
        <div style={{width: '75%' ,margin: '3rem auto'}}>
            <div style={{textAlign : 'center'}}>
                <h2>List</h2>
            </div>

            {/* 조회부분 */}
            <div style={{display:'flex' , justifyContent: 'flex-end', margin: '1rem auto'}}>
            </div>

            {/* 뿌려지는 부분 */}
           {gridMain}

            <br/>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button>더보기</button>
            </div>
        </div>
        </div>
    )

}

export default listPage;
