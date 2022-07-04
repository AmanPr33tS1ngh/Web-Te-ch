import React, { useState } from 'react'

const Contact = () => {
    const [text, setText] = useState('');
    const [num, setNum] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='contactForm'>
            <div className="heading"><h3>Contact Us </h3></div>
            <div className="contact">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <div className="centerInput">
                            <input type="text" class="form-control" id="exampleInputEmail1" value={text}
                                onChange={(e) => setText(e.target.value)} aria-describedby="emailHelp" /></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Number</label>

                        <div className="centerInput">
                            <input type="number" class="form-control" id="exampleInputEmail1" value={num}
                                onChange={(e) => setNum(e.target.value)}

                                aria-describedby="emailHelp" /></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <div className="centerInput">
                            <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" /></div>
                    </div>


                    <button type="submit" class="btn__ btn ">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
