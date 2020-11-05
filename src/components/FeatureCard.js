import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


let LessDetail = (desc) => {
    var returndesc = '';
    if (desc) {
        for (var i = 0; i <= 24; i++) {
            if (desc.length === i) {
                returndesc = returndesc + '...'
                return returndesc;
            }
            returndesc = returndesc + desc[i]
        }
        returndesc = returndesc + '...'
        return returndesc;
    }
    else {
        return ''
    }
}

const Card = ({ data }) => {
    return (
        <>
            <Link to={`product/${data.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                    <div className={`${data.featured && 'featured'} card-extra`}>
                        {data.featured && <p>FEATURED</p>}
                        <a><i className="far fa-heart"></i></a>
                        <img className="card-img" src={data?.images?.imgfrontside} alt="Card image cap" height='125px' width='97px' />

                    </div>
                    <div className={`${data.featured && 'card-body'} body`}>
                        <h5 className="price">Rs {data.price}</h5>
                        <p className="card-description">{LessDetail(data.productName)}</p>
                        <div>
                            <div className='area'><p>{`${data?.area} , ${data?.City}`}</p></div>
                            <div><p className="date">{data.date}</p></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card
