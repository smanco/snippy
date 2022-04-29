import styled from '@emotion/styled';

const SpinnerStyled = styled.div`
    float: left;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.02);
    height: 100px;
    vertical-align: middle;
    border-radius: 1px;
    margin-right: 100px;

    :last-child {
        margin-right: 0px;
    }

    .typing_loader {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        -webkit-animation: typing 1s linear infinite alternate;
        -moz-animation: Typing 1s linear infinite alternate;
        -ms-animation: Typing 1s linear infinite alternate;
        animation: typing 1s linear infinite alternate;
        margin: 46px auto; /* Not necessary- its only for layouting*/
        position: relative;
        left: -12px;
    }
    @-webkit-keyframes typing {
        0% {
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        25% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        75% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
        }
    }

    @-moz-keyframes typing {
        0% {
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        25% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        75% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
        }
    }
    @-ms-keyframes typing {
        0% {
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        25% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        75% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
        }
    }

    @keyframes typing {
        0% {
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        25% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
        }
        75% {
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
        }
    }
`;

export default SpinnerStyled;
