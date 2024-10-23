import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonCompoent from "../../components/ButtonCompoent/ButtonCompoent";
import {Image} from 'antd'
import imagelogo from '../../assets/images/logo-login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingCompoent/Loading";
import * as message from "../../components/Message/Message"
import { useEffect } from 'react'

const SignUpPages = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState('');
    const handleOnchangePassword = (value) => {
        setPassword(value)
      }
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
      }
    const [email, setEmail] = useState('');
    const handleOnchangeEmail = (value) => {
      setEmail(value)
    }
    const navigate = useNavigate()
    const handleNavigateSignIn = () => {
      navigate('/sign-in')
    }
    const handleSignUp = () => {
      mutation.mutate({
        email, password, confirmPassword
      })
    }
    const mutation = useMutationHooks(
      data => UserService.signUpUser(data)
    )
    const {data, isPending, isSuccess, isError} = mutation
    useEffect(() => {
      if (isSuccess){
        message.success()
        handleNavigateSignIn()
      }else if (isError) {
        message.error()
      }
    }, [isSuccess, isError])
    
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background:'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
             <div style={{width: '800px', height:'445px', background:'#fff', borderRadius: '6px', display: 'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập vào tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="hoang@gmail.com" value={email} onChange={handleOnchangeEmail}  />
                <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
          </div>
                {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                <Loading isPending={isPending}>
                  <ButtonCompoent
                      disabled={!email.length || !password.length || !confirmPassword.length}
                      onClick={handleSignUp}
                      size={40}
                      styleButton={{background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin:'26px 0 10px'}}
                      textButton={'Đăng Ký'}
                      styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                  >
                  </ButtonCompoent>
                </Loading>
                <p>Bạn đã có tài khoản?<WrapperTextLight onClick={handleNavigateSignIn}>Đăng Nhập</WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
                <Image src={imagelogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
                <h4>Mua sắm lại HoangHiHi</h4>
            </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPages