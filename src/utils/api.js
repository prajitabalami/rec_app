const base_url = "http://192.168.1.81:8088/";

const getEmployee = () => {
    const url = 'api/users';
    const method = 'GET';
    const body = '';
    console.log('calling get employee api')
    return (call_api(url, method, body))

}

const viewEmployeeDetails = (id) => {
    const url = 'api/users?id=' + id;
    const method = 'GET';
    const body = '';
    console.log('calling view employee api')
    return (call_api(url, method, body))

}

const searchEmployee = (searchText) => {
    const url = 'api/users/search/' + searchText;
    const method = 'GET';
    const body = '';
    console.log('calling search employee api')
    return (call_api(url, method, body))

}
const deleteEmployee = (id) => {
    const url = 'api/users/'+id;
    const method = 'DELETE';
    const body = '';
    console.log('calling delete employee api')
    return (call_api(url, method, body))

}


const addEmployee = (name,age,gender,contact,email) => {
    const url = 'api/users/';
    const method = 'POST';
    const body =JSON.stringify({
        name:name,
        age:age,
        gender:gender,
        contact:contact,
        email:email, 

    })    

    
    console.log("request data", JSON.stringify({
        name:name,
        age:age,
        gender:gender,
        contact:contact,
        email:email, 

    }))
    console.log('calling addEplooyee')
    return (call_api(url, method, body))
}

const updateEmployee = (name,age,gender,contact,email,id) => {
    console.log({id});
    const url = 'api/users/'+id;
    const method = 'PUT';
    const body =JSON.stringify({
        name:name,
        age:age,
        gender:gender,
        contact:contact,
        email:email, 
    })   

    
    console.log("request data", JSON.stringify({
        name:name,
        age:age,
        gender:gender,
        contact:contact,
        email:email, 

    }))
    console.log('calling updateEmp')
    return (call_api(url, method, body))
}


const call_api = async (url, method, body) => {
    if (method === 'POST') {
        console.log('calling api path', base_url + url)
        try {
            let response = await fetch(base_url + url, {
                 method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: body,
            });

            let responseJson = await response.json();
            console.log('responseJson', responseJson);

            return responseJson;
        }


        catch (error) {

            console.log(error)
        }
    }
    else if (method === 'GET') {
        console.log('method get reached here');
        try {
            let response = await fetch(base_url + url, {
                method: 'GET',
            

            });

            let result = await response.json();
            console.log('responseJson', result);

            return result;
        }
        catch (error) {
            console.log(error);
        }
    }

    else if (method === 'PUT') {
        try {
            let response = await fetch(base_url + url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            });
            let responseJson = await response.json();
            console.log('responseJson', responseJson);
            return responseJson;
        }
        catch (error) {
            console.log(error)
        }
    }

    else if (method === 'DELETE') {
        try {
            let response = await fetch(base_url + url, {
                method: 'DELETE',
              
            });
            let responseJson = await response.json();
            console.log('responseJson', responseJson);
            return responseJson;
        }
        catch (error) {
            console.log(error)
        }
    }
}

export{
    addEmployee,
    getEmployee,
    deleteEmployee,
    viewEmployeeDetails,
    updateEmployee,
    searchEmployee,
}