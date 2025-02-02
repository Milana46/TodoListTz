import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  border: 1px solid #ffffff;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  margin-left: 70px;

  @media (max-width: 390px) {
    flex-direction: column;
    margin-left: 10px;
    padding: 5px;
  }`
;

export const CardWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 390px) {
    align-items: center;
  }`
;

export const AvatarContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  @media (max-width: 390px) {
    width: 150px;
    height: 150px;
  }`
;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
;`
