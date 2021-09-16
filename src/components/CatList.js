import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCat, fetchStart, fetchSuccess, fetchFail } from '../actions';

const CatList = (props) => {
    const { cats, isFetching, error } = props;
    useEffect(() => {
        props.getCat();
    }, []);


    return (
        <div>
            <h1>Cats List</h1>
            <div className="list-container">
                {
                    cats && cats.map((cat, index) =>
                        <div className="cat-item" key={index}>
                            {cat.image ? <img src={cat.image.url} /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png" />}
                            <div>
                                <h2>{cat.name}{" "}
                                    <Link to={`/${cat.name}`} className="information">
                                        <span>ℹ️</span>
                                    </Link>
                                </h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cats: state.listReducer.cats,
        isFetching: state.listReducer.isFetching,
        error: state.listReducer.error
    };
};

export default connect(mapStateToProps, { getCat, fetchStart, fetchSuccess, fetchFail })(CatList);