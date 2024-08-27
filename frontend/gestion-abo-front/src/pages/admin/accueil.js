import React from 'react';
import AdminNavbar from '../../layout/navbar';
// Importer SubscriptionChart si vous avez l'intention de l'ajouter plus tard
// import SubscriptionChart from '../../components/SubscriptionChart';

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            {/* Inclure SubscriptionChart lorsque vous avez des données */}
            {/* <SubscriptionChart /> */}
          </div>
        </div>
        {/* Autre contenu spécifique à l'admin ici */}
      </div>
    </div>
  );
};

export default AdminHome;
