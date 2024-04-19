import { Component } from 'react';
import './clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1 className="title">Time</h1>
                <h2 className="time">{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
// export default function Clock() {
//     return (
//         <div>
//             <h1 className="title">Time</h1>
//             <h2 className="time">{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
// }