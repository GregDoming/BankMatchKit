import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" {...props} ref={ref} />;
})

export default Transition