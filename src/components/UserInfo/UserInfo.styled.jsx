import styled from "styled-components";
import * as palette from '../../variables/Variables';


export const UserInfoList = styled.ul`
list-style: none;
display: flex;
li {
    margin-left: 15px;
}
@media screen (and min-width 768px)
li {
    margin-right: 20px;
}`;

export const UserText = styled.h2`
font-style: normal;
font-weight: 700;
font-size: ${palette.TEXT_FONTSIZE};
line-height: 2.2;
text-align: right;
letter-spacing: 0.04em;

color: ${palette.MAIN_COLOR};

}`;

export const VerticalLine = styled.div`
display: block;
    height: 32px;
    border-right: 2px solid;
    border-color: ${palette.SECONDARY_COLOR}`;

export const UserExit = styled.button`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 2.2;
letter-spacing: 0.04em;

color: ${palette.SECONDARY_COLOR};
`;