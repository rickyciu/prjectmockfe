import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const CustomButton = ({ isLoading, onClick, label, type }) => {
  return (
    <Button onClick={onClick} variant="primary" disabled={isLoading} type={type}>
        {isLoading ? <Spinner
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /> : null}
        {isLoading ? "Loading" : label}
      </Button>
  );
};

export default CustomButton;