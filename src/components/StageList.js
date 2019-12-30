
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { API, graphqlOperation } from 'aws-amplify'
import { listStages } from '../graphql/queries'
import { createStage } from '../graphql/mutations'

class StageList extends Component {
  state = { name: '', id: '', stages: [] }
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listStages))
      const stages = apiData.data.listStages
      .items
      this.setState({ stages })
    } catch (err) {
      console.log('error: ', err)
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  createStage = async () => {
    const { name, id } = this.state
    if (name === '' || id === '') return
    try {
      const stage = { name, id }
      const stages = [...this.state.stages, stage]
      this.setState({ stages, name: '', id: '' })
      await API.graphql(graphqlOperation(createStage, {input: stage}))
      console.log('Stage successfully created!')
    } catch (err) {
      console.log('error: ', err)
    }
  }
  render() {
    return (
      <div className="Stage">
          {/* {
          this.state.stages.map((stage, i) => (
            <div key={i} >
              <h2>{stage.name}</h2>
              <p>{stage.id}</p>
            </div>
          ))
        } */}
        <div >
          <input
            name='name'
            placeholder='stage name'
            onChange={this.onChange}
            value={this.state.name}

          />
          <input
            name='id'
            placeholder='stage id'
            onChange={this.onChange}
            value={this.state.id}

          />
           {/* <button
            onClick={this.deleteStage}
            >Delete</button>
            <button
            onClick={this.updateStage}
            >Update</button> */}
        </div>
        <button
          onClick={this.createStage}
          >Create Stage</button>
      </div>
    );
  }
}
export default StageList

