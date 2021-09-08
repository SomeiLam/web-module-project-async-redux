import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Cat = (props) => {
    const { name } = useParams();
    const { cats } = props;
    const cat = cats.find(cat => cat.name === name);
    const { push } = useHistory();

    const handleClick = e => {
        e.preventDefault();
        push('../');
    }

    const getStar = num => {
        let stars = "";
        for (let i = 0; i < num; i++) {
            stars += "⭐";
        }
        return stars;
    }

    return (
        <div className="card-container">
            <h1>{cat.name}</h1>
            <h2>{cat.temperament}</h2>
            {cat.image ? <img src={cat.image.url}/> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png" />}
            <h3>Life Span: {cat.life_span} years</h3>
            <h3>Weight: {cat.weight.imperial} lbs</h3>
            <h3>Origin: {cat.origin}</h3>
            <ul>
                <li>Adaptability: {getStar(cat.adaptability)}</li>
                <li>Energy level: {getStar(cat.energy_level)}</li>
                <li>Intelligence: {getStar(cat.intelligence)}</li>
                <li>Social Needs: {getStar(cat.social_needs)}</li>
                <li>Child Friendly: {getStar(cat.child_friendly)}</li>
                <li>Stranger Friendly: {getStar(cat.stranger_friendly)}</li>
                <li>Dog Friendly: {getStar(cat.dog_friendly)}</li>
                <li>Shedding Level: {getStar(cat.shedding_level)}</li>
            </ul>
            <h3 className="description">{cat.description}</h3>
            <button onClick={handleClick}>Back</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        cats: state.listReducer.cats
    })
}

export default connect(mapStateToProps)(Cat);