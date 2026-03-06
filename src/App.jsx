import { useState } from 'react'

function App() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [error, setError] = useState("");
    const [submit, setSubmit] = useState("");
    const [wasValidated, setWasValidated] = useState(false);

    const today = new Date().toLocaleDateString("en-CA");

    const handleCheckOutChange = (e) => {
        const value = e.target.value;

        if (value < checkIn) {
            setError("Check-out date cannot be before check-in");
            setCheckOut("");
        } else {
            setCheckOut(value);
            setError("");
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (!e.target.checkValidity()) {
            setWasValidated(true);
            return;
        }

        setWasValidated(true);
        setSubmit("Booking Confirmed!");

        setCheckIn("");
        setCheckOut("");
        setWasValidated(false);
        e.target.reset();
    }

    return (
        <>
        <img src='/image.png' alt='hotel image' className='background-img'/>
        <form
            className={`form ${wasValidated ? 'was-validated' : ''}`}
            noValidate
            onSubmit={handleSubmitForm}
        >
            {submit && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {submit}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            {error && (
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            
            <h1 className=''>Hotel Booking</h1>
            <p className='mb-5'>Find and book your perfect stay with ease</p>

            <div className='card-box w-60'>
                <div class="row g-3 mb-4">
                    <div class="col">
                        <label className="">Full Name</label>
                        <input type="text" class="form-control" placeholder="Enter the name" aria-label="First name" required />
                    </div>
                    <div class="col">
                        <label className="">E-mail</label>
                        <input type="email" class="form-control" placeholder="example@gmail.com" />
                    </div>
                </div>
                
                <div className='mb-4'>
                    <label className="">Check-in Date</label>
                    <input
                        type='date'
                        min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="form-control"
                        required
                    />
                    <div className="invalid-feedback">Please select a check-in date.</div>
                </div>

                <div className='mb-4'>
                    <label className="">Check-out Date</label>
                    <input
                        type='date'
                        min={checkIn}
                        value={checkOut}
                        disabled={!checkIn}
                        onChange={handleCheckOutChange}
                        className="form-control"
                        required
                    />
                    <div className="invalid-feedback">Please select a check-out date.</div>
                </div>

                <div className='mb-4 has-validation'>
                    <label for="roomType">Room Type</label>
                    <select className="form-select" aria-label="Default select example" id="roomType" required>
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                        <option value="3">Suite</option>
                    </select>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>

                <div class="row mb-4">
                    <label>Guests</label>
                    <div className="col">
                        <input type="number" class="form-control" placeholder="adults" required min="1" />
                        <div className="invalid-feedback">Please enter number of adults.</div>
                    </div>
                    <div className="col">
                        <input type="number" class="form-control" placeholder="children" required min="0" />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="textarea" className="form-label">Special Requests</label>
                    <textarea className="form-control" id="textarea" placeholder='Any additional preferences..' rows="3"></textarea>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary"> Confirm Booking </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default App
