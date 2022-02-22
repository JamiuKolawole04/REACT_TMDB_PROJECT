import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// styles with styled components
import { Wrapper, Content } from "./Breadcrumb.styles";

const BreadCrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}
export default BreadCrumb;