import './ProductList.scss';

import Header from './ProductListHeader';

import ProductListContent from './ProductListContent';

import Footer from './../Footer';

function ProductList() {
    return (
      <div className="box">
            <Header />
            <ProductListContent />
{/*             <Outlet /> */}
            <Footer />
            

      </div>
    );
  }

export default ProductList;
