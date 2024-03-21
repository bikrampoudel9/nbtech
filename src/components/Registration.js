import '../css/registration.css'
function Registration() {
    return (
        <div>
            <div className="d-flex vh-100 align-items-center justify-content-center registration-form">
                <form className="">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text small">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="contact" className="form-label">Phone Number:</label>
                        <input type="number" className="form-control" id="contact" />
                    </div>

                    <div className="mb-2 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}
export default Registration;

