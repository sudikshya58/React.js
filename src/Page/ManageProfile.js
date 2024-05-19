import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { userDetail, userUpdate } from '../api/APIS';
import { Button } from '../Component/Button';
import { UserProfile } from '.'; // Assuming UserProfile is an array of objects with 'Formname', 'type', and 'name' properties
import { useNavigate } from 'react-router-dom';

export const ManageProfile = () => {
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({}); 
   const navigate=useNavigate();
   const email=localStorage.getItem("email")// State to hold form data

   useEffect(() => {
       const fetchUserProfile = async () => {
           try {
               const res = await userDetail();
               setForm(res.data.data); // Initialize form data with user profile data
           } catch(error) {
               toast.error(error.msg);
           }
       };
       
       fetchUserProfile();
   }, []);

   const handleChange = (e) => {
       const { name, value } = e.target;
       setForm(prevForm => ({
           ...prevForm,
           [name]: value
       }));
   };

   const handleSubmit = async (e) => {
       e.preventDefault();
       setLoading(true);
       try {
           const res = await userUpdate(form);
           navigate("/"); // Send updated form data to server
           toast.success(res.data.msg);
       } catch (err) {
           toast.error(err.msg);
       } finally {
           setLoading(false);
       }
   };

   return (
       <div>
          
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
               <form
                   onSubmit={handleSubmit}
                   className="flex flex-col items-center w-full max-w-md p-8 bg-white shadow-md rounded-lg"
               >
                <h1 className='font-bold mb-10'>Edit Profile</h1>
                   {UserProfile.map((item, i) => (
                       <div key={i} className="flex flex-col w-full mb-6">
                           <label className="mb-2 font-semibold">{item.Formname}</label>
                           <input
                               type={item.type}
                               required
                               name={item.name}
                               value={form[item.name] || ''} // Initialize value from form state
                               onChange={handleChange}
                               className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                           />
                       </div>
                   ))}
                   <Button disabled={loading} type="submit" name="Submit" loading={loading}/>
               </form>
           </div>
       </div>
   );
};
