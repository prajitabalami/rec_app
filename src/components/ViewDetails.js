import React from 'react';
import {api} from '../utils';
import styles from '../styles.module.css';

import { FaRegEdit } from 'react-icons/fa';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Link} from 'react-router-dom';


class ViewDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            contact:'',
            age:'',
            email:'',
            data:[],
            id:'',
            gender:'',
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log({id});
        this.loadEmpDetails(id);
        this.setState({id:id});
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

    async loadEmpDetails(id){        
            try {
              let responseJson = await api.viewEmployeeDetails(id);
              console.log('Status', responseJson); 
              this.setState({
                  name:responseJson.name,
                  age:responseJson.age,
                  gender:responseJson.gender,
                  contact:responseJson.contact,
                  email:responseJson.email,

              })     
        
            }
            catch (error) {
              console.log(error);
            }
            
        
    }
    render(){
        return(
            <div className=" m-5">
                <div className="card pr-5 pt-5 pb-5 pl-3" style={{borderRadius: 15}}>
                <h4 style={{marginBottom:20}}>Details:</h4>
                <div style={{}}>

                  <div style={{float:'left'}}>
                   <h6 style={{fontSize:20, color:'grey',marginRight:20}}>Name: </h6>
                   <h6 style={{fontSize:20, color:'grey',marginRight:20}}>Age: </h6>
                   <h6 style={{fontSize:20, color:'grey',marginRight:20}}>Gender: </h6>
                   <h6 style={{fontSize:20, color:'grey',marginRight:20}}>Contact: </h6>
                   <h6 style={{fontSize:20, color:'grey',marginRight:20}}>Email: </h6>
                  </div>

                  <div style={{float:'left'}}>
                  <h6 className={styles.text1}>{this.state.name}</h6>
                <h6 className={styles.text1}> {this.state.age}</h6>
                <h6 className={styles.text1}> {this.state.gender}</h6>
                <h6 className={styles.text1}> {this.state.contact}</h6>
                <h6 className={styles.text1}> {this.state.email}</h6>
                    
                  </div>


                </div>
                
                <div className={styles.positionTop}>

                <Link className={styles.tools2} to={`/update_details/${this.state.id}`}><FaRegEdit /></Link>
                {/* <Link className={styles.tools3} onClick={() => this.deleteEmp(this.state.id)} to='/'><MdDelete /></Link> */}
                </div>
               

                </div>
            </div>
        )
    }
}

export default ViewDetails;