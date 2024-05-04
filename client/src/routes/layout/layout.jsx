import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Layout when there is no user logged in
function Layout() {
	return (
		<div className="layout">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}

//Layout when there is a user logged in
function RequireAuth() {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return <Navigate to="/login" />;
	else {
		return (
			<div className="layout">
				<div className="navbar">
					<Navbar />
				</div>
				<div className="content">
					<Outlet />
				</div>
			</div>
		);
	}
}

export { Layout, RequireAuth };
