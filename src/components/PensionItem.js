import "./PensionItem.css";

function PensionItem(props) {
  return (
    <>
      <div className="pension-item-wrapper group">
        <img src={require(`../assets/${props.image}.jpeg`)} alt="" />
        <span className="group-hover:left-8">{props.pensionName}</span>
      </div>
    </>
  );
}

export default PensionItem;
