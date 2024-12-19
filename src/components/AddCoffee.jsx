import React from 'react'
import Swal from 'sweetalert2'

const AddCoffee = () => {
            const handleSubmit = (e)=>{
                    e.preventDefault();
                    const form = e.target;
                    const name = form.name.value;
                    const chef = form.chef.value;
                    const supplier = form.supplier.value;
                    const taste = form.taste.value;
                    const category = form.category.value;
                    const details = form.details.value;
                    const photo = form.photo.value;
                    const newCoffee = {name,chef,supplier,taste,category,details,photo}
                    console.log(newCoffee)

                    fetch('http://localhost:5000/coffee',{
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(newCoffee)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                        if(data.insertedId){
                            Swal.fire({
                                title: "success",
                                text: "coffee added successfully",
                                icon: "success"
                              });
                        }
                    })
            }

  return (
    <div className='w-[700px] mx-auto px-5 py-10 bg-[#091b30]'>
        <div className='space-y-5'>
            <h2 className='text-center text-3xl'>Add New Coffee</h2>
            <p className='text-center w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <div className=''>
            <form className='grid grid-cols-2 gap-5 ' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label><br />
                    <input className='border-2 w-full' type="text" name='name' />
                </div>
                <div>
                    <label htmlFor="">Chef</label><br />
                    <input className='border-2 w-full' type="text" name='chef' />
                </div>
                <div>
                    <label htmlFor="">Supplier</label><br />
                    <input className='border-2 w-full' type="text" name='supplier' />
                </div>
                <div>
                    <label htmlFor="">Taste</label><br />
                    <input className='border-2 w-full' type="text" name='taste' />
                </div>
                <div>
                    <label htmlFor="">Category</label><br />
                    <input className='border-2 w-full' type="text" name='category' />
                </div>
                <div>
                    <label htmlFor="">Details</label><br />
                    <input className='border-2 w-full' type="text" name='details' />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="">Photo</label><br />
                    <input className='border-2 w-full' type="text" name='photo' />
                </div>
                <div className='col-span-2'>
                    
                    <input className='border-2 w-full' type="submit" value='Add Coffee' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCoffee
