import "./assets/css/perfil.css";
//import useFetch from "./useFetch";
import {useState} from "react";
import { useHistory } from "react-router-dom";


import { Link } from "react-router-dom";

const Registro = () => {
	const url_photo = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"

	const [nombre, setnombre] = useState('');
  	const [apellido, setapellido] = useState('');
  	const [cedula, setcedula] = useState('');
  	const [direccion, setdireccion] = useState('');
	const [ciudad, setciudad] = useState('');
	const [provincia, setprovincia] = useState('');
	const [limiteCreadito, setcredito] = useState('');
	const [email, setemail] = useState('');
	const [telefono, settelefono] = useState('');
	const history = useHistory();

	const crearCliente = (e) => {
		e.preventDefault();
		const blog = { nombre, apellido, cedula, direccion, ciudad, provincia, limiteCreadito, email, telefono };
		
		fetch('http://localhost:3001/clientes', {
		  method: 'POST',
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(blog)
		}).then(() => {
		  alert('cliente creado')
		  history.push('/inicio');
		}).catch(error => {
			console.log(error)
			alert('Llene los datos')
		})
	  }

	return (
		<div className="registro">
			<div className="container rounded bg-white mt-5 mb-5">
			    <div className="row">
			        <div className="col-md-3 border-right">
			            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
			            	<img className="rounded-circle mt-5" width="150px" src={url_photo}/>
							<button className="btn btn-primary btn-responsive btninter left" type="button">Subir</button>
								<span className="font-weight-bold"></span>
			            		<span className="text-black-50"></span><span> </span>
			            </div>
			        </div>
			        <div className="col-md-5 border-right">
			            <div className="p-3 py-5">
			                <div className="d-flex justify-content-between align-items-center mb-3">
			                    <h4 className="text-right">Registrar Usuario</h4>
			                </div>
			                <div className="row mt-2">
			                    <div className="col-md-6"><label className="labels">Nombre</label><input type="text" className="form-control" placeholder="Escriba su nombre..." value={nombre} onChange={(e) => setnombre(e.target.value)}/></div>
			                    <div className="col-md-6"><label className="labels">Apellido</label><input type="text" className="form-control" value="" placeholder="Escriba su apellido..." value={apellido} onChange={(e) => setapellido(e.target.value)}/></div>
			                </div>
			                <div className="row mt-3">
			                    <div className="col-md-12"><label className="labels">Cedula</label><input type="text" className="form-control" placeholder="Ingrese su cedula..." value={cedula} onChange={(e) => setcedula(e.target.value)} /></div>
			                    <div className="col-md-12"><label className="labels">Direccion</label><input type="text" className="form-control" placeholder="Ingrese su direccion..." value={direccion} onChange={(e) => setdireccion(e.target.value)}/></div>
			                    <div className="col-md-12"><label className="labels">Ciudad</label><input type="text" className="form-control" placeholder="Ingrese la ciudad..." value={ciudad} onChange={(e) => setciudad(e.target.value)} /></div>
			                    <div className="col-md-12"><label className="labels">Provincia</label><input type="text" className="form-control" placeholder="Ingrese la provincia..." value={provincia} onChange={(e) => setprovincia(e.target.value)} /></div>
			                    <div className="col-md-12"><label className="labels">Credito</label><input type="text" className="form-control" placeholder="Ingrese el credito..." value={limiteCreadito} onChange={(e) => setcredito(e.target.value)} /></div>
			                    <div className="col-md-12"><label className="labels">Telefono</label><input type="text" className="form-control" placeholder="Ingrese el telefono..." value={telefono} onChange={(e) => settelefono(e.target.value)} /></div>
			                    <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Ingrese el correo electronico..." value={email} onChange={(e) => setemail(e.target.value)} /></div>
			                </div>
			                
			                <div className="mt-5 text-center">
								<div>
									<button className="btn btn-primary btn-responsive btninter left" type="button" onClick={crearCliente} >Crear Cliente</button>
								</div>
								<div>
									<Link to="/inicio">
										<button className="btn btn-danger btn-info btn-responsive btninter right" type="button">Cancelar</button>
									</Link>
								</div>
							</div>
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	)
}
export default Registro;
