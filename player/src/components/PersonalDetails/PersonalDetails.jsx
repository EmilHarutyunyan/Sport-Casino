import React, { useCallback, useState } from "react";
// Styles
import {
  ErrorMessage,
  InputContainer,
  InputWrap,
  Wrapper,
  BtnWrap,
  InputColumns,
} from "./PersonalDetails.styles";
// Images
import downArray from "../../assets/images/Down_Arrow.png";
import userIcon from "../../assets/images/user.png";
import { CountryDropdown } from "react-country-region-selector";
// import { schema_signUp_second } from "../authShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PenIcon } from "../Icons/Icons";
import { schema_personal_details } from "./schema";
const PersonalDetails = () => {
  const [country, setCountry] = useState("");
  const [file, setFile] = useState("");
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_personal_details, {
      stripUnknown: true,
      abortEarly: false,
    }),
    defaultValues: {
      image: null,
    },
  });
  const { onChange: onChangeImage } = register("image");

  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [country]
  );
  const submitForm = (data) => {

  };
  return (
    <Wrapper>
      <p>Personal details</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputColumns>
          {/* <InputContainer className="inputImage">
            <img src={file ? URL.createObjectURL(file) : userIcon} alt="User" />
            <label htmlFor="user-image">
              <PenIcon /> Change profile image
            </label>
            {errors?.image?.message && (
              <ErrorMessage visible={errors?.image?.message}>
                {errors?.image?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="file"
              id="user-image"
              {...register("image")}
              placeholder="Image"
              style={{ display: "none" }}
              onChange={(e) => {
                onChangeImage(e);
                setFile(e.target.files[0]);
              }}

            />
          </InputContainer> */}
        </InputColumns>
        <InputContainer>
          <label>
            First name<span>*</span>
          </label>
          {errors?.firstName?.message && (
            <ErrorMessage visible={errors?.firstName?.message}>
              {errors?.firstName?.message}
            </ErrorMessage>
          )}
          <InputWrap
            {...register("firstName")}
            placeholder="First name"
            disabled
          />
        </InputContainer>

        <InputContainer>
          <label>
            Last name<span>*</span>
          </label>
          {errors?.lastName?.message && (
            <ErrorMessage visible={errors?.lastName?.message}>
              {errors?.lastName?.message}
            </ErrorMessage>
          )}
          <InputWrap
            {...register("lastName")}
            placeholder="Last name"
            disabled
          />
        </InputContainer>
        <InputContainer>
          <label>
            Country<span>*</span>
          </label>
          {errors?.country?.message && (
            <ErrorMessage visible={errors?.country?.message}>
              {errors?.country?.message}
            </ErrorMessage>
          )}
          <InputWrap
            {...register("country")}
            placeholder="Country"
            style={{ display: "none" }}
            disabled
          />
          <CountryDropdown
            value={country}
            onChange={(val) => {
              handleInputChange("country", val);
              setCountry(val);
            }}
            style={{
              backgroundImage: `url(
                  ${downArray}
                ) no-repeat`,
            }}
            id="country"
            disabled
          />
        </InputContainer>
        <InputContainer>
          <label>
            Day<span>*</span>
          </label>
          {errors?.day?.message && (
            <ErrorMessage visible={errors?.day?.message}>
              {errors?.day?.message}
            </ErrorMessage>
          )}
          <InputWrap {...register("day")} placeholder="Day" disabled />
        </InputContainer>
        <InputContainer>
          <label>
            Mount<span>*</span>
          </label>
          {errors?.mount?.message && (
            <ErrorMessage visible={errors?.mount?.message}>
              {errors?.mount?.message}
            </ErrorMessage>
          )}
          <InputWrap {...register("mount")} placeholder="Mount" disabled />
        </InputContainer>
        <InputContainer>
          <label>
            Year<span>*</span>
          </label>
          {errors?.year?.message && (
            <ErrorMessage visible={errors?.year?.message}>
              {errors?.year?.message}
            </ErrorMessage>
          )}
          <InputWrap {...register("year")} placeholder="Year" disabled />
        </InputContainer>
        {/* </InputContainer> */}
        {/* </InputColumns> */}

        {/* <BtnWrap>
          <button type="submit">Save change</button>
        </BtnWrap> */}
      </form>
    </Wrapper>
  );
};

export default PersonalDetails;
