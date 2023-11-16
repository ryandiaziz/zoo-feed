/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/elements/input'
import Button from '../../components/elements/button';
import FormAuth from '../../components/fragments/FormAuth';
import Loading from '../../components/elements/loading'
import Overlay from '../../components/elements/overlay';
import AuthLayout from '../../components/layouts/AuthLayout';
import AuthFooter from '../../components/elements/authFooter';
import { login } from '../../redux/authSlice'
import { setmodalsignin, setmodalsignup } from '../../redux/menuSlice'


const SignInPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLogin, loading } = useSelector((state) => state.auth)
    const { isModalSignInOpen } = useSelector((state) => state.menu)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const submitHandler = () => {
        dispatch(login(form))
    }

    const signupHandler = () => {
        dispatch(setmodalsignin(false))
        dispatch(setmodalsignup(true))
    }

    useEffect(() => {
        if (isModalSignInOpen) document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isModalSignInOpen])

    useEffect(() => {
        if (isLogin) {
            dispatch(setmodalsignin(false))
            navigate("/")
        }
    }, [isLogin])

    return (
        isModalSignInOpen &&
        <>
            <AuthLayout text='Welcome' onClick={() => dispatch(setmodalsignin(false))}>
                <FormAuth >
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
                        name='Sign In'
                        type='submit'
                        isFull={true}
                        onClick={submitHandler}
                        disabled={loading.login ? true : false}
                    >
                        {loading.login ? <Loading /> : "Sign in"}
                    </Button>
                    <AuthFooter
                        name='Sign Up'
                        text='Don’t have an account yet?'
                        onClick={signupHandler}
                    />
                </FormAuth>
            </AuthLayout>
            <Overlay />
        </>
    )
}

export default SignInPage