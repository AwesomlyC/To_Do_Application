import React, {useState} from 'react'

function HomePageComponent() {

  const {listName, setListName} = useState("")
  const {existListName, loadListName} = useState("")

  const setNewListName = (e) => {
    e.preventDefault();

  }


  const loadListNameFile = (e) => {
    e.preventDefault();
  }


  return (
    <div>
      <br /> <br />     
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Home Page</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label fw-bold'>Create A New List</label>
                  <input
                    type='text'
                    placeholder='Enter a name'
                    name='newListName'
                    className='form-control'
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                  ></input>
                </div>
                <button className='btn btn-success' onClick={(e) => setNewListName(e)}>Create</button>
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