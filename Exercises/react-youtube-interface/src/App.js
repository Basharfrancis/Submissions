import React, {Component} from 'react';

import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Component/Menu';
import Video from './Component/Video';
import Extra from './Component/Extra';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultVideos : [],
            upComingVideos:[],
            keyword:"",
            isloaded :false

        }

    }
    handleSubmit = name  => event=> {
      event.preventDefault();
     
        this.setState({
          keyword: name
        });
        
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&key=AIzaSyBlAbaoE0q0YlydpfhYJgadaVElN19hJ6I`)
              .then(response => response.json())
              .then(answer => {
                console.log(answer.items)
                this.setState({
                    isloaded : true,
                    resultVideos: answer.items,
                    upComingVideos :answer.items,
                })
              }); 
              //console.log(this.state.resultVideos)
        /* this.getStories(); */
      }


      // doFilter = repo => {
      //   return repo.stargazers_count > 0;
      // };
      
   /*  componentDidMount(){
         
            fetch(`https://reqres.in/api/users?page=2`)
              .then(response => response.json())
              .then(answer => {
                this.setState({
                    isloaded : true,
                    repos: answer.data,
                })
              });
} */

    render() {
        const {isloaded,upComingVideos,resultVideos} = this.state;
        if (!isloaded && !upComingVideos){
            return <div>loading..</div>
        }
        else{
        return (
            <div className="App">
            <Menu handleSubmit={this.handleSubmit}/>
            <Row>
                <Col sm={9}>
               
               {
                 resultVideos.length > 0 ? <Video repo ={resultVideos[0]} /> : null
               }
                
                
                
              
                    
                </Col>
                <Col sm={3}>
                { upComingVideos.map(repo => {
                  console.log('repo', repo)
                    return <Extra repo={repo}/>
                })}
                    {/* <Extra/> */}
                </Col>
            </Row>
           
            
            </div>
        );
    }
  }
}

export default App;


// const static_array = [
//   {videoId: '', url: ''},
//   {videoId: '', url: ''},
//   {videoId: '', url: ''},
// ]

// if(static_array.length > 0){

// }else {

// }

// console.log(static_array[0]);

// static_array.map(item => {
//   return <Video repo={item} /> 
// })

// <Video repo={static_array[0]} />

