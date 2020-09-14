import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 800px;
    margin: 120px auto 0;
`;

export const Image = styled.div`
    display: flex;
    width: 300px;
    height: 100%;

    > img {
        object-fit: cover;
        object-position: center;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`;

interface Props {
    alive?: boolean;
}

export const Info = styled.div<Props>`
    border: 1px solid rgb(36, 40, 47);
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    width: 400px;
    padding: 16px 24px;

    > .name {
        > p {
            font-weight: bold;
            font-size: 28px;
            color: rgb(36, 40, 47);
        }
    }

    > .status {
        margin-top: 8px;

        > p {
            font-size: 16px;
            font-weight: bold;
            color: ${(props) => (props.alive ? 'rgb(85, 204, 68)' : 'rgb(214, 61, 46)')};
        }
    }

    > .species {
        margin-top: 24px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 16px;
        }

        > p {
            font-size: 18px;
            color: rgb(36, 40, 47);
            font-weight: bold;
        }
    }

    > .location {
        margin-top: 18px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 16px;
        }

        > p {
            font-size: 18px;
            color: rgb(36, 40, 47);
            font-weight: bold;
        }
    }

    > .first-seen {
        margin-top: 18px;

        > span {
            color: rgba(36, 40, 47, 0.7);
            display: block; 
            font-size: 16px;
        }

        > p {
            font-size: 18px;
            color: rgb(36, 40, 47);
            font-weight: bold;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;

