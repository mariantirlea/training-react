import { NavLink } from "react-router-dom";
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

function AboutPage(){
    return (
        <div className="container-fluid">
           
           <h4 className="pb-2">Descrierea aplicației</h4>

           <div className="row">
                <div className="col-md-3 col-sm-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action list-group-item-light active" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profilul meu</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-users-list" data-bs-toggle="list" href="#list-users" role="tab" aria-controls="list-users">Pagina utilizatorilor</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-newuser-list" data-bs-toggle="list" href="#list-newuser" role="tab" aria-controls="list-newuser">Adaugare utilizator</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-posts-list" data-bs-toggle="list" href="#list-posts" role="tab" aria-controls="list-posts">Pagina postarilor</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-about-list" data-bs-toggle="list" href="#list-about" role="tab" aria-controls="list-about">Pagina cu descriere</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-404-list" data-bs-toggle="list" href="#list-404" role="tab" aria-controls="list-404">Pagina 404</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Setarile aplicatiei</a>
                    </div>
                </div>
                <div className="col-md-9 col-sm-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            
                            <h5 className="text-center mt-4 mt-md-0">Profilul meu</h5>
                            <p className="text-center pb-4 fst-italic">Dezvoltator software orientat spre rezultate</p>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="pb-2">Despre mine pe scurt</h5>
                                        <p className="fw-light">Oficial, sunt un programator de java cu peste 10 ani experienta.</p>
                                        <p className="fw-light">Totusi, îmi place să descopăr lucruri noi în fiecare zi și nu mă concentrez doar pe un singur limbaj de programare.</p>
                                        <p className="fw-light">Am experienta cu partea de Web, Java, baze de date, DevOps, si mai nou: testare automata.</p>
                                </div>
                                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                                        <style>{`
                                            .profile-picture:hover {
                                                transition: transform 0.5s, filter 1s ease-in-out;
                                                transform: scale(1.05) rotate(10deg);
                                            }

                                            .profile-picture {
                                                transition: transform 0.5s, filter 1s ease-in-out;
                                                transform: scale(1);
                                            }
                                            
                                            `}</style>
                                        <img style={{maxWidth: '250px'}} className="profile-picture w-100 ms-4 me-4 rounded-circle" src={ProfilePicture} alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="pb-2">Detalii</h5>

                                        <p className="fw-bold mb-0">Nume si prenume:</p>
                                        <p className="fw-light">Marian Tîrlea</p>

                                        <p className="fw-bold mb-0">Vârstă:</p>
                                        <p className="fw-light">30</p>

                                        <p className="fw-bold mb-0">Locație:</p>
                                        <p className="fw-light">București</p>

                                        <a className="btn" href="https://github.com/mariantirlea" target="_blank"><i className="bi bi-github"></i></a>
                                        <a className="btn" href="https://www.linkedin.com/in/mariantirlea" target="_blank"><i className="bi bi-linkedin"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list-users" role="tabpanel" aria-labelledby="list-users-list">
                            
                            <h5 className="mt-4 mt-md-0">Pagina utilizatorilor</h5>

                        </div>
                        <div className="tab-pane fade" id="list-newuser" role="tabpanel" aria-labelledby="list-newuser-list">
                            
                            <h5 className="mt-4 mt-md-0">Adaugare utilizator</h5>

                        </div>
                        <div className="tab-pane fade" id="list-posts" role="tabpanel" aria-labelledby="list-posts-list">
                            <h5 className="mt-4 mt-md-0">Pagina postarilor</h5>
                        </div>
                        <div className="tab-pane fade" id="list-about" role="tabpanel" aria-labelledby="list-about-list">
                            <h5 className="mt-4 mt-md-0">Pagina cu descriere</h5>
                        </div>
                        <div className="tab-pane fade" id="list-404" role="tabpanel" aria-labelledby="list-404-list">
                            <h5 className="mt-4 mt-md-0">Pagina 404</h5>
                        </div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                            <h5 className="mt-4 mt-md-0">Setarile aplicatiei</h5>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default AboutPage;