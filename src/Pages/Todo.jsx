import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TextField, imageListClasses } from '@mui/material';
import { Button } from '@mui/material';
import { addTodo, deleteTodo, getTodo, searchTodo } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Todo() {

  const [todoData, setTodoData] = useState({
    todo: '',
    description: ''
  })

  const [allTodo, setAllTodo] = useState([])

  const [search,setSearch]=useState('')

  const [searchResult,setSearchResult]=useState([])

  //add todo list
  const handleAdd = async (e) => {
    e.preventDefault()
    const { todo, description } = todoData
    if (!todo || !description) {
      toast.warning('Please fill the form completely !')
    }
    else {
      const response = await addTodo(todoData)
      console.log(response);
      if (response.status >= 200 || response.status < 300) {
        setTodoData(response.data)
        toast.success('Todo added Successfully')
        setTodoData({
          todo: '',
          description: ''
        })
        viewTodo()
      }
      else {
        toast.error('Something Went Wrong... Try again Later')
      }
    }
  }

  //view todo list
  const viewTodo = async () => {
    const { data } = await getTodo()
    setAllTodo(data)
  }

  //delete todo
  const removeTodo = async (id) => {
    await deleteTodo(id)
    viewTodo()
  }

  //search todo
  const handleSearch=async()=>{
    const response=await searchTodo(search)
    setSearchResult(response.data);
  }

  console.log(searchResult);


  useEffect(() => {
    viewTodo()
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className='d-flex justify-content-center align-items-center w-100 flex-column' style={{ height: '100vh' }}>
              <h2 className='text-danger mb-5 fw-5' style={{ fontFamily: '"Cinzel", serif' }}>TODO</h2>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nesciunt incidunt! Perferendis quis natus similique fuga distinctio corporis, necessitatibus, quaerat, velit doloribus ab temporibus dolor delectus facere saepe maiores a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quod nulla nostrum! Est expedita molestias modi itaque obcaecati minus velit illo reprehenderit maiores cum esse, doloremque, animi iste. Delectus, laboriosam. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem commodi, dicta sapiente earum nam dolores dolor soluta voluptatem incidunt quis corrupti cupiditate iure veritatis magni debitis deleniti neque pariatur.</p>

              <div className='mt-5 shadow flex-column d-flex p-5' style={{ width: '500px' }}>
                <TextField id="outlined-basic" onChange={(e) => setTodoData({ ...todoData, todo: e.target.value })} value={todoData.todo} className='mb-3' label="Title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => setTodoData({ ...todoData, description: e.target.value })} value={todoData.description} className='mb-3' label="Description" variant="outlined" />
                <Button variant="contained" onClick={handleAdd} className='p-3'><b>ADD</b></Button>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className='d-flex justify-content-center align-items-center flex-column shadow w-100 mt-5 mb-5' style={{ height: '100vh' }}>
              <h3 className='text center text-primary mb-5' style={{ fontFamily: '"Cinzel", serif' }}>Todo List</h3>
              <Row className='mb-5'>
                <Col md={6} className='d-flex'>
                  <input type="text" className='form-control w-100' placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/> 
                  <button className='btn btn-success ms-3' onClick={handleSearch}>Search</button>
                </Col>
                <Col md={6} >
                  <Dropdown>
                    <Dropdown.Toggle variant="white" className='w-100' id="dropdown-basic">
                      Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Completed</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Favourite</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deleted</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              {searchResult?.length>0?
              searchResult?.map((item)=>(
                    <div className='p-1 shadow rounded w-75 mb-3'>
                    <Row>
                      <Col md={12} className='text-center'>
                        <h5 className='ms-2 mt-2'>title : {item.todo}</h5>
                        <h5 className='ms-2 mt-2'>description : {item.description}</h5>
                        <div className='d-flex justify-content-center align-items-center'>
                          <button onClick={() => removeTodo(item?.id)} className='btn btn-outline-light'><h5 className='text-danger'><i class="fa-solid fa-trash"></i></h5></button>
                          <button className='btn btn-outline-light'><h5 className='text-warning'><i class="fa-solid fa-star"></i></h5></button>
                          <button className='btn btn-outline-light'><h5 className='text-danger'><i class="fa-solid fa-heart"></i></h5></button>
                        </div>
                      </Col>
                    </Row>
                  </div>
              ))
              :<>
                
              {allTodo?.length > 0 ?
                allTodo?.map((item) => (
                  <div className='p-1 shadow rounded w-75 mb-3'>
                    <Row>
                      <Col md={12} className='text-center'>
                        <h5 className='ms-2 mt-2'>title : {item.todo}</h5>
                        <h5 className='ms-2 mt-2'>description : {item.description}</h5>
                        <div className='d-flex justify-content-center align-items-center'>
                          <button onClick={() => removeTodo(item?.id)} className='btn btn-outline-light'><h5 className='text-danger'><i class="fa-solid fa-trash"></i></h5></button>
                          <button className='btn btn-outline-light'><h5 className='text-warning'><i class="fa-solid fa-star"></i></h5></button>
                          <button className='btn btn-outline-light'><h5 className='text-danger'><i class="fa-solid fa-heart"></i></h5></button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))
                : <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' style={{ height: '400px', width: '400px' }} />
              }
                </>
              }
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Todo