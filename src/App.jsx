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
            <img src='/image.png' alt='hotel image' className='background-img' />
            <form
                className={`form ${wasValidated ? 'was-validated' : ''}`}
                noValidate
                onSubmit={handleSubmitForm}
            >
                {submit && (
                    <div className="alert alert-success alert-dismissible fade show alert-fixed" role="alert">
                        {submit}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setSubmit("")}
                        ></button>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger alert-dismissible fade show alert-fixed" role="alert">
                        {error}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setError("")}
                        ></button>
                    </div>
                )}

                <h1 className=''>Hotel Booking</h1>
                <p className='mb-5'>Find and book your perfect stay with ease</p>

                <div className='card-box w-60'>
                    <div className="row g-3 mb-4">
                        <div className="col">
                            <label htmlFor='fullName'>Full Name</label>
                            <input type="text" id='fullName' className="form-control" placeholder="Enter the name" required />
                        </div>
                        <div className="col">
                            <label htmlFor='email'>E-mail</label>
                            <input type="email" id='email' className="form-control" placeholder="example@gmail.com" />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='checkIn'>Check-in Date</label>
                        <input
                            type='date'
                            id='checkIn'
                            min={today}
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="form-control"
                            required
                        />
                        <div className="invalid-feedback">Please select a check-in date.</div>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='checkOut'>Check-out Date</label>
                        <input
                            type='date'
                            id='checkOut'
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
                        <label htmlFor="roomType">Room Type</label>
                        <select className="form-select" aria-label="Default select example" id="roomType" required>
                            <option value="1">Single</option>
                            <option value="2">Double</option>
                            <option value="3">Suite</option>
                        </select>
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>

                    <div className="row mb-4">
                        <label htmlFor='guests'>Guests</label>
                        <div className="col">
                            <input type="number" id='guests' className="form-control" placeholder="adults" required min="1" />
                            <div className="invalid-feedback">Please enter number of adults.</div>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="children" required min="0" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="request" className="form-label">Special Requests</label>
                        <textarea className="form-control" id="request" placeholder='Any additional preferences..' rows="3"></textarea>
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
