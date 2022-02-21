import React from 'react';
import { api } from '../utils';
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import styles from '../styles.module.css';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class SearchResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        contact: 0,
        age: '',
        email: "",
        history: [],
        searchText: '',
  
  
      }
    }
    componentDidMount() {
        const searchText = this.props.match.params.searchText;
        console.log({searchText});
      console.log("arrived on search page");
      this.searchEmp(searchText);
  
    }
    viewDetails(id) {
      console.timeLog(id);
  
    }
  
    async deleteEmp(id) {
      confirmAlert({
       
        message: 'Are you sure you want to delete?',
        buttons: [
          {
            label: 'Yes',
            onClick: async() => {
              try {
                let responseJson = await api.deleteEmployee(id);
                console.log('Status', responseJson);
  
              }
              catch (error) {
                console.log(error);
              }
              this.getEmp();
  
            }
          },
          {
            label: 'No',
  
          }
        ]
      });
  
  
    }
  
  
    async searchEmp(searchText) {
  
      try {
        let responseJson = await api.searchEmployee(searchText);
        console.log('Status', responseJson);
        this.setState({ history: responseJson });
  
      }
      catch (error) {
        console.log(error);
      }
  
  
  
    }
  
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    }
  
    view() {
      return (
        this.state.history.map((datum, i) => {
          return this.renderRow(datum, i);
        })
  
      )
  
    }
  
  
  
  
    renderRow(datum, i) {
      return (
        <div>
          <h1>
            {datum.name}
          </h1>
        </div>
  
      )
    }
  
  
    render() {
  
      return (
        <div style={{ margin: 50 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.history.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.contact}</td>
                      <td>{data.email}</td>
                      <td>
                        <Link className={styles.tools1} to={`/emp_details/${data._id}`}><FaEye /></Link>
                        <Link className={styles.tools2} to={`/update_details/${data._id}`}><FaRegEdit /></Link>
                        <Link className={styles.tools3} onClick={() => this.deleteEmp(data._id)}><MdDelete /></Link>
                      </td>
  
                    </tr>
                  )
                })
              }
              <div>
  
              </div>
  
            </tbody>
          </Table>
  
        </div>
      )
  
  
  
  
  
    }
  }
  
  export default SearchResult;