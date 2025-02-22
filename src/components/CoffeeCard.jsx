import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {name,chef,supplier,taste,category,details,photo}=coffee

    const handleDelete =(_id)=>{
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                        Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"

                
              });
              const remaining = coffees.filter(cof=>cof._id!==_id)
              setCoffees(remaining);

                }
            })
            }
          });
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body flex-row justify-between">
   <div className=''>
   <h2 className="card-title">{name}</h2>
    <p>{taste}</p>
    <p>{chef}</p>
    <p>{details}</p>
   </div>
    <div className="card-actions justify-end flex-col">
      <button className="btn btn-primary">Watch</button>
      <button onClick={()=>handleDelete(coffee._id)} className='btn btn-error'>Delete</button>
      <Link to={`updateCoffee/${coffee._id}`}><button className='btn btn-success'>Update</button></Link>
    </div>
  </div>
</div>
  )
}

export default CoffeeCard
