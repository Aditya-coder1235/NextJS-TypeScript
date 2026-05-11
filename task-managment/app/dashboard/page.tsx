"use client"
import axios from 'axios'
import { useEffect, useState } from 'react';

type Task={
  title:string;
  description:string;
  completed:boolean;
  user:string
}

const Dashboard = () => {
  const[tasks,setTasks]=useState<Task[]>([])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/task');
      // console.log(response.data);
      setTasks(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[]);

  return (
      <>
          <div>
              {tasks.map((task, index) => (
                  <div key={index}>
                      <h2>{task.title}</h2>
                      <p>{task.description}</p>
                      <p>Completed: {task.completed ? "Yes" : "No"}</p>
                  </div>
              ))}
          </div>

          <div>
            <form action="">
              <input type="text" />
              <input type="text" />
              <button type='submit'>Create Task</button>
            </form>
          </div>
      </>
  );
}

export default Dashboard;
