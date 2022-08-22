import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Accueil from './Accueil'
import Favoris from './Favoris'
import Ajouter from './Ajouter'



export default function Header() {

    return (
        <div>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
                    <div class="container">
                        <a class="navbar-brand" href="#">Gestion des films</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarsExample07">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="Accueil"> <a class="nav-link active" aria-current="page" href="#" style={{ color: 'yellow', fontSize: 'Large' }}>Accueil</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Favoris"> <a class="nav-link active" aria-current="page" href="#" style={{ color: 'yellow', fontSize: 'Large' }}>Mes Favoris</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Ajouter"> <a class="nav-link active" aria-current="page" href="#" style={{ color: 'yellow', fontSize: 'Large' }}>Ajouter Un film</a></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="Accueil" element={<Accueil />} />
                    <Route path="Favoris" element={<Favoris />} />
                    <Route path="Ajouter" element={<Ajouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}
