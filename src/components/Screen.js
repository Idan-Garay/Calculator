import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <h1 className="screen-val">{this.props.value}</h1>
            </div>
        );
    };
}

export default Screen;