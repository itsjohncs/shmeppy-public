import type {ReactElement} from "react";

import "./RollButton.css";

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function RollButton(props: Props): ReactElement {
    return (
        <button
            className="button-base dice-tray-roll-button"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            Roll
        </button>
    );
}
