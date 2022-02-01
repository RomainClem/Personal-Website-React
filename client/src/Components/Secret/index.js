import React, {Component} from "react";
import floppa from '../../Assets/images/Floppa.gif'
import rat from '../../Assets/images/rat.gif'


class Secret extends Component {
    render() {
        return (
            <div className="wrapper row px-0 py-5">
                <div className="col-md-4 d-flex justify-content-center p-0">
                    <img src={floppa} className="flex img-fluid" alt="Monkey typing on typewriter" loading="lazy"/>
                </div>
                <div className="col-md-4 p-0">
                    <iframe src="https://www.youtube.com/embed/QKlzaWRt62E?autoplay=1" width="100%" height="400px"
                       title="YouTube video player" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen/>
                </div>
                <div className="col-md-4 d-flex justify-content-center p-0">
                    <img src={rat} className="flex img-fluid" alt="Monkey typing on typewriter" loading="lazy"/>
                </div>

            </div>
        )
    }
}

export default Secret;