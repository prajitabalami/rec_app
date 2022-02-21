import React from 'react';

import { Link,  NavLink } from 'react-router-dom';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import styles from '../styles.module.css';
import {api} from '../utils';




class Nav_bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
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
    console.log(this.state.searchText);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                </li>
                <li >
                <div className={styles.searchBox}>
            <input
              type='text'
              name='searchText'
              className=""
              onChange={this.myChangeHandler}
              style={{ width:'500px',display:'inline',border:'none',outline:'none' }}>                
              </input>
              <a href={`/search_result/${this.state.searchText}`} 
              >
              <FaSearch
              className={styles.searchButton}
              size={25}   
              className={styles.searchIcon}
              style={{display:'inline',height:'30px'}}           
              />
              </a>

            </div>

                </li>

              </ul>
            </div>

            
            
            
              
              
            
            <Link className="btn btn-outline-light" to="/add_user">Add <FaUserPlus size={20} style={{marginBottom:3}}/></Link>

          </div>
        </nav>


      </div>


    )
  }
}

export default Nav_bar;