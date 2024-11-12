/* eslint-disable react/prop-types */
import "./Grid.css";

export const Grid = ({ 
  background, 
  children 
}) => {
  const backgroundClass = background === "black" ? "black-background" : "white-background";

  return (
    <div className={`${backgroundClass} grid-section`}>
      {children}
    </div>
  );
};


  // const spacing = {
  //   xsmall: "16px",
  //   small: "24px",
  //   medium: "32px",
  //   large: "64px",
  //   xlarge: "128px",
  //   unique: "24px",
  // };


  // export const Grid = ({ 
  //   sectionType, 
  //   paddingTop, 
  //   paddingBottom, 
  //   paddingLeft, 
  //   paddingRight, 
  //   background,
  //   children 
  // }) => {

  //   const paddingTopValue = paddingTop || (sectionType === "article" ? spacing.xlarge : spacing.large);
  //   const paddingBottomValue = paddingBottom || (sectionType === "article" ? spacing.xlarge : spacing.large);
  //   const paddingLeftValue = paddingLeft || (sectionType === "article" ? spacing.small : spacing.xsmall);
  //   const paddingRightValue = paddingRight || (sectionType === "article" ? spacing.small : spacing.xsmall);

  //   const backgroundClass = background === "black" ? "black-background" : "white-background";

  //   return (
  //     <div className={`${backgroundClass} grid-section`}
  //       style={{
  //         paddingTop: paddingTopValue,
  //         paddingBottom: paddingBottomValue,
  //         paddingLeft: paddingLeftValue,
  //         paddingRight: paddingRightValue,
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
  // };
