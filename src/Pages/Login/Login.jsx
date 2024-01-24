import { Link } from "react-router-dom";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "sonner";


const Login = () => {

	const axiosSecure = useAxiosSecure();
	
	const handleLogin= async (event) =>{
        event.preventDefault();
		// console.log("dsfsdfsfsdf");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

		const user={
			email:email,
			password:password
		}
       
		const {data} = await axiosSecure.post('/login',user)
		if(data.match == false){
			return toast.error('My error toast');
		}
		console.log(data);

       
    }
  
	
    return (
        <div className="flex justify-center mt-10">
            <div className=" flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-600 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Login in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form onSubmit={handleLogin} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label  className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label  className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
			</div>
			
		</div>
	</form>
	<p className="px-6 text-sm text-center dark:text-gray-400">Dont have an account yet?
				<Link to={'/register'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</Link>.
			</p>
</div>
        </div>
    );
};

export default Login;