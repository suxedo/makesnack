import React,{useEffect, useState} from 'react'
import {Button, Input, Layout, Space, Radio, Collapse } from "antd";
import { Link } from 'react-router-dom';
import Feed from '../Screens/Feed';
function CategorySideBar() {

    const [sort, setSort] = useState("Picked for you");

    const onChangeSort = (e) => {
      console.log('radio checked', e.target.value);
      setSort(e.target.value);
    };
    const { Panel } = Collapse;
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent
    :'center'}} className="category__filter">
    <div style={{
overflow: 'hidden',
height: '100vh',
position: 'sticky',

top: 0,

}}>
<div style={{maxWidth:'280px', flex:1}}>
  <div style={{height:'25px'}}>
    
  </div>
  <div>
    <div className="category__filter__title">
      <h1 className="category__filter__text">All stores</h1>
      </div>
      <div>
      <Collapse expandIconPosition="end" defaultActiveKey={['2','3','4','5']} ghost>
<Panel header="Sort" key={sort}>
<Radio.Group buttonStyle={{ }} onChange={onChangeSort} value={sort}>
<Space direction="vertical">
  <Link to={`/feed/` + sort}>
  <Radio value="Picked for you">Picked for you(default)</Radio>
  
  </Link>
  <Link  to={`/feed/` + sort}>
  <Radio value="Most popular">Most popular</Radio>
  
  </Link>
  <Link  to={`/feed/` + sort}>
  <Radio value="Rating">Rating</Radio>
  
  </Link>
  <Link  to={`/feed/` + sort}>
  <Radio value="Delivery Time">Delivery Time</Radio>
  
  </Link>





</Space>
</Radio.Group>
</Panel>
<Panel header="From MakeiSnack" key="2">
<p>{text}</p>
</Panel>
<Panel header="Price Range" key="3">
<p>{text}</p>
</Panel>
<Panel header="Max Delivery" key="4">
<p>{text}</p>
</Panel>
<Panel header="Dietary" key="5">
<p>{text}</p>
</Panel>
</Collapse>
      </div>

  </div>

  <div>
 
  </div>
  
</div>


</div>



      
    </div>
  )
}

export default CategorySideBar