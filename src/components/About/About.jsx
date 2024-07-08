import React from 'react'
import './About.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3>INDIAN INSTITUTE OF TECHNOLOGY PALAKKAD</h3>
                            <a href="https://maps.google.com/maps?q=Nila+Campus,Kanjikode,Kerala+678623"><i class="fas fa-map-marker-alt"></i> Nila Campus, Kanjikode, Kerala 678623</a>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Reach Us</h5>
                        <div className="footer-icons">
                                <a href="https://www.instagram.com/yacc.iitpkd"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://discord.gg/sVtEgQCqCk"><i class="fa-brands fa-discord"></i></a>
                                <a href="https://chat.whatsapp.com/HkDMUJbL2pUGonK18Hw0hM"><i class="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.linkedin.com/in/yacc-yet-another-coding-club-b10a7a241"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Us</h5>
                            <p><i class="fa-solid fa-envelope"></i> yacc@iitpkd.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
