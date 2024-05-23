import type {InputHTMLAttributes, ReactElement} from "react";

import "./RollReasonInput.css";
import {Except} from "type-fest";
import {classNames} from "@shmeppy/client-utils";

type Props = Except<
    InputHTMLAttributes<HTMLInputElement>,
    "placeholder" | "enterKeyHint"
>;

export default function RollReasonInput(props: Props): ReactElement {
    return (
        <input
            className={classNames("roll-reason-input", props.className)}
            placeholder="Reason for Roll"
            enterKeyHint="send"
            {...props}
        />
    );
}
