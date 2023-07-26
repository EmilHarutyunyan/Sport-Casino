import React, { useEffect } from "react";
// Styles
import {
  HeadWrap,
  ViewItem,
  ViewKey,
  ViewValue,
  ViewWrap,
  WalletWrap,
  Wrapper,
} from "./ViewPerson.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import arrowBackImg from "../../assets/images/arrowBack.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../app/features/user/userActions";
import { selectUser } from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import TokenService from "../../services/token.service";
import { useState } from "react";
const ViewPerson = () => {
  const { id } = useParams();
  const { userDetails, loading } = useSelector(selectUser);
  
  const [data,setData] = useState(null)
  
  // const { state: info } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!id) {
    navigate(-1);
  }
  useEffect(() => {
    dispatch(getUserDetails(id));
    return () => setData(null)
  }, []);
  useEffect(() => {
    
    if(userDetails) {
      if(userDetails.user_role!=='player') {
        const { balance:wallets, email, full_name, user_name, players, phone_number,user_role } =userDetails;
        setData({
          wallets,
          email,
          full_name,
          user_name,
          players: players.length,
          phone_number,
        });
      }
    }
  }, [userDetails]);
  if (loading) {
    return <Spinner />;
  }
  
  return (
    <Wrapper>
      {data !== null ? (
        <>
          <HeadWrap>
            <img src={arrowBackImg} alt="arrow" onClick={() => navigate(-1)} />
            <h2>
              <span>{userDetails?.user_role.split("_").join(" ")} </span>
              {data?.user_name}
            </h2>
          </HeadWrap>
          <ViewWrap>
            {Object.keys(data).map((key) => {
              
              let firstName = key
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <ViewItem>
                  <ViewKey>{firstName}</ViewKey>
                  {key === "wallets" || key === "balance" ? (
                    <WalletWrap>
                      <p>
                        <span>Ballance</span>
                        <span>{data[`${key}`]}</span>
                      </p>
                      
                    </WalletWrap>
                  ) : (
                    <ViewValue>{data[`${key}`]}</ViewValue>
                  )}
                </ViewItem>
              );
            })}
          </ViewWrap>
        </>
      ) : null}
    </Wrapper>
  );
};

export default ViewPerson;