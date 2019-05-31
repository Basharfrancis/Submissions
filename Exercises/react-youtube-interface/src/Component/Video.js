import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Video extends React.Component{
    render(){
        
        return(
            <div>
                                   

                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.repo.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
        <span>{this.props.repo.description}</span>
        
                
                
                
             </div>
        )
    }
}
export default Video;