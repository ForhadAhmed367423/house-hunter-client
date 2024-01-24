import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const Register = () => {
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data)
    
        const userInfo = {
            name: data.name,
            email: data.email,
            password:data.password,
            phone:data.phone
          }
          
            
            axiosSecure.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
              })
              

         
          .catch(error => {
            console.log(error)
          });



     
  }
        
    

return (
//         <div className="flex justify-center mt-10 ">
//         <div className=" flex flex-col max-w-md w-[500px] p-6 rounded-md sm:p-10 dark:bg-gray-600 dark:text-gray-100">
// <div className="mb-8 text-center">
//     <h1 className="my-3 text-4xl font-bold">Register Now</h1>
//     <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
// </div>
// <form  action="" className="space-y-12">
//     <div className="space-y-2">

//     <div>
//             <label  className="block mb-2 text-sm">Full Name</label>
//             <input type="text" name="name" id="name" placeholder="leroyfd" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//         </div>
//         <div>
//             <label  className="block mb-2 text-sm">Email address</label>
//             <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//         </div>
//         <div>
//             <div className="flex justify-between mb-2">
//                 <label  className="text-sm">Password</label>
//             </div>
//             <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//         </div>

//         <div>
//             <div className="flex justify-between mb-2">
//                 <label  className="text-sm">Phone</label>
                
//             </div>
//             <input type="text" name="phone" id="number" placeholder="+8801245530" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//         </div>

//         <div>
//             <div className="flex justify-between mb-2">
//                 <label  className="text-sm">Slect Your role</label>
                
//             </div>
//                 <select  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" name="role" id="">
//                     <option value="">House Owner</option>
//                     <option value="">House Renter</option>
//                 </select>
//         </div>
//     </div>
//     <div className="space-y-2">
//         <div>
//             <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
//         </div>
//         <p className="px-6 text-sm text-center dark:text-gray-400">Dont have an account yet?
//             <Link to={'/login'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Login</Link>.
//         </p>
//     </div>
// </form>
// </div>
//     </div>

<div className="hero min-h-screen bg-base-200">

<div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Sign Up now!</h1>
    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  </div>
  <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
        {errors.name && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
        {errors.email && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input type="text" placeholder="+880178586556" {...register("phone", { required: true })} name="phone" className="input input-bordered" />
        {errors.phone && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" {...register("password", {
          required: true, maxLength: 15,
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
          , minLength: 8
        })} name="password" className="input input-bordered" />
        {errors.password?.type === "required" && (
          <p className="text-red-600">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-600">Password must be 6 character</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="text-red-600">password must be less then 20 character</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-600">password must have one uppercase one lowercase and one special character</p>
        )}


        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-4">
        <input className="primaryBtn btn" type="submit" value="Sign Up" />
      </div>
    </form>
  </div>
</div>
</div>
      
    );
};

export default Register;