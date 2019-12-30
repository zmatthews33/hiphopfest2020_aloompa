
import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listApps } from '../graphql/queries'
import { createApp } from '../graphql/mutations'

class AppList extends Component {
  state =
  { name: "",
  id: "",
  apps: [] }
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listApps))
      const apps = apiData.data.listApps
      .items
      this.setState({ apps })
    } catch (err) {
      console.log('error: ', err)
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
    if (Object.values(this.state).filter(s => s === '').length) return
    const { name, id } = this.state;
    const app = { name, id };
    const apps = [...this.state.app, app];
    this.setState({
      apps,
      name: "",
      id: "",

    });
  }
  render() {
    return (
      <div className="App">
         {
          this.state.apps.map((app, i) => (
            <div key={i} >
              <h2>{app.name}</h2>
            </div>
          ))
        }
        <div >
          <input
            name='name'
            placeholder='app name'
            onChange={this.onChange}
            value={this.state.name}

          />
          <input
            name='id'
            placeholder='app id'
            onChange={this.onChange}
            value={this.state.id}

          />
        </div>
        <button

          onClick={this.createApp}
        >Create App</button>
      </div>
    );
  }
}
export default AppList

//    <Container className="tim-container">
//     <div id="images">
//        <Container>
//          <div className="title">
//            <h1>STAGES</h1>
//          </div>
//          <Row>
//            <Col className="mr-auto ml-auto" md="2" sm="3">
//              <h4 className="images-title">Circle Image</h4>
//              <img
//                alt="..."
//                className="img-circle img-no-padding img-responsive"
//              src={require("../assets/img/kaci-baum-2.jpg")}
//              />
//              <p className="text-center">Brigitte Bardot</p>
//            </Col>
//            <Col className="mr-auto" md="2" sm="3">
//              <h4 className="images-title">Thumbnail</h4>
//              <img
//                 alt="..."
//                 className="img-thumbnail img-responsive"
//                src={require("../assets/img/erik-lucatero-2.jpg")}
//              />
//              <p className="text-center">John Keynes</p>
//            </Col>
//          </Row>
//      </Container>
//        <div>

//        </div>
//      </div>
// </Container>
// </>
//  </Container>
//    );


// export default StageListcopy;