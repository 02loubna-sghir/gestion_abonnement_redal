import React from 'react';
import NavbarC from '../../layout/navbarClient';
import borneImage from '../../assets/borne.png'; // Importer l'image
import guideUser from '../../assets/guideuser.png';

function AccueilC() {
  const clientEmail = "client@example.com";

  return (
    <div>
      <NavbarC clientEmail={clientEmail} />
      <main className="container" style={{ padding: '20px' }}>
        {/* Section d'introduction */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <h1 
              className="display-4 text-white p-4" 
              style={{ backgroundColor: '#4A90E2', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Borne Intelligente des Eaux Réutilisées
            </h1>
          </div>
          <div className="col-md-6 text-center">
            <img 
              src={borneImage} 
              alt="Borne Intelligente"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </section>

        {/* Utilisations de la Borne Intelligente */}
        <section className="mb-5">
          <h2 className="h4 mb-3" style={{ color: '#4A90E2' }}>Quelles utilisations de la Borne Intelligente ?</h2>
          <p>
            Les eaux usées épurées peuvent être utilisées pour l’arrosage des espaces verts, 
            le nettoyage des voies publiques, le lavage des voitures ainsi que toute autre activité 
            consommatrice d’eaux non potables.
          </p>
        </section>
        
        {/* Bénéficier du service */}
        <section className="mb-5">
          <h2 className="h4 mb-3" style={{ color: '#4A90E2' }}>Comment bénéficier du service de la Borne Intelligente ?</h2>
          <ul className="list-unstyled">
            <li>Alimenter votre carte selon votre besoin.</li>
            <li>
              Utiliser votre carte sur l’une de nos bornes intelligentes REUE à hauteur de 250m³ d’eau par mois, 
              de 8h à 20h.
            </li>
          </ul>
        </section>

        {/* Guide utilisateur */}
<section className="mb-5">
  <div 
    style={{ 
      height: 'auto', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '10px', 
      border: '10px solid #ddd',
      overflow: 'hidden', 
      textAlign: 'center',  // Center the image within the container
      padding: '10px'       // Add some padding to avoid the image touching the border
    }}>
    <img 
      src={guideUser} 
      alt="Guide utilisateur"
      className="img-fluid"
      style={{ 
        maxWidth: '300%',   // Ensure the image fills the container width
        height: 'auto',     // Maintain aspect ratio
        maxHeight: '400px'  // Set a maximum height for better control
      }} 
    />
  </div>
  <h2 className="h4 mt-3" style={{ color: '#4A90E2' }}>Quelles sont les caractéristiques techniques du tuyau ?</h2>
</section>



        {/* Vidéo YouTube */}
        <section className="mb-5">
          <div style={{ height: 'auto', backgroundColor: '#000', borderRadius: '10px', border: '1px solid #ddd' }}>
            <iframe 
              width="100%"  
              height="315" 
              src="https://www.youtube.com/embed/xslNvrEX1UI" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Où sont placées les Bornes Intelligentes? */}
        <section className="mb-5">
          <h2 className="h4 mb-3" style={{ color: '#4A90E2' }}>Où sont placées les Bornes Intelligentes?</h2>
          <table className="table table-hover table-striped text-center" style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #ddd' }}>
            <thead style={{ backgroundColor: '#4A90E2', color: '#fff' }}>
              <tr>
                <th scope="col">N° d'ordre</th>
                <th scope="col">Adresse</th>
                <th scope="col">Localisation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f0f8ff' }}>
                <td>1</td>
                <td>Challa Bab Zair</td>
                <td><a href="https://www.google.com/maps/place/34%C2%B000'25.3%22N+6%C2%B049'29.6%22W/@34.007015,-6.824885,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.007015!4d-6.824885?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>2</td>
                <td>Grand Théâtre</td>
                <td><a href="https://www.google.com/maps/place/34%C2%B001'12.4%22N+6%C2%B048'46.8%22W/@34.0201111,-6.813,636m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d34.0201111!4d-6.813?hl=fr&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#f0f8ff' }}>
                <td>3</td>
                <td>Av. Mokhtar Gazoulit, Musée Rabat</td>
                <td><a href="https://www.google.com/maps/place/34%C2%B001'32.7%22N+6%C2%B051'00.7%22W/@34.025749,-6.8507402,186m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xd09f10f27641c9d8!7e2!8m2!3d34.0257492!4d-6.8501932?hl=fr" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>4</td>
                <td>Av. Abderrahim Bouabid ANFCC, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B056'44.9%22N+6%C2%B053'01.9%22W/@33.9457368,-6.8843749,176m/data=!3m1!1e3!4m5!3m4!1s0x0:0x59b2d4b354c45469!8m2!3d33.9458026!4d-6.8838463?hl=fr" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>5</td>
                <td>Av. Abderrahim Bouabid, Mosquée Lalla Soukaina Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B058'35.3%22N+6%C2%B051'40.8%22W/@33.9764722,-6.8613333,159m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9764722!4d-6.8613333?hl=fr&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>6</td>
                <td>Rue Bani Ourraine, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B058'31.1%22N+6%C2%B051'43.3%22W/@33.9753056,-6.8620278,159m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9753056!4d-6.8620278?hl=fr&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>7</td>
                <td>Hotel Sofitel, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B059'30.1%22N+6%C2%B050'09.0%22W/@33.9916944,-6.8358333,159m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9916944!4d-6.8358333?hl=fr&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>8</td>
                <td>Av. Abderrahim Bouabid Av Boustan, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B056'54.1%22N+6%C2%B053'02.7%22W/@33.9483514,-6.8866559,927m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.948347!4d-6.884081?entry=ttu" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>9</td>
                <td>Av. Abderrahim Bouabid, av Doulb Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B057'03.2%22N+6%C2%B052'57.6%22W/@33.9493366,-6.8837779,1273m/data=!3m1!1e3!4m7!1m2!2m1!1s362053+;+376776!3m3!8m2!3d33.9508889!4d-6.8826667?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>10</td>
                <td>Rue Abou Al Mahassine Al Houssaini, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B058'51.5%22N+6%C2%B053'30.2%22W/@33.9809722,-6.8917222,636m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9809722!4d-6.8917222?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>11</td>
                <td>Entré de Rabat AV Hassan II</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B057'48.7%22N+6%C2%B054'04.7%22W/@33.9635211,-6.9019557,230m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.96352!4d-6.901312?entry=ttu" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>12</td>
                <td>AV Hassan II Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B056'58.9%22N+6%C2%B053'41.8%22W/@33.9496891,-6.8955857,230m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.949688!4d-6.894942?entry=ttu" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>13</td>
                <td>AV Hassan II Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B057'19.7%22N+6%C2%B053'24.1%22W/@33.9554722,-6.8900278,318m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9554722!4d-6.8900278?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>14</td>
                <td>Av. Oued Akkrach, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B059'31.8%22N+6%C2%B048'25.0%22W/@33.9921667,-6.8069444,318m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9921667!4d-6.8069444?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
              <tr style={{ backgroundColor: '#e6f7ff' }}>
                <td>15</td>
                <td>Rocade de Rabat, Rabat</td>
                <td><a href="https://www.google.com/maps/place/33%C2%B057'24.6%22N+6%C2%B050'05.9%22W/@33.9568333,-6.8349722,636m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.9568333!4d-6.8349722?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" style={{ color: '#4A90E2', textDecoration: 'underline' }}>ici</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Ajoutez ici le contenu supplémentaire que vous souhaitez afficher sur la page d'accueil */}
      </main>
    </div>
  );
}

export default AccueilC;
