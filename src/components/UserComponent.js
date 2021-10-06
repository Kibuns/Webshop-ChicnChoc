import React from 'react'
import APIService from '../APIService';

export default class UserComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user: []
        }
    }
    
    componentDidMount(){
        APIService.getUsers().then((data) => {
            this.setState({ user: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.lastname}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}