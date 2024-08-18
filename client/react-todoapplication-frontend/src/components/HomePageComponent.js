import React, {useState} from 'react'
import TaskService from '../services/TaskService';
import { useNavigate } from 'react-router-dom';

function HomePageComponent() {

  const [listName, setListName] = useState("")
  const [existListName, loadListName] = useState("")
  const navigate = useNavigate();

  const setNewListName = (e, listName) => {
    e.preventDefault();

    // Note: This will retrieve any document that does exist under the name
    // Possible change: Delete all document from existing listName to create a fresh list
    TaskService.getAllListName(listName).then((response) => {
      setListName(response.data)
      navigate("/list?name=" + listName)
    }).catch(error =>{
      console.log("ERROR ERROR");
    })

  }


  const loadListNameFile = (e) => {
    e.preventDefault();
    TaskService.getAllListName(existListName).then((response) => {
      loadListName(response.data)
      navigate("/list?name=" + existListName);
    }).catch(error =>{
      console.log("Error in loading list: " + error);
    })
  }

  const preventEnter = (e) =>  {
    if (e.key === "Enter"){
      e.preventDefault();
    }
  }

  return (
    <div>
      <br /> <br />     
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Home Page</h2>
            <div className='card-body'>
              <form onSubmit={(e) => preventEnter(e)}>
                <div className='form-group mb-2'>
                  <label className='form-label fw-bold'>Create A New List</label>
                  <input
                    type='text'
                    placeholder='Enter a name'
                    name='newListName'
                    className='form-control'
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                    onKeyDown={(e) => preventEnter(e)}
                  ></input>
                </div>
                <button className='btn btn-success' onClick={(e) => setNewListName(e,listName)}>Create</button>
                <div className='form-group mb-2'>
                <br />


                <label className='form-label fw-bold'>Load Existing List</label>
                  <input
                    type='text'
                    placeholder='Enter existing name'
                    name='newListName'
                    className='form-control'
                    value={existListName}
                    onChange={(e) => loadListName(e.target.value)}
                    onKeyDown={(e) => preventEnter(e)}
                  ></input>
                </div>
                <button className='btn btn-primary' onClick={(e) => loadListNameFile(e)}>Load</button>
              </form>
            </div>
          </div>

        </div>

      </div>     
      
      </div>
  )
}

export default HomePageComponent