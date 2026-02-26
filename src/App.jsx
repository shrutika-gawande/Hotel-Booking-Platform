import { useState } from 'react'

function App() {

    return (
        <form className='form'>
            <h1 className='mb-5'>Hotel Booking Form</h1>
            <div className="row mb-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@gmail.com" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            {/* <div className="">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" />
            </div> */}

            <div class="row g-3 mb-4">
                <div class="col-sm-7">
                    <input type="text" class="form-control" placeholder="City" aria-label="City"/>
                </div>
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="State" aria-label="State"/>
                </div>
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip"/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default App
