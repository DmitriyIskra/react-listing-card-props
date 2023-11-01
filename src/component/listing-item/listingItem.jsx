import React from 'react'

export default function ListingItem(props) {
  const { item } = props;

  let classQ;
  let price;
  let title;

  if(+item?.quantity <= 10) {
    classQ = 'level-low';
  } else if(+item?.quantity <= 20) {
    classQ = 'level-medium';
  } else {
    classQ = 'level-high';
  }

  switch(item?.currency_code){
    case 'USD':
      price = `${item?.currency_code} ${item?.price}`;
      break;
    case 'EUR':
      price = `${item?.currency_code} ${item?.price}`;
      break;
    default:
      price = `${item?.price} ${item?.currency_code}`;
      break;
  }

  if(item?.title && item?.title.length > 50) {
    const text = [];
    const arr = item?.title.split('');
    
    for(let i = 0; i < 50; i += 1) {
      text.push(arr[i]);
      title = `${text.join('')}...`;
    }
  } else {
    title = item.title;
  }



  return (
    <>
      <div className="item">
        <div className="item-image">
          <a href={item?.url}>
            <img src={item?.MainImage?.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">
            {price}
          </p>
          <p className={`item-quantity ${classQ}`}>{item?.quantity} left</p>
        </div>
      </div>    
    </>
  )
}
