import React, { useState } from 'react'
import './Shop.css'
import SearchIcon from '@mui/icons-material/Search';
import Products from '../../asset/data/Products';
import ProductsLists from '../../components/UI/ProductsLists';


const Shop = () => {

  const [productData, setProductsData] = useState(Products)


  const handleFliter = e => {
    const filterValue = e.target.value
    if (filterValue === 'cake') {
      const filteredProduct = Products.filter(
        (item) => item.category === 'cake'
      )
      setProductsData(filteredProduct)
    }

    if (filterValue === 'dunut') {
      const filteredProduct = Products.filter(
        (item) => item.category === 'dunut'
      )
      setProductsData(filteredProduct)
    }

    if (filterValue === 'croissants') {
      const filteredProduct = Products.filter(
        (item) => item.category === 'croissants'
      )
      setProductsData(filteredProduct)
    }

    if (filterValue === 'waffles') {
      const filteredProduct = Products.filter(
        (item) => item.category === 'waffles'
      )
      setProductsData(filteredProduct)
    }

    if (filterValue === 'brownie') {
      const filteredProduct = Products.filter(
        (item) => item.category === 'brownie'
      )
      setProductsData(filteredProduct)
    }
  }

  const handleSearch = e => {
    // const searchTerm = e.target.value
    // const searchProduct = Products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    // setProductsData(searchProduct)
    const searchTerm = e.target.value.trim(); // Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
  if (searchTerm === '') {
    // Nếu không có từ khóa tìm kiếm, hiển thị tất cả sản phẩm
    setProductsData(Products);
  } else {
    // Ngược lại, tìm kiếm các sản phẩm chứa từ khóa trong tên sản phẩm
    const searchProduct = Products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchProduct);
  }
  }

  return (
    <div className="container">
      <div className="wrapper-shop">
        <div className='filter_widget-box'>
          <div className="filter_widget">
            <select onChange={handleFliter}>
              <option>Filter By Category</option>
              <option value="cake">Cake</option>
              <option value="dunut">Dunut</option>
              <option value="croissants">Croissants</option>
              <option value="waffles">Waffles</option>
              <option value="brownie">Brownie</option>
            </select>
          </div>
  
          <div className="filter_widget">
            <select>
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
              <option value="croissants">Croissants</option>
              <option value="waffles">Waffles</option>
            </select>
          </div>
        </div>

        <div className="search_box">
          <input type="text" placeholder='Search...' onChange={handleSearch}/>
          <span>
            <SearchIcon/>
          </span>
        </div>
      </div>
      <section>
        <div className="shop_card">
          <div className="row">
            {
              productData.length === 0? <h1 className='shop_card-h1'>No Products are found!</h1>
              : <ProductsLists data={productData} />
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop