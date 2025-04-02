import React from 'react'
import './style.css'

const ContactUs = () => {
  return (
      
    <>
    <div
      class="container"
    >
      <div
        class="row justify-content-center align-items-center g-2"
      >
        <div class="col">
          <div class="card">
            <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
            <div class="card-body">
            <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}

export default ContactUs
