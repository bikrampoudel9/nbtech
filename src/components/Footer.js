import React from 'react'
import '../css/footer.css'

export default function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h3>About Us</h3>
                            <p>
                                Nbtech is learning platform.
                            </p>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h3>Links</h3>
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-md-0">
                            <h3>Contact</h3>
                            <p>Itahari <br/> <a href="mailto:nbtech@gmail.com">nbtech@gmail.com</a></p>
                            <ul class="list-inline social-icons">
                                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p class="text-center">&copy; NBtech. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}
