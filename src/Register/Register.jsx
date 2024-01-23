import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center mt-10 ">
        <div className=" flex flex-col max-w-md w-[500px] p-6 rounded-md sm:p-10 dark:bg-gray-600 dark:text-gray-100">
<div className="mb-8 text-center">
    <h1 className="my-3 text-4xl font-bold">Register Now</h1>
    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
</div>
<form  action="" className="space-y-12">
    <div className="space-y-2">

    <div>
            <label  className="block mb-2 text-sm">Full Name</label>
            <input type="text" name="name" id="name" placeholder="leroyfd" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>
        <div>
            <label  className="block mb-2 text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>
        <div>
            <div className="flex justify-between mb-2">
                <label  className="text-sm">Password</label>
            </div>
            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>

        <div>
            <div className="flex justify-between mb-2">
                <label  className="text-sm">Phone</label>
                
            </div>
            <input type="text" name="phone" id="number" placeholder="+8801245530" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>

        <div>
            <div className="flex justify-between mb-2">
                <label  className="text-sm">Slect Your role</label>
                
            </div>
                <select  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" name="role" id="">
                    <option value="">House Owner</option>
                    <option value="">House Renter</option>
                </select>
        </div>
    </div>
    <div className="space-y-2">
        <div>
            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-400">Dont have an account yet?
            <Link to={'/login'} rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Login</Link>.
        </p>
    </div>
</form>
</div>
    </div>
    );
};

export default Register;