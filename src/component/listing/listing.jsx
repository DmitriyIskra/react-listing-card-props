import React from 'react';
import ListingItem from '../listing-item/listingItem';

export default function Listing(props) {
    const { data } = props;

    return (
        <div className='item-list'>
            {data.map( item => <ListingItem 
            item = {item}
            key = {item.listing_id}
            />)}
        </div>
    )
}
