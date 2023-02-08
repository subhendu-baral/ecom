import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
        <div className="footer-top py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"><a href="#" target="_blank" rel="noopener noreferrer"><img
                                src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/logo-footer.png?v=1635726957"
                                alt="" width="155" height="43"/></a></div>
                    <div className="col-lg-4 mx-auto subscription">
                        <h4>Subscribe to our Newsletter</h4>
                        <p>Get all the latest information, Sales and Offers.</p>
                    </div>
                    <div className="col-lg-5 sub-form">
                        <form action="">
                            <input type="email" name="email" id="email-id" placeholder="Email Address Here..."/>
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>Contact Details</h4>
                        <p><i className="fa-solid fa-location-dot me-2"></i>1418 Riverwood, Riverwood Drive, CA 96052, US
                        </p>
                        <p><i className="fa-solid fa-envelope me-2"></i><a href="mailto:mail@test.com">mail@test.com</a></p>
                        <p><i className="fa-solid fa-phone me-2"></i><a href="tel:444">Toll Free (123) 456-7890</a></p>
                    </div>
                    <div className="col-lg-3">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">My Orders</a></li>
                            <li><a href="#">Wish List</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Pages</h4>
                        <ul>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <p>Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam maecenas ultricies mi eget mauris.                        </p>
                        <div className="d-flex footer-social">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">© 2022, Riode | Multi-Purpose Shopify Theme Powered by <a href="#">WordPress</a></p>
                    </div>
                    <div className="col-md-6 text-end">
                        <img className='img-fluid' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
