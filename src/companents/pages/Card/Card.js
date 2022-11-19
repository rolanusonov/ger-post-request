import React from 'react';
import like from "../../assets/img/322-3224630_like-up-vote-svg-png-icon-free-vote-icon-png.png";

const Card = ({el, addToBasket}) => {
    return (
        <div className="productBlock">
            <div className="nameBlock">
                <h1>{el.name}</h1>

            </div>
            <div className="blockEmail">
                <p>{el.email}</p>

                <div className="likeBlock">
                    <a href={`tel://+996${el.phone}`}> {el.phone}</a>
                    <img onClick={() => addToBasket(el)} src={like} alt="" style={{width: "30px",borderRadius:"10px"}}/>
                </div>
            </div>

        </div>
    );
};

export default Card;