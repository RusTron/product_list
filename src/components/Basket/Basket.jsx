import React from 'react';
import { useSelector } from 'react-redux';
import './Basket.scss';

export const Basket = () => {
  const choosenProducts = useSelector((state) => state.products);
  console.log(choosenProducts);

  return (
    <div className="basket">
      <div className="basket__title">Choosen Goods</div>
      <div className="list">
        <div className="list__header">
          <span className="list__header--number">#</span>
          <span className="list__header--name">Name</span>
          <span className="list__header--price">Price</span>
          <span className="list__header--sale">Amount</span>
          <span className="list__header--buy">Total</span>
        </div>
        <div className="list__body">
          {!choosenProducts.length
            ? (<div className="list__empty">No products</div>)
            : (
              choosenProducts.map((product, i) => (
                <div
                  className="list__body--row row"
                  key={product.name}
                >
                  <span className="row--number">{i + 1}</span>
                  <span className="row--name">{product.name}</span>
                  <span className="row--price">{`${product.price}$`}</span>
                  <span className="row--sale">{product.amount}</span>
                  <span className={product.name}>{product.sum}</span>
                </div>
              )))}
        </div>
      </div>
      <div className="basket__footer">
        {choosenProducts.length > 1
          ? `You should pay: ${choosenProducts.reduce((a, b) => a.sum + b.sum)}$`
          : ''}
      </div>
    </div>
  );
}
