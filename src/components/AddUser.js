import React from 'react';
import { api } from '../utils';
import styles from '../styles.module.css';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: 0,
      age: '',
      email: "",
      history: [],
      gender: '',


    }
  }
  componentDidMount() {
    console.log("Component");
    // this.getEmp();

  }


  async getEmp() {

    try {
      let responseJson = await api.getEmployee();
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
  onValueChange(event) {
    this.setState({
      gender: event.target.value
    });
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

  async submitForm(e) {
    try {
      let responseJson = await api.addEmployee(this.state.name, this.state.age, this.state.gender,this.state.contact, this.state.email);
      console.log('Status', responseJson);
      this.setState({ history: responseJson });
      alert("Data added");

    }
    catch (error) {
      console.log(error);
    }

  }


  render() {

    return (
      <div style={{margin:20}}>
        <h4 style={{ marginBottom: '20px', color: "#3d3d3d" }} className="d-flex justify-content-center align-items-center">Add New Employee</h4>

        <div className="d-flex justify-content-center align-items-center">

          <form className="shadow p-3 mb-5 rounded" style={{ width: '50%' }}>
            <label className={styles.text}>Name:</label>
            <input
              type='text'
              name='name'
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <label className={styles.text}>Age:</label>
            <input
              type='number'
              name='age'
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <label className={styles.text}>Gender:</label>

            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={this.state.gender === "Male"}
                  onChange={this.myChangeHandler}
                />
            Male
          </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={this.state.gender === "Female"}
                  onChange={this.myChangeHandler}
                />
            Female
          </label>

            </div>
            <div className="radio mb-1">
              <label>
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  checked={this.state.gender === "Other"}
                  onChange={this.myChangeHandler}
                />
            Other
          </label>
            </div>
            
            <label className={styles.text}>Contact No.:</label>
            <input
              type='number'
              name='contact'
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <label className={styles.text}>Email:</label>
            <input
              type='email'
              name='email'
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />

            <button type="button" className="btn btn-outline-secondary mt-3"
              style={{ fontSize: '16px', fontWeight: 'bold' }}
              onClick={() => this.submitForm()}>Save</button>
          </form>

        </div>
      </div>
    )





  }
}

export default AddUser;
