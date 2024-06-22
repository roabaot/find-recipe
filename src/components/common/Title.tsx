const Title = ({
  subTitle,
  mainTitle,
  shadow = false,
}: {
  subTitle?: string;
  mainTitle?: string;
  shadow?: boolean;
}) => {
  return (
    <div className="title">
      <div
        className="sub-title"
        style={shadow ? { textShadow: "1px 1px 0px black" } : {}}
      >
        {subTitle}
      </div>
      <div
        className="main-title"
        style={shadow ? { textShadow: "3px 3px 0px black" } : {}}
      >
        {mainTitle}
      </div>
    </div>
  );
};

export default Title;
