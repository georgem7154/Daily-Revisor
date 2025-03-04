import propTypes from 'prop-types';
function Priority(props) {
    return(
        <div className="mt-5">
            <div className="prioritylabel">PRIORITY {props.lvl} :-</div>
            <div className="">
              <textarea className="txtinput" />
            </div>
          </div>
    );
 
}
Priority.propTypes = {
    lvl: propTypes.number.isRequired,
}

export default Priority;