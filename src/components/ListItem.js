/*we destructure the props and directly put ({name}) intead of (props) first and {props.name} then */
export default function ListItem({ name }) {
  return <div>{name}</div>;
}
