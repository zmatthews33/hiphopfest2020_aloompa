import React, { Component } from 'react';
import { Container, FormGroup, Input} from 'reactstrap';
import { API, graphqlOperation } from 'aws-amplify'
import { listApps } from '../graphql/queries'

function searchApps(name){
  return function(index){
    return index.name.toLowerCase().includes(name.toLowerCase()) || !name;
  }
}

class SearchApps extends Component {
state = {
      apps: [],
      name: '',
    }
    async componentDidMount() {
      try {
        const apiData = await API.graphql(graphqlOperation(listApps))
        const apps = apiData.data.listApps
        .items
        this.setState({ apps })
      } catch (err) {
        console.log('error: ', err)
      }

    this.searchHandler = this.searchHandler.bind(this);
  }
    searchHandler(e) {
     this.setState({ name: e.target.value})
  };

  render() {
    const {name, apps} = this.state;
    return (

      <Container fluid="xl" className="tim-container">
      <div className="title ">
                <h1>APPS</h1>
      <Container fluid="true" className="tim-container">
                <FormGroup>
          <Input placeholder="Search Apps" type="text"
           onChange={this.searchHandler.bind(this)}
           value={name}/>
          </FormGroup>
          </Container>
        {
          apps.filter(searchApps(name)).map( app =>
              <div key={app.name}>
                <h2>{app.name}</h2>
              </div>
          )
        }
        </div>
      </Container>
    );
  }
}
export default SearchApps