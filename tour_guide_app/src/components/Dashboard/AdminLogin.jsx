import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const AdminLogin = () => {

    const navigate = useNavigate();

    const [adminData, setAdminData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleValue = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const {name, email, password} = adminData;
        if(name==="Admin" && email==="admin@gmail.com" && password ==="admin321"){
            console.log("Login Sucessfully!!");
            navigate("/Admin/Panel", { replace: true } )
        }else{
            alert("Invalide Email and PAssword!!");
        }
      };
    
    return (
        <>
            <div class="min-h-screen flex items-center justify-center bg-gray-200">
                <div class="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Admin Panel</h2>
                    <form action="#" method="POST" class="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={adminData.name}
                                onChange={handleValue}
                                name="name"
                                placeholder="Enter your name"
                                class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={adminData.email}
                                onChange={handleValue}
                                name="email"
                                placeholder="Enter your email"
                                class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={adminData.password}
                                onChange={handleValue}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;