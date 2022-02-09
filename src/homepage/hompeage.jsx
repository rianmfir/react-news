import React from 'react';
import axios from 'axios';
import { Cards, Navbar } from '../component'

export default class HomePage extends React.Component {
    state = {
        data: [],
        search: "",
    }

    componentDidMount() {
        axios.get(`hsttps://newsapi.org/v2/top-headlines?country=id&apiKey=d5cc1aabc64f4477afd898614ca734ba`)
            .then(res => {
                const data = res.data;
                this.setState({ data: data.articles });
            })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {

        return (
            <div>
                <Navbar onChange={value => this.setState({ search: value })} />
                {console.log(this.state.search)}

                <div className="container">
                    <div className="row" id="news">
                        <Cards
                            data={this.state.data}
                            search={this.state.search}
                        />
                    </div>
                </div>
                {console.log(this.state.data)}
            </div>
        )
    }
}