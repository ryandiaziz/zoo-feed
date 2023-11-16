/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/elements/input'
import Button from '../../components/elements/button'
import FormAuth from '../../components/fragments/FormAuth'
import AuthLayout from '../../components/layouts/AuthLayout'
import AuthFooter from '../../components/elements/authFooter'
import Overlay from '../../components/elements/overlay'
import Loading from '../../components/elements/loading'
import { setmodalsignup, setmodalsignin } from '../../redux/menuSlice'
import { createUser } from '../../redux/authSlice'

const SignUpPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isModalSignUpOpen } = useSelector((state) => state.menu)
    const { isLogin, loading } = useSelector((state) => state.auth)

    const { roleId } = params;
    const [form, setForm] = useState({
        name: "",
        age: 0,
        email: "",
        password: "",
        roleId: roleId,
    });

    const submitHandler = () => {
        dispatch(createUser(form))
    };

    const signinHandler = () => {
        dispatch(setmodalsignup(false))
        dispatch(setmodalsignin(true))
    }

    useEffect(() => {
        if (isModalSignUpOpen) document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isModalSignUpOpen])

    useEffect(() => {
        if (isLogin) {
            navigate("/")
            dispatch(setmodalsignup(false))
        }
    }, [isLogin])
    return (
        isModalSignUpOpen &&
        <>
            <AuthLayout text='Sign up for an account' onClick={() => dispatch(setmodalsignup(false))}>
                <FormAuth>
                    <Input
                        type='text'
                        label='Name'
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <Input
                        type='number'
                        label='Age'
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                    />
                    <Input
                        type='email'
                        label='Email'
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <Input
                        type='password'
                        label='Password'
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <Button
                        name='Sign Up'
                        type='submit'
                        isFull={true}
                        onClick={submitHandler}
                        disabled={loading.create ? true : false}
                    >
                        {loading.create ? <Loading /> : "Sign Up"}
                    </Button>
                    <p className='text-[12px] text-slate-500 text-center font-light'>By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings</p>
                    <AuthFooter
                        text='Already have an account?'
                        name='Sign In'
                        onClick={signinHandler}
                    />
                </FormAuth>
            </AuthLayout>
            <Overlay />
        </>
    )
}

export default SignUpPage