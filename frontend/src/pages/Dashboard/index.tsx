import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py=3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>Todas Vendas</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Todas Vendas</h5>
                        <BarChart />
                    </div>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;