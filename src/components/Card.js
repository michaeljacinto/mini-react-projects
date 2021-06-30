import { Pane } from "evergreen-ui";

const Card = (props) => (
  <Pane clearfix>
    <Pane
      elevation={0}
      float="left"
      backgroundColor="white"
      width={200}
      height={120}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* <Text>Elevation 0</Text> */}
      {/* <Text size={300}>Flat Panes<Text> */}
      <img src={props.sprite} alt=""></img>
    </Pane>
  </Pane>
);

export default Card;
