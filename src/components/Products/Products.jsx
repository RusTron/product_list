import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store';
import './Products.scss';

const products = [
  { name: 'banan', price: 10, sale: null },
  { name: 'apple', price: 8, sale: null },
  { name: 'papaya', price: 10, sale: { kg: 3, percent: 50 } },
];

export const Products = () => {
  const dispatch = useDispatch();

  const addProduct = (value) => {
    const product = products.find((item) => item.name === value);
    console.log(product);
    const action = actionCreator.addProduct(product);
    dispatch(action);
  };

  const current = useSelector((state) => console.log(state));
  console.log(current);

  return (
    <div className="products">
      <div className="list">
        <div className="list__title">Choose goods!</div>
        <div className="list__header">
          <span className="list__header--number">#</span>
          <span className="list__header--name">Name</span>
          <span className="list__header--price">Price</span>
          <span className="list__header--sale">Sale</span>
          <span className="list__header--buy">Buy</span>
        </div>
        <div className="list__body">
          {products.map((product, i) => (
            <div
              className="list__body--row row"
              key={product.name}
            >
              <span className="row--number">{i + 1}</span>
              <span className="row--name">{product.name}</span>
              <span className="row--price">{`${product.price}$`}</span>
              <span className="row--sale">
                {product.sale
                  ? `Each ${product.sale.kg}kg: -${product.price * (product.sale.percent / 100)}$`
                  : ''}
              </span>
              <button
                className={product.name}
                type="submit"
                onClick={({ target }) => addProduct(target.className)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
