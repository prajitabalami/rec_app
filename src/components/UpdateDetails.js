import React from 'react';
import { api } from '../utils';
import styles from '../styles.module.css';

class UpdateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: 0,
      age: '',
      email: "",
      history: [],
      id: '',
      gender:'',
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id: id });
    this.loadEmpDetails(id);
    console.log({ id });
    // this.getEmp();

  }
  async loadEmpDetails(id) {
    try {
      let responseJson = await api.viewEmployeeDetails(id);
      console.log('Status', responseJson);
      this.setState({
        name: responseJson.name,
        age: responseJson.age,
        gender:responseJson.gender,
        contact: responseJson.contact,
        email: responseJson.email,

      })

    }
    catch (error) {
      console.log(error);
    }


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

  async updateForm(e) {
    try {
      let responseJson = await api.updateEmployee(this.state.name, this.state.age, this.state.gender,this.state.contact, this.state.email, this.state.id);
      console.log('Status', responseJson);
      this.setState({ history: responseJson });
      alert("Data updated.");

    }
    catch (error) {
      console.log(error);
    }

  }


  render() {

    return (
      <div style={{ margin: 50 }}>
        <h4 style={{ marginBottom: '20px', color: "#3d3d3d" }} className="d-flex justify-content-center align-items-center">Update Employee Details</h4>

        <div className="d-flex justify-content-center align-items-center">

          <form className="shadow p-3 mb-5 rounded" style={{ width: '50%' }}>
            <label className={styles.text}>Name:</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <label className={styles.text}>Age:</label>
            <input
              type='number'
              name='age'
              value={this.state.age}
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
              value={this.state.contact}
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <label className={styles.text}>Email:</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              className="form-control form-control-lg"
              onChange={this.myChangeHandler}
              style={{ marginBottom: '10px' }}
            />
            <button type="button" className="btn btn-outline-secondary mt-3"
              style={{ fontSize: '16px', fontWeight: 'bold' }}
              onClick={() => this.updateForm()}>Save</button>
          </form>

        </div>
      </div>
    )





  }
}

export default UpdateDetails;
