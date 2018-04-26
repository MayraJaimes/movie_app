import React, { Component } from "react";
import "./Options.css"
import Navbar from "../../components/Navbar/Navbar";


class Options extends Component {

    render() {
        return (
            <div>

                < Navbar />
            
                <div className="container">
                    <div className="row">                        
                            <p className="headingQuestion">What kind of movie do you want to watch?</p>
                            </div>
                            <form className="form-inline">
                                <button className="btn btn-primary pickMeUp" type="submit">Need a pick me up?</button>
                                <button className="btn btn-primary misery" type="submit">Wallow in your misery.</button>
                                <button className="btn btn-primary weDecide" type="submit">Let us decide for you!</button>
                            </form>                                      
                    </div>

                 </div>


            


        )
    }
}

export default Options;