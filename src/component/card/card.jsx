import React from "react";
import "./style.css"

export default class Cards extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {

        return true;
    }
    render() {

        let { data, search } = this.props;
        let dataSearch = data.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))


        if (dataSearch.length < 1) {
            return (
                <p className="text-center fw-bold fs-2" style={{ backgroundColor: '#f8aeae' }}>Data Not Found :(</p>
            )
        } else {
            return (
                <>
                    {
                        dataSearch.map((event, key) =>
                            <div className="col-md-4 mb-5">
                                <div className="card" key={key}>
                                    <img src={event.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title fs-5 fw-bolder">{event.title}</h5>
                                        <p className="fs-6 fw-normal">{event.author} - {event.publishedAt}</p>
                                        <p className="card-text">
                                            {event.content}
                                        </p>
                                        <a href={event.url} className="btn btn-dark">Read more..</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </>
            )
        }
    }
}

