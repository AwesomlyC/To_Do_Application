import React, {useState} from 'react'

function HomePageComponent() {

  const {listName, newListName} = useState("")


  const setNewListName = (e) => {
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
                  <label className='form-label'>Create A New List</label>
                  <input
                    type='text'
                    placeholder='Enter a name'
                    name='newListName'
                    className='form=control'
                    value={listName}
                    onChange={(e) => setNewListName(e.target.value)}
                  ></input>
                  <label className='form-label'>Existing List</label>
                  <input
                    type='text'
                    placeholder='Enter a name'
                    name='newListName'
                    className='form=control'
                    value={listName}
                    onChange={(e) => setNewListName(e.target.value)}
                  ></input>
                </div>
              </form>
            </div>
            TEST
          </div>

        </div>

      </div>     
      
      </div>
  )
}

export default HomePageComponent