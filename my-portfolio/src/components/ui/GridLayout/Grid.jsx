/* eslint-disable react/prop-types */
import "./Grid.css";

  const spacing = {
    xsmall: "16px",
    small: "24px",
    medium: "32px",
    large: "64px",
    xlarge: "128px",
    unique: "24px",
  };


  export const Grid = ({ 
    sectionType, 
    gap, 
    paddingTop, 
    paddingBottom, 
    paddingLeft, 
    paddingRight, 
    background,
    children 
  }) => {
    const gapValue = sectionType === "article" ? spacing.xlarge : spacing.large;
    const paddingTopValue = sectionType === "article" ? spacing.large : spacing.xlarge;
    const paddingBottomValue = sectionType === "article" ? spacing.xlarge : spacing.large;
    const paddingLeftValue = sectionType === "article" ? spacing.small : spacing.xsmall;
    const paddingRightValue = sectionType === "article" ? spacing.small : spacing.xsmall;

    const backgroundClass = background === "black" ? "black-background" : "white-background";

    return (
      <div className={`${backgroundClass} grid-section`}
        style={{
          gap: spacing[gap] || gapValue,
          paddingTop: spacing[paddingTop] || paddingTopValue,
          paddingBottom: spacing[paddingBottom] || paddingBottomValue,
          paddingLeft: spacing[paddingLeft] || paddingLeftValue,
          paddingRight: spacing[paddingRight] || paddingRightValue,
        }}
      >
        {children}
      </div>
    );
  };
