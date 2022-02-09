import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container">
                    <a href="/" className="navbar-brand">News App</a>
                    <form className="d-flex live-search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search news..."
                            aria-label="Search"
                            id="search"
                            onChange={e => this.props.onChange(e.target.value)}
                        />
                    </form>
                </div>
            </nav>
        )
    }
}