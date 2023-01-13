import { Link, NavLink } from "react-router-dom";
import ProfilePicture from '../../../assets/ProfilePicture.jpg';
import ImgPage404 from '../../../assets/about/page_404.png';
import ImgPageAbout from '../../../assets/about/page_about.png';
import ImgPagePosts from '../../../assets/about/page_posts.png';
import ImgPageUsers from '../../../assets/about/page_users.png';
import ImgPageUsersHover from '../../../assets/about/page_users_hover.png';
import ImgPageUsersDeleteConfirmation from '../../../assets/about/page_users_delete_confirmation.png';
import ImgPageUsersDeleteMessage from '../../../assets/about/page_users_delete_message.png';
import ImgPageUsersAddDialog from '../../../assets/about/page_users_add_dialog.png';
import ImgPageUsersAddDialogValidation from '../../../assets/about/page_users_add_dialog_validation.png';
import ImgPageUsersAddButton from '../../../assets/about/page_users_add_button.png';
import ImgPageUsersAfterAdd from '../../../assets/about/page_users_after_add.png';
import ImgPageGeneral from '../../../assets/about/page_general.png';
import ImgPageUsersLoading from '../../../assets/about/page_users_loading.png';
import ImgPagePostsLoading from '../../../assets/about/page_posts_loading.png';
import ImgPageSettingsFirst from '../../../assets/about/page_settings_first.png';
import ImgPageSettingsSecond from '../../../assets/about/page_settings_second.png';
import ImgPageUsersAddDemo from '../../../assets/about/page_users_add_demo.png';
import ImgPageMobile from '../../../assets/about/page_mobile.png';

function AboutPage(){
    return (
        <div className="container-fluid">
           
           <h4 className="pb-2">Descrierea aplicației</h4>

           <div className="row">
                <div className="col-md-3 col-sm-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action list-group-item-light active" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profilul meu</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-general-list" data-bs-toggle="list" href="#list-general" role="tab" aria-controls="list-general">Prezentare generală</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-users-list" data-bs-toggle="list" href="#list-users" role="tab" aria-controls="list-users">Pagina utilizatorilor</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-newuser-list" data-bs-toggle="list" href="#list-newuser" role="tab" aria-controls="list-newuser">Adăugare utilizator</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-posts-list" data-bs-toggle="list" href="#list-posts" role="tab" aria-controls="list-posts">Pagina postărilor</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-about-list" data-bs-toggle="list" href="#list-about" role="tab" aria-controls="list-about">Pagina cu descriere</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-404-list" data-bs-toggle="list" href="#list-404" role="tab" aria-controls="list-404">Pagina 404</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Setările aplicației</a>
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
                                        <p className="fw-light">Oficial, sunt un programator de Java cu peste 10 ani experienta.</p>
                                        <p className="fw-light">Totuși, îmi place să descopăr lucruri noi în fiecare zi și nu mă concentrez doar pe un singur limbaj de programare.</p>
                                        <p className="fw-light">Am experiență cu partea de Web, Java, baze de date, DevOps, și mai nou: testare automata.</p>
                                </div>
                                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                                        <style>{`
                                            .profile-picture:hover {
                                                transition: transform 0.5s, filter 1s ease-in-out;
                                                transform: scale(1.05);
                                            }

                                            .profile-picture {
                                                transition: transform 0.5s, filter 1s ease-in-out;
                                                transform: scale(1);
                                            }

                                            .special-picture {
                                                box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 50%);
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
                        <div className="tab-pane fade" id="list-general" role="tabpanel" aria-labelledby="list-general-list">
                            <h5 className="mt-4 mt-md-0">Prezentare generală</h5>

                            <p className="fw-light">Aplicația are un meniu în partea de sus. Acesta conține link-urile către cele 2 pagini: utilizatori și postări dar și link-ul către setările aplicației (partea dreaptă).</p>
                            <p className="fw-light">În partea de jos există un subsol unde se regăsește link-ul către pagina cu descriere.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageGeneral} alt="" /></div>

                            <h6 className="pb-2">Detalii tehnice</h6>

                            <ul>
                                <li>aplicația folosește React Router Dom, React Redux si React Thunk</li>
                                <li>pe partea de UI este folosit Bootstrap 5</li>
                                <li>
                                    până se încarcă datele (utilizatori și postări), apar componente (numărul acestora este aleatoriu) care arată că datele urmează să apară
                                    
                                    <div className="mt-2 mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersLoading} alt="" /></div>
                                    <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPagePostsLoading} alt="" /></div>

                                </li>
                                <li>
                                    aplicația este concepută și pentru dispozitivele mobile
                                    <div className="mt-2 mr-3 mb-3"><img style={{maxWidth: '100%'}} className="special-picture" src={ImgPageMobile} alt="" /></div>

                                </li>
                            </ul>



                        </div>
                        <div className="tab-pane fade" id="list-users" role="tabpanel" aria-labelledby="list-users-list">
                            
                            <h5 className="mt-4 mt-md-0">Pagina utilizatorilor</h5>

                            <p className="fw-light">În această pagină sunt afișati utilizatorii incărcați de la un RestApi: <a href="https://jsonplaceholder.typicode.com/users" className="link-dark" target="_blank">https://jsonplaceholder.typicode.com/users</a></p>
                            <p className="fw-light">Pentru fiecare utilizator se asociază o poză aleasă aleatoriu folosind api-ul Lorem pixel                             <a href="https://api.lorem.space/image/face?w=400&h=400&random" className="link-dark" target="_blank">https://api.lorem.space/image/face?w=400&h=400&random</a></p>
                            <p className="fw-light">De asemenea, pentru fiecare utilizator se alege un salariu aleatoriu și dacă este considerat VIP (câmpuri populate după încărcarea datelor și înainte de afișarea pe ecran)</p>
                            <p className="fw-light">Utilizatorii care sunt marcați ca fiind VIP au un semn special care arată acest lucru.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsers} alt="" /></div>
                            
                            <p className="fw-light">Când mouse-ul este deasupra unui utilizator apare și butonul care poate fi folosit pentru ștergere.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersHover} alt="" /></div>

                            <p className="fw-light">După apăsarea lui, apare și dialog-ul de confirmare.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersDeleteConfirmation} alt="" /></div>

                            <p className="fw-light">Dacă acțiunea este confirmată, utilizatorul este șters din listă și apare un mesaj pe ecran pentru 3 secunde apoi dispare.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersDeleteMessage} alt="" /></div>

                        </div>
                        <div className="tab-pane fade" id="list-newuser" role="tabpanel" aria-labelledby="list-newuser-list">
                            
                            <h5 className="mt-4 mt-md-0">Adăugare utilizator</h5>

                            <p className="fw-light">Formular-ul care poate fi folosit pentru adăugarea unui utilizator nou se poate deschide folosind butonul din partea de sus în pagina de utilizatori.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersAddButton} alt="" /></div>

                            <p className="fw-light">După apăsarea lui, apare formularul care conține câmpurile: nume și prenume, email si VIP. Poza este aleasă aleatoriu dar salariul este fix pentru toți utilizatorii adaugați manual.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersAddDialog} alt="" /></div>
                            
                            <p className="fw-light">Câmpurile formularului sunt validate înainte de salvare.</p>

                            
                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersAddDialogValidation} alt="" /></div>

                            <p className="fw-light">După adăugare, utilizatorul abia creat apare primul în listă.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersAfterAdd} alt="" /></div>

                        </div>
                        <div className="tab-pane fade" id="list-posts" role="tabpanel" aria-labelledby="list-posts-list">
                            <h5 className="mt-4 mt-md-0">Pagina postărilor</h5>

                            <p className="fw-light">În această pagină sunt afișate postările incărcate de la un RestApi: <a href="https://jsonplaceholder.typicode.com/posts" className="link-dark" target="_blank">https://jsonplaceholder.typicode.com/posts</a></p>
                            <p className="fw-light">Fiecare postare este afișată într-o cutiuță separată și titlul are prima literă de tipar.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPagePosts} alt="" /></div>

                        </div>
                        <div className="tab-pane fade" id="list-about" role="tabpanel" aria-labelledby="list-about-list">
                            <h5 className="mt-4 mt-md-0">Pagina cu descriere</h5>

                            <p className="fw-light">În această pagină se găsesc informații despre aplicație. În partea din stânga există un meniu de unde se poate alege o categorie.</p>
                            <p className="fw-light">Categoria implicită este 'Profilul meu'.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageAbout} alt="" /></div>

                        </div>
                        <div className="tab-pane fade" id="list-404" role="tabpanel" aria-labelledby="list-404-list">
                            <h5 className="mt-4 mt-md-0">Pagina 404</h5>

                            <p className="fw-light">Această pagină este afișată dacă în browser este introdusă o pagină care nu există. De exemplu: <NavLink to="/randompage" className="link-dark">Pagină care nu există</NavLink></p>
                            <p className="fw-light">În pagina afisată sunt prezentate câteva informații și un link către pagina principală.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPage404} alt="" /></div>

                        </div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                            <h5 className="mt-4 mt-md-0">Setările aplicației</h5>

                            <p className="fw-light">Din acest panou se pot schimba culorile aplicație și se poate activa modul DEMO (prezentare).</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageSettingsFirst} alt="" /></div>
                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageSettingsSecond} alt="" /></div>
                            
                            <p className="fw-light">Modul DEMO pune valori implicite în formularul de adăugare utilizator și crește timpul de încărcare al datelor cu 3 secunde.</p>

                            <div className="mr-3 mb-3"><img className="special-picture w-100" src={ImgPageUsersAddDemo} alt="" /></div>

                            <p className="fw-light">Aceste setări se pierd la reîncărcarea paginilor.</p>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default AboutPage;