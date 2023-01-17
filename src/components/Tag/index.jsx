/**
 * Tag is a function that takes in a prop and returns a div with the className tag and the text of the
 * prop.
 * @returns A React component.
 */
function Tag(props) {
  const tag = props.props;
  return <div className="tag">{tag}</div>;
}

export default Tag;
