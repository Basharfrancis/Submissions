import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Extra extends React.Component{
    render(){
        console.log(this.props.repo)
        return(
            
            <div>
               <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.repo.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
export default Extra;