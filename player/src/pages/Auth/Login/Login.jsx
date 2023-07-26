import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_signIn } from "../authShema";
import {
  Container,
  ErrorMessage,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  Wrapper,
} from "../auth.styles";
import eyeShow from "../../../assets/images/eyeShow.png";
import eyeHide from "../../../assets/images/eyeHide.png";
import PlatformMost from "../../../components/PlatformMost";
import { CALL_AGENT } from "../../../router/route-path";

const Login = ({ closeModalLogin, openModalForgot, openModalRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  // const { loading, userInfo, error } = useSelector((state) => state.user)
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const fromPage = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_signIn),
  });

  console.log("errors :", errors);

  // redirect authenticated user to profile screen
  // useEffect(() => {

  //   if (userInfo) {
  //     navigate(fromPage, { replace: true });
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate, userInfo])

  const submitForm = (data) => {
  

    // dispatch(userLogin(data))
    // TokenService.setUser(data);
    // // Demonstration
    //  navigate(fromPage, { replace: true });
  };
  return (
    <Wrapper>
      <Container>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            {errors?.email?.message && (
              <ErrorMessage visible={errors?.email?.message}>
                {errors?.email?.message}
              </ErrorMessage>
            )}
            <InputWrap {...register("email")} placeholder="Email" />
          </InputContainer>
          <InputContainer>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputEye>
              <InputWrap
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <EyeWrap
                className="show-reset-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src={eyeShow}
                    className="show-password-eye"
                    alt="show password eye"
                  />
                ) : (
                  <img
                    src={eyeHide}
                    className="hide-password-eye"
                    alt="hide password eye"
                  />
                )}
              </EyeWrap>
              <Link
                to={CALL_AGENT}
                target="_blank"
                className="callAgent"
                
              >
                Forgot password
              </Link>
            </InputEye>
          </InputContainer>
          <button type="submit">Login</button>
          <p className="info">
            You can Sign Up
            <Link
              to={CALL_AGENT}
              target="_blank"
              
            >
              here
            </Link>
            .
          </p>
        </form>
      </Container>
      <PlatformMost />
    </Wrapper>
  );
};

export default Login;
