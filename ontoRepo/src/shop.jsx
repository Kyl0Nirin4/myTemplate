import './shop.css'
import 'boxicons'

const shop = ()=>{
    return(
        <>
        <div className='container'>
        <div className='shop'>
            <div className='image-holder'></div> 
            <div className='details'>
                <div className='semi'>
                <h4 className='product-name'>Tissu milay</h4>
                <box-icon type='solid' name='star'></box-icon>
                <p className='price'>120Tc</p>
                </div>
            </div>
        </div>
      </div>
        </>
    );
}
export default shop;