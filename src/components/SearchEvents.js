import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listEvents } from '../graphql/queries'
import { Container, Row, FormGroup, Input} from "reactstrap";

function searchEvents(name){
  return function(index){
    return index.name.toLowerCase().includes(name.toLowerCase()) || !name;
    }
  }

class SearchEvents extends Component {
state = {
      events: [],
      name: '',
      }
    async componentDidMount() {
      try {
        const apiData = await API.graphql(graphqlOperation(listEvents))
        const events = apiData.data.listEvents
        .items
        this.setState({ events })
      } catch (err) {
        console.log('error: ', err)
      }


    this.searchHandler = this.searchHandler.bind(this);
  }
    searchHandler(e) {
     this.setState({ name: e.target.value})
     e.preventDefault();
    };

  render() {
    const {name, events} = this.state;

    return (
    <Container fluid="xl" className="tim-container">
          <div id="images">
            <Container>
            <div className="title">
                <h1>EVENTS</h1>
                <div>
                <FormGroup>
          <Input placeholder="Search Events (by Name)" type="text"
           onChange={this.searchHandler.bind(this)}
           value={name}/>
          </FormGroup>
          </div>
            </div>
            <Row xs="3" className="text-center">
        {
          events.filter(searchEvents(name)).map( event =>
              <div key={event.name}>
                <h2>{event.name}</h2>
                {/* <p>{event.description}</p> */}
                <img
                  alt="{event.name}"
                  className="img-thumbnail img-responsive"
                  src={event.image}
                  height="45%" width="45%"
                />
                <h3>{event.stageId}</h3>
                <p>{event.startsAt} - {event.endsAt}</p>
              </div>
          )
        }
                </Row>
              </Container>
            </div>
        </Container>

    );
  }
}
export default SearchEvents