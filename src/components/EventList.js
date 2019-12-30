import React, { Component } from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { listEvents } from '../graphql/queries'
import { createEvent } from '../graphql/mutations'
import { Container } from "reactstrap";
class EventList extends Component {
  state = {
    name: "",
    id: "",
    appId: "",
    stageId: "",
    description: "",
    image: "",
    startsAt: "",
    endsAt: "",
    events: []
  };
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listEvents))
      const events = apiData.data.listEvents
      .items
      this.setState({ events })
    } catch (err) {
      console.log('error: ', err)
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createEvent = async (e) => {
    e.preventDefault();
    if (Object.values(this.state).filter(s => s === '').length) return
    const { name, id, appId, stageId, description, image, startsAt, endsAt } = this.state;
    const event = { name, id, appId, stageId, description, image, startsAt, endsAt };
    const events = [...this.state.events, event];
    this.setState({
      events,
      name: "",
      id: "",
      appId: "",
      stageId: "",
      description: "",
      image: "",
      startsAt: "",
      endsAt: ""
    });
  };
  render() {
    return (
      <Container className="tim-container">
        <div id="images">
          <Container>
            <div className="title">
              <h1>EVENTS</h1>
            </div>
            {this.state.events.map((event, index) => (
              <div key={index}>
                <h2>{event.name}</h2>
                <p>{event.id}</p>
                <p>{event.appId}</p>
                <p>{event.stageId}</p>
                <p>{event.description}</p>
                <img src={event.image} alt={event.name} />
                <p>{event.startsAt}</p>
                <p>{event.endsAt}</p>
              </div>
            ))}
            <div>
              <input
                name="name"
                placeholder="Name"
                onChange={this.onChange}
                value={this.state.name}
              />
              <input
                name="id"
                placeholder="Event ID"
                onChange={this.onChange}
                value={this.state.id}
              />
              <input
                name="appId"
                placeholder="App ID"
                onChange={this.onChange}
                value={this.state.appId}
              />
              <input
                name="stageId"
                placeholder="Stage"
                onChange={this.onChange}
                value={this.state.stageId}
              />
              <input
                name="description"
                placeholder="Description"
                onChange={this.onChange}
                value={this.state.description}
              />
              <input
                name="image"
                placeholder="Image URL"
                onChange={this.onChange}
                value={this.state.image}
              />
              <input
                name="startsAt"
                placeholder="Starts At"
                onChange={this.onChange}
                value={this.state.startsAt}
              />
              <input
                name="endsAt"
                placeholder="Ends At"
                onChange={this.onChange}
                value={this.state.endsAt}
              />
            </div>
          </Container>
          <button onClick={e => this.createEvent(e)}>Create Event</button>
        </div>
      </Container>
    );
  }
}
export default EventList;


