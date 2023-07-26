import React, { useCallback, useState } from 'react'
// Styles
import "react-phone-number-input/style.css";
import {
  Wrapper,
  HeadWrap,
  FormWrap,
  BtnWrap,
  Container,
  InputContainer,
  ErrorMessage,
  InputWrap,
} from "./EditPerson.styles";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import arrowBackImg from "../../assets/images/arrowBack.png";
import PhoneInput from "react-phone-number-input";
import { schema_edit } from './schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const EditPerson = () => {
  const { id } = useParams();
   const [phone, setPhone] = useState();
  const { state: roleState } = useLocation();
  const navigate = useNavigate();
  if (!roleState && !roleState.title && !roleState.role) {
    navigate(-1);
  }
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_edit, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });
  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phone]
  );
   const submitForm = (data) => {
     
   };
  return (
    <Wrapper>
      <HeadWrap>
        <img src={arrowBackImg} alt="arrow" onClick={() => navigate(-1)} />
        <h2>{roleState.title}</h2>
      </HeadWrap>
      <FormWrap onSubmit={handleSubmit(submitForm)}>
        <Container>
          <InputContainer>
            <label>Full Name</label>

            {errors?.fullName?.message && (
              <ErrorMessage visible={errors?.fullName?.message}>
                {errors?.fullName?.message}
              </ErrorMessage>
            )}

            <InputWrap
              error={errors?.fullName?.message}
              placeholder="Full name"
              {...register("fullName")}
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            {errors?.email?.message && (
              <ErrorMessage visible={errors?.email?.message}>
                {errors?.email?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.email?.message}
              placeholder="Email"
              {...register("email")}
            />
          </InputContainer>
          <InputContainer error={errors?.phoneNumber?.message}>
            <label>Phone</label>
            {errors?.phoneNumber?.message && (
              <ErrorMessage visible={errors?.phoneNumber?.message}>
                {errors?.phoneNumber?.message}
              </ErrorMessage>
            )}
            <PhoneInput
              value={phone}
              onChange={(value) => {
                handleInputChange("phoneNumber", value);
                setPhone(value);
              }}
              placeholder="Phone Number"
            />
            <input
              type="tel"
              {...register("phoneNumber")}
              style={{ display: "none" }}
            />
          </InputContainer>
          <InputContainer>
            <label>User name</label>
            {errors?.userName?.message && (
              <ErrorMessage visible={errors?.userName?.message}>
                {errors?.userName?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.userName?.message}
              placeholder="Create username"
              {...register("userName")}
            />
          </InputContainer>
          <InputContainer>
            <label>Sports Shares</label>
            {errors?.sportsShares?.message && (
              <ErrorMessage visible={errors?.sportsShares?.message}>
                {errors?.sportsShares?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.sportsShares?.message}
              placeholder="0"
              {...register("sportsShares")}
              type="number"
            />
          </InputContainer>
          <InputContainer>
            <label>Casino Shares</label>
            {errors?.casinoShares?.message && (
              <ErrorMessage visible={errors?.casinoShares?.message}>
                {errors?.casinoShares?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.casinoShares?.message}
              placeholder="0"
              {...register("casinoShares")}
              type="number"
            />
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.password?.message}
              placeholder="Create password"
              {...register("password")}
            />
          </InputContainer>
          <InputContainer>
            <label>Repeat Password</label>
            {errors?.confirmPwd?.message && (
              <ErrorMessage visible={errors?.confirmPwd?.message}>
                {errors?.confirmPwd?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.confirmPwd?.message}
              placeholder="Repeat new password"
              {...register("confirmPwd")}
            />
          </InputContainer>
          <InputContainer>
            <label>Created</label>

            <InputWrap disabled placeholder="12 May 2023" type="text" />
          </InputContainer>
        </Container>
        <BtnWrap>
          <button>Cancel</button>
          <button type="submit">Create</button>
        </BtnWrap>
      </FormWrap>
    </Wrapper>
  );
}

export default EditPerson