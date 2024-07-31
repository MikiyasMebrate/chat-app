import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

import {Navigate} from 'react-router-dom'




const schema = yup.object({
    phone : yup.string().min(1).required(),
    password : yup.string().min(3).required()
})
const Login = () => {

    const {loginUser, user} = useContext(AuthContext)

    const {register , handleSubmit ,  formState:{isSubmitting , errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data) => {
        try{
            let response = await loginUser(data)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    } 
    return (
        <>
        <div className="auth-bg w-100">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-xl-3 col-lg-4">
                        <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                            <div className="text-white-50">
                                
                            </div>
                            <div className="mt-auto">
                                <img src="assets/images/auth-img.png" alt="" className="auth-img" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-9 col-lg-8">
                        <div className="authentication-page-content">
                            <div className="d-flex flex-column h-100 px-4 pt-4">
                                <div className="row justify-content-center my-auto">
                                    <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                                        
                                        <div className="py-md-5 py-4">
                                            
                                            <div className="text-center mb-5">
                                                <h3>Welcome Back !</h3>
                                                <p className="text-muted">Sign in to continue to Doot.</p>
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit) }>
                                                <div className="mb-3">
                                                    <label for="username" className="form-label">Phone Number</label>
                                                    <input type="text" className={`form-control   ${errors.phone ? 'is-invalid' : ''}`} {...register('phone')} placeholder="Enter username" />
                                                    {errors.phone && <p className='text-danger'> {errors.phone.message} </p>}
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                                                    </div>
                                                    <label for="userpassword" className="form-label">Password</label>
                                                    <div className="mb-3">
                                                        <input type="password" className={`form-control   ${errors.password ? 'is-invalid' : ''}`} placeholder="Enter Password" {...register('password')} />
                                                    </div>
                                                    {errors.password && <p className='text-danger'> {errors.password.message} </p>}
                                                </div>
            
                                                
                                                <div className="text-center mt-4">
                                                    <button disabled={isSubmitting} className="btn btn-primary w-100" type="submit">{isSubmitting ? 'Loading' : 'Login'}</button>
                                                </div>
                                                {user && <Navigate to={"/"}/>}
                                            </form>
            
                                            <div className="mt-5 text-center text-muted">
                                                <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-decoration-underline"> Register</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="text-center text-muted p-4">
                                            <p className="mb-0">&copy; <script>document.write(new Date().getFullYear())</script> Doot. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        </>
    );
}
 
export default Login;