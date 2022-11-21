import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const AllUsers = () => {
    const { data:userData = [] ,refetch} = useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data; 
        }
    })

    const handleAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:"PUT",
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res => res.json())
        .then(data => {
            toast.success("Admin Created Succesfully! ☪ ")
            refetch();
        })
        
    }
  return (
    <>
    <div className='text-3xl font-bold '>AllUsers</div>

    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin/user</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        userData.length && userData.map((user,i) => <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role !== "admin" && <button onClick={()=> handleAdmin(user._id)} className='btn btn-xs bg-cyan-600 text-white'>MAKE ADMIN</button>}</td>
            <td><button className='btn btn-xs bg-red-600 text-white'>DELETE</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default AllUsers