import { Pane } from "evergreen-ui";

const Card = (props) => /* return <div>Hello {props.shiny_img}</div>*/ /* console.log(props);*/ /* console.log('hi');*/(
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
      {/* <script>console.log({props.sprite1})</script> */}
      {/* <img src={props.sprite1} alt={props.sprite1}></img> */}
      <img src={props.img} alt=""></img>
      {/* <h1>hi {props}</h1> */}
    </Pane>
  </Pane>
);

export default Card;
