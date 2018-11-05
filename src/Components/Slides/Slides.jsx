import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Slides extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h2>Slides</h2>
                <button>
                    <NavLink to="/login"> Go to Login</NavLink>
                </button>
            </div>
        );
    }
}
 
export default Slides;