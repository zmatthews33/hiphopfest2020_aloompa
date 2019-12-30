import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listStages } from '../graphql/queries'
import { Container, FormGroup, Input} from 'reactstrap';

function searchStages(name){
  return function(index){
    return index.name.toLowerCase().includes(name.toLowerCase()) || !name;
  }
}

class Search extends Component {
  state = {
      stages: [],
      name: '',
      id: ''
    }
    async componentDidMount() {
      try {
        const apiData = await API.graphql(graphqlOperation(listStages))
        const stages = apiData.data.listStages
        .items
        this.setState({ stages })
      } catch (err) {
        console.log('error: ', err)
    }

    this.searchHandler = this.searchHandler.bind(this);
  }
    searchHandler(e) {
      e.preventDefault();
     this.setState({ name: e.target.value})
  };

  render() {
    const {name, stages} = this.state;
    return (
    <Container fluid="xl" className="tim-container text-white section-dark  text-right">
      <div className="title text-white">
                <h1>STAGES</h1>
                <FormGroup>
          <Input placeholder="Search Stages by Name" type="text"
           onChange={this.searchHandler.bind(this)}
           value={name}/>
          </FormGroup>
        {
          stages.filter(searchStages(name)).map( stage =>
              <div className="title text-white text-right" key={stage.name}>
                <h2>{stage.name}</h2>
              </div>
          )
        }
      </div>
      </Container>

    );
  }
}
export default Search