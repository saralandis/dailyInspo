import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {

//   componentDidMount(){
//     $.ajax({
//       type: 'GET',
//       url: '/repos',
//       // on success of that get call set state to data
//       success: (data) => {
//         //console.log("THIS IS DATA SENT TO CLIENT", data)
//         this.setState({
//           repos: data
//         })
//       },
//       // on error console.log error getting top 25
//       error: () => {
//         console.log('Error getting top25 Repos')
//       }
//     });
//   }

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

//   search (term) {
//     console.log(`${term} was searched`);
//     $.ajax({
//       type: 'POST',
//       url: '/repos',
//       data: {username: `${term}`},
//       success: () => {
//         // on success call get on /repos
//         $.ajax({
//           type: 'GET',
//           url: '/repos',
//           // on success of that get call set state to data
//           success: (data) => {
//             //console.log("THIS IS DATA SENT TO CLIENT", data)
//             this.setState({
//               repos: data
//             })
//           },
//           // on error console.log error getting top 25
//           error: () => {
//             console.log('Error getting top25 Repos')
//           }
//         })
//       },
//       error: () => {
//         //on error alert 'Error adding user repos
//         console.log('Error adding user repos')
//       }
//     })
//   }

  render () {
    return (<div>
      <h1>Daily Inspo</h1>
      <h3>Date</h3>
      <h3>National Day of the day</h3>
      <h3>Random Artwork Placeholder</h3>
      <h3>Inspiring Quote</h3>
      <h3>Song placeholder</h3>
      <h3>Word of the day</h3>
      <h3>Random cat picture</h3>
      <h3> Joke of the day</h3>
      <h3> Tarot card of the day</h3>
      </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));