import React from 'react'
import Products from '../Screens/Products'


function Navbar() {
    
const renderCategoryItems = ({item}) => {
    return(
        <li>
             <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', maxWidth:'fit-content', minWidth:'80px',margin:'10px' }} className="navbar-item">
                <div style={{height:'60px', width:'60px'}}  className='navbar__image'>
                <img style={{width:'100%', height:'100%', borderRadius:'50%'}} src={item.url} alt="logo" />
                    
                </div>
                <div style={{textAlign:'center',lineHeight:'16px', fontWeight:'500', fontSize:'14px'}}>
                    <span style={{overflow:'hidden'}}>
                        {item.name}
                    </span>
        
                    
                    
                </div>


              

                </div>

        </li>
        
           
        
    )

}
   

  return (
    <div className='ho' style={{ overflow:'hidden'}}>
         <ul style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', }}>
        {Products.map((item, index) => {
            return(
                <>
             {renderCategoryItems({item})}
                    </>
               
            )
        })}



    </ul>
 
        
    </div>
   
  )
}



export default Navbar