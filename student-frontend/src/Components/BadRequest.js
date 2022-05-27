
import React, { Component } from 'react'
export default class BadRequest extends Component {

    state = { 
        exceedTime: false 
    }

    componentDidMount = () => {
        setTimeout(() => {
            if (this.props.show) {
                this.setState({ exceedTime: true })
            }
        }, 10000);
    }

    render() {
        if (this.props.show) {
            return (
                <div className="temp">
                    <i className="fa fa-times-circle" style={{ fontSize: "150px", color: "red" }}></i>
                    {this.state.exceedTime &&
                        <>
                            <div className="exceedText" >This is taking Longer than Expected</div>
                            <div className="exceedText" >Please have some Patience</div>
                        </>
                    }
                </div>
            );
        }
        else {
            return (
                <>
                </>
            );
        }
    }
}
