import styled from "styled-components";

interface IStyle {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  display?: string | "flex";
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  flexDirection?: string; //flex-box안에 내용들을 정렬해주는애
  boxSizing? : string;
  verticalAlign?: string;
  fontWeight?: string;
}

export const Wrapper = styled.div`
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
  margin: ${(props: IStyle) => (props.margin ? props.margin : null)};
  padding: ${(props: IStyle) => (props.padding ? props.padding : null)};
  display: ${(props: IStyle) => (props.display ? props.display : null)};
  align-items: ${(props: IStyle) =>  props.alignItems ? props.alignItems : null};
  justify-content: ${(props: IStyle) =>  props.justifyContent ? props.justifyContent : null};
  background-color: ${(props: IStyle) =>  props.backgroundColor ? props.backgroundColor : null};
  vertical-align: ${(props: IStyle) =>  props.verticalAlign ? props.verticalAlign : null};
  
`;

export const Box = styled.div`
  position: relative;
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
  margin: ${(props: IStyle) => (props.margin ? props.margin : null)};
  padding: ${(props: IStyle) => (props.padding ? props.padding : null)};
  display: ${(props: IStyle) => (props.display ? props.display : null)};
  flex-direction: ${(props: IStyle) =>  props.flexDirection ? props.flexDirection : null};
  align-items: ${(props: IStyle) =>  props.alignItems ? props.alignItems : null};
  justify-content: ${(props: IStyle) =>  props.justifyContent ? props.justifyContent : null};
  background-color: ${(props: IStyle) =>  props.backgroundColor ? props.backgroundColor : null};
  border: ${(props: IStyle) => (props.border ? props.border : null)};
  border-radius: ${(props: IStyle) =>  props.borderRadius ? props.borderRadius : null};
  box-sizing :  ${(props: IStyle) =>  props.boxSizing ? props.boxSizing : null};
  vertical-align: ${(props: IStyle) =>  props.verticalAlign ? props.verticalAlign : null};
`;

export const Input = styled.input`
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
  margin: ${(props: IStyle) => (props.margin ? props.margin : null)};
  padding: ${(props: IStyle) => (props.padding ? props.padding : null)};
  outline-style: none;
  border: none;
  border-radius: ${(props: IStyle) =>  props.borderRadius ? props.borderRadius : null};
`;

export const Button = styled.button`
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
  margin: ${(props: IStyle) => (props.margin ? props.margin : null)};
  padding: ${(props: IStyle) => (props.padding ? props.padding : null)};
  background-color: none;
  border-radius: ${(props: IStyle) =>  props.borderRadius ? props.borderRadius : null};
  border: none;
  align-items: ${(props: IStyle) =>  props.alignItems ? props.alignItems : null};
  `;

export const Card = styled.div`
  position: absolute;
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
  margin: ${(props: IStyle) => (props.margin ? props.margin : null)};
  padding: ${(props: IStyle) => (props.padding ? props.padding : null)};
  display: ${(props: IStyle) => (props.display ? props.display : null)};
  flex-direction: ${(props: IStyle) =>  props.flexDirection ? props.flexDirection : null};
  align-items: ${(props: IStyle) =>  props.alignItems ? props.alignItems : null};
  justify-content: ${(props: IStyle) =>  props.justifyContent ? props.justifyContent : null};
  background-color: ${(props: IStyle) =>  props.backgroundColor ? props.backgroundColor : null};
  border: ${(props: IStyle) => (props.border ? props.border : null)};
  border-radius: ${(props: IStyle) =>  props.borderRadius ? props.borderRadius : null};
`;

export const Text = styled.text`
  width: ${(props: IStyle) => (props.width ? props.width : null)};
  height: ${(props: IStyle) => (props.height ? props.height : null)};
 
`;