export default function Contact() {
    return (
        <div>
            <section className="py-5">
                <div className="container">
                <div className="text-center mb-5">
            <h2 className="fw-bold">Get In Touch</h2>
            <p className="text-muted">We'd love to hear from you! Whether you have a question about <br/> our books, need support, or just want to share your reading experience, reach out to us.</p>
        </div>
                    <div className="row g-4">
                        {/* Contact Form - Left Side */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-3 shadow-sm h-100">
                                <div className="card-body p-4 p-lg-5">
                                    <h2 className="fw-bold mb-4">Send Us a Message</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-pill"
                                                    id="name"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="form-control rounded-pill"
                                                    id="email"
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="form-label">Subject</label>
                                            <select className="form-select rounded-pill" id="subject" required>
                                                <option value="">Select a subject</option>
                                                <option value="order">Order Inquiry</option>
                                                <option value="shipping">Shipping Question</option>
                                                <option value="book">Book Recommendation</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="message" className="form-label">Your Message</label>
                                            <textarea
                                                className="form-control rounded-3"
                                                id="message"
                                                rows="5"
                                                placeholder="Type your message here..."
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information + Map - Right Side */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-3 shadow-sm h-100">
                                <div className="card-body p-0 d-flex flex-column">
                                    {/* Contact Information */}
                                    <div className="p-4 p-lg-5">
                                        <h2 className="fw-bold mb-4">Contact Information</h2>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex">
                                                    <div className="me-3 text-primary">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">Our Address</h5>
                                                        <p className="text-muted mb-0 small">
                                                            123 Book Street<br />
                                                            Jakarta, Indonesia 10110
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex">
                                                    <div className="me-3 text-primary">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">Phone</h5>
                                                        <p className="text-muted mb-0 small">
                                                            <a href="tel:+622112345678" className="text-decoration-none">+62 21 1234 5678</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex">
                                                    <div className="me-3 text-primary">
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">Email</h5>
                                                        <p className="text-muted mb-0 small">
                                                            <a href="mailto:info@booksales.com" className="text-decoration-none">info@booksales.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="d-flex">
                                                    <div className="me-3 text-primary">
                                                        <i className="fas fa-clock"></i>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">Business Hours</h5>
                                                        <p className="text-muted mb-0 small">
                                                            Mon-Fri: 9AM-6PM<br />
                                                            Sat: 10AM-4PM
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map - Integrated with Contact Info */}
                                    <div className="mt-auto" style={{ height: "300px" }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e839560ef85!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1629780000000!5m2!1sen!2sid"
                                            className="w-100 h-100 rounded-bottom"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            title="BookSales Location"
                                        ></iframe>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="p-4 border-top">
                                        <h5 className="mb-3">Follow Us</h5>
                                        <div className="d-flex gap-3">
                                            <a href="#" className="btn btn-outline-primary rounded-circle">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-primary rounded-circle">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-primary rounded-circle">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-primary rounded-circle">
                                                <i className="fab fa-goodreads"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}