import Table from "./table";
import AdminNavBar from "./navbar";

function Admin() {
  return (
    <>
      <div>
        <AdminNavBar />
      </div>

      <div>
        <Table />
      </div>
    </>
  );
}

export default Admin;
