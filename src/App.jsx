import { useState } from 'react'

function App() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [error, setError] = useState("");

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

    return (

        <form className='form'>
            {error && (
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            <h1 className='mb-5'>Hotel Booking Form</h1>

            <div className='border p-4 m-4 w-60'>
                <div className='mb-4'>
                    <label className="">Check-in Date</label>
                    <input
                        type='date'
                        min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className='mb-4'>
                    <label className="">Check-out Date</label>
                    <input
                        type='date'
                        min={checkIn}
                        value={checkOut}
                        disabled={!checkIn}
                        onChange={handleCheckOutChange}
                        className="form-control" />
                </div>

                <div className='mb-4'>
                    <label>Room Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                        <option value="3">Suite</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label>Guests</label>
                    <input type='number' min="1" className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Special Requests</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Any additional preferences..' rows="3"></textarea>
                </div>

                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Confirm Booking</button>
                </div>
            </div>
        </form>
    )
}

export default App
