import React, { useCallback, useState } from "react";
// Styles
import {
  ErrorMessage,
  InputContainer,
  InputWrap,
  Wrapper,
  BtnWrap,
} from "./AccountDetails.styles";
import "react-phone-number-input/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_account_details } from "./schema";
import PhoneInput from "react-phone-number-input";
const AccountDetails = () => {
  const [phone, setPhone] = useState();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_account_details, {
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
      <p>Account details</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputContainer>
          <label>
            Username<span>*</span>
          </label>
          {errors?.userName?.message && (
            <ErrorMessage visible={errors?.userName?.message}>
              {errors?.userName?.message}
            </ErrorMessage>
          )}
          <InputWrap
            {...register("userName")}
            placeholder="Username"
            disabled
          />
        </InputContainer>
        <InputContainer>
          <label>
            Email<span>*</span>
          </label>
          {errors?.email?.message && (
            <ErrorMessage visible={errors?.email?.message}>
              {errors?.email?.message}
            </ErrorMessage>
          )}
          <InputWrap {...register("email")} placeholder="Email" disabled />
        </InputContainer>
        <InputContainer>
          <label>
            Phone number<span>*</span>
          </label>
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
            disabled
            placeholder="Phone Number"
          />
          <input
            type="tel"
            {...register("phoneNumber")}
            style={{ display: "none" }}
            disabled
          />
        </InputContainer>
        {/* <BtnWrap>
          <button type="submit">Sava change</button>
        </BtnWrap> */}
      </form>
    </Wrapper>
  );
};

export default AccountDetails;
